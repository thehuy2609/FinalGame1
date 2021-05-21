
cc.Class({
    extends: cc.Component,

    properties: {
        health: 0,
        prefabBoss : cc.Prefab,
        _timerDeath:0,
        _timerHit: 0,
        prefabBullet: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.movingBoss();
    },

    movingBoss(){
        let widthCanvas = cc.Canvas.instance.node.getContentSize().width;
        let widthBoss = this.node.width;

        let moving = cc.tween()
            .to(3, {x: widthCanvas/2 - widthBoss/2})
            .to(0.01, {scaleX: -1})
            .to(6, {x: -(widthCanvas/2 - widthBoss/2)})
            .to(0.01, {scaleX: 1})
            .to(3, {x: 0 })
            cc.tween(this.node).then(moving).repeatForever().start();
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
        this.createClone();
    },

    createClone(){
        for (let i = 1; i <= 2; i++) {
            let miniBoss = cc.instantiate(this.prefabBoss);
            miniBoss.setPosition(this.node.x, this.node.y);
            miniBoss.parent = this.node.parent;
            if(i === 1){
                miniBoss.getComponent('prefabBoss').movingRight = false;
            }
            miniBoss.getComponent('prefabBoss').settingWidth = this.node.width*2/3;
            miniBoss.getComponent('prefabBoss').settingHeight = this.node.height*2/3;
            
        }
    },

    update (dt){
        this._timerDeath+=dt;
        this._timerHit+=dt;
        if(this._timerDeath>=5 && this.health === 0){
            cc.log('asd');
            this.deathBoss();
            this.health = 10;
        }

        if(this._timerHit > 1.5){
            this.actionHit();
            this._timerHit =0;
        }
    },
});
