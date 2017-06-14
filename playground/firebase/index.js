import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBvGdw4ZvNsZdPezPIzLvK1P4CeCUtQfaw",
  authDomain: "todo-app-76f19.firebaseapp.com",
  databaseURL: "https://todo-app-76f19.firebaseio.com",
  projectId: "todo-app-76f19",
  storageBucket: "todo-app-76f19.appspot.com",
  messagingSenderId: "1049078248652"
};
firebase.initializeApp(config);


var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Rad Todo App',
    version: 1.12
  },
  isRunning: true,
  user: {
    name: 'Ravi',
    age: 26
  }
});

firebaseRef.on('value', (snapshot) => {
  console.log('got user data',snapshot.val());
});

firebaseRef.child('user').update({ name: 'Make'});
firebaseRef.child('app').update({name: 'something else'});
