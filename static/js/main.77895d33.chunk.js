(this.webpackJsonpspookulator=this.webpackJsonpspookulator||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),r=i.n(s),c=i(3),o=i.n(c),a=(i(13),i(4)),h=i(5),d=i(7),l=i(6),m={emfLevelFive:"EMF Level 5",ghostWriting:"Ghost Writing",fingerPrints:"Fingerprints",spiritBox:"Spirit Box",freezingTemperatures:"Freezing Temperatures",ghostOrb:"Ghost Orb"},p=[{name:"Banshee",evidence:["EMF Level 5","Fingerprints","Freezing Temperatures"],link:"https://phasmophobia.fandom.com/wiki/Banshee"},{name:"Demon",evidence:["Ghost Writing","Spirit Box","Freezing Temperatures"],link:"https://phasmophobia.fandom.com/wiki/Demon"},{name:"Jinn",evidence:["EMF Level 5","Spirit Box","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Jinn"},{name:"Mare",evidence:["Spirit Box","Freezing Temperatures","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Mare"},{name:"Oni",evidence:["EMF Level 5","Ghost Writing","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Oni"},{name:"Phantom",evidence:["EMF Level 5","Freezing Temperatures","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Phantom"},{name:"Poltergeist",evidence:["Fingerprints","Spirit Box","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Poltergeist"},{name:"Revenant",evidence:["EMF Level 5","Ghost Writing","Fingerprints"],link:"https://phasmophobia.fandom.com/wiki/Revenant"},{name:"Shade",evidence:["EMF Level 5","Ghost Writing","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Shade"},{name:"Spirit",evidence:["Ghost Writing","Fingerprints","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Spirit"},{name:"Wraith",evidence:["Fingerprints","Spirit Box","Freezing Temperatures"],link:"https://phasmophobia.fandom.com/wiki/Wraith"},{name:"Yurei",evidence:["Ghost Writing","Freezing Temperatures","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Yurei"}],b=function(e){console.log("rerendered");return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Click the Evidence Names Below to Begin"}),function(){var t=e.toggleEvidence,i=e.evidence;return Object(n.jsx)("div",{className:"evidenceOptionsContainer",children:Object.keys(i).map((function(e){return Object(n.jsx)("button",{className:i[e].isSelected?"glow":"",disabled:i[e].isDisabled,onClick:function(){return t(e)},children:i[e].name},e)}))})}(),Object(n.jsx)("button",{onClick:e.reset,children:"Clear"})]})},u=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:e.title}),e.ghosts.length>0?Object(n.jsx)("div",{className:"listContainer",children:e.ghosts.map((function(e){return Object(n.jsx)("a",{href:e.link,children:Object(n.jsx)("div",{children:e.name},e.name)})}))}):Object(n.jsx)("div",{children:e.emptyText})]})},j=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:e.title}),e.contentList.length>0?Object(n.jsx)("div",{className:"listContainer",children:e.contentList.map((function(e){return Object(n.jsx)("div",{children:e.name},e.name)}))}):Object(n.jsx)("div",{children:e.emptyText})]})},v=function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(e){var s;return Object(a.a)(this,i),(s=t.call(this,e)).getInitialState=function(){var e={},t=[];return Object.keys(m).forEach((function(i){e[i]={name:m[i],isSelected:!1,isDisabled:!1},t.push({name:m[i]})})),{evidence:e,possibleGhosts:p,impossibleGhosts:[],possibleRemainingEvidence:t}},s.renderGhosts=function(){return p.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:e.name})}),Object(n.jsx)("div",{children:e.evidence[0]}),Object(n.jsx)("div",{children:e.evidence[1]}),Object(n.jsx)("div",{children:e.evidence[2]}),Object(n.jsx)("hr",{})]})}))},s.toggleEvidence=function(e){var t=s.state.evidence;t[e].isSelected=!t[e].isSelected,s.calculateEvidenceStates(t)},s.resetState=function(){s.setState(s.getInitialState())},s.calculateEvidenceStates=function(e){var t=Object.keys(e).filter((function(t){return e[t].isSelected})).map((function(t){return e[t].name})),i=[],n=[],r=new Set;p.forEach((function(e){t.every((function(t){return e.evidence.includes(t)}))?(i.push(e),e.evidence.forEach((function(e){return r.add(e)}))):n.push(e)}));var c=Array.from(r).filter((function(e){return!t.includes(e)})),o=Object.values(m).filter((function(e){return!c.includes(e)&&!t.includes(e)}));Object.keys(e).forEach((function(t){o.includes(e[t].name)?e[t].isDisabled=!0:e[t].isDisabled=!1})),s.setState({possibleGhosts:i,impossibleGhosts:n,possibleRemainingEvidence:c.map((function(e){return{name:e}})),selectedEvidence:e})},s.renderRemainingGhosts=function(){var e=s.state.possibleGhosts,t=e.length>1?"Possible Ghosts":"Ghost Type";return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{title:t,ghosts:e}),Object(n.jsx)("hr",{})]})},s.state=s.getInitialState(),s}return Object(h.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{toggleEvidence:this.toggleEvidence,evidence:this.state.evidence,reset:this.resetState}),Object(n.jsx)("hr",{}),Object(n.jsx)(j,{title:"Possible Remaining Evidence (Maybe remove? Maybe have pictures of tools)",contentList:this.state.possibleRemainingEvidence,emptyText:"No remaining evidence"}),Object(n.jsx)("hr",{}),this.renderRemainingGhosts(),Object(n.jsx)(u,{title:"Impossible Ghosts",ghosts:this.state.impossibleGhosts,emptyText:"No Impossible Ghosts"}),Object(n.jsx)("hr",{})]})}}]),i}(s.Component);i(14);var g=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(v,{})})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),r(e),c(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.77895d33.chunk.js.map