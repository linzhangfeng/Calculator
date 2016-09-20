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
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvQ2FsY3VsYXRvck1hbmFnZXIuanMiLCJhc3NldHMvU2NyaXB0L0hlbGxvV29ybGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2ZDRjOEFxU2pwSXFwTFVZR2c1V0VCVicsICdDYWxjdWxhdG9yTWFuYWdlcicpO1xuLy8gU2NyaXB0XFxDYWxjdWxhdG9yTWFuYWdlci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgbWFpcnU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveFxuICAgICAgICB9LFxuICAgICAgICBtYWljaHU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveFxuICAgICAgICB9LFxuICAgICAgICBzaHVsaWFuZzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH0sXG4gICAgICAgIGxpcnVpOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdXh1ZmVpOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgLy/vv73vv73vv73vv73vv73vv73vv73vv71cbiAgICBjYWxjdWxhdG9yUmVzdWx0OiBmdW5jdGlvbiBjYWxjdWxhdG9yUmVzdWx0KCkge1xuXG4gICAgICAgIC8v77+977+977+977+977+9ybHvv71cbiAgICAgICAgdmFyIG1haXJ1UHJpY2UgPSB0aGlzLm1haXJ1LnN0cmluZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/vVxuICAgICAgICB2YXIgc2h1bGlhbmcgPSB0aGlzLnNodWxpYW5nLnN0cmluZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vcmx77+9XG4gICAgICAgIHZhciBtYWlydUFMbCA9IG1haXJ1UHJpY2UgKiBzaHVsaWFuZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vcmx77+9XG4gICAgICAgIHZhciBtYWljaHVQcmljZSA9IHRoaXMubWFpY2h1LnN0cmluZztcblxuICAgICAgICAvL++/ve+/ve+/ve+/ve+/vdy877+9XG4gICAgICAgIHZhciBtYWljaHVBbGwgPSBtYWljaHVQcmljZSAqIHNodWxpYW5nO1xuXG4gICAgICAgIHZhciBzaHV4dWZlaSA9IHRoaXMuc2hvdXh1ZmVpLnN0cmluZztcblxuICAgICAgICAvL++/ve+/vcil77+977+977+977+977+977+9XG4gICAgICAgIHZhciBtYWljaHVBbGwyID0gbWFpY2h1QWxsIC0gbWFpY2h1QWxsICogc2h1eHVmZWk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIu+/ve+/ve+/ve+/ve+/vcmx77+9LFwiK3Byb2ZpdC50b1N0cmluZygpLHByb2ZpdClcbiAgICAgICAgLy/vv73vv73vv73vv73vv73vv73vv73vv71cbiAgICAgICAgdmFyIHByb2ZpdCA9IG1haWNodUFsbDIgLSBtYWlydUFMbDtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWlydVByaWNlLG1haWNodVByaWNlLHNodXh1ZmVpXCIgKyBtYWlydVByaWNlLCBtYWljaHVQcmljZSwgc2h1eHVmZWkpO1xuICAgICAgICB0aGlzLmxpcnVpLnN0cmluZyA9IHByb2ZpdC50b1N0cmluZygpO1xuICAgIH1cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyODBjM3JzWkpKS25aOVJxYkFMVnd0SycsICdIZWxsb1dvcmxkJyk7XG4vLyBTY3JpcHRcXEhlbGxvV29ybGQuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIC8vIGRlZmF1bHRzLCBzZXQgdmlzdWFsbHkgd2hlbiBhdHRhY2hpbmcgdGhpcyBzY3JpcHQgdG8gdGhlIENhbnZhc1xuICAgICAgICB0ZXh0OiAnSGVsbG8sIFdvcmxkISdcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
