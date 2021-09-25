class User {
    constructor(email, user){
        this.email=email;
        this.user =user;
        this.score = 0;
    }
    login() {
        console.log(this.user,"just logged in");
        return this;
    }
    logout() {
        console.log(this.username,"just logged out");
        return this;
    }
    updateScore() {
        this.score++ ;
        console.log(this.email, 'score is now' ,this.score);
        return this; 
    }
}
class Admin extends User(){
    deleteUser(user){
        users=users.filter( u=> {
            return u.email != user.email;
        })
    }
}
var admin = new Admin('elikhay','johnson');
var userOne = new User('elormmegamind', 'elorm');
var userTwo = new User('aggreypapakwesi@gmail.com','aggrey');
var users=[userOne,userTwo];

admin.deleteUser(userTwo);

console.log(users);
