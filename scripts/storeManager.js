function saveUser(user){

    let oldUsers = readUsers();

    console.log(user); // this is obj
    oldUsers.push(user);
    let val =JSON.stringify(oldUsers); //parse the obj into string
    console.log(val);//
    localStorage.setItem("users",val)
}

function readUsers(){
   let users= localStorage.getItem("users"); //getting the users from LS
   console.log(users);

    if(!users){

        return [];

    }else{

        let listUsers =JSON.parse(users);
        console.log(listUsers);
        return listUsers;
    }

}