const searchUser = document.getElementById('searchUser');

const github = new GitHub;

searchUser.addEventListener('keyup', (e) =>{
   const userText = e.target.value;

   if(userText !== ''){
     github.getUser(userText).then(data =>{
      if(data.profile.message === "Not Found"){

      } else{

     }
     } )
   } else{
    
   }
});