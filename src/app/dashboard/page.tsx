"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        credentials: "include",
      });

      if (res.ok) {
        setLoading(false);
      } else {
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">You are logged in!</p>
    </div>
  );
}
