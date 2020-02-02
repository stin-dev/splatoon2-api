import { GearPowersRepository } from "../repositories";
import { GearPowerModel } from "../models/GearPowerModel";

export class GearPowersService {
  constructor(
    private gearPowersRepository: GearPowersRepository,
  ) { }

  getGearPowerById = (id: number): GearPowerModel => {
    const gearPower = this.gearPowersRepository.getById(id);
    const model = new GearPowerModel(gearPower);

    return model;
  }

  getAllGearPowers = (): GearPowerModel[] => {
    const gearPowers = this.gearPowersRepository.getAll();

    return gearPowers.map<GearPowerModel>(gearPower => new GearPowerModel(gearPower));
  }
}