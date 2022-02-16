import admin from 'firebase-admin';
const serviceAccount = require('../config/firebase.json');

const databaseURL = 'https://tn-challenge-88b9c-default-rtdb.firebaseio.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
  authDomain: "tn-challenge-88b9c.firebaseapp.com",
});

export const db = admin.database();
