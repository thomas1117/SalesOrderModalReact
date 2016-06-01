let userInitialState = {
	itemList:[],
    total:0,
    salesTax:0,
    additionalDiscount:0
}


const item = (state={},action) => {
    switch(action.type) {
        case 'UPDATE_ITEM':
            let {item_number,description,price,quantity_ordered,quantity_on_hand,quantity_delivered} = action.payload.data;
            if(state.id===action.payload.id) {
                return {
                    id:action.payload.id,
                    item_number,
                    description,
                    price,
                    quantity_ordered,
                    quantity_on_hand,
                    quantity_delivered,
                }
            }
            return state;
    }
}

const reduced = (data) => {
    var total = 0;

    for(var i=0;i<data.length;i++){
        total += Number(data[i].price||0) * Number(data[i].quantity_ordered||0)
    }

    return total;
}
export default function(state = userInitialState, action) {
    switch(action.type) {
        case 'OPEN_ORDER':
            
            return {
                ...state,
                itemList: [{id:Math.random()}
                ],
                
            }

        case 'ADD_ITEM':
            
            
	        return {
                ...state,
                itemList: [
                    ...state.itemList,
                    {id:Math.random()}
                ]
            }
           

            
        case 'UPDATE_ITEM': 
            var itemList = state.itemList.map(data => item(data,action))
            
            return {
                ...state,
                itemList:itemList,
                total: reduced(itemList)
            }

        case 'DELETE_ITEM':
            
          

            return {
                ...state,
                itemList: state.itemList.filter(item => item.id!==action.id)
            }

        case 'UPDATE_SALES_TAX':
            return {
                ...state,
                salesTax:action.payload
        }

        case 'UPDATE_ADD_DIS':
            return {
                ...state,
                additionalDiscount:action.payload
            }

        default:

        	return state;

	}
}
