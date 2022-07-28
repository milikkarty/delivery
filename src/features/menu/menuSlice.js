import { menuData } from "../../data";

export const loadData = data => {
    return {
        type: 'menu/loadData',
        payload: menuData
    };
};

export const menuReducer = (menu = [], action) => {
    switch (action.type) {
        case 'menu/loadData': {
            return action.payload;
        }
        default: {
            return menu;
        }
    }
};