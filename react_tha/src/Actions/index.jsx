export const changeName = (value)=> {
    return {
        type : "Name",
        name : value
    }
}
export const changeEmail = (value)=> {
    return {
        type : "Email",
        email : value 
    }
}