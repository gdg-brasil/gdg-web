import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  token$: Observable<string | null>;
  adminUser$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: FirestoreService,
  ) {
    this.user$ = this.afAuth.authState;
    this.token$ = this.afAuth.idToken;
    this.adminUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.getByAdmin(user.uid);
        } else {
          return of(null);
        }
      })
    );
  }

  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  logout(): void {
    this.afAuth.signOut();
  }

  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user)
    );
  }

  isAdmin(): Observable<boolean> {
    return this.adminUser$.pipe(
      map(admin => !!admin)
    );
  }

  register(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password)).pipe(
      tap(res => {
        if (res.user) {
        const { emailVerified, uid } = res.user;
        this.firestore.add({email, emailVerified, uid, roles: ['user'] }, 'users');
        }
      })
    );
  }
}
