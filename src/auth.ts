import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "./app/library/prisma";
import Google from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
import { Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

interface AdditionalUserProps {
  id?: string;
  role?: string;
  emailVerified?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  name?: string;
  image?: string;
  email?: string;
}

type ExtendedUser = User & Partial<AdditionalUserProps>;

interface ExtendedSession extends Omit<Session, "user"> {
  id?: string;
  role?: string;
  emailVerified?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  user: ExtendedUser;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    session({ session, user }): Session {
      const extendedSession = session as ExtendedSession;

      // Remove properties from the session object
      if ("id" in extendedSession) delete extendedSession.id;
      if ("role" in extendedSession) delete extendedSession.role;
      if ("emailVerified" in extendedSession)
        delete extendedSession.emailVerified;
      if ("createdAt" in extendedSession) delete extendedSession.createdAt;
      if ("updatedAt" in extendedSession) delete extendedSession.updatedAt;
      if ("userId" in extendedSession) delete extendedSession.userId;

      // Remove properties from the user object
      if (extendedSession.user) {
        const userProps: (keyof AdditionalUserProps)[] = [
          "id",
          "name",
          "email",
          "role",
          "emailVerified",
          "createdAt",
          "updatedAt",
        ];
        userProps.forEach((prop) => {
          if (prop in extendedSession.user) {
            delete (extendedSession.user as any)[prop];
          }
        });
      }

      return extendedSession;
    },
  },
  providers: [Google],
});
