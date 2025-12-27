import { useEffect, useState } from "react";

export function useBookBySlug(slug) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);

        const res = await fetch("/data/books-v2.json", { cache: "no-store" });
        const all = await res.json();

        const found = all.find((b) => b.href === slug);
        if (alive) setBook(found || null);
      } catch {
        if (alive) setBook(null);
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, [slug]);

  return { book, loading };
}