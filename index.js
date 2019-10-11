

// Code your solution in this file!
const returnFirstTwoDrivers = array => {
    return array.slice(0,2);
}
const returnLastTwoDrivers = array => {
    return array.slice(array.length-2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(num){
        return num*fare;
    }
}

function fareDoubler(num){
    const fare = createFareMultiplier(num);
    return fare(2);
}

function fareTripler(num){
    const fare = createFareMultiplier(num);
    return fare(3);
}

function selectDifferentDrivers(arrayOfDrivers, someFunction){
    return someFunction(arrayOfDrivers);
}
