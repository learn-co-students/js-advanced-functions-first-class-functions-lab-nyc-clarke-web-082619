// Code your solution in this file!

function returnFirstTwoDrivers(arr){
    return [arr[0],arr[1]];
}

function returnLastTwoDrivers(arr){
    return [arr[arr.length-2],arr[arr.length-1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return num*fare;
    }
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arr,f){
    return f(arr);
}