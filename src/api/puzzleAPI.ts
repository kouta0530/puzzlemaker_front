import Axios from "axios";
import Puzzle from "@/models/Puzzle";
import Piece from "@/models/Piece";
import PlayData from "@/models/PlayData";

Axios.defaults.baseURL = "http://localhost:5000";

export default {
  async getPuzzle(): Promise<Puzzle[]> {
    const response = await Axios.get("/select");
    if (response) {
      return response.data;
    }
    return [] as Puzzle[];
  },
  async getPieces(id: string): Promise<PlayData> {
    return Axios.get(`/play/${id}`);
  },
};
