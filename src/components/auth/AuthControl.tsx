"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function AuthControl() {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <UserButton />;
  }

  return <SignInButton mode="modal" />;
}