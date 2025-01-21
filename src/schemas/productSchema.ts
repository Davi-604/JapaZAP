import { z } from 'zod';
import { imageFileSchema } from './imageFileSchema';

export const productSchema = z.object({
    nameField: z
        .string()
        .min(2, 'Mínimo de dois caracteres')
        .max(216, 'Máximo de 216 caracteres'),
    descriptionField: z
        .string()
        .min(2, 'Mínimo de dois caracteres')
        .max(216, 'Máximo de 216 caracteres')
        .optional(),
    imageField: z.union([imageFileSchema, z.string().url('URL inválida')]),
    priceField: z.string().min(1, 'Digite algum valor'),
});
