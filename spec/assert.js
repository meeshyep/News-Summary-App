var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Test Failed: "+assertionToCheck+" is false, expected true")
    }
    else {
      console.log("Test Passed:"  + assertionToCheck+" is true");
    }
  },

  isFalse: function(assertionToCheck){
    if(assertionToCheck){
      console.log("Test Failed: "+assertionToCheck+" is true, expected false")
    }
    else {
      console.log("Test Passed: "  + assertionToCheck+" is false");
    }
  },

  toEqual: function(assertionToCheck, assertionToEqual){
    if (assertionToCheck !== assertionToEqual){
      console.log("Test Failed: "+assertionToCheck+" is not equal to "+assertionToEqual)
    }
    else {
      console.log("Test Passed: "  + assertionToCheck+" is equal to "+assertionToEqual);
    }
  },

  toNotEqual: function(assertionToCheck, assertionToEqual){
    if (assertionToCheck === assertionToEqual){
      console.log("Test Failed: "+assertionToCheck+" is equal to "+assertionToEqual)
    }
    else {
      console.log("Test Passed: "  + assertionToCheck+" is not equal to "+assertionToEqual);
    }
  },

  toContain: function(assertionToCheck, assertionToContain){
    if (assertionToContain.indexOf(assertionToCheck) === -1){
      console.log("Test Failed: "+assertionToCheck+" is not contained in "+assertionToContain)
    }
    else {
      console.log("Test Passed: "+assertionToCheck+" is contained in "+assertionToContain)
    }
  }
  toNotContain: function(assertionToCheck, assertionToContain){
    if (assertionToContain.indexOf(assertionToCheck) !== -1){
      console.log("Test Failed: "+assertionToCheck+" is contained in "+assertionToContain)
    }
    else {
      console.log("Test Passed: "+assertionToCheck+" is not contained in "+assertionToContain)
    }
  }
};
