import store from '../store';

export function addItem(resp) {
	store.dispatch({
	type: 'ADD_ITEM',
	newItem:resp,
	})
}

