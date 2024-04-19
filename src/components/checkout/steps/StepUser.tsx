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

const nameSchema = z.object({
    nameField: z.string().trim().min(2, 'Preencha o campo corretamente!'),
});

type Props = {
    onFinish: Dispatch<SetStateAction<Steps>>;
};
export const StepUser = ({ onFinish }: Props) => {
    const { name, setName } = useCheckoutStore((state) => state);

    const form = useForm<z.infer<typeof nameSchema>>({
        resolver: zodResolver(nameSchema),
        defaultValues: { nameField: name },
    });

    const onSubmit = (values: z.infer<typeof nameSchema>) => {
        setName(values.nameField);
        onFinish('address');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7">
                <FormField
                    name="nameField"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Seu nome</FormLabel>
                            <FormControl>
                                <Input
                                    className="py-6"
                                    autoFocus
                                    placeholder="Digite o seu nome"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-yellow-500" />
                        </FormItem>
                    )}
                />
                <Button type="submit">Próximo</Button>
            </form>
        </Form>
    );
};
