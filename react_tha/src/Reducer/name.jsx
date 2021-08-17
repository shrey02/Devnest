const name = (state = "Shrey",action) =>{
switch (action.type) {
    case "Name": return state = action.name;
        break;
    default: return state;
        break;
 }
}
export default name;