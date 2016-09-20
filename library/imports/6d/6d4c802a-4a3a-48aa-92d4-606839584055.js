cc.Class({
    "extends": cc.Component,

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
        mairu: {
            "default": null,
            type: cc.EditBox
        },
        maichu: {
            "default": null,
            type: cc.EditBox
        },
        shuliang: {
            "default": null,
            type: cc.EditBox
        },
        lirui: {
            "default": null,
            type: cc.EditBox
        },
        shouxufei: {
            "default": null,
            type: cc.EditBox
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},
    onEventDidBegin: function onEventDidBegin() {
        console.log("jian ting did begin");
    },
    //��������
    calculatorResult: function calculatorResult() {

        //�����ɱ�
        var mairuPrice = this.mairu.string;

        //����
        var shuliang = this.shuliang.string;

        //�����ɱ�
        var mairuALl = mairuPrice * shuliang;

        //�����ɱ�
        var maichuPrice = this.maichu.string;

        //�����ܼ�
        var maichuAll = maichuPrice * shuliang;

        var shuxufei = this.shouxufei.string;

        //��ȥ������
        var maichuAll2 = maichuAll - maichuAll * shuxufei;

        //console.log("�����ɱ�,"+profit.toString(),profit)
        //��������
        var profit = maichuAll2 - mairuALl;
        console.log("mairuPrice,maichuPrice,shuxufei" + mairuPrice, maichuPrice, shuxufei);
        this.lirui.string = profit.toString();
    },
    onOpenUrl: function onOpenUrl() {
        cc.sys.openURL("http://www.linzhangfeng.cn/xingzhuang/index.html");
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});