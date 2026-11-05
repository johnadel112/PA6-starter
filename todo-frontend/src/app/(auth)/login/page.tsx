"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  function login() {
    document.cookie = "demo-auth=1; Path=/; SameSite=Lax";
    router.push("/dashboard");
    router.refresh();
  }
  return (
    <section className="panel">
      <h1>Demo login</h1>
      <p>Sign in to explore the dashboard routing exercise.</p>
      <p className="muted">
        This is a cookie demonstration, not a real account login.
      </p>
      <button onClick={login}>Log in</button>
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </section>
  );
}
