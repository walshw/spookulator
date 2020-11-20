(this.webpackJsonpspookulator=this.webpackJsonpspookulator||[]).push([[0],{59:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(0),s=n.n(a),r=n(15),o=n.n(r),c=(n(59),n(37)),h=n(38),l=n(18),d=n(46),m=n(45),p="/spookulator/evidenceImages/",g={emfLevelFive:{name:"EMF Level 5",image:p+"emfLevel5.jpg"},ghostWriting:{name:"Ghost Writing",image:p+"ghostWriting.png"},fingerPrints:{name:"Fingerprints",image:p+"fingerprints.jpg"},spiritBox:{name:"Spirit Box",image:p+"spiritBox.png"},freezingTemperatures:{name:"Freezing Temperatures",image:p+"freezingTemperatures.jpg"},ghostOrb:{name:"Ghost Orb",image:p+"ghostOrb.png"}},u=[{name:"Banshee",evidence:["EMF Level 5","Fingerprints","Freezing Temperatures"],link:"https://phasmophobia.fandom.com/wiki/Banshee",strength:"A Banshee will focus on one player at a time until it kills them.",weakness:"Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it."},{name:"Demon",evidence:["Ghost Writing","Spirit Box","Freezing Temperatures"],link:"https://phasmophobia.fandom.com/wiki/Demon",strength:"Demons will attack more often than any other ghost.",weakness:"Asking a Demon successful questions on the Ouija Board won't lower the users' sanity."},{name:"Jinn",evidence:["EMF Level 5","Spirit Box","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Jinn",strength:"A Jinn will travel at a faster speed if its victim is far away.",weakness:"Turning off the location's power source will prevent the Jinn from using its ability."},{name:"Mare",evidence:["Spirit Box","Freezing Temperatures","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Mare",strength:"Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.",weakness:"Turning the lights on will lower its chance to attack."},{name:"Oni",evidence:["EMF Level 5","Ghost Writing","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Oni",strength:"Oni are more active when people are nearby and have been seen moving objects at great speed.",weakness:"Being more active will make the Oni easier to find and identify."},{name:"Phantom",evidence:["EMF Level 5","Freezing Temperatures","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Phantom",strength:"Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.",weakness:"Taking a photo of the Phantom will make it temporarily disappear. The Photo Camera will make it disappear, but it will not stop a Hunt."},{name:"Poltergeist",evidence:["Fingerprints","Spirit Box","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Poltergeist",strength:"A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.",weakness:"A Poltergeist is almost ineffective in an empty room."},{name:"Revenant",evidence:["EMF Level 5","Ghost Writing","Fingerprints"],link:"https://phasmophobia.fandom.com/wiki/Revenant",strength:"A Revenant will travel at a significantly faster speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.",weakness:"Hiding from the Revenant will cause it to move very slowly."},{name:"Shade",evidence:["EMF Level 5","Ghost Writing","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Shade",strength:"As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.",weakness:"Conversely, a Shade will rarely start a Hunt when players are grouped together."},{name:"Spirit",evidence:["Ghost Writing","Fingerprints","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Spirit",strength:"None. The Spirit has no unique powers, making it easier to survive but harder to identify.",weakness:"Using Smudge Sticks on a Spirit will stop it attacking for 120 seconds instead of 90."},{name:"Wraith",evidence:["Fingerprints","Spirit Box","Freezing Temperatures"],link:"https://phasmophobia.fandom.com/wiki/Wraith",strength:"Wraiths almost never touch the ground, meaning it can't be tracked by footsteps. It can travel through walls and doors without opening them, and will not leave footprints on the ground.",weakness:"Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking."},{name:"Yurei",evidence:["Ghost Writing","Freezing Temperatures","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Yurei",strength:"Yurei have been known to have a stronger effect on people's Sanity.",weakness:"Using Smudge Sticks on the Yurei's Ghost Room will cause it to not wander around the location for ~90 seconds."}],b=function(e,t){return Object.values(e).find((function(e){return e.name===t}))},j=n(85),f=n(83),v=n(80),O=n(90),x=n(91),k=n(81),w=n(42),y=n.n(w),S=function(e){return Object(i.jsx)(v.a,{container:!0,lg:6,children:function(){var t=e.toggleEvidence,n=e.evidence;return Object(i.jsxs)(v.a,{container:!0,spacing:2,display:"flex",alignItems:"center",children:[Object.keys(n).map((function(e){return Object(i.jsx)(v.a,{item:!0,xs:!0,md:!0,align:"center",children:Object(i.jsx)(O.a,{color:n[e].isSelected?"primary":"default",disabled:n[e].isDisabled,onClick:function(){return t(e)},label:n[e].name,avatar:Object(i.jsx)(x.a,{src:n[e].image})},e)})})),Object(i.jsx)(v.a,{item:!0,xs:12,md:!0,align:"center",children:Object(i.jsx)(k.a,{edge:"start",onClick:e.reset,children:Object(i.jsx)(y.a,{})})})]})}()})},F=n(88),G=n(82),E=n(43),T=n.n(E),B=function(e){return Object(i.jsxs)(F.a,{children:[Object(i.jsx)(f.a,{variant:"h3",color:"primary",children:e.title}),e.ghosts.length>0?Object(i.jsx)(F.a,{children:e.ghosts.map((function(e){return Object(i.jsxs)(G.a,{raised:!0,children:[Object(i.jsxs)(f.a,{variant:"h4",children:[e.name,Object(i.jsx)(k.a,{href:e.link,target:"_blank",children:Object(i.jsx)(T.a,{})})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Strength: "}),e.strength]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Weakness: "}),e.weakness]})]})]},e.name)}))}):Object(i.jsx)("div",{children:e.emptyText})]})},C=n(84),L=Object(C.a)({listContainer:{display:"flex",justifyContent:"space-around"}}),P=function(e){var t=L();return Object(i.jsxs)("div",{children:[Object(i.jsx)(f.a,{variant:"h3",color:"primary",children:e.title}),Object(i.jsx)("div",{className:t.listContainer,children:e.contentList.length>0?e.contentList.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:e.image,height:"100",width:"100"})}),Object(i.jsx)(f.a,{children:e.name})]},e.name)})):Object(i.jsx)(f.a,{children:e.emptyText})})]})},W=n(5),A=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getInitialState=function(){var e={},t=[];return Object.keys(g).forEach((function(n){e[n]={name:g[n].name,image:g[n].image,isSelected:!1,isDisabled:!1},t.push({name:g[n].name,image:g[n].image})})),{evidence:e,possibleGhosts:u,impossibleGhosts:[],possibleRemainingEvidence:t}},a.renderGhosts=function(){return u.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("b",{children:e.name})}),Object(i.jsx)("div",{children:e.evidence[0]}),Object(i.jsx)("div",{children:e.evidence[1]}),Object(i.jsx)("div",{children:e.evidence[2]}),Object(i.jsx)("hr",{})]})}))},a.toggleEvidence=function(e){var t=a.state.evidence;t[e].isSelected=!t[e].isSelected,a.calculateEvidenceStates(t)},a.resetState=function(){a.setState(a.getInitialState())},a.calculateEvidenceStates=function(e){var t=[],n=[],i=new Set,s=Object.keys(e).filter((function(t){return e[t].isSelected})).map((function(t){return e[t].name}));u.forEach((function(e){s.every((function(t){return e.evidence.includes(t)}))?(t.push(e),e.evidence.forEach((function(e){return i.add(e)}))):n.push(e)}));var r,o,c=Array.from(i).filter((function(e){return!s.includes(e)})),h=Object.values(g).filter((function(e){return!c.includes(e.name)&&!s.includes(e.name)})).map((function(e){return e.name}));r=e,o=h,Object.keys(r).forEach((function(e){o.includes(r[e].name)?r[e].isDisabled=!0:r[e].isDisabled=!1}));var l=c.map((function(e){return{name:e,image:b(g,e).image}}));a.setState({possibleGhosts:t,impossibleGhosts:n,possibleRemainingEvidence:l,selectedEvidence:e})},a.renderRemainingGhosts=function(){var e=a.state.possibleGhosts,t=e.length>1?"Possible Ghosts":"Ghost Type";return Object(i.jsxs)("div",{children:[Object(i.jsx)(B,{title:t,ghosts:e}),Object(i.jsx)("hr",{})]})},a.state=Object(c.a)({drawerOpen:!1},a.getInitialState()),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.drawerOpen,n=this.props.classes;return Object(i.jsxs)("div",{className:"evidenceContainer",children:[Object(i.jsx)(j.a,{position:"fixed",children:Object(i.jsx)(f.a,{variant:"h2",children:"Spookulator"})}),Object(i.jsx)("div",{className:n.offset}),Object(i.jsx)(S,{toggleEvidence:this.toggleEvidence,evidence:this.state.evidence,reset:this.resetState,isOpen:t,toggleOpen:function(){return e.setState({drawerOpen:!t})}}),Object(i.jsx)("hr",{}),Object(i.jsx)(P,{title:"Possible Remaining Evidence",contentList:this.state.possibleRemainingEvidence,emptyText:"No remaining evidence"}),Object(i.jsx)("hr",{}),this.renderRemainingGhosts()]})}}]),n}(a.Component),R=Object(W.a)((function(e){return{offset:e.mixins.toolbar}}))(A),M=n(86),D=n(87),I=n(44),z=Object(I.a)({palette:{primary:{main:"#E36C14",contrastText:"#000000"},secondary:{main:"#1C4EAA"},text:{default:"#FFFF00",primary:"#FFFFFF"},background:{default:"#666667"}},spacing:2,overrides:{MuiCard:{root:{background:"#2F2D92",margin:15,padding:15}}},mixins:{toolbar:{minHeight:78}}});var H=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(M.a,{theme:z,children:[Object(i.jsx)(D.a,{}),Object(i.jsx)(R,{})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(H,{})}),document.getElementById("root")),J()}},[[65,1,2]]]);
//# sourceMappingURL=main.76fca7e9.chunk.js.map