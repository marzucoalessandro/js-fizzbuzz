//FizzBuzz
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per?
//abbiamo visto qlk di particolare che possiamo usare?

//1 creiamo una variabile a valore 0

//2 impostiamo un ciclo for per far si che conti tutti i numeri da 0 a 100;

//3 a questo punto inseriamo i numeri generati dal programma nell array

//4 impostiamo le ns condizioni:

// se il numero è multiplo di 3 allora stampi Fizz

// se il numero è multiplo di 5 stampi Buzz

// ulteriore condizione se il numero è multiplo di 3 e 5 stampi fizzbuzz.



 for ( i=1; i<101; i++) {
   console.log(i);
   //abbiamo verificato che il nostro ciclo ha effettivamente contato tuti i numeri
   //impostiamo le ns condizioni
   if (i %3 == 0) {
     console.log(i + "fizz");
   }  else if (i %5 == 0) {
      console.log(i + "buzz");
   } else if (true) {

   }



 }
