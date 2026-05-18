const SHEET_NAME = 'Join Movement Responses';
const EMAIL_TO = 'mbarguma@outlook.com';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    validatePayload_(payload);

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet_(spreadsheet);

    sheet.appendRow([
      new Date(payload.submittedAt || new Date().toISOString()),
      payload.name,
      payload.phone,
      payload.ward,
      payload.formType || 'join-movement',
    ]);

    sendNotificationEmail_(spreadsheet, payload);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted At', 'Full Name', 'Phone Number', 'Ward', 'Form Type']);
  }

  return sheet;
}

function validatePayload_(payload) {
  if (!payload.name || !payload.phone || !payload.ward) {
    throw new Error('Missing required fields.');
  }
}

function sendNotificationEmail_(spreadsheet, payload) {
  const attachment = exportSpreadsheetAsXlsx_(spreadsheet.getId(), spreadsheet.getName());
  const subject = 'New Join the Movement response';
  const body = [
    'A new Join the Movement response has been received.',
    '',
    'Name: ' + payload.name,
    'Phone: ' + payload.phone,
    'Ward: ' + payload.ward,
    'Submitted At: ' + (payload.submittedAt || new Date().toISOString()),
    '',
    'The latest spreadsheet is attached in Excel format.',
  ].join('\n');

  MailApp.sendEmail({
    to: EMAIL_TO,
    subject: subject,
    body: body,
    attachments: [attachment],
  });
}

function exportSpreadsheetAsXlsx_(spreadsheetId, spreadsheetName) {
  const exportUrl = 'https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/export?format=xlsx';
  const response = UrlFetchApp.fetch(exportUrl, {
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
    },
    muteHttpExceptions: true,
  });

  if (response.getResponseCode() >= 400) {
    throw new Error('Failed to export spreadsheet as Excel.');
  }

  return response.getBlob().setName(spreadsheetName + '.xlsx');
}
