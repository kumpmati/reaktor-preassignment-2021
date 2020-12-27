export enum Category {
  Beanies = "beanies",
  Gloves = "gloves",
  Facemasks = "facemasks",
  None = "",
}

export enum Availability {
  InStock = "INSTOCK",
  OutOfStock = "OUTOFSTOCK",
  LessThan10 = "LESSTHAN10",
}

export type Product = {
  id: string;
  type: Category;
  name: string;
  color: string[];
  price: number;
  manufacturer: string;
  availability: Availability;
};

export declare namespace Api {
  export type Response = {
    category: Category;
    products: Product[];
  };

  export type Context = {
    state: Api.Response;
    loading: boolean;
    set: (c: Category) => Promise<void>;
  };
}

export declare namespace Fetcher {
  // successful response from /v2/products/:category
  export type ProductEndpointResponse = Product[];

  // single product
  export type Product = {
    id: string;
    type: Category;
    name: string;
    color: string[];
    price: number;
    manufacturer: string;
  };

  // successful response from /v2/availability/:manufacturer
  export type AvailabilityEndpointResponse = ProductAvailability[];

  // availability of single product
  export type ProductAvailability = {
    id: string;
    DATAPAYLOAD: string;
  };
}

export declare namespace Parser {
  export type Response = Product[];
}

export declare namespace Nav {
  export type Item = {
    text: string;
    category: Category;
    active?: boolean;
  };
}
