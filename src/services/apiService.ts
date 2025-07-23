import { Product } from '../models/Product';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const { products } = await res.json();
    return products.map(function (p: any) {
      return new Product(p);
    });

  } catch (err) {
    console.error('Fetch failed:', err);
    throw err;
  }
}
