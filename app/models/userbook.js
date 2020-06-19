import Model from '@ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    username:attr(),
    bookname:attr(),
    author:attr(),
    yearofpublication:attr(),
    rate:attr(),
    describtion:attr()
});
