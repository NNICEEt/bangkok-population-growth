import axios from "axios";
import { BangkokPopulationGrowth } from "models";

export function getBangkokPopulationGrowth() {
  return axios.get<BangkokPopulationGrowth>(
    "/src/data/bangkok_population-growth.json"
  );
}
