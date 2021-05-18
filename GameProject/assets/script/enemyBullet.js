
cc.Class({
    extends: cc.Component,

    properties: {
        toX: 0,
        toY: 0,
        speed: 1,
        _canDestroy: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.tween(this.node)
            .to(this.speed, {x: this.toX, y: this.toY})
            .start();
    },

    update (dt) {
        if(this.toY < -this.node.parent.parent.height){
            this.node.destroy();
        }
    }
});
