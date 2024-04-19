import { Button } from '@/components/ui/button';
import { generateMessage } from '@/lib/generateMessage';
import { useCheckoutStore } from '@/stores/checkoutStore';
import Link from 'next/link';

export const StepFinish = () => {
    const { name } = useCheckoutStore((state) => state);

    const message = generateMessage();
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(
        message
    )}`;

    return (
        <div className="text-center flex flex-col gap-5">
            <p className="text-xl">
                Perfeito <strong>{name}</strong>!
            </p>
            <p>
                Agora envie o seu pedido ao nosso WhatsApp para concluir.
                <br /> Nossso atendente irá te guiar sobre o acompanhamneto do seu pedido.
            </p>
            <Button className="mt-5">
                <Link target="_blank" href={linkZap}>
                    Enviar para o WhatsApp
                </Link>
            </Button>
        </div>
    );
};
