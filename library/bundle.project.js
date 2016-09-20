require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"CalculatorManager":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6d4c8AqSjpIqpLUYGg5WEBV', 'CalculatorManager');
// Script\CalculatorManager.js

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

cc._RFpop();
},{}],"HelloWorld":[function(require,module,exports){
"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script\HelloWorld.js

cc.Class({
    'extends': cc.Component,

    properties: {

        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}]},{},["HelloWorld","CalculatorManager"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvQ2FsY3VsYXRvck1hbmFnZXIuanMiLCJhc3NldHMvU2NyaXB0L0hlbGxvV29ybGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNmQ0YzhBcVNqcElxcExVWUdnNVdFQlYnLCAnQ2FsY3VsYXRvck1hbmFnZXInKTtcbi8vIFNjcmlwdFxcQ2FsY3VsYXRvck1hbmFnZXIuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIG1haXJ1OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfSxcbiAgICAgICAgbWFpY2h1OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfSxcbiAgICAgICAgc2h1bGlhbmc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveFxuICAgICAgICB9LFxuICAgICAgICBsaXJ1aToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH0sXG4gICAgICAgIHNob3V4dWZlaToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcbiAgICBvbkV2ZW50RGlkQmVnaW46IGZ1bmN0aW9uIG9uRXZlbnREaWRCZWdpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJqaWFuIHRpbmcgZGlkIGJlZ2luXCIpO1xuICAgIH0sXG4gICAgLy/vv73vv73vv73vv73vv73vv73vv73vv71cbiAgICBjYWxjdWxhdG9yUmVzdWx0OiBmdW5jdGlvbiBjYWxjdWxhdG9yUmVzdWx0KCkge1xuXG4gICAgICAgIC8v77+977+977+977+977+9ybHvv71cbiAgICAgICAgdmFyIG1haXJ1UHJpY2UgPSB0aGlzLm1haXJ1LnN0cmluZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/vVxuICAgICAgICB2YXIgc2h1bGlhbmcgPSB0aGlzLnNodWxpYW5nLnN0cmluZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vcmx77+9XG4gICAgICAgIHZhciBtYWlydUFMbCA9IG1haXJ1UHJpY2UgKiBzaHVsaWFuZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vcmx77+9XG4gICAgICAgIHZhciBtYWljaHVQcmljZSA9IHRoaXMubWFpY2h1LnN0cmluZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vdy877+9XG4gICAgICAgIHZhciBtYWljaHVBbGwgPSBtYWljaHVQcmljZSAqIHNodWxpYW5nO1xuXG4gICAgICAgIHZhciBzaHV4dWZlaSA9IHRoaXMuc2hvdXh1ZmVpLnN0cmluZztcblxuICAgICAgICAvL++/ve+/vcil77+977+977+977+977+977+9XG4gICAgICAgIHZhciBtYWljaHVBbGwyID0gbWFpY2h1QWxsIC0gbWFpY2h1QWxsICogc2h1eHVmZWk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIu+/ve+/ve+/ve+/ve+/vcmx77+9LFwiK3Byb2ZpdC50b1N0cmluZygpLHByb2ZpdClcbiAgICAgICAgLy/vv73vv73vv73vv73vv73vv73vv73vv71cbiAgICAgICAgdmFyIHByb2ZpdCA9IG1haWNodUFsbDIgLSBtYWlydUFMbDtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWlydVByaWNlLG1haWNodVByaWNlLHNodXh1ZmVpXCIgKyBtYWlydVByaWNlLCBtYWljaHVQcmljZSwgc2h1eHVmZWkpO1xuICAgICAgICB0aGlzLmxpcnVpLnN0cmluZyA9IHByb2ZpdC50b1N0cmluZygpO1xuICAgIH0sXG4gICAgb25PcGVuVXJsOiBmdW5jdGlvbiBvbk9wZW5VcmwoKSB7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cDovL3d3dy5saW56aGFuZ2ZlbmcuY24veGluZ3podWFuZy9pbmRleC5odG1sXCIpO1xuICAgIH1cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyODBjM3JzWkpKS25aOVJxYkFMVnd0SycsICdIZWxsb1dvcmxkJyk7XG4vLyBTY3JpcHRcXEhlbGxvV29ybGQuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIC8vIGRlZmF1bHRzLCBzZXQgdmlzdWFsbHkgd2hlbiBhdHRhY2hpbmcgdGhpcyBzY3JpcHQgdG8gdGhlIENhbnZhc1xuICAgICAgICB0ZXh0OiAnSGVsbG8sIFdvcmxkISdcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
