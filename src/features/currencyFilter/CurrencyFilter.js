import { currencyData } from "../../data";

const CurrencyFilter = () => {
    return (
        <div>
            {
                currencyData.map(currency => (
                    <button
                        key={currency}
                    >
                        {currency}
                    </button>
                ))
            }
        </div>
    )
}

export default CurrencyFilter;