import { atom } from "jotai";
import { IToast } from "../types/Toast.type";

export const toastAtom = atom<IToast[]>([]);
