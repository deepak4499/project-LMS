import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super(...arguments);
        this.book=this.detail;
    },
    show:true,
    hide:false,
    actions:{
        showmore(){
            this.toggleProperty("show");
            this.toggleProperty("hide");
        },
        showless(){
            this.toggleProperty("show");
            this.toggleProperty("hide");
        }
    },
});
