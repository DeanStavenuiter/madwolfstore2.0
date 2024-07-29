import  prisma  from '@/app/library/prisma';
import { cache } from 'react';

export interface HomeProps {
}

export const getProductsWithStock = cache(async ({
  // searchParams: { page = '1' },
}: HomeProps) => {
  const currentPage = parseInt('1');
  const pageSize = 6;

  const productsWithStock = await prisma.product.findMany({
    // where: {
    //   stock: {
    //     gt: 0,
    //   },
    // },
    orderBy: {
      id: 'desc',
    },
    include: {
      sizes: true,
    },
    // skip: (currentPage - 1) * pageSize,
    take: 6,
  });

  return productsWithStock;
});
