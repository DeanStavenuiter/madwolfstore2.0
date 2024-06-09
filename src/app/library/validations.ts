import { z } from "zod";

const requiredString = z.string().min(1, "Required");

export const addProductSchema = z.object({
  name: requiredString.max(100),
  description1: z.string(),
  description2: z.string(),
  description3: z.string(),
  description4: z.string(),
  mp4File: z.string(),
  webMFile: z.string(),
  imageUrl1: z.string(),
  imageUrl2: z.string(),
  imageUrl3: z.string(),
  imageUrl4: z.string(),
  price: z.number(),
  type: z.string(),
  stock: z.number(),
  sizes: z.object({
    XS: z.number(),
    S: z.number(),
    M: z.number(),
    L: z.number(),
    XL: z.number(),
    XXL: z.number(),
  }),
});

export type AddProductInput = z.infer<typeof addProductSchema>; 
