import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private collection!: AngularFirestoreCollection<any>;
  private doc!: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) {}

  getAll(path: string): Observable<any[]> {
    this.collection = this.db.collection(path);
    return this.collection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as any;
            const uid = a.payload.doc.id;
            return { uid, ...data };
          });
        })
      );
  }

  getById(id: string, path: string): Observable<any> {
    return this.getAll(path).pipe(
      map(objs => {
        return objs.filter(obj => obj.uid === id)[0];
      })
    );
  }

  getByAuthUid(uid: string): Observable<any> {
    return this.getAll('users').pipe(
      map(objs => {
        return objs.filter(obj => (obj.authUid === uid))[0];
      })
    );
  }

  getByAdmin(uid: string): Observable<any> {
    return this.getAll('users').pipe(
      map(objs => {
        return objs.find(obj => obj.uid === uid && obj.roles.includes('admin'));
      })
    );
  }

  add(obj: any, path: string): Observable<void> {
    this.doc = this.db.doc<any>(`${path}/${obj.uid}`);
    return from(this.doc.set(obj));
  }

  update(obj: any, path: string): Observable<void> {
    this.doc = this.db.doc<any>(`${path}/${obj.uid}`);
    return from(this.doc.update(obj));
  }

  delete(id: string, path: string): Observable<void> {
    this.doc = this.db.doc<any>(`${path}/${id}`);
    return from(this.doc.delete());
  }

  getUid(): string {
    return this.db.createId();
  }

}
