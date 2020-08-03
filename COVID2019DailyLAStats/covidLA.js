// *********** Link each state to this site for daily stats ******************* //

const dataURL = `https://covidtracking.com/api/v1/states/la/daily.json`;



fetch(dataURL)
.then(function(resp) {
    return resp.json();
})
.then(data =>  {
    init(data)
    
    
    const stateWrapper = document.querySelector("table");
    const renderToDom = resultsString => {
        stateWrapper.innerHTML += resultsString;
        console.log(stateWrapper)
        
        
        
};
console.log(data)


/*Could possibly just put some of the facts in the html rendering rather than/in tandem with a conditional alert box. */
function init(data) {
let compPositive = ((data[0].positive / data[0].totalTestResults * 100).toFixed(2))
let todayPositive = (data[0].positiveIncrease / data[0].totalTestResultsIncrease * 100).toFixed(2)
let differencePositive = todayPositive - compPositive
let differencePositiveComp = compPositive - todayPositive
let compPositiveYesterday = ((data[1].positive / data[1].totalTestResults * 100).toFixed(2))
let yesterdayPositive = (data[1].positiveIncrease / data[1].totalTestResultsIncrease * 100).toFixed(2)
let differencePositiveYesterday = todayPositive - yesterdayPositive

//If daily positive for "today" is greater than 10%, alert popup// POSSIBLE SWITCH
if  (todayPositive > 10) {
    swal(`THAT RONA IS ON THE RISE IN ${data[0].state}!`, `More than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}pm. ${todayPositive}% to be exact. In other words, back up off each other and consider a mask!`, 'warning',
    { 

        buttons: {
        mask: "I'll Wear A Mask",
        noMask: {
            text: "I Don't Care For Others",
            value: "No Mask",
        },
    },
    });
} else if 
    (todayPositive < 10 && (todayPositive > compPositive)) {
    swal(`Less than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}p, but...`,
    `${data[0].state} remains ${differencePositive.toFixed(2)}% above the overall positive percentage average of ${compPositive}%.`, 'warning',
   { 
    buttons: {
    mask: "I'll Wear A Mask",
    noMask: {
        text: "I Don't Care For Others",
        value: "No Mask",
    },
},
});

} else if 
(todayPositive < 10 && (differencePositiveComp > 0)) {
swal(`Less than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}p, and...`,
`${data[0].state} is ${differencePositiveComp.toFixed(2)}% below the overall positive percentage average of ${compPositive}%.`, 'success',
{ 
buttons: {
mask: "I'll Wear A Mask",
noMask: {
    text: "I Don't Care For Others",
    value: "No Mask",
},
},
});

    }
else if 
(todayPositive < 10) {
    swal(`KEEP UP THE GREAT WORK IN THE ${data[0].state}!`, `Less than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}pm. ${todayPositive}% to be exact. In other words, keep doing you!`, 'warning',
{ 
    buttons: {
    mask: "I'll Wear A Mask",
    noMask: {
        text: "I Don't Care For Others",
        value: "No Mask",
    },
},
});
    
} else if      
(todayPositive < 10 && (todayPositive > yesterdayPositive))
swal(`Less than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}p, but...`,`${data[0].state}'s lastest results are ${differencePositiveYesterday.toFixed(2)}% higher than yesterday's results`, 'warning',
{ 
    buttons: {
    mask: "I'll Wear A Mask",
    noMask: {
        text: "I Don't Care For Others",
        value: "No Mask",
    },
},
});
console.log(swal.getState())
}

/* RETURN HIGHEST NUMBER OF DAILY DEATHS OVER SEVEN DAYS  */
// To return highest over all days, try to split deathIncrease with reduce array method //
let deathIncreaseNumsToday = data[0].deathIncrease
let deathIncreaseNumsYesterday = data[1].deathIncrease
let deathIncreaseNums2Days = data[2].deathIncrease
let deathIncreaseNums3Days = data[3].deathIncrease
let deathIncreaseNums4Days = data[4].deathIncrease
let deathIncreaseNums5Days = data[5].deathIncrease
let deathIncreaseNums6Days = data[6].deathIncrease
let deathIncreaseNums7Days = data[7].deathIncrease
let deathIncreaseNums8Days = data[8].deathIncrease
let deathIncreaseNums9Days = data[9].deathIncrease
let deathIncreaseNums10Days = data[10].deathIncrease
let deathIncreaseNums11Days = data[11].deathIncrease
let deathIncreaseNums12Days = data[12].deathIncrease
let deathIncreaseNums13Days = data[13].deathIncrease
let deathIncreaseNums14Days = data[14].deathIncrease
let arrayOfDeathIncrease = []

arrayOfDeathIncrease.push(deathIncreaseNumsToday, deathIncreaseNumsYesterday, deathIncreaseNums2Days, deathIncreaseNums3Days,deathIncreaseNums4Days, deathIncreaseNums5Days, deathIncreaseNums6Days, deathIncreaseNums7Days, deathIncreaseNums8Days, deathIncreaseNums9Days, deathIncreaseNums10Days,deathIncreaseNums11Days, deathIncreaseNums12Days, deathIncreaseNums13Days, deathIncreaseNums14Days)

console.log(deathIncreaseNumsToday)
console.log(arrayOfDeathIncrease)

    const maxDailyDeath = arrayOfDeathIncrease.reduce(function(a, b) {
        return Math.max(a, b);
    });
    console.log(maxDailyDeath);

    let maxDailyDeathElement = document.getElementById('maxDailyDeath')
    maxDailyDeathElement.innerHTML = `Most DEATHS in 24-hour period (last 15 days) - ${maxDailyDeath}`

   

//****RETURN Highest Number of Daily Positive Results  Results Over 15 Days*******//
let dailyPositiveIncreaseToday = data[0].positiveIncrease
let dailyPositiveIncreaseYesterday = data[1].positiveIncrease
let dailyPositiveIncrease2Days = data[2].positiveIncrease
let dailyPositiveIncrease3Days = data[3].positiveIncrease
let dailyPositiveIncrease4Days = data[4].positiveIncrease
let dailyPositiveIncrease5Days = data[5].positiveIncrease
let dailyPositiveIncrease6Days = data[6].positiveIncrease
let dailyPositiveIncrease7Days = data[7].positiveIncrease
let dailyPositiveIncrease8Days = data[8].positiveIncrease
let dailyPositiveIncrease9Days = data[9].positiveIncrease
let dailyPositiveIncrease10Days = data[10].positiveIncrease
let dailyPositiveIncrease11Days = data[11].positiveIncrease
let dailyPositiveIncrease12Days = data[12].positiveIncrease
let dailyPositiveIncrease13Days = data[13].positiveIncrease
let dailyPositiveIncrease14Days = data[14].positiveIncrease
let arrayOfPositiveIncrease = []

arrayOfPositiveIncrease.push(dailyPositiveIncreaseToday, dailyPositiveIncreaseYesterday, dailyPositiveIncrease2Days, dailyPositiveIncrease3Days,dailyPositiveIncrease4Days, dailyPositiveIncrease5Days, dailyPositiveIncrease6Days, dailyPositiveIncrease7Days, dailyPositiveIncrease8Days, dailyPositiveIncrease9Days, dailyPositiveIncrease10Days, dailyPositiveIncrease11Days, dailyPositiveIncrease12Days, dailyPositiveIncrease13Days, dailyPositiveIncrease14Days)

console.log(dailyPositiveIncreaseToday)
console.log(arrayOfPositiveIncrease)

    const maxDailyPositiveIncrease = arrayOfPositiveIncrease.reduce(function(a, b) {
        return Math.max(a, b);
    });
    console.log(maxDailyPositiveIncrease);

    

    let maxDailyPositiveIncreaseElement = document.getElementById('maxDailyPositiveIncrease')
    maxDailyPositiveIncreaseElement.innerHTML = `Most POSITIVE CASES in 24-hour period (last 15 days) - ${maxDailyPositiveIncrease}.`

    /* RETURN TOTAL DAILY POSITIVE INCREASE OVER 15 DAYS */
    const totalDailyPositiveIncrease = arrayOfPositiveIncrease.reduce(function(a, b) {
        return a + b;
    }, 0);
    console.log(totalDailyPositiveIncrease);
   // let totalDailyPositiveIncreaseElement = document.getElementById('totalDailyPositiveIncrease')
   // totalDailyPositiveIncreaseElement.innerHTML = `Total NEW CASES (last 15 days) - ${totalDailyPositiveIncrease}.`


              /* ************************************ */


    //*************RETURN rolling average over 15 days***************//
let averageDailyPositiveIncreaseToday = data[0].positiveIncrease
let averageDailyPositiveIncreaseYesterday = data[1].positiveIncrease
let averageDailyPositiveIncrease2Days = data[2].positiveIncrease
let averageDailyPositiveIncrease3Days = data[3].positiveIncrease
let averageDailyPositiveIncrease4Days = data[4].positiveIncrease
let averageDailyPositiveIncrease5Days = data[5].positiveIncrease
let averageDailyPositiveIncrease6Days = data[6].positiveIncrease
let averageDailyPositiveIncrease7Days = data[7].positiveIncrease
let averageDailyPositiveIncrease8Days = data[8].positiveIncrease
let averageDailyPositiveIncrease9Days = data[9].positiveIncrease
let averageDailyPositiveIncrease10Days = data[10].positiveIncrease
let averageDailyPositiveIncrease11Days = data[11].positiveIncrease
let averageDailyPositiveIncrease12Days = data[12].positiveIncrease
let averageDailyPositiveIncrease13Days = data[13].positiveIncrease
let averageDailyPositiveIncrease14Days = data[14].positiveIncrease
let arrayAverageOfPositiveIncrease = []

arrayAverageOfPositiveIncrease.push(averageDailyPositiveIncreaseToday, averageDailyPositiveIncreaseYesterday, averageDailyPositiveIncrease2Days, averageDailyPositiveIncrease3Days,averageDailyPositiveIncrease4Days, averageDailyPositiveIncrease5Days, averageDailyPositiveIncrease6Days, averageDailyPositiveIncrease7Days, averageDailyPositiveIncrease8Days, averageDailyPositiveIncrease9Days, averageDailyPositiveIncrease10Days, averageDailyPositiveIncrease11Days, averageDailyPositiveIncrease12Days, averageDailyPositiveIncrease13Days, averageDailyPositiveIncrease14Days)


var total = 0;
for(var i = 0; i < arrayAverageOfPositiveIncrease.length; i++) {
    total += arrayAverageOfPositiveIncrease[i];
}
var averageDailyPositiveIncrease = total / arrayAverageOfPositiveIncrease.length;
    console.log(`Average Positive Increase is ${averageDailyPositiveIncrease}`);

    let averageDailyPositiveIncreaseElement = document.getElementById('averageDailyPositiveIncrease')
    averageDailyPositiveIncreaseElement.innerHTML = `AVERAGE CASES PER DAY (last 15 days) - ${averageDailyPositiveIncrease.toFixed(0)}.`

                /* ************************************************ */ 
    
/* NEED DATE FOR MAX NUMBERS */




/* NEED MAX FOR NEGATIVE TESTS AND AVERAGE OF NEGATIVE TESTS OVER 15 DAYS */

/* NEED DIFFERENCE BETWEEN TODAY POSITIVE & 15-DAY AVERAGE */


/****************************MAX DAILY PERCENT POSITIVE OVER 15 DAYS***************************************************** */
let maxDailyPercentPositiveToday = (data[0].positiveIncrease / data[0].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositiveYesterday = (data[1].positiveIncrease / data[1].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive2Days = (data[2].positiveIncrease / data[2].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive3Days = (data[3].positiveIncrease / data[3].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive4Days = (data[4].positiveIncrease / data[4].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive5Days = (data[5].positiveIncrease / data[5].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive6Days = (data[6].positiveIncrease / data[6].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive7Days = (data[7].positiveIncrease / data[7].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive8Days = (data[8].positiveIncrease / data[8].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive9Days = (data[9].positiveIncrease / data[9].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive10Days = (data[10].positiveIncrease / data[10].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive11Days = (data[11].positiveIncrease / data[11].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive12Days = (data[12].positiveIncrease / data[12].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive13Days = (data[13].positiveIncrease / data[13].totalTestResultsIncrease * 100).toFixed(2)
let maxDailyPercentPositive14Days = (data[14].positiveIncrease / data[14].totalTestResultsIncrease * 100).toFixed(2)


let arrayOfDailyPercentPositive = []

        arrayOfDailyPercentPositive.push(maxDailyPercentPositiveToday, maxDailyPercentPositiveYesterday, maxDailyPercentPositive2Days, maxDailyPercentPositive3Days, maxDailyPercentPositive4Days, maxDailyPercentPositive5Days, maxDailyPercentPositive6Days, maxDailyPercentPositive7Days, maxDailyPercentPositive8Days, maxDailyPercentPositive9Days, maxDailyPercentPositive10Days, maxDailyPercentPositive11Days, maxDailyPercentPositive12Days, maxDailyPercentPositive13Days, maxDailyPercentPositive14Days)
    
        //If array contains a zero (0), it will return as NaN, creating a result of NaN when considering those items in the array. 
        //For example, Max Daily Positive Percent would return NaN if any Daily Percent Positive is zero(0). 
        //The first function removes the NaN once and removes all instances of the NaN in the array, allowing only numbers to be considered
        function removeItemOnce(arrayOfDailyPercentPositive, value) {
            var index = arrayOfDailyPercentPositive.indexOf(value);
            if (index > -1) {
              arrayOfDailyPercentPositive.splice(index, 1);
            }
            return arrayOfDailyPercentPositive;
          }
        function removeItemAll(arrayOfDailyPercentPositive, value) {
            var i = 0;
            while (i < arrayOfDailyPercentPositive.length) {
              if (arrayOfDailyPercentPositive[i] === value) {
                arrayOfDailyPercentPositive.splice(i, 1);
              } else {
                ++i;
              }
            }
            return arrayOfDailyPercentPositive;
          }
        
        console.log(removeItemOnce(arrayOfDailyPercentPositive, "NaN"))
        console.log(removeItemAll(arrayOfDailyPercentPositive, "NaN"))

        const maxDailyPercentPositive = arrayOfDailyPercentPositive.reduce(function(a, b) {
            return Math.max(a, b);    
       });
       console.log(maxDailyPercentPositive);
    let maxDailyPercentPositiveElement = document.getElementById('maxDailyPercentPositive')
    maxDailyPercentPositiveElement.innerHTML = `MAX DAILY POSITIVE PERCENT (last 15 days) - ${maxDailyPercentPositive}%. `


    
/* MAX FOR TOTAL TESTS AND AVERAGE OF TOTAL TESTS OVER 15 DAYS*/
let maxNewTestsToday = (data[0].totalTestResultsIncrease)
let maxNewTestsYesterday = (data[1].totalTestResultsIncrease)
let maxNewTests2Days = (data[2].totalTestResultsIncrease)
let maxNewTests3Days = (data[3].totalTestResultsIncrease)
let maxNewTests4Days = (data[4].totalTestResultsIncrease)
let maxNewTests5Days = (data[5].totalTestResultsIncrease)
let maxNewTests6Days = (data[6].totalTestResultsIncrease)
let maxNewTests7Days = (data[7].totalTestResultsIncrease)
let maxNewTests8Days = (data[8].totalTestResultsIncrease)
let maxNewTests9Days = (data[9].totalTestResultsIncrease)
let maxNewTests10Days = (data[10].totalTestResultsIncrease) 
let maxNewTests11Days = (data[11].totalTestResultsIncrease) 
let maxNewTests12Days = (data[12].totalTestResultsIncrease) 
let maxNewTests13Days = (data[13].totalTestResultsIncrease) 
let maxNewTests14Days = (data[14].totalTestResultsIncrease) 


let arrayOfNewTests = []

        arrayOfNewTests.push(maxNewTestsToday, maxNewTestsYesterday, maxNewTests2Days, maxNewTests3Days, maxNewTests4Days, 
            maxNewTests5Days, maxNewTests6Days, maxNewTests7Days, maxNewTests8Days, maxNewTests9Days, 
            maxNewTests10Days, maxNewTests11Days, maxNewTests12Days, maxNewTests13Days, maxNewTests14Days)
    
        const maxNewTests = arrayOfNewTests.reduce(function(a, b) {
            return Math.max(a, b);
        });
        console.log(maxNewTests);

        let maxNewTestsElement = document.getElementById('maxNewTests')
        maxNewTestsElement.innerHTML = `Most NEW TESTS ADMINISTERED in one day (last 15 days) - ${maxNewTests}. `
        

        
        /*RETURN TOTAL NUMBER OF NEW TESTS OVER THE LAST 15 DAYS*/
    const totalNewTests = arrayOfNewTests.reduce(function(a, b) {
        return a + b;
    }, 0);
    console.log(totalNewTests);


//let totalNewTestsElement = document.getElementById('totalNewTests')
//totalNewTestsElement.innerHTML = `${data[i].state}'s TOTAL number of NEW TESTS ADMINISTERED over the last 15 days is ${totalNewTests}. `

const percentPositiveOver15Days = (totalDailyPositiveIncrease / totalNewTests * 100).toFixed(2)
let percentPositiveOver15DaysElement = document.getElementById('percentPositiveOver15Days')
percentPositiveOver15DaysElement.innerHTML = `PERCENT POSITIVE RATE (last 15 days) - ${percentPositiveOver15Days}%.`

    //*************RETURN rolling average over 15 days***************//
    let averageNewTestsToday = data[0].totalTestResultsIncrease
    let averageNewTestsYesterday = data[1].totalTestResultsIncrease
    let averageNewTests2Days = data[2].totalTestResultsIncrease
    let averageNewTests3Days = data[3].totalTestResultsIncrease
    let averageNewTests4Days = data[4].totalTestResultsIncrease
    let averageNewTests5Days = data[5].totalTestResultsIncrease
    let averageNewTests6Days = data[6].totalTestResultsIncrease
    let averageNewTests7Days = data[7].totalTestResultsIncrease
    let averageNewTests8Days = data[8].totalTestResultsIncrease
    let averageNewTests9Days = data[9].totalTestResultsIncrease
    let averageNewTests10Days = data[10].totalTestResultsIncrease
    let averageNewTests11Days = data[11].totalTestResultsIncrease
    let averageNewTests12Days = data[12].totalTestResultsIncrease
    let averageNewTests13Days = data[13].totalTestResultsIncrease
    let averageNewTests14Days = data[14].totalTestResultsIncrease
    let arrayAverageOftotalTestResultsIncrease = []
    
    arrayAverageOftotalTestResultsIncrease.push(averageNewTestsToday, averageNewTestsYesterday, averageNewTests2Days, averageNewTests3Days,averageNewTests4Days, averageNewTests5Days, averageNewTests6Days, averageNewTests7Days, averageNewTests8Days, averageNewTests9Days, averageNewTests10Days, averageNewTests11Days, averageNewTests12Days, averageNewTests13Days, averageNewTests14Days)
    
    
    var total = 0;
    for(var i = 0; i < arrayAverageOftotalTestResultsIncrease.length; i++) {
        total += arrayAverageOftotalTestResultsIncrease[i];
    }
    var averageNewTests = total / arrayAverageOftotalTestResultsIncrease.length;
        console.log(`Average New Tests Per Day is ${averageNewTests}`);
    
        let averageNewTestsElement = document.getElementById('averageNewTests')
        averageNewTestsElement.innerHTML = `NEW TESTS PER DAY (15-day Avg) - ${averageNewTests.toFixed(0)}`
    

    
        let dailyPercentPositiveDifference = (maxDailyPercentPositiveToday - maxDailyPercentPositiveYesterday)
        let dailyPercentPositiveDifference2 = (maxDailyPercentPositiveYesterday - maxDailyPercentPositiveToday)
        console.log(`Today's difference is ${dailyPercentPositiveDifference}%`)
    
        if (dailyPercentPositiveDifference < 0) {
        let dailyPercentPositiveDifferenceElement = document.getElementById('dailyPercentPositiveDifferenceElement')
        dailyPercentPositiveDifferenceElement.innerHTML = `Today's Positive Rate decreased by ${dailyPercentPositiveDifference2.toFixed(2)}%.`
    }
        
        if (dailyPercentPositiveDifference > 0) {
        dailyPercentPositiveDifferenceElement = document.getElementById('dailyPercentPositiveDifferenceElement')
        dailyPercentPositiveDifferenceElement.innerHTML = `Positive Rate increased by ${dailyPercentPositiveDifference.toFixed(2)}% over last 24 hours.`
        }
    
    //If MaxDailyPercentPositiveToday is 0 and New Tests is 0,  Do not show a Difference. Just state there were no new tests today. 
    if (maxDailyPercentPositiveToday === "NaN") {
        maxDailyPercentPositiveToday = 0
    }
    
    if (maxDailyPercentPositiveToday === 0 && averageNewTestsToday === 0) {
        let dailyPercentPositiveDifferenceElement = document.getElementById('dailyPercentPositiveDifferenceElement')
        dailyPercentPositiveDifferenceElement.innerHTML = `There were no new tests today.`
    }
    console.log(maxDailyPercentPositiveToday)
      
      let compareTodayTo15DayAverageElement = document.getElementById('compareTodayTo15DayAverageElement')
      compareTodayTo15DayAverageElement.innerHTML = `TODAY'S POSITIVE RATE - ${maxDailyPercentPositiveToday}% <hr> 15-DAY ROLLING AVERAGE - ${percentPositiveOver15Days}%.`
    
    

                            /* CURRENTLY HOSPITALIZED */
            const hospitalizedCurrently = data[0].hospitalizedCurrently
            let currentlyHospitalizedElement = document.getElementById('currentlyHospitalized')
            currentlyHospitalizedElement.innerHTML = `CURRENTLY HOSPITALIZED - ${hospitalizedCurrently}. `

/*****************************************************************************************************************************/
   
       
       const resultsHtmlRepresentation = stateObj => {
           let percentPositive = (stateObj.positive / stateObj.totalTestResults * 100).toFixed(2)
           let percentDeathOfPositive = (stateObj.death / stateObj.positive * 100).toFixed(2)
           
           //If the increase is greater than zero for positive increase and test increase, do the calculation. Else, just assume 0%.

           //Otherwise, the cell will render NaN.
           /* Possibly refactor to a Switch Statement */
           
           if (stateObj.positiveIncrease > 0 || stateObj.totalTestResultsIncrease > 0) {
               dailyPercentPositive = (stateObj.positiveIncrease / stateObj.totalTestResultsIncrease * 100).toFixed(2) 
            }
            if (stateObj.positiveIncrease === 0 || stateObj.totalTestResultsIncrease === 0)
            dailyPercentPositive = 0
            
            if (stateObj.death === null) {
                stateObj.death = 0
            }  
            
            if (stateObj.lastUpdateEt === null) {
                stateObj.lastUpdateEt = 0
            }
            
            if (stateObj.negative === null) {
                stateObj.negative = 0
            }

            
             
            
            return `
            <body>
            <div class=${"wrapper"}>
            <table rowspan=${data.length} style="width:100%">
            <p id=${"writtenP1"}></p>
            <tr>
            <td id=${"dateData"}>${stateObj.lastUpdateEt}</td>
            <td id=${"stateData"}>${stateObj.state}</td>
            <td id=${"positiveData"}>${stateObj.positive}</td>
            <td id=${"negativeData"}>${stateObj.negative}</td>
            <td id=${"totalTestResultsData"}>${stateObj.totalTestResults}</td>
            <td id=${"deathData"}>${stateObj.death}</td>
            <td id=${"percentPositiveRow"}>${percentPositive}%</td>
            <td id=${"percentDeathOfPositiveData"}>${percentDeathOfPositive}%</td>
            <td id=${"newTestsData"}>${stateObj.totalTestResultsIncrease}</td>
            <td id=${"newCasesData"}>${stateObj.positiveIncrease}</td>
            <td id=${"dailyPercentPositiveData"}>${dailyPercentPositive}%</td>
            <td id=${"newDeathsData"}>${stateObj.deathIncrease}</td>
            </tr>
            </table>
            </div>
            `;
        }
        
        data.forEach(stateObj => {
            const HtmlString = resultsHtmlRepresentation(stateObj);
            renderToDom(HtmlString); 
            
            
        })
    })
    
