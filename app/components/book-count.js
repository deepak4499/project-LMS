import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super(...arguments);
        this.book=this.bookdetail;
    },
    count:null,
    actions:{
        addbookcount(book){
            var x=Number(window.prompt("Enter the value"));
            var y=parseInt(book.count);
            var z=parseInt(x);
            book.set("count",y+z);
            book.save();
        }
    }
});
