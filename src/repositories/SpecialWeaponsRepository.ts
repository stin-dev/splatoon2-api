import { SpecialWeapon } from "../entities/SpecialWeapon";
import { specialWeaponsSheet } from "../sheets";
import { getAllValues } from "../utils/getAllValues";

export class SpecialWeaponsRepository {
  private data: SpecialWeapon[];

  constructor() {
    const allValues = getAllValues(specialWeaponsSheet, true);
    this.data = allValues.map<SpecialWeapon>(values => ({
      weaponId: values[0],
      weaponName: values[1],
      imageFileId: values[2],
    }));
  }

  getById = (id: number): SpecialWeapon => {
    const weapon = this.data.find(d => d.weaponId === id);
    if (weapon) return weapon;
    else throw new Error(`special_weapon_id:${id} not found.`);
  }

  getAll = (): readonly SpecialWeapon[] => {
    return this.data;
  }
}