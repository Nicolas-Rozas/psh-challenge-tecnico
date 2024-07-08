import { UserDetails } from "@/types/chatTypes";
import { useState } from "react";

const useRandomUser = () => {
  const [randomUser, setRandomUser] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();

      if (data.results.length === 0) {
        throw new Error("No results found in API response.");
      }

      const newUser: UserDetails = {
        id: Date.now().toString(),
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        lastMessage: "New user added",
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        }),
        imageUrl: data.results[0].picture.large,
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
