let userInitialState = {
	itemList:[{}]
}

export default function(state = userInitialState, action) {
    switch(action.type) {
        
        case 'ADD_ITEM':

        var newState = {...state};

        newState.itemList.push({});

        return newState

        default:

        return state;

	}
}
