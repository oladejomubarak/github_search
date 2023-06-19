class Github{
  constructor(){
    this.client_id = '9c679c51541856a681a6';
    this.client_secret = '6e11f54a2474d99905e4221be364cff36c637806';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/
    ${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`https://api.github.com/users/
    ${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=
    ${this.client_secret}`);

   const profile = await profileResponse.json();
   const repos = await reposResponse.json();
   return{
    profile,
    repos
   } 
  }
}