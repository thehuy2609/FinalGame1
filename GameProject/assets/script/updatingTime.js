
cc.Class({
    extends: cc.Component,

    properties: {
        _timerUpdateTime: 0,
        _timeStart: {
            default: 0,
            serializable: false,
        },
        _timeNow: {
            default: 0,
            serializable: false,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {
    //     this.timeStart = Date.parse(new Date(Date.now()));
    // },

    // updateTime(){
    //     let timeNow = Date.parse(new Date(Date.now()));
    //     let result = Math.abs(timeNow - this.timeStart);
    //     result = result.toLocaleString('it-IT');
    //     this.node.getComponent(cc.Label).string = this.timeConvert(result);
    // },


    // update (dt) {
    //     this._timerUpdateTime += dt;
    //     if(this._timerUpdateTime >= 1){
    //         this.updateTime();
    //         this._timerUpdateTime =0;
    //     }
    // },

    start(){

    },

    update(dt){
        this._timerUpdateTime +=dt;
        if(this._timerUpdateTime >1){
            this._timeNow +=1;
            this.updateTime(this._timeNow);
            this._timerUpdateTime =0;
        }
    },

    updateTime(timeNow){
        let result = (timeNow - this._timeStart) *1000;
        result = result.toLocaleString('it-IT');
        this.node.getComponent(cc.Label).string = this.timeConvert(result);
    },

    timeConvert(num)
    { 
        let minutes = Math.round(num / 60);
        if(minutes < 10) minutes = "0" + minutes
        let seconds = num % 60;
        if(seconds < 10) seconds = "0" + seconds
        return minutes + ":" + seconds;
    },

});
