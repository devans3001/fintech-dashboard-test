// components/Header.jsx
import SelectPage from "./Select";

export default function Header({ title, myClass, timeKey = "timeFrame" }) {
  return (
    <header
      className={`p-2 flex ${
        myClass ? "gap-2" : "justify-between"
      } items-center text-black`}
    >
      <h1 className={`text-lg font-semibold ${myClass}`}>{title}</h1>
      <SelectPage paramKey={timeKey} />
    </header>
  );
}
