import { Skeleton } from '@/components/ui/skeleton';

export const ProductTableSkeleton = () => {
    return (
        <div className="flex items-center justify-between px-4 mt-5 xl:pr-52">
            <Skeleton className="h-12 w-full rounded-md max-w-[70px] sm:max-w-[110px] sm:h-14" />

            <Skeleton className="w-28 h-3" />
            <Skeleton className="hidden sm:block w-16 h-3" />
            <div className="flex flex-col sm:flex-row gap-3">
                <Skeleton className="rounded-full w-6 h-6" />
                <Skeleton className="rounded-full w-6 h-6" />
            </div>
        </div>
    );
};
