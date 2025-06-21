const users = [
    {
        id: 1,
        firstName: "Idalia",
        lastName: "Franses",
        email: "ifranses0@mapy.cz",
        ipAddress: "180.153.67.217",
        language: "French",
        nin: "3033798411",
    },
    {
        id: 2,
        firstName: "Frederick",
        lastName: "Prince",
        email: "fprince1@huffingtonpost.com",
        ipAddress: "6.239.37.95",
        language: "English",
        nin: "3884188887",
    },
    {
        id: 3,
        firstName: "Iago",
        lastName: "MacCathay",
        email: "imaccathay2@wix.com",
        ipAddress: "244.252.97.163",
        language: "Italian",
        nin: "4502080942",
    },
    {
        id: 4,
        firstName: "Biddie",
        lastName: "Liddard",
        email: "bliddard3@noaa.gov",
        ipAddress: "6.107.79.145",
        language: "French",
        nin: "2931819395",
    },
    {
        id: 5,
        firstName: "Colas",
        lastName: "Moffett",
        email: "cmoffett4@purevolume.com",
        ipAddress: "200.4.236.255",
        language: "English",
        nin: "1288790260",
    },
];

/**
 * Write your code below!
 */
//pouzití filtru
//potřebuju vybrat jen některé uživatele, třeba ty kteří mluví anglicky

//const englishUsers= users.filter((user) => user.language === 'English');
//console.log(englishUsers);

//podle id
const usersWithIdGreaterThanTwo = users.filter((user) => user.id > 2);

console.log(usersWithIdGreaterThanTwo);

//použití map
//
// const jmana = ["Alena", "Petr", "Josef", "Alice"]
// const delky = jmana.map((jmeno) => { return jmeno.length })
// const osoby = jmana.map ((jmeno) => {return {
//      krestniJmeno : jmeno,
//     delkaJmana: jmeno.length
// }})
// console.log(jmana);
// console.log(delky);
// console.log(osoby);


const simpleUser = users.map((user) => {return {
    id: user.id,
    email: user.email,
}})

console.table(simpleUser);

