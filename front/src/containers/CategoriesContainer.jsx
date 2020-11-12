import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import { fetchCategories } from "../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";

const CategoriesContainer = () => {
  const dispatch = useDispatch(); //useDispatch me permite ejecutar los axios creator

  //useEffect ejecuta el codigo que tiene dentro antes que el componente se renderice
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const category = useSelector((state) => state.categoriesReducer.categories);

  return <Categories categories={category} />;
};

export default CategoriesContainer;
