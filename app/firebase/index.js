import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBvGdw4ZvNsZdPezPIzLvK1P4CeCUtQfaw",
    authDomain: "todo-app-76f19.firebaseapp.com",
    databaseURL: "https://todo-app-76f19.firebaseio.com",
    projectId: "todo-app-76f19",
    storageBucket: "todo-app-76f19.appspot.com",
    messagingSenderId: "1049078248652"
  };
  firebase.initializeApp(config);

} catch (e) {

}




export var firebaseRef = firebase.database().ref();
export default firebase;
