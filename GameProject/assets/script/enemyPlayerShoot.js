
cc.Class({
    extends: require("enemyNoShoot"),

    properties: {
        prefabBullet : cc.Prefab,
        _timerShoot : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    movingFirst(){
        
    },

    shoot(bulletToX, bulletToY){
        let bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);

        let enemyBullet = cc.instantiate(this.prefabBullet);
        enemyBullet.setPosition(bulletPos.x, bulletPos.y);
        enemyBullet.parent = this.node.parent;
        
        enemyBullet.getComponent('enemyBullet').bulletToX = bulletToX;
        enemyBullet.getComponent('enemyBullet').bulletToY = bulletToY;

    },

    update (dt) {
        this._timerShoot+= dt;
        if(this._timerShoot >= 1){
            let positionXPlayer = this.node.parent.getChildByName('player').x;
            let positionYPlayer = this.node.parent.getChildByName('player').y;
            this.shoot(positionXPlayer, positionYPlayer);
            this._timerShoot= 0;
        }
    },
});
