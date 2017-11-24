import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    count: 0,
    text: "",
    list: computed.alias('model'),

    actions: {
        textChange(value) {
            this.set('count', value.length);
            this.set('text', value);
            //this.send('pocket', value);
        },
        pocket(value) {
            //console.log(value);
            if(value.length > 10) {
                this.set('text', value + '/');
            }
        },
    },

// https://ponyfoo.com/articles/es6
});
