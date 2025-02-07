import { createContext,  useContext, useEffect,  useReducer } from "react";
import reducer from "./Reducer";
import axios from "axios";

const A = createContext();
const initial = {
  isloding: false,
  
  product: [],
  singleProducts : [],
  isError: false,
};

const d = "https://fakestoreapi.com/products";
const Aprovder = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const fetchData = async (url) => {
    dispatch({ type: "loading" });
    try {
      const a = await axios.get(url);

      const product = await a.data;
      dispatch({ type: "data", payload: product });
     
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  useEffect(() => {
    fetchData(d);
  }, []);

  const fetchSingleData = async (url) => {
    dispatch({ type: "loading" });
    try {
      const b= await axios.get(url);

      const singleProducts = await b.data;
      dispatch({ type: "singleData", payload:singleProducts });
      
    } catch (error) {
      dispatch({ type: "error" });
    }
  };


  return <A.Provider value={{ ...state, fetchSingleData, fetchData}}>{children}</A.Provider>;
};
const useProduct = () => {
  return useContext(A);
};
export { A, Aprovder, useProduct };
