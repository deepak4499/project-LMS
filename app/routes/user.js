import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    userdetail:service(),
    model(){
        return{
            books:this.store.findAll("book"),
            printuser:this.userdetail
        }
    }
});
