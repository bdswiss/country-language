var _ = require('underscore')
  , _d = require('underscore.deep')
  , data = require('./data.json');

_.mixin(_d);

var noop = function(err, value) {
  if (err) return err;
  return value;
};

exports.getCountries = function () {
  return data.countries;
};

exports.getLanguages = function () {
  return data.languages;
};

exports.getLanguageFamilies = function () {
  return data.languageFamilies;
};

exports.getCountry  = function (code, cb, noLangInfo) {
  var countries = data.countries
    , country
    , codeFld
    , langs;

  if ('string' !== typeof code) {
    return cb('No country code provided');
  }
  cb = cb || noop;
  code = code.toUpperCase();

  if (code.length == 2) {
    codeFld = 'code_2';
  } else if (code.length == 3) {
    codeFld = 'code_3';
  }

  if (codeFld) {
    country = _.find(countries, function (c) {
      return c[codeFld] == code;
    });
    if (!country) {
      return cb('There is no country with code "' + code + '"');
    }
    country = _.deepClone(country);
    if (!noLangInfo) {
      langs = country.languages;
      country.languages = [];
      _.each(langs, function (l) {
        country.languages.push(exports.getLanguage(l, null, true));
      });
    }
    return cb(null, country);
  } else {
    return cb('Wrong type of country code provided');
  }
};

exports.getLanguage = function (code, cb, noCountryInfo) {
  var languages = data.languages
    , language
    , codeFld = []
    , countrs;

  cb = cb || noop;

  if ('string' !== typeof code) {
    return cb('No language code provided');
  }
  code = code.toLowerCase();

  if (code.length == 2) {
    codeFld.push('iso639_1');
  } else if (code.length == 3) {
    codeFld.push('iso639_2');
    codeFld.push('iso639_2en');
    codeFld.push('iso639_3');
  }

  if (codeFld) {
    for (var i = 0; i < codeFld.length; i++) {
      language = _.find(languages, function (l) {
        return l[codeFld[i]] == code;
      });
      if (language) break;
    }
    if (!language) {
      return cb('There is no language with code "' + code + '"');
    }
    language = _.deepClone(language);
    if (!noCountryInfo) {
      countrs = language.countries;
      language.countries = [];
      _.each(countrs, function (c) {
        language.countries.push(exports.getCountry(c, null, true));
      });
    }
    return cb(null, language);
  } else {
    return cb('Wrong type of language code provided');
  }
};

exports.getCountryLanguages = function (code, cb) {
  var codes = [];

  cb = cb || noop;

  exports.getCountry(code, function (err, country) {
    if (err) return cb(err);
    _.each(country.languages, function (l) {
      codes.push({
          iso639_1: l.iso639_1
        , iso639_2: l.iso639_2en
        , iso639_3: l.iso639_3
      });
    });
  });
  return cb(null, codes);
};

exports.getLanguageCountries = function (code, cb) {
  var codes = [];

  cb = cb || noop;

  exports.getLanguage(code, function (err, language) {
    if (err) return cb(err);
    _.each(language.countries, function (c) {
      codes.push({
          code_2: c.code_2
        , code_3: c.code_3
        , numCode: c.numCode
      });
    });
  });
  return cb(null, codes);
};

exports.getCountryMsLocales = function (code, cb) {
  var codes = [];

  cb = cb || noop;

  exports.getCountry(code, function (err, country) {
    if (err) return cb(err);
    codes = country.langCultureMs;
  });
  return cb(null, codes);
};

exports.getLanguageMsLocales = function (code, cb) {
  var codes = [];

  cb = cb || noop;

  exports.getLanguage(code, function (err, language) {
    if (err) return cb(err);
    codes = language.langCultureMs;
  });
  return cb(null, codes);
};