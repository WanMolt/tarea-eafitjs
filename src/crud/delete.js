import { db } from "../main";
import { getdata } from "./getAll";

export const deleteTask = (i) => {
  db.splice(i, 1);
  localStorage.setItem("db", JSON.stringify(db));
  location.reload();
};
