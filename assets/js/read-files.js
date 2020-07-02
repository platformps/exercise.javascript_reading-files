
async function printSingleFileAsText(evt) {
  try {
    //let file = evt.target.files[0];
    let fileContent = await getSingleFileAsText(evt);
    console.log(fileContent);
  }
  catch(err) {
    console.log(err);
  }
}

function getSingleFileAsText(evt) {
  return new Promise((resolve, reject) => {
    //Retrieve the first (and only!) File from the FileList object
    let result = "";
    
    let file = evt.target.files[0];
    
    if (file) {
      let fileReader = new FileReader();
      fileReader.onload = function (event) {
        let contents = event.target.result;
        //let words = getWords(contents);
        resolve(contents);
      }

      fileReader.onerror = reject
      
      fileReader.readAsText(file);
    }
  })
}


let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', printSingleFileAsText, false);
//fileInput.addEventListener('change', getSingleFileAsText, false);


/***************************************************************************************************/
/***************************************THIS IS THE OLD CODE****************************************/
/***************************************************************************************************/

/*
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
        }
         
        //this returns undefined because the function triggered by onload is asynchronous
        //I therefore placed the console.log of the file contents inside the onload function
        return fileReader.readAsText(file);
        
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
*/


/***************************************************************************************************/
/********THIS IS CODE I FOUND ONLINE. SO SIMPLE AND STRAIGHTFORWARD*********************************/
/********FINALLY UNDERSTAND HOW TO MAKE PROMISES!***************************************************/
/************https://simon-schraeder.de/posts/filereader-async/ ************************************/
/***************************************************************************************************/

/*
function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  })
}

async function processFile() {
  try {
    let file = document.getElementById('fileInput').files[0];
    let contentBuffer = await readFileAsync(file);
    console.log(contentBuffer);
  } catch(err) {
    console.log(err);
  }
}
*/