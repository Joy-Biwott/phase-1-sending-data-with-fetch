//Add your code here
document.addEventListener('DOMContentLoaded', (e) =>{
  e.preventDefault()



function submitData(userName, userEmail){
    const configMessage ={
        method : "POST",
        headers : {
            "Content-Type":"application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name : `${userName}`,
            email : `${userEmail}`,
        })
      }
   
    return fetch('http://localhost:3000/users', configMessage)
    .then(res => (res.json()))
      .then(function (data) {
        document.body.innerHTML = data["id"];
      })
      .catch(function (error) {
        alert("Bad things!");
        document.body.innerHTML = error.message;
      })
    }    
    submitData();
 })


