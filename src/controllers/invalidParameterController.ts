export const invalidParameterController = () => {
  return ContentService
    .createTextOutput("Invalid parameters.")
    .setMimeType(ContentService.MimeType.TEXT);
}