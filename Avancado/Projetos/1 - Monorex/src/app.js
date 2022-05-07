import generateFilesWithSingleTextMultipleTimes from "./generateFilesWithValueMultipleTimes.js";
import * as fs from "fs";

// Exp success metric is timeToRunScript
runExpFromDirectoryRecursive("./configs");

function runExpFromDirectoryRecursive(directory) {
    fs.readdir(directory, { withFileTypes: true }, function (err, direntArray) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 

        for (const dirent of direntArray) {
            const direntFullPathName = directory + "/" + dirent.name;
            if (dirent.isDirectory()) {
                runExpFromDirectoryRecursive(directory + "/" + dirent.name);
                continue;
            }

            const config = JSON.parse(fs.readFileSync(direntFullPathName), "utf8");
            const { quantity, isSingleFile } = config;
            const generatedFilesArray = generateFilesWithSingleTextMultipleTimes(
                directory.replace("configs", "generatedFiles"),
                dirent.name,
                quantity,
                "txt",
                isSingleFile
            );
    
            for (const filename of generatedFilesArray) {
                fs.stat(filename, (err, stats) => {
                    if (err) {
                        console.log(`File doesn't exist.`);
                    } else {
                        console.log(stats.size + " bytes");
                    }
                });
            }
            // Write down CSV with filename, filesize, timeToRunScript
        }
    });
}
    

        