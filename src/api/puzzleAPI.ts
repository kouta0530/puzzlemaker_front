import Axios from "axios";
import Puzzle from "@/models/Puzzle";

Axios.defaults.baseURL = "http://localhost:5000";

export async function getPuzzle(): Promise<Puzzle[]> {
  const response = await Axios.get("/select");
  if (response) {
    return response.data;
  }
  return [] as Puzzle[];
}
