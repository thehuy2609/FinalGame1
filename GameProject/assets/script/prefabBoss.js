
cc.Class({
    extends: cc.Component,

    properties: {
        movingRight: true,
        settingWidth:0,
        settingHeight:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    movingBoss(){
        let widthCanvas = cc.Canvas.instance.node.getContentSize().width;
        let widthBoss = this.node.width;

        if(this.movingRight === true){
            let moving = cc.tween()
            .to(3, {x: widthCanvas/2 - widthBoss/2})
            .to(0.01, {scaleX: -1})
            .to(6, {x: -(widthCanvas/2 - widthBoss/2)})
            .to(0.01, {scaleX: 1})
            .to(3, {x: 0 })
            cc.tween(this.node).then(moving).repeatForever().start();
        }else{
            this.node.scaleX = -1;
            let moving = cc.tween()
            .to(3, {x: -(widthCanvas/2 - widthBoss/2)})
            .to(0.01, {scaleX: 1})
            .to(6, {x: (widthCanvas/2 - widthBoss/2)})
            .to(0.01, {scaleX: -1})
            .to(3, {x: 0 })
            cc.tween(this.node).then(moving).repeatForever().start();
        }
    },

    start () {
        this.node.width = this.settingWidth;
        this.node.height = this.settingHeight;
        this.movingBoss();
    },

    // update (dt) {},
});
