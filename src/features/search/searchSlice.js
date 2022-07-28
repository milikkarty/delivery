export const setSearch = item => {
    return {
        type: 'search/setSearch',
        payload: item
    };
};

export const clearSearch = () => {
    return {
        type: search/clearSearch
    };
};

export const searchReducer = (state = '', action) => {
    switch (action.type) {
        case 'search/setSearch': {
            return action.payload;
        }
        case 'search/clearSearch': {
            return '';
        }
        default: {
            return state;
        }
    }
};