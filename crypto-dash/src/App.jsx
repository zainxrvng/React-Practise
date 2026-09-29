import { useCallback, useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const apiURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false" +
  `&x_cg_demo_api_key=${import.meta.env.VITE_CG_KEY}`;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoins = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(apiURL);
      if (res.status === 429)
        throw new Error(
          "CoinGecko is rate-limiting requests. Wait a minute, then retry.",
        );
      if (!res.ok) throw new Error("Couldn't load coin data.");
      setCoins(await res.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c14] text-white">
      {/* ambient background glows */}
      <div className="pointer-events-none fixed -left-40 -top-40 size-[32rem] rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 -right-40 size-[32rem] rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Coin dashboard
          </h1>
          <p className="mt-2 text-white/50">
            The 10 largest coins by market cap, priced in USD.
          </p>
        </header>

        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-xl bg-white/5" />
            ))}
          </div>
        )}

        {error && (
          <Alert
            variant="destructive"
            className="max-w-lg border-rose-400/30 bg-rose-500/10"
          >
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription className="flex flex-col items-start gap-3">
              {error}
              <Button size="sm" variant="secondary" onClick={fetchCoins}>
                Retry
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {!loading && !error && (
          <main className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coins.map((coin) => (
              <CoinCard coin={coin} key={coin.id} />
            ))}
          </main>
        )}
      </div>
    </div>
  );
};

export default App;
