export const setCurrency = currency => {
    return {
        type: 'currencyFilter/setCurrency',
        payload: currency
    };
};

export const currencyFilterReducer = (currencyFilter = 'UAH', action) => {
    switch (action.type) {
        case 'currencyFilter/setCurrency': {
            return action.payload;
        }
        default: {
            return currencyFilter;
        }
    }
};