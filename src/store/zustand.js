import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  (set) => ({
    answers: [],
    loading: false,
    results: { results: [] },
    showResults: false,
    roadMap: { title: "", steps: [] },
    setRoadMap: (roadMap) => set({ roadMap }),
    setShowResults: (showResults) => set({ showResults }),
    setLoading: (loading) => set({ loading }),
    setResults: (results) => set({ results }),
    setAnswers: (answers) => set({ answers }),
  }),
  {
    name: "answers-storage",
  }
);
