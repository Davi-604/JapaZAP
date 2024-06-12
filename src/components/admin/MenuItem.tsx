import { DoorOpenIcon, LucideIcon } from 'lucide-react';

type Props = {
    label: string;
    selected: boolean;
    Icon?: LucideIcon;
    onClick: () => void;
};
export const MenuItem = ({ label, selected, Icon, onClick }: Props) => {
    return (
        <li
            className={`my-2 py-3 border-b-2 flex items-center gap-3 ${
                selected ? 'text-primary font-semibold' : ''
            }`}
            onClick={onClick}
        >
            {Icon && <Icon />}
            {label}
        </li>
    );
};
