const CoinCard = ( {coin} ) => {
  return (
    <div>
      <div>
        <div>
          <img src={coin.image} alt={coin.name} />
          <div>
            <h2>{coin.name}</h2>
            <p>{coin.symbol.toUpperCase()}</p>
          </div>
          <p>Price: ${coin.current_price.toLocaleString()}</p>
          <p
            className={
              coin.price_change_percentage_24h >= 0 ? "postive" : "negative"
            }
          >
            {coin.price_change_percentage_24h?.toFixed(2)} %
          </p>
          <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default CoinCard
