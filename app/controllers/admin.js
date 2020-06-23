import Controller from '@ember/controller';

export default Controller.extend({
    showcount:false,
    isExpanded:false,
    actions:{
        addcount(){
            this.toggleProperty("showcount");
        },
        toggle(){
            this.toggleProperty("isExpanded");
        },
    },
});
