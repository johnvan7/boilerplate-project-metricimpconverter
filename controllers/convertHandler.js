/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var index = /[a-z]/i.exec(input).index;
    if(index==0)
      return 1;
    var a = input.substring(0, index)
    if(a.includes('/')){
      var fraction = a.split('/')
      if(fraction.length>2)
        return 'invalid input'
      a = fraction[0]/fraction[1]
    }
    return a*1;
  };
  
  this.getUnit = function(input) {
    let units = ['gal','L','mi','km','lbs','kg']
    var index = /[a-z]/i.exec(input).index;
    var result = input.substring(index, input.length)
    for(i in units){
      let elem = units[i]
      if(elem.toLowerCase() == result ||  elem.toUpperCase() == result){
        return elem
      }
    }

    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    let inputUnits = ['gal','L','mi','km','lbs','kg'];
    let expectUnits = ['L','gal','km','mi','kg','lbs'];
    for(i in inputUnits){
      let elem = inputUnits[i]
      if(elem.toLowerCase() == initUnit || elem.toUpperCase() == initUnit){
        return expectUnits[i]
      }
    }

    return 'invalid unit';
  };

  this.spellOutUnit = function(unit) {
    let dict = {
      'gal': 'gallons',
      'L': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    }
    return dict[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let value
    switch(initUnit){
      case 'gal':
        value = initNum * galToL
      break
      case 'lbs':
        value = initNum * lbsToKg
      break
      case 'mi':
        value = initNum * miToKm
      break
      case 'L':
        value = initNum / galToL
      break
      case 'kg':
        value = initNum / lbsToKg
      break
      case 'km':
        value = initNum / miToKm
      break
    }
    return Math.round(value * 100000) / 100000
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let initUnitString = this.spellOutUnit(initUnit)
    let returnUnitString = this.spellOutUnit(returnUnit)

    return `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
  };
  
}

module.exports = ConvertHandler;
