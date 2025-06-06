# ======================================================================
# Project Name    : <PDF to Spreadsheet>
# File Name       : <DataFormat_second.gs>
# Author          : <Shun Hoshina>      
# Creation Date   : <2025-05-30>
 
# Copyright © 2025 Shun Hoshina All rights reserved.
 
# This source code or any portion thereof must not be  
# reproduced or used in any manner whatsoever.
# ======================================================================


function deleteEmptyCompanyRows() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const header = data[0];
  const cleaned = [header];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const companyName = row[1]; 
    if (companyName && companyName.toString().trim() !== "") {
      cleaned.push(row);
    }
  }

  // 既存データをクリアして上書き
  sheet.clearContents();
  sheet.getRange(1, 1, cleaned.length, cleaned[0].length).setValues(cleaned);
}
