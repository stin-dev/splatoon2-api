export const getAllValues = (
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  hasTitleRow: boolean = false,
) => {
  const firstRow = hasTitleRow ? 2 : 1;
  const firstColumn = 1;
  const numLastRow = sheet.getLastRow() - firstRow + 1;
  const numLastColumn = sheet.getLastColumn();

  const range = sheet.getRange(
    firstRow,
    firstColumn,
    numLastRow,
    numLastColumn,
  );
  
  return range.getValues();
}