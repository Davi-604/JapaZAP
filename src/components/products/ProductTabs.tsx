'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { api } from '@/services/api';
import { ProductEmpty } from './ProductEmpty';
import { ProductGridItem } from './ProductGridItem';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import { ProductSkeleton } from './ProductSkeleton';

export const ProductTabs = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const loadReqs = async () => {
        setLoading(true);
        let categoriesList = await api.getAllCategories();
        let allProducts: Product[] = [];

        for (let i in categoriesList) {
            let productsList: Product[] = await api.getAllProducts(categoriesList[i].id);
            allProducts = [...allProducts, ...productsList];
        }
        setLoading(false);

        setCategoryProducts(allProducts);
        setCategories(categoriesList);
    };
    useEffect(() => {
        loadReqs();
    }, []);

    return (
        <>
            {categories.length > 0 && !loading && (
                <Tabs defaultValue={categories[0].name.toLowerCase()} className="px-5">
                    <TabsList className="flex">
                        {categories.map((item) => (
                            <TabsTrigger
                                className="flex-1 hover:opacity-70 transition-all ease-in"
                                key={item.name}
                                value={item.name.toLowerCase()}
                            >
                                {item.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {categories.map((item) => (
                        <TabsContent
                            key={item.name.toLowerCase()}
                            value={item.name.toLowerCase()}
                        >
                            <>
                                {categoryProducts.find(
                                    (product) => product.category_id === item.id
                                ) && (
                                    <div className="my-10 grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                                        {categoryProducts
                                            .filter(
                                                (product) =>
                                                    product.category_id === item.id
                                            )
                                            .map((productItem) => (
                                                <ProductGridItem
                                                    key={productItem.id}
                                                    product={productItem}
                                                />
                                            ))}
                                    </div>
                                )}
                                {!categoryProducts.find(
                                    (product) => product.category_id === item.id
                                ) && (
                                    <ProductEmpty
                                        bigWarning="Ops!"
                                        message="Não encontramos nenhum produto nessa categoria..."
                                    />
                                )}
                            </>
                        </TabsContent>
                    ))}
                </Tabs>
            )}
            {categories.length === 0 && loading && (
                <ProductEmpty
                    bigWarning="Ops!"
                    message="Não encontramos nenhuma categoria para exibir..."
                />
            )}
        </>
    );
};
