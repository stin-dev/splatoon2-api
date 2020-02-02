import { SubWeapon } from "../entities/SubWeapon";
import { subWeaponsSheet } from "../sheets";
import { getAllValues } from "../utils/getAllValues";

export class SubWeaponsRepository {
  private data: SubWeapon[];

  constructor() {
    const allValues = getAllValues(subWeaponsSheet, true);
    this.data = allValues.map<SubWeapon>(values => ({
      weaponId: values[0],
      weaponName: values[1],
      imageFileId: values[2],
    }));
  }

  getById = (id: number): SubWeapon => {
    const weapon = this.data.find(d => d.weaponId === id);
    if (weapon) return weapon;
    else throw new Error(`sub_weapon_id:${id} not found.`);
  }

  getAll = (): readonly SubWeapon[] => {
    return this.data;
  }
}