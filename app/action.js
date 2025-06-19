"use server";


import { prisma}  from "@/lib/prisma";

export async function createProduct(data) {
  console.log("Received data:", data); // Add this
  const { name, price, brand } = data;

  if (!name || !price || !brand) {
    throw new Error("Missing required fields: name, price, or brand");
  }

  await prisma.product.create({
    data: {
      name,
      price:  price.toString(),
      brand,
    },
  });
}


export  async function getProducts() {
    const products = await prisma.product.findMany();
    return products;
}