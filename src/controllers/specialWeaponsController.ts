import container from "../DIContainer";

export const specialWeaponsController = () => {
  const service = container.SpecialWeaponsService;

  const weapons = service.getAllSpecialWeapons();

  return ContentService
    .createTextOutput(JSON.stringify(weapons))
    .setMimeType(ContentService.MimeType.JSON);
}