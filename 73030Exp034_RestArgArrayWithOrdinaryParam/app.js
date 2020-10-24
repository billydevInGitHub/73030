function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element
    })
  }
  
  let arr = multiply(2, 1, 2, 3)
  console.log(arr)  // [2, 4, 6]