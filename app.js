const github = new Github;
const searchUser = document.getElementById('searchUser');
const ui = new UI;



searchUser.addEventListener('Keyup', (e) =>{
   const userText = e.target.value;
    console.log(userText);

   if(userText !== ''){
     github.getUser(userText).then(data => {
      console.log(data);
      if(data.profile.message === "Not Found"){

      } else{
          ui.showProfile(data.profile);
     }
     } )
   } else{

   }
});