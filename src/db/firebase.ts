import firebase from 'firebase/app'
import 'firebase/firestore'

require('dotenv').config()

const config = {
    apiKey: process.env.NODE_APP_API_KEY,
    authDomain: process.env.NODE_APP_AUTH_DOMAIN,
    projectId: process.env.NODE_APP_PROJECT_ID,
    storageBucket: process.env.NODE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NODE_APP_MESSAGING_SENDER_ID,
    appId: process.env.NODE_APP_APP_ID
}

firebase.initializeApp(config)

const database = firebase.firestore()

export { database, firebase, config }