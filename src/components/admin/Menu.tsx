import {
    AlignJustifyIcon,
    DoorOpenIcon,
    LayersIcon,
    ShoppingBasketIcon,
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { MenuItem } from './MenuItem';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteCookie } from 'cookies-next';

export const Menu = () => {
    const router = useRouter();
    const path = usePathname();

    const [openSheet, setOpenSheet] = useState(false);

    return (
        <Sheet open={openSheet} onOpenChange={() => setOpenSheet(!openSheet)}>
            <SheetTrigger onClick={() => setOpenSheet(true)}>
                <AlignJustifyIcon />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <ul className="pt-5 ">
                    <MenuItem
                        label="Produtos"
                        selected={path === '/admin/products'}
                        onClick={() => {
                            router.push('/admin/products');
                            setOpenSheet(false);
                        }}
                        Icon={ShoppingBasketIcon}
                    />
                    <MenuItem
                        label="Categorias"
                        selected={path === '/admin/categories'}
                        onClick={() => {
                            router.push('/admin/categories');
                            setOpenSheet(false);
                        }}
                        Icon={LayersIcon}
                    />
                    <div className="mt-[300px]">
                        <MenuItem
                            label="Sair"
                            onClick={() => {
                                deleteCookie('token');
                                router.push('/');
                                setOpenSheet(false);
                            }}
                            selected={false}
                            Icon={DoorOpenIcon}
                        />
                    </div>
                </ul>
            </SheetContent>
        </Sheet>
    );
};
