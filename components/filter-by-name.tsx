'use client'

import qs from "query-string"
import { useEffect, useState } from "react"

import { useDebounce } from "@/hook/use-debounce"
import { Search } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const FilterByName = () => {
  const [value, setValue] = useState('')

  const debouncedValue = useDebounce(value)

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const currentRegion = searchParams.get('currentregion')

  useEffect(() => {
    if(debouncedValue || currentRegion){
      const url = qs.stringifyUrl({
        url: pathname,
        query: {
          // region: currentRegion,
          countryname: debouncedValue
        }
      }, {skipEmptyString: true, skipNull: true})
  
      router.push(url)
    } else {
      router.push('/')
    }

  }, [debouncedValue, currentRegion, router, pathname])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="dark:bg-dark-blue pl-7 h-14 flex items-center gap-x-4 shadow-xl rounded-md bg-light-elem md:w-96">
        <Search className="w-4 h-4 dark:text-light-elem text-light-mode-input"/>
        <input 
          type="text" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for a country..." 
          className="h-full w-full pr-6 bg-transparent dark:text-light-elem outline-none dark:placeholder-white"
        />
      </div>
    </form>
  )
}