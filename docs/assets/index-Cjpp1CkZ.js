(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const us="149",Rn={ROTATE:0,DOLLY:1,PAN:2},Ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Go=0,Ms=1,zo=2,Za=1,Bo=2,xi=3,an=0,Ie=1,nn=2,rn=0,Zn=1,Cs=2,vs=3,As=4,Vo=5,Yn=100,Ho=101,ko=102,ys=103,bs=104,Wo=200,Xo=201,Yo=202,qo=203,Ka=204,Ja=205,jo=206,Zo=207,Ko=208,Jo=209,Qo=210,tl=0,el=1,nl=2,ts=3,il=4,rl=5,sl=6,al=7,Qa=0,ol=1,ll=2,Ze=0,cl=1,ul=2,hl=3,dl=4,fl=5,to=300,ti=301,ei=302,es=303,ns=304,sr=306,is=1e3,Re=1001,rs=1002,de=1003,Ns=1004,pr=1005,ve=1006,pl=1007,Ii=1008,Mn=1009,ml=1010,gl=1011,eo=1012,El=1013,_n=1014,xn=1015,Ti=1016,_l=1017,xl=1018,Kn=1020,Sl=1021,Le=1023,Il=1024,Tl=1025,In=1026,ni=1027,Ml=1028,Cl=1029,vl=1030,Al=1031,yl=1033,mr=33776,gr=33777,Er=33778,_r=33779,Rs=35840,Ls=35841,ws=35842,Ps=35843,bl=36196,Fs=37492,Ds=37496,Os=37808,$s=37809,Us=37810,Gs=37811,zs=37812,Bs=37813,Vs=37814,Hs=37815,ks=37816,Ws=37817,Xs=37818,Ys=37819,qs=37820,js=37821,xr=36492,Nl=36283,Zs=36284,Ks=36285,Js=36286,Cn=3e3,Gt=3001,Rl=3200,Ll=3201,no=0,wl=1,Fe="srgb",Mi="srgb-linear",Sr=7680,Pl=519,Qs=35044,ta="300 es",ss=1035;class Nn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ir=Math.PI/180,ea=180/Math.PI;function vi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(oe[s&255]+oe[s>>8&255]+oe[s>>16&255]+oe[s>>24&255]+"-"+oe[t&255]+oe[t>>8&255]+"-"+oe[t>>16&15|64]+oe[t>>24&255]+"-"+oe[e&63|128]+oe[e>>8&255]+"-"+oe[e>>16&255]+oe[e>>24&255]+oe[n&255]+oe[n>>8&255]+oe[n>>16&255]+oe[n>>24&255]).toLowerCase()}function fe(s,t,e){return Math.max(t,Math.min(e,s))}function Fl(s,t){return(s%t+t)%t}function Tr(s,t,e){return(1-e)*s+e*t}function na(s){return(s&s-1)===0&&s!==0}function as(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yi(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Se{constructor(){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],x=n[8],p=i[0],d=i[3],E=i[6],v=i[1],I=i[4],M=i[7],g=i[2],N=i[5],P=i[8];return r[0]=o*p+a*v+c*g,r[3]=o*d+a*I+c*N,r[6]=o*E+a*M+c*P,r[1]=l*p+u*v+f*g,r[4]=l*d+u*I+f*N,r[7]=l*E+u*M+f*P,r[2]=h*p+m*v+x*g,r[5]=h*d+m*I+x*N,r[8]=h*E+m*M+x*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,m=l*r-o*c,x=e*f+n*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return t[0]=f*p,t[1]=(i*l-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=h*p,t[4]=(u*e-i*c)*p,t[5]=(i*r-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mr.makeScale(t,e)),this}rotate(t){return this.premultiply(Mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mr=new Se;function io(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ki(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Cr={[Fe]:{[Mi]:Tn},[Mi]:{[Fe]:ji}},ue={legacyMode:!0,get workingColorSpace(){return Mi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(Cr[t]&&Cr[t][e]!==void 0){const n=Cr[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},ro={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={r:0,g:0,b:0},ye={h:0,s:0,l:0},bi={h:0,s:0,l:0};function vr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Ni(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Fl(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vr(o,r,t+1/3),this.g=vr(o,r,t),this.b=vr(o,r,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ue.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ue.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ue.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ue.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Fe){const n=ro[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ue.fromWorkingColorSpace(Ni(this,jt),t),fe(jt.r*255,0,255)<<16^fe(jt.g*255,0,255)<<8^fe(jt.b*255,0,255)<<0}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Ni(this,jt),e);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Ni(this,jt),e),t.r=jt.r,t.g=jt.g,t.b=jt.b,t}getStyle(t=Fe){return ue.fromWorkingColorSpace(Ni(this,jt),t),t!==Fe?`color(${t} ${jt.r} ${jt.g} ${jt.b})`:`rgb(${jt.r*255|0},${jt.g*255|0},${jt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(ye),ye.h+=t,ye.s+=e,ye.l+=n,this.setHSL(ye.h,ye.s,ye.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ye),t.getHSL(bi);const n=Tr(ye.h,bi.h,e),i=Tr(ye.s,bi.s,e),r=Tr(ye.l,bi.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ut.NAMES=ro;let wn;class so{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wn===void 0&&(wn=Ki("canvas")),wn.width=t.width,wn.height=t.height;const n=wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ki("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ao{constructor(t=null){this.isSource=!0,this.uuid=vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ar(i[o].image)):r.push(Ar(i[o]))}else r=Ar(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ar(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?so.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dl=0;class Te extends Nn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Re,i=Re,r=ve,o=Ii,a=Le,c=Mn,l=Te.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=vi(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==to)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case Re:t.x=t.x<0?0:1;break;case rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case Re:t.y=t.y<0?0:1;break;case rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=to;Te.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],x=c[9],p=c[2],d=c[6],E=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+E-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(l+1)/2,M=(m+1)/2,g=(E+1)/2,N=(u+h)/4,P=(f+p)/4,S=(x+d)/4;return I>M&&I>g?I<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(I),i=N/n,r=P/n):M>g?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=N/i,r=S/i):g<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(g),n=P/r,i=S/r),this.set(n,i,r,e),this}let v=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(d-x)/v,this.y=(f-p)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+E-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vn extends Nn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ve,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oo extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=r[o+0],m=r[o+1],x=r[o+2],p=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=x,t[e+3]=p;return}if(f!==p||c!==h||l!==m||u!==x){let d=1-a;const E=c*h+l*m+u*x+f*p,v=E>=0?1:-1,I=1-E*E;if(I>Number.EPSILON){const g=Math.sqrt(I),N=Math.atan2(g,E*v);d=Math.sin(d*N)/g,a=Math.sin(a*N)/g}const M=a*v;if(c=c*d+h*M,l=l*d+m*M,u=u*d+x*M,f=f*d+p*M,d===1-a){const g=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=g,l*=g,u*=g,f*=g}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+u*f+c*m-l*h,t[e+1]=c*x+u*h+l*f-a*m,t[e+2]=l*x+u*m+a*h-c*f,t[e+3]=u*x-a*f-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),m=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"YZX":this._x=h*u*f+l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f-h*m*x;break;case"XZY":this._x=h*u*f-l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-r*i,f=c*i+r*n-o*e,h=-r*e-o*n-a*i;return this.x=l*c+h*-r+u*-a-f*-o,this.y=u*c+h*-o+f*-r-l*-a,this.z=f*c+h*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new U,ia=new An;class Ai{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],f=t[c+1],h=t[c+2];u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),f=t.getY(c),h=t.getZ(c);u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)dn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(dn)}else n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox),br.applyMatrix4(t.matrixWorld),this.union(br);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hi),Ri.subVectors(this.max,hi),Pn.subVectors(t.a,hi),Fn.subVectors(t.b,hi),Dn.subVectors(t.c,hi),Je.subVectors(Fn,Pn),Qe.subVectors(Dn,Fn),fn.subVectors(Pn,Dn);let e=[0,-Je.z,Je.y,0,-Qe.z,Qe.y,0,-fn.z,fn.y,Je.z,0,-Je.x,Qe.z,0,-Qe.x,fn.z,0,-fn.x,-Je.y,Je.x,0,-Qe.y,Qe.x,0,-fn.y,fn.x,0];return!Nr(e,Pn,Fn,Dn,Ri)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,Pn,Fn,Dn,Ri))?!1:(Li.crossVectors(Je,Qe),e=[Li.x,Li.y,Li.z],Nr(e,Pn,Fn,Dn,Ri))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return dn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ve[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ve[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ve[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ve[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ve[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ve[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ve[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ve[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ve),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ve=[new U,new U,new U,new U,new U,new U,new U,new U],dn=new U,br=new Ai,Pn=new U,Fn=new U,Dn=new U,Je=new U,Qe=new U,fn=new U,hi=new U,Ri=new U,Li=new U,pn=new U;function Nr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pn.fromArray(s,r);const a=i.x*Math.abs(pn.x)+i.y*Math.abs(pn.y)+i.z*Math.abs(pn.z),c=t.dot(pn),l=e.dot(pn),u=n.dot(pn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const $l=new Ai,di=new U,Rr=new U;class ar{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$l.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;di.subVectors(t,this.center);const e=di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(di.copy(t.center).add(Rr)),this.expandByPoint(di.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const He=new U,Lr=new U,wi=new U,tn=new U,wr=new U,Pi=new U,Pr=new U;class lo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,He)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=He.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(He.copy(this.direction).multiplyScalar(e).add(this.origin),He.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Lr.copy(t).add(e).multiplyScalar(.5),wi.copy(e).sub(t).normalize(),tn.copy(this.origin).sub(Lr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wi),a=tn.dot(this.direction),c=-tn.dot(wi),l=tn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*c-a,h=o*a-c,x=r*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(wi).multiplyScalar(h).add(Lr),m}intersectSphere(t,e){He.subVectors(t.center,this.origin);const n=He.dot(this.direction),i=He.dot(He)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,He)!==null}intersectTriangle(t,e,n,i,r){wr.subVectors(e,t),Pi.subVectors(n,t),Pr.crossVectors(wr,Pi);let o=this.direction.dot(Pr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tn.subVectors(this.origin,t);const c=a*this.direction.dot(Pi.crossVectors(tn,Pi));if(c<0)return null;const l=a*this.direction.dot(wr.cross(tn));if(l<0||c+l>o)return null;const u=-a*tn.dot(Pr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,u,f,h,m,x,p,d){const E=this.elements;return E[0]=t,E[4]=e,E[8]=n,E[12]=i,E[1]=r,E[5]=o,E[9]=a,E[13]=c,E[2]=l,E[6]=u,E[10]=f,E[14]=h,E[3]=m,E[7]=x,E[11]=p,E[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/On.setFromMatrixColumn(t,0).length(),r=1/On.setFromMatrixColumn(t,1).length(),o=1/On.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,m=o*f,x=a*u,p=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+x*l,e[5]=h-p*l,e[9]=-a*c,e[2]=p-h*l,e[6]=x+m*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,m=c*f,x=l*u,p=l*f;e[0]=h+p*a,e[4]=x*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=p+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,m=c*f,x=l*u,p=l*f;e[0]=h-p*a,e[4]=-o*f,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=p-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,m=o*f,x=a*u,p=a*f;e[0]=c*u,e[4]=x*l-m,e[8]=h*l+p,e[1]=c*f,e[5]=p*l+h,e[9]=m*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,m=o*l,x=a*c,p=a*l;e[0]=c*u,e[4]=p-h*f,e[8]=x*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*f+x,e[10]=h-p*f}else if(t.order==="XZY"){const h=o*c,m=o*l,x=a*c,p=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+p,e[5]=o*u,e[9]=m*f-x,e[2]=x*f-m,e[6]=a*u,e[10]=p*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ul,t,Gl)}lookAt(t,e,n){const i=this.elements;return _e.subVectors(t,e),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),en.crossVectors(n,_e),en.lengthSq()===0&&(Math.abs(n.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),en.crossVectors(n,_e)),en.normalize(),Fi.crossVectors(_e,en),i[0]=en.x,i[4]=Fi.x,i[8]=_e.x,i[1]=en.y,i[5]=Fi.y,i[9]=_e.y,i[2]=en.z,i[6]=Fi.z,i[10]=_e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],x=n[2],p=n[6],d=n[10],E=n[14],v=n[3],I=n[7],M=n[11],g=n[15],N=i[0],P=i[4],S=i[8],y=i[12],w=i[1],O=i[5],q=i[9],b=i[13],R=i[2],z=i[6],V=i[10],Z=i[14],H=i[3],K=i[7],J=i[11],at=i[15];return r[0]=o*N+a*w+c*R+l*H,r[4]=o*P+a*O+c*z+l*K,r[8]=o*S+a*q+c*V+l*J,r[12]=o*y+a*b+c*Z+l*at,r[1]=u*N+f*w+h*R+m*H,r[5]=u*P+f*O+h*z+m*K,r[9]=u*S+f*q+h*V+m*J,r[13]=u*y+f*b+h*Z+m*at,r[2]=x*N+p*w+d*R+E*H,r[6]=x*P+p*O+d*z+E*K,r[10]=x*S+p*q+d*V+E*J,r[14]=x*y+p*b+d*Z+E*at,r[3]=v*N+I*w+M*R+g*H,r[7]=v*P+I*O+M*z+g*K,r[11]=v*S+I*q+M*V+g*J,r[15]=v*y+I*b+M*Z+g*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],m=t[14],x=t[3],p=t[7],d=t[11],E=t[15];return x*(+r*c*f-i*l*f-r*a*h+n*l*h+i*a*m-n*c*m)+p*(+e*c*m-e*l*h+r*o*h-i*o*m+i*l*u-r*c*u)+d*(+e*l*f-e*a*m-r*o*f+n*o*m+r*a*u-n*l*u)+E*(-i*a*u-e*c*f+e*a*h+i*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],m=t[11],x=t[12],p=t[13],d=t[14],E=t[15],v=f*d*l-p*h*l+p*c*m-a*d*m-f*c*E+a*h*E,I=x*h*l-u*d*l-x*c*m+o*d*m+u*c*E-o*h*E,M=u*p*l-x*f*l+x*a*m-o*p*m-u*a*E+o*f*E,g=x*f*c-u*p*c-x*a*h+o*p*h+u*a*d-o*f*d,N=e*v+n*I+i*M+r*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/N;return t[0]=v*P,t[1]=(p*h*r-f*d*r-p*i*m+n*d*m+f*i*E-n*h*E)*P,t[2]=(a*d*r-p*c*r+p*i*l-n*d*l-a*i*E+n*c*E)*P,t[3]=(f*c*r-a*h*r-f*i*l+n*h*l+a*i*m-n*c*m)*P,t[4]=I*P,t[5]=(u*d*r-x*h*r+x*i*m-e*d*m-u*i*E+e*h*E)*P,t[6]=(x*c*r-o*d*r-x*i*l+e*d*l+o*i*E-e*c*E)*P,t[7]=(o*h*r-u*c*r+u*i*l-e*h*l-o*i*m+e*c*m)*P,t[8]=M*P,t[9]=(x*f*r-u*p*r-x*n*m+e*p*m+u*n*E-e*f*E)*P,t[10]=(o*p*r-x*a*r+x*n*l-e*p*l-o*n*E+e*a*E)*P,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*m-e*a*m)*P,t[12]=g*P,t[13]=(u*p*i-x*f*i+x*n*h-e*p*h-u*n*d+e*f*d)*P,t[14]=(x*a*i-o*p*i-x*n*c+e*p*c+o*n*d-e*a*d)*P,t[15]=(o*f*i-u*a*i+u*n*c-e*f*c-o*n*h+e*a*h)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,m=r*u,x=r*f,p=o*u,d=o*f,E=a*f,v=c*l,I=c*u,M=c*f,g=n.x,N=n.y,P=n.z;return i[0]=(1-(p+E))*g,i[1]=(m+M)*g,i[2]=(x-I)*g,i[3]=0,i[4]=(m-M)*N,i[5]=(1-(h+E))*N,i[6]=(d+v)*N,i[7]=0,i[8]=(x+I)*P,i[9]=(d-v)*P,i[10]=(1-(h+p))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=On.set(i[0],i[1],i[2]).length();const o=On.set(i[4],i[5],i[6]).length(),a=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],be.copy(this);const l=1/r,u=1/o,f=1/a;return be.elements[0]*=l,be.elements[1]*=l,be.elements[2]*=l,be.elements[4]*=u,be.elements[5]*=u,be.elements[6]*=u,be.elements[8]*=f,be.elements[9]*=f,be.elements[10]*=f,e.setFromRotationMatrix(be),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),f=(e+t)*c,h=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const On=new U,be=new qt,Ul=new U(0,0,0),Gl=new U(1,1,1),en=new U,Fi=new U,_e=new U,ra=new qt,sa=new An;class or{constructor(t=0,e=0,n=0,i=or.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ra.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ra,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sa.setFromEuler(this),this.setFromQuaternion(sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zl=0;const aa=new U,$n=new An,ke=new qt,Di=new U,fi=new U,Bl=new U,Vl=new An,oa=new U(1,0,0),la=new U(0,1,0),ca=new U(0,0,1),Hl={type:"added"},ua={type:"removed"};class se extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=se.DEFAULT_UP.clone();const t=new U,e=new or,n=new An,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new Se}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(oa,t)}rotateY(t){return this.rotateOnAxis(la,t)}rotateZ(t){return this.rotateOnAxis(ca,t)}translateOnAxis(t,e){return aa.copy(t).applyQuaternion(this.quaternion),this.position.add(aa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oa,t)}translateY(t){return this.translateOnAxis(la,t)}translateZ(t){return this.translateOnAxis(ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Di.copy(t):Di.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ke.lookAt(fi,Di,this.up):ke.lookAt(Di,fi,this.up),this.quaternion.setFromRotationMatrix(ke),i&&(ke.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(ke),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ua)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ua)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(ke),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,t,Bl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,Vl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}se.DEFAULT_UP=new U(0,1,0);se.DEFAULT_MATRIX_AUTO_UPDATE=!0;se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new U,We=new U,Fr=new U,Xe=new U,Un=new U,Gn=new U,ha=new U,Dr=new U,Or=new U,$r=new U;class Ye{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ne.subVectors(t,e),i.cross(Ne);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ne.subVectors(i,e),We.subVectors(n,e),Fr.subVectors(t,e);const o=Ne.dot(Ne),a=Ne.dot(We),c=Ne.dot(Fr),l=We.dot(We),u=We.dot(Fr),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(l*c-a*u)*h,x=(o*u-a*c)*h;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xe),Xe.x>=0&&Xe.y>=0&&Xe.x+Xe.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Xe),c.set(0,0),c.addScaledVector(r,Xe.x),c.addScaledVector(o,Xe.y),c.addScaledVector(a,Xe.z),c}static isFrontFacing(t,e,n,i){return Ne.subVectors(n,e),We.subVectors(t,e),Ne.cross(We).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ne.subVectors(this.c,this.b),We.subVectors(this.a,this.b),Ne.cross(We).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Ye.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Un.subVectors(i,n),Gn.subVectors(r,n),Dr.subVectors(t,n);const c=Un.dot(Dr),l=Gn.dot(Dr);if(c<=0&&l<=0)return e.copy(n);Or.subVectors(t,i);const u=Un.dot(Or),f=Gn.dot(Or);if(u>=0&&f<=u)return e.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Un,o);$r.subVectors(t,r);const m=Un.dot($r),x=Gn.dot($r);if(x>=0&&m<=x)return e.copy(r);const p=m*l-c*x;if(p<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(Gn,a);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return ha.subVectors(r,i),a=(f-u)/(f-u+(m-x)),e.copy(i).addScaledVector(ha,a);const E=1/(d+p+h);return o=p*E,a=h*E,e.copy(n).addScaledVector(Un,o).addScaledVector(Gn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let kl=0;class ai extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Zn,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ka,this.blendDst=Ja,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uo extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yt=new U,Oi=new vt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oi.fromBufferAttribute(this,e),Oi.applyMatrix3(t),this.setXY(e,Oi.x,Oi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ho extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fo extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wl=0;const Ce=new qt,Ur=new se,zn=new U,xe=new Ai,pi=new Ai,ee=new U;class Ge extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(io(t)?fo:ho)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];xe.setFromBufferAttribute(r),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,xe.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,xe.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(xe.min),this.boundingBox.expandByPoint(xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(ee.addVectors(xe.min,pi.min),xe.expandByPoint(ee),ee.addVectors(xe.max,pi.max),xe.expandByPoint(ee)):(xe.expandByPoint(pi.min),xe.expandByPoint(pi.max))}xe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ee.fromBufferAttribute(a,l),c&&(zn.fromBufferAttribute(t,l),ee.add(zn)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new U,u[w]=new U;const f=new U,h=new U,m=new U,x=new vt,p=new vt,d=new vt,E=new U,v=new U;function I(w,O,q){f.fromArray(i,w*3),h.fromArray(i,O*3),m.fromArray(i,q*3),x.fromArray(o,w*2),p.fromArray(o,O*2),d.fromArray(o,q*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const b=1/(p.x*d.y-d.x*p.y);isFinite(b)&&(E.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(b),v.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(b),l[w].add(E),l[O].add(E),l[q].add(E),u[w].add(v),u[O].add(v),u[q].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,O=M.length;w<O;++w){const q=M[w],b=q.start,R=q.count;for(let z=b,V=b+R;z<V;z+=3)I(n[z+0],n[z+1],n[z+2])}const g=new U,N=new U,P=new U,S=new U;function y(w){P.fromArray(r,w*3),S.copy(P);const O=l[w];g.copy(O),g.sub(P.multiplyScalar(P.dot(O))).normalize(),N.crossVectors(S,O);const b=N.dot(u[w])<0?-1:1;c[w*4]=g.x,c[w*4+1]=g.y,c[w*4+2]=g.z,c[w*4+3]=b}for(let w=0,O=M.length;w<O;++w){const q=M[w],b=q.start,R=q.count;for(let z=b,V=b+R;z<V;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,f=new U;if(t)for(let h=0,m=t.count;h<m;h+=3){const x=t.getX(h+0),p=t.getX(h+1),d=t.getX(h+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,x=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let E=0;E<u;E++)h[x++]=l[m++]}return new Oe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=t(h,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new qt,Bn=new lo,Gr=new ar,mi=new U,gi=new U,Ei=new U,zr=new U,$i=new U,Ui=new vt,Gi=new vt,zi=new vt,Br=new U,Bi=new U;class qe extends se{constructor(t=new Ge,e=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){$i.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(zr.fromBufferAttribute(f,t),o?$i.addScaledVector(zr,u):$i.addScaledVector(zr.sub(e),u))}e.add($i)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),t.ray.intersectsSphere(Gr)===!1)||(da.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(da),n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=i[p.materialIndex],E=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let I=E,M=v;I<M;I+=3){const g=a.getX(I),N=a.getX(I+1),P=a.getX(I+2);o=Vi(this,d,t,Bn,l,u,g,N,P),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const E=a.getX(p),v=a.getX(p+1),I=a.getX(p+2);o=Vi(this,i,t,Bn,l,u,E,v,I),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=i[p.materialIndex],E=Math.max(p.start,h.start),v=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let I=E,M=v;I<M;I+=3){const g=I,N=I+1,P=I+2;o=Vi(this,d,t,Bn,l,u,g,N,P),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const E=p,v=p+1,I=p+2;o=Vi(this,i,t,Bn,l,u,E,v,I),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function Xl(s,t,e,n,i,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===an,a),c===null)return null;Bi.copy(a),Bi.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Bi);return l<e.near||l>e.far?null:{distance:l,point:Bi.clone(),object:s}}function Vi(s,t,e,n,i,r,o,a,c){s.getVertexPosition(o,mi),s.getVertexPosition(a,gi),s.getVertexPosition(c,Ei);const l=Xl(s,t,e,n,mi,gi,Ei,Br);if(l){i&&(Ui.fromBufferAttribute(i,o),Gi.fromBufferAttribute(i,a),zi.fromBufferAttribute(i,c),l.uv=Ye.getUV(Br,mi,gi,Ei,Ui,Gi,zi,new vt)),r&&(Ui.fromBufferAttribute(r,o),Gi.fromBufferAttribute(r,a),zi.fromBufferAttribute(r,c),l.uv2=Ye.getUV(Br,mi,gi,Ei,Ui,Gi,zi,new vt));const u={a:o,b:a,c,normal:new U,materialIndex:0};Ye.getNormal(mi,gi,Ei,u.normal),l.face=u}return l}class oi extends Ge{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2));function x(p,d,E,v,I,M,g,N,P,S,y){const w=M/P,O=g/S,q=M/2,b=g/2,R=N/2,z=P+1,V=S+1;let Z=0,H=0;const K=new U;for(let J=0;J<V;J++){const at=J*O-b;for(let $=0;$<z;$++){const X=$*w-q;K[p]=X*v,K[d]=at*I,K[E]=R,l.push(K.x,K.y,K.z),K[p]=0,K[d]=0,K[E]=N>0?1:-1,u.push(K.x,K.y,K.z),f.push($/P),f.push(1-J/S),Z+=1}}for(let J=0;J<S;J++)for(let at=0;at<P;at++){const $=h+at+z*J,X=h+at+z*(J+1),tt=h+(at+1)+z*(J+1),it=h+(at+1)+z*J;c.push($,X,it),c.push(X,tt,it),H+=6}a.addGroup(m,H,y),m+=H,h+=Z}}static fromJSON(t){return new oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ii(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function he(s){const t={};for(let e=0;e<s.length;e++){const n=ii(s[e]);for(const i in n)t[i]=n[i]}return t}function Yl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function po(s){return s.getRenderTarget()===null&&s.outputEncoding===Gt?Fe:Mi}const ql={clone:ii,merge:he};var jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jl,this.fragmentShader=Zl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ii(t.uniforms),this.uniformsGroups=Yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mo extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ae extends mo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vn=-90,Hn=1;class Kl extends se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ae(Vn,Hn,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ae(Vn,Hn,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Ae(Vn,Hn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ae(Vn,Hn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Ae(Vn,Hn,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ae(Vn,Hn,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=Ze,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class go extends Te{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ti,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jl extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new go(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:rn});r.uniforms.tEquirect.value=e;const o=new qe(i,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=ve),new Kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Vr=new U,Ql=new U,tc=new Se;class mn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vr.subVectors(n,e).cross(Ql.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tc.getNormalMatrix(t),i=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new ar,Hi=new U;class hs{constructor(t=new mn,e=new mn,n=new mn,i=new mn,r=new mn,o=new mn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],x=n[10],p=n[11],d=n[12],E=n[13],v=n[14],I=n[15];return e[0].setComponents(a-i,f-c,p-h,I-d).normalize(),e[1].setComponents(a+i,f+c,p+h,I+d).normalize(),e[2].setComponents(a+r,f+l,p+m,I+E).normalize(),e[3].setComponents(a-r,f-l,p-m,I-E).normalize(),e[4].setComponents(a-o,f-u,p-x,I-v).normalize(),e[5].setComponents(a+o,f+u,p+x,I+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hi.x=i.normal.x>0?t.max.x:t.min.x,Hi.y=i.normal.y>0?t.max.y:t.min.y,Hi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ec(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,m=u.updateRange;s.bindBuffer(f,l),m.count===-1?s.bufferSubData(f,0,h):(e?s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class ds extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=t/a,h=e/c,m=[],x=[],p=[],d=[];for(let E=0;E<u;E++){const v=E*h-o;for(let I=0;I<l;I++){const M=I*f-r;x.push(M,-v,0),p.push(0,0,1),d.push(I/a),d.push(1-E/c)}}for(let E=0;E<c;E++)for(let v=0;v<a;v++){const I=v+l*E,M=v+l*(E+1),g=v+1+l*(E+1),N=v+1+l*E;m.push(I,M,N),m.push(M,g,N)}this.setIndex(m),this.setAttribute("position",new Pe(x,3)),this.setAttribute("normal",new Pe(p,3)),this.setAttribute("uv",new Pe(d,2))}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var nc=`#ifdef USE_ALPHAMAP
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
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ic=`#define PI 3.141592653589793
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
}`,Tc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mc=`vec3 transformedNormal = objectNormal;
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
#endif`,Cc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wc=`#ifdef USE_ENVMAP
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
#endif`,Pc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fc=`#ifdef USE_ENVMAP
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
#endif`,Dc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$c=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gc=`#ifdef USE_GRADIENTMAP
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
}`,zc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bc=`#ifdef USE_LIGHTMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kc=`uniform bool receiveShadow;
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
#endif`,Wc=`#if defined( USE_ENVMAP )
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
material.diffuseColor = diffuseColor.rgb;`,Yc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qc=`BlinnPhongMaterial material;
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
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
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
#endif`,Iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Au=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,$u=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uu=`#ifdef USE_SKINNING
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
#endif`,Gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
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
#endif`,Bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ku=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wu=`#ifdef USE_TRANSMISSION
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
#endif`,Yu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qu=`#ifdef USE_UV
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
}`,Eh=`#define LAMBERT
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
}`,_h=`#define MATCAP
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
}`,xh=`#define MATCAP
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
}`,Sh=`#define NORMAL
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
}`,Ih=`#define NORMAL
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
}`,Th=`#define PHONG
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
}`,Mh=`#define PHONG
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
}`,Ch=`#define STANDARD
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
}`,vh=`#define STANDARD
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
}`,Ah=`#define TOON
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
}`,yh=`#define TOON
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
}`,bh=`uniform float size;
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
}`,Nh=`uniform vec3 diffuse;
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
}`,Rh=`#include <common>
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
}`,Lh=`uniform vec3 color;
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
}`,wh=`uniform float rotation;
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
}`,Ph=`uniform vec3 diffuse;
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
}`,Ct={alphamap_fragment:nc,alphamap_pars_fragment:ic,alphatest_fragment:rc,alphatest_pars_fragment:sc,aomap_fragment:ac,aomap_pars_fragment:oc,begin_vertex:lc,beginnormal_vertex:cc,bsdfs:uc,iridescence_fragment:hc,bumpmap_pars_fragment:dc,clipping_planes_fragment:fc,clipping_planes_pars_fragment:pc,clipping_planes_pars_vertex:mc,clipping_planes_vertex:gc,color_fragment:Ec,color_pars_fragment:_c,color_pars_vertex:xc,color_vertex:Sc,common:Ic,cube_uv_reflection_fragment:Tc,defaultnormal_vertex:Mc,displacementmap_pars_vertex:Cc,displacementmap_vertex:vc,emissivemap_fragment:Ac,emissivemap_pars_fragment:yc,encodings_fragment:bc,encodings_pars_fragment:Nc,envmap_fragment:Rc,envmap_common_pars_fragment:Lc,envmap_pars_fragment:wc,envmap_pars_vertex:Pc,envmap_physical_pars_fragment:Wc,envmap_vertex:Fc,fog_vertex:Dc,fog_pars_vertex:Oc,fog_fragment:$c,fog_pars_fragment:Uc,gradientmap_pars_fragment:Gc,lightmap_fragment:zc,lightmap_pars_fragment:Bc,lights_lambert_fragment:Vc,lights_lambert_pars_fragment:Hc,lights_pars_begin:kc,lights_toon_fragment:Xc,lights_toon_pars_fragment:Yc,lights_phong_fragment:qc,lights_phong_pars_fragment:jc,lights_physical_fragment:Zc,lights_physical_pars_fragment:Kc,lights_fragment_begin:Jc,lights_fragment_maps:Qc,lights_fragment_end:tu,logdepthbuf_fragment:eu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:ru,map_fragment:su,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:uu,morphcolor_vertex:hu,morphnormal_vertex:du,morphtarget_pars_vertex:fu,morphtarget_vertex:pu,normal_fragment_begin:mu,normal_fragment_maps:gu,normal_pars_fragment:Eu,normal_pars_vertex:_u,normal_vertex:xu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Iu,clearcoat_normal_fragment_maps:Tu,clearcoat_pars_fragment:Mu,iridescence_pars_fragment:Cu,output_fragment:vu,packing:Au,premultiplied_alpha_fragment:yu,project_vertex:bu,dithering_fragment:Nu,dithering_pars_fragment:Ru,roughnessmap_fragment:Lu,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Pu,shadowmap_pars_vertex:Fu,shadowmap_vertex:Du,shadowmask_pars_fragment:Ou,skinbase_vertex:$u,skinning_pars_vertex:Uu,skinning_vertex:Gu,skinnormal_vertex:zu,specularmap_fragment:Bu,specularmap_pars_fragment:Vu,tonemapping_fragment:Hu,tonemapping_pars_fragment:ku,transmission_fragment:Wu,transmission_pars_fragment:Xu,uv_pars_fragment:Yu,uv_pars_vertex:qu,uv_vertex:ju,uv2_pars_fragment:Zu,uv2_pars_vertex:Ku,uv2_vertex:Ju,worldpos_vertex:Qu,background_vert:th,background_frag:eh,backgroundCube_vert:nh,backgroundCube_frag:ih,cube_vert:rh,cube_frag:sh,depth_vert:ah,depth_frag:oh,distanceRGBA_vert:lh,distanceRGBA_frag:ch,equirect_vert:uh,equirect_frag:hh,linedashed_vert:dh,linedashed_frag:fh,meshbasic_vert:ph,meshbasic_frag:mh,meshlambert_vert:gh,meshlambert_frag:Eh,meshmatcap_vert:_h,meshmatcap_frag:xh,meshnormal_vert:Sh,meshnormal_frag:Ih,meshphong_vert:Th,meshphong_frag:Mh,meshphysical_vert:Ch,meshphysical_frag:vh,meshtoon_vert:Ah,meshtoon_frag:yh,points_vert:bh,points_frag:Nh,shadow_vert:Rh,shadow_frag:Lh,sprite_vert:wh,sprite_frag:Ph},st={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Se},uv2Transform:{value:new Se},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Se}}},De={basic:{uniforms:he([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:he([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:he([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:he([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:he([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:he([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:he([st.points,st.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:he([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:he([st.common,st.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:he([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:he([st.sprite,st.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:he([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:he([st.lights,st.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};De.physical={uniforms:he([De.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new vt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const ki={r:0,b:0,g:0};function Fh(s,t,e,n,i,r,o){const a=new Ut(0);let c=r===!0?0:1,l,u,f=null,h=0,m=null;function x(d,E){let v=!1,I=E.isScene===!0?E.background:null;I&&I.isTexture&&(I=(E.backgroundBlurriness>0?e:t).get(I));const M=s.xr,g=M.getSession&&M.getSession();g&&g.environmentBlendMode==="additive"&&(I=null),I===null?p(a,c):I&&I.isColor&&(p(I,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),I&&(I.isCubeTexture||I.mapping===sr)?(u===void 0&&(u=new qe(new oi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ii(De.backgroundCube.uniforms),vertexShader:De.backgroundCube.vertexShader,fragmentShader:De.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,P,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=I.encoding!==Gt,(f!==I||h!==I.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,m=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new qe(new ds(2,2),new yn({name:"BackgroundMaterial",uniforms:ii(De.background.uniforms),vertexShader:De.background.vertexShader,fragmentShader:De.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=I.encoding!==Gt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,f=I,h=I.version,m=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,E){d.getRGB(ki,po(s)),n.buffers.color.setClear(ki.r,ki.g,ki.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(d,E=1){a.set(d),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:x}}function Dh(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=d(null);let l=c,u=!1;function f(R,z,V,Z,H){let K=!1;if(o){const J=p(Z,V,z);l!==J&&(l=J,m(l.object)),K=E(R,Z,V,H),K&&v(R,Z,V,H)}else{const J=z.wireframe===!0;(l.geometry!==Z.id||l.program!==V.id||l.wireframe!==J)&&(l.geometry=Z.id,l.program=V.id,l.wireframe=J,K=!0)}H!==null&&e.update(H,34963),(K||u)&&(u=!1,S(R,z,V,Z),H!==null&&s.bindBuffer(34963,e.get(H).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function x(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,z,V){const Z=V.wireframe===!0;let H=a[R.id];H===void 0&&(H={},a[R.id]=H);let K=H[z.id];K===void 0&&(K={},H[z.id]=K);let J=K[Z];return J===void 0&&(J=d(h()),K[Z]=J),J}function d(R){const z=[],V=[],Z=[];for(let H=0;H<i;H++)z[H]=0,V[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:Z,object:R,attributes:{},index:null}}function E(R,z,V,Z){const H=l.attributes,K=z.attributes;let J=0;const at=V.getAttributes();for(const $ in at)if(at[$].location>=0){const tt=H[$];let it=K[$];if(it===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),tt===void 0||tt.attribute!==it||it&&tt.data!==it.data)return!0;J++}return l.attributesNum!==J||l.index!==Z}function v(R,z,V,Z){const H={},K=z.attributes;let J=0;const at=V.getAttributes();for(const $ in at)if(at[$].location>=0){let tt=K[$];tt===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor));const it={};it.attribute=tt,tt&&tt.data&&(it.data=tt.data),H[$]=it,J++}l.attributes=H,l.attributesNum=J,l.index=Z}function I(){const R=l.newAttributes;for(let z=0,V=R.length;z<V;z++)R[z]=0}function M(R){g(R,0)}function g(R,z){const V=l.newAttributes,Z=l.enabledAttributes,H=l.attributeDivisors;V[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),H[R]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,z),H[R]=z)}function N(){const R=l.newAttributes,z=l.enabledAttributes;for(let V=0,Z=z.length;V<Z;V++)z[V]!==R[V]&&(s.disableVertexAttribArray(V),z[V]=0)}function P(R,z,V,Z,H,K){n.isWebGL2===!0&&(V===5124||V===5125)?s.vertexAttribIPointer(R,z,V,H,K):s.vertexAttribPointer(R,z,V,Z,H,K)}function S(R,z,V,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;I();const H=Z.attributes,K=V.getAttributes(),J=z.defaultAttributeValues;for(const at in K){const $=K[at];if($.location>=0){let X=H[at];if(X===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){const tt=X.normalized,it=X.itemSize,B=e.get(X);if(B===void 0)continue;const It=B.buffer,pt=B.type,ft=B.bytesPerElement;if(X.isInterleavedBufferAttribute){const ot=X.data,Lt=ot.stride,Tt=X.offset;if(ot.isInstancedInterleavedBuffer){for(let _t=0;_t<$.locationSize;_t++)g($.location+_t,ot.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let _t=0;_t<$.locationSize;_t++)M($.location+_t);s.bindBuffer(34962,It);for(let _t=0;_t<$.locationSize;_t++)P($.location+_t,it/$.locationSize,pt,tt,Lt*ft,(Tt+it/$.locationSize*_t)*ft)}else{if(X.isInstancedBufferAttribute){for(let ot=0;ot<$.locationSize;ot++)g($.location+ot,X.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ot=0;ot<$.locationSize;ot++)M($.location+ot);s.bindBuffer(34962,It);for(let ot=0;ot<$.locationSize;ot++)P($.location+ot,it/$.locationSize,pt,tt,it*ft,it/$.locationSize*ot*ft)}}else if(J!==void 0){const tt=J[at];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv($.location,tt);break;case 3:s.vertexAttrib3fv($.location,tt);break;case 4:s.vertexAttrib4fv($.location,tt);break;default:s.vertexAttrib1fv($.location,tt)}}}}N()}function y(){q();for(const R in a){const z=a[R];for(const V in z){const Z=z[V];for(const H in Z)x(Z[H].object),delete Z[H];delete z[V]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;const z=a[R.id];for(const V in z){const Z=z[V];for(const H in Z)x(Z[H].object),delete Z[H];delete z[V]}delete a[R.id]}function O(R){for(const z in a){const V=a[z];if(V[R.id]===void 0)continue;const Z=V[R.id];for(const H in Z)x(Z[H].object),delete Z[H];delete V[R.id]}}function q(){b(),u=!0,l!==c&&(l=c,m(l.object))}function b(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:q,resetDefaultState:b,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:I,enableAttribute:M,disableUnusedAttributes:N}}function Oh(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,m;if(i)h=s,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,l,u,f),e.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function $h(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),m=s.getParameter(3379),x=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),E=s.getParameter(36348),v=s.getParameter(36349),I=h>0,M=o||t.has("OES_texture_float"),g=I&&M,N=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:I,floatFragmentTextures:M,floatVertexTextures:g,maxSamples:N}}function Uh(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new mn,a=new Se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,E=s.get(f);if(!i||x===null||x.length===0||r&&!d)r?u(null):l();else{const v=r?0:n,I=v*4;let M=E.clippingState||null;c.value=M,M=u(x,h,I,m);for(let g=0;g!==I;++g)M[g]=e[g];E.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,x!==!0||d===null){const E=m+p*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<E)&&(d=new Float32Array(E));for(let I=0,M=m;I!==p;++I,M+=4)o.copy(f[I]).applyMatrix4(v,a),o.normal.toArray(d,M),d[M+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function Gh(s){let t=new WeakMap;function e(o,a){return a===es?o.mapping=ti:a===ns&&(o.mapping=ei),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===es||a===ns)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class _o extends mo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const jn=4,fa=[.125,.215,.35,.446,.526,.582],En=20,Hr=new _o,pa=new Ut;let kr=null;const gn=(1+Math.sqrt(5))/2,Wn=1/gn,ma=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,gn,Wn),new U(0,gn,-Wn),new U(Wn,0,gn),new U(-Wn,0,gn),new U(gn,Wn,0),new U(-gn,Wn,0)];class ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){kr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr),t.scissorTest=!1,Wi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ve,minFilter:ve,generateMipmaps:!1,type:Ti,format:Le,encoding:Cn,depthBuffer:!1},i=Ea(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(r)),this._blurMaterial=Bh(r,t,e)}return i}_compileMaterial(t){const e=new qe(this._lodPlanes[0],t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,i){const a=new Ae(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pa),u.toneMapping=Ze,u.autoClear=!1;const m=new uo({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),x=new qe(new oi,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(pa),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(a.up.set(0,c[E],0),a.lookAt(l[E],0,0)):v===1?(a.up.set(0,0,c[E]),a.lookAt(0,l[E],0)):(a.up.set(0,c[E],0),a.lookAt(0,0,l[E]));const I=this._cubeSize;Wi(i,v*I,E>2?I:0,I,I),u.setRenderTarget(i),p&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ti||t.mapping===ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_a());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Wi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ma[(i-1)%ma.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new qe(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*En-1),p=r/x,d=isFinite(r)?1+Math.floor(u*p):En;d>En&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${En}`);const E=[];let v=0;for(let P=0;P<En;++P){const S=P/p,y=Math.exp(-S*S/2);E.push(y),P===0?v+=y:P<d&&(v+=2*y)}for(let P=0;P<E.length;P++)E[P]=E[P]/v;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=E,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:I}=this;h.dTheta.value=x,h.mipInt.value=I-n;const M=this._sizeLods[i],g=3*M*(i>I-jn?i-I+jn:0),N=4*(this._cubeSize-M);Wi(e,g,N,3*M,2*M),c.setRenderTarget(e),c.render(f,Hr)}}function zh(s){const t=[],e=[],n=[];let i=s;const r=s-jn+1+fa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-jn?c=fa[o-s+jn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,E=1,v=new Float32Array(p*x*m),I=new Float32Array(d*x*m),M=new Float32Array(E*x*m);for(let N=0;N<m;N++){const P=N%3*2/3-1,S=N>2?0:-1,y=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];v.set(y,p*x*N),I.set(h,d*x*N);const w=[N,N,N,N,N,N];M.set(w,E*x*N)}const g=new Ge;g.setAttribute("position",new Oe(v,p)),g.setAttribute("uv",new Oe(I,d)),g.setAttribute("faceIndex",new Oe(M,E)),t.push(g),i>jn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ea(s,t,e){const n=new vn(s,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Bh(s,t,e){const n=new Float32Array(En),i=new U(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fs(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function _a(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fs(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function xa(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fs(),fragmentShader:`

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
	`}function Vh(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===es||c===ns,u=c===ti||c===ei;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new ga(s)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new ga(s));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hh(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kh(s,t,e,n){const i={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const x in h)t.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,E=p.length;d<E;d++)t.update(p[d],34962)}}function l(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let I=0,M=v.length;I<M;I+=3){const g=v[I+0],N=v[I+1],P=v[I+2];h.push(g,N,N,P,P,g)}}else{const v=x.array;p=x.version;for(let I=0,M=v.length/3-1;I<M;I+=3){const g=I+0,N=I+1,P=I+2;h.push(g,N,N,P,P,g)}}const d=new(io(h)?fo:ho)(h,1);d.version=p;const E=r.get(f);E&&t.remove(E),r.set(f,d)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Wh(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,m){s.drawElements(r,m,a,h*c),e.update(m,r,1)}function f(h,m,x){if(x===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,h*c,x),e.update(m,r,x)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Xh(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Yh(s,t){return s[0]-t[0]}function qh(s,t){return Math.abs(t[1])-Math.abs(s[1])}function jh(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ne,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let E=r.get(u);if(E===void 0||E.count!==d){let V=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var x=V;E!==void 0&&E.texture.dispose();const M=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,N=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let w=0;M===!0&&(w=1),g===!0&&(w=2),N===!0&&(w=3);let O=u.attributes.position.count*w,q=1;O>t.maxTextureSize&&(q=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const b=new Float32Array(O*q*4*d),R=new oo(b,O,q,d);R.type=xn,R.needsUpdate=!0;const z=w*4;for(let Z=0;Z<d;Z++){const H=P[Z],K=S[Z],J=y[Z],at=O*q*4*Z;for(let $=0;$<H.count;$++){const X=$*z;M===!0&&(o.fromBufferAttribute(H,$),b[at+X+0]=o.x,b[at+X+1]=o.y,b[at+X+2]=o.z,b[at+X+3]=0),g===!0&&(o.fromBufferAttribute(K,$),b[at+X+4]=o.x,b[at+X+5]=o.y,b[at+X+6]=o.z,b[at+X+7]=0),N===!0&&(o.fromBufferAttribute(J,$),b[at+X+8]=o.x,b[at+X+9]=o.y,b[at+X+10]=o.z,b[at+X+11]=J.itemSize===4?o.w:1)}}E={count:d,texture:R,size:new vt(O,q)},r.set(u,E),u.addEventListener("dispose",V)}let v=0;for(let M=0;M<m.length;M++)v+=m[M];const I=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",I),h.getUniforms().setValue(s,"morphTargetInfluences",m),h.getUniforms().setValue(s,"morphTargetsTexture",E.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",E.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let g=0;g<p;g++)d[g]=[g,0];n[u.id]=d}for(let g=0;g<p;g++){const N=d[g];N[0]=g,N[1]=m[g]}d.sort(qh);for(let g=0;g<8;g++)g<p&&d[g][1]?(a[g][0]=d[g][0],a[g][1]=d[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Yh);const E=u.morphAttributes.position,v=u.morphAttributes.normal;let I=0;for(let g=0;g<8;g++){const N=a[g],P=N[0],S=N[1];P!==Number.MAX_SAFE_INTEGER&&S?(E&&u.getAttribute("morphTarget"+g)!==E[P]&&u.setAttribute("morphTarget"+g,E[P]),v&&u.getAttribute("morphNormal"+g)!==v[P]&&u.setAttribute("morphNormal"+g,v[P]),i[g]=S,I+=S):(E&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),v&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),i[g]=0)}const M=u.morphTargetsRelative?1:1-I;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zh(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);return i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const xo=new Te,So=new oo,Io=new Ol,To=new go,Sa=[],Ia=[],Ta=new Float32Array(16),Ma=new Float32Array(9),Ca=new Float32Array(4);function li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Sa[i];if(r===void 0&&(r=new Float32Array(i),Sa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Zt(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Kt(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lr(s,t){let e=Ia[t];e===void 0&&(e=new Int32Array(t),Ia[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Kh(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;s.uniform2fv(this.addr,t),Kt(e,t)}}function Qh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Zt(e,t))return;s.uniform3fv(this.addr,t),Kt(e,t)}}function td(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;s.uniform4fv(this.addr,t),Kt(e,t)}}function ed(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Kt(e,t)}else{if(Zt(e,n))return;Ca.set(n),s.uniformMatrix2fv(this.addr,!1,Ca),Kt(e,n)}}function nd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Kt(e,t)}else{if(Zt(e,n))return;Ma.set(n),s.uniformMatrix3fv(this.addr,!1,Ma),Kt(e,n)}}function id(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Kt(e,t)}else{if(Zt(e,n))return;Ta.set(n),s.uniformMatrix4fv(this.addr,!1,Ta),Kt(e,n)}}function rd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;s.uniform2iv(this.addr,t),Kt(e,t)}}function ad(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Zt(e,t))return;s.uniform3iv(this.addr,t),Kt(e,t)}}function od(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;s.uniform4iv(this.addr,t),Kt(e,t)}}function ld(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;s.uniform2uiv(this.addr,t),Kt(e,t)}}function ud(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Zt(e,t))return;s.uniform3uiv(this.addr,t),Kt(e,t)}}function hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;s.uniform4uiv(this.addr,t),Kt(e,t)}}function dd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||xo,i)}function fd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Io,i)}function pd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||To,i)}function md(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||So,i)}function gd(s){switch(s){case 5126:return Kh;case 35664:return Jh;case 35665:return Qh;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return ud;case 36296:return hd;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function Ed(s,t){s.uniform1fv(this.addr,t)}function _d(s,t){const e=li(t,this.size,2);s.uniform2fv(this.addr,e)}function xd(s,t){const e=li(t,this.size,3);s.uniform3fv(this.addr,e)}function Sd(s,t){const e=li(t,this.size,4);s.uniform4fv(this.addr,e)}function Id(s,t){const e=li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Td(s,t){const e=li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Md(s,t){const e=li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cd(s,t){s.uniform1iv(this.addr,t)}function vd(s,t){s.uniform2iv(this.addr,t)}function Ad(s,t){s.uniform3iv(this.addr,t)}function yd(s,t){s.uniform4iv(this.addr,t)}function bd(s,t){s.uniform1uiv(this.addr,t)}function Nd(s,t){s.uniform2uiv(this.addr,t)}function Rd(s,t){s.uniform3uiv(this.addr,t)}function Ld(s,t){s.uniform4uiv(this.addr,t)}function wd(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||xo,r[o])}function Pd(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Io,r[o])}function Fd(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||To,r[o])}function Dd(s,t,e){const n=this.cache,i=t.length,r=lr(e,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||So,r[o])}function Od(s){switch(s){case 5126:return Ed;case 35664:return _d;case 35665:return xd;case 35666:return Sd;case 35674:return Id;case 35675:return Td;case 35676:return Md;case 5124:case 35670:return Cd;case 35667:case 35671:return vd;case 35668:case 35672:return Ad;case 35669:case 35673:return yd;case 5125:return bd;case 36294:return Nd;case 36295:return Rd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Dd}}class $d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=gd(e.type)}}class Ud{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Od(e.type)}}class Gd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function va(s,t){s.seq.push(t),s.map[t.id]=t}function zd(s,t,e){const n=s.name,i=n.length;for(Wr.lastIndex=0;;){const r=Wr.exec(n),o=Wr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){va(e,l===void 0?new $d(a,s,t):new Ud(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Gd(a),va(e,f)),e=f}}}class Zi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);zd(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Aa(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Bd=0;function Vd(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Hd(s){switch(s){case Cn:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function ya(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vd(s.getShaderSource(t),o)}else return i}function kd(s,t){const e=Hd(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Wd(s,t){let e;switch(t){case cl:e="Linear";break;case ul:e="Reinhard";break;case hl:e="OptimizedCineon";break;case dl:e="ACESFilmic";break;case fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function Yd(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qd(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Si(s){return s!==""}function ba(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Na(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(s){return s.replace(jd,Zd)}function Zd(s,t){const e=Ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return os(e)}const Kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ra(s){return s.replace(Kd,Jd)}function Jd(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function La(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qd(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Za?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function tf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ti:case ei:t="ENVMAP_TYPE_CUBE";break;case sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ef(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ei:t="ENVMAP_MODE_REFRACTION";break}return t}function nf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qa:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case ll:t="ENVMAP_BLENDING_ADD";break}return t}function rf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sf(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Qd(e),l=tf(e),u=ef(e),f=nf(e),h=rf(e),m=e.isWebGL2?"":Xd(e),x=Yd(r),p=i.createProgram();let d,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[x].filter(Si).join(`
`),d.length>0&&(d+=`
`),E=[m,x].filter(Si).join(`
`),E.length>0&&(E+=`
`)):(d=[La(e),"#define SHADER_NAME "+e.shaderName,x,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),E=[m,La(e),"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ze?"#define TONE_MAPPING":"",e.toneMapping!==Ze?Ct.tonemapping_pars_fragment:"",e.toneMapping!==Ze?Wd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.encodings_pars_fragment,kd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Si).join(`
`)),o=os(o),o=ba(o,e),o=Na(o,e),a=os(a),a=ba(a,e),a=Na(a,e),o=Ra(o),a=Ra(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["#define varying in",e.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const I=v+d+o,M=v+E+a,g=Aa(i,35633,I),N=Aa(i,35632,M);if(i.attachShader(p,g),i.attachShader(p,N),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const y=i.getProgramInfoLog(p).trim(),w=i.getShaderInfoLog(g).trim(),O=i.getShaderInfoLog(N).trim();let q=!0,b=!0;if(i.getProgramParameter(p,35714)===!1){q=!1;const R=ya(i,g,"vertex"),z=ya(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+y+`
`+R+`
`+z)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||O==="")&&(b=!1);b&&(this.diagnostics={runnable:q,programLog:y,vertexShader:{log:w,prefix:d},fragmentShader:{log:O,prefix:E}})}i.deleteShader(g),i.deleteShader(N);let P;this.getUniforms=function(){return P===void 0&&(P=new Zi(i,p)),P};let S;return this.getAttributes=function(){return S===void 0&&(S=qd(i,p)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Bd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=g,this.fragmentShader=N,this}let af=0;class of{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lf(t),e.set(t,n)),n}}class lf{constructor(t){this.id=af++,this.code=t,this.usedTimes=0}}function cf(s,t,e,n,i,r,o){const a=new co,c=new of,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,y,w,O,q){const b=O.fog,R=q.geometry,z=S.isMeshStandardMaterial?O.environment:null,V=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),Z=V&&V.mapping===sr?V.image.height:null,H=x[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,J=K!==void 0?K.length:0;let at=0;R.morphAttributes.position!==void 0&&(at=1),R.morphAttributes.normal!==void 0&&(at=2),R.morphAttributes.color!==void 0&&(at=3);let $,X,tt,it;if(H){const Lt=De[H];$=Lt.vertexShader,X=Lt.fragmentShader}else $=S.vertexShader,X=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),it=c.getFragmentShaderID(S);const B=s.getRenderTarget(),It=S.alphaTest>0,pt=S.clearcoat>0,ft=S.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:S.type,vertexShader:$,fragmentShader:X,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:it,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:B===null?s.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Cn,map:!!S.map,matcap:!!S.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:Z,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===wl,tangentSpaceNormalMap:S.normalMapType===no,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Gt,clearcoat:pt,clearcoatMap:pt&&!!S.clearcoatMap,clearcoatRoughnessMap:pt&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:pt&&!!S.clearcoatNormalMap,iridescence:ft,iridescenceMap:ft&&!!S.iridescenceMap,iridescenceThicknessMap:ft&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Zn,alphaMap:!!S.alphaMap,alphaTest:It,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!R.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!b,useFog:S.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:at,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:S.toneMapped?s.toneMapping:Ze,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Ie,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)y.push(w),y.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(E(y,S),v(y,S),y.push(s.outputEncoding)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputEncoding),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.combine),S.push(y.vertexUvs),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.map&&a.enable(4),y.matcap&&a.enable(5),y.envMap&&a.enable(6),y.lightMap&&a.enable(7),y.aoMap&&a.enable(8),y.emissiveMap&&a.enable(9),y.bumpMap&&a.enable(10),y.normalMap&&a.enable(11),y.objectSpaceNormalMap&&a.enable(12),y.tangentSpaceNormalMap&&a.enable(13),y.clearcoat&&a.enable(14),y.clearcoatMap&&a.enable(15),y.clearcoatRoughnessMap&&a.enable(16),y.clearcoatNormalMap&&a.enable(17),y.iridescence&&a.enable(18),y.iridescenceMap&&a.enable(19),y.iridescenceThicknessMap&&a.enable(20),y.displacementMap&&a.enable(21),y.specularMap&&a.enable(22),y.roughnessMap&&a.enable(23),y.metalnessMap&&a.enable(24),y.gradientMap&&a.enable(25),y.alphaMap&&a.enable(26),y.alphaTest&&a.enable(27),y.vertexColors&&a.enable(28),y.vertexAlphas&&a.enable(29),y.vertexUvs&&a.enable(30),y.vertexTangents&&a.enable(31),y.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.physicallyCorrectLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.specularIntensityMap&&a.enable(15),y.specularColorMap&&a.enable(16),y.transmission&&a.enable(17),y.transmissionMap&&a.enable(18),y.thicknessMap&&a.enable(19),y.sheen&&a.enable(20),y.sheenColorMap&&a.enable(21),y.sheenRoughnessMap&&a.enable(22),y.decodeVideoTexture&&a.enable(23),y.opaque&&a.enable(24),S.push(a.mask)}function I(S){const y=x[S.type];let w;if(y){const O=De[y];w=ql.clone(O.uniforms)}else w=S.uniforms;return w}function M(S,y){let w;for(let O=0,q=l.length;O<q;O++){const b=l[O];if(b.cacheKey===y){w=b,++w.usedTimes;break}}return w===void 0&&(w=new sf(s,y,S,r),l.push(w)),w}function g(S){if(--S.usedTimes===0){const y=l.indexOf(S);l[y]=l[l.length-1],l.pop(),S.destroy()}}function N(S){c.remove(S)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:I,acquireProgram:M,releaseProgram:g,releaseShaderCache:N,programs:l,dispose:P}}function uf(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function hf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wa(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,m,x,p,d){let E=s[t];return E===void 0?(E={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},s[t]=E):(E.id=f.id,E.object=f,E.geometry=h,E.material=m,E.groupOrder=x,E.renderOrder=f.renderOrder,E.z=p,E.group=d),t++,E}function a(f,h,m,x,p,d){const E=o(f,h,m,x,p,d);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(f,h,m,x,p,d){const E=o(f,h,m,x,p,d);m.transmission>0?n.unshift(E):m.transparent===!0?i.unshift(E):e.unshift(E)}function l(f,h){e.length>1&&e.sort(f||hf),n.length>1&&n.sort(h||wa),i.length>1&&i.sort(h||wa)}function u(){for(let f=t,h=s.length;f<h;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function df(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Pa,s.set(n,[o])):i>=r.length?(o=new Pa,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ff(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ut};break;case"SpotLight":e={position:new U,direction:new U,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function pf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let mf=0;function gf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ef(s,t){const e=new ff,n=pf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,o=new qt,a=new qt;function c(u,f){let h=0,m=0,x=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,d=0,E=0,v=0,I=0,M=0,g=0,N=0,P=0,S=0;u.sort(gf);const y=f!==!0?Math.PI:1;for(let O=0,q=u.length;O<q;O++){const b=u[O],R=b.color,z=b.intensity,V=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=R.r*z*y,m+=R.g*z*y,x+=R.b*z*y;else if(b.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(b.sh.coefficients[H],z);else if(b.isDirectionalLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity*y),b.castShadow){const K=b.shadow,J=n.get(b);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=b.shadow.matrix,M++}i.directional[p]=H,p++}else if(b.isSpotLight){const H=e.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(R).multiplyScalar(z*y),H.distance=V,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,i.spot[E]=H;const K=b.shadow;if(b.map&&(i.spotLightMap[P]=b.map,P++,K.updateMatrices(b),b.castShadow&&S++),i.spotLightMatrix[E]=K.matrix,b.castShadow){const J=n.get(b);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=Z,N++}E++}else if(b.isRectAreaLight){const H=e.get(b);H.color.copy(R).multiplyScalar(z),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),i.rectArea[v]=H,v++}else if(b.isPointLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity*y),H.distance=b.distance,H.decay=b.decay,b.castShadow){const K=b.shadow,J=n.get(b);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=b.shadow.matrix,g++}i.point[d]=H,d++}else if(b.isHemisphereLight){const H=e.get(b);H.skyColor.copy(b.color).multiplyScalar(z*y),H.groundColor.copy(b.groundColor).multiplyScalar(z*y),i.hemi[I]=H,I++}}v>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=x;const w=i.hash;(w.directionalLength!==p||w.pointLength!==d||w.spotLength!==E||w.rectAreaLength!==v||w.hemiLength!==I||w.numDirectionalShadows!==M||w.numPointShadows!==g||w.numSpotShadows!==N||w.numSpotMaps!==P)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=v,i.point.length=d,i.hemi.length=I,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=N+P-S,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=S,w.directionalLength=p,w.pointLength=d,w.spotLength=E,w.rectAreaLength=v,w.hemiLength=I,w.numDirectionalShadows=M,w.numPointShadows=g,w.numSpotShadows=N,w.numSpotMaps=P,i.version=mf++)}function l(u,f){let h=0,m=0,x=0,p=0,d=0;const E=f.matrixWorldInverse;for(let v=0,I=u.length;v<I;v++){const M=u[v];if(M.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(E),h++}else if(M.isSpotLight){const g=i.spot[x];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(E),g.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(E),x++}else if(M.isRectAreaLight){const g=i.rectArea[p];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(E),a.identity(),o.copy(M.matrixWorld),o.premultiply(E),a.extractRotation(o),g.halfWidth.set(M.width*.5,0,0),g.halfHeight.set(0,M.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const g=i.point[m];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(E),m++}else if(M.isHemisphereLight){const g=i.hemi[d];g.direction.setFromMatrixPosition(M.matrixWorld),g.direction.transformDirection(E),d++}}}return{setup:c,setupView:l,state:i}}function Fa(s,t){const e=new Ef(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _f(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Fa(s,t),e.set(r,[c])):o>=a.length?(c=new Fa(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class xf extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sf extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const If=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tf=`uniform sampler2D shadow_pass;
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
}`;function Mf(s,t,e){let n=new hs;const i=new vt,r=new vt,o=new ne,a=new xf({depthPacking:Ll}),c=new Sf,l={},u=e.maxTextureSize,f={[an]:Ie,[Ie]:an,[nn]:nn},h=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:If,fragmentShader:Tf}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ge;x.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new qe(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za,this.render=function(M,g,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const P=s.getRenderTarget(),S=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),w=s.state;w.setBlending(rn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let O=0,q=M.length;O<q;O++){const b=M[O],R=b.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",b,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const z=R.getFrameExtents();if(i.multiply(z),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==xi?{minFilter:de,magFilter:de}:{};R.map=new vn(i.x,i.y,Z),R.map.texture.name=b.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const V=R.getViewportCount();for(let Z=0;Z<V;Z++){const H=R.getViewport(Z);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),w.viewport(o),R.updateMatrices(b,Z),n=R.getFrustum(),I(g,N,R.camera,b,this.type)}R.isPointLightShadow!==!0&&this.type===xi&&E(R,N),R.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(P,S,y)};function E(M,g){const N=t.update(p);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vn(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(g,null,N,h,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(g,null,N,m,p,null)}function v(M,g,N,P,S,y){let w=null;const O=N.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(O!==void 0)w=O;else if(w=N.isPointLight===!0?c:a,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0){const q=w.uuid,b=g.uuid;let R=l[q];R===void 0&&(R={},l[q]=R);let z=R[b];z===void 0&&(z=w.clone(),R[b]=z),w=z}return w.visible=g.visible,w.wireframe=g.wireframe,y===xi?w.side=g.shadowSide!==null?g.shadowSide:g.side:w.side=g.shadowSide!==null?g.shadowSide:f[g.side],w.alphaMap=g.alphaMap,w.alphaTest=g.alphaTest,w.map=g.map,w.clipShadows=g.clipShadows,w.clippingPlanes=g.clippingPlanes,w.clipIntersection=g.clipIntersection,w.displacementMap=g.displacementMap,w.displacementScale=g.displacementScale,w.displacementBias=g.displacementBias,w.wireframeLinewidth=g.wireframeLinewidth,w.linewidth=g.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0&&(w.referencePosition.setFromMatrixPosition(N.matrixWorld),w.nearDistance=P,w.farDistance=S),w}function I(M,g,N,P,S){if(M.visible===!1)return;if(M.layers.test(g.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===xi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld);const O=t.update(M),q=M.material;if(Array.isArray(q)){const b=O.groups;for(let R=0,z=b.length;R<z;R++){const V=b[R],Z=q[V.materialIndex];if(Z&&Z.visible){const H=v(M,Z,P,N.near,N.far,S);s.renderBufferDirect(N,null,O,H,M,V)}}}else if(q.visible){const b=v(M,q,P,N.near,N.far,S);s.renderBufferDirect(N,null,O,b,M,null)}}const w=M.children;for(let O=0,q=w.length;O<q;O++)I(w[O],g,N,P,S)}}function Cf(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const W=new ne;let Q=null;const ht=new ne(0,0,0,0);return{setMask:function(Et){Q!==Et&&!L&&(s.colorMask(Et,Et,Et,Et),Q=Et)},setLocked:function(Et){L=Et},setClear:function(Et,Dt,Qt,ae,ln){ln===!0&&(Et*=ae,Dt*=ae,Qt*=ae),W.set(Et,Dt,Qt,ae),ht.equals(W)===!1&&(s.clearColor(Et,Dt,Qt,ae),ht.copy(W))},reset:function(){L=!1,Q=null,ht.set(-1,0,0,0)}}}function r(){let L=!1,W=null,Q=null,ht=null;return{setTest:function(Et){Et?It(2929):pt(2929)},setMask:function(Et){W!==Et&&!L&&(s.depthMask(Et),W=Et)},setFunc:function(Et){if(Q!==Et){switch(Et){case tl:s.depthFunc(512);break;case el:s.depthFunc(519);break;case nl:s.depthFunc(513);break;case ts:s.depthFunc(515);break;case il:s.depthFunc(514);break;case rl:s.depthFunc(518);break;case sl:s.depthFunc(516);break;case al:s.depthFunc(517);break;default:s.depthFunc(515)}Q=Et}},setLocked:function(Et){L=Et},setClear:function(Et){ht!==Et&&(s.clearDepth(Et),ht=Et)},reset:function(){L=!1,W=null,Q=null,ht=null}}}function o(){let L=!1,W=null,Q=null,ht=null,Et=null,Dt=null,Qt=null,ae=null,ln=null;return{setTest:function(Bt){L||(Bt?It(2960):pt(2960))},setMask:function(Bt){W!==Bt&&!L&&(s.stencilMask(Bt),W=Bt)},setFunc:function(Bt,ze,Me){(Q!==Bt||ht!==ze||Et!==Me)&&(s.stencilFunc(Bt,ze,Me),Q=Bt,ht=ze,Et=Me)},setOp:function(Bt,ze,Me){(Dt!==Bt||Qt!==ze||ae!==Me)&&(s.stencilOp(Bt,ze,Me),Dt=Bt,Qt=ze,ae=Me)},setLocked:function(Bt){L=Bt},setClear:function(Bt){ln!==Bt&&(s.clearStencil(Bt),ln=Bt)},reset:function(){L=!1,W=null,Q=null,ht=null,Et=null,Dt=null,Qt=null,ae=null,ln=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,E=!1,v=null,I=null,M=null,g=null,N=null,P=null,S=null,y=!1,w=null,O=null,q=null,b=null,R=null;const z=s.getParameter(35661);let V=!1,Z=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Z>=2);let K=null,J={};const at=s.getParameter(3088),$=s.getParameter(2978),X=new ne().fromArray(at),tt=new ne().fromArray($);function it(L,W,Q){const ht=new Uint8Array(4),Et=s.createTexture();s.bindTexture(L,Et),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Dt=0;Dt<Q;Dt++)s.texImage2D(W+Dt,0,6408,1,1,0,6408,5121,ht);return Et}const B={};B[3553]=it(3553,3553,1),B[34067]=it(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),It(2929),c.setFunc(ts),Ht(!1),Jt(Ms),It(2884),Vt(rn);function It(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function pt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ft(L,W){return m[L]!==W?(s.bindFramebuffer(L,W),m[L]=W,n&&(L===36009&&(m[36160]=W),L===36160&&(m[36009]=W)),!0):!1}function ot(L,W){let Q=p,ht=!1;if(L)if(Q=x.get(W),Q===void 0&&(Q=[],x.set(W,Q)),L.isWebGLMultipleRenderTargets){const Et=L.texture;if(Q.length!==Et.length||Q[0]!==36064){for(let Dt=0,Qt=Et.length;Dt<Qt;Dt++)Q[Dt]=36064+Dt;Q.length=Et.length,ht=!0}}else Q[0]!==36064&&(Q[0]=36064,ht=!0);else Q[0]!==1029&&(Q[0]=1029,ht=!0);ht&&(e.isWebGL2?s.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Lt(L){return d!==L?(s.useProgram(L),d=L,!0):!1}const Tt={[Yn]:32774,[Ho]:32778,[ko]:32779};if(n)Tt[ys]=32775,Tt[bs]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(Tt[ys]=L.MIN_EXT,Tt[bs]=L.MAX_EXT)}const _t={[Wo]:0,[Xo]:1,[Yo]:768,[Ka]:770,[Qo]:776,[Ko]:774,[jo]:772,[qo]:769,[Ja]:771,[Jo]:775,[Zo]:773};function Vt(L,W,Q,ht,Et,Dt,Qt,ae){if(L===rn){E===!0&&(pt(3042),E=!1);return}if(E===!1&&(It(3042),E=!0),L!==Vo){if(L!==v||ae!==y){if((I!==Yn||N!==Yn)&&(s.blendEquation(32774),I=Yn,N=Yn),ae)switch(L){case Zn:s.blendFuncSeparate(1,771,1,771);break;case Cs:s.blendFunc(1,1);break;case vs:s.blendFuncSeparate(0,769,0,1);break;case As:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zn:s.blendFuncSeparate(770,771,1,771);break;case Cs:s.blendFunc(770,1);break;case vs:s.blendFuncSeparate(0,769,0,1);break;case As:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,g=null,P=null,S=null,v=L,y=ae}return}Et=Et||W,Dt=Dt||Q,Qt=Qt||ht,(W!==I||Et!==N)&&(s.blendEquationSeparate(Tt[W],Tt[Et]),I=W,N=Et),(Q!==M||ht!==g||Dt!==P||Qt!==S)&&(s.blendFuncSeparate(_t[Q],_t[ht],_t[Dt],_t[Qt]),M=Q,g=ht,P=Dt,S=Qt),v=L,y=!1}function kt(L,W){L.side===nn?pt(2884):It(2884);let Q=L.side===Ie;W&&(Q=!Q),Ht(Q),L.blending===Zn&&L.transparent===!1?Vt(rn):Vt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const ht=L.stencilWrite;l.setTest(ht),ht&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?It(32926):pt(32926)}function Ht(L){w!==L&&(L?s.frontFace(2304):s.frontFace(2305),w=L)}function Jt(L){L!==Go?(It(2884),L!==O&&(L===Ms?s.cullFace(1029):L===zo?s.cullFace(1028):s.cullFace(1032))):pt(2884),O=L}function zt(L){L!==q&&(V&&s.lineWidth(L),q=L)}function Rt(L,W,Q){L?(It(32823),(b!==W||R!==Q)&&(s.polygonOffset(W,Q),b=W,R=Q)):pt(32823)}function le(L){L?It(3089):pt(3089)}function ie(L){L===void 0&&(L=33984+z-1),K!==L&&(s.activeTexture(L),K=L)}function C(L,W,Q){Q===void 0&&(K===null?Q=33984+z-1:Q=K);let ht=J[Q];ht===void 0&&(ht={type:void 0,texture:void 0},J[Q]=ht),(ht.type!==L||ht.texture!==W)&&(K!==Q&&(s.activeTexture(Q),K=Q),s.bindTexture(L,W||B[L]),ht.type=L,ht.texture=W)}function _(){const L=J[K];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(L){X.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),X.copy(L))}function mt(L){tt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function At(L,W){let Q=f.get(W);Q===void 0&&(Q=new WeakMap,f.set(W,Q));let ht=Q.get(L);ht===void 0&&(ht=s.getUniformBlockIndex(W,L.name),Q.set(L,ht))}function bt(L,W){const ht=f.get(W).get(L);u.get(W)!==ht&&(s.uniformBlockBinding(W,ht,L.__bindingPointIndex),u.set(W,ht))}function $t(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,J={},m={},x=new WeakMap,p=[],d=null,E=!1,v=null,I=null,M=null,g=null,N=null,P=null,S=null,y=!1,w=null,O=null,q=null,b=null,R=null,X.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:It,disable:pt,bindFramebuffer:ft,drawBuffers:ot,useProgram:Lt,setBlending:Vt,setMaterial:kt,setFlipSided:Ht,setCullFace:Jt,setLineWidth:zt,setPolygonOffset:Rt,setScissorTest:le,activeTexture:ie,bindTexture:C,unbindTexture:_,compressedTexImage2D:k,compressedTexImage3D:et,texImage2D:dt,texImage3D:ct,updateUBOMapping:At,uniformBlockBinding:bt,texStorage2D:F,texStorage3D:ut,texSubImage2D:rt,texSubImage3D:lt,compressedTexSubImage2D:St,compressedTexSubImage3D:A,scissor:gt,viewport:mt,reset:$t}}function vf(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return E?new OffscreenCanvas(C,_):Ki("canvas")}function I(C,_,k,et){let rt=1;if((C.width>et||C.height>et)&&(rt=et/Math.max(C.width,C.height)),rt<1||_===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const lt=_?as:Math.floor,St=lt(rt*C.width),A=lt(rt*C.height);p===void 0&&(p=v(St,A));const F=k?v(St,A):p;return F.width=St,F.height=A,F.getContext("2d").drawImage(C,0,0,St,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+St+"x"+A+")."),F}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return na(C.width)&&na(C.height)}function g(C){return a?!1:C.wrapS!==Re||C.wrapT!==Re||C.minFilter!==de&&C.minFilter!==ve}function N(C,_){return C.generateMipmaps&&_&&C.minFilter!==de&&C.minFilter!==ve}function P(C){s.generateMipmap(C)}function S(C,_,k,et,rt=!1){if(a===!1)return _;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt=_;return _===6403&&(k===5126&&(lt=33326),k===5131&&(lt=33325),k===5121&&(lt=33321)),_===33319&&(k===5126&&(lt=33328),k===5131&&(lt=33327),k===5121&&(lt=33323)),_===6408&&(k===5126&&(lt=34836),k===5131&&(lt=34842),k===5121&&(lt=et===Gt&&rt===!1?35907:32856),k===32819&&(lt=32854),k===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function y(C,_,k){return N(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==de&&C.minFilter!==ve?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function w(C){return C===de||C===Ns||C===pr?9728:9729}function O(C){const _=C.target;_.removeEventListener("dispose",O),b(_),_.isVideoTexture&&x.delete(_)}function q(C){const _=C.target;_.removeEventListener("dispose",q),z(_)}function b(C){const _=n.get(C);if(_.__webglInit===void 0)return;const k=C.source,et=d.get(k);if(et){const rt=et[_.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&R(C),Object.keys(et).length===0&&d.delete(k)}n.remove(C)}function R(C){const _=n.get(C);s.deleteTexture(_.__webglTexture);const k=C.source,et=d.get(k);delete et[_.__cacheKey],o.memory.textures--}function z(C){const _=C.texture,k=n.get(C),et=n.get(_);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)s.deleteFramebuffer(k.__webglFramebuffer[rt]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[rt]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let rt=0;rt<k.__webglColorRenderbuffer.length;rt++)k.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[rt]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let rt=0,lt=_.length;rt<lt;rt++){const St=n.get(_[rt]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(_[rt])}n.remove(_),n.remove(C)}let V=0;function Z(){V=0}function H(){const C=V;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),V+=1,C}function K(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.encoding),_.join()}function J(C,_){const k=n.get(C);if(C.isVideoTexture&&le(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(k,C,_);return}}e.bindTexture(3553,k.__webglTexture,33984+_)}function at(C,_){const k=n.get(C);if(C.version>0&&k.__version!==C.version){pt(k,C,_);return}e.bindTexture(35866,k.__webglTexture,33984+_)}function $(C,_){const k=n.get(C);if(C.version>0&&k.__version!==C.version){pt(k,C,_);return}e.bindTexture(32879,k.__webglTexture,33984+_)}function X(C,_){const k=n.get(C);if(C.version>0&&k.__version!==C.version){ft(k,C,_);return}e.bindTexture(34067,k.__webglTexture,33984+_)}const tt={[is]:10497,[Re]:33071,[rs]:33648},it={[de]:9728,[Ns]:9984,[pr]:9986,[ve]:9729,[pl]:9985,[Ii]:9987};function B(C,_,k){if(k?(s.texParameteri(C,10242,tt[_.wrapS]),s.texParameteri(C,10243,tt[_.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,tt[_.wrapR]),s.texParameteri(C,10240,it[_.magFilter]),s.texParameteri(C,10241,it[_.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(_.wrapS!==Re||_.wrapT!==Re)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,w(_.magFilter)),s.texParameteri(C,10241,w(_.minFilter)),_.minFilter!==de&&_.minFilter!==ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===de||_.minFilter!==pr&&_.minFilter!==Ii||_.type===xn&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===Ti&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(C,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function It(C,_){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",O));const et=_.source;let rt=d.get(et);rt===void 0&&(rt={},d.set(et,rt));const lt=K(_);if(lt!==C.__cacheKey){rt[lt]===void 0&&(rt[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),rt[lt].usedTimes++;const St=rt[C.__cacheKey];St!==void 0&&(rt[C.__cacheKey].usedTimes--,St.usedTimes===0&&R(_)),C.__cacheKey=lt,C.__webglTexture=rt[lt].texture}return k}function pt(C,_,k){let et=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(et=35866),_.isData3DTexture&&(et=32879);const rt=It(C,_),lt=_.source;e.bindTexture(et,C.__webglTexture,33984+k);const St=n.get(lt);if(lt.version!==St.__version||rt===!0){e.activeTexture(33984+k),s.pixelStorei(37440,_.flipY),s.pixelStorei(37441,_.premultiplyAlpha),s.pixelStorei(3317,_.unpackAlignment),s.pixelStorei(37443,0);const A=g(_)&&M(_.image)===!1;let F=I(_.image,A,!1,u);F=ie(_,F);const ut=M(F)||a,dt=r.convert(_.format,_.encoding);let ct=r.convert(_.type),gt=S(_.internalFormat,dt,ct,_.encoding,_.isVideoTexture);B(et,_,ut);let mt;const At=_.mipmaps,bt=a&&_.isVideoTexture!==!0,$t=St.__version===void 0||rt===!0,L=y(_,F,ut);if(_.isDepthTexture)gt=6402,a?_.type===xn?gt=36012:_.type===_n?gt=33190:_.type===Kn?gt=35056:gt=33189:_.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===In&&gt===6402&&_.type!==eo&&_.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=_n,ct=r.convert(_.type)),_.format===ni&&gt===6402&&(gt=34041,_.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Kn,ct=r.convert(_.type))),$t&&(bt?e.texStorage2D(3553,1,gt,F.width,F.height):e.texImage2D(3553,0,gt,F.width,F.height,0,dt,ct,null));else if(_.isDataTexture)if(At.length>0&&ut){bt&&$t&&e.texStorage2D(3553,L,gt,At[0].width,At[0].height);for(let W=0,Q=At.length;W<Q;W++)mt=At[W],bt?e.texSubImage2D(3553,W,0,0,mt.width,mt.height,dt,ct,mt.data):e.texImage2D(3553,W,gt,mt.width,mt.height,0,dt,ct,mt.data);_.generateMipmaps=!1}else bt?($t&&e.texStorage2D(3553,L,gt,F.width,F.height),e.texSubImage2D(3553,0,0,0,F.width,F.height,dt,ct,F.data)):e.texImage2D(3553,0,gt,F.width,F.height,0,dt,ct,F.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){bt&&$t&&e.texStorage3D(35866,L,gt,At[0].width,At[0].height,F.depth);for(let W=0,Q=At.length;W<Q;W++)mt=At[W],_.format!==Le?dt!==null?bt?e.compressedTexSubImage3D(35866,W,0,0,0,mt.width,mt.height,F.depth,dt,mt.data,0,0):e.compressedTexImage3D(35866,W,gt,mt.width,mt.height,F.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?e.texSubImage3D(35866,W,0,0,0,mt.width,mt.height,F.depth,dt,ct,mt.data):e.texImage3D(35866,W,gt,mt.width,mt.height,F.depth,0,dt,ct,mt.data)}else{bt&&$t&&e.texStorage2D(3553,L,gt,At[0].width,At[0].height);for(let W=0,Q=At.length;W<Q;W++)mt=At[W],_.format!==Le?dt!==null?bt?e.compressedTexSubImage2D(3553,W,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(3553,W,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?e.texSubImage2D(3553,W,0,0,mt.width,mt.height,dt,ct,mt.data):e.texImage2D(3553,W,gt,mt.width,mt.height,0,dt,ct,mt.data)}else if(_.isDataArrayTexture)bt?($t&&e.texStorage3D(35866,L,gt,F.width,F.height,F.depth),e.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,dt,ct,F.data)):e.texImage3D(35866,0,gt,F.width,F.height,F.depth,0,dt,ct,F.data);else if(_.isData3DTexture)bt?($t&&e.texStorage3D(32879,L,gt,F.width,F.height,F.depth),e.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,dt,ct,F.data)):e.texImage3D(32879,0,gt,F.width,F.height,F.depth,0,dt,ct,F.data);else if(_.isFramebufferTexture){if($t)if(bt)e.texStorage2D(3553,L,gt,F.width,F.height);else{let W=F.width,Q=F.height;for(let ht=0;ht<L;ht++)e.texImage2D(3553,ht,gt,W,Q,0,dt,ct,null),W>>=1,Q>>=1}}else if(At.length>0&&ut){bt&&$t&&e.texStorage2D(3553,L,gt,At[0].width,At[0].height);for(let W=0,Q=At.length;W<Q;W++)mt=At[W],bt?e.texSubImage2D(3553,W,0,0,dt,ct,mt):e.texImage2D(3553,W,gt,dt,ct,mt);_.generateMipmaps=!1}else bt?($t&&e.texStorage2D(3553,L,gt,F.width,F.height),e.texSubImage2D(3553,0,0,0,dt,ct,F)):e.texImage2D(3553,0,gt,dt,ct,F);N(_,ut)&&P(et),St.__version=lt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ft(C,_,k){if(_.image.length!==6)return;const et=It(C,_),rt=_.source;e.bindTexture(34067,C.__webglTexture,33984+k);const lt=n.get(rt);if(rt.version!==lt.__version||et===!0){e.activeTexture(33984+k),s.pixelStorei(37440,_.flipY),s.pixelStorei(37441,_.premultiplyAlpha),s.pixelStorei(3317,_.unpackAlignment),s.pixelStorei(37443,0);const St=_.isCompressedTexture||_.image[0].isCompressedTexture,A=_.image[0]&&_.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!St&&!A?F[W]=I(_.image[W],!1,!0,l):F[W]=A?_.image[W].image:_.image[W],F[W]=ie(_,F[W]);const ut=F[0],dt=M(ut)||a,ct=r.convert(_.format,_.encoding),gt=r.convert(_.type),mt=S(_.internalFormat,ct,gt,_.encoding),At=a&&_.isVideoTexture!==!0,bt=lt.__version===void 0||et===!0;let $t=y(_,ut,dt);B(34067,_,dt);let L;if(St){At&&bt&&e.texStorage2D(34067,$t,mt,ut.width,ut.height);for(let W=0;W<6;W++){L=F[W].mipmaps;for(let Q=0;Q<L.length;Q++){const ht=L[Q];_.format!==Le?ct!==null?At?e.compressedTexSubImage2D(34069+W,Q,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(34069+W,Q,mt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+W,Q,0,0,ht.width,ht.height,ct,gt,ht.data):e.texImage2D(34069+W,Q,mt,ht.width,ht.height,0,ct,gt,ht.data)}}}else{L=_.mipmaps,At&&bt&&(L.length>0&&$t++,e.texStorage2D(34067,$t,mt,F[0].width,F[0].height));for(let W=0;W<6;W++)if(A){At?e.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,ct,gt,F[W].data):e.texImage2D(34069+W,0,mt,F[W].width,F[W].height,0,ct,gt,F[W].data);for(let Q=0;Q<L.length;Q++){const Et=L[Q].image[W].image;At?e.texSubImage2D(34069+W,Q+1,0,0,Et.width,Et.height,ct,gt,Et.data):e.texImage2D(34069+W,Q+1,mt,Et.width,Et.height,0,ct,gt,Et.data)}}else{At?e.texSubImage2D(34069+W,0,0,0,ct,gt,F[W]):e.texImage2D(34069+W,0,mt,ct,gt,F[W]);for(let Q=0;Q<L.length;Q++){const ht=L[Q];At?e.texSubImage2D(34069+W,Q+1,0,0,ct,gt,ht.image[W]):e.texImage2D(34069+W,Q+1,mt,ct,gt,ht.image[W])}}}N(_,dt)&&P(34067),lt.__version=rt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ot(C,_,k,et,rt){const lt=r.convert(k.format,k.encoding),St=r.convert(k.type),A=S(k.internalFormat,lt,St,k.encoding);n.get(_).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,A,_.width,_.height,_.depth,0,lt,St,null):e.texImage2D(rt,0,A,_.width,_.height,0,lt,St,null)),e.bindFramebuffer(36160,C),Rt(_)?h.framebufferTexture2DMultisampleEXT(36160,et,rt,n.get(k).__webglTexture,0,zt(_)):(rt===3553||rt>=34069&&rt<=34074)&&s.framebufferTexture2D(36160,et,rt,n.get(k).__webglTexture,0),e.bindFramebuffer(36160,null)}function Lt(C,_,k){if(s.bindRenderbuffer(36161,C),_.depthBuffer&&!_.stencilBuffer){let et=33189;if(k||Rt(_)){const rt=_.depthTexture;rt&&rt.isDepthTexture&&(rt.type===xn?et=36012:rt.type===_n&&(et=33190));const lt=zt(_);Rt(_)?h.renderbufferStorageMultisampleEXT(36161,lt,et,_.width,_.height):s.renderbufferStorageMultisample(36161,lt,et,_.width,_.height)}else s.renderbufferStorage(36161,et,_.width,_.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(_.depthBuffer&&_.stencilBuffer){const et=zt(_);k&&Rt(_)===!1?s.renderbufferStorageMultisample(36161,et,35056,_.width,_.height):Rt(_)?h.renderbufferStorageMultisampleEXT(36161,et,35056,_.width,_.height):s.renderbufferStorage(36161,34041,_.width,_.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const et=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let rt=0;rt<et.length;rt++){const lt=et[rt],St=r.convert(lt.format,lt.encoding),A=r.convert(lt.type),F=S(lt.internalFormat,St,A,lt.encoding),ut=zt(_);k&&Rt(_)===!1?s.renderbufferStorageMultisample(36161,ut,F,_.width,_.height):Rt(_)?h.renderbufferStorageMultisampleEXT(36161,ut,F,_.width,_.height):s.renderbufferStorage(36161,F,_.width,_.height)}}s.bindRenderbuffer(36161,null)}function Tt(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const et=n.get(_.depthTexture).__webglTexture,rt=zt(_);if(_.depthTexture.format===In)Rt(_)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,rt):s.framebufferTexture2D(36160,36096,3553,et,0);else if(_.depthTexture.format===ni)Rt(_)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,rt):s.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function _t(C){const _=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,C)}else if(k){_.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,_.__webglFramebuffer[et]),_.__webglDepthbuffer[et]=s.createRenderbuffer(),Lt(_.__webglDepthbuffer[et],C,!1)}else e.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Lt(_.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function Vt(C,_,k){const et=n.get(C);_!==void 0&&ot(et.__webglFramebuffer,C,C.texture,36064,3553),k!==void 0&&_t(C)}function kt(C){const _=C.texture,k=n.get(C),et=n.get(_);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=_.version,o.memory.textures++);const rt=C.isWebGLCubeRenderTarget===!0,lt=C.isWebGLMultipleRenderTargets===!0,St=M(C)||a;if(rt){k.__webglFramebuffer=[];for(let A=0;A<6;A++)k.__webglFramebuffer[A]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),lt)if(i.drawBuffers){const A=C.texture;for(let F=0,ut=A.length;F<ut;F++){const dt=n.get(A[F]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Rt(C)===!1){const A=lt?_:[_];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ut=A[F];k.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[F]);const dt=r.convert(ut.format,ut.encoding),ct=r.convert(ut.type),gt=S(ut.internalFormat,dt,ct,ut.encoding,C.isXRRenderTarget===!0),mt=zt(C);s.renderbufferStorageMultisample(36161,mt,gt,C.width,C.height),s.framebufferRenderbuffer(36160,36064+F,36161,k.__webglColorRenderbuffer[F])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,et.__webglTexture),B(34067,_,St);for(let A=0;A<6;A++)ot(k.__webglFramebuffer[A],C,_,36064,34069+A);N(_,St)&&P(34067),e.unbindTexture()}else if(lt){const A=C.texture;for(let F=0,ut=A.length;F<ut;F++){const dt=A[F],ct=n.get(dt);e.bindTexture(3553,ct.__webglTexture),B(3553,dt,St),ot(k.__webglFramebuffer,C,dt,36064+F,3553),N(dt,St)&&P(3553)}e.unbindTexture()}else{let A=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?A=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(A,et.__webglTexture),B(A,_,St),ot(k.__webglFramebuffer,C,_,36064,A),N(_,St)&&P(A),e.unbindTexture()}C.depthBuffer&&_t(C)}function Ht(C){const _=M(C)||a,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let et=0,rt=k.length;et<rt;et++){const lt=k[et];if(N(lt,_)){const St=C.isWebGLCubeRenderTarget?34067:3553,A=n.get(lt).__webglTexture;e.bindTexture(St,A),P(St),e.unbindTexture()}}}function Jt(C){if(a&&C.samples>0&&Rt(C)===!1){const _=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,et=C.height;let rt=16384;const lt=[],St=C.stencilBuffer?33306:36096,A=n.get(C),F=C.isWebGLMultipleRenderTargets===!0;if(F)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ut,36161,null),e.bindFramebuffer(36160,A.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ut,3553,null,0);e.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,A.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){lt.push(36064+ut),C.depthBuffer&&lt.push(St);const dt=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(dt===!1&&(C.depthBuffer&&(rt|=256),C.stencilBuffer&&(rt|=1024)),F&&s.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ut]),dt===!0&&(s.invalidateFramebuffer(36008,[St]),s.invalidateFramebuffer(36009,[St])),F){const ct=n.get(_[ut]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ct,0)}s.blitFramebuffer(0,0,k,et,0,0,k,et,rt,9728),m&&s.invalidateFramebuffer(36008,lt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),F)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ut,36161,A.__webglColorRenderbuffer[ut]);const dt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(36160,A.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ut,3553,dt,0)}e.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function zt(C){return Math.min(f,C.samples)}function Rt(C){const _=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function le(C){const _=o.render.frame;x.get(C)!==_&&(x.set(C,_),C.update())}function ie(C,_){const k=C.encoding,et=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ss||k!==Cn&&(k===Gt?a===!1?t.has("EXT_sRGB")===!0&&et===Le?(C.format=ss,C.minFilter=ve,C.generateMipmaps=!1):_=so.sRGBToLinear(_):(et!==Le||rt!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),_}this.allocateTextureUnit=H,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=at,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Rt}function Af(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===Mn)return 5121;if(r===_l)return 32819;if(r===xl)return 32820;if(r===ml)return 5120;if(r===gl)return 5122;if(r===eo)return 5123;if(r===El)return 5124;if(r===_n)return 5125;if(r===xn)return 5126;if(r===Ti)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Sl)return 6406;if(r===Le)return 6408;if(r===Il)return 6409;if(r===Tl)return 6410;if(r===In)return 6402;if(r===ni)return 34041;if(r===ss)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ml)return 6403;if(r===Cl)return 36244;if(r===vl)return 33319;if(r===Al)return 33320;if(r===yl)return 36249;if(r===mr||r===gr||r===Er||r===_r)if(o===Gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rs||r===Ls||r===ws||r===Ps)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Rs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ls)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ws)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ps)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fs||r===Ds)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fs)return o===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ds)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Os||r===$s||r===Us||r===Gs||r===zs||r===Bs||r===Vs||r===Hs||r===ks||r===Ws||r===Xs||r===Ys||r===qs||r===js)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Os)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$s)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Us)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ks)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ws)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ys)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===js)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===xr)return o===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Nl||r===Zs||r===Ks||r===Js)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===xr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Js)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kn?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class yf extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xi extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bf={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n),E=this._getHandJoint(l,p);d!==null&&(E.matrix.fromArray(d.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.jointRadius=d.radius),E.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Nf extends Te{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:In,u!==In&&u!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===In&&(n=_n),n===void 0&&u===ni&&(n=Kn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=c!==void 0?c:de,this.flipY=!1,this.generateMipmaps=!1}}class Rf extends Nn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,x=null;const p=e.getContextAttributes();let d=null,E=null;const v=[],I=[],M=new Set,g=new Map,N=new Ae;N.layers.enable(1),N.viewport=new ne;const P=new Ae;P.layers.enable(2),P.viewport=new ne;const S=[N,P],y=new yf;y.layers.enable(1),y.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let X=v[$];return X===void 0&&(X=new Xr,v[$]=X),X.getTargetRaySpace()},this.getControllerGrip=function($){let X=v[$];return X===void 0&&(X=new Xr,v[$]=X),X.getGripSpace()},this.getHand=function($){let X=v[$];return X===void 0&&(X=new Xr,v[$]=X),X.getHandSpace()};function q($){const X=I.indexOf($.inputSource);if(X===-1)return;const tt=v[X];tt!==void 0&&tt.dispatchEvent({type:$.type,data:$.inputSource})}function b(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",b),i.removeEventListener("inputsourceschange",R);for(let $=0;$<v.length;$++){const X=I[$];X!==null&&(I[$]=null,v[$].disconnect(X))}w=null,O=null,t.setRenderTarget(d),m=null,h=null,f=null,i=null,E=null,at.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",b),i.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:m}),E=new vn(m.framebufferWidth,m.framebufferHeight,{format:Le,type:Mn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let X=null,tt=null,it=null;p.depth&&(it=p.stencil?35056:33190,X=p.stencil?ni:In,tt=p.stencil?Kn:_n);const B={colorFormat:32856,depthFormat:it,scaleFactor:r};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(B),i.updateRenderState({layers:[h]}),E=new vn(h.textureWidth,h.textureHeight,{format:Le,type:Mn,depthTexture:new Nf(h.textureWidth,h.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const It=t.properties.get(E);It.__ignoreDepthValues=h.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R($){for(let X=0;X<$.removed.length;X++){const tt=$.removed[X],it=I.indexOf(tt);it>=0&&(I[it]=null,v[it].disconnect(tt))}for(let X=0;X<$.added.length;X++){const tt=$.added[X];let it=I.indexOf(tt);if(it===-1){for(let It=0;It<v.length;It++)if(It>=I.length){I.push(tt),it=It;break}else if(I[It]===null){I[It]=tt,it=It;break}if(it===-1)break}const B=v[it];B&&B.connect(tt)}}const z=new U,V=new U;function Z($,X,tt){z.setFromMatrixPosition(X.matrixWorld),V.setFromMatrixPosition(tt.matrixWorld);const it=z.distanceTo(V),B=X.projectionMatrix.elements,It=tt.projectionMatrix.elements,pt=B[14]/(B[10]-1),ft=B[14]/(B[10]+1),ot=(B[9]+1)/B[5],Lt=(B[9]-1)/B[5],Tt=(B[8]-1)/B[0],_t=(It[8]+1)/It[0],Vt=pt*Tt,kt=pt*_t,Ht=it/(-Tt+_t),Jt=Ht*-Tt;X.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Jt),$.translateZ(Ht),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const zt=pt+Ht,Rt=ft+Ht,le=Vt-Jt,ie=kt+(it-Jt),C=ot*ft/Rt*zt,_=Lt*ft/Rt*zt;$.projectionMatrix.makePerspective(le,ie,C,_,zt,Rt)}function H($,X){X===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(X.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;y.near=P.near=N.near=$.near,y.far=P.far=N.far=$.far,(w!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,O=y.far);const X=$.parent,tt=y.cameras;H(y,X);for(let B=0;B<tt.length;B++)H(tt[B],X);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),$.matrix.copy(y.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const it=$.children;for(let B=0,It=it.length;B<It;B++)it[B].updateMatrixWorld(!0);tt.length===2?Z(y,N,P):y.projectionMatrix.copy(N.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.getPlanes=function(){return M};let K=null;function J($,X){if(u=X.getViewerPose(l||o),x=X,u!==null){const tt=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let it=!1;tt.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let B=0;B<tt.length;B++){const It=tt[B];let pt=null;if(m!==null)pt=m.getViewport(It);else{const ot=f.getViewSubImage(h,It);pt=ot.viewport,B===0&&(t.setRenderTargetTextures(E,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(E))}let ft=S[B];ft===void 0&&(ft=new Ae,ft.layers.enable(B),ft.viewport=new ne,S[B]=ft),ft.matrix.fromArray(It.transform.matrix),ft.projectionMatrix.fromArray(It.projectionMatrix),ft.viewport.set(pt.x,pt.y,pt.width,pt.height),B===0&&y.matrix.copy(ft.matrix),it===!0&&y.cameras.push(ft)}}for(let tt=0;tt<v.length;tt++){const it=I[tt],B=v[tt];it!==null&&B!==void 0&&B.update(it,X,l||o)}if(K&&K($,X),X.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let tt=null;for(const it of M)X.detectedPlanes.has(it)||(tt===null&&(tt=[]),tt.push(it));if(tt!==null)for(const it of tt)M.delete(it),g.delete(it),n.dispatchEvent({type:"planeremoved",data:it});for(const it of X.detectedPlanes)if(!M.has(it))M.add(it),g.set(it,X.lastChangedTime),n.dispatchEvent({type:"planeadded",data:it});else{const B=g.get(it);it.lastChangedTime>B&&(g.set(it,it.lastChangedTime),n.dispatchEvent({type:"planechanged",data:it}))}}x=null}const at=new Eo;at.setAnimationLoop(J),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}}function Lf(s,t){function e(p,d){d.color.getRGB(p.fogColor.value,po(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,E,v,I){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,I)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),x(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,E,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ie&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ie&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let I;d.aoMap?I=d.aoMap:d.lightMap&&(I=d.lightMap),I!==void 0&&(I.isWebGLRenderTarget&&(I=I.texture),I.matrixAutoUpdate===!0&&I.updateMatrix(),p.uv2Transform.value.copy(I.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,E,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=v*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let I;d.map?I=d.map:d.alphaMap&&(I=d.alphaMap),I!==void 0&&(I.matrixAutoUpdate===!0&&I.updateMatrix(),p.uvTransform.value.copy(I.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E;d.map?E=d.map:d.alphaMap&&(E=d.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ie&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function wf(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(v,I){const M=I.program;n.uniformBlockBinding(v,M)}function l(v,I){let M=i[v.id];M===void 0&&(x(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",d));const g=I.program;n.updateUBOMapping(v,g);const N=t.render.frame;r[v.id]!==N&&(h(v),r[v.id]=N)}function u(v){const I=f();v.__bindingPointIndex=I;const M=s.createBuffer(),g=v.__size,N=v.usage;return s.bindBuffer(35345,M),s.bufferData(35345,g,N),s.bindBuffer(35345,null),s.bindBufferBase(35345,I,M),M}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const I=i[v.id],M=v.uniforms,g=v.__cache;s.bindBuffer(35345,I);for(let N=0,P=M.length;N<P;N++){const S=M[N];if(m(S,N,g)===!0){const y=S.__offset,w=Array.isArray(S.value)?S.value:[S.value];let O=0;for(let q=0;q<w.length;q++){const b=w[q],R=p(b);typeof b=="number"?(S.__data[0]=b,s.bufferSubData(35345,y+O,S.__data)):b.isMatrix3?(S.__data[0]=b.elements[0],S.__data[1]=b.elements[1],S.__data[2]=b.elements[2],S.__data[3]=b.elements[0],S.__data[4]=b.elements[3],S.__data[5]=b.elements[4],S.__data[6]=b.elements[5],S.__data[7]=b.elements[0],S.__data[8]=b.elements[6],S.__data[9]=b.elements[7],S.__data[10]=b.elements[8],S.__data[11]=b.elements[0]):(b.toArray(S.__data,O),O+=R.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,y,S.__data)}}s.bindBuffer(35345,null)}function m(v,I,M){const g=v.value;if(M[I]===void 0){if(typeof g=="number")M[I]=g;else{const N=Array.isArray(g)?g:[g],P=[];for(let S=0;S<N.length;S++)P.push(N[S].clone());M[I]=P}return!0}else if(typeof g=="number"){if(M[I]!==g)return M[I]=g,!0}else{const N=Array.isArray(M[I])?M[I]:[M[I]],P=Array.isArray(g)?g:[g];for(let S=0;S<N.length;S++){const y=N[S];if(y.equals(P[S])===!1)return y.copy(P[S]),!0}}return!1}function x(v){const I=v.uniforms;let M=0;const g=16;let N=0;for(let P=0,S=I.length;P<S;P++){const y=I[P],w={boundary:0,storage:0},O=Array.isArray(y.value)?y.value:[y.value];for(let q=0,b=O.length;q<b;q++){const R=O[q],z=p(R);w.boundary+=z.boundary,w.storage+=z.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=M,P>0){N=M%g;const q=g-N;N!==0&&q-w.boundary<0&&(M+=g-N,y.__offset=M)}M+=w.storage}return N=M%g,N>0&&(M+=g-N),v.__size=M,v.__cache={},this}function p(v){const I={boundary:0,storage:0};return typeof v=="number"?(I.boundary=4,I.storage=4):v.isVector2?(I.boundary=8,I.storage=8):v.isVector3||v.isColor?(I.boundary=16,I.storage=12):v.isVector4?(I.boundary=16,I.storage=16):v.isMatrix3?(I.boundary=48,I.storage=48):v.isMatrix4?(I.boundary=64,I.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),I}function d(v){const I=v.target;I.removeEventListener("dispose",d);const M=o.indexOf(I.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[I.id]),delete i[I.id],delete r[I.id]}function E(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:E}}function Pf(){const s=Ki("canvas");return s.style.display="block",s}function Mo(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:Pf(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cn,this.physicallyCorrectLights=!1,this.toneMapping=Ze,this.toneMappingExposure=1;const p=this;let d=!1,E=0,v=0,I=null,M=-1,g=null;const N=new ne,P=new ne;let S=null,y=t.width,w=t.height,O=1,q=null,b=null;const R=new ne(0,0,y,w),z=new ne(0,0,y,w);let V=!1;const Z=new hs;let H=!1,K=!1,J=null;const at=new qt,$=new vt,X=new U,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return I===null?O:1}let B=e;function It(T,G){for(let Y=0;Y<T.length;Y++){const D=T[Y],j=t.getContext(D,G);if(j!==null)return j}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${us}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",At,!1),B===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),B=It(G,T),B===null)throw It(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pt,ft,ot,Lt,Tt,_t,Vt,kt,Ht,Jt,zt,Rt,le,ie,C,_,k,et,rt,lt,St,A,F,ut;function dt(){pt=new Hh(B),ft=new $h(B,pt,s),pt.init(ft),A=new Af(B,pt,ft),ot=new Cf(B,pt,ft),Lt=new Xh,Tt=new uf,_t=new vf(B,pt,ot,Tt,ft,A,Lt),Vt=new Gh(p),kt=new Vh(p),Ht=new ec(B,ft),F=new Dh(B,pt,Ht,ft),Jt=new kh(B,Ht,Lt,F),zt=new Zh(B,Jt,Ht,Lt),rt=new jh(B,ft,_t),_=new Uh(Tt),Rt=new cf(p,Vt,kt,pt,ft,F,_),le=new Lf(p,Tt),ie=new df,C=new _f(pt,ft),et=new Fh(p,Vt,kt,ot,zt,u,o),k=new Mf(p,zt,ft),ut=new wf(B,Lt,ft,ot),lt=new Oh(B,pt,Lt,ft),St=new Wh(B,pt,Lt,ft),Lt.programs=Rt.programs,p.capabilities=ft,p.extensions=pt,p.properties=Tt,p.renderLists=ie,p.shadowMap=k,p.state=ot,p.info=Lt}dt();const ct=new Rf(p,B);this.xr=ct,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(y,w,!1))},this.getSize=function(T){return T.set(y,w)},this.setSize=function(T,G,Y){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}y=T,w=G,t.width=Math.floor(T*O),t.height=Math.floor(G*O),Y!==!1&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(y*O,w*O).floor()},this.setDrawingBufferSize=function(T,G,Y){y=T,w=G,O=Y,t.width=Math.floor(T*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,G,Y,D){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,G,Y,D),ot.viewport(N.copy(R).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,G,Y,D){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,G,Y,D),ot.scissor(P.copy(z).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){ot.setScissorTest(V=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){b=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(T=!0,G=!0,Y=!0){let D=0;T&&(D|=16384),G&&(D|=256),Y&&(D|=1024),B.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",At,!1),ie.dispose(),C.dispose(),Tt.dispose(),Vt.dispose(),kt.dispose(),zt.dispose(),F.dispose(),ut.dispose(),Rt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ht),ct.removeEventListener("sessionend",Et),J&&(J.dispose(),J=null),Dt.stop()};function gt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Lt.autoReset,G=k.enabled,Y=k.autoUpdate,D=k.needsUpdate,j=k.type;dt(),Lt.autoReset=T,k.enabled=G,k.autoUpdate=Y,k.needsUpdate=D,k.type=j}function At(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function bt(T){const G=T.target;G.removeEventListener("dispose",bt),$t(G)}function $t(T){L(T),Tt.remove(T)}function L(T){const G=Tt.get(T).programs;G!==void 0&&(G.forEach(function(Y){Rt.releaseProgram(Y)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Y,D,j,xt){G===null&&(G=tt);const Mt=j.isMesh&&j.matrixWorld.determinant()<0,yt=Do(T,G,Y,D,j);ot.setMaterial(D,Mt);let Nt=Y.index,Ot=1;D.wireframe===!0&&(Nt=Jt.getWireframeAttribute(Y),Ot=2);const wt=Y.drawRange,Pt=Y.attributes.position;let Wt=wt.start*Ot,me=(wt.start+wt.count)*Ot;xt!==null&&(Wt=Math.max(Wt,xt.start*Ot),me=Math.min(me,(xt.start+xt.count)*Ot)),Nt!==null?(Wt=Math.max(Wt,0),me=Math.min(me,Nt.count)):Pt!=null&&(Wt=Math.max(Wt,0),me=Math.min(me,Pt.count));const Be=me-Wt;if(Be<0||Be===1/0)return;F.setup(j,D,yt,Y,Nt);let cn,Xt=lt;if(Nt!==null&&(cn=Ht.get(Nt),Xt=St,Xt.setIndex(cn)),j.isMesh)D.wireframe===!0?(ot.setLineWidth(D.wireframeLinewidth*it()),Xt.setMode(1)):Xt.setMode(4);else if(j.isLine){let Ft=D.linewidth;Ft===void 0&&(Ft=1),ot.setLineWidth(Ft*it()),j.isLineSegments?Xt.setMode(1):j.isLineLoop?Xt.setMode(2):Xt.setMode(3)}else j.isPoints?Xt.setMode(0):j.isSprite&&Xt.setMode(4);if(j.isInstancedMesh)Xt.renderInstances(Wt,Be,j.count);else if(Y.isInstancedBufferGeometry){const Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ur=Math.min(Y.instanceCount,Ft);Xt.renderInstances(Wt,Be,ur)}else Xt.render(Wt,Be)},this.compile=function(T,G){function Y(D,j,xt){D.transparent===!0&&D.side===nn&&D.forceSinglePass===!1?(D.side=Ie,D.needsUpdate=!0,Me(D,j,xt),D.side=an,D.needsUpdate=!0,Me(D,j,xt),D.side=nn):Me(D,j,xt)}h=C.get(T),h.init(),x.push(h),T.traverseVisible(function(D){D.isLight&&D.layers.test(G.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(D){const j=D.material;if(j)if(Array.isArray(j))for(let xt=0;xt<j.length;xt++){const Mt=j[xt];Y(Mt,T,D)}else Y(j,T,D)}),x.pop(),h=null};let W=null;function Q(T){W&&W(T)}function ht(){Dt.stop()}function Et(){Dt.start()}const Dt=new Eo;Dt.setAnimationLoop(Q),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(T){W=T,ct.setAnimationLoop(T),T===null?Dt.stop():Dt.start()},ct.addEventListener("sessionstart",ht),ct.addEventListener("sessionend",Et),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(G),G=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,G,I),h=C.get(T,x.length),h.init(),x.push(h),at.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(at),K=this.localClippingEnabled,H=_.init(this.clippingPlanes,K),f=ie.get(T,m.length),f.init(),m.push(f),Qt(T,G,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(q,b),H===!0&&_.beginShadows();const Y=h.state.shadowsArray;if(k.render(Y,T,G),H===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(f,T),h.setupLights(p.physicallyCorrectLights),G.isArrayCamera){const D=G.cameras;for(let j=0,xt=D.length;j<xt;j++){const Mt=D[j];ae(f,T,Mt,Mt.viewport)}}else ae(f,T,G);I!==null&&(_t.updateMultisampleRenderTarget(I),_t.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(p,T,G),F.resetDefaultState(),M=-1,g=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Qt(T,G,Y,D){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){D&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);const Mt=zt.update(T),yt=T.material;yt.visible&&f.push(T,Mt,yt,Y,X.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Lt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Lt.render.frame),!T.frustumCulled||Z.intersectsObject(T))){D&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);const Mt=zt.update(T),yt=T.material;if(Array.isArray(yt)){const Nt=Mt.groups;for(let Ot=0,wt=Nt.length;Ot<wt;Ot++){const Pt=Nt[Ot],Wt=yt[Pt.materialIndex];Wt&&Wt.visible&&f.push(T,Mt,Wt,Y,X.z,Pt)}}else yt.visible&&f.push(T,Mt,yt,Y,X.z,null)}}const xt=T.children;for(let Mt=0,yt=xt.length;Mt<yt;Mt++)Qt(xt[Mt],G,Y,D)}function ae(T,G,Y,D){const j=T.opaque,xt=T.transmissive,Mt=T.transparent;h.setupLightsView(Y),H===!0&&_.setGlobalState(p.clippingPlanes,Y),xt.length>0&&ln(j,G,Y),D&&ot.viewport(N.copy(D)),j.length>0&&Bt(j,G,Y),xt.length>0&&Bt(xt,G,Y),Mt.length>0&&Bt(Mt,G,Y),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function ln(T,G,Y){const D=ft.isWebGL2;J===null&&(J=new vn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Ti:Mn,minFilter:Ii,samples:D&&r===!0?4:0})),p.getDrawingBufferSize($),D?J.setSize($.x,$.y):J.setSize(as($.x),as($.y));const j=p.getRenderTarget();p.setRenderTarget(J),p.clear();const xt=p.toneMapping;p.toneMapping=Ze,Bt(T,G,Y),p.toneMapping=xt,_t.updateMultisampleRenderTarget(J),_t.updateRenderTargetMipmap(J),p.setRenderTarget(j)}function Bt(T,G,Y){const D=G.isScene===!0?G.overrideMaterial:null;for(let j=0,xt=T.length;j<xt;j++){const Mt=T[j],yt=Mt.object,Nt=Mt.geometry,Ot=D===null?Mt.material:D,wt=Mt.group;yt.layers.test(Y.layers)&&ze(yt,G,Y,Nt,Ot,wt)}}function ze(T,G,Y,D,j,xt){T.onBeforeRender(p,G,Y,D,j,xt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(p,G,Y,D,T,xt),j.transparent===!0&&j.side===nn&&j.forceSinglePass===!1?(j.side=Ie,j.needsUpdate=!0,p.renderBufferDirect(Y,G,D,j,T,xt),j.side=an,j.needsUpdate=!0,p.renderBufferDirect(Y,G,D,j,T,xt),j.side=nn):p.renderBufferDirect(Y,G,D,j,T,xt),T.onAfterRender(p,G,Y,D,j,xt)}function Me(T,G,Y){G.isScene!==!0&&(G=tt);const D=Tt.get(T),j=h.state.lights,xt=h.state.shadowsArray,Mt=j.state.version,yt=Rt.getParameters(T,j.state,xt,G,Y),Nt=Rt.getProgramCacheKey(yt);let Ot=D.programs;D.environment=T.isMeshStandardMaterial?G.environment:null,D.fog=G.fog,D.envMap=(T.isMeshStandardMaterial?kt:Vt).get(T.envMap||D.environment),Ot===void 0&&(T.addEventListener("dispose",bt),Ot=new Map,D.programs=Ot);let wt=Ot.get(Nt);if(wt!==void 0){if(D.currentProgram===wt&&D.lightsStateVersion===Mt)return Ss(T,yt),wt}else yt.uniforms=Rt.getUniforms(T),T.onBuild(Y,yt,p),T.onBeforeCompile(yt,p),wt=Rt.acquireProgram(yt,Nt),Ot.set(Nt,wt),D.uniforms=yt.uniforms;const Pt=D.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=_.uniform),Ss(T,yt),D.needsLights=$o(T),D.lightsStateVersion=Mt,D.needsLights&&(Pt.ambientLightColor.value=j.state.ambient,Pt.lightProbe.value=j.state.probe,Pt.directionalLights.value=j.state.directional,Pt.directionalLightShadows.value=j.state.directionalShadow,Pt.spotLights.value=j.state.spot,Pt.spotLightShadows.value=j.state.spotShadow,Pt.rectAreaLights.value=j.state.rectArea,Pt.ltc_1.value=j.state.rectAreaLTC1,Pt.ltc_2.value=j.state.rectAreaLTC2,Pt.pointLights.value=j.state.point,Pt.pointLightShadows.value=j.state.pointShadow,Pt.hemisphereLights.value=j.state.hemi,Pt.directionalShadowMap.value=j.state.directionalShadowMap,Pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pt.spotShadowMap.value=j.state.spotShadowMap,Pt.spotLightMatrix.value=j.state.spotLightMatrix,Pt.spotLightMap.value=j.state.spotLightMap,Pt.pointShadowMap.value=j.state.pointShadowMap,Pt.pointShadowMatrix.value=j.state.pointShadowMatrix);const Wt=wt.getUniforms(),me=Zi.seqWithValue(Wt.seq,Pt);return D.currentProgram=wt,D.uniformsList=me,wt}function Ss(T,G){const Y=Tt.get(T);Y.outputEncoding=G.outputEncoding,Y.instancing=G.instancing,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Do(T,G,Y,D,j){G.isScene!==!0&&(G=tt),_t.resetTextureUnits();const xt=G.fog,Mt=D.isMeshStandardMaterial?G.environment:null,yt=I===null?p.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:Cn,Nt=(D.isMeshStandardMaterial?kt:Vt).get(D.envMap||Mt),Ot=D.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,wt=!!D.normalMap&&!!Y.attributes.tangent,Pt=!!Y.morphAttributes.position,Wt=!!Y.morphAttributes.normal,me=!!Y.morphAttributes.color,Be=D.toneMapped?p.toneMapping:Ze,cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Xt=cn!==void 0?cn.length:0,Ft=Tt.get(D),ur=h.state.lights;if(H===!0&&(K===!0||T!==g)){const ge=T===g&&D.id===M;_.setState(D,T,ge)}let te=!1;D.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ur.state.version||Ft.outputEncoding!==yt||j.isInstancedMesh&&Ft.instancing===!1||!j.isInstancedMesh&&Ft.instancing===!0||j.isSkinnedMesh&&Ft.skinning===!1||!j.isSkinnedMesh&&Ft.skinning===!0||Ft.envMap!==Nt||D.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==_.numPlanes||Ft.numIntersection!==_.numIntersection)||Ft.vertexAlphas!==Ot||Ft.vertexTangents!==wt||Ft.morphTargets!==Pt||Ft.morphNormals!==Wt||Ft.morphColors!==me||Ft.toneMapping!==Be||ft.isWebGL2===!0&&Ft.morphTargetsCount!==Xt)&&(te=!0):(te=!0,Ft.__version=D.version);let un=Ft.currentProgram;te===!0&&(un=Me(D,G,j));let Is=!1,ui=!1,hr=!1;const ce=un.getUniforms(),hn=Ft.uniforms;if(ot.useProgram(un.program)&&(Is=!0,ui=!0,hr=!0),D.id!==M&&(M=D.id,ui=!0),Is||g!==T){if(ce.setValue(B,"projectionMatrix",T.projectionMatrix),ft.logarithmicDepthBuffer&&ce.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),g!==T&&(g=T,ui=!0,hr=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const ge=ce.map.cameraPosition;ge!==void 0&&ge.setValue(B,X.setFromMatrixPosition(T.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ce.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||j.isSkinnedMesh)&&ce.setValue(B,"viewMatrix",T.matrixWorldInverse)}if(j.isSkinnedMesh){ce.setOptional(B,j,"bindMatrix"),ce.setOptional(B,j,"bindMatrixInverse");const ge=j.skeleton;ge&&(ft.floatVertexTextures?(ge.boneTexture===null&&ge.computeBoneTexture(),ce.setValue(B,"boneTexture",ge.boneTexture,_t),ce.setValue(B,"boneTextureSize",ge.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dr=Y.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0&&ft.isWebGL2===!0)&&rt.update(j,Y,D,un),(ui||Ft.receiveShadow!==j.receiveShadow)&&(Ft.receiveShadow=j.receiveShadow,ce.setValue(B,"receiveShadow",j.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(hn.envMap.value=Nt,hn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ui&&(ce.setValue(B,"toneMappingExposure",p.toneMappingExposure),Ft.needsLights&&Oo(hn,hr),xt&&D.fog===!0&&le.refreshFogUniforms(hn,xt),le.refreshMaterialUniforms(hn,D,O,w,J),Zi.upload(B,Ft.uniformsList,hn,_t)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Zi.upload(B,Ft.uniformsList,hn,_t),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ce.setValue(B,"center",j.center),ce.setValue(B,"modelViewMatrix",j.modelViewMatrix),ce.setValue(B,"normalMatrix",j.normalMatrix),ce.setValue(B,"modelMatrix",j.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const ge=D.uniformsGroups;for(let fr=0,Uo=ge.length;fr<Uo;fr++)if(ft.isWebGL2){const Ts=ge[fr];ut.update(Ts,un),ut.bind(Ts,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function Oo(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function $o(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,G,Y){Tt.get(T.texture).__webglTexture=G,Tt.get(T.depthTexture).__webglTexture=Y;const D=Tt.get(T);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=Y===void 0,D.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,G){const Y=Tt.get(T);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,Y=0){I=T,E=G,v=Y;let D=!0,j=null,xt=!1,Mt=!1;if(T){const Nt=Tt.get(T);Nt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),D=!1):Nt.__webglFramebuffer===void 0?_t.setupRenderTarget(T):Nt.__hasExternalTextures&&_t.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Mt=!0);const wt=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(j=wt[G],xt=!0):ft.isWebGL2&&T.samples>0&&_t.useMultisampledRTT(T)===!1?j=Tt.get(T).__webglMultisampledFramebuffer:j=wt,N.copy(T.viewport),P.copy(T.scissor),S=T.scissorTest}else N.copy(R).multiplyScalar(O).floor(),P.copy(z).multiplyScalar(O).floor(),S=V;if(ot.bindFramebuffer(36160,j)&&ft.drawBuffers&&D&&ot.drawBuffers(T,j),ot.viewport(N),ot.scissor(P),ot.setScissorTest(S),xt){const Nt=Tt.get(T.texture);B.framebufferTexture2D(36160,36064,34069+G,Nt.__webglTexture,Y)}else if(Mt){const Nt=Tt.get(T.texture),Ot=G||0;B.framebufferTextureLayer(36160,36064,Nt.__webglTexture,Y||0,Ot)}M=-1},this.readRenderTargetPixels=function(T,G,Y,D,j,xt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(yt=yt[Mt]),yt){ot.bindFramebuffer(36160,yt);try{const Nt=T.texture,Ot=Nt.format,wt=Nt.type;if(Ot!==Le&&A.convert(Ot)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=wt===Ti&&(pt.has("EXT_color_buffer_half_float")||ft.isWebGL2&&pt.has("EXT_color_buffer_float"));if(wt!==Mn&&A.convert(wt)!==B.getParameter(35738)&&!(wt===xn&&(ft.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-D&&Y>=0&&Y<=T.height-j&&B.readPixels(G,Y,D,j,A.convert(Ot),A.convert(wt),xt)}finally{const Nt=I!==null?Tt.get(I).__webglFramebuffer:null;ot.bindFramebuffer(36160,Nt)}}},this.copyFramebufferToTexture=function(T,G,Y=0){const D=Math.pow(2,-Y),j=Math.floor(G.image.width*D),xt=Math.floor(G.image.height*D);_t.setTexture2D(G,0),B.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,j,xt),ot.unbindTexture()},this.copyTextureToTexture=function(T,G,Y,D=0){const j=G.image.width,xt=G.image.height,Mt=A.convert(Y.format),yt=A.convert(Y.type);_t.setTexture2D(Y,0),B.pixelStorei(37440,Y.flipY),B.pixelStorei(37441,Y.premultiplyAlpha),B.pixelStorei(3317,Y.unpackAlignment),G.isDataTexture?B.texSubImage2D(3553,D,T.x,T.y,j,xt,Mt,yt,G.image.data):G.isCompressedTexture?B.compressedTexSubImage2D(3553,D,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,Mt,G.mipmaps[0].data):B.texSubImage2D(3553,D,T.x,T.y,Mt,yt,G.image),D===0&&Y.generateMipmaps&&B.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(T,G,Y,D,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,Mt=T.max.y-T.min.y+1,yt=T.max.z-T.min.z+1,Nt=A.convert(D.format),Ot=A.convert(D.type);let wt;if(D.isData3DTexture)_t.setTexture3D(D,0),wt=32879;else if(D.isDataArrayTexture)_t.setTexture2DArray(D,0),wt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,D.flipY),B.pixelStorei(37441,D.premultiplyAlpha),B.pixelStorei(3317,D.unpackAlignment);const Pt=B.getParameter(3314),Wt=B.getParameter(32878),me=B.getParameter(3316),Be=B.getParameter(3315),cn=B.getParameter(32877),Xt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;B.pixelStorei(3314,Xt.width),B.pixelStorei(32878,Xt.height),B.pixelStorei(3316,T.min.x),B.pixelStorei(3315,T.min.y),B.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?B.texSubImage3D(wt,j,G.x,G.y,G.z,xt,Mt,yt,Nt,Ot,Xt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(wt,j,G.x,G.y,G.z,xt,Mt,yt,Nt,Xt.data)):B.texSubImage3D(wt,j,G.x,G.y,G.z,xt,Mt,yt,Nt,Ot,Xt),B.pixelStorei(3314,Pt),B.pixelStorei(32878,Wt),B.pixelStorei(3316,me),B.pixelStorei(3315,Be),B.pixelStorei(32877,cn),j===0&&D.generateMipmaps&&B.generateMipmap(wt),ot.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?_t.setTextureCube(T,0):T.isData3DTexture?_t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_t.setTexture2DArray(T,0):_t.setTexture2D(T,0),ot.unbindTexture()},this.resetState=function(){E=0,v=0,I=null,ot.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ff extends Mo{}Ff.prototype.isWebGL1Renderer=!0;class Df extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ps extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Da=new U,Oa=new U,$a=new qt,Yr=new lo,Yi=new ar;class Co extends se{constructor(t=new Ge,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Da.fromBufferAttribute(e,i-1),Oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Da.distanceTo(Oa);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(i),Yi.radius+=r,t.ray.intersectsSphere(Yi)===!1)return;$a.copy(i).invert(),Yr.copy(t.ray).applyMatrix4($a);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new U,u=new U,f=new U,h=new U,m=this.isLineSegments?2:1,x=n.index,d=n.attributes.position;if(x!==null){const E=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let I=E,M=v-1;I<M;I+=m){const g=x.getX(I),N=x.getX(I+1);if(l.fromBufferAttribute(d,g),u.fromBufferAttribute(d,N),Yr.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(h);S<t.near||S>t.far||e.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}else{const E=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let I=E,M=v-1;I<M;I+=m){if(l.fromBufferAttribute(d,I),u.fromBufferAttribute(d,I+1),Yr.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(h);N<t.near||N>t.far||e.push({distance:N,point:f.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ua=new U,Ga=new U;class Of extends Co{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ua.fromBufferAttribute(e,i),Ga.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ua.distanceTo(Ga);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $f extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vo extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const qr=new qt,za=new U,Ba=new U;class Uf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;za.setFromMatrixPosition(t.matrixWorld),e.position.copy(za),Ba.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ba),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gf extends Uf{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zf extends vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.shadow=new Gf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bf extends vo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Va{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vf extends Of{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ut(n),i=new Ut(i);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,m=0,x=-a;h<=e;h++,x+=o){c.push(-a,0,x,a,0,x),c.push(x,0,-a,x,0,a);const p=h===r?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const u=new Ge;u.setAttribute("position",new Pe(c,3)),u.setAttribute("color",new Pe(l,3));const f=new ps({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:us}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=us);const Ha={type:"change"},jr={type:"start"},ka={type:"end"};class Hf extends Nn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rn.ROTATE,MIDDLE:Rn.DOLLY,RIGHT:Rn.PAN},this.touches={ONE:Ln.ROTATE,TWO:Ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ie),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ha),n.update(),r=i.NONE},this.update=function(){const A=new U,F=new An().setFromUnitVectors(t.up,new U(0,1,0)),ut=F.clone().invert(),dt=new U,ct=new An,gt=2*Math.PI;return function(){const At=n.object.position;A.copy(At).sub(n.target),A.applyQuaternion(F),a.setFromVector3(A),n.autoRotate&&r===i.NONE&&y(P()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let bt=n.minAzimuthAngle,$t=n.maxAzimuthAngle;return isFinite(bt)&&isFinite($t)&&(bt<-Math.PI?bt+=gt:bt>Math.PI&&(bt-=gt),$t<-Math.PI?$t+=gt:$t>Math.PI&&($t-=gt),bt<=$t?a.theta=Math.max(bt,Math.min($t,a.theta)):a.theta=a.theta>(bt+$t)/2?Math.max(bt,a.theta):Math.min($t,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(ut),At.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||dt.distanceToSquared(n.object.position)>o||8*(1-ct.dot(n.object.quaternion))>o?(n.dispatchEvent(Ha),dt.copy(n.object.position),ct.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",Vt),n.domElement.removeEventListener("pointercancel",Jt),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",kt),n.domElement.removeEventListener("pointerup",Ht),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ie)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Va,c=new Va;let l=1;const u=new U;let f=!1;const h=new vt,m=new vt,x=new vt,p=new vt,d=new vt,E=new vt,v=new vt,I=new vt,M=new vt,g=[],N={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function S(){return Math.pow(.95,n.zoomSpeed)}function y(A){c.theta-=A}function w(A){c.phi-=A}const O=function(){const A=new U;return function(ut,dt){A.setFromMatrixColumn(dt,0),A.multiplyScalar(-ut),u.add(A)}}(),q=function(){const A=new U;return function(ut,dt){n.screenSpacePanning===!0?A.setFromMatrixColumn(dt,1):(A.setFromMatrixColumn(dt,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ut),u.add(A)}}(),b=function(){const A=new U;return function(ut,dt){const ct=n.domElement;if(n.object.isPerspectiveCamera){const gt=n.object.position;A.copy(gt).sub(n.target);let mt=A.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),O(2*ut*mt/ct.clientHeight,n.object.matrix),q(2*dt*mt/ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(ut*(n.object.right-n.object.left)/n.object.zoom/ct.clientWidth,n.object.matrix),q(dt*(n.object.top-n.object.bottom)/n.object.zoom/ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(A){h.set(A.clientX,A.clientY)}function Z(A){v.set(A.clientX,A.clientY)}function H(A){p.set(A.clientX,A.clientY)}function K(A){m.set(A.clientX,A.clientY),x.subVectors(m,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;y(2*Math.PI*x.x/F.clientHeight),w(2*Math.PI*x.y/F.clientHeight),h.copy(m),n.update()}function J(A){I.set(A.clientX,A.clientY),M.subVectors(I,v),M.y>0?R(S()):M.y<0&&z(S()),v.copy(I),n.update()}function at(A){d.set(A.clientX,A.clientY),E.subVectors(d,p).multiplyScalar(n.panSpeed),b(E.x,E.y),p.copy(d),n.update()}function $(A){A.deltaY<0?z(S()):A.deltaY>0&&R(S()),n.update()}function X(A){let F=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):b(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):b(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):b(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):b(-n.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),n.update())}function tt(){if(g.length===1)h.set(g[0].pageX,g[0].pageY);else{const A=.5*(g[0].pageX+g[1].pageX),F=.5*(g[0].pageY+g[1].pageY);h.set(A,F)}}function it(){if(g.length===1)p.set(g[0].pageX,g[0].pageY);else{const A=.5*(g[0].pageX+g[1].pageX),F=.5*(g[0].pageY+g[1].pageY);p.set(A,F)}}function B(){const A=g[0].pageX-g[1].pageX,F=g[0].pageY-g[1].pageY,ut=Math.sqrt(A*A+F*F);v.set(0,ut)}function It(){n.enableZoom&&B(),n.enablePan&&it()}function pt(){n.enableZoom&&B(),n.enableRotate&&tt()}function ft(A){if(g.length==1)m.set(A.pageX,A.pageY);else{const ut=St(A),dt=.5*(A.pageX+ut.x),ct=.5*(A.pageY+ut.y);m.set(dt,ct)}x.subVectors(m,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;y(2*Math.PI*x.x/F.clientHeight),w(2*Math.PI*x.y/F.clientHeight),h.copy(m)}function ot(A){if(g.length===1)d.set(A.pageX,A.pageY);else{const F=St(A),ut=.5*(A.pageX+F.x),dt=.5*(A.pageY+F.y);d.set(ut,dt)}E.subVectors(d,p).multiplyScalar(n.panSpeed),b(E.x,E.y),p.copy(d)}function Lt(A){const F=St(A),ut=A.pageX-F.x,dt=A.pageY-F.y,ct=Math.sqrt(ut*ut+dt*dt);I.set(0,ct),M.set(0,Math.pow(I.y/v.y,n.zoomSpeed)),R(M.y),v.copy(I)}function Tt(A){n.enableZoom&&Lt(A),n.enablePan&&ot(A)}function _t(A){n.enableZoom&&Lt(A),n.enableRotate&&ft(A)}function Vt(A){n.enabled!==!1&&(g.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",kt),n.domElement.addEventListener("pointerup",Ht)),et(A),A.pointerType==="touch"?C(A):zt(A))}function kt(A){n.enabled!==!1&&(A.pointerType==="touch"?_(A):Rt(A))}function Ht(A){rt(A),g.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",kt),n.domElement.removeEventListener("pointerup",Ht)),n.dispatchEvent(ka),r=i.NONE}function Jt(A){rt(A)}function zt(A){let F;switch(A.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Rn.DOLLY:if(n.enableZoom===!1)return;Z(A),r=i.DOLLY;break;case Rn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;H(A),r=i.PAN}else{if(n.enableRotate===!1)return;V(A),r=i.ROTATE}break;case Rn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;V(A),r=i.ROTATE}else{if(n.enablePan===!1)return;H(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(jr)}function Rt(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(A);break;case i.DOLLY:if(n.enableZoom===!1)return;J(A);break;case i.PAN:if(n.enablePan===!1)return;at(A);break}}function le(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(jr),$(A),n.dispatchEvent(ka))}function ie(A){n.enabled===!1||n.enablePan===!1||X(A)}function C(A){switch(lt(A),g.length){case 1:switch(n.touches.ONE){case Ln.ROTATE:if(n.enableRotate===!1)return;tt(),r=i.TOUCH_ROTATE;break;case Ln.PAN:if(n.enablePan===!1)return;it(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ln.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;It(),r=i.TOUCH_DOLLY_PAN;break;case Ln.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(jr)}function _(A){switch(lt(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ft(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ot(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(A),n.update();break;default:r=i.NONE}}function k(A){n.enabled!==!1&&A.preventDefault()}function et(A){g.push(A)}function rt(A){delete N[A.pointerId];for(let F=0;F<g.length;F++)if(g[F].pointerId==A.pointerId){g.splice(F,1);return}}function lt(A){let F=N[A.pointerId];F===void 0&&(F=new vt,N[A.pointerId]=F),F.set(A.pageX,A.pageY)}function St(A){const F=A.pointerId===g[0].pointerId?g[1]:g[0];return N[F.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",Vt),n.domElement.addEventListener("pointercancel",Jt),n.domElement.addEventListener("wheel",le,{passive:!1}),this.update()}}function Xn(s=""){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$";let e="";const n=`${Date.now()}-${Math.random()}-${s}`;for(let i=0;i<22;i+=1){const r=n.charCodeAt(i%n.length)+i*17;e+=t[Math.abs(r)%t.length]}return e}function re(s){return String(s??"").replace(/'/g,"''")}function kf(s,t){var c,l,u,f,h,m,x,p,d,E,v,I,M;const e=new Date().toISOString(),n=.5,i=Xn("project"),r=["ISO-10303-21;","HEADER;","FILE_DESCRIPTION(('ViewDefinition[DesignTransferView]'),'2;1');",`FILE_NAME('export.ifc','${re(e)}',('AlignmentOffline'),('AlignmentOffline'),'GitHub Copilot','GitHub Copilot','');`,"FILE_SCHEMA(('IFC4X3_ADD2'));","ENDSEC;","DATA;",`#1=IFCPROJECT('${i}',$,'Alignment Event Export',$,$,$,$,(#10),#5);`,"#2=IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);","#3=IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.);","#4=IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.);","#5=IFCUNITASSIGNMENT((#2,#3,#4));","#6=IFCCARTESIANPOINT((0.,0.,0.));","#7=IFCDIRECTION((0.,0.,1.));","#8=IFCDIRECTION((1.,0.,0.));","#9=IFCAXIS2PLACEMENT3D(#6,#7,#8);","#10=IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#9,$);"];let o=20;const a=()=>{const g=o;return o+=1,g};for(const g of s){const N=((c=g==null?void 0:g.data)==null?void 0:c.localXYZ)||{},P=((l=g==null?void 0:g.data)==null?void 0:l.worldXYZ)||{},S=((u=g==null?void 0:g.data)==null?void 0:u.station)??N.y??0,y=(g==null?void 0:g.timestamp)||e,w=(g==null?void 0:g.name)||"RiskObservation",O=((h=(f=g==null?void 0:g.data)==null?void 0:f.classification)==null?void 0:h.classCode)||"TK1",q=((x=(m=g==null?void 0:g.data)==null?void 0:m.classification)==null?void 0:x.riskType)||"bom sprutbetong",b=(g==null?void 0:g.id)||"marker",R=((p=g==null?void 0:g.data)==null?void 0:p.sessionId)||"unknown-session",z=Number(((d=g==null?void 0:g.data)==null?void 0:d.xRaw)??0),V=Number(((v=(E=g==null?void 0:g.data)==null?void 0:E.offsets)==null?void 0:v.floor)??0),Z=Number(((M=(I=g==null?void 0:g.data)==null?void 0:I.offsets)==null?void 0:M.anfang)??0),H=Number(N.x??0),K=Number(N.y??S),J=Number(N.z??0),at=Number(P.x||0),$=Number(P.y||0),X=Number(P.z||0),tt=Xn(`${(g==null?void 0:g.id)||"action-request"}-action`),it=Xn(`${(g==null?void 0:g.id)||"annotation"}-annotation`),B=Xn(`${(g==null?void 0:g.id)||"pset-action"}-pset`),It=Xn(`${(g==null?void 0:g.id)||"rel-action"}-rel-def`),pt=Xn(`${(g==null?void 0:g.id)||"rel-assign"}-rel-assign`),ft=a(),ot=a(),Lt=a(),Tt=a(),_t=a(),Vt=a(),kt=a(),Ht=a(),Jt=a(),zt=a(),Rt=a(),le=a(),ie=a(),C=a(),_=a(),k=a(),et=a(),rt=a(),lt=a(),St=a(),A=a(),F=a(),ut=a(),dt=a(),ct=a(),gt=a(),mt=a(),At=a(),bt=a(),$t=a(),L=a(),W=a(),Q=a(),ht=a(),Et=a(),Dt=a();r.push(`#${ft}=IFCANNOTATION('${it}',$,'RiskPoint',$,'Mapped risk position in model coordinates',#${ot},#${_t});`),r.push(`#${ot}=IFCLOCALPLACEMENT($,#${Lt});`),r.push(`#${Lt}=IFCAXIS2PLACEMENT3D(#${Tt},#7,#8);`),r.push(`#${Tt}=IFCCARTESIANPOINT((${at},${$},${X}));`),r.push(`#${_t}=IFCPRODUCTDEFINITIONSHAPE($,$,(#${Vt},#${kt}));`),r.push(`#${Vt}=IFCSHAPEREPRESENTATION(#10,'Annotation','Point',(#${Tt}));`),r.push(`#${kt}=IFCSHAPEREPRESENTATION(#10,'Body','CSG',(#${Ht}));`),r.push(`#${Ht}=IFCBLOCK(#${Jt},${n},${n},${n});`),r.push(`#${Jt}=IFCAXIS2PLACEMENT3D(#${zt},#7,#8);`),r.push(`#${zt}=IFCCARTESIANPOINT((${-.25},${-.25},${-.25}));`),r.push(`#${Rt}=IFCACTIONREQUEST('${tt}',$,'${re(w)}',$,'Risk record from zone 2','${re(b)}',$,.USERDEFINED.);`),r.push(`#${le}=IFCPROPERTYSINGLEVALUE('RequestSourceName',$,IFCLABEL('AlignmentOffline'),$);`),r.push(`#${ie}=IFCPROPERTYSINGLEVALUE('RequestSourceIfc',$,IFCLABEL('${re(t)}'),$);`),r.push(`#${C}=IFCPROPERTYSINGLEVALUE('RequestSourceDescription',$,IFCTEXT('source=${re(t)}; timestamp=${re(y)}; station=${re(S)}; riskType=${re(q)}; riskLevel=${re(O)}; sessionId=${re(R)}'),$);`),r.push(`#${_}=IFCPROPERTYSINGLEVALUE('Status',$,IFCLABEL('OPEN'),$);`),r.push(`#${k}=IFCPROPERTYSINGLEVALUE('EventId',$,IFCLABEL('${re(b)}'),$);`),r.push(`#${et}=IFCPROPERTYSINGLEVALUE('EventName',$,IFCLABEL('${re(w)}'),$);`),r.push(`#${rt}=IFCPROPERTYSINGLEVALUE('SessionId',$,IFCLABEL('${re(R)}'),$);`),r.push(`#${lt}=IFCPROPERTYSINGLEVALUE('ObservationTimestamp',$,IFCTEXT('${re(y)}'),$);`),r.push(`#${St}=IFCPROPERTYSINGLEVALUE('ExportTimestamp',$,IFCTEXT('${re(e)}'),$);`),r.push(`#${A}=IFCPROPERTYSINGLEVALUE('RiskType',$,IFCLABEL('${re(q)}'),$);`),r.push(`#${F}=IFCPROPERTYSINGLEVALUE('RiskLevel',$,IFCLABEL('${re(O)}'),$);`),r.push(`#${ut}=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(${S}),$);`),r.push(`#${dt}=IFCPROPERTYSINGLEVALUE('XRaw',$,IFCREAL(${z}),$);`),r.push(`#${ct}=IFCPROPERTYSINGLEVALUE('LocalX',$,IFCLENGTHMEASURE(${H}),$);`),r.push(`#${gt}=IFCPROPERTYSINGLEVALUE('LocalY',$,IFCLENGTHMEASURE(${K}),$);`),r.push(`#${mt}=IFCPROPERTYSINGLEVALUE('LocalZ',$,IFCLENGTHMEASURE(${J}),$);`),r.push(`#${At}=IFCPROPERTYSINGLEVALUE('WorldX',$,IFCLENGTHMEASURE(${at}),$);`),r.push(`#${bt}=IFCPROPERTYSINGLEVALUE('WorldY',$,IFCLENGTHMEASURE(${$}),$);`),r.push(`#${$t}=IFCPROPERTYSINGLEVALUE('WorldZ',$,IFCLENGTHMEASURE(${X}),$);`),r.push(`#${L}=IFCPROPERTYSINGLEVALUE('FloorOffset',$,IFCLENGTHMEASURE(${V}),$);`),r.push(`#${W}=IFCPROPERTYSINGLEVALUE('AnfangOffset',$,IFCLENGTHMEASURE(${Z}),$);`),r.push(`#${Q}=IFCPROPERTYSINGLEVALUE('GeometryType',$,IFCLABEL('Cube 0.5m'),$);`),r.push(`#${ht}=IFCPROPERTYSET('${B}',$,'Pset_ActionRequest',$,(#${le},#${ie},#${C},#${_},#${k},#${et},#${rt},#${lt},#${St},#${A},#${F},#${ut},#${dt},#${ct},#${gt},#${mt},#${At},#${bt},#${$t},#${L},#${W},#${Q}));`),r.push(`#${Et}=IFCRELDEFINESBYPROPERTIES('${It}',$,$,$,(#${Rt}),#${ht});`),r.push(`#${Dt}=IFCRELASSIGNSTOCONTROL('${pt}',$,$,$,(#${ft}),#${Rt});`)}return r.push("ENDSEC;"),r.push("END-ISO-10303-21;"),r.join(`
`)}const Wf=`ISO-10303-21;\r
HEADER;\r
FILE_DESCRIPTION(('ViewDefinition[DesignTransferView]'),'2;1');\r
FILE_NAME('/dev/null','2026-08-04T14:42:33+02:00',(''),(''),'IfcOpenShell 0.8.4','IfcOpenShell 0.8.4','Nobody');\r
FILE_SCHEMA(('IFC4X3_ADD2'));\r
ENDSEC;\r
DATA;\r
#1=IFCPROJECT('0uyPEjF0fDHOYgU$UEnbEt',$,'HS.C31.00.01-B-110-T-9001',$,$,$,$,(#10,#30),#5);\r
#2=IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);\r
#3=IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.);\r
#4=IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.);\r
#5=IFCUNITASSIGNMENT((#4,#2,#3));\r
#6=IFCCARTESIANPOINT((0.,0.,0.));\r
#7=IFCDIRECTION((0.,0.,1.));\r
#8=IFCDIRECTION((1.,0.,0.));\r
#9=IFCAXIS2PLACEMENT3D(#6,#7,#8);\r
#10=IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#9,$);\r
#11=IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*,#10,$,.MODEL_VIEW.,$);\r
#12=IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body-Fallback','Model',*,*,*,*,#10,$,.MODEL_VIEW.,$);\r
#13=IFCSITE('0TeyJ$4Of9tA0L$WGTMqZB',$,'Site',$,$,$,$,$,$,$,$,$,$,$);\r
#14=IFCBUILDING('2TZhw0NZf1uQkVX6mmM3OB',$,'Alignment Building',$,$,$,$,$,$,$,$,$);\r
#15=IFCBUILDINGSTOREY('0irunfFMb8hfcsX0i8BDDz',$,'Terrain Storey',$,$,$,$,$,$,$);\r
#16=IFCRELAGGREGATES('1tKMpwOBLDGOJBjMSh8pBn',$,$,$,#1,(#13,#19));\r
#17=IFCRELAGGREGATES('0cUOGlGt1CJwwvHilIHYKs',$,$,$,#13,(#14));\r
#18=IFCRELAGGREGATES('0OSSa78T55EeziF3sZrH6s',$,$,$,#14,(#15));\r
#19=IFCALIGNMENT('3J0trvf6zBcgp1709OdQ48',$,'FL1 - \\X2\\00D6\\X0\\vre del',$,$,#106,#34,$);\r
#20=IFCALIGNMENTHORIZONTAL('2_9BCk2CrFqBMJbQ9NPOVN',$,$,$,$,$,$);\r
#21=IFCALIGNMENTVERTICAL('0q2iA34oX118gQwxA_jysS',$,$,$,$,$,$);\r
#22=IFCRELNESTS('2wqtNWzX56Mf6eIWVoXjaK',$,$,$,#19,(#20,#21));\r
#26=IFCCARTESIANPOINT((0.,0.,0.));\r
#27=IFCDIRECTION((0.,0.,1.));\r
#28=IFCDIRECTION((1.,0.,0.));\r
#29=IFCAXIS2PLACEMENT3D(#26,#27,#28);\r
#30=IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#29,$);\r
#31=IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Axis','Model',*,*,*,*,#30,$,.MODEL_VIEW.,$);\r
#32=IFCCOMPOSITECURVE((#116,#138,#160,#182,#204,#226,#248,#270,#292,#314,#336,#358,#380,#61),.F.);\r
#33=IFCSHAPEREPRESENTATION(#31,'FootPrint','Curve2D',(#32));\r
#34=IFCPRODUCTDEFINITIONSHAPE($,$,(#33,#36,#810));\r
#35=IFCGRADIENTCURVE((#402,#424,#446,#468,#490,#512,#534,#556,#578,#600,#622,#644,#666,#688,#710,#732,#754,#84),.F.,#32,$);\r
#36=IFCSHAPEREPRESENTATION(#31,'Axis','Curve3D',(#35));\r
#37=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(0.),$,$,$,#32);\r
#38=IFCAXIS2PLACEMENTLINEAR(#37,$,$);\r
#39=IFCLINEARPLACEMENT($,#38,#43);\r
#40=IFCCARTESIANPOINT((0.,0.,0.));\r
#41=IFCDIRECTION((0.,0.,1.));\r
#42=IFCDIRECTION((-0.183874005223543,0.982949820796084,0.));\r
#43=IFCAXIS2PLACEMENT3D(#40,#41,#42);\r
#44=IFCREFERENT('30XIeGJu93DuYqXIFon1uJ',$,'0+000.000',$,$,#39,$,.STATION.);\r
#45=IFCPROPERTYSET('1$IxGg3vbC78dTnQp$eXPB',$,'Pset_Stationing',$,(#47));\r
#46=IFCRELDEFINESBYPROPERTIES('3NRsOzWgT2$A8Fy7njwjgh',$,$,$,(#44),#45);\r
#47=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(0.),$);\r
#48=IFCRELNESTS('2umihjtSr6lgwMjbnAMEzS',$,$,$,#19,(#44,#124,#410,#146,#432,#168,#454,#190,#476,#212,#498,#234,#520,#256,#542,#278,#564,#300,#586,#322,#608,#630,#344,#652,#674,#366,#696,#388,#718,#740,#762,#69,#92));\r
#49=IFCRELPOSITIONS('2sDp1t3_TFcg03HJZ41hJK',$,$,$,#44,(#19));\r
#50=IFCCARTESIANPOINT((-86.1943087382404,208.5311230817));\r
#51=IFCALIGNMENTHORIZONTALSEGMENT($,$,#50,19.0559106401722,0.,0.,0.,$,.LINE.);\r
#52=IFCALIGNMENTSEGMENT('33JYPVmb9E7fY1m5ZhHN1h',$,$,$,$,$,$,#51);\r
#53=IFCRELNESTS('1PWKpP_JX0ue3h_K8La6yZ',$,$,$,#20,(#109,#131,#153,#175,#197,#219,#241,#263,#285,#307,#329,#351,#373,#52));\r
#54=IFCCARTESIANPOINT((0.,0.));\r
#55=IFCDIRECTION((1.,0.));\r
#56=IFCVECTOR(#55,1.);\r
#57=IFCLINE(#54,#56);\r
#58=IFCCARTESIANPOINT((-86.1943087382404,208.5311230817));\r
#59=IFCDIRECTION((0.0524050479806578,0.998625911413351));\r
#60=IFCAXIS2PLACEMENT2D(#58,#59);\r
#61=IFCCURVESEGMENT(.DISCONTINUOUS.,#60,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(0.),#57);\r
#62=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(414.51123925),$,$,$,#32);\r
#63=IFCAXIS2PLACEMENTLINEAR(#62,$,$);\r
#64=IFCLINEARPLACEMENT($,#63,#68);\r
#65=IFCCARTESIANPOINT((-86.1943087382404,208.5311230817,0.));\r
#66=IFCDIRECTION((0.,0.,1.));\r
#67=IFCDIRECTION((0.0524050479806578,0.998625911413351,0.));\r
#68=IFCAXIS2PLACEMENT3D(#65,#66,#67);\r
#69=IFCREFERENT('36CGadNQ597AP$F0In__b_',$,'P.O.E. (0+414.511)',$,$,#64,$,.STATION.);\r
#70=IFCPROPERTYSET('1tWJTDaEjAqPppNy6eeBvE',$,'Pset_Stationing',$,(#72));\r
#71=IFCRELDEFINESBYPROPERTIES('2OBdm89ZTEMB_o87cxU$Wc',$,$,$,(#69),#70);\r
#72=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(414.51123925),$);\r
#73=IFCRELPOSITIONS('30moquZhr5auKy1dN8eiL2',$,$,$,#69,(#52));\r
#74=IFCALIGNMENTVERTICALSEGMENT($,$,414.511239254,0.,-41.2,-0.000293283401469771,-0.000293283401469771,$,.CONSTANTGRADIENT.);\r
#75=IFCALIGNMENTSEGMENT('39LxZ6Xq12C8GGa8yiWrnD',$,$,$,$,$,$,#74);\r
#76=IFCRELNESTS('2afttJzs98m9t$HleoHzXm',$,$,$,#21,(#394,#416,#438,#460,#482,#504,#526,#548,#570,#592,#614,#636,#658,#680,#702,#724,#746,#75));\r
#77=IFCCARTESIANPOINT((0.,0.));\r
#78=IFCDIRECTION((1.,0.));\r
#79=IFCVECTOR(#78,1.);\r
#80=IFCLINE(#77,#79);\r
#81=IFCCARTESIANPOINT((414.511239254,-41.2));\r
#82=IFCDIRECTION((0.999999956992426,-0.000293283388856364));\r
#83=IFCAXIS2PLACEMENT2D(#81,#82);\r
#84=IFCCURVESEGMENT(.DISCONTINUOUS.,#83,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(0.),#80);\r
#85=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(414.511239254),$,$,$,#32);\r
#86=IFCAXIS2PLACEMENTLINEAR(#85,$,$);\r
#87=IFCLINEARPLACEMENT($,#86,#91);\r
#88=IFCCARTESIANPOINT((-86.1943087380308,208.531123085694,0.));\r
#89=IFCDIRECTION((0.,0.,1.));\r
#90=IFCDIRECTION((0.0524050479806578,0.998625911413351,0.));\r
#91=IFCAXIS2PLACEMENT3D(#88,#89,#90);\r
#92=IFCREFERENT('2aBz3irTv8TgjKnQevYfmQ',$,'V.P.O.E. (0+414.511)',$,$,#87,$,.STATION.);\r
#93=IFCPROPERTYSET('2WT$h3kRX4h86XteB3iFfB',$,'Pset_Stationing',$,(#95));\r
#94=IFCRELDEFINESBYPROPERTIES('00h9EbHFX4NgTQ9eWdf$si',$,$,$,(#92),#93);\r
#95=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(414.511239254),$);\r
#96=IFCRELPOSITIONS('2qia_HyOv1UvJhbrCJce4r',$,$,$,#92,(#75));\r
#97=IFCCARTESIANPOINT((0.,0.,0.));\r
#98=IFCDIRECTION((0.,0.,1.));\r
#99=IFCDIRECTION((1.,0.,0.));\r
#100=IFCAXIS2PLACEMENT3D(#97,#98,#99);\r
#101=IFCLOCALPLACEMENT($,#100);\r
#102=IFCCARTESIANPOINT((6576166.59114294,156078.137209932,0.));\r
#103=IFCDIRECTION((0.,0.,1.));\r
#104=IFCDIRECTION((1.,0.,0.));\r
#105=IFCAXIS2PLACEMENT3D(#102,#103,#104);\r
#106=IFCLOCALPLACEMENT($,#105);\r
#107=IFCCARTESIANPOINT((0.,0.));\r
#108=IFCALIGNMENTHORIZONTALSEGMENT($,$,#107,1.75572253991017,0.,0.,5.431406253,$,.LINE.);\r
#109=IFCALIGNMENTSEGMENT('2W_d6U2b9119hykKSQURfX',$,$,$,$,$,$,#108);\r
#110=IFCCARTESIANPOINT((0.,0.));\r
#111=IFCDIRECTION((1.,0.));\r
#112=IFCVECTOR(#111,1.);\r
#113=IFCLINE(#110,#112);\r
#114=IFCDIRECTION((-0.183874005223543,0.982949820796084));\r
#115=IFCAXIS2PLACEMENT2D(#107,#114);\r
#116=IFCCURVESEGMENT(.CONTINUOUS.,#115,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(5.431406253),#113);\r
#117=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(0.),$,$,$,#32);\r
#118=IFCAXIS2PLACEMENTLINEAR(#117,$,$);\r
#119=IFCLINEARPLACEMENT($,#118,#123);\r
#120=IFCCARTESIANPOINT((0.,0.,0.));\r
#121=IFCDIRECTION((0.,0.,1.));\r
#122=IFCDIRECTION((-0.183874005223543,0.982949820796084,0.));\r
#123=IFCAXIS2PLACEMENT3D(#120,#121,#122);\r
#124=IFCREFERENT('2xiX2b8G5BL8MY5RoWF60E',$,'P.O.B. (0+000.000)',$,$,#119,$,.STATION.);\r
#125=IFCPROPERTYSET('07j_d9i293$xml7XzAGS1m',$,'Pset_Stationing',$,(#127));\r
#126=IFCRELDEFINESBYPROPERTIES('3lIoc_MHX00OBb3$MPAviF',$,$,$,(#124),#125);\r
#127=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(0.),$);\r
#128=IFCRELPOSITIONS('0ue5h1fLT4Derdd2H4kafF',$,$,$,#124,(#109));\r
#129=IFCCARTESIANPOINT((-0.998694422654808,5.33879980299389));\r
#130=IFCALIGNMENTHORIZONTALSEGMENT($,$,#129,-1.38587011371435,-20.0000000011575,-20.0000000011575,16.011992981,$,.CIRCULARARC.);\r
#131=IFCALIGNMENTSEGMENT('3LO3Tig5jDPxeiktZpvQLI',$,$,$,$,$,$,#130);\r
#132=IFCCARTESIANPOINT((0.,0.));\r
#133=IFCDIRECTION((1.,0.));\r
#134=IFCAXIS2PLACEMENT2D(#132,#133);\r
#135=IFCCIRCLE(#134,20.0000000011575);\r
#136=IFCDIRECTION((0.183874005189408,-0.982949820802469));\r
#137=IFCAXIS2PLACEMENT2D(#129,#136);\r
#138=IFCCURVESEGMENT(.DISCONTINUOUS.,#137,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(-16.011992981),#135);\r
#139=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(5.431406253),$,$,$,#32);\r
#140=IFCAXIS2PLACEMENTLINEAR(#139,$,$);\r
#141=IFCLINEARPLACEMENT($,#140,#145);\r
#142=IFCCARTESIANPOINT((-0.998694421735304,5.33879980305708,0.));\r
#143=IFCDIRECTION((0.,0.,1.));\r
#144=IFCDIRECTION((-0.183874005223543,0.982949820796084,0.));\r
#145=IFCAXIS2PLACEMENT3D(#142,#143,#144);\r
#146=IFCREFERENT('3cZQBSDa9Bqwvq_ELPfaCY',$,'P.C. (0+005.431)',$,$,#141,$,.STATION.);\r
#147=IFCPROPERTYSET('2YB20w$Uf4GuWBqYpcipde',$,'Pset_Stationing',$,(#149));\r
#148=IFCRELDEFINESBYPROPERTIES('2ISKwakkf1l9szCVcESroc',$,$,$,(#146),#147);\r
#149=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(5.431406253),$);\r
#150=IFCRELPOSITIONS('0Jg$sndKn3wQfjvvzjGBuE',$,$,$,#146,(#131));\r
#151=IFCCARTESIANPOINT((-9.60919380281121,18.3325737979903));\r
#152=IFCALIGNMENTHORIZONTALSEGMENT($,$,#151,2.55632218888777,0.,0.,40.851013423,$,.LINE.);\r
#153=IFCALIGNMENTSEGMENT('0yDs68XXvA5A5OKUyBThCS',$,$,$,$,$,$,#152);\r
#154=IFCCARTESIANPOINT((0.,0.));\r
#155=IFCDIRECTION((1.,0.));\r
#156=IFCVECTOR(#155,1.);\r
#157=IFCLINE(#154,#156);\r
#158=IFCDIRECTION((-0.833562704953956,0.552424851821353));\r
#159=IFCAXIS2PLACEMENT2D(#151,#158);\r
#160=IFCCURVESEGMENT(.CONTINUOUS.,#159,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(40.851013423),#157);\r
#161=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(21.443399234),$,$,$,#32);\r
#162=IFCAXIS2PLACEMENTLINEAR(#161,$,$);\r
#163=IFCLINEARPLACEMENT($,#162,#167);\r
#164=IFCCARTESIANPOINT((-4.32999649639189,-9.88884902155701,0.));\r
#165=IFCDIRECTION((0.,0.,1.));\r
#166=IFCDIRECTION((-0.577508435994071,-0.816384717125255,0.));\r
#167=IFCAXIS2PLACEMENT3D(#164,#165,#166);\r
#168=IFCREFERENT('1E0fOXPof9jPkilD0FuIDF',$,'P.T. (0+021.443)',$,$,#163,$,.STATION.);\r
#169=IFCPROPERTYSET('27_RkssiX3nBxLqlBrBZXW',$,'Pset_Stationing',$,(#171));\r
#170=IFCRELDEFINESBYPROPERTIES('3uWVevyP906gpUVkB09$zs',$,$,$,(#168),#169);\r
#171=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(21.443399234),$);\r
#172=IFCRELPOSITIONS('0$wASwUGrA$upN3yMAoVlA',$,$,$,#168,(#153));\r
#173=IFCCARTESIANPOINT((-43.6610750528052,40.8996888349939));\r
#174=IFCALIGNMENTHORIZONTALSEGMENT($,$,#173,-0.585255769866598,20.0000000010705,20.0000000010705,60.965388767,$,.CIRCULARARC.);\r
#175=IFCALIGNMENTSEGMENT('2ALFyQ3CP6cwLftm0VDqA0',$,$,$,$,$,$,#174);\r
#176=IFCCARTESIANPOINT((0.,0.));\r
#177=IFCDIRECTION((1.,0.));\r
#178=IFCAXIS2PLACEMENT2D(#176,#177);\r
#179=IFCCIRCLE(#178,20.0000000010705);\r
#180=IFCDIRECTION((0.833570822656241,-0.55241260269494));\r
#181=IFCAXIS2PLACEMENT2D(#173,#180);\r
#182=IFCCURVESEGMENT(.DISCONTINUOUS.,#181,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(60.965388767),#179);\r
#183=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(62.294412657),$,$,$,#32);\r
#184=IFCAXIS2PLACEMENTLINEAR(#183,$,$);\r
#185=IFCLINEARPLACEMENT($,#184,#189);\r
#186=IFCCARTESIANPOINT((-43.6610750517975,40.8996888349432,0.));\r
#187=IFCDIRECTION((0.,0.,1.));\r
#188=IFCDIRECTION((-0.833562704953956,0.552424851821353,0.));\r
#189=IFCAXIS2PLACEMENT3D(#186,#187,#188);\r
#190=IFCREFERENT('2cgW7cAGX9wOKotdcnE0sR',$,'P.C. (0+062.294)',$,$,#185,$,.STATION.);\r
#191=IFCPROPERTYSET('3GyoKNZnv4jfvWvvY$T1mt',$,'Pset_Stationing',$,(#193));\r
#192=IFCRELDEFINESBYPROPERTIES('1HpLU6QZ12S9PEVxFh3mVk',$,$,$,(#190),#191);\r
#193=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(62.294412657),$);\r
#194=IFCRELPOSITIONS('0giMJ3axzCtwGz6Ix0UU8r',$,$,$,#190,(#175));\r
#195=IFCCARTESIANPOINT((-23.1662197047845,75.1995393160032));\r
#196=IFCALIGNMENTHORIZONTALSEGMENT($,$,#195,-0.491932554718649,0.,0.,6.991358094,$,.LINE.);\r
#197=IFCALIGNMENTSEGMENT('387zniWnTBGxMiMzvwZNW3',$,$,$,$,$,$,#196);\r
#198=IFCCARTESIANPOINT((0.,0.));\r
#199=IFCDIRECTION((1.,0.));\r
#200=IFCVECTOR(#199,1.);\r
#201=IFCLINE(#198,#200);\r
#202=IFCDIRECTION((0.881421701241717,-0.472330164800171));\r
#203=IFCAXIS2PLACEMENT2D(#195,#202);\r
#204=IFCCURVESEGMENT(.CONTINUOUS.,#203,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(6.991358094),#201);\r
#205=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(123.259801424),$,$,$,#32);\r
#206=IFCAXIS2PLACEMENTLINEAR(#205,$,$);\r
#207=IFCLINEARPLACEMENT($,#206,#211);\r
#208=IFCCARTESIANPOINT((-20.0590740526909,73.1404144404493,0.));\r
#209=IFCDIRECTION((0.,0.,1.));\r
#210=IFCDIRECTION((-0.778465457530248,0.627687447247611,0.));\r
#211=IFCAXIS2PLACEMENT3D(#208,#209,#210);\r
#212=IFCREFERENT('2eRmaD2uTAzvl_Jme8L2zq',$,'P.T. (0+123.260)',$,$,#207,$,.STATION.);\r
#213=IFCPROPERTYSET('0teBLeRD55cAbK9_nekSkr',$,'Pset_Stationing',$,(#215));\r
#214=IFCRELDEFINESBYPROPERTIES('2T9PsP36D3B9c_SaiWRg1g',$,$,$,(#212),#213);\r
#215=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(123.259801424),$);\r
#216=IFCRELPOSITIONS('0s8EZwhSv068nOqyImu3Dz',$,$,$,#212,(#197));\r
#217=IFCCARTESIANPOINT((-17.0038849608973,71.8973099949944));\r
#218=IFCALIGNMENTHORIZONTALSEGMENT($,$,#217,2.64966009892562,20.0000000007416,20.0000000007416,21.577275442,$,.CIRCULARARC.);\r
#219=IFCALIGNMENTSEGMENT('0YustWXF91wQ1CazHykeDZ',$,$,$,$,$,$,#218);\r
#220=IFCCARTESIANPOINT((0.,0.));\r
#221=IFCDIRECTION((1.,0.));\r
#222=IFCAXIS2PLACEMENT2D(#220,#221);\r
#223=IFCCIRCLE(#222,20.0000000007416);\r
#224=IFCDIRECTION((-0.88142170126745,0.472330164752151));\r
#225=IFCAXIS2PLACEMENT2D(#217,#224);\r
#226=IFCCURVESEGMENT(.DISCONTINUOUS.,#225,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(21.577275442),#223);\r
#227=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(130.251159518),$,$,$,#32);\r
#228=IFCAXIS2PLACEMENTLINEAR(#227,$,$);\r
#229=IFCLINEARPLACEMENT($,#228,#233);\r
#230=IFCCARTESIANPOINT((-17.0038849595809,71.8973099952872,0.));\r
#231=IFCDIRECTION((0.,0.,1.));\r
#232=IFCDIRECTION((0.881421701241717,-0.472330164800171,0.));\r
#233=IFCAXIS2PLACEMENT3D(#230,#231,#232);\r
#234=IFCREFERENT('1qJEWlbPf4L9v0b_WALXZw',$,'P.C. (0+130.251)',$,$,#229,$,.STATION.);\r
#235=IFCPROPERTYSET('36xKMmgiz3yvH5DO_Nvy3g',$,'Pset_Stationing',$,(#237));\r
#236=IFCRELDEFINESBYPROPERTIES('3QREFKsI10IgVUEOia7lSl',$,$,$,(#234),#235);\r
#237=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(130.251159518),$);\r
#238=IFCRELPOSITIONS('3CZrAI$wL4KOVx5mDeSTIv',$,$,$,#234,(#219));\r
#239=IFCCARTESIANPOINT((-6.45048825163394,54.2688759680022));\r
#240=IFCALIGNMENTHORIZONTALSEGMENT($,$,#239,-1.5707963267949,0.,0.,8.648772464,$,.LINE.);\r
#241=IFCALIGNMENTSEGMENT('09FsJFwyb4PAF_ipJ$td3a',$,$,$,$,$,$,#240);\r
#242=IFCCARTESIANPOINT((0.,0.));\r
#243=IFCDIRECTION((1.,0.));\r
#244=IFCVECTOR(#243,1.);\r
#245=IFCLINE(#242,#244);\r
#246=IFCDIRECTION((6.12323399573677E-17,-1.));\r
#247=IFCAXIS2PLACEMENT2D(#239,#246);\r
#248=IFCCURVESEGMENT(.CONTINUOUS.,#247,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(8.648772464),#245);\r
#249=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(151.82843496),$,$,$,#32);\r
#250=IFCAXIS2PLACEMENTLINEAR(#249,$,$);\r
#251=IFCLINEARPLACEMENT($,#250,#255);\r
#252=IFCCARTESIANPOINT((-37.5266568741316,70.9217582654237,0.));\r
#253=IFCDIRECTION((0.,0.,1.));\r
#254=IFCDIRECTION((-0.832644114790723,-0.553808430871518,0.));\r
#255=IFCAXIS2PLACEMENT3D(#252,#253,#254);\r
#256=IFCREFERENT('1fXaGH4vXAoxlwBS9UsHZn',$,'P.T. (0+151.828)',$,$,#251,$,.STATION.);\r
#257=IFCPROPERTYSET('2aAAkJVur6H8q069CbYf1n',$,'Pset_Stationing',$,(#259));\r
#258=IFCRELDEFINESBYPROPERTIES('3OkqUqyKz0RPu$7NTbiqx_',$,$,$,(#256),#257);\r
#259=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(151.82843496),$);\r
#260=IFCRELPOSITIONS('2oFiLbF956kuBxFIk5_5f2',$,$,$,#256,(#241));\r
#261=IFCCARTESIANPOINT((-6.45048825163394,45.620103504014));\r
#262=IFCALIGNMENTHORIZONTALSEGMENT($,$,#261,1.5707963267949,20.,20.,41.25457763,$,.CIRCULARARC.);\r
#263=IFCALIGNMENTSEGMENT('0cksjggHT9CvFsaJYsvuDf',$,$,$,$,$,$,#262);\r
#264=IFCCARTESIANPOINT((0.,0.));\r
#265=IFCDIRECTION((1.,0.));\r
#266=IFCAXIS2PLACEMENT2D(#264,#265);\r
#267=IFCCIRCLE(#266,20.);\r
#268=IFCDIRECTION((6.12323399573677E-17,1.));\r
#269=IFCAXIS2PLACEMENT2D(#261,#268);\r
#270=IFCCURVESEGMENT(.DISCONTINUOUS.,#269,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(41.25457763),#267);\r
#271=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(160.477207424),$,$,$,#32);\r
#272=IFCAXIS2PLACEMENTLINEAR(#271,$,$);\r
#273=IFCLINEARPLACEMENT($,#272,#277);\r
#274=IFCCARTESIANPOINT((-6.45048825163394,45.6201035040023,0.));\r
#275=IFCDIRECTION((0.,0.,1.));\r
#276=IFCDIRECTION((6.12323399573677E-17,-1.,0.));\r
#277=IFCAXIS2PLACEMENT3D(#274,#275,#276);\r
#278=IFCREFERENT('3f8Z2tcTvELOg6kUcqSXHt',$,'P.C. (0+160.477)',$,$,#273,$,.STATION.);\r
#279=IFCPROPERTYSET('05_x$aKGHDo8mAmuiuqnJx',$,'Pset_Stationing',$,(#281));\r
#280=IFCRELDEFINESBYPROPERTIES('1qecfxiArAZRQIH7Z_CUPR',$,$,$,(#278),#279);\r
#281=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(160.477207424),$);\r
#282=IFCRELPOSITIONS('3Hg6KvsOD7SR3ZWtHZJi29',$,$,$,#278,(#263));\r
#283=IFCCARTESIANPOINT((-35.8970915470272,27.9916694780113));\r
#284=IFCALIGNMENTHORIZONTALSEGMENT($,$,#283,2.64966009891286,0.,0.,53.258115927,$,.LINE.);\r
#285=IFCALIGNMENTSEGMENT('0GOWtHv1HFOPCIQvUK8sc4',$,$,$,$,$,$,#284);\r
#286=IFCCARTESIANPOINT((0.,0.));\r
#287=IFCDIRECTION((1.,0.));\r
#288=IFCVECTOR(#287,1.);\r
#289=IFCLINE(#286,#288);\r
#290=IFCDIRECTION((-0.881421701261423,0.472330164763398));\r
#291=IFCAXIS2PLACEMENT2D(#283,#290);\r
#292=IFCCURVESEGMENT(.CONTINUOUS.,#291,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(53.258115927),#289);\r
#293=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(201.731785054),$,$,$,#32);\r
#294=IFCAXIS2PLACEMENTLINEAR(#293,$,$);\r
#295=IFCLINEARPLACEMENT($,#294,#299);\r
#296=IFCCARTESIANPOINT((-35.8970915473986,63.2485375289763,0.));\r
#297=IFCDIRECTION((0.,0.,1.));\r
#298=IFCDIRECTION((-0.881421701248115,-0.472330164788232,0.));\r
#299=IFCAXIS2PLACEMENT3D(#296,#297,#298);\r
#300=IFCREFERENT('0MLog9Bvf7hPisazTqmtNp',$,'P.T. (0+201.732)',$,$,#295,$,.STATION.);\r
#301=IFCPROPERTYSET('2CEeLK95T1Buy3mYgHRPPf',$,'Pset_Stationing',$,(#303));\r
#302=IFCRELDEFINESBYPROPERTIES('3kLto9mz52YuiOapH26Hp1',$,$,$,(#300),#301);\r
#303=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(201.731785054),$);\r
#304=IFCRELPOSITIONS('31Q6Zo3VHFhwFec3feSmc5',$,$,$,#300,(#285));\r
#305=IFCCARTESIANPOINT((-82.8399506919086,53.1470841499977));\r
#306=IFCALIGNMENTHORIZONTALSEGMENT($,$,#305,-0.491932554687537,19.9999999998694,19.9999999998694,22.625345658,$,.CIRCULARARC.);\r
#307=IFCALIGNMENTSEGMENT('1G2RrP2LD1O9kBrZ1dKZwQ',$,$,$,$,$,$,#306);\r
#308=IFCCARTESIANPOINT((0.,0.));\r
#309=IFCDIRECTION((1.,0.));\r
#310=IFCAXIS2PLACEMENT2D(#308,#309);\r
#311=IFCCIRCLE(#310,19.9999999998694);\r
#312=IFCDIRECTION((0.881421701256412,-0.472330164772749));\r
#313=IFCAXIS2PLACEMENT2D(#305,#312);\r
#314=IFCCURVESEGMENT(.DISCONTINUOUS.,#313,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(22.625345658),#311);\r
#315=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(254.989900981),$,$,$,#32);\r
#316=IFCAXIS2PLACEMENTLINEAR(#315,$,$);\r
#317=IFCLINEARPLACEMENT($,#316,#321);\r
#318=IFCCARTESIANPOINT((-82.8399506933816,53.1470841487994,0.));\r
#319=IFCDIRECTION((0.,0.,1.));\r
#320=IFCDIRECTION((-0.881421701261423,0.472330164763398,0.));\r
#321=IFCAXIS2PLACEMENT3D(#318,#319,#320);\r
#322=IFCREFERENT('2txo071vvDawoLWb4s7WE6',$,'P.C. (0+254.990)',$,$,#317,$,.STATION.);\r
#323=IFCPROPERTYSET('28eyAxcxr8G8fzc_31sb$r',$,'Pset_Stationing',$,(#325));\r
#324=IFCRELDEFINESBYPROPERTIES('2jAvvSJsDDKhLtt2LfdctT',$,$,$,(#322),#323);\r
#325=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(254.989900981),$);\r
#326=IFCRELPOSITIONS('2a4hSdmir8Rezi_Kx5T4Rh',$,$,$,#322,(#307));\r
#327=IFCCARTESIANPOINT((-93.3658924009651,71.8231087670138));\r
#328=IFCALIGNMENTHORIZONTALSEGMENT($,$,#327,1.51839281601611,0.,0.,86.299215339,$,.LINE.);\r
#329=IFCALIGNMENTSEGMENT('3sUuAm$mv1DfO9BCK2lMlH',$,$,$,$,$,$,#328);\r
#330=IFCCARTESIANPOINT((0.,0.));\r
#331=IFCDIRECTION((1.,0.));\r
#332=IFCVECTOR(#331,1.);\r
#333=IFCLINE(#330,#332);\r
#334=IFCDIRECTION((0.0523795296142587,0.998627250217712));\r
#335=IFCAXIS2PLACEMENT2D(#327,#334);\r
#336=IFCCURVESEGMENT(.CONTSAMEGRADIENTSAMECURVATURE.,#335,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(86.299215339),#333);\r
#337=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(277.615246639),$,$,$,#32);\r
#338=IFCAXIS2PLACEMENTLINEAR(#337,$,$);\r
#339=IFCLINEARPLACEMENT($,#338,#343);\r
#340=IFCCARTESIANPOINT((-61.4601134451187,54.7256606224962,0.));\r
#341=IFCDIRECTION((0.,0.,1.));\r
#342=IFCDIRECTION((0.802492877630972,0.596661697573727,0.));\r
#343=IFCAXIS2PLACEMENT3D(#340,#341,#342);\r
#344=IFCREFERENT('1cugWzQePBw94yJW3izipU',$,'P.T. (0+277.615)',$,$,#339,$,.STATION.);\r
#345=IFCPROPERTYSET('0gVxH7dYrDWu7NoE40gHGn',$,'Pset_Stationing',$,(#347));\r
#346=IFCRELDEFINESBYPROPERTIES('1SDccZ76L4Rft6MigF9gHY',$,$,$,(#344),#345);\r
#347=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(277.615246639),$);\r
#348=IFCRELPOSITIONS('21s7hqzFH55QkjuWCOn58x',$,$,$,#344,(#329));\r
#349=IFCCARTESIANPOINT((-88.8455800954252,158.003856877011));\r
#350=IFCALIGNMENTHORIZONTALSEGMENT($,$,#349,1.51839281598563,0.,0.,10.000000001,$,.LINE.);\r
#351=IFCALIGNMENTSEGMENT('0CFdttWH1BaeJGgzzlHEjP',$,$,$,$,$,$,#350);\r
#352=IFCCARTESIANPOINT((0.,0.));\r
#353=IFCDIRECTION((1.,0.));\r
#354=IFCVECTOR(#353,1.);\r
#355=IFCLINE(#352,#354);\r
#356=IFCDIRECTION((0.0523795296446908,0.998627250216116));\r
#357=IFCAXIS2PLACEMENT2D(#349,#356);\r
#358=IFCCURVESEGMENT(.CONTINUOUS.,#357,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(10.000000001),#355);\r
#359=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(363.914461978),$,$,$,#32);\r
#360=IFCAXIS2PLACEMENTLINEAR(#359,$,$);\r
#361=IFCLINEARPLACEMENT($,#360,#365);\r
#362=IFCCARTESIANPOINT((-88.8455800954287,158.003856876946,0.));\r
#363=IFCDIRECTION((0.,0.,1.));\r
#364=IFCDIRECTION((0.0523795296142587,0.998627250217712,0.));\r
#365=IFCAXIS2PLACEMENT3D(#362,#363,#364);\r
#366=IFCREFERENT('1kKvGVF553RBUBpBAwnD19',$,'P.I. (0+363.914)',$,$,#361,$,.STATION.);\r
#367=IFCPROPERTYSET('12gjGj2XbB$Pd9uyDILud$',$,'Pset_Stationing',$,(#369));\r
#368=IFCRELDEFINESBYPROPERTIES('0P$vjRdTX7dO2E0ORmJ3B8',$,$,$,(#366),#367);\r
#369=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(363.914461978),$);\r
#370=IFCRELPOSITIONS('0YH5B8yOHD0QNg9jmLwHgr',$,$,$,#366,(#351));\r
#371=IFCCARTESIANPOINT((-88.3217847989872,167.990129379003));\r
#372=IFCALIGNMENTHORIZONTALSEGMENT($,$,#371,1.5183672625541,0.,0.,40.596777271,$,.LINE.);\r
#373=IFCALIGNMENTSEGMENT('15G$$nfCv7BvEBEiFGGwih',$,$,$,$,$,$,#372);\r
#374=IFCCARTESIANPOINT((0.,0.));\r
#375=IFCDIRECTION((1.,0.));\r
#376=IFCVECTOR(#375,1.);\r
#377=IFCLINE(#374,#376);\r
#378=IFCDIRECTION((0.0524050479806578,0.998625911413351));\r
#379=IFCAXIS2PLACEMENT2D(#371,#378);\r
#380=IFCCURVESEGMENT(.CONTSAMEGRADIENTSAMECURVATURE.,#379,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(40.596777271),#377);\r
#381=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(373.914461979),$,$,$,#32);\r
#382=IFCAXIS2PLACEMENTLINEAR(#381,$,$);\r
#383=IFCLINEARPLACEMENT($,#382,#387);\r
#384=IFCCARTESIANPOINT((-88.321784798926,167.99012938017,0.));\r
#385=IFCDIRECTION((0.,0.,1.));\r
#386=IFCDIRECTION((0.0523795296446908,0.998627250216116,0.));\r
#387=IFCAXIS2PLACEMENT3D(#384,#385,#386);\r
#388=IFCREFERENT('1lvCBca8DDwBXAjD4khVWX',$,'P.I. (0+373.914)',$,$,#383,$,.STATION.);\r
#389=IFCPROPERTYSET('2TqTRvdZH1VPorxGyENWWK',$,'Pset_Stationing',$,(#391));\r
#390=IFCRELDEFINESBYPROPERTIES('2e_DVziyrArhbamX$JT_HD',$,$,$,(#388),#389);\r
#391=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(373.914461979),$);\r
#392=IFCRELPOSITIONS('26P5i$Adz8$vySr3J6lUF4',$,$,$,#388,(#373));\r
#393=IFCALIGNMENTVERTICALSEGMENT($,$,0.,5.431406253,3.,-0.101262909526646,-0.101262909526646,$,.CONSTANTGRADIENT.);\r
#394=IFCALIGNMENTSEGMENT('3lzweQkyzFCgpVwCrh5nlH',$,$,$,$,$,$,#393);\r
#395=IFCCARTESIANPOINT((0.,0.));\r
#396=IFCDIRECTION((1.,0.));\r
#397=IFCVECTOR(#396,1.);\r
#398=IFCLINE(#395,#397);\r
#399=IFCCARTESIANPOINT((0.,3.));\r
#400=IFCDIRECTION((0.994912008186273,-0.100747684671941));\r
#401=IFCAXIS2PLACEMENT2D(#399,#400);\r
#402=IFCCURVESEGMENT(.CONTINUOUS.,#401,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(5.45918252901728),#398);\r
#403=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(0.),$,$,$,#32);\r
#404=IFCAXIS2PLACEMENTLINEAR(#403,$,$);\r
#405=IFCLINEARPLACEMENT($,#404,#409);\r
#406=IFCCARTESIANPOINT((0.,0.,0.));\r
#407=IFCDIRECTION((0.,0.,1.));\r
#408=IFCDIRECTION((-0.183874005223543,0.982949820796084,0.));\r
#409=IFCAXIS2PLACEMENT3D(#406,#407,#408);\r
#410=IFCREFERENT('1MHfYmuf50exv8gmfWyQWL',$,'V.P.O.B. (0+000.000)',$,$,#405,$,.STATION.);\r
#411=IFCPROPERTYSET('0zesrw7zb8wvg_bsyOUZ$4',$,'Pset_Stationing',$,(#413));\r
#412=IFCRELDEFINESBYPROPERTIES('0F$4In2ML0KRElIYXIpGEe',$,$,$,(#410),#411);\r
#413=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(0.),$);\r
#414=IFCRELPOSITIONS('2ZqzArg$b45Qb156Rc82MT',$,$,$,#410,(#394));\r
#415=IFCALIGNMENTVERTICALSEGMENT($,$,5.431406253,16.011992981,2.45,-0.0999251000108841,-0.0999251000108841,$,.CONSTANTGRADIENT.);\r
#416=IFCALIGNMENTSEGMENT('13wOy2Lm19$OoDmT50agTA',$,$,$,$,$,$,#415);\r
#417=IFCCARTESIANPOINT((0.,0.));\r
#418=IFCDIRECTION((1.,0.));\r
#419=IFCVECTOR(#418,1.);\r
#420=IFCLINE(#417,#419);\r
#421=IFCCARTESIANPOINT((5.431406253,2.45));\r
#422=IFCDIRECTION((0.995044566565663,-0.0994299278293607));\r
#423=IFCAXIS2PLACEMENT2D(#421,#422);\r
#424=IFCCURVESEGMENT(.CONTINUOUS.,#423,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(16.0917345001586),#420);\r
#425=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(5.431406253),$,$,$,#32);\r
#426=IFCAXIS2PLACEMENTLINEAR(#425,$,$);\r
#427=IFCLINEARPLACEMENT($,#426,#431);\r
#428=IFCCARTESIANPOINT((-0.998694421735305,5.33879980305708,0.));\r
#429=IFCDIRECTION((0.,0.,1.));\r
#430=IFCDIRECTION((-0.183874005223543,0.982949820796084,0.));\r
#431=IFCAXIS2PLACEMENT3D(#428,#429,#430);\r
#432=IFCREFERENT('3Kr0hGpgDC7vXwxqBfv$0d',$,'P.V.I (0+005.431)',$,$,#427,$,.STATION.);\r
#433=IFCPROPERTYSET('1p4ttc5njF3PcLZttOC2ed',$,'Pset_Stationing',$,(#435));\r
#434=IFCRELDEFINESBYPROPERTIES('0pGyaLA0b6pw6BkCoOsdD1',$,$,$,(#432),#433);\r
#435=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(5.431406253),$);\r
#436=IFCRELPOSITIONS('1YZTCiXRD5t8e$BbcAy5bU',$,$,$,#432,(#416));\r
#437=IFCALIGNMENTVERTICALSEGMENT($,$,21.443399234,40.851013423,0.85,-0.141979341857269,-0.141979341857269,$,.CONSTANTGRADIENT.);\r
#438=IFCALIGNMENTSEGMENT('2iyzNn5IH9QPQT3ykucMT_',$,$,$,$,$,$,#437);\r
#439=IFCCARTESIANPOINT((0.,0.));\r
#440=IFCDIRECTION((1.,0.));\r
#441=IFCVECTOR(#440,1.);\r
#442=IFCLINE(#439,#441);\r
#443=IFCCARTESIANPOINT((21.443399234,0.85));\r
#444=IFCDIRECTION((0.990070799198654,-0.140569600462325));\r
#445=IFCAXIS2PLACEMENT2D(#443,#444);\r
#446=IFCCURVESEGMENT(.CONTINUOUS.,#445,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(41.2606991904661),#442);\r
#447=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(21.443399234),$,$,$,#32);\r
#448=IFCAXIS2PLACEMENTLINEAR(#447,$,$);\r
#449=IFCLINEARPLACEMENT($,#448,#453);\r
#450=IFCCARTESIANPOINT((-4.32999649639189,-9.88884902155701,0.));\r
#451=IFCDIRECTION((0.,0.,1.));\r
#452=IFCDIRECTION((-0.577508435994071,-0.816384717125255,0.));\r
#453=IFCAXIS2PLACEMENT3D(#450,#451,#452);\r
#454=IFCREFERENT('2l0nGUg9DDxPaNoWO5kWYY',$,'P.V.I (0+021.443)',$,$,#449,$,.STATION.);\r
#455=IFCPROPERTYSET('0haBi9fej3MOBClYm2To94',$,'Pset_Stationing',$,(#457));\r
#456=IFCRELDEFINESBYPROPERTIES('2F6O$Txnv7k8xrZZ9UwNcH',$,$,$,(#454),#455);\r
#457=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(21.443399234),$);\r
#458=IFCRELPOSITIONS('3CFw66v3XE6ezzw2Q77KTc',$,$,$,#454,(#438));\r
#459=IFCALIGNMENTVERTICALSEGMENT($,$,62.294412657,60.965388771,-4.95,-0.0992366344570554,-0.0992366344570554,$,.CONSTANTGRADIENT.);\r
#460=IFCALIGNMENTSEGMENT('0ODByEwzz0lw$SyDNhRn5L',$,$,$,$,$,$,#459);\r
#461=IFCCARTESIANPOINT((0.,0.));\r
#462=IFCDIRECTION((1.,0.));\r
#463=IFCVECTOR(#462,1.);\r
#464=IFCLINE(#461,#463);\r
#465=IFCCARTESIANPOINT((62.294412657,-4.95));\r
#466=IFCDIRECTION((0.99511211727917,-0.0987515774262195));\r
#467=IFCAXIS2PLACEMENT2D(#465,#466);\r
#468=IFCCURVESEGMENT(.CONTINUOUS.,#467,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(61.2648441440862),#464);\r
#469=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(62.294412657),$,$,$,#32);\r
#470=IFCAXIS2PLACEMENTLINEAR(#469,$,$);\r
#471=IFCLINEARPLACEMENT($,#470,#475);\r
#472=IFCCARTESIANPOINT((-43.6610750517975,40.8996888349432,0.));\r
#473=IFCDIRECTION((0.,0.,1.));\r
#474=IFCDIRECTION((-0.833562704953956,0.552424851821353,0.));\r
#475=IFCAXIS2PLACEMENT3D(#472,#473,#474);\r
#476=IFCREFERENT('3xkcjeOND8Cwbe9wnYeJCA',$,'P.V.I (0+062.294)',$,$,#471,$,.STATION.);\r
#477=IFCPROPERTYSET('32N0RJBVf2NR9EvTPJoJJW',$,'Pset_Stationing',$,(#479));\r
#478=IFCRELDEFINESBYPROPERTIES('07wCiwaD1DiQ9BhLU9aknX',$,$,$,(#476),#477);\r
#479=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(62.294412657),$);\r
#480=IFCRELPOSITIONS('3pmsWuyBj3MODSoENnCv1u',$,$,$,#476,(#460));\r
#481=IFCALIGNMENTVERTICALSEGMENT($,$,123.259801428,6.99135809500001,-11.,-0.143033726267743,-0.143033726267743,$,.CONSTANTGRADIENT.);\r
#482=IFCALIGNMENTSEGMENT('1Hf1d8ebD4sQ3sMwg6MzS2',$,$,$,$,$,$,#481);\r
#483=IFCCARTESIANPOINT((0.,0.));\r
#484=IFCDIRECTION((1.,0.));\r
#485=IFCVECTOR(#484,1.);\r
#486=IFCLINE(#483,#485);\r
#487=IFCCARTESIANPOINT((123.259801428,-11.));\r
#488=IFCDIRECTION((0.9899250062322,-0.14159266236701));\r
#489=IFCAXIS2PLACEMENT2D(#487,#488);\r
#490=IFCCURVESEGMENT(.CONTINUOUS.,#489,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(7.06251286813144),#486);\r
#491=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(123.259801428),$,$,$,#32);\r
#492=IFCAXIS2PLACEMENTLINEAR(#491,$,$);\r
#493=IFCLINEARPLACEMENT($,#492,#497);\r
#494=IFCCARTESIANPOINT((-20.0590740558048,73.1404144429601,0.));\r
#495=IFCDIRECTION((0.,0.,1.));\r
#496=IFCDIRECTION((-0.778465457655786,0.627687447091917,0.));\r
#497=IFCAXIS2PLACEMENT3D(#494,#495,#496);\r
#498=IFCREFERENT('2vNHTL$q56$8EUkn3JTDeH',$,'P.V.I (0+123.260)',$,$,#493,$,.STATION.);\r
#499=IFCPROPERTYSET('1PaUsXdbTFXfTlCBMeE8am',$,'Pset_Stationing',$,(#501));\r
#500=IFCRELDEFINESBYPROPERTIES('1bDRVNq6L4AexQ8Ra1ePMo',$,$,$,(#498),#499);\r
#501=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(123.259801428),$);\r
#502=IFCRELPOSITIONS('1MLEhCoQjBOQJpf2$CI4do',$,$,$,#498,(#482));\r
#503=IFCALIGNMENTVERTICALSEGMENT($,$,130.251159523,21.577275442,-12.,-0.0996418665451636,-0.0996418665451636,$,.CONSTANTGRADIENT.);\r
#504=IFCALIGNMENTSEGMENT('09qkHfB455GQjSsWS2p0Fs',$,$,$,$,$,$,#503);\r
#505=IFCCARTESIANPOINT((0.,0.));\r
#506=IFCDIRECTION((1.,0.));\r
#507=IFCVECTOR(#506,1.);\r
#508=IFCLINE(#505,#507);\r
#509=IFCCARTESIANPOINT((130.251159523,-12.));\r
#510=IFCDIRECTION((0.995072411683119,-0.0991508724477035));\r
#511=IFCAXIS2PLACEMENT2D(#509,#510);\r
#512=IFCCURVESEGMENT(.CONTINUOUS.,#511,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(21.6841258873844),#508);\r
#513=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(130.251159523),$,$,$,#32);\r
#514=IFCAXIS2PLACEMENTLINEAR(#513,$,$);\r
#515=IFCLINEARPLACEMENT($,#514,#519);\r
#516=IFCCARTESIANPOINT((-17.0038849551738,71.8973099929255,0.));\r
#517=IFCDIRECTION((0.,0.,1.));\r
#518=IFCDIRECTION((0.881421701241717,-0.472330164800171,0.));\r
#519=IFCAXIS2PLACEMENT3D(#516,#517,#518);\r
#520=IFCREFERENT('236ZStltP48w9dle8_1r0I',$,'P.V.I (0+130.251)',$,$,#515,$,.STATION.);\r
#521=IFCPROPERTYSET('1n5swAFq91mQOCGJyzchS_',$,'Pset_Stationing',$,(#523));\r
#522=IFCRELDEFINESBYPROPERTIES('32ntTXhKX0zuBaqisET8H6',$,$,$,(#520),#521);\r
#523=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(130.251159523),$);\r
#524=IFCRELPOSITIONS('3ILJwaMKb1XRUQXv0ofyuL',$,$,$,#520,(#504));\r
#525=IFCALIGNMENTVERTICALSEGMENT($,$,151.828434965,8.64877246399999,-14.15,-0.144529180898567,-0.144529180898567,$,.CONSTANTGRADIENT.);\r
#526=IFCALIGNMENTSEGMENT('1y3MoWVUb55REcYTLxrjgv',$,$,$,$,$,$,#525);\r
#527=IFCCARTESIANPOINT((0.,0.));\r
#528=IFCDIRECTION((1.,0.));\r
#529=IFCVECTOR(#528,1.);\r
#530=IFCLINE(#527,#529);\r
#531=IFCCARTESIANPOINT((151.828434965,-14.15));\r
#532=IFCDIRECTION((0.989716487171762,-0.143042913212742));\r
#533=IFCAXIS2PLACEMENT2D(#531,#532);\r
#534=IFCCURVESEGMENT(.CONTINUOUS.,#533,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(8.73863634293386),#530);\r
#535=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(151.828434965),$,$,$,#32);\r
#536=IFCAXIS2PLACEMENTLINEAR(#535,$,$);\r
#537=IFCLINEARPLACEMENT($,#536,#541);\r
#538=IFCCARTESIANPOINT((-37.5266568782949,70.9217582626547,0.));\r
#539=IFCDIRECTION((0.,0.,1.));\r
#540=IFCDIRECTION((-0.832644114652271,-0.55380843107968,0.));\r
#541=IFCAXIS2PLACEMENT3D(#538,#539,#540);\r
#542=IFCREFERENT('3LVWlH_iz91eUqPV$2G2BJ',$,'P.V.I (0+151.828)',$,$,#537,$,.STATION.);\r
#543=IFCPROPERTYSET('0vRjrXB2vC0eaHOo8zrfIo',$,'Pset_Stationing',$,(#545));\r
#544=IFCRELDEFINESBYPROPERTIES('3VEgYU9016DeCUN2DJ3NR1',$,$,$,(#542),#543);\r
#545=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(151.828434965),$);\r
#546=IFCRELPOSITIONS('278wXPFPTDCuJPqfasKb9O',$,$,$,#542,(#526));\r
#547=IFCALIGNMENTVERTICALSEGMENT($,$,160.477207429,41.25457763,-15.4,-0.0993829105892606,-0.0993829105892606,$,.CONSTANTGRADIENT.);\r
#548=IFCALIGNMENTSEGMENT('0VfwhiRQjDCB8Ls3vHsdKs',$,$,$,$,$,$,#547);\r
#549=IFCCARTESIANPOINT((0.,0.));\r
#550=IFCDIRECTION((1.,0.));\r
#551=IFCVECTOR(#550,1.);\r
#552=IFCLINE(#549,#551);\r
#553=IFCCARTESIANPOINT((160.477207429,-15.4));\r
#554=IFCDIRECTION((0.995097802912809,-0.0988957159744534));\r
#555=IFCAXIS2PLACEMENT2D(#553,#554);\r
#556=IFCCURVESEGMENT(.CONTINUOUS.,#555,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(41.4578119952042),#552);\r
#557=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(160.477207429),$,$,$,#32);\r
#558=IFCAXIS2PLACEMENTLINEAR(#557,$,$);\r
#559=IFCLINEARPLACEMENT($,#558,#563);\r
#560=IFCCARTESIANPOINT((-6.45048825163394,45.6201034990022,0.));\r
#561=IFCDIRECTION((0.,0.,1.));\r
#562=IFCDIRECTION((6.12323399573677E-17,-1.,0.));\r
#563=IFCAXIS2PLACEMENT3D(#560,#561,#562);\r
#564=IFCREFERENT('14cKE01o17gBpp3wi$N7Vk',$,'P.V.I (0+160.477)',$,$,#559,$,.STATION.);\r
#565=IFCPROPERTYSET('0ua8Vv27r4s8txmPchnmDa',$,'Pset_Stationing',$,(#567));\r
#566=IFCRELDEFINESBYPROPERTIES('0JKEw_GKX5eff$B8wjlYjH',$,$,$,(#564),#565);\r
#567=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(160.477207429),$);\r
#568=IFCRELPOSITIONS('1wfE5Xwd1C9B0IQNKXcODP',$,$,$,#564,(#548));\r
#569=IFCALIGNMENTVERTICALSEGMENT($,$,201.731785059,53.258115928,-19.5,-0.159600088209865,-0.159600088209865,$,.CONSTANTGRADIENT.);\r
#570=IFCALIGNMENTSEGMENT('03ytR2Wz95BOR6qRRdgRe5',$,$,$,$,$,$,#569);\r
#571=IFCCARTESIANPOINT((0.,0.));\r
#572=IFCDIRECTION((1.,0.));\r
#573=IFCVECTOR(#572,1.);\r
#574=IFCLINE(#571,#573);\r
#575=IFCCARTESIANPOINT((201.731785059,-19.5));\r
#576=IFCDIRECTION((0.987502165850348,-0.157605432777148));\r
#577=IFCAXIS2PLACEMENT2D(#575,#576);\r
#578=IFCCURVESEGMENT(.CONTINUOUS.,#577,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(53.9321510066147),#574);\r
#579=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(201.731785059),$,$,$,#32);\r
#580=IFCAXIS2PLACEMENTLINEAR(#579,$,$);\r
#581=IFCLINEARPLACEMENT($,#580,#585);\r
#582=IFCCARTESIANPOINT((-35.8970915518057,63.2485375266146,0.));\r
#583=IFCDIRECTION((0.,0.,1.));\r
#584=IFCDIRECTION((-0.881421701130032,-0.472330165008589,0.));\r
#585=IFCAXIS2PLACEMENT3D(#582,#583,#584);\r
#586=IFCREFERENT('3SEhJh42P1P8CPKpsRHs9y',$,'P.V.I (0+201.732)',$,$,#581,$,.STATION.);\r
#587=IFCPROPERTYSET('3AFNSOliL6DOTpBZMxjmoo',$,'Pset_Stationing',$,(#589));\r
#588=IFCRELDEFINESBYPROPERTIES('3L5OEqXTj40AQuAfGzoonq',$,$,$,(#586),#587);\r
#589=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(201.731785059),$);\r
#590=IFCRELPOSITIONS('1KE2qEGAjATRO$Bj7_Exgb',$,$,$,#586,(#570));\r
#591=IFCALIGNMENTVERTICALSEGMENT($,$,254.989900987,22.624392145,-28.,-0.106075727454644,-0.106075727454644,$,.CONSTANTGRADIENT.);\r
#592=IFCALIGNMENTSEGMENT('1j1poVe1r2uwSwePi6VJ3q',$,$,$,$,$,$,#591);\r
#593=IFCCARTESIANPOINT((0.,0.));\r
#594=IFCDIRECTION((1.,0.));\r
#595=IFCVECTOR(#594,1.);\r
#596=IFCLINE(#593,#595);\r
#597=IFCCARTESIANPOINT((254.989900987,-28.));\r
#598=IFCDIRECTION((0.994421007490908,-0.105483931765778));\r
#599=IFCAXIS2PLACEMENT2D(#597,#598);\r
#600=IFCCURVESEGMENT(.CONTSAMEGRADIENTSAMECURVATURE.,#599,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(22.7513215977659),#596);\r
#601=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(254.989900987),$,$,$,#32);\r
#602=IFCAXIS2PLACEMENTLINEAR(#601,$,$);\r
#603=IFCLINEARPLACEMENT($,#602,#607);\r
#604=IFCCARTESIANPOINT((-82.8399506986702,53.1470841516334,0.));\r
#605=IFCDIRECTION((0.,0.,1.));\r
#606=IFCDIRECTION((-0.881421701261423,0.472330164763398,0.));\r
#607=IFCAXIS2PLACEMENT3D(#604,#605,#606);\r
#608=IFCREFERENT('1gZ7eQiSP69QgYPtsEtlFm',$,'P.V.I (0+254.990)',$,$,#603,$,.STATION.);\r
#609=IFCPROPERTYSET('2EOMxfSqvBZR56hXZ$Azif',$,'Pset_Stationing',$,(#611));\r
#610=IFCRELDEFINESBYPROPERTIES('0FCz_vOCH1lRWo8_aDrtlm',$,$,$,(#608),#609);\r
#611=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(254.989900987),$);\r
#612=IFCRELPOSITIONS('05AvNWk7v34xAih6oIYylD',$,$,$,#608,(#592));\r
#613=IFCALIGNMENTVERTICALSEGMENT($,$,277.614293132,0.000953513000013118,-30.399898855,-0.106076162566415,-0.106076162566415,$,.CONSTANTGRADIENT.);\r
#614=IFCALIGNMENTSEGMENT('1flTZEfIvFJP0DGOPVQA0_',$,$,$,$,$,$,#613);\r
#615=IFCCARTESIANPOINT((0.,0.));\r
#616=IFCDIRECTION((1.,0.));\r
#617=IFCVECTOR(#616,1.);\r
#618=IFCLINE(#615,#617);\r
#619=IFCCARTESIANPOINT((277.614293132,-30.399898855));\r
#620=IFCDIRECTION((0.994420962104211,-0.105484359635617));\r
#621=IFCAXIS2PLACEMENT2D(#619,#620);\r
#622=IFCCURVESEGMENT(.CONTINUOUS.,#621,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(0.000958862530407111),#618);\r
#623=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(277.614293132),$,$,$,#32);\r
#624=IFCAXIS2PLACEMENTLINEAR(#623,$,$);\r
#625=IFCLINEARPLACEMENT($,#624,#629);\r
#626=IFCCARTESIANPOINT((-61.4608786412564,54.7250917196313,0.));\r
#627=IFCDIRECTION((0.,0.,1.));\r
#628=IFCDIRECTION((0.802521322774215,0.596623437766842,0.));\r
#629=IFCAXIS2PLACEMENT3D(#626,#627,#628);\r
#630=IFCREFERENT('04HIoe4LDE1QU2y0Lfdzne',$,'P.V.I (0+277.614)',$,$,#625,$,.STATION.);\r
#631=IFCPROPERTYSET('19VypLiZfBI81XL_FOZvmC',$,'Pset_Stationing',$,(#633));\r
#632=IFCRELDEFINESBYPROPERTIES('1xDjg0SqzEOANz0Yy0Bb6S',$,$,$,(#630),#631);\r
#633=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(277.614293132),$);\r
#634=IFCRELPOSITIONS('3WyJ6jzNT5cPqq1uMcbpM1',$,$,$,#630,(#614));\r
#635=IFCALIGNMENTVERTICALSEGMENT($,$,277.615246645,0.000953513000013118,-30.4,-0.125145645626866,-0.125145645626866,$,.CONSTANTGRADIENT.);\r
#636=IFCALIGNMENTSEGMENT('1HwmV6HSH44xDR4U_GpgnT',$,$,$,$,$,$,#635);\r
#637=IFCCARTESIANPOINT((0.,0.));\r
#638=IFCDIRECTION((1.,0.));\r
#639=IFCVECTOR(#638,1.);\r
#640=IFCLINE(#637,#639);\r
#641=IFCCARTESIANPOINT((277.615246645,-30.4));\r
#642=IFCDIRECTION((0.992260079638173,-0.124177028296085));\r
#643=IFCAXIS2PLACEMENT2D(#641,#642);\r
#644=IFCCURVESEGMENT(.CONTSAMEGRADIENTSAMECURVATURE.,#643,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(0.000960950681761596),#640);\r
#645=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(277.615246645),$,$,$,#32);\r
#646=IFCAXIS2PLACEMENTLINEAR(#645,$,$);\r
#647=IFCLINEARPLACEMENT($,#646,#651);\r
#648=IFCCARTESIANPOINT((-61.4601134403037,54.7256606260762,0.));\r
#649=IFCDIRECTION((0.,0.,1.));\r
#650=IFCDIRECTION((0.802492877451972,0.596661697814477,0.));\r
#651=IFCAXIS2PLACEMENT3D(#648,#649,#650);\r
#652=IFCREFERENT('3rQ6Sh0vT9184qTcxj2EIL',$,'P.V.I (0+277.615)',$,$,#647,$,.STATION.);\r
#653=IFCPROPERTYSET('2guMbj2DjAhhWsagTXhX0L',$,'Pset_Stationing',$,(#655));\r
#654=IFCRELDEFINESBYPROPERTIES('3N8WFC7sv66hPxh4ndjNFI',$,$,$,(#652),#653);\r
#655=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(277.615246645),$);\r
#656=IFCRELPOSITIONS('0tvMxF48nEa9mY15gAGXW1',$,$,$,#652,(#636));\r
#657=IFCALIGNMENTVERTICALSEGMENT($,$,277.616200158,86.298261823,-30.400119328,-0.125145981435302,-0.125145981435302,$,.CONSTANTGRADIENT.);\r
#658=IFCALIGNMENTSEGMENT('1Y_BxpwS14mw$dfrscZGml',$,$,$,$,$,$,#657);\r
#659=IFCCARTESIANPOINT((0.,0.));\r
#660=IFCDIRECTION((1.,0.));\r
#661=IFCVECTOR(#660,1.);\r
#662=IFCLINE(#659,#661);\r
#663=IFCCARTESIANPOINT((277.616200158,-30.400119328));\r
#664=IFCDIRECTION((0.992260038581433,-0.124177356367304));\r
#665=IFCAXIS2PLACEMENT2D(#663,#664);\r
#666=IFCCURVESEGMENT(.CONTINUOUS.,#665,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(86.9714172369319),#662);\r
#667=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(277.616200158),$,$,$,#32);\r
#668=IFCAXIS2PLACEMENTLINEAR(#667,$,$);\r
#669=IFCLINEARPLACEMENT($,#668,#673);\r
#670=IFCCARTESIANPOINT((-93.3658424560884,71.8240609770708,0.));\r
#671=IFCDIRECTION((0.,0.,1.));\r
#672=IFCDIRECTION((0.0523795296142587,0.998627250217712,0.));\r
#673=IFCAXIS2PLACEMENT3D(#670,#671,#672);\r
#674=IFCREFERENT('3NLAGarMTAiOsug684jE3e',$,'P.V.I (0+277.616)',$,$,#669,$,.STATION.);\r
#675=IFCPROPERTYSET('0LgRiOXgTFthbhWoSjUrhc',$,'Pset_Stationing',$,(#677));\r
#676=IFCRELDEFINESBYPROPERTIES('2AWHI9K7z62fpxPcLik_w9',$,$,$,(#674),#675);\r
#677=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(277.616200158),$);\r
#678=IFCRELPOSITIONS('1HPwxhkpvFe8BDmEHnKz2A',$,$,$,#674,(#658));\r
#679=IFCALIGNMENTVERTICALSEGMENT($,$,363.914461981,18.167206704,-41.2,0.,0.,$,.CONSTANTGRADIENT.);\r
#680=IFCALIGNMENTSEGMENT('3gBdpAMIDFDOdUF3V7CGPM',$,$,$,$,$,$,#679);\r
#681=IFCCARTESIANPOINT((0.,0.));\r
#682=IFCDIRECTION((1.,0.));\r
#683=IFCVECTOR(#682,1.);\r
#684=IFCLINE(#681,#683);\r
#685=IFCCARTESIANPOINT((363.914461981,-41.2));\r
#686=IFCDIRECTION((1.,0.));\r
#687=IFCAXIS2PLACEMENT2D(#685,#686);\r
#688=IFCCURVESEGMENT(.CONTSAMEGRADIENTSAMECURVATURE.,#687,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(18.167206704),#684);\r
#689=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(363.914461981),$,$,$,#32);\r
#690=IFCAXIS2PLACEMENTLINEAR(#689,$,$);\r
#691=IFCLINEARPLACEMENT($,#690,#695);\r
#692=IFCCARTESIANPOINT((-88.8455800952715,158.003856879941,0.));\r
#693=IFCDIRECTION((0.,0.,1.));\r
#694=IFCDIRECTION((0.0523795296142587,0.998627250217712,0.));\r
#695=IFCAXIS2PLACEMENT3D(#692,#693,#694);\r
#696=IFCREFERENT('0YfiM5w$r8puLLR6WQTO7c',$,'P.V.I (0+363.914)',$,$,#691,$,.STATION.);\r
#697=IFCPROPERTYSET('1hrNM7eBf6RBruMFojvb7D',$,'Pset_Stationing',$,(#699));\r
#698=IFCRELDEFINESBYPROPERTIES('2zCjyDObzCL8k2GX6L6Q9Z',$,$,$,(#696),#697);\r
#699=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(363.914461981),$);\r
#700=IFCRELPOSITIONS('2u8d3DLgX6IhpH692Dpqv$',$,$,$,#696,(#680));\r
#701=IFCALIGNMENTVERTICALSEGMENT($,$,382.081668685,0.0217925129999799,-41.2,0.,0.,$,.CONSTANTGRADIENT.);\r
#702=IFCALIGNMENTSEGMENT('32qA3a1K53BfvDMS0jGU2n',$,$,$,$,$,$,#701);\r
#703=IFCCARTESIANPOINT((0.,0.));\r
#704=IFCDIRECTION((1.,0.));\r
#705=IFCVECTOR(#704,1.);\r
#706=IFCLINE(#703,#705);\r
#707=IFCCARTESIANPOINT((382.081668685,-41.2));\r
#708=IFCDIRECTION((1.,0.));\r
#709=IFCAXIS2PLACEMENT2D(#707,#708);\r
#710=IFCCURVESEGMENT(.CONTINUOUS.,#709,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(0.0217925129999799),#706);\r
#711=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(382.081668685),$,$,$,#32);\r
#712=IFCAXIS2PLACEMENTLINEAR(#711,$,$);\r
#713=IFCLINEARPLACEMENT($,#712,#717);\r
#714=IFCCARTESIANPOINT((-87.8937819396913,176.146113619483,0.));\r
#715=IFCDIRECTION((0.,0.,1.));\r
#716=IFCDIRECTION((0.0524050479806578,0.998625911413351,0.));\r
#717=IFCAXIS2PLACEMENT3D(#714,#715,#716);\r
#718=IFCREFERENT('0bYBFabnz3Pg3Ql9oqLNYw',$,'P.V.I (0+382.082)',$,$,#713,$,.STATION.);\r
#719=IFCPROPERTYSET('1fwC_y5KDBsem64wEfQkVq',$,'Pset_Stationing',$,(#721));\r
#720=IFCRELDEFINESBYPROPERTIES('0DN_zFe5X9OuhYCecLZgv1',$,$,$,(#718),#719);\r
#721=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(382.081668685),$);\r
#722=IFCRELPOSITIONS('0L1pycquf19AE3rjV8dWsx',$,$,$,#718,(#702));\r
#723=IFCALIGNMENTVERTICALSEGMENT($,$,382.103461198,0.0217925130000367,-41.2,0.435850239024103,0.435850239024103,$,.CONSTANTGRADIENT.);\r
#724=IFCALIGNMENTSEGMENT('3Qz$aaBIr4qxGB0QQrULeU',$,$,$,$,$,$,#723);\r
#725=IFCCARTESIANPOINT((0.,0.));\r
#726=IFCDIRECTION((1.,0.));\r
#727=IFCVECTOR(#726,1.);\r
#728=IFCLINE(#725,#727);\r
#729=IFCCARTESIANPOINT((382.103461198,-41.2));\r
#730=IFCDIRECTION((0.916711812226337,0.399549062475067));\r
#731=IFCAXIS2PLACEMENT2D(#729,#730);\r
#732=IFCCURVESEGMENT(.CONTINUOUS.,#731,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(0.0237724797579636),#728);\r
#733=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(382.103461198),$,$,$,#32);\r
#734=IFCAXIS2PLACEMENTLINEAR(#733,$,$);\r
#735=IFCLINEARPLACEMENT($,#734,#739);\r
#736=IFCCARTESIANPOINT((-87.8926399020019,176.16787618764,0.));\r
#737=IFCDIRECTION((0.,0.,1.));\r
#738=IFCDIRECTION((0.0524050479806578,0.998625911413351,0.));\r
#739=IFCAXIS2PLACEMENT3D(#736,#737,#738);\r
#740=IFCREFERENT('3D5MzXQX14gO8OU6F5qBWj',$,'P.V.I (0+382.103)',$,$,#735,$,.STATION.);\r
#741=IFCPROPERTYSET('2F8l8Ik4n6RggzUZEXDish',$,'Pset_Stationing',$,(#743));\r
#742=IFCRELDEFINESBYPROPERTIES('3mS8XjKyf7GPbWymr$hY9M',$,$,$,(#740),#741);\r
#743=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(382.103461198),$);\r
#744=IFCRELPOSITIONS('03nESADErAMwBOX0LyYdIa',$,$,$,#740,(#724));\r
#745=IFCALIGNMENTVERTICALSEGMENT($,$,382.125253711,32.3859855429999,-41.190501728,-0.000293283401469771,-0.000293283401469771,$,.CONSTANTGRADIENT.);\r
#746=IFCALIGNMENTSEGMENT('0W_EeWpbb4uPtJu38GyHVN',$,$,$,$,$,$,#745);\r
#747=IFCCARTESIANPOINT((0.,0.));\r
#748=IFCDIRECTION((1.,0.));\r
#749=IFCVECTOR(#748,1.);\r
#750=IFCLINE(#747,#749);\r
#751=IFCCARTESIANPOINT((382.125253711,-41.190501728));\r
#752=IFCDIRECTION((0.999999956992426,-0.000293283388856364));\r
#753=IFCAXIS2PLACEMENT2D(#751,#752);\r
#754=IFCCURVESEGMENT(.CONTSAMEGRADIENTSAMECURVATURE.,#753,IFCLENGTHMEASURE(0.),IFCLENGTHMEASURE(32.3859869358427),#750);\r
#755=IFCPOINTBYDISTANCEEXPRESSION(IFCLENGTHMEASURE(382.125253711),$,$,$,#32);\r
#756=IFCAXIS2PLACEMENTLINEAR(#755,$,$);\r
#757=IFCLINEARPLACEMENT($,#756,#761);\r
#758=IFCCARTESIANPOINT((-87.8914978643126,176.189638755796,0.));\r
#759=IFCDIRECTION((0.,0.,1.));\r
#760=IFCDIRECTION((0.0524050479806578,0.998625911413351,0.));\r
#761=IFCAXIS2PLACEMENT3D(#758,#759,#760);\r
#762=IFCREFERENT('0Y3wAqpDLExwgcOcks9ags',$,'P.V.I (0+382.125)',$,$,#757,$,.STATION.);\r
#763=IFCPROPERTYSET('3zoe9O5rTFf8UEJfRxwy1b',$,'Pset_Stationing',$,(#765));\r
#764=IFCRELDEFINESBYPROPERTIES('3AjYMLrMb7aBdTeeNtVubp',$,$,$,(#762),#763);\r
#765=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(382.125253711),$);\r
#766=IFCRELPOSITIONS('0vOqyI9GbFoQEc4KnA7AYx',$,$,$,#762,(#746));\r
#767=IFCCARTESIANPOINT((0.,0.,3.));\r
#768=IFCCARTESIANPOINT((-0.998694421723485,5.33879980299389,2.45));\r
#769=IFCCARTESIANPOINT((-2.12229403015226,9.17391346942168,2.05));\r
#770=IFCCARTESIANPOINT((-3.98594590369612,12.7090760694409,1.65));\r
#771=IFCCARTESIANPOINT((-6.51524107158184,15.8031411729171,1.25));\r
#772=IFCCARTESIANPOINT((-9.60919380281121,18.332573799009,0.85));\r
#773=IFCCARTESIANPOINT((-43.6610750518739,40.8996888349939,-4.95));\r
#774=IFCCARTESIANPOINT((-47.4960463345051,44.2111029249209,-5.45416666663359));\r
#775=IFCCARTESIANPOINT((-50.3757949285209,48.3799775979132,-5.95833333326718));\r
#776=IFCCARTESIANPOINT((-52.1154952021316,53.1387495998351,-6.46249999990076));\r
#777=IFCCARTESIANPOINT((-52.6034911544994,58.1819953757513,-6.96666666653435));\r
#778=IFCCARTESIANPOINT((-51.808462635614,63.1860335111851,-7.47083333316794));\r
#779=IFCCARTESIANPOINT((-49.7814355064183,67.8296989837836,-7.97499999980153));\r
#780=IFCCARTESIANPOINT((-46.6525067379698,71.8149559104058,-8.47916666643511));\r
#781=IFCCARTESIANPOINT((-42.6224946416914,74.8860258387285,-8.9833333330687));\r
#782=IFCCARTESIANPOINT((-37.9500501072034,76.8458039075194,-9.48749999970229));\r
#783=IFCCARTESIANPOINT((-32.9350560922176,77.5685092674394,-9.99166666633588));\r
#784=IFCCARTESIANPOINT((-27.8993807798252,77.0077578428609,-10.4958333329695));\r
#785=IFCCARTESIANPOINT((-23.1662197047845,75.1995393160032,-10.9999999996031));\r
#786=IFCCARTESIANPOINT((-17.0038849590346,71.8973099949944,-11.9999999992848));\r
#787=IFCCARTESIANPOINT((-12.6481802761555,68.7428627887566,-12.5374999995018));\r
#788=IFCCARTESIANPOINT((-9.29047564044595,64.5418486189155,-13.0749999995018));\r
#789=IFCCARTESIANPOINT((-7.17355576809496,59.598029171786,-13.6124999995018));\r
#790=IFCCARTESIANPOINT((-6.45048825535923,54.2688759700104,-14.1499999995018));\r
#791=IFCCARTESIANPOINT((-6.45048825163394,45.620103504014,-15.3999999992774));\r
#792=IFCCARTESIANPOINT((-7.11163356713951,40.5202310054447,-15.9124999995031));\r
#793=IFCCARTESIANPOINT((-9.05135820154101,35.7575341882184,-16.4249999995031));\r
#794=IFCCARTESIANPOINT((-12.1414181692526,31.6468965214444,-16.9374999995031));\r
#795=IFCCARTESIANPOINT((-16.1775156026706,28.4600908889261,-17.4499999995031));\r
#796=IFCCARTESIANPOINT((-20.8928058100864,26.4078114522563,-17.9624999995031));\r
#797=IFCCARTESIANPOINT((-25.9755395893008,25.6257437051099,-18.4749999995031));\r
#798=IFCCARTESIANPOINT((-31.0896743768826,26.1655936902098,-18.9874999995031));\r
#799=IFCCARTESIANPOINT((-35.8970915470272,27.9916694780113,-19.4999999995031));\r
#800=IFCCARTESIANPOINT((-82.8399506937712,53.1470841490082,-27.9999999990424));\r
#801=IFCCARTESIANPOINT((-87.3840874340385,56.4835906216176,-28.5999999992598));\r
#802=IFCCARTESIANPOINT((-90.8166090184823,60.9556426945201,-29.1999999991561));\r
#803=IFCCARTESIANPOINT((-92.8647891255096,66.2079195737606,-29.7999999990524));\r
#804=IFCCARTESIANPOINT((-93.3658924009651,71.8231087670138,-30.3999999993635));\r
#805=IFCCARTESIANPOINT((-88.8455800954252,158.003856877011,-41.1999999996246));\r
#806=IFCCARTESIANPOINT((-88.3217847989872,167.990129379003,-41.2));\r
#807=IFCCARTESIANPOINT((-86.1943087382242,208.531123082008,-41.1999999999985));\r
#808=IFCPOLYLINE((#767,#768,#769,#770,#771,#772,#773,#774,#775,#776,#777,#778,#779,#780,#781,#782,#783,#784,#785,#786,#787,#788,#789,#790,#791,#792,#793,#794,#795,#796,#797,#798,#799,#800,#801,#802,#803,#804,#805,#806,#807));\r
#809=IFCSWEPTDISKSOLID(#808,0.2,$,$,$);\r
#810=IFCSHAPEREPRESENTATION(#12,'Body','SweptSolid',(#809));\r
#811=IFCRELREFERENCEDINSPATIALSTRUCTURE('3qNhb8Q6L9fO6ch2tFnB9p',$,$,$,(#19),#13);\r
ENDSEC;\r
END-ISO-10303-21;\r
`,bn=document.getElementById("viewer"),$e=document.getElementById("status"),Ji=document.getElementById("view-3d"),Qi=document.getElementById("view-2d"),Xf=document.getElementById("prev-step"),Yf=document.getElementById("next-step"),Wa=document.getElementById("save-ifc"),Jn=document.getElementById("classification-class"),Qn=document.getElementById("classification-risk-type"),we=document.createElement("canvas"),nt=we.getContext("2d");bn.appendChild(we);const Ue=new Mo({antialias:!0});Ue.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Ue.setClearColor(15266027,1);bn.appendChild(Ue.domElement);bn.style.position="relative";we.style.position="absolute";we.style.inset="0";Ue.domElement.style.position="absolute";Ue.domElement.style.inset="0";const on=new Df,je=new Ae(50,1,.1,1e6);je.up.set(0,0,1);const ri=new Hf(je,Ue.domElement);ri.enableDamping=!0;ri.dampingFactor=.08;ri.target.set(0,0,0);const qf=new Bf(16777215,.8),Ao=new zf(16777215,.7);Ao.position.set(50,80,120);on.add(qf);on.add(Ao);const tr=new Vf(200,20,7311234,12571848);tr.rotation.x=Math.PI/2;on.add(tr);let cr="3d",Zr=[],yo=[],ls=[],cs=[];const Ci=20,ms=3,er=5,Xa=[1,3,1],pe=3,Sn=8,Ya=Math.max(0,Sn-pe),Kr=.5,bo=new URL(".",document.baseURI),No=new URL("api/ifc-events",bo).href,jf=new URL("alignment.ifc",bo).href,Ro="alignment-ifc-events-db",qa="alignment-export-session-id";let nr=[],si=0,Ke=0,sn=[],qn=null;const gs=Jf();function Zf(s){return s==="TK2"?"#b8860b":s==="TK3"?"#b22222":"#1c7a5a"}function Kf(s){return s==="TK2"?12092939:s==="TK3"?11674146:1866330}function ir(){return globalThis.crypto&&typeof globalThis.crypto.randomUUID=="function"?globalThis.crypto.randomUUID():`evt-${Date.now()}-${Math.floor(Math.random()*1e6)}`}function Jf(){try{const s=window.sessionStorage.getItem(qa);if(s)return s;const t=ir();return window.sessionStorage.setItem(qa,t),t}catch{return ir()}}function Lo(){try{const s=window.localStorage.getItem(Ro);if(!s)return{events:[]};const t=JSON.parse(s);if(Array.isArray(t))return{events:t};if(t&&Array.isArray(t.events))return t}catch{}return{events:[]}}function Qf(s){window.localStorage.setItem(Ro,JSON.stringify(s))}function tp(s){const t=Lo(),e={id:s.id||ir(),ifcClass:s.ifcClass||"IfcEvent",name:s.name||"Tunnel marker",timestamp:s.timestamp||new Date().toISOString(),data:s.data||{}};return t.events.push(e),Qf(t),e}function Es(){return Lo().events.filter(s=>{var t,e;return(s==null?void 0:s.ifcClass)==="IfcActionRequest"&&((t=s==null?void 0:s.data)==null?void 0:t.sessionId)===gs&&((e=s==null?void 0:s.data)==null?void 0:e.worldXYZ)})}function ep(){return Es().map(s=>{var n,i;const t=s.data.localXYZ||{},e=s.data.worldXYZ||{};return{station:Number(s.data.station??t.y??0),xRaw:Number(s.data.xRaw??0),classCode:((n=s.data.classification)==null?void 0:n.classCode)||"TK1",riskType:((i=s.data.classification)==null?void 0:i.riskType)||"bom sprutbetong",local:{x:Number(t.x??0),y:Number(t.y??0),z:Number(t.z??0)},world:{x:Number(e.x??0),y:Number(e.y??0),z:Number(e.z??0)}}})}async function np(s){const t=s.classCode||(Jn==null?void 0:Jn.value)||"TK1",e=s.riskType||(Qn==null?void 0:Qn.value)||"bom sprutbetong",n={id:ir(),ifcClass:"IfcActionRequest",name:"RiskObservation",timestamp:new Date().toISOString(),data:{sessionId:gs,localXYZ:s.local,worldXYZ:s.world,station:s.station,xRaw:s.xRaw,offsets:{floor:pe,anfang:Sn},classification:{classCode:t,riskType:e}}};try{const i=await fetch(No,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok)throw new Error(`IFC event save failed (${i.status})`);return i.json()}catch(i){return{ok:!0,event:tp(n),count:Es().length,storedLocally:!0,error:String((i==null?void 0:i.message)||i)}}}async function ip(){try{const s=await fetch(`${No}/export-current?sessionId=${encodeURIComponent(gs)}`,{method:"POST"});if(!s.ok){const t=await s.text();throw new Error(`IFC export failed (${s.status}): ${t}`)}return s.json()}catch{const s=Es();if(!s.length)throw new Error("No local IFC event available to export");return{ok:!0,fileName:"export.ifc",eventId:s[s.length-1].id,eventCount:s.length,content:kf(s,"alignment.ifc"),storedLocally:!0}}}async function rp(){try{const s=await fetch(jf);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.text()}catch{return Wf}}function sp(s,t){const e=new Blob([t],{type:"application/octet-stream"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=s,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(n)}function wo(){const s=Math.min(window.devicePixelRatio||1,2),t=Math.max(1,bn.clientWidth),e=Math.max(1,bn.clientHeight);we.width=Math.floor(t*s),we.height=Math.floor(e*s),we.style.width=`${t}px`,we.style.height=`${e}px`,nt.setTransform(s,0,0,s,0,0),Ue.setPixelRatio(s),Ue.setSize(t,e,!1),je.aspect=t/e,je.updateProjectionMatrix(),ci(),_s()}function ap(s){const t=/#(\d+)=IFCCARTESIANPOINT\(\(([^\)]*)\)\);/g,e=/#(\d+)=IFCPOLYLINE\(\(([^\)]*)\)\);/g,n=/#(\d+)=IFCSWEPTDISKSOLID\(#(\d+),/g,i=new Map,r=new Map,o=[];let a;for(;(a=t.exec(s))!==null;){const l=Number(a[1]),u=a[2].split(",").map(f=>Number(f.trim())).filter(f=>Number.isFinite(f));u.length>=2&&i.set(l,{x:u[0],y:u[1],z:u[2]??0})}for(;(a=e.exec(s))!==null;){const l=Number(a[1]),u=a[2].split(",").map(f=>Number(f.replace(/[#\s]/g,""))).filter(f=>Number.isFinite(f));r.set(l,u)}for(;(a=n.exec(s))!==null;)o.push(Number(a[2]));let c=[];for(const l of o){const u=r.get(l);u&&u.length>c.length&&(c=u)}if(!c.length)for(const l of r.values())l.length>c.length&&(c=l);return c.map(l=>i.get(l)).filter(l=>l&&Number.isFinite(l.x)&&Number.isFinite(l.y)&&Number.isFinite(l.z))}function qi(s,t,e){const n=[];let i=1,r=0;for(let o=0;o<s.length;o+=1){const a=s[Math.max(0,o-1)],c=s[Math.min(s.length-1,o+1)];let l=c.x-a.x,u=c.y-a.y;const f=Math.hypot(l,u);f>1e-9&&(l/=f,u/=f,i=-u,r=l);const h=s[o],m={x:h.x+i*t,y:h.y+r*t,z:h.z+e};Number.isFinite(m.x)&&Number.isFinite(m.y)&&Number.isFinite(m.z)&&n.push(m)}return n}function _i(s,t){if(s.length<2)return;const e=new Ge().setFromPoints(s.map(r=>new U(r.x,r.y,r.z))),n=new ps({color:t}),i=new Co(e,n);on.add(i),ls.push(i)}function op(s){const t=new U(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),e=new U(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(const n of s)for(const i of n)!Number.isFinite(i.x)||!Number.isFinite(i.y)||!Number.isFinite(i.z)||(i.x<t.x&&(t.x=i.x),i.y<t.y&&(t.y=i.y),i.z<t.z&&(t.z=i.z),i.x>e.x&&(e.x=i.x),i.y>e.y&&(e.y=i.y),i.z>e.z&&(e.z=i.z));return(!Number.isFinite(t.x)||!Number.isFinite(e.x))&&(t.set(0,0,0),e.set(1,1,1)),{min:t,max:e}}function lp(s){if(!s.length)return[];const t=[{...s[0],s:0}];let e=0;for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];e+=Math.hypot(r.x-i.x,r.y-i.y),t.push({...r,s:e})}return t}function cp(s,t){if(!s.length)return null;if(t<=0){const n=s[0],i=s[Math.min(1,s.length-1)]||n,r=i.x-n.x,o=i.y-n.y,a=Math.hypot(r,o)||1;return{x:n.x,y:n.y,z:n.z,s:0,tx:r/a,ty:o/a}}const e=s[s.length-1];if(t>=e.s){const n=e,i=s[Math.max(0,s.length-2)]||n,r=n.x-i.x,o=n.y-i.y,a=Math.hypot(r,o)||1;return{x:n.x,y:n.y,z:n.z,s:e.s,tx:r/a,ty:o/a}}for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];if(t>r.s)continue;const o=r.s-i.s,a=o<1e-12?0:(t-i.s)/o,c=r.x-i.x,l=r.y-i.y,u=Math.hypot(c,l)||1;return{x:i.x+c*a,y:i.y+l*a,z:i.z+(r.z-i.z)*a,s:t,tx:c/u,ty:l/u}}return null}function Po(s){const t=cp(yo,s.station);if(!t)return null;const e=-(t.ty??0),n=t.tx??1,i=t.x+e*s.local.x,r=t.y+n*s.local.x,o=t.z+s.local.z,a=new oi(Kr,Kr,Kr),c=new $f({color:Kf(s.classCode),roughness:.5,metalness:.05}),l=new qe(a,c);return l.position.set(i,r,o),on.add(l),cs.push(l),{x:i,y:r,z:o}}function up(s){for(const u of ls)on.remove(u),u.geometry.dispose(),u.material.dispose();ls=[];for(const u of cs)on.remove(u),u.geometry.dispose(),u.material.dispose();if(cs=[],!s.length)return;yo=lp(s);const t=s,e=qi(s,-pe,0),n=qi(s,pe,0),i=qi(s,-pe,Ya),r=qi(s,pe,Ya);_i(t,1866330),_i(e,1866330),_i(n,1866330),_i(i,6965804),_i(r,6965804);for(const u of sn){const f=Po(u);f&&(u.world={x:f.x,y:f.y,z:f.z})}const o=op([t,e,n,i,r]),a=o.min.clone().add(o.max).multiplyScalar(.5),c=o.max.clone().sub(o.min),l=Math.max(c.x,c.y,c.z,1);tr.position.set(a.x,a.y,a.z),tr.scale.setScalar(Math.max(1,l/100)),ri.target.copy(a),je.position.set(a.x+l*.9,a.y-l*1.3,a.z+l*.7),je.near=Math.max(.01,l/1e4),je.far=Math.max(1e3,l*100),je.updateProjectionMatrix(),ri.update()}function _s(){cr==="3d"&&(ri.update(),Ue.render(on,je))}function Fo(){_s(),requestAnimationFrame(Fo)}function xs(s){cr=s;const t=s==="3d";if(Ue.domElement.style.display=t?"block":"none",we.style.display=t?"none":"block",Ji&&(Ji.style.filter=t?"brightness(1.12)":"none"),Qi&&(Qi.style.filter=t?"none":"brightness(1.12)"),t){const e=Math.round(Ke),n=Math.min(Math.round(Ke+Ci*ms),Math.round(si));$e.textContent=`3D-flik aktiv: IFC alignment 0/${String(e).padStart(3,"0")} - 0/${String(n).padStart(3,"0")}.`,_s()}else ci()}function hp(s){const t=/#(\d+)=IFCCARTESIANPOINT\(\(([^\)]*)\)\);/g,e=/#(\d+)=IFCDIRECTION\(\(([^\)]*)\)\);/g,n=/#(\d+)=IFCAXIS2PLACEMENT2D\(#(\d+),#(\d+)\);/g,i=/#(\d+)=IFCCURVESEGMENT\([^,]*,#(\d+),IFCLENGTHMEASURE\(([-+0-9.Ee]+)\),IFCLENGTHMEASURE\(([-+0-9.Ee]+)\),#(\d+)\);/g,r=/#(\d+)=IFCCOMPOSITECURVE\(\(([^\)]*)\),/g,o=/IFCSHAPEREPRESENTATION\([^\n]*'FootPrint'[^\n]*\(#(\d+)\)\);/,a=/#(\d+)=IFCLINE\(/g,c=/#(\d+)=IFCCIRCLE\(#\d+,([-+0-9.Ee]+)\);/g,l=new Map,u=new Map,f=new Map,h=new Map,m=new Map,x=new Map,p=new Set,d=new Map;let E;for(;(E=t.exec(s))!==null;){const w=Number(E[1]),O=E[2].split(",").map(q=>Number(q.trim()));O.length<2||Number.isNaN(O[0])||Number.isNaN(O[1])||l.set(w,{x:O[0],y:O[1]})}for(;(E=e.exec(s))!==null;){const w=Number(E[1]),O=E[2].split(",").map(z=>Number(z.trim())),q=O[0]??1,b=O[1]??0,R=Math.hypot(q,b)||1;u.set(w,{x:q/R,y:b/R})}for(;(E=n.exec(s))!==null;)f.set(Number(E[1]),Number(E[2])),h.set(Number(E[1]),Number(E[3]));for(;(E=i.exec(s))!==null;)m.set(Number(E[1]),{placementId:Number(E[2]),segmentLength:Number(E[4]),parentCurveId:Number(E[5])});for(;(E=r.exec(s))!==null;){const w=Number(E[1]),O=E[2].split(",").map(q=>Number(q.replace(/[#\s]/g,""))).filter(q=>Number.isFinite(q));x.set(w,O)}for(;(E=a.exec(s))!==null;)p.add(Number(E[1]));for(;(E=c.exec(s))!==null;)d.set(Number(E[1]),Math.abs(Number(E[2])));const v=s.match(o),I=v?Number(v[1]):null;let M=[];if(I&&x.has(I))M=x.get(I);else for(const w of x.values())w.length>M.length&&(M=w);function g(w){let O=w;for(;O<=-Math.PI;)O+=Math.PI*2;for(;O>Math.PI;)O-=Math.PI*2;return O}function N(w,O,q){const b=g(O-w),R=[b-Math.PI*2,b,b+Math.PI*2,-b-Math.PI*2,-b,-b+Math.PI*2];let z=R[0],V=Math.abs(Math.abs(z)-Math.abs(q));for(let Z=1;Z<R.length;Z+=1){const H=Math.abs(Math.abs(R[Z])-Math.abs(q));H<V&&(z=R[Z],V=H)}return z}function P(w,O){const q=w[w.length-1];q&&Math.hypot(q.x-O.x,q.y-O.y)<1e-9||w.push({x:O.x,y:O.y})}const S=[];for(let w=0;w<M.length;w+=1){const O=m.get(M[w]);if(!O)continue;const q=f.get(O.placementId),b=h.get(O.placementId),R=l.get(q),z=u.get(b)||{x:1,y:0};if(!R)continue;let V=null;if(w+1<M.length){const Z=m.get(M[w+1]);if(Z){const H=l.get(f.get(Z.placementId));H&&(V=H)}}S.push({origin:R,tangent:z,end:V,length:O.segmentLength,curveId:O.parentCurveId})}const y=[];for(const w of S){const{origin:O,tangent:q,end:b,length:R,curveId:z}=w;if(p.has(z)){const V=b||{x:O.x+q.x*R,y:O.y+q.y*R},Z=Math.hypot(V.x-O.x,V.y-O.y),H=Math.max(2,Math.ceil(Z/5));for(let K=0;K<=H;K+=1){const J=K/H;P(y,{x:O.x+(V.x-O.x)*J,y:O.y+(V.y-O.y)*J})}continue}if(d.has(z)){const V=d.get(z);if(!V||V<1e-12)continue;const Z={x:-q.y,y:q.x},H=[{x:O.x+Z.x*V,y:O.y+Z.y*V},{x:O.x-Z.x*V,y:O.y-Z.y*V}];let K=H[0],J=R/V;if(b){const X=R/V;let tt=Number.POSITIVE_INFINITY;for(const it of H){const B=Math.atan2(O.y-it.y,O.x-it.x),It=Math.atan2(b.y-it.y,b.x-it.x),pt=N(B,It,X),ft={x:O.x-it.x,y:O.y-it.y},ot=pt>=0?{x:-ft.y/V,y:ft.x/V}:{x:ft.y/V,y:-ft.x/V},Lt=ot.x*q.x+ot.y*q.y,Tt=Math.abs(Math.hypot(b.x-it.x,b.y-it.y)-V),_t=Math.abs(Math.abs(pt)-Math.abs(X)),Vt=1-Math.max(-1,Math.min(1,Lt)),kt=Tt*10+_t+Vt*.75;kt<tt&&(tt=kt,K=it,J=pt)}}const at=Math.atan2(O.y-K.y,O.x-K.x),$=Math.max(8,Math.ceil(Math.abs(J)/(Math.PI/36)));for(let X=0;X<=$;X+=1){const tt=at+J*(X/$);P(y,{x:K.x+V*Math.cos(tt),y:K.y+V*Math.sin(tt)})}continue}P(y,O)}nr=y}function dp(s){if(!s.length)return[];const t=[{...s[0],s:0}];let e=0;for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];e+=Math.hypot(r.x-i.x,r.y-i.y),t.push({...r,s:e})}return t}function rr(s,t){if(!s.length)return null;if(t<=0)return{...s[0],s:0};const e=s[s.length-1];if(t>=e.s)return{...e,s:e.s};for(let n=1;n<s.length;n+=1){const i=s[n-1],r=s[n];if(t>r.s)continue;const o=r.s-i.s,a=o<1e-12?0:(t-i.s)/o;return{x:i.x+(r.x-i.x)*a,y:i.y+(r.y-i.y)*a,s:t}}return{...e}}function fp(s,t,e,n=.25){const i=[];for(let o=t;o<e;o+=n){const a=rr(s,o);a&&i.push(a)}const r=rr(s,e);return r&&i.push(r),i}function ja(s,t,e){let n=e.x-t.x,i=e.y-t.y;const r=Math.hypot(n,i);r<1e-9?(n=0,i=1):(n/=r,i/=r);const o=-i,a=n;return s.map(c=>{const l=c.x-t.x,u=c.y-t.y;return{x:l*o+u*a,y:c.s,s:c.s}})}function pp(s,t,e,n){nt.save(),nt.strokeStyle="#d7e3dc",nt.lineWidth=1;const i=50;for(let r=s;r<=s+e;r+=i)nt.beginPath(),nt.moveTo(r,t),nt.lineTo(r,t+n),nt.stroke();for(let r=t;r<=t+n;r+=i)nt.beginPath(),nt.moveTo(s,r),nt.lineTo(s+e,r),nt.stroke();nt.restore()}function Jr(s,t,e){const n=Math.max(0,Math.min(Ke+s*Ci,si)),i=Math.max(n,Math.min(n+Ci,si)),r=fp(e,n,i);if(!r.length)return;const o=r[Math.min(r.length-1,12)]||r[r.length-1],a=ja(r,r[0],o),c=s===1,l=c?a.map(b=>({x:0,y:b.y,s:b.s})):a,u=Math.ceil(n),f=Math.floor(i),h=[];for(let b=u;b<=f;b+=1){const R=rr(e,b);if(!R)continue;const z=ja([R],r[0],o)[0];h.push({x:c?0:z.x,s:b,label:b%10===0?`0/${String(b).padStart(3,"0")}`:""})}let m=1/0,x=-1/0;const p=[-Sn,-pe,pe,Sn,0];for(const b of l)for(const R of p){const z=b.x+R;z<m&&(m=z),z>x&&(x=z)}for(const b of h)b.x<m&&(m=b.x),b.x>x&&(x=b.x);(!Number.isFinite(m)||!Number.isFinite(x))&&(m=-1,x=1);const d=Math.max(x-m,.25),E=24,v=18,I=Math.max(1e-4,(t.w-E*2)/d),M=(m+x)/2;function g(b){return t.x+t.w/2+(b-M)*I}function N(b){const R=i-n<1e-9?0:(b-n)/(i-n);return t.y+t.h-v-R*(t.h-v*2)}if(c){const b=Math.abs(g(1)-g(0)),R=Math.abs(N(n+1)-N(n)),z=g(0),V=Math.ceil((z-t.x)/Math.max(b,1e-6)),Z=Math.ceil((t.x+t.w-z)/Math.max(b,1e-6)),H=Math.ceil(n),K=Math.floor(i);nt.save(),nt.strokeStyle="#bfd4c8",nt.lineWidth=.8;for(let at=-V;at<=Z;at+=1){const $=g(at);$<t.x||$>t.x+t.w||(nt.beginPath(),nt.moveTo($,N(n)),nt.lineTo($,N(i)),nt.stroke())}for(let at=H;at<=K;at+=1){const $=N(at);nt.beginPath(),nt.moveTo(t.x,$),nt.lineTo(t.x+t.w,$),nt.stroke()}const J=Math.max(1.5,Math.min(b,R)*.12);nt.strokeStyle="#8fab9d",nt.lineWidth=.9;for(let at=-V;at<=Z;at+=1){const $=g(at);if(!($<t.x||$>t.x+t.w))for(let X=H;X<=K;X+=1){const tt=N(X);tt<t.y||tt>t.y+t.h||(nt.beginPath(),nt.moveTo($-J,tt),nt.lineTo($+J,tt),nt.moveTo($,tt-J),nt.lineTo($,tt+J),nt.stroke())}}nt.restore()}function P(b,R,z,V=[]){nt.save(),nt.strokeStyle=R,nt.lineWidth=z,nt.lineJoin="round",nt.lineCap="round",nt.setLineDash(V),nt.beginPath(),nt.moveTo(g(l[0].x+b),N(l[0].s));for(let Z=1;Z<l.length;Z+=1)nt.lineTo(g(l[Z].x+b),N(l[Z].s));nt.stroke(),nt.restore()}if(nt.save(),P(-Sn,"#6a4a2c",1.8,[6,4]),P(-pe,"#1c7a5a",2.2),P(pe,"#1c7a5a",2.2),P(Sn,"#6a4a2c",1.8,[6,4]),c&&sn.length)for(const b of sn){if(b.station<n||b.station>i)continue;const R=g(b.xRaw),z=N(b.station);nt.save(),nt.strokeStyle=Zf(b.classCode),nt.lineWidth=2;const V=6;nt.beginPath(),nt.moveTo(R-V,z-V),nt.lineTo(R+V,z+V),nt.moveTo(R-V,z+V),nt.lineTo(R+V,z-V),nt.stroke(),nt.restore()}for(const b of h){const R=g(b.x),z=N(b.s);nt.strokeStyle="#2d5b4c",nt.lineWidth=1,nt.beginPath(),nt.moveTo(R-5,z),nt.lineTo(R+5,z),nt.stroke(),b.label&&(nt.fillStyle="#16392d",nt.font="12px 'Avenir Next', 'Segoe UI', sans-serif",nt.textAlign="left",nt.textBaseline="middle",nt.fillText(b.label,R+8,z))}nt.fillStyle="#134232",nt.beginPath(),nt.arc(g(l[0].x),N(l[0].s),3.5,0,Math.PI*2),nt.fill();const S=Math.round(n),y=Math.round(i),w=s+1,O=c?"ratad":"original",q=`Zon ${w}: 0/${String(S).padStart(3,"0")} - 0/${String(y).padStart(3,"0")} (${O})`;return nt.fillStyle="#17372c",nt.font="700 13px 'Avenir Next', 'Segoe UI', sans-serif",nt.textAlign="left",nt.textBaseline="top",nt.fillText(q,t.x+8,t.y+4),nt.restore(),{startS:n,endS:i,zoneRect:t,centerX:M,scaleX:I,yPad:v}}function ci(){const s=bn.clientWidth,t=bn.clientHeight;if(nt.clearRect(0,0,s,t),!nr.length)return;const e=dp(nr);si=e[e.length-1].s;const n=8,i=n,r=n,o=s-n*2,a=t-n*2;pp(i,r,o,a);const c=Xa.reduce((N,P)=>N+P,0),l=Xa.map(N=>a*N/c),u=r,f=r+l[2],h=r+l[2]+l[1];nt.save(),nt.strokeStyle="#95b5a8",nt.lineWidth=1.25;const m=f,x=h;nt.beginPath(),nt.moveTo(i,m),nt.lineTo(i+o,m),nt.stroke(),nt.beginPath(),nt.moveTo(i,x),nt.lineTo(i+o,x),nt.stroke(),nt.restore();const p={x:i,y:h,w:o,h:l[0]},d={x:i,y:f,w:o,h:l[1]},E={x:i,y:u,w:o,h:l[2]};Jr(0,p,e);const v=Jr(1,d,e);Jr(2,E,e),qn={stationed:e,zone2:v};const I=Math.round(Ke),M=Math.min(Math.round(Ke+Ci*ms),Math.round(si)),g=sn[sn.length-1]||null;g?$e.textContent=`Tre-zons vy aktiv: 0/${String(I).padStart(3,"0")} - 0/${String(M).padStart(3,"0")}. Steg ${er} m. Kryss ${sn.length} st. Senaste ${g.classCode}: XYZ=(${g.local.x.toFixed(2)}, ${g.local.y.toFixed(2)}, ${g.local.z.toFixed(2)}) Verklig XY=(${g.world.x.toFixed(3)}, ${g.world.y.toFixed(3)})`:$e.textContent=`Tre-zons vy aktiv: 0/${String(I).padStart(3,"0")} - 0/${String(M).padStart(3,"0")}. Steg ${er} m, zon 2 ar ratad.`}function Qr(s,t,e){return Math.max(t,Math.min(e,s))}async function mp(s,t){if(!(qn!=null&&qn.zone2))return;const e=we.getBoundingClientRect(),n=s-e.left,i=t-e.top,r=qn.zone2,{zoneRect:o,startS:a,endS:c,centerX:l,scaleX:u,yPad:f}=r;if(!(n>=o.x&&n<=o.x+o.w&&i>=o.y&&i<=o.y+o.h))return;const m=Math.max(1e-6,o.h-f*2),x=Qr((o.y+o.h-f-i)/m,0,1),p=a+x*(c-a),d=(n-(o.x+o.w/2))/Math.max(u,1e-6)+l,E=Qr(d,-pe,pe),v=Qr(Math.abs(d)-pe,0,Sn-pe),I=rr(qn.stationed,p);if(!I)return;const M={station:p,xRaw:d,classCode:(Jn==null?void 0:Jn.value)||"TK1",riskType:(Qn==null?void 0:Qn.value)||"bom sprutbetong",local:{x:E,y:p,z:v},world:{x:I.x,y:I.y,z:0}},g=Po(M);g&&(M.world={x:g.x,y:g.y,z:g.z}),sn.push(M),ci();try{const N=await np(M);$e.textContent=`Marker sparad som IfcActionRequest (${N.event.id}). Lokal XYZ: (${M.local.x.toFixed(2)}, ${M.local.y.toFixed(2)}, ${M.local.z.toFixed(2)}) | Verklig XY: (${M.world.x.toFixed(3)}, ${M.world.y.toFixed(3)})`}catch(N){$e.textContent=`Marker satt men IFC-event kunde inte sparas. Lokal XYZ: (${M.local.x.toFixed(2)}, ${M.local.y.toFixed(2)}, ${M.local.z.toFixed(2)})`,console.error(N)}}function gp(){Ke=Math.max(0,Ke-er),cr==="2d"&&ci()}function Ep(){const s=Math.max(0,si-Ci*ms);Ke=Math.min(s,Ke+er),cr==="2d"&&ci()}Ji&&Ji.addEventListener("click",()=>{xs("3d")});Qi&&Qi.addEventListener("click",()=>{xs("2d")});Xf.addEventListener("click",gp);Yf.addEventListener("click",Ep);we.addEventListener("click",s=>{mp(s.clientX,s.clientY)});Wa&&Wa.addEventListener("click",async()=>{try{const s=await ip();sp(s.fileName,s.content);const t=Number(s.eventCount||0),e=t>0?`${t} kryss`:`event ${s.eventId}`;$e.textContent=`IFC exporterad: ${s.fileName} (${e}).`}catch(s){$e.textContent="Kunde inte exportera IFC-event. Kontrollera att en markor har sparats.",console.error(s)}});window.addEventListener("resize",wo);async function _p(){$e.textContent="Laddar alignment.ifc...";try{const s=await rp();if(hp(s),Zr=ap(s),sn=ep(),!nr.length){$e.textContent="Ingen plan-geometri hittades i alignment.ifc.";return}Zr.length&&up(Zr),wo(),ci(),xs("3d"),Fo()}catch(s){$e.textContent="Kunde inte lasa alignment.ifc for planvy.",console.error(s)}}_p();
