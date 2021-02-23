import Piece from "@/models/Piece";
import Puzzle from "@/models/Puzzle";

export default interface PlayData {
  info: Puzzle;
  piece: Piece;
}
