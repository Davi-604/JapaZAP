import { Steps } from '@/types/Steps';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckoutStore } from '@/stores/checkoutStore';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const addressSchema = z.object({
    street: z.string().trim().min(2, 'Preencha o nome da rua!'),
    number: z.string().trim().min(2, 'Preencha o número!'),
    neighborhood: z.string().trim().min(2, 'Preencha o nome do bairro!'),
    city: z.string().trim().min(2, 'Preencha o nome da cidade!'),
    state: z.string().trim().min(2, 'Escolha um estado!'),
    complement: z.string().optional(),
});

type Props = {
    onFinish: Dispatch<SetStateAction<Steps>>;
};
export const StepAddress = ({ onFinish }: Props) => {
    const { address, setAddress } = useCheckoutStore((state) => state);

    const form = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
        defaultValues: { ...address },
    });

    const onSubmit = (values: z.infer<typeof addressSchema>) => {
        setAddress(values);
        onFinish('finish');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        name="street"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input
                                        autoFocus
                                        className="text-ellipsis whitespace-normal"
                                        placeholder="Digite a sua rua"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="number"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-ellipsis whitespace-normal"
                                        placeholder="Digite o número"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="neighborhood"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-ellipsis whitespace-normal"
                                        placeholder="Digite o seu bairro"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="city"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input
                                        className="text-ellipsis whitespace-normal"
                                        placeholder="Digite a sua cidade"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="state"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select
                                        defaultValue={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Estado" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="mg">MG</SelectItem>
                                            <SelectItem value="rj">RJ</SelectItem>
                                            <SelectItem value="sp">SP</SelectItem>
                                            <SelectItem value="es">ES</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="complement"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage className="text-yellow-500" />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex items-center justify-between mt-7">
                    <Button variant="link" onClick={() => onFinish('user')}>
                        Voltar
                    </Button>
                    <Button type="submit">Concluir</Button>
                </div>
            </form>
        </Form>
    );
};
