import { products } from '@/data/products';
import { Product } from '@/types/Product';

export const api = {
    getAllProducts: async (): Promise<Product[]> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(products), 1000);
        });
    },
};
