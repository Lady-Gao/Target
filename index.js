/**
 * es6class---------------------------------
 */
class Domul {
    constructor() {
        this.init()
        this.click()
    }
    //编写domul>li
    init() {
        this.$ul = document.createElement("ul")
        this.$ul.id = "ul"

        for (var i = 0; i <= 5; i++) {
            let $li = document.createElement("li")
            $li.innerHTML = i
            this.$ul.appendChild($li)
        }
        document.getElementById("box").appendChild(this.$ul)
    }
    //点击事件绑定
    click() {

        this.$ul.onclick = function (e) {
            //创建实例                           
            this.DomFixed1 = new DomFixed()

            //开弹窗
            this.DomFixed1.openWind()
            //赋值内容
            this.DomFixed1.changeText(e.target.innerHTML)



        }
    }
}

var Domul1 = new Domul()
/**
 * 面向对象---------------------------------------
 */
// function Domul () {
//     this.init()
//     this.click()
// }                
// //编写domul>li
// Domul.prototype.init = function () {
//     this.$ul = document.createElement("ul")
//     this.$ul.id="ul"

//     for(var i=0;i<=5;i++){
//      let $li=document.createElement("li")
//      $li.innerHTML=i
//         this.$ul.appendChild($li)
//     }
//     document.getElementById("box").appendChild(this.$ul)
// }
// //点击事件绑定
// Domul.prototype.click=function(){
//      this.$ul.onclick = function (e) {
//         //创建实例                           
//           this.DomFixed = new DomFixed()
//           //开弹窗
//           this.DomFixed.openWind()
//           //赋值内容
//           this.DomFixed.changeText(e.target.innerHTML)



//      }
// }
// var Domul1 = new Domul()