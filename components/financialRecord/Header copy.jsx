import SelectPage from "./Select";

export default function Header({ title, myClass }) {
  return (
    <header
      className={`p-2 flex bg-white ${
        myClass ? "gap-2" : "justify-between"
      } items-center text-black`}
    >
      <h1 className={`text-lg font-semibold ${myClass}`}>{title}</h1>
      <SelectPage />
    </header>
  );
}
