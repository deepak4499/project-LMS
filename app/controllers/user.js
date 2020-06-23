import Controller from '@ember/controller';

export default Controller.extend({
    userbook:true,
    buy:false,
    actions:{
        buy(){
            this.toggleProperty("buy");
        },
    },
});
