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
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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

/* Authenticate user sign in, sign out, and sign up with firebase */
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
// Observer pattern: (obj, nextCb, errorCb, completeCb);

/* Store the products data in the firebase db */
export const addCollectionAndDocs = async (collectionKey, objects) => {
  const collectionRef = collection(db, collectionKey);
  const wBatch = writeBatch(db); // attach multiple writes to the batch, only when firing off, the transaction begins

  objects.forEach((category) => {
    const ref = doc(collectionRef, category.title.toLowerCase());
    // return a doc ref even if it does not exist yet, just point to that placeholder
    wBatch.set(ref, category); // set a new doc ref for each categroy obj
  });

  await wBatch.commit(); // fire off transaction, atomic
};

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, 'categories');
  const queryReq = query(collectionRef);
  // query snapshot contains the results, can contain 0/1+ DocumentSnapshot objs
  const querySnapshot = await getDocs(queryReq);
  const map = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return map;
};
