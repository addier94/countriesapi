'use client'

import { FilterByName } from "./filter-by-name"
import { FilterByRegion } from "./filter-by-region"

export const Filter = () => {


  return (
    <div className="flex flex-col gap-y-10 px-16 py-7 dark:bg-dark-blue-bg md:flex-row md:justify-between">
      <FilterByName />
      <FilterByRegion />
    </div>
  )
}
