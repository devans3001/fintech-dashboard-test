
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"
import { Button } from "./button"
import { useRouter, useSearchParams } from "next/navigation"

const frameworks = [
  {
    value: "savings",
    label: "Savings",
  },
  {
    value: "income",
    label: "Incomes",
  },
 
  {
    value: "expenses",
    label: "Expenses",
  },

]

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  
  const initialValue = searchParams.get('accType') || ""
  const [value, setValue] = React.useState(initialValue)


  const handleSelect = (currentValue) => {
    const newValue = currentValue === value ? "" : currentValue
    setValue(newValue)
    setOpen(false)
    
    const params = new URLSearchParams(searchParams.toString())
    if (newValue) {
      params.set('accType', newValue)
    } else {
      params.delete('accType')
    }
    router.push(`?${params.toString()}`, { scroll: false })
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Account Type..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Select Account Typej..." className="h-9" /> */}
          <CommandList>
            <CommandEmpty>No Accounts found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={handleSelect}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
