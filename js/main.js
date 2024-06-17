// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//CREARE UN ARRAY CON NUMERI RANDOM:

// creare un arrai vuoto
const arrayRandomNum = [];

while(arrayRandomNum.length < 5){ // inserire nell'array i numeri finché non si arriva a una lunghezza di 5
    // prendere la funzione che genera i numeri random
    let randomNum = generateRandomNum(1, 100);

    // se il numero già presente genera un altro
    if(!arrayRandomNum.includes(randomNum)){
        arrayRandomNum.push(randomNum);
    }
}
console.log(arrayRandomNum);

// STAMPARE IN PAGINA I NUMERI GENERATI:
const container = document.getElementById("container");

for(i = 0; i < arrayRandomNum.length; i++){
    // crea un elemento
    let item = createElemntWithClass("span", "number");
    item.append(arrayRandomNum[i]);
    container.append(item);
}

// prendo l'elemento:
// const stringNumber = document.querySelector(".random_number");
// stringNumber.append(arrayRandomNum);

// console.log(stringNumber);


    
    
    

// dopo che il browser ha eseguito questo compito legge una funzione con timer 30 sec
// questa funzione dovrà fare:
    // nascondere i numeri presenti in pagina
    // chiedere 5 volte alla persona di inserimente dei numeri
    // questi numeri verranno messi in un array ->
        // array vuoto
        // chiedo il numero
        // lo inserisco
    // confronto array della persona con l'array dei numeri random 
