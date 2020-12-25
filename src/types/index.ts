export enum Category {
  Beanies = "beanies",
  Gloves = "gloves",
  Facemasks = "facemasks",
}

export namespace Api {
  export type Response = {
    category: Category;
    products: Parser.Product[];
  };
}

export namespace Fetcher {
  // successful response from /v2/products/:category
  export type ProductEndpointResponse = Product[];

  // single product
  export type Product = {
    id: string;
    type: string;
    name: string;
    color: string[];
    price: number;
    manufacturer: string;
  };

  // successful response from /v2/availability/:manufacturer
  export type AvailabilityEndpointResponse = {
    code: number;
    response: ProductAvailability[];
  };

  // availability of single product
  export type ProductAvailability = {
    id: string;
    DATAPAYLOAD: string;
  };
}

export namespace Parser {
  export type Response = Product[];

  export enum Availability {
    InStock = "INSTOCK",
    OutOfStock = "OUTOFSTOCK",
    LessThan10 = "LESSTHAN10",
  }

  export type Product = {
    id: string;
    type: string;
    name: string;
    color: string[];
    price: number;
    manufacturer: string;
    availability: Availability;
  };
}
