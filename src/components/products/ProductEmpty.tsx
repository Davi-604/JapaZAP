import { FishOffIcon, GhostIcon } from 'lucide-react';

export const ProductEmpty = () => (
    <div className="w-full text-center my-10">
        <div className="text-4xl font-semibold mb-5 flex justify-center items-center gap-5">
            Ops!
            <FishOffIcon width={32} height={32} />
        </div>
        <p>Não encontramos nenhum produto nessa categoria...</p>
    </div>
);
