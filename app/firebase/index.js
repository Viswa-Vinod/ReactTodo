import firebase from 'firebase';

try {
	var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
   // projectId: "react-todo-app-2fcec",
    storageBucket: process.env.STORAGE_BUCKET
    //messagingSenderId: "585317721856"
  };
  
  firebase.initializeApp(config);
} catch(e) {

}

//tells firebase to use github login
export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase; //
