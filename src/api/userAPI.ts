import Axios from "axios";
import UserRegistrationData from "@/models/UserRegistrationData";

Axios.defaults.baseURL = "http://localhost:5000";

export async function registUser(
  userData: UserRegistrationData
): Promise<string> {
  return Axios.post("/signup", userData);
}

export async function login(userData: UserRegistrationData): Promise<boolean> {
  return Axios.post("/login", userData);
}
