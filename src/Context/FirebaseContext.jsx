import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/fireBaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [changes, setChanges] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = (category) => {
    setProduct(null);
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      const productList = resp.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setIsLoading(false);
    });
  };

  const getProductById = (id) => {
    setIsLoading(true);
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
        setIsLoading(false);
      }
    });
  };

  const addProductDB = (product) => {
    addDoc(collection(db, "products"), product);
    setChanges(!changes);
  };

  const addOrderDB = (order) => {
    addDoc(collection(db, "orders"), order);
    setChanges(!changes);
  };

  const objectValue = {
    product,
    products,
    changes,
    isLoading,
    getProductById,
    getProductsDB,
    addProductDB,
    addOrderDB,
  };

  return (
    <FirebaseContext.Provider value={objectValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
