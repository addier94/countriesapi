import { getDashboardCountries } from "@/actions/get-dashboard-countries"
import Country from "@/components/country"
import { TCountries } from "@/type/countries-type"

export default async function Home() {

  const countries:TCountries[] = await getDashboardCountries()

  return (
    <article className="px-16 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 dark:bg-dark-blue-bg">
      {countries.length && countries.map((country, id) => (
        <Country
          key={id}
          {...country}
        />
      ))}
    </article>
  )
}