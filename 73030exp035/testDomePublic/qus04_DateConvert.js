function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    dateArray = userDate.split("/");
    console.log(dateArray);
    dateNew = new Date(intToDateString(parseInt(dateArray[2]))
                             + "-" + intToDateString(parseInt(dateArray[0]))
                             + "-" + intToDateString(parseInt(dateArray[1])));

    console.log("new date:"+dateNew.toLocaleString());

    //extra add date  from: https://stackoverflow.com/questions/3818193/how-to-add-number-of-days-to-todays-date
    numberOfDaysToAdd=0;
    dateNew.setDate(dateNew.getDate() + numberOfDaysToAdd);
    console.log("new date after add:"+dateNew.toLocaleString());

    //extra add month from: https://stackoverflow.com/questions/5645058/how-to-add-months-to-a-date-in-javascript
    numberOfMonthsToAdd=0;
    dateNew.setMonth(dateNew.getMonth() + numberOfMonthsToAdd);

    //extra add year
    numberOfYearsToAdd=0;
    dateNew.setFullYear(dateNew.getFullYear() + numberOfYearsToAdd);

    console.log(dateNew.getFullYear());
    console.log(dateNew.getMonth());
    console.log(dateNew.getDate());

    return "" + dateNew.getFullYear()
        + intToDateString(parseInt(dateNew.getMonth()) + 1)
        + intToDateString(parseInt(dateNew.getDate()) +1);
}

function intToDateString(input) {
    console.log("inside function" + input);
    if (parseInt(input) < 9) {
        return "0" + input;
    } else {
        return "" + input;
    }
}


 console.log(formatDate("12/31/2014"));
//   console.log(formatDate("01/31/2014"));  //
//   console.log(formatDate("1/31/2014"));  //
//   console.log(formatDate("2/30/2014"));  // return  20140302 which is correct
//   console.log(formatDate("6/31/2014"));  // will not check if Jun 31 exists or not
//   console.log(formatDate("5/06/2014"));  // will not check if Jun 31 exists or not
  // console.log(formatDate("05/06/2014"));  // will not check if Jun 31 exists or not
