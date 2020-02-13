// DOM variabler 
const form = document.querySelector('form');
const playListImage = document.querySelector('.image-holder');
const playListUL = document.querySelector('ul');

// Hämtar accesstoken från url-parametrar
let accessToken = new URLSearchParams(location.search).get('access_token');

// Vår asynkrona funktion som hämtar en playlist efter vald förfrågan (query)
async function fetchMusic(query) {
  if (!accessToken)
    return;
  let response = await fetch(`https://api.spotify.com/v1/users/${query}/playlists`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
    contentType: 'application/json'
  });

  // Väntar in att response-objektet i JSON-format görs om till ett vanligt objekt (data) 
  let data = await response.json();


  // 1. Hämta totala antalet spellistor för den efterfrågade användaren från "data" objektet



  // 2. Slumpa fram vilken spellista som ska visas. Tips: Math.floor(Math.random() * Math.floor(max))



  // 3. Spara den slumpade spellistans från "data" i en variabel. 



  // 4. Gör en ny förfrågan med fetch med uri-adressen från 4). Vänta in svaret med await.



  // 5. Vänta in att response-objektet i JSON-format från att 4) görs om till ett vanligt objekt (data) 



  // 6. Returnera svaret i 5)


}



async function handleSubmit(event) {

  // Låter oss stanna kvar på sidan även om formuläret submittas
  event.preventDefault();
  // Hämtar sökordet i formuläret
  let query = form.query.value;

  // Kör vår async funktion fetchMusic(query) 
  let playlistData = await fetchMusic(query);

  // 7. Använd svaret playListDAta för att anropa displayMusic(data) som ska visa en hämtad spellista på vår sida


}



function displayMusic(data) {

  // 8. Hämta bilden för spellistan


  // 9. Skapa html för en bild och låt src vara variabeln. 
  //    src = `<img src=IMAGEURL class="w-30 p-3" class="img-fluid img-thumbnail" alt="Playlist Image">`;


  // 10. Använd innerHTML på dom-variabeln playListImage för att visa bilden på sidan


  // 11. Nu ska du hämta URI (länk till låt på Spotify), ARTIST.NAME OCH TRACK.NAME för varje låt från spellistan.
  //     Börja med att hämta arrayen de ligger i somm finns under tracks => items



  // 12. Använd MAP för att göra ett list-element runt varje låt i spellistan. Ta hjälp av följande      
  //     `<li class="list-group-item bg-dark"> <a href=URI>ARTIST-NAME - TRACK-NAME</a></li>`



  // 13. Använd join() för att omvandla arrayen som bildats från MAP i 12) till en sträng för att kunna infoga som html



  // 14. Använd innerHTML på dom-variabeln playListUL för att lägga in listelementen i listan


}

// 15. Lägg in ett try- respektiv catch-block i async-functionen fetchMusic(). Med detta kan 
//     exempelivs en mysslyckad förfrågan över HTTP ge fel om detta. D.v.s "reject" av den 
//     promise som skapas med async-funktionen.


// Lyssna på submit på sökrutan (formuläret)
form.addEventListener('submit', handleSubmit);
