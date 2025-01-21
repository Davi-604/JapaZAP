import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Product } from '@/types/Product';
import { ProductTableActions } from './ProductTableActions';

type Props = {
    products: Product[];
    onOpenEdit: (value: boolean) => void;
    onOpenDelete: (value: boolean) => void;
    setProduct: (product: Product) => void;
};
export const ProductTable = ({
    products,
    onOpenEdit,
    onOpenDelete,
    setProduct,
}: Props) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Imagem</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead className="hidden md:table-cell">Descrição</TableHead>
                    <TableHead className="hidden sm:table-cell">Preço</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow>
                        <TableCell>
                            <img
                                src={product.image}
                                className="w-[70px] h-[50px] sm:w-[110px] sm:h-[70px] object-cover rounded-md"
                            />
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell className="hidden max-w-[200px] md:table-cell">
                            {product.description}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            {`R$ ${product.price.toFixed(2).replace('.', ',')}`}
                        </TableCell>
                        <TableCell>
                            <ProductTableActions
                                product={product}
                                onOpenEdit={onOpenEdit}
                                onOpenDelete={onOpenDelete}
                                setProduct={setProduct}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
