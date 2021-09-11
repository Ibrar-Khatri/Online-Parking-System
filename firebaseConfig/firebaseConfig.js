const firebase = require('firebase')
var admin = require('firebase-admin');
var serviceAccount = require("../online-parking-system-8e146-firebase-adminsdk-q924b-ed6141a5dd.json");


var firebaseConfig = firebase.initializeApp(
    {
        apiKey: "AIzaSyCzIRib2wuOFbq6EbGrEKksZb1qP80JX64",
        authDomain: "online-parking-system-8e146.firebaseapp.com",
        projectId: "online-parking-system-8e146",
        storageBucket: "online-parking-system-8e146.appspot.com",
        messagingSenderId: "510657373183",
        appId: "1:510657373183:web:18730d7720723473257dca",
        measurementId: "G-M3G34TGQD9"
    }
)


var admin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://online-parking-system-8e146-default-rtdb.firebaseio.com"
});

module.exports = firebaseConfig;
module.exports = admin;