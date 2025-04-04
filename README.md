EX - Il compleanno dello Chef
===
Esercizio sull'utilizzo di async/await.
## Consegna
1. In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve: <br>
- Recuperare la ricetta da https://dummyjson.com/recipes/{id}
- Estrarre la proprietà userId dalla ricetta
- Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
- Restituire la data di nascita dello chef
## Bonus
1. Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

- Modifica getChefBirthday(id) per intercettare eventuali errori prima di fare la seconda richiesta.

2. Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno.