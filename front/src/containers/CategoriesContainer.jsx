import React, {useState,useEffect} from "react";
import Categories from "../components/Categories";
import { fetchCategories } from "../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";

// import { fetchProducts } from "../store/actions/productAction";


const CategoriesContainer = () => {

  const dispatch  = useDispatch()//useDispatch me permite ejecutar los axios creator

  
  //useEffect ejecuta el codigo que tiene dentro antes que el componente se renderice
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const category = useSelector((state) =>state.categoriesReducer.categories) 

 
  return <Categories categories={category} />;
};
  
  export default CategoriesContainer;




// import React from "react";
// import Categories from "../components/Categories";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchProducts } from "../store/actions/productAction";




// const CategoriesContainer = () => {
//     console.log("aqui llegamos")
//     const dataFalse = [
//         {
//           name: "guitarras",
//           image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/171x180"
//         },
//         {
//           name: "bateria",
//           image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/171x180"
//         },
//         {
//           name: "pianos",
//           image: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/171x180"
//         },
//       ]
//      return <Categories categories={dataFalse} />;
//     };
  
//   export default CategoriesContainer;