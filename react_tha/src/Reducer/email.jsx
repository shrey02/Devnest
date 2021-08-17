const mail = (state = "Sinhashrey",action) =>{
    switch (action.type) {
        case "Email": return state;
            break;
        default: return state;
            break;
     }
    }
    export default mail;