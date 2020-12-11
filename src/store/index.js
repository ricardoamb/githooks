import { createStore } from 'redux';

const INITIAL_STATE = {}

function courses(state, action) {
    switch (action.type) {
        case 'ADD_COURSE' :
            return false;
        default :
            return false;
    }
}

const store = createStore({});

export default store;
