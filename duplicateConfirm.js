/**
 * duplicateConfirm
 * finds if the removed duplicate is a real duplicate or not.
 */
function duplicateConfirm() {

     //Variables for the database connection
    var activeSS = SpreadsheetApp.getActiveSpreadsheet();
    var operatingSheet = activeSS.getSheetByName("JS_ONE_SHEET_TO_RULE_THEM_ALL");
    var trashSheet = activeSS.getSheetByName("REMOVED_RECORDS");

    //Variables for the data structure
    var arrTrashRecords = trashSheet.getRange(2, 1, 1290, 17).getValues();
    var arrOperatingRecords = operatingSheet.getRange(2, 1, 1945, 17).getValues();

    //Variables for the current record
    var posTrainingID = 0,
        posStudentID = 1,
        posFullName = 2,
        posFirstName = 3,
        posLastName = 4,
        posEmail = 5,
        posFaculty = 6,
        posProgram = 7,
        posTrainingType = 8,
        posTrainingDate = 9,
        posInstructor = 10,
        posCourse = 11,
        posSection = 12,
        posWorkshop = 13,
        posWorkstation = 14,
        posRemarks =  15,
        posDuplicate = 16;

    //loop: Get current record
    for (var trashPointer = 0; trashPointer < arrTrashRecords.length; trashPointer++) {
      
      var trashStudentID = arrTrashRecords[operatingPointer][posStudentID].toString();
      var trashFirstName = arrTrashRecords[operatingPointer][posFirstName].toString();
      var trashLastName = arrTrashRecords[operatingPointer][posLastName].toString();
      var trashTrainingDate = arrTrashRecords[operatingPointer][posTrainingDate].toString();
      var trashTrainingType = arrTrashRecords[operatingPointer][posTrainingType].toString();

        //loop through to find a duplicate
        for (var comparisonPointer = 0 ; comparisonPointer < arrOperatingRecords.length; comparisonPointer++) {
          
            var comparisonStudentID = arrOperatingRecords[comparisonPointer][posStudentID].toString();
            var comparisonFirstName = arrOperatingRecords[comparisonPointer][posFirstName].toString();
            var comparisonLastName = arrOperatingRecords[comparisonPointer][posLastName].toString();
            var comparisonTrainingDate = arrOperatingRecords[comparisonPointer][posTrainingDate].toString();
            var comparisonTrainingType = arrOperatingRecords[comparisonPointer][posTrainingType].toString();
            
            //if duplicate found
            if (trashStudentID == comparisonStudentID && trashTrainingDate == comparisonTrainingDate && trashTrainingType == comparisonTrainingType) {
                
                //write the record on removed sheet (next empty)
                var trashPointer = trashSheet.getLastRow()+1;
                trashSheet.getRange(trashPointer, posDuplicate+1).setValue("Real Duplicate");

                //get the row number from array position (+2 because 1st for header 2nd for array)
                operatingSheet.deleteRow(comparisonPointer+2);

                //delete the row with the records on array (mind: when a row is deleted the target should decrement by one)
                arrOperatingRecords.splice(comparisonPointer,1);
                lastRecord--;
                
            } else if (trashStudentID == "" && trashFirstName == comparisonFirstName && trashLastName == comparisonLastName && trashTrainingDate == comparisonTrainingDate && trashTrainingType == comparisonTrainingType) {

                //write the record on removed sheet (next empty)
                var trashPointer = trashSheet.getLastRow()+1;
                trashSheet.getRange(trashPointer, posTrainingID+1).setValue(arrOperatingRecords[comparisonPointer][posTrainingID]);
                trashSheet.getRange(trashPointer, posStudentID+1).setValue(arrOperatingRecords[comparisonPointer][posStudentID]);
                trashSheet.getRange(trashPointer, posFullName+1).setValue(arrOperatingRecords[comparisonPointer][posFullName]);
                trashSheet.getRange(trashPointer, posFirstName+1).setValue(arrOperatingRecords[comparisonPointer][posFirstName]);
                trashSheet.getRange(trashPointer, posLastName+1).setValue(arrOperatingRecords[comparisonPointer][posLastName]);
                trashSheet.getRange(trashPointer, posEmail+1).setValue(arrOperatingRecords[comparisonPointer][posEmail]);
                trashSheet.getRange(trashPointer, posFaculty+1).setValue(arrOperatingRecords[comparisonPointer][posFaculty]);
                trashSheet.getRange(trashPointer, posProgram+1).setValue(arrOperatingRecords[comparisonPointer][posProgram]);
                trashSheet.getRange(trashPointer, posTrainingType+1).setValue(arrOperatingRecords[comparisonPointer][posTrainingType]);
                trashSheet.getRange(trashPointer, posTrainingDate+1).setValue(arrOperatingRecords[comparisonPointer][posTrainingDate]);
                trashSheet.getRange(trashPointer, posInstructor+1).setValue(arrOperatingRecords[comparisonPointer][posInstructor]);
                trashSheet.getRange(trashPointer, posCourse+1).setValue(arrOperatingRecords[comparisonPointer][posCourse]);
                trashSheet.getRange(trashPointer, posSection+1).setValue(arrOperatingRecords[comparisonPointer][posSection]);
                trashSheet.getRange(trashPointer, posWorkshop+1).setValue(arrOperatingRecords[comparisonPointer][posWorkshop]);
                trashSheet.getRange(trashPointer, posWorkstation+1).setValue(arrOperatingRecords[comparisonPointer][posWorkstation]);
                trashSheet.getRange(trashPointer, posRemarks+1).setValue(arrOperatingRecords[comparisonPointer][posRemarks]);
                trashSheet.getRange(trashPointer, posDuplicate+1).setValue(arrOperatingRecords[comparisonPointer][posDuplicate]);

                //get the row number from array position (+2 because 1st for header 2nd for array)
                operatingSheet.deleteRow(comparisonPointer+2);

                //delete the row with the records on array (mind: when a row is deleted the target should decrement by one)
                arrOperatingRecords.splice(comparisonPointer,1);
                lastRecord--;

            }
        }
    }
}
