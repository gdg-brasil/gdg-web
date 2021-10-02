import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseOptions } from 'firebase/app';
import { FirestoreService } from './firestore.service';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
})
export class FirebaseModule {
  static forRoot(firebaseConfig: FirebaseOptions): ModuleWithProviders<FirebaseModule> {
    return {
      ngModule: FirebaseModule,
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
        FirestoreService,
        StorageService,
        AuthService
      ]
    };
  }
}
