import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

type Props = {
    onClick: () => void;
};
export const CategoryAddBtn = ({ onClick }: Props) => {
    return (
        <Button onClick={onClick} className="flex w-[140px] text-md items-center gap-4">
            Adicionar <PlusIcon />
        </Button>
    );
};
