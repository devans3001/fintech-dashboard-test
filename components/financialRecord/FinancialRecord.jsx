import Box from "./Box";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function FinancialRecord() {
  return (
    <div className="h-full flex flex-col">
      <header className="p-2 flex justify-between items-center">
        <h1 className="text-black text-lg font-semibold">Financial Record</h1>
        <Select>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
      </header>
      <div className="flex-1 flex justify-between gap-2">
        <Box color={"bg-green-100"} icon={"text-green-800"} />
        <Box color={"bg-red-100"} icon={"text-red-800"}/>
        <Box color={"bg-blue-100"}icon={"text-blue-800"} />
      </div>
    </div>
  );
}
