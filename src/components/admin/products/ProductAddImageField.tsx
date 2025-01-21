import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ControllerRenderProps, FieldPath, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { useDropzone } from 'react-dropzone';
import { useEffect, useState } from 'react';
import { productSchema } from '@/schemas/productSchema';

type Props = {
    label: string;
    name: FieldPath<z.infer<typeof productSchema>>;
    field: ControllerRenderProps<z.infer<typeof productSchema>>;
    form: UseFormReturn<z.infer<typeof productSchema>>;
};
export const ProductAddImageField = ({ label, name, field, form }: Props) => {
    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
        maxFiles: 1,
        accept: {
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
            'image/png': ['.png'],
        },
    });

    const [photoPreviewUrl, setPhotoPreviewUrl] = useState('');

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            setPhotoPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
            form.clearErrors(name);
            field.onChange(acceptedFiles[0]);
        }
    }, [acceptedFiles]);
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <div
                    className={`h-36 max-w-full border-4 border-muted rounded-lg border-dashed flex items-center justify-center cursor-pointer
                    hover:bg-muted hover:border-primary transition-colors ease-in-out
                    ${isDragActive ? 'bg-muted border-primary' : ''} `}
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {!photoPreviewUrl.trim() && (
                        <p className="text-sm text-muted-foreground m-3">
                            {!isDragActive
                                ? 'Escolha ou arraste a imagem para aqui'
                                : 'Solte a imagem aqui'}
                        </p>
                    )}
                    {photoPreviewUrl.trim() && (
                        <img
                            className="rounded-lg h-full w-full object-cover"
                            src={photoPreviewUrl}
                        />
                    )}
                </div>
            </FormControl>
            <FormMessage className="text-yellow-500" />
        </FormItem>
    );
};
