# sdmp.studio

Statische site: geen database, geen server-code. Alles wat je wilt aanpassen staat in `js/content.js`.

## Bestanden
- `index.html`: structuur van de pagina
- `css/style.css`: vormgeving
- `js/content.js`: alle teksten, video's, posters, releases
- `js/main.js`: bouwt de pagina op uit content.js (hoef je niet aan te raken)
- `download-images.sh`: haalt alle afbeeldingen van Squarespace binnen

## 1. Afbeeldingen veiligstellen (vóór je Squarespace opzegt)
Open Terminal in deze map en draai:

    bash download-images.sh

## 2. Lokaal bekijken
Dubbelklik `index.html`. Of, netter: `python3 -m http.server` en open http://localhost:8000

## 3. Online zetten: Cloudflare Pages (gratis)
1. Account op dash.cloudflare.com
2. Workers & Pages > Create > Pages > "Upload assets" > sleep deze map erin
3. Custom domains > sdmp.studio toevoegen

Bijwerken: zelfde map opnieuw uploaden als nieuwe deployment.
Automatisch: zet de map in een GitHub-repo en koppel die aan Cloudflare Pages; elke wijziging in content.js gaat dan vanzelf live.

## 4. Domein
Domein sdmp.studio verhuizen van Squarespace naar Cloudflare Registrar (kostprijs, geen opslag).
Squarespace Domains > sdmp.studio > ontgrendelen + autorisatiecode opvragen > in Cloudflare "Transfer domain".
Let op: zet eerst de DNS-records over, anders werkt je e-mail op dat domein (als je die hebt) even niet.

## Release toevoegen
Kopieer in `content.js` een regel in `discography`, pas titel, link en afbeelding aan. Zet `featured: true` voor groot bovenaan.
Nieuwe afbeelding: zet het bestand in `/img` en gebruik `img: 'img/naam.jpg'` in plaats van `img('...')`.
