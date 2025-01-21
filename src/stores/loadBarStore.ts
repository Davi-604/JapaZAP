import { create } from 'zustand';

type LoadBar = {
    loadBarValue: number;
    setLoadBarvalue: (value: number) => void;
};

export const useLoadBarStore = create<LoadBar>((set) => ({
    loadBarValue: 0,
    setLoadBarvalue: (value: number) => set({ loadBarValue: value }),
}));
