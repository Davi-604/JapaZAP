import { Product } from '@/types/Product';
import { PencilIcon, TrashIcon } from 'lucide-react';

type Props = {
    product: Product;
    setProduct: (product: Product) => void;
    onOpenEdit: (value: boolean) => void;
    onOpenDelete: (value: boolean) => void;
};
export const ProductTableActions = ({
    product,
    onOpenEdit,
    onOpenDelete,
    setProduct,
}: Props) => {
    return (
        <div className="flex flex-col justify-center  sm:flex-row sm:items-center sm:justify-normal gap-3">
            <PencilIcon
                onClick={() => {
                    onOpenEdit(true);
                    setProduct(product);
                }}
                className="cursor-pointer hover:text-primary"
            />
            <TrashIcon
                onClick={() => {
                    onOpenDelete(true);
                    setProduct(product);
                }}
                className="cursor-pointer hover:text-primary"
            />
        </div>
    );
};
