import axios from "axios";

export const postReview = (product, review) => 
  axios.post(`/api/reviews/${product._id}`, review)
  .then(({data}) => console.log(data));


