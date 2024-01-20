import { useState, useEffect } from 'react';
import axios from 'axios';

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('SGD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/currencies.json');
        const currencyList = Object.keys(response.data);
        setCurrencies(currencyList);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );

        const rate = response.data.rates[toCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      const converted = amount * exchangeRate;
      setConvertedAmount(converted);
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>
          Amount in {fromCurrency}:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>
        <label>
          Convert from:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Convert to:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <p>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}.
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;