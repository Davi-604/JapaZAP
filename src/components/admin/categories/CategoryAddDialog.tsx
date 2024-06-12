import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { KeyboardEvent } from 'react';
import { CategoryAddForm } from './CategoryAddForm';

type Props = {
    open: boolean;
    refreshLoad: () => void;
    onOpenChange: (value: boolean) => void;
};
export const CategoryAddDialog = ({ open, refreshLoad, onOpenChange }: Props) => {
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
                        Adicionar categoria
                    </DialogTitle>
                </DialogHeader>
                <CategoryAddForm
                    onFinish={() => onOpenChange(false)}
                    refreshLoad={refreshLoad}
                />
            </DialogContent>
        </Dialog>
    );
};
