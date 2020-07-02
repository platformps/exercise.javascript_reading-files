function printSingleFileAsText(evt) {
    let fileContent = getSingleFileAsText(evt);
    //console.log(fileContent);
    
    console.log(fileContent);
}

function getSingleFileAsText(evt) {
    //Retrieve the first (and only!) File from the FileList object
    let result = "";
    let file = evt.target.files[0];
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function(event) {
            let contents = event.target.result;
            let words = getWords(contents);
           // return words;
            console.log(words);
        }
       /* fileReader.onloadend = function(event) {
            //console.log('DONE', fileReader.readyState); // readyState will be 2
            //console.log(fileReader.result);
            return event.target.result;
        //
        } */
        //console.log(fileReader.result);
        //return fileReader.readAsText(file);
        //return fileReader.result;
//};
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


let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', getSingleFileAsText, false);
//fileInput.addEventListener('change', printSingleFileAsText, false);

//printSingleFileAsText(fileInput.readAsText());

/*function readFile(){
    console.log(getSingleFileAsText(fileInput));
}

readFile();*/