import { ErrorMsg,successMsg } from "../utils/message";
import {userInfo} from "../utils/auth"
const myState = {
  item: [],
  transportSystem: "",
  transportFee: 0,
  user : {},
  buyProduct: [],
  checkOutUserData : {},
  number : 0,
  bOrN : null

};



const ItemList = (state = myState, actions) => {
  
  switch (actions.type) {
    case "ADD":
      let datas = state.item.findIndex(el => el._id === actions.value._id)
      console.log(datas)
      if (datas === -1) {
      successMsg("success","Product Added successfully")
      let tempValue = {...actions.value}
      tempValue.tempWeight = tempValue.weight
      
        return {
          ...state,
          item: [...state.item, tempValue],
        };
      } else {
        ErrorMsg(true, "Item Already Added")
        return {
          ...state
        }
      }

      break

    case "DELETE":
      const data = state.item.filter((element) => element._id !== actions.value);
      return {
        ...state,
        item: [...data],
      };
      break
    case "ITEM_INC":
      console.log(actions.value);
      let INC_ITEM = state.item.find((el) => el._id === actions.value);

      INC_ITEM.count = INC_ITEM.count + 1;
      INC_ITEM.tempWeight = INC_ITEM.weight *  INC_ITEM.count
      
      console.log("item",INC_ITEM);

      const index = state.item.indexOf(INC_ITEM);
      state.item.splice(index, 1, INC_ITEM);
      return {
        ...state,
        item: [...state.item],
      };
      break
    case "ITEM_DIC":
      let DIC_ITEM = state.item.find((el) => el._id === actions.value);

      if (DIC_ITEM.count > 1) DIC_ITEM.count = DIC_ITEM.count - 1;
     
      DIC_ITEM.tempWeight =  DIC_ITEM.weight *  DIC_ITEM.count

      const indexNumber = state.item.indexOf(DIC_ITEM);
      state.item.splice(indexNumber, 1, DIC_ITEM);
      return {
        ...state,
        item: [...state.item],
      };

      break
    case "transport_add":
      return {
        ...state,
        transportSystem: actions.value.transportSystem,
        transportFee: actions.value.transportFee,
      };
      break;
    case "ADD_USER_DATA":
      return {
        ...state,
        user: actions.value
      };
    case "REMOVE_ALL_ITEM":
      const tempItem = state.item
      return {
        ...state,
        item: [],
        buyProduct: [...tempItem, ...state.buyProduct]

      }
      break
    case  "CHECKOUT_USER_DATA":
     let {_id,name} =  userInfo()
        return {
          ...state,
          checkOutUserData : {...actions.value, user : _id, name : name }
        } 
      break
    default:
      return state;
  }
};










export default ItemList;
