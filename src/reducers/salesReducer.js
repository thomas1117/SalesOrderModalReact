let userInitialState = {
	itemList:[],
}

let identifier = 0;

let idGen = () => {
   return identifier++;
}


const item = (state,action) => {
    switch(action.type){
        case 'DELETE_ITEM':
        
            return state.itemList.filter(function(item){
                if(action.id!==item.id) {
                    return true;
                }
            })
    }
}

export default function(state = userInitialState, action) {
    switch(action.type) {
        case 'OPEN_ORDER':
            
            return {
                ...state,
                itemList: [{id:idGen()}
                ],
                
            }

        case 'ADD_ITEM':
            
            
	        return {
                ...state,
                itemList: [
                    ...state.itemList,
                    {id:idGen()}
                ]
            }
           

            

        case 'DELETE_ITEM':
            var test = state.itemList.filter(item=>{
                if(item.id!==action.id){
                    console.log(item)
                    return true;
                }
            })
            return {
                ...state,
                itemList: test
            }
            
            
            

            // console.log('at id ',action.id)
            // return {
            //     ...state,
            //     itemList: state.itemList.filter(item => action.id !== item.id)
            // }

        default:

        	return state;

	}
}
