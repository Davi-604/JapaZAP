import { Footer } from '@/components/Footer';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { server } from '@/services/server';
import { redirect } from 'next/navigation';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const logged = await server.pingAdmin();
    if (!logged) return redirect('/login');

    return (
        <div className="">
            <AdminHeader />
            {children}
            <Footer />
        </div>
    );
};

export default AdminLayout;
