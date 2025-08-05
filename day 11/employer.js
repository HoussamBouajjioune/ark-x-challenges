import ExcelJS from 'exceljs';
import readline from 'readline';



// Create a Promise-based wrapper for rl.question
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function getEmployeeData() {

    // Reading Excel Files
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('employee_data_.xlsx');
    const worksheet = workbook.getWorksheet(1);

    const workbook2 = new ExcelJS.Workbook();
    const worksheet2 = workbook2.addWorksheet('Employees');
    // Define columns (headers)
    worksheet2.columns = [
        { header: 'EmployeeID', key: 'employeeId', width: 15 },
        { header: 'AnnualSalary', key: 'annualSalary', width: 15 },
        { header: 'BonusPercentage', key: 'bonusPercentage', width: 15 },
        { header: 'BonusAmount', key: 'bonusAmount', width: 15 },
    ];
    worksheet.eachRow((row, rowNumber) => {
        console.log(row.values.slice(1), rowNumber);
    });

    // Calculating Bonuses
    // Add header for new columns if not exist
    worksheet.getRow(1).getCell(3).value = 'BonusPercentage';
    worksheet.getRow(1).getCell(4).value = 'BonusAmount';

    worksheet.eachRow((row, rowNumber) => {
        if (row.values[2] < 50000) {
            console.log(`Employee ID: ${row.values[1]}, Bonus: ${row.values[2] * 0.05} (5%)`);
            row.getCell(3).value = `5%`;
            row.getCell(4).value = row.values[2] * 0.05;

            worksheet2.addRow({
                employeeId: row.values[1],
                annualSalary: row.values[2],
                bonusPercentage: row.values[3],
                bonusAmount: row.values[4],
            });

        } else if (row.values[2] >= 50000 || row.values[2] < 100000) {
            console.log(`Employee ID: ${row.values[1]}, Bonus: ${row.values[2] * 0.07} (7%)`);
            row.getCell(3).value = `7%`;
            row.getCell(4).value = row.values[2] * 0.07;


            worksheet2.addRow({
                employeeId: row.values[1],
                annualSalary: row.values[2],
                bonusPercentage: row.values[3],
                bonusAmount: row.values[4],
            });
        } else if (row.values[2] >= 100000) {
            console.log(`Employee ID: ${row.values[1]}, Bonus: ${row.values[2] * 0.1} (10%)`);
            row.getCell(3).value = `10%`;
            row.getCell(4).value = row.values[2] * 0.1;


            worksheet2.addRow({
                employeeId: row.values[1],
                annualSalary: row.values[2],
                bonusPercentage: row.values[3],
                bonusAmount: row.values[6],
            });
        }
        // console.log(row.values.slice(1), rowNumber);

        // Save the workbook to a file

    });

    const fileName = await askQuestion("Name of your file: ? ");
    console.log("You entered:", fileName);

    await workbook2.xlsx.writeFile(fileName+'.xlsx').then(() => {
        console.log('Bonus data written to Excel file successfully!');
    }).catch((error) => {
        console.error('Error writing to Excel file:', error);
    }
    );

}


getEmployeeData()