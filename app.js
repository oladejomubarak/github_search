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
        ui.showAlert('User not found', 'alert alert-danger');

      } else{
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
     }
     } )
   } else{
ui.clearProfile();
   }
});