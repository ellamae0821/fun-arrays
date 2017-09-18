var dataset = require('./dataset.json').bankBalances;

/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/


/*var hundredThousandairs = dataset.filter(oneHundredThousand);
function oneHundredThousand (elem) {
  return (elem.amount) > 100000;
}
*/

/*var hundredThousandairs = dataset.filter(oneHundredThousand);
function oneHundredThousand(elem){
  return (elem.amount) > 100000;
}*/

var hundredThousandairs = dataset.filter(function(item){
  return (item.amount) > 100000;
});

/*var hundredThousandairs = dataset.filter(function(){
  all =
})*/
/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting new array to `datasetWithRoundedDollar`
*/
/*var datasetWithRoundedDollar = dataset.map(newBankObjects);

function newBankObjects (elem){
  return{
        amount: elem.amount,
        state: elem.state,
        rounded: Math.round(elem.amount)
       };
}
*/
var datasetWithRoundedDollar = dataset.map(function (item){
  return {
    amount: item.amount,
    state: item.state,
    rounded: Math.round(item.amount)
  };
});

/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `roundedDime`

  `roundedDime` value is `amount` rounded to the nearest 10th of a cent

  Example 1
    {
      "amount": "134758.46",
      "state": "HI"
      "roundedDime": 134758.5
    }
  Example 2
    {
      "amount": "134758.44",
      "state": "HI"
      "roundedDime": 134758.4
    }
  assign the resulting new array to `roundedDime`
*/
/*var datasetWithRoundedDime = dataset.map(roundToTens);

function roundToTens(elem){
  return {
    amount: elem.amount,
    state: elem.state,
    roundedDime: Math.round(elem.amount * 10)/ 10,
  };
}*/


var datasetWithRoundedDime = dataset.map(function(item){
  return{
    amount: item.amount,
    state: item.state,
    roundedDime: Math.round(item.amount *10) /10,

  };
});
// set sumOfBankBalances to be the sum of all value held at `amount` for each bank object

/*var sumOfBankBalances = Number(dataset.reduce(sumOfValue, 0).toFixed(2));
//var sumOfBankBalances = parseFloat(sumOfBankBalances1.toFixed(2));
//var parseMain = parseFloat(sumOfValue);

function sumOfValue(previous, current){
  var parsedCurrent = Number(current.amount);
  return previous + parsedCurrent;
}*/

var sumOfBankBalances = dataset.reduce(function(all, item, index){
  return Math.round((all += parseFloat(item.amount))* 100) / 100;
}, 0);

//Math.round((num += parseFloat(element.amount)) * 100)/100


/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`
 */
var sumOfInterests = parseFloat(dataset.filter(selectState).reduce(reduceSelectState , 0).toFixed(2));

function selectState(elem){
  return ["WI", "IL", "WY", "OH", "GA", "DE"].indexOf(elem.state) > -1;
}

//var reduceSelectStateParse = parseFloat(reduceSelectState.toFixed(2));

function reduceSelectState(num, elem){
  var interestAll = parseFloat((elem.amount * 0.189).toFixed(2));
  return num + interestAll ;
}


//var sumOfInterests = dataset.filter()



/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest cent

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */

// object.keys +
//var stateSums = null;

var stateSums = dataset.reduce(function(all, item){

  all[item.state] = item.amount;
  return all;
},{});

/*
function tax(element) {
  return {
    state: element.state,
    tax: Math.round(element.amount * 18.9)/100
  };
}

function arrToStateObj(obj, element) {
  if(obj.hasOwnProperty(element.state)) {
    obj[element.state] += Math.round(parseFloat(element.amount) * 100)/100;
  } else {
    obj[element.state] = Math.round(parseFloat(element.amount) * 100)/100;
  }
  obj[element.state] = Math.round(parseFloat(obj[element.state]) * 100)/ 100;

  return obj;
}

function filterNonStates(element) {
  return ["WI", "IL", "WY", "OH", "GA", "DE"].indexOf(element.state) === -1;
}

function filterAmt(element) {
  return parseFloat(element.tax) > 50000;
}

function totalTaxNow(num, element) {
  return Math.round((num + element.tax) * 100)/100;
}

let sumsOfStates = dataset.reduce(arrToStateObj, {});

let newArr = Object.keys(sumsOfStates).map((keys) => {
  return {
    state: keys,
    amount: sumsOfStates[keys]
  };
});

var stateSums = newArr.filter(filterNonStates)
  .map(tax)
  .filter(filterAmt)
  .reduce(totalTaxNow, 0);*/


/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it
  only sum values greater than 50,000 and save it to `sumOfInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var sumOfHighInterests = null;

/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */
var lowerSumStates = null;

/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
var higherStateSums = null;

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  datasetWithRoundedDollar : datasetWithRoundedDollar,
  datasetWithRoundedDime : datasetWithRoundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
