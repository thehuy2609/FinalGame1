const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventEmitter.instance = new EventEmitter();
        EventEmitter.instance.registerEvent("changeNode", this.changeNode.bind(this));
    },

    start () {

    },

    changeNode(nameNode){
        switch(nameNode){
            case 'home':{
                // TODO
                break;
            }
            case 'introduction':{
                //TODO
                break;
            }

        }
    },

    // update (dt) {},
});
