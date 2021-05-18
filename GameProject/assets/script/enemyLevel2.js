
cc.Class({
    extends: cc.Component,

    properties: {
        prefabShip : cc.Prefab,
        _firstPositionXWave : 0, // vị trí X khi tạo enemy 
        _firstPositionYWave : 0, // vị trí Y khi tạo enemy
        _isCreateWave1 : false,
        _isCreateWave2 : false,
        _isCreateWave3 : false,
        _playerPositionX: 0,
        _playerPositionY: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.getPositionPlayer();
        this._firstPositionXWave = this.node.parent.width/2 + 50;
        this._firstPositionYWave = this.node.parent.height/2 + 50;
    },

    getPositionPlayer(){
        let player = this.node.getChildByName('player');
        let positionXPlayer = player.x;
        let positionYPlayer = player.y;
        // return [positionXPlayer, positionYPlayer];
    },

    createEnemy(xCreate, yCreate, toX, toY, prefabEnemy, wave, delayMove){
       
        let enemyWave1 = cc.instantiate(prefabEnemy);
            enemyWave1.setPosition(xCreate, yCreate);
            enemyWave1.parent = this.node;
            enemyWave1.getComponent('enemy').level = 2;
            enemyWave1.getComponent('enemy').wave = wave;
            enemyWave1.getComponent('enemy').delayMove = delayMove;
    },

    createWave1(){
        let prefabEnemyWave2 = this.prefabShip;
        cc.log(this._firstPositionYWave);
        for (let i = 0; i < 30; i++) {
            this.createEnemy(this._firstPositionXWave, this._firstPositionYWave, 0, 0, prefabEnemyWave2, 1, i/3);
        }
    },

    update (dt) {
        if(this._isCreateWave1 === false ){
            this.createWave1();
            this._isCreateWave1 = true;
        }
    },
});
