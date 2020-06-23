import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    store:service(),
    actions:{
        buythebook(book){
            if(book.count>0)
            {
                this.store.createRecord("userbook",{
                    username:this.user,
                    bookname:book.bookName,
                    author:book.author,
                    yearofpublication:book.yearOfPublication,
                    rate:book.rate,
                    describtion:book.describtion
                }).save();
                window.alert("you bought this book");
            }
            else{
                window.alert("This book is not available now.sorry for the inconvenience");
            }
            this.toggleProperty("buy");
        }
    }
});
