(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,n){e.exports={inputsWrapper:"Inputs_inputsWrapper__1Zkcf",inputs:"Inputs_inputs__1x4Vc",label:"Inputs_label__2hLS9",smallInput:"Inputs_smallInput__RvQK9",buttonsWrapper:"Inputs_buttonsWrapper__JTWUu",plusWrapper:"Inputs_plusWrapper__15Q2q",remove:"Inputs_remove__B2Ok0",add:"Inputs_add__21G4l"}},194:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(71),c=n.n(r),s=(n(84),n(31)),u=[{component:"Label",text:"\u0410\u043d\u043a\u0435\u0442\u0430"},{component:"Input",name:"name",label:"\u0418\u043c\u044f",required:!0,validationType:"string",validations:[{type:"required",params:["\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u0435\u043d\u0438\u044f"]}]},{component:"Counter",name:"age",label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",required:!0,validationType:"string",validations:[{type:"required",params:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u0435\u043d\u0438\u044f"]}]},{component:"Select",name:"maritalStatus",label:"\u0421\u0435\u043c\u0435\u0439\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",required:!0,options:[{label:"\u041d\u0435 \u0436\u0435\u043d\u0430\u0442/\u043d\u0435 \u0437\u0430\u043c\u0443\u0436\u0435\u043c",value:"notMarried"},{label:"\u0416\u0435\u043d\u0430\u0442/\u0417\u0430\u043c\u0443\u0436\u0435\u043c",value:"married"}]},{component:"Inputs",name:"education",label:"\u0412\u0423\u0417",required:!0},{component:"Select",name:"birthPlace",label:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",required:!0,options:[{label:"\u041d\u0435 \u0432\u0430\u0436\u043d\u043e",value:"nomatters"},{label:"\u041c\u043e\u0441\u043a\u0432\u0430",value:"Moscow"},{label:"\u0421\u043f\u0431",value:"SPB"},,{label:"\u041e\u043c\u0441\u043a",value:"Omsk"}]},{component:"Checkboxes",name:"skills",items:[{name:"Communication",label:"\u041e\u0431\u0449\u0435\u043d\u0438\u0435"},{name:"languages",label:"\u0417\u043d\u0430\u043d\u0438\u0435 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432"},{name:"cooking",label:"\u0413\u043e\u0442\u043e\u0432\u043a\u0430"},{name:"runWithBorders",label:"\u0411\u0435\u0433 \u0441 \u043f\u0440\u0438\u043f\u044f\u0442\u0441\u0442\u0432\u0438\u044f\u043c\u0438"},{name:"fastReading",label:"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0447\u0442\u0435\u043d\u0438\u0435"},{name:"box",label:"\u0411\u043e\u043a\u0441"},{name:"singing",label:"\u041f\u0435\u043d\u0438\u0435"},{name:"programming",label:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},{name:"driving",label:"\u0412\u043e\u0436\u0434\u0435\u043d\u0438\u0435"}],label:"\u041d\u0430\u0432\u044b\u043a\u0438",required:!0},{component:"Button",name:"submitButton",label:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",required:!0}],o=n(4),i=n(19);function m(e,a){var n=a.name,t=a.validationType,l=a.validations,r=void 0===l?[]:l;if(!i[t])return e;var c=i[t]();return r.forEach(function(e){var a,n=e.params,t=e.type;c[t]&&(console.log(t,n),c=(a=c)[t].apply(a,Object(o.a)(n)))}),e[n]=c,e}var p=n(29),b=n(5),_=n(77),v=n.n(_),d=function(e){var a=e.children,n=Object(b.a)(e,["children"]);return l.a.createElement("button",Object.assign({onClick:n.handleSubmit,className:v.a.button},n),a||"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")},f=n(30),h=n(6),g=n.n(h),E=n(32),N=n.n(E),x=function(e){var a=e.name,n=e.label,t=e.value,r=(e.className,e.onChange);Object(b.a)(e,["name","label","value","className","onChange"]);return l.a.createElement("div",{className:g()(N.a.checkboxWrapper),onClick:function(){return r(Object(f.a)({},a,!t))}},l.a.createElement("input",{type:"checkbox",name:a,checked:t}),l.a.createElement("span",{className:g()(N.a.checkboxLabel,N.a.unselectable)},n))},C=n(33),k=n.n(C),W=function(e){var a=e.label,n=(e.className,e.items),t=e.onChange,r=e.value,c=void 0===r?{}:r;Object(b.a)(e,["label","className","items","onChange","value"]);return l.a.createElement("div",{className:k.a.checkboxesWrapper},l.a.createElement("span",{className:k.a.label},a),l.a.createElement("div",{className:k.a.checkboxes},n&&n.map(function(a){return l.a.createElement(x,Object.assign({},a,{value:c[a.name],onChange:(Object(b.a)(e,["label","className","items","onChange","value"]),function(e){var a=Object(p.a)({},c,e);t(a)})}))})))},j=n(34),O=n.n(j),I=function(e){var a=e.name,n=e.label,t=e.className,r=e.children,c=Object(b.a)(e,["name","label","className","children"]);return l.a.createElement("div",{className:O.a.inputWrapper},n&&l.a.createElement("span",{className:O.a.label},n),l.a.createElement("input",Object.assign({name:a,className:g()(O.a.input,t),onChange:function(e){return c.onChange(e.target.value)}},c)),r)},B=n(7),q=n.n(B),y=function(e){e.classname,e.value;var a=Object(b.a)(e,["classname","value"]);return l.a.createElement("div",{className:q.a.counterWrapper},l.a.createElement(I,Object.assign({type:"number",className:g()(q.a.input,q.a.inputText)},a)),l.a.createElement("div",{className:q.a.buttonsWrapper},l.a.createElement("div",{className:g()(q.a.button,q.a.plusButton,q.a.unselectable)},"+"),l.a.createElement("div",{className:g()(q.a.button,q.a.minusButton,q.a.unselectable)},"-")))},S=n(13),w=n.n(S),L=function(e){return l.a.createElement(I,Object.assign({className:w.a.smallInput},e))},V=function(e){var a=e.label,n=(e.className,e.value),t=void 0===n?[""]:n,r=e.onChange,c=t,s=function(e){r(e)};return l.a.createElement("div",{className:w.a.inputsWrapper},l.a.createElement("span",{className:w.a.label},a),l.a.createElement("div",{className:w.a.inputs},c&&c.map(function(e,a){return l.a.createElement(L,{onChange:function(e){var n=e.target.value,t=Object(o.a)(c);t[a]=n,s(t)},value:e},0!==a&&a===c.length-1&&l.a.createElement("span",{className:w.a.remove,onClick:function(){var e=Object(o.a)(c);e.splice(a,1),s(Object(o.a)(e))}},"X"),a===c.length-1&&l.a.createElement("div",{className:w.a.plusWrapper,onClick:function(){s([].concat(Object(o.a)(c),[""]))}},l.a.createElement("span",{className:w.a.add},"+"),l.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435")))})))},F=n(78),J=n.n(F),T=function(e){e.className;var a=e.text,n=Object(b.a)(e,["className","text"]);return l.a.createElement("div",Object.assign({className:J.a.label},n),a)},M=n(35),X=n.n(M),Q={Button:d,Checkbox:x,Checkboxes:W,Counter:y,Input:I,Inputs:V,Label:T,Select:function(e){var a=e.label,n=e.name,t=e.className,r=e.options,c=Object(b.a)(e,["label","name","className","options"]);return l.a.createElement("div",{className:X.a.selectWrapper},l.a.createElement("span",{className:X.a.label},a),l.a.createElement("select",Object.assign({name:n,id:n,className:g()(X.a.select,t)},c),r&&r.map(function(e){var a=e.value,n=e.label;return l.a.createElement("option",{value:a},n)})))}},G=function(e){var a=e.name,n=e.component,t=Object(b.a)(e,["name","component"]);return l.a.createElement(s.a,{name:a},function(e){var r=e.field.value,c=e.form,s=c.errors,u=c.dirty,o=c.setFieldValue,i=c.submitCount,m=l.a.createElement(Q[n],Object(p.a)({name:a,value:r,onChange:function(e){if(e.target&&e.target.value){var n=e.target.value;o(a,n)}else o(a,e)},dirty:u,errors:s,setFieldValue:o,submitCount:i},t));return l.a.createElement(l.a.Fragment,null,m,i>0&&s[a]&&l.a.createElement("span",{style:{marginLeft:"170px",color:"red"}},s[a]))})},K=function(){var e=u.reduce(m,{}),a=i.object().shape(e);return l.a.createElement("div",{className:"formWrapper"},l.a.createElement(s.b,{initialValues:{},onSubmit:function(e){console.log("formSubmit",e),alert("\u0421\u043c\u043e\u0442\u0440\u0438 \u043a\u043e\u043d\u0441\u043e\u043b\u044c",e)},validationSchema:a},function(e){return function(e,a){return e.map(function(e){return l.a.createElement(G,Object.assign({},e,a))})}(u,e)}))};var P=function(){return l.a.createElement(K,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root"))},32:function(e,a,n){e.exports={checkboxWrapper:"Checkbox_checkboxWrapper__3KoMJ",unselectable:"Checkbox_unselectable__2B3Q9",checkboxLabel:"Checkbox_checkboxLabel__LqVma"}},33:function(e,a,n){e.exports={checkboxesWrapper:"Checkboxes_checkboxesWrapper__2WY5M",label:"Checkboxes_label__JNFqL"}},34:function(e,a,n){e.exports={inputWrapper:"Input_inputWrapper__3iJXj",label:"Input_label__3Elwd",input:"Input_input__1hD0T"}},35:function(e,a,n){e.exports={selectWrapper:"Select_selectWrapper__29YKh",select:"Select_select__m6F-r",label:"Select_label__bPVv6"}},7:function(e,a,n){e.exports={counterWrapper:"Counter_counterWrapper__33lXV",input:"Counter_input__2wnFV",inputText:"Counter_inputText__1XcHF",buttonsWrapper:"Counter_buttonsWrapper__1ZqaQ",button:"Counter_button__3J1Gc",plusButton:"Counter_plusButton__2RclG",minusButton:"Counter_minusButton__3gsAg",unselectable:"Counter_unselectable__2dyIM"}},77:function(e,a,n){e.exports={button:"Button_button__3NXhB",disabled:"Button_disabled__3wFo7"}},78:function(e,a,n){e.exports={label:"Label_label__2fJqV"}},79:function(e,a,n){e.exports=n(194)},84:function(e,a,n){}},[[79,2,1]]]);
//# sourceMappingURL=main.56b874ff.chunk.js.map