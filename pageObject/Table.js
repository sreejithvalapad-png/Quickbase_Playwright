const fs =require ('fs');
const screenshotpath = './screenshots/TableCreation.png';

class Tables{


    locators= {

        TableNameInput:"//input[@aria-label='Table name']",
        RecordInput:"//input[@class='input css-159w2l e1pxgqor1']",
        CreateTable:"//button[text()='Create table']",
        CancelText:"//button[text()='Cancel']",




    }

    async CreatingNewTable(){

    await page.waitforlocator(this.locators.TableNameInput);
    await page.fill(this.locators.TableNameInput,"Employees");
    await page.waitforlocator(this.locators.RecordInput);
    await page.fill(this.locators.RecordInput,"Records to store employee data");

    await page.screenshot({path:screenshotpath,fullpage:true});
    const ValidateTableCreation= await fs.promises.readFile(screenshotpath);
    
    await page.click(this.locators.CreateTable);

    return {ValidateTableCreation}


    }


}

module.exports = {Tables};