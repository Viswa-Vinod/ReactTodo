import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAqvm0stmbesIns2h6MFTrhqlng0OsbpSM",
    authDomain: "react-todo-app-2fcec.firebaseapp.com",
    databaseURL: "https://react-todo-app-2fcec.firebaseio.com",
    projectId: "react-todo-app-2fcec",
    storageBucket: "react-todo-app-2fcec.appspot.com",
    messagingSenderId: "585317721856"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

 firebaseRef.set({
 	app: {
 		name: 'Todo App',
 		version: 1.0
 	},
 	isRunning: true,
 	user: {
 		name: 'Vinod',
 		age: 25
 	}
 })

 // firebaseRef.child('user').set({
 // 	name: 'Mike'
 // });

 

//  firebaseRef.child('app').once('value').then((snapshot)=>{
// 	console.log('Got entire DB: ', snapshot.key, snapshot.val());
// 	}, (e)=>{
// 	console.log('Unable to fetch value: ', e);
// // });

// firebaseRef.child('user').on('value', (snapshot)=>{
// 	console.log('Got value: ', snapshot.val());
// });

// firebaseRef.update({
//  	'user/name': 'Kumar'

//  });

// firebaseRef.update({isRunning: false});]]
var notesRef = firebaseRef.child('notes');
var newNoteRef = notesRef.push();
newNoteRef.set({text: 'walk the dog'})

