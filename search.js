const searchapi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6b699ca82msha2dfe74a2563032p138f2djsn18a7842cedab',
		'X-RapidAPI-Host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
	}
};
const searchBar = document.querySelector("#srchBar").value;
const bttn = document.getElementById("myBttn");

bttn.addEventListener("click",(e) =>{
    e.preventDefault();
})

async function searchresult(){
    const url = `https://imdb-movies-web-series-etc-search.p.rapidapi.com/${searchBar}`;
    const res = await fetch (`${url}`);
    const data = await res.json();
    if (data.Response == "True")displayResult(data.d)
    
}


function displayResult(){
    fetch(`https://imdb-movies-web-series-etc-search.p.rapidapi.com/${searchBar}.json`, searchapi)
    .then(response => response.json())
    .then(data => {
        const list = data.d;
        list.map((item) => {
            console.log(item)
            })
        })
    .catch(err => console.error(err));
}

