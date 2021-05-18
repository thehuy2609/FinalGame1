
cc.Class({
    extends: cc.Component,

    properties: {
        prefabShip : cc.Prefab,
        _toXEnemyWave1 : 0, // vị trí X đến ở wave 1
        _toYEnemyWave1 : 0, // vị trí Y đến ở wave 1
        _toXEnemyWave2 : 0, // vị trí X đến ở wave 2
        _toYEnemyWave2 : 0, // vị trí Y đến ở wave 2
        _toXEnemyWave3 : 0, // vị trí X đến ở wave 3
        _toYEnemyWave3 : 0, // vị trí Y đến ở wave 3
        _firstPositionXWave : 0, // vị trí X khi tạo enemy 
        _firstPositionYWave : 0, // vị trí Y khi tạo enemy
        _isCreateWave1 : false,
        _isCreateWave2 : false,
        _isCreateWave3 : false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._firstPositionYWave = this.node.parent.height/2 + 50;
    },

    createEnemy(xCreate, yCreate, toX, toY, prefabEnemy){
        let enemyWave1 = cc.instantiate(prefabEnemy);
            enemyWave1.setPosition(xCreate, yCreate);
            enemyWave1.parent = this.node;
            enemyWave1.getComponent('enemy').toX = toX;
            enemyWave1.getComponent('enemy').toY = toY;
    },

    createWave1(){
        let prefabEnemyWave1 = this.prefabShip;
        this._toXEnemyWave1 = - this.prefabShip.data.width * 2.5;
        this._toYEnemyWave1 = 200;

        let positionXWave1 = this._toXEnemyWave1; // vị trí X đến
        let positionYWave1 = this._toYEnemyWave1; // vị trí Y đến
        
        for (let i = 1; i <= 12; i++) {
            this.createEnemy(this._firstPositionXWave, this._firstPositionYWave, positionXWave1, positionYWave1, prefabEnemyWave1);
            if(i === 6){
                positionXWave1 = this._toXEnemyWave1 + prefabEnemyWave1.data.width;
                positionYWave1 -= prefabEnemyWave1.data.height;
            }else if(i === 10){
                positionXWave1 = this._toXEnemyWave1 + prefabEnemyWave1.data.width*2;
                positionYWave1 -= prefabEnemyWave1.data.height;
            }else{
                positionXWave1 += prefabEnemyWave1.data.width;
            }
        }
    },

    createWave2(){
        let prefabEnemyWave2 = this.prefabShip;
        this._toXEnemyWave2 = -this.prefabShip.data.width * 2;
        this._toYEnemyWave2 = 200;

        let positionXWave2 = this._toXEnemyWave2;
        let positionYWave2 = this._toYEnemyWave2;

        for (let i = 1; i <= 15; i++) {
            this.createEnemy(this._firstPositionXWave, this._firstPositionYWave, positionXWave2, positionYWave2, prefabEnemyWave2);
            
            if(i === 5){
                positionXWave2 = this._toXEnemyWave2 + prefabEnemyWave2.data.width*1/2;
                positionYWave2 -= prefabEnemyWave2.data.height;
            }else if(i === 9){
                positionXWave2 = this._toXEnemyWave2 + prefabEnemyWave2.data.width;
                positionYWave2 -= prefabEnemyWave2.data.height;
            }else if(i === 12){
                positionXWave2 = this._toXEnemyWave2 + prefabEnemyWave2.data.width*3/2;
                positionYWave2 -= prefabEnemyWave2.data.height;
            }else if(i === 14){
                positionXWave2 = this._toXEnemyWave2 + prefabEnemyWave2.data.width*2;
                positionYWave2 -= prefabEnemyWave2.data.height;
            }else{
                positionXWave2 += prefabEnemyWave2.data.width;
            }
        }
    },

    createWave3(){
        let prefabEnemyWave3 = this.prefabShip;
        this._toXEnemyWave3 = -this.prefabShip.data.width * 4.5;
        this._toYEnemyWave3 = 200;

        let positionXWave3 = this._toXEnemyWave3;
        let positionYWave3 = this._toYEnemyWave3;

        for (let i = 1; i <= 30; i++) {
            this.createEnemy(this._firstPositionXWave, this._firstPositionYWave, positionXWave3, positionYWave3, prefabEnemyWave3);
            
            if(i % 10 ==0){
                positionXWave3 = -this.prefabShip.data.width * 4.5;
                positionYWave3 -= prefabEnemyWave3.data.height;
            }else{
                positionXWave3 += prefabEnemyWave3.data.width;
            }
        }
    },

    update (dt) {
        
        // if(this._isCreateWave1 === false ){
        //     this.createWave1();
        //     this._isCreateWave1 = true;
        // }

        // if(this._isCreateWave2 === false ){
        //     this.createWave2();
        //     this._isCreateWave2 = true;
        // }

        if(this._isCreateWave3 === false ){
            this.createWave3();
            this._isCreateWave3 = true;
        }

    },
});
