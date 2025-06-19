
"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {createProduct,  getProducts } from "./action";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();

  async function afterSubmit(data) {
    await createProduct(data);
    reset();
    await getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Added Products</h1>

      <button onClick={createProduct}>Add in DB</button>
      <br />
      <button onClick={getProducts}>Get Products</button>

      <form onSubmit={handleSubmit(afterSubmit)}>
        <input {...register("name")} placeholder="Product Name" />
        <input {...register("price")} placeholder="Product Price" />
        <input {...register("brand")} placeholder="Brand" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}