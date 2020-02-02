import { GearPower } from "../entities/GearPower";
import { gearPowersSheet } from "../sheets";
import { getAllValues } from "../utils/getAllValues";

export class GearPowersRepository {
  private data: GearPower[];

  constructor() {
    const allValues = getAllValues(gearPowersSheet, true);
    this.data = allValues.map<GearPower>(values => ({
      gearPowerId: values[0],
      gearPowerName: values[1],
      part: values[2],
      imageFileId: values[3],
    }));
  }

  getById = (id: number): GearPower => {
    const weapon = this.data.find(d => d.gearPowerId === id);
    if (weapon) return weapon;
    else throw new Error(`sub_weapon_id:${id} not found.`);
  }

  getAll = (): readonly GearPower[] => {
    return this.data;
  }
}