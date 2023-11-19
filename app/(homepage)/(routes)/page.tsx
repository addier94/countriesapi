import { getCountry } from "@/actions/get-country"
import { getDashboardCountries } from "@/actions/get-dashboard-countries"
import CountryItem from "@/components/country-item"
import Filter from "@/components/filter"
import { TCountries } from "@/type/countries-type"

interface SearchHomePageProps {
  searchParams: {
    region: string,
    countryname: string
  }
}

const HomePage = async ({
  searchParams: { countryname }
}: SearchHomePageProps) => {

  // let countries:TCountries[] = await getDashboardCountries()
  let countries:TCountries[] = []

  if(countryname){
    countries = await getCountry(countryname)
  } else {
    countries = await getDashboardCountries()
  }

  return (
    <>
      <Filter />
      <article className="px-16 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 dark:bg-dark-blue-bg">
        {countries.length && countries.map((country, id) => (
          <CountryItem
            key={id}
            {...country}
          />
        ))}
      </article>
    </>
  )
}

export default HomePage