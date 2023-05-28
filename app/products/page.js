"use client";
import Layouts from "@/app/components/Layouts";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProduct = async () => {
      await axios.get("/api/products").then((response) => {
        setProducts(response.data);
      });
    };

    allProduct();
  }, []);

  return (
    <Layouts>
      <Link
        href="/products/new"
        className="bg-blue-900 rounded-md text-white py-1 px-2"
      >
        Add new product
      </Link>

      <table className="basic mt-2">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{new Date(product.createdAt).toLocaleDateString("in")}</td>
              <td>{product.desc}</td>
              <td className="flex gap-1">
                <Link href={"/products/" + product._id}>
                  <PencilSquareIcon className="h-4 w-4"/>
                  Edit
                  </Link>
                  <Link href={"/products/delete/" + product._id}>
                  <TrashIcon className="h-4 w-4"/>
                  Delete
                  </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layouts>
  );
}
