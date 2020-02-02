# Splatoon2 API

Splatoon2のブキやギアパワーの一覧を取得するWebAPIです。

## エントリポイント

https://script.google.com/macros/s/AKfycbzlwS3n7Sl1jG6n9jwIcv1bbGnvqQXum9R-9AIQhFKGqua2dg/exec

## 対応メソッド

GET

## クエリパラメータ

- type: "main" | "sub" | "special" | "gear_power"

## レスポンス

### Content Type

application/json; charset=utf-8

### レスポンス型定義

| type | 型 |
|:-|:-|
| main | MainWeapon[] |
| sub | SubWeapon[] |
| special | SpecialWeapon[] |
| gear_power | GearPower[] |

## 型定義

### MainWeapon

- weaponId : number
- weaponName : string
- subWeaponId : number
- specialWeaponId : number
- category : WeaponCategory
- isReplica : boolean
- imageFileId : string
- imageUrl: string
- subWeapon? : Subweapon
- specialWeapon? : SpecialWeapon

### SubWeapon

- weaponId : number
- weaponName : string
- imageFileId : string
- imageUrl: string
- mainWeapons? : MainWeapon[]

### SpecialWeapon

- weaponId : number
- weaponName : string
- imageFileId : string
- imageUrl: string
- mainWeapons? : MainWeapon[]

### GearPower

- gearPowerId: number
- gearPowerName: string
- part: "all" | "head" | "top" | "shoes"
- imageFileId: string
- imageUrl: string
