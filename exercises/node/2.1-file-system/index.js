const fs = require('fs');

fs.writeFileSync('myFile.txt', '');

fs.copyFile('myFile.txt', 'copyFile.txt', (err) => {
    if (err) throw err;
    console.log('myFile.txt was copied to copyFile.txt');
});

fs.rename('myFile.txt', 'renamedFile.txt', (error) => {
    if (error) {
        console.log(`error renaming the file`);
    }
    else {

        // List all the filenames after renaming
        console.log("\nFile Renamed\n");
    }
});

const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
  });