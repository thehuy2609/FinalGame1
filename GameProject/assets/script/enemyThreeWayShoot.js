
cc.Class({
    extends: require("enemyNoShoot"),

    properties: {
        moveToX: 0, // vị trí x bay đến
        moveToY: 0, // vị trí y bay đến
        prefabBullet : cc.Prefab,
        _timerShoot: 0,
    },

    start () {
        //this.shoot();
    },

    movingFirst(){
        cc.tween(this.node)
            .to(1, {x: this.moveToX, y: this.moveToY})
            .start();
    },

    movingLeftRight(){
        let actionMove = cc.tween()
            .to(0.5, {x: this.node.x - 50})
            .to(0.5, {x: this.node.x + 50})
        cc.tween(this.node).then(actionMove).repeatForever().start();
    },

    movingRightLeft(){
        let actionMove = cc.tween()
            .to(0.5, {x: this.node.x + 50})
            .to(0.5, {x: this.node.x - 50})
        cc.tween(this.node).then(actionMove).repeatForever().start();
    },

    shoot(){
        let bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);
        
        let redBullet1 = cc.instantiate(this.prefabBullet);
        redBullet1.parent = cc.Canvas.instance.node;
        redBullet1.setPosition(bulletPos.x, bulletPos.y);
        redBullet1.getComponent('enemyBullet').bulletNumber = 1;
        redBullet1.getComponent('enemyBullet').threeWay = true;

        let redBullet2 = cc.instantiate(this.prefabBullet)
        redBullet2.parent = cc.Canvas.instance.node
        redBullet2.setPosition(bulletPos.x, bulletPos.y);
        redBullet2.getComponent('enemyBullet').bulletNumber = 2;
        redBullet2.getComponent('enemyBullet').threeWay = true;

        let redBullet3 = cc.instantiate(this.prefabBullet)
        redBullet3.parent = cc.Canvas.instance.node
        redBullet3.setPosition(bulletPos.x, bulletPos.y);
        redBullet3.getComponent('enemyBullet').bulletNumber = 3;
        redBullet3.getComponent('enemyBullet').threeWay = true;
    },

    update (dt) {
        this._timerShoot+= dt;
        if(this._timerShoot >= 1){
            this.shoot();
            this._timerShoot= 0;
        }
    },
});
