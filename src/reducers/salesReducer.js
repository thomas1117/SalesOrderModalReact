let userInitialState = {
	itemList:[]
}

export default function(state = userInitialState, action) {
    switch(action.type) {
        
        case 'ADD_ITEM':

        var newStateAdd = state;

        newStateAdd.itemList.push(action.newItem);

        return newStateAdd;

        default:

        return state;

	}
}
