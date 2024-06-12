import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

type Props = {
    onClick: () => void;
};
export const ProductAddBtn = ({ onClick }: Props) => {
    return (
        <Button onClick={onClick} className="flex items-center gap-3">
            Adiconar produto
            <PlusIcon />
        </Button>
    );
};
