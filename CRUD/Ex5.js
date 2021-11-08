const fs= require('fs')
const uniqid=require('uniqid')

const addUser =(Name,Email) => {

    const list=listOfUsers()
    const NewUser= {
        id:uniqid(),
        name:Name,
        em:Email
    }
    list.push(NewUser)
    saveUsers(list)
}

const removeUser=(id)=>{
    const list=listOfUsers()
    const filterdata= list.filter(val=>val.id!==id)
    if (list.length>filterdata.length ){

    saveUsers(filterdata)
}
else{
    console.log('id not found');
}
}

const updateUser=(id ,Name,Email)=>{
    const up=listOfUsers()
    const userUpdate=up.find(user=>user.id===id)
    userUpdate.name=Name,
    userUpdate.em=Email
    saveUsers(userUpdate)
}

const saveUsers=(userName)=>{
    const dat=JSON.stringify(userName)
    fs.writeFileSync('User.json',dat)
}

const listOfUsers=()=>{
    
try{
    const data= fs.readFileSync('User.json')
    const dataJson=data.toString();
    return JSON.parse(dataJson)
}

catch(err) {
   return []
}
}

module.exports={
    addUser,
    removeUser,
    updateUser
}



