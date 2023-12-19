import admin from "firebase-admin";
import { getDocs, collection } from "@firebase/firestore";
class FirestoreService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(
        "../dionniebee-488f2-firebase-adminsdk-n76cj-dc0d09e5ca.json"
      ),
      databaseURL: "https://dionniebee-488f2.firebaseio.com",
    });
    const db = admin.firestore();

    this.db = db;
  }

  dateTimeNow() {
    return admin.firestore.Timestamp.fromDate(new Date());
  }

  geoPoint(latitude, longitude) {
    return new admin.firestore.GeoPoint(latitude, longitude);
  }

  async addDocument(collectionName, documentData) {
    try {
      const collectionRef = this.db.collection(collectionName);
      const docRef = await collectionRef.add(documentData);
      console.log("Document added with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.log("Error adding document:", error);
      throw error;
    }
  }

  async addDocumentSubCollection(
    collectionName,
    documentID,
    collectionId,
    documentData
  ) {
    try {
      const collectionRef = this.db
        .collection(collectionName)
        .doc(documentID)
        .collection(collectionId);
      const docRef = await collectionRef.add(documentData);

      console.log("Document added with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.log("Error adding document:", error);
      throw error;
    }
  }

  async updateDocument(collectionName, documentID, updateData) {
    try {
      const documentRef = this.db.collection(collectionName).doc(documentID);
      await documentRef.update(updateData);
      console.log("Document updated:", documentID);
    } catch (error) {
      console.log("Error updating document:", error);
      throw error;
    }
  }

  async deleteDocument(collectionName, documentID) {
    try {
      const documentRef = this.db.collection(collectionName).doc(documentID);
      await documentRef.delete();
      console.log("Document deleted:", documentID);
    } catch (error) {
      console.log("Error deleting document:", error);
      throw error;
    }
  }

  async getDocument(collectionName, documentID) {
    try {
      const documentRef = this.db.collection(collectionName).doc(documentID);
      const documentSnapshot = await documentRef.get();
      if (documentSnapshot.exists) {
        const documentData = documentSnapshot.data();
        return { id: documentSnapshot.id, ...documentData };
      } else {
        console.log("Document does not exist");
        return null;
      }
    } catch (error) {
      console.log("Error retrieving document:", error);
      throw error;
    }
  }

  async getDocumentSubcollection(collectionName, documentId, collectionId) {
    try {
      const citiesRef = this.db
        .collection(collectionName)
        .doc(documentId)
        .collection(collectionId);
      const snapshot = await citiesRef.get();
      const subCollections = [];

      snapshot.forEach((doc) => {
        const documentData = doc.data();
        subCollections.push({ id: doc.id, ...documentData });
      });

      return subCollections;
    } catch (error) {
      console.error("Error retrieving subcollections:", error);
      throw error;
    }
  }

  async getAllDocuments(collectionName) {
    try {
      const collectionRef = this.db.collection(collectionName).orderBy('date','desc');
      //Filtering Types
      const collectionRef1 = this.db.collection(collectionName).orderBy('date','desc').limit(10);
      const collectionRef2 = this.db.collection(collectionName).orderBy('date','desc').startAfter(this.dateTimeNow - 7);
      const collectionRef3 = this.db.collection(collectionName).where('name','==', 'foo').where('url','==', '/tags/cool');
      const collectionRef4 = this.db.collection(collectionName).where('name','array-contains', 'foo');

      const querySnapshot = await collectionRef.get();
      const documents = [];
      querySnapshot.forEach((documentSnapshot) => {
        const documentData = documentSnapshot.data();
        documents.push({ id: documentSnapshot.id, ...documentData });
      });
      return documents;
    } catch (error) {
      console.log("Error retrieving documents:", error);
      throw error;
    }
  }

  async queryDocuments(collectionName, queryOptions) {
    // Same as before, but with async/await as needed
  }

  subscribeToCollection(collectionName, onChange) {
    // Same as before, but with async/await as needed
  }

  async runTransaction(transactionHandler) {
    // Same as before, but with async/await as needed
  }
}

export default FirestoreService;
