import { create } from 'zustand';

type States = {
    name: string;
    address: {
        street: string;
        number: string;
        neighborhood: string;
        city: string;
        state: string;
        complement?: string;
    };
};
const initialState: States = {
    name: '',
    address: {
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: '',
    },
};

type Actions = {
    setName: (name: States['name']) => void;
    setAddress: (address: States['address']) => void;
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
    ...initialState,
    setName: (name) => set((state) => ({ ...state, name })),
    setAddress: (address) => set((state) => ({ ...address, address })),
}));
