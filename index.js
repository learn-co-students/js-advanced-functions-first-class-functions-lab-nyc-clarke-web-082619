// Code your solution in this file!
function returnFirstTwoDrivers(arr){
    return arr.slice(0,2)
}

function returnLastTwoDrivers(arr){
    return arr.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(multiplier){
    return function calculateFare(fare){
        return fare * multiplier
    }
}

function fareDoubler(fare){
    const multiplier = 2
    return createFareMultiplier(multiplier)(fare)
}

function fareTripler(fare){
    const multiplier = 3
    return createFareMultiplier(multiplier)(fare)
}

function selectDifferentDrivers(driverArr, fcn){
    if(fcn === selectingDrivers[0]){
        return returnFirstTwoDrivers(driverArr);
    }
    if(fcn === selectingDrivers[1]){
        return returnLastTwoDrivers(driverArr);
    }
}