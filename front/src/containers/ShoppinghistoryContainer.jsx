import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Shoppinghistory from "../components/Shoppinghistory";
import { fetchUserOrders } from "../store/actions/ordersAction";

const ShoppingHistoryContainer = () => {
  const { orders } = useSelector((state) => state.ordersReducer);

  useEffect(() => fetchUserOrders(), []); // MEter dispatch una vez que está chequeado qué data llega

  return <Shoppinghistory orders={orders} />;
};

export default ShoppingHistoryContainer;
