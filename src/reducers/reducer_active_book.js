// state argument is not an application state, but only the state
// that this reducer is responsible for!
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            break;
    }

    return state
}