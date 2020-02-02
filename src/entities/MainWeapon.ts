export interface MainWeapon {
  weaponId: number,
  weaponName: string,
  subWeaponId: number,
  specialWeaponId: number,
  category: WeaponCategory,
  isReplica: boolean,
  imageFileId: string,
}

export enum WeaponCategory {
  Shooter,
  Maneuver,
  Charger,
  Blaster,
  Roller,
  Brush,
  Slosher,
  Spinner,
  Shelter,
}