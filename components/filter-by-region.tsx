'use client'

import qs from 'query-string'
import { ChangeEvent, useState } from "react"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export const FilterByRegion = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedOption, setSelectedOption] = useState<string>('')

  const currentRegion = searchParams.get('currentregion')
  const currentCountryName = searchParams.get('countryname')

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const {value} = event.target

    // Update the state with the selected option
    setSelectedOption(value)

    // Construct the query string
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        // currentcountry: currentCountryName,
        region: value,
      }
    }, {skipNull: true, skipEmptyString: true})
    router.push(url)
  }
  
  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="w-56 h-14 px-4 dark:bg-dark-blue dark:text-light-elem shadow-2xl bg-light-elem rounded-md outline-none"
    >
      <option value="">Filter By Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}