import firebase from 'firebase';

try {
	var config = {
    apiKey: "AIzaSyAqvm0stmbesIns2h6MFTrhqlng0OsbpSM",
    authDomain: "react-todo-app-2fcec.firebaseapp.com",
    databaseURL: "https://react-todo-app-2fcec.firebaseio.com",
    projectId: "react-todo-app-2fcec",
    storageBucket: "react-todo-app-2fcec.appspot.com",
    messagingSenderId: "585317721856"
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase; //
