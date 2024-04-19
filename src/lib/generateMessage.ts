import { useCartStore } from '@/stores/cartStore';
import { useCheckoutStore } from '@/stores/checkoutStore';

export const generateMessage = () => {
    const { name, address } = useCheckoutStore((state) => state);
    const { cart } = useCartStore((state) => state);

    let orderProducts = [];
    for (let i of cart) {
        orderProducts.push(`${i.quantity}x ${i.product.name}`);
    }

    return `* Dados Pessoais *
Nome: ${name}
Endereço: ${address.neighborhood} - ${address.street}, ${address.number} 
${address.complement ? `(${address.complement})` : ''}
${address.city}/${address.state}

- - - - -

* Pedidos *
${orderProducts.join('\n')}`;
};
