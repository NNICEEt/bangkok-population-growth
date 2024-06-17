import axios from "axios";
import { BangkokPopulationGrowth } from "models";

export function getBangkokPopulationGrowth() {
  return axios.get<BangkokPopulationGrowth>("./bangkok_population-growth.json");
}
