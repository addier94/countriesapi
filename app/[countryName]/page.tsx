import { getCountry } from "@/actions/get-country"
import { formatNumber } from "@/lib/helpers";
import { TCountries } from "@/type/countries-type";
import { MoveLeft } from "lucide-react"
import Image from 'next/image';
import Link from "next/link";

interface CountryPageProps {
  params: { countryName: string}
}

export default async function CountryPage({
  params
}:CountryPageProps) {
  // destructure the first position of the array, 'cause there we have it country 
  const [ country ]:TCountries[] = await getCountry(params.countryName)

  const { name: { nativeName }, currencies, languages } = country;
  const dynamicNativeNameKey = Object.keys(nativeName)[0]
  const countryNativeName = nativeName[dynamicNativeNameKey as keyof typeof nativeName].common

  const dynamicKeyCurrency:string = Object.keys(currencies)[0]
  const countryCurrency = currencies[dynamicKeyCurrency].name

  const dynamicLangKey = Object.keys(languages)

  return (
    <article className="dark:bg-dark-blue-bg dark:text-light-elem px-8 lg:px-28 py-8 min-h-[calc(100vh-80px)]">
      <Link
        href='/' 
        className="inline-flex gap-2 px-8 py-2 shadow-slate-300 dark:text-light-elem shadow-md dark:shadow-light-color rounded-md mb-14"
      >
        <MoveLeft className="w-4 h-4 " />
        Back
      </Link>
      <section className="md:grid md:grid-cols-2 md:gap-8 lg:gap-24 xl:gap-44">
        <figure className="relative w-full aspect-video overflow-hidden">
          <Image 
            fill
            className="object-cover"
            alt={country.name.common}
            src={country.flags.svg}
          />
        </figure>
        <article className="">
          <div className="mb-10 md:mb-0 md:grid md:grid-cols-2 md:gap-2 ">
            <div className="leading-8 mb-10">
              <h1 className="mt-10 md:mt-0 mb-4 font-extrabold text-xl">{ country.name.official }</h1>
              <p>
                <span className="font-semibold">Native Name: </span>
                <span>{countryNativeName}</span>
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                <span>{formatNumber(country.population)}</span>
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                <span>{country.region}</span>
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                <span>{country.subregion}</span>
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                <span>{country.capital}</span>
              </p>
            </div>

            <div className="leading-8">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                <span>{country.tld}</span>
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                <span>{countryCurrency}</span>
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {dynamicLangKey.map((keys, id) => (
                  <span key={id}>{country.languages[keys]}, </span>
                ))}
              </p>
            </div>
          </div>

          <footer className="">
            <h2 className="font-extrabold mb-5">Border Countries: </h2>
            {country.borders && country.borders.map((border, id) => (
              <button 
                key={id}
                className="bg-light-elem shadow-sm px-14 py-2 mr-4 mb-4 rounded-sm dark:bg-dark-blue shadow-light-mode-input dark:shadow-light-color"
              >
                {border}  
              </button>
            ))}
          </footer>
        </article>
      </section>
    </article>
  )
}