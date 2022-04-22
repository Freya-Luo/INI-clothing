import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIhMr3D2FueJE7Ol66vWgcgvTha1VUdSw',
  authDomain: 'ini-clothing-db.firebaseapp.com',
  projectId: 'ini-clothing-db',
  storageBucket: 'ini-clothing-db.appspot.com',
  messagingSenderId: '978373102508',
  appId: '1:978373102508:web:91de1b4f2f67a7cb820809',
  measurementId: 'G-VKYGDSH4Z6',
};
// firebase initialization
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

/* Set up Google authentication */
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// create user file
export const createUserFile = async (user, additionalInformation = {}) => {
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) return;

  const { displayName, email } = user;
  const createdAt = new Date();

  try {
    await setDoc(userRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    });
  } catch (err) {
    console.log('Error: creating user -', err.message);
  }
  return userRef;
};

export const signUpUser = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

// call the callback func we provide when "auth" singleton changes
export const onAuthStateChangedListener = (cb) => onAuthStateChanged(auth, cb);
