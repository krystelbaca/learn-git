/**
 * Hi Team FIVE! Welcome
 * For this exersice please do:
 * 1. Modify the name of the function.
 * 
 */


var simpleExercise = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
  ]
  
  function concatArray (objArray) {
    var result = objArray.map(function(obj) {
        return (obj.a + obj.b) + ' ' + obj.name
    })
    return result.join('-=-')
  }

  concatArray(simpleExercise)