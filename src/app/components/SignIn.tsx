import { signIn } from "@/auth";
import Image from "next/image";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
      className=""
    >
      <button type="submit" className="flex flex-row gap-3 items-center">
        <Image
          className=""
          width={15}
          height={15}
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google logo"
        />
        Sign in{" "}
      </button>
    </form>
  );
}
