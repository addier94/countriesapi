import { TCountries } from "@/type/countries-type"
import Image from "next/image"
import Link from "next/link"

export const CountryItem = ({
  name,
  flags,
  population,
  region,
  capital,
}: TCountries) => {
  return (
    <Link href={name.common} className="shadow-md rounded-md dark:bg-dark-blue dark:text-light-elem">
      <section className="relative w-full aspect-video overflow-hidden rounded-t-md">
        <Image 
          fill
          className="object-cover"
          alt={name.official}
          src={flags.svg}
        />
      </section>
      <section className="font-semibold px-7 pb-8 text-lg leading-7">
        <h2 className="font-extrabold text-2xl mt-4 mb-3">{name.common}</h2>
        <p>Population: <span className="font-light">{population}</span></p>
        <p>Region: <span className="font-light">{region}</span></p>
        <p>Capital: <span className="font-light">{capital}</span></p>
      </section>
    </Link>
  )
}
