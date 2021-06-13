(this.webpackJsonpspookulator=this.webpackJsonpspookulator||[]).push([[0],{61:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(0),s=n.n(a),r=n(15),o=n.n(r),c=(n(61),n(37)),l=n(38),h=n(18),d=n(48),m=n(47),g="/evidenceImages/",p={emfLevelFive:{name:"EMF Level 5",image:g+"emfLevel5.jpg"},ghostWriting:{name:"Ghost Writing",image:g+"ghostWriting.png"},fingerPrints:{name:"Fingerprints",image:g+"fingerprints.jpg"},spiritBox:{name:"Spirit Box",image:g+"spiritBox.png"},freezingTemperatures:{name:"Freezing Temperatures",image:g+"freezingTemperatures.jpg"},ghostOrb:{name:"Ghost Orb",image:g+"ghostOrb.png"}},u=[{name:"Banshee",evidence:["EMF Level 5","Fingerprints","Freezing Temperatures"],link:"https://phasmophobia.fandom.com/wiki/Banshee",strength:"A Banshee will focus on one player at a time until it kills them or the player leaves the game.",weakness:"Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it."},{name:"Demon",evidence:["Freezing Temperatures","Ghost Writing","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Demon",strength:"Demons are the most aggressive ghosts and will begin Hunts more often.",weakness:"Asking a Demon successful questions on the Ouija Board won't lower the user's sanity."},{name:"Jinn",evidence:["EMF Level 5","Ghost Orb","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Jinn",strength:"A Jinn will travel at a faster speed if its victim is far away.",weakness:"Turning off the location's power source will prevent the Jinn from using its ability."},{name:"Mare",evidence:["Freezing Temperatures","Ghost Orb","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Mare",strength:"Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.",weakness:"Turning the lights on will lower its chance to attack."},{name:"Oni",evidence:["EMF Level 5","Ghost Writing","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Oni",strength:"Oni are more active when people are nearby and have been seen moving objects at great speed.",weakness:"Being more active will make the Oni easier to find and identify."},{name:"Phantom",evidence:["EMF Level 5","Freezing Temperatures","Ghost Orb"],link:"https://phasmophobia.fandom.com/wiki/Phantom",strength:"Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.",weakness:"Taking a photo of the Phantom will make it temporarily disappear. This, however, will not stop a Hunt."},{name:"Poltergeist",evidence:["Fingerprints","Ghost Orb","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Poltergeist",strength:"A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.",weakness:"A Poltergeist is almost ineffective in an empty room."},{name:"Revenant",evidence:["EMF Level 5","Fingerprints","Ghost Writing"],link:"https://phasmophobia.fandom.com/wiki/Revenant",strength:"A Revenant will travel at a significantly faster (2x) speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.",weakness:"Hiding from the Revenant will cause it to move at a significantly reduced (0.5x) speed."},{name:"Shade",evidence:["EMF Level 5","Ghost Orb","Ghost Writing"],link:"https://phasmophobia.fandom.com/wiki/Shade",strength:"As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.",weakness:"Conversely, a Shade will rarely start a Hunt when players are grouped together."},{name:"Spirit",evidence:["Fingerprints","Ghost Writing","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Spirit",strength:"The spirit has no discernible strengths, however it is known to increase its hunting as your sanity drops.",weakness:"Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90."},{name:"Wraith",evidence:["Fingerprints","Freezing Temperatures","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Wraith",strength:"Wraiths almost never touch the ground, but this does not apply to the ghost model. Because of this, footprint sounds from a Wraith will be rare to non-existent, and stepping in Salt will be less likely.",weakness:"Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, Ghost Activity will increase."},{name:"Yurei",evidence:["Freezing Temperatures","Ghost Orb","Ghost Writing"],link:"https://phasmophobia.fandom.com/wiki/Yurei",strength:"Yurei have been known to have a stronger effect on people's Sanity during a manifestation.",weakness:"Using Smudge Sticks on the Yurei will cause it to not wander around the location for ~90 seconds."},{name:"Yokai",evidence:["Ghost Orb","Ghost Writing","Spirit Box"],link:"https://phasmophobia.fandom.com/wiki/Yokai",strength:"Talking near a Yokai will anger it and cause it to attack more often.",weakness:"While hunting, it can only hear voices close to it."},{name:"Hantu",evidence:["Fingerprints","Ghost Orb","Ghost Writing"],link:"https://phasmophobia.fandom.com/wiki/Hantu",strength:"Hantu moves faster in colder areas.",weakness:"Hantu moves slower in warmer areas."}],b=function(e,t){return Object.values(e).find((function(e){return e.name===t}))},f=n(86),j=n(83),v=n(81),k=n(91),x=n(92),O=n(82),w=n(89),y=n(42),S=n.n(y),F=function(e){return Object(i.jsxs)(w.a,{children:[Object(i.jsx)(j.a,{variant:"h3",color:"primary",children:e.title}),Object(i.jsx)(w.a,{margin:7.5,children:Object(i.jsx)(v.a,{container:!0,lg:6,children:function(){var t=e.toggleEvidence,n=e.evidence;return Object(i.jsxs)(v.a,{container:!0,spacing:2,display:"flex",alignItems:"center",children:[Object.keys(n).map((function(e){return Object(i.jsx)(v.a,{item:!0,xs:!0,md:!0,align:"center",children:Object(i.jsx)(k.a,{color:n[e].isSelected?"primary":"default",disabled:n[e].isDisabled,onClick:function(){return t(e)},label:n[e].name,avatar:Object(i.jsx)(x.a,{src:n[e].image})},e)})})),Object(i.jsx)(v.a,{item:!0,xs:12,md:!0,align:"center",children:Object(i.jsx)(O.a,{edge:"start",onClick:e.reset,children:Object(i.jsx)(S.a,{color:"primary"})})})]})}()})})]})},G=n(84),E=n(43),T=n.n(E),B=function(e){return Object(i.jsxs)(w.a,{children:[Object(i.jsx)(j.a,{variant:"h3",color:"primary",children:e.title}),Object(i.jsx)(v.a,{container:!0,align:!0,justify:"space-between",children:e.ghosts.length>0?Object(i.jsx)(v.a,{item:!0,children:e.ghosts.map((function(e){return Object(i.jsxs)(G.a,{raised:!0,children:[Object(i.jsxs)(j.a,{variant:"h4",children:[e.name,Object(i.jsx)(O.a,{href:e.link,target:"_blank",children:Object(i.jsx)(T.a,{})})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Strength: "}),e.strength]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Weakness: "}),e.weakness]})]})]},e.name)}))}):Object(i.jsx)(v.a,{item:!0,children:e.emptyText})})]})},W=n(85),C=(Object(W.a)((function(e){return{icon:{fill:"#673ab7"}}})),n(45)),H=n.n(C),L=n(44),P=n.n(L),z=Object(W.a)((function(e){return{icon:{fill:"#673ab7"},iconsGrid:{flexDirection:"row-reverse"}}})),A=function(e){var t=z();return Object(i.jsx)(w.a,{children:Object(i.jsx)(v.a,{container:!0,lg:6,className:t.iconsGrid,children:Object(i.jsxs)(v.a,{item:!0,children:[Object(i.jsx)(O.a,{href:"https://www.linkedin.com/in/williamdwalsh/",target:"_blank",children:Object(i.jsx)(P.a,{className:t.icon,fontSize:"large"})}),Object(i.jsx)(O.a,{href:"https://github.com/walshw",target:"_blank",children:Object(i.jsx)(H.a,{className:t.icon,fontSize:"large"})})]})})})},M=n(5),D=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getInitialState=function(){var e={},t=[];return Object.keys(p).forEach((function(n){e[n]={name:p[n].name,image:p[n].image,isSelected:!1,isDisabled:!1},t.push({name:p[n].name,image:p[n].image})})),{evidence:e,possibleGhosts:u,impossibleGhosts:[],possibleRemainingEvidence:t}},a.renderGhosts=function(){return u.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("b",{children:e.name})}),Object(i.jsx)("div",{children:e.evidence[0]}),Object(i.jsx)("div",{children:e.evidence[1]}),Object(i.jsx)("div",{children:e.evidence[2]}),Object(i.jsx)("hr",{})]})}))},a.toggleEvidence=function(e){var t=a.state.evidence;t[e].isSelected=!t[e].isSelected,a.calculateEvidenceStates(t)},a.resetState=function(){a.setState(a.getInitialState())},a.calculateEvidenceStates=function(e){var t=[],n=[],i=new Set,s=Object.keys(e).filter((function(t){return e[t].isSelected})).map((function(t){return e[t].name}));u.forEach((function(e){s.every((function(t){return e.evidence.includes(t)}))?(t.push(e),e.evidence.forEach((function(e){return i.add(e)}))):n.push(e)}));var r,o,c=Array.from(i).filter((function(e){return!s.includes(e)})),l=Object.values(p).filter((function(e){return!c.includes(e.name)&&!s.includes(e.name)})).map((function(e){return e.name}));r=e,o=l,Object.keys(r).forEach((function(e){o.includes(r[e].name)?r[e].isDisabled=!0:r[e].isDisabled=!1})),c.sort();var h=c.map((function(e){return{name:e,image:b(p,e).image}}));a.setState({possibleGhosts:t,impossibleGhosts:n,possibleRemainingEvidence:h,selectedEvidence:e})},a.renderRemainingGhosts=function(){var e=a.state.possibleGhosts;e.length;return Object(i.jsxs)("div",{children:[Object(i.jsx)(B,{ghosts:e}),Object(i.jsx)("hr",{})]})},a.state=Object(c.a)({},a.getInitialState()),a}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.evidence,t=this.props.classes;return Object(i.jsxs)("div",{className:t.mainContainer,children:[Object(i.jsx)(f.a,{position:"absolute",children:Object(i.jsx)(j.a,{variant:"h2",className:t.headerText,children:"Spookulator"})}),Object(i.jsx)("div",{className:t.offset}),Object(i.jsx)(F,{title:"Select Found Evidence",toggleEvidence:this.toggleEvidence,evidence:e,reset:this.resetState}),this.renderRemainingGhosts(),Object(i.jsx)(A,{})]})}}]),n}(a.Component),I=Object(M.a)((function(e){return{offset:e.mixins.toolbar,mainContainer:{margin:"20px"},headerText:{flexGrow:1},linkIconsContainer:{display:"flex",justifyContent:"space-around",flexBasis:"10%"}}}))(D),R=n(87),Y=n(88),J=n(46),N=Object(J.a)({palette:{primary:{main:"#673ab7",light:"#9a67ea",dark:"#320b86",contrastText:"#000000"},secondary:{main:"#424242",light:"#6d6d6d",dark:"#1b1b1b"},text:{default:"#FFFFFF",primary:"#FFFFFF"},background:{default:"#1b1b1b"}},spacing:2,overrides:{MuiCard:{root:{background:"#320b86",margin:15,padding:15}}},mixins:{toolbar:{minHeight:78}}});var _=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(R.a,{theme:N,children:[Object(i.jsx)(Y.a,{}),Object(i.jsx)(I,{})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.daee4dc9.chunk.js.map