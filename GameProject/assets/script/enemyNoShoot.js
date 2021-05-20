
cc.Class({
    extends: cc.Component,

    properties: {
        _health: 100,
        _speed : 1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },

    moving(){
        //moving theo timeline
    },

    onDamage(){
        // animation bị damage
    },

    onDestroy(){

    }

    // update (dt) {},
});
