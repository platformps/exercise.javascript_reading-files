// function printSingleFileAsText(evt) {
//     let fileContent = getSingleFileAsText();
//     console.log(fileContent);
// }

function getSingleFileAsText() {
    //Retrieve the first (and only!) File from the FileList object
    let fileReader = new FileReader();
    fileReader.readAsText(this.files[0]);
    fileReader.onload = function() {
        console.log(fileReader.result);
    }
}

let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', getSingleFileAsText, false);