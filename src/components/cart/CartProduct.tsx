import { CartItem } from '@/types/CartItem';
import { CartProductQnt } from './CartProductQnt';

type Props = {
    cartProduct: CartItem;
};
export const CartProduct = ({ cartProduct }: Props) => {
    return (
        <div className="flex items-center justify-between gap-5 sm:justify-normal">
            <div className="overflow-hidden max-w-24 ">
                <img
                    src={cartProduct.product.image}
                    alt={cartProduct.product.name}
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:items-center sm:flex-1">
                <div className="flex flex-col sm:flex-1">
                    <p className="text-lg font-semibold">{cartProduct.product.name}</p>
                    <p className="text-sm font-medium opacity-50">
                        R$ {cartProduct.product.price.toFixed(2)}
                    </p>
                </div>
                <div className="">
                    <CartProductQnt cartItem={cartProduct} />
                </div>
            </div>
        </div>
    );
};
