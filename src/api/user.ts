import axios from "axios";
import UserRegistrationData from "@/models/UserRegistrationData";

async function registUser(userData: UserRegistrationData): Promise<string> {
  return axios.post("/signup", userData);
}
