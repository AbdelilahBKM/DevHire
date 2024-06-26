"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { setFilterContext } from "../jobListing"

const locations = [
  {
    value: "remote",
    label: "Remote",
  },
  {
    value: "worldwide",
    label: "Worldwide",
  },
  {
    value: "us",
    label: "US",
  },
  {
    value: "uk",
    label: "UK",
  },
  {
    value: "fr",
    label: "France",
  },
  {
    value: "de",
    label: "Germany",
  },
  {
    value: "ma",
    label: "Morocco",
  },
]

export function LocationsComboBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const {setRegion} = React.useContext(setFilterContext)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full lg:w-[200px] h-[60px] justify-between"
        >
          {value
            ? locations.find((location) => location.value === value)?.label
            : "Region"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty> */}
          <CommandGroup>
            {locations.map((location) => (
              <CommandItem
                key={location.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                  setRegion(currentValue === value ? null : currentValue)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === location.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {location.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
