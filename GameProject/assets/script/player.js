
cc.Class({
    extends: cc.Component,

    properties: {
        _movingDown : false,
        _movingRight : false,
        _movingUp : false,
        _movingLeft : false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start () {

    },

    moveLeft(){
        this._movingLeft = true;
    },

    moveRight(){
        this._movingRight = true;
    },

    moveUp(){
        this._movingUp = true;
    },

    moveDown(){
        this._movingDown = true;
    },

    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                {
                    this.moveUp();
                    break;
                }     
            case cc.macro.KEY.a:
                {
                    this.moveLeft();
                    break;
                }   
            case cc.macro.KEY.s:        
                {
                    this.moveDown();
                    break;
                }   
            case cc.macro.KEY.d:        
                {
                    this.moveRight();
                    break;
                }
            default:{}
        }
    },

    update (dt) {

        if(this._movingLeft === true){
            cc.tween(this.node)
            .by(0.25, {x:-50}).start();
            this._movingLeft = false;
        }

        if(this._movingRight === true){
            cc.tween(this.node)
            .by(0.25, {x:50}).start();
            this._movingRight = false;
        }

        if(this._movingUp === true){
            cc.tween(this.node)
            .by(0.25, {y:50}).start();
            this._movingUp = false;
        }
        
        if(this._movingDown === true){
            cc.tween(this.node)
            .by(0.25, {y:-50}).start();
            this._movingDown = false;
        }

    },
});
