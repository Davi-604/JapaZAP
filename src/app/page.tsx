import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeSelector } from '@/components/ThemeSelector';
import { ProductSkeleton } from '@/components/products/ProductSkeleton';
import { ProductTabs } from '@/components/products/ProductTabs';
import { Suspense } from 'react';

const Page = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Header />
            <div>
                <Suspense fallback={<ProductSkeleton />}>
                    <ProductTabs />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
