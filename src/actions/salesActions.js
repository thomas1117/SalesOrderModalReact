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
export function updateItem(resp) {
	store.dispatch({
		type:'UPDATE_ITEM',
		payload:resp
	})
}
export function updateSalesTax(resp) {
	store.dispatch({
		type:'UPDATE_SALES_TAX',
		payload:resp
	})
}
export function updateAddDis(resp) {
	store.dispatch({
		type:'UPDATE_ADD_DIS',
		payload:resp
	})
}
export function deleteItem(resp) {
	store.dispatch({
		type: 'DELETE_ITEM',
		id:resp.id
	})
}

