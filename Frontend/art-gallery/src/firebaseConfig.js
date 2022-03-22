import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjS1E9WnJ_KVrp3vKMEtZO_qCgrXq0wvI",
  authDomain: "santart-9b5c9.firebaseapp.com",
  projectId: "santart-9b5c9",
  storageBucket: "santart-9b5c9.appspot.com",
  messagingSenderId: "300497102374",
  appId: "1:300497102374:web:adcc54a278021c490d68e7"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket

const fbFirestore = getFirestore(firebaseApp)
const fbStorage = getStorage();


export { fbStorage, fbFirestore }


