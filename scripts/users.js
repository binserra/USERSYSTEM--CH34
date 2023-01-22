function displayUsers(usersArray){
    //travel the array
for(let i=0;i<usersArray.length;i++){
    let user = usersArray[i];
    tr=`
    <tr>
        <td>${user.Fname}</td>
        <td>${user.Lname}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.phone}</td>
        <td>${user.payment}</td>
        <td>${user.color}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
    </tr>
    `;

    //create the tmp
$("#users-tables").append(tr);
    //append the tmp into the HTML table
}
}

function init(){
    console.log("Listing users...");
    let users = readUsers();
    displayUsers(users);
}

window.onload=init;