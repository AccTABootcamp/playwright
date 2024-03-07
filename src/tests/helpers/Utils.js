class Utils {
    async fillField(field, text) {
        await field.fill('');
        await field.type(text);
    }

    async visitPage(page, url) {
        await page.goto(url);
    }
};

module.exports = Utils;