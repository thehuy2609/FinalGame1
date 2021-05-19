
cc.Class({
    extends: cc.Component,

    properties: {
        prefabShip : cc.Prefab,
        _firstPositionXWave : 0, // vị trí X khi tạo enemy 
        _firstPositionYWave : 0, // vị trí Y khi tạo enemy
        _isCreateWave1 : false,
        _isCreateWave2 : false,
        _isCreateWave3 : false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._firstPositionXWave = this.node.parent.width/2 + 50;
        this._firstPositionYWave = this.node.parent.height/2 + 50;
    },

    createEnemy(xCreate, yCreate, toX, toY, prefabEnemy, delayMove){
        let enemyWave1 = cc.instantiate(prefabEnemy);
            enemyWave1.setPosition(xCreate, yCreate);
            enemyWave1.parent = this.node;
            enemyWave1.getComponent('enemy').delayMove = delayMove;
    },

    createWave1(){
        let prefabEnemyWave2 = this.prefabShip;
        for (let i = 0; i < 30; i++) {
            this.createEnemy(this._firstPositionXWave, this._firstPositionYWave, 0, 0, prefabEnemyWave2, i/3);
        }
    },

    update (dt) {
        if(this._isCreateWave1 === false ){
            //this.createWave1();
            this._isCreateWave1 = true;
        }
    },
});
