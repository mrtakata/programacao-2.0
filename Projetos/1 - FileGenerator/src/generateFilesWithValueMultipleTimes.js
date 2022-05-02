import * as fs from "fs";

/**
 * @param {string} filename
 * @param {number} quantity number of times staticValue will be written
 * @param {string} format file format
 * @param {boolean} isSingleFile if true, then only one file will be created with "staticValue" written "quantity" times
 * @param {string} staticValue text to be written on the file. Defaults to "default"
 */
export default function generateFilesWithSingleTextMultipleTimes(filedir, filename, quantity, format, isSingleFile, staticValue) {
    const generatedFilename = [];
    // Defaults
    if (!staticValue) {
        staticValue = "default";
    }
    if (!quantity) {
        quantity = 3;
    }

    let textToWrite = staticValue;
    if (isSingleFile) {
        for (let i = 0; i < quantity - 1; i++) {
            textToWrite += staticValue
        }
        quantity = 1;
    }

    if (!fs.existsSync(filedir)) {
        fs.mkdirSync(filedir);
    }
    for (let i = 0; i < quantity; i++) {
        const generatedFilenameWithIndex = filedir + "/" + filename + "_" + i + "." + format;
        fs.writeFileSync(generatedFilenameWithIndex, textToWrite);
        generatedFilename.push(generatedFilenameWithIndex);
    }
    return generatedFilename;
}
