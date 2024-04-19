'use client';

import { ThemeSelector } from '@/components/ThemeSelector';
import { CartSideBar } from './cart/CartSideBar';

export const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center p-5 mb-5 bg-black/10 dark:bg-black/50 ">
                <div className="flex flex-col gap-2 sm:gap-10 sm:flex-row">
                    <div className="text-2xl md:text-3xl">
                        Japa<span className="font-bold">ZAP</span> ♨️
                    </div>
                    <ThemeSelector />
                </div>
                <div className="">
                    <CartSideBar />
                </div>
            </div>
        </header>
    );
};
