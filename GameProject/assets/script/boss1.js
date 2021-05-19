
cc.Class({
    extends: cc.Component,

    properties: {
        health: 0,
        prefabBoss : cc.Prefab,
        _timerDeath:0,
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

    deathBoss(){
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
        if(this._timerDeath>=5 && this.health === 0){
            cc.log('asd');
            this.deathBoss();
            this.health = 10;
        }
    },
});
