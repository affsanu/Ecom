"use client";
import Layouts from "@/app/components/Layouts";
import ProductForm from "@/app/components/ProductForm";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EditProduct({ params: { id } }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const singleProduct = async () => {
      await axios.get("/api/products/" + id).then((response) => {
        setProduct(response.data.product);
      });
    };

    singleProduct();
  }, []);

  return (
    <Layouts>
      {product && <ProductForm {...product} type="Edit Product" />}
    </Layouts>
  );
}
