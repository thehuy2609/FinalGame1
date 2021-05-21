
cc.Class({
    extends: cc.Component,

    properties: {
        movingRight: true,
        settingWidth:0,
        settingHeight:0,
        prefabBullet: cc.Prefab,
        _timerHit:0,
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


    actionHit(){
        this.node.getComponent(cc.Animation).play("bossHit");
    },

    hit(){
        let positionXBullet = this.node.x - 80;
        let positionYBullet = this.node.y - 80;
        
        for (let i = 1; i <= 4; i++) {
            let bulletBoss = cc.instantiate(this.prefabBullet);
            
            bulletBoss.setPosition(positionXBullet, positionYBullet);
            bulletBoss.parent = this.node.parent;
            
            if(i === 1){
                positionYBullet -=80;
            }
            if(i === 3){
                positionYBullet +=80;
            }
            positionXBullet +=80;

            bulletBoss.getComponent('bulletBoss').bulletNumber = i;
        }
    },

    deathBoss(){
        this.node.stopAllActions();
        this.node.destroy();
    },

    update (dt) {
        this._timerHit+=dt;

        if(this._timerHit > 1.5){
            this.actionHit();
            this._timerHit =0;
        }
    },
});
