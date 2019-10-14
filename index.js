// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2);
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length-2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function fareMultiplier(integer){
       return integer * integer;
    }
}

const fareDoubler = (fare) => {
    return fare * 2;
}

const fareTripler = (fare) => {
    return fare * 3;
}

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}