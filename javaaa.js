const topmovies = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '75b336fb69msh920da030862a59bp161c2ejsn89b10ae57247',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
const searchapi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6b699ca82msha2dfe74a2563032p138f2djsn18a7842cedab',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};
/*fetching top 100 movies from imdb*/
fetch('https://imdb-top-100-movies.p.rapidapi.com/', topmovies)
	.then(response => response.json())
	.then(data => {
        const list = data;
        list.map((item) => {
            console.log(item);
            const name = item.title;
            const poster = item.image;
            const descr = item.description
            const movie = `<li><img src ="${poster}"></img><h2>${name}</h2></li>`
            document.querySelector(".movies").innerHTML += movie;
        })
    })
	.catch(err => console.error(err));



const bttn = document.getElementById("myBttn");/*declare button from httml*/

bttn.addEventListener("click",(e) =>{
    e.preventDefault();/*prevent webpage to revert to default on button click*/
    const searchBar = document.querySelector("#srchBar").value;
    displayResult(searchBar);
})  

async function searchresult(searchBar){
    const url = `https://imdb-movies-web-series-etc-search.p.rapidapi.com/${searchBar}`;
        const res = await fetch (`${url}`);
        const dataa = await res.json();
        if (dataa.Response == "True")displayResult(dataa.d)
}

function displayResult(searchBar){
    fetch(`ott-details.p.rapidapi.com/${searchBar}.json`, searchapi)
    .then(response => response.json())
    .then(data => {
        const list = data.d;
        list.map((object) => {
            console.log(object);
            const name = object.title;
            const poster = object.imageurl;
            const movie =`<li><img src ="${poster}"></img><h2>${name}</h2></li>`
            document.querySelector(".movies").innerHTML += movie;
            })
        })
    .catch(err => console.error(err));


}