import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "dev-finances-beta",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}
/*lol
const config = {
    apiKey: "AIzaSyDBoUlIExoPtueMBiqQVwPvJhxgj-mPx7A",
    authDomain: "dev-finances-beta.firebaseapp.com",
    projectId: "dev-finances-beta",
    storageBucket: "dev-finances-beta.appspot.com",
    messagingSenderId: "694724616605",
    appId: "1:694724616605:web:d23a941812b3dd33370f74"
}
*/

if(firebase.apps.length<1) {
    firebase.initializeApp(config)
}

export default firebase
