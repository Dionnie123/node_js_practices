
import admin from 'firebase-admin';
import FirestoreService from "./utils/firestore_service.js";

admin.initializeApp({
  credential: admin.credential.cert("./utils/dionniebee-488f2-firebase-adminsdk-n76cj-dc0d09e5ca.json"),
  databaseURL: 'https://dionniebee-488f2.firebaseio.com'
});

// Get a Firestore instance
const db = admin.firestore();

// Create an instance of FirestoreService
const firestoreService = new FirestoreService(db);

// Usage examples
const documentData = {
  name: "New Event",
  date: admin.firestore.Timestamp.fromDate(new Date()),
};

//await firestoreService.addDocument('events', documentData);
await firestoreService.addDocument('locations', {'point' : {
  'geohash' : 'wdw4g61z540t', 
  'geopoint' : new admin.firestore.GeoPoint(14.55809805, 121.08285511) 
}})

await firestoreService.addDocument('locations', {'point' : {
  'geohash' : 'wdw54sg5sc9m', 
  'geopoint' :  new admin.firestore.GeoPoint(14.616546, 121.051689) 
}})

await firestoreService.addDocument('locations', {
  'point' : {
    'geohash' : 'wdw4sgv890dj', 
    'geopoint' : new admin.firestore.GeoPoint(14.52264193, 121.15383910) 
  }
})

//await firestoreService.deleteDocument('events', 'pNL7nLm7QO7K44q7bNYf');

var events = await firestoreService.getAllDocuments('locations')
console.table(events);



