// components/Select.jsx
"use client";

import { useSearchParamsHook } from "@/hooks/useCustomHooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectPage({ paramKey = "timeFrame" }) {
  const { getParam, setParam } = useSearchParamsHook(); 
  const selectedValue = getParam(paramKey) || "";

  return (
    <Select 
      onValueChange={(value) => setParam(paramKey, value)}
      defaultValue={selectedValue}
    >
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select a Time Frame" />
      </SelectTrigger>
      <SelectContent className="text-black">
        <SelectGroup className="text-black font-bold">
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
