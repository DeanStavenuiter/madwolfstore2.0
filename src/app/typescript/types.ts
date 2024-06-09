export interface Product {
    id: number;
    name: string;
    description1: string;
    price: number;
    stock: number;
    type: string;
    sizes: {
      size: string;
      quantity: number;
      updatedAt: Date;
    };
  }

  export interface ProductInput {
    name: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    mp4File: string;
    webMFile: string;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string;
    imageUrl4: string;
    price: number;
    stock: number;
    type: string;
    sizes: {
      size: string;
      quantity: number;
    }[];
  }