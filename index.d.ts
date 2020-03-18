export type CbType<R, D> = (err: string | null, data: D) => R;

export interface LanguageCodes {
    /**
     * language iso639-1 code (2 letters)
     */
    iso639_1: string;
    /**
     * language iso639-2 code (3 letters)
     */
    iso639_2: string;
    /**
     * language iso639-3 code (3 letters)
     */
    iso639_3: string;
}

export interface Language extends LanguageCodes {
    /**
     * language iso639-2 code with some codes derived from English names rather than native names of languages (3 letters)
     */
    iso639_2en: string;
    /**
     * String array with one or more language names (in English)
     */
    name: string;
    /**
     * String array with one or more language names (in native language)
     */
    nativeName: string;
    /**
     * Language script direction (either 'LTR' or 'RTL') - Left-to-Right, Right-to-Left
     */
    direction: 'RTL' | 'LTR';
    /**
     * language family
     */
    family: string;
    /**
     * Array of country objects where this language is spoken
     */
    countries: Country[];
}

export interface LanguageCulturesMs {
    /**
     * language culture name
     */
    langCultureName: string;
    /**
     * language culture dispaly name
     */
    displayName: string;
    /**
     * language culture code
     */
    cultureCode: string;
}

export interface CountryCodes {
    /**
     * Country alpha-2 code (2 letters)
     */
    code_2: string;
    /**
     * Country alpha-3 code (3 letters)
     */
    code_3: string;
    /**
     * Country numeric code
     */
    numCode: string;
}

export interface Country extends CountryCodes {
    /**
     * Country name
     */
    name: string;
    /**
     * Array of language objects for each language spoken in the country
     */
    languages: Language[];
    /**
     * Array of language cultures for the country supported by Microsoft©
     */
    langCultureMs: LanguageCulturesMs[];
}

export interface LanguageData extends Omit<Language, 'countries'> {
    countries?: string[];
    langCultureMs?: LanguageCulturesMs[];
}

export interface CountryData extends Omit<Country, 'languages'> {
    languages?: string[];
}

export function getCountries(): CountryData[];

export function getLanguages(): LanguageData[];

export function getLanguageFamilies(): string[];


export const enum LanguageCodeType {
    iso639_1 = 1,
    iso639_2en = 2,
    iso639_3 = 3
}
export function getLanguageCodes(codeType?: LanguageCodeType): string[] | string;
export function getLanguageCodes<R extends unknown>(codeType: LanguageCodeType | undefined, cb: CbType<R, string[]>): R;


export const enum CountryCodeType {
    numCode = 1,
    code_2 = 2,
    code_3 = 3
}
export function getCountryCodes(codeType?: CountryCodeType): string[] | string;
export function getCountryCodes<R extends unknown>(codeType: CountryCodeType | undefined, cb: CbType<R, string[]>): R;

export function languageCodeExists(code: string): boolean;

export function countryCodeExists(code: string): boolean;

export function getCountry(countryCode: string): Country | string;
export function getCountry(countryCode: string, cb: undefined, noLangInfo: true): CountryData | string;
export function getCountry<R extends unknown>(countryCode: string, cb: CbType<R, Country>, noLangInfo?: false): R;
export function getCountry<R extends unknown>(countryCode: string, cb: CbType<R, CountryData>, noLangInfo: true): R;

export function getLanguage(languageCode: string): Language | string;
export function getLanguage(languageCode: string, cb: undefined, noCountryInfo: true): LanguageData | string;
export function getLanguage<R extends unknown>(languageCode: string, cb: CbType<R, Language>, noCountryInfo?: false): R;
export function getLanguage<R extends unknown>(languageCode: string, cb: CbType<R, LanguageData>, noCountryInfo: true): R;

export function getCountryLanguages(countryCode: string): LanguageCodes[] | string;
export function getCountryLanguages<R extends unknown>(countryCode: string, cb: CbType<R, LanguageCodes[]>): R;

export function getLanguageCountries(languageCode: string): CountryCodes[] | string;
export function getLanguageCountries<R extends unknown>(languageCode: string, cb: CbType<R, CountryCodes[]>): R;

export function getCountryMsLocales(countryCode: string): LanguageCulturesMs[] | string;
export function getCountryMsLocales<R extends unknown>(countryCode: string, cb: CbType<R, LanguageCulturesMs[]>): R;

export function getLanguageMsLocales(languageCode: string): LanguageCulturesMs[] | string;
export function getLanguageMsLocales<R extends unknown>(languageCode: string, cb: CbType<R, LanguageCulturesMs[]>): R;

export function getLanguageFamilyMembers(family: string): Language[] | string;
export function getLanguageFamilyMembers<R extends unknown>(family: string, cb: CbType<R, Language[]>): R;

export function getLocales(mode?: boolean): string[];
