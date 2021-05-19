
cc.Class({
    extends: cc.Component,

    properties: {
        enemyToX: 0,
        enemyToY: 0,
        _health: 100,
        _timerShoot: 0,
        _countdownShoot: 0,
        _speed: 1,
        level: 1,
        wave: 1,
        delayMove: 0,
        _maxWidthScene:0,
        _maxHeightScene:0,
        _canShoot: false,
        prefabBullet : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
        this._maxWidthScene = this.node.parent.width/2;
        this._maxHeightScene = this.node.parent.height/2;
        this.movingEnemy();
        
        let canShoot = this.getRandomInt(2);
        if(canShoot === 1){
            this._canShoot = true;
            this._countdownShoot = this.getRandomInt(5);
            this._speed = this.getRandomInt(5);
        }
    },

    movingEnemy(){
        if(this.level === 1){
            cc.tween(this.node)
            .to(1, {x: this.enemyToX, y: this.enemyToY})
            .start();
        }else if(this.level === 2 ){
            let movingWave1Level2 = cc.tween()
            .delay(this.delayMove)
            .to(2, {x: this._maxWidthScene, y:this._maxHeightScene})
            .to(3, {x: -this._maxWidthScene, y:this._maxHeightScene-=100})
            .to(3, {x: this._maxWidthScene, y:this._maxHeightScene-=100})
            .to(3, {x: -this._maxWidthScene, y:this._maxHeightScene-=100})
            .to(3, {x: this._maxWidthScene, y:this._maxHeightScene-=100})
            .to(3, {x: -this._maxWidthScene, y:this._maxHeightScene})
            cc.tween(this.node).then(movingWave1Level2).repeatForever().start();
        }
    },

    shoot(bulletToX, bulletToY, bulletPrefab, speed){
        let bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
        bulletPos = this.node.convertToNodeSpaceAR(bulletPos);
        let enemyBullet = cc.instantiate(bulletPrefab);
            enemyBullet.setPosition(bulletPos.x, bulletPos.y);
            enemyBullet.parent = this.node.parent;
            if(this.level === 1){
                enemyBullet.getComponent('enemyBullet').bulletToX = bulletPos.x;
                enemyBullet.getComponent('enemyBullet').bulletToY = -this.node.parent.height;
            }else{
                enemyBullet.getComponent('enemyBullet').bulletToX = bulletToX;
                enemyBullet.getComponent('enemyBullet').bulletToY = bulletToY;
            }
            enemyBullet.getComponent('enemyBullet').speed = speed +1;
    },

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    },

    update (dt) {
        this._timerShoot+=dt;

        if(this._health > 0){
            if(this._timerShoot >= 2+ this._countdownShoot && this._canShoot === true){
                let positionXPlayer = this.node.parent.getChildByName('player').x;
                let positionYPlayer = this.node.parent.getChildByName('player').y;
                this.shoot(positionXPlayer, positionYPlayer, this.prefabBullet, this._speed);
                this._timerShoot =0;
            }
        }else{
            this.node.stopAllActions();
            this.node.destroy();
        }
    },
});
