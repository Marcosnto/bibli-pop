(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=(a(63),a(13)),i=a(15),s=a(16),u=a(22),m=a(21),f=a(12),d=(a(64),a(65),a(30)),v=function(e){return r.a.createElement(d.b,Object.assign({activeStyle:{fontWeight:"bold"}},e))},h=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper menu"},r.a.createElement(v,{to:"/",className:"brand-logo"},"Biblioteca Popular"),r.a.createElement("ul",{className:"right opcoes"},r.a.createElement("li",null,r.a.createElement(v,{to:"/authors"},"Autores")),r.a.createElement("li",null,r.a.createElement(v,{to:"/books"},"Livros")),r.a.createElement("li",null,r.a.createElement(v,{to:"/newauthor"},"Adicionar Novo")),r.a.createElement("li",null,r.a.createElement(v,{to:"/about"},"Sobre")))))},p=a(164),E=a(167),b=a(163),g=a(165),y=a(166),j=a(168),N=function(e){var t=e.handleRemoveItem,a=e.id;return t?r.a.createElement(b.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){t(a)}},"Remover")):null},O=function(e){return e.handleRemoveItem?r.a.createElement(b.a,null,"Remover"):null},R=function(e){var t=e.campos,a=e.dados,n=e.handleRemoveItem;return r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,null,t.map(function(e){return r.a.createElement(b.a,null,e.titulo)}),r.a.createElement(O,{handleRemoveItem:n,titulo:!0}))),r.a.createElement(E.a,null,a.map(function(e){return console.log(a),r.a.createElement(y.a,{key:e.id},t.map(function(t){return r.a.createElement(b.a,null,e[t.dado])}),r.a.createElement(N,{id:e.id,handleRemoveItem:n}))})))},A=a(40),I=a.n(A),x={exibeMensagem:function(e,t){"success"===e&&I.a.toast({html:t,classes:"green",displayLength:2e3}),"error"===e&&I.a.toast({html:t,classes:"red",displayLength:2e3})}},w={ListaAutores:function(){return fetch("http://localhost:8000/api/autor").then(function(e){return w.TrataErros(e)}).then(function(e){return e.json()})},CriarAutor:function(e){return fetch("http://localhost:8000/api/autor",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return w.TrataErros(e)}).then(function(e){return e.json()})},ListaNomes:function(){return fetch("http://localhost:8000/api/autor/nome").then(function(e){return w.TrataErros(e)}).then(function(e){return e.json()})},ListaLivros:function(){return fetch("http://localhost:8000/api/autor/livro").then(function(e){return w.TrataErros(e)}).then(function(e){return e.json()})},RemoveAutor:function(e){return fetch("http://localhost:8000/api/autor/".concat(e),{method:"DELETE",headers:{"content-type":"aplication/json"}}).then(function(e){return w.TrataErros(e)}).then(function(e){return e.json()})},TrataErros:function(e){if(!e.ok)throw Error(e.responseText);return e}},L=w;function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var k=function(e){Object(u.a)(a,e);var t=S(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleRemoveItem=function(e){var t=n.state.autors.filter(function(t){return t.id!==e});L.RemoveAutor(e).then(function(e){"deleted"===e.message&&(n.setState({autors:Object(l.a)(t)}),x.exibeMensagem("success","Autor Removido com sucesso"))}).catch(function(e){return x.exibeMensagem("error","Erro na comunica\xe7\xe3o com a API ao remover o usuario")})},n.state={autors:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.ListaAutores().then(function(t){"success"===t.message&&e.setState({autors:[].concat(Object(l.a)(e.state.autors),Object(l.a)(t.data))})}).catch(function(e){return x.exibeMensagem("error","Erro na comunica\xe7\xe3o com a API ao Listar os usuarios")})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container mb-10"},r.a.createElement("h2",{className:"center titulo"},"Acervo"),r.a.createElement(R,{campos:[{titulo:"Autores",dado:"nome"},{titulo:"Livro",dado:"livro"},{titulo:"Pre\xe7os",dado:"preco"}],dados:this.state.autors,handleRemoveItem:this.handleRemoveItem})))}}]),a}(n.Component),M=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 autores"},r.a.createElement("h2",{className:"center titulo"},"Sobre"),r.a.createElement("p",{className:"sobre"},"Projeto em ReactJS ",r.a.createElement("br",null),"Feito por: Marcos Neto ",r.a.createElement("br",null),"Curso: Alura - React JS ",r.a.createElement("br",null),"Data: 04/06/2020 ",r.a.createElement("br",null))))))},P=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container-fluid notFound"},r.a.createElement("div",{className:"row mb0"},r.a.createElement("div",{className:"col-12 msg"},r.a.createElement("ul",{className:"center"},r.a.createElement("li",null,r.a.createElement("img",{src:"/source.gif",width:"480",height:"360",alt:"anima\xe7\xe3o 404"})),r.a.createElement("li",null,r.a.createElement("h1",{style:{color:"white"}},"P\xe1gina n\xe3o encontrada")))))))};function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var F=function(e){Object(u.a)(a,e);var t=D(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={nomes:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.ListaNomes().then(function(t){"success"===t.message&&(x.exibeMensagem("success","Autores listados com sucesso"),e.setState({nomes:[].concat(Object(l.a)(e.state.nomes),Object(l.a)(t.data))}))}).catch(function(e){return x.exibeMensagem("error","Erro na comunica\xe7\xe3o com a API ao Listar os Autores")})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 autores"},r.a.createElement("h2",{className:"center titulo"},"Autores"),r.a.createElement(R,{dados:this.state.nomes,campos:[{titulo:"Autores",dado:"nome"}]})))))}}]),a}(n.Component);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var T=function(e){Object(u.a)(a,e);var t=C(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={livros:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.ListaLivros().then(function(t){"success"===t.message&&(x.exibeMensagem("success","Livros listados com sucesso"),e.setState({livros:[].concat(Object(l.a)(e.state.livros),Object(l.a)(t.data))}))}).catch(function(e){return x.exibeMensagem("error","Erro na comunica\xe7\xe3o com a API ao Listar os livros")})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 autores"},r.a.createElement("h2",{className:"center titulo"},"Livros"),r.a.createElement(R,{dados:this.state.livros,campos:[{titulo:"Livros",dado:"livro"}]})))))}}]),a}(n.Component),J=a(34),Q=a(55),V=a(56),B=a.n(V),W=function(){function e(t){Object(i.a)(this,e),this.validacoes=t}return Object(s.a)(e,[{key:"valida",value:function(e){var t=this.valido();return this.validacoes.forEach(function(a){var n=e[a.campo.toString()],r=a.args||[];("string"===typeof a.metodo?B.a[a.metodo]:a.metodo).apply(void 0,[n].concat(Object(l.a)(r),[e]))!==a.validoQuando&&(t[a.campo]={isInvalid:!0,message:a.mensagem},t.isValid=!1)}),t}},{key:"valido",value:function(){var e={};return this.validacoes.map(function(t){return e[t.campo]={isInvalid:!1,message:""}}),Object(Q.a)({isValid:!0},e)}}]),e}();function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(m.a)(this,a)}}var z=function(e){Object(u.a)(a,e);var t=q(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).submitForm=function(){var e=n.validador.valida(n.state);if(e.isValid)n.props.handleAddAutor(n.state),n.setState(n.stateInitial);else{var t=[e.nome,e.livro,e.preco];console.log(t),t.filter(function(e){return e.isInvalid}).forEach(function(e){x.exibeMensagem("error",e.message)})}},n.listeningInput=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n.stateInitial={nome:"",livro:"",preco:""},n.validador=new W([{campo:"nome",metodo:"isEmpty",validoQuando:!1,mensagem:"Entre com um nome"},{campo:"livro",metodo:"isEmpty",validoQuando:!1,mensagem:"Entre com um livro"},{campo:"preco",metodo:"isInt",args:[{min:0,max:99999}],validoQuando:!0,mensagem:"Entre com um valor num\xe9rico"}]),n.stateInitial={nome:"",livro:"",preco:"",validacao:n.validador.valido()},n.state=n.stateInitial,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nome,a=e.livro,n=e.preco;return r.a.createElement("form",{action:""},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"center titulo"},"Adicionar Livro"),r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"col s12"},r.a.createElement("li",{className:"input-field"},r.a.createElement("label",{className:"input-field",htmlFor:"nome"}," Nome "),r.a.createElement("input",{className:"validate",id:"nome",type:"text",name:"nome",value:t,onChange:this.listeningInput})),r.a.createElement("li",{className:"input-field"},r.a.createElement("label",{className:"input-field",htmlFor:"livro"}," Livro "),r.a.createElement("input",{className:"validate",id:"livro",type:"text",name:"livro",value:a,onChange:this.listeningInput})),r.a.createElement("li",{className:"input-field"},r.a.createElement("label",{className:"input-field",htmlFor:"preco"}," Pre\xe7o "),r.a.createElement("input",{className:"validate",id:"preco",type:"text",name:"preco",value:n,onChange:this.listeningInput})))),r.a.createElement("div",{className:"row center"},r.a.createElement("button",{className:"waves-effect waves-light btn indigo lighten-2",type:"button",onClick:this.submitForm},"Salvar"))))}}]),a}(n.Component),G=function(e){L.CriarAutor(e).then(function(e){"success"===e.message&&x.exibeMensagem("success","Autor Adicionado com Sucesso")}).catch(function(e){return x.exibeMensagem("error","Erro na comunica\xe7\xe3o com a API ao adicionar o usuario")})},H=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",null,r.a.createElement(z,{handleAddAutor:G})))},K=a(5);c.a.render(r.a.createElement(d.a,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/",exact:!0,component:k}),r.a.createElement(K.a,{path:"/bibli-pop",component:k}),r.a.createElement(K.a,{path:"/about",component:M}),r.a.createElement(K.a,{path:"/authors",component:F}),r.a.createElement(K.a,{path:"/books",component:T}),r.a.createElement(K.a,{path:"/newauthor",component:H}),r.a.createElement(K.a,{component:P}))),document.getElementById("root"))},58:function(e,t,a){e.exports=a(143)},63:function(e,t,a){},65:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.c8b442a1.chunk.js.map