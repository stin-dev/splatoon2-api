import container from "../DIContainer";

export const gearPowersController = () => {
  const service = container.GearPowersService;

  const weapons = service.getAllGearPowers();

  return ContentService
    .createTextOutput(JSON.stringify(weapons))
    .setMimeType(ContentService.MimeType.JSON);
}