import { DoorOpenIcon, LayersIcon, ShoppingBasketIcon } from 'lucide-react';
import { MenuNavItem } from './MenuNavItem';
import { usePathname, useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

export const MenuNav = () => {
    const router = useRouter();
    const path = usePathname();

    return (
        <nav>
            <ul className="flex flex-1 justify-around ">
                <div className="flex items-center gap-8 ">
                    <MenuNavItem
                        label="Produtos"
                        onClick={() => router.push('/admin/products')}
                        selected={path === '/admin/products'}
                        Icon={ShoppingBasketIcon}
                    />
                    <MenuNavItem
                        label="Categorias"
                        onClick={() => router.push('/admin/categories')}
                        selected={path === '/admin/categories'}
                        Icon={LayersIcon}
                    />
                </div>
                <div>
                    <MenuNavItem
                        label="Sair"
                        onClick={() => {
                            router.push('/');
                            deleteCookie('token');
                        }}
                        selected={false}
                        Icon={DoorOpenIcon}
                    />
                </div>
            </ul>
        </nav>
    );
};
