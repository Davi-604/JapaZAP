import { instance } from '@/lib/axios';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';
import { getCookie } from 'cookies-next';

type AddProductData = {
    name: string;
    description?: string;
    price: number;
    image: File | string;
};
type UpdateProductData = {
    name?: string;
    description?: string;
    price?: number;
    image?: File | string;
};

type AddCategoryData = {
    name: string;
};
type UpdateCategoryData = {
    name?: string;
};
export const adminApi = {
    login: async (password: string) => {
        try {
            const req = await instance.post('/login', { password });

            return (req.data.token as string) ?? false;
        } catch (err) {
            return false;
        }
    },
    addProduct: async (category_id: number, data: AddProductData) => {
        console.log(data);
        try {
            const token = getCookie('token');

            const newProduct = await instance.post(
                `admin/categories/${category_id}/products`,
                data,
                {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                }
            );

            return (newProduct.data.newProduct as Product) ?? false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    editProduct: async (category_id: number, id: number, data: UpdateProductData) => {
        try {
            const token = getCookie('token');

            const updatedProduct = await instance.put(
                `admin/categories/${category_id}/products/${id}`,
                data,
                {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                }
            );

            return (updatedProduct.data.updatedProduct as Product) ?? false;
        } catch (err) {
            return false;
        }
    },
    deleteProduct: async (category_id: number, id: number) => {
        try {
            const token = getCookie('token');

            const updatedProduct = await instance.delete(
                `admin/categories/${category_id}/products/${id}`,
                {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                }
            );

            return (updatedProduct.data.deletedProduct as number) ?? false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    addCategory: async (data: AddCategoryData) => {
        try {
            const token = getCookie('token');

            const newCategory = await instance.post(`admin/categories`, data, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });

            return (newCategory.data.newCategory as Category) ?? false;
        } catch (err) {
            return false;
        }
    },
    editCategory: async (category_id: number, data: UpdateCategoryData) => {
        try {
            const token = getCookie('token');

            const newCategory = await instance.put(
                `admin/categories/${category_id}`,
                data,
                {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                }
            );

            return (newCategory.data.updatedCategory as Category) ?? false;
        } catch (err) {
            return false;
        }
    },
    deleteCategory: async (category_id: number) => {
        try {
            const token = getCookie('token');

            const newCategory = await instance.delete(`admin/categories/${category_id}`, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });

            return (newCategory.data.deletedCategory as number) ?? false;
        } catch (err) {
            return false;
        }
    },
};
