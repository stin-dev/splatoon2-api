import { mainWeaponsController } from "./mainWeaponsController";
import { subWeaponsController } from "./subWeaponsController";
import { specialWeaponsController } from "./specialWeaponsController";
import { gearPowersController } from "./gearPowersController";
import { invalidParameterController } from "./invalidParameterController";

interface DoGetParameter {
  type?: "main" | "sub" | "special" | "gear_power",
}

export const doGetController = (e: GoogleAppsScript.Events.DoGet) => {
  const parameter = e.parameter as DoGetParameter;
  switch (parameter.type) {
    case "main":
      return mainWeaponsController();

    case "sub":
      return subWeaponsController();

    case "special":
      return specialWeaponsController();

    case "gear_power":
      return gearPowersController();

    default:
      return invalidParameterController();
  }
}









