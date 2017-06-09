var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() =>{
    localStorage.removeItem('todos');
  });


  it ('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it ('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'Test Settodos',
        complete: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it ('should not set invalid todos array', () => {
      var badtodos = {a: 'b'};
      TodoAPI.setTodos(badtodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'Test Settodos',
        complete: false
      }];

      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Some text',
      completed: true
    },{
      id: 2,
      text: 'Other text',
      completed: false
    },{
      id: 3,
      text: 'other text',
      completed: true
    }];

    it ('should return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, '', true);
      expect(filterTodos.length).toBe(3);
    });

    it ('should return non-completed items if showCompleted is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, '', false);
      expect(filterTodos.length).toBe(1);
    });

    it ('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, 'some', true);
      expect(filteredTodos.length).toBe(1);
    });

    it ('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, '', true);
      expect(filteredTodos.length).toBe(3);
    });

    it ('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, '', true);
      expect(filteredTodos[0].completed).toBe(false);
    });
  });
});
