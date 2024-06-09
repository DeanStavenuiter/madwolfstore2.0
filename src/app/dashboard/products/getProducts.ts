import prisma from "@/app/library/prisma";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getProducts = cache(async () => {
  const allProducts = await prisma.product.findMany({
    include: {
      sizes: true,
    },
  });
  
  if (!allProducts) notFound();

  return allProducts;
});

