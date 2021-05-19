
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
            .by(this.speed, {x: this.bulletToX-this.node.x, y: this.bulletToY-this.node.y})
            .repeatForever().start();
    },

    update (dt) {
        if(this.bulletToY < -this.node.parent.parent.height){
            this.node.destroy();
        }
    }
});
