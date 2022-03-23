import { useState, useEffect } from "react";
import { storage, db } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // useEffect se ejecutara cada vez que file cambie de valor
  useEffect(() => {
    // references
    const storageRef = ref(storage, `/files/${file.name}`);
    // const collectionRef = collection(db,'images')
    const uploadTask = uploadBytesResumable(storageRef, file);

    // subimos la imagen, suceden ciertas cosas
    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(storageRef);
        setUrl(url);
        try {
          const docRef = await addDoc(collection(db, "images"), {
            url: url,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    );
  }, [file]);

  // console.log(progress, url, error, "soy url")

  return { progress, url, error };
};

export default useStorage;
