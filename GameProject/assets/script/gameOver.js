const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        editBoxName : cc.EditBox,
        btnEnterName : cc.Button,
        btnHome : cc.Button,
        prefabRanking : cc.Prefab,
        scrollViewRanking : cc.ScrollView,
        _content : null,
        arrRanking: [],
        _time:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._content = this.scrollViewRanking.node.getChildByName("view").getChildByName("content");
        EventEmitter.instance.registerEvent("endGame", this.getTime.bind(this));
        let rank = cc.sys.localStorage.getItem('ranked');
        if(rank !== null){
            this.arrRanking = JSON.parse(rank);
        }else{
            this.arrRanking =[];
        }
    },

    start () {

    },

    
    getTime(time){
        this._time = time;
        cc.log(this._time);
    },

    
    enterName(){
        let newRank = {
            name: '',
            time: 0,
        }
        newRank.name = this.editBoxName.string;
        newRank.time = Number(this._time);
        this.arrRanking.push(newRank);
        this.sortArrRanking(this.arrRanking);
        cc.sys.localStorage.setItem('ranked', JSON.stringify(this.arrRanking));
        
        this.showRanking(this.arrRanking);
        this.scrollViewRanking.node.active = true;
        //this.btnEnterName.node.active = false;
        //this.btnHome.node.active = true;
    },

    showRanking(arrayRanking){
        let firstPositionPrefabs= 0;
        this._content.removeAllChildren(true);
        for (let i = 0; i < arrayRanking.length; i++) {
            let itemRanking = cc.instantiate(this.prefabRanking);
            let nameRanking = itemRanking.getChildByName('lblName');
            let timeRanking = itemRanking.getChildByName('lblTime');
            nameRanking.getComponent(cc.Label).string = arrayRanking[i].name;
            timeRanking.getComponent(cc.Label).string = this.timeConvert(arrayRanking[i].time);
            itemRanking.parent = this._content;
            itemRanking.y = firstPositionPrefabs -= 31;
        }
    },
    
    sortArrRanking(arr) {
        for (let i = 0; i < arr.length-1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].time > arr[j].time) {
                    // [arr[i], arr[j]] = [arr[j], arr[i]];
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    },


    timeConvert(num)
    { 
        let minutes = Math.floor(num / 60);
        if(minutes < 10) minutes = "0" + minutes
        let seconds = num % 60;
        if(seconds < 10) seconds = "0" + seconds
        return minutes + ":" + seconds;
    },

    // update (dt) {},
});
