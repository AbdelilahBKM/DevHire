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

const frameworks = [
  {
    value: "javascript",
    label: "JavaScript",
  },
  {
    value: "python",
    label: "Python",
  },
  {
    value: "php",
    label: "Php",
  },
  {
    value: "ruby",
    label: "Ruby",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "vue",
    label: "Vue",
  },
  {
    value: "sass",
    label: "Sass",
  },
  {
    value: "django",
    label: "Django",
  },
  {
    value: "laravel",
    label: "Laravel",
  },
  {
    value: "ror",
    label: "Ror",
  }
  
]

export function ToolsComboBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const {setTool} = React.useContext(setFilterContext)
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
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Language/Framework"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty></CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                  setTool(currentValue === value ? null : currentValue)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
