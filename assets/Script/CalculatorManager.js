cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        mairu:{
            default:null,
            type:cc.EditBox,
        },
        maichu:{
            default:null,
            type:cc.EditBox,
        },
        shuliang:{
            default:null,
            type:cc.EditBox,
        },
        lirui:{
            default:null,
            type:cc.EditBox,
        },
        shouxufei:{
            default:null,
            type:cc.EditBox,
        }
    },

    // use this for initialization
    onLoad: function () {

    },
    onEventDidBegin: function () {
        console.log("jian ting did begin")
    },
    //计算利润
    calculatorResult: function () {

        //买入成本
        var mairuPrice = this.mairu.string;

        //数量
        var shuliang = this.shuliang.string;

        //买入成本
        var mairuALl = mairuPrice*shuliang;

        //卖出成本
        var maichuPrice = this.maichu.string;

        //卖出总价
        var maichuAll = maichuPrice*shuliang;

        var shuxufei = this.shouxufei.string;

        //除去手续费
        var maichuAll2 = maichuAll - maichuAll*shuxufei;

        //console.log("买入成本,"+profit.toString(),profit)
        //最终利润
        var profit = maichuAll2 - mairuALl;
        console.log("mairuPrice,maichuPrice,shuxufei"+mairuPrice,maichuPrice,shuxufei)
        this.lirui.string = profit.toString();
    },
    onOpenUrl:function(){
        cc.sys.openURL("http://www.linzhangfeng.cn/xingzhuang/index.html");
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
