// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(Math.max(drivers.length - 2, 0))
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number){
    return function(fare){
        return fare * number
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
  };