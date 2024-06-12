import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { ProductAddForm } from './ProductAddForm';
import { KeyboardEvent } from 'react';

type Props = {
    open: boolean;
    category_id: number;
    refreshLoad: () => void;
    onOpenChange: (value: boolean) => void;
};
export const ProductAddDialog = ({
    open,
    category_id,
    refreshLoad,
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
                        Adicionar produto
                    </DialogTitle>
                </DialogHeader>
                <ProductAddForm
                    onFinish={onOpenChange}
                    category_id={category_id}
                    refreshLoad={refreshLoad}
                />
            </DialogContent>
        </Dialog>
    );
};
