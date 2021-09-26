// console.log('connected');

//javascript object == (javascript object Notation) == (JSON)
const user = { id: 11, name:'Gorib Amir', job : 'actor' };

//convert stringify
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified); 

const shop = {
    name : 'Alia Store',
    address : 'Ranbir Road',
    profit : 15000,
    products : ['laptop', 'mobile', 'pepsi'],
    owner : {
        name: 'Alia Bhat',
        profession : 'actor'
    },
    isExpensive : false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop); //object akare show korbe default
console.log(shopStringified); // JSON string akare show kore
console.log(shopStringified.owner); // kono output dibena

const converted = JSON.parse(shopStringified);
//abaro javascrit object e convert kore felbe.
//JSON parse korle object ta abar regular object er moto kaj korbe 
//tarpor console theke sei object er alada alada property ke access korte parbo 
console.log(converted);
console.log(converted.owner);