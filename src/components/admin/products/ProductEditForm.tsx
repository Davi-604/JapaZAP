import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { adminApi } from '@/services/adminApi';
import { api } from '@/services/api';
import { Product } from '@/types/Product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const addSchema = z.object({
    nameField: z.string().optional(),
    imageField: z.string().url('Link inválido').optional(),
    priceField: z.string().optional(),
});

type Props = {
    category_id: number;
    product: Product;
    onFinish: (value: boolean) => void;
    refreshLoad: () => void;
};
export const ProductEditForm = ({
    onFinish,
    category_id,
    product,
    refreshLoad,
}: Props) => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof addSchema>>({
        resolver: zodResolver(addSchema),
        defaultValues: {
            nameField: product.name,
            imageField: product.image,
            priceField: product.price.toFixed(2).toString(),
        },
    });

    const onSubmit = async (values: z.infer<typeof addSchema>) => {
        const formatedPrice = values.priceField?.replace(',', '.');

        setLoading(true);
        const editedProduct = await adminApi.editProduct(category_id, product.id, {
            image: values.imageField,
            name: values.nameField,
            price: parseFloat(formatedPrice ? formatedPrice : ''),
        });
        setLoading(false);

        if (!editedProduct) {
            alert('Não foi possível editar o produto.');
            onFinish(false);
        } else {
            onFinish(false);
            refreshLoad();
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-center gap-4">
                    <FormField
                        control={form.control}
                        name="nameField"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input
                                        autoFocus
                                        className="text-ellipsis whitespace-normal"
                                        placeholder="Digite o nome do produto"
                                        onChange={(e) => {
                                            field.onChange(e);
                                            form.clearErrors('nameField');
                                        }}
                                        value={field.value}
                                    />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imageField"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Imagem</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-ellipsis whitespace-normal"
                                        placeholder="Digite o link da sua imagem"
                                        onChange={(e) => {
                                            field.onChange(e);
                                            form.clearErrors('imageField');
                                        }}
                                        value={field.value}
                                    />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="priceField"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preço</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-ellipsis whitespace-normal"
                                        placeholder="Digite o preço do produto"
                                        onChange={(e) => {
                                            field.onChange(
                                                e.target.value.replace(/[^0-9,]/g, '')
                                            );
                                            form.clearErrors('priceField');
                                        }}
                                        value={field.value?.replace('.', ',')}
                                        onKeyUp={(e) => {
                                            if (e.code.toLowerCase() === 'enter') {
                                                e.preventDefault();
                                                form.handleSubmit(onSubmit)();
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-between mt-5 ">
                        <Button variant="link" onClick={() => onFinish(false)}>
                            Voltar
                        </Button>
                        <Button type="submit">
                            {!loading ? 'Salvar' : 'Salvando...'}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};
