/**
 * es6class---------------------------------
 */
class DomFixed {
    constructor() {
        this.init();
        this.closeWind();
    }
    //添加DomFixed
    init() {
        this.$fixed = document.createElement("div")
        this.$fixed.id = "fixed"
        this.$text = document.createElement("div")
        this.$text.id = "innertext"
        document.getElementById("box").appendChild(this.$fixed).appendChild(this.$text)

    }
    //打开弹窗
    openWind() {
        document.getElementById("fixed").style.display = "block"
    }
    //更改内容
    changeText(text) {
        document.getElementById("innertext").innerHTML = text
    }
    //关闭弹窗
    closeWind() {
        this.$fixed.onclick = function (e) {
            document.getElementById("fixed").style.display = "none"
        }
    }
}


/**
 * 面向对象---------------------------------------
 */
// function DomFixed(){
//     this.init()
//     this.closeWind()
// }
// //添加DomFixed
// DomFixed.prototype.init=function(){
//     this.$fixed=document.createElement("div")
//     this.$fixed.id = "fixed"
//     this.$text=document.createElement("div")
//     this.$text.id = "innertext"
//      document.getElementById("box").appendChild(this.$fixed).appendChild(this.$text)
// }
// //打开弹窗
// DomFixed.prototype.openWind = function () {
//         document.getElementById("fixed").style.display = "block"
// }
// //更改内容
// DomFixed.prototype.changeText=function(text){
//    document.getElementById("innertext").innerHTML = text
// }
// //关闭弹窗
// DomFixed.prototype.closeWind=function(){
//     this.$fixed.onclick = function (e) {
//                 document.getElementById("fixed").style.display = "none"
//             }
// }