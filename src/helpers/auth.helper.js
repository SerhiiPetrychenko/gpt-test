export const checkCurrentUser = () => {
    let user;
    try{
        user = JSON.parse(localStorage.getItem('user'))
    }catch (e) {
        console.log(e);
    }

  if (!user?.id) {
    delete localStorage.user;
    delete localStorage.jwt;
  }
  return user;
};

export const getJwt = () => {
  return localStorage.getItem('jwt');
};
