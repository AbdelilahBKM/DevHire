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

const contracts = [
  {
    value: "full time",
    label: "Full Time",
  },
  {
    value: "part time",
    label: "Part Time",
  },
  {
    value: "internship",
    label: "Internship",
  },
  
]

export function ContractComboBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const {setContract} = React.useContext(setFilterContext);
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
            ? contracts.find((contract) => contract.value === value)?.label
            : "contract"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search contract..." />
          <CommandEmpty>No contract found.</CommandEmpty> */}
          <CommandGroup>
            {contracts.map((contract) => (
              <CommandItem
                key={contract.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  setContract(currentValue === value ? null : currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === contract.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {contract.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
