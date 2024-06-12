import { ThemeSelector } from '@/components/ThemeSelector';
import { LoginCard } from '@/components/login/LoginCard';

const Page = () => {
    return (
        <div className="flex items-start py-10 px-5 h-screen max-w-xl mx-auto">
            <div className="absolute top-4 right-4">
                <ThemeSelector />
            </div>
            <LoginCard />
        </div>
    );
};

export default Page;
