export const calculatePrice = (price, currency) => {
    if (currency === 'USD') {
        return price / 37;
    } else if (currency === 'EUR') {
        return price / 38;
    } else {
        return price;
    }
}

export const calculateTotal = (cart, currency) => {
    let total = 0;
    Object.keys(cart).forEach(item => {
        total += cart[item].price * cart[item].quantity;
    });
    return calculatePrice(total, currency).toFixed(2);
};

export const getCurrencySymbol = (currencyFilter) => {
    if (currencyFilter === 'UAH') {
        return '₴';
    } else if (currencyFilter === 'USD') {
        return '$';
    } else if (currencyFilter === 'EUR') {
        return '€';
    } else {
        return '';
    }
};