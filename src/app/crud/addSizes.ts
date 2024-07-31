import prisma from "../library/prisma";

export async function addSizes() {
  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          in: [
            "Demontage 1",
            "Demontage 2",
            "Demontage 3",
            "Demontage 4",
            "Demontage 5",
            "Speaker",
            "Dranghek",
            "Statafel",
            "Spades",
            "Hearts",
          ],
        },
      },
    });

    for (const product of products) {
      let sizesData: any = [];

      switch (product.name) {
        case "Demontage 1":
        case "Demontage 2":
        case "Demontage 3":
          sizesData = [
            { size: "XS", quantity: 0 },
            { size: "S", quantity: 0 },
            { size: "M", quantity: 0 },
            { size: "L", quantity: 0 },
            { size: "XL", quantity: 0 },
            { size: "XXL", quantity: 0 },
          ];
          break;

        case "Demontage 4":
          sizesData = [
            { size: "XS", quantity: 1 },
            { size: "S", quantity: 1 },
            { size: "M", quantity: 0 },
            { size: "L", quantity: 4 },
            { size: "XL", quantity: 0 },
            { size: "XXL", quantity: 0 },
          ];
          break;

        case "Demontage 5":
          sizesData = [
            { size: "XS", quantity: 0 },
            { size: "S", quantity: 1 },
            { size: "M", quantity: 0 },
            { size: "L", quantity: 0 },
            { size: "XL", quantity: 0 },
            { size: "XXL", quantity: 1 },
          ];
          break;

        case "Speaker":
          sizesData = [
            { size: "XS", quantity: 0 },
            { size: "S", quantity: 0 },
            { size: "M", quantity: 0 },
            { size: "L", quantity: 0 },
            { size: "XL", quantity: 0 },
            { size: "XXL", quantity: 0 },
          ];
          break;

        case "Dranghek":
          sizesData = [
            { size: "XS", quantity: 0 },
            { size: "S", quantity: 1 },
            { size: "M", quantity: 0 },
            { size: "L", quantity: 0 },
            { size: "XL", quantity: 0 },
            { size: "XXL", quantity: 0 },
          ];
          break;

        case "Statafel":
          sizesData = [
            { size: "XS", quantity: 0 },
            { size: "S", quantity: 1 },
            { size: "M", quantity: 3 },
            { size: "L", quantity: 7 },
            { size: "XL", quantity: 1 },
            { size: "XXL", quantity: 0 },
          ];
          break;

        case "Spades":
          sizesData = [
            { size: "XS", quantity: 0 },
            { size: "S", quantity: 3 },
            { size: "M", quantity: 1 },
            { size: "L", quantity: 0 },
            { size: "XL", quantity: 1 },
            { size: "XXL", quantity: 0 },
          ];
          break;

        case "Hearts":
          sizesData = [
            { size: "XS", quantity: 0 },
            { size: "S", quantity: 0 },
            { size: "M", quantity: 4 },
            { size: "L", quantity: 4 },
            { size: "XL", quantity: 1 },
            { size: "XXL", quantity: 0 },
          ];
          break;

        default:
          sizesData = [];
      }

      if (sizesData.length > 0) {
        const productsize = await prisma.productSize.createMany({
          data: sizesData.map((size: any) => ({
            ...size,
            productId: product.id,
          })),
        });
        console.log("Sizes added", productsize);
      }
    }
  } catch (error) {
    console.error("Error adding sizes:", error);
  }
}
