
cc.Class({
    extends: cc.Component,

    properties: {
        toX: 0,
        toY: 0,
        _health: 100,
        _timerShoot: 0,
        _countdownShoot: 0,
        _speed: 1,
        _canShoot: false,
        prefabBullet : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {
        this.movingEnemy();
        let canShoot = this.getRandomInt(2);
        if(canShoot === 1){
            this._canShoot = true;
            this._countdownShoot = this.getRandomInt(8);
            this._speed = this.getRandomInt(5);
        }
    },

    movingEnemy(){
        cc.tween(this.node)
            .to(1, {x: this.toX, y: this.toY})
            .start();
    },

    shoot(){
        this.createBullet(0, -this.node.parent.height, this.prefabBullet , this._speed);
    },

    createBullet(toX, toY, bulletPrefab, speed){
        let enemyBullet = cc.instantiate(bulletPrefab);
            enemyBullet.setPosition(0, 0);
            enemyBullet.parent = this.node;
            enemyBullet.getComponent('enemyBullet').toX = toX;
            enemyBullet.getComponent('enemyBullet').toY = toY;
            enemyBullet.getComponent('enemyBullet').speed = speed +1;
    },

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    },

    update (dt) {
        this._timerShoot+=dt;

        if(this._timerShoot >= 2+ this._countdownShoot){
            this.shoot();
            this._timerShoot =0;
        }
    },
});
