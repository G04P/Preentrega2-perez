import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createContext } from "react";
import { db } from "../config/fireBaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [changes, setChanges] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  getProductsDB = (category) => {
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
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
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
