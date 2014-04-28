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

console.log('~~~~~~~~~~~~~ getCountryMsLocales');
console.log(lib.getCountryMsLocales('in'));

console.log('~~~~~~~~~~~~~ getLanguageMsLocales');
console.log(lib.getLanguageMsLocales('en'));

console.log('~~~~~~~~~~~~~ getLanguageFamilyMembers');
console.log(JSON.stringify(lib.getLanguageFamilyMembers('Austronesian'), null, 2));