import React from "react";
import { getProducts } from "../dashboard/products/getProducts";
import Link from "next/link";
import { formatPrice } from "../library/functions/formatPrice";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ProductTable = async () => {
  const products = await getProducts();

  return (
    <div className=" relative z-10 flex flex-row flex-wrap justify-start gap-2 bg-black ">
      <div className="overflow-x-auto block">
        {!products.length ? (
          <div className="flex items-center justify-center">
            <span className="text">No products yet...</span>
          </div>
        ) : (
          <Table>
            {/* head */}
            <TableHeader>
              <TableRow className="border-b-[rgb(30,35,42)]">
                {/* <th>Product Id</th> */}
                <TableHead className="">Name</TableHead>
                <TableHead className="">Type</TableHead>
                <TableHead className="">Price</TableHead>
                <TableHead className="">Stock</TableHead>
                <TableHead className="">XS</TableHead>
                <TableHead className="">S</TableHead>
                <TableHead className="">M</TableHead>
                <TableHead className="">L</TableHead>
                <TableHead className="">XL</TableHead>
                <TableHead className="">XXL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product: any) => {
                const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];
                // Sort the sizes array for each product
                const sortedSizes = product.sizes.sort(
                  (a: any, b: any) =>
                    sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size)
                );

                return (
                  <TableRow
                    key={product.id}
                    className=" border-b-[rgb(30,35,42)] odd:bg-[--grey] even:bg-[--bg-gradient]"
                  >
                    {/* <td>
                      <Link
                        href={`dashboard/product/${product.id}`}
                        className="hover:text-gray-200"
                      >
                        {product.id}
                      </Link>
                    </td> */}
                    <TableCell>
                      <Link href={`/dashboard/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{formatPrice(product.price)}</TableCell>
                    <TableCell
                      className={`text-center
                        ${product.stock === 0 ? "text-red-600" : "text-green-600"}
                      `}
                    >
                      {product.stock}
                    </TableCell>
                    {sortedSizes.map((size: any) => (
                      <TableCell
                        className={
                          size.quantity === 0
                            ? "text-red-600"
                            : "text-green-600"
                        }
                        key={size.size}
                      >
                        {size.quantity}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
