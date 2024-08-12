import { describe, it, expect } from "vitest";
import { productList } from "..";

const productData = { name: "Computador", price: 2500 };

const verifyProduct = (product) => {
   const date = new Date();
   const year = date.getFullYear();

   expect(product).toBeDefined();
   expect(product.id).toBeTypeOf("number");
   expect(product.id).toBe(1);
   expect(product.name).toBeTypeOf("string");
   expect(product.name).toBe(productData.name);
   expect(product.price).toBeTypeOf("number");
   expect(product.price).toBe(productData.price);
   expect(String(product.createdAt)).toContain(year);
   expect(String(product.updatedAt)).toContain(year);
};

describe("productList class", () => {
   it("should be able to create a product successfully", () => {
      const newProduct = productList.createProduct(productData);
      verifyProduct(newProduct);
   });

   it("should be able to get product list successfully", () => {
      const products = productList.getProducts();
      expect(products).toHaveLength(1);
      verifyProduct(products[0]);
   });

   it("should be able to get one product by id", () => {
      const product = productList.getOneProduct(1);
      expect(product).toBeDefined();
      verifyProduct(product);
   });

   it("should be able to update product successfully", () => {
      const date = new Date();
      const year = date.getFullYear();

      const newProductData = { name: "Computador atualizado", price: 3000 };
      const updatedProduct = productList.updateProduct(1, newProductData);

      expect(updatedProduct).toBeDefined();
      expect(updatedProduct.id).toBeTypeOf("number");
      expect(updatedProduct.id).toBe(1);
      expect(updatedProduct.name).toBeTypeOf("string");
      expect(updatedProduct.name).toBe(newProductData.name);
      expect(updatedProduct.price).toBeTypeOf("number");
      expect(updatedProduct.price).toBe(newProductData.price);
      expect(String(updatedProduct.updatedAt)).toContain(year);
   });

   it("should be able to delete product successfully", () => {
      const deleteProduct = productList.deleteProduct(1);

      expect(deleteProduct).toBeTypeOf("object");
      expect(deleteProduct.message).toBe("Product successfully deleted.");

      const products = productList.getProducts();
      expect(products).toHaveLength(0);
   })
});
