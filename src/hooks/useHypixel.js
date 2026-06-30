import { useEffect, useState } from "react";

export function useHypixel() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hypixel")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setStats(data.player);
      })
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading };
}