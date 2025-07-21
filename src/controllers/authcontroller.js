export const loginSuccess = (req, res) => {
    if(!req.user) return res.redirect('/');
    res.send(`<h1>Welcome ${req.user.displayName}</h1><a href="/auth/logout">Logout</a>`);
};
export const logout= (req,res) =>{
    req.logout1(()=> res.redirect('/'));
};