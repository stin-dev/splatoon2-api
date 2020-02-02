import container from "../DIContainer";

export const subWeaponsController = () => {
  const service = container.SubWeaponsService;

  const weapons = service.getAllSubWeapons();

  return ContentService
    .createTextOutput(JSON.stringify(weapons))
    .setMimeType(ContentService.MimeType.JSON);
}
