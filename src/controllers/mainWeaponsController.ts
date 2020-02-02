import container from "../DIContainer";

export const mainWeaponsController = () => {
  const service = container.MainWeaponsService;

  const weapons = service.getAllMainWeapons();

  return ContentService
    .createTextOutput(JSON.stringify(weapons))
    .setMimeType(ContentService.MimeType.JSON);
}