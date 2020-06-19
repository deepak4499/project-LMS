import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    store:service(),
    actions:{
        buythebook(book){
            this.store.createRecord("userbook",{
                username:this.user,
                bookname:book.bookName,
                author:book.author,
                yearofpublication:book.yearOfPublication,
                rate:book.rate,
                describtion:book.describtion
            }).save();
            window.alert("you bought this book");
            this.toggleProperty("buy");
        }
    }
});
