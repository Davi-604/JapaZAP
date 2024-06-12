import { LucideIcon } from 'lucide-react';

type Props = {
    label: string;
    selected: boolean;
    Icon?: LucideIcon;
    onClick: () => void;
};
export const MenuNavItem = ({ label, selected, Icon, onClick }: Props) => {
    return (
        <li
            className={`text-lg font-medium cursor-pointer ${
                selected ? 'text-primary' : ''
            }`}
            onClick={onClick}
        >
            <div className="flex items-center gap-1">
                {Icon && <Icon />}
                {label}
            </div>
        </li>
    );
};
