const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        timing : cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    clickTest(){
        let totalTime = this.timing.getComponent('updatingTime').totalTime;
        cc.log(totalTime);
        EventEmitter.instance.emit('endGame',totalTime);
    }

    // update (dt) {},
});
