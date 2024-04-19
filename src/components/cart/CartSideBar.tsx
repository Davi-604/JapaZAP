'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/stores/cartStore';
import { CartProduct } from './CartProduct';
import { useState } from 'react';
import { CheckoutDialog } from '../checkout/CheckoutDialog';

export const CartSideBar = () => {
    const { cart } = useCartStore((state) => state);

    const [openCheckout, setOpenCheckout] = useState(false);

    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.quantity * item.product.price;
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative">
                    <ShoppingCart className="mr-3" />
                    <p>Carrinho</p>
                    {cart.length > 0 && (
                        <div className="absolute size-3 bg-gray-900 dark:bg-white rounded-full -top-1 -right-1  "></div>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-scroll">
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                <Separator className="my-7" />

                <div className="flex flex-col gap-5 my-3">
                    {cart.map((item) => (
                        <CartProduct key={item.product.id} cartProduct={item} />
                    ))}
                </div>

                <Separator className="my-7" />

                <div className="flex justify-between items-center text-sm">
                    <div className="">Subtotal:</div>
                    <div className="">
                        {subtotal > 0 ? `R$ ${subtotal.toFixed(2)}` : '---'}
                    </div>
                </div>

                <Separator className="my-7" />

                <div className="text-center">
                    <Button
                        onClick={() => setOpenCheckout(true)}
                        disabled={cart.length === 0}
                    >
                        {cart.length > 0
                            ? 'Finalizar pedido'
                            : 'Não há pedidos no seu carrinho'}
                    </Button>
                </div>
                <CheckoutDialog open={openCheckout} onOpenChange={setOpenCheckout} />
            </SheetContent>
        </Sheet>
    );
};
