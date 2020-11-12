import axios from "axios";

const newOrder = (cart) =>
  axios.post("/api/orders", cart).then(({ data }) => console.log(data));

export { newOrder };
