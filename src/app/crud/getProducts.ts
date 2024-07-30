import  prisma  from '@/app/library/prisma';
import { cache } from 'react';

export interface HomeProps {
}

export const getTshirts = cache(async ({
  // searchParams: { page = '1' },
}: HomeProps) => {
  const currentPage = parseInt('1');
  const pageSize = 6;

  const tShirts = await prisma.product.findMany({
    where: {
      type: 'tshirt',
    },
    orderBy: {
      id: 'desc',
    },
    include: {
      sizes: true,
    },
    // take: 6,
  });

  return tShirts;
});
