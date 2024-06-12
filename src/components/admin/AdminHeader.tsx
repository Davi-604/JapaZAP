'use client';

import { ThemeSelector } from '../ThemeSelector';
import { Menu } from './Menu';
import { MenuNav } from './MenuNav';

export const AdminHeader = () => {
    return (
        <header className="w-full h-[100px] bg-black/10 dark:bg-black/50  flex items-center justify-between p-5 xl:px-40">
            <div className="flex flex-col gap-2 sm:gap-10 sm:flex-row">
                <div className="text-2xl md:text-3xl">
                    Japa<span className="font-bold">ZAP</span> ♨️
                </div>
                <ThemeSelector />
            </div>
            <div className="sm:hidden">
                <Menu />
            </div>
            <div className="hidden sm:block flex-1 ">
                <MenuNav />
            </div>
        </header>
    );
};
