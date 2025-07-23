import { Product } from '../models/Product';

export function calculateDiscount(product: Product): number {
  return (product.price * product.discountPercentage) / 100;
}
