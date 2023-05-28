/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Fahrenheit Coverter
      Author: James Parker III 
      Date:   05/21/2023

      Filename: project02-01.js
 */

function fahrenheitToCelsius(degree) {
      return (degree - 32) * 5 / 9;
}


function celsiusToFahrenheit(degree) {
      return (degree * 9 / 5) + 32;

}

document.getElementById("cValue").onchange = function () {
      // Delcare a variable named cDegree equal to the value of the element with the id "cValue"
      let cDegree = document.getElementById("cValue").value;

      document.getElementById("fValue").value = celsiusToFahrenheit(cDegree);
}

document.getElementById("fValue").onchange = function () {
      // Delcare a variable named fDegree equal to the value of the element with the id "fValue"
      let fDegree = document.getElementById("fValue").value;

      document.getElementById("cValue").value = fahrenheitToCelsius(fDegree);
}


