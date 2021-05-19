
cc.Class({
    extends: cc.Component,

    properties: {
        bulletToX: 0,
        bulletToY: 0,
        speed: 1,
        _widthCanvas : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._heightCanvas = cc.Canvas.instance.node.getContentSize().height;
        
        cc.tween(this.node)
            .by(this.speed, {x: this.bulletToX - this.node.x, y: this.bulletToY - this.node.y})
            .repeatForever().start();
    },

    update (dt) {
        if(this.node.y < -(this._heightCanvas/2 + this.node.height)){
            this.node.destroy();
        }
    }
});
