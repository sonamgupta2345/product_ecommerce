import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductSkeletonCard from "../components/ProductSkeletonCard";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch(() => {
        setCategories([]);
      });
  }, []);

  // Fetch products
  useEffect(
    () => {
    let API = ""
    if(slug){
    API= `https://dummyjson.com/products/category/${slug}`
    }
    else{
     API = "https://dummyjson.com/products"
    }
     
      

    setLoading(true);
    axios.get(API)
      .then((response) => {
        setLoading(true)
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-5 gap-4">
      
      {/* Categories */}
      <ul className="col-span-1">
        <Link  to="/">
            
            <li className="bg-teal-400 cursor-pointer py-3 my-2 text-center text-white rounded-2xl">
              All
            </li>
             
          </Link>
          {

        categories.map((cat) => {
          return(
              <Link to={`/${cat.slug}`}>
            
            <li className="bg-teal-400 cursor-pointer py-3 my-2 text-center text-white rounded-2xl">
              {cat.name}
            </li>
             
          </Link>
          )
         
})
        }
      
      
      </ul>

      {/* Products */}
      <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
        loading? 
        [1, 2, 3, 3, 4, 4, 5, 5].map(() => 
              <ProductSkeletonCard  />)
          
          : products.map((prod) => {
              return <ProductCard
                key={prod.id}
                id={prod.id}
                title={prod.title}
                thumbnail={prod.thumbnail}
                price={prod.price}
              />
          })
        }
      </div>
    </div>
  );
}
