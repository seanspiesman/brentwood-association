import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { dataFromSnapshot } from "./firestoreService";

export default function useFirestoreDoc({ query, data, deps }) {
  //   const dispatch = useDispatch(); //for async methods

  useEffect(() => {
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        const docs = dataFromSnapshot(snapshot);
        data(docs);
      },
      (error) => console.log(error)
    );
    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
