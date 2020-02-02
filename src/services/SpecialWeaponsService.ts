import { MainWeaponsRepository, SpecialWeaponsRepository } from "../repositories";
import { SpecialWeaponModel } from "../models/SpecialWeaponModel";
import { MainWeaponModel } from "../models/MainWeaponModel";

export class SpecialWeaponsService {
  constructor(
    private mainWeaponsRepository: MainWeaponsRepository,
    private specialWeaponsRepository: SpecialWeaponsRepository,
  ) { }

  getSpecialWeaponById = (id: number): SpecialWeaponModel => {
    const special = this.specialWeaponsRepository.getById(id);
    const model = new SpecialWeaponModel(special);

    const mains = this.mainWeaponsRepository.findBySpecialWeaponId(special.weaponId);
    model.mainWeapons = mains.map<MainWeaponModel>(main => new MainWeaponModel(main));

    return model;
  }

  getAllSpecialWeapons = (): SpecialWeaponModel[] => {
    const specials = this.specialWeaponsRepository.getAll();

    return specials.map<SpecialWeaponModel>(special => {
      const model = new SpecialWeaponModel(special);

      const mains = this.mainWeaponsRepository.findBySpecialWeaponId(special.weaponId);
      model.mainWeapons = mains.map<MainWeaponModel>(main => new MainWeaponModel(main));

      return model;
    });
  }
}