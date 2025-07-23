"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.category = data.category;
    }
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Category: ${this.category}`);
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountPercentage) / 100;
    }
}
exports.Product = Product;
