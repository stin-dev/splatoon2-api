const spreadsheet = SpreadsheetApp.openById("1KJuOvC1M7EBUApbttbNaPIHEssJw0yRFuPIucoJiIY4");

export const subWeaponsSheet = spreadsheet.getSheetByName("sub_weapons") as GoogleAppsScript.Spreadsheet.Sheet;
export const specialWeaponsSheet = spreadsheet.getSheetByName("special_weapons") as GoogleAppsScript.Spreadsheet.Sheet;
export const mainWeaponsSheet = spreadsheet.getSheetByName("main_weapons") as GoogleAppsScript.Spreadsheet.Sheet;
export const gearPowersSheet = spreadsheet.getSheetByName("gear_powers") as GoogleAppsScript.Spreadsheet.Sheet;
