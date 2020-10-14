import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import baseUrl from "../utils/baseUrl";

function Home({ products }) {
  return <ProductList products={products} />;
}

//we do not have to wait until the component is displayed to fetch our data
// we can fetch it first on the server by function called getInitialProps which Next makes it available to us
Home.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
