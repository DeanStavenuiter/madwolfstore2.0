import { User } from "@/app/typescript/types";
import { auth } from "@/auth";

const getUserSession = async () => {
  try {
    const session = await auth();
    if (session && session.user) {
      const user = session.user;

      return new Promise((resolve) => {
        resolve({
          user,
        });
      });
    }
  } catch (error) {
    console.error("Error getting user session", error);
  }
};

export default getUserSession;
