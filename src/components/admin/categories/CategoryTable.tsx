import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Category } from '@/types/Category';
import { PencilIcon, TrashIcon } from 'lucide-react';

type Props = {
    categories: Category[];
    onEdit: (value: boolean) => void;
    onDelete: (value: boolean) => void;
    setCategory: (category: Category) => void;
};
export const CategoryTable = ({ categories, onDelete, onEdit, setCategory }: Props) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories.map((category) => (
                    <TableRow>
                        <TableCell>{category.id}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>
                            <div className="flex flex-col justify-center gap-3 md:flex-row md:items-center md:justify-normal">
                                <PencilIcon
                                    onClick={() => {
                                        onEdit(true);
                                        setCategory(category);
                                    }}
                                    className="hover:text-primary cursor-pointer"
                                />
                                <TrashIcon
                                    onClick={() => {
                                        onDelete(true);
                                        setCategory(category);
                                    }}
                                    className="hover:text-primary cursor-pointer"
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
