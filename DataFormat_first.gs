# ======================================================================
# Project Name    : <PDF to Spreadsheet>
# File Name       : <DataFormat_first.gs>
# Author          : <Shun Hoshina>      
# Creation Date   : <2025-05-30>
 
# Copyright © 2025 Shun Hoshina All rights reserved.
 
# This source code or any portion thereof must not be  
# reproduced or used in any manner whatsoever.
# ======================================================================
function formatTSRCompanyData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rawData = sheet.getDataRange().getValues().flat(); // 1次元化

  let output = [["No", "商号", "所在地", "従業員数", "資本金", "最新売上"]];

  for (let i = 0; i < rawData.length; i++) {
    const row = rawData[i].toString().trim();


    const match = row.match(/^(\d+)\s+(.+?)\s{2,}(.+)$/);
    if (match) {
      const no = match[1];
      const name = match[2];
      const address = match[3];


      const nextLine = rawData[i + 1]?.toString().trim() ?? "";
      const nums = nextLine.match(/([\d,]+)\s+([\d,]+)(\s+([\d,]+))?/);

      let employee = "", capital = "", sales = "";

      if (nums) {
        employee = nums[1];
        capital = nums[2];
        sales = nums[4] ?? "";
      }

      output.push([no, name, address, employee, capital, sales]);
    }
  }

  // 出力用シート作成
  const outSheetName = "整形済みデータ";
  let outSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(outSheetName);
  if (!outSheet) outSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(outSheetName);
  outSheet.clearContents();
  outSheet.getRange(1, 1, output.length, output[0].length).setValues(output);
}
