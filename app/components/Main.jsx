var React = require('react');

var Main = (props) => {
  return (
    <div>
      <h1>Main Component</h1>
      <div className="row" >
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
