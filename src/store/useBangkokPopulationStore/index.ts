import { BangkokPopulationGrowth, DistrictPopulationGrowth } from "models";
import { create } from "zustand";

interface BangkokPopulationState {
  bangkokPopulationGrowth: BangkokPopulationGrowth | null;
  currentDistrict?: DistrictPopulationGrowth;
  currentStartYear?: number;
  currentEndYear?: number;
  setBangkokPopulationGrowth: (data: BangkokPopulationGrowth) => void;
  setCurrentDistrict: (data: DistrictPopulationGrowth) => void;
  setCurrentStartYear: (year: number) => void;
  setCurrentEndYear: (year: number) => void;
}

const useBangkokPopulationStore = create<BangkokPopulationState>()((set) => ({
  districtList: null,
  bangkokPopulationGrowth: null,
  setBangkokPopulationGrowth: (data) =>
    set(() => ({ bangkokPopulationGrowth: data })),
  setCurrentDistrict: (data) => set(() => ({ currentDistrict: data })),
  setCurrentStartYear: (year) => set(() => ({ currentStartYear: year })),
  setCurrentEndYear: (year) => set(() => ({ currentEndYear: year })),
}));

export default useBangkokPopulationStore;
