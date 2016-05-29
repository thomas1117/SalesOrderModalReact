import store from '../store';

export function openOrder(resp){
	store.dispatch({
		type:'OPEN_ORDER',
		ItemList:resp
	})
}
export function addItem(resp) {
	store.dispatch({
	type: 'ADD_ITEM',
	newItem:resp
	})
}

