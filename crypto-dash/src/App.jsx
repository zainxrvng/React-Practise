import { useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";

const apiURl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkLine=false";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, Setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetechCoins = async () => {
      try {
        const res = await fetch(apiURl);
        if (!res.ok) throw new Error("faild to fetch data");
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        Setloading(false);
      }
    };
    fetechCoins();
  }, []);

  return (
    <div>
      <h1>Coin dashboard</h1>
      {loading && <p> Loading...</p>}
      {error && <div>{error}</div>}

      {!loading && !error && (
        <main>
          {coins.map((coin) => (
            <CoinCard coin={coin} key={coin.id} />
          ))}
        </main>
      )}
    </div>
  );
};

export default App;
