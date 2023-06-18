class GitHub{
  constructor(){
    this.client_id = "9c679c51541856a681a6";
    this.client_secret = "6e11f54a2474d99905e4221be364cff36c637806";
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }
}