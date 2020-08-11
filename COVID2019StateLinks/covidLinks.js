/*function searchState(searchTerm) {
    fetch((`https://covidtracking.com/api/v1/states/${searchTerm}/daily.json`))
        .then(result => {
            return result.json();
        })
        .then(result => {
            init(result)
        })
}


function init(resultFromServer) {
    switch (resultFromServer.searchState) {
        case 'AL':
            url = "https://ericfromspringfield1.github.io/COVIDDailyProject/COVID2019DailyALStats/covidAL.html"
            break;


        default:
            break;

        }
        console.log(resultFromServer)
    }


    

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
    searchState(searchTerm)
})
*/