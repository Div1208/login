"use strict";(self.webpackChunkAngularapp=self.webpackChunkAngularapp||[]).push([[84],{84:(h,g,p)=>{p.r(g),p.d(g,{PageModule:()=>f});var m=p(808),a=p(382),d=p(86),e=p(223);let u=(()=>{class n{constructor(){this.inpObj={fname:"",lname:"",number:"",email:""},this.resObj=new e.vpe}ngOnInit(){}showResult(){this.resObj.emit(this.inpObj)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-left"]],outputs:{resObj:"resObj"},decls:30,vars:4,consts:[["action","action.php"],["for","fname"],["type","text","placeholder","Enter Your Name","id","fname","name","fname","required","","value","",3,"ngModel","ngModelChange"],["for","lname"],["type","text","placeholder","Enter Your Name","id","lname","name","lname","required","","value","",3,"ngModel","ngModelChange"],["for","number"],["type","text","placeholder","Enter Your Contact No.","id","number","name","number","required","","value","",3,"ngModel","ngModelChange"],["for","email"],["type","text","placeholder","Enter Your E-mail","id","Email","name","email","required","","value","",3,"ngModel","ngModelChange"],["type","submit","value","Submit",1,"btn-submit",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"html"),e._UZ(1,"head"),e.TgZ(2,"body")(3,"form",0)(4,"h1"),e._uU(5,"Register Form"),e.qZA(),e._UZ(6,"hr"),e.TgZ(7,"label",1)(8,"b"),e._uU(9,"First Name"),e.qZA()(),e.TgZ(10,"input",2),e.NdJ("ngModelChange",function(r){return o.inpObj.fname=r}),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"label",3)(13,"b"),e._uU(14,"Last Name"),e.qZA()(),e.TgZ(15,"input",4),e.NdJ("ngModelChange",function(r){return o.inpObj.lname=r}),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"label",5)(18,"b"),e._uU(19,"Contact No."),e.qZA()(),e.TgZ(20,"input",6),e.NdJ("ngModelChange",function(r){return o.inpObj.number=r}),e.qZA(),e._UZ(21,"br"),e.TgZ(22,"label",7)(23,"b"),e._uU(24,"Email"),e.qZA()(),e.TgZ(25,"input",8),e.NdJ("ngModelChange",function(r){return o.inpObj.email=r}),e.qZA(),e._UZ(26,"br")(27,"hr"),e.TgZ(28,"button",9),e.NdJ("click",function(){return o.showResult()}),e._uU(29,"Submit"),e.qZA()()()()),2&t&&(e.xp6(10),e.Q6J("ngModel",o.inpObj.fname),e.xp6(5),e.Q6J("ngModel",o.inpObj.lname),e.xp6(5),e.Q6J("ngModel",o.inpObj.number),e.xp6(5),e.Q6J("ngModel",o.inpObj.email))},directives:[a._Y,a.JL,a.F,a.Fj,a.Q7,a.JJ,a.On],styles:["body[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;margin-left:25%;margin-right:25%;border:1px solid #000000;margin-bottom:5px;padding:0 15px}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:97%;padding:10px;margin:5px 0 22px;display:inline-block;border:none;background:#F5F5F5}hr[_ngcontent-%COMP%]{border:1px solid #e6e6e6;margin-bottom:5px}.btn-submit[_ngcontent-%COMP%]{background-color:#29a329;color:#fff;padding:15px 20px;margin:10px 0;border:none;cursor:pointer;width:100%;text:bold}",""]}),n})(),s=(()=>{class n{constructor(){}ngOnInit(){this.resobj={fname:"",lname:"",number:"",email:""}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-right"]],inputs:{resobj:["dataObj","resobj"]},decls:28,vars:4,consts:[["action","action.php"],["for","fname"],["type","text","name","fname","required","","value","","disabled","",3,"ngModel","ngModelChange"],["for","lname"],["type","text","name","lname","required","","value","","disabled","",3,"ngModel","ngModelChange"],["for","number"],["type","text","name","number","required","","value","","disabled","",3,"ngModel","ngModelChange"],["for","email"],["type","text","name","email","required","","value","","disabled","",3,"ngModel","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"html"),e._UZ(1,"head"),e.TgZ(2,"body")(3,"form",0)(4,"h1"),e._uU(5,"Register Form"),e.qZA(),e._UZ(6,"hr"),e.TgZ(7,"label",1)(8,"b"),e._uU(9,"First Name"),e.qZA()(),e.TgZ(10,"input",2),e.NdJ("ngModelChange",function(r){return o.resobj.fname=r}),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"label",3)(13,"b"),e._uU(14,"Last Name"),e.qZA()(),e.TgZ(15,"input",4),e.NdJ("ngModelChange",function(r){return o.resobj.lname=r}),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"label",5)(18,"b"),e._uU(19,"Contact No."),e.qZA()(),e.TgZ(20,"input",6),e.NdJ("ngModelChange",function(r){return o.resobj.number=r}),e.qZA(),e._UZ(21,"br"),e.TgZ(22,"label",7)(23,"b"),e._uU(24,"Email"),e.qZA()(),e.TgZ(25,"input",8),e.NdJ("ngModelChange",function(r){return o.resobj.email=r}),e.qZA(),e._UZ(26,"br")(27,"hr"),e.qZA()()()),2&t&&(e.xp6(10),e.Q6J("ngModel",o.resobj.fname),e.xp6(5),e.Q6J("ngModel",o.resobj.lname),e.xp6(5),e.Q6J("ngModel",o.resobj.number),e.xp6(5),e.Q6J("ngModel",o.resobj.email))},directives:[a._Y,a.JL,a.F,a.Fj,a.Q7,a.JJ,a.On],styles:["body[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;margin-left:25%;margin-right:25%;border:1px solid #000000;margin-bottom:5px;padding:0 15px}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:97%;padding:10px;margin:5px 0 22px;display:inline-block;border:none;background:#F5F5F5}hr[_ngcontent-%COMP%]{border:1px solid #e6e6e6;margin-bottom:5px}.registerbutton[_ngcontent-%COMP%]{background-color:#29a329;color:#fff;padding:15px 20px;margin:10px 0;border:none;cursor:pointer;width:100%;text:bold}",""]}),n})();const b=[{path:"",component:(()=>{class n{constructor(){this.inpObj={fname:"",lname:"",address:"",city:"",z_code:""}}ngOnInit(){}addResultObj(t){console.log(t),this.inpObj=Object.assign({},t),console.log(this.inpObj)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-homepage"]],decls:6,vars:1,consts:[[1,"split","left"],[1,"centered"],[3,"resObj"],[1,"split","right"],[3,"dataObj"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-left",2),e.NdJ("resObj",function(r){return o.addResultObj(r)}),e.qZA()()(),e.TgZ(3,"div",3)(4,"div",1),e._UZ(5,"app-right",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("dataObj",o.inpObj))},directives:[u,s],styles:[".split[_ngcontent-%COMP%]{height:100%;width:50%;position:fixed;z-index:1;top:0;overflow-x:hidden;padding-top:20px}.left[_ngcontent-%COMP%]{left:0;background-color:#fff}.right[_ngcontent-%COMP%]{right:0;background-color:#fff}.centered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;border-radius:50%}"]}),n})()}];let c=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(b)],d.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.ez,c,a.u5]]}),n})()}}]);