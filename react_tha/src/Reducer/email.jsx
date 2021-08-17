const mail = (state = "Sinhashrey",action) =>{
    switch (action.type) {
        case "Email": return state = action.email;
            break;
        default: return state;
            break;
     }
    }
    export default mail;