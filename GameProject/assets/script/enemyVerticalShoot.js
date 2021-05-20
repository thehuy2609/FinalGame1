
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

        let enemyBullet = cc.instantiate(this.prefabBullet);
        enemyBullet.setPosition(bulletPos.x, bulletPos.y);
        enemyBullet.parent = this.node.parent;
        
        enemyBullet.getComponent('enemyBullet').bulletToX = bulletPos.x;
        enemyBullet.getComponent('enemyBullet').bulletToY = -this.node.parent.height;

    },

    update (dt) {
        this._timerShoot+= dt;
        if(this._timerShoot >= 1){
            this.shoot();
            this._timerShoot= 0;
        }
    },
});
