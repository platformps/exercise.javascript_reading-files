function printSingleFileAsText(evt) {
    let fileContent = getSingleFileAsText(evt);
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
            //trying this out...
            var text = fs.readFileSync(file,'utf8')
            console.log (text)
       
        }
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
/*
//printSingleFileAsText(); //call function to display text
fileinput.addEventListener('load', function(contents) {    
     var text = contents.target.result;
     console.log(text);
});  
*/