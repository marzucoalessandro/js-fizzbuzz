//FizzBuzz
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per?
//abbiamo visto qlk di particolare che possiamo usare?



//1 impostiamo un ciclo for per far si che conti tutti i numeri da 0 a 100;

//2

//3 impostiamo le ns condizioni:

//4 se il numero è multiplo di 3 allora stampi Fizz

//5 se il numero è multiplo di 5 stampi Buzz

//6 ulteriore condizione se il numero è multiplo di 3 e 5 stampi fizzbuzz.





for ( i=1; i<101; i++) {
  //console.log(i);
  //abbiamo verificato che il nostro ciclo ha effettivamente contato tutti i numeri
  //impostiamo le ns condizioni

  if (i %3 == 0 && i%5 == 0) {
    console.log("fizzbuzz");
  } else if (i %3 == 0) {
    console.log("fizz");
  } else if (i %5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }

}
