import { useSelector } from "react-redux";
import { RootState } from "../modules/reducer";

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todos);
  console.log("!!", todos);
  return todos;
}
