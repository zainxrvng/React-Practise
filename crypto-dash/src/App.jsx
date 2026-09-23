import { useEffect, useState } from 'react'

const apiURl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkLine=false'

const App = () => {
    const [coins, setCoins] = useState([])
    const [loading, Setloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {


      fetch(apiURl)
        .then((res) => {
          if (!res.ok) throw new Error("failed to fetch data")
            return res.json()
          
        })
        .then((data) => {
          console.log(data);
          setCoins(data)
          Setloading(false)
        })
        .catch((err) => {
          setError(err)
          Setloading(false)
        })
    }, [])

  return (
    <div>
      <h1>Coin dashboard</h1>
    </div>
  )
}

export default App
