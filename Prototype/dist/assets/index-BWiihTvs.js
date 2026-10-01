(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="168",Ii={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,Ao=1,dd=2,Yl=1,jl=2,xn=3,kn=0,Lt=1,jt=2,rn=0,Ni=1,ti=2,wo=3,Co=4,hd=5,Zn=100,ud=101,fd=102,pd=103,md=104,gd=200,vd=201,xd=202,_d=203,ha=204,ua=205,Md=206,yd=207,Sd=208,bd=209,Ed=210,Td=211,Ad=212,wd=213,Cd=214,Rd=0,Pd=1,Ld=2,as=3,Dd=4,Id=5,Nd=6,Ud=7,Kl=0,Od=1,Fd=2,Bn=0,Zl=1,Jl=2,Ql=3,ja=4,Bd=5,ec=6,tc=7,nc=300,ki=301,zi=302,fa=303,pa=304,Ms=306,ma=1e3,Qn=1001,ga=1002,Kt=1003,kd=1004,Sr=1005,tn=1006,Ls=1007,ei=1008,Sn=1009,ic=1010,rc=1011,cr=1012,Ka=1013,ni=1014,Mn=1015,Ut=1016,Za=1017,Ja=1018,Hi=1020,sc=35902,ac=1021,oc=1022,nn=1023,lc=1024,cc=1025,Ui=1026,Gi=1027,dc=1028,Qa=1029,hc=1030,eo=1031,to=1033,Jr=33776,Qr=33777,es=33778,ts=33779,va=35840,xa=35841,_a=35842,Ma=35843,ya=36196,Sa=37492,ba=37496,Ea=37808,Ta=37809,Aa=37810,wa=37811,Ca=37812,Ra=37813,Pa=37814,La=37815,Da=37816,Ia=37817,Na=37818,Ua=37819,Oa=37820,Fa=37821,ns=36492,Ba=36494,ka=36495,uc=36283,za=36284,Ha=36285,Ga=36286,zd=3200,fc=3201,pc=0,Hd=1,In="",Yt="srgb",zn="srgb-linear",no="display-p3",ys="display-p3-linear",os="linear",et="srgb",ls="rec709",cs="p3",di=7680,Ro=519,Gd=512,Vd=513,Wd=514,mc=515,$d=516,Xd=517,qd=518,Yd=519,Po=35044,Lo="300 es",yn=2e3,ds=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],is=Math.PI/180,Va=180/Math.PI;function mr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function jd(i,e){return(i%e+e)%e}function Ds(i,e,t){return(1-t)*i+t*e}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kd={DEG2RAD:is};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],p=n[5],g=n[8],v=r[0],m=r[3],h=r[6],M=r[1],x=r[4],E=r[7],L=r[2],A=r[5],w=r[8];return s[0]=a*v+o*M+l*L,s[3]=a*m+o*x+l*A,s[6]=a*h+o*E+l*w,s[1]=c*v+d*M+f*L,s[4]=c*m+d*x+f*A,s[7]=c*h+d*E+f*w,s[2]=u*v+p*M+g*L,s[5]=u*m+p*x+g*A,s[8]=u*h+p*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*s,p=c*s-a*l,g=t*f+n*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-d*n)*v,e[2]=(o*n-r*a)*v,e[3]=u*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Fe;function gc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){const i=dr("canvas");return i.style.display="block",i}const Do={};function lr(i){i in Do||(Do[i]=!0,console.warn(i))}function Jd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Io=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),No=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[zn]:{transfer:os,primaries:ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Yt]:{transfer:et,primaries:ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ys]:{transfer:os,primaries:cs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(No),fromReference:i=>i.applyMatrix3(Io)},[no]:{transfer:et,primaries:cs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(No),fromReference:i=>i.applyMatrix3(Io).convertLinearToSRGB()}},Qd=new Set([zn,ys]),Ve={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Zi[e].toReference,r=Zi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Zi[i].primaries},getTransfer:function(i){return i===In?os:Zi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Zi[e].luminanceCoefficients)}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class eh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=dr("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let th=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Us(r[a].image)):s.push(Us(r[a]))}else s=Us(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;class Dt extends si{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Qn,r=Qn,s=tn,a=ei,o=nn,l=Sn,c=Dt.DEFAULT_ANISOTROPY,d=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=mr(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=nc;Dt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(p+1)/2,L=(h+1)/2,A=(d+u)/4,w=(f+v)/4,N=(g+m)/4;return x>E&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=w/n):E>L?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=N/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=w/s,r=N/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(u-d)/M,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _t extends ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xc extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rh extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==u||c!==p||d!==g){let m=1-o;const h=l*u+c*p+d*g+f*v,M=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,h*M);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const E=o*M;if(l=l*m+u*E,c=c*m+p*E,d=d*m+g*E,f=f*m+v*E,m===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=L,c*=L,d*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+d*f+l*p-c*u,e[t+1]=l*g+d*u+c*f-o*p,e[t+2]=c*g+d*p+o*u-l*f,e[t+3]=d*g-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),f=o(s/2),u=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"YXZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"ZXY":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"ZYX":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"YZX":this._x=u*d*f+c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f-u*p*g;break;case"XZY":this._x=u*d*f-c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Os.copy(this).projectOnVector(e),this.sub(Os)}reflect(e){return this.sub(Os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new R,Uo=new ii;class gr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(s,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Er.subVectors(this.max,Ji),ui.subVectors(e.a,Ji),fi.subVectors(e.b,Ji),pi.subVectors(e.c,Ji),En.subVectors(fi,ui),Tn.subVectors(pi,fi),Gn.subVectors(ui,pi);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Gn.z,Gn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Gn.z,0,-Gn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Gn.y,Gn.x,0];return!Fs(t,ui,fi,pi,Er)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,ui,fi,pi,Er))?!1:(Tr.crossVectors(En,Tn),t=[Tr.x,Tr.y,Tr.z],Fs(t,ui,fi,pi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new R,new R,new R,new R,new R,new R,new R,new R],Jt=new R,br=new gr,ui=new R,fi=new R,pi=new R,En=new R,Tn=new R,Gn=new R,Ji=new R,Er=new R,Tr=new R,Vn=new R;function Fs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vn.fromArray(i,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),d=n.dot(Vn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const sh=new gr,Qi=new R,Bs=new R;class vr{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Bs)),this.expandByPoint(Qi.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new R,ks=new R,Ar=new R,An=new R,zs=new R,wr=new R,Hs=new R;class xr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ks.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),An.copy(this.origin).sub(ks);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=An.dot(this.direction),l=-An.dot(Ar),c=An.lengthSq(),d=Math.abs(1-a*a);let f,u,p,g;if(d>0)if(f=a*l-o,u=a*o-l,g=s*d,f>=0)if(u>=-g)if(u<=g){const v=1/d;f*=v,u*=v,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ks).addScaledVector(Ar,u),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,s){zs.subVectors(t,e),wr.subVectors(n,e),Hs.crossVectors(zs,wr);let a=this.direction.dot(Hs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(An,wr));if(l<0)return null;const c=o*this.direction.dot(zs.cross(An));if(c<0||l+c>a)return null;const d=-o*An.dot(Hs);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,s,a,o,l,c,d,f,u,p,g,v,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,d,f,u,p,g,v,m)}set(e,t,n,r,s,a,o,l,c,d,f,u,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*f,g=o*d,v=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,g=c*d,v=c*f;t[0]=u+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,g=c*d,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*f,g=o*d,v=o*f;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-u*f,t[8]=g*f+p,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*f+g,t[10]=u-v*f}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+v,t[5]=a*d,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*d,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,oh)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),wn.crossVectors(n,Gt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),wn.crossVectors(n,Gt)),wn.normalize(),Cr.crossVectors(Gt,wn),r[0]=wn.x,r[4]=Cr.x,r[8]=Gt.x,r[1]=wn.y,r[5]=Cr.y,r[9]=Gt.y,r[2]=wn.z,r[6]=Cr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],h=n[14],M=n[3],x=n[7],E=n[11],L=n[15],A=r[0],w=r[4],N=r[8],b=r[12],y=r[1],P=r[5],z=r[9],k=r[13],j=r[2],Y=r[6],W=r[10],Z=r[14],G=r[3],le=r[7],ue=r[11],ve=r[15];return s[0]=a*A+o*y+l*j+c*G,s[4]=a*w+o*P+l*Y+c*le,s[8]=a*N+o*z+l*W+c*ue,s[12]=a*b+o*k+l*Z+c*ve,s[1]=d*A+f*y+u*j+p*G,s[5]=d*w+f*P+u*Y+p*le,s[9]=d*N+f*z+u*W+p*ue,s[13]=d*b+f*k+u*Z+p*ve,s[2]=g*A+v*y+m*j+h*G,s[6]=g*w+v*P+m*Y+h*le,s[10]=g*N+v*z+m*W+h*ue,s[14]=g*b+v*k+m*Z+h*ve,s[3]=M*A+x*y+E*j+L*G,s[7]=M*w+x*P+E*Y+L*le,s[11]=M*N+x*z+E*W+L*ue,s[15]=M*b+x*k+E*Z+L*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*o*u+n*c*u+r*o*p-n*l*p)+v*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*d-s*l*d)+m*(+t*c*f-t*o*p-s*a*f+n*a*p+s*o*d-n*c*d)+h*(-r*o*d-t*l*f+t*o*u+r*a*f-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],M=f*m*c-v*u*c+v*l*p-o*m*p-f*l*h+o*u*h,x=g*u*c-d*m*c-g*l*p+a*m*p+d*l*h-a*u*h,E=d*v*c-g*f*c+g*o*p-a*v*p-d*o*h+a*f*h,L=g*f*l-d*v*l-g*o*u+a*v*u+d*o*m-a*f*m,A=t*M+n*x+r*E+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=M*w,e[1]=(v*u*s-f*m*s-v*r*p+n*m*p+f*r*h-n*u*h)*w,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*h+n*l*h)*w,e[3]=(f*l*s-o*u*s-f*r*c+n*u*c+o*r*p-n*l*p)*w,e[4]=x*w,e[5]=(d*m*s-g*u*s+g*r*p-t*m*p-d*r*h+t*u*h)*w,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*h-t*l*h)*w,e[7]=(a*u*s-d*l*s+d*r*c-t*u*c-a*r*p+t*l*p)*w,e[8]=E*w,e[9]=(g*f*s-d*v*s-g*n*p+t*v*p+d*n*h-t*f*h)*w,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*h+t*o*h)*w,e[11]=(d*o*s-a*f*s-d*n*c+t*f*c+a*n*p-t*o*p)*w,e[12]=L*w,e[13]=(d*v*r-g*f*r+g*n*u-t*v*u-d*n*m+t*f*m)*w,e[14]=(g*o*r-a*v*r-g*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*f*r-d*o*r+d*n*l-t*f*l-a*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,f=o+o,u=s*c,p=s*d,g=s*f,v=a*d,m=a*f,h=o*f,M=l*c,x=l*d,E=l*f,L=n.x,A=n.y,w=n.z;return r[0]=(1-(v+h))*L,r[1]=(p+E)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(p-E)*A,r[5]=(1-(u+h))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+x)*w,r[9]=(m-M)*w,r[10]=(1-(u+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const c=1/s,d=1/a,f=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=d,Qt.elements[5]*=d,Qt.elements[6]*=d,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=yn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),u=(n+r)/(n-r);let p,g;if(o===yn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ds)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=yn){const l=this.elements,c=1/(t-e),d=1/(n-r),f=1/(a-s),u=(t+e)*c,p=(n+r)*d;let g,v;if(o===yn)g=(a+s)*f,v=-2*f;else if(o===ds)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new R,Qt=new Qe,ah=new R(0,0,0),oh=new R(1,1,1),wn=new R,Cr=new R,Gt=new R,Oo=new Qe,Fo=new ii;class dn{constructor(e=0,t=0,n=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lh=0;const Bo=new R,gi=new ii,mn=new Qe,Rr=new R,er=new R,ch=new R,dh=new ii,ko=new R(1,0,0),zo=new R(0,1,0),Ho=new R(0,0,1),Go={type:"added"},hh={type:"removed"},vi={type:"childadded",child:null},Gs={type:"childremoved",child:null};class It extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new R,t=new dn,n=new ii,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Fe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(ko,e)}rotateY(e){return this.rotateOnAxis(zo,e)}rotateZ(e){return this.rotateOnAxis(Ho,e)}translateOnAxis(e,t){return Bo.copy(e).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ko,e)}translateY(e){return this.translateOnAxis(zo,e)}translateZ(e){return this.translateOnAxis(Ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(er,Rr,this.up):mn.lookAt(Rr,er,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(mn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Go),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hh),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Go),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new R(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new R,gn=new R,Vs=new R,vn=new R,xi=new R,_i=new R,Vo=new R,Ws=new R,$s=new R,Xs=new R;class cn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){en.subVectors(r,t),gn.subVectors(n,t),Vs.subVectors(e,t);const a=en.dot(en),o=en.dot(gn),l=en.dot(Vs),c=gn.dot(gn),d=gn.dot(Vs),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*d)*u,g=(a*d-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static isFrontFacing(e,t,n,r){return en.subVectors(n,t),gn.subVectors(e,t),en.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),en.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,n),_i.subVectors(s,n),Ws.subVectors(e,n);const l=xi.dot(Ws),c=_i.dot(Ws);if(l<=0&&c<=0)return t.copy(n);$s.subVectors(e,r);const d=xi.dot($s),f=_i.dot($s);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(xi,a);Xs.subVectors(e,s);const p=xi.dot(Xs),g=_i.dot(Xs);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(_i,o);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return Vo.subVectors(s,r),o=(f-d)/(f-d+(p-g)),t.copy(r).addScaledVector(Vo,o);const h=1/(m+v+u);return a=v*h,o=u*h,t.copy(n).addScaledVector(xi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function qs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=jd(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=qs(a,s,e+1/3),this.g=qs(a,s,e),this.b=qs(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=_c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ve.fromWorkingColorSpace(Rt.copy(this),e),Math.round(At(Rt.r*255,0,255))*65536+Math.round(At(Rt.g*255,0,255))*256+Math.round(At(Rt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Yt){Ve.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,r=Rt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Pr);const n=Ds(Cn.h,Pr.h,t),r=Ds(Cn.s,Pr.s,t),s=Ds(Cn.l,Pr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Le;Le.NAMES=_c;let uh=0;class ai extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=Ni,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oi extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new R,Lr=new ae;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return lr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}}class Mc extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yc extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fh=0;const qt=new Qe,Ys=new It,Mi=new R,Vt=new gr,tr=new gr,xt=new R;class wt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?yc:Mc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Ys.lookAt(e),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Vt.min,tr.min),Vt.expandByPoint(xt),xt.addVectors(Vt.max,tr.max),Vt.expandByPoint(xt)):(Vt.expandByPoint(tr.min),Vt.expandByPoint(tr.max))}Vt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)xt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),xt.add(Mi)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new R,l[N]=new R;const c=new R,d=new R,f=new R,u=new ae,p=new ae,g=new ae,v=new R,m=new R;function h(N,b,y){c.fromBufferAttribute(n,N),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,y),u.fromBufferAttribute(s,N),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),d.sub(c),f.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),o[N].add(v),o[b].add(v),o[y].add(v),l[N].add(m),l[b].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let N=0,b=M.length;N<b;++N){const y=M[N],P=y.start,z=y.count;for(let k=P,j=P+z;k<j;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new R,E=new R,L=new R,A=new R;function w(N){L.fromBufferAttribute(r,N),A.copy(L);const b=o[N];x.copy(b),x.sub(L.multiplyScalar(L.dot(b))).normalize(),E.crossVectors(A,b);const P=E.dot(l[N])<0?-1:1;a.setXYZW(N,x.x,x.y,x.z,P)}for(let N=0,b=M.length;N<b;++N){const y=M[N],P=y.start,z=y.count;for(let k=P,j=P+z;k<j;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,d=new R,f=new R;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let h=0;h<d;h++)u[g++]=c[p++]}return new $t(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new Qe,Wn=new xr,Dr=new vr,$o=new R,yi=new R,Si=new R,bi=new R,js=new R,Ir=new R,Nr=new ae,Ur=new ae,Or=new ae,Xo=new R,qo=new R,Yo=new R,Fr=new R,Br=new R;class Mt extends It{constructor(e=new wt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(js.fromBufferAttribute(f,e),a?Ir.addScaledVector(js,d):Ir.addScaledVector(js.sub(t),d))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Dr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Dr,$o)===null||Wn.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Wo.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],h=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,L=x;E<L;E+=3){const A=o.getX(E),w=o.getX(E+1),N=o.getX(E+2);r=kr(this,h,e,n,c,d,f,A,w,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const M=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);r=kr(this,a,e,n,c,d,f,M,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],h=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,L=x;E<L;E+=3){const A=E,w=E+1,N=E+2;r=kr(this,h,e,n,c,d,f,A,w,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const M=m,x=m+1,E=m+2;r=kr(this,a,e,n,c,d,f,M,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ph(i,e,t,n,r,s,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===kn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:i}}function kr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,yi),i.getVertexPosition(l,Si),i.getVertexPosition(c,bi);const d=ph(i,e,t,n,yi,Si,bi,Fr);if(d){r&&(Nr.fromBufferAttribute(r,o),Ur.fromBufferAttribute(r,l),Or.fromBufferAttribute(r,c),d.uv=cn.getInterpolation(Fr,yi,Si,bi,Nr,Ur,Or,new ae)),s&&(Nr.fromBufferAttribute(s,o),Ur.fromBufferAttribute(s,l),Or.fromBufferAttribute(s,c),d.uv1=cn.getInterpolation(Fr,yi,Si,bi,Nr,Ur,Or,new ae)),a&&(Xo.fromBufferAttribute(a,o),qo.fromBufferAttribute(a,l),Yo.fromBufferAttribute(a,c),d.normal=cn.getInterpolation(Fr,yi,Si,bi,Xo,qo,Yo,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new R,materialIndex:0};cn.getNormal(yi,Si,bi,f.normal),d.face=f}return d}class _r extends wt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function g(v,m,h,M,x,E,L,A,w,N,b){const y=E/w,P=L/N,z=E/2,k=L/2,j=A/2,Y=w+1,W=N+1;let Z=0,G=0;const le=new R;for(let ue=0;ue<W;ue++){const ve=ue*P-k;for(let ze=0;ze<Y;ze++){const Ke=ze*y-z;le[v]=Ke*M,le[m]=ve*x,le[h]=j,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[h]=A>0?1:-1,d.push(le.x,le.y,le.z),f.push(ze/w),f.push(1-ue/N),Z+=1}}for(let ue=0;ue<N;ue++)for(let ve=0;ve<w;ve++){const ze=u+ve+Y*ue,Ke=u+ve+Y*(ue+1),V=u+(ve+1)+Y*(ue+1),Q=u+(ve+1)+Y*ue;l.push(ze,Ke,Q),l.push(Ke,V,Q),G+=6}o.addGroup(p,G,b),p+=G,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Vi(i[t]);for(const r in n)e[r]=n[r]}return e}function mh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const Wi={clone:Vi,merge:Nt};var gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new R,jo=new ae,Ko=new ae;class Wt extends bc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,jo,Ko),t.subVectors(Ko,jo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ti=1;class xh extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Ei,Ti,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Ei,Ti,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Ei,Ti,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ei,Ti,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Ei,Ti,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ei,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(f,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ec extends Dt{constructor(e,t,n,r,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _h extends _t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ec(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _r(5,5,5),s=new ft({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:rn});s.uniforms.tEquirect.value=t;const a=new Mt(r,s),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=tn),new xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ks=new R,Mh=new R,yh=new Fe;class Dn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ks.subVectors(n,t).cross(Mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ks),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yh.getNormalMatrix(e),r=this.coplanarPoint(Ks).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new vr,zr=new R;class ro{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],u=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],M=r[13],x=r[14],E=r[15];if(n[0].setComponents(l-s,u-c,m-p,E-h).normalize(),n[1].setComponents(l+s,u+c,m+p,E+h).normalize(),n[2].setComponents(l+a,u+d,m+g,E+M).normalize(),n[3].setComponents(l-a,u-d,m-g,E-M).normalize(),n[4].setComponents(l-o,u-f,m-v,E-x).normalize(),t===yn)n[5].setComponents(l+o,u+f,m+v,E+x).normalize();else if(t===ds)n[5].setComponents(o,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Sh(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l._updateRange,u=l.updateRanges;if(i.bindBuffer(c,o),f.count===-1&&u.length===0&&i.bufferSubData(c,0,d),u.length!==0){for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ss extends wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<d;h++){const M=h*u-a;for(let x=0;x<c;x++){const E=x*f-s;g.push(E,-M,0),v.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const x=M+c*h,E=M+c*(h+1),L=M+1+c*(h+1),A=M+1+c*h;p.push(x,E,A),p.push(E,L,A)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
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
#endif`,Fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,du=`#ifdef USE_GRADIENTMAP
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
}`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Su=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ef=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Df=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Gf=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xf=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tp=`uniform float rotation;
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
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:bh,alphahash_pars_fragment:Eh,alphamap_fragment:Th,alphamap_pars_fragment:Ah,alphatest_fragment:wh,alphatest_pars_fragment:Ch,aomap_fragment:Rh,aomap_pars_fragment:Ph,batching_pars_vertex:Lh,batching_vertex:Dh,begin_vertex:Ih,beginnormal_vertex:Nh,bsdfs:Uh,iridescence_fragment:Oh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:Hh,color_fragment:Gh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:$h,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:jh,displacementmap_vertex:Kh,emissivemap_fragment:Zh,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:ru,envmap_physical_pars_fragment:mu,envmap_vertex:su,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:du,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:vu,lights_phong_fragment:xu,lights_phong_pars_fragment:_u,lights_physical_fragment:Mu,lights_physical_pars_fragment:yu,lights_fragment_begin:Su,lights_fragment_maps:bu,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:wu,logdepthbuf_vertex:Cu,map_fragment:Ru,map_pars_fragment:Pu,map_particle_fragment:Lu,map_particle_pars_fragment:Du,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Nu,morphinstance_vertex:Uu,morphcolor_vertex:Ou,morphnormal_vertex:Fu,morphtarget_pars_vertex:Bu,morphtarget_vertex:ku,normal_fragment_begin:zu,normal_fragment_maps:Hu,normal_pars_fragment:Gu,normal_pars_vertex:Vu,normal_vertex:Wu,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:ju,opaque_fragment:Ku,packing:Zu,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:ef,dithering_pars_fragment:tf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:lf,skinbase_vertex:cf,skinning_pars_vertex:df,skinning_vertex:hf,skinnormal_vertex:uf,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:vf,transmission_pars_fragment:xf,uv_pars_fragment:_f,uv_pars_vertex:Mf,uv_vertex:yf,worldpos_vertex:Sf,background_vert:bf,background_frag:Ef,backgroundCube_vert:Tf,backgroundCube_frag:Af,cube_vert:wf,cube_frag:Cf,depth_vert:Rf,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Df,equirect_vert:If,equirect_frag:Nf,linedashed_vert:Uf,linedashed_frag:Of,meshbasic_vert:Ff,meshbasic_frag:Bf,meshlambert_vert:kf,meshlambert_frag:zf,meshmatcap_vert:Hf,meshmatcap_frag:Gf,meshnormal_vert:Vf,meshnormal_frag:Wf,meshphong_vert:$f,meshphong_frag:Xf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:jf,meshtoon_frag:Kf,points_vert:Zf,points_frag:Jf,shadow_vert:Qf,shadow_frag:ep,sprite_vert:tp,sprite_frag:np},re={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ln={basic:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Le(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Nt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Nt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Le(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Nt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Nt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Nt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Nt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Nt([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Nt([re.lights,re.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ln.physical={uniforms:Nt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Hr={r:0,b:0,g:0},Xn=new dn,ip=new Qe;function rp(i,e,t,n,r,s,a){const o=new Le(0);let l=s===!0?0:1,c,d,f=null,u=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const E=g(M);E===null?h(o,l):E&&E.isColor&&(h(E,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Ms)?(d===void 0&&(d=new Mt(new _r(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Vi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Xn.copy(x.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(Xn)),d.material.toneMapped=Ve.getTransfer(E.colorSpace)!==et,(f!==E||u!==E.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=E,u=E.version,p=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Mt(new Ss(2,2),new ft({name:"BackgroundMaterial",uniforms:Vi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(E.colorSpace)!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||u!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,u=E.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,x){M.getRGB(Hr,Sc(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(o,l)},render:v,addToRenderList:m}}function sp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(y,P,z,k,j){let Y=!1;const W=f(k,z,P);s!==W&&(s=W,c(s.object)),Y=p(y,k,z,j),Y&&g(y,k,z,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(y,P,z,k),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function f(y,P,z){const k=z.wireframe===!0;let j=n[y.id];j===void 0&&(j={},n[y.id]=j);let Y=j[P.id];Y===void 0&&(Y={},j[P.id]=Y);let W=Y[k];return W===void 0&&(W=u(l()),Y[k]=W),W}function u(y){const P=[],z=[],k=[];for(let j=0;j<t;j++)P[j]=0,z[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,P,z,k){const j=s.attributes,Y=P.attributes;let W=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){const ue=j[G];let ve=Y[G];if(ve===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(y,P,z,k){const j={},Y=P.attributes;let W=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){let ue=Y[G];ue===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),j[G]=ve,W++}s.attributes=j,s.attributesNum=W,s.index=k}function v(){const y=s.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){h(y,0)}function h(y,P){const z=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;z[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),j[y]!==P&&(i.vertexAttribDivisor(y,P),j[y]=P)}function M(){const y=s.newAttributes,P=s.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==y[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function x(y,P,z,k,j,Y,W){W===!0?i.vertexAttribIPointer(y,P,z,j,Y):i.vertexAttribPointer(y,P,z,k,j,Y)}function E(y,P,z,k){v();const j=k.attributes,Y=z.getAttributes(),W=P.defaultAttributeValues;for(const Z in Y){const G=Y[Z];if(G.location>=0){let le=j[Z];if(le===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const ue=le.normalized,ve=le.itemSize,ze=e.get(le);if(ze===void 0)continue;const Ke=ze.buffer,V=ze.type,Q=ze.bytesPerElement,ge=V===i.INT||V===i.UNSIGNED_INT||le.gpuType===Ka;if(le.isInterleavedBufferAttribute){const de=le.data,Ae=de.stride,De=le.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)h(G.location+ke,de.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ke=0;ke<G.locationSize;ke++)x(G.location+ke,ve/G.locationSize,V,ue,Ae*Q,(De+ve/G.locationSize*ke)*Q,ge)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)h(G.location+de,le.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let de=0;de<G.locationSize;de++)x(G.location+de,ve/G.locationSize,V,ue,ve*Q,ve/G.locationSize*de*Q,ge)}}else if(W!==void 0){const ue=W[Z];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(G.location,ue);break;case 3:i.vertexAttrib3fv(G.location,ue);break;case 4:i.vertexAttrib4fv(G.location,ue);break;default:i.vertexAttrib1fv(G.location,ue)}}}}M()}function L(){N();for(const y in n){const P=n[y];for(const z in P){const k=P[z];for(const j in k)d(k[j].object),delete k[j];delete P[z]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const z in P){const k=P[z];for(const j in k)d(k[j].object),delete k[j];delete P[z]}delete n[y.id]}function w(y){for(const P in n){const z=n[P];if(z[y.id]===void 0)continue;const k=z[y.id];for(const j in k)d(k[j].object),delete k[j];delete z[y.id]}}function N(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function ap(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];t.update(p,n,1)}function l(c,d,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v];for(let v=0;v<u.length;v++)t.update(g,n,u[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function op(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===Ut&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!w)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:E,maxSamples:L}}function lp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Dn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const M=s?0:n,x=M*4;let E=h.clippingState||null;l.value=E,E=d(g,u,x,p);for(let L=0;L!==x;++L)E[L]=t[L];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,E=p;x!==v;++x,E+=4)a.copy(f[x]).applyMatrix4(M,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function cp(i){let e=new WeakMap;function t(a,o){return o===fa?a.mapping=ki:o===pa&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fa||o===pa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _h(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ac extends bc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,Zo=[.125,.215,.35,.446,.526,.582],Jn=20,Zs=new Ac,Jo=new Le;let Js=null,Qs=0,ea=0,ta=!1;const Yn=(1+Math.sqrt(5))/2,Ai=1/Yn,Qo=[new R(-Yn,Ai,0),new R(Yn,Ai,0),new R(-Ai,0,Yn),new R(Ai,0,Yn),new R(0,Yn,-Ai),new R(0,Yn,Ai),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Js,Qs,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ut,format:nn,colorSpace:zn,depthBuffer:!1},r=tl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(s)),this._blurMaterial=hp(s,e,t)}return r}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,n,r){const o=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Jo),d.toneMapping=Bn,d.autoClear=!1;const p=new oi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Mt(new _r,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jo),v=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):M===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;Gr(r,M*x,h>2?x:0,x,x),d.setRenderTarget(r),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ki||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qo[(r-s-1)%Qo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Mt(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):Jn;m>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const h=[];let M=0;for(let w=0;w<Jn;++w){const N=w/v,b=Math.exp(-N*N/2);h.push(b),w===0?M+=b:w<m&&(M+=2*b)}for(let w=0;w<h.length;w++)h[w]=h[w]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const E=this._sizeLods[r],L=3*E*(r>x-Li?r-x+Li:0),A=4*(this._cubeSize-E);Gr(t,L,A,3*E,2*E),l.setRenderTarget(t),l.render(f,Zs)}}function dp(i){const e=[],t=[],n=[];let r=i;const s=i-Li+1+Zo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Li?l=Zo[a-i+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,v=3,m=2,h=1,M=new Float32Array(v*g*p),x=new Float32Array(m*g*p),E=new Float32Array(h*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,N=A>2?0:-1,b=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];M.set(b,v*g*A),x.set(u,m*g*A);const y=[A,A,A,A,A,A];E.set(y,h*g*A)}const L=new wt;L.setAttribute("position",new $t(M,v)),L.setAttribute("uv",new $t(x,m)),L.setAttribute("faceIndex",new $t(E,h)),e.push(L),r>Li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tl(i,e,t){const n=new _t(i,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hp(i,e,t){const n=new Float32Array(Jn),r=new R(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:so(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function nl(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function il(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}function up(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fa||l===pa,d=l===ki||l===zi;if(c||d){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new el(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new el(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pp(i,e,t,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let x=0,E=M.length;x<E;x+=3){const L=M[x+0],A=M[x+1],w=M[x+2];u.push(L,A,A,w,w,L)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const L=x+0,A=x+1,w=x+2;u.push(L,A,A,w,w,L)}}else return;const m=new(gc(u)?yc:Mc)(u,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function mp(i,e,t){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,s,u*a),t.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,u*a,g),t.update(p,n,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,n,1)}function f(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<u.length;h++)c(u[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,v,0,g);let h=0;for(let M=0;M<g;M++)h+=p[M];for(let M=0;M<v.length;M++)t.update(h,n,v[M])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function gp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vp(i,e,t){const n=new WeakMap,r=new tt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let y=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let L=o.attributes.position.count*E,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*A*4*f),N=new xc(w,L,A,f);N.type=Mn,N.needsUpdate=!0;const b=E*4;for(let P=0;P<f;P++){const z=h[P],k=M[P],j=x[P],Y=L*A*4*P;for(let W=0;W<z.count;W++){const Z=W*b;g===!0&&(r.fromBufferAttribute(z,W),w[Y+Z+0]=r.x,w[Y+Z+1]=r.y,w[Y+Z+2]=r.z,w[Y+Z+3]=0),v===!0&&(r.fromBufferAttribute(k,W),w[Y+Z+4]=r.x,w[Y+Z+5]=r.y,w[Y+Z+6]=r.z,w[Y+Z+7]=0),m===!0&&(r.fromBufferAttribute(j,W),w[Y+Z+8]=r.x,w[Y+Z+9]=r.y,w[Y+Z+10]=r.z,w[Y+Z+11]=j.itemSize===4?r.w:1)}}u={count:f,texture:N,size:new ae(L,A)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function xp(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class wc extends Dt{constructor(e,t,n,r,s,a,o,l,c,d=Ui){if(d!==Ui&&d!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ui&&(n=ni),n===void 0&&d===Gi&&(n=Hi),super(null,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cc=new Dt,rl=new wc(1,1),Rc=new xc,Pc=new rh,Lc=new Ec,sl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=sl[r];if(s===void 0&&(s=new Float32Array(r),sl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bs(i,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),gt(t,n)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),gt(t,n)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),gt(t,n)}}function Ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=mc,s=rl):s=Cc,t.setTexture2D(e||s,r)}function Up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pc,r)}function Op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lc,r)}function Fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rc,r)}function Bp(i){switch(i){case 5126:return _p;case 35664:return Mp;case 35665:return yp;case 35666:return Sp;case 35674:return bp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return Cp;case 35669:case 35673:return Rp;case 5125:return Pp;case 36294:return Lp;case 36295:return Dp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Fp}}function kp(i,e){i.uniform1fv(this.addr,e)}function zp(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function Hp(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Gp(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Vp(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wp(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $p(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xp(i,e){i.uniform1iv(this.addr,e)}function qp(i,e){i.uniform2iv(this.addr,e)}function Yp(i,e){i.uniform3iv(this.addr,e)}function jp(i,e){i.uniform4iv(this.addr,e)}function Kp(i,e){i.uniform1uiv(this.addr,e)}function Zp(i,e){i.uniform2uiv(this.addr,e)}function Jp(i,e){i.uniform3uiv(this.addr,e)}function Qp(i,e){i.uniform4uiv(this.addr,e)}function em(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Cc,s[a])}function tm(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pc,s[a])}function nm(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Lc,s[a])}function im(i,e,t){const n=this.cache,r=e.length,s=bs(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rc,s[a])}function rm(i){switch(i){case 5126:return kp;case 35664:return zp;case 35665:return Hp;case 35666:return Gp;case 35674:return Vp;case 35675:return Wp;case 35676:return $p;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return jp;case 5125:return Kp;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function lm(i,e,t){const n=i.name,r=n.length;for(na.lastIndex=0;;){const s=na.exec(n),a=na.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){dl(t,c===void 0?new sm(o,i,e):new am(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new om(o),dl(t,f)),t=f}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);lm(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cm=37297;let dm=0;function hm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function um(i){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(i);let n;switch(e===t?n="":e===cs&&t===ls?n="LinearDisplayP3ToLinearSRGB":e===ls&&t===cs&&(n="LinearSRGBToLinearDisplayP3"),i){case zn:case ys:return[n,"LinearTransferOETF"];case Yt:case no:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hm(i.getShaderSource(e),a)}else return r}function fm(i,e){const t=um(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pm(i,e){let t;switch(e){case Zl:t="Linear";break;case Jl:t="Reinhard";break;case Ql:t="Cineon";break;case ja:t="ACESFilmic";break;case ec:t="AgX";break;case tc:t="Neutral";break;case Bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new R;function mm(){Ve.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function vm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ar(i){return i!==""}function fl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace(_m,ym)}const Mm=new Map;function ym(i,e){let t=Oe[e];if(t===void 0){const n=Mm.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(i){return i.replace(Sm,bm)}function bm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Em(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case zi:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function wm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function Cm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Em(t),c=Tm(t),d=Am(t),f=wm(t),u=Cm(t),p=gm(t),g=vm(s),v=r.createProgram();let m,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),h.length>0&&(h+=`
`)):(m=[gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),h=[gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Bn?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,fm("linearToOutputTexel",t.outputColorSpace),mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Wa(a),a=fl(a,t),a=pl(a,t),o=Wa(o),o=fl(o,t),o=pl(o,t),a=ml(a),o=ml(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=M+m+a,E=M+h+o,L=hl(r,r.VERTEX_SHADER,x),A=hl(r,r.FRAGMENT_SHADER,E);r.attachShader(v,L),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(P){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(L).trim(),j=r.getShaderInfoLog(A).trim();let Y=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,A);else{const Z=ul(r,L,"vertex"),G=ul(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Z+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||j==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(L),r.deleteShader(A),N=new rs(r,v),b=xm(r,v)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,cm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dm(e),t.set(e,n)),n}}class Dm{constructor(e){this.id=Pm++,this.code=e,this.usedTimes=0}}function Im(i,e,t,n,r,s,a){const o=new io,l=new Lm,c=new Set,d=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,z,k){const j=z.fog,Y=k.geometry,W=b.isMeshStandardMaterial?z.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),G=Z&&Z.mapping===Ms?Z.image.height:null,le=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=ue!==void 0?ue.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let Ke,V,Q,ge;if(le){const We=ln[le];Ke=We.vertexShader,V=We.fragmentShader}else Ke=b.vertexShader,V=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),ge=l.getFragmentShaderID(b);const de=i.getRenderTarget(),Ae=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,ke=!!b.map,it=!!b.matcap,C=!!Z,lt=!!b.aoMap,Ye=!!b.lightMap,Ze=!!b.bumpMap,ye=!!b.normalMap,ct=!!b.displacementMap,Re=!!b.emissiveMap,Ie=!!b.metalnessMap,T=!!b.roughnessMap,_=b.anisotropy>0,B=b.clearcoat>0,q=b.dispersion>0,J=b.iridescence>0,K=b.sheen>0,Se=b.transmission>0,se=_&&!!b.anisotropyMap,he=B&&!!b.clearcoatMap,Ue=B&&!!b.clearcoatNormalMap,ee=B&&!!b.clearcoatRoughnessMap,ce=J&&!!b.iridescenceMap,He=J&&!!b.iridescenceThicknessMap,Ce=K&&!!b.sheenColorMap,fe=K&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Be=!!b.specularColorMap,nt=!!b.specularIntensityMap,D=Se&&!!b.transmissionMap,te=Se&&!!b.thicknessMap,$=!!b.gradientMap,X=!!b.alphaMap,ie=b.alphaTest>0,Ee=!!b.alphaHash,Ge=!!b.extensions;let dt=Bn;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(dt=i.toneMapping);const St={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:V,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&k.instanceColor!==null,instancingMorph:Ae&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:zn,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:it,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:G,aoMap:lt,lightMap:Ye,bumpMap:Ze,normalMap:ye,displacementMap:u&&ct,emissiveMap:Re,normalMapObjectSpace:ye&&b.normalMapType===Hd,normalMapTangentSpace:ye&&b.normalMapType===pc,metalnessMap:Ie,roughnessMap:T,anisotropy:_,anisotropyMap:se,clearcoat:B,clearcoatMap:he,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ee,dispersion:q,iridescence:J,iridescenceMap:ce,iridescenceThicknessMap:He,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:fe,specularMap:Pe,specularColorMap:Be,specularIntensityMap:nt,transmission:Se,transmissionMap:D,thicknessMap:te,gradientMap:$,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:X,alphaTest:ie,alphaHash:Ee,combine:b.combine,mapUv:ke&&v(b.map.channel),aoMapUv:lt&&v(b.aoMap.channel),lightMapUv:Ye&&v(b.lightMap.channel),bumpMapUv:Ze&&v(b.bumpMap.channel),normalMapUv:ye&&v(b.normalMap.channel),displacementMapUv:ct&&v(b.displacementMap.channel),emissiveMapUv:Re&&v(b.emissiveMap.channel),metalnessMapUv:Ie&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:se&&v(b.anisotropyMap.channel),clearcoatMapUv:he&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:Be&&v(b.specularColorMap.channel),specularIntensityMapUv:nt&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:te&&v(b.thicknessMap.channel),alphaMapUv:X&&v(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ye||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(ke||X),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&Ve.getTransfer(b.map.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jt,flipSided:b.side===Lt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function h(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(M(y,b),x(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function x(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),b.push(o.mask)}function E(b){const y=g[b.type];let P;if(y){const z=ln[y];P=Wi.clone(z.uniforms)}else P=b.uniforms;return P}function L(b,y){let P;for(let z=0,k=d.length;z<k;z++){const j=d[z];if(j.cacheKey===y){P=j,++P.usedTimes;break}}return P===void 0&&(P=new Rm(i,y,b,s),d.push(P)),P}function A(b){if(--b.usedTimes===0){const y=d.indexOf(b);d[y]=d[d.length-1],d.pop(),b.destroy()}}function w(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:N}}function Nm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,u,p,g,v,m){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[e]=h):(h.id=f.id,h.object=f,h.geometry=u,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function o(f,u,p,g,v,m){const h=a(f,u,p,g,v,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,u,p,g,v,m){const h=a(f,u,p,g,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,u){t.length>1&&t.sort(f||Um),n.length>1&&n.sort(u||vl),r.length>1&&r.sort(u||vl)}function d(){for(let f=e,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function Om(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new xl,i.set(n,[a])):r>=s.length?(a=new xl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Le};break;case"SpotLight":t={position:new R,direction:new R,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let km=0;function zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hm(i){const e=new Fm,t=Bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const r=new R,s=new Qe,a=new Qe;function o(c){let d=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,M=0,x=0,E=0,L=0,A=0,w=0;c.sort(zm);for(let b=0,y=c.length;b<y;b++){const P=c[b],z=P.color,k=P.intensity,j=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*k,f+=z.g*k,u+=z.b*k;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],k);w++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=j,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;const Z=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=Z.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Y,E++}v++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(k),W.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[h]=W,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==M||N.numPointShadows!==x||N.numSpotShadows!==E||N.numSpotMaps!==L||N.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=M,N.numPointShadows=x,N.numSpotShadows=E,N.numSpotMaps=L,N.numLightProbes=w,n.version=km++)}function l(c,d){let f=0,u=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const x=c[h];if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function _l(i){const e=new Hm(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Gm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _l(i),e.set(r,[o])):s>=a.length?(o=new _l(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Dc extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vm extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
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
}`;function Xm(i,e,t){let n=new ro;const r=new ae,s=new ae,a=new tt,o=new Dc({depthPacking:fc}),l=new Vm,c={},d=t.maxTextureSize,f={[kn]:Lt,[Lt]:kn,[jt]:jt},u=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Wm,fragmentShader:$m}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let h=this.type;this.render=function(A,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(rn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=h!==xn&&this.type===xn,j=h===xn&&this.type!==xn;for(let Y=0,W=A.length;Y<W;Y++){const Z=A[Y],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const le=G.getFrameExtents();if(r.multiply(le),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/le.x),r.x=s.x*le.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/le.y),r.y=s.y*le.y,G.mapSize.y=s.y)),G.map===null||k===!0||j===!0){const ve=this.type!==xn?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new _t(r.x,r.y,ve),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ue=G.getViewportCount();for(let ve=0;ve<ue;ve++){const ze=G.getViewport(ve);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),z.viewport(a),G.updateMatrices(Z,ve),n=G.getFrustum(),E(w,N,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===xn&&M(G,N),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,P)};function M(A,w){const N=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _t(r.x,r.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,N,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,N,p,v,null)}function x(A,w,N,b){let y=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=N.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=y.uuid,k=w.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let Y=j[k];Y===void 0&&(Y=y.clone(),j[k]=Y,w.addEventListener("dispose",L)),y=Y}if(y.visible=w.visible,y.wireframe=w.wireframe,b===xn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=N}return y}function E(A,w,N,b,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const k=e.update(A),j=A.material;if(Array.isArray(j)){const Y=k.groups;for(let W=0,Z=Y.length;W<Z;W++){const G=Y[W],le=j[G.materialIndex];if(le&&le.visible){const ue=x(A,le,b,y);A.onBeforeShadow(i,A,w,N,k,ue,G),i.renderBufferDirect(N,null,k,ue,A,G),A.onAfterShadow(i,A,w,N,k,ue,G)}}}else if(j.visible){const Y=x(A,j,b,y);A.onBeforeShadow(i,A,w,N,k,Y,null),i.renderBufferDirect(N,null,k,Y,A,null),A.onAfterShadow(i,A,w,N,k,Y,null)}}const z=A.children;for(let k=0,j=z.length;k<j;k++)E(z[k],w,N,b,y)}function L(A){A.target.removeEventListener("dispose",L);for(const N in c){const b=c[N],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function qm(i){function e(){let D=!1;const te=new tt;let $=null;const X=new tt(0,0,0,0);return{setMask:function(ie){$!==ie&&!D&&(i.colorMask(ie,ie,ie,ie),$=ie)},setLocked:function(ie){D=ie},setClear:function(ie,Ee,Ge,dt,St){St===!0&&(ie*=dt,Ee*=dt,Ge*=dt),te.set(ie,Ee,Ge,dt),X.equals(te)===!1&&(i.clearColor(ie,Ee,Ge,dt),X.copy(te))},reset:function(){D=!1,$=null,X.set(-1,0,0,0)}}}function t(){let D=!1,te=null,$=null,X=null;return{setTest:function(ie){ie?ge(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(ie){te!==ie&&!D&&(i.depthMask(ie),te=ie)},setFunc:function(ie){if($!==ie){switch(ie){case Rd:i.depthFunc(i.NEVER);break;case Pd:i.depthFunc(i.ALWAYS);break;case Ld:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Dd:i.depthFunc(i.EQUAL);break;case Id:i.depthFunc(i.GEQUAL);break;case Nd:i.depthFunc(i.GREATER);break;case Ud:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ie}},setLocked:function(ie){D=ie},setClear:function(ie){X!==ie&&(i.clearDepth(ie),X=ie)},reset:function(){D=!1,te=null,$=null,X=null}}}function n(){let D=!1,te=null,$=null,X=null,ie=null,Ee=null,Ge=null,dt=null,St=null;return{setTest:function(We){D||(We?ge(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(We){te!==We&&!D&&(i.stencilMask(We),te=We)},setFunc:function(We,un,sn){($!==We||X!==un||ie!==sn)&&(i.stencilFunc(We,un,sn),$=We,X=un,ie=sn)},setOp:function(We,un,sn){(Ee!==We||Ge!==un||dt!==sn)&&(i.stencilOp(We,un,sn),Ee=We,Ge=un,dt=sn)},setLocked:function(We){D=We},setClear:function(We){St!==We&&(i.clearStencil(We),St=We)},reset:function(){D=!1,te=null,$=null,X=null,ie=null,Ee=null,Ge=null,dt=null,St=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,u=[],p=null,g=!1,v=null,m=null,h=null,M=null,x=null,E=null,L=null,A=new Le(0,0,0),w=0,N=!1,b=null,y=null,P=null,z=null,k=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=W>=2);let G=null,le={};const ue=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),ze=new tt().fromArray(ue),Ke=new tt().fromArray(ve);function V(D,te,$,X){const ie=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(D,Ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<$;Ge++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(te+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return Ee}const Q={};Q[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),s.setFunc(as),Ze(!1),ye(Ao),ge(i.CULL_FACE),lt(rn);function ge(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function de(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Ae(D,te){return d[D]!==te?(i.bindFramebuffer(D,te),d[D]=te,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te),!0):!1}function De(D,te){let $=u,X=!1;if(D){$=f.get(te),$===void 0&&($=[],f.set(te,$));const ie=D.textures;if($.length!==ie.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Ge=ie.length;Ee<Ge;Ee++)$[Ee]=i.COLOR_ATTACHMENT0+Ee;$.length=ie.length,X=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,X=!0);X&&i.drawBuffers($)}function ke(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const it={[Zn]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};it[pd]=i.MIN,it[md]=i.MAX;const C={[gd]:i.ZERO,[vd]:i.ONE,[xd]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Cd]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(D,te,$,X,ie,Ee,Ge,dt,St,We){if(D===rn){g===!0&&(de(i.BLEND),g=!1);return}if(g===!1&&(ge(i.BLEND),g=!0),D!==hd){if(D!==v||We!==N){if((m!==Zn||x!==Zn)&&(i.blendEquation(i.FUNC_ADD),m=Zn,x=Zn),We)switch(D){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.ONE,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,M=null,E=null,L=null,A.set(0,0,0),w=0,v=D,N=We}return}ie=ie||te,Ee=Ee||$,Ge=Ge||X,(te!==m||ie!==x)&&(i.blendEquationSeparate(it[te],it[ie]),m=te,x=ie),($!==h||X!==M||Ee!==E||Ge!==L)&&(i.blendFuncSeparate(C[$],C[X],C[Ee],C[Ge]),h=$,M=X,E=Ee,L=Ge),(dt.equals(A)===!1||St!==w)&&(i.blendColor(dt.r,dt.g,dt.b,St),A.copy(dt),w=St),v=D,N=!1}function Ye(D,te){D.side===jt?de(i.CULL_FACE):ge(i.CULL_FACE);let $=D.side===Lt;te&&($=!$),Ze($),D.blending===Ni&&D.transparent===!1?lt(rn):lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const X=D.stencilWrite;a.setTest(X),X&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function ye(D){D!==cd?(ge(i.CULL_FACE),D!==y&&(D===Ao?i.cullFace(i.BACK):D===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),y=D}function ct(D){D!==P&&(Y&&i.lineWidth(D),P=D)}function Re(D,te,$){D?(ge(i.POLYGON_OFFSET_FILL),(z!==te||k!==$)&&(i.polygonOffset(te,$),z=te,k=$)):de(i.POLYGON_OFFSET_FILL)}function Ie(D){D?ge(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+j-1),G!==D&&(i.activeTexture(D),G=D)}function _(D,te,$){$===void 0&&(G===null?$=i.TEXTURE0+j-1:$=G);let X=le[$];X===void 0&&(X={type:void 0,texture:void 0},le[$]=X),(X.type!==D||X.texture!==te)&&(G!==$&&(i.activeTexture($),G=$),i.bindTexture(D,te||Q[D]),X.type=D,X.texture=te)}function B(){const D=le[G];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(D){ze.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ze.copy(D))}function fe(D){Ke.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ke.copy(D))}function Pe(D,te){let $=l.get(te);$===void 0&&($=new WeakMap,l.set(te,$));let X=$.get(D);X===void 0&&(X=i.getUniformBlockIndex(te,D.name),$.set(D,X))}function Be(D,te){const X=l.get(te).get(D);o.get(te)!==X&&(i.uniformBlockBinding(te,X,D.__bindingPointIndex),o.set(te,X))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,le={},d={},f=new WeakMap,u=[],p=null,g=!1,v=null,m=null,h=null,M=null,x=null,E=null,L=null,A=new Le(0,0,0),w=0,N=!1,b=null,y=null,P=null,z=null,k=null,ze.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:de,bindFramebuffer:Ae,drawBuffers:De,useProgram:ke,setBlending:lt,setMaterial:Ye,setFlipSided:Ze,setCullFace:ye,setLineWidth:ct,setPolygonOffset:Re,setScissorTest:Ie,activeTexture:T,bindTexture:_,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:ce,texImage3D:He,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:Ue,texStorage3D:ee,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:Ce,viewport:fe,reset:nt}}function Ml(i,e,t,n){const r=Ym(n);switch(t){case ac:return i*e;case lc:return i*e;case cc:return i*e*2;case dc:return i*e/r.components*r.byteLength;case Qa:return i*e/r.components*r.byteLength;case hc:return i*e*2/r.components*r.byteLength;case eo:return i*e*2/r.components*r.byteLength;case oc:return i*e*3/r.components*r.byteLength;case nn:return i*e*4/r.components*r.byteLength;case to:return i*e*4/r.components*r.byteLength;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case es:case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:case Ma:return Math.max(i,16)*Math.max(e,8)/4;case va:case _a:return Math.max(i,8)*Math.max(e,8)/2;case ya:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ns:case Ba:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uc:case za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(i){switch(i){case Sn:case ic:return{byteLength:1,components:1};case cr:case rc:case Ut:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case ni:case Ka:case Mn:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):dr("canvas")}function v(T,_,B){let q=1;const J=Ie(T);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(q*J.width),Se=Math.floor(q*J.height);f===void 0&&(f=g(K,Se));const se=_?g(K,Se):f;return se.width=K,se.height=Se,se.getContext("2d").drawImage(T,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Se+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Kt&&T.minFilter!==tn}function h(T){i.generateMipmap(T)}function M(T,_,B,q,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=_;if(_===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),_===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),_===i.RGBA){const Se=J?os:Ve.getTransfer(q);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=Se===et?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(T,_){let B;return T?_===null||_===ni||_===Hi?B=i.DEPTH24_STENCIL8:_===Mn?B=i.DEPTH32F_STENCIL8:_===cr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ni||_===Hi?B=i.DEPTH_COMPONENT24:_===Mn?B=i.DEPTH_COMPONENT32F:_===cr&&(B=i.DEPTH_COMPONENT16),B}function E(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Kt&&T.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function L(T){const _=T.target;_.removeEventListener("dispose",L),w(_),_.isVideoTexture&&d.delete(_)}function A(T){const _=T.target;_.removeEventListener("dispose",A),b(_)}function w(T){const _=n.get(T);if(_.__webglInit===void 0)return;const B=T.source,q=u.get(B);if(q){const J=q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(T),Object.keys(q).length===0&&u.delete(B)}n.remove(T)}function N(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const B=T.source,q=u.get(B);delete q[_.__cacheKey],a.memory.textures--}function b(T){const _=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let J=0;J<_.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[q][J]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=T.textures;for(let q=0,J=B.length;q<J;q++){const K=n.get(B[q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(T)}let y=0;function P(){y=0}function z(){const T=y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),y+=1,T}function k(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){const B=n.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(B,T,_);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function Y(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Ke(B,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function W(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Ke(B,T,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function Z(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){V(B,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const G={[ma]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},le={[Kt]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Ls]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ue={[Gd]:i.NEVER,[Yd]:i.ALWAYS,[Vd]:i.LESS,[mc]:i.LEQUAL,[Wd]:i.EQUAL,[qd]:i.GEQUAL,[$d]:i.GREATER,[Xd]:i.NOTEQUAL};function ve(T,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===Ls||_.magFilter===Sr||_.magFilter===ei||_.minFilter===tn||_.minFilter===Ls||_.minFilter===Sr||_.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,G[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,G[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,G[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==Sr&&_.minFilter!==ei||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ze(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",L));const q=_.source;let J=u.get(q);J===void 0&&(J={},u.set(q,J));const K=k(_);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[K].usedTimes++;const Se=J[T.__cacheKey];Se!==void 0&&(J[T.__cacheKey].usedTimes--,Se.usedTimes===0&&N(_)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return B}function Ke(T,_,B){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const J=ze(T,_),K=_.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+B);const Se=n.get(K);if(K.version!==Se.__version||J===!0){t.activeTexture(i.TEXTURE0+B);const se=Ve.getPrimaries(Ve.workingColorSpace),he=_.colorSpace===In?null:Ve.getPrimaries(_.colorSpace),Ue=_.colorSpace===In||se===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ee=v(_.image,!1,r.maxTextureSize);ee=Re(_,ee);const ce=s.convert(_.format,_.colorSpace),He=s.convert(_.type);let Ce=M(_.internalFormat,ce,He,_.colorSpace,_.isVideoTexture);ve(q,_);let fe;const Pe=_.mipmaps,Be=_.isVideoTexture!==!0,nt=Se.__version===void 0||J===!0,D=K.dataReady,te=E(_,ee);if(_.isDepthTexture)Ce=x(_.format===Gi,_.type),nt&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ce,He,null));else if(_.isDataTexture)if(Pe.length>0){Be&&nt&&t.texStorage2D(i.TEXTURE_2D,te,Ce,Pe[0].width,Pe[0].height);for(let $=0,X=Pe.length;$<X;$++)fe=Pe[$],Be?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,fe.width,fe.height,ce,He,fe.data):t.texImage2D(i.TEXTURE_2D,$,Ce,fe.width,fe.height,0,ce,He,fe.data);_.generateMipmaps=!1}else Be?(nt&&t.texStorage2D(i.TEXTURE_2D,te,Ce,ee.width,ee.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ce,He,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ee.width,ee.height,0,ce,He,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ce,Pe[0].width,Pe[0].height,ee.depth);for(let $=0,X=Pe.length;$<X;$++)if(fe=Pe[$],_.format!==nn)if(ce!==null)if(Be){if(D)if(_.layerUpdates.size>0){const ie=Ml(fe.width,fe.height,_.format,_.type);for(const Ee of _.layerUpdates){const Ge=fe.data.subarray(Ee*ie/fe.data.BYTES_PER_ELEMENT,(Ee+1)*ie/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Ee,fe.width,fe.height,1,ce,Ge,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,ee.depth,ce,fe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ce,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,ee.depth,ce,He,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ce,fe.width,fe.height,ee.depth,0,ce,He,fe.data)}else{Be&&nt&&t.texStorage2D(i.TEXTURE_2D,te,Ce,Pe[0].width,Pe[0].height);for(let $=0,X=Pe.length;$<X;$++)fe=Pe[$],_.format!==nn?ce!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,fe.width,fe.height,ce,He,fe.data):t.texImage2D(i.TEXTURE_2D,$,Ce,fe.width,fe.height,0,ce,He,fe.data)}else if(_.isDataArrayTexture)if(Be){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ce,ee.width,ee.height,ee.depth),D)if(_.layerUpdates.size>0){const $=Ml(ee.width,ee.height,_.format,_.type);for(const X of _.layerUpdates){const ie=ee.data.subarray(X*$/ee.data.BYTES_PER_ELEMENT,(X+1)*$/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,ee.width,ee.height,1,ce,He,ie)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,He,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,ce,He,ee.data);else if(_.isData3DTexture)Be?(nt&&t.texStorage3D(i.TEXTURE_3D,te,Ce,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,He,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,ce,He,ee.data);else if(_.isFramebufferTexture){if(nt)if(Be)t.texStorage2D(i.TEXTURE_2D,te,Ce,ee.width,ee.height);else{let $=ee.width,X=ee.height;for(let ie=0;ie<te;ie++)t.texImage2D(i.TEXTURE_2D,ie,Ce,$,X,0,ce,He,null),$>>=1,X>>=1}}else if(Pe.length>0){if(Be&&nt){const $=Ie(Pe[0]);t.texStorage2D(i.TEXTURE_2D,te,Ce,$.width,$.height)}for(let $=0,X=Pe.length;$<X;$++)fe=Pe[$],Be?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ce,He,fe):t.texImage2D(i.TEXTURE_2D,$,Ce,ce,He,fe);_.generateMipmaps=!1}else if(Be){if(nt){const $=Ie(ee);t.texStorage2D(i.TEXTURE_2D,te,Ce,$.width,$.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,He,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ce,He,ee);m(_)&&h(q),Se.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function V(T,_,B){if(_.image.length!==6)return;const q=ze(T,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const K=n.get(J);if(J.version!==K.__version||q===!0){t.activeTexture(i.TEXTURE0+B);const Se=Ve.getPrimaries(Ve.workingColorSpace),se=_.colorSpace===In?null:Ve.getPrimaries(_.colorSpace),he=_.colorSpace===In||Se===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let X=0;X<6;X++)!Ue&&!ee?ce[X]=v(_.image[X],!0,r.maxCubemapSize):ce[X]=ee?_.image[X].image:_.image[X],ce[X]=Re(_,ce[X]);const He=ce[0],Ce=s.convert(_.format,_.colorSpace),fe=s.convert(_.type),Pe=M(_.internalFormat,Ce,fe,_.colorSpace),Be=_.isVideoTexture!==!0,nt=K.__version===void 0||q===!0,D=J.dataReady;let te=E(_,He);ve(i.TEXTURE_CUBE_MAP,_);let $;if(Ue){Be&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Pe,He.width,He.height);for(let X=0;X<6;X++){$=ce[X].mipmaps;for(let ie=0;ie<$.length;ie++){const Ee=$[ie];_.format!==nn?Ce!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ee.width,Ee.height,Ce,fe,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Pe,Ee.width,Ee.height,0,Ce,fe,Ee.data)}}}else{if($=_.mipmaps,Be&&nt){$.length>0&&te++;const X=Ie(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Pe,X.width,X.height)}for(let X=0;X<6;X++)if(ee){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ce[X].width,ce[X].height,Ce,fe,ce[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pe,ce[X].width,ce[X].height,0,Ce,fe,ce[X].data);for(let ie=0;ie<$.length;ie++){const Ge=$[ie].image[X].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Ge.width,Ge.height,Ce,fe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Pe,Ge.width,Ge.height,0,Ce,fe,Ge.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ce,fe,ce[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pe,Ce,fe,ce[X]);for(let ie=0;ie<$.length;ie++){const Ee=$[ie];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Ce,fe,Ee.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Pe,Ce,fe,Ee.image[X])}}}m(_)&&h(i.TEXTURE_CUBE_MAP),K.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,B,q,J,K){const Se=s.convert(B.format,B.colorSpace),se=s.convert(B.type),he=M(B.internalFormat,Se,se,B.colorSpace);if(!n.get(_).__hasExternalTextures){const ee=Math.max(1,_.width>>K),ce=Math.max(1,_.height>>K);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,K,he,ee,ce,_.depth,0,Se,se,null):t.texImage2D(J,K,he,ee,ce,0,Se,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,n.get(B).__webglTexture,0,Ze(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,n.get(B).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const q=_.depthTexture,J=q&&q.isDepthTexture?q.type:null,K=x(_.stencilBuffer,J),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=Ze(_);ye(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,K,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const q=_.textures;for(let J=0;J<q.length;J++){const K=q[J],Se=s.convert(K.format,K.colorSpace),se=s.convert(K.type),he=M(K.internalFormat,Se,se,K.colorSpace),Ue=Ze(_);B&&ye(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,he,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,he,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,he,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const q=n.get(_.depthTexture).__webglTexture,J=Ze(_);if(_.depthTexture.format===Ui)ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(_.depthTexture.format===Gi)ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ae(T){const _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");de(_.__webglFramebuffer,T)}else if(B){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),ge(_.__webglDepthbuffer[q],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ge(_.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,_,B){const q=n.get(T);_!==void 0&&Q(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ae(T)}function ke(T){const _=T.texture,B=n.get(T),q=n.get(_);T.addEventListener("dispose",A);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let he=0;he<_.mipmaps.length;he++)B.__webglFramebuffer[se][he]=i.createFramebuffer()}else B.__webglFramebuffer[se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)B.__webglFramebuffer[se]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Se)for(let se=0,he=J.length;se<he;se++){const Ue=n.get(J[se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ye(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const he=J[se];B.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[se]);const Ue=s.convert(he.format,he.colorSpace),ee=s.convert(he.type),ce=M(he.internalFormat,Ue,ee,he.colorSpace,T.isXRRenderTarget===!0),He=Ze(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,B.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)Q(B.__webglFramebuffer[se][he],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else Q(B.__webglFramebuffer[se],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,he=J.length;se<he;se++){const Ue=J[se],ee=n.get(Ue);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),ve(i.TEXTURE_2D,Ue),Q(B.__webglFramebuffer,T,Ue,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),m(Ue)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),ve(se,_),_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)Q(B.__webglFramebuffer[he],T,_,i.COLOR_ATTACHMENT0,se,he);else Q(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,se,0);m(_)&&h(se),t.unbindTexture()}T.depthBuffer&&Ae(T)}function it(T){const _=T.textures;for(let B=0,q=_.length;B<q;B++){const J=_[B];if(m(J)){const K=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get(J).__webglTexture;t.bindTexture(K,Se),h(K),t.unbindTexture()}}}const C=[],lt=[];function Ye(T){if(T.samples>0){if(ye(T)===!1){const _=T.textures,B=T.width,q=T.height;let J=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),se=_.length>1;if(se)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<_.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ue=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,J,i.NEAREST),l===!0&&(C.length=0,lt.length=0,C.push(i.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(C.push(K),lt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ue=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ze(T){return Math.min(r.maxSamples,T.samples)}function ye(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ct(T){const _=a.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function Re(T,_){const B=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==zn&&B!==In&&(Ve.getTransfer(B)===et?(q!==nn||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function Ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=De,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ye}function Km(i,e){function t(n,r=In){let s;const a=Ve.getTransfer(r);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.BYTE;if(n===rc)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Ut)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===nn)return i.RGBA;if(n===lc)return i.LUMINANCE;if(n===cc)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===Jr||n===Qr||n===es||n===ts)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===_a||n===Ma)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Sa||n===ba)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ya||n===Sa)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ba)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ea||n===Ta||n===Aa||n===wa||n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Na||n===Ua||n===Oa||n===Fa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ea)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ns||n===Ba||n===ka)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ns)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===za||n===Ha||n===Ga)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ns)return s.COMPRESSED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Zm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ft({vertexShader:Qm,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends si{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,g=null;const v=new tg,m=t.getContextAttributes();let h=null,M=null;const x=[],E=[],L=new ae;let A=null;const w=new Wt;w.layers.enable(1),w.viewport=new tt;const N=new Wt;N.layers.enable(2),N.viewport=new tt;const b=[w,N],y=new Zm;y.layers.enable(1),y.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=x[V];return Q===void 0&&(Q=new ia,x[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=x[V];return Q===void 0&&(Q=new ia,x[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=x[V];return Q===void 0&&(Q=new ia,x[V]=Q),Q.getHandSpace()};function k(V){const Q=E.indexOf(V.inputSource);if(Q===-1)return;const ge=x[Q];ge!==void 0&&(ge.update(V.inputSource,V.frame,c||a),ge.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<x.length;V++){const Q=E[V];Q!==null&&(E[V]=null,x[V].disconnect(Q))}P=null,z=null,v.reset(),e.setRenderTarget(h),p=null,u=null,f=null,r=null,M=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new _t(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ge=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Gi:Ui,ge=m.stencil?Hi:ni);const Ae={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(Ae),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new _t(u.textureWidth,u.textureHeight,{format:nn,type:Sn,depthTexture:new wc(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(V){for(let Q=0;Q<V.removed.length;Q++){const ge=V.removed[Q],de=E.indexOf(ge);de>=0&&(E[de]=null,x[de].disconnect(ge))}for(let Q=0;Q<V.added.length;Q++){const ge=V.added[Q];let de=E.indexOf(ge);if(de===-1){for(let De=0;De<x.length;De++)if(De>=E.length){E.push(ge),de=De;break}else if(E[De]===null){E[De]=ge,de=De;break}if(de===-1)break}const Ae=x[de];Ae&&Ae.connect(ge)}}const W=new R,Z=new R;function G(V,Q,ge){W.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const de=W.distanceTo(Z),Ae=Q.projectionMatrix.elements,De=ge.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),it=Ae[14]/(Ae[10]+1),C=(Ae[9]+1)/Ae[5],lt=(Ae[9]-1)/Ae[5],Ye=(Ae[8]-1)/Ae[0],Ze=(De[8]+1)/De[0],ye=ke*Ye,ct=ke*Ze,Re=de/(-Ye+Ze),Ie=Re*-Ye;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ie),V.translateZ(Re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const T=ke+Re,_=it+Re,B=ye-Ie,q=ct+(de-Ie),J=C*it/_*T,K=lt*it/_*T;V.projectionMatrix.makePerspective(B,q,J,K,T,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function le(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Q=V.near,ge=V.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),y.near=N.near=w.near=Q,y.far=N.far=w.far=ge,(P!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far);const de=V.parent,Ae=y.cameras;le(y,de);for(let De=0;De<Ae.length;De++)le(Ae[De],de);Ae.length===2?G(y,w,N):y.projectionMatrix.copy(w.projectionMatrix),ue(V,y,de)};function ue(V,Q,ge){ge===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ge.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Va*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ve=null;function ze(V,Q){if(d=Q.getViewerPose(c||a),g=Q,d!==null){const ge=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let de=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let De=0;De<ge.length;De++){const ke=ge[De];let it=null;if(p!==null)it=p.getViewport(ke);else{const lt=f.getViewSubImage(u,ke);it=lt.viewport,De===0&&(e.setRenderTargetTextures(M,lt.colorTexture,u.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(M))}let C=b[De];C===void 0&&(C=new Wt,C.layers.enable(De),C.viewport=new tt,b[De]=C),C.matrix.fromArray(ke.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(ke.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(it.x,it.y,it.width,it.height),De===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(C)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const De=f.getDepthInformation(ge[0]);De&&De.isValid&&De.texture&&v.init(e,De,r.renderState)}}for(let ge=0;ge<x.length;ge++){const de=E[ge],Ae=x[ge];de!==null&&Ae!==void 0&&Ae.update(de,Q,c||a)}ve&&ve(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ke=new Tc;Ke.setAnimationLoop(ze),this.setAnimationLoop=function(V){ve=V},this.dispose=function(){}}}const qn=new dn,ig=new Qe;function rg(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Sc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,x,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,M,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Lt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Lt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h),x=M.envMap,E=M.envMapRotation;x&&(m.envMap.value=x,qn.copy(E),qn.x*=-1,qn.y*=-1,qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(qn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,M,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sg(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const E=x.program;n.uniformBlockBinding(M,E)}function c(M,x){let E=r[M.id];E===void 0&&(g(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(M,L);const A=e.render.frame;s[M.id]!==A&&(u(M),s[M.id]=A)}function d(M){const x=f();M.__bindingPointIndex=x;const E=i.createBuffer(),L=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const x=r[M.id],E=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,w=E.length;A<w;A++){const N=Array.isArray(E[A])?E[A]:[E[A]];for(let b=0,y=N.length;b<y;b++){const P=N[b];if(p(P,A,b,L)===!0){const z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let Y=0;Y<k.length;Y++){const W=k[Y],Z=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+j,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,E,L){const A=M.value,w=x+"_"+E;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const N=L[w];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return L[w]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(M){const x=M.uniforms;let E=0;const L=16;for(let w=0,N=x.length;w<N;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,P=b.length;y<P;y++){const z=b[y],k=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Y=k.length;j<Y;j++){const W=k[j],Z=v(W),G=E%L,le=G%Z.boundary,ue=G+le;E+=le,ue!==0&&L-ue<Z.storage&&(E+=L-ue),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Z.storage}}}const A=E%L;return A>0&&(E+=L-A),M.__size=E,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class ag{constructor(e={}){const{canvas:t=Zd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Bn,this.toneMappingExposure=1;const x=this;let E=!1,L=0,A=0,w=null,N=-1,b=null;const y=new tt,P=new tt;let z=null;const k=new Le(0);let j=0,Y=t.width,W=t.height,Z=1,G=null,le=null;const ue=new tt(0,0,Y,W),ve=new tt(0,0,Y,W);let ze=!1;const Ke=new ro;let V=!1,Q=!1;const ge=new Qe,de=new R,Ae=new tt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function it(){return w===null?Z:1}let C=n;function lt(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ie,!1),C===null){const I="webgl2";if(C=lt(I,S),C===null)throw lt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ye,Ze,ye,ct,Re,Ie,T,_,B,q,J,K,Se,se,he,Ue,ee,ce,He,Ce,fe,Pe,Be,nt;function D(){Ye=new fp(C),Ye.init(),Pe=new Km(C,Ye),Ze=new op(C,Ye,e,Pe),ye=new qm(C),ct=new gp(C),Re=new Nm,Ie=new jm(C,Ye,ye,Re,Ze,Pe,ct),T=new cp(x),_=new up(x),B=new Sh(C),Be=new sp(C,B),q=new pp(C,B,ct,Be),J=new xp(C,q,B,ct),He=new vp(C,Ze,Ie),Ue=new lp(Re),K=new Im(x,T,_,Ye,Ze,Be,Ue),Se=new rg(x,Re),se=new Om,he=new Gm(Ye),ce=new rp(x,T,_,ye,J,u,l),ee=new Xm(x,J,Ze),nt=new sg(C,ct,Ze,ye),Ce=new ap(C,Ye,ct),fe=new mp(C,Ye,ct),ct.programs=K.programs,x.capabilities=Ze,x.extensions=Ye,x.properties=Re,x.renderLists=se,x.shadowMap=ee,x.state=ye,x.info=ct}D();const te=new ng(x,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(Y,W,!1))},this.getSize=function(S){return S.set(Y,W)},this.setSize=function(S,I,O=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,W=I,t.width=Math.floor(S*Z),t.height=Math.floor(I*Z),O===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Y*Z,W*Z).floor()},this.setDrawingBufferSize=function(S,I,O){Y=S,W=I,Z=O,t.width=Math.floor(S*O),t.height=Math.floor(I*O),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,I,O,F){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,I,O,F),ye.viewport(y.copy(ue).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(ve)},this.setScissor=function(S,I,O,F){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,I,O,F),ye.scissor(P.copy(ve).multiplyScalar(Z).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(S){ye.setScissorTest(ze=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){le=S},this.getClearColor=function(S){return S.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(S=!0,I=!0,O=!0){let F=0;if(S){let U=!1;if(w!==null){const ne=w.texture.format;U=ne===to||ne===eo||ne===Qa}if(U){const ne=w.texture.type,oe=ne===Sn||ne===ni||ne===cr||ne===Hi||ne===Za||ne===Ja,pe=ce.getClearColor(),me=ce.getClearAlpha(),Te=pe.r,we=pe.g,xe=pe.b;oe?(p[0]=Te,p[1]=we,p[2]=xe,p[3]=me,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Te,g[1]=we,g[2]=xe,g[3]=me,C.clearBufferiv(C.COLOR,0,g))}else F|=C.COLOR_BUFFER_BIT}I&&(F|=C.DEPTH_BUFFER_BIT),O&&(F|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),se.dispose(),he.dispose(),Re.dispose(),T.dispose(),_.dispose(),J.dispose(),Be.dispose(),nt.dispose(),K.dispose(),te.dispose(),te.removeEventListener("sessionstart",sn),te.removeEventListener("sessionend",_o),Hn.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=ct.autoReset,I=ee.enabled,O=ee.autoUpdate,F=ee.needsUpdate,U=ee.type;D(),ct.autoReset=S,ee.enabled=I,ee.autoUpdate=O,ee.needsUpdate=F,ee.type=U}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ee(S){const I=S.target;I.removeEventListener("dispose",Ee),Ge(I)}function Ge(S){dt(S),Re.remove(S)}function dt(S){const I=Re.get(S).programs;I!==void 0&&(I.forEach(function(O){K.releaseProgram(O)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,O,F,U,ne){I===null&&(I=De);const oe=U.isMesh&&U.matrixWorld.determinant()<0,pe=sd(S,I,O,F,U);ye.setMaterial(F,oe);let me=O.index,Te=1;if(F.wireframe===!0){if(me=q.getWireframeAttribute(O),me===void 0)return;Te=2}const we=O.drawRange,xe=O.attributes.position;let $e=we.start*Te,rt=(we.start+we.count)*Te;ne!==null&&($e=Math.max($e,ne.start*Te),rt=Math.min(rt,(ne.start+ne.count)*Te)),me!==null?($e=Math.max($e,0),rt=Math.min(rt,me.count)):xe!=null&&($e=Math.max($e,0),rt=Math.min(rt,xe.count));const st=rt-$e;if(st<0||st===1/0)return;Be.setup(U,F,pe,O,me);let zt,Xe=Ce;if(me!==null&&(zt=B.get(me),Xe=fe,Xe.setIndex(zt)),U.isMesh)F.wireframe===!0?(ye.setLineWidth(F.wireframeLinewidth*it()),Xe.setMode(C.LINES)):Xe.setMode(C.TRIANGLES);else if(U.isLine){let _e=F.linewidth;_e===void 0&&(_e=1),ye.setLineWidth(_e*it()),U.isLineSegments?Xe.setMode(C.LINES):U.isLineLoop?Xe.setMode(C.LINE_LOOP):Xe.setMode(C.LINE_STRIP)}else U.isPoints?Xe.setMode(C.POINTS):U.isSprite&&Xe.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Xe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const _e=U._multiDrawStarts,bt=U._multiDrawCounts,qe=U._multiDrawCount,Zt=me?B.get(me).bytesPerElement:1,ci=Re.get(F).currentProgram.getUniforms();for(let Ht=0;Ht<qe;Ht++)ci.setValue(C,"_gl_DrawID",Ht),Xe.render(_e[Ht]/Zt,bt[Ht])}else if(U.isInstancedMesh)Xe.renderInstances($e,st,U.count);else if(O.isInstancedBufferGeometry){const _e=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,bt=Math.min(O.instanceCount,_e);Xe.renderInstances($e,st,bt)}else Xe.render($e,st)};function St(S,I,O){S.transparent===!0&&S.side===jt&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,yr(S,I,O),S.side=kn,S.needsUpdate=!0,yr(S,I,O),S.side=jt):yr(S,I,O)}this.compile=function(S,I,O=null){O===null&&(O=S),m=he.get(O),m.init(I),M.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),S!==O&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const F=new Set;return S.traverse(function(U){const ne=U.material;if(ne)if(Array.isArray(ne))for(let oe=0;oe<ne.length;oe++){const pe=ne[oe];St(pe,O,U),F.add(pe)}else St(ne,O,U),F.add(ne)}),M.pop(),m=null,F},this.compileAsync=function(S,I,O=null){const F=this.compile(S,I,O);return new Promise(U=>{function ne(){if(F.forEach(function(oe){Re.get(oe).currentProgram.isReady()&&F.delete(oe)}),F.size===0){U(S);return}setTimeout(ne,10)}Ye.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let We=null;function un(S){We&&We(S)}function sn(){Hn.stop()}function _o(){Hn.start()}const Hn=new Tc;Hn.setAnimationLoop(un),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(S){We=S,te.setAnimationLoop(S),S===null?Hn.stop():Hn.start()},te.addEventListener("sessionstart",sn),te.addEventListener("sessionend",_o),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,w),m=he.get(S,M.length),m.init(I),M.push(m),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ke.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,V=Ue.init(this.clippingPlanes,Q),v=se.get(S,h.length),v.init(),h.push(v),te.enabled===!0&&te.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&ws(ne,I,-1/0,x.sortObjects)}ws(S,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,le),ke=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ke&&ce.addToRenderList(v,S),this.info.render.frame++,V===!0&&Ue.beginShadows();const O=m.state.shadowsArray;ee.render(O,S,I),V===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=v.opaque,U=v.transmissive;if(m.setupLights(),I.isArrayCamera){const ne=I.cameras;if(U.length>0)for(let oe=0,pe=ne.length;oe<pe;oe++){const me=ne[oe];yo(F,U,S,me)}ke&&ce.render(S);for(let oe=0,pe=ne.length;oe<pe;oe++){const me=ne[oe];Mo(v,S,me,me.viewport)}}else U.length>0&&yo(F,U,S,I),ke&&ce.render(S),Mo(v,S,I);w!==null&&(Ie.updateMultisampleRenderTarget(w),Ie.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,I),Be.resetDefaultState(),N=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],V===!0&&Ue.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function ws(S,I,O,F){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ke.intersectsSprite(S)){F&&Ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);const oe=J.update(S),pe=S.material;pe.visible&&v.push(S,oe,pe,O,Ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ke.intersectsObject(S))){const oe=J.update(S),pe=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ae.copy(S.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ae.copy(oe.boundingSphere.center)),Ae.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(pe)){const me=oe.groups;for(let Te=0,we=me.length;Te<we;Te++){const xe=me[Te],$e=pe[xe.materialIndex];$e&&$e.visible&&v.push(S,oe,$e,O,Ae.z,xe)}}else pe.visible&&v.push(S,oe,pe,O,Ae.z,null)}}const ne=S.children;for(let oe=0,pe=ne.length;oe<pe;oe++)ws(ne[oe],I,O,F)}function Mo(S,I,O,F){const U=S.opaque,ne=S.transmissive,oe=S.transparent;m.setupLightsView(O),V===!0&&Ue.setGlobalState(x.clippingPlanes,O),F&&ye.viewport(y.copy(F)),U.length>0&&Mr(U,I,O),ne.length>0&&Mr(ne,I,O),oe.length>0&&Mr(oe,I,O),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function yo(S,I,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new _t(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Ut:Sn,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const ne=m.state.transmissionRenderTarget[F.id],oe=F.viewport||y;ne.setSize(oe.z,oe.w);const pe=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(k),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),ke&&ce.render(O);const me=x.toneMapping;x.toneMapping=Bn;const Te=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),V===!0&&Ue.setGlobalState(x.clippingPlanes,F),Mr(S,O,F),Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let xe=0,$e=I.length;xe<$e;xe++){const rt=I[xe],st=rt.object,zt=rt.geometry,Xe=rt.material,_e=rt.group;if(Xe.side===jt&&st.layers.test(F.layers)){const bt=Xe.side;Xe.side=Lt,Xe.needsUpdate=!0,So(st,O,F,zt,Xe,_e),Xe.side=bt,Xe.needsUpdate=!0,we=!0}}we===!0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne))}x.setRenderTarget(pe),x.setClearColor(k,j),Te!==void 0&&(F.viewport=Te),x.toneMapping=me}function Mr(S,I,O){const F=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ne=S.length;U<ne;U++){const oe=S[U],pe=oe.object,me=oe.geometry,Te=F===null?oe.material:F,we=oe.group;pe.layers.test(O.layers)&&So(pe,I,O,me,Te,we)}}function So(S,I,O,F,U,ne){S.onBeforeRender(x,I,O,F,U,ne),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,I,O,F,S,ne),U.transparent===!0&&U.side===jt&&U.forceSinglePass===!1?(U.side=Lt,U.needsUpdate=!0,x.renderBufferDirect(O,I,F,U,S,ne),U.side=kn,U.needsUpdate=!0,x.renderBufferDirect(O,I,F,U,S,ne),U.side=jt):x.renderBufferDirect(O,I,F,U,S,ne),S.onAfterRender(x,I,O,F,U,ne)}function yr(S,I,O){I.isScene!==!0&&(I=De);const F=Re.get(S),U=m.state.lights,ne=m.state.shadowsArray,oe=U.state.version,pe=K.getParameters(S,U.state,ne,I,O),me=K.getProgramCacheKey(pe);let Te=F.programs;F.environment=S.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(S.isMeshStandardMaterial?_:T).get(S.envMap||F.environment),F.envMapRotation=F.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",Ee),Te=new Map,F.programs=Te);let we=Te.get(me);if(we!==void 0){if(F.currentProgram===we&&F.lightsStateVersion===oe)return Eo(S,pe),we}else pe.uniforms=K.getUniforms(S),S.onBeforeCompile(pe,x),we=K.acquireProgram(pe,me),Te.set(me,we),F.uniforms=pe.uniforms;const xe=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=Ue.uniform),Eo(S,pe),F.needsLights=od(S),F.lightsStateVersion=oe,F.needsLights&&(xe.ambientLightColor.value=U.state.ambient,xe.lightProbe.value=U.state.probe,xe.directionalLights.value=U.state.directional,xe.directionalLightShadows.value=U.state.directionalShadow,xe.spotLights.value=U.state.spot,xe.spotLightShadows.value=U.state.spotShadow,xe.rectAreaLights.value=U.state.rectArea,xe.ltc_1.value=U.state.rectAreaLTC1,xe.ltc_2.value=U.state.rectAreaLTC2,xe.pointLights.value=U.state.point,xe.pointLightShadows.value=U.state.pointShadow,xe.hemisphereLights.value=U.state.hemi,xe.directionalShadowMap.value=U.state.directionalShadowMap,xe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xe.spotShadowMap.value=U.state.spotShadowMap,xe.spotLightMatrix.value=U.state.spotLightMatrix,xe.spotLightMap.value=U.state.spotLightMap,xe.pointShadowMap.value=U.state.pointShadowMap,xe.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=we,F.uniformsList=null,we}function bo(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=rs.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Eo(S,I){const O=Re.get(S);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function sd(S,I,O,F,U){I.isScene!==!0&&(I=De),Ie.resetTextureUnits();const ne=I.fog,oe=F.isMeshStandardMaterial?I.environment:null,pe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zn,me=(F.isMeshStandardMaterial?_:T).get(F.envMap||oe),Te=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,we=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),xe=!!O.morphAttributes.position,$e=!!O.morphAttributes.normal,rt=!!O.morphAttributes.color;let st=Bn;F.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(st=x.toneMapping);const zt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xe=zt!==void 0?zt.length:0,_e=Re.get(F),bt=m.state.lights;if(V===!0&&(Q===!0||S!==b)){const Xt=S===b&&F.id===N;Ue.setState(F,S,Xt)}let qe=!1;F.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==bt.state.version||_e.outputColorSpace!==pe||U.isBatchedMesh&&_e.batching===!1||!U.isBatchedMesh&&_e.batching===!0||U.isBatchedMesh&&_e.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_e.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_e.instancing===!1||!U.isInstancedMesh&&_e.instancing===!0||U.isSkinnedMesh&&_e.skinning===!1||!U.isSkinnedMesh&&_e.skinning===!0||U.isInstancedMesh&&_e.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_e.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_e.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_e.instancingMorph===!1&&U.morphTexture!==null||_e.envMap!==me||F.fog===!0&&_e.fog!==ne||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ue.numPlanes||_e.numIntersection!==Ue.numIntersection)||_e.vertexAlphas!==Te||_e.vertexTangents!==we||_e.morphTargets!==xe||_e.morphNormals!==$e||_e.morphColors!==rt||_e.toneMapping!==st||_e.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,_e.__version=F.version);let Zt=_e.currentProgram;qe===!0&&(Zt=yr(F,I,U));let ci=!1,Ht=!1,Cs=!1;const ht=Zt.getUniforms(),bn=_e.uniforms;if(ye.useProgram(Zt.program)&&(ci=!0,Ht=!0,Cs=!0),F.id!==N&&(N=F.id,Ht=!0),ci||b!==S){ht.setValue(C,"projectionMatrix",S.projectionMatrix),ht.setValue(C,"viewMatrix",S.matrixWorldInverse);const Xt=ht.map.cameraPosition;Xt!==void 0&&Xt.setValue(C,de.setFromMatrixPosition(S.matrixWorld)),Ze.logarithmicDepthBuffer&&ht.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ht.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Ht=!0,Cs=!0)}if(U.isSkinnedMesh){ht.setOptional(C,U,"bindMatrix"),ht.setOptional(C,U,"bindMatrixInverse");const Xt=U.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),ht.setValue(C,"boneTexture",Xt.boneTexture,Ie))}U.isBatchedMesh&&(ht.setOptional(C,U,"batchingTexture"),ht.setValue(C,"batchingTexture",U._matricesTexture,Ie),ht.setOptional(C,U,"batchingIdTexture"),ht.setValue(C,"batchingIdTexture",U._indirectTexture,Ie),ht.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(C,"batchingColorTexture",U._colorsTexture,Ie));const Rs=O.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&He.update(U,O,Zt),(Ht||_e.receiveShadow!==U.receiveShadow)&&(_e.receiveShadow=U.receiveShadow,ht.setValue(C,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(bn.envMap.value=me,bn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&I.environment!==null&&(bn.envMapIntensity.value=I.environmentIntensity),Ht&&(ht.setValue(C,"toneMappingExposure",x.toneMappingExposure),_e.needsLights&&ad(bn,Cs),ne&&F.fog===!0&&Se.refreshFogUniforms(bn,ne),Se.refreshMaterialUniforms(bn,F,Z,W,m.state.transmissionRenderTarget[S.id]),rs.upload(C,bo(_e),bn,Ie)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(rs.upload(C,bo(_e),bn,Ie),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ht.setValue(C,"center",U.center),ht.setValue(C,"modelViewMatrix",U.modelViewMatrix),ht.setValue(C,"normalMatrix",U.normalMatrix),ht.setValue(C,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Xt=F.uniformsGroups;for(let Ps=0,ld=Xt.length;Ps<ld;Ps++){const To=Xt[Ps];nt.update(To,Zt),nt.bind(To,Zt)}}return Zt}function ad(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function od(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,I,O){Re.get(S.texture).__webglTexture=I,Re.get(S.depthTexture).__webglTexture=O;const F=Re.get(S);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const O=Re.get(S);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,O=0){w=S,L=I,A=O;let F=!0,U=null,ne=!1,oe=!1;if(S){const me=Re.get(S);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(C.FRAMEBUFFER,null),F=!1;else if(me.__webglFramebuffer===void 0)Ie.setupRenderTarget(S);else if(me.__hasExternalTextures)Ie.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xe=S.depthTexture;if(me.__boundDepthTexture!==xe){if(xe!==null&&Re.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(S)}}const Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(oe=!0);const we=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[I])?U=we[I][O]:U=we[I],ne=!0):S.samples>0&&Ie.useMultisampledRTT(S)===!1?U=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[O]:U=we,y.copy(S.viewport),P.copy(S.scissor),z=S.scissorTest}else y.copy(ue).multiplyScalar(Z).floor(),P.copy(ve).multiplyScalar(Z).floor(),z=ze;if(ye.bindFramebuffer(C.FRAMEBUFFER,U)&&F&&ye.drawBuffers(S,U),ye.viewport(y),ye.scissor(P),ye.setScissorTest(z),ne){const me=Re.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,O)}else if(oe){const me=Re.get(S.texture),Te=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,O||0,Te)}N=-1},this.readRenderTargetPixels=function(S,I,O,F,U,ne,oe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){ye.bindFramebuffer(C.FRAMEBUFFER,pe);try{const me=S.texture,Te=me.format,we=me.type;if(!Ze.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-F&&O>=0&&O<=S.height-U&&C.readPixels(I,O,F,U,Pe.convert(Te),Pe.convert(we),ne)}finally{const me=w!==null?Re.get(w).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(S,I,O,F,U,ne,oe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){ye.bindFramebuffer(C.FRAMEBUFFER,pe);try{const me=S.texture,Te=me.format,we=me.type;if(!Ze.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-F&&O>=0&&O<=S.height-U){const xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,xe),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(I,O,F,U,Pe.convert(Te),Pe.convert(we),0),C.flush();const $e=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Jd(C,$e,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne)}finally{C.deleteBuffer(xe),C.deleteSync($e)}return ne}}finally{const me=w!==null?Re.get(w).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(S,I=null,O=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const F=Math.pow(2,-O),U=Math.floor(S.image.width*F),ne=Math.floor(S.image.height*F),oe=I!==null?I.x:0,pe=I!==null?I.y:0;Ie.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,oe,pe,U,ne),ye.unbindTexture()},this.copyTextureToTexture=function(S,I,O=null,F=null,U=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let ne,oe,pe,me,Te,we;O!==null?(ne=O.max.x-O.min.x,oe=O.max.y-O.min.y,pe=O.min.x,me=O.min.y):(ne=S.image.width,oe=S.image.height,pe=0,me=0),F!==null?(Te=F.x,we=F.y):(Te=0,we=0);const xe=Pe.convert(I.format),$e=Pe.convert(I.type);Ie.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const rt=C.getParameter(C.UNPACK_ROW_LENGTH),st=C.getParameter(C.UNPACK_IMAGE_HEIGHT),zt=C.getParameter(C.UNPACK_SKIP_PIXELS),Xe=C.getParameter(C.UNPACK_SKIP_ROWS),_e=C.getParameter(C.UNPACK_SKIP_IMAGES),bt=S.isCompressedTexture?S.mipmaps[U]:S.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,me),S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,Te,we,ne,oe,xe,$e,bt.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,Te,we,bt.width,bt.height,xe,bt.data):C.texSubImage2D(C.TEXTURE_2D,U,Te,we,ne,oe,xe,$e,bt),C.pixelStorei(C.UNPACK_ROW_LENGTH,rt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_e),U===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,I,O=null,F=null,U=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,F=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0);let ne,oe,pe,me,Te,we,xe,$e,rt;const st=S.isCompressedTexture?S.mipmaps[U]:S.image;O!==null?(ne=O.max.x-O.min.x,oe=O.max.y-O.min.y,pe=O.max.z-O.min.z,me=O.min.x,Te=O.min.y,we=O.min.z):(ne=st.width,oe=st.height,pe=st.depth,me=0,Te=0,we=0),F!==null?(xe=F.x,$e=F.y,rt=F.z):(xe=0,$e=0,rt=0);const zt=Pe.convert(I.format),Xe=Pe.convert(I.type);let _e;if(I.isData3DTexture)Ie.setTexture3D(I,0),_e=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ie.setTexture2DArray(I,0),_e=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const bt=C.getParameter(C.UNPACK_ROW_LENGTH),qe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Zt=C.getParameter(C.UNPACK_SKIP_PIXELS),ci=C.getParameter(C.UNPACK_SKIP_ROWS),Ht=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,me),C.pixelStorei(C.UNPACK_SKIP_ROWS,Te),C.pixelStorei(C.UNPACK_SKIP_IMAGES,we),S.isDataTexture||S.isData3DTexture?C.texSubImage3D(_e,U,xe,$e,rt,ne,oe,pe,zt,Xe,st.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(_e,U,xe,$e,rt,ne,oe,pe,zt,st.data):C.texSubImage3D(_e,U,xe,$e,rt,ne,oe,pe,zt,Xe,st),C.pixelStorei(C.UNPACK_ROW_LENGTH,bt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,qe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,ci),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ht),U===0&&I.generateMipmaps&&C.generateMipmap(_e),ye.unbindTexture()},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&Ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){L=0,A=0,w=null,ye.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===no?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===ys?"display-p3":"srgb"}}class ao{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new ao(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class og extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ic extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hs=new R,us=new R,yl=new Qe,nr=new xr,Wr=new vr,ra=new R,Sl=new R;class lg extends It{constructor(e=new wt,t=new Ic){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)hs.fromBufferAttribute(t,r-1),us.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=hs.distanceTo(us);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Wr.radius+=s,e.ray.intersectsSphere(Wr)===!1)return;yl.copy(r).invert(),nr.copy(e.ray).applyMatrix4(yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const h=d.getX(v),M=d.getX(v+1),x=$r(this,e,nr,l,h,M);x&&t.push(x)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(p),h=$r(this,e,nr,l,v,m);h&&t.push(h)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const h=$r(this,e,nr,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=$r(this,e,nr,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $r(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(hs.fromBufferAttribute(a,r),us.fromBufferAttribute(a,s),t.distanceSqToSegment(hs,us,ra,Sl)>n)return;ra.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ra);if(!(l<e.near||l>e.far))return{distance:l,point:Sl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}class oo extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bl=new Qe,$a=new xr,Xr=new vr,qr=new R;class Nc extends It{constructor(e=new wt,t=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Xr.radius+=s,e.ray.intersectsSphere(Xr)===!1)return;bl.copy(r).invert(),$a.copy(e.ray).applyMatrix4(bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,v=p;g<v;g++){const m=c.getX(g);qr.fromBufferAttribute(f,m),El(qr,m,l,r,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=u,v=p;g<v;g++)qr.fromBufferAttribute(f,g),El(qr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function El(i,e,t,n,r,s,a){const o=$a.distanceSqToPoint(i);if(o<t){const l=new R;$a.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class cg extends Dt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const d=n[r],u=n[r+1]-d,p=(a-d)/u;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ae:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,r=[],s=[],a=[],o=new R,l=new Qe;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(At(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(At(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hg extends dg{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*d-p*f+this.aX,c=u*f+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lo extends wt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),d(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new R,E=new R,L=new R;for(let A=0;A<t.length;A+=3)p(t[A+0],x),p(t[A+1],E),p(t[A+2],L),l(x,E,L,M)}function l(M,x,E,L){const A=L+1,w=[];for(let N=0;N<=A;N++){w[N]=[];const b=M.clone().lerp(E,N/A),y=x.clone().lerp(E,N/A),P=A-N;for(let z=0;z<=P;z++)z===0&&N===A?w[N][z]=b:w[N][z]=b.clone().lerp(y,z/P)}for(let N=0;N<A;N++)for(let b=0;b<2*(A-N)-1;b++){const y=Math.floor(b/2);b%2===0?(u(w[N][y+1]),u(w[N+1][y]),u(w[N][y])):(u(w[N][y+1]),u(w[N+1][y+1]),u(w[N+1][y]))}}function c(M){const x=new R;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(M),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function d(){const M=new R;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];const E=m(M)/2/Math.PI+.5,L=h(M)/Math.PI+.5;a.push(E,1-L)}g(),f()}function f(){for(let M=0;M<a.length;M+=6){const x=a[M+0],E=a[M+2],L=a[M+4],A=Math.max(x,E,L),w=Math.min(x,E,L);A>.9&&w<.1&&(x<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function p(M,x){const E=M*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){const M=new R,x=new R,E=new R,L=new R,A=new ae,w=new ae,N=new ae;for(let b=0,y=0;b<s.length;b+=9,y+=6){M.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),E.set(s[b+6],s[b+7],s[b+8]),A.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),N.set(a[y+4],a[y+5]),L.copy(M).add(x).add(E).divideScalar(3);const P=m(L);v(A,y+0,M,P),v(w,y+2,x,P),v(N,y+4,E,P)}}function v(M,x,E,L){L<0&&M.x===1&&(a[x]=M.x-1),E.x===0&&E.z===0&&(a[x]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.vertices,e.indices,e.radius,e.details)}}class co extends lo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new co(e.radius,e.detail)}}class ho extends wt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let f=e;const u=(t-e)/r,p=new R,g=new ae;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){const h=s+m/n*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}f+=u}for(let v=0;v<r;v++){const m=v*(n+1);for(let h=0;h<n;h++){const M=h+m,x=M,E=M+n+1,L=M+n+2,A=M+1;o.push(x,E,A),o.push(E,L,A)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ri extends wt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new R,u=new R,p=[],g=[],v=[],m=[];for(let h=0;h<=n;h++){const M=[],x=h/n;let E=0;h===0&&a===0?E=.5/t:h===n&&l===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const A=L/t;f.x=-e*Math.cos(r+A*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+A*s)*Math.sin(a+x*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(A+E,1-x),M.push(c++)}d.push(M)}for(let h=0;h<n;h++)for(let M=0;M<t;M++){const x=d[h][M+1],E=d[h][M],L=d[h+1][M],A=d[h+1][M+1];(h!==0||a>0)&&p.push(x,E,A),(h!==n-1||l<Math.PI)&&p.push(E,L,A)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Es extends wt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],d=new R,f=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.subVectors(f,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,M=(r+1)*p+g;a.push(v,m,M),a.push(m,h,M)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ug extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fs extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Tl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fg{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=c.length;f<u;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const pg=new fg;class uo{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}uo.DEFAULT_MATERIAL_NAME="__DEFAULT";class mg extends uo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tl.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=dr("img");function l(){d(),Tl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class gg extends uo{constructor(e){super(e)}load(e,t,n,r){const s=new Dt,a=new mg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Uc extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sa=new Qe,Al=new R,wl=new R;class vg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wl),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new Qe,ir=new R,aa=new R;class xg extends vg{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),r.makeTranslation(-ir.x,-ir.y,-ir.z),Cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}class _g extends Uc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new xg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mg extends Uc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rl(){return(typeof performance>"u"?Date:performance).now()}const Pl=new Qe;class Sg{constructor(e,t,n=0,r=1/0){this.ray=new xr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pl),this}intersectObject(e,t=!0,n=[]){return Xa(e,this,n,t),n.sort(Ll),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Xa(e[r],this,n,t);return n.sort(Ll),n}}function Ll(i,e){return i.distance-e.distance}function Xa(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Xa(s[a],e,t,!0)}}class Dl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bg extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);const Il={type:"change"},fo={type:"start"},Oc={type:"end"},Yr=new xr,Nl=new Dn,Eg=Math.cos(70*Kd.DEG2RAD),pt=new R,Bt=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oa=1e-6;class Tg extends bg{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new ii,this._lastTargetPosition=new R,this._quat=new ii().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dl,this._sphericalDelta=new Dl,this._scale=1,this._panOffset=new R,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new R,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wg.bind(this),this._onPointerDown=Ag.bind(this),this._onPointerUp=Cg.bind(this),this._onContextMenu=Ug.bind(this),this._onMouseWheel=Lg.bind(this),this._onKeyDown=Dg.bind(this),this._onTouchStart=Ig.bind(this),this._onTouchMove=Ng.bind(this),this._onMouseDown=Rg.bind(this),this._onMouseMove=Pg.bind(this),this._interceptControlDown=Og.bind(this),this._interceptControlUp=Fg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Il),this.update(),this.state=Je.NONE}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),r<-Math.PI?r+=Bt:r>Math.PI&&(r-=Bt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=pt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yr.origin.copy(this.object.position),Yr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yr.direction))<Eg?this.object.lookAt(this.target):(Nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yr.intersectPlane(Nl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>oa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oa||this._lastTargetPosition.distanceToSquared(this.target)>oa?(this.dispatchEvent(Il),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;pt.copy(r).sub(this.target);let s=pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ag(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function wg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Cg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Oc),this.state=Je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Je.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Je.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(fo)}function Pg(i){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(i.preventDefault(),this.dispatchEvent(fo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Oc))}function Dg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ig(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Je.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Je.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(fo)}function Ng(i){switch(this._trackPointer(i),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Je.NONE}}function Ug(i){this.enabled!==!1&&i.preventDefault()}function Og(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class li{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bg=new Ac(-1,1,1,-1,0,1);class kg extends wt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const zg=new kg;class Ts{constructor(e){this._mesh=new Mt(zg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hg extends li{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wi.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ts(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ul extends li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Gg extends li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new _t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ut}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hg(po),this.copyPass.material.blending=rn,this.clock=new yg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ul!==void 0&&(a instanceof Ul?n=!0:a instanceof Gg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wg extends li{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const $g={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $i extends li{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _t(s,a,{type:Ut}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new _t(s,a,{type:Ut});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new _t(s,a,{type:Ut});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=$g;this.highPassUniforms=Wi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ae(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=po;this.copyUniforms=Wi.clone(d.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new oi,this.fsQuad=new Ts(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ae(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=$i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$i.BlurDirectionX=new ae(1,0);$i.BlurDirectionY=new ae(0,1);class Nn extends li{constructor(e,t,n,r){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=r!==void 0?r:[],this.visibleEdgeColor=new Le(1,1,1),this.hiddenEdgeColor=new Le(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new _t(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Dc,this.depthMaterial.side=jt,this.depthMaterial.depthPacking=fc,this.depthMaterial.blending=rn,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=jt,this.prepareMaskMaterial.fragmentShader=d(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new _t(this.resolution.x,this.resolution.y,{type:Ut}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new _t(s,a,{type:Ut}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new _t(s,a,{type:Ut}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new _t(Math.round(s/2),Math.round(a/2),{type:Ut}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new _t(s,a,{type:Ut}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new _t(Math.round(s/2),Math.round(a/2),{type:Ut}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(s,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=po;this.copyUniforms=Wi.clone(c.uniforms),this.materialCopy=new ft({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:rn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.fsQuad=new Ts(null),this.tempPulseColor1=new Le,this.tempPulseColor2=new Le,this.textureMatrix=new Qe;function d(f,u){const p=u.isPerspectiveCamera?"perspective":"orthographic";return f.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,r),this.renderTargetBlurBuffer1.setSize(n,r),this.renderTargetEdgeBuffer1.setSize(n,r),this.separableBlurMaterial1.uniforms.texSize.value.set(n,r),n=Math.round(n/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(n,r),this.renderTargetEdgeBuffer2.setSize(n,r),this.separableBlurMaterial2.uniforms.texSize.value.set(n,r)}updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function r(s){if(s.isMesh||s.isSprite){if(!n.has(s)){const a=s.visible;(e===!1||t.get(s)===!0)&&(s.visible=e),t.set(s,a)}}else(s.isPoints||s.isLine)&&(e===!0?s.visible=t.get(s):(t.set(s,s.visible),s.visible=e))}this.renderScene.traverse(r)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,r,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Nn.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Nn.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Nn.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Nn.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new ft({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ae(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new ft({uniforms:{maskTexture:{value:null},texSize:{value:new ae(.5,.5)},visibleEdgeColor:{value:new R(1,1,1)},hiddenEdgeColor:{value:new R(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new ft({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new ft({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:ti,depthTest:!1,depthWrite:!1,transparent:!0})}}Nn.BlurDirectionX=new ae(1,0);Nn.BlurDirectionY=new ae(0,1);const Xg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qg extends li{constructor(){super();const e=Xg;this.uniforms=Wi.clone(e.uniforms),this.material=new ug({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ts(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ve.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const mo=[{key:"mercury",name:"Mercury",short:"ME",color:10132115,radius:.115,orbit:3,period:87.969,rotation:58.646,a:.387098,e:.205636,i:7.005,moons:0,texture:null,fact:"Smallest planet; extreme day/night temperature contrast."},{key:"venus",name:"Venus",short:"VE",color:13211758,radius:.18,orbit:4,period:224.701,rotation:-243.025,a:.723336,e:.00678,i:3.394,moons:0,texture:null,fact:"Dense CO₂ atmosphere and a surface hotter than Mercury."},{key:"earth",name:"Earth",short:"EA",color:4096964,radius:.205,orbit:5.15,period:365.256,rotation:.9973,a:1,e:.01671,i:0,moons:1,texture:"https://images-assets.nasa.gov/image/PIA18033/PIA18033~large.jpg",fact:"Liquid-water world and the only known planet with life."},{key:"mars",name:"Mars",short:"MA",color:12083013,radius:.155,orbit:6.55,period:686.98,rotation:1.026,a:1.523679,e:.0934,i:1.85,moons:2,texture:"https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/6/6453_mars-globe-valles-marineris-enhanced-full2.jpg?crop=faces%2Cfocalpoint&fit=clip&h=2970&w=2970",fact:"Cold desert world with two small moons: Phobos and Deimos."},{key:"jupiter",name:"Jupiter",short:"JU",color:12162418,radius:.48,orbit:9,period:4332.59,rotation:.4135,a:5.2026,e:.0485,i:1.303,moons:95,texture:null,fact:"Largest planet; powerful magnetosphere and a famous Great Red Spot."},{key:"saturn",name:"Saturn",short:"SA",color:13286819,radius:.42,orbit:12,period:10759.2,rotation:.444,a:9.5549,e:.0555,i:2.489,moons:146,texture:null,rings:!0,fact:"Gas giant known for its extensive ring system."},{key:"uranus",name:"Uranus",short:"UR",color:8110032,radius:.29,orbit:15,period:30687,rotation:-.718,a:19.2184,e:.0463,i:.773,moons:28,texture:null,rings:!0,fact:"Ice giant rotating on its side with a high axial tilt."},{key:"neptune",name:"Neptune",short:"NE",color:5207741,radius:.285,orbit:18,period:60190,rotation:.671,a:30.11,e:.0095,i:1.77,moons:16,texture:null,fact:"Distant ice giant with exceptionally fast winds."}],Yi={key:"sun",name:"Sun",radius:.86,color:16037467,period:0,rotation:25.38,fact:"The G-type main-sequence star at the center of our planetary system."},_n={moon:{name:"Moon",radius:.055,orbit:.55,period:27.321,texture:"https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia14/pia14011/jpeg/PIA14011.jpg?crop=faces%2Cfocalpoint&fit=clip&h=1400&w=1400"},phobos:{name:"Phobos",radius:.025,orbit:.35,period:.319},deimos:{name:"Deimos",radius:.018,orbit:.62,period:1.263}},ps=[{id:"shackleton",name:"Shackleton Crater Rim",body:"moon",lat:-89.9,lon:0,type:"Permanently Shadowed Region",highlight:"Water-ice confirmed by LCROSS / LRO",tags:["PSR","water-ice","south pole"],env:{tempMin:-173,tempMax:-93,radiation:"High (rim exposed)",terrain:"Rugged crater rim",water:"Subsurface ice confirmed"},why:"South-pole PSR with confirmed ice deposits and near-continuous sunlight on the rim for power generation.",icon:"🌕",color:"#8bb8dd"},{id:"aristarchus",name:"Aristarchus Plateau",body:"moon",lat:26.8,lon:-48.5,type:"Volcanic Plateau",highlight:"Highest albedo / possible outgassing",tags:["volcanic","resources","geology"],env:{tempMin:-183,tempMax:117,radiation:"High (no atmosphere)",terrain:"Highland plateau",water:"Trace pyroclastic"},why:"Rich in pyroclastic deposits; potential regolith resources and strong science targets.",icon:"🌕",color:"#c5a872"},{id:"malapert",name:"Malapert Massif",body:"moon",lat:-86,lon:0,type:"Near-Polar Massif",highlight:"Line-of-sight to Earth + sunlit peak",tags:["communications","solar","relay"],env:{tempMin:-150,tempMax:-60,radiation:"Moderate",terrain:"Elevated massif",water:"Nearby PSR deposits"},why:"Communications relay advantage + near-continuous solar power potential from elevated peak.",icon:"🌕",color:"#aad4b8"}],ms=[{id:"jezero",name:"Jezero Crater",body:"mars",lat:18.38,lon:77.58,type:"Ancient Lake Delta",highlight:"Perseverance rover landing site",tags:["delta","ancient lake","Perseverance"],env:{tempMin:-73,tempMax:20,radiation:"High (thin atmosphere)",terrain:"Flat delta + crater rim",water:"Subsurface brine possible"},why:"Flat delta floor ideal for landing + geology rich in biosignature potential. Primary NASA target.",icon:"🔴",color:"#e07b54"},{id:"hellas",name:"Hellas Basin (North Rim)",body:"mars",lat:-35,lon:70,type:"Impact Basin",highlight:"Thickest atmosphere on Mars (~1200 m below datum)",tags:["thick atmosphere","low elevation","pressure"],env:{tempMin:-90,tempMax:10,radiation:"Moderate (lower elevation)",terrain:"Sediment plains",water:"Possible subsurface"},why:"Higher atmospheric pressure reduces radiation dose and helps thermal management for crew.",icon:"🔴",color:"#c85f36"},{id:"valles",name:"Valles Marineris (East Wall)",body:"mars",lat:-13.9,lon:-59.2,type:"Canyon System",highlight:"Deep canyon walls shield from radiation",tags:["canyon","shielding","equatorial"],env:{tempMin:-60,tempMax:25,radiation:"Low-Moderate (canyon shielded)",terrain:"Canyon floor + cliffs",water:"RSL trace evidence"},why:"Canyon walls provide natural radiation shielding and unique layered geology for science.",icon:"🔴",color:"#d4704a"}],Fc={shackleton:[{id:"devon",name:"Devon Island, Canada",lat:75.33,lon:-89.79,country:"Canada",biome:"Arctic Desert",nasaDatasets:["NASA POWER","MODIS LST","SMAP"],scores:{overall:82,temperature:88,terrain:85,soil:74,ndvi:62,radiation:78},climate:{tMin:-40,tMax:8,precip:130,elev:500},why:"Mars-like cold desert with permafrost, minimal vegetation, rugged terrain. Home to NASA's Haughton-Mars Project.",badge:"NASA HMP FIELD SITE",badgeColor:"#50e3c2"},{id:"svalbard",name:"Ny-Ålesund, Svalbard",lat:78.9,lon:11.9,country:"Norway",biome:"High Arctic",nasaDatasets:["NASA POWER","ICESat-2","GEDI"],scores:{overall:78,temperature:85,terrain:79,soil:71,ndvi:58,radiation:72},climate:{tMin:-30,tMax:7,precip:400,elev:10},why:"Permanently frozen ground, polar night/day cycles, extreme cold validated by long-term research.",badge:"POLAR RESEARCH STATION",badgeColor:"#5da7ef"},{id:"mcmurdo",name:"McMurdo Dry Valleys, Antarctica",lat:-77.5,lon:161,country:"Antarctica",biome:"Polar Desert",nasaDatasets:["MODIS LST","Landsat","SMAP"],scores:{overall:76,temperature:91,terrain:72,soil:68,ndvi:45,radiation:80},climate:{tMin:-50,tMax:0,precip:30,elev:300},why:"Driest, coldest desert on Earth. No soil bacteria. NASA uses it to study limits of life.",badge:"LIFE-LIMITS ANALOG",badgeColor:"#f4ad3f"}],aristarchus:[{id:"lanzarote",name:"Timanfaya, Lanzarote",lat:29,lon:-13.75,country:"Spain",biome:"Volcanic Desert",nasaDatasets:["NASA POWER","ASTER","Landsat"],scores:{overall:79,temperature:76,terrain:88,soil:81,ndvi:52,radiation:74},climate:{tMin:12,tMax:29,precip:130,elev:600},why:"Young volcanic landscape with lava fields. ESA astronaut training conducted here.",badge:"ESA TRAINING SITE",badgeColor:"#b07aee"},{id:"askja",name:"Askja Highlands, Iceland",lat:65.05,lon:-16.75,country:"Iceland",biome:"Volcanic Highland",nasaDatasets:["NASA POWER","Landsat","NASADEM"],scores:{overall:75,temperature:68,terrain:85,soil:79,ndvi:48,radiation:69},climate:{tMin:-10,tMax:15,precip:800,elev:1e3},why:"Rhyolite and basalt fields. Apollo astronauts trained here for lunar geology.",badge:"APOLLO TRAINING SITE",badgeColor:"#f4ad3f"}],malapert:[{id:"devon",name:"Devon Island, Canada",lat:75.33,lon:-89.79,country:"Canada",biome:"Arctic Desert",nasaDatasets:["NASA POWER","MODIS LST","SMAP"],scores:{overall:80,temperature:85,terrain:82,soil:71,ndvi:60,radiation:75},climate:{tMin:-40,tMax:8,precip:130,elev:500},why:"Best terrestrial analog for polar lunar missions. Combined remote + extreme cold environment.",badge:"NASA HMP FIELD SITE",badgeColor:"#50e3c2"},{id:"ellesmere",name:"Ellesmere Island, Canada",lat:79.8,lon:-85,country:"Canada",biome:"High Arctic",nasaDatasets:["NASA POWER","ICESat-2"],scores:{overall:74,temperature:82,terrain:78,soil:68,ndvi:50,radiation:72},climate:{tMin:-45,tMax:5,precip:80,elev:200},why:"Extreme cold, minimal precipitation, near-polar. Good comms-relay terrain analog.",badge:"POLAR ANALOG",badgeColor:"#5da7ef"}],jezero:[{id:"atacama",name:"Atacama Desert, Chile",lat:-23.86,lon:-69.14,country:"Chile",biome:"Hyper-Arid Desert",nasaDatasets:["NASA POWER","SMAP","MODIS NDVI","NASADEM"],scores:{overall:84,temperature:87,terrain:81,soil:93,ndvi:79,radiation:82},climate:{tMin:-2,tMax:24,precip:15,elev:2400},why:"Driest non-polar desert on Earth. Extreme UV. NASA's primary Mars analog for astrobiology.",badge:"NASA ASTROBIO PRIME",badgeColor:"#50e3c2"},{id:"dry_valleys",name:"Antarctic Dry Valleys",lat:-77.5,lon:161,country:"Antarctica",biome:"Polar Desert",nasaDatasets:["MODIS LST","Landsat","SMAP"],scores:{overall:76,temperature:84,terrain:71,soil:80,ndvi:44,radiation:85},climate:{tMin:-50,tMax:0,precip:30,elev:300},why:"Perchlorate-rich soil mirrors Martian chemistry. No liquid water. Life-limits boundary.",badge:"COLD ARID ANALOG",badgeColor:"#f4ad3f"},{id:"colorado",name:"Colorado Plateau (Utah)",lat:38.5,lon:-110,country:"USA",biome:"Desert Canyon",nasaDatasets:["NASA POWER","Landsat","NASADEM"],scores:{overall:71,temperature:72,terrain:84,soil:76,ndvi:65,radiation:68},climate:{tMin:-5,tMax:38,precip:300,elev:1500},why:"Canyon geology mirrors Jezero's delta morphology. Mars Desert Research Station operates here.",badge:"MDRS FIELD SITE",badgeColor:"#5da7ef"}],hellas:[{id:"dead_sea",name:"Dead Sea Basin, Jordan",lat:31.5,lon:35.5,country:"Jordan/Israel",biome:"Below Sea-Level Desert",nasaDatasets:["NASA POWER","MODIS","SRTM"],scores:{overall:72,temperature:74,terrain:77,soil:69,ndvi:58,radiation:70},climate:{tMin:10,tMax:40,precip:100,elev:-430},why:"Low-elevation basin with dense, hot, arid air mirrors Hellas thick-atmosphere advantage.",badge:"LOW ELEVATION ANALOG",badgeColor:"#f4ad3f"},{id:"atacama_h",name:"Atacama Desert, Chile",lat:-23.86,lon:-69.14,country:"Chile",biome:"Hyper-Arid Desert",nasaDatasets:["NASA POWER","SMAP","MODIS NDVI"],scores:{overall:69,temperature:71,terrain:73,soil:82,ndvi:70,radiation:74},climate:{tMin:-2,tMax:24,precip:15,elev:2400},why:"Arid soil chemistry closest to Martian regolith despite different elevation profile.",badge:"SOIL ANALOG",badgeColor:"#50e3c2"}],valles:[{id:"colorado_v",name:"Colorado Plateau (Utah/Arizona)",lat:38.5,lon:-110,country:"USA",biome:"Desert Canyon",nasaDatasets:["NASA POWER","Landsat","NASADEM"],scores:{overall:83,temperature:76,terrain:91,soil:79,ndvi:66,radiation:75},climate:{tMin:-5,tMax:38,precip:300,elev:1500},why:"Deep canyon terrain and exposed layered geology — closest Earth match for Valles Marineris wall.",badge:"PRIME TERRAIN MATCH",badgeColor:"#50e3c2"},{id:"puna",name:"Puna de Atacama, Argentina",lat:-24,lon:-67.5,country:"Argentina",biome:"High-Altitude Desert",nasaDatasets:["NASA POWER","SMAP","ASTER"],scores:{overall:77,temperature:79,terrain:83,soil:80,ndvi:61,radiation:82},climate:{tMin:-15,tMax:20,precip:100,elev:3800},why:"Highest UV radiation on Earth outside polar regions. Thin air, extreme thermal swings.",badge:"RADIATION ANALOG",badgeColor:"#f4ad3f"},{id:"wadi_rum",name:"Wadi Rum, Jordan",lat:29.58,lon:35.4,country:"Jordan",biome:"Desert Canyon",nasaDatasets:["NASA POWER","Landsat","NASADEM"],scores:{overall:73,temperature:77,terrain:86,soil:74,ndvi:62,radiation:72},climate:{tMin:2,tMax:38,precip:30,elev:750},why:"Red sandstone canyon walls, extreme aridity. Used for Mars science analog work.",badge:"VISUAL + ARID ANALOG",badgeColor:"#5da7ef"}]},ss={body:"mars",selectedSiteId:"jezero",selectedAnalogId:null,scanning:!1,scanProgress:0,scanComplete:!1,confirmedAnalogId:null};function hr(i){return i>=80?"var(--green)":i>=65?"var(--amber)":"var(--red)"}function Yg(i){return i>=80?"HIGH":i>=65?"MOD":"LOW"}function rr(i,e){return`<div class="xb">
    <span class="xb-l">${i}</span>
    <div class="xb-t"><div class="xb-f" style="width:${e}%;background:${hr(e)}"></div></div>
    <span class="xb-v" style="color:${hr(e)}">${e}%</span>
  </div>`}function jg(i,e){return`<button class="xs-card ${e?"active":""}" data-site="${i.id}">
    <span class="xs-icon">${i.icon}</span>
    <div class="xs-info">
      <strong>${i.name}</strong>
      <small>${i.type}</small>
      <div class="xs-tags">${i.tags.slice(0,2).map(t=>`<span>${t}</span>`).join("")}</div>
    </div>
    <span class="xs-coord">${i.lat.toFixed(1)}°</span>
  </button>`}function Kg(i,e,t){const n=i.scores;return`<button class="xa-card ${e?"selected":""}" data-analog="${i.id}">
    <div class="xa-rank">#${t}</div>
    <div class="xa-body">
      <div class="xa-top">
        <div class="xa-name-wrap">
          <strong class="xa-name">${i.name}</strong>
          <small>${i.biome} · ${i.country}</small>
          <span class="xa-badge" style="border-color:${i.badgeColor};color:${i.badgeColor}">${i.badge}</span>
        </div>
        <div class="xa-score" style="color:${hr(n.overall)}">
          <span class="xa-num">${n.overall}</span><span class="xa-pct">%</span>
          <div class="xa-grade">${Yg(n.overall)}</div>
        </div>
      </div>
      <div class="xa-mini-bars">
        ${["temperature","terrain","soil","ndvi","radiation"].map(r=>`<div class="xa-mb" title="${r}">
            <span>${r.slice(0,4).toUpperCase()}</span>
            <div class="xa-mb-t"><div class="xa-mb-f" style="width:${n[r]}%;background:${hr(n[r])}"></div></div>
          </div>`).join("")}
      </div>
      <div class="xa-why">${i.why}</div>
    </div>
  </button>`}function Bc(i,e){if(!e)return`<div class="xd-empty">
      <div class="xd-empty-icon">🌍</div>
      <p>Select an Earth analog to see the detailed match comparison</p>
    </div>`;const t=e.scores;return`
    <div class="xd-hd">
      <div class="kicker">MATCH DETAIL</div>
      <div class="xd-overall" style="color:${hr(t.overall)}">${t.overall}%</div>
    </div>
    <div class="xd-pair">
      <div class="xd-pair-item">
        <span class="kicker">TARGET</span>
        <strong>${i.name}</strong>
        <small>${i.lat.toFixed(2)}°, ${i.lon.toFixed(2)}°</small>
      </div>
      <div class="xd-arrow">→</div>
      <div class="xd-pair-item">
        <span class="kicker">ANALOG</span>
        <strong>${e.name}</strong>
        <small>${e.lat.toFixed(2)}°, ${e.lon.toFixed(2)}°</small>
      </div>
    </div>
    <div class="xd-why">${e.why}</div>
    <div class="xd-bars">
      ${rr("Temperature",t.temperature)}
      ${rr("Terrain / Elev",t.terrain)}
      ${rr("Soil Moisture",t.soil)}
      ${rr("Vegetation NDVI",t.ndvi)}
      ${rr("UV / Radiation",t.radiation)}
    </div>
    <div class="xd-climate">
      <div class="xd-cc"><span>TEMP MIN</span><b>${e.climate.tMin}°C</b></div>
      <div class="xd-cc"><span>TEMP MAX</span><b>${e.climate.tMax}°C</b></div>
      <div class="xd-cc"><span>PRECIP</span><b>${e.climate.precip} mm</b></div>
      <div class="xd-cc"><span>ELEV</span><b>${e.climate.elev} m</b></div>
    </div>
    <div class="xd-datasets">
      <div class="kicker" style="margin-bottom:5px">NASA DATASETS (DEMO)</div>
      ${e.nasaDatasets.map(n=>`<span class="xd-ds">${n}</span>`).join("")}
    </div>
    <div class="xd-disclaim">⚠ Scores are prototype model values. Live backend queries NASA POWER, SMAP, MODIS, NASADEM.</div>`}function kc(i,e){const t=Math.round(i),n=["NASA POWER climatology","SMAP soil moisture","MODIS LST surface temp","NASADEM terrain elevation","MODIS NDVI vegetation"],r=Math.min(n.length,Math.floor(i/100*n.length));return`<div class="xs-scan-box" id="xScanBox">
    <div class="xs-scan-top">
      <div class="xs-scan-led ${e?"done":"pulse"}"></div>
      <span>${e?"✓ SCAN COMPLETE":"SCANNING EARTH DATABASE…"}</span>
      <span class="xs-scan-pct" id="xScanPct">${t}%</span>
    </div>
    <div class="xs-scan-track"><div class="xs-scan-fill" id="xScanFill" style="width:${t}%"></div></div>
    <div class="xs-scan-list" id="xScanList">
      ${n.map((s,a)=>`<div class="xs-ds ${a<r?"done":a===r&&!e?"act":""}">
        <span class="xs-ds-ic">${a<r?"✓":a===r&&!e?"⟳":"○"}</span>
        <span>${s}</span>
        ${a<r?`<span class="xs-ds-v">${70+Math.round(Math.sin(a*12.9898)*13)}%</span>`:""}
      </div>`).join("")}
    </div>
    <div class="xs-scan-note">Demo: scores are model-derived. Live: NASA POWER API, SMAP L3, MODIS MOD11A2, NASADEM 30m.</div>
  </div>`}function zc(i){const e=i.body==="moon"?ps:ms,t=e.find(s=>s.id===i.selectedSiteId)||e[0],n=Fc[t.id]||[],r=n.find(s=>s.id===i.selectedAnalogId)||null;return`<div class="xe-wrap" id="xeWrap">

    <!-- LEFT -->
    <div class="xe-left">
      <div class="hud-card xe-body-pick">
        <div class="kicker">01 · TARGET WORLD</div>
        <div class="xe-body-row">
          <button class="xe-bb ${i.body==="mars"?"on":""}" data-expl-body="mars">
            <span>🔴</span><strong>MARS</strong><small>${ms.length} sites</small>
          </button>
          <button class="xe-bb ${i.body==="moon"?"on":""}" data-expl-body="moon">
            <span>🌕</span><strong>MOON</strong><small>${ps.length} sites</small>
          </button>
        </div>
      </div>

      <div class="hud-card xe-site-pick">
        <div class="kicker">02 · PICK A SITE</div>
        <div class="xs-list">
          ${e.map(s=>jg(s,s.id===t.id)).join("")}
        </div>
      </div>

      <div class="hud-card xe-env">
        <div class="kicker">SITE ENVIRONMENT</div>
        <div class="xe-env-name">${t.name}</div>
        <div class="xe-env-hl">💡 ${t.highlight}</div>
        <div class="xe-env-grid">
          <div class="xe-env-c"><span>TEMP</span><b>${t.env.tempMin}° → ${t.env.tempMax}°C</b></div>
          <div class="xe-env-c"><span>RADIATION</span><b>${t.env.radiation}</b></div>
          <div class="xe-env-c"><span>TERRAIN</span><b>${t.env.terrain}</b></div>
          <div class="xe-env-c"><span>WATER</span><b>${t.env.water}</b></div>
        </div>
      </div>
    </div>

    <!-- CENTER -->
    <div class="xe-center">
      <div class="xe-center-hd">
        <div>
          <div class="kicker">03 · EARTH ANALOG MATCH</div>
          <div class="xe-center-title">Finding analogs for <b>${t.name}</b></div>
        </div>
        <button class="btn btn-primary xe-scan-btn" id="xScanBtn">
          ${i.scanComplete?"🔁 RE-SCAN":i.scanning?"⟳ SCANNING…":"⚡ FIND ANALOGS"}
        </button>
      </div>

      ${i.scanning||i.scanComplete?kc(i.scanProgress,i.scanComplete):`
        <div class="xe-prescan">
          <div class="xe-prescan-icon">🌍</div>
          <p>Click <b>FIND ANALOGS</b> to search Earth for locations matching <b>${t.name}</b></p>
          <div class="xe-prescan-dims">Matching on: Temperature · Terrain · Soil · Vegetation · Radiation</div>
        </div>
      `}

      ${i.scanComplete?`
        <div class="xe-results-hd">
          <span class="kicker">RANKED RESULTS — ${n.length} ANALOG${n.length>1?"S":""} FOUND</span>
          ${n[0]?`<span class="xe-best">BEST MATCH ${n[0].scores.overall}%</span>`:""}
        </div>
        <div class="xe-analog-list">
          ${n.map((s,a)=>Kg(s,i.selectedAnalogId===s.id,a+1)).join("")}
        </div>
      `:""}
    </div>

    <!-- RIGHT -->
    <div class="xe-right">
      <div class="hud-card xe-detail" id="xDetail">
        ${Bc(t,r)}
      </div>

      ${r?'<button class="btn btn-primary xe-confirm" id="xConfirm">CONFIRM ANALOG → BUILD ›</button>':""}

      <div class="hud-card xe-how">
        <div class="kicker">HOW MATCHING WORKS</div>
        <div class="xe-how-steps">
          <div class="xe-hs"><b>01</b><span>Site coordinates from NASA mission data</span></div>
          <div class="xe-hs"><b>02</b><span>NASA POWER · SMAP · MODIS · NASADEM queried</span></div>
          <div class="xe-hs"><b>03</b><span>Per-dimension similarity scored and weighted</span></div>
          <div class="xe-hs"><b>04</b><span>Earth candidates ranked; top 3 shown</span></div>
        </div>
        <div class="xe-how-note">Demo uses pre-computed model scores. Full backend queries NASA APIs live.</div>
      </div>
    </div>

  </div>`}const Zg=`
/* === EXPLORE WRAP === */
.xe-wrap{display:grid;grid-template-columns:260px 1fr 290px;gap:8px;height:100%;overflow:hidden}
.xe-left,.xe-center,.xe-right{display:flex;flex-direction:column;gap:8px;overflow-y:auto;overflow-x:hidden;padding-right:2px}
.xe-left::-webkit-scrollbar,.xe-center::-webkit-scrollbar,.xe-right::-webkit-scrollbar{width:3px}
.xe-left::-webkit-scrollbar-thumb,.xe-center::-webkit-scrollbar-thumb,.xe-right::-webkit-scrollbar-thumb{background:#1d3344}

/* === BODY PICKER === */
.xe-body-pick{padding:11px;flex-shrink:0}
.xe-body-row{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px}
.xe-bb{display:flex;flex-direction:column;align-items:center;gap:3px;padding:10px 6px;border:1px solid #263d4f;background:#040d14;color:#7898b0;cursor:pointer;transition:all .2s}
.xe-bb span{font-size:20px}
.xe-bb strong{font:600 10px var(--mono);letter-spacing:1px}
.xe-bb small{font:8px var(--mono);color:#4e6a7e}
.xe-bb:hover{border-color:#4a7ea0;background:#07141e;transform:translateY(-1px)}
.xe-bb.on{border-color:#4a90d9;background:#071929;color:#c2def5;box-shadow:0 0 16px rgba(74,144,217,.15)}

/* === SITE PICKER === */
.xe-site-pick{padding:11px;flex:1;min-height:0}
.xs-list{display:flex;flex-direction:column;gap:5px;margin-top:8px}
.xs-card{display:grid;grid-template-columns:28px 1fr 36px;gap:7px;align-items:center;padding:9px 10px;border:1px solid #222f3d;background:#050e17;color:#8bacc5;text-align:left;cursor:pointer;transition:all .2s;width:100%}
.xs-card:hover{border-color:#3d6a8a;background:#071526;transform:translateX(2px)}
.xs-card.active{border-color:#4a8ec4;background:#091a2a;color:#cce0f5;box-shadow:inset 0 0 18px rgba(74,142,196,.06),0 0 12px rgba(74,142,196,.1)}
.xs-icon{font-size:16px;text-align:center}
.xs-info strong{display:block;font:600 9px var(--mono);color:#c0dcf0;margin-bottom:2px}
.xs-info small{display:block;font:8px var(--mono);color:#4e6a7e}
.xs-tags{display:flex;gap:3px;margin-top:3px;flex-wrap:wrap}
.xs-tags span{padding:1px 4px;border:1px solid #222f3d;color:#445665;font:7px var(--mono)}
.xs-coord{font:8px var(--mono);color:#374e5f;white-space:nowrap}

/* === ENV CARD === */
.xe-env{padding:11px;flex-shrink:0}
.xe-env-name{font:600 10px var(--mono);color:#9dc5e2;margin:6px 0 3px}
.xe-env-hl{font:8px var(--mono);color:#4d8aa6;padding:5px 7px;border-left:2px solid #2f5f7a;background:rgba(7,20,30,.6);margin-bottom:7px;line-height:1.5}
.xe-env-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#182838}
.xe-env-c{padding:7px 8px;background:#060f18}
.xe-env-c span{display:block;font:7px var(--mono);color:#3d5a70;margin-bottom:2px}
.xe-env-c b{font:500 8px var(--mono);color:#7aaed0;line-height:1.4}

/* === CENTER HEADER === */
.xe-center-hd{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;flex-shrink:0;padding-bottom:4px}
.xe-center-title{font:500 13px var(--font);color:#9ec8e5;margin-top:2px}
.xe-center-title b{color:#d5ecff}
.xe-scan-btn{white-space:nowrap;flex-shrink:0}

/* === PRE-SCAN === */
.xe-prescan{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 18px;border:1px dashed #24404f;background:#030a11;text-align:center;gap:9px;flex-shrink:0}
.xe-prescan-icon{font-size:32px;animation:float 4s ease-in-out infinite}
.xe-prescan p{color:#567383;font-size:10px;line-height:1.6;max-width:280px;margin:0}
.xe-prescan b{color:#7ab4ce}
.xe-prescan-dims{font:8px var(--mono);color:#375060;padding:5px 9px;border:1px solid #1d3040}

/* === SCAN BOX === */
.xs-scan-box{border:1px solid #1f3d50;background:#04101a;padding:11px;flex-shrink:0}
.xs-scan-top{display:flex;align-items:center;gap:7px;margin-bottom:7px;font:600 9px var(--mono);color:#6da8c8}
.xs-scan-pct{margin-left:auto;font:700 13px var(--mono);color:#5fc8ec}
.xs-scan-led{width:8px;height:8px;border-radius:50%;background:var(--cyan);flex-shrink:0}
.xs-scan-led.pulse{animation:blink .7s infinite}
.xs-scan-led.done{background:var(--green)}
.xs-scan-track{height:3px;background:#162535;border-radius:2px;margin-bottom:9px;overflow:hidden}
.xs-scan-fill{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:2px;transition:width .15s linear}
.xs-scan-list{display:flex;flex-direction:column;gap:3px}
.xs-ds{display:flex;align-items:center;gap:7px;padding:3px 6px;font:8px var(--mono);color:#3f5869}
.xs-ds.done{color:#5faa90}
.xs-ds.act{color:#6aa8cc;background:rgba(93,167,222,.05)}
.xs-ds-ic{width:12px;text-align:center;flex-shrink:0}
.xs-ds.act .xs-ds-ic{animation:spin 1s linear infinite;display:inline-block}
.xs-ds-v{margin-left:auto;color:var(--green);font:600 8px var(--mono)}
.xs-scan-note{margin-top:7px;font:7px var(--mono);color:#2f4858;padding-top:6px;border-top:1px solid #182a38}

/* === RESULTS === */
.xe-results-hd{display:flex;align-items:center;justify-content:space-between;flex-shrink:0;padding:4px 0 2px}
.xe-best{padding:3px 8px;border:1px solid #2a6040;background:#060f0a;color:var(--green);font:700 8px var(--mono)}
.xe-analog-list{display:flex;flex-direction:column;gap:5px}

/* === ANALOG CARD === */
.xa-card{display:grid;grid-template-columns:24px 1fr;gap:8px;padding:10px;border:1px solid #1e3040;background:#050e18;text-align:left;cursor:pointer;transition:all .22s;width:100%;align-items:flex-start}
.xa-card:hover{border-color:#3a6c8e;background:#071524;transform:translateX(2px);box-shadow:0 4px 16px rgba(0,0,0,.3)}
.xa-card.selected{border-color:#4285c8;background:#081928;box-shadow:inset 0 0 20px rgba(66,133,200,.06),0 0 16px rgba(66,133,200,.12)}
.xa-rank{font:700 11px var(--mono);color:#2f4d62;padding-top:2px}
.xa-top{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px}
.xa-name-wrap{flex:1;min-width:0}
.xa-name{display:block;font:600 10px var(--mono);color:#b8d8f0;margin-bottom:2px}
.xa-name-wrap small{display:block;font:8px var(--mono);color:#456070;margin-bottom:4px}
.xa-badge{display:inline-block;padding:2px 5px;border:1px solid;font:600 7px var(--mono);letter-spacing:.3px}
.xa-score{text-align:right;flex-shrink:0}
.xa-num{font:700 22px var(--mono)}
.xa-pct{font:700 9px var(--mono);vertical-align:super}
.xa-grade{font:700 7px var(--mono);letter-spacing:.5px;margin-top:1px}
.xa-mini-bars{display:flex;gap:4px;margin-bottom:6px}
.xa-mb{flex:1;display:flex;flex-direction:column;gap:2px}
.xa-mb span{font:6px var(--mono);color:#354f62;text-align:center}
.xa-mb-t{height:3px;background:#142030;border-radius:1px}
.xa-mb-f{height:100%;border-radius:1px;transition:width .5s ease}
.xa-why{font:8px var(--mono);color:#4a6579;line-height:1.55}

/* === RIGHT DETAIL === */
.xe-detail{padding:13px;flex:1;min-height:0;overflow-y:auto}
.xe-detail::-webkit-scrollbar{width:3px}
.xe-detail::-webkit-scrollbar-thumb{background:#1d3344}
.xd-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:180px;gap:10px;color:#3a5668;text-align:center}
.xd-empty-icon{font-size:28px;opacity:.5}
.xd-empty p{font:9px var(--mono);line-height:1.6;max-width:200px;margin:0}
.xd-hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:9px}
.xd-overall{font:700 22px var(--mono)}
.xd-pair{display:grid;grid-template-columns:1fr auto 1fr;gap:6px;align-items:center;margin-bottom:9px;background:#060f18;border:1px solid #182a38;padding:9px}
.xd-pair-item span{display:block;margin-bottom:2px}
.xd-pair-item strong{display:block;font:600 9px var(--mono);color:#a8cce5;margin-bottom:2px}
.xd-pair-item small{display:block;font:8px var(--mono);color:#3f5c6e}
.xd-arrow{font:500 16px var(--mono);color:#3e5a6e;text-align:center}
.xd-why{font:8px var(--mono);color:#4d6c82;line-height:1.6;padding:7px 8px;border-left:2px solid #2d5570;background:rgba(6,18,28,.7);margin-bottom:9px}
.xd-bars{display:flex;flex-direction:column;gap:5px;margin-bottom:9px}
.xb{display:grid;grid-template-columns:90px 1fr 32px;gap:5px;align-items:center}
.xb-l{font:8px var(--mono);color:#445e6e}
.xb-t{height:4px;background:#152333;border-radius:2px;overflow:hidden}
.xb-f{height:100%;border-radius:2px;transition:width .7s ease}
.xb-v{font:600 8px var(--mono);text-align:right}
.xd-climate{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#162535;margin-bottom:9px}
.xd-cc{padding:7px 5px;background:#050e18}
.xd-cc span{display:block;font:7px var(--mono);color:#354f62;margin-bottom:2px}
.xd-cc b{font:600 9px var(--mono);color:#7aaed0}
.xd-datasets{padding:7px 8px;border:1px solid #182a38;background:#040c14;margin-bottom:7px}
.xd-ds{display:inline-block;margin:3px 3px 0 0;padding:2px 6px;border:1px solid #233d50;color:#3f6070;font:7px var(--mono)}
.xd-disclaim{font:7px var(--mono);color:#2f4858;line-height:1.5;padding:5px 7px;border:1px solid #162430;background:#030a11}

/* === CONFIRM + HOW === */
.xe-confirm{width:100%;padding:11px;font:700 9px var(--mono);letter-spacing:1px;flex-shrink:0}
.xe-how{padding:11px;flex-shrink:0}
.xe-how-steps{display:flex;flex-direction:column;gap:7px;margin:8px 0}
.xe-hs{display:flex;gap:8px;align-items:flex-start}
.xe-hs b{font:700 8px var(--mono);color:#2f5068;border:1px solid #243c50;width:22px;height:22px;display:grid;place-items:center;flex-shrink:0}
.xe-hs span{font:8px var(--mono);color:#4a6475;line-height:1.55}
.xe-how-note{font:7px var(--mono);color:#2e4557;padding-top:6px;border-top:1px solid #1a2f3d;margin-top:4px}

@media(max-width:1100px){.xe-wrap{grid-template-columns:230px 1fr 260px}}
@media(max-width:850px){.xe-wrap{grid-template-columns:1fr 1fr}.xe-left{grid-column:1/-1;flex-direction:row;overflow-x:auto;overflow-y:visible}.xe-right{grid-column:1/-1}}
`;let Ol=!1;function Jg(){if(Ol)return;const i=document.createElement("style");i.id="explore-css",i.textContent=Zg,document.head.appendChild(i),Ol=!0}let Un=null;function Qg(i,e){Un&&clearInterval(Un),i.scanning=!0,i.scanComplete=!1,i.scanProgress=0,Un=setInterval(()=>{i.scanProgress=Math.min(100,i.scanProgress+(1.8+Math.random()*2.8));const t=document.getElementById("xScanFill"),n=document.getElementById("xScanPct"),r=document.querySelector(".xs-scan-led");t&&(t.style.width=i.scanProgress+"%"),n&&(n.textContent=Math.round(i.scanProgress)+"%");const s=Math.min(5,Math.floor(i.scanProgress/100*5));document.querySelectorAll(".xs-ds").forEach((o,l)=>{o.classList.remove("done","act");const c=o.querySelector(".xs-ds-ic");if(l<s){if(o.classList.add("done"),c&&(c.textContent="✓"),!o.querySelector(".xs-ds-v")){const d=document.createElement("span");d.className="xs-ds-v",d.textContent=70+Math.round(Math.sin(l*12.9898)*13)+"%",o.appendChild(d)}}else l===s?(o.classList.add("act"),c&&(c.textContent="⟳")):c&&(c.textContent="○")}),i.scanProgress>=100&&(clearInterval(Un),i.scanning=!1,i.scanComplete=!0,r&&(r.classList.remove("pulse"),r.classList.add("done")),e())},90)}function Fl(i,e,t){const n=document.getElementById("xeWrap");if(!n)return;n.querySelectorAll("[data-expl-body]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.explBody;if(i.body===o)return;i.body=o;const l=o==="moon"?ps:ms;i.selectedSiteId=l[0].id,i.selectedAnalogId=null,i.scanning=!1,i.scanComplete=!1,i.scanProgress=0,Un&&clearInterval(Un),e()})}),n.querySelectorAll("[data-site]").forEach(a=>{a.addEventListener("click",()=>{i.selectedSiteId!==a.dataset.site&&(i.selectedSiteId=a.dataset.site,i.selectedAnalogId=null,i.scanning=!1,i.scanComplete=!1,i.scanProgress=0,Un&&clearInterval(Un),e())})}),n.querySelectorAll("[data-analog]").forEach(a=>{a.addEventListener("click",()=>{i.selectedAnalogId=a.dataset.analog;const o=document.getElementById("xDetail");if(o){const d=(i.body==="moon"?ps:ms).find(p=>p.id===i.selectedSiteId),u=(Fc[d==null?void 0:d.id]||[]).find(p=>p.id===i.selectedAnalogId);o.innerHTML=Bc(d,u)}n.querySelectorAll("[data-analog]").forEach(c=>c.classList.toggle("selected",c.dataset.analog===i.selectedAnalogId));const l=n.querySelector(".xe-right");if(l&&!document.getElementById("xConfirm")){const c=document.createElement("button");c.id="xConfirm",c.className="btn btn-primary xe-confirm",c.textContent="CONFIRM ANALOG → BUILD ›",c.addEventListener("click",()=>t(i)),l.insertBefore(c,document.getElementById("xDetail").nextSibling)}})});const r=document.getElementById("xScanBtn");r&&r.addEventListener("click",()=>{if(i.scanning)return;r.textContent="⟳ SCANNING…",r.disabled=!0;const a=n.querySelector(".xe-center"),o=a==null?void 0:a.querySelector(".xe-prescan");o&&(o.outerHTML=kc(0,!1)),Qg(i,()=>{r.textContent="🔁 RE-SCAN",r.disabled=!1,e()})});const s=document.getElementById("xConfirm");s&&s.addEventListener("click",()=>t(i))}const kt={habitat:{id:"habitat",name:"Core Habitat",icon:"⛺",color:"#5da7ef",desc:"Provides shelter for crew. Consumes power/water.",cost:400,stats:{shelter:8,power:-15,water:-10,food:-5,o2:-2,thermal:5,shielding:10,medical:0}},solar:{id:"solar",name:"Solar Array",icon:"☀️",color:"#f4ad3f",desc:"Generates power during the day.",cost:150,stats:{shelter:0,power:25,water:0,food:0,o2:0,thermal:0,shielding:0,medical:0}},water_extractor:{id:"water_extractor",name:"Ice Extractor",icon:"💧",color:"#50e3c2",desc:"Extracts subsurface water/ice. Consumes power.",cost:250,stats:{shelter:0,power:-10,water:30,food:0,o2:0,thermal:0,shielding:0,medical:0}},greenhouse:{id:"greenhouse",name:"Greenhouse",icon:"🌱",color:"#5faa90",desc:"Produces food and recycles air.",cost:300,stats:{shelter:0,power:-5,water:-15,food:20,o2:10,thermal:0,shielding:0,medical:0}},battery:{id:"battery",name:"Battery Bank",icon:"🔋",color:"#e2b15e",desc:"Stores excess power for night operations.",cost:120,stats:{shelter:0,power:0,water:0,food:0,o2:0,thermal:0,shielding:0,medical:0,storePower:100}},tank:{id:"tank",name:"Water Tank",icon:"🛢️",color:"#6da8c8",desc:"Stores excess water for emergencies.",cost:100,stats:{shelter:0,power:0,water:0,food:0,o2:0,thermal:0,shielding:0,medical:0,storeWater:200}},o2_gen:{id:"o2_gen",name:"O2 System",icon:"💨",color:"#88aacc",desc:"Extracts oxygen via ISRU (Sabatier/MOXIE).",cost:200,stats:{shelter:0,power:-20,water:0,food:0,o2:30,shielding:0,thermal:0,medical:0}},shielding:{id:"shielding",name:"Regolith Shield",icon:"🛡️",color:"#998877",desc:"Critical radiation protection for crew.",cost:150,stats:{shelter:0,power:0,water:0,food:0,o2:0,shielding:50,thermal:10,medical:0}},thermal:{id:"thermal",name:"Thermal Control",icon:"🌡️",color:"#dd5555",desc:"Active heating/cooling for extreme environments.",cost:100,stats:{shelter:0,power:-15,water:0,food:0,o2:0,shielding:0,thermal:40,medical:0}},medbay:{id:"medbay",name:"Medical Bay",icon:"⚕️",color:"#ee7788",desc:"Healthcare and emergency response.",cost:350,stats:{shelter:0,power:-10,water:-5,food:0,o2:0,shielding:0,thermal:0,medical:20}}},gs=12,go=8,On={initialBudget:4e3,crewTarget:24,grid:Array(go).fill(null).map(()=>Array(gs).fill(null)),selectedCell:null,activeTool:"solar",hoverOption:null};On.grid[3][5]={id:"b1",buildingId:"habitat"};On.grid[3][6]={id:"b2",buildingId:"habitat"};function ur(i){let e={powerGen:0,powerUse:0,waterGen:0,waterUse:0,foodGen:0,foodUse:0,shelter:0,storageP:0,storageW:0,o2Gen:0,o2Use:0,thermalGen:0,shieldingGen:0,medGen:0,cost:0};for(let t=0;t<go;t++)for(let n=0;n<gs;n++){const r=i.grid[t][n];if(r&&kt[r.buildingId]){const s=kt[r.buildingId];s.stats.power>0?e.powerGen+=s.stats.power:e.powerUse-=s.stats.power,s.stats.water>0?e.waterGen+=s.stats.water:e.waterUse-=s.stats.water,s.stats.food>0?e.foodGen+=s.stats.food:e.foodUse-=s.stats.food,s.stats.o2>0?e.o2Gen+=s.stats.o2:e.o2Use-=s.stats.o2||0,e.shelter+=s.stats.shelter||0,e.thermalGen+=s.stats.thermal||0,e.shieldingGen+=s.stats.shielding||0,e.medGen+=s.stats.medical||0,s.stats.storePower&&(e.storageP+=s.stats.storePower),s.stats.storeWater&&(e.storageW+=s.stats.storeWater),e.cost+=s.cost}}return e}const Hc=[{key:"shelter",label:"SHELTER CAPACITY",unit:"caps",color:"#5da7ef"},{key:"power",label:"POWER GENERATION",unit:"kW",color:"#f4ad3f"},{key:"storageP",label:"POWER STORAGE",unit:"kWh",color:"#e2b15e"},{key:"water",label:"WATER SUPPLY",unit:"L/d",color:"#50e3c2"},{key:"storageW",label:"WATER STORAGE",unit:"L",color:"#6da8c8"},{key:"food",label:"FOOD PRODUCTION",unit:"kg/d",color:"#5faa90"},{key:"o2",label:"O2 GENERATION",unit:"units",color:"#88aacc"},{key:"thermal",label:"THERMAL CONTROL",unit:"units",color:"#dd5555"},{key:"shielding",label:"RADIATION SHIELDING",unit:"units",color:"#998877"},{key:"med",label:"MEDICAL CAPACITY",unit:"beds",color:"#ee7788"}];function Gc(i,e){return{shelter:{val:i.shelter,req:e},power:{val:i.powerGen,req:i.powerUse+e*2},storageP:{val:i.storageP,req:Math.round((i.powerUse+e*2)*.5)},water:{val:i.waterGen,req:i.waterUse+e*5},storageW:{val:i.storageW,req:Math.round((i.waterUse+e*5)*2)},food:{val:i.foodGen,req:i.foodUse+e*2},o2:{val:i.o2Gen,req:e*2},thermal:{val:i.thermalGen,req:e*3},shielding:{val:i.shieldingGen,req:e*4},med:{val:i.medGen,req:Math.ceil(e/10)*10}}}function ev(i){return Hc.map(e=>{const t=i[e.key],n=Math.min(100,Math.max(0,t.val/(t.req||1)*100)),s=t.val<t.req?"var(--amber)":e.color;return`
      <div class="bld-res-bar" data-stat="${e.key}">
        <div class="bld-res-hd">
          <span>${e.label}</span>
          <span class="stat-val" style="color:${s}">${t.val} / ${t.req} ${e.unit}</span>
        </div>
        <div class="bld-res-trk">
          <div class="bld-res-fill" style="width:${n}%;background:${s}"></div>
          ${t.req>0?'<div class="bld-res-target" style="left:100%"></div>':""}
        </div>
      </div>
    `}).join("")}function Vc(i){if(!i.selectedCell)return"";const{r:e,c:t}=i.selectedCell,n=i.grid[e][t];if(!n||!kt[n.buildingId])return"";const r=kt[n.buildingId];return`
    <div class="bld-tool-info" style="margin-bottom:10px;border:1px solid #28445e;background:#061320;padding:8px 10px;border-radius:3px;">
      <div class="kicker" style="display:flex;justify-content:space-between;">
        <span>TILE [${e}, ${t}]</span>
        <span style="color:${r.color}">${r.name.toUpperCase()}</span>
      </div>
      <div class="bld-b-hd" style="display:flex;align-items:center;gap:8px;padding:4px 0;">
        <span style="font-size:18px;">${r.icon}</span>
        <div><strong style="font-size:10px;color:#d5ecff;">${r.name}</strong> <small style="color:#6d8aa0;display:block;font-size:8px;">${r.desc}</small></div>
      </div>
      <button class="btn bld-btn-demolish" id="btnDemolish" style="padding:5px 8px;font-size:8px;margin-top:4px;">DEMOLISH (+${Math.floor(r.cost*.5)} M$ REFUND)</button>
    </div>
  `}function Wc(i){const e=ur(i),t=i.initialBudget-e.cost,n=i.crewTarget,r=Gc(e,n);let s="";for(let l=0;l<go;l++)for(let c=0;c<gs;c++){const d=i.grid[l][c],f=i.selectedCell&&i.selectedCell.r===l&&i.selectedCell.c===c;if(d&&kt[d.buildingId]){const u=kt[d.buildingId];s+=`<div class="bld-cell filled ${f?"selected":""}" data-r="${l}" data-c="${c}" style="border-color:${u.color}">
          <span class="bld-cell-icon">${u.icon}</span>
        </div>`}else s+=`<div class="bld-cell empty ${f?"selected":""}" data-r="${l}" data-c="${c}"></div>`}let a="";for(const l in kt){const c=kt[l],d=t>=c.cost,f=i.activeTool===l;a+=`
      <button class="bld-opt-card ${d?"":"locked"} ${f?"active-tool":""}" data-build="${l}">
        <div class="bld-opt-top">
          <span class="bld-opt-ic">${c.icon}</span>
          <div class="bld-opt-name">
            <strong>${c.name}</strong>
            ${f?'<span class="tool-badge">ACTIVE</span>':""}
          </div>
          <div class="bld-opt-cost ${d?"":"red"}">${c.cost} M$</div>
        </div>
        <div class="bld-opt-stats" style="flex-wrap: wrap;">
          ${c.stats.power!==0?`<span style="color:${c.stats.power>0?"#50e3c2":"#f5a623"}">⚡ ${c.stats.power>0?"+":""}${c.stats.power}</span>`:""}
          ${c.stats.water!==0?`<span style="color:${c.stats.water>0?"#5da7ef":"#f5a623"}">💧 ${c.stats.water>0?"+":""}${c.stats.water}</span>`:""}
          ${c.stats.food!==0?`<span style="color:${c.stats.food>0?"#5faa90":"#f5a623"}">🌱 ${c.stats.food>0?"+":""}${c.stats.food}</span>`:""}
          ${c.stats.o2!==0?`<span style="color:${c.stats.o2>0?"#88aacc":"#f5a623"}">💨 ${c.stats.o2>0?"+":""}${c.stats.o2}</span>`:""}
          ${c.stats.thermal!==0?`<span style="color:#dd5555">🌡️ +${c.stats.thermal}</span>`:""}
          ${c.stats.shielding!==0?`<span style="color:#998877">🛡️ +${c.stats.shielding}</span>`:""}
          ${c.stats.medical!==0?`<span style="color:#ee7788">⚕️ +${c.stats.medical}</span>`:""}
          ${c.stats.shelter!==0?`<span>⛺ +${c.stats.shelter}</span>`:""}
          ${c.stats.storePower?`<span style="color:#e2b15e">🔋 +${c.stats.storePower}</span>`:""}
          ${c.stats.storeWater?`<span style="color:#6da8c8">🛢️ +${c.stats.storeWater}</span>`:""}
        </div>
      </button>
    `}const o=Object.values(r).every(l=>l.val>=l.req)&&t>=0;return`<div class="bld-layout" id="bldWrap">
    <!-- LEFT PANEL -->
    <div class="bld-left hud-card">
      <div class="kicker">MISSION CONSTRAINTS</div>
      
      <div class="bld-input-group">
        <label>INITIAL BUDGET (M$)</label>
        <input type="number" id="inpBudget" value="${i.initialBudget}" min="500" max="10000" step="100">
        <div class="bld-rem ${t<0?"red":""}">Remaining: <strong id="lblRemBudget">${t} M$</strong></div>
      </div>
      
      <div class="bld-input-group">
        <label>MISSION CREW TARGET</label>
        <input type="number" id="inpCrew" value="${n}" min="4" max="100" step="2">
        <div class="bld-rem">Defines base power/water/O2 demand</div>
      </div>

      <div class="kicker" style="margin-top: 14px;">SETTLEMENT BALANCE</div>
      
      <div class="bld-res-group" id="bldResGroup">
        ${ev(r)}
      </div>
      
      <div class="bld-status-box ${o?"ok":"warn"}" id="bldStatusBox" style="margin-top:auto">
        <strong id="bldStatusTitle">${o?"SYSTEMS NOMINAL":"SYSTEMS CRITICAL"}</strong>
        <p id="bldStatusDesc">${o?"Settlement can support the target crew.":"Resources insufficient for mission target."}</p>
      </div>
      
      <button class="btn btn-primary" id="btnConfirmBuild" style="width:100%; margin-top:8px">CONFIRM SETTLEMENT →</button>
    </div>

    <!-- CENTER PANEL -->
    <div class="bld-center hud-card">
      <div class="bld-center-hd">
        <div>
          <div class="kicker">SETTLEMENT TOPOLOGY</div>
          <p style="font-size: 10px; color: #728c9f; margin: 3px 0 0;">Pick any tool on the right, then click grid cells to stamp modules in real time.</p>
        </div>
        <div class="bld-grid-legend">
          <span>⛺ Habitat</span>
          <span>☀️ Solar</span>
          <span>💧 Water</span>
          <span>🌱 Food</span>
        </div>
      </div>
      <div class="bld-grid-wrap">
        <div class="bld-grid" id="bldGrid" style="grid-template-columns: repeat(${gs}, 1fr);">
          ${s}
        </div>
      </div>
    </div>

    <!-- RIGHT PANEL -->
    <div class="bld-right hud-card" id="bldRightPanel">
      <div id="bldInspectorSlot">${Vc(i)}</div>
      <div class="kicker" style="display:flex;justify-content:space-between;align-items:center;">
        <span>BUILD PALETTE</span>
        <span style="font-size:7px;color:#50e3c2;">CLICK TOOL TO STAMP</span>
      </div>
      <div class="bld-options-list" id="bldOptionsList">
        ${a}
      </div>
    </div>
  </div>`}const tv=`
.bld-layout { display: grid; grid-template-columns: 280px 1fr 300px; gap: 10px; min-height: 100%; padding-bottom: 50px; }

.bld-left, .bld-center, .bld-right { display: flex; flex-direction: column; overflow-y: auto; padding: 14px; background: rgba(5,14,24,0.95); border: 1px solid #1a2d3d; will-change: scroll-position; }
.bld-left::-webkit-scrollbar, .bld-center::-webkit-scrollbar, .bld-right::-webkit-scrollbar { width: 3px; }
.bld-left::-webkit-scrollbar-thumb, .bld-center::-webkit-scrollbar-thumb, .bld-right::-webkit-scrollbar-thumb { background: #1d3344; }

/* Left */
.bld-input-group { margin: 6px 0 4px; padding: 8px 10px; background: #06111a; border: 1px solid #233748; }
.bld-input-group label { display: block; font: 600 8px var(--mono); color: #5a7b92; letter-spacing: 0.5px; margin-bottom: 4px; }
.bld-input-group input { width: 100%; background: #040c14; border: 1px solid #35566f; color: #a5d3f5; font: 700 15px var(--mono); padding: 5px 8px; margin-bottom: 4px; outline: none; }
.bld-input-group input:focus { border-color: #5da7ef; }
.bld-rem { font: 8px var(--mono); color: #4e6a7e; }
.bld-rem strong { font-size: 11px; color: #50e3c2; }
.bld-rem.red strong { color: var(--red); }

.bld-res-group { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
.bld-res-bar { display: flex; flex-direction: column; gap: 3px; }
.bld-res-hd { display: flex; justify-content: space-between; font: 600 8px var(--mono); color: #728c9f; }
.bld-res-trk { height: 5px; background: #14212b; position: relative; border-radius: 2px; }
.bld-res-fill { height: 100%; border-radius: 2px; }
.bld-res-target { position: absolute; top: -2px; bottom: -2px; width: 2px; background: #fff; z-index: 2; transform: translateX(-50%); }

.bld-status-box { padding: 10px; border: 1px solid; text-align: center; }
.bld-status-box.ok { border-color: #2a5a40; background: rgba(10,30,20,0.6); color: var(--green); }
.bld-status-box.warn { border-color: #6a3030; background: rgba(30,10,10,0.6); color: var(--red); }
.bld-status-box strong { font: 700 11px var(--mono); letter-spacing: 1px; display: block; margin-bottom: 3px; }
.bld-status-box p { font: 8px var(--mono); opacity: 0.8; margin: 0; }

/* Center Grid */
.bld-center-hd { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 15px;}
.bld-grid-legend { display: flex; gap: 8px; font: 700 8px var(--mono); color: #506a7c; flex-shrink: 0;}
.bld-grid-wrap { flex: 1; display: flex; align-items: center; justify-content: center; background: #040c14; border: 1px solid #101d29; border-radius: 4px; padding: 16px; }
.bld-grid { display: grid; gap: 3px; width: 100%; max-width: 600px; aspect-ratio: 12/8; }
.bld-cell { background: #071522; border: 1px solid #1a2f42; border-radius: 3px; cursor: pointer; display: flex; align-items: center; justify-content: center; position: relative; user-select: none; }
.bld-cell:hover { background: #0d2338; border-color: #3b658a; }
.bld-cell.selected { background: #12314e; border-color: #5da7ef; }
.bld-cell.filled { background: #081a28; border-width: 2px; }
.bld-cell-icon { font-size: 19px; pointer-events: none; }

/* Right */
.bld-options-list { display: flex; flex-direction: column; gap: 5px; margin-top: 6px; }
.bld-opt-card { display: flex; flex-direction: column; gap: 4px; padding: 8px 10px; background: #05101a; border: 1px solid #1f364a; text-align: left; cursor: pointer; border-radius: 3px; }
.bld-opt-card:hover:not(.locked) { border-color: #4a8ec4; background: #081a29; }
.bld-opt-card.active-tool { border-color: #50e3c2 !important; background: #07202c !important; }
.bld-opt-card.locked { opacity: 0.45; cursor: not-allowed; border-color: #302020; }
.bld-opt-top { display: flex; align-items: center; gap: 7px; }
.bld-opt-ic { font-size: 15px; }
.bld-opt-name { flex: 1; font: 600 10px var(--mono); color: #b8d8f0; display: flex; align-items: center; gap: 5px; }
.tool-badge { font: 700 7px var(--mono); color: #50e3c2; background: rgba(80,227,194,0.12); padding: 1px 3px; border-radius: 2px; border: 1px solid rgba(80,227,194,0.4); }
.bld-opt-cost { font: 700 10px var(--mono); color: var(--green); }
.bld-opt-cost.red { color: var(--red); }
.bld-opt-stats { display: flex; gap: 6px; font: 600 8px var(--mono); color: #627b8e; padding-top: 4px; border-top: 1px solid #162838; }

.bld-btn-demolish { background: rgba(60,20,20,0.6) !important; border-color: #8c3b3b !important; color: #e58585 !important; width: 100%; cursor: pointer; }
.bld-btn-demolish:hover { background: rgba(90,30,30,0.8) !important; }

@media(max-width:1000px){ .bld-layout { grid-template-columns: 1fr 1fr; } .bld-center { grid-column: 1/-1; order: -1; min-height: 280px; } }
`;let Bl=!1;function nv(){if(Bl)return;const i=document.createElement("style");i.id="build-css",i.textContent=tv,document.head.appendChild(i),Bl=!0}function or(i,e){const t=ur(e),n=e.initialBudget-t.cost,r=e.crewTarget,s=Gc(t,r),a=i.querySelector("#lblRemBudget");a&&(a.textContent=n+" M$",a.parentElement.className="bld-rem "+(n<0?"red":"")),Hc.forEach(u=>{const p=i.querySelector(`.bld-res-bar[data-stat="${u.key}"]`);if(p){const g=s[u.key],v=Math.min(100,Math.max(0,g.val/(g.req||1)*100)),h=g.val<g.req?"var(--amber)":u.color,M=p.querySelector(".stat-val"),x=p.querySelector(".bld-res-fill");M&&(M.textContent=`${g.val} / ${g.req} ${u.unit}`,M.style.color=h),x&&(x.style.width=v+"%",x.style.background=h)}});const o=Object.values(s).every(u=>u.val>=u.req)&&n>=0,l=i.querySelector("#bldStatusBox"),c=i.querySelector("#bldStatusTitle"),d=i.querySelector("#bldStatusDesc");l&&c&&d&&(l.className="bld-status-box "+(o?"ok":"warn"),c.textContent=o?"SYSTEMS NOMINAL":"SYSTEMS CRITICAL",d.textContent=o?"Settlement can support the target crew.":"Resources insufficient for mission target."),i.querySelectorAll(".bld-opt-card").forEach(u=>{const p=kt[u.dataset.build];if(p){const g=n>=p.cost;u.classList.toggle("locked",!g);const v=u.querySelector(".bld-opt-cost");v&&(v.className="bld-opt-cost "+(g?"":"red")),u.classList.toggle("active-tool",e.activeTool===p.id);const m=u.querySelector(".bld-opt-name");m&&(m.innerHTML=`<strong>${p.name}</strong>${e.activeTool===p.id?'<span class="tool-badge">ACTIVE</span>':""}`)}});const f=i.querySelector("#bldInspectorSlot");f&&(f.innerHTML=Vc(e),$c(i,e))}function qa(i,e){if(i)if(e&&kt[e.buildingId]){const t=kt[e.buildingId];i.className="bld-cell filled",i.style.borderColor=t.color,i.innerHTML=`<span class="bld-cell-icon">${t.icon}</span>`}else i.className="bld-cell empty",i.style.borderColor="",i.innerHTML=""}function $c(i,e){const t=i.querySelector("#btnDemolish");t&&e.selectedCell&&t.addEventListener("click",n=>{n.stopPropagation();const{r,c:s}=e.selectedCell;e.grid[r][s]=null;const a=i.querySelector(`.bld-cell[data-r="${r}"][data-c="${s}"]`);qa(a,null),or(i,e)})}function kl(i,e,t){const n=document.getElementById("bldWrap");if(!n)return;const r=n.querySelector("#inpBudget");r&&r.addEventListener("input",o=>{i.initialBudget=parseInt(o.target.value,10)||0,or(n,i)});const s=n.querySelector("#inpCrew");s&&s.addEventListener("input",o=>{i.crewTarget=parseInt(o.target.value,10)||24,or(n,i)});const a=n.querySelector("#btnConfirmBuild");a&&a.addEventListener("click",t),n.querySelectorAll(".bld-opt-card").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.build;if(i.activeTool=l,i.selectedCell){const{r:c,c:d}=i.selectedCell,f=kt[l],u=ur(i);if(i.initialBudget-u.cost>=f.cost){i.grid[c][d]={id:Date.now().toString(),buildingId:l};const g=n.querySelector(`.bld-cell[data-r="${c}"][data-c="${d}"]`);qa(g,i.grid[c][d])}}or(n,i)})}),n.querySelectorAll(".bld-cell").forEach(o=>{o.addEventListener("click",()=>{const l=parseInt(o.dataset.r,10),c=parseInt(o.dataset.c,10);if(n.querySelectorAll(".bld-cell.selected").forEach(d=>d.classList.remove("selected")),o.classList.add("selected"),i.selectedCell={r:l,c},i.activeTool&&kt[i.activeTool]){const d=kt[i.activeTool],f=ur(i),u=i.initialBudget-f.cost;!i.grid[l][c]&&u>=d.cost&&(i.grid[l][c]={id:Date.now().toString(),buildingId:i.activeTool},qa(o,i.grid[l][c]))}or(n,i)})}),$c(n,i)}const vo=[{id:"env",label:"ENVIRONMENT",icon:"🌡️",color:"#dd5555"},{id:"power",label:"POWER GRID",icon:"⚡",color:"#f4ad3f"},{id:"water",label:"WATER SUPPLY",icon:"💧",color:"#50e3c2"},{id:"o2",label:"O2 / ATMOSPHERE",icon:"💨",color:"#88aacc"},{id:"food",label:"FOOD PRODUCTION",icon:"🌱",color:"#5faa90"},{id:"thermal",label:"THERMAL CONTROL",icon:"🛡️",color:"#998877"},{id:"medical",label:"MEDICAL",icon:"⚕️",color:"#ee7788"},{id:"crew",label:"CREW CAPACITY",icon:"👥",color:"#5da7ef"}],zl={heat:["env","thermal","water","power","food","o2","crew"],water:["water","food","o2","crew"],power:["power","water","o2","thermal","food","crew"],storm:["env","power","thermal","water","food","crew"]};function Xc(i,e,t,n){const r=i-1,s=e.powerUse+t*2,a=e.waterUse+t*5,o=e.foodUse+t*2,l=t*2,c=t*3,d=Math.ceil(t/10)*10,f=(b,y)=>Math.min(100,Math.max(0,y>0?b/y*100:100));let u=f(e.powerGen,s),p=f(e.waterGen,a),g=f(e.foodGen,o),v=f(e.o2Gen,l),m=f(e.thermalGen,c),h=f(e.medGen,d),M=Math.min(100,e.shieldingGen/(t*4)*100),x=24+r*.4;const E=r*.6;u=Math.max(5,u-E*.35),p=Math.max(5,p-E*.5),g=Math.max(5,g-E*.4),v=Math.max(5,v-E*.3),m=Math.max(5,m-E*.2),h=Math.max(5,h-E*.1);const L=n?new Set(zl[n]||[]):new Set;if(n==="heat"){const b=Math.min(r*2.2,18);x+=b+5,L.has("env")&&(m=Math.max(5,m-b*1.1)),L.has("water")&&(p=Math.max(5,p-b*1.4)),L.has("power")&&(u=Math.max(5,u-b*.5)),L.has("food")&&(g=Math.max(5,g-Math.max(0,p<40?(40-p)*.55:0))),L.has("o2")&&(v=Math.max(5,v-b*.4))}if(n==="water"){const b=Math.min(r*3,60);L.has("water")&&(p=Math.max(5,p-b)),L.has("food")&&(g=Math.max(5,g-b*.65)),L.has("o2")&&(v=Math.max(5,v-b*.3))}if(n==="power"){const b=Math.min(r*2.5,50);L.has("power")&&(u=Math.max(5,u-b)),L.has("water")&&(p=Math.max(5,p-b*.7)),L.has("o2")&&(v=Math.max(5,v-b*.6)),L.has("thermal")&&(m=Math.max(5,m-b*.8)),L.has("food")&&(g=Math.max(5,g-b*.4))}if(n==="storm"){const b=Math.min(r*2.8,45);x-=8,L.has("power")&&(u=Math.max(5,u-b*.9)),L.has("thermal")&&(m=Math.max(5,m-b*1)),L.has("water")&&(p=Math.max(5,p-b*.6)),L.has("food")&&(g=Math.max(5,g-b*.5))}const A=(u+p+g+v+m)/5,w=Math.max(0,Math.min(100,A-(A<50?(50-A)*.5:0))),N={};return[["env",x,70,45],["power",u,60,35],["water",p,60,35],["o2",v,60,35],["food",g,60,30],["thermal",m,55,30],["medical",h,60,30],["crew",w,60,30]].forEach(([b,y,P,z])=>{b==="env"?N[b]=y>80?"critical":y>60?"warning":"nominal":N[b]=y<z?"critical":y<P?"warning":"nominal"}),{day:i,temp:Math.round(x*10)/10,power:Math.round(u),water:Math.round(p),food:Math.round(g),o2:Math.round(v),thermal:Math.round(m),medical:Math.round(h),shielding:Math.round(M),crew:Math.round(w),status:N,cascadeNodes:n?zl[n]:[]}}function iv(i,e,t){return Array.from({length:30},(n,r)=>Xc(r+1,i,e,t))}const Xi={heat:[{node:"env",msg:"Surface temperature rises beyond nominal range."},{node:"thermal",msg:"Thermal control system overwhelmed → crew space heating up."},{node:"water",msg:"Water demand spikes for cooling → reserve depletes faster."},{node:"power",msg:"Solar efficiency drops under thermal stress."},{node:"food",msg:"Greenhouse irrigation strained as water thins → crop yield falls."},{node:"o2",msg:"O2 generation partially hampered by power degradation."},{node:"crew",msg:"Multiple systems constrained → crew operational capacity exhausted."}],water:[{node:"water",msg:"Water supply directly curtailed — reserve falling."},{node:"food",msg:"Greenhouse irrigation cut → food production collapses."},{node:"o2",msg:"Atmospheric recycling hampered without water input."},{node:"crew",msg:"Critical life-support margins breached → crew at risk."}],power:[{node:"power",msg:"Power generation falls — 30% below demand."},{node:"water",msg:"Ice extractor offline without power → water stops flowing."},{node:"thermal",msg:"Active heating/cooling disabled → habitat temperature swings."},{node:"o2",msg:"O2 electrolysis system offline → atmosphere thins."},{node:"food",msg:"Greenhouse lights and pumps off → food production drops."},{node:"crew",msg:"Settlement falls below survivable thresholds."}],storm:[{node:"env",msg:"Dust/ice storm sweeps through the analog site."},{node:"power",msg:"Solar panels obscured → power generation crashes."},{node:"thermal",msg:"Extreme temperature drop detected outside habitat."},{node:"water",msg:"Ice extraction suspended in storm conditions."},{node:"food",msg:"Greenhouse pressure differential drops → yield impact."},{node:"crew",msg:"Crew confined to shelter — operational capacity minimal."}]};function qc(i){return i==="critical"?"var(--red)":i==="warning"?"var(--amber)":"var(--green)"}function rv(i){return i==="critical"?"CRITICAL":i==="warning"?"CAUTION":"NOMINAL"}function Pn(i,e,t,n,r,s){const a=Math.min(100,Math.max(0,t)),o=qc(r);return`
    <div class="sim-tel-card ${r}">
      <div class="sim-tel-head">
        <span>${e} ${i}</span>
        <span style="color:${o};font:700 8px var(--mono)">${rv(r)}</span>
      </div>
      <div class="sim-tel-val" style="color:${o}">${t}${n}</div>
      <div class="sim-bar-trk"><div class="sim-bar-fill" style="width:${a}%;background:${o}"></div></div>
      <div class="sim-tel-sub">${s}</div>
    </div>
  `}function sr(i,e,t){if(!i.length)return"";const n=i.map(l=>l[e]),r=Math.min(...n),s=Math.max(...n),a=Math.max(s-r,1);return`<polyline points="${n.map((l,c)=>{const d=c/(n.length-1)*760+20,f=90-(l-r)/a*70;return`${d},${f}`}).join(" ")}" fill="none" stroke="${t}" stroke-width="2" stroke-linejoin="round"/>`}function sv(i,e){if(!i||!Xi[i])return`<div class="sim-cascade-empty">
      <span style="font-size:22px;opacity:.4">⚡</span>
      <p>Inject an event to reveal the cascade failure chain.</p>
    </div>`;const t=Xi[i],n={};return vo.forEach(r=>n[r.id]=r),t.map((r,s)=>{const a=n[r.node]||{},o=e.status[r.node]||"nominal",l=qc(o);return`
      <div class="sim-chain-step ${o}" style="--step-i:${s}">
        <div class="sim-chain-icon" style="border-color:${l};color:${l}">${a.icon||"●"}</div>
        <div class="sim-chain-body">
          <div class="sim-chain-label" style="color:${l}">${(a.label||r.node).toUpperCase()}</div>
          <div class="sim-chain-msg">${r.msg}</div>
        </div>
        ${o==="critical"?'<span class="sim-chain-badge critical">CRITICAL</span>':o==="warning"?'<span class="sim-chain-badge warning">CAUTION</span>':""}
      </div>
      ${s<t.length-1?'<div class="sim-chain-arrow">↓</div>':""}
    `}).join("")}function Yc(i,e){const t=ur(i),n=i.crewTarget,r=Xc(e.day,t,n,e.activeEvent),s=iv(t,n,e.activeEvent),a=Object.values(r.status).includes("critical"),o=!a&&Object.values(r.status).includes("warning"),l=`
    <div class="sim-build-row">
      <span>👥 Crew: <b>${n}</b></span>
      <span>⚡ Power: <b>${t.powerGen}/${t.powerUse+n*2} kW</b></span>
      <span>💧 Water: <b>${t.waterGen}/${t.waterUse+n*5} L/d</b></span>
      <span>🌱 Food: <b>${t.foodGen}/${t.foodUse+n*2} kg/d</b></span>
      <span>💨 O2: <b>${t.o2Gen}/${n*2}</b></span>
      <span style="color:${a?"var(--red)":o?"var(--amber)":"var(--green)"}">
        ${a?"⚠ CRITICAL STATE":o?"⚠ CAUTION":"● NOMINAL"}
      </span>
    </div>
  `,d=[{id:"heat",code:"T↑",label:"Heat Spike",detail:"+5°C surface / 7 days",color:"#dd5555"},{id:"water",code:"H₂O↓",label:"Water Shortage",detail:"−30% extraction rate",color:"#50e3c2"},{id:"power",code:"E↓",label:"Power Failure",detail:"−30% generation",color:"#f4ad3f"},{id:"storm",code:"🌪",label:"Dust Storm",detail:"Solar blocked / cold front",color:"#88aacc"}].map(u=>`
    <button class="sim-evt-btn ${e.activeEvent===u.id?"active":""}" data-event="${u.id}"
      style="${e.activeEvent===u.id?`border-color:${u.color};background:rgba(0,0,0,0.6)`:""}">
      <span class="sim-evt-code" style="color:${u.color}">${u.code}</span>
      <div>
        <strong>${u.label}</strong>
        <small>${u.detail}</small>
      </div>
      <span class="sim-evt-arrow" style="color:${u.color}">${e.activeEvent===u.id?"● ON":"+"}</span>
    </button>
  `).join(""),f=`
    <svg viewBox="0 0 800 110" preserveAspectRatio="none" style="width:100%;height:100%">
      <rect width="800" height="110" fill="none"/>
      ${sr(s,"water","#50e3c2")}
      ${sr(s,"food","#5faa90")}
      ${sr(s,"power","#f4ad3f")}
      ${sr(s,"o2","#88aacc")}
      ${sr(s,"thermal","#dd5555")}
      <!-- Day marker -->
      <line x1="${20+(e.day-1)/29*760}" y1="0" x2="${20+(e.day-1)/29*760}" y2="110" 
            stroke="rgba(255,255,255,0.35)" stroke-width="1.5" stroke-dasharray="3 2"/>
    </svg>
  `;return`
  <div class="sim-layout2" id="simWrap">
    <!-- TOP STRIP: build summary -->
    ${l}

    <!-- ROW 1: Chart + Events + Cascade -->
    <div class="sim-row1">
      <!-- Chart panel -->
      <div class="sim-card sim-chart-card">
        <div class="sim-card-hd">
          <div>
            <div class="kicker">SETTLEMENT TELEMETRY / 30-DAY RUN</div>
            <div class="sim-day-lbl">DAY <span id="simDayLbl" style="color:${a?"var(--red)":o?"var(--amber)":"var(--cyan)"}">${e.day}</span> / 30</div>
          </div>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
            <span style="font:8px var(--mono);color:#50e3c2">— Water</span>
            <span style="font:8px var(--mono);color:#5faa90">— Food</span>
            <span style="font:8px var(--mono);color:#f4ad3f">— Power</span>
            <span style="font:8px var(--mono);color:#88aacc">— O2</span>
            <span style="font:8px var(--mono);color:#dd5555">— Thermal</span>
          </div>
        </div>
        <div class="sim-chart-wrap">${f}</div>
        <div class="sim-controls2">
          <button id="simPrev" class="sim-ctl">◀</button>
          <button id="simPlayBtn" class="sim-ctl ${e.running?"active":""}">${e.running?"⏸ PAUSE":"▶ PLAY"}</button>
          <button id="simNext" class="sim-ctl">▶</button>
          <button id="simFast" class="sim-ctl">5×</button>
          <button id="simReset" class="sim-ctl">RESET</button>
          <input id="simScrub" type="range" min="1" max="30" value="${e.day}" style="flex:1;accent-color:var(--cyan);">
        </div>
      </div>

      <!-- Events panel -->
      <div class="sim-card sim-events-card">
        <div class="kicker">EVENT INJECTOR</div>
        <p style="color:#667d90;font-size:8px;line-height:1.5;margin:4px 0 8px;">Inject a stress event to reveal cascading failures. Values are demo model scores.</p>
        <div class="sim-evt-list">${d}</div>
        ${e.activeEvent?`
          <div class="sim-active-note">
            <span style="color:var(--amber)">⚠ ACTIVE:</span>
            ${e.activeEvent.toUpperCase()} shock injected at Day ${e.eventDay||e.day}.
          </div>
        `:'<div class="sim-active-note" style="color:#4e6678">No event active. Start with baseline, then inject a stressor to see cascades.</div>'}
        <button class="btn" id="simClearEvent" style="margin-top:8px;width:100%;display:${e.activeEvent?"block":"none"}">CLEAR EVENT</button>
        <div class="sim-env-block">
          <div class="kicker" style="margin-top:12px">ENVIRONMENT</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px">
            <div class="sim-env-cell"><div class="sim-env-lbl">TEMPERATURE</div><div class="sim-env-val" style="color:${r.status.env==="critical"?"var(--red)":r.status.env==="warning"?"var(--amber)":"var(--text)"}">${r.temp}°C</div></div>
            <div class="sim-env-cell"><div class="sim-env-lbl">ANALOG SITE</div><div class="sim-env-val">ATACAMA</div></div>
            <div class="sim-env-cell"><div class="sim-env-lbl">TARGET</div><div class="sim-env-val">JEZERO / MARS</div></div>
            <div class="sim-env-cell"><div class="sim-env-lbl">SHIELDING</div><div class="sim-env-val">${r.shielding}%</div></div>
          </div>
        </div>
      </div>

      <!-- Cascade chain panel -->
      <div class="sim-card sim-cascade-card">
        <div class="kicker">CASCADE FAILURE CHAIN</div>
        <p style="color:#667d90;font-size:8px;line-height:1.4;margin:4px 0 8px;">
          ${e.activeEvent?`Active path for <b style="color:var(--amber)">${e.activeEvent.toUpperCase()}</b> event — showing how failure propagates:`:"Inject an event to see how failure propagates through the settlement."}
        </p>
        <div class="sim-chain-wrap" id="simChainWrap">
          ${sv(e.activeEvent,r)}
        </div>
        <button class="btn btn-primary" data-nav="trace" style="width:100%;margin-top:10px">OPEN TRACE GRAPH →</button>
      </div>
    </div>

    <!-- ROW 2: Resource telemetry cards -->
    <div class="sim-tel-grid" id="simTelGrid">
      ${Pn("WATER","💧",r.water,"%",r.status.water,"Supply vs demand ratio")}
      ${Pn("FOOD","🌱",r.food,"%",r.status.food,"Production vs demand")}
      ${Pn("POWER","⚡",r.power,"%",r.status.power,"Generation vs load")}
      ${Pn("O2","💨",r.o2,"%",r.status.o2,"Atmospheric integrity")}
      ${Pn("THERMAL","🌡️",r.thermal,"%",r.status.thermal,"Thermal control margin")}
      ${Pn("MEDICAL","⚕️",r.medical,"%",r.status.medical,"Healthcare capacity")}
      ${Pn("SHIELDING","🛡️",r.shielding,"%",r.status.thermal,"Radiation protection")}
      ${Pn("CREW CAP","👥",r.crew,"%",r.status.crew,"Operational capacity")}
    </div>
  </div>`}const av=`
.sim-layout2 { display:flex; flex-direction:column; gap:10px; min-height:100%; padding-bottom:40px; }

.sim-build-row { display:flex; gap:16px; flex-wrap:wrap; align-items:center; padding:8px 12px; background:#061320; border:1px solid #1b3348; font:500 8px var(--mono); color:#7090a8; }
.sim-build-row b { color:#a9d0f0; }

.sim-row1 { display:grid; grid-template-columns:1.6fr 1fr 1fr; gap:10px; }

.sim-card { background:#060f1a; border:1px solid #1a2d3d; padding:12px 14px; display:flex; flex-direction:column; }

/* Chart */
.sim-card-hd { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; gap:10px; }
.sim-day-lbl { font:700 18px var(--mono); margin-top:3px; }
.sim-chart-wrap { flex:1; min-height:110px; background:#03080e; border:1px solid #0f1d2a; border-radius:3px; overflow:hidden; }
.sim-controls2 { display:flex; gap:5px; margin-top:8px; align-items:center; flex-wrap:wrap; }
.sim-ctl { border:1px solid #253845; background:#07111a; color:#83a6c3; padding:5px 8px; font:700 8px var(--mono); cursor:pointer; }
.sim-ctl:hover { border-color:#4a7090; background:#0d2035; }
.sim-ctl.active { border-color:var(--cyan); color:var(--cyan); }

/* Events */
.sim-evt-list { display:flex; flex-direction:column; gap:6px; }
.sim-evt-btn { display:grid; grid-template-columns:32px 1fr auto; gap:8px; align-items:center; padding:9px 10px; border:1px solid #253a4a; background:#05101a; text-align:left; cursor:pointer; }
.sim-evt-btn:hover { border-color:#4a6f8b; background:#081a29; }
.sim-evt-btn.active { background:#0a1f2e; }
.sim-evt-code { font:700 11px var(--mono); text-align:center; }
.sim-evt-btn strong { display:block; font:600 9px var(--mono); color:#b8d0e5; }
.sim-evt-btn small { display:block; font:8px var(--mono); color:#5a7890; margin-top:2px; }
.sim-evt-arrow { font:700 9px var(--mono); }
.sim-active-note { margin-top:8px; font:8px var(--mono); color:#8aacbf; padding:8px; background:#061320; border-left:2px solid var(--amber); line-height:1.5; }
.sim-env-block { margin-top:4px; }
.sim-env-cell { padding:7px 8px; background:#040c14; border:1px solid #162738; }
.sim-env-lbl { font:600 7px var(--mono); color:#4e6a7e; letter-spacing:.5px; }
.sim-env-val { font:700 11px var(--mono); color:#a9cde6; margin-top:2px; }

/* Cascade */
.sim-cascade-empty { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; text-align:center; font:9px var(--mono); color:#4e6a7e; padding:20px; }
.sim-chain-wrap { flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:0; }
.sim-chain-step { display:flex; align-items:flex-start; gap:10px; padding:7px 8px; border-left:2px solid #1d3448; animation:fadeInUp 0.35s ease-out both; animation-delay:calc(var(--step-i) * 0.07s); }
.sim-chain-step.critical { border-left-color:var(--red); background:rgba(255,91,91,0.05); }
.sim-chain-step.warning  { border-left-color:var(--amber); background:rgba(244,173,63,0.05); }
.sim-chain-icon { width:26px; height:26px; border:1px solid; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; flex-shrink:0; }
.sim-chain-label { font:700 8px var(--mono); letter-spacing:.4px; }
.sim-chain-msg { font:8px var(--mono); color:#667d8f; margin-top:2px; line-height:1.5; }
.sim-chain-badge { font:700 7px var(--mono); padding:2px 5px; border-radius:2px; flex-shrink:0; align-self:flex-start; margin-top:2px; }
.sim-chain-badge.critical { background:rgba(255,91,91,.15); color:var(--red); border:1px solid var(--red); }
.sim-chain-badge.warning  { background:rgba(244,173,63,.15); color:var(--amber); border:1px solid var(--amber); }
.sim-chain-arrow { text-align:left; padding-left:12px; font:700 12px var(--mono); color:#2d4a5e; line-height:1; }

/* Telemetry row */
.sim-tel-grid { display:grid; grid-template-columns:repeat(8,1fr); gap:7px; }
.sim-tel-card { padding:10px; background:#060f1a; border:1px solid #1a2d3d; }
.sim-tel-card.critical { border-color:#5a2020; }
.sim-tel-card.warning  { border-color:#5a4020; }
.sim-tel-head { display:flex; justify-content:space-between; font:600 7px var(--mono); color:#5a7a90; margin-bottom:4px; }
.sim-tel-val  { font:700 20px var(--mono); margin:4px 0; }
.sim-bar-trk  { height:4px; background:#0f1d2a; border-radius:2px; }
.sim-bar-fill { height:100%; border-radius:2px; transition:width 0.5s ease; }
.sim-tel-sub  { font:7px var(--mono); color:#4a6278; margin-top:4px; }

@media(max-width:1100px) {
  .sim-row1 { grid-template-columns:1fr 1fr; }
  .sim-cascade-card { grid-column:1/-1; }
  .sim-tel-grid { grid-template-columns:repeat(4,1fr); }
}
@media(max-width:700px) {
  .sim-row1 { grid-template-columns:1fr; }
  .sim-tel-grid { grid-template-columns:repeat(2,1fr); }
}
`;let Hl=!1;function ov(){if(Hl)return;const i=document.createElement("style");i.id="sim-css",i.textContent=av,document.head.appendChild(i),Hl=!0}const be={day:1,running:!1,activeEvent:null,eventDay:null,_ticker:null};function an(){be._ticker&&(clearInterval(be._ticker),be._ticker=null)}function lv(i){an();function e(){const n=document.getElementById("simInner");if(!n)return;n.innerHTML=Yc(i,be);const r=document.getElementById("simStatusChip");r&&(r.textContent=`DAY ${be.day} / 30${be.activeEvent?" ⚠ "+be.activeEvent.toUpperCase():""}`),t()}function t(){var r,s,a,o,l,c,d,f;const n=document.getElementById("simWrap");n&&((r=n.querySelector("#simPlayBtn"))==null||r.addEventListener("click",()=>{be.running=!be.running,be.running?(an(),be._ticker=setInterval(()=>{if(be.day>=30){an(),be.running=!1,e();return}be.day++,e()},600)):an(),e()}),(s=n.querySelector("#simPrev"))==null||s.addEventListener("click",()=>{an(),be.running=!1,be.day=Math.max(1,be.day-1),e()}),(a=n.querySelector("#simNext"))==null||a.addEventListener("click",()=>{an(),be.running=!1,be.day=Math.min(30,be.day+1),e()}),(o=n.querySelector("#simFast"))==null||o.addEventListener("click",()=>{an(),be.running=!1,be.day=Math.min(30,be.day+5),e()}),(l=n.querySelector("#simReset"))==null||l.addEventListener("click",()=>{an(),be.running=!1,be.day=1,be.activeEvent=null,be.eventDay=null,e()}),(c=n.querySelector("#simScrub"))==null||c.addEventListener("input",u=>{an(),be.running=!1,be.day=parseInt(u.target.value,10),e()}),n.querySelectorAll(".sim-evt-btn").forEach(u=>{u.addEventListener("click",()=>{const p=u.dataset.event;an(),be.running=!1,be.activeEvent=be.activeEvent===p?null:p,be.eventDay=be.activeEvent?be.day:null,e()})}),(d=n.querySelector("#simClearEvent"))==null||d.addEventListener("click",()=>{be.activeEvent=null,be.eventDay=null,e()}),(f=n.querySelector('[data-nav="trace"]'))==null||f.addEventListener("click",()=>{const u=document.querySelector('.nav button[data-nav="trace"]');u&&u.click()}))}t()}const jn=[{id:"chen",name:"Sarah Chen",role:"Commander",color:"#5da7ef",initials:"SC",slp:70,fat:22,act:88,wl:78},{id:"tanaka",name:"Yuki Tanaka",role:"Engineer",color:"#50e3c2",initials:"YT",slp:74,fat:20,act:82,wl:72},{id:"robb",name:"Marcus Robb",role:"Geologist",color:"#f4ad3f",initials:"MR",slp:64,fat:12,act:76,wl:65},{id:"diwei",name:"Amara Diwei",role:"Doctor",color:"#ee7788",initials:"AD",slp:70,fat:34,act:71,wl:80},{id:"sharma",name:"Priya Sharma",role:"Life Science",color:"#998877",initials:"PS",slp:88,fat:20,act:90,wl:68},{id:"reeves",name:"Tom Reeves",role:"Crew Member",color:"#88aacc",initials:"TR",slp:88,fat:14,act:85,wl:60}],Fi={selectedId:"chen",scanning:!1};function jc(i,e){const t=Math.min(e-1,29);switch(i){case"heat":return{slp:-(t*.8),fat:+(t*1.2),act:-(t*.5),wl:+(t*1)};case"water":return{slp:-(t*.6),fat:+(t*1.5),act:-(t*1),wl:+(t*.8)};case"power":return{slp:-(t*1),fat:+(t*.9),act:-(t*.7),wl:+(t*1.2)};case"storm":return{slp:-(t*1.2),fat:+(t*1),act:-(t*1.5),wl:+(t*.6)};default:return{slp:0,fat:0,act:0,wl:0}}}function cv(i,e){return{slp:Math.round(Math.max(5,Math.min(100,i.slp+e.slp))),fat:Math.round(Math.max(0,Math.min(100,i.fat+e.fat))),act:Math.round(Math.max(5,Math.min(100,i.act+e.act))),wl:Math.round(Math.max(5,Math.min(100,i.wl+e.wl)))}}function dv(i){const e=jc(be.activeEvent,be.day),t={slp:e.slp*(.85+Math.random()*.3),fat:e.fat*(.85+Math.random()*.3),act:e.act*(.85+Math.random()*.3),wl:e.wl*(.85+Math.random()*.3)};return cv(i,t)}function hv(i){const e=i.reduce((t,n)=>t+(n.slp*.4+(100-n.fat)*.3+n.act*.3),0)/i.length;return Math.round(e)}function uv(i,e,t){const n=i.charCodeAt(0)+i.charCodeAt(1),r=Array.from({length:25},(a,o)=>{const l=40+35*Math.sin((o-6)*Math.PI/12),c=Math.sin(o*n*.37+t*.7)*12;return Math.max(5,Math.min(100,l+c))}),s=jc(e,t);return r.map(a=>Math.max(5,Math.min(100,a+s.act)))}function fv(i,e="#5da7ef"){const r=Math.min(...i),s=Math.max(...i),a=Math.max(s-r,1),o=i.map((c,d)=>{const f=d/(i.length-1)*760,u=100-(c-r)/a*90-5;return`${f},${u}`}).join(" ");i.map((c,d)=>`${d/(i.length-1)*760},100`).join(" ");const l=o+` ${(i.length-1)*(760/(i.length-1))},100 0,100`;return`
    <svg viewBox="0 0 760 100" preserveAspectRatio="none" style="width:100%;height:100%;display:block">
      <defs>
        <linearGradient id="actGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${e}" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="${e}" stop-opacity="0.01"/>
        </linearGradient>
        <radialGradient id="peakGlow" cx="50%" cy="55%" r="35%">
          <stop offset="0%" stop-color="#f4ad3f" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#f4ad3f" stop-opacity="0"/>
        </radialGradient>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="1.8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="760" height="100" fill="url(#peakGlow)"/>
      <polygon points="${l}" fill="url(#actGrad)"/>
      <polyline points="${o}" fill="none" stroke="${e}" stroke-width="2.2"
        stroke-linejoin="round" stroke-linecap="round" filter="url(#lineGlow)"/>
    </svg>`}function jr(i,e,t,n=null,r=null){let s=t,a="NOMINAL";return n!==null&&e<n||r!==null&&e>r?(s="#ff5b5b",a="CRITICAL"):(n!==null&&e<n+20||r!==null&&e>r-15)&&(s="#f4ad3f",a="CAUTION"),`
    <div class="cr-bar-row">
      <div class="cr-bar-label">
        <span>${i}</span>
        <span style="color:${s}">${e}%${a!=="NOMINAL"?" · "+a:""}</span>
      </div>
      <div class="cr-bar-trk">
        <div class="cr-bar-fill" style="width:${e}%;background:${s}"></div>
      </div>
    </div>`}function pv(i,e,t){const n=[];return i.forEach((r,s)=>{const a=jn[s];r.fat>60?n.push({level:"critical",msg:`${a.name}: Fatigue index critical (${r.fat}%)`}):r.fat>45&&n.push({level:"warning",msg:`${a.name}: Fatigue index elevated (${r.fat}%)`}),r.slp<40?n.push({level:"critical",msg:`${a.name}: Sleep quality below threshold (${r.slp}%)`}):r.slp<55&&n.push({level:"warning",msg:`${a.name}: Sleep quality reduced (${r.slp}%)`})}),n}const mv=[{d:"D04",label:"Baseline nominal",color:"#4e6579"},{d:"D07",label:"Fatigue peak",color:"#4e6579"},{d:"D12",label:"Sleep compression",color:"#4e6579"},{d:"D18",label:"Critical stress",color:"#f4ad3f"},{d:"D27",label:"Recovery phase",color:"#4e6579"}],gv=[{id:"heat",icon:"T↑",label:"HEAT EVENT",sub:"Elevates fatigue index"},{id:"water",icon:"H₂O↓",label:"WATER STRESS",sub:"Elevates dehydration"},{id:"power",icon:"E↓",label:"POWER LOSS",sub:"Reduces lighting, mood"},{id:"storm",icon:"🌪",label:"CREW EXPAND",sub:"Reduces crew density / transition"}];function Kc(){const i=be.day,e=be.activeEvent,t=jn.map(d=>dv(d)),n=hv(t),r=jn.find(d=>d.id===Fi.selectedId)||jn[0],s=t[jn.indexOf(r)],a=uv(r.id,e,i),o=pv(t),l=jn.map((d,f)=>{const u=t[f],p=d.id===Fi.selectedId,g=u.fat>60,v=u.slp<40,m=g||v;return`
      <button class="cr-roster-item ${p?"active":""} ${m?"crit":""}"
        data-crew="${d.id}" style="${p?`border-left-color:${d.color}`:""}">
        <div class="cr-avatar" style="background:${d.color}22;border-color:${d.color};color:${d.color}">${d.initials}</div>
        <div class="cr-roster-body">
          <div class="cr-roster-name">${d.name}</div>
          <div class="cr-roster-role">${d.role}</div>
          <div class="cr-roster-stats">
            <span>SLP <b style="color:${u.slp<50?"#ff5b5b":"#78bde8"}">${u.slp}%</b></span>
            <span>FAT <b style="color:${u.fat>50?"#ff5b5b":u.fat>35?"#f4ad3f":"#78bde8"}">${u.fat}%</b></span>
          </div>
        </div>
        ${m?'<span class="cr-alert-dot"></span>':""}
      </button>`}).join(""),c=o.length===0?'<div class="cr-alert-ok"><span style="color:var(--green)">● </span>ALL CREW WITHIN NOMINAL OPERATING PARAMETERS. No alerts at current simulation day.</div>':o.map(d=>`<div class="cr-alert-item ${d.level}">
        <span class="cr-alert-icon">${d.level==="critical"?"⚠":"◆"}</span>
        <span>${d.msg}</span>
      </div>`).join("");return`
  <div class="cr-layout" id="crewWrap">
    <!-- LEFT: Roster -->
    <div class="cr-left">
      <div class="cr-section-hd">CREW ROSTER</div>
      <div class="cr-roster" id="crRoster">
        ${l}
      </div>
      <div class="cr-fleet">
        <div class="cr-fleet-label">FLEET RESILIENCE</div>
        <div class="cr-fleet-score" style="color:${n<40?"var(--red)":n<65?"var(--amber)":"var(--green)"}">
          ${n}<span class="cr-pct">%</span>
        </div>
        <div class="cr-fleet-sub">COMPOSITE SCORE / ALL CREW</div>
      </div>
    </div>

    <!-- CENTER -->
    <div class="cr-center">
      <!-- Member header -->
      <div class="cr-member-hd">
        <div>
          <div class="kicker">SELECTED CREW MEMBER</div>
          <div class="cr-member-title">${r.name} / ${r.role}</div>
        </div>
        <button class="btn" id="crResetBtn">RESET BASELINE</button>
      </div>

      <!-- Stat bars -->
      <div class="cr-bars-grid">
        <div class="cr-bars-col">
          ${jr("SLEEP QUALITY",s.slp,"#50e3c2",50,null)}
          ${jr("FATIGUE INDEX",s.fat,"#f4ad3f",null,60)}
        </div>
        <div class="cr-bars-col">
          ${jr("ACTIVITY LEVEL",s.act,"#5da7ef",40,null)}
          ${jr("WORKLOAD",s.wl,"#88aacc",null,80)}
        </div>
      </div>

      <!-- Activity trace -->
      <div class="cr-card cr-chart-card">
        <div class="cr-chart-hd">
          <span class="kicker">MOVEMENT PATTERN / 24H ACTIVITY TRACE</span>
          <span style="font:8px var(--mono);color:#4e6579">DAY ${i} / ${r.name.toUpperCase()}</span>
        </div>
        <div class="cr-chart" id="crChart">
          ${fv(a,r.color)}
        </div>
        <div class="cr-time-labels">
          <span>00H</span><span>06H</span><span>12H</span><span>18H</span><span>24H</span>
        </div>
      </div>

      <!-- Environment → Crew links -->
      <div class="cr-env-section">
        <div class="kicker" style="margin-bottom:8px">ENVIRONMENT → CREW LINK</div>
        <div class="cr-env-grid">
          ${gv.map(d=>{const f=e===d.id;return`<div class="cr-env-card ${f?"active":""}">
              <div class="cr-env-icon" style="color:${f?"var(--amber)":"#4e6579"}">${d.icon}</div>
              <div class="cr-env-label" style="color:${f?"var(--amber)":"#6e8294"}">${d.label}</div>
              <div class="cr-env-sub">${d.sub}</div>
              <div class="cr-env-dot" style="background:${f?"var(--amber)":"#223444"}"></div>
            </div>`}).join("")}
        </div>
      </div>
    </div>

    <!-- RIGHT: Alerts + Day Markers -->
    <div class="cr-right">
      <div class="cr-card">
        <div class="cr-section-hd">CREW ALERTS</div>
        <div class="cr-alerts" id="crAlerts">${c}</div>
      </div>

      <div class="cr-card" style="margin-top:8px">
        <div class="cr-section-hd">SIM DAY MARKERS</div>
        <div class="cr-day-markers">
          ${mv.map(d=>`
            <div class="cr-day-row" style="${d.d==="D18"?"color:var(--amber)":""}">
              <b style="color:${d.d==="D18"?"var(--amber)":"#3e5a6e"};min-width:28px">${d.d}</b>
              <span>${d.label}</span>
            </div>`).join("")}
        </div>
      </div>

      <div class="cr-card" style="margin-top:8px">
        <div class="cr-section-hd">MEASUREMENT NOTE</div>
        <div class="cr-meas-note">
          The utilisation metrics are prototype indicators. Assume that settlement simulation data, a production system would integrate wearable sensor streams, sleep tracking, and calendar schedules from the lunar/Mars crew.
        </div>
      </div>

      <div class="cr-scan-status cr-card" style="margin-top:8px;${Fi.scanning?"":"display:none"}">
        <div class="cr-section-hd" style="color:var(--cyan)">SCAN RUNNING</div>
        <div class="cr-meas-note">Analysing crew biometric patterns across all ${jn.length} crew members for Day ${i}…</div>
        <div class="cr-scan-bar"><div id="crScanFill" class="cr-scan-fill"></div></div>
      </div>
    </div>
  </div>`}const vv=`
.cr-layout { display:grid; grid-template-columns:185px 1fr 240px; gap:10px; height:100%; min-height:0; }

/* Left */
.cr-left { display:flex; flex-direction:column; gap:8px; overflow-y:auto; }
.cr-section-hd { font:700 8px var(--mono); letter-spacing:1.2px; color:#4e6a7e; text-transform:uppercase; margin-bottom:6px; }
.cr-roster { display:flex; flex-direction:column; gap:4px; flex:1; }
.cr-roster-item { display:grid; grid-template-columns:36px 1fr auto; gap:8px; align-items:center; padding:8px 9px; border:1px solid #1a2d3d; background:#050e19; text-align:left; cursor:pointer; position:relative; }
.cr-roster-item:hover { border-color:#3a6080; background:#07141f; }
.cr-roster-item.active { border-left:2px solid; background:#071927; }
.cr-roster-item.crit { border-right:2px solid var(--red); }
.cr-avatar { width:34px; height:34px; border-radius:50%; border:1px solid; display:flex; align-items:center; justify-content:center; font:700 10px var(--mono); flex-shrink:0; }
.cr-roster-name { font:600 9px var(--mono); color:#b8d4ea; }
.cr-roster-role { font:8px var(--mono); color:#4e6579; margin-top:1px; }
.cr-roster-stats { font:7px var(--mono); color:#4e6579; margin-top:3px; display:flex; gap:8px; }
.cr-roster-stats b { font-weight:700; }
.cr-alert-dot { width:7px; height:7px; border-radius:50%; background:var(--red); animation:warningPulse 1.5s infinite; }
.cr-fleet { padding:12px; background:#060f1a; border:1px solid #1a2d3d; }
.cr-fleet-label { font:700 7px var(--mono); color:#4e6a7e; letter-spacing:1px; }
.cr-fleet-score { font:700 42px var(--mono); margin:6px 0 2px; line-height:1; }
.cr-pct { font-size:20px; }
.cr-fleet-sub { font:7px var(--mono); color:#3e5a6e; }

/* Center */
.cr-center { display:flex; flex-direction:column; gap:8px; min-height:0; overflow-y:auto; }
.cr-member-hd { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; padding:10px 12px; background:#060f1a; border:1px solid #1a2d3d; }
.cr-member-title { font:700 18px var(--mono); margin-top:4px; color:#d1e6f6; }
.cr-bars-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.cr-bars-col { background:#060f1a; border:1px solid #1a2d3d; padding:10px 12px; display:flex; flex-direction:column; gap:8px; }
.cr-bar-row { display:flex; flex-direction:column; gap:4px; }
.cr-bar-label { display:flex; justify-content:space-between; font:600 8px var(--mono); color:#5a7a90; }
.cr-bar-trk { height:5px; background:#0e1d29; border-radius:3px; }
.cr-bar-fill { height:100%; border-radius:3px; transition:width 0.6s ease; }
.cr-card { background:#060f1a; border:1px solid #1a2d3d; padding:10px 12px; }
.cr-chart-card { flex:1; min-height:160px; }
.cr-chart-hd { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.cr-chart { flex:1; min-height:130px; background:#03080e; border:1px solid #0e1d2a; border-radius:2px; overflow:hidden; }
.cr-time-labels { display:flex; justify-content:space-between; font:7px var(--mono); color:#3e5a6e; margin-top:4px; padding:0 4px; }
.cr-env-section { padding:10px 12px; background:#060f1a; border:1px solid #1a2d3d; }
.cr-env-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; }
.cr-env-card { padding:9px; background:#04080e; border:1px solid #1a2d3d; text-align:center; position:relative; }
.cr-env-card.active { border-color:#5a4010; background:#0a1100; }
.cr-env-icon { font:700 12px var(--mono); margin-bottom:3px; }
.cr-env-label { font:700 7px var(--mono); letter-spacing:.4px; }
.cr-env-sub { font:6.5px var(--mono); color:#3e5569; margin-top:3px; line-height:1.4; }
.cr-env-dot { width:6px; height:6px; border-radius:50%; margin:6px auto 0; }

/* Right */
.cr-right { display:flex; flex-direction:column; overflow-y:auto; gap:0; }
.cr-alerts { display:flex; flex-direction:column; gap:5px; }
.cr-alert-ok { font:8px var(--mono); color:#5a7a6e; line-height:1.6; padding:4px 0; }
.cr-alert-item { display:flex; gap:6px; align-items:flex-start; font:8px var(--mono); line-height:1.5; padding:5px 0; border-bottom:1px solid #0f1d2a; }
.cr-alert-item.critical { color:#e08080; }
.cr-alert-item.warning  { color:#c8a050; }
.cr-alert-icon { flex-shrink:0; }
.cr-day-markers { display:flex; flex-direction:column; gap:0; }
.cr-day-row { display:flex; gap:10px; padding:6px 0; border-bottom:1px solid #0f1d2a; font:8px var(--mono); color:#4e6579; }
.cr-meas-note { font:8px var(--mono); color:#4e6579; line-height:1.6; }
.cr-scan-bar { height:3px; background:#0e1d29; border-radius:2px; margin-top:8px; overflow:hidden; }
.cr-scan-fill { height:100%; background:var(--cyan); animation:scanPulse 1.2s ease-in-out infinite; }
@keyframes scanPulse { 0%{width:0} 50%{width:100%} 100%{width:0} }

@media(max-width:1100px) {
  .cr-layout { grid-template-columns:160px 1fr; }
  .cr-right { grid-column:1/-1; }
  .cr-env-grid { grid-template-columns:repeat(2,1fr); }
}
@media(max-width:700px) {
  .cr-layout { grid-template-columns:1fr; }
  .cr-bars-grid { grid-template-columns:1fr; }
  .cr-env-grid { grid-template-columns:1fr 1fr; }
}
`;let Gl=!1;function xv(){if(Gl)return;const i=document.createElement("style");i.id="crew-css",i.textContent=vv,document.head.appendChild(i),Gl=!0}function _v(){function i(){const r=document.getElementById("crewInner");r&&(r.innerHTML=Kc(),t())}function e(){Fi.scanning=!0,i(),setTimeout(()=>{Fi.scanning=!1,i()},2e3)}function t(){var s;const r=document.getElementById("crewWrap");r&&(r.querySelectorAll(".cr-roster-item").forEach(a=>{a.addEventListener("click",()=>{Fi.selectedId=a.dataset.crew,i()})}),(s=r.querySelector("#crResetBtn"))==null||s.addEventListener("click",()=>{be.day=1,be.activeEvent=null,be.eventDay=null,i()}))}t();const n=document.getElementById("crScanBtn");n&&n.addEventListener("click",()=>{e()})}const Mv="/assets/logo-BA6UhSLK.png",Me=document.querySelector("#ui"),Vl=document.querySelector("#boot"),yv=document.querySelector("#bootBar"),Sv=document.querySelector("#bootStatus"),Ne=new(window.AudioContext||window.webkitAudioContext);let Kn=!0;function je(i){if(Kn)try{const e=Ne.createOscillator(),t=Ne.createGain();switch(e.connect(t),t.connect(Ne.destination),i){case"hover":e.frequency.setValueAtTime(400,Ne.currentTime),e.frequency.exponentialRampToValueAtTime(600,Ne.currentTime+.1),t.gain.setValueAtTime(.05,Ne.currentTime),t.gain.exponentialRampToValueAtTime(.01,Ne.currentTime+.1),e.start(Ne.currentTime),e.stop(Ne.currentTime+.1);break;case"click":e.frequency.setValueAtTime(800,Ne.currentTime),e.frequency.exponentialRampToValueAtTime(400,Ne.currentTime+.15),t.gain.setValueAtTime(.1,Ne.currentTime),t.gain.exponentialRampToValueAtTime(.01,Ne.currentTime+.15),e.start(Ne.currentTime),e.stop(Ne.currentTime+.15);break;case"success":e.frequency.setValueAtTime(523,Ne.currentTime),e.frequency.setValueAtTime(659,Ne.currentTime+.1),e.frequency.setValueAtTime(784,Ne.currentTime+.2),t.gain.setValueAtTime(.1,Ne.currentTime),t.gain.exponentialRampToValueAtTime(.01,Ne.currentTime+.3),e.start(Ne.currentTime),e.stop(Ne.currentTime+.3);break;case"warning":e.frequency.setValueAtTime(300,Ne.currentTime),e.frequency.setValueAtTime(400,Ne.currentTime+.1),e.frequency.setValueAtTime(300,Ne.currentTime+.2),t.gain.setValueAtTime(.08,Ne.currentTime),t.gain.exponentialRampToValueAtTime(.01,Ne.currentTime+.3),e.start(Ne.currentTime),e.stop(Ne.currentTime+.3);break;case"critical":e.type="sawtooth",e.frequency.setValueAtTime(200,Ne.currentTime),e.frequency.exponentialRampToValueAtTime(100,Ne.currentTime+.2),t.gain.setValueAtTime(.1,Ne.currentTime),t.gain.exponentialRampToValueAtTime(.01,Ne.currentTime+.2),e.start(Ne.currentTime),e.stop(Ne.currentTime+.2);break;case"navigate":e.frequency.setValueAtTime(300,Ne.currentTime),e.frequency.exponentialRampToValueAtTime(500,Ne.currentTime+.1),t.gain.setValueAtTime(.06,Ne.currentTime),t.gain.exponentialRampToValueAtTime(.01,Ne.currentTime+.1),e.start(Ne.currentTime),e.stop(Ne.currentTime+.1);break}}catch(e){console.log("Audio error:",e)}}const H={route:"landing",planet:"mars",hover:null,selected:null,playing:!0,direction:1,speed:18,days:0,showOrbits:!0,showLabels:!0,scale:"schematic",tutorial:0,event:null,interventions:{water:!0,crew:!0},waterUplift:35,workloadCut:15,simDay:1};new Map(mo.map(i=>[i.key,i]));const ot=[],Ot=new og;Ot.fog=new ao(132619,.00135);const Pt=new Wt(52,innerWidth/innerHeight,.1,1e3);Pt.position.set(0,7.5,25);const vt=new ag({antialias:!0,alpha:!1,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio,1.6));vt.setSize(innerWidth,innerHeight);vt.setClearColor(66312,1);vt.outputColorSpace=Yt;vt.toneMapping=ja;vt.toneMappingExposure=1.05;vt.shadowMap.enabled=!0;vt.shadowMap.type=jl;document.querySelector("#scene").appendChild(vt.domElement);vt.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),on("WebGL context paused — reload to restore 3D scene")});const yt=new Tg(Pt,vt.domElement);yt.enableDamping=!0;yt.dampingFactor=.065;yt.minDistance=2.2;yt.maxDistance=95;yt.target.set(0,0,0);yt.enablePan=!0;yt.autoRotate=!0;yt.autoRotateSpeed=.14;const ji=new Vg(vt),bv=new Wg(Ot,Pt);ji.addPass(bv);const xo=new $i(new ae(innerWidth,innerHeight),.68,.48,.9);xo.threshold=.55;ji.addPass(xo);const hn=new Nn(new ae(innerWidth,innerHeight),Ot,Pt);hn.edgeStrength=2.6;hn.edgeGlow=.55;hn.edgeThickness=1.15;hn.visibleEdgeColor.set(10212351);hn.hiddenEdgeColor.set(1786463);ji.addPass(hn);ji.addPass(new qg);const Ev=new Mg(3890554,.95);Ot.add(Ev);const As=new _g(16766624,170,0,1.75);As.position.set(0,0,0);As.castShadow=!0;As.shadow.mapSize.set(1024,1024);Ot.add(As);function Fn(i){const e=Math.sin(i*12.9898)*43758.5453;return e-Math.floor(e)}function Zc(i){const e=new wt,t=new Float32Array(i*3),n=new Float32Array(i*3);for(let a=0;a<i;a++){const o=55+Fn(a)*135,l=Fn(a+19)*Math.PI*2,c=Math.acos(2*Fn(a+3)-1);t[a*3]=o*Math.sin(c)*Math.cos(l),t[a*3+1]=o*Math.cos(c),t[a*3+2]=o*Math.sin(c)*Math.sin(l);const d=Fn(a+8);n[a*3]=d>.82?.62:.83,n[a*3+1]=d>.92?.72:.9,n[a*3+2]=1}e.setAttribute("position",new $t(t,3)),e.setAttribute("color",new $t(n,3));const r=new oo({size:.125,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1}),s=new Nc(e,r);return s.userData.baseOpacity=.82,s.userData.baseSize=.125,Ot.add(s),s}const la=Zc(1e4);function Jc(i,e,t,n=0){const r=new wt,s=new Float32Array(i*3);for(let l=0;l<i;l++){const c=Fn(l*7)*Math.PI*2,d=e+(t-e)*Fn(l*11);s[l*3]=Math.cos(c)*d,s[l*3+1]=(Fn(l*13)-.5)*.38,s[l*3+2]=Math.sin(c)*d}r.setAttribute("position",new $t(s,3));const a=new oo({color:7168599,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.52}),o=new Nc(r,a);return o.rotation.x=n,Ot.add(o),o}const Tv=Jc(1100,7.2,8.5,.06),Av=Jc(2600,20,29,.02);function Qc(i,e,t=1){const n=document.createElement("canvas");n.width=512,n.height=256;const r=n.getContext("2d"),s=r.createLinearGradient(0,0,512,256);s.addColorStop(0,i),s.addColorStop(1,e),r.fillStyle=s,r.fillRect(0,0,512,256);for(let a=0;a<256;a+=4)for(let o=0;o<512;o+=4){const l=Fn(o*37+a*17+t),c=l>.88?.24:.03;r.fillStyle=`rgba(255,255,255,${c})`,r.fillRect(o,a,4,4)}return new cg(n)}function ed(i){if(!i.texture)return Qc("#"+i.color.toString(16).padStart(6,"0"),"#05080c",i.orbit);const e=new gg().load(i.texture,()=>{},void 0,()=>{});return e.colorSpace=Yt,e}function wv(i){const t=new hg(0,0,i.orbit,i.orbit*(1-i.e),0,Math.PI*2,!1,0).getPoints(128).map(a=>new R(a.x,0,a.y)),n=new wt().setFromPoints(t),r=new Ic({color:2970219,transparent:!0,opacity:.45}),s=new lg(n,r);return s.rotation.x=i.i*Math.PI/180,s.userData.orbit=!0,Ot.add(s),s}function Cv(i,e){const t=new Di;t.userData={type:"planet",key:i.key,p:i},t.rotation.z=i.i*Math.PI/180*.18;const n=new fs({map:ed(i),roughness:.95,metalness:.02}),r=i.radius*(i.key==="earth"?1.85:i.key==="mars"?2.15:i.key==="venus"||i.key==="mercury"?1.65:1.22),s=new Mt(new ri(r,64,64),n);if(s.castShadow=!0,s.receiveShadow=!0,t.userData.displayRadius=r,s.userData=t.userData,t.add(s),i.rings){const a=new ho(i.radius*1.35,i.radius*2.2,96),o=new fs({color:i.color,transparent:!0,opacity:.55,side:jt}),l=new Mt(a,o);l.rotation.x=Math.PI/2,l.castShadow=!0,t.add(l)}if(i.key==="earth"){const a=new Mt(new ri(r*1.065,64,64),new oi({color:6269439,transparent:!0,opacity:.12,side:Lt}));t.add(a)}if(t.position.x=i.orbit,Ot.add(t),wv(i),ot.push({p:i,group:t,mesh:s}),i.key==="earth"){const a=ca("moon",_n.moon,t);a.group.position.x=.55}else i.key==="mars"&&(ca("phobos",_n.phobos,t),ca("deimos",_n.deimos,t));return t}function ca(i,e,t){const n=new Di;n.userData={type:"moon",key:i,m:e};const r=new fs({map:e.texture?ed({texture:e.texture,color:7829367}):Qc("#79746c","#1b1918",i.length),roughness:1}),s=i==="phobos"||i==="deimos"?new co(e.radius*1.7,2):new ri(e.radius*1.65,32,32),a=new Mt(s,r);return i==="phobos"?a.scale.set(1.55,.82,1.05):i==="deimos"&&a.scale.set(1.25,.9,1.05),a.userData=n.userData,n.add(a),n.position.x=e.orbit,t.add(n),ot.push({p:{key:i,name:e.name},group:n,mesh:a,moon:!0,parent:t}),{group:n,mesh:a}}const Rv=new ri(Yi.radius,96,96),td=new fs({color:16761951,emissive:16747295,emissiveIntensity:2.6,roughness:.82,metalness:0}),fr=new Mt(Rv,td);fr.userData={type:"sun",key:"sun",p:Yi};Ot.add(fr);ot.push({p:Yi,group:fr,mesh:fr});function nd(i,e){const t=new Mt(new ri(Yi.radius*i,64,64),new oi({color:16753455,transparent:!0,opacity:e,blending:ti,side:Lt,depthWrite:!1}));return Ot.add(t),t}const Pv=nd(1.42,.19),Lv=nd(2.05,.075),vs=new Mt(new Es(Yi.radius*1.38,.035,12,96),new oi({color:16757051,transparent:!0,opacity:.42,blending:ti,depthWrite:!1}));vs.rotation.x=Math.PI/2.7;Ot.add(vs);const xs=new Mt(new Es(Yi.radius*1.7,.018,10,96),new oi({color:16764008,transparent:!0,opacity:.22,blending:ti,depthWrite:!1}));xs.rotation.y=Math.PI/3.5;Ot.add(xs);const Bi=Zc(420);Bi.scale.setScalar(.42);Bi.material.size=.19;Bi.material.opacity=.26;mo.forEach(Cv);const Wl=new Sg,pr=new ae;vt.domElement.addEventListener("pointermove",i=>{pr.x=i.clientX/innerWidth*2-1,pr.y=-(i.clientY/innerHeight)*2+1,vt.domElement.style.cursor=H.hover?"pointer":"grab"});vt.domElement.addEventListener("click",()=>{H.hover&&_s(H.hover)});vt.domElement.addEventListener("pointerdown",()=>{yt.autoRotate=!1});vt.domElement.addEventListener("pointerup",()=>{setTimeout(()=>{H.route==="landing"&&!Et&&(yt.autoRotate=!0)},1200)});let Et=null;function _s(i){H.selected=i;const e=new R;i.mesh.getWorldPosition(e);const t=e.clone().sub(Pt.position).normalize(),n=Math.max((i.mesh.userData.displayRadius||i.p.radius||.2)*5.5,3.1),r=e.clone().add(t.multiplyScalar(n));r.y=Math.max(r.y,n*.16),Et={startPos:Pt.position.clone(),startTarget:yt.target.clone(),endPos:r,endTarget:e.clone(),t:0,duration:.9},yt.autoRotate=!1,Tt()}function Dv(){Wl.setFromCamera(pr,Pt);const i=Wl.intersectObjects(ot.map(e=>e.mesh),!1);if(i.length){const e=ot.find(t=>t.mesh===i[0].object);H.hover=e||null,hn.selectedObjects=e?[e.mesh]:[]}else H.hover=null,hn.selectedObjects=[]}function Iv(i,e){const t=2*Math.PI/(i.period||1),n=e*t+i.orbit*.07,r=i.orbit*Math.cos(n),s=i.orbit*(1-i.e)*Math.sin(n);return new R(r,0,s)}function Tt(){var n;const i=ot.find(r=>r.p.key==="earth")||(ot.length?ot[0]:null);!H.selected&&i&&(H.selected=i);const e=H.selected||i,t=e?e.p:{name:"Earth",fact:"Liquid-water world and the only known planet with life.",key:"earth",orbit:1,period:365,moons:1};Me.innerHTML=`<div class="ui-shell">
<header class="topbar"><div class="brand" data-nav="landing"><div class="brand-mark"><img src="${Mv}" class="brand-logo-img" alt="HABITAT-X" /></div><div><div class="brand-name">HABITAT-X</div><div class="brand-sub">MISSION RESILIENCE / DIGITAL TWIN</div></div></div><div class="spaceapps"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Space_Apps_Motif_Logo_-_1-Color_Black.svg" alt="NASA Space Apps"><span>NASA SPACE APPS / 2026</span></div><nav class="nav">${[["landing","HOME"],["tutorial","COURSE"],["explore","EXPLORE"],["build","BUILD"],["simulate","SIMULATE"],["crew","CREW"],["trace","TRACE"],["intervene","INTERVENE"],["compare","COMPARE"],["researcher","RESEARCHER"],["report","REPORT"]].map(([r,s])=>`<button class="${H.route===r?"active":""}" data-nav="${r}">${s}</button>`).join("")}</nav><div class="sys"><span class="led"></span>CELESTIAL LINK / ONLINE</div></header>
<div class="hud hud-card selection-dock" id="selectionDock" style="${H.dockPos?`left:${H.dockPos.x}px;top:${H.dockPos.y}px;right:auto;bottom:auto;`:""}">
  <div class="kicker" style="display:flex;justify-content:space-between;align-items:center;">
    <span>SELECTED BODY</span>
    <span style="font-size:7px;color:#4f6e85;letter-spacing:0.5px">✥ DRAG</span>
  </div>
  <div class="selection-title">${t.name}</div>
  <div class="selection-meta">${t.fact||"Liquid-water world and the only known planet with life."}</div>
  <div class="selection-stats">${t.key&&t.key!=="sun"?`<span><b>ORBIT</b><em>${((n=t.orbit)==null?void 0:n.toFixed(2))||"1.00"} AU</em></span><span><b>PERIOD</b><em>${Math.round(t.period||365)} d</em></span><span><b>MOONS</b><em>${t.moons??"1"}</em></span>`:"<span><b>TYPE</b><em>STAR</em></span><span><b>CORE</b><em>ACTIVE</em></span><span><b>LINK</b><em>JPL</em></span>"}</div>
  <button class="btn" id="clearSelection">RETURN TO FULL SYSTEM</button>
</div>
${Nv()}${Uv()}${Ov()}${Fv()}${Bv()}${kv()}${zv()}${Hv()}${Gv()}${Vv()}${Wv()}
<div class="hud hud-card control-dock"><div class="kicker">NAVIGATION CONTROLS</div><div class="control-row"><button id="toggleOrbits" class="ctl active">ORBIT LINES</button><button id="toggleLabels" class="ctl active">LABELS</button><button id="toggleScale" class="ctl">SCALE</button></div><div class="control-row speed-row"><span class="mono">TIME RATE</span><input id="timeSpeed" type="range" min="0" max="20" step="0.1" value="${H.speed}"><b>${H.speed.toFixed(1)}×</b></div></div>
<div class="media-credit" style="position:absolute;bottom:4px;left:8px;right:8px;color:#3e5365;font:7px var(--mono);z-index:20;display:flex;justify-content:space-between;pointer-events:none"><span>PLANETARY CONSTANTS / NASA-JPL REFERENCES</span><span>HABITAT-X is an independent Space Apps participant project — no NASA endorsement implied</span></div>
</div>`,$v()}function Nv(){return`<section class="screen ${H.route==="landing"?"active":""}" data-screen="landing"><div class="landing-particles" id="landingParticles"></div><div class="landing-copy hud"><div class="eyebrow animated-border">NASA-DATA-POWERED / EXPERIMENTAL RESILIENCE</div><h1>Before a Mission<br><span class="glow-text">Fails, Find Out Why.</span></h1><p>HABITAT-X is a mission resilience digital twin that connects <b>Planet → Settlement → Human</b>. Explore a real environment, configure a constrained settlement, inject environmental stress, trace cascading failure, and test interventions.</p><div class="actions"><button class="btn btn-primary" data-nav="tutorial">START COURSE ↗</button><button class="btn" data-nav="explore">ENTER MISSION PORTAL →</button></div><div class="landing-note"><span><b>NASA / JPL</b> planetary reference data</span><span>•</span><span>Interactive 3D celestial navigator</span><span>•</span><span>Decision support, not prediction</span></div></div><div class="mission-rail hud hud-card glass-grid"><div class="kicker">MISSION OVERVIEW</div><div class="rail-row"><span>Target</span><b id="landingTarget">MARS / JEZERO</b></div><div class="rail-row"><span>Earth analog</span><b>ATACAMA / CHILE</b></div><div class="rail-row"><span>Demo crew</span><b>20</b></div><div class="rail-row"><span>Primary shock</span><b>+5°C</b></div><div class="rail-row"><span>Primary dependency</span><b>WATER</b></div><div class="rail-row"><span>Mode</span><b>3D / LIVE</b></div></div><div class="launch-hint"><span class="mouse-ring"></span> DRAG / ZOOM / SELECT A WORLD</div><button class="sound-toggle" id="soundToggle" style="position:fixed;bottom:20px;left:20px;padding:8px 12px;background:rgba(6,15,24,.8);border:1px solid #35566f;color:#a9c8df;font:8px var(--mono);z-index:100;cursor:pointer;border-radius:4px">🔊 SOUND ON</button></section>`}function Uv(){const i=[["01","HEAT SPIKE","+5°C simulated shock"],["02","WATER DEMAND","Cooling + human demand rise"],["03","RESERVE CRITICAL","Water margin crosses threshold"],["04","AGRICULTURE","Allocation drops"],["05","CREW WORKLOAD","Compensating work rises"],["06","INTERVENTION","Change the system / rerun"]],e=i[H.tutorial];return`<section class="screen ${H.route==="tutorial"?"active":""}" data-screen="tutorial"><div class="view-header"><div><div class="eyebrow">COURSE / GUIDED MICRO-SCENARIO</div><h2>Learn the Resilience Loop</h2></div><div class="header-actions"><span class="chip ${H.tutorial===i.length-1?"success":""}">STEP ${H.tutorial+1} / ${i.length}</span><button class="btn btn-primary" id="tutorialNext">${H.tutorial===i.length-1?"ENTER PORTAL →":"NEXT STEP →"}</button></div></div><div class="hud-card glass-grid" style="position:absolute;left:24px;bottom:55px;width:360px;padding:16px;pointer-events:auto"><div class="kicker">ACTIVE EVENT</div><h3 style="margin:6px 0 4px;font-size:17px;animation:textGlow 3s ease-in-out infinite">${e[1]}</h3><p style="margin:0;color:#71879a;font-size:10px;line-height:1.6">${e[2]}. The 3D Solar System remains active behind the course so the concept always stays anchored in the planetary context.</p><div style="margin-top:14px;display:grid;gap:5px">${i.map((t,n)=>`<button data-tutorial="${n}" style="border:1px solid ${n===H.tutorial?"#456f92":"#223746"};background:${n===H.tutorial?"#071725":"#050d13"};padding:9px;text-align:left;color:${n===H.tutorial?"#b9dbf3":"#6b8092"};font:8px var(--mono)"><b>${t[0]}</b>&nbsp;&nbsp;${t[1]}</button>`).join("")}</div></div><div class="hud-card" style="position:absolute;right:24px;bottom:55px;width:300px;padding:14px;pointer-events:auto"><div class="kicker">COURSE OBJECTIVE</div><div style="font:500 22px var(--mono);margin:8px 0">FIND → STRESS → TRACE</div><p style="margin:0;color:#687e91;font-size:9px;line-height:1.55">A settlement is not a collection of isolated bars. Each system depends on others, so one environmental change can create a chain of effects.</p></div></section>`}function Ov(){Jg();const i=zc(ss);return`<section class="screen ${H.route==="explore"?"active":""}" data-screen="explore">
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:0 16px 12px;overflow:hidden">
      <div class="view-header" style="margin-bottom:10px">
        <div>
          <div class="eyebrow">01 / EXPLORE — PLANETARY TARGET → EARTH ANALOG</div>
          <h2 style="margin:4px 0 0">Find the Match</h2>
        </div>
        <div class="header-actions">
          <span class="chip">NASA DATA / DEMO MODEL SCORES</span>
          <button class="btn" data-nav="build">SKIP TO BUILD →</button>
        </div>
      </div>
      ${i}
    </div>
  </section>`}function Fv(){return nv(),`<section class="screen ${H.route==="build"?"active":""}" data-screen="build">
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:0 16px 12px;overflow-y:auto">
      <div class="view-header" style="margin-bottom:10px">
        <div>
          <div class="eyebrow">02 / BUILD</div>
          <h2 style="margin:4px 0 0">Configure the Settlement</h2>
        </div>
        <div class="header-actions">
          <span class="chip">LOCAL MISSION STATE</span>
          <button class="btn btn-primary" data-nav="simulate">RUN SIMULATION →</button>
        </div>
      </div>
      ${Wc(On)}
    </div>
  </section>`}function Bv(){return ov(),Object.values({}).includes("critical"),`<section class="screen ${H.route==="simulate"?"active":""}" data-screen="simulate">
    <div class="view-header">
      <div>
        <div class="eyebrow">03 / SIMULATE + 04 / STRESS-TEST</div>
        <h2>Telemetry Center</h2>
      </div>
      <div class="header-actions">
        <span class="chip" id="simStatusChip">DAY ${be.day} / 30${be.activeEvent?" ⚠ "+be.activeEvent.toUpperCase():""}</span>
        <button class="btn btn-primary" data-nav="trace">TRACE FAILURE →</button>
      </div>
    </div>
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:8px 16px 12px;overflow-y:auto">
      <div id="simInner">
        ${Yc(On,be)}
  </section>`}function kv(){return xv(),`<section class="screen ${H.route==="crew"?"active":""}" data-screen="crew">
    <div class="view-header">
      <div>
        <div class="eyebrow">04 / CREW RESILIENCE</div>
        <h2>Human Performance Layer</h2>
      </div>
      <div class="header-actions">
        <span class="chip">6 CREW ACTIVE</span>
        <button class="btn" id="crScanBtn">▶ RUN CREW SCAN</button>
        <button class="btn btn-primary" data-nav="trace">TRACE FAILURE →</button>
      </div>
    </div>
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:8px 16px 12px;overflow-y:auto">
      <div id="crewInner">
        ${Kc()}
      </div>
    </div>
  </section>`}function zv(){const i=be.activeEvent||"heat",t=(Xi[i]||Xi.heat).map(r=>{const s=vo.find(a=>a.id===r.node);return{id:r.node,title:s.label,sub:r.msg}}),n=Array.from({length:Math.max(0,t.length-1)},(r,s)=>`te${s+1}`);return`<section class="screen ${H.route==="trace"?"active":""}" data-screen="trace">
    <div class="view-header">
      <div><div class="eyebrow">05 / TRACE FAILURE</div><h2>Failure-Chain Trace</h2></div>
      <div class="header-actions">
        <span class="chip">DEPENDENCY GRAPH / ${t.length} NODES</span>
        <button class="btn btn-primary" data-nav="intervene">OPEN INTERVENTION LAB →</button>
      </div>
    </div>
    <div class="trace-layout">
      <div class="hud-card graph-canvas">
        ${n.map(r=>`<div class="trace-edge ${r} edge-arrow active"></div>`).join("")}
        ${t.map((r,s)=>{const a=s===t.length-1;return`<button class="trace-node ${s>=Math.floor(t.length/2)&&!a?"critical":""} ${a?"danger":""} tn${s+1} ${H.selectedNode===r.id?"active":""}" data-node="${r.id}">
            <strong>${r.title}</strong>
            <small>${r.sub}</small>
          </button>`}).join("")}
        <div style="position:absolute;left:10px;bottom:10px;color:#4d6578;font:7px var(--mono);text-transform:uppercase;">
          FAILURE PATH / ${t.map(r=>r.title).join(" → ")}
        </div>
      </div>
      <div class="hud-card panel inspector">
        <div class="kicker">NODE INSPECTOR</div>
        <h3 id="nodeTitle" style="margin:6px 0;font-size:16px">Loading...</h3>
        <span class="chip">INSPECTION</span>
        <div class="inspector-section"><div class="kicker">SYSTEM IMPACT</div><p id="nodeCause">...</p></div>
        <div class="science-note" style="margin-top:20px;">The graph represents dependency rules based on the active simulation event (${i.toUpperCase()}). Live numerical outputs require the deterministic backend simulation.</div>
      </div>
    </div>
  </section>`}function id(){const i={day:18,water:12,food:24,energy:48};let e=i.day,t=i.water,n=i.food,r=i.energy;const s=H.interventions,a=H.waterUplift,o=H.workloadCut;return s.water&&(t+=Math.round(a*.55),e+=Math.round(a*.18)),s.demand&&(t+=8,e+=3),s.energy&&(r+=14,e+=2),s.crew&&(n+=Math.round(o*.18),e+=Math.round(o*.14),t+=Math.round(o*.06)),s.crop&&(n+=8,e+=2),{day:Math.min(30,Math.max(i.day,e)),water:Math.min(80,Math.max(i.water,t)),food:Math.min(82,Math.max(i.food,n)),energy:Math.min(88,Math.max(i.energy,r))}}function wi(){const i=id(),e=18,t=r=>Me.querySelector("#"+r),n=(r,s)=>{const a=t(r);a&&(a.textContent=s)};n("ivRunBDay",i.day+" "),n("ivRunBWater",i.water+"%"),n("ivRunBFood",i.food+"%"),n("ivRunBEnergy",i.energy+"%"),n("ivDeltaText",`INTERVENTION RESULT: +${i.day-e} operational days before the critical threshold.`),H.interventionAfter=i.day,H.interventionResults={water:i.water,food:i.food,energy:i.energy}}function Hv(){const i=id(),e=H.interventions;return`<section class="screen ${H.route==="intervene"?"active":""}" data-screen="intervene">
<div class="view-header"><div><div class="eyebrow">06 / INTERVENE</div><h2>Intervention Lab</h2></div>
<div class="header-actions"><span class="chip">SAME SCENARIO / DIFFERENT CONFIGURATION</span>
<button class="btn" id="resetIntervention">RESET</button>
<button class="btn btn-primary" id="runIntervention">RUN SAME SCENARIO →</button></div></div>
<div class="intervene-grid">
  <div class="hud-card panel">
    <div class="kicker">CONTROL VARIABLES</div>
    ${[["water","Increase water storage","Emergency reserve multiplier"],["demand","Reduce water demand","Operational conservation"],["energy","Increase energy backup","Power redundancy"],["crew","Adjust crew shifts","Reduce workload concentration"],["crop","Reduce crop demand","Agricultural allocation"]].map(t=>`<label class="switch-row"><span><strong>${t[1]}</strong><small>${t[2]}</small></span><input class="switch" type="checkbox" id="int-${t[0]}" ${e[t[0]]?"checked":""}></label>`).join("")}
    <div class="field" style="margin-top:15px">
      <div><span>Water storage uplift</span><output id="waterUpliftOut">${H.waterUplift}%</output></div>
      <input type="range" min="0" max="100" value="${H.waterUplift}" id="waterUplift">
    </div>
    <div class="field">
      <div><span>Crew workload cut</span><output id="workloadCutOut">${H.workloadCut}%</output></div>
      <input type="range" min="0" max="40" value="${H.workloadCut}" id="workloadCut">
    </div>
    <div class="whatif"><div class="kicker">HUMAN DECISION</div><p>HABITAT-X exposes tradeoffs. It does not automatically choose a "best" strategy.</p></div>
  </div>
  <div class="hud-card panel">
    <div class="kicker">BASELINE VS INTERVENED</div>
    <div class="compare-runs">
      <div class="run">
        <b>RUN A / BASELINE</b>
        <div class="day">18 <small>DAY</small></div>
        ${da("Water","12%")}${da("Food","24%")}${da("Energy","48%")}
      </div>
      <div class="arrow-center">→</div>
      <div class="run after">
        <b>RUN B / INTERVENED</b>
        <div class="day"><span id="ivRunBDay">${i.day}</span> <small>DAY</small></div>
        <div class="run-stat"><span>Water</span><strong id="ivRunBWater">${i.water}%</strong></div>
        <div class="run-stat"><span>Food</span><strong id="ivRunBFood">${i.food}%</strong></div>
        <div class="run-stat"><span>Energy</span><strong id="ivRunBEnergy">${i.energy}%</strong></div>
      </div>
    </div>
    <div class="delta" id="ivDeltaText">INTERVENTION RESULT: +${i.day-18} operational days before the critical threshold.</div>
    <div class="strategy-strip">
      <div class="strategy" data-strategy="water"><strong>WATER-FIRST</strong><small>Higher water margin / higher initial storage</small></div>
      <div class="strategy" data-strategy="energy"><strong>ENERGY-FIRST</strong><small>Stronger power margin / exposed to water cascade</small></div>
      <div class="strategy" data-strategy="balanced"><strong>BALANCED</strong><small>Distributed redundancy / mixed tradeoffs</small></div>
    </div>
  </div>
</div></section>`}function da(i,e){return`<div class="run-stat"><span>${i}</span><strong>${e}</strong></div>`}function Gv(){return`<section class="screen ${H.route==="compare"?"active":""}" data-screen="compare"><div class="view-header"><div><div class="eyebrow">07 / COMPARE</div><h2>Strategy Comparison</h2></div><div class="header-actions"><span class="chip">SAME LOCATION / SAME SHOCK / NO RANKING</span><button class="btn btn-primary" data-nav="report">OPEN REPORT →</button></div></div><div class="compare-grid"><div class="hud-card panel"><div class="kicker">CONFIGURATION MATRIX</div><div class="table" style="margin-top:10px"><div class="tr head"><div>METRIC</div><div>WATER-FIRST</div><div>ENERGY-FIRST</div><div>BALANCED</div></div><div class="tr"><div>Operational duration</div><div>27 d</div><div>23 d</div><div>25 d</div></div><div class="tr"><div>Water stability</div><div>72%</div><div>54%</div><div>64%</div></div><div class="tr"><div>Food stability</div><div>43%</div><div>49%</div><div>51%</div></div><div class="tr"><div>Energy stability</div><div>58%</div><div>79%</div><div>69%</div></div><div class="tr"><div>Critical failures</div><div>2</div><div>3</div><div>2</div></div><div class="tr"><div>Recovery time</div><div>4 d</div><div>3 d</div><div>4 d</div></div></div><div class="science-note">These values are illustrative frontend state. In the final product they must be simulator outputs produced under identical conditions.</div></div><div class="hud-card panel"><div class="kicker">3D STRATEGY PROFILES</div><div class="scene-mini-grid" style="margin-top:8px">${["WATER-FIRST","ENERGY-FIRST","BALANCED"].map((i,e)=>`<div class="strategy-3d"><div class="sphere" style="background:radial-gradient(circle at 32% 28%,${e===0?"#6bb3eb":e===1?"#e2b15e":"#65d4c2"},#0a1822 68%)"></div><div class="orbit-mini" style="animation-duration:${8+e*2}s"></div><span>${i}</span></div>`).join("")}</div><div class="source-line" style="margin-top:8px">Compare documented tradeoffs under the same scenario. The human mission team makes the decision.</div></div></div></section>`}function Vv(){return`<section class="screen ${H.route==="researcher"?"active":""}" data-screen="researcher"><div class="view-header"><div><div class="eyebrow">COPILOT / LIFEBOAT RESEARCHER</div><h2>Ask the Simulation</h2></div><div class="header-actions"><span class="chip">STRUCTURED OUTPUT ONLY</span><span class="chip" style="color:var(--green)">NUMBERS FROM SIM</span></div></div><div class="research-layout"><div class="hud-card holo"><div class="holo-ring"></div><div class="holo-ring"></div><div class="holo-core"></div><div class="research-log">LIFEBOAT RESEARCHER / NUMERICAL CLAIMS ARE SUPPLIED BY THE SIMULATOR / AI EXPLAINS, THE MODEL CALCULATES</div></div><div class="hud-card panel chat"><div class="kicker">DECISION-SUPPORT INTERFACE</div><div class="messages" id="messages"><div class="message bot"><span>RESEARCHER</span><p>The current structured demo shows a heat → water → agriculture → food → crew cascade. Ask a what-if or request an explanation. I will only quote numerical values that exist in the current simulator state.</p></div><div class="message user"><span>YOU</span><p>Why did water become critical?</p></div><div class="message bot"><span>RESEARCHER</span><p>The demo run reaches the critical water threshold on Day 18 at 12% reserve. In the prototype, the Researcher is an interpreter, not the numerical engine.</p></div></div><form class="chatbar" id="chatForm"><input id="chatInput" placeholder='Try: "What if we add 30% more water storage?"'><button class="btn btn-primary">ASK ↗</button></form><div class="quick"><button data-q="Why did water become critical?">WHY WATER?</button><button data-q="Try +30% water storage">TRY +30% WATER</button><button data-q="Explain the failure chain">EXPLAIN CHAIN</button></div></div></div></section>`}function Wv(){const i=H.interventionAfter||27;return`<section class="screen ${H.route==="report"?"active":""}" data-screen="report"><div class="view-header"><div><div class="eyebrow">08 / REPORT</div><h2>Mission Resilience Report</h2></div><div class="header-actions"><button class="btn" id="reportExport">EXPORT VIEW</button><button class="btn btn-primary" data-nav="explore">START NEW RUN →</button></div></div><div class="report-grid">${Kr("TARGET","Jezero Crater","Mars")}${Kr("EARTH ANALOG","Atacama","Chile")}${Kr("FAILURE DAY","18","Heat scenario")}${Kr("INTERVENED",i,"Same scenario")}</div><div class="report-main"><div class="hud-card report-box"><div class="kicker">CRITICAL VULNERABILITY</div><div style="font:500 35px var(--mono);margin:13px 0;color:var(--red)">WATER</div><p style="color:#718799;font-size:10px;line-height:1.6">Water reserve reaches the critical threshold first, creating downstream pressure on agriculture and food production.</p><div class="kicker" style="margin-top:18px">FULL FAILURE PATH</div><div class="report-chain">Temperature → Water Demand → Water Reserve → Agriculture → Food Production → Food Reserve → Crew Capacity</div></div><div class="hud-card report-box"><div class="kicker">MISSION SCENE</div><div class="report-viz"><div class="report-orbit"></div><div class="report-earth"></div></div><div class="report-footer">This report is an experimental decision-support summary. It does not reproduce the complete planetary environment, predict mission survival, or imply NASA endorsement.</div></div></div></section>`}function Kr(i,e,t){return`<div class="report-kpi hud-card"><span>${i}</span><strong>${e}</strong><small>${t}</small></div>`}function $v(){var n,r,s,a,o,l,c,d,f,u,p,g,v,m;Me.querySelectorAll("[data-nav]").forEach(h=>h.addEventListener("click",()=>{je("navigate"),Ri(h.dataset.nav)})),(n=Me.querySelector("#clearSelection"))==null||n.addEventListener("click",h=>{h.stopPropagation(),je("click");const M=ot.find(x=>x.p.key==="earth")||(ot.length?ot[0]:null);H.selected=M,Et={startPos:Pt.position.clone(),startTarget:yt.target.clone(),endPos:new R(0,18,38),endTarget:new R(0,0,0),t:0,duration:1},yt.autoRotate=!0,on("Viewing Full Solar System (Earth Anchor)"),Tt()}),(r=Me.querySelector("#toggleOrbits"))==null||r.addEventListener("click",()=>{je("click"),H.showOrbits=!H.showOrbits,Ot.traverse(h=>{var M;(M=h.userData)!=null&&M.orbit&&(h.visible=H.showOrbits)}),Tt()}),(s=Me.querySelector("#toggleLabels"))==null||s.addEventListener("click",()=>{je("click"),H.showLabels=!H.showLabels,on(H.showLabels?"Labels enabled":"Labels disabled")}),(a=Me.querySelector("#toggleScale"))==null||a.addEventListener("click",()=>{je("click"),H.scale=H.scale==="schematic"?"true":"schematic",on("Scale mode: "+H.scale.toUpperCase())}),(o=Me.querySelector("#timeSpeed"))==null||o.addEventListener("input",h=>{H.speed=Number(h.target.value);const M=h.target.nextElementSibling;M&&(M.textContent=H.speed.toFixed(1)+"×")}),Me.querySelectorAll("[data-planet]").forEach(h=>h.addEventListener("click",()=>{je("click"),H.planet=h.dataset.planet;const M=h.dataset.planet==="moon"?"moon":h.dataset.planet,x=M==="moon"?ot.find(E=>E.moon&&E.p.key==="moon"):ot.find(E=>E.p.key===M);x&&_s(x),Tt()})),Me.querySelectorAll("[data-focus]").forEach(h=>h.addEventListener("click",()=>{je("click");const M=ot.find(x=>x.p.key===h.dataset.focus);M&&_s(M)})),Me.querySelectorAll("[data-tutorial]").forEach(h=>h.addEventListener("click",()=>{je("click"),H.tutorial=Number(h.dataset.tutorial),Tt()}));const i=Me.querySelector("#tutorialNext");i&&i.addEventListener("click",()=>{je("success"),H.tutorial<5?(H.tutorial++,Tt()):Ri("explore")}),Me.querySelectorAll("input[type=range]").forEach(h=>{h.addEventListener("input",()=>{const M=Me.querySelector("#out-"+h.id);if(M&&(M.textContent=Number(h.value).toLocaleString()+" "+h.dataset.unit),h.id==="waterUplift"){H.waterUplift=Number(h.value);const x=Me.querySelector("#waterUpliftOut");x&&(x.textContent=h.value+"%"),Me.querySelectorAll(".strategy").forEach(E=>E.classList.remove("active")),wi()}if(h.id==="workloadCut"){H.workloadCut=Number(h.value);const x=Me.querySelector("#workloadCutOut");x&&(x.textContent=h.value+"%"),Me.querySelectorAll(".strategy").forEach(E=>E.classList.remove("active")),wi()}}),h.addEventListener("mouseenter",()=>je("hover"))}),(l=Me.querySelector("#simPlay"))==null||l.addEventListener("click",()=>{je("click"),H.playing=!H.playing,Tt(),H.playing&&Ci()}),(c=Me.querySelector("#prevDay"))==null||c.addEventListener("click",()=>{je("click"),H.simDay=Math.max(1,H.simDay-1),Tt(),Ci()}),(d=Me.querySelector("#nextDay"))==null||d.addEventListener("click",()=>{je("click"),H.simDay=Math.min(30,H.simDay+1),Tt(),Ci()}),(f=Me.querySelector("#fastDay"))==null||f.addEventListener("click",()=>{je("click"),H.simDay=Math.min(30,H.simDay+5),Tt(),Ci()}),(u=Me.querySelector("#resetSim"))==null||u.addEventListener("click",()=>{je("click"),H.simDay=1,H.event=null,H.playing=!1,Tt(),Ci()}),Me.querySelectorAll("[data-event]").forEach(h=>h.addEventListener("click",()=>{je("warning"),H.event=h.dataset.event,H.simDay=Math.min(8,H.simDay+1),Tt(),Ci(),Jv(h)})),Me.querySelectorAll("[data-node]").forEach(h=>h.addEventListener("click",()=>{je("click"),H.selectedNode=h.dataset.node,$l(),Me.querySelectorAll("[data-node]").forEach(M=>M.classList.toggle("active",M.dataset.node===H.selectedNode))})),["water","demand","energy","crew","crop"].forEach(h=>{var M;(M=Me.querySelector("#int-"+h))==null||M.addEventListener("change",x=>{je("click"),H.interventions[h]=x.target.checked,Me.querySelectorAll(".strategy").forEach(E=>E.classList.remove("active")),wi()})}),Me.querySelectorAll("[data-strategy]").forEach(h=>{h.addEventListener("click",()=>{je("click");const M=h.dataset.strategy;Me.querySelectorAll(".strategy").forEach(L=>L.classList.toggle("active",L===h)),M==="water"?(H.interventions={water:!0,demand:!0,energy:!1,crew:!1,crop:!1},H.waterUplift=65,H.workloadCut=15):M==="energy"?(H.interventions={water:!1,demand:!1,energy:!0,crew:!1,crop:!1},H.waterUplift=35,H.workloadCut=15):M==="balanced"&&(H.interventions={water:!0,demand:!1,energy:!0,crew:!0,crop:!0},H.waterUplift=40,H.workloadCut=25),["water","demand","energy","crew","crop"].forEach(L=>{const A=Me.querySelector("#int-"+L);A&&(A.checked=!!H.interventions[L])});const x=Me.querySelector("#waterUplift");if(x){x.value=H.waterUplift;const L=Me.querySelector("#waterUpliftOut");L&&(L.textContent=H.waterUplift+"%")}const E=Me.querySelector("#workloadCut");if(E){E.value=H.workloadCut;const L=Me.querySelector("#workloadCutOut");L&&(L.textContent=H.workloadCut+"%")}wi()})}),(p=Me.querySelector("#runIntervention"))==null||p.addEventListener("click",()=>{je("success"),wi(),Zv(Me.querySelector("#runIntervention")),on(`Simulation updated: RUN B extended to Day ${H.interventionAfter}`)}),(g=Me.querySelector("#resetIntervention"))==null||g.addEventListener("click",()=>{je("click"),["water","demand","energy","crew","crop"].forEach(x=>{H.interventions[x]=!1;const E=Me.querySelector("#int-"+x);E&&(E.checked=!1)}),H.waterUplift=35,H.workloadCut=15;const h=Me.querySelector("#waterUplift");if(h){h.value=35;const x=Me.querySelector("#waterUpliftOut");x&&(x.textContent="35%")}const M=Me.querySelector("#workloadCut");if(M){M.value=15;const x=Me.querySelector("#workloadCutOut");x&&(x.textContent="15%")}Me.querySelectorAll(".strategy").forEach(x=>x.classList.remove("active")),wi(),on("Interventions reset to baseline (RUN A = RUN B)")}),(v=Me.querySelector("#chatForm"))==null||v.addEventListener("submit",h=>{h.preventDefault(),je("click"),Xl(Me.querySelector("#chatInput").value)}),Me.querySelectorAll("[data-q]").forEach(h=>h.addEventListener("click",()=>{je("click"),Xl(h.dataset.q)})),(m=Me.querySelector("#reportExport"))==null||m.addEventListener("click",()=>{je("success"),on("Report view is ready for print / export integration")});const e=Me.querySelector("#selectionDock");if(e){let h=!1,M=0,x=0,E=0,L=0;e.addEventListener("pointerdown",w=>{if(w.target.closest("#clearSelection"))return;h=!0,e.classList.add("is-dragging"),e.setPointerCapture(w.pointerId),M=w.clientX,x=w.clientY;const N=e.getBoundingClientRect();E=N.left,L=N.top,w.stopPropagation()}),e.addEventListener("pointermove",w=>{if(!h)return;const N=w.clientX-M,b=w.clientY-x,y=window.innerWidth-e.offsetWidth-8,P=window.innerHeight-e.offsetHeight-8,z=Math.max(8,Math.min(y,E+N)),k=Math.max(74,Math.min(P,L+b));e.style.left=z+"px",e.style.top=k+"px",e.style.right="auto",e.style.bottom="auto",H.dockPos={x:z,y:k}});const A=w=>{if(!h)return;h=!1,e.classList.remove("is-dragging");try{e.releasePointerCapture(w.pointerId)}catch{}const N=e.getBoundingClientRect();H.dockPos={x:N.left,y:N.top}};e.addEventListener("pointerup",A),e.addEventListener("pointercancel",A)}Me.querySelectorAll("button").forEach(h=>{h.addEventListener("mouseenter",()=>je("hover"))});const t=document.getElementById("soundToggle");t&&t.addEventListener("click",function(){Ne.resume(),Kn=!Kn,this.textContent=Kn?"🔊 SOUND ON":"🔇 SOUND OFF",this.style.borderColor=Kn?"#35566f":"#6b2a2a",this.style.color=Kn?"#a9c8df":"#e87c7c",Kn&&je("click")}),H.route==="explore"&&Fl(ss,()=>{const h=Me.querySelector('[data-screen="explore"]');if(h){const M=h.querySelector(".hud");if(M){const x=M.querySelector(".expl-layout");x?(x.outerHTML=zc(ss),Fl(ss,()=>{},E=>{Ri("build")})):Tt()}}},h=>{var M;je("success"),on(`Analog confirmed: ${((M=h.confirmedAnalogId)==null?void 0:M.toUpperCase())||"selected site"}`),Ri("build")}),H.route==="build"&&kl(On,()=>{const h=Me.querySelector('[data-screen="build"]');if(h){const M=h.querySelector(".hud");if(M){const x=M.querySelector(".bld-layout");x?(x.outerHTML=Wc(On),kl(On,()=>Tt(),()=>{Ri("simulate")})):Tt()}}},()=>{Ri("simulate")}),H.route==="simulate"&&lv(On),H.route==="crew"&&_v(),$l()}function $l(){const i=be.activeEvent||"heat",e=Xi[i]||Xi.heat,t=H.selectedNode||e[0].node,n=e.find(o=>o.node===t)||e[0],r=vo.find(o=>o.id===n.node),s=Me.querySelector("#nodeTitle");s&&(s.textContent=r.label);const a=Me.querySelector("#nodeCause");a&&(a.textContent=n.msg)}function Xl(i){if(!(i!=null&&i.trim()))return;const e=Me.querySelector("#messages");if(!e)return;const t=document.createElement("div");t.className="message user",t.innerHTML=`<span>YOU</span><p>${Xv(i)}</p>`,e.appendChild(t);const n=document.createElement("div");n.className="message bot";let r;/water.*critical|why.*water/i.test(i)?r="The structured demo records the water threshold at Day 18 with 12% remaining. The heat event increases demand, and the dependency graph then propagates pressure into agriculture, food, and crew workload.":/30.*water|water.*storage/i.test(i)?r="The intervention layer can add water storage. The numerical result must come from the simulator; the frontend only reflects the configured intervention state.":/failure|chain/i.test(i)?r="The current path is Temperature Increase → Water Demand Rises → Water Reserve Falls → Agriculture Declines → Food Production Drops → Food Reserve Falls → Crew Capacity Exhausted.":r="I can explain the active simulation, failure path, or intervention tradeoffs. Numerical claims are restricted to values currently present in the structured demo state.",n.innerHTML=`<span>RESEARCHER</span><p>${r}</p>`,e.appendChild(n),e.scrollTop=e.scrollHeight}function Xv(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[e])}function qv(){const i=document.getElementById("landingParticles");if(i){i.innerHTML="";for(let e=0;e<50;e++){const t=document.createElement("div");t.className="particle",t.style.left=Math.random()*100+"%",t.style.animationDelay=Math.random()*8+"s",t.style.animationDuration=8+Math.random()*7+"s",i.appendChild(t)}}}function Yv(){document.querySelectorAll(".landing-copy > *").forEach((e,t)=>{e.style.animationDelay=`${t*.15}s`}),qv()}function jv(){const i=H.tutorial;document.querySelectorAll("[data-tutorial]").forEach((t,n)=>{n===i?t.style.animation="borderPulse 2s ease-in-out infinite":t.style.animation="none"})}function Kv(){const i=document.querySelectorAll(".trace-node"),e=document.querySelectorAll(".trace-edge");i.forEach((t,n)=>{setTimeout(()=>{t.classList.add("active"),n<e.length&&e[n].classList.add("active")},n*400)})}function Ci(){document.querySelectorAll(".progress i").forEach(e=>{const t=e.style.width;e.style.width="0%",setTimeout(()=>{e.style.width=t},100)})}function Zv(i){i.style.animation="successPulse 0.6s ease-out",je("success"),setTimeout(()=>{i.style.animation=""},600)}function Jv(i){i.style.animation="warningPulse 2s ease-in-out infinite",je("warning")}function Ri(i){const e=document.querySelector(".screen.active");if(e&&(e.classList.add("exit"),setTimeout(()=>{e.classList.remove("active","exit")},300)),H.route=i,Tt(),setTimeout(()=>{const t=document.querySelector(`[data-screen="${i}"]`);t&&t.classList.add("active")},100),i==="explore"){const t=ot.find(n=>n.p.key==="earth");t&&_s(t)}i==="simulate"&&(H.playing=!0),i==="landing"?Yv():i==="tutorial"?jv():i==="trace"&&Kv()}function on(i){let e=document.querySelector("#toast");e||(e=document.createElement("div"),e.id="toast",Object.assign(e.style,{position:"fixed",left:"50%",bottom:"24px",transform:"translate(-50%,10px)",opacity:"0",zIndex:50,padding:"9px 12px",background:"#08111a",border:"1px solid #36516a",color:"#8eabc2",font:"8px var(--mono)",transition:".2s",pointerEvents:"none"}),document.body.appendChild(e)),e.textContent=i,requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translate(-50%,0)"}),clearTimeout(on.t),on.t=setTimeout(()=>{e.style.opacity="0",e.style.transform="translate(-50%,10px)"},1700)}let ql=performance.now(),Ln=0;function rd(i=performance.now()){requestAnimationFrame(rd);const e=Math.min(.05,(i-ql)/1e3);ql=i,Ln+=e,H.playing&&(H.days+=e*H.speed*H.direction);const t=H.days;mo.forEach(s=>{const a=ot.find(l=>l.p.key===s.key&&!l.moon);if(!a)return;const o=Iv(s,t);if(a.group.position.set(o.x,0,o.z),a.group.rotation.y+=e*(s.rotation>0?.25:-.18),s.key==="earth"){const l=ot.find(c=>c.p.key==="moon"&&c.moon);if(l){const c=t*(2*Math.PI/_n.moon.period*35);l.group.position.set(Math.cos(c)*_n.moon.orbit,0,Math.sin(c)*_n.moon.orbit)}}s.key==="mars"&&["phobos","deimos"].forEach(l=>{const c=ot.find(d=>d.p.key===l);if(c){const d=_n[l].period,f=t*(2*Math.PI/d);c.group.position.set(Math.cos(f)*_n[l].orbit,0,Math.sin(f)*_n[l].orbit),c.mesh.rotation.x+=e*.7,c.mesh.rotation.y+=e*1.1}})}),fr.rotation.y+=e*.018;const n=1+Math.sin(Ln*2.35)*.045;Pv.scale.setScalar(n),Lv.scale.setScalar(n*(1.01+Math.sin(Ln*1.2)*.025)),td.emissiveIntensity=2.45+Math.sin(Ln*2.1)*.28,vs.rotation.z+=e*.12,xs.rotation.x-=e*.075,vs.scale.setScalar(1+Math.sin(Ln*1.7)*.035),xs.scale.setScalar(1+Math.sin(Ln*1.25)*.025),la.rotation.y+=e*.0012,la.rotation.x+=e*11e-5,la.material.opacity=.77+Math.sin(Ln*1.6)*.07,Bi.rotation.y-=e*.0023,Bi.rotation.z+=e*6e-4,Bi.material.opacity=.2+Math.sin(Ln*1.9)*.08,Tv.rotation.y+=e*8e-4,Av.rotation.y+=e*24e-5,ot.forEach(s=>{const a=s===H.hover?1.09:1,o=s.mesh.scale.x+(a-s.mesh.scale.x)*Math.min(1,e*8);s.mesh.scale.setScalar(o)});const r=H.hover?1:0;if(xo.strength=.68+r*.2,hn.edgeStrength=2.6+r*1.5,!Et){const s=pr.x*.5,a=pr.y*.3;Pt.position.x+=(s-Pt.position.x)*e*2,Pt.position.y+=(7.5+a-Pt.position.y)*e*2}if(Et){Et.t=Math.min(1,Et.t+e/Et.duration);const s=Et.t*Et.t*(3-2*Et.t);Pt.position.lerpVectors(Et.startPos,Et.endPos,s),yt.target.lerpVectors(Et.startTarget,Et.endTarget,s),Et.t>=1&&(Et=null,yt.autoRotate=H.route==="landing")}H.route==="landing"||H.route==="tutorial"?(Dv(),yt.update(),ji.render()):(yt.update(),vt.render(Ot,Pt))}window.addEventListener("resize",()=>{Pt.aspect=innerWidth/innerHeight,Pt.updateProjectionMatrix(),vt.setSize(innerWidth,innerHeight),ji.setSize(innerWidth,innerHeight),hn.setSize(innerWidth,innerHeight)});let Zr=0;const Qv=setInterval(()=>{Zr+=17,yv.style.width=Math.min(Zr,100)+"%",Sv.textContent=["INITIALIZING CELESTIAL NAVIGATION","LOADING PLANETARY REFERENCE","CALIBRATING ORBITS","LINKING MISSION CONSOLE","READY"][Math.min(4,Math.floor(Zr/22))],Zr>=100&&(clearInterval(Qv),setTimeout(()=>{Vl.style.opacity="0",Vl.style.visibility="hidden"},450))},180);if(!H.selected){const i=ot.find(e=>e.p.key==="earth")||ot[0];i&&(H.selected=i)}Tt();rd();
