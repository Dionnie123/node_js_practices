

import FirestoreService from "../utils/firestore_service.js";
import { faker } from '@faker-js/faker';

const firestoreService = new FirestoreService();

 var newPostId = await firestoreService.addDocument('posts', {
  'title' : faker.lorem.sentences(),
  'tags' : [{
    'name' : 'cool',
    'url' : 'tags/cool'
  },{
    'name' : 'awesome',
    'url' : 'tags/awesome'
  }]
});

 await firestoreService.addDocumentSubCollection('posts', newPostId , 'tags', {
  'name' : 'cool',
  'url' : 'tags/cool'
});  

//Read Embed
var posts = await firestoreService.getAllDocuments('posts');
var post = await firestoreService.getDocument('posts', newPostId);
var postSubcolletion = await firestoreService.getDocumentSubcollection('posts', newPostId, 'tags');
console.log(posts);
console.log(post);
console.log(postSubcolletion);

//Read Root
/* var post = await firestoreService.getAllDocumentSubcollection('posts','')

var posts = await firestoreService.getAllDocuments('posts') */
//console.table(posts);



