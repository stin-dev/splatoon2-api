import { MainWeapon, WeaponCategory } from "../entities/MainWeapon";
import { mainWeaponsSheet } from "../sheets";
import { getAllValues } from "../utils/getAllValues";

export class MainWeaponsRepository {
  private data: MainWeapon[];

  constructor() {
    const allValues = getAllValues(mainWeaponsSheet, true);
    this.data = allValues.map<MainWeapon>(values => ({
      weaponId: values[0],
      weaponName: values[1],
      subWeaponId: values[2],
      specialWeaponId: values[3],
      category: values[4],
      isReplica: values[5],
      imageFileId: values[6],
    }));
  }

  getById = (id: number): MainWeapon => {
    const weapon = this.data.find(d => d.weaponId === id);
    if (weapon) return weapon;
    else throw new Error(`main_weapon_id:${id} not found.`);
  }

  getAll = (): readonly MainWeapon[] => {
    return this.data;
  }

  findByCategory = (category: WeaponCategory): MainWeapon[] => {
    return this.data.filter(d => d.category === category);
  }

  findBySubWeaponId = (subWeaponId: number): MainWeapon[] => {
    return this.data.filter(d => d.subWeaponId === subWeaponId);
  }

  findBySpecialWeaponId = (specialWeaponId: number): MainWeapon[] => {
    return this.data.filter(d => d.specialWeaponId === specialWeaponId);
  }
}