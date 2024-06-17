import { getBangkokPopulationGrowth } from "api";
import { useEffect } from "react";
import useBangkokPopulationStore from "store/useBangkokPopulationStore";

const useFetchBangkokPopulation = () => {
  const setBangkokPopulationGrowth = useBangkokPopulationStore(
    (state) => state.setBangkokPopulationGrowth
  );

  const fetchBangkokPopulationGrowth = async () => {
    const bangkokPopulationGrowth = await getBangkokPopulationGrowth();
    setBangkokPopulationGrowth(bangkokPopulationGrowth.data);
  };

  useEffect(() => {
    fetchBangkokPopulationGrowth();
  }, []);

  return;
};

export default useFetchBangkokPopulation;
