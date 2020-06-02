const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("./pwadeploy-b3fb7-firebase-adminsdk-kqiti-799536c4e6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pwadeploy-b3fb7.firebaseio.com"
});

exports.userrole = functions.https.onCall((data,context)=>{
    admin.auth().setCustomUserClaims(data.uid,{
        role : data.role
    }).then(()=>{
        admin.auth().getUser(data.uid).then((user)=>{
            console.log(user.customClaims)
        })
    })
})
    