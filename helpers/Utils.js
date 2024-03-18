const { expect } = require("@playwright/test");

class Utils {
    static async fillField(field, text) {
        await field.fill('');
        await field.type(text);
    }

    static async visitPage(page, url) {
        await page.goto(url);
    }

    static async assertLinkIsPresentInListElementByText(inputText, listElement) {
        const link = await listElement.$(`xpath=//a[text()='${inputText}']`);
        expect(link).not.toBeNull(errorMessage);
    }

    static async removeAllSpaces(inputText) {
        return inputText.replace(/\s/g, "");
    }

    static async returnErrorMessageElementByText(inputErrorMessage, page) {
        counter++;
        return await page.$(`xpath=//div[@class='text-danger' and text()='${inputErrorMessage}']`);
    }

    static async returnHTMLValidationWarningMessageText(field) {
        return await field.evaluate(field => field.validationMessage);
    }

    static async validationWarningMessageIsDisplayed(inputValidationWarningText, field) {
        const validationMessage = await this.returnHTMLValidationWarningMessageText(field);
        expect(validationMessage).toBe(inputValidationWarningText, "Warning message doesn't match!");
    }

    static async returnObjectPageSide(element, page) {
        const side = 'Left';
        const elementLocation = await this.returnElementLocation(element);
        const pageWidth = await this.returnPageWidth(page);
        if (elementLocation.x > pageWidth / 2) {
            return 'Right';
        }
        return side;
    }

    static async returnElementLocation(element) {
        const location = await element.boundingBox();
        return { x: location.x, y: location.y };
    }

    static async returnPageWidth(page) {
        const viewportSize = page.viewportSize();
        return viewportSize.width;
    }

    static async assertLinksArePresentInElement(dataTable, element) {
        const data = dataTable.raw();
        for (const row of data) {
            const link = row[0];
            if (link && link.trim()) {
                this.assertLinkIsPresentInListElementByText(link, element)
            }
        }
    }

    static async assertInputTableSizeMatchesFormListSize(dataTable, element) {
        const data = dataTable.raw();
        const elementListSize = await element.count();
        expect(data.length).toBe(elementListSize);
    }

};

module.exports = Utils;