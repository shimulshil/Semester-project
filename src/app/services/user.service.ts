/* eslint-disable @typescript-eslint/naming-convention */
// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collectionName = 'Users';

  constructor(private firestore: AngularFirestore) {}

  create_User(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_Users() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_User(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_User(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
