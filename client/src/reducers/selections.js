// REDUCER

const initialState = {
  dinnerChoice: 'dinner default',
  drinksChoice: 'drinks default',
  dinnerSelected: false
  
}

function selections(state = initialState , action) {
  switch(action.type){
    case 'DINNER_CHOICE':
    console.log("SELECTION ACTION", action.payload )     
        return Object.assign( { }, state, {
            dinnerChoice: action.payload.name,
            dinnerSelected: true
        });
    case 'DRINKS_CHOICE':
    console.log("DRINKS ACTION", action.payload )     
        return Object.assign( { }, state, {
            drinks: action.payload
        });
    default:
      return state;
  }
  return state;
}


export default selections;