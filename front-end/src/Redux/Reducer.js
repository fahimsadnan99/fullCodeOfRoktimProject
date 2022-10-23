import { ErrorMsg,successMsg } from "../utils/message";
const myState = {
  item: [],
  transportSystem: "",
  transportFee: 0,
  user: {},
  buyProduct: [],
  email : "",
  checkOutData : {},
};



const ItemList = (state = myState, actions) => {
  console.log("state",state);
  switch (actions.type) {
    case "ADD":
      console.log(actions.value);
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
      case  "TEMP_MAIL" :
        return {
          ...state,
          email : actions.value.email
        } 
      break
    default:
      return state;
  }
};










export default ItemList;
