import getSymbolFromCurrency from 'currency-symbol-map'

export function moneyFilter (value, currency) {
  const symbol = getSymbolFromCurrency(currency)
  return `${symbol || currency}${value}`
}
