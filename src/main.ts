import { fetchProducts } from './services/apiService';
import { calculateDiscount } from './utils/discountCalculator';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';

async function main(): Promise<void> {
  try {
    const products = await fetchProducts();

    for (const product of products) {
      product.displayDetails();

      const discount = calculateDiscount(product);
      const tax = calculateTax(product);
      const finalPrice = product.getPriceWithDiscount() + tax;

      console.log(`Discount: $${discount.toFixed(2)}`);
      console.log(`Tax: $${tax.toFixed(2)}`);
      console.log(`Final Price: $${finalPrice.toFixed(2)}`);
      console.log('------------------------');
    }
  } catch (error) {
    handleError(error);
  }
}

main();
