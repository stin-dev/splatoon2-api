import { SpecialWeapon } from "../entities/SpecialWeapon";
import { ImageUrl } from "../ImageUrl";
import { MainWeaponModel } from "./MainWeaponModel";

export class SpecialWeaponModel {
  mainWeapons?: MainWeaponModel[];
  imageUrl: ImageUrl;

  constructor(public entity: SpecialWeapon) {
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