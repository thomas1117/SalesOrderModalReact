let userInitialState = {
	itemList:[{}]
}

export default function(state = userInitialState, action) {
    switch(action.type) {
        case 'OPEN_ORDER':
        
	        var newState = {...state};

	        newState.itemList = [{}];

        	return newState;

        case 'ADD_ITEM':

	        var newState = {...state};

	        newState.itemList.push({});

        	return newState

        default:

        	return state;

	}
}
