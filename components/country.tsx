import { TCountries } from "@/type/countries-type"
import Image from "next/image"

const Country = ({
  name,
  flags,
  population,
  region,
  capital,
}: TCountries) => {
  return (
    <div className="shadow-md rounded-md dark:bg-dark-blue dark:text-light-elem">
      <section className="relative w-full aspect-video overflow-hidden rounded-t-md">
        <Image 
          fill
          className="object-cover"
          alt={name}
          src={flags.svg}
        />
      </section>
      <section className="font-semibold px-7 pb-14 text-lg leading-8">
        <h2 className="font-extrabold text-2xl mt-9 mb-5">{name}</h2>
        <p>Population: <span className="font-light">{population}</span></p>
        <p>Region: <span className="font-light">{region}</span></p>
        <p>Capital: <span className="font-light">{capital}</span></p>
      </section>
    </div>
  )
}

export default Country