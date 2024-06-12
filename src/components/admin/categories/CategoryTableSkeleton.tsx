import { Skeleton } from '@/components/ui/skeleton';

export const CategoryTableSkeleton = () => {
    return (
        <div className="flex items-center justify-around xl:justify-normal xl:gap-64 px-4 mt-5 xl:pr-52">
            <Skeleton className="h-3 w-full rounded-md max-w-[70px] sm:max-w-[110px] " />
            <Skeleton className="h-3 w-full rounded-md max-w-[100px] sm:max-w-[110px] " />
            <div className="flex flex-col sm:flex-row gap-3">
                <Skeleton className="rounded-full w-6 h-6" />
                <Skeleton className="rounded-full w-6 h-6" />
            </div>
        </div>
    );
};
