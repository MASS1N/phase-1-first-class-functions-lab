// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const result = returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);


const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const LastTwoDrivers = returnLastTwoDrivers(drivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
  return function (fare) {
    return fare * a;
  };
}
 function fareDoubler (fare) {
    return fare * 2
 }
 function fareTripler (fare) {
    return fare * 3
 }

 function selectDifferentDrivers(drivers,selectingDrivers){
 
    return selectingDrivers(drivers)}