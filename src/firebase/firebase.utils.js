import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    
        apiKey: "AIzaSyCrRYHEKyAO4FvzmGzkmPua_nh8eOx6XAE",
        authDomain: "crwn-db-7fad7.firebaseapp.com",
        databaseURL: "https://crwn-db-7fad7.firebaseio.com",
        projectId: "crwn-db-7fad7",
        storageBucket: "crwn-db-7fad7.appspot.com",
        messagingSenderId: "663291926585",
        appId: "1:663291926585:web:396eb68f77a1ec6af995e8"
      };

      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (err) {
            console.log('error creating user', err.message); 
          }
        } 
        return userRef; 
        
      };

      firebase.initializeApp(config); 

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider); 

      export default firebase; 


