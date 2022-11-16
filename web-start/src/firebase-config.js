/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCyx3DLXN8uEdIKD4K8zUp0J8vAh6qLcmQ",
  authDomain: "friendlychat-b5f14.firebaseapp.com",
  projectId: "friendlychat-b5f14",
  storageBucket: "friendlychat-b5f14.appspot.com",
  messagingSenderId: "854838812855",
  appId: "1:854838812855:web:3708d3a5ee65d86f912d32"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}