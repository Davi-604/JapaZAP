import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { productSchema } from '@/schemas/productSchema';
import { ControllerRenderProps, FieldPath, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

type Props = {
    label: string;
    placeholder: string;
    name: FieldPath<z.infer<typeof productSchema>>;
    field: ControllerRenderProps<z.infer<typeof productSchema>>;
    form: UseFormReturn<z.infer<typeof productSchema>>;
    onSubmit?: (values: z.infer<typeof productSchema>) => Promise<void>;
    focus?: boolean;
    priceField?: boolean;
};
export const ProductEditFormField = ({
    label,
    name,
    placeholder,
    field,
    form,
    focus,
    priceField,
    onSubmit,
}: Props) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input
                    {...(focus && { autoFocus: true })}
                    className="text-ellipsis whitespace-normal transition-all ease-in"
                    placeholder={placeholder}
                    onChange={(e) => {
                        if (priceField) {
                            field.onChange(e.target.value.replace(/[^0-9,]/g, ''));
                        } else {
                            field.onChange(e);
                        }
                        form.clearErrors(name);
                    }}
                    value={field.value as string}
                    {...(priceField && {
                        value: field.value ? String(field.value).replace('.', ',') : '',
                    })}
                    {...(onSubmit && {
                        onKeyUp: (e) => {
                            if (e.code.toLowerCase() === 'enter') {
                                e.preventDefault();
                                form.handleSubmit(onSubmit)();
                            }
                        },
                    })}
                />
            </FormControl>
            <FormMessage className="text-yellow-500" />
        </FormItem>
    );
};
