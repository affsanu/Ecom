"use client";
import Layouts from "@/app/components/Layouts";
import ProductForm from "@/app/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DeleteProduct({ params: { id } }) {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (!id) {
      return;
    }
    const singleProduct = async () => {
      await axios.get("/api/products/" + id).then((response) => {
        setProduct(response.data.product);
      });
    };

    singleProduct();
  }, []);

  const goBack = () => {
    router.push("/products");
  };

  const deleteProduct = async () => {
    await axios.delete("/api/products/" + id);
    goBack();
  };

  return (
    <Layouts>
      {product && (
        <>
          <h2 className="text-center">
            Do you really want to delete product{" "}
            <b className="text-orange-600">"{product.title}"</b> ?
          </h2>
          <div className="flex gap-2 justify-center mt-2">
            <button onClick={deleteProduct} className="btn-red">
              Yes
            </button>
            <button onClick={goBack} className="btn-default">
              No
            </button>
          </div>
        </>
      )}
    </Layouts>
  );
}
