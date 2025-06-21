const data = [1, 2, 3, 4, 5];

/**
 * Write your code below!
 */
//obyčejná funkce na součet
function soucet(a, b, ...dalsi){

    //mužu založit promenou c a pak procházet cele pole dalsi a dávam je do proměnné c
    let c = 0
    dalsi.forEach(cislo => {
        c += cislo;
    })
    console.log(c)

    console.log(dalsi)
    const result = a + b + c ;
    return result;
}
// použijeme pro výpis
console.log(soucet (5, 7));
//dokážeme nastavit libovolný počet parametru pomocí rest opertoru píše se to jako tři tečky a nějaký název
console.log(soucet(5,7,4,3,1,2))

console.log( soucet( 100, 200, ...data)); //musíme použít spret operátor jinak se to nedá to pole použít