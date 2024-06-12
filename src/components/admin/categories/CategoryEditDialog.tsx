import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Category } from '@/types/Category';
import { KeyboardEvent } from 'react';
import { CategoryEditForm } from './CategoryEditForm';

type Props = {
    open: boolean;
    category: Category;
    refreshLoad: () => void;
    onOpenChange: (value: boolean) => void;
};
export const CategoryEditDialog = ({
    category,
    open,
    onOpenChange,
    refreshLoad,
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
                        Editar categoria
                    </DialogTitle>
                </DialogHeader>
                <CategoryEditForm
                    category={category}
                    onFinish={() => onOpenChange(false)}
                    refreshLoad={refreshLoad}
                />
            </DialogContent>
        </Dialog>
    );
};
