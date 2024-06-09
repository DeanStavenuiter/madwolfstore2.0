// "use server";
// // import getSession from "../getSession";
// import { User } from "next-auth";

// const getUserSession = async () => {
//   try {
//     const session = await getSession();
//     if (session && session.user) {
//       const user = session.user as User;

//       return user;
//     }
//     return null;
//   } catch (error) {
//     console.error("Error getting user session", error);
//   }
// };

// export default getUserSession;
