import { MainWeapon } from "../entities/MainWeapon";
import { ImageUrl } from "../ImageUrl";
import { SubWeaponModel } from "./SubWeaponModel";
import { SpecialWeaponModel } from "./SpecialWeaponModel";

export class MainWeaponModel {
  subWeapon?: SubWeaponModel;
  specialWeapon?: SpecialWeaponModel;
  imageUrl: ImageUrl;

  constructor(public entity: MainWeapon) {
    this.imageUrl = new ImageUrl(entity.imageFileId);
  }

  toJSON = () => {
    return {
      ...this.entity,
      subWeapon: this.subWeapon,
      specialWeapon: this.specialWeapon,
      imageUrl: this.imageUrl,
    };
  }
}