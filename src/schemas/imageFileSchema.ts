import { z } from 'zod';

export const imageFileSchema = z
    .instanceof(File, { message: 'Selecione uma imagem válida' })
    .refine((file) => file.size <= 5 * 1024 * 1024, 'O arquivo deve ter no máximo 5MB')
    .refine(
        (file) => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type),
        'Formato do arquivo inválido'
    );
