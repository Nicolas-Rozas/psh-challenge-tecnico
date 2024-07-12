import { UserDetails } from "@/types/chatTypes";
import { useState } from "react";
import axios from "axios";

const useRandomUser = () => {
  const [randomUser, setRandomUser] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");

      if (!response.data || response.data.results.length === 0) {
        throw new Error("No results found in API response.");
      }

      const newUser: UserDetails = {
        id: Date.now().toString(),
        name: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
        lastMessage: "New user added",
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        }),
        imageUrl: response.data.results[0].picture.large,
        role: "Sin rol",
        messages: [],
      };

      setRandomUser(newUser);
      return newUser;
    } catch (error) {
      console.error("Error fetching random user:", error);
      setError("Error fetching random user");
      throw error;
    }
  };

  return { randomUser, error, addUser };
};

export default useRandomUser;
