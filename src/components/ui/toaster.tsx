'use client';

import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, image, ...props }) {
                return (
                    <Toast key={id} {...props}>
                        <div className="flex items-center gap-5">
                            <img
                                className="rounded-lg max-w-[100px] w-full order-1 lg:order-none"
                                src={image}
                            />
                            <div className="grid gap-1 ">
                                {title && <ToastTitle>{title}</ToastTitle>}
                                {description && (
                                    <ToastDescription>{description}</ToastDescription>
                                )}
                            </div>
                        </div>
                        <div className="hidden lg:block">{action}</div>
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
