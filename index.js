const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = drivers.slice(0,2)
    return firstTwo
}

const returnLastTwoDrivers = function(drivers) { 
    let lastTwo = drivers.slice(-2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 


const createFareMultiplier = function(multiplier) { 
    return function(fare){ 
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3); 

const selectDifferentDrivers = function(drivers, diffDrivers) { 
    return diffDrivers(drivers)
}