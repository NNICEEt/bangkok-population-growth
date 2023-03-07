import { BangkokPopulationGrowth, DistrictPopulationGrowth } from "models";
import { create } from "zustand";

interface BangkokPopulationState {
  bangkokPopulationGrowth: BangkokPopulationGrowth | null;
  currentDistrictPopulationGrowth?: DistrictPopulationGrowth;
  currentStartYear?: number;
  currentEndYear?: number;
  setBangkokPopulationGrowth: (data: BangkokPopulationGrowth) => void;
  setCurrentDistrictPopulationGrowth: (data: DistrictPopulationGrowth) => void;
  setCurrentStartYear: (year: number) => void;
  setCurrentEndYear: (year: number) => void;
}

const useBangkokPopulationStore = create<BangkokPopulationState>()((set) => ({
  districtList: null,
  bangkokPopulationGrowth: null,
  setBangkokPopulationGrowth: (data) =>
    set(() => ({ bangkokPopulationGrowth: data })),
  setCurrentDistrictPopulationGrowth: (data) =>
    set(() => ({ currentDistrictPopulationGrowth: data })),
  setCurrentStartYear: (year) => set(() => ({ currentStartYear: year })),
  setCurrentEndYear: (year) => set(() => ({ currentEndYear: year })),
}));

export default useBangkokPopulationStore;
