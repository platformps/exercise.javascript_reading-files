
function printSingleFileAsText(evt) {
    let fileContent = getSingleFileAsText(evt);
    console.log(fileContent);
}

function getSingleFileAsText(evt) {
    //Retrieve the first (and only!) File from the FileList object
    //let result = "";
    //console.log ("Inside Loop");
    let file = evt.target.files[0];
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function(event) {
            //console.log ("Inside Loop 2" );
            let contents = event.target.result;
            let words = getWords(contents);
            console.log (words);
        }
        //console.log ("Inside Loop 3");
        return fileReader.readAsText(file)
    }
}

function getWords(s) {
    let result = "";
    let i = 0;
    while (i < s.length) {
        result += s[i];
        i++;
    }
    return result;
}
 fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', getSingleFileAsText, false);
