var lib = require('./index.js');

console.log('~~~~~~~~~~~~~ getCountries');
console.log(lib.getCountries());

console.log('~~~~~~~~~~~~~ getLanguages');
console.log(lib.getLanguages());

console.log('~~~~~~~~~~~~~ getLanguageFamilies');
console.log(lib.getLanguageFamilies());

console.log('~~~~~~~~~~~~~ getCountry');
console.log(lib.getCountry('IN'));

console.log('~~~~~~~~~~~~~ getLanguage');
console.log(lib.getLanguage('en'));

console.log('~~~~~~~~~~~~~ getCountryLanguages');
console.log(lib.getCountryLanguages('IN'));

console.log('~~~~~~~~~~~~~ getLanguageCountries');
console.log(lib.getLanguageCountries('en'));

