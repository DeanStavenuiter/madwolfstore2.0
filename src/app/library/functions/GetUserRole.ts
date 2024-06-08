import { User } from "@/app/typescript/types";
import { auth } from "@/auth";

const getUserRole = async () => {
  try {
    const session = await auth();

    if (session && session.user) {
      const user = session.user as User;
      return user.role;
    }
  } catch (error) {
    console.error("Error getting user role", error);
  }
};

export default getUserRole;
