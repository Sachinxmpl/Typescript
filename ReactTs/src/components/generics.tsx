import { Dispatch, SetStateAction } from "react";

type inputVarType = string | number;

function Generics<T extends inputVarType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter:Dispatch<SetStateAction<T>>
}) {
  return (
    <form>
      <label htmlFor="input"> {label} </label>
      <input type="text" id="input" value={value} onChange={(e) => setter(e.target.value as T)} />
      <button>Lets submit </button>
    </form>
  );
}

export default Generics;
