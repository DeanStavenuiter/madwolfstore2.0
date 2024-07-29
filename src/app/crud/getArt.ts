import prisma from "@/app/library/prisma";
import { cache } from "react";

interface productProps {
  id: number;
  name: string;
  image: string;

}

export const getArt = cache(async () => {
  const art = await prisma.product.findMany({
    where: {
      type: "print",
    },
    orderBy: {
      id: "desc",
    },
    take: 6,
  });

  return art;
});
