export class Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;

    constructor(
        data: {
            id: number;
            title: string;
            price: number;
            discountPercentage: number;
            category: string;
        }) {
        this.id = data.id;
        this.title = data.title;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.category = data.category;
    }

    displayDetails(): void {
        console.log(`Product: ${this.title}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Category: ${this.category}`);
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price * this.discountPercentage) / 100;
    }
}
