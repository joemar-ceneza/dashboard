import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Link href={"/login"} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        <button>Login</button>
      </Link>
    </main>
  );
}
