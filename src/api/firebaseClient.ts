// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Analytics, getAnalytics } from 'firebase/analytics'
import { connectFirestoreEmulator, Firestore, initializeFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Replace this with your project's configuration
};

class FirebaseClient {
  public readonly app: FirebaseApp
  public readonly analytics: Analytics
  public readonly store: Firestore

  constructor() {
    this.app = initializeApp(firebaseConfig)
    this.store = initializeFirestore(this.app, {
      ignoreUndefinedProperties: true,
    })
    this.analytics = getAnalytics(this.app)

    console.log('environment', process.env.NODE_ENV);
    
    if (process.env.NODE_ENV === 'development') {
      connectFirestoreEmulator(this.store, 'localhost', 8080)
    }
  }
}

export const firebaseClient = new FirebaseClient()
