import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Product } from '@/types/Product';
import { ProductEditForm } from './ProductEditForm';
import { KeyboardEvent } from 'react';

type Props = {
    open: boolean;
    category_id: number;
    product: Product;
    refreshLoad: () => void;
    onOpenChange: (value: boolean) => void;
};
export const ProductEditDialog = ({
    open,
    category_id,
    refreshLoad,
    product,
    onOpenChange,
}: Props) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === 'enter') {
            event.preventDefault();
        }
    };

    return (
        <Dialog open={open} onOpenChange={(value) => onOpenChange(value)}>
            <DialogContent onKeyDown={handleKeyDown}>
                <DialogHeader>
                    <DialogTitle className="text-xl font-medium text-center">
                        Editar produto
                    </DialogTitle>
                </DialogHeader>
                <ProductEditForm
                    onFinish={onOpenChange}
                    category_id={category_id}
                    refreshLoad={refreshLoad}
                    product={product}
                />
            </DialogContent>
        </Dialog>
    );
};
