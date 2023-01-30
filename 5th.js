var myself ={
    name: 'Abid Hasan Purno',
    adress : 'dhaka, Tangail',
    age : 24,
    Home : 'Tangail , Baganbari',
    university : 'Daffodil International university',

}
var allcount = Object.keys(myself);
console.log(allcount);
console.log(myself);

var agecount = myself['age'];
console.log(agecount);
console.log('Home: ',myself.Home);

var positive = Object.keys(myself);
console.log(positive);

var value = Object.values(myself);
console.log(value);

 myself.Home = 'Thanapara';
 console.log(myself);

 myself['Home'] = 'Thana';
 console.log(myself);

 var prpartyname;
 myself['Home'] = 'kazipur';
 console.log(myself);
