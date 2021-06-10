const prompt = require('prompt-sync')();
const fs = require('fs');
const multi_file = prompt('Are you changing the extension of Several Files in a folder or a Single File? ')
const lowercased = multi_file.toLowerCase();
if (lowercased == "single") {
    const directory = prompt('What is the directory of the file you want to change the extension of? ')
    const extension = prompt('What is the extension you want to change the file to? ')
    const change_ext = _files.substr(0, _files.indexOf('.')) + extension
    const new_path = directory + change_ext
    const old_path = directory
    fs.rename(old_path, new_path, (err) => {
        if (err) {console.log('Error')}
        console.log("Extension Changed")
    });
} else {
const directory = prompt('What is the directory of the files you want to change the extension of? ') + '/'
const extension = prompt('What is the extension you want to change the files to? ')
fs.readdir(directory, (_err, _files) => {
    _files.forEach(_files => {
        const change_ext = _files.substr(0, _files.indexOf('.')) + extension
        const new_path = directory + change_ext
        const old_path = directory + _files
        fs.rename(old_path, new_path, (err) => {
            if (err) {console.log('Error')}
            console.log("Extension Changed for", _files)
        });
    });
});
};