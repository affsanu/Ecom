'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ProductForm({ _id, title: existingTitle, desc: existingDesc, price: existingPrice, type }) {
    const [title, setTitle] = useState(existingTitle || "");
    const [desc, setDesc] = useState(existingDesc || "");
    const [price, setPrice] = useState(existingPrice || "");
    const [goToProducts, setGoToProducts] = useState(false);

    const saveProduct = async (e) => {
        e.preventDefault();
        const data = { title, desc, price };
        if (_id) {
            //update
            await axios.put("/api/products", { ...data, _id });
        } else {
            //create
            await axios.post("/api/products", data);
        }
        setGoToProducts(true);
    };

    if (goToProducts) {
        return redirect("/products");
    }
    return (
        <form onSubmit={saveProduct}>
            <h1>{type}</h1>
            <label>Product Name</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder={existingTitle}
            />
            <label>Description</label>
            <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                placeholder={existingDesc}
            />
            <label>Price (BDT)</label>
            <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder={existingPrice}
            />
            <button type="submit" className="btn-primay">
                Save
            </button>
        </form>
    )
}

