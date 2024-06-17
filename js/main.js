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
const container = document.querySelector(".container");

for(i = 0; i < arrayRandomNum.length; i++){
    // crea un elemento
    let item = createElemntWithClass("span", "number");
    item.append(arrayRandomNum[i]);
    container.append(item);
}


// dopo che il browser ha eseguito questo compito legge una funzione con timer 30 sec:


setTimeout(nascondiNumeri, 29500);


setTimeout(chiediEConfronta, 30000);


/* FUNZIONE */
// questa funzione nasconderà la stringa dei numeri prima del prompt
function nascondiNumeri(){
    container.classList.add("hide");
}

// questa seconda andrà a chiedere i numeri e farà la comparazione
function chiediEConfronta(){

    const arrayUserNum = []; // array vuoto per i numeri dell'utente
    let correctNum = 0;

    for(j = 0; j < 5; j++){ // chiedere 5 volte alla persona di inserimente dei numeri
        let userNumb = parseInt(prompt("Inserisci il numero:")); // chiedo il numero
        arrayUserNum.push(userNumb); // lo inserisco
    }

    
    // stampo in pagina il risultato:
    // prendo l'elemento della pagina
    const result = document.querySelector(".result");

    // comparazione dei due array:
    // array per i numeri azzeccati
    const rightNumber = [];

    for(k = 0; k < 5; k++){
        // se il numero nell'array random è uguale a quello della persona
        if(arrayRandomNum[k] === arrayUserNum[k]){
            correctNum++; //aumento il punteggio
            console.log("corretto");
            rightNumber.push(arrayUserNum[k]); //metto il numero indovinato nell'array

            console.log(parseInt(arrayRandomNum[k]));
            console.log(parseInt(arrayUserNum[k]));

        } else {
            console.log("Il numero corretto era:", parseInt(arrayRandomNum[k]));
        }
    }

    // stampo in pagina
    result.innerHTML = `Hai azzeccato, ${correctNum} numeri. I numeri che hai indovinato sono: ${rightNumber}`; 
    // stampa in console il punteggio e i numeri che ha scritto correttamente
    // console.log("Hai azzeccato", correctNum, "numeri. I numeri che hai indovinato sono:", rightNumber);    
}


    
        
        
        
    
