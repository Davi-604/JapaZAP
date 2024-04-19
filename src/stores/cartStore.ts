import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';
import { create } from 'zustand';

type States = {
    cart: CartItem[];
};

type Actions = {
    upsertCartItem: (product: Product, quantity: number) => void;
};

const initialState: States = {
    cart: [],
};
export const useCartStore = create<States & Actions>()((set) => ({
    ...initialState,
    upsertCartItem: (product, quantitiy) =>
        set((state) => {
            let newCart = state.cart;

            let productIndex = newCart.findIndex(
                (item) => item.product.id === product.id
            );

            if (productIndex < 0) {
                newCart.push({ product, quantity: 0 });
                productIndex = newCart.findIndex(
                    (item) => item.product.id === product.id
                );
            }

            newCart[productIndex].quantity += quantitiy;

            if (newCart[productIndex].quantity <= 0) {
                newCart = newCart.filter((item) => item.product.id !== product.id);
            }

            return { ...state, cart: newCart };
        }),
}));
