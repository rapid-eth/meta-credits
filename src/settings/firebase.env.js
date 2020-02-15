const devEnvironment = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyDpAPc1s65pO3HRAGun5lw3jO0Nfz2QqoI",
    authDomain: "rapid-metacred.firebaseapp.com",
    databaseURL: "https://rapid-metacred.firebaseio.com",
    projectId: "rapid-metacred",
    storageBucket: "rapid-metacred.appspot.com",
    messagingSenderId: "873221625293",
    appId: "1:873221625293:web:151391743a5c3917c7e084"
  }
};
const prdEnvironment = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyDpAPc1s65pO3HRAGun5lw3jO0Nfz2QqoI",
    authDomain: "rapid-metacred.firebaseapp.com",
    databaseURL: "https://rapid-metacred.firebaseio.com",
    projectId: "rapid-metacred",
    storageBucket: "rapid-metacred.appspot.com",
    messagingSenderId: "873221625293",
    appId: "1:873221625293:web:151391743a5c3917c7e084"
  }
};

if (process.env.NODE_ENV === "production") {
  module.exports = prdEnvironment;
} else {
  module.exports = devEnvironment;
}
