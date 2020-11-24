import { useEffect } from "react";
import { dataFromSnapshot } from "./firestoreService";

export default function useFirestoreCollection({ query, data, deps }) {
  useEffect(() => {
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => dataFromSnapshot(doc));
        data(docs);
      },
      (error) => console.log(error)
    );
    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
