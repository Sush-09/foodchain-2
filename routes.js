const routes = require('next-routes')();

routes
    .add('/Manager/signInOrSignUp', '/Manager/signInOrSignUp')
    .add('/Manager/signIn','/Manager/signIn')
    .add('/Manager/viewItems','/Manager/viewItems')
    .add('/Manager/signUp','/Manager/signUp')
    .add("/Manager/:id", "/Manager/item")
    .add('/Farmer/signInOrSignUp', '/Farmer/signInOrSignUp')
    .add('/Farmer/signIn','/Farmer/signIn')
    .add('/Farmer/signUp','/Farmer/signUp')
    .add("/Farmer/:address", "/Farmer/viewItems")
    .add("/Farmer/:address/new","/Farmer/new");


module.exports = routes;