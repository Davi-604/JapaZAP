import { instance } from '@/lib/axios';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';

export const api = {
    getAllCategories: async () => {
        const categories = await instance.get('/categories');

        return (categories.data.categories as Category[]) ?? [];
    },
    getOneCategory: async (category_id: number) => {
        const category = await instance.get(`/categories/${category_id}`);

        return (category.data.category as Category) ?? {};
    },
    getAllProducts: async (category_id: number) => {
        const products = await instance.get(`/categories/${category_id}/products`);

        return (products.data.products as Product[]) ?? [];
    },
};
