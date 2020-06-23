import Model from '@ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    bookName:attr(),
    author:attr(),
    yearOfPublication:attr("number"),
    rate:attr("number"),
    describtion:attr(),
    count:attr("number")
});
