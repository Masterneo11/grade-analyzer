

document.getElementById("calculation").addEventListener("click", (e) => {


    const input = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];


    //  make a function to get the input array 
    console.log(getGrades(input));


});



const getGrades = (input) => {
    let gradesObj = {};
    gradesObj["average"] = avg(input);
    gradesObj["total"] = total(input);
    gradesObj["high"] = high(input);
    gradesObj["low"] = low(input);
    gradesObj["passing"] = passing(input);
    return gradesObj;
}




function avg(input) {
    let sumTotal = 0;
    let numberOfVariables = 0;
    for (let i of input) {
        sumTotal += i;
        numberOfVariables += 1;
    }
    const avg = sumTotal / numberOfVariables;
    return avg;
}

function total(input) {
    let total = 0;
    for (let i of input) {
        total += i
    };
    return total;
};

function high(input) {
    highest = 0;
    for (let i of input) {

        if (i > highest) {
            highest = i;
        }
    }
    return highest;
}


function low(input) {
    let lowest = input[0];
    for (let i of input) {
        if (i < lowest) {
            lowest = i;
        }
    }
    return lowest;
}

function passing(input) {

    let tots = total(input);

    if (60 <= tots) {
        return true;
    }
    else {
        return false;
    }
}