const prompt = require('prompt-sync')();
const fs = require('fs-extra');
var error = 0


while (error == 0) {
    var multi_file = prompt('Are you changing the extension of Several Files in a folder or a Single File? ');
    var lowercased = multi_file.toLowerCase();
    if (lowercased == "single") {
        var error = 1
        var directory = prompt('What is the directory of the file you want to change the extension of? ')
        var extension = prompt('What is the extension you want to change the file to? ')
        if (extension.includes(".")) {
            var change_ext = directory.substr(0, directory.lastIndexOf('.')) + extension
            var new_path = change_ext
            var old_path = directory
            fs.rename(old_path, new_path, (err) => {
                if (err) {throw err}
                else {console.log("Extension Changed")}
                })
            }
        else {
            var dot_ext = "." + extension
            var change_ext = directory.substr(0, directory.lastIndexOf('.')) + dot_ext
            var new_path = change_ext
            var old_path = directory
            fs.rename(old_path, new_path, (err) => {
                if (err) {throw err}
                else {console.log("Extension Changed")}
                })
            }
        }
    else {} if (lowercased == "several") {
        var error = 1
        var directory = prompt('What is the directory of the files you want to change the extension of? ') + '/'
        var extension = prompt('What is the extension you want to change the files to? ')
        if (extension.includes(".")) {
            fs.readdir(directory, (_err, _files) => {
                _files.forEach(_files => {
                    var change_ext = _files.substr(0, _files.lastIndexOf('.')) + extension
                    var new_path = directory + change_ext
                    var old_path = directory + _files
                    fs.rename(old_path, new_path, (err) => {
                        if (err) {throw err}
                        else {console.log("Extension Changed for", _files)}
                    })
                })
            })}
        else {
            fs.readdir(directory, (_err, _files) => {
                _files.forEach(_files => {
                    var dot_ext = "." + extension
                    var change_ext = _files.substr(0, _files.lastIndexOf('.')) + dot_ext
                    var new_path = directory + change_ext
                    var old_path = directory + _files
                    fs.rename(old_path, new_path, (err) => {
                        if (err) {throw err}
                        else {console.log("Extension Changed for", _files)}
                    })
                })
            })}
        }
}