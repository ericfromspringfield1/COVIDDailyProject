// *********** Link each state to this site for daily stats ******************* //

const dataURL = `https://covidtracking.com/api/v1/states/dc/daily.json`;


fetch(dataURL)
.then(function(resp) {
    return resp.json();
})
.then(data =>  {
    console.log(data)
    

  const stateWrapper = document.querySelector("table");
  const renderToDom = resultsString => {
    stateWrapper.innerHTML += resultsString;
    console.log(stateWrapper)

    
};

let compPositive = ((data[0].positive / data[0].totalTestResults * 100).toFixed(2))
let todayPositive = (data[0].positiveIncrease / data[0].totalTestResultsIncrease * 100).toFixed(2)
let differencePositive = todayPositive - compPositive
let compPositiveYesterday = ((data[1].positive / data[1].totalTestResults * 100).toFixed(2))
let yesterdayPositive = (data[1].positiveIncrease / data[1].totalTestResultsIncrease * 100).toFixed(2)
let differencePositiveYesterday = todayPositive - yesterdayPositive

//If daily positive for "today" is greater than 10%, alert popup//
if  (todayPositive> 10) {
    swal(`THAT RONA IS ON THE RISE IN ${data[0].state}!`, `More than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}pm. ${todayPositive}% to be exact. In other words, back up off each other and consider a mask!`, `warning`)
}
if (todayPositive < 10) {
    swal(`KEEP UP THE GREAT WORK IN THE ${data[0].state}!`, `Less than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}pm. ${todayPositive}% to be exact. In other words, keep doing you!`, `warning`)
}else {
(todayPositive < 10 && todayPositive < compPositive) 
   swal(`Less than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}p, but...`,`${data[0].state} remains ${differencePositive.toFixed(2)}% above the overall positive percentage average.`, `warning`)
}

(todayPositive < 10 && todayPositive > yesterdayPositive)
swal(`Less than 10% of tests came back positive as of our last update on ${data[0].lastUpdateEt}p, but...`,`${data[0].state}'s lastest results are ${differencePositiveYesterday.toFixed(2)}% higher than yesterday's results`, `warning`)


const resultsHtmlRepresentation = stateObj => {
    let percentPositive = (stateObj.positive / stateObj.totalTestResults * 100).toFixed(2)
    let percentDeathOfPositive = (stateObj.death / stateObj.positive * 100).toFixed(2)

    //If the increase is greater than zero for positive increase and test increase, do the calculation. Else, just assume 0%.
    //Otherwise, the cell will render NaN.
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
    
