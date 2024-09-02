import { create } from 'zustand';

// Define the type of the object you are editing
interface EditableObject {
  [key: string]: any;
}

interface ModelState {
  objectToEdit: EditableObject | null;
  setObjectToEdit: (data: EditableObject | null) => void;
}

export const useObjectToEdit = create<ModelState>((set) => ({
  objectToEdit: null,
  setObjectToEdit: (data) => set({ objectToEdit: data }),
}));
