import { GearPower } from "../entities/GearPower";
import { ImageUrl } from "../ImageUrl";

export class GearPowerModel {
  imageUrl: ImageUrl;

  constructor(public entity: GearPower) {
    this.imageUrl = new ImageUrl(entity.imageFileId);
  }

  toJSON = () => {
    return {
      ...this.entity,
      imageUrl: this.imageUrl,
    };
  }
}