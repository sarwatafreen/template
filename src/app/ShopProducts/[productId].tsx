
// import React from 'react'


//      import Image from 'next/image';
// import { useRouter } from 'next/router';

//  function Products() {
    //  const router = useRouter();
    //  const productId = router.query.productId;
  
    // const products = require('./product/[ProductId]').products;
    //  const product = products.find(p => p.id === parseInt(productId));
  
  //   if (!product) {
  //      return <div>Product not found.</div>;
  //    }
  
  //   return (
  //      <div>
  //        <div className="product-details">
  //          <Image src={product.image} alt={product.name} width={500} height={500} />
  //         <h2>{product.name}</h2>
  //          <p>Price: ${product.price}</p>
  //         <p>{product.description}</p>
  //          <ul>
  //           {product.features.map((feature, index) => (
  //           ))}
  //        </ul>
  //         <button>Add to Cart</button>
  //       </div>
  //     </div>
  //    );
  //  }



//  export default Products


import { useRouter } from "next/router";
import Image from "next/image";
import { products } from "../product";

const ShopProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg p-6 rounded-lg">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside mb-4">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProductDetails;
