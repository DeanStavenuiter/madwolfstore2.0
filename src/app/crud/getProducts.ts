import prisma from "@/app/library/prisma";
import { cache } from "react";

// get all t-shirts
export const getTshirts = cache(async () => {
  const tShirts = await prisma.product.findMany({
    where: {
      type: "tshirt",
    },
    orderBy: {
      id: "desc",
    },
    include: {
      sizes: true,
    },
  });

  return tShirts;
});

//get all Art
export const getArt = cache(async () => {
  const art = await prisma.product.findMany({
    where: {
      type: "print",
    },
    orderBy: {
      id: "asc",
    },
    take: 6,
  });

  return art;
});

// get a product by id
export const getProductById = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      sizes: true,
    },
  });
  return product;
});


//get random products
export const getRandomProducts = cache(async () => {
  const products = await prisma.product.findMany();

  const shuffledProducts = products.sort(() => Math.random() - 0.5);

  return shuffledProducts.slice(0, 8);
});