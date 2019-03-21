import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { resolve } from 'url';
import { reject } from 'q';

interface User {
  uid: string;
  email: string;
  displayName?: string;
  admin?: boolean;
  disabled?: boolean;
  direccion?: string;
  photoURL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  public password: string=''; 
  public email: string='';

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
    ) { 
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      
      )

    }

    registerEmail(email: string, pass: string){
        return new Promise ((resolve, reject) => {
          this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
          .then( userData => resolve(userData),
          err => reject(err));
        });
    }
    
   loginEmail(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(userData=>resolve(userData),
      err => reject(err));
    });
   }
   

    async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider)
    return this.updateUserData(credential.user).then((success)=>{
      this.router.navigate(['/home']);
    });
    }
    deleteU(user: User){
      this.afAuth.auth.currentUser.delete()
    }
  
    private updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

      const data: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        admin: false,
        disabled:false,
        direccion: ""
      }
  
      return userRef.set(data, { merge: true })
    }
  
    async signOut() {
      await this.afAuth.auth.signOut();
      this.router.navigate(['/login']);
    }
  
  }

