// Code your solution in this file!

const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0, 2);

};

const returnLastTwoDrivers = function(driverArray){
    const lastIndex = driverArray.length - 1;

    return driverArray.slice(-2);

};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(rate){

    return function(fare){
        return fare * rate
    }

};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, func){
    return (func)(driverArray)
}