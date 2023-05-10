# Single-Page-Application-SPA - Final-Project

Dies ist das Abschlussprojekt für Single-Page-Application-SPA.
Es besteht aus einer Online-Shop-Website. Der Projekt Fokus liegt auf der Verwendung der im Unterricht erlernten Konzepte
in einer realen Lebenssituation (Online-Shop).

## Struktur

Die App-/Website-Codes sind in zwei Hauptteile unterteilt: UI (React Components) und Javascript (Funktionen zum Abrufen und Bearbeiten von Daten,...)

### UI (React Components)

Die Hauptkomponenten sind:

-   `App`: Root Komponente und enthält Routing-Definitionen.
-   Komponenten für jede Artikelkategorie.
-   `ProductData`: Wird von den Kategorienkomponenten verwendet, um Produktdetails anzuzeigen.
-   `Contact`: Wird zur Erfassung von Benutzerdaten verwendet. Anwendung von
    -   Forms
    -   useNavigate: Formulardaten werden an eine andere Komponente übergeben
- Nav: Für die Seitennavigation.
-   Footer: Fußzeile der Website.

Die hervorzuhebenden React-Funktionen der App sind:

-   Routing wird verwendet.
-   Artikel (Produkt) Daten werden mithilfe einer asynchronen Funktion geladen (ähnlich der realen Situation, in der Daten von einer API geladen werden). Hier werden `useState` und `useEffect` angewendet.

### Javascript

-   Product class (zur Modellierung des Produkts).
-   ProductService (um Aktionen für Produkte wie fetch, Sortieren, Suchen auszuführen).
-   Liste der Produkte als Array (vorerst, da keine Datenbank oder API vorhanden).
