import { MainWeaponsRepository, SubWeaponsRepository } from "../repositories";
import { SubWeaponModel } from "../models/SubWeaponModel";
import { MainWeaponModel } from "../models/MainWeaponModel";

export class SubWeaponsService {
  constructor(
    private mainWeaponsRepository: MainWeaponsRepository,
    private subWeaponsRepository: SubWeaponsRepository,
  ) { }

  getSubWeaponById = (id: number): SubWeaponModel => {
    const sub = this.subWeaponsRepository.getById(id);
    const model = new SubWeaponModel(sub);

    const mains = this.mainWeaponsRepository.findBySubWeaponId(sub.weaponId);
    model.mainWeapons = mains.map<MainWeaponModel>(main => new MainWeaponModel(main));

    return model;
  }

  getAllSubWeapons = (): SubWeaponModel[] => {
    const subs = this.subWeaponsRepository.getAll();

    return subs.map<SubWeaponModel>(sub => {
      const model = new SubWeaponModel(sub);

      const mains = this.mainWeaponsRepository.findBySubWeaponId(sub.weaponId);
      model.mainWeapons = mains.map<MainWeaponModel>(main => new MainWeaponModel(main));

      return model;
    });
  }
}