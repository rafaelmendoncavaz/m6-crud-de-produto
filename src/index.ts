import type { CRUD, Product, TypeData } from "./interfaces";

class ProductList implements CRUD {

  private productList: Product[] = []
  id: number = 1

  createProduct(data: TypeData) {

    const { name, price } = data

    const newProduct: Product = {
      id: this.id,
      name,
      price,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    this.productList.push(newProduct)
    this.id++

    return newProduct
  }

  getProducts() {

    return this.productList

  }

  getOneProduct(id: number) {

    return this.productList.find(product => product.id === id)

  }

  updateProduct(id: number, data: Partial<TypeData>) {

    const findProduct = this.productList.find(product => product.id === id)

    if (!findProduct) {
      throw new Error("Product not found")
    }

    const updatedProduct = {
      id,
      name: data.name || findProduct.name,
      price: data.price || findProduct.price,
      createdAt: findProduct.createdAt,
      updatedAt: new Date()
    }

    this.productList.splice(this.productList.findIndex(product => product.id === id), 1, updatedProduct)

    return updatedProduct
  }

  deleteProduct(id: number) {

    const idx = this.productList.findIndex(index => index.id === id)
    this.productList.splice(idx, 1)
    return { message: "Product successfully deleted." }

  }
}

export const productList = new ProductList()