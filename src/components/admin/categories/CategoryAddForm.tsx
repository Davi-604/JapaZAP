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
});
type Props = {
    onFinish: (value: boolean) => void;
    refreshLoad: () => void;
};
export const CategoryAddForm = ({ onFinish, refreshLoad }: Props) => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof addSchema>>({
        resolver: zodResolver(addSchema),
        defaultValues: { nameField: '' },
    });

    const onSubmit = async (values: z.infer<typeof addSchema>) => {
        setLoading(true);
        const newCategory = await adminApi.addCategory({
            name: values.nameField,
        });
        setLoading(false);

        if (!newCategory) {
            alert('Não foi possível criar a categoria.');
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
                                        placeholder="Digite o nome da categoria"
                                        onChange={(e) => {
                                            field.onChange(e);
                                            form.clearErrors('nameField');
                                        }}
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
