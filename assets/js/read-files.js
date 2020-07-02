
function getSingleFileAsText(evt) {
    //Retrieve the first (and only!) File from the FileList object
    let result = "";
    let file = evt.target.files[0];
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function (event) {
            let contents = event.target.result;
            console.log(contents);
        }
        return fileReader.readAsText(file)
    }
}

let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', getSingleFileAsText, false);