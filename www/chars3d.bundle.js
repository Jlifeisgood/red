(()=>{var gh=0,zl=1,_h=2;var _r=1,vh=2,As=3,Ri=0,hn=1,Sn=2,Tn=0,Cs=1,$n=2,kl=3,Vl=4,xh=5;var Yi=100,yh=101,Mh=102,bh=103,Sh=104,Th=200,wh=201,Eh=202,Ah=203,Gl=204,Hl=205,Ch=206,Rh=207,Ph=208,Ih=209,Nh=210,Lh=211,Dh=212,Uh=213,Fh=214,Ma=0,ba=1,gs=2,_s=3,Sa=4,Ta=5,wa=6,Ea=7,Wl=0,Oh=1,Bh=2,_n=0,vr=1,xr=2,yr=3,Mr=4,br=5,Sr=6,Tr=7;var Xl=300,Pi=301,Zi=302,Ka=303,Qa=304,wr=306,vs=1e3,Vn=1001,Aa=1002,Kt=1003,zh=1004;var Er=1005;var tn=1006,ja=1007;var qn=1008;var vn=1009,$l=1010,ql=1011,Rs=1012,eo=1013,Un=1014,Fn=1015,Wt=1016,to=1017,no=1018,Ps=1020,Yl=35902,Zl=35899,Jl=1021,Kl=1022,wn=1023,Gn=1026,Ii=1027,Ql=1028,io=1029,Ni=1030,so=1031;var ro=1033,Ar=33776,Cr=33777,Rr=33778,Pr=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37488,mo=37489,Ir=37490,go=37491,_o=37808,vo=37809,xo=37810,yo=37811,Mo=37812,bo=37813,So=37814,To=37815,wo=37816,Eo=37817,Ao=37818,Co=37819,Ro=37820,Po=37821,Io=36492,No=36494,Lo=36495,Do=36283,Uo=36284,Nr=36285,Fo=36286;var tr=2300,Ca=2301,xa=2302,Nl=2303,Ll=2400,Dl=2401,Ul=2402;var kh=3200;var jl=0,Vh=1,oi="",Ht="srgb",nr="srgb-linear",ir="linear",dt="srgb";var ya=7680;var Gh=519,Hh=512,Wh=513,Xh=514,Oo=515,$h=516,qh=517,Bo=518,Yh=519,Zh=35044;var ec="300 es",Ln=2e3,sr=2001;function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jh(){let n=rr("canvas");return n.style.display="block",n}var Xc={},xs=null;function tc(...n){let e="THREE."+n.shift();xs?xs("log",e,...n):console.log(e,...n)}function Kh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=Kh(n);let e="THREE."+n.shift();if(xs)xs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){n=Kh(n);let e="THREE."+n.shift();if(xs)xs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Wi(...n){let e=n.join(" ");e in Xc||(Xc[e]=!0,Ve(...n))}function Qh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var jh={[Ma]:ba,[gs]:wa,[Sa]:Ea,[_s]:Ta,[ba]:Ma,[wa]:gs,[Ea]:Sa,[Ta]:_s},Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cl=Math.PI/180,Ra=180/Math.PI;function Lr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function uf(n,e){return(n%e+e)%e}function hl(n,e,t){return(1-t)*n+t*e}function Zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var We=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],p=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*y;g<0&&(u=-u,d=-d,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let w=Math.acos(g),A=Math.sin(w);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+y*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+y*o;let w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-o*d,e[t+2]=c*p+h*d+o*u-l*f,e[t+3]=h*p-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new F,$c=new Wn,Ze=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],p=i[8],y=s[0],g=s[3],m=s[6],w=s[1],A=s[4],M=s[7],b=s[2],T=s[5],R=s[8];return r[0]=a*y+o*w+l*b,r[3]=a*g+o*A+l*T,r[6]=a*m+o*M+l*R,r[1]=c*y+h*w+f*b,r[4]=c*g+h*A+f*T,r[7]=c*m+h*M+f*R,r[2]=u*y+d*w+p*b,r[5]=u*g+d*A+p*T,r[8]=u*m+d*M+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=t*f+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=f*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(e,t)),this}rotate(e){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fl=new Ze,qc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){let n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:e,whitePoint:i,transfer:ir,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}var st=ff();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ns,Pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=rr("canvas")),ns.width=e.width,ns.height=e.height;let s=ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},df=0,ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dl(s[a].image)):r.push(dl(s[a]))}else r=dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var pf=0,pl=new F,cn=class n extends Hn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Vn,s=Vn,r=tn,a=qn,o=wn,l=vn,c=n.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Lr(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Xl;cn.DEFAULT_ANISOTROPY=1;var Pt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,M=(d+1)/2,b=(m+1)/2,T=(h+u)/4,R=(f+y)/4,v=(p+g)/4;return A>M&&A>b?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=T/i,r=R/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=v/r),this.set(i,s,r,t),this}let w=Math.sqrt((g-p)*(g-p)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(g-p)/w,this.y=(f-y)/w,this.z=(u-h)/w,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends Hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new cn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ys(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends Ia{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ar=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Rt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,f,u,d,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,d,p,y,g)}set(e,t,i,s,r,a,o,l,c,h,f,u,d,p,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,p=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,y=c*f;t[0]=u+y*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,y=c*f;t[0]=u-y*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,p=o*h,y=o*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=y-u*f,t[8]=p*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-y*f}else if(e.order==="XZY"){let u=a*l,d=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=a*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,i){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),mi.crossVectors(i,pn),mi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),mi.crossVectors(i,pn)),mi.normalize(),Jr.crossVectors(pn,mi),s[0]=mi.x,s[4]=Jr.x,s[8]=pn.x,s[1]=mi.y,s[5]=Jr.y,s[9]=pn.y,s[2]=mi.z,s[6]=Jr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],p=i[2],y=i[6],g=i[10],m=i[14],w=i[3],A=i[7],M=i[11],b=i[15],T=s[0],R=s[4],v=s[8],E=s[12],N=s[1],D=s[5],k=s[9],V=s[13],L=s[2],O=s[6],W=s[10],q=s[14],se=s[3],Y=s[7],ee=s[11],ne=s[15];return r[0]=a*T+o*N+l*L+c*se,r[4]=a*R+o*D+l*O+c*Y,r[8]=a*v+o*k+l*W+c*ee,r[12]=a*E+o*V+l*q+c*ne,r[1]=h*T+f*N+u*L+d*se,r[5]=h*R+f*D+u*O+d*Y,r[9]=h*v+f*k+u*W+d*ee,r[13]=h*E+f*V+u*q+d*ne,r[2]=p*T+y*N+g*L+m*se,r[6]=p*R+y*D+g*O+m*Y,r[10]=p*v+y*k+g*W+m*ee,r[14]=p*E+y*V+g*q+m*ne,r[3]=w*T+A*N+M*L+b*se,r[7]=w*R+A*D+M*O+b*Y,r[11]=w*v+A*k+M*W+b*ee,r[15]=w*E+A*V+M*q+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],y=e[7],g=e[11],m=e[15],w=l*d-c*u,A=o*d-c*f,M=o*u-l*f,b=a*d-c*h,T=a*u-l*h,R=a*f-o*h;return t*(y*w-g*A+m*M)-i*(p*w-g*b+m*T)+s*(p*A-y*b+m*R)-r*(p*M-y*T+g*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],y=e[13],g=e[14],m=e[15],w=t*o-i*a,A=t*l-s*a,M=t*c-r*a,b=i*l-s*o,T=i*c-r*o,R=s*c-r*l,v=h*y-f*p,E=h*g-u*p,N=h*m-d*p,D=f*g-u*y,k=f*m-d*y,V=u*m-d*g,L=w*V-A*k+M*D+b*N-T*E+R*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return e[0]=(o*V-l*k+c*D)*O,e[1]=(s*k-i*V-r*D)*O,e[2]=(y*R-g*T+m*b)*O,e[3]=(u*T-f*R-d*b)*O,e[4]=(l*N-a*V-c*E)*O,e[5]=(t*V-s*N+r*E)*O,e[6]=(g*M-p*R-m*A)*O,e[7]=(h*R-u*M+d*A)*O,e[8]=(a*k-o*N+c*v)*O,e[9]=(i*N-t*k-r*v)*O,e[10]=(p*T-y*M+m*w)*O,e[11]=(f*M-h*T-d*w)*O,e[12]=(o*E-a*D-l*v)*O,e[13]=(t*D-i*E+s*v)*O,e[14]=(y*A-p*b-g*w)*O,e[15]=(h*b-f*A+u*w)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,y=a*h,g=a*f,m=o*f,w=l*c,A=l*h,M=l*f,b=i.x,T=i.y,R=i.z;return s[0]=(1-(y+m))*b,s[1]=(d+M)*b,s[2]=(p-A)*b,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(u+m))*T,s[6]=(g+w)*T,s[7]=0,s[8]=(p+A)*R,s[9]=(g-w)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,f=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,t.setFromRotationMatrix(Rn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Ln)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===sr)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Ln)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===sr)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},is=new F,Rn=new Rt,mf=new F(0,0,0),gf=new F(1,1,1),mi=new F,Jr=new F,pn=new F,Zc=new Rt,Jc=new Wn,Mi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_f=0,Kc=new F,ss=new Wn,ei=new Rt,Kr=new F,Js=new F,vf=new F,xf=new Wn,Qc=new F(1,0,0),jc=new F(0,1,0),eh=new F(0,0,1),th={type:"added"},yf={type:"removed"},rs={type:"childadded",child:null},ml={type:"childremoved",child:null},dn=class n extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Mi,i=new Wn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Qc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kr.copy(e):Kr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Js,Kr,this.up):ei.lookAt(Kr,Js,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(ei),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),rs.child=e,this.dispatchEvent(rs),rs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new F(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ot=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mf={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=uf(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=gl(a,r,e+1/3),this.g=gl(a,r,e),this.b=gl(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return st.workingToColorSpace(rn.copy(this),e),Math.round(ot(rn.r*255,0,255))*65536+Math.round(ot(rn.g*255,0,255))*256+Math.round(ot(rn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(rn.copy(this),t);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ht){st.workingToColorSpace(rn.copy(this),e);let t=rn.r,i=rn.g,s=rn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Qr);let i=hl(gi.h,Qr.h,t),s=hl(gi.s,Qr.s,t),r=hl(gi.l,Qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ke;Ke.NAMES=eu;var bs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new F,ti=new F,_l=new F,ni=new F,as=new F,os=new F,nh=new F,vl=new F,xl=new F,yl=new F,Ml=new Pt,bl=new Pt,Sl=new Pt,yi=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),ti.subVectors(i,t),_l.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(ti),l=Pn.dot(_l),c=ti.dot(ti),h=ti.dot(_l),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ml.setScalar(0),bl.setScalar(0),Sl.setScalar(0),Ml.fromBufferAttribute(e,t),bl.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ml,r.x),a.addScaledVector(bl,r.y),a.addScaledVector(Sl,r.z),a}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ti.subVectors(e,t),Pn.cross(ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,i),os.subVectors(r,i),vl.subVectors(e,i);let l=as.dot(vl),c=os.dot(vl);if(l<=0&&c<=0)return t.copy(i);xl.subVectors(e,s);let h=as.dot(xl),f=os.dot(xl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(as,a);yl.subVectors(e,r);let d=as.dot(yl),p=os.dot(yl);if(p>=0&&d<=p)return t.copy(r);let y=d*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(os,o);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return nh.subVectors(r,s),o=(f-h)/(f-h+(d-p)),t.copy(s).addScaledVector(nh,o);let m=1/(g+y+u);return a=y*m,o=u*m,t.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),ea.subVectors(this.max,Ks),ls.subVectors(e.a,Ks),cs.subVectors(e.b,Ks),hs.subVectors(e.c,Ks),_i.subVectors(cs,ls),vi.subVectors(hs,cs),ki.subVectors(ls,hs);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-ki.z,ki.y,_i.z,0,-_i.x,vi.z,0,-vi.x,ki.z,0,-ki.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-ki.y,ki.x,0];return!Tl(t,ls,cs,hs,ea)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,ls,cs,hs,ea))?!1:(ta.crossVectors(_i,vi),t=[ta.x,ta.y,ta.z],Tl(t,ls,cs,hs,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new F,new F,new F,new F,new F,new F,new F,new F],In=new F,jr=new bi,ls=new F,cs=new F,hs=new F,_i=new F,vi=new F,ki=new F,Ks=new F,ea=new F,ta=new F,Vi=new F;function Tl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Vi.fromArray(n,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ft=new F,na=new We,bf=0,Jt=class extends Hn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var lr=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var cr=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var en=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sf=new bi,Qs=new F,wl=new F,Si=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(wl)),this.expandByPoint(Qs.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tf=0,bn=new Rt,El=new dn,us=new F,mn=new bi,js=new bi,Zt=new F,Bt=class n extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?cr:lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(mn.min,js.min),mn.expandByPoint(Zt),Zt.addVectors(mn.max,js.max),mn.expandByPoint(Zt)):(mn.expandByPoint(js.min),mn.expandByPoint(js.max))}mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Zt.add(us)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new F,l[v]=new F;let c=new F,h=new F,f=new F,u=new We,d=new We,p=new We,y=new F,g=new F;function m(v,E,N){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,N),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,N),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(D),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(D),o[v].add(y),o[E].add(y),o[N].add(y),l[v].add(g),l[E].add(g),l[N].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,E=w.length;v<E;++v){let N=w[v],D=N.start,k=N.count;for(let V=D,L=D+k;V<L;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new F,M=new F,b=new F,T=new F;function R(v){b.fromBufferAttribute(s,v),T.copy(b);let E=o[v];A.copy(E),A.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(T,E);let D=M.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,D)}for(let v=0,E=w.length;v<E;++v){let N=w[v],D=N.start,k=N.count;for(let V=D,L=D+k;V<L;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new Jt(u,h,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Al=new F,wf=new F,Ef=new Ze,Nn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Al.subVectors(i,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ef.getNormalMatrix(e),s=this.coplanarPoint(Al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Af=0,ai=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Cs,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Nn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var si=new F,Cl=new F,ia=new F,sa=new F,Ss=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cl.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),sa.copy(this.origin).sub(Cl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ia),o=sa.dot(this.direction),l=-sa.dot(ia),c=sa.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cl).addScaledVector(ia,u),d}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,p=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=i.x-a.x,w=i.y-a.y,A=i.z-a.z,M=Math.abs(l),b=Math.abs(c),T=Math.abs(h),R,v,E,N,D,k,V,L,O,W,q,se;if(M>=b&&M>=T?(E=l,k=f,O=p,se=m,l>=0?(R=c,v=h,N=u,D=d,V=y,L=g,W=w,q=A):(R=h,v=c,N=d,D=u,V=g,L=y,W=A,q=w)):b>=T?(E=c,k=u,O=y,se=w,c>=0?(R=h,v=l,N=d,D=f,V=g,L=p,W=A,q=m):(R=l,v=h,N=f,D=d,V=p,L=g,W=m,q=A)):(E=h,k=d,O=g,se=A,h>=0?(R=l,v=c,N=f,D=u,V=p,L=y,W=m,q=w):(R=c,v=l,N=u,D=f,V=y,L=p,W=w,q=m)),E===0)return null;let Y=R/E,ee=v/E,ne=1/E,Be=N-Y*k,Pe=D-ee*k,xt=V-Y*O,at=L-ee*O,lt=W-Y*se,J=q-ee*se,te=lt*at-J*xt,Se=Be*J-Pe*lt,$e=xt*Pe-at*Be;if(s){if(te<0||Se<0||$e<0)return null}else if((te<0||Se<0||$e<0)&&(te>0||Se>0||$e>0))return null;let Me=te+Se+$e;if(Me===0)return null;let Je=ne*(te*k+Se*O+$e*se);return(Me>0?Je<0:Je>0)?null:this.at(Je/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ih=new Rt,Gi=new Ss,ra=new Si,sh=new F,aa=new F,oa=new F,la=new F,Rl=new F,ca=new F,rh=new F,ha=new F,zt=class extends dn{constructor(e=new Bt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Rl.fromBufferAttribute(f,e),a?ca.addScaledVector(Rl,h):ca.addScaledVector(Rl.sub(t),h))}t.add(ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(ra.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ra,sh)===null||Gi.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],w=Math.max(g.start,d.start),A=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=w,b=A;M<b;M+=3){let T=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);s=ua(this,m,e,i,c,h,f,T,R,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let g=p,m=y;g<m;g+=3){let w=o.getX(g),A=o.getX(g+1),M=o.getX(g+2);s=ua(this,a,e,i,c,h,f,w,A,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],w=Math.max(g.start,d.start),A=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=w,b=A;M<b;M+=3){let T=M,R=M+1,v=M+2;s=ua(this,m,e,i,c,h,f,T,R,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=p,m=y;g<m;g+=3){let w=g,A=g+1,M=g+2;s=ua(this,a,e,i,c,h,f,w,A,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Cf(n,e,t,i,s,r,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ri,o),l===null)return null;ha.copy(o),ha.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:n}}function ua(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,aa),n.getVertexPosition(l,oa),n.getVertexPosition(c,la);let h=Cf(n,e,t,i,aa,oa,la,rh);if(h){let f=new F;yi.getBarycoord(rh,aa,oa,la,f),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,f,new We)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,f,new We)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,f,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};yi.getNormal(aa,oa,la,u.normal),h.face=u,h.barycoord=f}return h}var La=class extends cn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Kt,h=Kt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=new Si,Rf=new We(.5,.5),fa=new F,hr=class{constructor(e=new Nn,t=new Nn,i=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],y=r[9],g=r[10],m=r[11],w=r[12],A=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,d-h,m-p,b-w).normalize(),s[1].setComponents(c+a,d+h,m+p,b+w).normalize(),s[2].setComponents(c+o,d+f,m+y,b+A).normalize(),s[3].setComponents(c-o,d-f,m-y,b-A).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,d-u,m-g,b-M).normalize();else if(s[4].setComponents(c-l,d-u,m-g,b-M).normalize(),t===Ln)s[5].setComponents(c+l,d+u,m+g,b+M).normalize();else if(t===sr)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=Rf.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(fa.x=s.normal.x>0?e.max.x:e.min.x,fa.y=s.normal.y>0?e.max.y:e.min.y,fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xi=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Da=new F,Ua=new F,ah=new Rt,er=new Ss,da=new Si,Pl=new F,oh=new F,Ts=class extends dn{constructor(e=new Bt,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Da.fromBufferAttribute(t,s-1),Ua.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Da.distanceTo(Ua);e.setAttribute("lineDistance",new en(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;ah.copy(s).invert(),er.copy(e.ray).applyMatrix4(ah);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=d,g=p-1;y<g;y+=c){let m=h.getX(y),w=h.getX(y+1),A=pa(this,e,er,l,m,w,y);A&&t.push(A)}if(this.isLineLoop){let y=h.getX(p-1),g=h.getX(d),m=pa(this,e,er,l,y,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let y=d,g=p-1;y<g;y+=c){let m=pa(this,e,er,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=pa(this,e,er,l,p-1,d,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pa(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Da.fromBufferAttribute(o,s),Ua.fromBufferAttribute(o,r),t.distanceSqToSegment(Da,Ua,Pl,oh)>i)return;Pl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:oh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var lh=new F,ch=new F,ur=class extends Ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)lh.fromBufferAttribute(t,s),ch.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lh.distanceTo(ch);e.setAttribute("lineDistance",new en(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ti=class extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hh=new Rt,Fl=new Ss,ma=new Si,ga=new F,$i=class extends dn{constructor(e=new Bt,t=new Ti){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;hh.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,y=d;p<y;p++){let g=c.getX(p);ga.fromBufferAttribute(f,g),uh(ga,g,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,y=d;p<y;p++)ga.fromBufferAttribute(f,p),uh(ga,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uh(n,e,t,i,s,r,a){let o=Fl.distanceSqToPoint(n);if(o<t){let l=new F;Fl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fr=class extends cn{constructor(e=[],t=Pi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qi=class extends cn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends cn{constructor(e,t,i=Un,s,r,a,o=Kt,l=Kt,c,h=Gn,f=1){if(h!==Gn&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fa=class extends wi{constructor(e,t=Un,i=Pi,s,r,a=Kt,o=Kt,l,c=Gn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},dr=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ws=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(f,2));function p(y,g,m,w,A,M,b,T,R,v,E){let N=M/R,D=b/v,k=M/2,V=b/2,L=T/2,O=R+1,W=v+1,q=0,se=0,Y=new F;for(let ee=0;ee<W;ee++){let ne=ee*D-V;for(let Be=0;Be<O;Be++){let Pe=Be*N-k;Y[y]=Pe*w,Y[g]=ne*A,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[g]=0,Y[m]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Be/R),f.push(1-ee/v),q+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<R;ne++){let Be=u+ne+O*ee,Pe=u+ne+O*(ee+1),xt=u+(ne+1)+O*(ee+1),at=u+(ne+1)+O*ee;l.push(Be,Pe,at),l.push(Pe,xt,at),se+=6}o.addGroup(d,se,E),d+=se,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Dn=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let w=m*u-a;for(let A=0;A<c;A++){let M=A*f-r;p.push(M,-w,0),y.push(0,0,1),g.push(A/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let A=w+c*m,M=w+c*(m+1),b=w+1+c*(m+1),T=w+1+c*m;d.push(A,M,T),d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ji(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(fh(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(fh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=Ji(n[t]);for(let s in i)e[s]=i[s]}return e}function fh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var li={clone:Ji,merge:an},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new We().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Es=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Oa=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ba=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Il(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ei=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},za=class extends Ei{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dl:r=e,o=2*t-i;break;case Ul:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dl:a=e,l=2*i-t;break;case Ul:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,w=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,A=(-1-d)*g+(1.5+d)*y+.5*p,M=d*g-d*y;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+w*a[c+b]+A*a[l+b]+M*a[f+b];return r}},ka=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Va=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ga=class extends Ei{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-t)/(s-t),y=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*p;return r}let u=o*2,d=e-1;for(let p=0;p!==o;++p){let y=a[c+p],g=a[l+p],m=d*u+p*2,w=f[m],A=f[m+1],M=e*u+p*2,b=h[M],T=h[M+1],R=Df(i,t,w,b,s);r[p]=tu(R,y,A,T,g)}return r}};function tu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Lf(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Df(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=tu(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Lf(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fs(t,this.TimeBufferType),this.values=fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fs(e.times,Array),values:fs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Il(e.settings)&&(i.settings={inTangents:fs(e.settings.inTangents,Array),outTangents:fs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ga(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ca:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break;case Nl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Il(this.settings)&&(dh(this.settings.inTangents,e),dh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let p=0;p!==i;++p){let y=t[f+p];if(y!==t[u+p]||y!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ca;var Ai=class extends gn{constructor(e,t,i){super(e,t,i)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=tr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};Ha.prototype.ValueTypeName="color";var Wa=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};Wa.prototype.ValueTypeName="number";var Xa=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},pr=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends gn{constructor(e,t,i){super(e,t,i)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=tr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};$a.prototype.ValueTypeName="vector";var qa=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nu=new qa,Ya=class{constructor(e){this.manager=e!==void 0?e:nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var _a=new F,va=new Wn,kn=new F,mr=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_a,va,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_a,va,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new F,ph=new We,mh=new We,fn=class extends mr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,ph,mh),t.subVectors(mh,ph)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Xn=class extends mr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ds=-90,ps=1,Za=class extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(ds,ps,e,t);s.layers=this.layers,this.add(s);let r=new fn(ds,ps,e,t);r.layers=this.layers,this.add(r);let a=new fn(ds,ps,e,t);a.layers=this.layers,this.add(a);let o=new fn(ds,ps,e,t);o.layers=this.layers,this.add(o);let l=new fn(ds,ps,e,t);l.layers=this.layers,this.add(l);let c=new fn(ds,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ja=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},gr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Uf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Uf(){this._document.hidden===!1&&this.reset()}var ic="\\[\\]\\.:\\/",Ff=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",Of="[^"+ic.replace("\\.","")+"]",Bf=/((?:WC+[\/:])*)/.source.replace("WC",sc),zf=/(WCOD+)?/.source.replace("WCOD",Of),kf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),Vf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),Gf=new RegExp("^"+Bf+zf+kf+Vf+"$"),Hf=["material","materials","bones","map"],Ol=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ff,"")}static parseTrackName(e){let t=Gf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Ol;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T_=new Float32Array(1);var Bl=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function rc(n,e,t,i){let s=Wf(i);switch(t){case Jl:return n*e;case Ql:return n*e/s.components*s.byteLength;case io:return n*e/s.components*s.byteLength;case Ni:return n*e*2/s.components*s.byteLength;case so:return n*e*2/s.components*s.byteLength;case Kl:return n*e*3/s.components*s.byteLength;case wn:return n*e*4/s.components*s.byteLength;case ro:return n*e*4/s.components*s.byteLength;case Ar:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(n,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(n,8)*Math.max(e,8)/2;case ho:case uo:case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:case Ir:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case No:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Do:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nr:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wf(n){switch(n){case vn:case $l:return{byteLength:1,components:1};case Rs:case ql:case Wt:return{byteLength:2,components:1};case to:case no:return{byteLength:2,components:4};case Un:case eo:case Fn:return{byteLength:4,components:1};case Yl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $f(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],y=f[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let y=f[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
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
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,od=`#ifdef USE_BUMPMAP
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
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Xd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$d=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,um=`#define MATCAP
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
}`,fm=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_m=`#define STANDARD
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
}`,vm=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,xm=`#define TOON
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
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Mm=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Tm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Em=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:Kf,alphatest_pars_fragment:Qf,aomap_fragment:jf,aomap_pars_fragment:ed,batching_pars_vertex:td,batching_vertex:nd,begin_vertex:id,beginnormal_vertex:sd,bsdfs:rd,iridescence_fragment:ad,bumpmap_pars_fragment:od,clipping_planes_fragment:ld,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:hd,clipping_planes_vertex:ud,color_fragment:fd,color_pars_fragment:dd,color_pars_vertex:pd,color_vertex:md,common:gd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:vd,displacementmap_pars_vertex:xd,displacementmap_vertex:yd,emissivemap_fragment:Md,emissivemap_pars_fragment:bd,colorspace_fragment:Sd,colorspace_pars_fragment:Td,envmap_fragment:wd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:Ad,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:zd,envmap_vertex:Rd,fog_vertex:Pd,fog_pars_vertex:Id,fog_fragment:Nd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Fd,lights_lambert_pars_fragment:Od,lights_pars_begin:Bd,lights_toon_fragment:kd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Gd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:$d,lights_fragment_maps:qd,lights_fragment_end:Yd,lightprobes_pars_fragment:Zd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:jd,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:fp,normal_pars_fragment:dp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:bp,premultiplied_alpha_fragment:Sp,project_vertex:Tp,dithering_fragment:wp,dithering_pars_fragment:Ep,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Np,skinbase_vertex:Lp,skinning_pars_vertex:Dp,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Vp,transmission_pars_fragment:Gp,uv_pars_fragment:Hp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:$p,background_vert:qp,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:Jp,cube_vert:Kp,cube_frag:Qp,depth_vert:jp,depth_frag:em,distance_vert:tm,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:fm,meshnormal_vert:dm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:vm,meshtoon_vert:xm,meshtoon_frag:ym,points_vert:Mm,points_frag:bm,shadow_vert:Sm,shadow_frag:Tm,sprite_vert:wm,sprite_frag:Em},_e={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Zn={basic:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:an([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:an([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:an([_e.points,_e.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:an([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:an([_e.common,_e.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:an([_e.sprite,_e.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:an([_e.common,_e.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:an([_e.lights,_e.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Zn.physical={uniforms:an([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var zo={r:0,b:0,g:0},Am=new Rt,wu=new Ze;wu.set(-1,0,0,0,1,0,0,0,1);function Cm(n,e,t,i,s,r){let a=new Ke(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){let M=w.backgroundBlurriness>0;A=e.get(A,M)}return A}function p(w){let A=!1,M=d(w);M===null?g(a,o):M&&M.isColor&&(g(M,1),A=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(w,A){let M=d(A);M&&(M.isCubeTexture||M.mapping===wr)?(c===void 0&&(c=new zt(new ws(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Ji(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wu),c.material.toneMapped=st.getTransfer(M.colorSpace)!==dt,(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new zt(new Dn(2,2),new Dt({name:"BackgroundMaterial",uniforms:Ji(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=st.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,A){w.getRGB(zo,nc(n)),t.buffers.color.setClear(zo.r,zo.g,zo.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:p,addToRenderList:y,dispose:m}}function Rm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(D,k,V,L,O){let W=!1,q=f(D,L,V,k);r!==q&&(r=q,c(r.object)),W=d(D,L,V,O),W&&p(D,L,V,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(D,k,V,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function f(D,k,V,L){let O=L.wireframe===!0,W=i[k.id];W===void 0&&(W={},i[k.id]=W);let q=D.isInstancedMesh===!0?D.id:0,se=W[q];se===void 0&&(se={},W[q]=se);let Y=se[V.id];Y===void 0&&(Y={},se[V.id]=Y);let ee=Y[O];return ee===void 0&&(ee=u(l()),Y[O]=ee),ee}function u(D){let k=[],V=[],L=[];for(let O=0;O<t;O++)k[O]=0,V[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:L,object:D,attributes:{},index:null}}function d(D,k,V,L){let O=r.attributes,W=k.attributes,q=0,se=V.getAttributes();for(let Y in se)if(se[Y].location>=0){let ne=O[Y],Be=W[Y];if(Be===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Be=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Be=D.instanceColor)),ne===void 0||ne.attribute!==Be||Be&&ne.data!==Be.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function p(D,k,V,L){let O={},W=k.attributes,q=0,se=V.getAttributes();for(let Y in se)if(se[Y].location>=0){let ne=W[Y];ne===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let Be={};Be.attribute=ne,ne&&ne.data&&(Be.data=ne.data),O[Y]=Be,q++}r.attributes=O,r.attributesNum=q,r.index=L}function y(){let D=r.newAttributes;for(let k=0,V=D.length;k<V;k++)D[k]=0}function g(D){m(D,0)}function m(D,k){let V=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;V[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),O[D]!==k&&(n.vertexAttribDivisor(D,k),O[D]=k)}function w(){let D=r.newAttributes,k=r.enabledAttributes;for(let V=0,L=k.length;V<L;V++)k[V]!==D[V]&&(n.disableVertexAttribArray(V),k[V]=0)}function A(D,k,V,L,O,W,q){q===!0?n.vertexAttribIPointer(D,k,V,O,W):n.vertexAttribPointer(D,k,V,L,O,W)}function M(D,k,V,L){y();let O=L.attributes,W=V.getAttributes(),q=k.defaultAttributeValues;for(let se in W){let Y=W[se];if(Y.location>=0){let ee=O[se];if(ee===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){let ne=ee.normalized,Be=ee.itemSize,Pe=e.get(ee);if(Pe===void 0)continue;let xt=Pe.buffer,at=Pe.type,lt=Pe.bytesPerElement,J=at===n.INT||at===n.UNSIGNED_INT||ee.gpuType===eo;if(ee.isInterleavedBufferAttribute){let te=ee.data,Se=te.stride,$e=ee.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me,te.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<Y.locationSize;Me++)g(Y.location+Me);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Me=0;Me<Y.locationSize;Me++)A(Y.location+Me,Be/Y.locationSize,at,ne,Se*lt,($e+Be/Y.locationSize*Me)*lt,J)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)m(Y.location+te,ee.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<Y.locationSize;te++)g(Y.location+te);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let te=0;te<Y.locationSize;te++)A(Y.location+te,Be/Y.locationSize,at,ne,Be*lt,Be/Y.locationSize*te*lt,J)}}else if(q!==void 0){let ne=q[se];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Y.location,ne);break;case 3:n.vertexAttrib3fv(Y.location,ne);break;case 4:n.vertexAttrib4fv(Y.location,ne);break;default:n.vertexAttrib1fv(Y.location,ne)}}}}w()}function b(){E();for(let D in i){let k=i[D];for(let V in k){let L=k[V];for(let O in L){let W=L[O];for(let q in W)h(W[q].object),delete W[q];delete L[O]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let k=i[D.id];for(let V in k){let L=k[V];for(let O in L){let W=L[O];for(let q in W)h(W[q].object),delete W[q];delete L[O]}}delete i[D.id]}function R(D){for(let k in i){let V=i[k];for(let L in V){let O=V[L];if(O[D.id]===void 0)continue;let W=O[D.id];for(let q in W)h(W[q].object),delete W[q];delete O[D.id]}}}function v(D){for(let k in i){let V=i[k],L=D.isInstancedMesh===!0?D.id:0,O=V[L];if(O!==void 0){for(let W in O){let q=O[W];for(let se in q)h(q[se].object),delete q[se];delete O[W]}delete V[L],Object.keys(V).length===0&&delete i[k]}}}function E(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}function Pm(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vn&&R!==Fn&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:M,maxSamples:b,samples:T}}function Nm(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Nn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let w=r?0:i,A=w*4,M=m.clippingState||null;l.value=M,M=h(p,u,A,d);for(let b=0;b!==A;++b)M[b]=t[b];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,p){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=d+y*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,M=d;A!==y;++A,M+=4)a.copy(f[A]).applyMatrix4(w,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Ns=4,Lm=6,Dm=20,Um=256,Dr=new Xn,iu=new Ke,ac=null,oc=0,lc=0,cc=!1,Fm=new F,Ki=new F,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Fm}=r;ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,oc,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Wt,format:wn,colorSpace:nr,depthBuffer:!1},s=su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Om(r)),this._blurMaterial=zm(r,e,t),this._ggxMaterial=Bm(r,e,t)}return s}_compileMaterial(e){let t=new zt(new Bt,e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,i,s,r){let l=new fn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(iu),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new ws,new Qt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,m=!0):(g.color.copy(iu),m=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let b=this._cubeSize;Is(s,M*b,A>2?b:0,b,b),f.setRenderTarget(s),m&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Pi||e.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Dr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,y=this._sizeLods[i],g=3*y*(i>p-Ns?i-p+Ns:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Is(r,g,m,3*y,2*y),s.setRenderTarget(r),s.render(o,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Is(e,g,m,3*y,2*y),s.setRenderTarget(e),s.render(o,Dr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ns?s-this._lodMax+Ns:0),u=4*(this._cubeSize-h);Is(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Dr)}};function Om(n){let e=[],t=[],i=n,s=n-Ns+1+Lm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let m=0;m<f;m++){let w=m%3*2/3-1,A=m>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];p.set(M,d*u*m);for(let b=0;b<u;b++){let T=h[b*2]*2-1,R=h[b*2+1]*2-1;m===0?Ki.set(1,R,T):m===1?Ki.set(-T,1,-R):m===2?Ki.set(-T,R,1):m===3?Ki.set(-1,R,-T):m===4?Ki.set(-T,-1,R):Ki.set(T,R,-1),Ki.toArray(y,(m*u+b)*d)}}let g=new Bt;g.setAttribute("position",new Jt(p,d)),g.setAttribute("outputDirection",new Jt(y,d)),t.push(new zt(g,null)),i>Ns&&i--}return{lodMeshes:t,sizeLods:e}}function su(n,e,t){let i=new It(n,e,t);return i.texture.mapping=wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Bm(n,e,t){return new Dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function zm(n,e,t){return new Dt({name:"SphericalGaussianBlur",defines:{SAMPLES:Dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ru(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function au(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Go=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ws(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Tn});r.uniforms.tEquirect.value=t;let a=new zt(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=tn),new Za(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function km(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ka||d===Qa)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Go(p.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===Ka||d===Qa,y=d===Pi||d===Zi;if(p||y){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Vo(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let w=u.image;return p&&w&&w.height>0||y&&w&&l(w)?(i===null&&(i=new Vo(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Ka?u.mapping=Pi:d===Qa&&(u.mapping=Zi),u}function l(u){let d=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Vm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Wi("WebGLRenderer: "+i+" extension not supported."),s}}}function Gm(n,e,t,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,y=0;if(p===void 0)return;if(d!==null){let w=d.array;y=d.version;for(let A=0,M=w.length;A<M;A+=3){let b=w[A+0],T=w[A+1],R=w[A+2];u.push(b,T,T,R,R,b)}}else{let w=p.array;y=p.version;for(let A=0,M=w.length/3-1;A<M;A+=3){let b=A+0,T=A+1,R=A+2;u.push(b,T,T,R,R,b)}}let g=new(p.count>=65535?cr:lr)(u,1);g.version=y;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Hm(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let g=0;g<d;g++)y+=u[g];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Xm(n,e,t){let i=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],A=0;d===!0&&(A=1),p===!0&&(A=2),y===!0&&(A=3);let M=o.attributes.position.count*A,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*b*4*f),R=new ar(T,M,b,f);R.type=Fn,R.needsUpdate=!0;let v=A*4;for(let N=0;N<f;N++){let D=g[N],k=m[N],V=w[N],L=M*b*4*N;for(let O=0;O<D.count;O++){let W=O*v;d===!0&&(s.fromBufferAttribute(D,O),T[L+W+0]=s.x,T[L+W+1]=s.y,T[L+W+2]=s.z,T[L+W+3]=0),p===!0&&(s.fromBufferAttribute(k,O),T[L+W+4]=s.x,T[L+W+5]=s.y,T[L+W+6]=s.z,T[L+W+7]=0),y===!0&&(s.fromBufferAttribute(V,O),T[L+W+8]=s.x,T[L+W+9]=s.y,T[L+W+10]=s.z,T[L+W+11]=V.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new We(M,b)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function $m(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var qm={[vr]:"LINEAR_TONE_MAPPING",[xr]:"REINHARD_TONE_MAPPING",[yr]:"CINEON_TONE_MAPPING",[Mr]:"ACES_FILMIC_TONE_MAPPING",[Sr]:"AGX_TONE_MAPPING",[Tr]:"NEUTRAL_TONE_MAPPING",[br]:"CUSTOM_TONE_MAPPING"};function Ym(n,e,t,i,s,r){let a=new It(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Bt;c.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new en([0,2,0,0,2,0],2));let h=new Es({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new zt(c,h),u=new Xn(-1,1,1,-1,0,1),d=null,p=null,y=!1,g,m=null,w=[],A=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let T=0;T<w.length;T++){let R=w[T];R.setSize&&R.setSize(M,b)}},this.setEffects=function(M){w=M,A=w.length>0&&w[0].isRenderPass===!0;let b=a.width,T=a.height;w.length>0&&o===null&&(o=new It(b,T,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new It(b,T,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){let v=w[R];v.setSize&&v.setSize(b,T)}},this.begin=function(M,b){if(y||M.toneMapping===_n&&w.length===0)return!1;if(m=b,b!==null){let T=b.width,R=b.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return A===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=_n,!0},this.hasRenderPass=function(){return A},this.end=function(M,b){M.toneMapping=g,y=!0;let T=a,R=o;for(let v=0;v<w.length;v++){let E=w[v];E.enabled!==!1&&(E.render(M,R,T,b),E.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(d!==M.outputColorSpace||p!==M.toneMapping){d=M.outputColorSpace,p=M.toneMapping,h.defines={},st.getTransfer(d)===dt&&(h.defines.SRGB_TRANSFER="");let v=qm[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(m),M.render(f,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Eu=new cn,fc=new wi(1,1),Au=new ar,Cu=new Na,Ru=new fr,ou=[],lu=[],cu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function Ds(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function Qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function jm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),$t(t,i)}}function eg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,i))return;hu.set(i),n.uniformMatrix3fv(this.addr,!1,hu),$t(t,i)}}function tg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,i))return;cu.set(i),n.uniformMatrix4fv(this.addr,!1,cu),$t(t,i)}}function ng(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function ag(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function cg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function hg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fc.compareFunction=t.isReversedDepthBuffer()?Bo:Oo,r=fc):r=Eu,t.setTexture2D(e||r,s)}function ug(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cu,s)}function fg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ru,s)}function dg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Au,s)}function pg(n){switch(n){case 5126:return Zm;case 35664:return Jm;case 35665:return Km;case 35666:return Qm;case 35674:return jm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}function mg(n,e){n.uniform1fv(this.addr,e)}function gg(n,e){let t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function _g(n,e){let t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function vg(n,e){let t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function xg(n,e){let t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yg(n,e){let t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mg(n,e){let t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bg(n,e){n.uniform1iv(this.addr,e)}function Sg(n,e){n.uniform2iv(this.addr,e)}function Tg(n,e){n.uniform3iv(this.addr,e)}function wg(n,e){n.uniform4iv(this.addr,e)}function Eg(n,e){n.uniform1uiv(this.addr,e)}function Ag(n,e){n.uniform2uiv(this.addr,e)}function Cg(n,e){n.uniform3uiv(this.addr,e)}function Rg(n,e){n.uniform4uiv(this.addr,e)}function Pg(n,e,t){let i=this.cache,s=e.length,r=Wo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=fc:a=Eu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ig(n,e,t){let i=this.cache,s=e.length,r=Wo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cu,r[a])}function Ng(n,e,t){let i=this.cache,s=e.length,r=Wo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ru,r[a])}function Lg(n,e,t){let i=this.cache,s=e.length,r=Wo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Au,r[a])}function Dg(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return Tg;case 35669:case 35673:return wg;case 5125:return Eg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Lg}}var dc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pg(t.type)}},pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dg(t.type)}},mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},hc=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function Ug(n,e,t){let i=n.name,s=i.length;for(hc.lastIndex=0;;){let r=hc.exec(i),a=hc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fu(t,c===void 0?new dc(o,n,e):new pc(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new mc(o),fu(t,f)),t=f}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ug(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function du(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Fg=37297,Og=0;function Bg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var pu=new Ze;function zg(n){st._getMatrix(pu,st.workingColorSpace,n);let e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case ir:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bg(n.getShaderSource(e),o)}else return r}function kg(n,e){let t=zg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Vg={[vr]:"Linear",[xr]:"Reinhard",[yr]:"Cineon",[Mr]:"ACESFilmic",[Sr]:"AgX",[Tr]:"Neutral",[br]:"Custom"};function Gg(n,e){let t=Vg[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new F;function Hg(){st.getLuminanceCoefficients(ko);let n=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Xg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $g(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fr(n){return n!==""}function gu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(qg,Zg)}var Yg=new Map;function Zg(n,e){let t=nt[e];if(t===void 0){let i=Yg.get(e);if(i!==void 0)t=nt[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gc(t)}var Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(Jg,Kg)}function Kg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Qg={[_r]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function jg(n){return Qg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e0={[Pi]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE_UV"};function t0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":e0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var n0={[Zi]:"ENVMAP_MODE_REFRACTION"};function i0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":n0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s0={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function r0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":s0[n.combine]||"ENVMAP_BLENDING_NONE"}function a0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function o0(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=jg(t),c=t0(t),h=i0(t),f=r0(t),u=a0(t),d=Wg(t),p=Xg(r),y=s.createProgram(),g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(g=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?nt.tonemapping_pars_fragment:"",t.toneMapping!==_n?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,kg("linearToOutputTexel",t.outputColorSpace),Hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=gc(a),a=gu(a,t),a=_u(a,t),o=gc(o),o=gu(o,t),o=_u(o,t),a=vu(a),o=vu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=w+g+a,M=w+m+o,b=du(s,s.VERTEX_SHADER,A),T=du(s,s.FRAGMENT_SHADER,M);s.attachShader(y,b),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(T)||"",O=k.trim(),W=V.trim(),q=L.trim(),se=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,b,T);else{let ee=mu(s,b,"vertex"),ne=mu(s,T,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ee+`
`+ne)}else O!==""?Ve("WebGLProgram: Program Info Log:",O):(W===""||q==="")&&(Y=!1);Y&&(D.diagnostics={runnable:se,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(b),s.deleteShader(T),v=new Ls(s,y),E=$g(s,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(y,Fg)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Og++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}var l0=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vc(e),t.set(e,i)),i}},vc=class{constructor(e){this.id=l0++,this.code=e,this.usedTimes=0}};function c0(n){return n===Ni||n===Ir||n===Nr}function h0(n,e,t,i,s,r){let a=new or,o=new _c,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,E,N,D,k,V){let L=D.fog,O=k.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||W,q),Y=se&&se.mapping===wr?se.image.height:null,ee=d[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Be=ne!==void 0?ne.length:0,Pe=0;O.morphAttributes.position!==void 0&&(Pe=1),O.morphAttributes.normal!==void 0&&(Pe=2),O.morphAttributes.color!==void 0&&(Pe=3);let xt,at,lt,J;if(ee){let bt=Zn[ee];xt=bt.vertexShader,at=bt.fragmentShader}else{xt=v.vertexShader,at=v.fragmentShader;let bt=o.getVertexShaderStage(v),mt=o.getFragmentShaderStage(v);o.update(v,bt,mt),lt=bt.id,J=mt.id}let te=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),$e=k.isInstancedMesh===!0,Me=k.isBatchedMesh===!0,Je=!!v.map,Tt=!!v.matcap,Qe=!!se,$=!!v.aoMap,Re=!!v.lightMap,ae=!!v.bumpMap&&v.wireframe===!1,ze=!!v.normalMap,et=!!v.displacementMap,De=!!v.emissiveMap,be=!!v.metalnessMap,Ge=!!v.roughnessMap,C=v.anisotropy>0,vt=v.clearcoat>0,ut=v.dispersion>0,S=v.retroreflectivity>0,_=v.iridescence>0,U=v.sheen>0,G=v.transmission>0,Z=C&&!!v.anisotropyMap,oe=vt&&!!v.clearcoatMap,he=vt&&!!v.clearcoatNormalMap,K=vt&&!!v.clearcoatRoughnessMap,j=_&&!!v.iridescenceMap,ue=_&&!!v.iridescenceThicknessMap,Ue=U&&!!v.sheenColorMap,ge=U&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Fe=!!v.specularColorMap,ke=!!v.specularIntensityMap,je=G&&!!v.transmissionMap,I=G&&!!v.thicknessMap,de=!!v.gradientMap,Q=!!v.alphaMap,pe=v.alphaTest>0,ye=!!v.alphaHash,ie=!!v.extensions,Oe=_n;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=n.toneMapping);let Ie={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:xt,fragmentShader:at,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Me,batchingColor:Me&&k._colorsTexture!==null,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:Tt,envMap:Qe,envMapMode:Qe&&se.mapping,envMapCubeUVHeight:Y,aoMap:$,lightMap:Re,bumpMap:ae,normalMap:ze,displacementMap:et,emissiveMap:De,normalMapObjectSpace:ze&&v.normalMapType===Vh,normalMapTangentSpace:ze&&v.normalMapType===jl,packedNormalMap:ze&&v.normalMapType===jl&&c0(v.normalMap.format),metalnessMap:be,roughnessMap:Ge,anisotropy:C,anisotropyMap:Z,clearcoat:vt,clearcoatMap:oe,clearcoatNormalMap:he,clearcoatRoughnessMap:K,dispersion:ut,retroreflection:S,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:ue,sheen:U,sheenColorMap:Ue,sheenRoughnessMap:ge,specularMap:fe,specularColorMap:Fe,specularIntensityMap:ke,transmission:G,transmissionMap:je,thicknessMap:I,gradientMap:de,opaque:v.transparent===!1&&v.blending===Cs&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:ye,combine:v.combine,mapUv:Je&&p(v.map.channel),aoMapUv:$&&p(v.aoMap.channel),lightMapUv:Re&&p(v.lightMap.channel),bumpMapUv:ae&&p(v.bumpMap.channel),normalMapUv:ze&&p(v.normalMap.channel),displacementMapUv:et&&p(v.displacementMap.channel),emissiveMapUv:De&&p(v.emissiveMap.channel),metalnessMapUv:be&&p(v.metalnessMap.channel),roughnessMapUv:Ge&&p(v.roughnessMap.channel),anisotropyMapUv:Z&&p(v.anisotropyMap.channel),clearcoatMapUv:oe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(v.sheenRoughnessMap.channel),specularMapUv:fe&&p(v.specularMap.channel),specularColorMapUv:Fe&&p(v.specularColorMap.channel),specularIntensityMapUv:ke&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:I&&p(v.thicknessMap.channel),alphaMapUv:Q&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ze||C),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Je||Q),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&ze===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Pe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sn,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(m(E,v),w(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function w(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){let E=d[v.type],N;if(E){let D=Zn[E];N=li.clone(D.uniforms)}else N=v.uniforms;return N}function M(v,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new o0(n,E,v,s),c.push(N),h.set(E,N)),N}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:R}}function u0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function f0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,y,g,m){let w=n[e];return w===void 0?(w={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},n[e]=w):(w.id=u.id,w.object=u,w.geometry=d,w.material=p,w.materialVariant=a(u),w.groupOrder=y,w.renderOrder=u.renderOrder,w.z=g,w.group=m),e++,w}function l(u,d,p,y,g,m,w){w.reversedDepth===!0&&(g=-g);let A=o(u,d,p,y,g,m);p.transmission>0?i.push(A):p.transparent===!0?s.push(A):t.push(A)}function c(u,d,p,y,g,m){let w=o(u,d,p,y,g,m);p.transmission>0?i.unshift(w):p.transparent===!0?s.unshift(w):t.unshift(w)}function h(u,d){t.length>1&&t.sort(u||f0),i.length>1&&i.sort(d||yu),s.length>1&&s.sort(d||yu)}function f(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function d0(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Mu,n.set(i,[a])):s>=r.length?(a=new Mu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function p0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ke};break;case"SpotLight":t={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function m0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var g0=0;function _0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v0(n){let e=new p0,t=m0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new Rt,a=new Rt;function o(c){let h=0,f=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,p=0,y=0,g=0,m=0,w=0,A=0,M=0,b=0,T=0,R=0,v=0,E=0,N=0;c.sort(_0);for(let k=0,V=c.length;k<V;k++){let L=c[k],O=L.color,W=L.intensity,q=L.distance,se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ni?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*W,f+=O.g*W,u+=O.b*W;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],W);N++}else if(L.isSunLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[p]=ne,i.sunShadowMap[p]=se;let Be=ee.getViewportCount();for(let Pe=0;Pe<Be;Pe++)i.sunShadowMatrix[y+Pe]=ee.getMatrix(Pe),i.sunShadowCascade[y+Pe]=ee._cascadeData[Pe];y+=Be,p++}i.sun[d]=Y,d++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=se,i.directionalShadowMatrix[g]=L.shadow.matrix,b++}i.directional[g]=Y,g++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(W),Y.distance=q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[w]=Y;let ee=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,ee.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[w]=ee.matrix,L.castShadow){let ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[w]=ne,i.spotShadowMap[w]=se,R++}w++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[A]=Y,A++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=se,i.pointShadowMatrix[m]=L.shadow.matrix,T++}i.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(W),Y.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[M]=Y,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let D=i.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==w||D.rectAreaLength!==A||D.hemiLength!==M||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==T||D.numSpotShadows!==R||D.numSpotMaps!==v||D.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=g,i.spot.length=w,i.rectArea.length=A,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-E,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=N,D.sunLength=d,D.directionalLength=g,D.pointLength=m,D.spotLength=w,D.rectAreaLength=A,D.hemiLength=M,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=T,D.numSpotShadows=R,D.numSpotMaps=v,D.numLightProbes=N,i.version=g0++)}function l(c,h){let f=0,u=0,d=0,p=0,y=0,g=0,m=h.matrixWorldInverse;for(let w=0,A=c.length;w<A;w++){let M=c[w];if(M.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),f++}else if(M.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(M.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let b=i.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let b=i.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function bu(n){let e=new v0(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function x0(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new bu(n),e.set(s,[o])):r>=a.length?(o=new bu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],S0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Su=new Rt,Ur=new F,uc=new F;function T0(n,e,t){let i=new hr,s=new We,r=new We,a=new Pt,o=new Oa,l=new Ba,c={},h=t.maxTextureSize,f={[Ri]:hn,[hn]:Ri,[Sn]:Sn},u=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:y0,fragmentShader:M0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Bt;p.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new zt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let m=this.type;this.render=function(T,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===vh&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_r);let E=n.getRenderTarget(),N=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Tn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=m!==this.type;V&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=T.length;L<O;L++){let W=T[L],q=W.shadow;if(q===void 0){Ve("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let se=q.getFrameExtents();s.multiply(se),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,q.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||V===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===As){if(W.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new It(s.x,s.y,{format:Ni,type:Wt,minFilter:tn,magFilter:tn,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new wi(s.x,s.y,Fn),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=Gn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Kt,q.map.depthTexture.magFilter=Kt}else W.isPointLight?(q.map=new Go(s.x),q.map.depthTexture=new Fa(s.x,Un)):(q.map=new It(s.x,s.y),q.map.depthTexture=new wi(s.x,s.y,Un)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=Gn,this.type===_r?(q.map.depthTexture.compareFunction=Y?Bo:Oo,q.map.depthTexture.minFilter=tn,q.map.depthTexture.magFilter=tn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Kt,q.map.depthTexture.magFilter=Kt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ee=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,v);for(let ne=0;ne<ee;ne++){let Be=q.getCamera(ne);if(W.isPointLight){let Pe=q.camera,xt=q.matrix,at=W.distance||Pe.far;at!==Pe.far&&(Pe.far=at,Pe.updateProjectionMatrix()),Ur.setFromMatrixPosition(W.matrixWorld),Pe.position.copy(Ur),uc.copy(Pe.position),uc.add(b0[ne]),Pe.up.copy(S0[ne]),Pe.lookAt(uc),Pe.updateMatrixWorld(),xt.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Su.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Su,Pe.coordinateSystem,Pe.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(q.map),n.clear());let Pe=q.getViewport(ne);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),k.viewport(a)}i=q.getFrustum(ne),M(R,v,Be,W,this.type)}q.isPointLightShadow!==!0&&this.type===As&&w(q,v),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,N,D)};function w(T,R){let v=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new It(s.x,s.y,{format:Ni,type:Wt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,v,u,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,v,d,y,null)}function A(T,R,v,E){let N=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)N=D;else if(N=v.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=N.uuid,V=R.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let O=L[V];O===void 0&&(O=N.clone(),L[V]=O,R.addEventListener("dispose",b)),N=O}if(N.visible=R.visible,N.wireframe=R.wireframe,E===As?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:f[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let k=n.properties.get(N);k.light=v}return N}function M(T,R,v,E,N){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===As)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let V=e.update(T),L=T.material;if(Array.isArray(L)){let O=V.groups;for(let W=0,q=O.length;W<q;W++){let se=O[W],Y=L[se.materialIndex];if(Y&&Y.visible){let ee=A(T,Y,E,N);T.onBeforeShadow(n,T,R,v,V,ee,se),n.renderBufferDirect(v,null,V,ee,T,se),T.onAfterShadow(n,T,R,v,V,ee,se)}}}else if(L.visible){let O=A(T,L,E,N);T.onBeforeShadow(n,T,R,v,V,O,null),n.renderBufferDirect(v,null,V,O,T,null),T.onAfterShadow(n,T,R,v,V,O,null)}}let k=T.children;for(let V=0,L=k.length;V<L;V++)M(k[V],R,v,E,N)}function b(T){T.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],N=T.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function w0(n,e){function t(){let I=!1,de=new Pt,Q=null,pe=new Pt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!I&&(n.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){I=ye},setClear:function(ye,ie,Oe,Ie,bt){bt===!0&&(ye*=Ie,ie*=Ie,Oe*=Ie),de.set(ye,ie,Oe,Ie),pe.equals(de)===!1&&(n.clearColor(ye,ie,Oe,Ie),pe.copy(de))},reset:function(){I=!1,Q=null,pe.set(-1,0,0,0)}}}function i(){let I=!1,de=!1,Q=null,pe=null,ye=null;return{setReversed:function(ie){if(de!==ie){let Oe=e.get("EXT_clip_control");ie?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let Ie=ye;ye=null,this.setClear(Ie)}},getReversed:function(){return de},setTest:function(ie){ie?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!I&&(n.depthMask(ie),Q=ie)},setFunc:function(ie){if(de&&(ie=jh[ie]),pe!==ie){switch(ie){case Ma:n.depthFunc(n.NEVER);break;case ba:n.depthFunc(n.ALWAYS);break;case gs:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case Sa:n.depthFunc(n.EQUAL);break;case Ta:n.depthFunc(n.GEQUAL);break;case wa:n.depthFunc(n.GREATER);break;case Ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ie}},setLocked:function(ie){I=ie},setClear:function(ie){ye!==ie&&(ye=ie,de&&(ie=1-ie),n.clearDepth(ie))},reset:function(){I=!1,Q=null,pe=null,ye=null,de=!1}}}function s(){let I=!1,de=null,Q=null,pe=null,ye=null,ie=null,Oe=null,Ie=null,bt=null;return{setTest:function(mt){I||(mt?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(mt){de!==mt&&!I&&(n.stencilMask(mt),de=mt)},setFunc:function(mt,Cn,Bn){(Q!==mt||pe!==Cn||ye!==Bn)&&(n.stencilFunc(mt,Cn,Bn),Q=mt,pe=Cn,ye=Bn)},setOp:function(mt,Cn,Bn){(ie!==mt||Oe!==Cn||Ie!==Bn)&&(n.stencilOp(mt,Cn,Bn),ie=mt,Oe=Cn,Ie=Bn)},setLocked:function(mt){I=mt},setClear:function(mt){bt!==mt&&(n.clearStencil(mt),bt=mt)},reset:function(){I=!1,de=null,Q=null,pe=null,ye=null,ie=null,Oe=null,Ie=null,bt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],y=null,g=!1,m=null,w=null,A=null,M=null,b=null,T=null,R=null,v=new Ke(0,0,0),E=0,N=!1,D=null,k=null,V=null,L=null,O=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,se=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=se>=2);let ee=null,ne={},Be=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),xt=new Pt().fromArray(Be),at=new Pt().fromArray(Pe);function lt(I,de,Q,pe){let ye=new Uint8Array(4),ie=n.createTexture();n.bindTexture(I,ie),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<Q;Oe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(de+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ie}let J={};J[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(_s),ae(!1),ze(zl),te(n.CULL_FACE),$(Tn);function te(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Se(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function $e(I,de){return u[I]!==de?(n.bindFramebuffer(I,de),u[I]=de,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Me(I,de){let Q=p,pe=!1;if(I){Q=d.get(de),Q===void 0&&(Q=[],d.set(de,Q));let ye=I.textures;if(Q.length!==ye.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Oe=ye.length;ie<Oe;ie++)Q[ie]=n.COLOR_ATTACHMENT0+ie;Q.length=ye.length,pe=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,pe=!0);pe&&n.drawBuffers(Q)}function Je(I){return y!==I?(n.useProgram(I),y=I,!0):!1}let Tt={[Yi]:n.FUNC_ADD,[yh]:n.FUNC_SUBTRACT,[Mh]:n.FUNC_REVERSE_SUBTRACT};Tt[bh]=n.MIN,Tt[Sh]=n.MAX;let Qe={[Th]:n.ZERO,[wh]:n.ONE,[Eh]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[Nh]:n.SRC_ALPHA_SATURATE,[Ph]:n.DST_COLOR,[Ch]:n.DST_ALPHA,[Ah]:n.ONE_MINUS_SRC_COLOR,[Hl]:n.ONE_MINUS_SRC_ALPHA,[Ih]:n.ONE_MINUS_DST_COLOR,[Rh]:n.ONE_MINUS_DST_ALPHA,[Lh]:n.CONSTANT_COLOR,[Dh]:n.ONE_MINUS_CONSTANT_COLOR,[Uh]:n.CONSTANT_ALPHA,[Fh]:n.ONE_MINUS_CONSTANT_ALPHA};function $(I,de,Q,pe,ye,ie,Oe,Ie,bt,mt){if(I===Tn){g===!0&&(Se(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),I!==xh){if(I!==m||mt!==N){if((w!==Yi||b!==Yi)&&(n.blendEquation(n.FUNC_ADD),w=Yi,b=Yi),mt)switch(I){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kl:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",I);break}A=null,M=null,T=null,R=null,v.set(0,0,0),E=0,m=I,N=mt}return}ye=ye||de,ie=ie||Q,Oe=Oe||pe,(de!==w||ye!==b)&&(n.blendEquationSeparate(Tt[de],Tt[ye]),w=de,b=ye),(Q!==A||pe!==M||ie!==T||Oe!==R)&&(n.blendFuncSeparate(Qe[Q],Qe[pe],Qe[ie],Qe[Oe]),A=Q,M=pe,T=ie,R=Oe),(Ie.equals(v)===!1||bt!==E)&&(n.blendColor(Ie.r,Ie.g,Ie.b,bt),v.copy(Ie),E=bt),m=I,N=!1}function Re(I,de){I.side===Sn?Se(n.CULL_FACE):te(n.CULL_FACE);let Q=I.side===hn;de&&(Q=!Q),ae(Q),I.blending===Cs&&I.transparent===!1?$(Tn):$(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function ze(I){I!==gh?(te(n.CULL_FACE),I!==k&&(I===zl?n.cullFace(n.BACK):I===_h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),k=I}function et(I){I!==V&&(q&&n.lineWidth(I),V=I)}function De(I,de,Q){I?(te(n.POLYGON_OFFSET_FILL),(L!==de||O!==Q)&&(L=de,O=Q,a.getReversed()&&(de=-de),n.polygonOffset(de,Q))):Se(n.POLYGON_OFFSET_FILL)}function be(I){I?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Ge(I){I===void 0&&(I=n.TEXTURE0+W-1),ee!==I&&(n.activeTexture(I),ee=I)}function C(I,de,Q){Q===void 0&&(ee===null?Q=n.TEXTURE0+W-1:Q=ee);let pe=ne[Q];pe===void 0&&(pe={type:void 0,texture:void 0},ne[Q]=pe),(pe.type!==I||pe.texture!==de)&&(ee!==Q&&(n.activeTexture(Q),ee=Q),n.bindTexture(I,de||J[I]),pe.type=I,pe.texture=de)}function vt(){let I=ne[ee];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ut(){try{n.compressedTexImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function _(){try{n.texSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function U(){try{n.texSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function oe(){try{n.texStorage2D(...arguments)}catch(I){He("WebGLState:",I)}}function he(){try{n.texStorage3D(...arguments)}catch(I){He("WebGLState:",I)}}function K(){try{n.texImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function j(){try{n.texImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function ue(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function Ue(I,de){f[I]!==de&&(n.pixelStorei(I,de),f[I]=de)}function ge(I){xt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),xt.copy(I))}function fe(I){at.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),at.copy(I))}function Fe(I,de){let Q=c.get(de);Q===void 0&&(Q=new WeakMap,c.set(de,Q));let pe=Q.get(I);pe===void 0&&(pe=n.getUniformBlockIndex(de,I.name),Q.set(I,pe))}function ke(I,de){let pe=c.get(de).get(I);l.get(de)!==pe&&(n.uniformBlockBinding(de,pe,I.__bindingPointIndex),l.set(de,pe))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,ne={},u={},d=new WeakMap,p=[],y=null,g=!1,m=null,w=null,A=null,M=null,b=null,T=null,R=null,v=new Ke(0,0,0),E=0,N=!1,D=null,k=null,V=null,L=null,O=null,xt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:$e,drawBuffers:Me,useProgram:Je,setBlending:$,setMaterial:Re,setFlipSided:ae,setCullFace:ze,setLineWidth:et,setPolygonOffset:De,setScissorTest:be,activeTexture:Ge,bindTexture:C,unbindTexture:vt,compressedTexImage2D:ut,compressedTexImage3D:S,texImage2D:K,texImage3D:j,pixelStorei:Ue,getParameter:ue,updateUBOMapping:Fe,uniformBlockBinding:ke,texStorage2D:oe,texStorage3D:he,texSubImage2D:_,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:ge,viewport:fe,reset:je}}function E0(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,_){return p?new OffscreenCanvas(S,_):rr("canvas")}function g(S,_,U){let G=1,Z=ut(S);if((Z.width>U||Z.height>U)&&(G=U/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let oe=Math.floor(G*Z.width),he=Math.floor(G*Z.height);u===void 0&&(u=y(oe,he));let K=_?y(oe,he):u;return K.width=oe,K.height=he,K.getContext("2d").drawImage(S,0,0,oe,he),Ve("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+oe+"x"+he+")."),K}else return"data"in S&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function m(S){return S.generateMipmaps}function w(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,_,U,G,Z,oe=!1){if(S!==null){if(n[S]!==void 0)return n[S];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===n.RED&&(U===n.FLOAT&&(K=n.R32F),U===n.HALF_FLOAT&&(K=n.R16F),U===n.UNSIGNED_BYTE&&(K=n.R8),U===n.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),U===n.SHORT&&he&&(K=he.R16_SNORM_EXT)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.R8UI),U===n.UNSIGNED_SHORT&&(K=n.R16UI),U===n.UNSIGNED_INT&&(K=n.R32UI),U===n.BYTE&&(K=n.R8I),U===n.SHORT&&(K=n.R16I),U===n.INT&&(K=n.R32I)),_===n.RG&&(U===n.FLOAT&&(K=n.RG32F),U===n.HALF_FLOAT&&(K=n.RG16F),U===n.UNSIGNED_BYTE&&(K=n.RG8),U===n.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),U===n.SHORT&&he&&(K=he.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RG8UI),U===n.UNSIGNED_SHORT&&(K=n.RG16UI),U===n.UNSIGNED_INT&&(K=n.RG32UI),U===n.BYTE&&(K=n.RG8I),U===n.SHORT&&(K=n.RG16I),U===n.INT&&(K=n.RG32I)),_===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RGB8UI),U===n.UNSIGNED_SHORT&&(K=n.RGB16UI),U===n.UNSIGNED_INT&&(K=n.RGB32UI),U===n.BYTE&&(K=n.RGB8I),U===n.SHORT&&(K=n.RGB16I),U===n.INT&&(K=n.RGB32I)),_===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),U===n.UNSIGNED_INT&&(K=n.RGBA32UI),U===n.BYTE&&(K=n.RGBA8I),U===n.SHORT&&(K=n.RGBA16I),U===n.INT&&(K=n.RGBA32I)),_===n.RGB&&(U===n.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),U===n.SHORT&&he&&(K=he.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),_===n.RGBA){let j=oe?ir:st.getTransfer(Z);U===n.FLOAT&&(K=n.RGBA32F),U===n.HALF_FLOAT&&(K=n.RGBA16F),U===n.UNSIGNED_BYTE&&(K=j===dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),U===n.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(S,_){let U;return S?_===null||_===Un||_===Ps?U=n.DEPTH24_STENCIL8:_===Fn?U=n.DEPTH32F_STENCIL8:_===Rs&&(U=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Un||_===Ps?U=n.DEPTH_COMPONENT24:_===Fn?U=n.DEPTH_COMPONENT32F:_===Rs&&(U=n.DEPTH_COMPONENT16),U}function T(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Kt&&S.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){let _=S.target;_.removeEventListener("dispose",R),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function v(S){let _=S.target;_.removeEventListener("dispose",v),D(_)}function E(S){let _=i.get(S);if(_.__webglInit===void 0)return;let U=S.source,G=d.get(U);if(G){let Z=G[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(S),Object.keys(G).length===0&&d.delete(U)}i.remove(S)}function N(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let U=S.source,G=d.get(U);delete G[_.__cacheKey],a.memory.textures--}function D(S){let _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let Z=0;Z<_.__webglFramebuffer[G].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[G][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=S.textures;for(let G=0,Z=U.length;G<Z;G++){let oe=i.get(U[G]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(S)}let k=0;function V(){k=0}function L(){return k}function O(S){k=S}function W(){let S=k;return S>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,S}function q(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function se(S,_){let U=i.get(S);if(S.isVideoTexture&&C(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){let G=S.image;if(G===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(U,S,_);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function Y(S,_){let U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Se(U,S,_);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function ee(S,_){let U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Se(U,S,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function ne(S,_){let U=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&U.__version!==S.version){$e(U,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}let Be={[vs]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[Aa]:n.MIRRORED_REPEAT},Pe={[Kt]:n.NEAREST,[zh]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},xt={[Hh]:n.NEVER,[Yh]:n.ALWAYS,[Wh]:n.LESS,[Oo]:n.LEQUAL,[Xh]:n.EQUAL,[Bo]:n.GEQUAL,[$h]:n.GREATER,[qh]:n.NOTEQUAL};function at(S,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===ja||_.magFilter===Er||_.magFilter===qn||_.minFilter===tn||_.minFilter===ja||_.minFilter===Er||_.minFilter===qn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Be[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Be[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Be[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Pe[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Pe[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==Er&&_.minFilter!==qn||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function lt(S,_){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let G=_.source,Z=d.get(G);Z===void 0&&(Z={},d.set(G,Z));let oe=q(_);if(oe!==S.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[oe].usedTimes++;let he=Z[S.__cacheKey];he!==void 0&&(Z[S.__cacheKey].usedTimes--,he.usedTimes===0&&N(_)),S.__cacheKey=oe,S.__webglTexture=Z[oe].texture}return U}function J(S,_,U){return Math.floor(Math.floor(S/U)/_)}function te(S,_,U,G){let oe=S.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,U,G,_.data);else{oe.sort((Ue,ge)=>Ue.start-ge.start);let he=0;for(let Ue=1;Ue<oe.length;Ue++){let ge=oe[he],fe=oe[Ue],Fe=ge.start+ge.count,ke=J(fe.start,_.width,4),je=J(ge.start,_.width,4);fe.start<=Fe+1&&ke===je&&J(fe.start+fe.count-1,_.width,4)===ke?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++he,oe[he]=fe)}oe.length=he+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ue=0,ge=oe.length;Ue<ge;Ue++){let fe=oe[Ue],Fe=Math.floor(fe.start/4),ke=Math.ceil(fe.count/4),je=Fe%_.width,I=Math.floor(Fe/_.width),de=ke,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,je,I,de,Q,U,G,_.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function Se(S,_,U){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let Z=lt(S,_),oe=_.source;t.bindTexture(G,S.__webglTexture,n.TEXTURE0+U);let he=i.get(oe);if(oe.version!==he.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=st.getPrimaries(st.workingColorSpace),pe=_.colorSpace===oi?null:st.getPrimaries(_.colorSpace),ye=_.colorSpace===oi||Q===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let j=g(_.image,!1,s.maxTextureSize);j=vt(_,j);let ue=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),ge=M(_.internalFormat,ue,Ue,_.normalized,_.colorSpace,_.isVideoTexture);at(G,_);let fe,Fe=_.mipmaps,ke=_.isVideoTexture!==!0,je=he.__version===void 0||Z===!0,I=oe.dataReady,de=T(_,j);if(_.isDepthTexture)ge=b(_.format===Ii,_.type),je&&(ke?t.texStorage2D(n.TEXTURE_2D,1,ge,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ge,j.width,j.height,0,ue,Ue,null));else if(_.isDataTexture)if(Fe.length>0){ke&&je&&t.texStorage2D(n.TEXTURE_2D,de,ge,Fe[0].width,Fe[0].height);for(let Q=0,pe=Fe.length;Q<pe;Q++)fe=Fe[Q],ke?I&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,fe.width,fe.height,ue,Ue,fe.data):t.texImage2D(n.TEXTURE_2D,Q,ge,fe.width,fe.height,0,ue,Ue,fe.data);_.generateMipmaps=!1}else ke?(je&&t.texStorage2D(n.TEXTURE_2D,de,ge,j.width,j.height),I&&te(_,j,ue,Ue)):t.texImage2D(n.TEXTURE_2D,0,ge,j.width,j.height,0,ue,Ue,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ge,Fe[0].width,Fe[0].height,j.depth);for(let Q=0,pe=Fe.length;Q<pe;Q++)if(fe=Fe[Q],_.format!==wn)if(ue!==null)if(ke){if(I)if(_.layerUpdates.size>0){let ye=rc(fe.width,fe.height,_.format,_.type);for(let ie of _.layerUpdates){let Oe=fe.data.subarray(ie*ye/fe.data.BYTES_PER_ELEMENT,(ie+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ie,fe.width,fe.height,1,ue,Oe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,j.depth,ue,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ge,fe.width,fe.height,j.depth,0,fe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,j.depth,ue,Ue,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ge,fe.width,fe.height,j.depth,0,ue,Ue,fe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ke&&je&&t.texStorage2D(n.TEXTURE_2D,de,ge,Fe[0].width,Fe[0].height);for(let Q=0,pe=Fe.length;Q<pe;Q++)fe=Fe[Q],_.format!==wn?ue!==null?ke?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ge,fe.width,fe.height,0,fe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,fe.width,fe.height,ue,Ue,fe.data):t.texImage2D(n.TEXTURE_2D,Q,ge,fe.width,fe.height,0,ue,Ue,fe.data)}else if(_.isDataArrayTexture)if(ke){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ge,j.width,j.height,j.depth),I)if(_.layerUpdates.size>0){let Q=rc(j.width,j.height,_.format,_.type);for(let pe of _.layerUpdates){let ye=j.data.subarray(pe*Q/j.data.BYTES_PER_ELEMENT,(pe+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,j.width,j.height,1,ue,Ue,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ue,Ue,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,j.width,j.height,j.depth,0,ue,Ue,j.data);else if(_.isData3DTexture)ke?(je&&t.texStorage3D(n.TEXTURE_3D,de,ge,j.width,j.height,j.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ue,Ue,j.data)):t.texImage3D(n.TEXTURE_3D,0,ge,j.width,j.height,j.depth,0,ue,Ue,j.data);else if(_.isFramebufferTexture){if(je)if(ke)t.texStorage2D(n.TEXTURE_2D,de,ge,j.width,j.height);else{let Q=j.width,pe=j.height;for(let ye=0;ye<de;ye++)t.texImage2D(n.TEXTURE_2D,ye,ge,Q,pe,0,ue,Ue,null),Q>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),f.add(_),Q.onpaint=pe=>{let ye=pe.changedElements;for(let ie of f)ye.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let ye=n.RGBA,ie=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ye,ie,Oe,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(ke&&je){let Q=ut(Fe[0]);t.texStorage2D(n.TEXTURE_2D,de,ge,Q.width,Q.height)}for(let Q=0,pe=Fe.length;Q<pe;Q++)fe=Fe[Q],ke?I&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue,Ue,fe):t.texImage2D(n.TEXTURE_2D,Q,ge,ue,Ue,fe);_.generateMipmaps=!1}else if(ke){if(je){let Q=ut(j);t.texStorage2D(n.TEXTURE_2D,de,ge,Q.width,Q.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ue,j)}else t.texImage2D(n.TEXTURE_2D,0,ge,ue,Ue,j);m(_)&&w(G),he.__version=oe.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function $e(S,_,U){if(_.image.length!==6)return;let G=lt(S,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);let oe=i.get(Z);if(Z.version!==oe.__version||G===!0){t.activeTexture(n.TEXTURE0+U);let he=st.getPrimaries(st.workingColorSpace),K=_.colorSpace===oi?null:st.getPrimaries(_.colorSpace),j=_.colorSpace===oi||he===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!ue&&!Ue?ge[ie]=g(_.image[ie],!0,s.maxCubemapSize):ge[ie]=Ue?_.image[ie].image:_.image[ie],ge[ie]=vt(_,ge[ie]);let fe=ge[0],Fe=r.convert(_.format,_.colorSpace),ke=r.convert(_.type),je=M(_.internalFormat,Fe,ke,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,de=oe.__version===void 0||G===!0,Q=Z.dataReady,pe=T(_,fe);at(n.TEXTURE_CUBE_MAP,_);let ye;if(ue){I&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,je,fe.width,fe.height);for(let ie=0;ie<6;ie++){ye=ge[ie].mipmaps;for(let Oe=0;Oe<ye.length;Oe++){let Ie=ye[Oe];_.format!==wn?Fe!==null?I?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,Ie.width,Ie.height,Fe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,je,Ie.width,Ie.height,0,Ie.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,Ie.width,Ie.height,Fe,ke,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,je,Ie.width,Ie.height,0,Fe,ke,Ie.data)}}}else{if(ye=_.mipmaps,I&&de){ye.length>0&&pe++;let ie=ut(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ue){I?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Fe,ke,ge[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,ge[ie].width,ge[ie].height,0,Fe,ke,ge[ie].data);for(let Oe=0;Oe<ye.length;Oe++){let bt=ye[Oe].image[ie].image;I?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,bt.width,bt.height,Fe,ke,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,je,bt.width,bt.height,0,Fe,ke,bt.data)}}else{I?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Fe,ke,ge[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,Fe,ke,ge[ie]);for(let Oe=0;Oe<ye.length;Oe++){let Ie=ye[Oe];I?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,Fe,ke,Ie.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,je,Fe,ke,Ie.image[ie])}}}m(_)&&w(n.TEXTURE_CUBE_MAP),oe.__version=Z.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Me(S,_,U,G,Z,oe){let he=r.convert(U.format,U.colorSpace),K=r.convert(U.type),j=M(U.internalFormat,he,K,U.normalized,U.colorSpace),ue=i.get(_),Ue=i.get(U);if(Ue.__renderTarget=_,!ue.__hasExternalTextures){let ge=Math.max(1,_.width>>oe),fe=Math.max(1,_.height>>oe);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,oe,j,ge,fe,_.depth,0,he,K,null):t.texImage2D(Z,oe,j,ge,fe,0,he,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Z,Ue.__webglTexture,0,be(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Z,Ue.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(S,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){let G=_.depthTexture,Z=G&&G.isDepthTexture?G.type:null,oe=b(_.stencilBuffer,Z),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ge(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(_),oe,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(_),oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,S)}else{let G=_.textures;for(let Z=0;Z<G.length;Z++){let oe=G[Z],he=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),j=M(oe.internalFormat,he,K,oe.normalized,oe.colorSpace);Ge(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(_),j,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(_),j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(S,_,U){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),at(n.TEXTURE_CUBE_MAP,_.depthTexture);let ue=r.convert(_.depthTexture.format),Ue=r.convert(_.depthTexture.type),ge;_.depthTexture.format===Gn?ge=n.DEPTH_COMPONENT24:_.depthTexture.format===Ii&&(ge=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,_.width,_.height,0,ue,Ue,null)}}else se(_.depthTexture,0);let oe=Z.__webglTexture,he=be(_),K=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,j=_.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Gn)Ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,oe,0);else if(_.depthTexture.format===Ii)Ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(S){let _=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let G=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=G}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)Tt(_.__webglFramebuffer[G],S,G);else{let G=S.texture.mipmaps;G&&G.length>0?Tt(_.__webglFramebuffer[0],S,0):Tt(_.__webglFramebuffer,S,0)}else if(U){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Je(_.__webglDepthbuffer[G],S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,oe)}}else{let G=S.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Je(_.__webglDepthbuffer,S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(S,_,U){let G=i.get(S);_!==void 0&&Me(G.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Qe(S)}function Re(S){let _=S.texture,U=i.get(S),G=i.get(_);S.addEventListener("dispose",v);let Z=S.textures,oe=S.isWebGLCubeRenderTarget===!0,he=Z.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),oe){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let j=0;j<_.mipmaps.length;j++)U.__webglFramebuffer[K][j]=n.createFramebuffer()}else U.__webglFramebuffer[K]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)U.__webglFramebuffer[K]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(he)for(let K=0,j=Z.length;K<j;K++){let ue=i.get(Z[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&Ge(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let j=Z[K];U.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let ue=r.convert(j.format,j.colorSpace),Ue=r.convert(j.type),ge=M(j.internalFormat,ue,Ue,j.normalized,j.colorSpace,S.isXRRenderTarget===!0),fe=be(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,U.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),at(n.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Me(U.__webglFramebuffer[K][j],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Me(U.__webglFramebuffer[K],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(_)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let K=0,j=Z.length;K<j;K++){let ue=Z[K],Ue=i.get(ue),ge=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ge=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ue.__webglTexture),at(ge,ue),Me(U.__webglFramebuffer,S,ue,n.COLOR_ATTACHMENT0+K,ge,0),m(ue)&&w(ge)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(K=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),at(K,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Me(U.__webglFramebuffer[j],S,_,n.COLOR_ATTACHMENT0,K,j);else Me(U.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,K,0);m(_)&&w(K),t.unbindTexture()}S.depthBuffer&&Qe(S)}function ae(S){let _=S.textures;for(let U=0,G=_.length;U<G;U++){let Z=_[U];if(m(Z)){let oe=A(S),he=i.get(Z).__webglTexture;t.bindTexture(oe,he),w(oe),t.unbindTexture()}}}let ze=[],et=[];function De(S){if(S.samples>0){if(Ge(S)===!1){let _=S.textures,U=S.width,G=S.height,Z=n.COLOR_BUFFER_BIT,oe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),K=_.length>1;if(K)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let j=S.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let Ue=i.get(_[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,U,G,0,0,U,G,Z,n.NEAREST),l===!0&&(ze.length=0,et.length=0,ze.push(n.COLOR_ATTACHMENT0+ue),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(ze.push(oe),et.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let Ue=i.get(_[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function be(S){return Math.min(s.maxSamples,S.samples)}function Ge(S){let _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function C(S){let _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function vt(S,_){let U=S.colorSpace,G=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==nr&&U!==oi&&(st.getTransfer(U)===dt?(G!==wn||Z!==vn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",U)),_}function ut(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=se,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=$,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A0(n,e){function t(i,s=oi){let r,a=st.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===to)return n.UNSIGNED_SHORT_4_4_4_4;if(i===no)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$l)return n.BYTE;if(i===ql)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===eo)return n.INT;if(i===Un)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Wt)return n.HALF_FLOAT;if(i===Jl)return n.ALPHA;if(i===Kl)return n.RGB;if(i===wn)return n.RGBA;if(i===Gn)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===Ql)return n.RED;if(i===io)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===so)return n.RG_INTEGER;if(i===ro)return n.RGBA_INTEGER;if(i===Ar||i===Cr||i===Rr||i===Pr)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ao||i===oo||i===lo||i===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ho||i===uo||i===fo||i===po||i===mo||i===Ir||i===go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ho||i===uo)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===po)return r.COMPRESSED_R11_EAC;if(i===mo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ir)return r.COMPRESSED_RG11_EAC;if(i===go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_o||i===vo||i===xo||i===yo||i===Mo||i===bo||i===So||i===To||i===wo||i===Eo||i===Ao||i===Co||i===Ro||i===Po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_o)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===So)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===To)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Co)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ro)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Po)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===No||i===Lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Io)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Do||i===Uo||i===Nr||i===Fo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
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

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Dt({vertexShader:C0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yc=class extends Hn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,y=typeof XRWebGLBinding<"u",g=new xc,m={},w=t.getContextAttributes(),A=null,M=null,b=[],T=[],R=new We,v=null,E=null,N=new fn;N.viewport=new Pt;let D=new fn;D.viewport=new Pt;let k=[N,D],V=new Ja,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=b[J];return te===void 0&&(te=new Ms,b[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=b[J];return te===void 0&&(te=new Ms,b[J]=te),te.getGripSpace()},this.getHand=function(J){let te=b[J];return te===void 0&&(te=new Ms,b[J]=te),te.getHandSpace()};function W(J){let te=T.indexOf(J.inputSource);if(te===-1)return;let Se=b[te];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||a),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",se);for(let J=0;J<b.length;J++){let te=T[J];te!==null&&(T[J]=null,b[J].disconnect(te))}L=null,O=null,g.reset();for(let J in m)delete m[J];if(e.setRenderTarget(A),d=null,u=null,f=null,s=null,M=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",se),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,$e=null,Me=null;w.depth&&(Me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=w.stencil?Ii:Gn,$e=w.stencil?Ps:Un);let Je={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new It(u.textureWidth,u.textureHeight,{format:wn,type:vn,depthTexture:new wi(u.textureWidth,u.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new It(d.framebufferWidth,d.framebufferHeight,{format:wn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(J){for(let te=0;te<J.removed.length;te++){let Se=J.removed[te],$e=T.indexOf(Se);$e>=0&&(T[$e]=null,b[$e].disconnect(Se))}for(let te=0;te<J.added.length;te++){let Se=J.added[te],$e=T.indexOf(Se);if($e===-1){for(let Je=0;Je<b.length;Je++)if(Je>=T.length){T.push(Se),$e=Je;break}else if(T[Je]===null){T[Je]=Se,$e=Je;break}if($e===-1)break}let Me=b[$e];Me&&Me.connect(Se)}}let Y=new F,ee=new F;function ne(J,te,Se){Y.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);let $e=Y.distanceTo(ee),Me=te.projectionMatrix.elements,Je=Se.projectionMatrix.elements,Tt=Me[14]/(Me[10]-1),Qe=Me[14]/(Me[10]+1),$=(Me[9]+1)/Me[5],Re=(Me[9]-1)/Me[5],ae=(Me[8]-1)/Me[0],ze=(Je[8]+1)/Je[0],et=Tt*ae,De=Tt*ze,be=$e/(-ae+ze),Ge=be*-ae;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(be),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Me[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let C=Tt+be,vt=Qe+be,ut=et-Ge,S=De+($e-Ge),_=$*Qe/vt*C,U=Re*Qe/vt*C;J.projectionMatrix.makePerspective(ut,S,_,U,C,vt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Be(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),V.near=D.near=N.near=te,V.far=D.far=N.far=Se,(L!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,O=V.far),V.layers.mask=J.layers.mask|6,N.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let $e=J.parent,Me=V.cameras;Be(V,$e);for(let Je=0;Je<Me.length;Je++)Be(Me[Je],$e);Me.length===2?ne(V,N,D):V.projectionMatrix.copy(N.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),Pe(J,V,$e)};function Pe(J,te,Se){Se===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ra*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(J){return m[J]};let xt=null;function at(J,te){if(h=te.getViewerPose(c||a),p=te,h!==null){let Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let $e=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,$e=!0);for(let Qe=0;Qe<Se.length;Qe++){let $=Se[Qe],Re=null;if(d!==null)Re=d.getViewport($);else{let ze=f.getViewSubImage(u,$);Re=ze.viewport,Qe===0&&(e.setRenderTargetTextures(M,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(M))}let ae=k[Qe];ae===void 0&&(ae=new fn,ae.layers.enable(Qe),ae.viewport=new Pt,k[Qe]=ae),ae.matrix.fromArray($.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray($.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),Qe===0&&(V.matrix.copy(ae.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),$e===!0&&V.cameras.push(ae)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let Qe=f.getDepthInformation(Se[0]);Qe&&Qe.isValid&&Qe.texture&&g.init(Qe,s.renderState)}if(Me&&Me.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Qe=0;Qe<Se.length;Qe++){let $=Se[Qe].camera;if($){let Re=m[$];Re||(Re=new dr,m[$]=Re);let ae=f.getCameraImage($);Re.sourceTexture=ae}}}}for(let Se=0;Se<b.length;Se++){let $e=T[Se],Me=b[Se];$e!==null&&Me!==void 0&&Me.update($e,te,c||a)}xt&&xt(J,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),p=null}let lt=new Tu;lt.setAnimationLoop(at),this.setAnimationLoop=function(J){xt=J},this.dispose=function(){}}},P0=new Rt,Pu=new Ze;Pu.set(-1,0,0,0,1,0,0,0,1);function I0(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,nc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,A,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,w,A):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),A=w.envMap,M=w.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N0(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let T=b.program;i.uniformBlockBinding(M,T)}function c(M,b){let T=s[M.id];T===void 0&&(g(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",w));let R=b.program;i.updateUBOMapping(M,R);let v=e.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){let b=f();M.__bindingPointIndex=b;let T=n.createBuffer(),R=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=s[M.id],T=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,E=T.length;v<E;v++){let N=T[v];if(Array.isArray(N))for(let D=0,k=N.length;D<k;D++)d(N[D],v,D,R);else d(N,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,T,R){if(y(M,b,T,R)===!0){let v=M.__offset,E=M.value;if(Array.isArray(E)){let N=0;for(let D=0;D<E.length;D++){let k=E[D],V=m(k);p(k,M.__data,N),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(N+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function p(M,b,T){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,T)}function y(M,b,T,R){let v=M.value,E=b+"_"+T;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{let N=R[E];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function g(M){let b=M.uniforms,T=0,R=16;for(let E=0,N=b.length;E<N;E++){let D=Array.isArray(b[E])?b[E]:[b[E]];for(let k=0,V=D.length;k<V;k++){let L=D[k],O=Array.isArray(L.value)?L.value:[L.value];for(let W=0,q=O.length;W<q;W++){let se=O[W],Y=m(se),ee=T%R,ne=ee%Y.boundary,Be=ee+ne;T+=ne,Be!==0&&R-Be<Y.storage&&(T+=R-Be),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=Y.storage}}}let v=T%R;return v>0&&(T+=R-v),M.__size=T,M.__cache={},this}function m(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",M),b}function w(M){let b=M.target;b.removeEventListener("dispose",w);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var L0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function D0(){return Yn===null&&(Yn=new La(L0,16,16,Ni,Wt),Yn.name="DFG_LUT",Yn.minFilter=tn,Yn.magFilter=tn,Yn.wrapS=Vn,Yn.wrapT=Vn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Or=class{constructor(e={}){let{canvas:t=Jh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let y=d,g=new Set([ro,so,io]),m=new Set([vn,Un,Rs,Ps,to,no]),w=new Uint32Array(4),A=new Int32Array(4),M=new F,b=null,T=null,R=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,D=!1,k=null,V=null,L=null,O=null;this._outputColorSpace=Ht;let W=0,q=0,se=null,Y=-1,ee=null,ne=new Pt,Be=new Pt,Pe=null,xt=new Ke(0),at=0,lt=t.width,J=t.height,te=1,Se=null,$e=null,Me=new Pt(0,0,lt,J),Je=new Pt(0,0,lt,J),Tt=!1,Qe=new hr,$=!1,Re=!1,ae=new Rt,ze=new F,et=new Pt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Ge(){return se===null?te:1}let C=i;function vt(x,P){return t.getContext(x,P)}let ut,S,_,U,G,Z,oe,he,K,j,ue,Ue,ge,fe,Fe,ke,je,I,de,Q,pe,ye,ie;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Cn,!1),C===null){let P="webgl2";if(C=vt(P,x),C===null)throw vt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(x){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),He("WebGLRenderer: "+x.message),x}function Oe(){ut=new Vm(C),ut.init(),pe=new A0(C,ut),S=new Im(C,ut,e,pe),_=new w0(C,ut),S.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=C.createFramebuffer(),L=C.createFramebuffer(),O=C.createFramebuffer(),U=new Wm(C),G=new u0,Z=new E0(C,ut,_,G,S,pe,U),oe=new km(N),he=new $f(C),ye=new Rm(C,he),K=new Gm(C,he,U,ye),j=new $m(C,K,he,ye,U),I=new Xm(C,S,Z),Fe=new Nm(G),ue=new h0(N,oe,ut,S,ye,Fe),Ue=new I0(N,G),ge=new d0,fe=new x0(ut),je=new Cm(N,oe,_,j,p,l),ke=new T0(N,j,S),ie=new N0(C,U,S,_),de=new Pm(C,ut,U),Q=new Hm(C,ut,U),U.programs=ue.programs,N.capabilities=S,N.extensions=ut,N.properties=G,N.renderLists=ge,N.shadowMap=ke,N.state=_,N.info=U}y!==vn&&(E=new Ym(y,t.width,t.height,o,s,r));let Ie=new yc(N,C);this.xr=Ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let x=ut.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ut.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(lt,J,!1))},this.getSize=function(x){return x.set(lt,J)},this.setSize=function(x,P,H=!0){if(Ie.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=x,J=P,t.width=Math.floor(x*te),t.height=Math.floor(P*te),H===!0&&(t.style.width=x+"px",t.style.height=P+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(lt*te,J*te).floor()},this.setDrawingBufferSize=function(x,P,H){lt=x,J=P,te=H,t.width=Math.floor(x*H),t.height=Math.floor(P*H),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(y===vn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,P,H,B){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,P,H,B),_.viewport(ne.copy(Me).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(Je)},this.setScissor=function(x,P,H,B){x.isVector4?Je.set(x.x,x.y,x.z,x.w):Je.set(x,P,H,B),_.scissor(Be.copy(Je).multiplyScalar(te).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(x){_.setScissorTest(Tt=x)},this.setOpaqueSort=function(x){Se=x},this.setTransparentSort=function(x){$e=x},this.getClearColor=function(x){return x.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,H=!0){let B=0;if(x){let z=!1;if(se!==null){let xe=se.texture.format;z=g.has(xe)}if(z){let xe=se.texture.type,we=m.has(xe),ve=je.getClearColor(),Ee=je.getClearAlpha(),Le=ve.r,tt=ve.g,rt=ve.b;we?(w[0]=Le,w[1]=tt,w[2]=rt,w[3]=Ee,C.clearBufferuiv(C.COLOR,0,w)):(A[0]=Le,A[1]=tt,A[2]=rt,A[3]=Ee,C.clearBufferiv(C.COLOR,0,A))}else B|=C.COLOR_BUFFER_BIT}P&&(B|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),k=x},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),je.dispose(),ge.dispose(),fe.dispose(),G.dispose(),oe.dispose(),j.dispose(),ye.dispose(),ie.dispose(),ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Fc),Ie.removeEventListener("sessionend",Oc),zi.stop()};function bt(x){x.preventDefault(),tc("WebGLRenderer: Context Lost."),D=!0}function mt(){tc("WebGLRenderer: Context Restored."),D=!1;let x=U.autoReset,P=ke.enabled,H=ke.autoUpdate,B=ke.needsUpdate,z=ke.type;Oe(),U.autoReset=x,ke.enabled=P,ke.autoUpdate=H,ke.needsUpdate=B,ke.type=z}function Cn(x){He("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Bn(x){let P=x.target;P.removeEventListener("dispose",Bn),tf(P)}function tf(x){nf(x),G.remove(x)}function nf(x){let P=G.get(x).programs;P!==void 0&&(P.forEach(function(H){ue.releaseProgram(H)}),x.isShaderMaterial&&ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,H,B,z,xe){P===null&&(P=De);let we=z.isMesh&&z.matrixWorld.determinantAffine()<0,ve=af(x,P,H,B,z);_.setMaterial(B,we);let Ee=H.index,Le=1;if(B.wireframe===!0){if(Ee=K.getWireframeAttribute(H),Ee===void 0)return;Le=2}let tt=H.drawRange,rt=H.attributes.position,Ae=tt.start*Le,gt=(tt.start+tt.count)*Le;xe!==null&&(Ae=Math.max(Ae,xe.start*Le),gt=Math.min(gt,(xe.start+xe.count)*Le)),Ee!==null?(Ae=Math.max(Ae,0),gt=Math.min(gt,Ee.count)):rt!=null&&(Ae=Math.max(Ae,0),gt=Math.min(gt,rt.count));let Ut=gt-Ae;if(Ut<0||Ut===1/0)return;ye.setup(z,B,ve,H,Ee);let wt,Mt=de;if(Ee!==null&&(wt=he.get(Ee),Mt=Q,Mt.setIndex(wt)),z.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Ge()),Mt.setMode(C.LINES)):Mt.setMode(C.TRIANGLES);else if(z.isLine){let nn=B.linewidth;nn===void 0&&(nn=1),_.setLineWidth(nn*Ge()),z.isLineSegments?Mt.setMode(C.LINES):z.isLineLoop?Mt.setMode(C.LINE_LOOP):Mt.setMode(C.LINE_STRIP)}else z.isPoints?Mt.setMode(C.POINTS):z.isSprite&&Mt.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let nn=z._multiDrawStarts,Te=z._multiDrawCounts,ln=z._multiDrawCount,ft=Ee?he.get(Ee).bytesPerElement:1,Mn=G.get(B).currentProgram.getUniforms();for(let zn=0;zn<ln;zn++)Mn.setValue(C,"_gl_DrawID",zn),Mt.render(nn[zn]/ft,Te[zn])}else if(z.isInstancedMesh)Mt.renderInstances(Ae,Ut,z.count);else if(H.isInstancedBufferGeometry){let nn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,nn);Mt.renderInstances(Ae,Ut,Te)}else Mt.render(Ae,Ut)};function Uc(x,P,H,B){k!==null&&x.isNodeMaterial&&k.setObject(B,x),$===!0&&Fe.setState(x,H,!1),x.transparent===!0&&x.side===Sn&&x.forceSinglePass===!1?(x.side=hn,x.needsUpdate=!0,Zr(x,P,B),x.side=Ri,x.needsUpdate=!0,Zr(x,P,B),x.side=Sn):Zr(x,P,B)}this.compile=function(x,P,H=null){H===null&&(H=x),k!==null&&k.renderStart(x,P,H),T=fe.get(H),T.init(P),v.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),x!==H&&x.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),Re=this.localClippingEnabled,$=Fe.init(this.clippingPlanes,Re),$===!0&&Fe.setGlobalState(this.clippingPlanes,P),k!==null&&ke.render(T.state.shadowsArray,H,P);let B=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let xe=z.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let ve=xe[we];Uc(ve,H,P,z),B.add(ve)}else Uc(xe,H,P,z),B.add(xe)}),T=v.pop(),k!==null&&k.renderEnd(),B},this.compileAsync=function(x,P,H=null){let B=this.compile(x,P,H);return new Promise(z=>{function xe(){if(B.forEach(function(we){let Ee=G.get(we).currentProgram;(Ee===void 0||Ee.isReady())&&B.delete(we)}),B.size===0){z(x);return}setTimeout(xe,10)}ut.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ol=null;function sf(x){ol&&ol(x)}function Fc(){zi.stop()}function Oc(){zi.start()}let zi=new Tu;zi.setAnimationLoop(sf),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(x){ol=x,Ie.setAnimationLoop(x),x===null?zi.stop():zi.start()},Ie.addEventListener("sessionstart",Fc),Ie.addEventListener("sessionend",Oc),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(x,P);let H=Ie.enabled===!0&&Ie.isPresenting===!0,B=E!==null&&(se===null||H)&&E.begin(N,se);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(P),P=Ie.getCamera()),x.isScene===!0&&x.onBeforeRender(N,x,P,se),T=fe.get(x,v.length),T.init(P),T.state.textureUnits=Z.getTextureUnits(),v.push(T),ae.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Qe.setFromProjectionMatrix(ae,Ln,P.reversedDepth),Re=this.localClippingEnabled,$=Fe.init(this.clippingPlanes,Re),b=ge.get(x,R.length),b.init(),R.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){let we=N.xr.getDepthSensingMesh();we!==null&&ll(we,P,-1/0,N.sortObjects)}ll(x,P,0,N.sortObjects),b.finish(),k!==null&&k.updateLights(T.state.lightsArray),N.sortObjects===!0&&b.sort(Se,$e),be=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,be&&je.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$===!0&&Fe.beginShadows();let z=T.state.shadowsArray;if(ke.render(z,x,P),$===!0&&Fe.endShadows(),(B&&E.hasRenderPass())===!1){let we=b.opaque,ve=b.transmissive;if(T.setupLights(),P.isArrayCamera){let Ee=P.cameras;if(ve.length>0)for(let Le=0,tt=Ee.length;Le<tt;Le++){let rt=Ee[Le];zc(we,ve,x,rt)}be&&je.render(x);for(let Le=0,tt=Ee.length;Le<tt;Le++){let rt=Ee[Le];Bc(b,x,rt,rt.viewport)}}else ve.length>0&&zc(we,ve,x,P),be&&je.render(x),Bc(b,x,P)}se!==null&&q===0&&(Z.updateMultisampleRenderTarget(se),Z.updateRenderTargetMipmap(se)),B&&E.end(N),x.isScene===!0&&x.onAfterRender(N,x,P),ye.resetDefaultState(),Y=-1,ee=null,v.pop(),v.length>0?(T=v[v.length-1],Z.setTextureUnits(T.state.textureUnits),$===!0&&Fe.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,k!==null&&k.renderEnd()};function ll(x,P,H,B){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Qe)){B&&et.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ae);let we=j.update(x),ve=x.material;ve.visible&&b.push(x,we,ve,H,et.z,null,P)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Qe))){let we=j.update(x),ve=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),et.copy(x.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),et.copy(we.boundingSphere.center)),et.applyMatrix4(x.matrixWorld).applyMatrix4(ae)),Array.isArray(ve)){let Ee=we.groups;for(let Le=0,tt=Ee.length;Le<tt;Le++){let rt=Ee[Le],Ae=ve[rt.materialIndex];Ae&&Ae.visible&&b.push(x,we,Ae,H,et.z,rt,P)}}else ve.visible&&b.push(x,we,ve,H,et.z,null,P)}}let xe=x.children;for(let we=0,ve=xe.length;we<ve;we++)ll(xe[we],P,H,B)}function Bc(x,P,H,B){let{opaque:z,transmissive:xe,transparent:we}=x;T.setupLightsView(H),$===!0&&Fe.setGlobalState(N.clippingPlanes,H),B&&_.viewport(ne.copy(B)),z.length>0&&Yr(z,P,H),xe.length>0&&Yr(xe,P,H),we.length>0&&Yr(we,P,H),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function zc(x,P,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Ae=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new It(1,1,{generateMipmaps:!0,type:Ae?Wt:vn,minFilter:qn,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let xe=T.state.transmissionRenderTarget[B.id],we=B.viewport||ne;xe.setSize(we.z*N.transmissionResolutionScale,we.w*N.transmissionResolutionScale);let ve=N.getRenderTarget(),Ee=N.getActiveCubeFace(),Le=N.getActiveMipmapLevel();N.setRenderTarget(xe),N.getClearColor(xt),at=N.getClearAlpha(),at<1&&N.setClearColor(16777215,.5),N.clear(),be&&je.render(H);let tt=N.toneMapping;N.toneMapping=_n;let rt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),$===!0&&Fe.setGlobalState(N.clippingPlanes,B),Yr(x,H,B),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let gt=0,Ut=P.length;gt<Ut;gt++){let wt=P[gt],{object:Mt,geometry:nn,material:Te,group:ln}=wt;if(Te.side===Sn&&Mt.layers.test(B.layers)){let ft=Te.side;Te.side=hn,Te.needsUpdate=!0,kc(Mt,H,B,nn,Te,ln),Te.side=ft,Te.needsUpdate=!0,Ae=!0}}Ae===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe))}N.setRenderTarget(ve,Ee,Le),N.setClearColor(xt,at),rt!==void 0&&(B.viewport=rt),N.toneMapping=tt}function Yr(x,P,H){let B=P.isScene===!0?P.overrideMaterial:null;for(let z=0,xe=x.length;z<xe;z++){let we=x[z],{object:ve,geometry:Ee,group:Le}=we,tt=we.material;tt.allowOverride===!0&&B!==null&&(tt=B),ve.layers.test(H.layers)&&kc(ve,P,H,Ee,tt,Le)}}function kc(x,P,H,B,z,xe){k!==null&&z.isNodeMaterial&&k.setObject(x,z),x.onBeforeRender(N,P,H,B,z,xe),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(N,P,H,B,x,xe),z.transparent===!0&&z.side===Sn&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,N.renderBufferDirect(H,P,B,z,x,xe),z.side=Ri,z.needsUpdate=!0,N.renderBufferDirect(H,P,B,z,x,xe),z.side=Sn):N.renderBufferDirect(H,P,B,z,x,xe),x.onAfterRender(N,P,H,B,z,xe)}function Zr(x,P,H){P.isScene!==!0&&(P=De);let B=G.get(x),z=T.state.lights,xe=T.state.shadowsArray,we=z.state.version,ve=ue.getParameters(x,z.state,xe,P,H,T.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(ve),Le=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let tt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=oe.get(x.envMap||B.environment,tt),B.envMapRotation=B.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",Bn),Le=new Map,B.programs=Le);let rt=Le.get(Ee);if(rt!==void 0){if(B.currentProgram===rt&&B.lightsStateVersion===we)return Gc(x,ve),rt}else ve.uniforms=ue.getUniforms(x),k!==null&&x.isNodeMaterial&&k.build(x,H,ve),x.onBeforeCompile(ve,N),rt=ue.acquireProgram(ve,Ee),Le.set(Ee,rt),B.uniforms=ve.uniforms;let Ae=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=Fe.uniform),Gc(x,ve),B.needsLights=lf(x),B.lightsStateVersion=we,B.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.sunLights.value=z.state.sun,Ae.sunLightShadows.value=z.state.sunShadow,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.sunShadowMatrix.value=z.state.sunShadowMatrix,Ae.sunShadowCascade.value=z.state.sunShadowCascade,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=rt,B.uniformsList=null,rt}function Vc(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=Ls.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Gc(x,P){let H=G.get(x);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function rf(x,P){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let H=0,B=x.length;H<B;H++){let z=x[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function af(x,P,H,B,z){P.isScene!==!0&&(P=De),Z.resetTextureUnits();let xe=P.fog,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ve=se===null?N.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:st.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Le=oe.get(B.envMap||we,Ee),tt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,rt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!H.morphAttributes.position,gt=!!H.morphAttributes.normal,Ut=!!H.morphAttributes.color,wt=_n;B.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(wt=N.toneMapping);let Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nn=Mt!==void 0?Mt.length:0,Te=G.get(B),ln=T.state.lights;if($===!0&&(Re===!0||x!==ee)){let St=x===ee&&B.id===Y;Fe.setState(B,x,St)}let ft=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ln.state.version||Te.outputColorSpace!==ve||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Le||B.fog===!0&&Te.fog!==xe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Fe.numPlanes||Te.numIntersection!==Fe.numIntersection)||Te.vertexAlphas!==tt||Te.vertexTangents!==rt||Te.morphTargets!==Ae||Te.morphNormals!==gt||Te.morphColors!==Ut||Te.toneMapping!==wt||Te.morphTargetsCount!==nn||!!Te.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Te.__version=B.version);let Mn=Te.currentProgram;ft===!0&&(Mn=Zr(B,P,z),k&&B.isNodeMaterial&&k.onUpdateProgram(B,Mn,Te));let zn=!1,fi=!1,es=!1,yt=Mn.getUniforms(),Lt=Te.uniforms;if(_.useProgram(Mn.program)&&(zn=!0,fi=!0,es=!0),B.id!==Y&&(Y=B.id,fi=!0),Te.needsLights){let St=rf(T.state.lightProbeGridArray,z);Te.lightProbeGrid!==St&&(Te.lightProbeGrid=St,fi=!0)}if(zn||ee!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),yt.setValue(C,"projectionMatrix",x.projectionMatrix),yt.setValue(C,"viewMatrix",x.matrixWorldInverse);let pi=yt.map.cameraPosition;pi!==void 0&&pi.setValue(C,ze.setFromMatrixPosition(x.matrixWorld)),S.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&yt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,fi=!0,es=!0)}if(Te.needsLights&&(ln.state.sunShadowMap.length>0&&yt.setValue(C,"sunShadowMap",ln.state.sunShadowMap,Z),ln.state.directionalShadowMap.length>0&&yt.setValue(C,"directionalShadowMap",ln.state.directionalShadowMap,Z),ln.state.spotShadowMap.length>0&&yt.setValue(C,"spotShadowMap",ln.state.spotShadowMap,Z),ln.state.pointShadowMap.length>0&&yt.setValue(C,"pointShadowMap",ln.state.pointShadowMap,Z)),z.isSkinnedMesh){yt.setOptional(C,z,"bindMatrix"),yt.setOptional(C,z,"bindMatrixInverse");let St=z.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),yt.setValue(C,"boneTexture",St.boneTexture,Z))}z.isBatchedMesh&&(yt.setOptional(C,z,"batchingTexture"),yt.setValue(C,"batchingTexture",z._matricesTexture,Z),yt.setOptional(C,z,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",z._indirectTexture,Z),yt.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",z._colorsTexture,Z));let di=H.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&I.update(z,H,Mn),(fi||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,yt.setValue(C,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Lt.envMapIntensity.value=P.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=D0()),fi){if(yt.setValue(C,"toneMappingExposure",N.toneMappingExposure),Te.needsLights&&of(Lt,es),xe&&B.fog===!0&&Ue.refreshFogUniforms(Lt,xe),Ue.refreshMaterialUniforms(Lt,B,te,J,T.state.transmissionRenderTarget[x.id]),Te.needsLights&&Te.lightProbeGrid){let St=Te.lightProbeGrid;Lt.probesSH.value=St.texture,Lt.probesMin.value.copy(St.boundingBox.min),Lt.probesMax.value.copy(St.boundingBox.max),Lt.probesResolution.value.copy(St.resolution)}Ls.upload(C,Vc(Te),Lt,Z)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ls.upload(C,Vc(Te),Lt,Z),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&yt.setValue(C,"center",z.center),yt.setValue(C,"modelViewMatrix",z.modelViewMatrix),yt.setValue(C,"normalMatrix",z.normalMatrix),yt.setValue(C,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let St=B.uniformsGroups;for(let pi=0,ts=St.length;pi<ts;pi++){let Wc=St[pi];ie.update(Wc,Mn),ie.bind(Wc,Mn)}}return Mn}function of(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function lf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(x,P,H){let B=G.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=P,G.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let H=G.get(x);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,H=0){se=x,W=P,q=H;let B=null,z=!1,xe=!1;if(x){let ve=G.get(x);if(ve.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(C.FRAMEBUFFER,ve.__webglFramebuffer),ne.copy(x.viewport),Be.copy(x.scissor),Pe=x.scissorTest,_.viewport(ne),_.scissor(Be),_.setScissorTest(Pe),Y=-1;return}else if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(x);else if(ve.__hasExternalTextures)Z.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let tt=x.depthTexture;if(ve.__boundDepthTexture!==tt){if(tt!==null&&G.has(tt)&&(x.width!==tt.image.width||x.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(x)}}let Ee=x.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(xe=!0);let Le=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[P])?B=Le[P][H]:B=Le[P],z=!0):x.samples>0&&Z.useMultisampledRTT(x)===!1?B=G.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?B=Le[H]:B=Le,ne.copy(x.viewport),Be.copy(x.scissor),Pe=x.scissorTest}else ne.copy(Me).multiplyScalar(te).floor(),Be.copy(Je).multiplyScalar(te).floor(),Pe=Tt;if(H!==0&&(B=V),_.bindFramebuffer(C.FRAMEBUFFER,B)&&_.drawBuffers(x,B),_.viewport(ne),_.scissor(Be),_.setScissorTest(Pe),z){let ve=G.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,H)}else if(xe){let ve=P;for(let Ee=0;Ee<x.textures.length;Ee++){let Le=G.get(x.textures[Ee]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ee,Le.__webglTexture,H,ve)}}else if(x!==null&&H!==0){let ve=G.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ve.__webglTexture,H)}Y=-1};function Hc(x){let P=G.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=S.textureFormatReadable(x.format),P.__typeReadable=S.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,H,B,z,xe,we,ve=0){if(!(x&&x.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){_.bindFramebuffer(C.FRAMEBUFFER,Ee);try{let Le=x.textures[ve],tt=Le.format,rt=Le.type;x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ve);let Ae=Hc(Le);if(Ae.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-B&&H>=0&&H<=x.height-z&&C.readPixels(P,H,B,z,pe.convert(tt),pe.convert(rt),xe)}finally{let Le=se!==null?G.get(se).__webglFramebuffer:null;_.bindFramebuffer(C.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,P,H,B,z,xe,we,ve=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(P>=0&&P<=x.width-B&&H>=0&&H<=x.height-z){_.bindFramebuffer(C.FRAMEBUFFER,Ee);let Le=x.textures[ve],tt=Le.format,rt=Le.type;x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ve);let Ae=Hc(Le);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,gt),C.bufferData(C.PIXEL_PACK_BUFFER,xe.byteLength,C.STREAM_READ),C.readPixels(P,H,B,z,pe.convert(tt),pe.convert(rt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Ut=se!==null?G.get(se).__webglFramebuffer:null;_.bindFramebuffer(C.FRAMEBUFFER,Ut);let wt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qh(C,wt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,gt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xe),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(gt),C.deleteSync(wt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,H=0){let B=Math.pow(2,-H),z=Math.floor(x.image.width*B),xe=Math.floor(x.image.height*B),we=P!==null?P.x:0,ve=P!==null?P.y:0;Z.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,we,ve,z,xe),_.unbindTexture()},this.copyTextureToTexture=function(x,P,H=null,B=null,z=0,xe=0){let we,ve,Ee,Le,tt,rt,Ae,gt,Ut,wt=x.isCompressedTexture?x.mipmaps[xe]:x.image;if(H!==null)we=H.max.x-H.min.x,ve=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Le=H.min.x,tt=H.min.y,rt=H.isBox3?H.min.z:0;else{let Lt=Math.pow(2,-z);we=Math.floor(wt.width*Lt),ve=Math.floor(wt.height*Lt),x.isDataArrayTexture?Ee=wt.depth:x.isData3DTexture?Ee=Math.floor(wt.depth*Lt):Ee=1,Le=0,tt=0,rt=0}B!==null?(Ae=B.x,gt=B.y,Ut=B.z):(Ae=0,gt=0,Ut=0);let Mt=pe.convert(P.format),nn=pe.convert(P.type),Te;P.isData3DTexture?(Z.setTexture3D(P,0),Te=C.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Z.setTexture2DArray(P,0),Te=C.TEXTURE_2D_ARRAY):(Z.setTexture2D(P,0),Te=C.TEXTURE_2D),_.activeTexture(C.TEXTURE0),_.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(C.UNPACK_ALIGNMENT,P.unpackAlignment);let ln=_.getParameter(C.UNPACK_ROW_LENGTH),ft=_.getParameter(C.UNPACK_IMAGE_HEIGHT),Mn=_.getParameter(C.UNPACK_SKIP_PIXELS),zn=_.getParameter(C.UNPACK_SKIP_ROWS),fi=_.getParameter(C.UNPACK_SKIP_IMAGES);_.pixelStorei(C.UNPACK_ROW_LENGTH,wt.width),_.pixelStorei(C.UNPACK_IMAGE_HEIGHT,wt.height),_.pixelStorei(C.UNPACK_SKIP_PIXELS,Le),_.pixelStorei(C.UNPACK_SKIP_ROWS,tt),_.pixelStorei(C.UNPACK_SKIP_IMAGES,rt);let es=x.isDataArrayTexture||x.isData3DTexture,yt=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let Lt=G.get(x),di=G.get(P),St=G.get(Lt.__renderTarget),pi=G.get(di.__renderTarget);_.bindFramebuffer(C.READ_FRAMEBUFFER,St.__webglFramebuffer),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let ts=0;ts<Ee;ts++)es&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,rt+ts),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,G.get(P).__webglTexture,xe,Ut+ts)),C.blitFramebuffer(Le,tt,we,ve,Ae,gt,we,ve,C.DEPTH_BUFFER_BIT,C.NEAREST);_.bindFramebuffer(C.READ_FRAMEBUFFER,null),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){let Lt=G.get(x),di=G.get(P);_.bindFramebuffer(C.READ_FRAMEBUFFER,L),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,O);for(let St=0;St<Ee;St++)es?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,z,rt+St):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Lt.__webglTexture,z),yt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,di.__webglTexture,xe,Ut+St):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,di.__webglTexture,xe),z!==0?C.blitFramebuffer(Le,tt,we,ve,Ae,gt,we,ve,C.COLOR_BUFFER_BIT,C.NEAREST):yt?C.copyTexSubImage3D(Te,xe,Ae,gt,Ut+St,Le,tt,we,ve):C.copyTexSubImage2D(Te,xe,Ae,gt,Le,tt,we,ve);_.bindFramebuffer(C.READ_FRAMEBUFFER,null),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else yt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Te,xe,Ae,gt,Ut,we,ve,Ee,Mt,nn,wt.data):P.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,xe,Ae,gt,Ut,we,ve,Ee,Mt,wt.data):C.texSubImage3D(Te,xe,Ae,gt,Ut,we,ve,Ee,Mt,nn,wt):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,xe,Ae,gt,we,ve,Mt,nn,wt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,xe,Ae,gt,wt.width,wt.height,Mt,wt.data):C.texSubImage2D(C.TEXTURE_2D,xe,Ae,gt,we,ve,Mt,nn,wt);_.pixelStorei(C.UNPACK_ROW_LENGTH,ln),_.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ft),_.pixelStorei(C.UNPACK_SKIP_PIXELS,Mn),_.pixelStorei(C.UNPACK_SKIP_ROWS,zn),_.pixelStorei(C.UNPACK_SKIP_IMAGES,fi),xe===0&&P.generateMipmaps&&C.generateMipmap(Te),_.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&Z.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Z.setTextureCube(x,0):x.isData3DTexture?Z.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Z.setTexture2DArray(x,0):Z.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){W=0,q=0,se=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var Xo=4,$o=3,_t="#141114",Us=Math.PI,Sc={ink:.5,hatch:!1,grit:.45},U0=n=>{let e=parseInt(n.slice(1),16);return[e>>16&255,e>>8&255,e&255]};var F0=n=>"#"+n.map(e=>Math.max(0,Math.min(255,e|0)).toString(16).padStart(2,"0")).join("");function qe(n,e,t=0){let i=U0(n);return F0([i[0]*e*(1-t*.14),i[1]*e*(1-t*.05),i[2]*e*(1+t*.2)])}var Jn=1;function ci(n){Jn=n*2654435761>>>0||1}function re(){return Jn^=Jn<<13,Jn>>>=0,Jn^=Jn>>>17,Jn^=Jn<<5,Jn>>>=0,Jn/4294967296}var Mc=null,bc=null;function O0(){let n=document.createElement("canvas");n.width=n.height=12;let e=n.getContext("2d");e.strokeStyle="#000",e.lineWidth=1.6,e.beginPath();for(let t=-12;t<24;t+=4)e.moveTo(t,12),e.lineTo(t+12,0);return e.stroke(),n}function B0(){let e=document.createElement("canvas");e.width=e.height=96;let t=e.getContext("2d"),i=t.createImageData(96,96);for(let s=0;s<9216;s++){let r=150+Math.random()*105,a=s*4;i.data[a]=i.data[a+1]=i.data[a+2]=r,i.data[a+3]=255}t.putImageData(i,0,0);for(let s=0;s<40;s++)t.fillStyle=`rgba(60,50,40,${Math.random()*.25})`,t.beginPath(),t.arc(Math.random()*96,Math.random()*96,1+Math.random()*6,0,7),t.fill();return e}function Iu(n,e,t){let i=n.createPattern(e,"repeat");return i.setTransform(new DOMMatrix().scale(t)),i}var kt=400;function me(n,e,t,i={}){let s=i.s==null?2.4:i.s,r=i.h==null?.9:i.h,a=i.dark||qe(t,i.dk||.52,1),o=i.lite||qe(t,i.lt||1.3),l=n.getTransform();n.save(),n.clip(e),n.fillStyle=a,n.fillRect(-kt,-kt,kt*2,kt*2),(i.hatch===!0||Sc.hatch&&i.hatch!==!1)&&(Mc=Mc||O0(),n.globalAlpha=i.hatchA||.3,n.fillStyle=Iu(n,Mc,.32),n.fillRect(-kt,-kt,kt*2,kt*2),n.globalAlpha=1),n.translate(s,-s*.8),n.clip(e),n.setTransform(l),n.fillStyle=o,n.fillRect(-kt,-kt,kt*2,kt*2),n.translate(-r,r),n.clip(e),n.setTransform(l),n.fillStyle=t,n.fillRect(-kt,-kt,kt*2,kt*2),n.restore()}function Li(n,e,t,i,s){n.save(),n.clip(t),me(n,e,i,s),n.restore()}function Ct(n,e,t=.28){bc=bc||B0(),n.save(),n.clip(e),n.globalCompositeOperation="multiply",n.globalAlpha=t*Sc.grit,n.fillStyle=Iu(n,bc,.22),n.fillRect(-kt,-kt,kt*2,kt*2),n.restore()}function ce(n,e,t=1.5,i=_t){n.save(),n.lineJoin="round",n.lineCap="round",n.strokeStyle=i,n.lineWidth=t*Sc.ink,n.globalAlpha=.9,n.stroke(e),n.restore()}function le(n,e,t=.9,i=_t,s=1){if(n.save(),n.globalAlpha=s,n.strokeStyle=i,n.lineWidth=t,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(e[0],e[1]),e.length===6)n.quadraticCurveTo(e[2],e[3],e[4],e[5]);else if(e.length===8)n.bezierCurveTo(e[2],e[3],e[4],e[5],e[6],e[7]);else for(let r=2;r<e.length;r+=2)n.lineTo(e[r],e[r+1]);n.stroke(),n.restore()}function Ne(n,e,t,i=1){n.save(),n.globalAlpha=i,n.fillStyle=t,n.fill(e),n.restore()}function Ce(n){return new Path2D(n)}function Ye(n,e,t,i,s=0){let r=new Path2D;return r.ellipse(n,e,t,i,s,0,Us*2),r}function pt(n,e,t,i){let s=new Path2D;return s.rect(n,e,t,i),s}function qt(n,e,t,i,s,r=2,a=!1){n.save(),n.clip(e),n.fillStyle=a?"#6a0b08":"#3e0705",n.beginPath();for(let o=0;o<Us*2;o+=.45){let l=s*(.6+re()*.6);n.lineTo(t+Math.cos(o)*l,i+Math.sin(o)*l*.8)}n.fill();for(let o=0;o<5;o++)n.beginPath(),n.arc(t+(re()-.5)*s*3,i+(re()-.5)*s*2,.3+re()*s*.25,0,7),n.fill();for(let o=0;o<r;o++){let l=t+(re()-.5)*s*1.4,c=s*(1+re()*2.5);n.fillRect(l-.35,i,.7,c),n.beginPath(),n.arc(l,i+c,.6,0,7),n.fill()}n.fillStyle="rgba(255,120,100,.25)",n.beginPath(),n.arc(t+s*.2,i-s*.25,s*.25,0,7),n.fill(),n.restore()}function En(n,e,t,i=0,s=0,r=.32,a=.72){let o=new Path2D;return o.moveTo(-e,0),o.bezierCurveTo(-e-s,n*r,-t-s*.35,n*a,-t,n),o.arc(0,n,t,Us,0,!0),o.bezierCurveTo(t+i*.35,n*a,e+i,n*r,e,0),o.arc(0,0,e,0,Us,!0),o.closePath(),o}function Nu(n,e,t=0){let[i,s,r,a]=n,o=r-i+$o*2,l=a-s+$o*2,c=document.createElement("canvas");c.width=Math.ceil(o*Xo),c.height=Math.ceil(l*Xo);let h=c.getContext("2d");h.scale(Xo,Xo),h.translate($o-i,$o-s),e(h),t&&(h.setTransform(1,0,0,1,0,0),h.globalCompositeOperation="source-atop",h.fillStyle=`rgba(8,10,18,${t})`,h.fillRect(0,0,c.width,c.height));let f=new qi(c);return f.colorSpace=Ht,f.anisotropy=4,f.minFilter=qn,f.generateMipmaps=!0,{tex:f,w:o,h:l,cx:(i+r)/2,cy:(s+a)/2}}var ct=(n,e,t=0)=>qe(n,e,t);function X(n,e,t,i,s,r){n.fillStyle=r,n.fillRect(e,t,i,s)}function Xe(n,e,t,i,s,r,a={}){X(n,e,t,i,s,r);let o=a.side==null?Math.min(6,Math.max(1.5,i*.1)):a.side;o&&X(n,e+i-o,t,o,s,ct(r,.76,1)),X(n,e,t,i,Math.min(1.6,s),ct(r,1.22)),a.edge!==!1&&(n.strokeStyle=ct(r,.42,1),n.lineWidth=.7,n.strokeRect(e+.35,t+.35,i-.7,s-.7))}function Tc(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function At(n,e,t,i,s,r,a,o=!0){Tc(n,e,t,i,s,r),n.fillStyle=a,n.fill(),o&&(n.save(),Tc(n,e,t,i,s,r),n.clip(),X(n,e+i*.8,t,i*.2,s,ct(a,.8,1)),X(n,e,t,i,1.4,ct(a,1.2)),n.restore()),n.strokeStyle=ct(a,.45,1),n.lineWidth=.7,Tc(n,e,t,i,s,r),n.stroke()}function Vt(n,e,t,i,s,r){n.beginPath(),n.arc(e,t,i,0,7),s&&(n.fillStyle=s,n.fill()),r&&(n.strokeStyle=r,n.lineWidth=.8,n.stroke())}function ht(n,e,t,i=1){n.strokeStyle=t,n.lineWidth=i,n.lineCap="round",n.beginPath(),n.moveTo(e[0],e[1]);for(let s=2;s<e.length;s+=2)n.lineTo(e[s],e[s+1]);n.stroke()}var Fs=(n,e,t,i,s,r)=>{X(n,e+2,i-s,2.4,s,r),X(n,e+t-4.4,i-s,2.4,s,r)},An={sofa(n,e,t,i="#7a2638"){return Fs(n,e+2,84,t,4,"#1a1210"),At(n,e+6,t-40,76,20,4,ct(i,.92)),Xe(n,e+4,t-24,80,14,i),At(n,e,t-30,12,24,3,ct(i,.85)),At(n,e+88-12,t-30,12,24,3,ct(i,.8)),At(n,e+16,t-36,16,13,3,"#d8d0c0"),At(n,e+88-32,t-36,16,13,3,"#cfc6b4"),ht(n,[e+88/2,t-24,e+88/2,t-11],ct(i,.6),.8),88},armchair(n,e,t,i="#5a3a2a"){return Fs(n,e,42,t,4,"#1a1210"),At(n,e+5,t-44,32,26,5,ct(i,.9)),Xe(n,e+4,t-22,34,12,i),At(n,e,t-28,8,22,3,ct(i,.85)),At(n,e+42-8,t-28,8,22,3,ct(i,.8)),42},wardrobe(n,e,t,i="#4a3426"){return Xe(n,e,t-112,48,112,i),X(n,e-2,t-112-4,52,5,ct(i,.8)),ht(n,[e+48/2,t-112+4,e+48/2,t-6],ct(i,.5),.8),X(n,e+48/2-4,t-112/2,2,7,"#c9a65a"),X(n,e+48/2+2,t-112/2,2,7,"#c9a65a"),X(n,e+3,t-18,42,1,ct(i,.55)),48},cabinet(n,e,t,i="#4f3a2c"){Xe(n,e,t-44,54,44,i);for(let o=0;o<3;o++)ht(n,[e+3,t-44+14*o+14,e+54-3,t-44+14*o+14],ct(i,.55),.7),X(n,e+54/2-4,t-44+14*o+6,8,1.6,"#b89a5a");return re()<.5?(Xe(n,e+8,t-44-30,38,28,"#1c1d20"),X(n,e+11,t-44-27,30,21,"#2b3a40"),X(n,e+12,t-44-26,10,3,"rgba(255,255,255,.12)")):(Vt(n,e+40,t-44-9,8,"#2f5a7a","#11202a"),ht(n,[e+40,t-44-1,e+40,t-44],"#333",2),X(n,e+34,t-44-1.5,12,1.5,"#3a3a3a")),54},bookshelf(n,e,t,i="#3e2c20"){Xe(n,e,t-104,50,104,i,{side:3}),X(n,e+3,t-104+3,44,98,ct(i,.55));let a=["#7a3a2a","#3a4a6a","#6a6a3a","#5a2a3a","#8a7a5a","#2a4a3a","#6a4a2a"];for(let o=0;o<4;o++){let l=t-104+4+o*25;X(n,e+2,l+21,46,3,ct(i,1.1));let c=e+4;for(;c<e+50-6;){let h=2+re()*3,f=13+re()*7;if(re()<.12){c+=h+1;continue}X(n,c,l+21-f,h,f,a[re()*a.length|0]),c+=h+.4}}return 50},bunkbed(n,e,t,i="#8a6a44"){let r=ct(i,.9);for(let a of[t-26,t-74])Xe(n,e+2,a,90,8,i),At(n,e+4,a-9,86,10,4,"#2c3e6a"),Vt(n,e+14,a-13,7,"#a53a2a",ct("#a53a2a",.5));X(n,e,t-100,5,100,r),X(n,e+94-5,t-100,5,100,r);for(let a=0;a<5;a++)X(n,e+94-22,t-18-a*16,14,2,ct(i,1.1));return X(n,e+94-23,t-96,2,96,ct(i,.8)),X(n,e+94-9,t-96,2,96,ct(i,.8)),94},bed(n,e,t,i="#6a4a30"){return Xe(n,e,t-20,92,14,i),X(n,e,t-46,7,46,ct(i,.85)),Fs(n,e,92,t,6,ct(i,.6)),At(n,e+6,t-28,84,10,3,"#cfc6b4"),At(n,e+30,t-31,60,12,4,"#4a5a7a"),At(n,e+9,t-34,18,8,4,"#e2dccc"),92},table(n,e,t,i="#5a4030"){return X(n,e,t-32,62,4,i),X(n,e,t-28,62,2,ct(i,.6)),Fs(n,e+3,56,t,28,ct(i,.7)),62},desk(n,e,t,i="#5a4030"){X(n,e,t-34,66,4,i),Xe(n,e+66-26,t-30,24,30,ct(i,.9));for(let r=0;r<2;r++)X(n,e+66-18,t-22+r*13,8,1.6,"#b89a5a");return X(n,e+3,t-30,3,30,ct(i,.7)),re()<.5?(Vt(n,e+14,t-46,8,"#3a6a8a","#1a2a33"),ht(n,[e+8,t-52,e+20,t-40],"#5a8a5a",2),X(n,e+12,t-38,4,4,"#6a5a3a")):(ht(n,[e+12,t-34,e+18,t-52,e+26,t-50],"#2a2a2a",1.4),n.fillStyle="#c9a65a",n.beginPath(),n.moveTo(e+22,t-54),n.lineTo(e+32,t-52),n.lineTo(e+28,t-46),n.fill()),66},floorlamp(n,e,t){return X(n,e+4,t-3,12,3,"#2a2a2a"),n.strokeStyle="#2a2a2a",n.lineWidth=1.6,n.beginPath(),n.moveTo(e+10,t-3),n.quadraticCurveTo(e+6,t-100,e+28,t-96),n.stroke(),n.fillStyle="#3a3a3a",n.beginPath(),n.moveTo(e+22,t-96),n.lineTo(e+34,t-96),n.lineTo(e+31,t-88),n.lineTo(e+25,t-88),n.fill(),30},officedesk(n,e,t,i="#7a7468"){return X(n,e,t-32,78,3,i),X(n,e+2,t-29,3,29,"#4a4a4a"),Xe(n,e+78-24,t-29,22,29,ct(i,.85)),Xe(n,e+18,t-56,30,20,"#1d2024"),X(n,e+21,t-53,24,14,"#24343c"),X(n,e+31,t-36,4,4,"#2a2a2a"),X(n,e+52,t-36,14,4,"#d8d4c8"),n.fillStyle="#26282c",n.fillRect(e-6,t-44,4,22),At(n,e-12,t-24,18,5,2,"#2c2e33"),X(n,e-4,t-19,2,14,"#2a2a2a"),X(n,e-10,t-5,14,2,"#2a2a2a"),78},filing(n,e,t,i="#6a7076"){Xe(n,e,t-64,28,64,i);for(let a=0;a<4;a++)ht(n,[e+2,t-64+a*16+16,e+28-2,t-64+a*16+16],ct(i,.55),.7),X(n,e+28/2-4,t-64+a*16+7,8,2,"#b0b4b8");return 28},cooler(n,e,t){return Xe(n,e+2,t-48,18,48,"#d8dadc"),At(n,e+3,t-72,16,24,6,"rgba(110,170,220,.85)"),X(n,e+6,t-40,3,3,"#3a6aaa"),X(n,e+12,t-40,3,3,"#aa3a3a"),22},copier(n,e,t){return Xe(n,e,t-40,44,40,"#c8c4bc"),X(n,e+4,t-44,36,5,"#9a968e"),X(n,e+6,t-30,32,3,"#3a3a3a"),X(n,e+30,t-38,8,4,"#3a8a5a"),44},labbench(n,e,t,i="#d8dcdc"){Xe(n,e,t-36,86,36,"#6a7a7c"),X(n,e-2,t-38,90,4,"#1f2a2c");for(let a=0;a<3;a++)ht(n,[e+28*a+28,t-34,e+28*a+28,t-2],"#4a5a5c",.8),X(n,e+28*a+10,t-24,8,2,"#b0b8b8");let r=["#58c08a","#c0a03a","#6a8ac0","#c05a5a"];for(let a=0;a<4;a++){let o=e+8+a*20,l=r[a];n.fillStyle="rgba(220,240,240,.7)",n.beginPath(),n.moveTo(o,t-52),n.lineTo(o+4,t-52),n.lineTo(o+4,t-46),n.lineTo(o+9,t-39),n.lineTo(o-5,t-39),n.lineTo(o,t-46),n.fill(),X(n,o-3,t-44,10,5,l)}return 86},gurney(n,e,t){return X(n,e,t-30,84,4,"#9aa2a4"),ht(n,[e+6,t-26,e+6,t-5],"#7a8284",1.6),ht(n,[e+84-6,t-26,e+84-6,t-5],"#7a8284",1.6),Vt(n,e+6,t-3,3,"#2a2a2a"),Vt(n,e+84-6,t-3,3,"#2a2a2a"),At(n,e+2,t-40,80,11,5,"#d8d4c8"),At(n,e+6,t-46,26,9,4,"#cfc8b8"),n.fillStyle="rgba(110,10,8,.75)",n.beginPath(),n.ellipse(e+50,t-36,12,4,0,0,7),n.fill(),84},chemcab(n,e,t){Xe(n,e,t-86,42,86,"#b8c0c0"),X(n,e+4,t-86+4,34,56,"rgba(40,60,60,.55)");let r=["#58c08a","#c0a03a","#c05a5a","#6a8ac0"];for(let a=0;a<3;a++)for(let o=0;o<4;o++)X(n,e+7+o*8,t-86+8+a*18+4,5,10,r[(a+o)%4]);for(let a=0;a<3;a++)X(n,e+4,t-86+22+a*18,34,1.4,"#e8eeee");return 42},tubes(n,e,t){Xe(n,e,t-8,26,8,"#3a4446"),X(n,e+3,t-110,20,102,"rgba(160,240,210,.18)"),X(n,e+5,t-80,16,72,"rgba(70,220,150,.55)"),Xe(n,e-1,t-116,28,7,"#3a4446");for(let s=0;s<6;s++)Vt(n,e+8+re()*10,t-20-re()*55,1+re()*1.4,"rgba(220,255,240,.7)");return 26},piano(n,e,t){Xe(n,e,t-62,72,58,"#151417",{side:5}),X(n,e-2,t-66,76,5,"#1d1b20"),X(n,e+4,t-36,64,6,"#e8e4da");for(let s=0;s<12;s++)X(n,e+6+s*5.2,t-36,2,4,"#111");return Fs(n,e+4,64,t,4,"#111"),X(n,e+10,t-58,20,14,"rgba(255,255,255,.06)"),72},bar(n,e,t){Xe(n,e,t-40,78,40,"#3a2420"),X(n,e-3,t-43,84,4,"#c9a24a"),X(n,e+4,t-100,70,3,"#2a1a16");let s=["#5a8a3a","#8a3a2a","#c9a24a","#3a5a8a"];for(let r=0;r<8;r++){let a=e+8+r*8;X(n,a,t-116,5,16,s[r%4]),X(n,a+1.4,t-121,2.2,5,s[r%4])}return 78},sofaLux(n,e,t){return An.sofa(n,e,t,"#4a2a5a")},armchair2(n,e,t){return An.armchair(n,e,t,"#6a2a3a")},statue(n,e,t){return Xe(n,e+4,t-50,22,50,"#b8b0a4"),Vt(n,e+15,t-64,8,"#cfc8bc","#8a8478"),At(n,e+6,t-58,18,10,4,"#c4bcb0"),30},shelves(n,e,t){X(n,e,t-96,3,96,"#4a5054"),X(n,e+52-3,t-96,3,96,"#4a5054");for(let r=0;r<4;r++){let a=t-96+6+r*30;X(n,e,a,52,3,"#5a6064");let o=e+4;for(;o<e+52-10;){let l=10+re()*10,c=8+re()*14;if(re()<.25){o+=l;continue}Xe(n,o,a-c,l,c,re()<.5?"#8a6a44":"#6a6a5a"),o+=l+2}}return 52},crates(n,e,t){let s=(r,a,o)=>{Xe(n,r,a-o,o,o,"#7a5a34"),ht(n,[r+2,a-2,r+o-2,a-o+2],"#5a3e22",1.4),ht(n,[r+2,a-o+2,r+o-2,a-2],"#5a3e22",1.4)};return s(e,t,30),s(e+32,t,26),s(e+8,t-30,22),64},boxes(n,e,t){return Xe(n,e,t-24,30,24,"#a07a4a"),X(n,e+12,t-24,6,24,"#c8b088"),Xe(n,e+32,t-18,22,18,"#8a6a40"),Xe(n,e+6,t-42,22,18,"#b0885a"),ht(n,[e+6,t-42,e+2,t-48],"#b0885a",2),56},boiler(n,e,t){At(n,e+4,t-104,46,100,14,"#5a6a5c");for(let s=0;s<3;s++)X(n,e+4,t-90+s*28,46,2,"#4a584c");return Vt(n,e+20,t-60,6,"#d8d4c8","#2a2a2a"),ht(n,[e+20,t-60,e+23,t-64],"#aa2a2a",1),X(n,e+48,t-80,12,4,"#7a4a30"),X(n,e+56,t-210,4,134,"#7a4a30"),58},barrels(n,e,t){for(let[s,r]of[[e,"#3a5a4a"],[e+28,"#7a3a2a"]])At(n,s,t-38,26,38,4,r),X(n,s,t-30,26,2,ct(r,.6)),X(n,s,t-12,26,2,ct(r,.6));return 56},mattress(n,e,t){return At(n,e,t-10,80,10,3,"#8a8470"),At(n,e+20,t-14,58,7,3,"#5a4a3a"),n.fillStyle="rgba(90,30,20,.5)",n.beginPath(),n.ellipse(e+40,t-6,10,3,0,0,7),n.fill(),80},stove(n,e,t){Xe(n,e,t-44,44,44,"#c8c4bc"),X(n,e+4,t-30,36,22,"#2a2a2a"),X(n,e+6,t-28,32,18,"#3a3a3a");for(let s=0;s<2;s++)Vt(n,e+12+s*20,t-46,5,"#2a2a2a"),Vt(n,e+12+s*20,t-46,3,"#ff6a2a");return Xe(n,e+8,t-58,16,10,"#8a9096"),44},fridge(n,e,t){return Xe(n,e,t-96,38,96,"#d8dad6"),ht(n,[e+2,t-62,e+38-2,t-62],"#9a9c98",1),X(n,e+38-8,t-86,2.4,16,"#8a8c88"),X(n,e+38-8,t-54,2.4,22,"#8a8c88"),38},workbench(n,e,t){X(n,e,t-40,92,6,"#8a6a44"),Fs(n,e+2,88,t,34,"#5a4328"),X(n,e+4,t-14,84,3,"#5a4328"),Xe(n,e+56,t-54,18,14,"#3a4252"),X(n,e+60,t-62,8,8,"#6f7a8f"),Xe(n,e+8,t-112,76,54,"#4a3d2c");for(let s=0;s<4;s++)ht(n,[e+18+s*16,t-104,e+18+s*16,t-76],["#9aa0a6","#7a4a2a","#c9a24a","#aa3a2a"][s],2.2);return 92},vending(n,e,t){Xe(n,e,t-76,40,76,"#c8ccd0"),X(n,e+4,t-70,22,52,"#1a2228");let s=["#c03a2a","#3a7ac0","#e0b03a","#4aa05a"];for(let r=0;r<4;r++)for(let a=0;a<3;a++)X(n,e+6+a*7,t-66+r*12,5,8,s[(r+a)%4]);return ht(n,[e+5,t-68,e+20,t-40,e+12,t-22],"rgba(255,255,255,.5)",.5),X(n,e+29,t-66,7,14,"#3a3e42"),X(n,e+6,t-14,20,6,"#111"),40},door(n,e,t){return Xe(n,e-4,t-108,58,108,"#2a2420"),Xe(n,e,t-102,50,102,"#5a4636"),X(n,e+6,t-94,38,36,"#4e3c2e"),X(n,e+6,t-52,38,40,"#4e3c2e"),At(n,e+18,t-58,14,11,2,"#c9a422"),n.strokeStyle="#c9a422",n.lineWidth=2.2,n.beginPath(),n.arc(e+25,t-58,4.5,Math.PI,0),n.stroke(),Vt(n,e+25,t-53,1.4,"#3a2a06"),Vt(n,e+42,t-52,2.4,"#b89a5a"),50},radiator(n,e,t){for(let s=0;s<8;s++)At(n,e+s*5.6,t-40,4.6,30,2,"#8a8e90",!1);return X(n,e,t-12,46,3,"#6a6e70"),46},toolrack(n,e,t){Xe(n,e,t-112,50,50,"#6a5a44");for(let s=0;s<4;s++)ht(n,[e+8+s*11,t-104,e+8+s*11,t-80],["#9aa0a6","#7a4a2a","#9aa0a6","#aa3a2a"][s],2.2);return 50}},wc={z0:["shelves","crates","boiler","barrels","mattress","toolrack","boxes"],z1:["sofa","wardrobe","bunkbed","bookshelf","armchair","cabinet","desk","floorlamp","table","bed"],z2:["officedesk","filing","cooler","copier","officedesk","sofa","bookshelf"],z3:["labbench","gurney","chemcab","tubes","labbench","filing"],z4:["piano","armchair2","bar","sofaLux","statue","bookshelf","floorlamp"]},Di={clock(n,e,t){Vt(n,e,t,11,"#d8d2c4","#3a3226"),Vt(n,e,t,8.5,"#efe9dc"),ht(n,[e,t,e,t-6],"#222",1.2),ht(n,[e,t,e+4.4,t+2],"#222",1);for(let i=0;i<12;i++){let s=i/12*6.28;X(n,e+Math.cos(s)*7-.4,t+Math.sin(s)*7-.4,.8,.8,"#333")}},frame(n,e,t,i="#6a4a2a"){Xe(n,e-18,t-13,36,26,i);let s=n.createLinearGradient(0,t-10,0,t+10);s.addColorStop(0,"#3a4a5a"),s.addColorStop(1,"#2a3020"),X(n,e-15,t-10,30,20,s),n.fillStyle="#1c2218",n.beginPath(),n.moveTo(e-15,t+10),n.lineTo(e-6,t),n.lineTo(e,t+5),n.lineTo(e+8,t-3),n.lineTo(e+15,t+10),n.fill()},frameGold(n,e,t){Di.frame(n,e,t,"#b08a3a")},window(n,e,t){Xe(n,e-26,t-34,52,66,"#3a2c22");let i=n.createLinearGradient(0,t-30,0,t+28);i.addColorStop(0,"#141a26"),i.addColorStop(1,"#2a3446"),X(n,e-22,t-30,44,58,i),n.fillStyle="rgba(200,210,230,.25)";for(let s=0;s<4;s++)n.beginPath(),n.ellipse(e-14+s*9,t+20-s%2*4,9,4,0,0,7),n.fill();n.strokeStyle="rgba(180,200,230,.35)",n.lineWidth=.5;for(let s=0;s<14;s++){let r=e-21+re()*42,a=t-29+re()*50;n.beginPath(),n.moveTo(r,a),n.lineTo(r-1.4,a+6),n.stroke()}X(n,e-1,t-30,2,58,"#3a2c22"),X(n,e-22,t-2,44,2,"#3a2c22"),X(n,e-32,t-38,12,74,"#6a3a3a"),X(n,e+20,t-38,12,74,"#6a3a3a"),X(n,e-34,t-40,68,3,"#2a2a2a")},blinds(n,e,t){Xe(n,e-28,t-30,56,56,"#5a6268");for(let i=0;i<12;i++)X(n,e-25,t-27+i*4.4,50,2.8,i%5===3?"#1a1e24":"#aeb4b8")},board(n,e,t){Xe(n,e-30,t-18,60,36,"#d8dcdc"),ht(n,[e-22,t-8,e-4,t-10,e+10,t-2],"#2a4a8a",1),ht(n,[e-20,t+4,e+18,t+6],"#aa2a2a",1)},biohaz(n,e,t){n.fillStyle="#d9ad1f",n.beginPath(),n.moveTo(e,t-12),n.lineTo(e+12,t+9),n.lineTo(e-12,t+9),n.closePath(),n.fill(),Vt(n,e,t+2,3.4,null,"#15171c")},monitor(n,e,t){Xe(n,e-22,t-14,44,28,"#15191c"),X(n,e-19,t-11,38,22,"#04100c"),ht(n,[e-18,t,e-8,t,e-5,t-8,e-1,t+7,e+3,t,e+18,t],"#58ffb0",1)},vent(n,e,t){Xe(n,e-16,t-8,32,16,"#5a6064");for(let i=0;i<5;i++)X(n,e-13,t-6+i*3,26,1.2,"#2a2e30")},mirror(n,e,t){n.fillStyle="#b08a3a",n.beginPath(),n.ellipse(e,t,15,20,0,0,7),n.fill(),n.fillStyle="#5a6a7a",n.beginPath(),n.ellipse(e,t,12,17,0,0,7),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.beginPath(),n.ellipse(e-4,t-6,3,8,.4,0,7),n.fill()},pipes(n,e,t){X(n,e-60,t-3,120,6,"#6a4a30"),X(n,e-60,t+6,120,4,"#4a5a5c");for(let i=0;i<3;i++)X(n,e-50+i*45,t-5,4,10,"#3a3a3a")}},Ec={z0:["pipes","vent","vent"],z1:["clock","frame","window","frame"],z2:["blinds","board","clock"],z3:["biohaz","monitor","vent"],z4:["frameGold","mirror","window"]};var Ui=2.6,on=(n,e,t)=>qe(n,e,t),qo={z0:{walls:[["#3d4540","#363d39"],["#40403a","#383832"],["#35403f","#2f3938"]],pattern:"concrete",floor:"#2a2c2a",base:"#1d201f",lamp:"cage",hall:"#3a3e3c"},z1:{walls:[["#4c3a48","#443342"],["#5a5638","#524e32"],["#3e4652","#38404a"],["#5a4036","#523a30"],["#3c4a3c","#364236"]],pattern:"stripes",floor:"#3a2a22",base:"#261b16",lamp:"shade",hall:"#4a3c30"},z2:{walls:[["#4a525a","#444b52"],["#55584e","#4e5148"],["#4a4e5a","#444852"]],pattern:"panels",floor:"#2c3036",base:"#20242a",lamp:"panel",hall:"#3e444a"},z3:{walls:[["#7c938d","#6f8680"],["#8a9894","#7c8a86"],["#6f8a8a","#637d7d"]],pattern:"tiles",floor:"#3a4442",base:"#c9a422",lamp:"panel",hall:"#56625f"},z4:{walls:[["#3c2f44","#33283b"],["#4a2a32","#40242b"],["#2c3442","#262d3a"]],pattern:"damask",floor:"#2a2026",base:"#b08a3a",lamp:"chandelier",hall:"#3a2e36"},base:{walls:[["#5c4430","#533d2b"]],pattern:"planks",floor:"#3a2a1c",base:"#2a1d12",lamp:"bulb",hall:"#4a3a2a"}};function Fi(n,e,t){let i=document.createElement("canvas");i.width=Math.ceil(n*Ui),i.height=Math.ceil(e*Ui);let s=i.getContext("2d");s.scale(Ui,Ui),t(s);let r=new qi(i);return r.colorSpace=Ht,r.anisotropy=4,r}function z0(n,e,t,i,s,r){let[a,o]=s;if(X(n,0,0,e,t,a),r==="stripes")for(let c=0;c<e;c+=12)X(n,c,0,6,t,o);if(r==="panels"){for(let c=0;c<e;c+=46)X(n,c,0,1.2,t*.62,on(a,.8));X(n,0,t*.62,e,3,on(a,.75)),X(n,0,t*.62+3,e,t,o)}if(r==="tiles"){n.strokeStyle=on(a,.82),n.lineWidth=.6;for(let c=0;c<e;c+=13)n.beginPath(),n.moveTo(c,0),n.lineTo(c,t),n.stroke();for(let c=0;c<t;c+=13)n.beginPath(),n.moveTo(0,c),n.lineTo(e,c),n.stroke()}if(r==="concrete"){for(let c=34;c<t;c+=42)X(n,0,c,e,1,on(a,.8));for(let c=0;c<30;c++)n.fillStyle=`rgba(0,0,0,${re()*.12})`,n.beginPath(),n.ellipse(re()*e,re()*t,6+re()*26,4+re()*14,0,0,7),n.fill()}if(r==="damask"){n.fillStyle=o;for(let c=8;c<t;c+=22)for(let h=c/22%2*11;h<e;h+=22)n.beginPath(),n.moveTo(h,c-6),n.lineTo(h+5,c),n.lineTo(h,c+6),n.lineTo(h-5,c),n.fill()}if(r==="planks")for(let c=0;c<e;c+=15)X(n,c,0,1,t,on(a,.7)),re()<.5&&X(n,c+4+re()*6,re()*t,.8,20+re()*40,on(a,.85));let l=n.createLinearGradient(0,0,0,34);l.addColorStop(0,"rgba(0,0,0,.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=l,n.fillRect(0,0,e,34),l=n.createLinearGradient(0,t-60,0,t),l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,.35)"),n.fillStyle=l,n.fillRect(0,t-60,e,60);for(let c=0;c<4;c++){let h=re()*e,f=30+re()*90;l=n.createLinearGradient(0,0,0,f),l.addColorStop(0,"rgba(20,14,8,.22)"),l.addColorStop(1,"rgba(20,14,8,0)"),n.fillStyle=l,n.fillRect(h,0,3+re()*8,f)}X(n,0,t-9,e,3,i.base),X(n,0,t-6,e,6,i.floor),X(n,0,t-6,e,1,on(i.floor,1.35))}function k0(n,e,t){if(t==="chandelier"){ht(n,[e,0,e,16],"#2a2a2a",1),X(n,e-18,16,36,2,"#b08a3a");for(let i=0;i<5;i++)X(n,e-16+i*8,10,1.2,6,"#b08a3a"),Vt(n,e-15.4+i*8,9,2.2,"#ffe9b0");return 18}return t==="panel"?(X(n,e-22,0,44,4,"#2a2e33"),X(n,e-19,4,38,2.4,"#eef4ff"),6):t==="cage"?(ht(n,[e,0,e,10],"#222",1),Vt(n,e,14,5,"#ffe2a8"),ht(n,[e-5,14,e+5,14],"#333",.8),ht(n,[e,9,e,19],"#333",.8),18):t==="bulb"?(ht(n,[e,0,e,18],"#222",1),Vt(n,e,22,4.4,"#ffe9b0"),26):(ht(n,[e,0,e,22],"#1d1d1d",1),n.fillStyle="#5a2a22",n.beginPath(),n.moveTo(e-10,30),n.lineTo(e-4,21),n.lineTo(e+4,21),n.lineTo(e+10,30),n.closePath(),n.fill(),X(n,e-10,29.4,20,1.6,on("#5a2a22",.6)),30)}function V0(n,e,t,i,s="rgba(255,230,180,"){let r=n.createLinearGradient(0,t,0,i);r.addColorStop(0,s+".16)"),r.addColorStop(1,s+"0)"),n.fillStyle=r,n.beginPath(),n.moveTo(e-8,t),n.lineTo(e+8,t),n.lineTo(e+70,i),n.lineTo(e-70,i),n.closePath(),n.fill()}function Lu(n,e,t,i,s,r={}){let a=r.levels||{},o=qo[t]||qo.z1;return Fi(n,e,l=>{ci(s);let c=o.walls[re()*o.walls.length|0];z0(l,n,e,o,c,o.pattern);let h=e-4,f=n*(.35+re()*.3),u=Ec[t]||Ec.z1;if(t==="base")Di.window(l,n*.7,76);else{let A=u[re()*u.length|0],M=n*(.2+re()*.6);Di[A]&&Di[A](l,M,A==="pipes"?40:80+re()*20)}let d=wc[t]||wc.z1,p={loot:["crates","boxes"],rest:["bed"],vending:[],trader:["table"],event:["table"],enemy:[],trap:[],empty:[],locked:["crates","shelves"],bedroom:["bed","cabinet","armchair"],kitchen:["fridge","stove"].concat(a.kitchen>=2?["table"]:[],a.kitchen>=3?["cooler","shelves"]:[]),workshop:["workbench"].concat(a.bench>=2?["shelves"]:[],a.bench>=3?["crates"]:[])}[i]||[],y=8+re()*10,g=t==="base"?0:(r.sparse?2:3)-Math.min(1,p.length);if(p.concat(Array.from({length:g},()=>d[re()*d.length|0])).forEach(A=>{if(y>n-30)return;let M=An[A];if(!M)return;let b=M(l,y,h);y+=b+10+re()*16}),i==="vending"&&An.vending(l,n-48,h),i==="trap"&&(l.fillStyle="#0a0808",l.beginPath(),l.moveTo(n*.45,h+2),l.lineTo(n*.5,h-4),l.lineTo(n*.62,h-2),l.lineTo(n*.68,h+2),l.fill(),ht(l,[10,h-8,n-10,h-10],"rgba(200,200,200,.6)",.5),Di.biohaz(l,n-30,70)),(i==="event"||i==="trader")&&(Xe(l,n*.55,h-44,18,12,"#3a3a2a"),Vt(l,n*.55+13,h-38,3,"#222"),ht(l,[n*.55+4,h-44,n*.55+1,h-54],"#555",.8)),i==="enemy"||i==="trap"){l.fillStyle="rgba(90,6,4,.7)",l.beginPath(),l.ellipse(n*.5,h-1,26,3.4,0,0,7),l.fill();for(let A=0;A<3;A++){let M=20+re()*(n-40),b=60+re()*70;l.fillStyle="rgba(80,6,4,.6)",l.beginPath(),l.ellipse(M,b,6+re()*8,4+re()*5,re(),0,7),l.fill(),X(l,M-1,b,1.6,10+re()*20,"rgba(80,6,4,.55)")}}let w=k0(l,f,o.lamp);V0(l,f,w,h,o.lamp==="panel"?"rgba(220,235,255,":"rgba(255,225,170,")})}function Du(n,e,t,i,s){let r=qo[t]||qo.z1;return Fi(n,e,a=>{ci(s);let o=r.hall;X(a,0,0,n,e,o);for(let f=0;f<20;f++)a.fillStyle=`rgba(0,0,0,${re()*.1})`,a.beginPath(),a.ellipse(re()*n,re()*e,8+re()*30,5+re()*16,0,0,7),a.fill();let l=e-4;a.save(),a.font='700 54px "Arial Narrow", Impact, sans-serif',a.fillStyle="rgba(230,226,214,.22)",a.textBaseline="top",a.fillText(String(i),12,26),a.globalCompositeOperation="destination-out";for(let f=0;f<4;f++)X(a,12+f*15+re()*4,26,1.6,54,"rgba(0,0,0,.8)");a.restore();let c=6,h=128;a.fillStyle=on(o,.72),a.beginPath(),a.moveTo(c,l);for(let f=0;f<=16;f++){let u=c+f*h/16,d=l-f*l/16;a.lineTo(u,d),a.lineTo(u+h/16,d)}a.lineTo(c+h+10,0),a.lineTo(c+h+10,14),a.lineTo(c+14,l),a.closePath(),a.fill();for(let f=0;f<16;f++){let u=c+f*h/16,d=l-(f+1)*l/16;X(a,u,d,h/16+1,2,on(o,1.15))}ht(a,[c+8,l-36,c+h+8,-34],on(o,.45),1.6);for(let f=0;f<9;f++){let u=f/8,d=c+8+u*h,p=l-36+u*(-34-l+36);ht(a,[d,p,d,p+34],on(o,.5),.8)}Xe(a,n-104,40,26,12,"#2a6a3a"),a.fillStyle="#d8f0d8",a.font="700 7px sans-serif",a.fillText("\u0412\u042B\u0425\u041E\u0414",n-101,49),At(a,n-100,l-30,9,24,3,"#a8281e"),X(a,n-99,l-34,6,4,"#222"),X(a,n-76,l-128,64,128,"#0b0c0e"),Xe(a,n-80,l-132,72,6,on(o,.6)),X(a,n-80,l-132,4,132,on(o,.6)),X(a,n-12,l-132,4,132,on(o,.55)),Xe(a,n-64,l-150,40,14,"#15171a"),X(a,n-6,l-70,4,10,"#2a2e33"),X(a,0,e-9,n,3,r.base),X(a,0,e-6,n,6,r.floor),X(a,0,e-6,n,1,on(r.floor,1.35))})}var Ac=null;function G0(){return Ac||(Ac=Fi(256,24,n=>{X(n,0,0,256,24,"#141516");for(let e=0;e<60;e++)X(n,re()*256,re()*24,1+re()*2,1,"rgba(255,255,255,.04)");X(n,0,0,256,1.4,"#26282a")}))}var Cc=null;function H0(){return Cc||(Cc=Fi(400,300,n=>{let e=n.createLinearGradient(0,0,0,300);e.addColorStop(0,"#07090d"),e.addColorStop(.6,"#121a24"),e.addColorStop(1,"#1d2a36"),X(n,0,0,400,300,e);for(let t=0;t<26;t++)n.fillStyle=`rgba(${60+re()*30},${80+re()*30},${100+re()*30},${.15+re()*.2})`,n.beginPath(),n.ellipse(re()*400,180+re()*140,40+re()*70,14+re()*24,0,0,7),n.fill()}))}function Uu(n,e){let t=new Ot,i=n.zone,s=e.roomH,r=e.floorY,a=($,Re={})=>new Qt(Object.assign({map:$},Re)),o=($,Re,ae,ze,et,De)=>{let be=new zt(new Dn($,Re),ae);return be.position.set(ze,et,De),t.add(be),be},l=$=>-$,c=[],h=[];e.comps.forEach(($,Re)=>{let ae=$.x1-$.x0,ze=n.floor*31+Re*7+(n.base?999:0),et;$.k==="hall"?et=Du(ae,s,n.base?"base":i,n.floor,ze):et=Lu(ae,s,n.base?"base":i,n.base?{0:"bedroom",1:"kitchen",3:"workshop"}[Re]:(n.rooms[$.i]||{}).type,ze,{levels:n.levels});let De=a(et);h.push(De);let be=o(ae,s,De,($.x0+$.x1)/2,l(r-s/2),-10),Ge=$.k==="room"&&!n.base?o(ae,s,new Qt({color:197380,transparent:!0,opacity:.96,depthWrite:!1}),($.x0+$.x1)/2,l(r-s/2),-6):null;Ge&&(Ge.renderOrder=5),c.push({cp:$,mat:De,tex:et,dark:Ge,glow:0,open:0,flick:!n.base&&(n.floor*7+Re*13)%5===0})});for(let $=1;$<e.comps.length;$++){let Re=(e.comps[$-1].x1+e.comps[$].x0)/2,ae=e.comps[$].x0-e.comps[$-1].x1+2;o(ae,s,new Qt({color:1052946}),Re,l(r-s/2),-8)}let f=a(G0());f.map.wrapS=vs,f.map.repeat.set(e.bw/120,1);let u=e.comps[0].x0-22,d=e.comps[e.comps.length-1].x1+22,p=d-u;for(let $ of[r+e.slab/2,r-s-e.slab/2,r-2*s-e.slab*1.5,r+s+e.slab*1.5])o(p,e.slab,f,(u+d)/2,l($),4);let y=new Qt({color:789774}),g=3*s+4*e.slab;o(22,g,y,u+11,l(r-s/2),4),o(22,g,y,d-11,l(r-s/2),4);let m=[];for(let[$,Re]of[[-(s+e.slab),n.floor+1],[s+e.slab,n.floor-1]])e.comps.forEach((ae,ze)=>{let et=ae.x1-ae.x0,De=Re*31+ze*7+500,be=ae.k==="hall"?Du(et,s,i,Math.max(1,Re),De):Lu(et,s,i,"empty",De,{sparse:!0}),Ge=a(be,{color:new Ke(.13,.13,.15)});m.push(Ge),o(et,s,Ge,(ae.x0+ae.x1)/2,l(r-s/2+$),-10)});let w=o(4e3,2400,a(H0()),(u+d)/2,l(r-200),-60),A=new Bt().setAttribute("position",new Jt(new Float32Array(192),3)),M=new Ts(A,new Xi({color:15266047,transparent:!0,opacity:0}));M.frustumCulled=!1,t.add(M);let b=0,T=4+Math.random()*8,R=()=>{let $=Math.random()<.5?u-60-Math.random()*260:d+60+Math.random()*260,Re=A.attributes.position,ae=$,ze=r-700,et=22;for(let De=0;De<et;De++)Re.setXYZ(De,ae,l(ze),-50),ae+=(Math.random()-.5)*46,ze+=38+Math.random()*20;A.setDrawRange(0,et),Re.needsUpdate=!0,b=1,window.dispatchEvent(new CustomEvent("tower-thunder",{detail:{near:Math.random()}}))},v=260,E=new Float32Array(v*6),N=[];for(let $=0;$<v;$++){let Re=u-900+Math.random()*(p+1800);N.push([Re,Math.random()*1200,300+Math.random()*200])}let D=new ur(new Bt().setAttribute("position",new Jt(E,3)),new Xi({color:9085112,transparent:!0,opacity:.35}));D.frustumCulled=!1,t.add(D);let k=e.comps.find($=>$.k==="hall"),V=e.liftX,L=r-4,O=Fi(32,128,$=>{Xe($,0,0,32,128,"#8a9096"),X($,3,10,26,1,"#6a7076"),X($,3,116,26,1,"#6a7076"),X($,4,0,2,128,"rgba(255,255,255,.12)")}),W=a(O),q=o(32,128,W,V-16,l(L-64),-9),se=o(32,128,W,V+16,l(L-64),-9),Y=Fi(76,128,$=>{$.save(),$.translate(38,64),[[-.5,-18],[.42,22]].forEach(([Re,ae])=>{$.save(),$.translate(0,ae),$.rotate(Re),$.fillStyle="#d9ad1f",$.fillRect(-46,-6,92,12),$.fillStyle="#15171c";for(let ze=-46;ze<46;ze+=10)$.beginPath(),$.moveTo(ze,-6),$.lineTo(ze+5,-6),$.lineTo(ze+1,6),$.lineTo(ze-4,6),$.fill();$.fillStyle="rgba(0,0,0,.25)",$.fillRect(-46,4,92,2),$.restore()}),$.restore(),$.fillStyle="#efe8d8",$.fillRect(20,52,36,18),$.fillStyle="#a8281e",$.font="700 7px sans-serif",$.textAlign="center",$.fillText("\u041D\u0415",38,60),$.fillText("\u0420\u0410\u0411\u041E\u0422\u0410\u0415\u0422",38,68)}),ee=o(76,128,a(Y,{transparent:!0,opacity:0}),V,l(L-64),-8.8),ne=new Qt({color:16724e3}),Be=o(5,5,ne,V,l(L-143),-8.5),Pe=Fi(40,14,$=>{}),xt=a(Pe);o(36,12,xt,V,l(L-143),-8.6);let at=($,Re)=>{let ae=Pe.image.getContext("2d");ae.setTransform(Ui,0,0,Ui,0,0),X(ae,0,0,40,14,"#060708"),ae.fillStyle=Re?"#7dff9a":"#ff5a3a",ae.font="700 10px monospace",ae.textAlign="center",ae.fillText($,20,11),Pe.needsUpdate=!0},lt="",J=Fi(64,64,$=>{let Re=$.createRadialGradient(32,32,0,32,32,32);Re.addColorStop(0,"rgba(255,236,200,.55)"),Re.addColorStop(1,"rgba(255,236,200,0)"),$.fillStyle=Re,$.fillRect(0,0,64,64)}),te=o(200,200,new Qt({map:J,transparent:!0,blending:$n,depthWrite:!1,opacity:0}),0,0,-7);te.renderOrder=6;let Se=60,$e=new Float32Array(Se*3),Me=[];for(let $=0;$<Se;$++)Me.push([Math.random(),Math.random(),Math.random()*6.28,.3+Math.random()*.7]);let Je=new $i(new Bt().setAttribute("position",new Jt($e,3)),new Ti({color:16771264,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.45,depthWrite:!1,blending:$n}));Je.frustumCulled=!1,Je.renderOrder=7,t.add(Je);let Tt=0,Qe=0;return{root:t,update($,Re){Qe+=$,c.forEach((be,Ge)=>{let C=be.cp.k==="room"?Re.rooms[be.cp.i]||{}:null,vt=Re.heroComp===Ge,ut=!C||C.done||n.base||vt&&Re.revealing===be.cp.i;be.open+=((ut?1:0)-be.open)*Math.min(1,$*3),be.dark&&(be.dark.material.opacity=.96*(1-be.open),be.dark.visible=be.dark.material.opacity>.01);let S=vt?1:.72;be.glow+=(S-be.glow)*Math.min(1,$*3);let _=1;if(be.flick){let U=Math.sin(Qe*2.3+Ge)*Math.sin(Qe*7.1+Ge*3);_=U>.82?.35:U>.76?.7:1}be.mat.color.setScalar(be.glow*_)});let ae=c[Re.heroComp];if(ae&&(te.position.set((ae.cp.x0+ae.cp.x1)/2,l(r-s+40),-7),te.material.opacity=.5*ae.open),ae){let be=(ae.cp.x0+ae.cp.x1)/2,Ge=Je.geometry.attributes.position;for(let C=0;C<Se;C++){let vt=Me[C];vt[1]=(vt[1]+$*.02*vt[3])%1,vt[2]+=$*vt[3];let ut=r-s+20+vt[1]*(s-30),S=10+vt[1]*70;Ge.setXYZ(C,be+(vt[0]-.5)*2*S+Math.sin(vt[2])*3,l(ut),-6.5)}Ge.needsUpdate=!0,Je.material.opacity=.4*ae.open*ae.mat.color.r}let ze=!!Re.liftOk;Tt+=((Re.liftOpen?1:0)-Tt)*Math.min(1,$*6),ee.material.opacity+=((!ze&&Tt<.05?1:0)-ee.material.opacity)*Math.min(1,$*4),ee.visible=ee.material.opacity>.01,q.position.x=V-16-Tt*28,se.position.x=V+16+Tt*28,ne.color.set(ze?6094714:Math.sin(Qe*7)>.2?16724e3:4198416);let et=(ze?String(n.floor):"--")+ze;if(et!==lt&&(lt=et,at(ze?String(n.floor):"--",ze)),T-=$,T<=0&&(R(),T=7+Math.random()*14),b>0){b=Math.max(0,b-$*2.6);let be=b>.7?1:b>.5?.25:b>.35?.8:b*.6;w.material.color.setScalar(1+be*3.2),M.material.opacity=b>.45?1:0,m.forEach(Ge=>Ge.color.setRGB(.13+be*.22,.13+be*.24,.15+be*.3))}else M.material.opacity&&(M.material.opacity=0,w.material.color.setScalar(1),m.forEach(be=>be.color.setRGB(.13,.13,.15)));let De=D.geometry.attributes.position;for(let be=0;be<v;be++){let Ge=N[be];Ge[1]+=Ge[2]*$,Ge[1]>1200&&(Ge[1]=0);let C=r-700+Ge[1];De.setXYZ(be*2,Ge[0],l(C),-40),De.setXYZ(be*2+1,Ge[0]-3,l(C+16),-40)}De.needsUpdate=!0},stamp($,Re,ae,ze){let et=c.find(C=>$>=C.cp.x0&&$<=C.cp.x1);if(!et)return;let De=et.tex.image.getContext("2d"),be=$-et.cp.x0,Ge=Re-(r-s);if(De.setTransform(Ui,0,0,Ui,0,0),ze==="pool")De.fillStyle="rgba(70,4,3,.85)",De.beginPath(),De.ellipse(be,s-3,ae*1.8,ae*.28,0,0,7),De.fill(),De.fillStyle="rgba(120,20,16,.4)",De.beginPath(),De.ellipse(be-ae*.4,s-3.4,ae*.6,ae*.08,0,0,7),De.fill();else if(ze==="floor")De.fillStyle="rgba(80,6,4,.8)",De.beginPath(),De.ellipse(be,Math.min(s-2,Ge),ae,ae*.3,0,0,7),De.fill();else{De.fillStyle="rgba(96,8,6,.82)",De.beginPath(),De.arc(be,Ge,ae,0,7),De.fill();for(let C=0;C<4;C++)De.beginPath(),De.arc(be+(Math.random()-.5)*ae*4,Ge+(Math.random()-.5)*ae*3,ae*(.2+Math.random()*.35),0,7),De.fill();if(Math.random()<.6){let C=ae*(2+Math.random()*6);De.fillRect(be-.4,Ge,.9,C),De.beginPath(),De.arc(be,Ge+C,.7,0,7),De.fill()}}De.setTransform(1,0,0,1,0,0),et.tex.needsUpdate=!0},dispose(){t.traverse($=>{$.geometry&&$.geometry.dispose(),$.material&&($.material.map&&$.material.map!==Ac&&$.material.map!==Cc&&$.material.map.dispose(),$.material.dispose())})}}}var Os={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},W0=new Xn(-1,1,1,-1,0,1),Rc=class extends Bt{constructor(){super(),this.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new en([0,2,0,0,2,0],2))}},X0=new Rc,Oi=class{constructor(e){this._mesh=new zt(X0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,W0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Bs=class extends xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Oi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zr=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yo=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new We);this._width=i.width,this._height=i.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bs(Os),this.copyPass.material.blending=Tn,this.timer=new gr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zr!==void 0&&(a instanceof zr?i=!0:a instanceof Yo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new We);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jo=class extends xn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ke}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Fu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zs=class n extends xn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new We(e.x,e.y):new We(256,256),this.clearColor=new Ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new It(r,a,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new It(r,a,{type:Wt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new It(r,a,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Fu;this.highPassUniforms=li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new We(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=li.clone(Os.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:Os.vertexShader,fragmentShader:Os.fragmentShader,premultipliedAlpha:!0,blending:$n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ke,this._oldClearAlpha=1,this._basic=new Qt,this._fsQuad=new Oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new We(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Dt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new We(.5,.5)},direction:{value:new We(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};zs.BlurDirectionX=new We(1,0);zs.BlurDirectionY=new We(0,1);var kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ko=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=li.clone(kr.uniforms),this.material=new Es({name:kr.name,uniforms:this.uniforms,vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader}),this._fsQuad=new Oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===br&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $0={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new We(1,1)},vign:{value:.5},grain:{value:.04},sat:{value:.92},hurt:{value:0},lift:{value:new F(.012,.016,.022)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float time, vign, grain, sat, hurt; uniform vec2 res; uniform vec3 lift; varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 d = vUv - .5;
      float r2 = dot(d, d), ca = .006 * r2;
      vec3 c = vec3(texture2D(tDiffuse, vUv + d * ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - d * ca).b);
      float l = dot(c, vec3(.2126, .7152, .0722));
      c = mix(vec3(l), c, sat);                                        // \u043F\u0440\u0438\u0433\u043B\u0443\u0448\u0451\u043D\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430
      c = mix(c * vec3(.9, .97, 1.06), c * vec3(1.05, 1.0, .9), smoothstep(.15, .75, l)); // \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0435 \u0442\u0435\u043D\u0438, \u0442\u0451\u043F\u043B\u044B\u0439 \u0441\u0432\u0435\u0442
      c = lift + c * (1.0 - lift);                                     // \u0447\u0443\u0442\u044C \u043F\u0440\u0438\u043F\u043E\u0434\u043D\u044F\u0442\u044B\u0435 \u0447\u0451\u0440\u043D\u044B\u0435, \u043A\u0430\u043A \u043D\u0430 \u043F\u043B\u0451\u043D\u043A\u0435
      c = pow(c, vec3(1.06));                                          // \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442
      float v = smoothstep(.95, .28, length(d * vec2(1.0, 1.25)));
      c *= mix(1.0 - vign, 1.0, v);
      c = mix(c, vec3(.55, .02, .02), hurt * (1.0 - v) * .85);        // \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u043A\u0440\u0430\u044F \u043F\u0440\u0438 \u0440\u0430\u043D\u0435\u043D\u0438\u0438
      c += (h(floor(vUv * res) + fract(time) * 97.0) - .5) * grain * (.35 + l);
      gl_FragColor = vec4(c, 1.0);
    }`};function Pc(n,e,t){let i=new It(4,4,{type:Wt,samples:4}),s=new Zo(n,i);s.addPass(new Jo(e,t));let r=new zs(new We(256,256),.42,.45,1.05);s.addPass(r),s.addPass(new Ko);let a=new Bs($0);return s.addPass(a),{composer:s,bloom:r,grade:a,setSize(o,l,c){s.setPixelRatio(c),s.setSize(o,l),a.uniforms.res.value.set(o*c,l*c)},render(o,l){a.uniforms.time.value=o,a.uniforms.hurt.value=l,s.render()}}}var ks={hipY:68,shoulder:[.5,-41],neck:[1,-47],knee:30,ankle:31,elbow:26,wrist:23,headScale:.82};function q0(n,e,t){let i=a=>a*n,s=e*9,r=t*3;return Ce(`M ${i(-3.5)} -48 C ${i(-6)} -47.5 ${i(-9)-r*.3} -46 ${i(-10)-r*.5} -41 C ${i(-11.5)-r*.6} -34 ${i(-9.5)} -26 ${i(-8)-s*.2} -20 C ${i(-7.2)-s*.3} -15 ${i(-9)-s*.3} -8 ${i(-9.8)-s*.2} -2 C ${i(-10.5)} 3 ${i(-7)} 6.5 ${i(-2)} 7 L ${i(4)} 6.5 C ${i(8)} 5 ${i(10.5)+s*.4} 0 ${i(10)+s*.8} -6 C ${i(9.6)+s} -12 ${i(9.4)+s} -17 ${i(10)+s*.7} -23 C ${i(11.5)+r} -28 ${i(12.2)+r} -35 ${i(10.5)+r*.5} -40 C ${i(9)} -44.5 ${i(6)} -47 ${i(3.5)} -47.5 Z`)}function Y0(n,e,t){let i=t.w,s=t.fat,r=t.mus,a=q0(i,s,r),o=p=>p*i,l=o(10.4)+s*8,c=e.skin,h=e.shirt,f=e.pants,u=new Set(e.x||[]);if(u.has("pack")||u.has("backpack")){let p=Ce(`M ${o(-8)} -44 C ${o(-14)} -45 ${o(-21)} -43 ${o(-21.5)} -36 L ${o(-22)} -16 C ${o(-22)} -12 ${o(-18)} -10 ${o(-13)} -10.5 L ${o(-8)} -12 Z`);me(n,p,e.packCol||"#3b3f30",{s:3}),Ct(n,p,.3),le(n,[o(-21.6),-28,o(-14),-27.5,o(-9),-29],.8,_t,.8);let y=Ce(`M ${o(-21.5)} -24 L ${o(-25)} -23.5 C ${o(-26.5)} -20 ${o(-26)} -15 ${o(-24.5)} -13.5 L ${o(-21.5)} -13 Z`);me(n,y,qe(e.packCol||"#3b3f30",.85),{s:1.5}),ce(n,y,1.1),ce(n,p,1.4);let g=Ye(o(-15),-47.5,8.5,4.2);me(n,g,"#5a4e3c",{s:2}),le(n,[o(-15)-8,-47.5,o(-15)+8,-47.5],.6,_t,.5),le(n,[o(-19),-51.5,o(-19),-43.5],1.4,"#1c1c18"),le(n,[o(-11),-51.5,o(-11),-43.5],1.4,"#1c1c18"),ce(n,g,1.2)}me(n,a,h||c,{s:3.2,h:1.2}),h||(le(n,[o(4),-40,o(7),-33,o(10),-30],.7,qe(c,.5,1),.7),le(n,[o(2),-22,o(5),-18,o(9),-18],.6,qe(c,.55,1),.6));let d=-2.4;if(Li(n,a,pt(-40,d,80,30),f,{s:2.6}),Li(n,a,pt(-40,d-1.2,80,2.4),e.belt||"#2a2118",{s:.6,hatch:!1}),Ne(n,pt(l-3.4,d-1.4,2.6,2.8),"#9a8a5a"),ce(n,pt(l-3.4,d-1.4,2.6,2.8),.5),le(n,[o(2),2,o(5),5.5],.6,_t,.5),e.jacket){let p=Ce(`M ${o(-3.8)} -49 C ${o(-7)} -48.5 ${o(-10.2)} -46.5 ${o(-11)} -41 C ${o(-12.4)} -34 ${o(-10.4)} -26 ${o(-9)} -20 C ${o(-8.4)} -15 ${o(-10)} -8 ${o(-10.6)} -2 L ${o(-11)} 4.5 L ${l+1.6} 4.5 C ${l+1.4} 0 ${l+.8} -6 ${l+.7} -12 C ${l+.8} -18 ${o(11.2)} -24 ${o(12.8)} -31 C ${o(13)} -37 ${o(11.4)} -42 ${o(9)} -45 C ${o(7)} -47.5 ${o(4)} -49 ${o(1)} -49.2 Z`);me(n,p,e.jacket,{s:3.4,h:1.2}),Ct(n,p,.3),le(n,[l+.8,-40,l+.3,-20,l+1,4],.9,qe(e.jacket,.35),.9),le(n,[o(-1),-18,o(6),-17.6],.8,_t,.7),le(n,[o(-1),-18,o(-1.4),-9],.7,_t,.5),le(n,[o(-11),3,l+1.4,3],.8,qe(e.jacket,.45),.9),le(n,[o(-4),-36,o(-1),-28,o(-3),-20],.7,qe(e.jacket,.4,1),.7),le(n,[o(6),-30,o(8),-24],.6,qe(e.jacket,.4,1),.6);let y=Ce(`M ${o(-4.5)} -48.6 C ${o(-3)} -52.5 ${o(4)} -53 ${o(6.5)} -49.5 L ${o(4)} -47.4 C ${o(2)} -49.4 ${o(-1.5)} -49.2 ${o(-3)} -46.5 Z`);if(me(n,y,qe(e.jacket,.9),{s:1.2,hatch:!1}),ce(n,y,1.1),e.hoodDown){let g=Ce(`M ${o(-3)} -49 C ${o(-8)} -53 ${o(-15)} -51 ${o(-14)} -45 C ${o(-13)} -41 ${o(-9)} -40.5 ${o(-7.5)} -42.5 C ${o(-7)} -45 ${o(-5)} -47.5 ${o(-3)} -49 Z`);me(n,g,qe(e.jacket,.92),{s:2.4}),le(n,[o(-12),-47,o(-9.5),-44.5],.6,_t,.6),ce(n,g,1.2)}ce(n,p,1.5)}else h&&(le(n,[o(-3),-36,o(0),-28,o(-2),-18],.7,qe(h,.4,1),.7),le(n,[o(7),-34,o(5),-26],.6,qe(h,.45,1),.6),le(n,[o(2.5),-47.6,o(5),-44.5,o(7.4),-46],.8,_t,.8));if(e.suit){let p=Ce(`M ${o(6)} -47 L ${l+.6} -45 L ${l+.4} -30 L ${o(7)} -32 Z`);me(n,p,"#d8d4c8",{s:1,hatch:!1}),le(n,[o(6),-47,o(5.5),-38,o(8.5),-27,l+.4,-16],1,_t,.9)}if(e.tie||u.has("tie")){let p=Ce(`M ${l-1} -45 L ${l+1.6} -44 L ${l+2.6} -26 L ${l+.4} -23.5 L ${l-.4} -27 Z`);me(n,p,e.tie||"#7a1f26",{s:.9,hatch:!1}),ce(n,p,.9)}if(u.has("bowtie")){let p=Ce(`M ${l-.5} -45.5 L ${l+3} -47.5 L ${l+3} -43 Z`);Ne(n,p,"#141414"),ce(n,p,.8)}if(e.overalls&&(Li(n,a,pt(-40,-30,80,40),f,{s:2.4}),le(n,[o(-6),-46,o(-5),-30],2,qe(f,.8)),le(n,[o(4),-47,o(7),-30],2,qe(f,.8)),Ne(n,Ye(o(6.5),-30,1,1),"#c9b56a")),u.has("apron")){let p=Ce(`M ${l-2} -38 L ${l+1.6} -38 C ${l+2.6} -20 ${l+3.2} 0 ${l+4} 14 L ${l-4} 14 C ${l-2.4} 0 ${l-2.2} -20 ${l-2} -38 Z`);me(n,p,"#d9d4c8",{s:1.8}),Ct(n,p,.35),qt(n,p,l,-12,3.6,3,!0),qt(n,p,l+1,4,2.6,2),ce(n,p,1.2),le(n,[o(-9),-14,l-2,-14],.8,"#bdb6a6")}if(e.ribs){let p=Ce(`M ${o(3)} -36 C ${o(8)} -38 ${l+.5} -32 ${l} -22 C ${o(7)} -18 ${o(3)} -22 ${o(2)} -28 Z`);Ne(n,p,"#2a0a08");for(let y=0;y<4;y++)le(n,[o(3.5),-34+y*3.6,o(7),-35+y*3.6,l-.2,-32+y*3.6],1.1,"#d8cfb8");ce(n,p,.9)}if(ci(e.seed||7),h&&e.torn>.2){let p=Math.round(e.torn*3);for(let y=0;y<p;y++){let g=o(-6+re()*14),m=-38+re()*30,w=2+re()*2.6,A=new Path2D;for(let M=0;M<Us*2;M+=.5){let b=w*(.55+re()*.7);A.lineTo(g+Math.cos(M)*b*1.2,m+Math.sin(M)*b)}A.closePath(),n.save(),n.clip(a),me(n,A,c,{s:.8,hatch:!1}),e.zombie&&Ne(n,Ye(g,m+.4,w*.5,w*.35),"#4a0c0a",.9),ce(n,A,.7),n.restore()}}if(e.blood){let p=1+Math.round(e.blood*3);for(let y=0;y<p;y++)qt(n,a,o(-2+re()*12),-44+re()*30,2+re()*3*e.blood,2+(re()*3|0),re()<.4)}if(u.has("vest")||u.has("spikes")){let p=e.vest||"#2b3138",y=Ce(`M ${o(-11.5)} -44 C ${o(-13)} -36 ${o(-12)} -24 ${o(-11)} -16 L ${l+2.4} -16 C ${l+3.2} -24 ${l+3.6} -34 ${o(11.4)} -43 C ${o(8)} -46.5 ${o(3)} -47 ${o(-1)} -46.4 C ${o(-5)} -46.5 ${o(-9)} -46 ${o(-11.5)} -44 Z`);if(me(n,y,p,{s:3}),Ct(n,y,.35),le(n,[o(-11),-30,l+3,-30],.7,qe(p,.5),.8),le(n,[o(-11),-22,l+2.8,-22],.7,qe(p,.5),.8),e.pouches)for(let g=0;g<2;g++){let m=Ce(`M ${l-1} ${-29+g*7} L ${l+5} ${-29+g*7} L ${l+5} ${-23.4+g*7} L ${l-1} ${-23.4+g*7} Z`);me(n,m,qe(p,1.1),{s:1.2,hatch:!1}),le(n,[l-1,-27.5+g*7,l+5,-27.5+g*7],.6,_t,.8),ce(n,m,1)}if(u.has("spikes"))for(let g=0;g<5;g++){let m=-42+g*6,w=Ce(`M ${o(-11.6)} ${m} L ${o(-17)} ${m+1.4} L ${o(-11.4)} ${m+2.8} Z`);me(n,w,"#b8bec6",{s:.6,hatch:!1}),ce(n,w,.7)}ce(n,y,1.4)}if(u.has("exo")){let p=pt(o(-12),-44,3.2,40);me(n,p,"#4f555c",{s:1,hatch:!1}),ce(n,p,1);for(let y=0;y<4;y++)Ne(n,Ye(o(-10.4),-40+y*10,.8,.8),"#9aa2aa")}if(u.has("nano")&&(le(n,[o(-2),-44,o(-1),-20],.9,"#2fb8e6",.9),le(n,[l-2,-42,l-1.5,-20],.9,"#2fb8e6",.9)),u.has("pustules"))for(let p=0;p<6;p++){let y=o(-8+re()*18)+s*6,g=-40+re()*34,m=Ye(y,g,1.2+re()*1.6,1.1+re()*1.4);n.save(),n.clip(a),me(n,m,"#8a8a3a",{s:.6,hatch:!1}),Ne(n,Ye(y+.4,g-.5,.4,.3),"#e8e2a0"),ce(n,m,.6),n.restore()}if(u.has("collarGold")){let p=Ce(`M ${o(-3)} -47.5 C ${o(1)} -45.5 ${o(5)} -45.6 ${o(8)} -47 L ${o(8)} -45 C ${o(4)} -43.5 ${o(0)} -43.4 ${o(-3)} -45.4 Z`);me(n,p,"#e6b422",{s:.5,hatch:!1}),ce(n,p,.8)}if((u.has("pack")||u.has("backpack"))&&(le(n,[o(-2),-48,o(6),-42,o(9.6),-30],2.6,"#1c1d18"),le(n,[o(-2),-48,o(6),-42,o(9.6),-30],.5,"#4a4a40",.8),Ne(n,pt(o(8.2),-36,3,2),"#6a6a60")),Ct(n,a,.26),ce(n,a,1.6),e.coat){let p=Ce(`M ${o(-11)} -44 C ${o(-12.5)} -30 ${o(-11)} -14 ${o(-11.5)} 8 L ${l+2} 8 C ${l+1.6} -10 ${l+1.2} -24 ${o(11.2)} -40 C ${o(8)} -46 ${o(2)} -48.5 ${o(-4)} -48 Z`);me(n,p,e.coatCol||"#dfe3e6",{s:3}),Ct(n,p,.4),qt(n,p,o(4),-20,3,3,!0),le(n,[o(5),-46,o(3),-36,l,-24],.9,_t,.8),ce(n,p,1.5)}}function Z0(n){let e=n;return Ce(`M -4 1 L -4.5 -7 C -9 -9 -11.5 -15 -10.5 -21 C -9.5 -28 -4 -31.5 1.5 -31 C 6 -30.5 9 -27.5 9.6 -23 C 9.8 -21 9.7 -19.8 10.3 -19 L 9.6 -17.6 C 10.3 -16.2 11.8 -13.6 12.6 -12.3 C 12.4 -11.6 11.2 -11.2 10.4 -11.4 C 10.3 -10.6 10.6 -10 10.5 -9.4 L ${10.2-e*.3} ${-8.6+e} C ${10.2-e*.2} ${-7+e} ${9.2} ${-5.2+e} ${7.4} ${-4.6+e*.8} C 5.5 ${-4.2+e*.5} 4.6 -3.6 4 -2 L 3.8 1 Z`)}function J0(n,e){let t=e.zombie,i=t?2.4:0,s=Z0(i),r=new Set(e.x||[]),a=e.skin;me(n,s,a,{s:2.6,h:.9,dk:t?.45:.55}),le(n,[-1,-10.5,3,-7.5+i*.5,7,-6+i*.7],.7,qe(a,.45,1),.55),Ne(n,Ce("M -4 1 L -4.5 -7 C -2 -6 1 -4.6 4 -2 L 3.8 1 Z"),qe(a,.5,1),.45),e.stubble&&(n.save(),n.clip(s),Ne(n,Ce("M -1 -11 C 3 -8.5 7 -9 10.4 -10.4 L 10.4 -8 C 10 -5.5 8.6 -4.6 7 -4.4 C 5 -4 4 -3.4 3.8 -2 L 0 -6 Z"),qe(e.hair||"#2a2018",1),.4),Ct(n,s,.2),n.restore());let o=Ye(-1.6,-15.6,2.2,3.4,.15);if(me(n,o,qe(a,.95),{s:.9,hatch:!1}),le(n,[-1,-17.5,-2.6,-16,-1.2,-13.6],.5,_t,.7),ce(n,o,.9),t?(Ne(n,Ye(6.6,-17.2,3.2,2.4),"#1e1210",.9),e.eyeGlow?(Ne(n,Ye(7,-17.2,1.8,1.2),e.eye||"#d8ff5a"),Ne(n,Ye(7.2,-17.4,.7,.5),"#ffffff")):(Ne(n,Ye(7.2,-17.1,1.7,1.1),"#b8b49c"),Ne(n,Ye(7.9,-17.1,.55,.55),"#8a866e",.7)),le(n,[4,-19.8,7,-20.6,9.6,-19.4],.9,_t),le(n,[2.4,-16,4.2,-14,3.6,-11.6],.5,"#3a2a3a",.6),le(n,[-6,-22,-3.6,-19,-4.6,-16],.5,"#3a2a3a",.5)):(Ne(n,Ye(7.1,-17.1,1.75,1.05),"#e8e2d6"),Ne(n,Ye(7.9,-17.05,.75,.85),"#3b2a1e"),Ne(n,Ye(8.05,-17.05,.32,.4),"#050505"),le(n,[5.4,-17.9,7.3,-18.6,8.9,-17.6],.7,_t),le(n,[6,-16.2,8.4,-16.1],.4,_t,.5),le(n,[4.6,-19.8,7.2,-21,9.8,-19.8],1.1,qe(e.hair||"#2a2018",.8))),le(n,[10.6,-13.2,11.2,-12,10.4,-11.6],.5,_t,.6),t){let h=Ce(`M 10.4 -9.6 L 6.6 -9 C 6.4 -7.6 7 -6.2 8.8 ${-6.4+i} L ${10.1} ${-7.4+i} Z`);Ne(n,h,"#170404");for(let f=0;f<3;f++)Ne(n,pt(7.6+f*.9,-9.2,.7,1.2),"#b5a77c"),Ne(n,pt(7.9+f*.9,-6.6+i*.6,.65,1),"#a89c74");qt(n,s,9.6,-5+i,1.6,3,!0)}else le(n,[10.3,-9.2,8.6,-9.1],.6,_t,.8);let l=e.hair,c=["cap","hood","helmet","hardhat","chefhat"].some(h=>r.has(h));if(l&&!e.bald&&!c){let h=Ce("M 8.2 -26.8 C 6.4 -31.8 -2.4 -33.4 -7.4 -29.6 C -11.6 -26 -12 -18 -8.8 -11.6 C -7.8 -9.8 -6.2 -9.2 -5 -10 C -6.2 -14 -5.6 -18.8 -3.2 -21 C -.2 -23.6 4.2 -24.4 8.2 -26.8 Z");me(n,h,l,{s:1.6,h:.8,dk:.5,lt:1.6,hatch:!1}),ci((e.seed||7)+9);for(let f=0;f<9;f++){let u=-2.6+f*.3,d=Math.cos(u)*9.5,p=-19+Math.sin(u)*11;le(n,[d,p,d+Math.cos(u)*1.8+1,p+Math.sin(u)*2.2-.6],.7,qe(l,.55),.8)}for(let f=0;f<6;f++)le(n,[-6+f*2.4,-30+Math.abs(f-2)*.8,-4+f*2.2,-26],.5,qe(l,1.6),.5);if(e.zombie)for(let f=0;f<3;f++)Ne(n,Ye(-6+re()*10,-27+re()*6,1.4+re(),1+re()),a);ce(n,h,1.1)}if(Ct(n,s,.24),ce(n,s,1.5),r.has("cap")){let h=Ce("M -10.6 -22 C -10.4 -30 -3 -33.6 3 -32 C 7.6 -31 9.6 -27.6 9.6 -24.4 L 16 -23.6 C 16.4 -22.6 15.6 -22 14.4 -21.8 L 9.4 -22.2 C 3 -22.4 -4 -22.6 -10.6 -22 Z");me(n,h,e.hat||"#2c364b",{s:2}),le(n,[9.4,-24.2,9.4,-22.2],.7,_t),ce(n,h,1.3)}if(r.has("hardhat")){let h=Ce("M -11.6 -21.6 C -11 -31 -3 -34 2 -33.4 C 8 -33 11 -28.6 11.4 -22.4 L 14 -21.8 L 14 -20.4 L -13 -20.4 L -13 -21.6 Z");me(n,h,e.hat||"#e6b422",{s:2}),ce(n,h,1.3)}if(r.has("helmet")){let h=Ce("M -11.8 -14 C -12.6 -26 -6 -33.4 1.6 -33.2 C 8.6 -33 12 -27 12 -20.6 L 12.6 -19.6 L 4 -19.6 C 2 -16 -2 -13 -6 -12.2 Z");me(n,h,"#1d222b",{s:2.4,lt:1.8});let f=Ce("M 4 -19.6 L 12.6 -19.6 L 12.2 -14.2 L 6.4 -14.6 Z");Ne(n,f,"#0d1622",.85),le(n,[6,-18.8,11.6,-18.6],.6,"#6a8aa8",.7),ce(n,f,.9),ce(n,h,1.4)}if(r.has("chefhat")){let h=Ce("M -8 -26 C -12 -32 -9 -40 -3 -40 C -1 -44 6 -44 8 -39 C 13 -38 13 -31 9 -27 Z");me(n,h,"#e8e6df",{s:2.4}),ce(n,h,1.3)}if(r.has("hood")){let h=e.hoodCol||e.shirt||"#2d2a33",f=Ce("M 5 -27.4 C 1 -36.6 -12 -36 -14.4 -25 C -16 -16 -12 -6 -7 -1 L -4.6 1.6 L -2 -6 C -6 -10 -7.4 -16 -6.4 -21 C -4.6 -26.6 1 -28.6 5 -27.4 Z");me(n,f,h,{s:3}),Ct(n,f,.3),le(n,[-12,-24,-9,-14,-6,-6],.7,qe(h,.4,1),.7),ce(n,f,1.4),Ne(n,Ce("M 5 -27.4 C 1 -28.6 -4.6 -26.6 -6.4 -21 C -5 -24 0 -26.6 5 -27.4 Z"),"#050405",.8)}if(r.has("gasmask")){let h=Ce("M 4.6 -19.2 C 9 -21 13 -18 13.4 -13.6 C 13.6 -9.6 11.6 -6.6 8 -5.6 C 5 -6 3.4 -9 3.6 -13 Z");me(n,h,"#2a2e33",{s:1.6});let f=Ce("M 9.6 -10.8 L 15.4 -9.6 L 15 -5.2 L 9.6 -5.8 Z");me(n,f,"#5a6068",{s:1,hatch:!1}),ce(n,f,.9),Ne(n,Ye(7.6,-17,1.9,1.6),"#9fffd8"),Ne(n,Ye(7.9,-17.3,.6,.5),"#ffffff"),ce(n,Ye(7.6,-17,1.9,1.6),.8),le(n,[4,-14,-6,-18],1.2,"#1a1a1c"),ce(n,h,1.2)}if(r.has("glasses")&&(ce(n,Ye(7.6,-17.1,2.4,1.8),.8,"#111"),le(n,[5.2,-17.4,-1,-17],.6,"#111"),Ne(n,Ye(7.6,-17.1,2.2,1.6),"rgba(200,220,255,.2)")),e.mask==="surgical"){let h=Ce("M 5 -14.6 C 8 -15 12.6 -14.6 12.8 -11.4 C 13 -8 11 -5.4 7.6 -5 C 5 -5.4 4 -8 4.2 -11 Z");me(n,h,"#8fbcd0",{s:1,hatch:!1}),qt(n,h,10,-8,1.6,2,!0),le(n,[4.6,-13,-2,-15],.5,"#cfe6ee"),ce(n,h,1)}}function K0(n,e,t){le(n,[-t-.6,e,0,e+.8,t+.6,e-.2],1,_t,.9)}function Q0(n,e,t){let i=En(t.L,t.a,t.b,t.fb,t.bb),s=e.jacket||e.shirt;me(n,i,e.skin,{s:t.a*.55});let r=e.sleeves==="none"||!s?-99:e.sleeves==="short"?12:99;if(r>0&&(Li(n,i,pt(-20,-20,40,20+Math.min(r,t.L+10)),s,{s:t.a*.6}),r<90?K0(n,r,t.a):le(n,[-t.a*.3,6,t.a*.2,14,-t.a*.2,t.L-3],.6,qe(s,.4,1),.6)),new Set(e.x||[]).has("pads")){let o=Ce(`M ${-t.a-1.4} 1 C ${-t.a-1.6} -6 ${t.a+1.6} -6 ${t.a+1.4} 1 C ${t.a+1} 6 ${-t.a-1} 6 ${-t.a-1.4} 1 Z`);me(n,o,e.padCol||"#55595c",{s:1.4,lt:1.6}),Ne(n,Ye(0,-1,.6,.6),"#9aa0a6"),ce(n,o,1.1)}e.torn>.4&&e.zombie&&qt(n,i,1,t.L*.6,2.4,2),Ct(n,i,.22),ce(n,i,1.4)}function j0(n,e,t){let i=En(t.L,t.a,t.b,t.fb,t.bb,.25,.7),s=e.jacket||e.shirt;if(me(n,i,e.skin,{s:t.a*.55}),e.sleeves!=="none"&&e.sleeves!=="short"&&s){Li(n,i,pt(-20,-20,40,t.L+16),s,{s:t.a*.6});let a=pt(-t.a-1,t.L-3.2,t.a*2+2,3);Li(n,i,a,qe(s,.8),{s:1,hatch:!1}),le(n,[-t.b-.5,t.L-3.2,t.b+.5,t.L-3.4],.8,_t,.8)}else le(n,[t.a*.4,4,t.b*.3,t.L*.6],.5,qe(e.skin,.5,1),.5),e.zombie&&le(n,[-t.a*.2,6,t.b*.2,t.L*.7,-t.b*.3,t.L-2],.5,"#3a2a3a",.6);let r=new Set(e.x||[]);if(r.has("exo")){let a=pt(t.a-.2,2,1.8,t.L-4);me(n,a,"#4f555c",{s:.5,hatch:!1}),ce(n,a,.7),Ne(n,Ye(t.a+.7,0,2,2),"#2a2d31"),ce(n,Ye(t.a+.7,0,2,2),.7)}if(r.has("nano")){let a=Ce(`M ${t.a-1} 3 L ${t.a+1.6} 4 L ${t.b+1.4} ${t.L-4} L ${t.b-1} ${t.L-3} Z`);me(n,a,"#1c2027",{s:.8,lt:2}),le(n,[t.a,5,t.b,t.L-5],.5,"#2fb8e6"),ce(n,a,.8)}e.zombie&&e.blood>.4&&qt(n,i,0,t.L*.4,1.8,2,!0),Ct(n,i,.22),ce(n,i,1.3)}function e_(n,e,t,i){let s=e.skin;if(t==="fist"){let o=Ce(`M ${-3.2*i} -1 C ${-4*i} 3 ${-3.6*i} 7.4 ${-1.6*i} 8.6 C ${1*i} 9.6 ${3.6*i} 8.6 ${4.4*i} 6 C ${5*i} 3.4 ${4.4*i} .4 ${3.2*i} -1 Z`);me(n,o,s,{s:1.4,hatch:!1}),le(n,[-2.6*i,5.6*i,2.2*i,6*i],.5,_t,.7),le(n,[-2.4*i,3.4*i,2.6*i,3.6*i],.4,_t,.5);let l=Ye(3.4*i,3.4*i,1.5*i,2.4*i,-.4);me(n,l,s,{s:.6,hatch:!1}),ce(n,l,.7),ce(n,o,1.1);return}let r=Ce(`M ${-2.8*i} -1 C ${-3.6*i} 2 ${-3.4*i} 5 ${-2.4*i} 6 L ${2.6*i} 6.4 C ${3.6*i} 4 ${3.6*i} 1.4 ${2.8*i} -1 Z`);me(n,r,s,{s:1.2,hatch:!1});for(let o=0;o<4;o++){let l=(-2+o*1.4)*i,c=En(5*i-Math.abs(o-1.5)*.6,.75*i,.6*i,0,0);n.save(),n.translate(l,5.4*i),n.rotate(t==="claw"?-.5+o*.05:-.15),me(n,c,s,{s:.4,hatch:!1}),ce(n,c,.6),e.zombie&&Ne(n,Ye(0,5*i-.4,.5,.7),"#2b2420"),n.restore()}let a=En(3.6*i,.8*i,.6*i);n.save(),n.translate(2.6*i,1.6*i),n.rotate(-.8),me(n,a,s,{s:.4,hatch:!1}),ce(n,a,.6),n.restore(),ce(n,r,1)}function t_(n,e,t){let i=En(t.L,t.a,t.b,t.fb,t.bb);if(e.legless){me(n,i,e.pants,{s:t.a*.5});let r=Ce(`M ${-t.b-1} ${t.L-3} L ${t.b+1} ${t.L-3.6} L ${t.b+.6} ${t.L+2} C 0 ${t.L+5} ${-t.b} ${t.L+4} ${-t.b-1} ${t.L-3} Z`);Ne(n,r,"#5a0d0a"),Ne(n,Ye(0,t.L,t.b*.4,1.2),"#d8cfb8"),qt(n,i,0,t.L-4,3,3,!0),ce(n,i,1.4);return}me(n,i,e.pants,{s:t.a*.55}),le(n,[t.a*.2,t.L*.2,t.a*.5,t.L*.55,t.b*.1,t.L-2],.6,qe(e.pants,.4,1),.6);let s=new Set(e.x||[]);if(s.has("exo")){let r=pt(-t.a-.6,3,1.8,t.L-6);me(n,r,"#4f555c",{s:.5,hatch:!1}),ce(n,r,.7)}if(s.has("nano")){let r=Ce(`M ${t.a-2} 4 L ${t.a+1.6} 6 L ${t.b+1.4} ${t.L-6} L ${t.b-2} ${t.L-4} Z`);me(n,r,"#1c2027",{s:1,lt:2}),le(n,[t.a-.4,7,t.b,t.L-7],.5,"#2fb8e6"),ce(n,r,.9)}e.coat&&Li(n,i,pt(-20,-10,40,22),e.coatCol||"#dfe3e6",{s:2}),e.zombie&&e.blood>.5&&qt(n,i,1,t.L*.5,2.4,3),Ct(n,i,.24),ce(n,i,1.5)}function n_(n,e,t){let i=En(t.L,t.a,t.b,t.fb,t.bb,.28,.7);me(n,i,e.pants,{s:t.a*.55}),le(n,[-t.a*.6,2,-t.a*.2,5,t.a*.4,3],.6,qe(e.pants,.4,1),.7);let s=new Set(e.x||[]);if(s.has("pads")){let r=Ce(`M ${t.a-3} -3 L ${t.a+2} -2.6 C ${t.a+2.8} 1 ${t.a+2.6} 5 ${t.a+1.6} 7 L ${t.a-3} 6.6 Z`);me(n,r,e.padCol||"#55595c",{s:1,lt:1.7}),Ne(n,Ye(t.a,2,.5,.5),"#9aa0a6"),ce(n,r,1)}if(s.has("exo")){Ne(n,Ye(-t.a-.2,0,2.4,2.4),"#2a2d31"),ce(n,Ye(-t.a-.2,0,2.4,2.4),.7);let r=pt(-t.a-.8,2,1.6,t.L-6);me(n,r,"#4f555c",{s:.5,hatch:!1}),ce(n,r,.7)}if(s.has("nano")){let r=Ce(`M ${t.a-2} 2 L ${t.a+1.4} 3 L ${t.b+1.2} ${t.L-8} L ${t.b-2} ${t.L-7} Z`);me(n,r,"#1c2027",{s:1,lt:2}),le(n,[t.a-.2,5,t.b,t.L-10],.5,"#2fb8e6"),ce(n,r,.9)}if(e.zombie&&e.torn>.35){let r=t.a*.2,a=4,o=Ye(r,a,2.6,2);n.save(),n.clip(i),me(n,o,e.skin,{s:.6,hatch:!1}),qt(n,o,r,a,1.4,2,!0),ce(n,o,.6),n.restore()}Ct(n,i,.24),ce(n,i,1.4)}function i_(n,e){let t=e.suit||e.coat,i=t?Ce("M -4.2 -2.6 L 4 -2.6 L 4.6 1 C 8.6 1.4 13 2 14.8 4 C 15.4 5 15.2 6.2 14.6 7 L -5 7 C -5.6 5 -5.2 1 -4.2 -2.6 Z"):Ce("M -4.8 -7.4 L 4.4 -7.4 L 5 .4 C 8.6 .9 13.2 1.6 15.2 3.8 C 16 4.8 16 6 15.4 7 L -5.4 7 C -6 5 -5.8 2 -4.8 -7.4 Z"),s=e.shoes||"#1d1e22";if(me(n,i,s,{s:2,h:.7,lt:1.6}),Ne(n,pt(-5.6,5.4,21.4,1.8),qe(s,.45)),le(n,[-5.4,5.4,15.6,5.4],.6,_t),!t){for(let r=0;r<3;r++)le(n,[2.6,-5.6+r*2.2,5,-4.8+r*2.2],.5,"#8a8070",.8);le(n,[6,1.2,9,4],.5,_t,.5)}Ct(n,i,.3),ce(n,i,1.4)}function Ic(n,e,t="all"){if(t==="glow"){e===4&&(Ne(n,Ye(0,-48,4.2,4.2),"#ffe34d",.9),le(n,[0,-48,-5,-54,-2,-56,-7,-60],.9,"#fff6a0"),le(n,[0,-48,5,-53,3,-57],.9,"#fff6a0")),e===5&&Ne(n,pt(-1.8,-53.5,3.6,42),"#7ff0ff"),e===6&&Ne(n,Ce("M -2 -4 L 2 -4 L 1.2 -55 L 0 -61 L -1.2 -55 Z"),"#c9a6ff");return}if(e===1){let i=pt(-2.2,-52,4.4,58);me(n,i,"#7d8794",{s:1.4,lt:1.7,hatch:!1});let s=pt(-3.2,-52,6.4,6);return me(n,s,"#3a3e44",{s:1,hatch:!1}),ce(n,s,.9),qt(n,i,0,-42,2,1),Ct(n,i,.4),le(n,[-2.2,2,2.2,2],.6,_t),ce(n,i,1.2),[-6,-56,6,8]}if(e===2){let i=Ce("M -1.8 6 L 1.8 6 L 2.4 -14 C 3.4 -30 4.2 -44 3.6 -50 C 2.6 -54 -2.6 -54 -3.6 -50 C -4.2 -44 -3.4 -30 -2.4 -14 Z");me(n,i,"#9a6a3a",{s:1.6}),le(n,[-.6,-8,-1,-46],.5,"#c89a62",.6);let s=pt(-2.2,-4,4.4,10);me(n,s,"#2b241e",{s:.8,hatch:!1}),ce(n,s,.8);for(let r=0;r<7;r++){let a=-44+r*4.6,o=r%2?1:-1;le(n,[o*3,a,o*7.6,a-1.2],.8,"#c8ced6"),Ne(n,Ye(o*3.2,a,.7,.7),"#6a6e74")}return qt(n,i,0,-40,2.6,2,!0),Ct(n,i,.4),ce(n,i,1.2),[-9,-56,9,8]}if(e===3){let i=pt(-1.8,-2,3.6,11);me(n,i,"#2b241e",{s:.8,hatch:!1}),[1,5].forEach(a=>Ne(n,Ye(0,a,.6,.6),"#9aa0a6")),ce(n,i,.9);let s=pt(-3.6,-3.4,7.2,2);Ne(n,s,"#3a3e44"),ce(n,s,.7);let r=Ce("M -2.2 -3.4 L 2.6 -3.4 C 4 -20 5.6 -36 6.6 -44 C 6.8 -48 4 -50.4 1.6 -48.6 C -1 -40 -2 -24 -2.2 -3.4 Z");return me(n,r,"#c4ccd6",{s:1.2,lt:1.5,hatch:!1}),le(n,[-1.4,-4,-.6,-30,2,-47],.6,"#4a5058",.8),le(n,[2.4,-6,5.6,-40],.6,"#ffffff",.7),qt(n,r,3,-38,2,2,!0),Ct(n,r,.3),ce(n,r,1.1),[-6,-54,9,11]}if(e===4){let i=pt(-2.4,-46,4.8,54);me(n,i,"#1b1e24",{s:1.2,lt:2});let s=pt(-2.8,-2,5.6,9);me(n,s,"#c9a422",{s:.8,hatch:!1}),ce(n,s,.8);for(let r=0;r<3;r++)le(n,[-2.4,-40+r*3,2.4,-40+r*3],.6,"#8a8f94");return Ne(n,Ye(0,-48,3.4,3.4),"#ffe34d"),Ne(n,Ye(0,-48,1.6,1.6),"#ffffff"),le(n,[0,-48,-5,-54,-2,-56,-7,-60],.7,"#fff6a0"),le(n,[0,-48,5,-53,3,-57],.7,"#fff6a0"),ce(n,i,1.1),[-9,-62,9,9]}if(e===5){let i=Ce("M -3.2 -2 L 3.6 -2 L 4.4 -12 L -4 -12 Z");me(n,i,"#4b5668",{s:1.2,lt:1.6}),ce(n,i,1);let s=pt(-2,-2,4,10);return me(n,s,"#2b241e",{s:.8,hatch:!1}),ce(n,s,.8),Ne(n,pt(-2.6,-54,5.2,42),"rgba(89,225,255,.35)"),Ne(n,pt(-1.4,-53,2.8,41),"#7ff0ff"),Ne(n,pt(-.5,-52,1,39),"#ffffff"),[-6,-57,6,9]}if(e===6){let i=pt(-1.8,-2,3.6,11);me(n,i,"#2b241e",{s:.8,hatch:!1}),ce(n,i,.8);let s=Ce("M -6 -4 L 6 -4 L 4 -1.6 L -4 -1.6 Z");me(n,s,"#6c4fa8",{s:.8,lt:1.8,hatch:!1}),ce(n,s,.8),Ne(n,Ce("M -3.4 -4 L 3.4 -4 L 2.2 -56 L 0 -64 L -2.2 -56 Z"),"rgba(166,107,255,.35)");let r=Ce("M -2 -4 L 2 -4 L 1.2 -55 L 0 -61 L -1.2 -55 Z");return Ne(n,r,"#d6baff"),le(n,[0,-6,0,-58],.8,"#ffffff"),[-7,-66,7,9]}return null}function Ou(n){let e=n.style==="brute"?"brute":n.style==="bloater"?"fat":n.style==="thin"?"thin":"normal",t={thin:.84,normal:1,fat:1.05,brute:1.16}[e],i={thin:.82,normal:1,fat:1.25,brute:1.25}[e],s={w:t,fat:e==="fat"?1+(n.fat||1)*.2:0,mus:e==="brute"?1:0},r=d=>d?{U:{L:28,a:8.4,b:7,fb:3,bb:2},F:{L:25,a:7.6,b:6.6,fb:2.6,bb:1},hk:1.6}:{U:{L:26,a:5.2*i,b:4.2*i,fb:1.2*i,bb:.8*i},F:{L:23,a:4.4*i,b:3.2*i,fb:1.4*i,bb:.4*i},hk:i>1.1?1.15:1},a=r(n.bigArm==="R"||n.bigArm==="N"),o=r(n.bigArm==="L"),l={T:{L:30,a:7.2*i,b:5.4*i,fb:1.6*i,bb:1.2*i},S:{L:31,a:5.3*i,b:3.6*i,fb:.4,bb:1.8*i}};n.legless&&(l.T.L=14);let c=n.zombie?n.style==="thin"||n.style==="crawler"?"claw":"open":"fist",h={},f=(d,p,y,g=0)=>{h[d]={bounds:p,draw:y,far:g}},u=16*t+12+s.fat*9;f("torso",[-u-12,-56,u+6,18],d=>Y0(d,n,s)),f("head",[-17,-38,17,4],d=>J0(d,n));for(let[d,p,y]of[["N",a,0],["F",o,.42]]){let g=p.U,m=p.F;f("uarm"+d,[-g.a-g.fb-3,-g.a-7,g.a+g.fb+3,g.L+g.b+2],w=>Q0(w,n,g),y),f("farm"+d,[-m.a-m.fb-3,-m.a-4,m.a+m.fb+4,m.L+m.b+2],w=>j0(w,n,m),y),f("hand"+d,[-6*p.hk,-3,7*p.hk,13*p.hk],w=>e_(w,n,c,p.hk),y)}for(let[d,p]of[["N",0],["F",.42]])f("thigh"+d,[-l.T.a-4,-l.T.a-2,l.T.a+4,l.T.L+l.T.b+6],y=>t_(y,n,l.T),p),n.legless||(f("shin"+d,[-l.S.a-l.S.bb-4,-l.S.a-4,l.S.a+6,l.S.L+l.S.b+2],y=>n_(y,n,l.S),p),f("foot"+d,[-7,-9,17,9],y=>i_(y,n),p));return n.coat&&f("coatTail",[-18*t-2,0,14*t+4,30],d=>{let p=Ce(`M ${-11.5*t} 0 C ${-13*t} 8 ${-15*t} 16 ${-17*t} 25 L ${-13*t} 23.4 L ${-10*t} 26 L ${-6*t} 23.6 L ${-2*t} 25.4 C ${2*t} 16 ${6*t} 8 ${9*t} 0 Z`);me(d,p,n.coatCol||"#dfe3e6",{s:3}),Ct(d,p,.4),qt(d,p,-6,12,2.4,3),le(d,[-4,2,-8,22],.7,_t,.6),ce(d,p,1.5)}),{parts:h,lw:i,arm:{N:a,F:o},leg:l,layout:{hipY:n.legless?30:ks.hipY,shoulder:[ks.shoulder[0],ks.shoulder[1]],neck:ks.neck,hand:c}}}function s_(n,e){let t=e;return Ce(`M ${-31*n} -4 C ${-30*n} ${-11*t} ${-22*n} ${-13*t} ${-12*n} ${-12*t} C 0 ${-11*t} ${10*n} ${-14*t} ${18*n} ${-13.5*t} C ${24*n} ${-12.5*t} ${27.5*n} ${-6*t} ${26.5*n} ${2*t} C ${25.5*n} ${8*t} ${20*n} ${10*t} ${14*n} ${9*t} C ${6*n} ${8*t} ${-2*n} ${5.4*t} ${-10*n} ${5.6*t} C ${-18*n} ${6*t} ${-26*n} ${7*t} ${-30*n} ${3*t} Z`)}function r_(n,e){let t=e.long||1,i=e.bulk||1,s=s_(t,i),r=e.fur;me(n,s,r,{s:4,h:1.2,dk:.45});for(let a=0;a<4;a++)le(n,[(4+a*3.4)*t,-6*i,(6+a*3.4)*t,0,(5+a*3.4)*t,5*i],.7,qe(r,.45,1),.7);ci(e.seed||3);for(let a=0;a<3;a++){let o=(-20+re()*34)*t,l=(-8+re()*10)*i,c=Ye(o,l,3+re()*3,2+re()*2,re());n.save(),n.clip(s),me(n,c,e.skin||"#8a6a64",{s:.8,hatch:!1}),ce(n,c,.5,qe(e.skin||"#8a6a64",.5)),n.restore()}for(let a=0;a<16;a++){let o=(-28+a*3.2)*t,l=-11.5*i+Math.abs(a-9)*.25;le(n,[o,l+1.6,o-1.2,l-.6],.6,qe(r,.4),.8)}if(qt(n,s,(-6+re()*10)*t,-2,3,2,!0),e.plague)for(let a=0;a<5;a++){let o=(-22+re()*40)*t,l=(-10+re()*8)*i,c=Ye(o,l,1.8+re()*2,1.6+re()*1.6);n.save(),n.clip(s),me(n,c,"#8a8a3a",{s:.6,hatch:!1}),Ne(n,Ye(o+.4,l-.6,.5,.4),"#e8e2a0"),ce(n,c,.6),n.restore()}if(Ct(n,s,.3),ce(n,s,1.6),e.spikes)for(let a=0;a<7;a++){let o=(-20+a*6)*t,l=-12.4*i-Math.sin(a*.6)*.6,c=Ce(`M ${o-2} ${l+1} L ${o-.6} ${l-6-a%2*2} L ${o+1.6} ${l+1} Z`);me(n,c,"#c8bfa8",{s:.6,hatch:!1}),ce(n,c,.8)}if(e.collar){let a=Ce(`M ${18*t} ${-13*i} C ${22*t} ${-12*i} ${25*t} ${-8*i} ${26*t} ${-4*i} L ${23.6*t} ${-3.4*i} C ${22.6*t} ${-7*i} ${20.6*t} ${-10*i} ${17.4*t} ${-11*i} Z`);me(n,a,e.collar,{s:.6,hatch:!1}),ce(n,a,.9)}}function a_(n,e){let t=e.snout||1,i=e.headW||1,s=Ce(`M -5 6 C -6.6 -1 -3 -8 3 -10.4 C 8 -12.6 12 -11.6 15 -9.6 L ${15+9*t} -7.4 C ${17+10.6*t} -6.8 ${17+11*t} -4 ${16+10*t} -2.6 L ${15+9*t} -1.4 L ${12+6*t} .6 C 12 2.6 8 3.6 4 7 Z`),r=e.fur,a=e.ears==="big",o=e.ears==="round",l=o?Ye(2.4,-11.4,3.6,3.6):Ce(`M 1 -9 L ${a?-.6:1.4} ${a?-21:-17.6} L ${a?8:7.4} -10.6 Z`);me(n,l,o?qe(e.skin||"#c99a96",.9):r,{s:1.2,hatch:!1}),o||Ne(n,Ce(`M 2.4 -9.6 L ${a?1.2:2.2} ${a?-17.6:-15} L ${a?6.4:6} -10.6 Z`),"#5a3a3a",.7),ce(n,l,1.1),me(n,s,r,{s:2.6,dk:.45});let c=Ce(`M ${12+6*t} .6 L ${15+9*t} -1.4 L ${15.4+9*t} .6 C ${13+7*t} 3.2 ${9+3*t} 3.6 7 2.4 Z`);Ne(n,c,"#2a0606");for(let h=0;h<4;h++){let f=8+h*2.2*t+1;Ne(n,Ce(`M ${f} 1 L ${f+.8} 1 L ${f+.4} ${-.8-(h===3?1:0)} Z`),"#e8e0c8"),Ne(n,Ce(`M ${f+.6} 1.6 L ${f+1.4} 1.6 L ${f+1} 3`),"#d8d0b8")}if(Ne(n,Ye(16+10*t,-4.8,1.6,1.4),"#0d0c0c"),Ne(n,Ye(10,-6.6,2.2,1.6),"#1a0d0a"),Ne(n,Ye(10.4,-6.6,1.3,.9),e.eye||"#ffcf3d"),Ne(n,Ye(10.7,-6.8,.4,.35),"#ffffff"),le(n,[7.4,-8.6,10,-9.2,12.6,-7.6],.9,_t),le(n,[11,-9.6,14,-8.4,16+8*t,-7.2],.6,qe(r,.45),.8),ci((e.seed||3)+4),qt(n,s,12+4*t,2.6,1.8,3,!0),Ct(n,s,.3),ce(n,s,1.4),e.collar&&e.spikes)for(let h=0;h<3;h++)Ne(n,Ce(`M ${-3+h*2.6} 4 L ${-2+h*2.6} 7.6 L ${-1+h*2.6} 4 Z`),"#c8ced6")}function Bu(n,e,t){let i=t?En(16,5.8,3.4,1.6,1.2):En(16,8.4,3.8,3.4,3.2,.3,.7);me(n,i,e.fur,{s:2,dk:.45}),Ct(n,i,.3),ce(n,i,1.3)}function zu(n,e){let t=En(17,3.3,2.4,.2,.8);me(n,t,e.fur,{s:1.4,dk:.45});let i=Ce("M -3 15.4 C -3.6 18 -2.4 19.6 0 19.6 L 5.6 19.6 C 6.6 19.6 6.8 18 6 17 C 4.4 15.6 2 15 -3 15.4 Z");me(n,i,qe(e.fur,.85),{s:.8,hatch:!1});for(let s=0;s<3;s++)le(n,[1.6+s*1.6,18.6,2.6+s*1.6,20.4],.7,"#141210");Ct(n,t,.3),ce(n,t,1.2),ce(n,i,1)}function o_(n,e){let t=20*(e.tailLen||1)/1.2,i=!!e.tailCol,s=En(t,i?1.8:3.4,i?.5:1.6,.4,.4);if(me(n,s,e.tailCol||e.fur,{s:1.2,dk:.5,hatch:!i}),i)for(let r=2;r<t;r+=2.2)le(n,[-1.4,r,1.4,r+.4],.4,qe(e.tailCol,.55),.7);else for(let r=0;r<6;r++)le(n,[-2,2+r*3,-3.4,4+r*3],.5,qe(e.fur,.4),.7);ce(n,s,1.1)}function ku(n){let e=n.long||1,t=n.bulk||1,i={},s=(r,a,o,l=0)=>{i[r]={bounds:a,draw:o,far:l}};s("body",[-34*e,-22*t,30*e,12*t],r=>r_(r,n)),s("head",[-8,-24,30*(n.snout||1)+2,10],r=>a_(r,n)),s("tail",[-6,-3,6,26*(n.tailLen||1)],r=>o_(r,n));for(let[r,a]of[["N",0],["F",.42]])s("fu"+r,[-7,-7,7,21],o=>Bu(o,n,!0),a),s("hu"+r,[-10,-9,10,22],o=>Bu(o,n,!1),a),s("fl"+r,[-5,-4,9,22],o=>zu(o,n),a),s("hl"+r,[-5,-4,9,22],o=>zu(o,n),a);return{parts:i,k:e,b:t}}var Kn=Math.PI,Vs=new Map;function l_(n,e){let t=Vs.get(n);if(!t&&(t=Nu(e.bounds,e.draw,e.far),Vs.set(n,t),Vs.size>400)){let i=Vs.keys().next().value;Vs.get(i).tex.dispose(),Vs.delete(i)}return t}function Qo(n,e,t,i,s="main"){let r=l_(n,e),a=new Qt({map:r.tex,transparent:!0,alphaTest:s==="shadow"?.2:.3,depthWrite:s==="shadow",side:Sn});s==="shadow"&&(a.color.setRGB(0,0,0),a.opacity=.5,a.depthFunc=gs),s==="glow"&&(a.color.setScalar(2.2),a.blending=$n,a.userData.glow=!0);let o=new zt(new Dn(r.w,r.h),a);return o.position.set(r.cx,-r.cy,0),o.renderOrder=s==="shadow"?3:t,i.push(a),o}var Nt=(n,e=0,t=0)=>{let i=new Ot;return i.position.set(e,t,0),n.add(i),i},Hu=n=>n*n*(3-2*n);function Wu(n,e,t){let i={};for(let s in n)i[s]=n[s]+((e[s]==null?n[s]:e[s])-n[s])*t;return i}function c_(n,e,t,i){let s={},r=t.map(([d,p])=>(s=Object.assign({},s,p),[d,s])),a=[[0,{}],...r,[1,i?s:{}]],o=0;for(;o<a.length-2&&n>a[o+1][0];)o++;let[l,c]=a[o],[h,f]=a[o+1],u=Hu(Math.min(1,Math.max(0,(n-l)/(h-l||1))));return Wu(Object.assign({},e,c),Object.assign({},e,f),u)}var Gs={torso:0,head:0,uarmN:0,farmN:0,handN:0,uarmF:0,farmF:0,handF:0,thighN:0,shinN:0,footN:0,thighF:0,shinF:0,footF:0,bx:0,by:0,rot:0,wpn:0};function Vr(n,e,t,i,s){return n.thighN=e,n.shinN=t,n.footN=-(e+t)*.9,n.thighF=i,n.shinF=s,n.footF=-(i+s)*.9,n}var yn={hero:{idle:n=>{let e=Math.sin(n*2.1);return Vr(Object.assign({},Gs,{torso:-.04+.015*e,head:.03-.02*e,uarmN:.3,farmN:1.45,handN:.15,uarmF:.25,farmF:1,handF:.1,by:.35*e}),.14,-.12,-.13,-.05)},walk:n=>{let e=n*Kn*2/.8,t=Math.sin(e);return Vr(Object.assign({},Gs,{torso:-.09,head:.05,uarmN:.25-.3*t,farmN:1.35,handN:.15,uarmF:.1+.4*t,farmF:.5+.25*Math.max(0,t),by:-1.6+1.8*Math.abs(Math.cos(e))}),.5*t,-(.08+.95*Math.max(0,Math.sin(e+1.3))),-.5*t,-(.08+.95*Math.max(0,Math.sin(e+1.3+Kn))))},attack:{dur:.55,k:[[.3,{uarmN:2.8,farmN:.7,handN:-.5,torso:.14,head:.1,thighN:.32,shinN:-.25,footN:-.07}],[.46,{uarmN:-.1,farmN:.2,handN:1.35,torso:-.38,head:-.12,thighN:.5,shinN:-.45,footN:-.05,thighF:-.4,shinF:-.1,footF:.45,uarmF:-.4}],[.7,{uarmN:.15,farmN:.7,handN:.9,torso:-.2}]]}},zombie:{idle:n=>{let e=Math.sin(n*1.7),t=Math.pow(Math.max(0,Math.sin(n*6.3)),12)*.14;return Vr(Object.assign({},Gs,{torso:-.3+.03*e,head:-.22+.1*Math.sin(n*1.1)-t,uarmN:.55+.08*e,farmN:.45+.06*e,handN:.35,uarmF:.1+.06*Math.sin(n*1.7+1),farmF:.18,handF:.25,bx:.8*Math.sin(n*.9),by:-1.2+.4*e}),.05,-.28,-.16,-.05)},walk:n=>{let e=n*Kn*2/1.4,t=Math.sin(e);return Vr(Object.assign({},Gs,{torso:-.36+.05*Math.sin(e*2),head:-.24+.08*t,uarmN:.6+.12*t,farmN:.4,handN:.35,uarmF:.1-.2*t,farmF:.2,handF:.25,by:-2.2+1.8*Math.abs(t)}),.4*t,-(.15+.75*Math.max(0,Math.sin(e+1.2))),-.22*t+.04,-(.28+.2*Math.max(0,Math.sin(e+1.2+Kn))))},attack:{dur:.7,k:[[.3,{torso:-.15,head:.05,uarmN:1.7,uarmF:1.4,farmN:.2,farmF:.2}],[.48,{torso:-.8,head:-.55,uarmN:1.35,uarmF:1.2,farmN:.5,farmF:.4,thighN:.45,shinN:-.5,footN:.05}],[.72,{torso:-.55,head:-.35}]]}}};yn.thin={idle:n=>Object.assign(yn.zombie.idle(n*1.4),{torso:-.5+.04*Math.sin(n*3),head:-.35+.14*Math.sin(n*2.3),uarmN:.7,uarmF:.45+.1*Math.sin(n*2.6),farmN:.6,farmF:.5}),walk:n=>Object.assign(yn.zombie.walk(n*1.5),{torso:-.55,uarmF:.5}),attack:yn.zombie.attack};yn.bloater={idle:n=>{let e=yn.zombie.idle(n*.7);return Object.assign(e,Vr(e,.2,-.12,-.22,-.06),{torso:.06+.03*Math.sin(n*1.2),head:-.12,uarmN:.45,farmN:.5,uarmF:.35,farmF:.4})},walk:n=>Object.assign(yn.zombie.walk(n*.75),{torso:.04,uarmN:.5,uarmF:.3}),attack:{dur:.8,k:[[.35,{torso:.25,uarmN:1.2,uarmF:1,head:.1}],[.55,{torso:-.45,uarmN:1.5,uarmF:1.3,head:-.3}]]}};yn.brute={idle:n=>Object.assign(yn.zombie.idle(n*.8),{torso:-.42+.03*Math.sin(n*1.4),head:-.12,uarmN:.22+.05*Math.sin(n*1.4),farmN:.2,uarmF:.35,farmF:.4}),walk:n=>Object.assign(yn.zombie.walk(n*.85),{torso:-.45,uarmN:.25+.2*Math.sin(n*Kn*2/1.65)}),attack:{dur:.8,k:[[.32,{uarmN:3.1,farmN:.4,torso:.12,head:.05}],[.48,{uarmN:.1,farmN:.05,torso:-.75,head:-.2,thighN:.5,shinN:-.5}],[.7,{torso:-.6}]]}};yn.crawler={idle:n=>{let e=Math.sin(n*1.5);return Object.assign({},Gs,{torso:-1.42,head:1.15+.12*e,uarmN:2.2+.1*e,farmN:-.2,handN:.6,uarmF:2.4-.1*e,farmF:-.3,handF:.6,thighN:-1.45,thighF:-1.55,by:0})},walk:n=>{let e=n*Kn*2/1.3,t=Math.sin(e);return Object.assign({},Gs,{torso:-1.42+.05*t,head:1.15+.08*t,uarmN:2.1+.45*t,farmN:-.3-.4*Math.max(0,Math.cos(e)),handN:.6,uarmF:2.3-.45*t,farmF:-.3-.4*Math.max(0,-Math.cos(e)),handF:.6,thighN:-1.45+.1*t,thighF:-1.55-.1*t,bx:1.5*t})},attack:{dur:.7,k:[[.3,{head:1.4,uarmN:1.6,uarmF:1.8}],[.45,{head:.8,uarmN:2.9,uarmF:2.8,torso:-1.3}]]}};var h_={dur:1,k:[[.22,{thighN:1.05,shinN:-1.9,footN:.85,thighF:.55,shinF:-1.75,footF:1.2,torso:-.42,head:-.35,uarmN:1.1,farmN:.5,uarmF:.7,farmF:.6,by:-18}],[.45,{uarmN:.8,farmN:.9}],[.65,{uarmN:1.15,farmN:.35}],[.82,{uarmN:.9,farmN:.8,head:-.2}]]},u_={dur:.38,k:[[.18,{torso:.32,head:.35,uarmF:.7,farmF:1.2,bx:-3}]]},f_={dur:1.3,k:[[.35,{thighN:.9,shinN:-1.5,footN:.6,thighF:.7,shinF:-1.3,footF:.6,torso:-.35,head:-.3,by:-12,uarmN:.2,uarmF:.1}],[.8,{rot:1.48,by:8,bx:-8,thighN:.3,shinN:-.3,footN:0,thighF:.2,shinF:-.2,footF:0,torso:.1,head:.5,uarmN:2.2,farmN:.4,uarmF:-.6,farmF:.3}],[.92,{rot:1.52,by:9}]]},d_={dur:1,k:[[.6,{head:.2,torso:-1.52,uarmN:1.7,uarmF:2.8,by:-2}]]},Vu={body:0,head:0,tail:0,fuN:0,flN:0,fuF:0,flF:0,huN:.35,hlN:-.7,huF:.35,hlF:-.7,bx:0,by:0},p_={idle:n=>{let e=Math.sin(n*2.4);return Object.assign({},Vu,{body:.02*e,head:.06*Math.sin(n*1.3)-.05,tail:.35*Math.sin(n*5),by:.5*e,fuN:.05,fuF:-.05})},walk:n=>{let e=n*Kn*2/.7,t=Math.sin(e),i=Math.sin(e+Kn);return Object.assign({},Vu,{body:.03*Math.sin(e*2),head:-.08+.05*Math.sin(e*2),tail:.25*t,by:1.2*Math.abs(Math.cos(e))-1,fuN:.45*t,flN:-.7*Math.max(0,Math.sin(e+1.2)),fuF:.45*i,flF:-.7*Math.max(0,Math.sin(e+1.2+Kn)),huN:.35+.4*i,hlN:-.7-.3*Math.max(0,Math.sin(e+Kn+1.2)),huF:.35+.4*t,hlF:-.7-.3*Math.max(0,Math.sin(e+1.2))})},attack:{dur:.6,k:[[.3,{body:.12,head:.35,fuN:-.4,fuF:-.3,huN:.7,huF:.6,by:-3}],[.48,{body:-.18,head:-.35,fuN:.9,fuF:.7,flN:-.2,huN:-.2,huF:-.1,hlN:-.3,by:3}]]},hit:{dur:.38,k:[[.18,{body:.18,head:.45,bx:-3,tail:-.6}]]},death:{dur:1.1,k:[[.5,{body:.1,head:-.5,fuN:-.9,flN:1.6,fuF:-.8,flF:1.5,huN:1.4,hlN:-2,huF:1.3,hlF:-1.9,by:-18,tail:-.8}],[.85,{body:.16,head:-.75,by:-21}]]}};function Xu(n,e){let t="idle",i=0,s=null,r=0,a=null,o=1,l=null;return{loop(c){t!==c&&(t=c,s||(a=l,o=0))},once(c){s!=="death"&&(s=c,r=0,a=l,o=0)},reset(){s=null,t="idle",r=0,a=null,o=1},get dead(){return s==="death"},pose(c){i+=c;let h=n[t](i);if(s){let f=n[s];r+=c/f.dur,r>=1&&s!=="death"?(s=null,a=l,o=0):h=c_(Math.min(r,1),h,f.k,s==="death")}return a&&o<1&&(o=Math.min(1,o+c/.14),h=Wu(a,h,Hu(o))),l=h,h}}}function jo(n,e){let t=Ou(n),i=JSON.stringify(n)+"|",s=[],r=[],a=d=>{let p=(O,W)=>{let q=Qo(i+O,t.parts[O],W,d?r:s,d?"shadow":"main");return q.userData.part=O,q},y=new Ot,g=Nt(y),m=Nt(g,0,t.layout.hipY),w=Nt(m),A={body:g,torso:w},M=Nt(m,-1.4,0);if(M.add(p("thighF",14)),A.thighF=M,!n.legless){let O=Nt(M,0,-t.leg.T.L);O.add(p("shinF",13)),A.shinF=O;let W=Nt(O,0,-t.leg.S.L);W.add(p("footF",15)),A.footF=W}let b=Nt(w,-1.6,-t.layout.shoulder[1]+.6);b.add(p("uarmF",11)),A.uarmF=b;let T=Nt(b,0,-t.arm.F.U.L);T.add(p("farmF",10)),A.farmF=T;let R=Nt(T,0,-t.arm.F.F.L);R.add(p("handF",12)),A.handF=R,w.add(p("torso",20));let v=Nt(m,1.4,0);if(v.add(p("thighN",17)),A.thighN=v,!n.legless){let O=Nt(v,0,-t.leg.T.L);O.add(p("shinN",16)),A.shinN=O;let W=Nt(O,0,-t.leg.S.L);W.add(p("footN",19)),A.footN=W}t.parts.coatTail&&m.add(p("coatTail",21));let E=Nt(w,t.layout.neck[0],-t.layout.neck[1]),N=p("head",28),D=ks.headScale*(n.headScale||1);N.scale.setScalar(D),N.position.multiplyScalar(D),E.add(N),A.head=E;let k=Nt(w,.6,-t.layout.shoulder[1]);k.add(p("uarmN",31)),A.uarmN=k;let V=Nt(k,0,-t.arm.N.U.L);V.add(p("farmN",30)),A.farmN=V;let L=Nt(V,0,-t.arm.N.F.L);if(L.add(p("handN",33)),A.handN=L,e>0){let O=Nt(L,.6,-4.6);O.rotation.z=-2.15,O.add(Qo("w"+e,{bounds:Gu[e],draw:W=>Ic(W,e,"all"),far:0},32,d?r:s,d?"shadow":"main")),e>=4&&!d&&O.add(Qo("wg"+e,{bounds:Gu[e],draw:W=>Ic(W,e,"glow"),far:0},34,[],"glow"))}return{root:y,J:A}},o=a(!1),l=a(!0),c=n.style&&yn[n.style]?n.style:n.zombie?"zombie":"hero",h=Object.assign({},yn[c],{hit:u_,search:h_,death:c==="crawler"?d_:f_}),f=Xu(h),u=(d,p)=>{d.body.position.set(p.bx,p.by,0),d.body.rotation.z=p.rot,d.torso.rotation.z=p.torso,d.head.rotation.z=p.head,d.uarmN.rotation.z=p.uarmN,d.farmN.rotation.z=p.farmN,d.handN.rotation.z=p.handN,d.uarmF.rotation.z=p.uarmF,d.farmF.rotation.z=p.farmF,d.handF.rotation.z=p.handF,d.thighN.rotation.z=p.thighN,d.thighF.rotation.z=p.thighF,d.shinN&&(d.shinN.rotation.z=p.shinN,d.footN.rotation.z=p.footN,d.shinF.rotation.z=p.shinF,d.footF.rotation.z=p.footF)};return{group:o.root,shadow:l.root,mats:s,smats:r,ctl:f,kind:"human",spec:t,apply(d){u(o.J,d),u(l.J,d)}}}var Gu={1:[-6,-56,6,8],2:[-9,-56,9,8],3:[-6,-54,9,11],4:[-9,-62,9,9],5:[-6,-57,6,9],6:[-7,-66,7,9]};function $u(n){let e=ku(n),t=JSON.stringify(n)+"|",i=[],s=[],r=e.k,a=e.b,o=u=>{let d=(M,b)=>{let T=Qo(t+M,e.parts[M],b,u?s:i,u?"shadow":"main");return T.userData.part=M,T},p=new Ot,y=Nt(p,0,39),g={body:y},m=(M,b,T,R,v)=>{let E=Nt(y,b,T);E.add(d(M[0]+"u"+v,R+1));let N=Nt(E,0,-16);N.add(d(M[0]+"l"+v,R)),g[M[0]+"u"+v]=E,g[M[0]+"l"+v]=N};m("f",17*r-2,-4*a,10,"F"),m("h",-21*r-2,-5*a,12,"F");let w=Nt(y,-30*r,6*a);w.add(d("tail",16)),g.tail=w,y.add(d("body",20)),m("f",18*r,-4*a,17,"N"),m("h",-21*r,-5*a,17,"N");let A=Nt(y,22*r,10*a);return A.add(d("head",30)),g.head=A,{root:p,J:g}},l=o(!1),c=o(!0),h=Xu(p_),f=(u,d)=>{u.body.position.set(d.bx,39*Math.min(1,a)+d.by,0),u.body.rotation.z=d.body,u.head.rotation.z=d.head,u.tail.rotation.z=-2.2+d.tail;for(let p of["N","F"])u["fu"+p].rotation.z=d["fu"+p],u["fl"+p].rotation.z=d["fl"+p],u["hu"+p].rotation.z=d["hu"+p],u["hl"+p].rotation.z=d["hl"+p]};return{group:l.root,shadow:c.root,mats:i,smats:s,ctl:h,kind:"quad",spec:e,apply(u){f(l.J,u),f(c.J,u)}}}var it={ready:!1,enabled:!0,active:!1};try{it.enabled=localStorage.getItem("tower-3d")!=="0"}catch{}window.GL3D=it;it.names=()=>Object.keys(sl);it.box=n=>{let e=sl[n]||{},t=e.scale||1;return e.q?{h:84*t,w:120*t}:e.style==="crawler"?{h:64,w:118}:{h:134*rl*t,w:(e.style==="brute"?100:e.style==="bloater"?86:72)*t}};var rl=1.05,qu=[{shirt:"#5a5142",torn:.35,x:[]},{shirt:"#3e4636",jacket:"#3e4636",hoodDown:!0,x:[]},{shirt:"#4a4336",jacket:"#4a4336",hoodDown:!0,x:["pads"],padCol:"#55595c"},{shirt:"#30373f",jacket:"#30373f",x:["pads","vest"],vest:"#3d4231",pouches:!0,padCol:"#2f3337"},{shirt:"#2c3036",jacket:"#2c3036",x:["pads","vest","exo"],vest:"#2b2f33",pouches:!0,padCol:"#3a3f44"},{shirt:"#1f232a",jacket:"#1f232a",x:["vest","nano"],vest:"#191c22",pouches:!0}],sl={"\u041A\u0440\u044B\u0441\u0430-\u043F\u0435\u0440\u0435\u0440\u043E\u0441\u0442\u043E\u043A":{q:1,fur:"#5b4a3c",ears:"round",snout:1.15,tailCol:"#c99a96",tailLen:2.2,tailK:.6,scale:.55,long:1.15,legK:.8,eye:"#ff3d2e",speed:1.4},"\u0411\u0440\u043E\u0434\u044F\u0447\u0438\u0439 \u043F\u0451\u0441":{q:1,fur:"#4a3d30",scale:1,eye:"#ffcf3d"},\u0421\u0431\u043E\u0440\u0449\u0438\u043A:{skin:"#8f9a7a",shirt:"#6b6f5e",pants:"#3d4250",hair:"#2a221a",torn:.5,blood:.5,x:["backpack"]},\u0421\u043B\u0438\u0437\u0435\u043D\u044C:{style:"bloater",fat:1.3,skin:"#8fb06a",shirt:null,pants:"#4a5a3a",sleeves:"none",x:["pustules"],scale:1.08,torn:.8,blood:.3,bald:!0},"\u0420\u0436\u0430\u0432\u044B\u0439 \u0434\u0440\u043E\u043D":{style:"crawler",legless:!0,skin:"#87926f",shirt:"#4f5a4a",pants:"#2f3440",torn:.7,blood:.9,hair:"#1e1a14",bald:!0},"\u041B\u0435\u0442\u0443\u0447\u0430\u044F \u043C\u044B\u0448\u044C":{style:"thin",thin:.8,skin:"#6a6a78",shirt:"#2a2630",pants:"#2a2630",eye:"#d8ff5a",eyeGlow:2.4,torn:.6,blood:.4,x:["hood"],bald:!0},"\u0413\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u0430\u044F \u043C\u043E\u043A\u0440\u0438\u0446\u0430":{style:"crawler",skin:"#9a9a80",shirt:"#5a4a3a",pants:"#3a3030",torn:.6,blood:.8,hair:"#3a2a1c",legless:!0},"\u041E\u0434\u0438\u0447\u0430\u0432\u0448\u0438\u0439 \u0441\u043E\u0441\u0435\u0434":{skin:"#98a284",shirt:"#7a2e2e",pants:"#2e3340",hair:"#5a4632",torn:.45,blood:.6},"\u041A\u043E\u0448\u043A\u0430-\u043C\u0443\u0442\u0430\u043D\u0442":{q:1,fur:"#3a3440",ears:"big",snout:.7,headW:.9,scale:.62,tailLen:1.8,tailK:.7,long:1.05,legK:.8,eye:"#b8ff5a",speed:1.3,tailUp:-.6},\u041C\u0430\u0440\u043E\u0434\u0451\u0440:{skin:"#7f8a6a",shirt:"#2d2a33",pants:"#262830",x:["hood"],torn:.35,blood:.4},\u041F\u043E\u043B\u0437\u0443\u043D:{style:"crawler",legless:!0,skin:"#87926f",shirt:"#4f5a4a",pants:"#2f3440",torn:.7,blood:.9,hair:"#1e1a14",bald:!0},\u0421\u043A\u0438\u0442\u0430\u043B\u0435\u0446:{skin:"#8c977a",shirt:"#56604a",pants:"#3a3a30",x:["backpack"],hair:"#2f281f",torn:.4,blood:.5},"\u0411\u0440\u043E\u0434\u044F\u0447\u0438\u0439 \u043F\u043E\u0432\u0430\u0440":{skin:"#a0a690",shirt:"#e9e6df",pants:"#2a2a2a",x:["apron","chefhat","cleaver"],torn:.3,blood:1},"\u0421\u0442\u043E\u0440\u043E\u0436\u0435\u0432\u043E\u0439 \u043F\u0451\u0441":{q:1,fur:"#3b3631",scale:1.12,bulk:1.1,collar:"#9aa3ad",spikes:!0,eye:"#ff3d2e"},"\u041E\u0445\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u043E\u0431\u043E\u0442":{skin:"#8a947a",shirt:"#2b3445",pants:"#232833",x:["helmet","vest"],torn:.3,blood:.4},"\u0414\u0440\u043E\u043D-\u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C":{style:"thin",thin:.6,skin:"#a3a08a",shirt:"#d0622a",pants:"#2e3340",x:["cap"],hat:"#d0622a",torn:.4,blood:.5},\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A:{skin:"#9aa58a",shirt:"#dfe3ea",pants:"#2a2f3d",x:["tie"],tie:"#2a4a7a",hair:"#2a221a",torn:.35,blood:.6},"\u0422\u0443\u0440\u043D\u0438\u043A\u0435\u0442-\u0441\u0442\u0440\u0430\u0436":{skin:"#7f8c6a",shirt:"#2b3445",pants:"#232833",x:["vest","spikes"],vest:"#3a3f46",torn:.3,blood:.5},\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440:{suit:!0,skin:"#98a284",shirt:"#2e3548",pants:"#252a38",tie:"#7a1f26",hair:"#1a1612",torn:.3,blood:.5},"\u0423\u0431\u043E\u0440\u0449\u0438\u043A-\u0430\u0432\u0442\u043E\u043C\u0430\u0442":{skin:"#8f9a7a",shirt:"#2f6f6a",pants:"#2f6f6a",overalls:!0,torn:.4,blood:.4,x:["pustules"]},"\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440-\u043F\u0440\u0438\u0437\u0440\u0430\u043A":{skin:"#a3ad92",shirt:"#c9d6e8",pants:"#2a2f3d",x:["tie","glasses"],tie:"#3a3a3a",bald:!0,hair:"#555555",torn:.3,blood:.5},\u041F\u043E\u0434\u043E\u043F\u044B\u0442\u043D\u044B\u0439:{style:"brute",muscle:1,bigArm:"R",headScale:.85,skin:"#c0c4b6",shirt:"#a8c4d8",pants:"#a8c4d8",sleeves:"none",scale:1.28,torn:.5,blood:.6,bald:!0},\u041C\u0443\u0442\u0430\u043D\u0442:{style:"brute",muscle:1,bigArm:"R",headScale:.8,skin:"#7f9a5a",shirt:null,pants:"#3a3a30",scale:1.32,x:["pustules"],torn:.6,blood:.7,bald:!0},"\u041B\u0430\u0431\u043E\u0440\u0430\u043D\u0442-\u043A\u0443\u043B\u044C\u0442\u0438\u0441\u0442":{coat:!0,skin:"#a3a08a",shirt:"#e9ecef",pants:"#2a2f3d",x:["gasmask"],torn:.35,blood:.6},"\u0414\u0440\u043E\u043D-\u043F\u0430\u043B\u0430\u0447":{skin:"#8a947a",shirt:"#d9b42a",pants:"#d9b42a",x:["helmet","vest","spikes"],vest:"#9a8a2a",torn:.3,blood:.5},\u0425\u0438\u043C\u0435\u0440\u0430:{q:1,fur:"#5a6b4a",scale:1.18,bulk:1.15,spikes:!0,eye:"#b8ff5a",plague:!0},"\u041A\u043E\u043B\u0431\u0430-\u0441\u043B\u0438\u0437\u0435\u043D\u044C":{style:"bloater",fat:1.2,skin:"#7a9a5a",shirt:"#a8c4d8",pants:"#a8c4d8",sleeves:"none",x:["pustules"],scale:1.12,torn:.5,blood:.5,bald:!0},\u0421\u043A\u0430\u043B\u044C\u043F\u0435\u043B\u044C\u0449\u0438\u043A:{coat:!0,skin:"#a3a08a",shirt:"#5a8a7a",pants:"#5a8a7a",mask:"surgical",x:["scalpels"],torn:.3,blood:1},\u0421\u0442\u0440\u0430\u0436:{skin:"#7a846a",shirt:"#15181e",pants:"#15181e",x:["helmet","vest"],vest:"#22262c",torn:.2,blood:.4,scale:1.06},\u041D\u0430\u043C\u0435\u0441\u0442\u043D\u0438\u043A:{suit:!0,skin:"#a0a890",shirt:"#5a1a2a",pants:"#2a1a20",tie:"#e6b422",x:["collarGold"],hair:"#9a9a9a",torn:.2,blood:.6},\u0422\u0435\u043D\u044C:{style:"thin",thin:1,skin:"#3a3a44",shirt:"#14141a",pants:"#14141a",eye:"#c8ff5a",eyeGlow:3,torn:.6,blood:.2,x:["hood"]},"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0434\u0440\u043E\u043D":{suit:!0,skin:"#8f9a7a",shirt:"#1c1f26",pants:"#1c1f26",tie:"#111111",x:["vest","glasses"],vest:"#2a2e34",scale:1.12,torn:.2,blood:.4},"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u043A\u0430\u044F \u0445\u0438\u043C\u0435\u0440\u0430":{q:1,fur:"#2e2a26",scale:1.1,plague:!0,eye:"#b8ff5a"},"\u0417\u043E\u043B\u043E\u0442\u0430\u044F \u0433\u043E\u043D\u0447\u0430\u044F":{q:1,fur:"#c9a23a",scale:1.08,long:1.1,collar:"#e6b422",eye:"#ff7a3d",speed:1.3},\u041C\u0435\u0442\u0440\u0434\u043E\u0442\u0435\u043B\u044C:{suit:!0,skin:"#a3ad92",shirt:"#e8e4da",pants:"#1c1c1c",tie:"#1c1c1c",x:["bowtie"],hair:"#1a1612",torn:.25,blood:.6}},m_=n=>{let e=7;for(let t of n)e=e*31+t.charCodeAt(0)>>>0;return e%997+1};function Ys(n,e){let t=qu[e]||qu[0],i=Object.assign({style:"hero",zombie:!1,seed:11,skin:"#c99c7c",pants:"#34362f",shoes:"#2a221c",hair:"#2b2119",stubble:!0,sleeves:"long",torn:.06,blood:.12},t,{x:["pack",...t.x]}),s=jo(i,n);return s.group.scale.setScalar(rl),s.cfg=i,s}function Nc(n){let e={style:"hero",zombie:!1,seed:77,skin:"#b88a6a",shirt:"#5a4a6a",jacket:"#4a3a2a",pants:"#2c2c30",shoes:"#1d1a18",hair:"#8a8a8a",stubble:!0,sleeves:"long",torn:.1,blood:0,x:["pack"]},t=jo(e,0);return t.group.scale.setScalar(rl),t.cfg=e,t}function al(n){let e=Object.assign({zombie:!0,seed:m_(n)},sl[n]||sl.\u0421\u0431\u043E\u0440\u0449\u0438\u043A);e.coat&&(e.coatCol=e.shirt);let t=e.q?$u(e):jo(e,0);return t.group.scale.setScalar((e.scale||1)*(e.q?1:rl)),t.cfg=e,t}var jn,On,Qn,qs,ui,Qi=null,Yt=null,Yu="",tl=0,ji=null,Bi=null,Xs=0,$r=0,Gt=null,jt=null,hi=null,Ws=[],Zu="",Ju="",Ku="",Lc="",el=0;it.quality="high";try{it.quality=localStorage.getItem("tower-q")||"high"}catch{}var g_=-16,__=3,v_=1.12;function nl(n){let e=new Ot,t=new Ot,i=new Ot;e.add(t),t.add(i),i.add(n.group);let s=new Ot,r=new Ot,a=new Ot;return s.position.set(g_,__,-9.3),s.scale.setScalar(v_),e.add(s),s.add(r),r.add(a),a.add(n.shadow),{root:e,flip:t,yaw:i,sflip:r,syaw:a,model:n,ctl:n.ctl,st:{atk:-1,flash:0,dir:1,pop:0}}}function qr(n,e){n.st.dir=e,n.flip.scale.x=e,n.sflip.scale.x=e}function Qu(n,e,t){n.model.mats.forEach(i=>{i.userData.glow||i.color.setRGB(t*(1+e*1.5),t*(1-e*.45),t*(1-e*.5))})}function Gr(n){n&&(On.remove(n.root),n.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(t=>t.dispose())}))}var il=(n,e)=>n.model.apply(n.ctl.pose(e));function x_(n=.016){let e=ui.getBoundingClientRect(),t=Math.max(1,e.width),i=Math.max(1,e.height),s=t+"x"+i;if(s!==Lc){Lc=s;let c=it.quality!=="low",h=Math.min(window.devicePixelRatio||1,c?1.75:1.2);jn.setPixelRatio(h),jn.setSize(t,i,!1),c&&Qi&&Qi.setSize(t,i,h)}let r=window.VIEW||{x:0,y:0,w:900,h:400};Xs=Math.max(0,Xs-n);let a=Xs>0?Xs*22:0,o=(Math.random()-.5)*a,l=(Math.random()-.5)*a;Qn.left=r.x+o,Qn.right=r.x+r.w+o,Qn.top=-r.y+l,Qn.bottom=-(r.y+r.h)+l,Qn.updateProjectionMatrix()}function y_(){let n=document.getElementById("hero");if(!n||!Gt)return;let e=getComputedStyle(n),t=0,i=400;if(e.transform&&e.transform!=="none"){let s=new DOMMatrix(e.transform);t=s.m41,i=s.m42}Gt.root.position.set(t,-i,0),(!ji||!ji.fight)&&qr(Gt,n.classList.contains("face-l")?-1:1),Gt.ctl.loop(n.classList.contains("walk")?"walk":"idle"),Gt.root.visible=!n.classList.contains("boarding")}function ju(n){if(requestAnimationFrame(ju),!it.active||!jn)return;let e=n/1e3;if(e-el<.024)return;let t=Math.min(.05,el?e-el:.016);el=e,$r=Math.max(0,$r-t);let i=$r>0?t*.08:t;if(x_(t),Gt){y_();let s=Gt.st;s.atk>=0&&(s.atk+=i/.55,s.atk>=1&&(s.atk=-1)),s.flash>0&&(s.flash=Math.max(0,s.flash-i*3)),Qu(Gt,s.flash,1),Gt.yaw.position.x=Gt.syaw.position.x=s.atk>=0?Math.sin(Math.PI*Math.min(1,s.atk*1.4))*30:0,il(Gt,i)}for(let s of[jt,hi]){if(!s)continue;let r=s.st;r.pop=Math.min(1,r.pop+i/(s===jt?1.1:.01)),r.atk>=0&&(r.atk+=i/.6,r.atk>=1&&(r.atk=-1)),r.flash>0&&(r.flash=Math.max(0,r.flash-i*3));let a=1-Math.pow(1-r.pop,3);Qu(s,r.flash,.08+.92*a),s===jt&&(s.ctl.loop(r.pop<1?"walk":"idle"),s.root.position.x=(s.baseX||0)-s.st.dir*60*(1-a)),s.yaw.position.x=s.syaw.position.x=r.atk>=0?Math.sin(Math.PI*r.atk)*34:0,il(s,i)}if(Ws.forEach(s=>il(s,i)),Yt&&ji&&Yt.update(i,ji),Bi&&Yt){let s=Math.min(1,(performance.now()-Bi.t0)/Bi.dur),r=s<.5?4*s**3:1-Math.pow(-2*s+2,3)/2;Yt.root.position.y=Bi.from*(1-r),s>=1&&(Bi=null)}b_(i),tl=Math.max(0,tl-i*1.6),it.quality!=="low"&&Qi?Qi.render(e,tl):jn.render(On,Qn)}it.update=n=>{if(!it.ready||(it.active=!!n.visible&&it.enabled,qs.style.display=it.active?"":"none",!it.active))return;if(ji=n,n.floorKey!==Yu){Yu=n.floorKey,Yt&&(On.remove(Yt.root),Yt.dispose(),Yt=null);try{Yt=Uu({zone:n.zone,floor:n.floor,base:n.base,rooms:n.rooms,levels:n.levels},n.layout),On.add(Yt.root)}catch(s){console.error(s),Yt=null}if($s.length=0,Ws.forEach(Gr),Ws=[],Yt&&n.slide){let s=n.layout.roomH+n.layout.slab;Bi={t0:performance.now(),dur:1050,from:n.slide==="up"?s:-s},Yt.root.position.y=Bi.from}else Bi=null}ui.classList.toggle("env",!!Yt);let e=n.wi+":"+n.ai;e!==Zu&&(Zu=e,Gr(Gt),Gt=nl(Ys(n.wi,n.ai)),On.add(Gt.root)),Gt&&(n.dead?Gt.ctl.once("death"):Gt.ctl.dead&&Gt.ctl.reset(),n.fight&&qr(Gt,n.heroDir||1));let t=n.enemy||"";if(t!==Ju){if(Ju=t,jt)if(jt.dyingStarted)for(jt.left=2,Ws.push(jt);Ws.length>3;)Gr(Ws.shift());else Gr(jt);jt=null,t&&(jt=nl(al(t)),On.add(jt.root))}jt&&(jt.baseX=n.foeX,jt.st.pop>=1&&(jt.root.position.x=n.foeX),jt.root.position.y=-n.foeY,qr(jt,n.foeDir||-1));let i=n.npc||"";i!==Ku&&(Ku=i,Gr(hi),hi=null,i&&(hi=nl(Nc(i)),hi.st.pop=1,On.add(hi.root))),hi&&(hi.root.position.set(n.npcX,-n.foeY,0),qr(hi,n.npcDir||-1))};it.setEnabled=n=>{it.enabled=!!n;try{localStorage.setItem("tower-3d",n?"1":"0")}catch{}ui&&ui.classList.toggle("gl",it.ready&&it.enabled),qs&&(qs.style.display=it.ready&&it.enabled?"":"none")};it.setQuality=n=>{it.quality=n==="low"?"low":"high";try{localStorage.setItem("tower-q",it.quality)}catch{}jn&&(it.quality!=="low"&&!Qi&&(Qi=Pc(jn,On,Qn)),Lc="")};it.trigger=(n,e)=>{if(!it.ready||!it.enabled)return;if(e==="shake"){Xs=Math.max(Xs,.32),$r=.12;return}let t=n==="hero"?Gt:jt;if(t)if(e==="attack")t.st.atk=0,t.ctl.once("attack");else if(e==="hurt")$r=.07,t.st.flash=1,t.ctl.once("hit"),n==="hero"&&(tl=1),M_(t.root.position.x,t.root.position.y+82*(t.model.kind==="quad"?.5:1),-t.st.dir,8+(Math.random()*7|0));else if(e==="death"){if(t.dyingStarted=!0,t.ctl.once("death"),Yt){let i=t.root.position.x;setTimeout(()=>Yt&&Yt.stamp(i+t.st.dir*20,0,16,"pool"),700)}}else e==="search"&&t.ctl.once("search")};function ef(n){n.outputColorSpace=Ht,n.toneMapping=_n}it.init=()=>{try{if(ui=document.getElementById("scene"),qs=document.getElementById("gl"),!ui||!qs)return;jn=new Or({canvas:qs,antialias:!0,alpha:!1,powerPreference:"high-performance"}),jn.setClearColor(329224,1),ef(jn),On=new bs,Qn=new Xn(0,900,0,-400,-200,200),Qn.position.z=100,it.quality!=="low"&&(Qi=Pc(jn,On,Qn)),it.ready=!0,it.enabled&&ui.classList.add("gl"),requestAnimationFrame(ju),typeof render=="function"&&render()}catch(n){console.error(n),it.ready=!1,ui&&ui.classList.remove("gl")}};var $s=[],Hs=null;function M_(n,e,t,i){for(let s=0;s<i;s++){let r=(Math.random()-.5)*1.4+(t>0?0:Math.PI)-t*.35,a=60+Math.random()*170;$s.push({x:n,y:e+(Math.random()-.5)*14,vx:Math.cos(r)*a,vy:Math.sin(r)*a*.8+40+Math.random()*80,life:1.4,wall:Math.random()<.3?.06+Math.random()*.3:9,r:.6+Math.random()*1.2})}}function b_(n){Hs||(Hs=new $i(new Bt().setAttribute("position",new Jt(new Float32Array(600),3)),new Ti({color:7997958,size:3.2,sizeAttenuation:!1,transparent:!0,opacity:.95,depthWrite:!1})),Hs.frustumCulled=!1,Hs.renderOrder=40,On.add(Hs));let e=Hs.geometry.attributes.position,t=ji?-ji.layout.floorY+3:-400;for(let i=$s.length-1;i>=0;i--){let s=$s[i];s.life-=n,s.wall-=n,s.vy-=520*n,s.x+=s.vx*n,s.y+=s.vy*n;let r=null;s.wall<=0?r="wall":s.y<=t&&(r="floor"),(r||s.life<=0)&&(r&&Yt&&Yt.stamp(s.x,-Math.max(s.y,t),s.r*(r==="wall"?1.4:2),r),$s.splice(i,1))}for(let i=0;i<200;i++){let s=$s[i];s?e.setXYZ(i,s.x,s.y,5):e.setXYZ(i,0,-99999,0)}e.needsUpdate=!0}var S_={head:["head"],body:["torso","coatTail","body"],arms:["uarmN","farmN","handN","uarmF","farmF","handF","fuN","flN","fuF","flF"],legs:["thighN","shinN","footN","thighF","shinF","footF","huN","hlN","huF","hlF","tail"]};function Dc(n,e,t,i,s,r,a){e.group.updateMatrixWorld(!0);let o=[];e.group.traverse(h=>{h.isMesh&&h.material.map&&!h.material.userData.glow&&o.push(h)}),o.sort((h,f)=>h.renderOrder-f.renderOrder);let l=r?new Set(S_[r]||[]):null,c=n.getTransform();for(let h of o){let f=h.matrixWorld.elements,u=h.material.map.image,d=h.geometry.parameters.width,p=h.geometry.parameters.height;if(n.setTransform(c.multiply(new DOMMatrix([t*f[0],-t*f[1],-t*f[4],t*f[5],t*f[12]+i,-t*f[13]+s]))),l&&l.has(h.userData.part)){let y=document.createElement("canvas");y.width=u.width,y.height=u.height;let g=y.getContext("2d");g.drawImage(u,0,0),g.globalCompositeOperation="source-atop",g.fillStyle="rgba(214,28,20,.82)",g.fillRect(0,0,y.width,y.height),n.drawImage(y,-d/2,-p/2,d,p)}else n.globalAlpha=a&&l?.9:1,n.drawImage(u,-d/2,-p/2,d,p),n.globalAlpha=1}n.setTransform(c)}it.drawChar=(n,e,t,i)=>{if(!it.ready&&t!=="full"&&t!=="portrait")return!1;let s=e.hero?Ys(e.wi,e.ai):al(e.name);s.apply(s.ctl.pose(.6));let r=n.getContext("2d"),a=n.width,o=n.height;if(r.clearRect(0,0,a,o),t==="portrait"){s.group.updateMatrixWorld(!0);let l=new F;s.group.traverse(h=>{h.userData.part===(s.kind==="quad","head")&&h.getWorldPosition(l)});let c=a/(s.kind==="quad"?40:30);e.hero||(r.translate(a,0),r.scale(-1,1)),Dc(r,s,c,a/2-l.x*c+(s.kind==="quad"?-a*.1:0),o/2+l.y*c-o*.02)}else{let l=o/((s.kind==="quad"?80:150)*(s.cfg.scale||1));e.hero||(r.translate(a,0),r.scale(-1,1)),s.group.scale.setScalar(1),Dc(r,s,l,a/2,o*.97,i,!0)}return s.group.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),s.shadow.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),!0};function Hr(n,e,t){e&&e!=="idle"&&n.ctl.once(e);for(let i=0;i<t;i+=1/30)n.apply(n.ctl.pose(1/30));return n.group.scale.setScalar(1),n}function Wr(n){[n.group,n.shadow].forEach(e=>e&&e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}function Xr(n,e,t,i,s,r,a=1,o){let l=document.createElement("canvas");l.width=n.canvas.width,l.height=n.canvas.height;let c=l.getContext("2d");r&&(c.translate(2*i,0),c.scale(-1,1)),Dc(c,e,t,i,s),o&&(c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-atop",c.fillStyle=o,c.fillRect(0,0,l.width,l.height)),n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=a,n.drawImage(l,0,0),n.restore()}it.drawScene=(n,e,t)=>{let i=n.getContext("2d"),s=n.width,r=n.height,a=r/300,o=s/a,l=272;i.setTransform(a,0,0,a,0,0);let c;if(e==="win"){c=i.createLinearGradient(0,0,0,300),c.addColorStop(0,"#1d2440"),c.addColorStop(.45,"#7a4a5a"),c.addColorStop(.75,"#e09a5a"),c.addColorStop(1,"#f2c27a"),i.fillStyle=c,i.fillRect(0,0,o,300),i.fillStyle="rgba(255,236,190,.9)",i.beginPath(),i.arc(o*.72,228,34,0,7),i.fill(),i.fillStyle="rgba(255,220,170,.25)",i.beginPath(),i.arc(o*.72,228,60,0,7),i.fill(),i.fillStyle="#2a2230";let h=0;for(i.beginPath(),i.moveTo(0,260);h<o;){let d=20+h*37%53;i.lineTo(h,260-d),h+=14+h*13%19,i.lineTo(h,260-d)}i.lineTo(o,300),i.lineTo(0,300),i.fill(),i.fillStyle="#121014",i.fillRect(0,l-6,o,40),i.fillRect(o*.05,l-46,30,40),i.fillRect(o*.05+6,l-70,4,24),i.strokeStyle="#121014",i.lineWidth=2;for(let d=0;d<12;d++)i.beginPath(),i.moveTo(d*o/11,l-6),i.lineTo(d*o/11,l-22),i.stroke();i.fillRect(0,l-23,o,2);let f=Hr(Ys(t&&t.wi||0,t&&t.ai||0),"idle",.5),u=t&&t.end;if(u==="light"){i.fillStyle="#3a2a1a",i.fillRect(o*.5-14,l-12,28,6);for(let p=0;p<4;p++)i.fillStyle=["#ffd36b","#ff9a3a","#ff5a2a","#fff2b0"][p],i.beginPath(),i.moveTo(o*.5-12+p*2,l-12),i.quadraticCurveTo(o*.5-6+p*3,l-40-p*8,o*.5+2-p,l-60+p*10),i.quadraticCurveTo(o*.5+8,l-30,o*.5+12-p*2,l-12),i.fill();let d=Hr(Nc("trader"),"idle",.9);Xr(i,d,a*1.45,s*.64,(l-6)*a,!0,1,"rgba(20,14,18,.55)"),Wr(d)}if(u==="scribe"){i.fillStyle="#efe6d0";for(let d=0;d<9;d++)i.save(),i.translate(o*(.45+d*.06),60+d*47%120),i.rotate(d*.7),i.fillRect(-6,-8,12,16),i.restore()}Xr(i,f,a*1.45,s*.3,(l-6)*a,!1,1,"rgba(20,14,18,.55)"),Wr(f),i.setTransform(1,0,0,1,0,0);return}c=i.createLinearGradient(0,0,0,300),c.addColorStop(0,"#24252b"),c.addColorStop(1,"#17181c"),i.fillStyle=c,i.fillRect(0,0,o,300),i.fillStyle="rgba(255,255,255,.025)";for(let h=0;h<o;h+=16)i.fillRect(h,0,8,l);if(i.save(),i.translate(o*.66,108),i.scale(2.1,2.1),Di.window(i,0,0),i.restore(),i.fillStyle="#121214",i.fillRect(0,l,o,300-l),i.fillStyle="rgba(255,255,255,.06)",i.fillRect(0,l,o,1.5),e==="npc"&&(An.radiator(i,o*.6,l),An.boxes(i,o*.78,l)),e==="vending"&&(i.save(),i.translate(o*.32,l),i.scale(2.6,2.6),An.vending(i,-20,0),i.restore()),e==="locked"&&(i.save(),i.translate(o*.32,l),i.scale(2.2,2.2),An.door(i,-25,0),i.restore()),e==="box"&&(i.save(),i.translate(o*.3,l),i.scale(1.8,1.8),An.crates(i,-32,0),i.restore(),An.radiator(i,o*.7,l)),e==="npc"){let h=Hr(Nc("trader"),"idle",.8);Xr(i,h,a*1.85,s*.3,l*a),Wr(h)}if(e==="dead"){i.fillStyle="rgba(80,4,3,.9)",i.beginPath(),i.ellipse(o*.42,l+3,80,7,0,0,7),i.fill();let h=Hr(Ys(t&&t.wi||0,t&&t.ai||0),"death",2);if(Xr(i,h,a*1.35,s*.64,l*a,!1),Wr(h),t&&t.killer){let f=Hr(al(t.killer),"idle",1.1),u=f.kind==="quad";Xr(i,f,a*(u?2.3:1.55)*(f.cfg.scale||1),s*(u?.8:.84),l*a,!0,1,"rgba(8,6,8,.5)"),Wr(f)}i.setTransform(1,0,0,1,0,0),c=i.createRadialGradient(s*.45,r*.5,r*.15,s*.5,r*.5,s*.7),c.addColorStop(0,"rgba(60,0,0,0)"),c.addColorStop(1,"rgba(60,0,0,.75)"),i.fillStyle=c,i.fillRect(0,0,s,r);return}i.setTransform(1,0,0,1,0,0),c=i.createRadialGradient(s*.45,r*.45,r*.2,s*.5,r*.5,s*.75),c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,.7)"),i.fillStyle=c,i.fillRect(0,0,s,r)};it.drawWeapon=(n,e)=>{let t=n.getContext("2d"),i=n.width,s=n.height;t.clearRect(0,0,i,s);let r=Ys(e,0);r.group.updateMatrixWorld(!0);let a=null;if(r.group.traverse(o=>{o.isMesh&&o.userData.part===(e>0?null:"handN")&&!a&&(a=o)}),e>0&&r.group.traverse(o=>{o.isMesh&&!o.userData.part&&!o.material.userData.glow&&!a&&(a=o)}),a){let o=a.material.map.image,l=a.geometry.parameters.width,c=a.geometry.parameters.height,h=e>0?Math.min(i/c,s/l)*.95:Math.min(i/c,s/l)*.9;t.translate(i/2,s/2),t.rotate(e>0?Math.PI/2:-Math.PI/2),t.drawImage(o,-l*h/2,-c*h/2,l*h,c*h),t.setTransform(1,0,0,1,0,0)}r.group.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()})};it.gallery=(n,e,t,i,s)=>{let r=new Or({canvas:n,antialias:!0});r.setSize(t,i,!1),ef(r),r.setClearColor(2763312,1);let a=new bs,o=new Xn(0,t,0,-i,-500,500);o.position.z=100;let l=new zt(new Dn(t*3,i*3),new Qt({color:4866120}));l.position.set(t/2,-i/2,-60),a.add(l),s=s||Math.ceil(Math.sqrt(e.length*t/i));let c=Math.ceil(e.length/s),h=t/s,f=i/c;return e.forEach((u,d)=>{let p=u.hero?Ys(u.wi,u.ai):al(u.name),y=nl(p);qr(y,u.hero?1:-1);let g=d%s,m=Math.floor(d/s);y.root.position.set(g*h+h/2,-(m*f+f*.92),0),y.root.scale.setScalar((u.s||1)*f/165),a.add(y.root),u.anim&&u.anim!=="idle"&&u.anim!=="walk"?y.ctl.once(u.anim):y.ctl.loop(u.anim||"idle");for(let w=0;w<(u.t||.4);w+=1/60)il(y,1/60)}),r.render(a,o),!0};document.addEventListener("DOMContentLoaded",it.init);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
