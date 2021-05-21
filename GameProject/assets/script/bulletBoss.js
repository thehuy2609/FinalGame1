cc.Class({
    extends: cc.Component,

    properties: {
        bulletNumber :0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._heightCanvas = cc.Canvas.instance.node.getContentSize().height;
        if(this.bulletNumber === 1){
            cc.tween(this.node)
            .by(4, {x: -800 , y: -800})
            .call(() => this.node.destroy())
            .start()
        } if(this.bulletNumber === 2){
            cc.tween(this.node)
            .by(3, {x: -250 , y: -533})
            .call(() => this.node.destroy())
            .start()
        } if(this.bulletNumber === 3){
            cc.tween(this.node)
            .by(3, {x: 250 , y: -533})
            .call(() => this.node.destroy())
            .start()
        } if(this.bulletNumber === 4){
            cc.tween(this.node)
            .by(4, {x: 800 , y: -800})
            .call(() => this.node.destroy())
            .start()
        }
    },

    update (dt) {
        this.node.angle+=10;
        if(this.node.y < -(this._heightCanvas/2 + this.node.height)){
            this.node.destroy();
        }
    },
});