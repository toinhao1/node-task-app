// CRUD Operations

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
    // db.collection('tasks').findOneAndReplace(
    //   { _id: ObjectID('5cbc422acf334b08b6656143') },
    //   { desciption: 'Made Lunches', completed: true },
    //   (error, result) => {
    //     console.log(result);
    //   }
    // );
    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectID('5cbc3ead40bdd507ac174bde')
    //     },
    //     { $inc: { age: 1 } }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // db.collection('tasks')
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then(result => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // db.collection('users')
    //   .deleteMany({ age: 49 })
    //   .then(result => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    db.collection('tasks')
      .deleteOne({ desciption: 'Made Lunches' })
      .then(result => {
        console.log(result.deletedCount);
      })
      .catch(err => {
        console.log(err);
      });
  }
);
