import { CartItem } from '@/types/CartItem';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';

type Props = {
    cartItem: CartItem;
};
export const CartProductQnt = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore((stage) => stage);

    return (
        <div
            className="flex items-center gap-2 h-10 border-2 border-secondary rounded-md overflow-hidden"
            style={{ maxWidth: 100 }}
        >
            <Button
                className="w-1 h-full rounded-none"
                onClick={() => upsertCartItem(cartItem.product, -1)}
            >
                <p className="text-xl">-</p>
            </Button>
            <div className="w-3 text-center mr-1">{cartItem.quantity}</div>
            <Button
                className="w-1 h-full rounded-none"
                onClick={() => upsertCartItem(cartItem.product, 1)}
            >
                <p className="text-xl">+</p>
            </Button>
        </div>
    );
};
