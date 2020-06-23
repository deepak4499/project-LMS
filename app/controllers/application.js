import Controller from '@ember/controller';

export default Controller.extend({
    start:true,
    actions:{
        start(){
            this.toggleProperty("start")
        }
    }
});
