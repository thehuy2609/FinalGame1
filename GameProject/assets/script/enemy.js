// cc.Class({
//     extends: cc.Component,

//     properties: {
//         _health: 100,
//         _timerShoot: 0,
//         // timer bắn
//         _countdownShoot: 0,
//         // thời gian giữa các lần bắn
//         _speed: 1,
//         _maxWidthScene:0,
//         _maxHeightScene:0,
//         typeShootEnemy: 1, 
//         // typeShoot = 1 : không bắn, typeShoot = 2 : bắn theo chiều dọc, typeShoot = 3 : lấy vị trí của player để bắn
//         typeEnemy: 1,
//         // typeEnemy = 1 : move đến vị trí cố định, typeEnemy = 2 : move theo timeline. 
//         enemyToX: 0,
//         enemyToY: 0,
//         // vị trí x và y bay đến
//         delayMove: 0,
//         // t.gian delay khi thực hiện animate
//         prefabBullet : cc.Prefab,
//     },

//     // LIFE-CYCLE CALLBACKS:

//     onLoad () {
//     },

//     start () {
//         this._maxWidthScene = this.node.parent.width/2;
//         this._maxHeightScene = this.node.parent.height/2;
//         this.movingEnemy();
        
//         this.typeShootEnemy = this.getRandomInt(3) +1;
        
//         this._countdownShoot = this.getRandomInt(5)+2;
//         //cc.log(this._countdownShoot);
//         this._speed = this.getRandomInt(5)+2;
        
//     },

//     movingEnemy(){
//         if(this.typeEnemy === 1){
//             cc.tween(this.node)
//             .to(1, {x: this.enemyToX, y: this.enemyToY})
//             .start();
//         }else if(this.typeEnemy === 2 ){
//             let movingZicZac = cc.tween()
//             .delay(this.delayMove)
//             .to(2, {x: this._maxWidthScene, y:this._maxHeightScene})
//             .to(3, {x: -this._maxWidthScene, y:this._maxHeightScene-=100})
//             .to(3, {x: this._maxWidthScene, y:this._maxHeightScene-=100})
//             .to(3, {x: -this._maxWidthScene, y:this._maxHeightScene-=100})
//             .to(3, {x: this._maxWidthScene, y:this._maxHeightScene-=100})
//             .to(3, {x: -this._maxWidthScene, y:this._maxHeightScene})
//             cc.tween(this.node).then(movingZicZac).repeatForever().start();
//         }
//     },

//     shoot(bulletToX, bulletToY, bulletPrefab, speed){
        
//         let bulletPos = this.node.convertToWorldSpaceAR(this.node.position);
//         bulletPos = this.node.convertToNodeSpaceAR(bulletPos);

//         let enemyBullet = cc.instantiate(bulletPrefab);
//             enemyBullet.setPosition(bulletPos.x, bulletPos.y);
//             enemyBullet.parent = this.node.parent;
            
//         if(this.typeShootEnemy === 2){
//             enemyBullet.getComponent('enemyBullet').bulletToX = bulletPos.x;
//             enemyBullet.getComponent('enemyBullet').bulletToY = -this.node.parent.height;
//         }else if(this.typeShootEnemy === 3){
//             enemyBullet.getComponent('enemyBullet').bulletToX = bulletToX;
//             enemyBullet.getComponent('enemyBullet').bulletToY = bulletToY;
//         }
//         enemyBullet.getComponent('enemyBullet').speed = speed +1;
        
//     },

//     getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//     },

//     update (dt) {
//         this._timerShoot+=dt;
//         if(this._health > 0){
//             if(this._timerShoot > this._countdownShoot && this.typeShootEnemy != 1){
//                 let positionXPlayer = this.node.parent.getChildByName('player').x;
//                 let positionYPlayer = this.node.parent.getChildByName('player').y;
//                 this.shoot(positionXPlayer, positionYPlayer, this.prefabBullet, this._speed);
//                 this._timerShoot =0;
//             }
//         }else{
//             this.node.stopAllActions();
//             this.node.destroy();
//         }
//     },
// });
