import { SubWeapon } from "../entities/SubWeapon";
import { ImageUrl } from "../ImageUrl";
import { MainWeaponModel } from "./MainWeaponModel";

export class SubWeaponModel {
  mainWeapons?: MainWeaponModel[];
  imageUrl: ImageUrl;

  constructor(public entity: SubWeapon) {
    this.imageUrl = new ImageUrl(entity.imageFileId);
  }

  toJSON = () => {
    return {
      ...this.entity,
      mainWeapons: this.mainWeapons,
      imageUrl: this.imageUrl,
    };
  }
}