import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Steps } from '@/types/Steps';
import { useState } from 'react';
import { StepUser } from './steps/StepUser';
import { StepAddress } from './steps/StepAddress';
import { StepFinish } from './steps/StepFinish';

type Props = {
    open: boolean;
    onOpenChange: (value: boolean) => void;
};
export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    const [steps, setSteps] = useState<Steps>('user');

    let progressPct = 0;
    switch (steps) {
        case 'user':
            progressPct = 30;
            break;
        case 'address':
            progressPct = 70;
            break;
        case 'finish':
            progressPct = 100;
            break;
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center mb-3">
                        {steps === 'user' && 'Dados Pessoais'}
                        {steps === 'address' && 'Endereço de entrega'}
                        {steps === 'finish' && 'Envio para o WhatsApp'}
                    </DialogTitle>
                    <Progress value={progressPct} />
                </DialogHeader>
                {steps === 'user' && <StepUser onFinish={setSteps} />}
                {steps === 'address' && <StepAddress onFinish={setSteps} />}
                {steps === 'finish' && <StepFinish />}
            </DialogContent>
        </Dialog>
    );
};
