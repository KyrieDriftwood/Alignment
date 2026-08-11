(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const us="149",Pn={ROTATE:0,DOLLY:1,PAN:2},Dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bo=0,bs=1,Go=2,Za=1,ko=2,vi=3,an=0,ye=1,nn=2,rn=0,Zn=1,ws=2,Es=3,Ts=4,Vo=5,qn=100,Ho=101,Wo=102,As=103,Cs=104,$o=200,Xo=201,qo=202,Yo=203,Ka=204,Ja=205,jo=206,Zo=207,Ko=208,Jo=209,Qo=210,tl=0,el=1,nl=2,ts=3,il=4,rl=5,sl=6,al=7,Qa=0,ol=1,ll=2,Ze=0,cl=1,ul=2,hl=3,dl=4,fl=5,to=300,ti=301,ei=302,es=303,ns=304,sr=306,is=1e3,Pe=1001,rs=1002,de=1003,Ls=1004,pr=1005,Ee=1006,pl=1007,yi=1008,bn=1009,ml=1010,gl=1011,eo=1012,_l=1013,xn=1014,vn=1015,Si=1016,xl=1017,vl=1018,Kn=1020,Ml=1021,De=1023,yl=1024,Sl=1025,yn=1026,ni=1027,bl=1028,wl=1029,El=1030,Tl=1031,Al=1033,mr=33776,gr=33777,_r=33778,xr=33779,Ps=35840,Ds=35841,Rs=35842,Is=35843,Cl=36196,Ns=37492,Fs=37496,Os=37808,Us=37809,zs=37810,Bs=37811,Gs=37812,ks=37813,Vs=37814,Hs=37815,Ws=37816,$s=37817,Xs=37818,qs=37819,Ys=37820,js=37821,vr=36492,Ll=36283,Zs=36284,Ks=36285,Js=36286,wn=3e3,Bt=3001,Pl=3200,Dl=3201,no=0,Rl=1,Ne="srgb",bi="srgb-linear",Mr=7680,Il=519,Qs=35044,ta="300 es",ss=1035;class Ln{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,ea=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(oe[s&255]+oe[s>>8&255]+oe[s>>16&255]+oe[s>>24&255]+"-"+oe[t&255]+oe[t>>8&255]+"-"+oe[t>>16&15|64]+oe[t>>24&255]+"-"+oe[e&63|128]+oe[e>>8&255]+"-"+oe[e>>16&255]+oe[e>>24&255]+oe[n&255]+oe[n>>8&255]+oe[n>>16&255]+oe[n>>24&255]).toLowerCase()}function fe(s,t,e){return Math.max(t,Math.min(e,s))}function Nl(s,t){return(s%t+t)%t}function Sr(s,t,e){return(1-e)*s+e*t}function na(s){return(s&s-1)===0&&s!==0}function as(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _e(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],v=n[8],p=i[0],d=i[3],_=i[6],E=i[1],y=i[4],b=i[7],g=i[2],L=i[5],I=i[8];return r[0]=o*p+a*E+c*g,r[3]=o*d+a*y+c*L,r[6]=o*_+a*b+c*I,r[1]=l*p+u*E+f*g,r[4]=l*d+u*y+f*L,r[7]=l*_+u*b+f*I,r[2]=h*p+m*E+v*g,r[5]=h*d+m*y+v*L,r[8]=h*_+m*b+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,m=l*r-o*c,v=e*f+n*h+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return t[0]=f*p,t[1]=(i*l-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=h*p,t[4]=(u*e-i*c)*p,t[5]=(i*r-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Me;function io(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ki(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const wr={[Ne]:{[bi]:Sn},[bi]:{[Ne]:ji}},ue={legacyMode:!0,get workingColorSpace(){return bi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(wr[t]&&wr[t][e]!==void 0){const n=wr[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},ro={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={r:0,g:0,b:0},Ae={h:0,s:0,l:0},Ci={h:0,s:0,l:0};function Er(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Li(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Nl(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Er(o,r,t+1/3),this.g=Er(o,r,t),this.b=Er(o,r,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ue.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ue.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ue.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ue.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Ne){const n=ro[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ue.fromWorkingColorSpace(Li(this,jt),t),fe(jt.r*255,0,255)<<16^fe(jt.g*255,0,255)<<8^fe(jt.b*255,0,255)<<0}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Li(this,jt),e);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Li(this,jt),e),t.r=jt.r,t.g=jt.g,t.b=jt.b,t}getStyle(t=Ne){return ue.fromWorkingColorSpace(Li(this,jt),t),t!==Ne?`color(${t} ${jt.r} ${jt.g} ${jt.b})`:`rgb(${jt.r*255|0},${jt.g*255|0},${jt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ae),Ae.h+=t,Ae.s+=e,Ae.l+=n,this.setHSL(Ae.h,Ae.s,Ae.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ae),t.getHSL(Ci);const n=Sr(Ae.h,Ci.h,e),i=Sr(Ae.s,Ci.s,e),r=Sr(Ae.l,Ci.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}zt.NAMES=ro;let Rn;class so{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rn===void 0&&(Rn=Ki("canvas")),Rn.width=t.width,Rn.height=t.height;const n=Rn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ki("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ao{constructor(t=null){this.isSource=!0,this.uuid=Ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Tr(i[o].image)):r.push(Tr(i[o]))}else r=Tr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?so.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class Se extends Ln{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=Pe,i=Pe,r=Ee,o=yi,a=De,c=bn,l=Se.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=Ei(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==to)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case Pe:t.x=t.x<0?0:1;break;case rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case Pe:t.y=t.y<0?0:1;break;case rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=to;Se.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],v=c[9],p=c[2],d=c[6],_=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,b=(m+1)/2,g=(_+1)/2,L=(u+h)/4,I=(f+p)/4,M=(v+d)/4;return y>b&&y>g?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=L/n,r=I/n):b>g?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=L/i,r=M/i):g<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(g),n=I/r,i=M/r),this.set(n,i,r,e),this}let E=Math.sqrt((d-v)*(d-v)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(d-v)/E,this.y=(f-p)/E,this.z=(h-u)/E,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class En extends Ln{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Se(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ee,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oo extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=r[o+0],m=r[o+1],v=r[o+2],p=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=v,t[e+3]=p;return}if(f!==p||c!==h||l!==m||u!==v){let d=1-a;const _=c*h+l*m+u*v+f*p,E=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const g=Math.sqrt(y),L=Math.atan2(g,_*E);d=Math.sin(d*L)/g,a=Math.sin(a*L)/g}const b=a*E;if(c=c*d+h*b,l=l*d+m*b,u=u*d+v*b,f=f*d+p*b,d===1-a){const g=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=g,l*=g,u*=g,f*=g}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+u*f+c*m-l*h,t[e+1]=c*v+u*h+l*f-a*m,t[e+2]=l*v+u*m+a*h-c*f,t[e+3]=u*v-a*f-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),m=c(i/2),v=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f+h*m*v;break;case"YZX":this._x=h*u*f+l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f-h*m*v;break;case"XZY":this._x=h*u*f-l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-r*i,f=c*i+r*n-o*e,h=-r*e-o*n-a*i;return this.x=l*c+h*-r+u*-a-f*-o,this.y=u*c+h*-o+f*-r-l*-a,this.z=f*c+h*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new z,ia=new Tn;class Ti{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],f=t[c+1],h=t[c+2];u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),f=t.getY(c),h=t.getZ(c);u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)dn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(dn)}else n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox),Cr.applyMatrix4(t.matrixWorld),this.union(Cr);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hi),Pi.subVectors(this.max,hi),In.subVectors(t.a,hi),Nn.subVectors(t.b,hi),Fn.subVectors(t.c,hi),Je.subVectors(Nn,In),Qe.subVectors(Fn,Nn),fn.subVectors(In,Fn);let e=[0,-Je.z,Je.y,0,-Qe.z,Qe.y,0,-fn.z,fn.y,Je.z,0,-Je.x,Qe.z,0,-Qe.x,fn.z,0,-fn.x,-Je.y,Je.x,0,-Qe.y,Qe.x,0,-fn.y,fn.x,0];return!Lr(e,In,Nn,Fn,Pi)||(e=[1,0,0,0,1,0,0,0,1],!Lr(e,In,Nn,Fn,Pi))?!1:(Di.crossVectors(Je,Qe),e=[Di.x,Di.y,Di.z],Lr(e,In,Nn,Fn,Pi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return dn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ve[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ve[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ve[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ve[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ve[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ve[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ve[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ve[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ve),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ve=[new z,new z,new z,new z,new z,new z,new z,new z],dn=new z,Cr=new Ti,In=new z,Nn=new z,Fn=new z,Je=new z,Qe=new z,fn=new z,hi=new z,Pi=new z,Di=new z,pn=new z;function Lr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pn.fromArray(s,r);const a=i.x*Math.abs(pn.x)+i.y*Math.abs(pn.y)+i.z*Math.abs(pn.z),c=t.dot(pn),l=e.dot(pn),u=n.dot(pn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ul=new Ti,di=new z,Pr=new z;class ar{constructor(t=new z,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ul.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;di.subVectors(t,this.center);const e=di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(di.copy(t.center).add(Pr)),this.expandByPoint(di.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const He=new z,Dr=new z,Ri=new z,tn=new z,Rr=new z,Ii=new z,Ir=new z;class lo{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,He)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=He.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(He.copy(this.direction).multiplyScalar(e).add(this.origin),He.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dr.copy(t).add(e).multiplyScalar(.5),Ri.copy(e).sub(t).normalize(),tn.copy(this.origin).sub(Dr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ri),a=tn.dot(this.direction),c=-tn.dot(Ri),l=tn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*c-a,h=o*a-c,v=r*u,f>=0)if(h>=-v)if(h<=v){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l):h<=v?(f=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ri).multiplyScalar(h).add(Dr),m}intersectSphere(t,e){He.subVectors(t.center,this.origin);const n=He.dot(this.direction),i=He.dot(He)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,He)!==null}intersectTriangle(t,e,n,i,r){Rr.subVectors(e,t),Ii.subVectors(n,t),Ir.crossVectors(Rr,Ii);let o=this.direction.dot(Ir),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tn.subVectors(this.origin,t);const c=a*this.direction.dot(Ii.crossVectors(tn,Ii));if(c<0)return null;const l=a*this.direction.dot(Rr.cross(tn));if(l<0||c+l>o)return null;const u=-a*tn.dot(Ir);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,u,f,h,m,v,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=v,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/On.setFromMatrixColumn(t,0).length(),r=1/On.setFromMatrixColumn(t,1).length(),o=1/On.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,m=o*f,v=a*u,p=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+v*l,e[5]=h-p*l,e[9]=-a*c,e[2]=p-h*l,e[6]=v+m*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,m=c*f,v=l*u,p=l*f;e[0]=h+p*a,e[4]=v*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=p+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,m=c*f,v=l*u,p=l*f;e[0]=h-p*a,e[4]=-o*f,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=p-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,m=o*f,v=a*u,p=a*f;e[0]=c*u,e[4]=v*l-m,e[8]=h*l+p,e[1]=c*f,e[5]=p*l+h,e[9]=m*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,m=o*l,v=a*c,p=a*l;e[0]=c*u,e[4]=p-h*f,e[8]=v*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*f+v,e[10]=h-p*f}else if(t.order==="XZY"){const h=o*c,m=o*l,v=a*c,p=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+p,e[5]=o*u,e[9]=m*f-v,e[2]=v*f-m,e[6]=a*u,e[10]=p*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zl,t,Bl)}lookAt(t,e,n){const i=this.elements;return xe.subVectors(t,e),xe.lengthSq()===0&&(xe.z=1),xe.normalize(),en.crossVectors(n,xe),en.lengthSq()===0&&(Math.abs(n.z)===1?xe.x+=1e-4:xe.z+=1e-4,xe.normalize(),en.crossVectors(n,xe)),en.normalize(),Ni.crossVectors(xe,en),i[0]=en.x,i[4]=Ni.x,i[8]=xe.x,i[1]=en.y,i[5]=Ni.y,i[9]=xe.y,i[2]=en.z,i[6]=Ni.z,i[10]=xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],v=n[2],p=n[6],d=n[10],_=n[14],E=n[3],y=n[7],b=n[11],g=n[15],L=i[0],I=i[4],M=i[8],A=i[12],R=i[1],O=i[5],Y=i[9],C=i[13],P=i[2],G=i[6],V=i[10],Z=i[14],H=i[3],K=i[7],J=i[11],at=i[15];return r[0]=o*L+a*R+c*P+l*H,r[4]=o*I+a*O+c*G+l*K,r[8]=o*M+a*Y+c*V+l*J,r[12]=o*A+a*C+c*Z+l*at,r[1]=u*L+f*R+h*P+m*H,r[5]=u*I+f*O+h*G+m*K,r[9]=u*M+f*Y+h*V+m*J,r[13]=u*A+f*C+h*Z+m*at,r[2]=v*L+p*R+d*P+_*H,r[6]=v*I+p*O+d*G+_*K,r[10]=v*M+p*Y+d*V+_*J,r[14]=v*A+p*C+d*Z+_*at,r[3]=E*L+y*R+b*P+g*H,r[7]=E*I+y*O+b*G+g*K,r[11]=E*M+y*Y+b*V+g*J,r[15]=E*A+y*C+b*Z+g*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],m=t[14],v=t[3],p=t[7],d=t[11],_=t[15];return v*(+r*c*f-i*l*f-r*a*h+n*l*h+i*a*m-n*c*m)+p*(+e*c*m-e*l*h+r*o*h-i*o*m+i*l*u-r*c*u)+d*(+e*l*f-e*a*m-r*o*f+n*o*m+r*a*u-n*l*u)+_*(-i*a*u-e*c*f+e*a*h+i*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],m=t[11],v=t[12],p=t[13],d=t[14],_=t[15],E=f*d*l-p*h*l+p*c*m-a*d*m-f*c*_+a*h*_,y=v*h*l-u*d*l-v*c*m+o*d*m+u*c*_-o*h*_,b=u*p*l-v*f*l+v*a*m-o*p*m-u*a*_+o*f*_,g=v*f*c-u*p*c-v*a*h+o*p*h+u*a*d-o*f*d,L=e*E+n*y+i*b+r*g;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=E*I,t[1]=(p*h*r-f*d*r-p*i*m+n*d*m+f*i*_-n*h*_)*I,t[2]=(a*d*r-p*c*r+p*i*l-n*d*l-a*i*_+n*c*_)*I,t[3]=(f*c*r-a*h*r-f*i*l+n*h*l+a*i*m-n*c*m)*I,t[4]=y*I,t[5]=(u*d*r-v*h*r+v*i*m-e*d*m-u*i*_+e*h*_)*I,t[6]=(v*c*r-o*d*r-v*i*l+e*d*l+o*i*_-e*c*_)*I,t[7]=(o*h*r-u*c*r+u*i*l-e*h*l-o*i*m+e*c*m)*I,t[8]=b*I,t[9]=(v*f*r-u*p*r-v*n*m+e*p*m+u*n*_-e*f*_)*I,t[10]=(o*p*r-v*a*r+v*n*l-e*p*l-o*n*_+e*a*_)*I,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*m-e*a*m)*I,t[12]=g*I,t[13]=(u*p*i-v*f*i+v*n*h-e*p*h-u*n*d+e*f*d)*I,t[14]=(v*a*i-o*p*i-v*n*c+e*p*c+o*n*d-e*a*d)*I,t[15]=(o*f*i-u*a*i+u*n*c-e*f*c-o*n*h+e*a*h)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,m=r*u,v=r*f,p=o*u,d=o*f,_=a*f,E=c*l,y=c*u,b=c*f,g=n.x,L=n.y,I=n.z;return i[0]=(1-(p+_))*g,i[1]=(m+b)*g,i[2]=(v-y)*g,i[3]=0,i[4]=(m-b)*L,i[5]=(1-(h+_))*L,i[6]=(d+E)*L,i[7]=0,i[8]=(v+y)*I,i[9]=(d-E)*I,i[10]=(1-(h+p))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=On.set(i[0],i[1],i[2]).length();const o=On.set(i[4],i[5],i[6]).length(),a=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ce.copy(this);const l=1/r,u=1/o,f=1/a;return Ce.elements[0]*=l,Ce.elements[1]*=l,Ce.elements[2]*=l,Ce.elements[4]*=u,Ce.elements[5]*=u,Ce.elements[6]*=u,Ce.elements[8]*=f,Ce.elements[9]*=f,Ce.elements[10]*=f,e.setFromRotationMatrix(Ce),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),f=(e+t)*c,h=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const On=new z,Ce=new Yt,zl=new z(0,0,0),Bl=new z(1,1,1),en=new z,Ni=new z,xe=new z,ra=new Yt,sa=new Tn;class or{constructor(t=0,e=0,n=0,i=or.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ra.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ra,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sa.setFromEuler(this),this.setFromQuaternion(sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gl=0;const aa=new z,Un=new Tn,We=new Yt,Fi=new z,fi=new z,kl=new z,Vl=new Tn,oa=new z(1,0,0),la=new z(0,1,0),ca=new z(0,0,1),Hl={type:"added"},ua={type:"removed"};class se extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=se.DEFAULT_UP.clone();const t=new z,e=new or,n=new Tn,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Me}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Un.setFromAxisAngle(t,e),this.quaternion.multiply(Un),this}rotateOnWorldAxis(t,e){return Un.setFromAxisAngle(t,e),this.quaternion.premultiply(Un),this}rotateX(t){return this.rotateOnAxis(oa,t)}rotateY(t){return this.rotateOnAxis(la,t)}rotateZ(t){return this.rotateOnAxis(ca,t)}translateOnAxis(t,e){return aa.copy(t).applyQuaternion(this.quaternion),this.position.add(aa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oa,t)}translateY(t){return this.translateOnAxis(la,t)}translateZ(t){return this.translateOnAxis(ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(We.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fi.copy(t):Fi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?We.lookAt(fi,Fi,this.up):We.lookAt(Fi,fi,this.up),this.quaternion.setFromRotationMatrix(We),i&&(We.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(We),this.quaternion.premultiply(Un.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ua)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ua)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),We.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),We.multiply(t.parent.matrixWorld)),t.applyMatrix4(We),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,t,kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,Vl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}se.DEFAULT_UP=new z(0,1,0);se.DEFAULT_MATRIX_AUTO_UPDATE=!0;se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Le=new z,$e=new z,Nr=new z,Xe=new z,zn=new z,Bn=new z,ha=new z,Fr=new z,Or=new z,Ur=new z;class qe{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Le.subVectors(t,e),i.cross(Le);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Le.subVectors(i,e),$e.subVectors(n,e),Nr.subVectors(t,e);const o=Le.dot(Le),a=Le.dot($e),c=Le.dot(Nr),l=$e.dot($e),u=$e.dot(Nr),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(l*c-a*u)*h,v=(o*u-a*c)*h;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xe),Xe.x>=0&&Xe.y>=0&&Xe.x+Xe.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Xe),c.set(0,0),c.addScaledVector(r,Xe.x),c.addScaledVector(o,Xe.y),c.addScaledVector(a,Xe.z),c}static isFrontFacing(t,e,n,i){return Le.subVectors(n,e),$e.subVectors(t,e),Le.cross($e).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Le.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Le.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return qe.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;zn.subVectors(i,n),Bn.subVectors(r,n),Fr.subVectors(t,n);const c=zn.dot(Fr),l=Bn.dot(Fr);if(c<=0&&l<=0)return e.copy(n);Or.subVectors(t,i);const u=zn.dot(Or),f=Bn.dot(Or);if(u>=0&&f<=u)return e.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(zn,o);Ur.subVectors(t,r);const m=zn.dot(Ur),v=Bn.dot(Ur);if(v>=0&&m<=v)return e.copy(r);const p=m*l-c*v;if(p<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(Bn,a);const d=u*v-m*f;if(d<=0&&f-u>=0&&m-v>=0)return ha.subVectors(r,i),a=(f-u)/(f-u+(m-v)),e.copy(i).addScaledVector(ha,a);const _=1/(d+p+h);return o=p*_,a=h*_,e.copy(n).addScaledVector(zn,o).addScaledVector(Bn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Wl=0;class ai extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Zn,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ka,this.blendDst=Ja,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uo extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qt=new z,Oi=new Et;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oi.fromBufferAttribute(this,e),Oi.applyMatrix3(t),this.setXY(e,Oi.x,Oi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix3(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix4(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.applyNormalMatrix(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.transformDirection(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ho extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fo extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $l=0;const we=new Yt,zr=new se,Gn=new z,ve=new Ti,pi=new Ti,ee=new z;class Be extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(io(t)?fo:ho)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,n){return we.makeTranslation(t,e,n),this.applyMatrix4(we),this}scale(t,e,n){return we.makeScale(t,e,n),this.applyMatrix4(we),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ve.setFromBufferAttribute(r),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,ve.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,ve.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(ve.min),this.boundingBox.expandByPoint(ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(ee.addVectors(ve.min,pi.min),ve.expandByPoint(ee),ee.addVectors(ve.max,pi.max),ve.expandByPoint(ee)):(ve.expandByPoint(pi.min),ve.expandByPoint(pi.max))}ve.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ee.fromBufferAttribute(a,l),c&&(Gn.fromBufferAttribute(t,l),ee.add(Gn)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<a;R++)l[R]=new z,u[R]=new z;const f=new z,h=new z,m=new z,v=new Et,p=new Et,d=new Et,_=new z,E=new z;function y(R,O,Y){f.fromArray(i,R*3),h.fromArray(i,O*3),m.fromArray(i,Y*3),v.fromArray(o,R*2),p.fromArray(o,O*2),d.fromArray(o,Y*2),h.sub(f),m.sub(f),p.sub(v),d.sub(v);const C=1/(p.x*d.y-d.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(C),E.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(C),l[R].add(_),l[O].add(_),l[Y].add(_),u[R].add(E),u[O].add(E),u[Y].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,O=b.length;R<O;++R){const Y=b[R],C=Y.start,P=Y.count;for(let G=C,V=C+P;G<V;G+=3)y(n[G+0],n[G+1],n[G+2])}const g=new z,L=new z,I=new z,M=new z;function A(R){I.fromArray(r,R*3),M.copy(I);const O=l[R];g.copy(O),g.sub(I.multiplyScalar(I.dot(O))).normalize(),L.crossVectors(M,O);const C=L.dot(u[R])<0?-1:1;c[R*4]=g.x,c[R*4+1]=g.y,c[R*4+2]=g.z,c[R*4+3]=C}for(let R=0,O=b.length;R<O;++R){const Y=b[R],C=Y.start,P=Y.count;for(let G=C,V=C+P;G<V;G+=3)A(n[G+0]),A(n[G+1]),A(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,f=new z;if(t)for(let h=0,m=t.count;h<m;h+=3){const v=t.getX(h+0),p=t.getX(h+1),d=t.getX(h+2);i.fromBufferAttribute(e,v),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,v=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let _=0;_<u;_++)h[v++]=l[m++]}return new Oe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=t(h,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new Yt,kn=new lo,Br=new ar,mi=new z,gi=new z,_i=new z,Gr=new z,Ui=new z,zi=new Et,Bi=new Et,Gi=new Et,kr=new z,ki=new z;class Ye extends se{constructor(t=new Be,e=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ui.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Gr.fromBufferAttribute(f,t),o?Ui.addScaledVector(Gr,u):Ui.addScaledVector(Gr.sub(e),u))}e.add(Ui)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),t.ray.intersectsSphere(Br)===!1)||(da.copy(r).invert(),kn.copy(t.ray).applyMatrix4(da),n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=i[p.materialIndex],_=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=_,b=E;y<b;y+=3){const g=a.getX(y),L=a.getX(y+1),I=a.getX(y+2);o=Vi(this,d,t,kn,l,u,g,L,I),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const _=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);o=Vi(this,i,t,kn,l,u,_,E,y),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=i[p.materialIndex],_=Math.max(p.start,h.start),E=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=_,b=E;y<b;y+=3){const g=y,L=y+1,I=y+2;o=Vi(this,d,t,kn,l,u,g,L,I),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const _=p,E=p+1,y=p+2;o=Vi(this,i,t,kn,l,u,_,E,y),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function Xl(s,t,e,n,i,r,o,a){let c;if(t.side===ye?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===an,a),c===null)return null;ki.copy(a),ki.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ki);return l<e.near||l>e.far?null:{distance:l,point:ki.clone(),object:s}}function Vi(s,t,e,n,i,r,o,a,c){s.getVertexPosition(o,mi),s.getVertexPosition(a,gi),s.getVertexPosition(c,_i);const l=Xl(s,t,e,n,mi,gi,_i,kr);if(l){i&&(zi.fromBufferAttribute(i,o),Bi.fromBufferAttribute(i,a),Gi.fromBufferAttribute(i,c),l.uv=qe.getUV(kr,mi,gi,_i,zi,Bi,Gi,new Et)),r&&(zi.fromBufferAttribute(r,o),Bi.fromBufferAttribute(r,a),Gi.fromBufferAttribute(r,c),l.uv2=qe.getUV(kr,mi,gi,_i,zi,Bi,Gi,new Et));const u={a:o,b:a,c,normal:new z,materialIndex:0};qe.getNormal(mi,gi,_i,u.normal),l.face=u}return l}class oi extends Be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,i,o,2),v("x","z","y",1,-1,t,n,-e,i,o,3),v("x","y","z",1,-1,t,e,n,i,r,4),v("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function v(p,d,_,E,y,b,g,L,I,M,A){const R=b/I,O=g/M,Y=b/2,C=g/2,P=L/2,G=I+1,V=M+1;let Z=0,H=0;const K=new z;for(let J=0;J<V;J++){const at=J*O-C;for(let U=0;U<G;U++){const X=U*R-Y;K[p]=X*E,K[d]=at*y,K[_]=P,l.push(K.x,K.y,K.z),K[p]=0,K[d]=0,K[_]=L>0?1:-1,u.push(K.x,K.y,K.z),f.push(U/I),f.push(1-J/M),Z+=1}}for(let J=0;J<M;J++)for(let at=0;at<I;at++){const U=h+at+G*J,X=h+at+G*(J+1),tt=h+(at+1)+G*(J+1),it=h+(at+1)+G*J;c.push(U,X,it),c.push(X,tt,it),H+=6}a.addGroup(m,H,A),m+=H,h+=Z}}static fromJSON(t){return new oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ii(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function he(s){const t={};for(let e=0;e<s.length;e++){const n=ii(s[e]);for(const i in n)t[i]=n[i]}return t}function ql(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function po(s){return s.getRenderTarget()===null&&s.outputEncoding===Bt?Ne:bi}const Yl={clone:ii,merge:he};var jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jl,this.fragmentShader=Zl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ii(t.uniforms),this.uniformsGroups=ql(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mo extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Te extends mo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vn=-90,Hn=1;class Kl extends se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Te(Vn,Hn,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Te(Vn,Hn,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Te(Vn,Hn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Te(Vn,Hn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Te(Vn,Hn,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Te(Vn,Hn,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=Ze,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class go extends Se{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ti,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jl extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new go(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oi(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ye,blending:rn});r.uniforms.tEquirect.value=e;const o=new Ye(i,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Ee),new Kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Vr=new z,Ql=new z,tc=new Me;class mn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vr.subVectors(n,e).cross(Ql.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tc.getNormalMatrix(t),i=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new ar,Hi=new z;class hs{constructor(t=new mn,e=new mn,n=new mn,i=new mn,r=new mn,o=new mn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],v=n[10],p=n[11],d=n[12],_=n[13],E=n[14],y=n[15];return e[0].setComponents(a-i,f-c,p-h,y-d).normalize(),e[1].setComponents(a+i,f+c,p+h,y+d).normalize(),e[2].setComponents(a+r,f+l,p+m,y+_).normalize(),e[3].setComponents(a-r,f-l,p-m,y-_).normalize(),e[4].setComponents(a-o,f-u,p-v,y-E).normalize(),e[5].setComponents(a+o,f+u,p+v,y+E).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hi.x=i.normal.x>0?t.max.x:t.min.x,Hi.y=i.normal.y>0?t.max.y:t.min.y,Hi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _o(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ec(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,h),l.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,m=u.updateRange;s.bindBuffer(f,l),m.count===-1?s.bufferSubData(f,0,h):(e?s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class ds extends Be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=t/a,h=e/c,m=[],v=[],p=[],d=[];for(let _=0;_<u;_++){const E=_*h-o;for(let y=0;y<l;y++){const b=y*f-r;v.push(b,-E,0),p.push(0,0,1),d.push(y/a),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let E=0;E<a;E++){const y=E+l*_,b=E+l*(_+1),g=E+1+l*(_+1),L=E+1+l*_;m.push(y,b,L),m.push(b,g,L)}this.setIndex(m),this.setAttribute("position",new Ie(v,3)),this.setAttribute("normal",new Ie(p,3)),this.setAttribute("uv",new Ie(d,2))}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var nc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ac=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lc="vec3 transformed = vec3( position );",cc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,hc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ic=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$c=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Kc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,gu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Xu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ju=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ku=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ju=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const th=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ih=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ah=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ch=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ph=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_h=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ph=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wt={alphamap_fragment:nc,alphamap_pars_fragment:ic,alphatest_fragment:rc,alphatest_pars_fragment:sc,aomap_fragment:ac,aomap_pars_fragment:oc,begin_vertex:lc,beginnormal_vertex:cc,bsdfs:uc,iridescence_fragment:hc,bumpmap_pars_fragment:dc,clipping_planes_fragment:fc,clipping_planes_pars_fragment:pc,clipping_planes_pars_vertex:mc,clipping_planes_vertex:gc,color_fragment:_c,color_pars_fragment:xc,color_pars_vertex:vc,color_vertex:Mc,common:yc,cube_uv_reflection_fragment:Sc,defaultnormal_vertex:bc,displacementmap_pars_vertex:wc,displacementmap_vertex:Ec,emissivemap_fragment:Tc,emissivemap_pars_fragment:Ac,encodings_fragment:Cc,encodings_pars_fragment:Lc,envmap_fragment:Pc,envmap_common_pars_fragment:Dc,envmap_pars_fragment:Rc,envmap_pars_vertex:Ic,envmap_physical_pars_fragment:$c,envmap_vertex:Nc,fog_vertex:Fc,fog_pars_vertex:Oc,fog_fragment:Uc,fog_pars_fragment:zc,gradientmap_pars_fragment:Bc,lightmap_fragment:Gc,lightmap_pars_fragment:kc,lights_lambert_fragment:Vc,lights_lambert_pars_fragment:Hc,lights_pars_begin:Wc,lights_toon_fragment:Xc,lights_toon_pars_fragment:qc,lights_phong_fragment:Yc,lights_phong_pars_fragment:jc,lights_physical_fragment:Zc,lights_physical_pars_fragment:Kc,lights_fragment_begin:Jc,lights_fragment_maps:Qc,lights_fragment_end:tu,logdepthbuf_fragment:eu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:ru,map_fragment:su,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:uu,morphcolor_vertex:hu,morphnormal_vertex:du,morphtarget_pars_vertex:fu,morphtarget_vertex:pu,normal_fragment_begin:mu,normal_fragment_maps:gu,normal_pars_fragment:_u,normal_pars_vertex:xu,normal_vertex:vu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:yu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:bu,iridescence_pars_fragment:wu,output_fragment:Eu,packing:Tu,premultiplied_alpha_fragment:Au,project_vertex:Cu,dithering_fragment:Lu,dithering_pars_fragment:Pu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Ru,shadowmap_pars_fragment:Iu,shadowmap_pars_vertex:Nu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Ou,skinbase_vertex:Uu,skinning_pars_vertex:zu,skinning_vertex:Bu,skinnormal_vertex:Gu,specularmap_fragment:ku,specularmap_pars_fragment:Vu,tonemapping_fragment:Hu,tonemapping_pars_fragment:Wu,transmission_fragment:$u,transmission_pars_fragment:Xu,uv_pars_fragment:qu,uv_pars_vertex:Yu,uv_vertex:ju,uv2_pars_fragment:Zu,uv2_pars_vertex:Ku,uv2_vertex:Ju,worldpos_vertex:Qu,background_vert:th,background_frag:eh,backgroundCube_vert:nh,backgroundCube_frag:ih,cube_vert:rh,cube_frag:sh,depth_vert:ah,depth_frag:oh,distanceRGBA_vert:lh,distanceRGBA_frag:ch,equirect_vert:uh,equirect_frag:hh,linedashed_vert:dh,linedashed_frag:fh,meshbasic_vert:ph,meshbasic_frag:mh,meshlambert_vert:gh,meshlambert_frag:_h,meshmatcap_vert:xh,meshmatcap_frag:vh,meshnormal_vert:Mh,meshnormal_frag:yh,meshphong_vert:Sh,meshphong_frag:bh,meshphysical_vert:wh,meshphysical_frag:Eh,meshtoon_vert:Th,meshtoon_frag:Ah,points_vert:Ch,points_frag:Lh,shadow_vert:Ph,shadow_frag:Dh,sprite_vert:Rh,sprite_frag:Ih},st={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Me},uv2Transform:{value:new Me},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Me}}},Fe={basic:{uniforms:he([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:he([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:he([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:he([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:he([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:he([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:he([st.points,st.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:he([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:he([st.common,st.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:he([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:he([st.sprite,st.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:he([st.common,st.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:he([st.lights,st.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Fe.physical={uniforms:he([Fe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Et(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Wi={r:0,b:0,g:0};function Nh(s,t,e,n,i,r,o){const a=new zt(0);let c=r===!0?0:1,l,u,f=null,h=0,m=null;function v(d,_){let E=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const b=s.xr,g=b.getSession&&b.getSession();g&&g.environmentBlendMode==="additive"&&(y=null),y===null?p(a,c):y&&y.isColor&&(p(y,1),E=!0),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===sr)?(u===void 0&&(u=new Ye(new oi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ii(Fe.backgroundCube.uniforms),vertexShader:Fe.backgroundCube.vertexShader,fragmentShader:Fe.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==Bt,(f!==y||h!==y.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ye(new ds(2,2),new An({name:"BackgroundMaterial",uniforms:ii(Fe.background.uniforms),vertexShader:Fe.background.vertexShader,fragmentShader:Fe.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=y.encoding!==Bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,m=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,_){d.getRGB(Wi,po(s)),n.buffers.color.setClear(Wi.r,Wi.g,Wi.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:v}}function Fh(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=d(null);let l=c,u=!1;function f(P,G,V,Z,H){let K=!1;if(o){const J=p(Z,V,G);l!==J&&(l=J,m(l.object)),K=_(P,Z,V,H),K&&E(P,Z,V,H)}else{const J=G.wireframe===!0;(l.geometry!==Z.id||l.program!==V.id||l.wireframe!==J)&&(l.geometry=Z.id,l.program=V.id,l.wireframe=J,K=!0)}H!==null&&e.update(H,34963),(K||u)&&(u=!1,M(P,G,V,Z),H!==null&&s.bindBuffer(34963,e.get(H).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function v(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function p(P,G,V){const Z=V.wireframe===!0;let H=a[P.id];H===void 0&&(H={},a[P.id]=H);let K=H[G.id];K===void 0&&(K={},H[G.id]=K);let J=K[Z];return J===void 0&&(J=d(h()),K[Z]=J),J}function d(P){const G=[],V=[],Z=[];for(let H=0;H<i;H++)G[H]=0,V[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:Z,object:P,attributes:{},index:null}}function _(P,G,V,Z){const H=l.attributes,K=G.attributes;let J=0;const at=V.getAttributes();for(const U in at)if(at[U].location>=0){const tt=H[U];let it=K[U];if(it===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),tt===void 0||tt.attribute!==it||it&&tt.data!==it.data)return!0;J++}return l.attributesNum!==J||l.index!==Z}function E(P,G,V,Z){const H={},K=G.attributes;let J=0;const at=V.getAttributes();for(const U in at)if(at[U].location>=0){let tt=K[U];tt===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor));const it={};it.attribute=tt,tt&&tt.data&&(it.data=tt.data),H[U]=it,J++}l.attributes=H,l.attributesNum=J,l.index=Z}function y(){const P=l.newAttributes;for(let G=0,V=P.length;G<V;G++)P[G]=0}function b(P){g(P,0)}function g(P,G){const V=l.newAttributes,Z=l.enabledAttributes,H=l.attributeDivisors;V[P]=1,Z[P]===0&&(s.enableVertexAttribArray(P),Z[P]=1),H[P]!==G&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),H[P]=G)}function L(){const P=l.newAttributes,G=l.enabledAttributes;for(let V=0,Z=G.length;V<Z;V++)G[V]!==P[V]&&(s.disableVertexAttribArray(V),G[V]=0)}function I(P,G,V,Z,H,K){n.isWebGL2===!0&&(V===5124||V===5125)?s.vertexAttribIPointer(P,G,V,H,K):s.vertexAttribPointer(P,G,V,Z,H,K)}function M(P,G,V,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const H=Z.attributes,K=V.getAttributes(),J=G.defaultAttributeValues;for(const at in K){const U=K[at];if(U.location>=0){let X=H[at];if(X===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const tt=X.normalized,it=X.itemSize,k=e.get(X);if(k===void 0)continue;const yt=k.buffer,pt=k.type,ft=k.bytesPerElement;if(X.isInterleavedBufferAttribute){const ot=X.data,Dt=ot.stride,St=X.offset;if(ot.isInstancedInterleavedBuffer){for(let xt=0;xt<U.locationSize;xt++)g(U.location+xt,ot.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let xt=0;xt<U.locationSize;xt++)b(U.location+xt);s.bindBuffer(34962,yt);for(let xt=0;xt<U.locationSize;xt++)I(U.location+xt,it/U.locationSize,pt,tt,Dt*ft,(St+it/U.locationSize*xt)*ft)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<U.locationSize;ot++)g(U.location+ot,X.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ot=0;ot<U.locationSize;ot++)b(U.location+ot);s.bindBuffer(34962,yt);for(let ot=0;ot<U.locationSize;ot++)I(U.location+ot,it/U.locationSize,pt,tt,it*ft,it/U.locationSize*ot*ft)}}else if(J!==void 0){const tt=J[at];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(U.location,tt);break;case 3:s.vertexAttrib3fv(U.location,tt);break;case 4:s.vertexAttrib4fv(U.location,tt);break;default:s.vertexAttrib1fv(U.location,tt)}}}}L()}function A(){Y();for(const P in a){const G=a[P];for(const V in G){const Z=G[V];for(const H in Z)v(Z[H].object),delete Z[H];delete G[V]}delete a[P]}}function R(P){if(a[P.id]===void 0)return;const G=a[P.id];for(const V in G){const Z=G[V];for(const H in Z)v(Z[H].object),delete Z[H];delete G[V]}delete a[P.id]}function O(P){for(const G in a){const V=a[G];if(V[P.id]===void 0)continue;const Z=V[P.id];for(const H in Z)v(Z[H].object),delete Z[H];delete V[P.id]}}function Y(){C(),u=!0,l!==c&&(l=c,m(l.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:b,disableUnusedAttributes:L}}function Oh(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,m;if(i)h=s,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,l,u,f),e.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Uh(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),m=s.getParameter(3379),v=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),E=s.getParameter(36349),y=h>0,b=o||t.has("OES_texture_float"),g=y&&b,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:g,maxSamples:L}}function zh(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new mn,a=new Me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=s.get(f);if(!i||v===null||v.length===0||r&&!d)r?u(null):l();else{const E=r?0:n,y=E*4;let b=_.clippingState||null;c.value=b,b=u(v,h,y,m);for(let g=0;g!==y;++g)b[g]=e[g];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,v){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,v!==!0||d===null){const _=m+p*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<_)&&(d=new Float32Array(_));for(let y=0,b=m;y!==p;++y,b+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(d,b),d[b+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function Bh(s){let t=new WeakMap;function e(o,a){return a===es?o.mapping=ti:a===ns&&(o.mapping=ei),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===es||a===ns)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xo extends mo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const jn=4,fa=[.125,.215,.35,.446,.526,.582],_n=20,Hr=new xo,pa=new zt;let Wr=null;const gn=(1+Math.sqrt(5))/2,$n=1/gn,ma=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,gn,$n),new z(0,gn,-$n),new z($n,0,gn),new z(-$n,0,gn),new z(gn,$n,0),new z(-gn,$n,0)];class ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr),t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:Si,format:De,encoding:wn,depthBuffer:!1},i=_a(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_a(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gh(r)),this._blurMaterial=kh(r,t,e)}return i}_compileMaterial(t){const e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,i){const a=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pa),u.toneMapping=Ze,u.autoClear=!1;const m=new uo({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),v=new Ye(new oi,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(pa),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):E===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const y=this._cubeSize;$i(i,E*y,_>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ti||t.mapping===ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=va()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;$i(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ma[(i-1)%ma.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ye(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_n-1),p=r/v,d=isFinite(r)?1+Math.floor(u*p):_n;d>_n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_n}`);const _=[];let E=0;for(let I=0;I<_n;++I){const M=I/p,A=Math.exp(-M*M/2);_.push(A),I===0?E+=A:I<d&&(E+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/E;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-n;const b=this._sizeLods[i],g=3*b*(i>y-jn?i-y+jn:0),L=4*(this._cubeSize-b);$i(e,g,L,3*b,2*b),c.setRenderTarget(e),c.render(f,Hr)}}function Gh(s){const t=[],e=[],n=[];let i=s;const r=s-jn+1+fa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-jn?c=fa[o-s+jn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,p=3,d=2,_=1,E=new Float32Array(p*v*m),y=new Float32Array(d*v*m),b=new Float32Array(_*v*m);for(let L=0;L<m;L++){const I=L%3*2/3-1,M=L>2?0:-1,A=[I,M,0,I+2/3,M,0,I+2/3,M+1,0,I,M,0,I+2/3,M+1,0,I,M+1,0];E.set(A,p*v*L),y.set(h,d*v*L);const R=[L,L,L,L,L,L];b.set(R,_*v*L)}const g=new Be;g.setAttribute("position",new Oe(E,p)),g.setAttribute("uv",new Oe(y,d)),g.setAttribute("faceIndex",new Oe(b,_)),t.push(g),i>jn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _a(s,t,e){const n=new En(s,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function kh(s,t,e){const n=new Float32Array(_n),i=new z(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:_n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function xa(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function va(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vh(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===es||c===ns,u=c===ti||c===ei;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new ga(s)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new ga(s));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hh(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wh(s,t,e,n){const i={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const v in h)t.update(h[v],34962);const m=f.morphAttributes;for(const v in m){const p=m[v];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function l(f){const h=[],m=f.index,v=f.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let y=0,b=E.length;y<b;y+=3){const g=E[y+0],L=E[y+1],I=E[y+2];h.push(g,L,L,I,I,g)}}else{const E=v.array;p=v.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const g=y+0,L=y+1,I=y+2;h.push(g,L,L,I,I,g)}}const d=new(io(h)?fo:ho)(h,1);d.version=p;const _=r.get(f);_&&t.remove(_),r.set(f,d)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function $h(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,m){s.drawElements(r,m,a,h*c),e.update(m,r,1)}function f(h,m,v){if(v===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,h*c,v),e.update(m,r,v)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Xh(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qh(s,t){return s[0]-t[0]}function Yh(s,t){return Math.abs(t[1])-Math.abs(s[1])}function jh(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ne,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let V=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var v=V;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let R=0;b===!0&&(R=1),g===!0&&(R=2),L===!0&&(R=3);let O=u.attributes.position.count*R,Y=1;O>t.maxTextureSize&&(Y=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const C=new Float32Array(O*Y*4*d),P=new oo(C,O,Y,d);P.type=vn,P.needsUpdate=!0;const G=R*4;for(let Z=0;Z<d;Z++){const H=I[Z],K=M[Z],J=A[Z],at=O*Y*4*Z;for(let U=0;U<H.count;U++){const X=U*G;b===!0&&(o.fromBufferAttribute(H,U),C[at+X+0]=o.x,C[at+X+1]=o.y,C[at+X+2]=o.z,C[at+X+3]=0),g===!0&&(o.fromBufferAttribute(K,U),C[at+X+4]=o.x,C[at+X+5]=o.y,C[at+X+6]=o.z,C[at+X+7]=0),L===!0&&(o.fromBufferAttribute(J,U),C[at+X+8]=o.x,C[at+X+9]=o.y,C[at+X+10]=o.z,C[at+X+11]=J.itemSize===4?o.w:1)}}_={count:d,texture:P,size:new Et(O,Y)},r.set(u,_),u.addEventListener("dispose",V)}let E=0;for(let b=0;b<m.length;b++)E+=m[b];const y=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",m),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let g=0;g<p;g++)d[g]=[g,0];n[u.id]=d}for(let g=0;g<p;g++){const L=d[g];L[0]=g,L[1]=m[g]}d.sort(Yh);for(let g=0;g<8;g++)g<p&&d[g][1]?(a[g][0]=d[g][0],a[g][1]=d[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(qh);const _=u.morphAttributes.position,E=u.morphAttributes.normal;let y=0;for(let g=0;g<8;g++){const L=a[g],I=L[0],M=L[1];I!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+g)!==_[I]&&u.setAttribute("morphTarget"+g,_[I]),E&&u.getAttribute("morphNormal"+g)!==E[I]&&u.setAttribute("morphNormal"+g,E[I]),i[g]=M,y+=M):(_&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),E&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),i[g]=0)}const b=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zh(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);return i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const vo=new Se,Mo=new oo,yo=new Ol,So=new go,Ma=[],ya=[],Sa=new Float32Array(16),ba=new Float32Array(9),wa=new Float32Array(4);function li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ma[i];if(r===void 0&&(r=new Float32Array(i),Ma[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Zt(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Kt(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lr(s,t){let e=ya[t];e===void 0&&(e=new Int32Array(t),ya[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Kh(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;s.uniform2fv(this.addr,t),Kt(e,t)}}function Qh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Zt(e,t))return;s.uniform3fv(this.addr,t),Kt(e,t)}}function td(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;s.uniform4fv(this.addr,t),Kt(e,t)}}function ed(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Kt(e,t)}else{if(Zt(e,n))return;wa.set(n),s.uniformMatrix2fv(this.addr,!1,wa),Kt(e,n)}}function nd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Kt(e,t)}else{if(Zt(e,n))return;ba.set(n),s.uniformMatrix3fv(this.addr,!1,ba),Kt(e,n)}}function id(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Kt(e,t)}else{if(Zt(e,n))return;Sa.set(n),s.uniformMatrix4fv(this.addr,!1,Sa),Kt(e,n)}}function rd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;s.uniform2iv(this.addr,t),Kt(e,t)}}function ad(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Zt(e,t))return;s.uniform3iv(this.addr,t),Kt(e,t)}}function od(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;s.uniform4iv(this.addr,t),Kt(e,t)}}function ld(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;s.uniform2uiv(this.addr,t),Kt(e,t)}}function ud(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Zt(e,t))return;s.uniform3uiv(this.addr,t),Kt(e,t)}}function hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;s.uniform4uiv(this.addr,t),Kt(e,t)}}function dd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||vo,i)}function fd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yo,i)}function pd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||So,i)}function md(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mo,i)}function gd(s){switch(s){case 5126:return Kh;case 35664:return Jh;case 35665:return Qh;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return ud;case 36296:return hd;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(s,t){s.uniform1fv(this.addr,t)}function xd(s,t){const e=li(t,this.size,2);s.uniform2fv(this.addr,e)}function vd(s,t){const e=li(t,this.size,3);s.uniform3fv(this.addr,e)}function Md(s,t){const e=li(t,this.size,4);s.uniform4fv(this.addr,e)}function yd(s,t){const e=li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sd(s,t){const e=li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bd(s,t){const e=li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wd(s,t){s.uniform1iv(this.addr,t)}function Ed(s,t){s.uniform2iv(this.addr,t)}function Td(s,t){s.uniform3iv(this.addr,t)}function Ad(s,t){s.uniform4iv(this.addr,t)}function Cd(s,t){s.uniform1uiv(this.addr,t)}function Ld(s,t){s.uniform2uiv(this.addr,t)}function Pd(s,t){s.uniform3uiv(this.addr,t)}function Dd(s,t){s.uniform4uiv(this.addr,t)}function Rd(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||vo,r[o])}function Id(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||yo,r[o])}function Nd(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||So,r[o])}function Fd(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Mo,r[o])}function Od(s){switch(s){case 5126:return _d;case 35664:return xd;case 35665:return vd;case 35666:return Md;case 35674:return yd;case 35675:return Sd;case 35676:return bd;case 5124:case 35670:return wd;case 35667:case 35671:return Ed;case 35668:case 35672:return Td;case 35669:case 35673:return Ad;case 5125:return Cd;case 36294:return Ld;case 36295:return Pd;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Rd;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return Nd;case 36289:case 36303:case 36311:case 36292:return Fd}}class Ud{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=gd(e.type)}}class zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Od(e.type)}}class Bd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function Ea(s,t){s.seq.push(t),s.map[t.id]=t}function Gd(s,t,e){const n=s.name,i=n.length;for($r.lastIndex=0;;){const r=$r.exec(n),o=$r.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ea(e,l===void 0?new Ud(a,s,t):new zd(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Bd(a),Ea(e,f)),e=f}}}class Zi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Gd(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ta(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let kd=0;function Vd(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Hd(s){switch(s){case wn:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Aa(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vd(s.getShaderSource(t),o)}else return i}function Wd(s,t){const e=Hd(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function $d(s,t){let e;switch(t){case cl:e="Linear";break;case ul:e="Reinhard";break;case hl:e="OptimizedCineon";break;case dl:e="ACESFilmic";break;case fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function qd(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yd(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Mi(s){return s!==""}function Ca(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function La(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(s){return s.replace(jd,Zd)}function Zd(s,t){const e=wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return os(e)}const Kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(s){return s.replace(Kd,Jd)}function Jd(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Da(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qd(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Za?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ko?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function tf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ti:case ei:t="ENVMAP_TYPE_CUBE";break;case sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ef(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ei:t="ENVMAP_MODE_REFRACTION";break}return t}function nf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qa:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case ll:t="ENVMAP_BLENDING_ADD";break}return t}function rf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sf(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Qd(e),l=tf(e),u=ef(e),f=nf(e),h=rf(e),m=e.isWebGL2?"":Xd(e),v=qd(r),p=i.createProgram();let d,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[v].filter(Mi).join(`
`),d.length>0&&(d+=`
`),_=[m,v].filter(Mi).join(`
`),_.length>0&&(_+=`
`)):(d=[Da(e),"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),_=[m,Da(e),"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ze?"#define TONE_MAPPING":"",e.toneMapping!==Ze?wt.tonemapping_pars_fragment:"",e.toneMapping!==Ze?$d("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",wt.encodings_pars_fragment,Wd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mi).join(`
`)),o=os(o),o=Ca(o,e),o=La(o,e),a=os(a),a=Ca(a,e),a=La(a,e),o=Pa(o),a=Pa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=E+d+o,b=E+_+a,g=Ta(i,35633,y),L=Ta(i,35632,b);if(i.attachShader(p,g),i.attachShader(p,L),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(g).trim(),O=i.getShaderInfoLog(L).trim();let Y=!0,C=!0;if(i.getProgramParameter(p,35714)===!1){Y=!1;const P=Aa(i,g,"vertex"),G=Aa(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+P+`
`+G)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||O==="")&&(C=!1);C&&(this.diagnostics={runnable:Y,programLog:A,vertexShader:{log:R,prefix:d},fragmentShader:{log:O,prefix:_}})}i.deleteShader(g),i.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new Zi(i,p)),I};let M;return this.getAttributes=function(){return M===void 0&&(M=Yd(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=kd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=g,this.fragmentShader=L,this}let af=0;class of{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lf(t),e.set(t,n)),n}}class lf{constructor(t){this.id=af++,this.code=t,this.usedTimes=0}}function cf(s,t,e,n,i,r,o){const a=new co,c=new of,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,A,R,O,Y){const C=O.fog,P=Y.geometry,G=M.isMeshStandardMaterial?O.environment:null,V=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),Z=V&&V.mapping===sr?V.image.height:null,H=v[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=K!==void 0?K.length:0;let at=0;P.morphAttributes.position!==void 0&&(at=1),P.morphAttributes.normal!==void 0&&(at=2),P.morphAttributes.color!==void 0&&(at=3);let U,X,tt,it;if(H){const Dt=Fe[H];U=Dt.vertexShader,X=Dt.fragmentShader}else U=M.vertexShader,X=M.fragmentShader,c.update(M),tt=c.getVertexShaderID(M),it=c.getFragmentShaderID(M);const k=s.getRenderTarget(),yt=M.alphaTest>0,pt=M.clearcoat>0,ft=M.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:M.type,vertexShader:U,fragmentShader:X,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:it,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:h,outputEncoding:k===null?s.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:wn,map:!!M.map,matcap:!!M.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:Z,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Rl,tangentSpaceNormalMap:M.normalMapType===no,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Bt,clearcoat:pt,clearcoatMap:pt&&!!M.clearcoatMap,clearcoatRoughnessMap:pt&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:pt&&!!M.clearcoatNormalMap,iridescence:ft,iridescenceMap:ft&&!!M.iridescenceMap,iridescenceThicknessMap:ft&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Zn,alphaMap:!!M.alphaMap,alphaTest:yt,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!P.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:at,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:Ze,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===ye,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)A.push(R),A.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(_(A,M),E(A,M),A.push(s.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function E(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),M.push(a.mask)}function y(M){const A=v[M.type];let R;if(A){const O=Fe[A];R=Yl.clone(O.uniforms)}else R=M.uniforms;return R}function b(M,A){let R;for(let O=0,Y=l.length;O<Y;O++){const C=l[O];if(C.cacheKey===A){R=C,++R.usedTimes;break}}return R===void 0&&(R=new sf(s,A,M,r),l.push(R)),R}function g(M){if(--M.usedTimes===0){const A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),M.destroy()}}function L(M){c.remove(M)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:b,releaseProgram:g,releaseShaderCache:L,programs:l,dispose:I}}function uf(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function hf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ra(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ia(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,m,v,p,d){let _=s[t];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:p,group:d},s[t]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=p,_.group=d),t++,_}function a(f,h,m,v,p,d){const _=o(f,h,m,v,p,d);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(f,h,m,v,p,d){const _=o(f,h,m,v,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(f,h){e.length>1&&e.sort(f||hf),n.length>1&&n.sort(h||Ra),i.length>1&&i.sort(h||Ra)}function u(){for(let f=t,h=s.length;f<h;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function df(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ia,s.set(n,[o])):i>=r.length?(o=new Ia,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ff(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new zt};break;case"SpotLight":e={position:new z,direction:new z,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function pf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let mf=0;function gf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _f(s,t){const e=new ff,n=pf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,o=new Yt,a=new Yt;function c(u,f){let h=0,m=0,v=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,d=0,_=0,E=0,y=0,b=0,g=0,L=0,I=0,M=0;u.sort(gf);const A=f!==!0?Math.PI:1;for(let O=0,Y=u.length;O<Y;O++){const C=u[O],P=C.color,G=C.intensity,V=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=P.r*G*A,m+=P.g*G*A,v+=P.b*G*A;else if(C.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],G);else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const K=C.shadow,J=n.get(C);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=C.shadow.matrix,b++}i.directional[p]=H,p++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(P).multiplyScalar(G*A),H.distance=V,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[_]=H;const K=C.shadow;if(C.map&&(i.spotLightMap[I]=C.map,I++,K.updateMatrices(C),C.castShadow&&M++),i.spotLightMatrix[_]=K.matrix,C.castShadow){const J=n.get(C);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Z,L++}_++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(P).multiplyScalar(G),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[E]=H,E++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*A),H.distance=C.distance,H.decay=C.decay,C.castShadow){const K=C.shadow,J=n.get(C);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=C.shadow.matrix,g++}i.point[d]=H,d++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(G*A),H.groundColor.copy(C.groundColor).multiplyScalar(G*A),i.hemi[y]=H,y++}}E>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=v;const R=i.hash;(R.directionalLength!==p||R.pointLength!==d||R.spotLength!==_||R.rectAreaLength!==E||R.hemiLength!==y||R.numDirectionalShadows!==b||R.numPointShadows!==g||R.numSpotShadows!==L||R.numSpotMaps!==I)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=L+I-M,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=M,R.directionalLength=p,R.pointLength=d,R.spotLength=_,R.rectAreaLength=E,R.hemiLength=y,R.numDirectionalShadows=b,R.numPointShadows=g,R.numSpotShadows=L,R.numSpotMaps=I,i.version=mf++)}function l(u,f){let h=0,m=0,v=0,p=0,d=0;const _=f.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const b=u[E];if(b.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(_),h++}else if(b.isSpotLight){const g=i.spot[v];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(_),v++}else if(b.isRectAreaLight){const g=i.rectArea[p];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),g.halfWidth.set(b.width*.5,0,0),g.halfHeight.set(0,b.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const g=i.point[m];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const g=i.hemi[d];g.direction.setFromMatrixPosition(b.matrixWorld),g.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:i}}function Na(s,t){const e=new _f(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function xf(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Na(s,t),e.set(r,[c])):o>=a.length?(c=new Na(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class vf extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mf extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bf(s,t,e){let n=new hs;const i=new Et,r=new Et,o=new ne,a=new vf({depthPacking:Dl}),c=new Mf,l={},u=e.maxTextureSize,f={[an]:ye,[ye]:an,[nn]:nn},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:yf,fragmentShader:Sf}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Be;v.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ye(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za,this.render=function(b,g,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const I=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),R=s.state;R.setBlending(rn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let O=0,Y=b.length;O<Y;O++){const C=b[O],P=C.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const G=P.getFrameExtents();if(i.multiply(G),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,P.mapSize.y=r.y)),P.map===null){const Z=this.type!==vi?{minFilter:de,magFilter:de}:{};P.map=new En(i.x,i.y,Z),P.map.texture.name=C.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const V=P.getViewportCount();for(let Z=0;Z<V;Z++){const H=P.getViewport(Z);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),R.viewport(o),P.updateMatrices(C,Z),n=P.getFrustum(),y(g,L,P.camera,C,this.type)}P.isPointLightShadow!==!0&&this.type===vi&&_(P,L),P.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(I,M,A)};function _(b,g){const L=t.update(p);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new En(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(g,null,L,h,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(g,null,L,m,p,null)}function E(b,g,L,I,M,A){let R=null;const O=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)R=O;else if(R=L.isPointLight===!0?c:a,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0){const Y=R.uuid,C=g.uuid;let P=l[Y];P===void 0&&(P={},l[Y]=P);let G=P[C];G===void 0&&(G=R.clone(),P[C]=G),R=G}return R.visible=g.visible,R.wireframe=g.wireframe,A===vi?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:f[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(L.matrixWorld),R.nearDistance=I,R.farDistance=M),R}function y(b,g,L,I,M){if(b.visible===!1)return;if(b.layers.test(g.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===vi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const O=t.update(b),Y=b.material;if(Array.isArray(Y)){const C=O.groups;for(let P=0,G=C.length;P<G;P++){const V=C[P],Z=Y[V.materialIndex];if(Z&&Z.visible){const H=E(b,Z,I,L.near,L.far,M);s.renderBufferDirect(L,null,O,H,b,V)}}}else if(Y.visible){const C=E(b,Y,I,L.near,L.far,M);s.renderBufferDirect(L,null,O,C,b,null)}}const R=b.children;for(let O=0,Y=R.length;O<Y;O++)y(R[O],g,L,I,M)}}function wf(s,t,e){const n=e.isWebGL2;function i(){let D=!1;const $=new ne;let Q=null;const ht=new ne(0,0,0,0);return{setMask:function(_t){Q!==_t&&!D&&(s.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){D=_t},setClear:function(_t,Ft,Qt,ae,ln){ln===!0&&(_t*=ae,Ft*=ae,Qt*=ae),$.set(_t,Ft,Qt,ae),ht.equals($)===!1&&(s.clearColor(_t,Ft,Qt,ae),ht.copy($))},reset:function(){D=!1,Q=null,ht.set(-1,0,0,0)}}}function r(){let D=!1,$=null,Q=null,ht=null;return{setTest:function(_t){_t?yt(2929):pt(2929)},setMask:function(_t){$!==_t&&!D&&(s.depthMask(_t),$=_t)},setFunc:function(_t){if(Q!==_t){switch(_t){case tl:s.depthFunc(512);break;case el:s.depthFunc(519);break;case nl:s.depthFunc(513);break;case ts:s.depthFunc(515);break;case il:s.depthFunc(514);break;case rl:s.depthFunc(518);break;case sl:s.depthFunc(516);break;case al:s.depthFunc(517);break;default:s.depthFunc(515)}Q=_t}},setLocked:function(_t){D=_t},setClear:function(_t){ht!==_t&&(s.clearDepth(_t),ht=_t)},reset:function(){D=!1,$=null,Q=null,ht=null}}}function o(){let D=!1,$=null,Q=null,ht=null,_t=null,Ft=null,Qt=null,ae=null,ln=null;return{setTest:function(kt){D||(kt?yt(2960):pt(2960))},setMask:function(kt){$!==kt&&!D&&(s.stencilMask(kt),$=kt)},setFunc:function(kt,Ge,be){(Q!==kt||ht!==Ge||_t!==be)&&(s.stencilFunc(kt,Ge,be),Q=kt,ht=Ge,_t=be)},setOp:function(kt,Ge,be){(Ft!==kt||Qt!==Ge||ae!==be)&&(s.stencilOp(kt,Ge,be),Ft=kt,Qt=Ge,ae=be)},setLocked:function(kt){D=kt},setClear:function(kt){ln!==kt&&(s.clearStencil(kt),ln=kt)},reset:function(){D=!1,$=null,Q=null,ht=null,_t=null,Ft=null,Qt=null,ae=null,ln=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,p=[],d=null,_=!1,E=null,y=null,b=null,g=null,L=null,I=null,M=null,A=!1,R=null,O=null,Y=null,C=null,P=null;const G=s.getParameter(35661);let V=!1,Z=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Z>=2);let K=null,J={};const at=s.getParameter(3088),U=s.getParameter(2978),X=new ne().fromArray(at),tt=new ne().fromArray(U);function it(D,$,Q){const ht=new Uint8Array(4),_t=s.createTexture();s.bindTexture(D,_t),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Ft=0;Ft<Q;Ft++)s.texImage2D($+Ft,0,6408,1,1,0,6408,5121,ht);return _t}const k={};k[3553]=it(3553,3553,1),k[34067]=it(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),yt(2929),c.setFunc(ts),Ht(!1),Jt(bs),yt(2884),Vt(rn);function yt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function pt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function ft(D,$){return m[D]!==$?(s.bindFramebuffer(D,$),m[D]=$,n&&(D===36009&&(m[36160]=$),D===36160&&(m[36009]=$)),!0):!1}function ot(D,$){let Q=p,ht=!1;if(D)if(Q=v.get($),Q===void 0&&(Q=[],v.set($,Q)),D.isWebGLMultipleRenderTargets){const _t=D.texture;if(Q.length!==_t.length||Q[0]!==36064){for(let Ft=0,Qt=_t.length;Ft<Qt;Ft++)Q[Ft]=36064+Ft;Q.length=_t.length,ht=!0}}else Q[0]!==36064&&(Q[0]=36064,ht=!0);else Q[0]!==1029&&(Q[0]=1029,ht=!0);ht&&(e.isWebGL2?s.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Dt(D){return d!==D?(s.useProgram(D),d=D,!0):!1}const St={[qn]:32774,[Ho]:32778,[Wo]:32779};if(n)St[As]=32775,St[Cs]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(St[As]=D.MIN_EXT,St[Cs]=D.MAX_EXT)}const xt={[$o]:0,[Xo]:1,[qo]:768,[Ka]:770,[Qo]:776,[Ko]:774,[jo]:772,[Yo]:769,[Ja]:771,[Jo]:775,[Zo]:773};function Vt(D,$,Q,ht,_t,Ft,Qt,ae){if(D===rn){_===!0&&(pt(3042),_=!1);return}if(_===!1&&(yt(3042),_=!0),D!==Vo){if(D!==E||ae!==A){if((y!==qn||L!==qn)&&(s.blendEquation(32774),y=qn,L=qn),ae)switch(D){case Zn:s.blendFuncSeparate(1,771,1,771);break;case ws:s.blendFunc(1,1);break;case Es:s.blendFuncSeparate(0,769,0,1);break;case Ts:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zn:s.blendFuncSeparate(770,771,1,771);break;case ws:s.blendFunc(770,1);break;case Es:s.blendFuncSeparate(0,769,0,1);break;case Ts:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,g=null,I=null,M=null,E=D,A=ae}return}_t=_t||$,Ft=Ft||Q,Qt=Qt||ht,($!==y||_t!==L)&&(s.blendEquationSeparate(St[$],St[_t]),y=$,L=_t),(Q!==b||ht!==g||Ft!==I||Qt!==M)&&(s.blendFuncSeparate(xt[Q],xt[ht],xt[Ft],xt[Qt]),b=Q,g=ht,I=Ft,M=Qt),E=D,A=!1}function Wt(D,$){D.side===nn?pt(2884):yt(2884);let Q=D.side===ye;$&&(Q=!Q),Ht(Q),D.blending===Zn&&D.transparent===!1?Vt(rn):Vt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const ht=D.stencilWrite;l.setTest(ht),ht&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(32926):pt(32926)}function Ht(D){R!==D&&(D?s.frontFace(2304):s.frontFace(2305),R=D)}function Jt(D){D!==Bo?(yt(2884),D!==O&&(D===bs?s.cullFace(1029):D===Go?s.cullFace(1028):s.cullFace(1032))):pt(2884),O=D}function Gt(D){D!==Y&&(V&&s.lineWidth(D),Y=D)}function Pt(D,$,Q){D?(yt(32823),(C!==$||P!==Q)&&(s.polygonOffset($,Q),C=$,P=Q)):pt(32823)}function le(D){D?yt(3089):pt(3089)}function ie(D){D===void 0&&(D=33984+G-1),K!==D&&(s.activeTexture(D),K=D)}function w(D,$,Q){Q===void 0&&(K===null?Q=33984+G-1:Q=K);let ht=J[Q];ht===void 0&&(ht={type:void 0,texture:void 0},J[Q]=ht),(ht.type!==D||ht.texture!==$)&&(K!==Q&&(s.activeTexture(Q),K=Q),s.bindTexture(D,$||k[D]),ht.type=D,ht.texture=$)}function x(){const D=J[K];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function T(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(D){X.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),X.copy(D))}function mt(D){tt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),tt.copy(D))}function Tt(D,$){let Q=f.get($);Q===void 0&&(Q=new WeakMap,f.set($,Q));let ht=Q.get(D);ht===void 0&&(ht=s.getUniformBlockIndex($,D.name),Q.set(D,ht))}function Ct(D,$){const ht=f.get($).get(D);u.get($)!==ht&&(s.uniformBlockBinding($,ht,D.__bindingPointIndex),u.set($,ht))}function Ut(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,J={},m={},v=new WeakMap,p=[],d=null,_=!1,E=null,y=null,b=null,g=null,L=null,I=null,M=null,A=!1,R=null,O=null,Y=null,C=null,P=null,X.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:yt,disable:pt,bindFramebuffer:ft,drawBuffers:ot,useProgram:Dt,setBlending:Vt,setMaterial:Wt,setFlipSided:Ht,setCullFace:Jt,setLineWidth:Gt,setPolygonOffset:Pt,setScissorTest:le,activeTexture:ie,bindTexture:w,unbindTexture:x,compressedTexImage2D:W,compressedTexImage3D:et,texImage2D:dt,texImage3D:ct,updateUBOMapping:Tt,uniformBlockBinding:Ct,texStorage2D:N,texStorage3D:ut,texSubImage2D:rt,texSubImage3D:lt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:T,scissor:gt,viewport:mt,reset:Ut}}function Ef(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,x){return _?new OffscreenCanvas(w,x):Ki("canvas")}function y(w,x,W,et){let rt=1;if((w.width>et||w.height>et)&&(rt=et/Math.max(w.width,w.height)),rt<1||x===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const lt=x?as:Math.floor,Mt=lt(rt*w.width),T=lt(rt*w.height);p===void 0&&(p=E(Mt,T));const N=W?E(Mt,T):p;return N.width=Mt,N.height=T,N.getContext("2d").drawImage(w,0,0,Mt,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Mt+"x"+T+")."),N}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return na(w.width)&&na(w.height)}function g(w){return a?!1:w.wrapS!==Pe||w.wrapT!==Pe||w.minFilter!==de&&w.minFilter!==Ee}function L(w,x){return w.generateMipmaps&&x&&w.minFilter!==de&&w.minFilter!==Ee}function I(w){s.generateMipmap(w)}function M(w,x,W,et,rt=!1){if(a===!1)return x;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let lt=x;return x===6403&&(W===5126&&(lt=33326),W===5131&&(lt=33325),W===5121&&(lt=33321)),x===33319&&(W===5126&&(lt=33328),W===5131&&(lt=33327),W===5121&&(lt=33323)),x===6408&&(W===5126&&(lt=34836),W===5131&&(lt=34842),W===5121&&(lt=et===Bt&&rt===!1?35907:32856),W===32819&&(lt=32854),W===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function A(w,x,W){return L(w,W)===!0||w.isFramebufferTexture&&w.minFilter!==de&&w.minFilter!==Ee?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){return w===de||w===Ls||w===pr?9728:9729}function O(w){const x=w.target;x.removeEventListener("dispose",O),C(x),x.isVideoTexture&&v.delete(x)}function Y(w){const x=w.target;x.removeEventListener("dispose",Y),G(x)}function C(w){const x=n.get(w);if(x.__webglInit===void 0)return;const W=w.source,et=d.get(W);if(et){const rt=et[x.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&P(w),Object.keys(et).length===0&&d.delete(W)}n.remove(w)}function P(w){const x=n.get(w);s.deleteTexture(x.__webglTexture);const W=w.source,et=d.get(W);delete et[x.__cacheKey],o.memory.textures--}function G(w){const x=w.texture,W=n.get(w),et=n.get(x);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)s.deleteFramebuffer(W.__webglFramebuffer[rt]),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer[rt]);else{if(s.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&s.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let rt=0;rt<W.__webglColorRenderbuffer.length;rt++)W.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(W.__webglColorRenderbuffer[rt]);W.__webglDepthRenderbuffer&&s.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let rt=0,lt=x.length;rt<lt;rt++){const Mt=n.get(x[rt]);Mt.__webglTexture&&(s.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(x[rt])}n.remove(x),n.remove(w)}let V=0;function Z(){V=0}function H(){const w=V;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),V+=1,w}function K(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function J(w,x){const W=n.get(w);if(w.isVideoTexture&&le(w),w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){const et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(W,w,x);return}}e.bindTexture(3553,W.__webglTexture,33984+x)}function at(w,x){const W=n.get(w);if(w.version>0&&W.__version!==w.version){pt(W,w,x);return}e.bindTexture(35866,W.__webglTexture,33984+x)}function U(w,x){const W=n.get(w);if(w.version>0&&W.__version!==w.version){pt(W,w,x);return}e.bindTexture(32879,W.__webglTexture,33984+x)}function X(w,x){const W=n.get(w);if(w.version>0&&W.__version!==w.version){ft(W,w,x);return}e.bindTexture(34067,W.__webglTexture,33984+x)}const tt={[is]:10497,[Pe]:33071,[rs]:33648},it={[de]:9728,[Ls]:9984,[pr]:9986,[Ee]:9729,[pl]:9985,[yi]:9987};function k(w,x,W){if(W?(s.texParameteri(w,10242,tt[x.wrapS]),s.texParameteri(w,10243,tt[x.wrapT]),(w===32879||w===35866)&&s.texParameteri(w,32882,tt[x.wrapR]),s.texParameteri(w,10240,it[x.magFilter]),s.texParameteri(w,10241,it[x.minFilter])):(s.texParameteri(w,10242,33071),s.texParameteri(w,10243,33071),(w===32879||w===35866)&&s.texParameteri(w,32882,33071),(x.wrapS!==Pe||x.wrapT!==Pe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,10240,R(x.magFilter)),s.texParameteri(w,10241,R(x.minFilter)),x.minFilter!==de&&x.minFilter!==Ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===de||x.minFilter!==pr&&x.minFilter!==yi||x.type===vn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Si&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function yt(w,x){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",O));const et=x.source;let rt=d.get(et);rt===void 0&&(rt={},d.set(et,rt));const lt=K(x);if(lt!==w.__cacheKey){rt[lt]===void 0&&(rt[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),rt[lt].usedTimes++;const Mt=rt[w.__cacheKey];Mt!==void 0&&(rt[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&P(x)),w.__cacheKey=lt,w.__webglTexture=rt[lt].texture}return W}function pt(w,x,W){let et=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=35866),x.isData3DTexture&&(et=32879);const rt=yt(w,x),lt=x.source;e.bindTexture(et,w.__webglTexture,33984+W);const Mt=n.get(lt);if(lt.version!==Mt.__version||rt===!0){e.activeTexture(33984+W),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const T=g(x)&&b(x.image)===!1;let N=y(x.image,T,!1,u);N=ie(x,N);const ut=b(N)||a,dt=r.convert(x.format,x.encoding);let ct=r.convert(x.type),gt=M(x.internalFormat,dt,ct,x.encoding,x.isVideoTexture);k(et,x,ut);let mt;const Tt=x.mipmaps,Ct=a&&x.isVideoTexture!==!0,Ut=Mt.__version===void 0||rt===!0,D=A(x,N,ut);if(x.isDepthTexture)gt=6402,a?x.type===vn?gt=36012:x.type===xn?gt=33190:x.type===Kn?gt=35056:gt=33189:x.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===yn&&gt===6402&&x.type!==eo&&x.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=xn,ct=r.convert(x.type)),x.format===ni&&gt===6402&&(gt=34041,x.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Kn,ct=r.convert(x.type))),Ut&&(Ct?e.texStorage2D(3553,1,gt,N.width,N.height):e.texImage2D(3553,0,gt,N.width,N.height,0,dt,ct,null));else if(x.isDataTexture)if(Tt.length>0&&ut){Ct&&Ut&&e.texStorage2D(3553,D,gt,Tt[0].width,Tt[0].height);for(let $=0,Q=Tt.length;$<Q;$++)mt=Tt[$],Ct?e.texSubImage2D(3553,$,0,0,mt.width,mt.height,dt,ct,mt.data):e.texImage2D(3553,$,gt,mt.width,mt.height,0,dt,ct,mt.data);x.generateMipmaps=!1}else Ct?(Ut&&e.texStorage2D(3553,D,gt,N.width,N.height),e.texSubImage2D(3553,0,0,0,N.width,N.height,dt,ct,N.data)):e.texImage2D(3553,0,gt,N.width,N.height,0,dt,ct,N.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ct&&Ut&&e.texStorage3D(35866,D,gt,Tt[0].width,Tt[0].height,N.depth);for(let $=0,Q=Tt.length;$<Q;$++)mt=Tt[$],x.format!==De?dt!==null?Ct?e.compressedTexSubImage3D(35866,$,0,0,0,mt.width,mt.height,N.depth,dt,mt.data,0,0):e.compressedTexImage3D(35866,$,gt,mt.width,mt.height,N.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?e.texSubImage3D(35866,$,0,0,0,mt.width,mt.height,N.depth,dt,ct,mt.data):e.texImage3D(35866,$,gt,mt.width,mt.height,N.depth,0,dt,ct,mt.data)}else{Ct&&Ut&&e.texStorage2D(3553,D,gt,Tt[0].width,Tt[0].height);for(let $=0,Q=Tt.length;$<Q;$++)mt=Tt[$],x.format!==De?dt!==null?Ct?e.compressedTexSubImage2D(3553,$,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(3553,$,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?e.texSubImage2D(3553,$,0,0,mt.width,mt.height,dt,ct,mt.data):e.texImage2D(3553,$,gt,mt.width,mt.height,0,dt,ct,mt.data)}else if(x.isDataArrayTexture)Ct?(Ut&&e.texStorage3D(35866,D,gt,N.width,N.height,N.depth),e.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,dt,ct,N.data)):e.texImage3D(35866,0,gt,N.width,N.height,N.depth,0,dt,ct,N.data);else if(x.isData3DTexture)Ct?(Ut&&e.texStorage3D(32879,D,gt,N.width,N.height,N.depth),e.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,dt,ct,N.data)):e.texImage3D(32879,0,gt,N.width,N.height,N.depth,0,dt,ct,N.data);else if(x.isFramebufferTexture){if(Ut)if(Ct)e.texStorage2D(3553,D,gt,N.width,N.height);else{let $=N.width,Q=N.height;for(let ht=0;ht<D;ht++)e.texImage2D(3553,ht,gt,$,Q,0,dt,ct,null),$>>=1,Q>>=1}}else if(Tt.length>0&&ut){Ct&&Ut&&e.texStorage2D(3553,D,gt,Tt[0].width,Tt[0].height);for(let $=0,Q=Tt.length;$<Q;$++)mt=Tt[$],Ct?e.texSubImage2D(3553,$,0,0,dt,ct,mt):e.texImage2D(3553,$,gt,dt,ct,mt);x.generateMipmaps=!1}else Ct?(Ut&&e.texStorage2D(3553,D,gt,N.width,N.height),e.texSubImage2D(3553,0,0,0,dt,ct,N)):e.texImage2D(3553,0,gt,dt,ct,N);L(x,ut)&&I(et),Mt.__version=lt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ft(w,x,W){if(x.image.length!==6)return;const et=yt(w,x),rt=x.source;e.bindTexture(34067,w.__webglTexture,33984+W);const lt=n.get(rt);if(rt.version!==lt.__version||et===!0){e.activeTexture(33984+W),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,T=x.image[0]&&x.image[0].isDataTexture,N=[];for(let $=0;$<6;$++)!Mt&&!T?N[$]=y(x.image[$],!1,!0,l):N[$]=T?x.image[$].image:x.image[$],N[$]=ie(x,N[$]);const ut=N[0],dt=b(ut)||a,ct=r.convert(x.format,x.encoding),gt=r.convert(x.type),mt=M(x.internalFormat,ct,gt,x.encoding),Tt=a&&x.isVideoTexture!==!0,Ct=lt.__version===void 0||et===!0;let Ut=A(x,ut,dt);k(34067,x,dt);let D;if(Mt){Tt&&Ct&&e.texStorage2D(34067,Ut,mt,ut.width,ut.height);for(let $=0;$<6;$++){D=N[$].mipmaps;for(let Q=0;Q<D.length;Q++){const ht=D[Q];x.format!==De?ct!==null?Tt?e.compressedTexSubImage2D(34069+$,Q,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(34069+$,Q,mt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(34069+$,Q,0,0,ht.width,ht.height,ct,gt,ht.data):e.texImage2D(34069+$,Q,mt,ht.width,ht.height,0,ct,gt,ht.data)}}}else{D=x.mipmaps,Tt&&Ct&&(D.length>0&&Ut++,e.texStorage2D(34067,Ut,mt,N[0].width,N[0].height));for(let $=0;$<6;$++)if(T){Tt?e.texSubImage2D(34069+$,0,0,0,N[$].width,N[$].height,ct,gt,N[$].data):e.texImage2D(34069+$,0,mt,N[$].width,N[$].height,0,ct,gt,N[$].data);for(let Q=0;Q<D.length;Q++){const _t=D[Q].image[$].image;Tt?e.texSubImage2D(34069+$,Q+1,0,0,_t.width,_t.height,ct,gt,_t.data):e.texImage2D(34069+$,Q+1,mt,_t.width,_t.height,0,ct,gt,_t.data)}}else{Tt?e.texSubImage2D(34069+$,0,0,0,ct,gt,N[$]):e.texImage2D(34069+$,0,mt,ct,gt,N[$]);for(let Q=0;Q<D.length;Q++){const ht=D[Q];Tt?e.texSubImage2D(34069+$,Q+1,0,0,ct,gt,ht.image[$]):e.texImage2D(34069+$,Q+1,mt,ct,gt,ht.image[$])}}}L(x,dt)&&I(34067),lt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ot(w,x,W,et,rt){const lt=r.convert(W.format,W.encoding),Mt=r.convert(W.type),T=M(W.internalFormat,lt,Mt,W.encoding);n.get(x).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,T,x.width,x.height,x.depth,0,lt,Mt,null):e.texImage2D(rt,0,T,x.width,x.height,0,lt,Mt,null)),e.bindFramebuffer(36160,w),Pt(x)?h.framebufferTexture2DMultisampleEXT(36160,et,rt,n.get(W).__webglTexture,0,Gt(x)):(rt===3553||rt>=34069&&rt<=34074)&&s.framebufferTexture2D(36160,et,rt,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Dt(w,x,W){if(s.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let et=33189;if(W||Pt(x)){const rt=x.depthTexture;rt&&rt.isDepthTexture&&(rt.type===vn?et=36012:rt.type===xn&&(et=33190));const lt=Gt(x);Pt(x)?h.renderbufferStorageMultisampleEXT(36161,lt,et,x.width,x.height):s.renderbufferStorageMultisample(36161,lt,et,x.width,x.height)}else s.renderbufferStorage(36161,et,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const et=Gt(x);W&&Pt(x)===!1?s.renderbufferStorageMultisample(36161,et,35056,x.width,x.height):Pt(x)?h.renderbufferStorageMultisampleEXT(36161,et,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,w)}else{const et=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let rt=0;rt<et.length;rt++){const lt=et[rt],Mt=r.convert(lt.format,lt.encoding),T=r.convert(lt.type),N=M(lt.internalFormat,Mt,T,lt.encoding),ut=Gt(x);W&&Pt(x)===!1?s.renderbufferStorageMultisample(36161,ut,N,x.width,x.height):Pt(x)?h.renderbufferStorageMultisampleEXT(36161,ut,N,x.width,x.height):s.renderbufferStorage(36161,N,x.width,x.height)}}s.bindRenderbuffer(36161,null)}function St(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const et=n.get(x.depthTexture).__webglTexture,rt=Gt(x);if(x.depthTexture.format===yn)Pt(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,rt):s.framebufferTexture2D(36160,36096,3553,et,0);else if(x.depthTexture.format===ni)Pt(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,rt):s.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function xt(w){const x=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(x.__webglFramebuffer,w)}else if(W){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]=s.createRenderbuffer(),Dt(x.__webglDepthbuffer[et],w,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Dt(x.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function Vt(w,x,W){const et=n.get(w);x!==void 0&&ot(et.__webglFramebuffer,w,w.texture,36064,3553),W!==void 0&&xt(w)}function Wt(w){const x=w.texture,W=n.get(w),et=n.get(x);w.addEventListener("dispose",Y),w.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=x.version,o.memory.textures++);const rt=w.isWebGLCubeRenderTarget===!0,lt=w.isWebGLMultipleRenderTargets===!0,Mt=b(w)||a;if(rt){W.__webglFramebuffer=[];for(let T=0;T<6;T++)W.__webglFramebuffer[T]=s.createFramebuffer()}else{if(W.__webglFramebuffer=s.createFramebuffer(),lt)if(i.drawBuffers){const T=w.texture;for(let N=0,ut=T.length;N<ut;N++){const dt=n.get(T[N]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Pt(w)===!1){const T=lt?x:[x];W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let N=0;N<T.length;N++){const ut=T[N];W.__webglColorRenderbuffer[N]=s.createRenderbuffer(),s.bindRenderbuffer(36161,W.__webglColorRenderbuffer[N]);const dt=r.convert(ut.format,ut.encoding),ct=r.convert(ut.type),gt=M(ut.internalFormat,dt,ct,ut.encoding,w.isXRRenderTarget===!0),mt=Gt(w);s.renderbufferStorageMultisample(36161,mt,gt,w.width,w.height),s.framebufferRenderbuffer(36160,36064+N,36161,W.__webglColorRenderbuffer[N])}s.bindRenderbuffer(36161,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,et.__webglTexture),k(34067,x,Mt);for(let T=0;T<6;T++)ot(W.__webglFramebuffer[T],w,x,36064,34069+T);L(x,Mt)&&I(34067),e.unbindTexture()}else if(lt){const T=w.texture;for(let N=0,ut=T.length;N<ut;N++){const dt=T[N],ct=n.get(dt);e.bindTexture(3553,ct.__webglTexture),k(3553,dt,Mt),ot(W.__webglFramebuffer,w,dt,36064+N,3553),L(dt,Mt)&&I(3553)}e.unbindTexture()}else{let T=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?T=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(T,et.__webglTexture),k(T,x,Mt),ot(W.__webglFramebuffer,w,x,36064,T),L(x,Mt)&&I(T),e.unbindTexture()}w.depthBuffer&&xt(w)}function Ht(w){const x=b(w)||a,W=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0,rt=W.length;et<rt;et++){const lt=W[et];if(L(lt,x)){const Mt=w.isWebGLCubeRenderTarget?34067:3553,T=n.get(lt).__webglTexture;e.bindTexture(Mt,T),I(Mt),e.unbindTexture()}}}function Jt(w){if(a&&w.samples>0&&Pt(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],W=w.width,et=w.height;let rt=16384;const lt=[],Mt=w.stencilBuffer?33306:36096,T=n.get(w),N=w.isWebGLMultipleRenderTargets===!0;if(N)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ut,36161,null),e.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ut,3553,null,0);e.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,T.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){lt.push(36064+ut),w.depthBuffer&&lt.push(Mt);const dt=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(dt===!1&&(w.depthBuffer&&(rt|=256),w.stencilBuffer&&(rt|=1024)),N&&s.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ut]),dt===!0&&(s.invalidateFramebuffer(36008,[Mt]),s.invalidateFramebuffer(36009,[Mt])),N){const ct=n.get(x[ut]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ct,0)}s.blitFramebuffer(0,0,W,et,0,0,W,et,rt,9728),m&&s.invalidateFramebuffer(36008,lt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),N)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ut,36161,T.__webglColorRenderbuffer[ut]);const dt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ut,3553,dt,0)}e.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Gt(w){return Math.min(f,w.samples)}function Pt(w){const x=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(w){const x=o.render.frame;v.get(w)!==x&&(v.set(w,x),w.update())}function ie(w,x){const W=w.encoding,et=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ss||W!==wn&&(W===Bt?a===!1?t.has("EXT_sRGB")===!0&&et===De?(w.format=ss,w.minFilter=Ee,w.generateMipmaps=!1):x=so.sRGBToLinear(x):(et!==De||rt!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),x}this.allocateTextureUnit=H,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=at,this.setTexture3D=U,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Pt}function Tf(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===bn)return 5121;if(r===xl)return 32819;if(r===vl)return 32820;if(r===ml)return 5120;if(r===gl)return 5122;if(r===eo)return 5123;if(r===_l)return 5124;if(r===xn)return 5125;if(r===vn)return 5126;if(r===Si)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ml)return 6406;if(r===De)return 6408;if(r===yl)return 6409;if(r===Sl)return 6410;if(r===yn)return 6402;if(r===ni)return 34041;if(r===ss)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bl)return 6403;if(r===wl)return 36244;if(r===El)return 33319;if(r===Tl)return 33320;if(r===Al)return 36249;if(r===mr||r===gr||r===_r||r===xr)if(o===Bt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ps||r===Ds||r===Rs||r===Is)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ps)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ds)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Is)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ns||r===Fs)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ns)return o===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Fs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Os||r===Us||r===zs||r===Bs||r===Gs||r===ks||r===Vs||r===Hs||r===Ws||r===$s||r===Xs||r===qs||r===Ys||r===js)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Os)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Us)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ks)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ws)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$s)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qs)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ys)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===js)return o===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===vr)return o===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ll||r===Zs||r===Ks||r===Js)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===vr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Js)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kn?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Af extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xi extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n),_=this._getHandJoint(l,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lf extends Se{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:yn,u!==yn&&u!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yn&&(n=xn),n===void 0&&u===ni&&(n=Kn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=c!==void 0?c:de,this.flipY=!1,this.generateMipmaps=!1}}class Pf extends Ln{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,v=null;const p=e.getContextAttributes();let d=null,_=null;const E=[],y=[],b=new Set,g=new Map,L=new Te;L.layers.enable(1),L.viewport=new ne;const I=new Te;I.layers.enable(2),I.viewport=new ne;const M=[L,I],A=new Af;A.layers.enable(1),A.layers.enable(2);let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=E[U];return X===void 0&&(X=new Xr,E[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=E[U];return X===void 0&&(X=new Xr,E[U]=X),X.getGripSpace()},this.getHand=function(U){let X=E[U];return X===void 0&&(X=new Xr,E[U]=X),X.getHandSpace()};function Y(U){const X=y.indexOf(U.inputSource);if(X===-1)return;const tt=E[X];tt!==void 0&&tt.dispatchEvent({type:U.type,data:U.inputSource})}function C(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",P);for(let U=0;U<E.length;U++){const X=y[U];X!==null&&(y[U]=null,E[U].disconnect(X))}R=null,O=null,t.setRenderTarget(d),m=null,h=null,f=null,i=null,_=null,at.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",C),i.addEventListener("inputsourceschange",P),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:m}),_=new En(m.framebufferWidth,m.framebufferHeight,{format:De,type:bn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let X=null,tt=null,it=null;p.depth&&(it=p.stencil?35056:33190,X=p.stencil?ni:yn,tt=p.stencil?Kn:xn);const k={colorFormat:32856,depthFormat:it,scaleFactor:r};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(k),i.updateRenderState({layers:[h]}),_=new En(h.textureWidth,h.textureHeight,{format:De,type:bn,depthTexture:new Lf(h.textureWidth,h.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const yt=t.properties.get(_);yt.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(U){for(let X=0;X<U.removed.length;X++){const tt=U.removed[X],it=y.indexOf(tt);it>=0&&(y[it]=null,E[it].disconnect(tt))}for(let X=0;X<U.added.length;X++){const tt=U.added[X];let it=y.indexOf(tt);if(it===-1){for(let yt=0;yt<E.length;yt++)if(yt>=y.length){y.push(tt),it=yt;break}else if(y[yt]===null){y[yt]=tt,it=yt;break}if(it===-1)break}const k=E[it];k&&k.connect(tt)}}const G=new z,V=new z;function Z(U,X,tt){G.setFromMatrixPosition(X.matrixWorld),V.setFromMatrixPosition(tt.matrixWorld);const it=G.distanceTo(V),k=X.projectionMatrix.elements,yt=tt.projectionMatrix.elements,pt=k[14]/(k[10]-1),ft=k[14]/(k[10]+1),ot=(k[9]+1)/k[5],Dt=(k[9]-1)/k[5],St=(k[8]-1)/k[0],xt=(yt[8]+1)/yt[0],Vt=pt*St,Wt=pt*xt,Ht=it/(-St+xt),Jt=Ht*-St;X.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Jt),U.translateZ(Ht),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Gt=pt+Ht,Pt=ft+Ht,le=Vt-Jt,ie=Wt+(it-Jt),w=ot*ft/Pt*Gt,x=Dt*ft/Pt*Gt;U.projectionMatrix.makePerspective(le,ie,w,x,Gt,Pt)}function H(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;A.near=I.near=L.near=U.near,A.far=I.far=L.far=U.far,(R!==A.near||O!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,O=A.far);const X=U.parent,tt=A.cameras;H(A,X);for(let k=0;k<tt.length;k++)H(tt[k],X);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),U.matrix.copy(A.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const it=U.children;for(let k=0,yt=it.length;k<yt;k++)it[k].updateMatrixWorld(!0);tt.length===2?Z(A,L,I):A.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(U){c=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.getPlanes=function(){return b};let K=null;function J(U,X){if(u=X.getViewerPose(l||o),v=X,u!==null){const tt=u.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let it=!1;tt.length!==A.cameras.length&&(A.cameras.length=0,it=!0);for(let k=0;k<tt.length;k++){const yt=tt[k];let pt=null;if(m!==null)pt=m.getViewport(yt);else{const ot=f.getViewSubImage(h,yt);pt=ot.viewport,k===0&&(t.setRenderTargetTextures(_,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(_))}let ft=M[k];ft===void 0&&(ft=new Te,ft.layers.enable(k),ft.viewport=new ne,M[k]=ft),ft.matrix.fromArray(yt.transform.matrix),ft.projectionMatrix.fromArray(yt.projectionMatrix),ft.viewport.set(pt.x,pt.y,pt.width,pt.height),k===0&&A.matrix.copy(ft.matrix),it===!0&&A.cameras.push(ft)}}for(let tt=0;tt<E.length;tt++){const it=y[tt],k=E[tt];it!==null&&k!==void 0&&k.update(it,X,l||o)}if(K&&K(U,X),X.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let tt=null;for(const it of b)X.detectedPlanes.has(it)||(tt===null&&(tt=[]),tt.push(it));if(tt!==null)for(const it of tt)b.delete(it),g.delete(it),n.dispatchEvent({type:"planeremoved",data:it});for(const it of X.detectedPlanes)if(!b.has(it))b.add(it),g.set(it,X.lastChangedTime),n.dispatchEvent({type:"planeadded",data:it});else{const k=g.get(it);it.lastChangedTime>k&&(g.set(it,it.lastChangedTime),n.dispatchEvent({type:"planechanged",data:it}))}}v=null}const at=new _o;at.setAnimationLoop(J),this.setAnimationLoop=function(U){K=U},this.dispose=function(){}}}function Df(s,t){function e(p,d){d.color.getRGB(p.fogColor.value,po(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,y)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),v(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===ye&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===ye&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=E*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===ye&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Rf(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(E,y){const b=y.program;n.uniformBlockBinding(E,b)}function l(E,y){let b=i[E.id];b===void 0&&(v(E),b=u(E),i[E.id]=b,E.addEventListener("dispose",d));const g=y.program;n.updateUBOMapping(E,g);const L=t.render.frame;r[E.id]!==L&&(h(E),r[E.id]=L)}function u(E){const y=f();E.__bindingPointIndex=y;const b=s.createBuffer(),g=E.__size,L=E.usage;return s.bindBuffer(35345,b),s.bufferData(35345,g,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,b),b}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=i[E.id],b=E.uniforms,g=E.__cache;s.bindBuffer(35345,y);for(let L=0,I=b.length;L<I;L++){const M=b[L];if(m(M,L,g)===!0){const A=M.__offset,R=Array.isArray(M.value)?M.value:[M.value];let O=0;for(let Y=0;Y<R.length;Y++){const C=R[Y],P=p(C);typeof C=="number"?(M.__data[0]=C,s.bufferSubData(35345,A+O,M.__data)):C.isMatrix3?(M.__data[0]=C.elements[0],M.__data[1]=C.elements[1],M.__data[2]=C.elements[2],M.__data[3]=C.elements[0],M.__data[4]=C.elements[3],M.__data[5]=C.elements[4],M.__data[6]=C.elements[5],M.__data[7]=C.elements[0],M.__data[8]=C.elements[6],M.__data[9]=C.elements[7],M.__data[10]=C.elements[8],M.__data[11]=C.elements[0]):(C.toArray(M.__data,O),O+=P.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,A,M.__data)}}s.bindBuffer(35345,null)}function m(E,y,b){const g=E.value;if(b[y]===void 0){if(typeof g=="number")b[y]=g;else{const L=Array.isArray(g)?g:[g],I=[];for(let M=0;M<L.length;M++)I.push(L[M].clone());b[y]=I}return!0}else if(typeof g=="number"){if(b[y]!==g)return b[y]=g,!0}else{const L=Array.isArray(b[y])?b[y]:[b[y]],I=Array.isArray(g)?g:[g];for(let M=0;M<L.length;M++){const A=L[M];if(A.equals(I[M])===!1)return A.copy(I[M]),!0}}return!1}function v(E){const y=E.uniforms;let b=0;const g=16;let L=0;for(let I=0,M=y.length;I<M;I++){const A=y[I],R={boundary:0,storage:0},O=Array.isArray(A.value)?A.value:[A.value];for(let Y=0,C=O.length;Y<C;Y++){const P=O[Y],G=p(P);R.boundary+=G.boundary,R.storage+=G.storage}if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,I>0){L=b%g;const Y=g-L;L!==0&&Y-R.boundary<0&&(b+=g-L,A.__offset=b)}b+=R.storage}return L=b%g,L>0&&(b+=g-L),E.__size=b,E.__cache={},this}function p(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function d(E){const y=E.target;y.removeEventListener("dispose",d);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function If(){const s=Ki("canvas");return s.style.display="block",s}function bo(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:If(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wn,this.physicallyCorrectLights=!1,this.toneMapping=Ze,this.toneMappingExposure=1;const p=this;let d=!1,_=0,E=0,y=null,b=-1,g=null;const L=new ne,I=new ne;let M=null,A=t.width,R=t.height,O=1,Y=null,C=null;const P=new ne(0,0,A,R),G=new ne(0,0,A,R);let V=!1;const Z=new hs;let H=!1,K=!1,J=null;const at=new Yt,U=new Et,X=new z,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return y===null?O:1}let k=e;function yt(S,B){for(let q=0;q<S.length;q++){const F=S[q],j=t.getContext(F,B);if(j!==null)return j}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${us}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),k===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),k=yt(B,S),k===null)throw yt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let pt,ft,ot,Dt,St,xt,Vt,Wt,Ht,Jt,Gt,Pt,le,ie,w,x,W,et,rt,lt,Mt,T,N,ut;function dt(){pt=new Hh(k),ft=new Uh(k,pt,s),pt.init(ft),T=new Tf(k,pt,ft),ot=new wf(k,pt,ft),Dt=new Xh,St=new uf,xt=new Ef(k,pt,ot,St,ft,T,Dt),Vt=new Bh(p),Wt=new Vh(p),Ht=new ec(k,ft),N=new Fh(k,pt,Ht,ft),Jt=new Wh(k,Ht,Dt,N),Gt=new Zh(k,Jt,Ht,Dt),rt=new jh(k,ft,xt),x=new zh(St),Pt=new cf(p,Vt,Wt,pt,ft,N,x),le=new Df(p,St),ie=new df,w=new xf(pt,ft),et=new Nh(p,Vt,Wt,ot,Gt,u,o),W=new bf(p,Gt,ft),ut=new Rf(k,Dt,ft,ot),lt=new Oh(k,pt,Dt,ft),Mt=new $h(k,pt,Dt,ft),Dt.programs=Pt.programs,p.capabilities=ft,p.extensions=pt,p.properties=St,p.renderLists=ie,p.shadowMap=W,p.state=ot,p.info=Dt}dt();const ct=new Pf(p,k);this.xr=ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=pt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(A,R,!1))},this.getSize=function(S){return S.set(A,R)},this.setSize=function(S,B,q){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,R=B,t.width=Math.floor(S*O),t.height=Math.floor(B*O),q!==!1&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(A*O,R*O).floor()},this.setDrawingBufferSize=function(S,B,q){A=S,R=B,O=q,t.width=Math.floor(S*q),t.height=Math.floor(B*q),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(P)},this.setViewport=function(S,B,q,F){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,B,q,F),ot.viewport(L.copy(P).multiplyScalar(O).floor())},this.getScissor=function(S){return S.copy(G)},this.setScissor=function(S,B,q,F){S.isVector4?G.set(S.x,S.y,S.z,S.w):G.set(S,B,q,F),ot.scissor(I.copy(G).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(S){ot.setScissorTest(V=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){C=S},this.getClearColor=function(S){return S.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(S=!0,B=!0,q=!0){let F=0;S&&(F|=16384),B&&(F|=256),q&&(F|=1024),k.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),ie.dispose(),w.dispose(),St.dispose(),Vt.dispose(),Wt.dispose(),Gt.dispose(),N.dispose(),ut.dispose(),Pt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ht),ct.removeEventListener("sessionend",_t),J&&(J.dispose(),J=null),Ft.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const S=Dt.autoReset,B=W.enabled,q=W.autoUpdate,F=W.needsUpdate,j=W.type;dt(),Dt.autoReset=S,W.enabled=B,W.autoUpdate=q,W.needsUpdate=F,W.type=j}function Tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ct(S){const B=S.target;B.removeEventListener("dispose",Ct),Ut(B)}function Ut(S){D(S),St.remove(S)}function D(S){const B=St.get(S).programs;B!==void 0&&(B.forEach(function(q){Pt.releaseProgram(q)}),S.isShaderMaterial&&Pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,q,F,j,vt){B===null&&(B=tt);const bt=j.isMesh&&j.matrixWorld.determinant()<0,At=Fo(S,B,q,F,j);ot.setMaterial(F,bt);let Lt=q.index,Ot=1;F.wireframe===!0&&(Lt=Jt.getWireframeAttribute(q),Ot=2);const Rt=q.drawRange,It=q.attributes.position;let $t=Rt.start*Ot,me=(Rt.start+Rt.count)*Ot;vt!==null&&($t=Math.max($t,vt.start*Ot),me=Math.min(me,(vt.start+vt.count)*Ot)),Lt!==null?($t=Math.max($t,0),me=Math.min(me,Lt.count)):It!=null&&($t=Math.max($t,0),me=Math.min(me,It.count));const ke=me-$t;if(ke<0||ke===1/0)return;N.setup(j,F,At,q,Lt);let cn,Xt=lt;if(Lt!==null&&(cn=Ht.get(Lt),Xt=Mt,Xt.setIndex(cn)),j.isMesh)F.wireframe===!0?(ot.setLineWidth(F.wireframeLinewidth*it()),Xt.setMode(1)):Xt.setMode(4);else if(j.isLine){let Nt=F.linewidth;Nt===void 0&&(Nt=1),ot.setLineWidth(Nt*it()),j.isLineSegments?Xt.setMode(1):j.isLineLoop?Xt.setMode(2):Xt.setMode(3)}else j.isPoints?Xt.setMode(0):j.isSprite&&Xt.setMode(4);if(j.isInstancedMesh)Xt.renderInstances($t,ke,j.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ur=Math.min(q.instanceCount,Nt);Xt.renderInstances($t,ke,ur)}else Xt.render($t,ke)},this.compile=function(S,B){function q(F,j,vt){F.transparent===!0&&F.side===nn&&F.forceSinglePass===!1?(F.side=ye,F.needsUpdate=!0,be(F,j,vt),F.side=an,F.needsUpdate=!0,be(F,j,vt),F.side=nn):be(F,j,vt)}h=w.get(S),h.init(),v.push(h),S.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(p.physicallyCorrectLights),S.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let vt=0;vt<j.length;vt++){const bt=j[vt];q(bt,S,F)}else q(j,S,F)}),v.pop(),h=null};let $=null;function Q(S){$&&$(S)}function ht(){Ft.stop()}function _t(){Ft.start()}const Ft=new _o;Ft.setAnimationLoop(Q),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(S){$=S,ct.setAnimationLoop(S),S===null?Ft.stop():Ft.start()},ct.addEventListener("sessionstart",ht),ct.addEventListener("sessionend",_t),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(B),B=ct.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,B,y),h=w.get(S,v.length),h.init(),v.push(h),at.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(at),K=this.localClippingEnabled,H=x.init(this.clippingPlanes,K),f=ie.get(S,m.length),f.init(),m.push(f),Qt(S,B,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(Y,C),H===!0&&x.beginShadows();const q=h.state.shadowsArray;if(W.render(q,S,B),H===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(f,S),h.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const F=B.cameras;for(let j=0,vt=F.length;j<vt;j++){const bt=F[j];ae(f,S,bt,bt.viewport)}}else ae(f,S,B);y!==null&&(xt.updateMultisampleRenderTarget(y),xt.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(p,S,B),N.resetDefaultState(),b=-1,g=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Qt(S,B,q,F){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){F&&X.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);const bt=Gt.update(S),At=S.material;At.visible&&f.push(S,bt,At,q,X.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Dt.render.frame&&(S.skeleton.update(),S.skeleton.frame=Dt.render.frame),!S.frustumCulled||Z.intersectsObject(S))){F&&X.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);const bt=Gt.update(S),At=S.material;if(Array.isArray(At)){const Lt=bt.groups;for(let Ot=0,Rt=Lt.length;Ot<Rt;Ot++){const It=Lt[Ot],$t=At[It.materialIndex];$t&&$t.visible&&f.push(S,bt,$t,q,X.z,It)}}else At.visible&&f.push(S,bt,At,q,X.z,null)}}const vt=S.children;for(let bt=0,At=vt.length;bt<At;bt++)Qt(vt[bt],B,q,F)}function ae(S,B,q,F){const j=S.opaque,vt=S.transmissive,bt=S.transparent;h.setupLightsView(q),H===!0&&x.setGlobalState(p.clippingPlanes,q),vt.length>0&&ln(j,B,q),F&&ot.viewport(L.copy(F)),j.length>0&&kt(j,B,q),vt.length>0&&kt(vt,B,q),bt.length>0&&kt(bt,B,q),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function ln(S,B,q){const F=ft.isWebGL2;J===null&&(J=new En(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Si:bn,minFilter:yi,samples:F&&r===!0?4:0})),p.getDrawingBufferSize(U),F?J.setSize(U.x,U.y):J.setSize(as(U.x),as(U.y));const j=p.getRenderTarget();p.setRenderTarget(J),p.clear();const vt=p.toneMapping;p.toneMapping=Ze,kt(S,B,q),p.toneMapping=vt,xt.updateMultisampleRenderTarget(J),xt.updateRenderTargetMipmap(J),p.setRenderTarget(j)}function kt(S,B,q){const F=B.isScene===!0?B.overrideMaterial:null;for(let j=0,vt=S.length;j<vt;j++){const bt=S[j],At=bt.object,Lt=bt.geometry,Ot=F===null?bt.material:F,Rt=bt.group;At.layers.test(q.layers)&&Ge(At,B,q,Lt,Ot,Rt)}}function Ge(S,B,q,F,j,vt){S.onBeforeRender(p,B,q,F,j,vt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(p,B,q,F,S,vt),j.transparent===!0&&j.side===nn&&j.forceSinglePass===!1?(j.side=ye,j.needsUpdate=!0,p.renderBufferDirect(q,B,F,j,S,vt),j.side=an,j.needsUpdate=!0,p.renderBufferDirect(q,B,F,j,S,vt),j.side=nn):p.renderBufferDirect(q,B,F,j,S,vt),S.onAfterRender(p,B,q,F,j,vt)}function be(S,B,q){B.isScene!==!0&&(B=tt);const F=St.get(S),j=h.state.lights,vt=h.state.shadowsArray,bt=j.state.version,At=Pt.getParameters(S,j.state,vt,B,q),Lt=Pt.getProgramCacheKey(At);let Ot=F.programs;F.environment=S.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(S.isMeshStandardMaterial?Wt:Vt).get(S.envMap||F.environment),Ot===void 0&&(S.addEventListener("dispose",Ct),Ot=new Map,F.programs=Ot);let Rt=Ot.get(Lt);if(Rt!==void 0){if(F.currentProgram===Rt&&F.lightsStateVersion===bt)return Ms(S,At),Rt}else At.uniforms=Pt.getUniforms(S),S.onBuild(q,At,p),S.onBeforeCompile(At,p),Rt=Pt.acquireProgram(At,Lt),Ot.set(Lt,Rt),F.uniforms=At.uniforms;const It=F.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=x.uniform),Ms(S,At),F.needsLights=Uo(S),F.lightsStateVersion=bt,F.needsLights&&(It.ambientLightColor.value=j.state.ambient,It.lightProbe.value=j.state.probe,It.directionalLights.value=j.state.directional,It.directionalLightShadows.value=j.state.directionalShadow,It.spotLights.value=j.state.spot,It.spotLightShadows.value=j.state.spotShadow,It.rectAreaLights.value=j.state.rectArea,It.ltc_1.value=j.state.rectAreaLTC1,It.ltc_2.value=j.state.rectAreaLTC2,It.pointLights.value=j.state.point,It.pointLightShadows.value=j.state.pointShadow,It.hemisphereLights.value=j.state.hemi,It.directionalShadowMap.value=j.state.directionalShadowMap,It.directionalShadowMatrix.value=j.state.directionalShadowMatrix,It.spotShadowMap.value=j.state.spotShadowMap,It.spotLightMatrix.value=j.state.spotLightMatrix,It.spotLightMap.value=j.state.spotLightMap,It.pointShadowMap.value=j.state.pointShadowMap,It.pointShadowMatrix.value=j.state.pointShadowMatrix);const $t=Rt.getUniforms(),me=Zi.seqWithValue($t.seq,It);return F.currentProgram=Rt,F.uniformsList=me,Rt}function Ms(S,B){const q=St.get(S);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Fo(S,B,q,F,j){B.isScene!==!0&&(B=tt),xt.resetTextureUnits();const vt=B.fog,bt=F.isMeshStandardMaterial?B.environment:null,At=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:wn,Lt=(F.isMeshStandardMaterial?Wt:Vt).get(F.envMap||bt),Ot=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Rt=!!F.normalMap&&!!q.attributes.tangent,It=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,me=!!q.morphAttributes.color,ke=F.toneMapped?p.toneMapping:Ze,cn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xt=cn!==void 0?cn.length:0,Nt=St.get(F),ur=h.state.lights;if(H===!0&&(K===!0||S!==g)){const ge=S===g&&F.id===b;x.setState(F,S,ge)}let te=!1;F.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==ur.state.version||Nt.outputEncoding!==At||j.isInstancedMesh&&Nt.instancing===!1||!j.isInstancedMesh&&Nt.instancing===!0||j.isSkinnedMesh&&Nt.skinning===!1||!j.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==Lt||F.fog===!0&&Nt.fog!==vt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==x.numPlanes||Nt.numIntersection!==x.numIntersection)||Nt.vertexAlphas!==Ot||Nt.vertexTangents!==Rt||Nt.morphTargets!==It||Nt.morphNormals!==$t||Nt.morphColors!==me||Nt.toneMapping!==ke||ft.isWebGL2===!0&&Nt.morphTargetsCount!==Xt)&&(te=!0):(te=!0,Nt.__version=F.version);let un=Nt.currentProgram;te===!0&&(un=be(F,B,j));let ys=!1,ui=!1,hr=!1;const ce=un.getUniforms(),hn=Nt.uniforms;if(ot.useProgram(un.program)&&(ys=!0,ui=!0,hr=!0),F.id!==b&&(b=F.id,ui=!0),ys||g!==S){if(ce.setValue(k,"projectionMatrix",S.projectionMatrix),ft.logarithmicDepthBuffer&&ce.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),g!==S&&(g=S,ui=!0,hr=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const ge=ce.map.cameraPosition;ge!==void 0&&ge.setValue(k,X.setFromMatrixPosition(S.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ce.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&ce.setValue(k,"viewMatrix",S.matrixWorldInverse)}if(j.isSkinnedMesh){ce.setOptional(k,j,"bindMatrix"),ce.setOptional(k,j,"bindMatrixInverse");const ge=j.skeleton;ge&&(ft.floatVertexTextures?(ge.boneTexture===null&&ge.computeBoneTexture(),ce.setValue(k,"boneTexture",ge.boneTexture,xt),ce.setValue(k,"boneTextureSize",ge.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dr=q.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0&&ft.isWebGL2===!0)&&rt.update(j,q,F,un),(ui||Nt.receiveShadow!==j.receiveShadow)&&(Nt.receiveShadow=j.receiveShadow,ce.setValue(k,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(hn.envMap.value=Lt,hn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ui&&(ce.setValue(k,"toneMappingExposure",p.toneMappingExposure),Nt.needsLights&&Oo(hn,hr),vt&&F.fog===!0&&le.refreshFogUniforms(hn,vt),le.refreshMaterialUniforms(hn,F,O,R,J),Zi.upload(k,Nt.uniformsList,hn,xt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Zi.upload(k,Nt.uniformsList,hn,xt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ce.setValue(k,"center",j.center),ce.setValue(k,"modelViewMatrix",j.modelViewMatrix),ce.setValue(k,"normalMatrix",j.normalMatrix),ce.setValue(k,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ge=F.uniformsGroups;for(let fr=0,zo=ge.length;fr<zo;fr++)if(ft.isWebGL2){const Ss=ge[fr];ut.update(Ss,un),ut.bind(Ss,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function Oo(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Uo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,B,q){St.get(S.texture).__webglTexture=B,St.get(S.depthTexture).__webglTexture=q;const F=St.get(S);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const q=St.get(S);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,q=0){y=S,_=B,E=q;let F=!0,j=null,vt=!1,bt=!1;if(S){const Lt=St.get(S);Lt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),F=!1):Lt.__webglFramebuffer===void 0?xt.setupRenderTarget(S):Lt.__hasExternalTextures&&xt.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);const Ot=S.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Rt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(j=Rt[B],vt=!0):ft.isWebGL2&&S.samples>0&&xt.useMultisampledRTT(S)===!1?j=St.get(S).__webglMultisampledFramebuffer:j=Rt,L.copy(S.viewport),I.copy(S.scissor),M=S.scissorTest}else L.copy(P).multiplyScalar(O).floor(),I.copy(G).multiplyScalar(O).floor(),M=V;if(ot.bindFramebuffer(36160,j)&&ft.drawBuffers&&F&&ot.drawBuffers(S,j),ot.viewport(L),ot.scissor(I),ot.setScissorTest(M),vt){const Lt=St.get(S.texture);k.framebufferTexture2D(36160,36064,34069+B,Lt.__webglTexture,q)}else if(bt){const Lt=St.get(S.texture),Ot=B||0;k.framebufferTextureLayer(36160,36064,Lt.__webglTexture,q||0,Ot)}b=-1},this.readRenderTargetPixels=function(S,B,q,F,j,vt,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){ot.bindFramebuffer(36160,At);try{const Lt=S.texture,Ot=Lt.format,Rt=Lt.type;if(Ot!==De&&T.convert(Ot)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Rt===Si&&(pt.has("EXT_color_buffer_half_float")||ft.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Rt!==bn&&T.convert(Rt)!==k.getParameter(35738)&&!(Rt===vn&&(ft.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-F&&q>=0&&q<=S.height-j&&k.readPixels(B,q,F,j,T.convert(Ot),T.convert(Rt),vt)}finally{const Lt=y!==null?St.get(y).__webglFramebuffer:null;ot.bindFramebuffer(36160,Lt)}}},this.copyFramebufferToTexture=function(S,B,q=0){const F=Math.pow(2,-q),j=Math.floor(B.image.width*F),vt=Math.floor(B.image.height*F);xt.setTexture2D(B,0),k.copyTexSubImage2D(3553,q,0,0,S.x,S.y,j,vt),ot.unbindTexture()},this.copyTextureToTexture=function(S,B,q,F=0){const j=B.image.width,vt=B.image.height,bt=T.convert(q.format),At=T.convert(q.type);xt.setTexture2D(q,0),k.pixelStorei(37440,q.flipY),k.pixelStorei(37441,q.premultiplyAlpha),k.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?k.texSubImage2D(3553,F,S.x,S.y,j,vt,bt,At,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(3553,F,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,bt,B.mipmaps[0].data):k.texSubImage2D(3553,F,S.x,S.y,bt,At,B.image),F===0&&q.generateMipmaps&&k.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(S,B,q,F,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=S.max.x-S.min.x+1,bt=S.max.y-S.min.y+1,At=S.max.z-S.min.z+1,Lt=T.convert(F.format),Ot=T.convert(F.type);let Rt;if(F.isData3DTexture)xt.setTexture3D(F,0),Rt=32879;else if(F.isDataArrayTexture)xt.setTexture2DArray(F,0),Rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,F.flipY),k.pixelStorei(37441,F.premultiplyAlpha),k.pixelStorei(3317,F.unpackAlignment);const It=k.getParameter(3314),$t=k.getParameter(32878),me=k.getParameter(3316),ke=k.getParameter(3315),cn=k.getParameter(32877),Xt=q.isCompressedTexture?q.mipmaps[0]:q.image;k.pixelStorei(3314,Xt.width),k.pixelStorei(32878,Xt.height),k.pixelStorei(3316,S.min.x),k.pixelStorei(3315,S.min.y),k.pixelStorei(32877,S.min.z),q.isDataTexture||q.isData3DTexture?k.texSubImage3D(Rt,j,B.x,B.y,B.z,vt,bt,At,Lt,Ot,Xt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Rt,j,B.x,B.y,B.z,vt,bt,At,Lt,Xt.data)):k.texSubImage3D(Rt,j,B.x,B.y,B.z,vt,bt,At,Lt,Ot,Xt),k.pixelStorei(3314,It),k.pixelStorei(32878,$t),k.pixelStorei(3316,me),k.pixelStorei(3315,ke),k.pixelStorei(32877,cn),j===0&&F.generateMipmaps&&k.generateMipmap(Rt),ot.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?xt.setTextureCube(S,0):S.isData3DTexture?xt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?xt.setTexture2DArray(S,0):xt.setTexture2D(S,0),ot.unbindTexture()},this.resetState=function(){_=0,E=0,y=null,ot.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Nf extends bo{}Nf.prototype.isWebGL1Renderer=!0;class Ff extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ps extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fa=new z,Oa=new z,Ua=new Yt,qr=new lo,qi=new ar;class wo extends se{constructor(t=new Be,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Fa.fromBufferAttribute(e,i-1),Oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fa.distanceTo(Oa);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(i),qi.radius+=r,t.ray.intersectsSphere(qi)===!1)return;Ua.copy(i).invert(),qr.copy(t.ray).applyMatrix4(Ua);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new z,u=new z,f=new z,h=new z,m=this.isLineSegments?2:1,v=n.index,d=n.attributes.position;if(v!==null){const _=Math.max(0,o.start),E=Math.min(v.count,o.start+o.count);for(let y=_,b=E-1;y<b;y+=m){const g=v.getX(y),L=v.getX(y+1);if(l.fromBufferAttribute(d,g),u.fromBufferAttribute(d,L),qr.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(h);M<t.near||M>t.far||e.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),E=Math.min(d.count,o.start+o.count);for(let y=_,b=E-1;y<b;y+=m){if(l.fromBufferAttribute(d,y),u.fromBufferAttribute(d,y+1),qr.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(h);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const za=new z,Ba=new z;class Of extends wo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)za.fromBufferAttribute(e,i),Ba.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+za.distanceTo(Ba);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uf extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Eo extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Yr=new Yt,Ga=new z,ka=new z;class zf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ga.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ga),ka.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ka),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bf extends zf{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gf extends Eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.shadow=new Bf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kf extends Eo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Va{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vf extends Of{constructor(t=10,e=10,n=4473924,i=8947848){n=new zt(n),i=new zt(i);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,m=0,v=-a;h<=e;h++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);const p=h===r?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const u=new Be;u.setAttribute("position",new Ie(c,3)),u.setAttribute("color",new Ie(l,3));const f=new ps({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:us}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=us);const Ha={type:"change"},jr={type:"start"},Wa={type:"end"};class Hf extends Ln{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:Dn.ROTATE,TWO:Dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ie),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ha),n.update(),r=i.NONE},this.update=function(){const T=new z,N=new Tn().setFromUnitVectors(t.up,new z(0,1,0)),ut=N.clone().invert(),dt=new z,ct=new Tn,gt=2*Math.PI;return function(){const Tt=n.object.position;T.copy(Tt).sub(n.target),T.applyQuaternion(N),a.setFromVector3(T),n.autoRotate&&r===i.NONE&&A(I()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ct=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;return isFinite(Ct)&&isFinite(Ut)&&(Ct<-Math.PI?Ct+=gt:Ct>Math.PI&&(Ct-=gt),Ut<-Math.PI?Ut+=gt:Ut>Math.PI&&(Ut-=gt),Ct<=Ut?a.theta=Math.max(Ct,Math.min(Ut,a.theta)):a.theta=a.theta>(Ct+Ut)/2?Math.max(Ct,a.theta):Math.min(Ut,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(ut),Tt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||dt.distanceToSquared(n.object.position)>o||8*(1-ct.dot(n.object.quaternion))>o?(n.dispatchEvent(Ha),dt.copy(n.object.position),ct.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",Vt),n.domElement.removeEventListener("pointercancel",Jt),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Ht),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ie)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Va,c=new Va;let l=1;const u=new z;let f=!1;const h=new Et,m=new Et,v=new Et,p=new Et,d=new Et,_=new Et,E=new Et,y=new Et,b=new Et,g=[],L={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function A(T){c.theta-=T}function R(T){c.phi-=T}const O=function(){const T=new z;return function(ut,dt){T.setFromMatrixColumn(dt,0),T.multiplyScalar(-ut),u.add(T)}}(),Y=function(){const T=new z;return function(ut,dt){n.screenSpacePanning===!0?T.setFromMatrixColumn(dt,1):(T.setFromMatrixColumn(dt,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ut),u.add(T)}}(),C=function(){const T=new z;return function(ut,dt){const ct=n.domElement;if(n.object.isPerspectiveCamera){const gt=n.object.position;T.copy(gt).sub(n.target);let mt=T.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),O(2*ut*mt/ct.clientHeight,n.object.matrix),Y(2*dt*mt/ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(ut*(n.object.right-n.object.left)/n.object.zoom/ct.clientWidth,n.object.matrix),Y(dt*(n.object.top-n.object.bottom)/n.object.zoom/ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(T){h.set(T.clientX,T.clientY)}function Z(T){E.set(T.clientX,T.clientY)}function H(T){p.set(T.clientX,T.clientY)}function K(T){m.set(T.clientX,T.clientY),v.subVectors(m,h).multiplyScalar(n.rotateSpeed);const N=n.domElement;A(2*Math.PI*v.x/N.clientHeight),R(2*Math.PI*v.y/N.clientHeight),h.copy(m),n.update()}function J(T){y.set(T.clientX,T.clientY),b.subVectors(y,E),b.y>0?P(M()):b.y<0&&G(M()),E.copy(y),n.update()}function at(T){d.set(T.clientX,T.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),C(_.x,_.y),p.copy(d),n.update()}function U(T){T.deltaY<0?G(M()):T.deltaY>0&&P(M()),n.update()}function X(T){let N=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),N=!0;break}N&&(T.preventDefault(),n.update())}function tt(){if(g.length===1)h.set(g[0].pageX,g[0].pageY);else{const T=.5*(g[0].pageX+g[1].pageX),N=.5*(g[0].pageY+g[1].pageY);h.set(T,N)}}function it(){if(g.length===1)p.set(g[0].pageX,g[0].pageY);else{const T=.5*(g[0].pageX+g[1].pageX),N=.5*(g[0].pageY+g[1].pageY);p.set(T,N)}}function k(){const T=g[0].pageX-g[1].pageX,N=g[0].pageY-g[1].pageY,ut=Math.sqrt(T*T+N*N);E.set(0,ut)}function yt(){n.enableZoom&&k(),n.enablePan&&it()}function pt(){n.enableZoom&&k(),n.enableRotate&&tt()}function ft(T){if(g.length==1)m.set(T.pageX,T.pageY);else{const ut=Mt(T),dt=.5*(T.pageX+ut.x),ct=.5*(T.pageY+ut.y);m.set(dt,ct)}v.subVectors(m,h).multiplyScalar(n.rotateSpeed);const N=n.domElement;A(2*Math.PI*v.x/N.clientHeight),R(2*Math.PI*v.y/N.clientHeight),h.copy(m)}function ot(T){if(g.length===1)d.set(T.pageX,T.pageY);else{const N=Mt(T),ut=.5*(T.pageX+N.x),dt=.5*(T.pageY+N.y);d.set(ut,dt)}_.subVectors(d,p).multiplyScalar(n.panSpeed),C(_.x,_.y),p.copy(d)}function Dt(T){const N=Mt(T),ut=T.pageX-N.x,dt=T.pageY-N.y,ct=Math.sqrt(ut*ut+dt*dt);y.set(0,ct),b.set(0,Math.pow(y.y/E.y,n.zoomSpeed)),P(b.y),E.copy(y)}function St(T){n.enableZoom&&Dt(T),n.enablePan&&ot(T)}function xt(T){n.enableZoom&&Dt(T),n.enableRotate&&ft(T)}function Vt(T){n.enabled!==!1&&(g.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",Wt),n.domElement.addEventListener("pointerup",Ht)),et(T),T.pointerType==="touch"?w(T):Gt(T))}function Wt(T){n.enabled!==!1&&(T.pointerType==="touch"?x(T):Pt(T))}function Ht(T){rt(T),g.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Ht)),n.dispatchEvent(Wa),r=i.NONE}function Jt(T){rt(T)}function Gt(T){let N;switch(T.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Pn.DOLLY:if(n.enableZoom===!1)return;Z(T),r=i.DOLLY;break;case Pn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;H(T),r=i.PAN}else{if(n.enableRotate===!1)return;V(T),r=i.ROTATE}break;case Pn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;V(T),r=i.ROTATE}else{if(n.enablePan===!1)return;H(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(jr)}function Pt(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(T);break;case i.DOLLY:if(n.enableZoom===!1)return;J(T);break;case i.PAN:if(n.enablePan===!1)return;at(T);break}}function le(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(jr),U(T),n.dispatchEvent(Wa))}function ie(T){n.enabled===!1||n.enablePan===!1||X(T)}function w(T){switch(lt(T),g.length){case 1:switch(n.touches.ONE){case Dn.ROTATE:if(n.enableRotate===!1)return;tt(),r=i.TOUCH_ROTATE;break;case Dn.PAN:if(n.enablePan===!1)return;it(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Dn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(),r=i.TOUCH_DOLLY_PAN;break;case Dn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(jr)}function x(T){switch(lt(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ft(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ot(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(T),n.update();break;default:r=i.NONE}}function W(T){n.enabled!==!1&&T.preventDefault()}function et(T){g.push(T)}function rt(T){delete L[T.pointerId];for(let N=0;N<g.length;N++)if(g[N].pointerId==T.pointerId){g.splice(N,1);return}}function lt(T){let N=L[T.pointerId];N===void 0&&(N=new Et,L[T.pointerId]=N),N.set(T.pageX,T.pageY)}function Mt(T){const N=T.pointerId===g[0].pointerId?g[1]:g[0];return L[N.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",Vt),n.domElement.addEventListener("pointercancel",Jt),n.domElement.addEventListener("wheel",le,{passive:!1}),this.update()}}function Xn(s=""){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$";let e="";const n=`${Date.now()}-${Math.random()}-${s}`;for(let i=0;i<22;i+=1){const r=n.charCodeAt(i%n.length)+i*17;e+=t[Math.abs(r)%t.length]}return e}function re(s){return String(s??"").replace(/'/g,"''")}function Wf(s,t){var c,l,u,f,h,m,v,p,d,_,E,y,b;const e=new Date().toISOString(),n=.5,i=Xn("project"),r=["ISO-10303-21;","HEADER;","FILE_DESCRIPTION(('ViewDefinition[DesignTransferView]'),'2;1');",`FILE_NAME('export.ifc','${re(e)}',('AlignmentOffline'),('AlignmentOffline'),'GitHub Copilot','GitHub Copilot','');`,"FILE_SCHEMA(('IFC4X3_ADD2'));","ENDSEC;","DATA;",`#1=IFCPROJECT('${i}',$,'Alignment Event Export',$,$,$,$,(#10),#5);`,"#2=IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);","#3=IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.);","#4=IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.);","#5=IFCUNITASSIGNMENT((#2,#3,#4));","#6=IFCCARTESIANPOINT((0.,0.,0.));","#7=IFCDIRECTION((0.,0.,1.));","#8=IFCDIRECTION((1.,0.,0.));","#9=IFCAXIS2PLACEMENT3D(#6,#7,#8);","#10=IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#9,$);"];let o=20;const a=()=>{const g=o;return o+=1,g};for(const g of s){const L=((c=g==null?void 0:g.data)==null?void 0:c.localXYZ)||{},I=((l=g==null?void 0:g.data)==null?void 0:l.worldXYZ)||{},M=((u=g==null?void 0:g.data)==null?void 0:u.station)??L.y??0,A=(g==null?void 0:g.timestamp)||e,R=(g==null?void 0:g.name)||"RiskObservation",O=((h=(f=g==null?void 0:g.data)==null?void 0:f.classification)==null?void 0:h.classCode)||"TK1",Y=((v=(m=g==null?void 0:g.data)==null?void 0:m.classification)==null?void 0:v.riskType)||"bom sprutbetong",C=(g==null?void 0:g.id)||"marker",P=((p=g==null?void 0:g.data)==null?void 0:p.sessionId)||"unknown-session",G=Number(((d=g==null?void 0:g.data)==null?void 0:d.xRaw)??0),V=Number(((E=(_=g==null?void 0:g.data)==null?void 0:_.offsets)==null?void 0:E.floor)??0),Z=Number(((b=(y=g==null?void 0:g.data)==null?void 0:y.offsets)==null?void 0:b.anfang)??0),H=Number(L.x??0),K=Number(L.y??M),J=Number(L.z??0),at=Number(I.x||0),U=Number(I.y||0),X=Number(I.z||0),tt=Xn(`${(g==null?void 0:g.id)||"action-request"}-action`),it=Xn(`${(g==null?void 0:g.id)||"annotation"}-annotation`),k=Xn(`${(g==null?void 0:g.id)||"pset-action"}-pset`),yt=Xn(`${(g==null?void 0:g.id)||"rel-action"}-rel-def`),pt=Xn(`${(g==null?void 0:g.id)||"rel-assign"}-rel-assign`),ft=a(),ot=a(),Dt=a(),St=a(),xt=a(),Vt=a(),Wt=a(),Ht=a(),Jt=a(),Gt=a(),Pt=a(),le=a(),ie=a(),w=a(),x=a(),W=a(),et=a(),rt=a(),lt=a(),Mt=a(),T=a(),N=a(),ut=a(),dt=a(),ct=a(),gt=a(),mt=a(),Tt=a(),Ct=a(),Ut=a(),D=a(),$=a(),Q=a(),ht=a(),_t=a(),Ft=a();r.push(`#${ft}=IFCANNOTATION('${it}',$,'RiskPoint',$,'Mapped risk position in model coordinates',#${ot},#${xt});`),r.push(`#${ot}=IFCLOCALPLACEMENT($,#${Dt});`),r.push(`#${Dt}=IFCAXIS2PLACEMENT3D(#${St},#7,#8);`),r.push(`#${St}=IFCCARTESIANPOINT((${at},${U},${X}));`),r.push(`#${xt}=IFCPRODUCTDEFINITIONSHAPE($,$,(#${Vt},#${Wt}));`),r.push(`#${Vt}=IFCSHAPEREPRESENTATION(#10,'Annotation','Point',(#${St}));`),r.push(`#${Wt}=IFCSHAPEREPRESENTATION(#10,'Body','CSG',(#${Ht}));`),r.push(`#${Ht}=IFCBLOCK(#${Jt},${n},${n},${n});`),r.push(`#${Jt}=IFCAXIS2PLACEMENT3D(#${Gt},#7,#8);`),r.push(`#${Gt}=IFCCARTESIANPOINT((${-.25},${-.25},${-.25}));`),r.push(`#${Pt}=IFCACTIONREQUEST('${tt}',$,'${re(R)}',$,'Risk record from zone 2','${re(C)}',$,.USERDEFINED.);`),r.push(`#${le}=IFCPROPERTYSINGLEVALUE('RequestSourceName',$,IFCLABEL('AlignmentOffline'),$);`),r.push(`#${ie}=IFCPROPERTYSINGLEVALUE('RequestSourceIfc',$,IFCLABEL('${re(t)}'),$);`),r.push(`#${w}=IFCPROPERTYSINGLEVALUE('RequestSourceDescription',$,IFCTEXT('source=${re(t)}; timestamp=${re(A)}; station=${re(M)}; riskType=${re(Y)}; riskLevel=${re(O)}; sessionId=${re(P)}'),$);`),r.push(`#${x}=IFCPROPERTYSINGLEVALUE('Status',$,IFCLABEL('OPEN'),$);`),r.push(`#${W}=IFCPROPERTYSINGLEVALUE('EventId',$,IFCLABEL('${re(C)}'),$);`),r.push(`#${et}=IFCPROPERTYSINGLEVALUE('EventName',$,IFCLABEL('${re(R)}'),$);`),r.push(`#${rt}=IFCPROPERTYSINGLEVALUE('SessionId',$,IFCLABEL('${re(P)}'),$);`),r.push(`#${lt}=IFCPROPERTYSINGLEVALUE('ObservationTimestamp',$,IFCTEXT('${re(A)}'),$);`),r.push(`#${Mt}=IFCPROPERTYSINGLEVALUE('ExportTimestamp',$,IFCTEXT('${re(e)}'),$);`),r.push(`#${T}=IFCPROPERTYSINGLEVALUE('RiskType',$,IFCLABEL('${re(Y)}'),$);`),r.push(`#${N}=IFCPROPERTYSINGLEVALUE('RiskLevel',$,IFCLABEL('${re(O)}'),$);`),r.push(`#${ut}=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(${M}),$);`),r.push(`#${dt}=IFCPROPERTYSINGLEVALUE('XRaw',$,IFCREAL(${G}),$);`),r.push(`#${ct}=IFCPROPERTYSINGLEVALUE('LocalX',$,IFCLENGTHMEASURE(${H}),$);`),r.push(`#${gt}=IFCPROPERTYSINGLEVALUE('LocalY',$,IFCLENGTHMEASURE(${K}),$);`),r.push(`#${mt}=IFCPROPERTYSINGLEVALUE('LocalZ',$,IFCLENGTHMEASURE(${J}),$);`),r.push(`#${Tt}=IFCPROPERTYSINGLEVALUE('WorldX',$,IFCLENGTHMEASURE(${at}),$);`),r.push(`#${Ct}=IFCPROPERTYSINGLEVALUE('WorldY',$,IFCLENGTHMEASURE(${U}),$);`),r.push(`#${Ut}=IFCPROPERTYSINGLEVALUE('WorldZ',$,IFCLENGTHMEASURE(${X}),$);`),r.push(`#${D}=IFCPROPERTYSINGLEVALUE('FloorOffset',$,IFCLENGTHMEASURE(${V}),$);`),r.push(`#${$}=IFCPROPERTYSINGLEVALUE('AnfangOffset',$,IFCLENGTHMEASURE(${Z}),$);`),r.push(`#${Q}=IFCPROPERTYSINGLEVALUE('GeometryType',$,IFCLABEL('Cube 0.5m'),$);`),r.push(`#${ht}=IFCPROPERTYSET('${k}',$,'Pset_ActionRequest',$,(#${le},#${ie},#${w},#${x},#${W},#${et},#${rt},#${lt},#${Mt},#${T},#${N},#${ut},#${dt},#${ct},#${gt},#${mt},#${Tt},#${Ct},#${Ut},#${D},#${$},#${Q}));`),r.push(`#${_t}=IFCRELDEFINESBYPROPERTIES('${yt}',$,$,$,(#${Pt}),#${ht});`),r.push(`#${Ft}=IFCRELASSIGNSTOCONTROL('${pt}',$,$,$,(#${ft}),#${Pt});`)}return r.push("ENDSEC;"),r.push("END-ISO-10303-21;"),r.join(`
`)}const Cn=document.getElementById("viewer"),Ue=document.getElementById("status"),Ji=document.getElementById("view-3d"),Qi=document.getElementById("view-2d"),$f=document.getElementById("prev-step"),Xf=document.getElementById("next-step"),$a=document.getElementById("save-ifc"),Jn=document.getElementById("classification-class"),Qn=document.getElementById("classification-risk-type"),Re=document.createElement("canvas"),nt=Re.getContext("2d");Cn.appendChild(Re);const ze=new bo({antialias:!0});ze.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ze.setClearColor(15266027,1);Cn.appendChild(ze.domElement);Cn.style.position="relative";Re.style.position="absolute";Re.style.inset="0";ze.domElement.style.position="absolute";ze.domElement.style.inset="0";const on=new Ff,je=new Te(50,1,.1,1e6);je.up.set(0,0,1);const ri=new Hf(je,ze.domElement);ri.enableDamping=!0;ri.dampingFactor=.08;ri.target.set(0,0,0);const qf=new kf(16777215,.8),To=new Gf(16777215,.7);To.position.set(50,80,120);on.add(qf);on.add(To);const tr=new Vf(200,20,7311234,12571848);tr.rotation.x=Math.PI/2;on.add(tr);let cr="3d",Zr=[],Ao=[],ls=[],cs=[];const wi=20,ms=3,er=5,Xa=[1,3,1],pe=3,Mn=8,qa=Math.max(0,Mn-pe),Kr=.5,Co=new URL(".",document.baseURI),Lo=new URL("api/ifc-events",Co).href,Yf=new URL("alignment.ifc",Co).href,Po="alignment-ifc-events-db",Ya="alignment-export-session-id";let nr=[],si=0,Ke=0,sn=[],Yn=null;const gs=Kf();function jf(s){return s==="TK2"?"#b8860b":s==="TK3"?"#b22222":"#1c7a5a"}function Zf(s){return s==="TK2"?12092939:s==="TK3"?11674146:1866330}function ir(){return globalThis.crypto&&typeof globalThis.crypto.randomUUID=="function"?globalThis.crypto.randomUUID():`evt-${Date.now()}-${Math.floor(Math.random()*1e6)}`}function Kf(){try{const s=window.sessionStorage.getItem(Ya);if(s)return s;const t=ir();return window.sessionStorage.setItem(Ya,t),t}catch{return ir()}}function Do(){try{const s=window.localStorage.getItem(Po);if(!s)return{events:[]};const t=JSON.parse(s);if(Array.isArray(t))return{events:t};if(t&&Array.isArray(t.events))return t}catch{}return{events:[]}}function Jf(s){window.localStorage.setItem(Po,JSON.stringify(s))}function Qf(s){const t=Do(),e={id:s.id||ir(),ifcClass:s.ifcClass||"IfcEvent",name:s.name||"Tunnel marker",timestamp:s.timestamp||new Date().toISOString(),data:s.data||{}};return t.events.push(e),Jf(t),e}function _s(){return Do().events.filter(s=>{var t,e;return(s==null?void 0:s.ifcClass)==="IfcActionRequest"&&((t=s==null?void 0:s.data)==null?void 0:t.sessionId)===gs&&((e=s==null?void 0:s.data)==null?void 0:e.worldXYZ)})}function tp(){return _s().map(s=>{var n,i;const t=s.data.localXYZ||{},e=s.data.worldXYZ||{};return{station:Number(s.data.station??t.y??0),xRaw:Number(s.data.xRaw??0),classCode:((n=s.data.classification)==null?void 0:n.classCode)||"TK1",riskType:((i=s.data.classification)==null?void 0:i.riskType)||"bom sprutbetong",local:{x:Number(t.x??0),y:Number(t.y??0),z:Number(t.z??0)},world:{x:Number(e.x??0),y:Number(e.y??0),z:Number(e.z??0)}}})}async function ep(s){const t=s.classCode||(Jn==null?void 0:Jn.value)||"TK1",e=s.riskType||(Qn==null?void 0:Qn.value)||"bom sprutbetong",n={id:ir(),ifcClass:"IfcActionRequest",name:"RiskObservation",timestamp:new Date().toISOString(),data:{sessionId:gs,localXYZ:s.local,worldXYZ:s.world,station:s.station,xRaw:s.xRaw,offsets:{floor:pe,anfang:Mn},classification:{classCode:t,riskType:e}}};try{const i=await fetch(Lo,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok)throw new Error(`IFC event save failed (${i.status})`);return i.json()}catch(i){return{ok:!0,event:Qf(n),count:_s().length,storedLocally:!0,error:String((i==null?void 0:i.message)||i)}}}async function np(){try{const s=await fetch(`${Lo}/export-current?sessionId=${encodeURIComponent(gs)}`,{method:"POST"});if(!s.ok){const t=await s.text();throw new Error(`IFC export failed (${s.status}): ${t}`)}return s.json()}catch{const s=_s();if(!s.length)throw new Error("No local IFC event available to export");return{ok:!0,fileName:"export.ifc",eventId:s[s.length-1].id,eventCount:s.length,content:Wf(s,"alignment.ifc"),storedLocally:!0}}}function ip(s,t){const e=new Blob([t],{type:"application/octet-stream"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=s,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(n)}function Ro(){const s=Math.min(window.devicePixelRatio||1,2),t=Math.max(1,Cn.clientWidth),e=Math.max(1,Cn.clientHeight);Re.width=Math.floor(t*s),Re.height=Math.floor(e*s),Re.style.width=`${t}px`,Re.style.height=`${e}px`,nt.setTransform(s,0,0,s,0,0),ze.setPixelRatio(s),ze.setSize(t,e,!1),je.aspect=t/e,je.updateProjectionMatrix(),ci(),xs()}function rp(s){const t=/#(\d+)=IFCCARTESIANPOINT\(\(([^\)]*)\)\);/g,e=/#(\d+)=IFCPOLYLINE\(\(([^\)]*)\)\);/g,n=/#(\d+)=IFCSWEPTDISKSOLID\(#(\d+),/g,i=new Map,r=new Map,o=[];let a;for(;(a=t.exec(s))!==null;){const l=Number(a[1]),u=a[2].split(",").map(f=>Number(f.trim())).filter(f=>Number.isFinite(f));u.length>=2&&i.set(l,{x:u[0],y:u[1],z:u[2]??0})}for(;(a=e.exec(s))!==null;){const l=Number(a[1]),u=a[2].split(",").map(f=>Number(f.replace(/[#\s]/g,""))).filter(f=>Number.isFinite(f));r.set(l,u)}for(;(a=n.exec(s))!==null;)o.push(Number(a[2]));let c=[];for(const l of o){const u=r.get(l);u&&u.length>c.length&&(c=u)}if(!c.length)for(const l of r.values())l.length>c.length&&(c=l);return c.map(l=>i.get(l)).filter(l=>l&&Number.isFinite(l.x)&&Number.isFinite(l.y)&&Number.isFinite(l.z))}function Yi(s,t,e){const n=[];let i=1,r=0;for(let o=0;o<s.length;o+=1){const a=s[Math.max(0,o-1)],c=s[Math.min(s.length-1,o+1)];let l=c.x-a.x,u=c.y-a.y;const f=Math.hypot(l,u);f>1e-9&&(l/=f,u/=f,i=-u,r=l);const h=s[o],m={x:h.x+i*t,y:h.y+r*t,z:h.z+e};Number.isFinite(m.x)&&Number.isFinite(m.y)&&Number.isFinite(m.z)&&n.push(m)}return n}function xi(s,t){if(s.length<2)return;const e=new Be().setFromPoints(s.map(r=>new z(r.x,r.y,r.z))),n=new ps({color:t}),i=new wo(e,n);on.add(i),ls.push(i)}function sp(s){const t=new z(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),e=new z(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(const n of s)for(const i of n)!Number.isFinite(i.x)||!Number.isFinite(i.y)||!Number.isFinite(i.z)||(i.x<t.x&&(t.x=i.x),i.y<t.y&&(t.y=i.y),i.z<t.z&&(t.z=i.z),i.x>e.x&&(e.x=i.x),i.y>e.y&&(e.y=i.y),i.z>e.z&&(e.z=i.z));return(!Number.isFinite(t.x)||!Number.isFinite(e.x))&&(t.set(0,0,0),e.set(1,1,1)),{min:t,max:e}}function ap(s){if(!s.length)return[];const t=[{...s[0],s:0}];let e=0;for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];e+=Math.hypot(r.x-i.x,r.y-i.y),t.push({...r,s:e})}return t}function op(s,t){if(!s.length)return null;if(t<=0){const n=s[0],i=s[Math.min(1,s.length-1)]||n,r=i.x-n.x,o=i.y-n.y,a=Math.hypot(r,o)||1;return{x:n.x,y:n.y,z:n.z,s:0,tx:r/a,ty:o/a}}const e=s[s.length-1];if(t>=e.s){const n=e,i=s[Math.max(0,s.length-2)]||n,r=n.x-i.x,o=n.y-i.y,a=Math.hypot(r,o)||1;return{x:n.x,y:n.y,z:n.z,s:e.s,tx:r/a,ty:o/a}}for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];if(t>r.s)continue;const o=r.s-i.s,a=o<1e-12?0:(t-i.s)/o,c=r.x-i.x,l=r.y-i.y,u=Math.hypot(c,l)||1;return{x:i.x+c*a,y:i.y+l*a,z:i.z+(r.z-i.z)*a,s:t,tx:c/u,ty:l/u}}return null}function Io(s){const t=op(Ao,s.station);if(!t)return null;const e=-(t.ty??0),n=t.tx??1,i=t.x+e*s.local.x,r=t.y+n*s.local.x,o=t.z+s.local.z,a=new oi(Kr,Kr,Kr),c=new Uf({color:Zf(s.classCode),roughness:.5,metalness:.05}),l=new Ye(a,c);return l.position.set(i,r,o),on.add(l),cs.push(l),{x:i,y:r,z:o}}function lp(s){for(const u of ls)on.remove(u),u.geometry.dispose(),u.material.dispose();ls=[];for(const u of cs)on.remove(u),u.geometry.dispose(),u.material.dispose();if(cs=[],!s.length)return;Ao=ap(s);const t=s,e=Yi(s,-pe,0),n=Yi(s,pe,0),i=Yi(s,-pe,qa),r=Yi(s,pe,qa);xi(t,1866330),xi(e,1866330),xi(n,1866330),xi(i,6965804),xi(r,6965804);for(const u of sn){const f=Io(u);f&&(u.world={x:f.x,y:f.y,z:f.z})}const o=sp([t,e,n,i,r]),a=o.min.clone().add(o.max).multiplyScalar(.5),c=o.max.clone().sub(o.min),l=Math.max(c.x,c.y,c.z,1);tr.position.set(a.x,a.y,a.z),tr.scale.setScalar(Math.max(1,l/100)),ri.target.copy(a),je.position.set(a.x+l*.9,a.y-l*1.3,a.z+l*.7),je.near=Math.max(.01,l/1e4),je.far=Math.max(1e3,l*100),je.updateProjectionMatrix(),ri.update()}function xs(){cr==="3d"&&(ri.update(),ze.render(on,je))}function No(){xs(),requestAnimationFrame(No)}function vs(s){cr=s;const t=s==="3d";if(ze.domElement.style.display=t?"block":"none",Re.style.display=t?"none":"block",Ji&&(Ji.style.filter=t?"brightness(1.12)":"none"),Qi&&(Qi.style.filter=t?"none":"brightness(1.12)"),t){const e=Math.round(Ke),n=Math.min(Math.round(Ke+wi*ms),Math.round(si));Ue.textContent=`3D-flik aktiv: IFC alignment 0/${String(e).padStart(3,"0")} - 0/${String(n).padStart(3,"0")}.`,xs()}else ci()}function cp(s){const t=/#(\d+)=IFCCARTESIANPOINT\(\(([^\)]*)\)\);/g,e=/#(\d+)=IFCDIRECTION\(\(([^\)]*)\)\);/g,n=/#(\d+)=IFCAXIS2PLACEMENT2D\(#(\d+),#(\d+)\);/g,i=/#(\d+)=IFCCURVESEGMENT\([^,]*,#(\d+),IFCLENGTHMEASURE\(([-+0-9.Ee]+)\),IFCLENGTHMEASURE\(([-+0-9.Ee]+)\),#(\d+)\);/g,r=/#(\d+)=IFCCOMPOSITECURVE\(\(([^\)]*)\),/g,o=/IFCSHAPEREPRESENTATION\([^\n]*'FootPrint'[^\n]*\(#(\d+)\)\);/,a=/#(\d+)=IFCLINE\(/g,c=/#(\d+)=IFCCIRCLE\(#\d+,([-+0-9.Ee]+)\);/g,l=new Map,u=new Map,f=new Map,h=new Map,m=new Map,v=new Map,p=new Set,d=new Map;let _;for(;(_=t.exec(s))!==null;){const R=Number(_[1]),O=_[2].split(",").map(Y=>Number(Y.trim()));O.length<2||Number.isNaN(O[0])||Number.isNaN(O[1])||l.set(R,{x:O[0],y:O[1]})}for(;(_=e.exec(s))!==null;){const R=Number(_[1]),O=_[2].split(",").map(G=>Number(G.trim())),Y=O[0]??1,C=O[1]??0,P=Math.hypot(Y,C)||1;u.set(R,{x:Y/P,y:C/P})}for(;(_=n.exec(s))!==null;)f.set(Number(_[1]),Number(_[2])),h.set(Number(_[1]),Number(_[3]));for(;(_=i.exec(s))!==null;)m.set(Number(_[1]),{placementId:Number(_[2]),segmentLength:Number(_[4]),parentCurveId:Number(_[5])});for(;(_=r.exec(s))!==null;){const R=Number(_[1]),O=_[2].split(",").map(Y=>Number(Y.replace(/[#\s]/g,""))).filter(Y=>Number.isFinite(Y));v.set(R,O)}for(;(_=a.exec(s))!==null;)p.add(Number(_[1]));for(;(_=c.exec(s))!==null;)d.set(Number(_[1]),Math.abs(Number(_[2])));const E=s.match(o),y=E?Number(E[1]):null;let b=[];if(y&&v.has(y))b=v.get(y);else for(const R of v.values())R.length>b.length&&(b=R);function g(R){let O=R;for(;O<=-Math.PI;)O+=Math.PI*2;for(;O>Math.PI;)O-=Math.PI*2;return O}function L(R,O,Y){const C=g(O-R),P=[C-Math.PI*2,C,C+Math.PI*2,-C-Math.PI*2,-C,-C+Math.PI*2];let G=P[0],V=Math.abs(Math.abs(G)-Math.abs(Y));for(let Z=1;Z<P.length;Z+=1){const H=Math.abs(Math.abs(P[Z])-Math.abs(Y));H<V&&(G=P[Z],V=H)}return G}function I(R,O){const Y=R[R.length-1];Y&&Math.hypot(Y.x-O.x,Y.y-O.y)<1e-9||R.push({x:O.x,y:O.y})}const M=[];for(let R=0;R<b.length;R+=1){const O=m.get(b[R]);if(!O)continue;const Y=f.get(O.placementId),C=h.get(O.placementId),P=l.get(Y),G=u.get(C)||{x:1,y:0};if(!P)continue;let V=null;if(R+1<b.length){const Z=m.get(b[R+1]);if(Z){const H=l.get(f.get(Z.placementId));H&&(V=H)}}M.push({origin:P,tangent:G,end:V,length:O.segmentLength,curveId:O.parentCurveId})}const A=[];for(const R of M){const{origin:O,tangent:Y,end:C,length:P,curveId:G}=R;if(p.has(G)){const V=C||{x:O.x+Y.x*P,y:O.y+Y.y*P},Z=Math.hypot(V.x-O.x,V.y-O.y),H=Math.max(2,Math.ceil(Z/5));for(let K=0;K<=H;K+=1){const J=K/H;I(A,{x:O.x+(V.x-O.x)*J,y:O.y+(V.y-O.y)*J})}continue}if(d.has(G)){const V=d.get(G);if(!V||V<1e-12)continue;const Z={x:-Y.y,y:Y.x},H=[{x:O.x+Z.x*V,y:O.y+Z.y*V},{x:O.x-Z.x*V,y:O.y-Z.y*V}];let K=H[0],J=P/V;if(C){const X=P/V;let tt=Number.POSITIVE_INFINITY;for(const it of H){const k=Math.atan2(O.y-it.y,O.x-it.x),yt=Math.atan2(C.y-it.y,C.x-it.x),pt=L(k,yt,X),ft={x:O.x-it.x,y:O.y-it.y},ot=pt>=0?{x:-ft.y/V,y:ft.x/V}:{x:ft.y/V,y:-ft.x/V},Dt=ot.x*Y.x+ot.y*Y.y,St=Math.abs(Math.hypot(C.x-it.x,C.y-it.y)-V),xt=Math.abs(Math.abs(pt)-Math.abs(X)),Vt=1-Math.max(-1,Math.min(1,Dt)),Wt=St*10+xt+Vt*.75;Wt<tt&&(tt=Wt,K=it,J=pt)}}const at=Math.atan2(O.y-K.y,O.x-K.x),U=Math.max(8,Math.ceil(Math.abs(J)/(Math.PI/36)));for(let X=0;X<=U;X+=1){const tt=at+J*(X/U);I(A,{x:K.x+V*Math.cos(tt),y:K.y+V*Math.sin(tt)})}continue}I(A,O)}nr=A}function up(s){if(!s.length)return[];const t=[{...s[0],s:0}];let e=0;for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];e+=Math.hypot(r.x-i.x,r.y-i.y),t.push({...r,s:e})}return t}function rr(s,t){if(!s.length)return null;if(t<=0)return{...s[0],s:0};const e=s[s.length-1];if(t>=e.s)return{...e,s:e.s};for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];if(t>r.s)continue;const o=r.s-i.s,a=o<1e-12?0:(t-i.s)/o;return{x:i.x+(r.x-i.x)*a,y:i.y+(r.y-i.y)*a,s:t}}return{...e}}function hp(s,t,e,n=.25){const i=[];for(let o=t;o<e;o+=n){const a=rr(s,o);a&&i.push(a)}const r=rr(s,e);return r&&i.push(r),i}function ja(s,t,e){let n=e.x-t.x,i=e.y-t.y;const r=Math.hypot(n,i);r<1e-9?(n=0,i=1):(n/=r,i/=r);const o=-i,a=n;return s.map(c=>{const l=c.x-t.x,u=c.y-t.y;return{x:l*o+u*a,y:c.s,s:c.s}})}function dp(s,t,e,n){nt.save(),nt.strokeStyle="#d7e3dc",nt.lineWidth=1;const i=50;for(let r=s;r<=s+e;r+=i)nt.beginPath(),nt.moveTo(r,t),nt.lineTo(r,t+n),nt.stroke();for(let r=t;r<=t+n;r+=i)nt.beginPath(),nt.moveTo(s,r),nt.lineTo(s+e,r),nt.stroke();nt.restore()}function Jr(s,t,e){const n=Math.max(0,Math.min(Ke+s*wi,si)),i=Math.max(n,Math.min(n+wi,si)),r=hp(e,n,i);if(!r.length)return;const o=r[Math.min(r.length-1,12)]||r[r.length-1],a=ja(r,r[0],o),c=s===1,l=c?a.map(C=>({x:0,y:C.y,s:C.s})):a,u=Math.ceil(n),f=Math.floor(i),h=[];for(let C=u;C<=f;C+=1){const P=rr(e,C);if(!P)continue;const G=ja([P],r[0],o)[0];h.push({x:c?0:G.x,s:C,label:C%10===0?`0/${String(C).padStart(3,"0")}`:""})}let m=1/0,v=-1/0;const p=[-Mn,-pe,pe,Mn,0];for(const C of l)for(const P of p){const G=C.x+P;G<m&&(m=G),G>v&&(v=G)}for(const C of h)C.x<m&&(m=C.x),C.x>v&&(v=C.x);(!Number.isFinite(m)||!Number.isFinite(v))&&(m=-1,v=1);const d=Math.max(v-m,.25),_=24,E=18,y=Math.max(1e-4,(t.w-_*2)/d),b=(m+v)/2;function g(C){return t.x+t.w/2+(C-b)*y}function L(C){const P=i-n<1e-9?0:(C-n)/(i-n);return t.y+t.h-E-P*(t.h-E*2)}if(c){const C=Math.abs(g(1)-g(0)),P=Math.abs(L(n+1)-L(n)),G=g(0),V=Math.ceil((G-t.x)/Math.max(C,1e-6)),Z=Math.ceil((t.x+t.w-G)/Math.max(C,1e-6)),H=Math.ceil(n),K=Math.floor(i);nt.save(),nt.strokeStyle="#bfd4c8",nt.lineWidth=.8;for(let at=-V;at<=Z;at+=1){const U=g(at);U<t.x||U>t.x+t.w||(nt.beginPath(),nt.moveTo(U,L(n)),nt.lineTo(U,L(i)),nt.stroke())}for(let at=H;at<=K;at+=1){const U=L(at);nt.beginPath(),nt.moveTo(t.x,U),nt.lineTo(t.x+t.w,U),nt.stroke()}const J=Math.max(1.5,Math.min(C,P)*.12);nt.strokeStyle="#8fab9d",nt.lineWidth=.9;for(let at=-V;at<=Z;at+=1){const U=g(at);if(!(U<t.x||U>t.x+t.w))for(let X=H;X<=K;X+=1){const tt=L(X);tt<t.y||tt>t.y+t.h||(nt.beginPath(),nt.moveTo(U-J,tt),nt.lineTo(U+J,tt),nt.moveTo(U,tt-J),nt.lineTo(U,tt+J),nt.stroke())}}nt.restore()}function I(C,P,G,V=[]){nt.save(),nt.strokeStyle=P,nt.lineWidth=G,nt.lineJoin="round",nt.lineCap="round",nt.setLineDash(V),nt.beginPath(),nt.moveTo(g(l[0].x+C),L(l[0].s));for(let Z=1;Z<l.length;Z+=1)nt.lineTo(g(l[Z].x+C),L(l[Z].s));nt.stroke(),nt.restore()}if(nt.save(),I(-Mn,"#6a4a2c",1.8,[6,4]),I(-pe,"#1c7a5a",2.2),I(pe,"#1c7a5a",2.2),I(Mn,"#6a4a2c",1.8,[6,4]),c&&sn.length)for(const C of sn){if(C.station<n||C.station>i)continue;const P=g(C.xRaw),G=L(C.station);nt.save(),nt.strokeStyle=jf(C.classCode),nt.lineWidth=2;const V=6;nt.beginPath(),nt.moveTo(P-V,G-V),nt.lineTo(P+V,G+V),nt.moveTo(P-V,G+V),nt.lineTo(P+V,G-V),nt.stroke(),nt.restore()}for(const C of h){const P=g(C.x),G=L(C.s);nt.strokeStyle="#2d5b4c",nt.lineWidth=1,nt.beginPath(),nt.moveTo(P-5,G),nt.lineTo(P+5,G),nt.stroke(),C.label&&(nt.fillStyle="#16392d",nt.font="12px 'Avenir Next', 'Segoe UI', sans-serif",nt.textAlign="left",nt.textBaseline="middle",nt.fillText(C.label,P+8,G))}nt.fillStyle="#134232",nt.beginPath(),nt.arc(g(l[0].x),L(l[0].s),3.5,0,Math.PI*2),nt.fill();const M=Math.round(n),A=Math.round(i),R=s+1,O=c?"ratad":"original",Y=`Zon ${R}: 0/${String(M).padStart(3,"0")} - 0/${String(A).padStart(3,"0")} (${O})`;return nt.fillStyle="#17372c",nt.font="700 13px 'Avenir Next', 'Segoe UI', sans-serif",nt.textAlign="left",nt.textBaseline="top",nt.fillText(Y,t.x+8,t.y+4),nt.restore(),{startS:n,endS:i,zoneRect:t,centerX:b,scaleX:y,yPad:E}}function ci(){const s=Cn.clientWidth,t=Cn.clientHeight;if(nt.clearRect(0,0,s,t),!nr.length)return;const e=up(nr);si=e[e.length-1].s;const n=8,i=n,r=n,o=s-n*2,a=t-n*2;dp(i,r,o,a);const c=Xa.reduce((L,I)=>L+I,0),l=Xa.map(L=>a*L/c),u=r,f=r+l[2],h=r+l[2]+l[1];nt.save(),nt.strokeStyle="#95b5a8",nt.lineWidth=1.25;const m=f,v=h;nt.beginPath(),nt.moveTo(i,m),nt.lineTo(i+o,m),nt.stroke(),nt.beginPath(),nt.moveTo(i,v),nt.lineTo(i+o,v),nt.stroke(),nt.restore();const p={x:i,y:h,w:o,h:l[0]},d={x:i,y:f,w:o,h:l[1]},_={x:i,y:u,w:o,h:l[2]};Jr(0,p,e);const E=Jr(1,d,e);Jr(2,_,e),Yn={stationed:e,zone2:E};const y=Math.round(Ke),b=Math.min(Math.round(Ke+wi*ms),Math.round(si)),g=sn[sn.length-1]||null;g?Ue.textContent=`Tre-zons vy aktiv: 0/${String(y).padStart(3,"0")} - 0/${String(b).padStart(3,"0")}. Steg ${er} m. Kryss ${sn.length} st. Senaste ${g.classCode}: XYZ=(${g.local.x.toFixed(2)}, ${g.local.y.toFixed(2)}, ${g.local.z.toFixed(2)}) Verklig XY=(${g.world.x.toFixed(3)}, ${g.world.y.toFixed(3)})`:Ue.textContent=`Tre-zons vy aktiv: 0/${String(y).padStart(3,"0")} - 0/${String(b).padStart(3,"0")}. Steg ${er} m, zon 2 ar ratad.`}function Qr(s,t,e){return Math.max(t,Math.min(e,s))}async function fp(s,t){if(!(Yn!=null&&Yn.zone2))return;const e=Re.getBoundingClientRect(),n=s-e.left,i=t-e.top,r=Yn.zone2,{zoneRect:o,startS:a,endS:c,centerX:l,scaleX:u,yPad:f}=r;if(!(n>=o.x&&n<=o.x+o.w&&i>=o.y&&i<=o.y+o.h))return;const m=Math.max(1e-6,o.h-f*2),v=Qr((o.y+o.h-f-i)/m,0,1),p=a+v*(c-a),d=(n-(o.x+o.w/2))/Math.max(u,1e-6)+l,_=Qr(d,-pe,pe),E=Qr(Math.abs(d)-pe,0,Mn-pe),y=rr(Yn.stationed,p);if(!y)return;const b={station:p,xRaw:d,classCode:(Jn==null?void 0:Jn.value)||"TK1",riskType:(Qn==null?void 0:Qn.value)||"bom sprutbetong",local:{x:_,y:p,z:E},world:{x:y.x,y:y.y,z:0}},g=Io(b);g&&(b.world={x:g.x,y:g.y,z:g.z}),sn.push(b),ci();try{const L=await ep(b);Ue.textContent=`Marker sparad som IfcActionRequest (${L.event.id}). Lokal XYZ: (${b.local.x.toFixed(2)}, ${b.local.y.toFixed(2)}, ${b.local.z.toFixed(2)}) | Verklig XY: (${b.world.x.toFixed(3)}, ${b.world.y.toFixed(3)})`}catch(L){Ue.textContent=`Marker satt men IFC-event kunde inte sparas. Lokal XYZ: (${b.local.x.toFixed(2)}, ${b.local.y.toFixed(2)}, ${b.local.z.toFixed(2)})`,console.error(L)}}function pp(){Ke=Math.max(0,Ke-er),cr==="2d"&&ci()}function mp(){const s=Math.max(0,si-wi*ms);Ke=Math.min(s,Ke+er),cr==="2d"&&ci()}Ji&&Ji.addEventListener("click",()=>{vs("3d")});Qi&&Qi.addEventListener("click",()=>{vs("2d")});$f.addEventListener("click",pp);Xf.addEventListener("click",mp);Re.addEventListener("click",s=>{fp(s.clientX,s.clientY)});$a&&$a.addEventListener("click",async()=>{try{const s=await np();ip(s.fileName,s.content);const t=Number(s.eventCount||0),e=t>0?`${t} kryss`:`event ${s.eventId}`;Ue.textContent=`IFC exporterad: ${s.fileName} (${e}).`}catch(s){Ue.textContent="Kunde inte exportera IFC-event. Kontrollera att en markor har sparats.",console.error(s)}});window.addEventListener("resize",Ro);async function gp(){Ue.textContent="Laddar alignment.ifc...";try{const s=await fetch(Yf);if(!s.ok)throw new Error(`HTTP ${s.status}`);const t=await s.text();if(cp(t),Zr=rp(t),sn=tp(),!nr.length){Ue.textContent="Ingen plan-geometri hittades i alignment.ifc.";return}Zr.length&&lp(Zr),Ro(),ci(),vs("3d"),No()}catch(s){Ue.textContent="Kunde inte lasa alignment.ifc for planvy.",console.error(s)}}gp();
