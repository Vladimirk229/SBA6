import { Product } from '../models/Product';

export function calculateTax(product: Product): number {
  const standardRate = 0.0475;
  const groceryRate = 0.03;

  const applicableRate = product.category === 'groceries' ? groceryRate : standardRate;
  return product.price * applicableRate;
}
