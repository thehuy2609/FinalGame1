
cc.Class({
    extends: cc.Component,

    properties: {
        bulletToX: 0,
        bulletToY: 0,
        speed: 1,
        _canDestroy: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.tween(this.node)
            .to(this.speed, {x: this.bulletToX, y: this.bulletToY})
            .start();
    },

    update (dt) {
        if(this.bulletToY < -this.node.parent.parent.height){
            this.node.destroy();
        }
    }
});
