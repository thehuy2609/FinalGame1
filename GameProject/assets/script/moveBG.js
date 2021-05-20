
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log(this.node.y, -this.node.height)
    },

    update (dt) {
        if(this.node.y > -this.node.height){
            this.node.y -= 5;
        }else{
            this.node.y = this.node.height;
        }    
    },
});
