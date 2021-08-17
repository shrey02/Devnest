const name = (state = "Shrey",action) =>{
switch (action.type) {
    case "Name": return state;
        break;
    default: return state;
        break;
 }
}
export default name;