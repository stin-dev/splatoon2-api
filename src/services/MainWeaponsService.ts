import {
  MainWeaponsRepository,
  SubWeaponsRepository,
  SpecialWeaponsRepository
} from "../repositories";
import { MainWeaponModel } from "../models/MainWeaponModel";
import { SubWeaponModel } from "../models/SubWeaponModel";
import { SpecialWeaponModel } from "../models/SpecialWeaponModel";

export class MainWeaponsService {
  constructor(
    private mainWeaponsRepository: MainWeaponsRepository,
    private subWeaponsRepository: SubWeaponsRepository,
    private specialWeaponsRepository: SpecialWeaponsRepository,
  ) { }

  getMainWeaponById = (id: number): MainWeaponModel => {
    const main = this.mainWeaponsRepository.getById(id);
    const model = new MainWeaponModel(main);

    const sub = this.subWeaponsRepository.getById(main.subWeaponId);
    model.subWeapon = new SubWeaponModel(sub);

    const special = this.specialWeaponsRepository.getById(main.specialWeaponId);
    model.specialWeapon = new SpecialWeaponModel(special);

    return model;
  }

  getAllMainWeapons = (): MainWeaponModel[] => {
    const mains = this.mainWeaponsRepository.getAll();

    return mains.map<MainWeaponModel>(main => {
      const model = new MainWeaponModel(main);

      const sub = this.subWeaponsRepository.getById(main.subWeaponId);
      model.subWeapon = new SubWeaponModel(sub);

      const special = this.specialWeaponsRepository.getById(main.specialWeaponId);
      model.specialWeapon = new SpecialWeaponModel(special);

      return model;
    });
  }
}