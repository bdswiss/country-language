country-language
==========

> Query any country's spoken languages or countries where a language is spoken.

## Installation

### Node.js

`country-language` is available on [npm](http://npmjs.org).

    $ npm install country-language

## Usage

Once you require `country-language`, the following API will be available.

```js
var countryLanguage = require('country-language');
```

### .getCountry (code, cb)

* **@param** _{String}_ country code
* **@param** _{Function}_ callback on complete or error
* **@cb** _{Error|null}_ if error
* **@cb** _{Object}_ object containing country info

Country code can be either an Alpha-2 or Alpha-3 code.
The returned object includes the following info:

* ```code_2```: Country alpha-2 code (2 letters)
* ```code_3```: Country alpha-3 code (3 letters)
* ```numCode```: Country numeric code
* ```name```: Country name
* ```languages```: Array of language objects for each language spoken in the country
* ```langCultureMs```: Array of language cultures for the country supported by Microsoft©

Each language object in ```languages``` property includes the following info:

* ```iso639_1```: language iso639-1 code (2 letters)
* ```iso639_2```: language iso639-2 code (3 letters)
* ```iso639_2en```: language iso639-2 code with some codes derived from English names rather than native names of languages (3 letters)
* ```iso639_3```: language iso639-3 code (3 letters)
* ```name```: String array with one or more language names (in English)
* ```nativeName```: String array with one or more language names (in native language)
* ```family```: language family
* ```countries```: Array of country objects where this language is spoken

Each Microsoft© language culture object in ```langCultureMs``` property icludes the following info:

* ```langCultureName```: language culture name
* ```displayName```: language culture dispaly name
* ```cultureCode```: language culture code


### .getLanguage (code, cb)

* **@param** _{String}_ language code
* **@param** _{Function}_ callback on complete or error
* **@cb** _{Error|null}_ if error
* **@cb** _{Object}_ object containing language info

Language code can be either iso639-1, iso639-2, iso639-2en or iso639-3 code.
Contents of the returned language object are described in **```.getCountry```** method.


### .getCountryLanguages (code, cb)

* **@param** _{String}_ country code
* **@param** _{Function}_ callback on complete or error
* **@cb** _{Error|null}_ if error
* **@cb** _{Object}_ object array containing country languages info

Country code can be either an Alpha-2 or Alpha-3 code.
Each language object contains the following info:

* ```iso639_1```: language iso639-1 code (2 letters)
* ```iso639_2```: language iso639-2 code with some codes derived from English names rather than native names of languages (3 letters)
* ```iso639_3```: language iso639-3 code (3 letters)


### .getLanguageCountries (code, cb)

* **@param** _{String}_ language code
* **@param** _{Function}_ callback on complete or error
* **@cb** _{Error|null}_ if error
* **@cb** _{Object}_ object array containing country info

Language code can be either iso639-1, iso639-2, iso639-2en or iso639-3 code.
Each Country object contains the following info:

* ```code_2```: Country alpha-2 code (2 letters)
* ```code_3```: Country alpha-3 code (3 letters)
* ```numCode```: Country numeric code


### .getCountryMsLocales (code, cb)

* **@param** _{String}_ country code
* **@param** _{Function}_ callback on complete or error
* **@cb** _{Error|null}_ if error
* **@cb** _{Object}_ object array containing Language Cultures info for the country

Country code can be either an Alpha-2 or Alpha-3 code.
Contents of each Language Culture object are described in **```.getCountry```** method.


### .getLanguageMsLocales (code, cb)

* **@param** _{String}_ language code
* **@param** _{Function}_ callback on complete or error
* **@cb** _{Error|null}_ if error
* **@cb** _{Object}_ object array containing Language Cultures info for the language

Language code can be either iso639-1, iso639-2, iso639-2en or iso639-3 code.
Contents of each Language Culture object are described in **```.getCountry```** method.


### .getCountries ()

Returns an array object with info for every country in the world having an ISO 3166 code.
Contents of each country object in the array is described in **```.getCountry```** method.


### .getLanguages ()

Returns an array object with info for every language in the world having an ISO 639-2 code (and a few more).
Contents of each language object in the array is described in **```.getCountry```** method.


### .getLanguageFamilies ()

Returns an array of strings with the names of each language family.


### .getLanguageFamilyMembers (family, cb)

Returns an array object with info for every language in the world having an ISO 639-2 code (and a few more).
Contents of each language object in the array is described in **```.getCountry```** method.

* **@param** _{String}_ language family name (
* **@param** _{Function}_ callback on complete or error
* **@cb** _{Error|null}_ if error
* **@cb** _{Object}_ object array containing languages info for each language member in the family.

Contents of the returned language object are described in **```.getCountry```** method.
<br />
## Notes

For the following methods:

* **.getCountry**
* **.getLanguage**
* **.getCountryLanguages**
* **.getLanguageCountries**
* **.getCountryMsLocales**
* **.getLanguageMsLocales**
* **.getLanguageFamilyMembers**

the ```cb``` parameter is optional. When not provided, each method returns either an Object when there is no error, or a String in case of an error.
<br/>
<br/>
<br/>
Any input parameter (country code, language code, language family name) is case insensitive.