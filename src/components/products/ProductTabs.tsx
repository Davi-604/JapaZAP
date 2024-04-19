import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { api } from '@/services/api';
import { Category } from '@/types/Category';
import { ProductEmpty } from './ProductEmpty';
import { ProductGridItem } from './ProductGridItem';

export const ProductTabs = async () => {
    const products = await api.getAllProducts();

    const categories: Category[] = [
        {
            name: 'Sushi',
            value: 'sushi',
            products: products.filter((item) => item.category === 'sushi'),
        },
        {
            name: 'Temaki',
            value: 'temaki',
            products: products.filter((item) => item.category === 'temaki'),
        },
        {
            name: 'Combos',
            value: 'pack',
            products: products.filter((item) => item.category === 'pack'),
        },
        {
            name: 'Bebidas',
            value: 'beverage',
            products: products.filter((item) => item.category === 'beverage'),
        },
    ];

    return (
        <Tabs defaultValue="sushi" className="px-5">
            <TabsList className="flex">
                {categories.map((item) => (
                    <TabsTrigger className="flex-1" key={item.value} value={item.value}>
                        {item.name}
                    </TabsTrigger>
                ))}
            </TabsList>
            {categories.map((item) => (
                <TabsContent key={item.value} value={item.value}>
                    {item.products.length > 0 && (
                        <div className="my-10 grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map((product, index) => (
                                <ProductGridItem key={index} product={product} />
                            ))}
                        </div>
                    )}
                    {item.products.length === 0 && <ProductEmpty />}
                </TabsContent>
            ))}
        </Tabs>
    );
};
