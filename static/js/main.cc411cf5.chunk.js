(this.webpackJsonpcoditation=this.webpackJsonpcoditation||[]).push([[0],{150:function(e,t,a){e.exports=a(289)},155:function(e,t,a){},156:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),u=a(23),r=a.n(u),l=(a(155),a(146)),c=a(29),o=(a(156),a(55)),i=a.n(o);var p=function(e){var t=Object(s.useContext)(O),a=function(e){var a=t.usestate.searchValue.toUpperCase();return e.login.toUpperCase().startsWith(a)};return Object(s.useEffect)((function(){i.a.get("https://api.github.com/users").then((function(e){t.usedispatch({type:"setAllUsers",value:e.data}),t.usedispatch({type:"setUsers",value:e.data})})).catch((function(e){console.log(e)}))}),[]),Object(s.useEffect)((function(){if(""===t.usestate.searchValue)return t.usedispatch({type:"setUsers",value:t.usestate.allusers});var e=t.usestate.allusers.filter(a);t.usedispatch({type:"setUsers",value:e})}),[t.usestate.searchValue]),n.a.createElement("div",{className:"search-div"},n.a.createElement("input",{onFocus:function(){return t.usedispatch({type:"setShowList",value:!0})},onChange:function(e){return function(e){t.usedispatch({type:"setSearchValue",value:e.target.value})}(e)},value:t.usestate.searchValue,className:"search-input",type:"text",placeholder:"Search user name",size:"30"}),t.usestate.showList&&n.a.createElement("ul",{className:"search-ul"},t.usestate.users.length>0?t.usestate.users.map((function(e){return n.a.createElement("li",{className:"user-name",key:e.id,value:e.login,onClick:function(){return a=e,t.usedispatch({type:"setSearchValue",value:a.login}),t.usedispatch({type:"setShowList",value:!1}),void t.usedispatch({type:"setUser",value:a});var a}},e.login)})):n.a.createElement("li",{className:"no-user"},"No data found")))};var m=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"app-name"},"APP_name"),n.a.createElement(p,null))};var d=function(){var e=Object(s.useContext)(O);return Object(s.useEffect)((function(){i.a.get(e.usestate.user.url).then((function(t){return e.usedispatch({type:"setUserInfo",value:t.data})})).catch((function(e){return console.log(e)}))}),[e.usestate.user]),n.a.createElement("div",{className:"profile-main-div"},n.a.createElement("img",{className:"profile-img",src:e.usestate.user.avatar_url,width:"150",height:"150"}),n.a.createElement("p",null,"Log in : ",e.usestate.user.login),n.a.createElement("p",null,"Name : ",e.usestate.userInfo.name),n.a.createElement("p",null,"Location : ",e.usestate.userInfo.location),n.a.createElement("p",null,"Email ID : ",e.usestate.userInfo.email),n.a.createElement("p",null,"Twitter : ",e.usestate.userInfo.twitter_username),n.a.createElement("p",null,"Followers : ",e.usestate.userInfo.followers),n.a.createElement("p",null,"Following : ",e.usestate.userInfo.following),n.a.createElement("p",null,"No of Public Repo : ",e.usestate.userInfo.public_repos),n.a.createElement("p",null,"Bio : ",e.usestate.userInfo.bio))};var h=function(){var e=Object(s.useContext)(O);return n.a.createElement("div",null,n.a.createElement("p",null,"ID : ",e.usestate.repo.id),n.a.createElement("p",null,"Name : ",e.usestate.repo.name),n.a.createElement("p",null,"Full Name : ",e.usestate.repo.full_name),n.a.createElement("p",null,"Description : ",e.usestate.repo.description),n.a.createElement("p",null,"Fork : ",e.usestate.repo.fork),n.a.createElement("p",null,"Created at : ",e.usestate.repo.created_at),n.a.createElement("p",null,"Updated at : ",e.usestate.repo.updated_at),n.a.createElement("p",null,"Pushed at : ",e.usestate.repo.pushed_at),n.a.createElement("p",null,"Size : ",e.usestate.repo.size),n.a.createElement("p",null,"Language : ",e.usestate.repo.language),n.a.createElement("p",null,"Forks Count : ",e.usestate.repo.forks_count),n.a.createElement("p",null,"Open Issues : ",e.usestate.repo.open_issues),n.a.createElement("p",null,"Watchers : ",e.usestate.repo.watchers),n.a.createElement("p",null,"Default Branch : ",e.usestate.repo.default_branch))},f=a(294),v=a(292),E=a(293),b=[{title:"ID",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Description",dataIndex:"description",key:"description"},{title:"Action",key:"action",render:function(e,t){return n.a.createElement(f.b,{size:"middle"},n.a.createElement("a",null,"View ",t.name))}}];var g=function(){var e=Object(s.useContext)(O);return Object(s.useEffect)((function(){i.a.get(e.usestate.user.repos_url).then((function(t){return e.usedispatch({type:"setRepoData",value:t.data})})).catch((function(e){return console.log(e)}))}),[e.usestate.user]),n.a.createElement("div",{className:"repo-main-div"},n.a.createElement("div",{className:"repo-head"},"Repositories",!0!==e.usestate.showRepos&&n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,"/",e.usestate.repo.id),n.a.createElement(E.a,{onClick:function(){e.usedispatch({type:"setShowRepos",value:!0})}}))),!0===e.usestate.showRepos?n.a.createElement("div",null,0!==e.usestate.repoData.length&&n.a.createElement(v.a,{size:"small",onRow:function(t,a){return{onClick:function(a){var s;s=t,e.usedispatch({type:"setShowRepos",value:!1}),e.usedispatch({type:"setRepo",value:s})},onDoubleClick:function(e){},onContextMenu:function(e){},onMouseEnter:function(e){},onMouseLeave:function(e){}}},columns:b,dataSource:e.usestate.repoData})):n.a.createElement(h,null))};var w=function(){return Object(s.useContext)(O),n.a.createElement("div",{className:"mainBody-div"},n.a.createElement(d,null),n.a.createElement(g,null))},O=n.a.createContext(),j={user:{},allusers:[],users:[],showList:!1,searchValue:"",repoData:[],userInfo:[],showRepos:!0,repo:{}},y=function(e,t){switch(t.type){case"setUser":return Object(c.a)(Object(c.a)({},e),{},{user:t.value});case"setAllUsers":return Object(c.a)(Object(c.a)({},e),{},{allusers:t.value});case"setUsers":return Object(c.a)(Object(c.a)({},e),{},{users:t.value});case"setShowList":return Object(c.a)(Object(c.a)({},e),{},{showList:t.value});case"setSearchValue":return Object(c.a)(Object(c.a)({},e),{},{searchValue:t.value});case"setRepoData":return Object(c.a)(Object(c.a)({},e),{},{repoData:t.value});case"setUserInfo":return Object(c.a)(Object(c.a)({},e),{},{userInfo:t.value});case"setShowRepos":return Object(c.a)(Object(c.a)({},e),{},{showRepos:t.value});case"setRepo":return Object(c.a)(Object(c.a)({},e),{},{repo:t.value});default:return e}};var I=function(){var e=Object(s.useReducer)(y,j),t=Object(l.a)(e,2),a=t[0],u=t[1];return n.a.createElement(O.Provider,{value:{usestate:a,usedispatch:u}},n.a.createElement(m,null),0!==Object.keys(a.user).length&&n.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(288);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[150,1,2]]]);
//# sourceMappingURL=main.cc411cf5.chunk.js.map