import store from '../store';

export function openOrder(resp){
	store.dispatch({
		type:'OPEN_ORDER',
		itemList:resp
	})
}
export function addItem(resp) {
	store.dispatch({
		type: 'ADD_ITEM',
		newItem:resp
	})
}
export function deleteItem(resp) {
	store.dispatch({
		type: 'DELETE_ITEM',
		id:resp.id
	})
}

