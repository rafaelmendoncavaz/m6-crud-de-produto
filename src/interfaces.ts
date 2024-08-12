export interface Product {
  id: number
  name: string
  price: number
  createdAt: Date
  updatedAt: Date
}

export type TypeData = Pick<Product, "name" | "price">

export interface CRUD {
  createProduct: (data: TypeData) => Product
  getProducts: () => Product[]
  getOneProduct: (id: number) => Product | undefined
  updateProduct: (id: number, data: Partial<TypeData>) => Product
  deleteProduct: (id: number) => { message: string }
}