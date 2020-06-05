function test(expectedOutput, func, arg1) {
    _test(func.name, expectedOutput, func, arg1);
}

function test(expectedOutput, func, arg1, arg2) {
    __test(func.name, expectedOutput, func, arg1, arg2);
}


// deprecated; too lazy to refactor; decorated instead
function _test(methodName, expectedOutput, func, arg1) {
    __test(methodName, expectedOutput, (arg1, arg2) => func(arg1), arg1, arg1);
}

// deprecated; too lazy to refactor; decorated instead
function __test(methodName, expectedOutput, func, arg1, arg2) {
    console.log("Testing `" + methodName + "`");
    console.log("first argument = `" + arg1 + "`")
    console.log("second argument = `" + arg2 + "`")
    let output = func(arg1, arg2);
    let pass = output == expectedOutput
    console.log("output = \n" + output);
    console.log("expected = \n" + expectedOutput);    
    console.log("test pass = " + pass);
    console.log("------------------------------------")
    console.log("------------------------------------")
}