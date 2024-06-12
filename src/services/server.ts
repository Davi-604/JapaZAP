import { instance } from '@/lib/axios';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export const server = {
    pingAdmin: async () => {
        try {
            const token = getCookie('token', { cookies });
            await instance.get('/admin/ping', {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });

            return true;
        } catch (err) {
            return false;
        }
    },
};
