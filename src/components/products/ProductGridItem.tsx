'use client';

import { Product } from '@/types/Product';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '../ui/toast';
import { useCartStore } from '@/stores/cartStore';

type Props = {
    product: Product;
};
export const ProductGridItem = ({ product }: Props) => {
    const { toast } = useToast();
    const { upsertCartItem } = useCartStore((state) => state);

    const handleAddBtn = () => {
        upsertCartItem(product, 1);
        toast({
            title: 'Adicionado ao carrinho!',
            description: product.name,
            action: <ToastAction altText="fechar">Fechar</ToastAction>,
        });
    };

    return (
        <div className="">
            <div className="overflow-hidden rounded-lg">
                <img
                    className="w-full h-32 object-cover"
                    alt={product.name}
                    src={product.image}
                />
            </div>
            <div className="mt-2 flex flex-col gap-2">
                <p className="text-lg font-medium">{product.name}</p>
                <p className="font-semibold ">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <Button variant="destructive" onClick={handleAddBtn}>
                    Adicionar
                </Button>
            </div>
        </div>
    );
};
