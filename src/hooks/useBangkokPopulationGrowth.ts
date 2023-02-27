import { useEffect, useState } from "react";
import { getBangkokPopulationGrowth } from "api/index";
import { BangkokPopulationGrowth, DistrictPopulationGrowth } from "models";

const useBangkokPopulationGrowth = () => {
  const [bangkokPopulationGrowth, setBangkokPopulationGrowth] =
    useState<BangkokPopulationGrowth>();

  const [districtPopulationGrowth, setDistrictPopulationGrowth] =
    useState<DistrictPopulationGrowth>();

  useEffect(() => {
    getBangkokPopulationGrowth().then((res) =>
      setBangkokPopulationGrowth(res.data)
    );
  }, []);

  const getDistrictList = () => {
    if (!bangkokPopulationGrowth) return [];

    return bangkokPopulationGrowth.map(({ dcode, name }) => ({
      dcode,
      name,
    }));
  };

  const selectDistrictPopulationGrowth = (dcode: number) => {
    const DistrictPopulationGrowthSelected = bangkokPopulationGrowth?.find(
      (district) => district.dcode === dcode
    );
    setDistrictPopulationGrowth(DistrictPopulationGrowthSelected);
  };

  return {
    districtList: getDistrictList(),
    districtPopulationGrowth,
    selectDistrictPopulationGrowth,
  };
};

export default useBangkokPopulationGrowth;
