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
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const addSchema = z.object({
    nameField: z.string().min(2, 'Mínimo de dois caracteres'),
    imageField: z.string().url('Link inválido'),
    priceField: z.string().min(1, 'Digite algum valor'),
});

type Props = {
    onFinish: (value: boolean) => void;
    category_id: number;
    refreshLoad: () => void;
};
export const ProductAddForm = ({ onFinish, category_id, refreshLoad }: Props) => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof addSchema>>({
        resolver: zodResolver(addSchema),
        defaultValues: { nameField: '', imageField: '', priceField: '' },
    });

    const onSubmit = async (values: z.infer<typeof addSchema>) => {
        setLoading(true);
        const newProduct = await adminApi.addProduct(category_id, {
            image: values.imageField,
            name: values.nameField,
            price: parseFloat(values.priceField.replace(',', '.')),
        });
        setLoading(false);

        console.log(newProduct);

        if (!newProduct) {
            alert('Não foi possível criar o produto.');
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
                                        value={field.value}
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
                            {!loading ? 'Adicionar' : 'Adicionando...'}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};
