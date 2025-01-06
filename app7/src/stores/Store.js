import create from 'zustand';  

const useStore = create((set) => ({
  name: '',
  email: '',
  address: '',
  gender: '',
  languages: [],
  subject1: '',
  subject2: '',

  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setAddress: (address) => set({ address }),
  setGender: (gender) => set({ gender }),
  setLanguages: (languages) => set({ languages }),
  setSubject1: (subject1) => set({ subject1 }),
  setSubject2: (subject2) => set({ subject2 }),
}));

export default useStore;
