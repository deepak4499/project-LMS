import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    store:service(),
    userdetail:service(),
    userName:null,
    password:null,
    actions:{
        login(){
            this.userdetail.newuser(this.userName);
            this.store.findAll("signin").then( (users)=>{ 
                if(users!=null){
                users.forEach(user => {
                    if(user.get("userName")==this.userName && user.get("password")==this.password)
                    {
                        if(this.userName=="deepak")
                        {
                            this.transitionToRoute("admin");
                        }
                        else
                        {
                            this.transitionToRoute("user");
                        }
                    }
                    else if(user.get("userName")==this.userName || user.get("password")==this.password){
                        window.alert("username or password is incorrect.please try again");
                        this.transitionToRoute("home");
                    }
                })
            }
            else{
                window.alert("you are not signup first signup then login");
                this.transitionToRoute("signup");
              }
            });
        }
    },
});
