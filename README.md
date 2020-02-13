# Uppgift - Min Spotify

Syftet med denna uppgift är att bekanta sig med Spotify API:et för att hämta data och visa resultatet på en sida. 

Spotify API:et är öppet, men det kräver autentisering. Authentiseringen bygger på OAuth 2.0 vilket innebär att för att kunna hämta från Spotify API:et behöver vi först få tillång till en s.k accesstoken som är giltig i ca 30 min. För det kör vi en node server för att autentisering och tillgång till en temporär accesstoken. När vi fått en giltig accesstocken skickar vi denna till vår frontend som url-parameter. I vår frontend hämtar vi vår accesstoken från url:en och skickar med denna som header i vår HTTP-föfrågan med fetch() till Spotify API:ets endpoint https://api.spotify.com/v1/users/username/playlists. Om denna inloggning lyckas har vi sedan fri tillgång till all data som kommuniceras via Spotify API:et :-)

### Här finns dokumentation om Spotify API:et
https://developer.spotify.com/documentation/web-api/


### Inspirationen och cred till dessa killar! De som skrivit backendkoden.
https://www.youtube.com/watch?v=f5OLDvwP-Ug&t=696s
Dessa killar använder frontend-ramverket React. Detta kommer inte vi att göra (=för mycket att lära sig)


## Instruktioner

För att komma igång med authentiseringen.

1. Du måste först registrera dig som anförtrodd Spotify utvecklare. Du behöver också ha ett eget Spotifykonto, premium eller gratis. [Följ denna guide.](https://github.com/mediagymnasiet-webbutveckling/wsp-myspotify/blob/master/Inst%C3%A4llningar%20f%C3%B6r%20tillg%C3%A5ng%20till%20Spotify%20API.pdf)


2. Ladda ner koden från denna repository och zippa upp.


    Här finns en mapp **backend** som sköter autentiseringen och skickar oss till en loginsida. Om inloggningen lyckas mottas ett **accesstocken** som skickas som url-parameter till vår **frontend**.

    Mappen **frontend** sköter endast hämtning och visning av datat. För att den ska fungera behövs ett giltigt accesstoken  som skickas med i headern för **fetch**.


3. Börja med att sätta upp backend. 

    - Installera de paket som hör till projektet med **npm install**
    - Skapa en .env fil i mappen
    - I .env lägg in uppgifterna för:

        ```
        SPOTIFY_CLIENT_ID=xxx 
        SPOTIFY_CLIENT_SECRET=yyy
        ``` 

    **Obs!** *Var försiktigt med dina spotifyuppgifter! Ladda inte upp dessa på webdev eller annat publikt ställe. Låt dem vara på en fil på din dator. Du kan alltid få tag i dem igen genom att logga in på din Dashboard på https://developer.spotify.com/documentation/web-api/*


4. Starta servern genom att skriva **node server.js** i terminalen 


5. Gå till **localhost:8888/login**. Det är på denna port för vår lokala server som vår backend hostas.


7. Logga in med ditt Spotifykonto. Obs! Om du redan är inloggad med Spotify på din dator kommer denna inte upp. Bara attfortsätta till nr 7.


6. I **frontend mappen öppnar du terminalen** och kör live-server. Detta gör du genom att skriva **live-server** i terminalen. Denna kör en lokal server på port 8080, samma port som vår accesstoken skickas om url-parameter.


7. Om asdressraden localhost:8080/?access_token=BQCQYIyU0mF8Y6dU9OxIQtctq... visas i din webbläsare ska det fungera! (Alltså annat accesstoken än denna :-)


8. Om ca 30 minuter förlorar din accesstoken giltighet. Då måste du alltså starta om servern i backend med **node server.js** och logga in igen!


9. Nu kan du börja hämta data från Spotify API:et. Gå till frontendmappen och **index.js**. 


10. Börja med att se att du får ett resultat genom att hämta data från Spotify API:ets endpoint        med **fetch**. Följ stegen i **index.js** och börja med att skriva ut data med console.log för     att bekräfta att du kan ta hem en spellistorna för en användare.

11. Om du får hem data, fortsätt vidare med nstruktionerna i **index.js**. Ditt färdiga resultat ska vara att slumpad spellista från vald använda visas på sidan. Du visar bilden för albumet, lista med vardera artist - låt, samt länklyssning i Spotify.

12. Kom ihåg att kontinuerligt använda dig av **console.log** för att skriva ut ditt data och se att du är på rätt väg :-)



## Bedömning

### Del 1

* Du kan visa en fungerande slumpad spellista från valfri användare med information om bild, artist - låt samt en länk till lyssning på Spotify. Du gör detta genom de 15 stycken instrukitonssteg som finns i filen frontend -> index.js.

### Del 2

* Du gör en egen twist på datat från Spotify API:et. Din sökning och visning är helt valfri. Du tar hjälp av **Web API Reference**          https://developer.spotify.com/documentation/web-api/reference/.  Om du inte kommer på något, vill ha idéer, fråga din lärare!
* Du använder förutom map, även filter, reduce eller sort för att hantera data.
* Bra att veta: Jag har inga höga krav på styling. Om du vill ha "snabb" hjälp med styling använd gärna ett ramverk som [Bootstrap](https://getbootstrap.com/). Denna kurs handlar mer om att hantera data än om CSS.


### Exempel från svar i Del 1:
![Random Playlist](https://github.com/mediagymnasiet-webbutveckling/wsp-myspotify/blob/master/screen.png)

Lycka till!
/Sandra


   
