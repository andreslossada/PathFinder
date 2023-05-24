import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  (set) => ({
    answers: [],
    loading: false,
    results: { results: [] },
    showResults: false,
    setShowResults: (showResults) => set({ showResults }),
    setLoading: (loading) => set({ loading }),
    setResults: (results) => set({ results }),
    setAnswers: (answers) => set({ answers }),
  }),
  {
    name: "answers-storage",
  }
);
