import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { productSchema } from '@/schemas/productSchema';
import { ControllerRenderProps, FieldPath, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

type Props = {
    label: string;
    name: FieldPath<z.infer<typeof productSchema>>;
    field: ControllerRenderProps<z.infer<typeof productSchema>>;
    form: UseFormReturn<z.infer<typeof productSchema>>;
};
export const ProductTextAreaField = ({ label, name, field, form }: Props) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Textarea
                    className="text-ellipsis whitespace-normal transition-colors ease-in"
                    onChange={(e) => {
                        field.onChange(e);
                        form.clearErrors(name);
                    }}
                    value={field.value as string}
                />
            </FormControl>
            <FormMessage className="text-yellow-500" />
        </FormItem>
    );
};
