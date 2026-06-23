const SHEET_NAME = 'Join Movement Responses';
const EMAIL_TO = 'mbarguma@outlook.com';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    validatePayload_(payload);

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet_(spreadsheet);
    const submittedAt = new Date(payload.submittedAt || new Date().toISOString());

    const row = [
      submittedAt,
      payload.name,
      payload.phone,
      payload.ward,
      payload.email || '',
      payload.formType || 'join-movement',
      '',
      '',
    ];

    sheet.appendRow(row);
    const rowNumber = sheet.getLastRow();
    const emailResult = sendNotificationEmail_(spreadsheet, payload, submittedAt);

    sheet.getRange(rowNumber, 7).setValue(emailResult.status);
    sheet.getRange(rowNumber, 8).setValue(emailResult.message);

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
    sheet.appendRow([
      'Submitted At',
      'Full Name',
      'Phone Number',
      'Ward',
      'Email',
      'Form Type',
      'Email Status',
      'Notes',
    ]);
  }

  return sheet;
}

function validatePayload_(payload) {
  if (!payload.name || !payload.phone || !payload.ward) {
    throw new Error('Missing required fields.');
  }
}

function sendNotificationEmail_(spreadsheet, payload, submittedAt) {
  const subject = 'New Join the Movement response';
  const lines = [
    'A new Join the Movement response has been received.',
    '',
    'Name: ' + payload.name,
    'Phone: ' + payload.phone,
    'Ward: ' + payload.ward,
    'Email: ' + (payload.email || 'Not provided'),
    'Form Type: ' + (payload.formType || 'join-movement'),
    'Submitted At: ' + submittedAt.toISOString(),
    '',
    'Spreadsheet: ' + spreadsheet.getUrl(),
  ];

  try {
    const attachment = exportSpreadsheetAsXlsx_(spreadsheet.getId(), spreadsheet.getName());

    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: subject,
      body: lines.concat(['', 'The latest spreadsheet is attached in Excel format.']).join('\n'),
      attachments: [attachment],
    });

    return { status: 'Sent with Excel attachment', message: 'Email delivered with XLSX attachment.' };
  } catch (error) {
    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: subject + ' (attachment fallback)',
      body: lines.concat(['', 'Excel attachment failed, so this notification was sent without attachment.']).join('\n'),
    });

    return { status: 'Fallback email sent', message: 'Attachment export failed: ' + error.message };
  }
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
