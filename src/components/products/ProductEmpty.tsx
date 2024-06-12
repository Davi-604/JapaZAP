import { FishOffIcon } from 'lucide-react';

type Props = {
    bigWarning?: string;
    message?: string;
};
export const ProductEmpty = ({ message, bigWarning }: Props) => (
    <div className="w-full text-center my-10">
        <div className="text-lg sm:text-2xl text-muted-foreground font-semibold mb-5 flex justify-center items-center gap-3 sm:gap-5">
            {bigWarning}
            <FishOffIcon width={32} height={32} />
        </div>
        <p className="text-muted-foreground">{message}</p>
    </div>
);
