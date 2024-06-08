import { User } from "@/app/typescript/types";
import { auth } from "@/auth";

const getUserSession = async () => {
  try {
    const session = await auth();
    if (session && session.user) {
      const user = session.user as User;
      return {
        id: user.id,
        image: user.image,
        role: user.role,
      };
    }
  } catch (error) {
    console.error("Error getting user session", error);
  }
};

export default getUserSession;
