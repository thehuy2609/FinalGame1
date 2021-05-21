cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.moveDownItem();
    },

    moveDownItem(){
        cc.tween(this.node)
            .by(4, {x: 0, y: -500})
            .call(() => {
                this.node.destroy();
            })
            .start()
    },

    randomNumber(min,max){
        return Math.random() * (max - min) + min;
    },

    update (dt) {
        // this.node.angle+=10;
        
    },
});
