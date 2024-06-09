import React from "react";
import { getProducts } from "../dashboard/products/getProducts";
import Link from "next/link";
import { formatPrice } from "../library/functions/formatPrice";

const ProductTable = async () => {
  const products = await getProducts();

  return (
    <div className=" relative z-10 flex flex-row flex-wrap justify-start gap-2 bg-black ">
      <div className=" w-full ">
        {!products.length ? (
          <div className="flex items-center justify-center">
            <span className="text">No products yet...</span>
          </div>
        ) : (
          <table className="table w-full border-collapse">
            {/* head */}
            <thead>
              <tr className="border-b-[rgb(30,35,42)] text-gray-200">
                {/* <th>Product Id</th> */}
                <th className="min-w-[150px] w-full">Name</th>
                <th className="min-w-[150px]">Type</th>
                <th className="min-w-[150px]">Price</th>
                <th className="min-w-[35px]">Stock</th>
                <th className="min-w-[35px]">XS</th>
                <th className="min-w-[35px]">S</th>
                <th className="min-w-[35px]">M</th>
                <th className="min-w-[35px]">L</th>
                <th className="min-w-[35px]">XL</th>
                <th className="min-w-[35px]">XXL</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => {
                const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];
                // Sort the sizes array for each product
                const sortedSizes = product.sizes.sort(
                  (a: any, b: any) =>
                    sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size)
                );

                return (
                  <tr
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
                    <td>
                      <Link href={`/dashboard/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </td>
                    <td>{product.type}</td>
                    <td>{formatPrice(product.price)}</td>
                    <td
                      className={
                        product.stock === 0 ? "text-red-600" : "text-green-600"
                      }
                    >
                      {product.stock}
                    </td>
                    {sortedSizes.map((size: any) => (
                      <td
                        className={
                          size.quantity === 0
                            ? "text-red-600"
                            : "text-green-600"
                        }
                        key={size.size}
                      >
                        {size.quantity}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
