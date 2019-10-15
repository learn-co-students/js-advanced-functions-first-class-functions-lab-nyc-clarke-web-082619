// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}
const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(a){
    return function(b){
        return a * b;
    }
}
function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare){
    return fare * 3
}
function selectDifferentDrivers(array, fn){
    return fn(array)
}