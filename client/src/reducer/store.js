const store = (state = [], action) => {

  switch (action.type) {

    case 'LOAD_ITEM_SUCCESS':
    return action.phonebooks.map((item)=>{
      item.sent = true;
      return item
    })

    case 'POST_STORE':
      return [
        ...state,
        {
          idUser: action.idUser,
          name: action.name,
          phone: action.phone,
          sent: true
        }
      ]

    case 'POST_STORE_SUCCESS':
      console.log('hasil dari >>',action.phonebooks);
      
      return action.phonebooks.map((item) => {
        item.sent = true;
        return item
      })

    case 'POST_STORE_FAILURE':
      return state.map((item) => {
        if (item.idUser === action.idUser) {
          item.sent = false;
        }
        return item
      })
  
     
      case 'DELETE_STORE':
        return state.filter((item) => item.idUser !== action.idUser)
  
      case 'DELETE_STORE_SUCCESS':
        console.log('store suksess');
        return state
  
      case 'DELETE_STORE_FAILURE':
      default:
        return state
      
      case 'PUT_PHONEBOOKS':
      const newState = [];
      state.forEach(item => {
        if (item.idUser === action.idUser){
          return newState.push(action)
        }
        return newState.push(item)
      })
      return newState;


      case 'PUT_PHONEBOOKS_SUCCESS':
        console.log('case edit success');
        
        return action.store.map((item) => {
          console.log('data item edit > ', item);
          
          item.sent = true;
          return item;
        })

      case 'PUT_PHONEBOOKS_FAILURE':
        return state.map(item => {
          if (item.idUser === action.idUser) {
            item.sent = false;
          }
          return item
        })
    }

   
  }


export default store