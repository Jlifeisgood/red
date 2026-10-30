(()=>{var qh=0,dc=1,Yh=2;var zr=1,Zh=2,Ys=3,Ji=0,Tn=1,kn=2,zn=0,Zs=1,li=2,pc=3,mc=4,Jh=5;var ps=100,Kh=101,Qh=102,jh=103,eu=104,tu=200,nu=201,iu=202,su=203,gc=204,_c=205,ru=206,au=207,ou=208,lu=209,cu=210,hu=211,uu=212,fu=213,du=214,Ya=0,Za=1,Os=2,Bs=3,Ja=4,Ka=5,Qa=6,ja=7,vc=0,pu=1,mu=2,Ln=0,Vr=1,Gr=2,Hr=3,Wr=4,Xr=5,$r=6,qr=7;var xc=300,Ki=301,ms=302,Eo=303,wo=304,Yr=306,ks=1e3,ii=1001,eo=1002,hn=1003,gu=1004;var Zr=1005;var dn=1006,Ao=1007;var ci=1008;var Dn=1009,yc=1010,bc=1011,Js=1012,Co=1013,Kn=1014,Qn=1015,en=1016,Ro=1017,Po=1018,Ks=1020,Mc=35902,Sc=35899,Tc=1021,Ec=1022,Vn=1023,si=1026,Qi=1027,wc=1028,Io=1029,ji=1030,No=1031;var Lo=1033,Jr=33776,Kr=33777,Qr=33778,jr=33779,Do=35840,Uo=35841,Fo=35842,Oo=35843,Bo=36196,ko=37492,zo=37496,Vo=37488,Go=37489,ea=37490,Ho=37491,Wo=37808,Xo=37809,$o=37810,qo=37811,Yo=37812,Zo=37813,Jo=37814,Ko=37815,Qo=37816,jo=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,ll=36284,ta=36285,cl=36286;var Tr=2300,to=2301,$a=2302,ac=2303,oc=2400,lc=2401,cc=2402;var _u=3200;var Ac=0,vu=1,wi="",jt="srgb",Er="srgb-linear",wr="linear",vt="srgb";var qa=7680;var xu=519,yu=512,bu=513,Mu=514,hl=515,Su=516,Tu=517,ul=518,Eu=519,wu=35044;var Cc="300 es",Zn=2e3,Ar=2001;function Hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Au(){let n=Cr("canvas");return n.style.display="block",n}var Mh={},zs=null;function Rc(...n){let e="THREE."+n.shift();zs?zs("log",e,...n):console.log(e,...n)}function Cu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=Cu(n);let e="THREE."+n.shift();if(zs)zs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Cu(n);let e="THREE."+n.shift();if(zs)zs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function hs(...n){let e=n.join(" ");e in Mh||(Mh[e]=!0,We(...n))}function Ru(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Pu={[Ya]:Za,[Os]:Qa,[Ja]:ja,[Bs]:Ka,[Za]:Ya,[Qa]:Os,[ja]:Ja,[Ka]:Bs},ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ol=Math.PI/180,no=180/Math.PI;function na(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function Xf(n,e){return(n%e+e)%e}function Bl(n,e,t){return(1-t)*n+t*e}function vr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ye=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==f||c!==m||h!==g){let p=l*f+c*m+h*g+u*v;p<0&&(f=-f,m=-m,g=-g,v=-v,p=-p);let d=1-o;if(p<.9995){let T=Math.acos(p),C=Math.sin(T);d=Math.sin(d*T)/C,o=Math.sin(o*T)/C,l=l*d+f*o,c=c*d+m*o,h=h*d+g*o,u=u*d+v*o}else{l=l*d+f*o,c=c*d+m*o,h=h*d+g*o,u=u*d+v*o;let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kl=new O,Sh=new ai,Je=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],v=s[0],p=s[3],d=s[6],T=s[1],C=s[4],M=s[7],S=s[2],E=s[5],R=s[8];return r[0]=a*v+o*T+l*S,r[3]=a*p+o*C+l*E,r[6]=a*d+o*M+l*R,r[1]=c*v+h*T+u*S,r[4]=c*p+h*C+u*E,r[7]=c*d+h*M+u*R,r[2]=f*v+m*T+g*S,r[5]=f*p+m*C+g*E,r[8]=f*d+m*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zl=new Je,Th=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $f(){let n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:e,whitePoint:i,transfer:wr,toXYZ:Th,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Th,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}var lt=$f();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ss,io=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=Cr("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qf=0,Vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vl(s[a].image)):r.push(Vl(s[a]))}else r=Vl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?io.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Yf=0,Gl=new O,Sn=class n extends ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,s=ii,r=dn,a=ci,o=Vn,l=Dn,c=n.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=na(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=xc;Sn.DEFAULT_ANISOTROPY=1;var Ot=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,M=(m+1)/2,S=(d+1)/2,E=(h+f)/4,R=(u+v)/4,x=(g+p)/4;return C>M&&C>S?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=E/i,r=R/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=x/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=x/r),this.set(i,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-v)/T,this.z=(f-h)/T,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},so=class extends ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Sn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends so{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Rr=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ft=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,u,f,m,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,m,g,v,p)}set(e,t,i,s,r,a,o,l,c,h,u,f,m,g,v,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Jf)}lookAt(e,t,i){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Fi.crossVectors(i,Pn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Fi.crossVectors(i,Pn)),Fi.normalize(),Sa.crossVectors(Pn,Fi),s[0]=Fi.x,s[4]=Sa.x,s[8]=Pn.x,s[1]=Fi.y,s[5]=Sa.y,s[9]=Pn.y,s[2]=Fi.z,s[6]=Sa.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],T=i[3],C=i[7],M=i[11],S=i[15],E=s[0],R=s[4],x=s[8],w=s[12],N=s[1],U=s[5],z=s[9],G=s[13],D=s[2],V=s[6],K=s[10],Z=s[14],Q=s[3],H=s[7],te=s[11],re=s[15];return r[0]=a*E+o*N+l*D+c*Q,r[4]=a*R+o*U+l*V+c*H,r[8]=a*x+o*z+l*K+c*te,r[12]=a*w+o*G+l*Z+c*re,r[1]=h*E+u*N+f*D+m*Q,r[5]=h*R+u*U+f*V+m*H,r[9]=h*x+u*z+f*K+m*te,r[13]=h*w+u*G+f*Z+m*re,r[2]=g*E+v*N+p*D+d*Q,r[6]=g*R+v*U+p*V+d*H,r[10]=g*x+v*z+p*K+d*te,r[14]=g*w+v*G+p*Z+d*re,r[3]=T*E+C*N+M*D+S*Q,r[7]=T*R+C*U+M*V+S*H,r[11]=T*x+C*z+M*K+S*te,r[15]=T*w+C*G+M*Z+S*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15],T=l*m-c*f,C=o*m-c*u,M=o*f-l*u,S=a*m-c*h,E=a*f-l*h,R=a*u-o*h;return t*(v*T-p*C+d*M)-i*(g*T-p*S+d*E)+s*(g*C-v*S+d*R)-r*(g*M-v*E+p*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],T=t*o-i*a,C=t*l-s*a,M=t*c-r*a,S=i*l-s*o,E=i*c-r*o,R=s*c-r*l,x=h*v-u*g,w=h*p-f*g,N=h*d-m*g,U=u*p-f*v,z=u*d-m*v,G=f*d-m*p,D=T*G-C*z+M*U+S*N-E*w+R*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return e[0]=(o*G-l*z+c*U)*V,e[1]=(s*z-i*G-r*U)*V,e[2]=(v*R-p*E+d*S)*V,e[3]=(f*E-u*R-m*S)*V,e[4]=(l*N-a*G-c*w)*V,e[5]=(t*G-s*N+r*w)*V,e[6]=(p*M-g*R-d*C)*V,e[7]=(h*R-f*M+m*C)*V,e[8]=(a*z-o*N+c*x)*V,e[9]=(i*N-t*z-r*x)*V,e[10]=(g*E-v*M+d*T)*V,e[11]=(u*M-h*E-m*T)*V,e[12]=(o*w-a*U-l*x)*V,e[13]=(t*U-i*w+s*x)*V,e[14]=(v*C-g*S-p*T)*V,e[15]=(h*S-u*C+f*T)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,v=a*h,p=a*u,d=o*u,T=l*c,C=l*h,M=l*u,S=i.x,E=i.y,R=i.z;return s[0]=(1-(v+d))*S,s[1]=(m+M)*S,s[2]=(g-C)*S,s[3]=0,s[4]=(m-M)*E,s[5]=(1-(f+d))*E,s[6]=(p+T)*E,s[7]=0,s[8]=(g+C)*R,s[9]=(p-T)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Xn.copy(this);let c=1/a,h=1/o,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Zn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ar)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Zn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Zn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ar)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ts=new O,Xn=new Ft,Zf=new O(0,0,0),Jf=new O(1,1,1),Fi=new O,Sa=new O,Pn=new O,wh=new Ft,Ah=new ai,Gi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kf=0,Ch=new O,Es=new ai,xi=new Ft,Ta=new O,xr=new O,Qf=new O,jf=new ai,Rh=new O(1,0,0),Ph=new O(0,1,0),Ih=new O(0,0,1),Nh={type:"added"},ed={type:"removed"},ws={type:"childadded",child:null},Hl={type:"childremoved",child:null},Rn=class n extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new Gi,i=new ai,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Je}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(xr,Ta,this.up):xi.lookAt(Ta,xr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(xi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),ws.child=e,this.dispatchEvent(ws),ws.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new O(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},td={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(td)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Xf(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Wl(a,r,e+1/3),this.g=Wl(a,r,e),this.b=Wl(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return lt.workingToColorSpace(xn.copy(this),e),Math.round(ft(xn.r*255,0,255))*65536+Math.round(ft(xn.g*255,0,255))*256+Math.round(ft(xn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=jt){lt.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Ea);let i=Bl(Oi.h,Ea.h,t),s=Bl(Oi.s,Ea.s,t),r=Bl(Oi.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Qe;Qe.NAMES=Iu;var Hs=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new O,yi=new O,Xl=new O,bi=new O,As=new O,Cs=new O,Lh=new O,$l=new O,ql=new O,Yl=new O,Zl=new Ot,Jl=new Ot,Kl=new Ot,Vi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),yi.subVectors(i,t),Xl.subVectors(e,t);let a=$n.dot($n),o=$n.dot(yi),l=$n.dot(Xl),c=yi.dot(yi),h=yi.dot(Xl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Zl.setScalar(0),Jl.setScalar(0),Kl.setScalar(0),Zl.fromBufferAttribute(e,t),Jl.fromBufferAttribute(e,i),Kl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zl,r.x),a.addScaledVector(Jl,r.y),a.addScaledVector(Kl,r.z),a}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),yi.subVectors(e,t),$n.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),$n.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,i),Cs.subVectors(r,i),$l.subVectors(e,i);let l=As.dot($l),c=Cs.dot($l);if(l<=0&&c<=0)return t.copy(i);ql.subVectors(e,s);let h=As.dot(ql),u=Cs.dot(ql);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(As,a);Yl.subVectors(e,r);let m=As.dot(Yl),g=Cs.dot(Yl);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Cs,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Lh.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Lh,o);let d=1/(p+v+f);return a=v*d,o=f*d,t.copy(i).addScaledVector(As,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Aa.subVectors(this.max,yr),Rs.subVectors(e.a,yr),Ps.subVectors(e.b,yr),Is.subVectors(e.c,yr),Bi.subVectors(Ps,Rs),ki.subVectors(Is,Ps),as.subVectors(Rs,Is);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-as.z,as.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,as.z,0,-as.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-as.y,as.x,0];return!Ql(t,Rs,Ps,Is,Aa)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Rs,Ps,Is,Aa))?!1:(Ca.crossVectors(Bi,ki),t=[Ca.x,Ca.y,Ca.z],Ql(t,Rs,Ps,Is,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new O,new O,new O,new O,new O,new O,new O,new O],qn=new O,wa=new Hi,Rs=new O,Ps=new O,Is=new O,Bi=new O,ki=new O,as=new O,yr=new O,Aa=new O,Ca=new O,os=new O;function Ql(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){os.fromArray(n,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=i.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $t=new O,Ra=new Ye,nd=0,cn=class extends ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),s=An(s,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ir=class extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Nr=class extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var fn=class extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}},id=new Hi,br=new O,jl=new O,Wi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):id.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(jl)),this.expandByPoint(br.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sd=0,Bn=new Ft,ec=new Rn,Ns=new O,In=new Hi,Mr=new Hi,ln=new O,Yt=class n extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?Nr:Ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fn(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(In.min,Mr.min),In.expandByPoint(ln),ln.addVectors(In.max,Mr.max),In.expandByPoint(ln)):(In.expandByPoint(Mr.min),In.expandByPoint(Mr.max))}In.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(e,c),ln.add(Ns)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;let c=new O,h=new O,u=new O,f=new Ye,m=new Ye,g=new Ye,v=new O,p=new O;function d(x,w,N){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,N),f.fromBufferAttribute(r,x),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,N),h.sub(c),u.sub(c),m.sub(f),g.sub(f);let U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(U),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(U),o[x].add(v),o[w].add(v),o[N].add(v),l[x].add(p),l[w].add(p),l[N].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,w=T.length;x<w;++x){let N=T[x],U=N.start,z=N.count;for(let G=U,D=U+z;G<D;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let C=new O,M=new O,S=new O,E=new O;function R(x){S.fromBufferAttribute(s,x),E.copy(S);let w=o[x];C.copy(w),C.sub(S.multiplyScalar(S.dot(w))).normalize(),M.crossVectors(E,w);let U=M.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,U)}for(let x=0,w=T.length;x<w;++x){let N=T[x],U=N.start,z=N.count;for(let G=U,D=U+z;G<D;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new cn(f,h,u)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tc=new O,rd=new O,ad=new Je,Yn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=tc.subVectors(i,t).cross(rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ad.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},od=0,Ei=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Zs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Yn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new O,nc=new O,Pa=new O,Ia=new O,Ws=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nc.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(nc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=Ia.dot(this.direction),l=-Ia.dot(Pa),c=Ia.lengthSq(),h=Math.abs(1-a*a),u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nc).addScaledVector(Pa,f),m}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,m=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,d=i.x-a.x,T=i.y-a.y,C=i.z-a.z,M=Math.abs(l),S=Math.abs(c),E=Math.abs(h),R,x,w,N,U,z,G,D,V,K,Z,Q;if(M>=S&&M>=E?(w=l,z=u,V=g,Q=d,l>=0?(R=c,x=h,N=f,U=m,G=v,D=p,K=T,Z=C):(R=h,x=c,N=m,U=f,G=p,D=v,K=C,Z=T)):S>=E?(w=c,z=f,V=v,Q=T,c>=0?(R=h,x=l,N=m,U=u,G=p,D=g,K=C,Z=d):(R=l,x=h,N=u,U=m,G=g,D=p,K=d,Z=C)):(w=h,z=m,V=p,Q=C,h>=0?(R=l,x=c,N=u,U=f,G=g,D=v,K=d,Z=T):(R=c,x=l,N=f,U=u,G=v,D=g,K=T,Z=d)),w===0)return null;let H=R/w,te=x/w,re=1/w,Ve=N-H*z,ke=U-te*z,Tt=G-H*V,at=D-te*V,dt=K-H*Q,J=Z-te*Q,ne=dt*at-J*Tt,Pe=Ve*J-ke*dt,qe=Tt*ke-at*Ve;if(s){if(ne<0||Pe<0||qe<0)return null}else if((ne<0||Pe<0||qe<0)&&(ne>0||Pe>0||qe>0))return null;let xe=ne+Pe+qe;if(xe===0)return null;let it=re*(ne*z+Pe*V+qe*Q);return(xe>0?it<0:it>0)?null:this.at(it/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bt=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dh=new Ft,ls=new Ws,Na=new Wi,Uh=new O,La=new O,Da=new O,Ua=new O,ic=new O,Fa=new O,Fh=new O,Oa=new O,Zt=class extends Rn{constructor(e=new Yt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ic.fromBufferAttribute(u,e),a?Fa.addScaledVector(ic,h):Fa.addScaledVector(ic.sub(t),h))}t.add(Fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Na.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Na,Uh)===null||ls.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Dh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),C=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,S=C;M<S;M+=3){let E=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);s=Ba(this,d,e,i,c,h,u,E,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let T=o.getX(p),C=o.getX(p+1),M=o.getX(p+2);s=Ba(this,a,e,i,c,h,u,T,C,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),C=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,S=C;M<S;M+=3){let E=M,R=M+1,x=M+2;s=Ba(this,d,e,i,c,h,u,E,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let T=p,C=p+1,M=p+2;s=Ba(this,a,e,i,c,h,u,T,C,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ld(n,e,t,i,s,r,a,o){let l;if(e.side===Tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ji,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:n}}function Ba(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,La),n.getVertexPosition(l,Da),n.getVertexPosition(c,Ua);let h=ld(n,e,t,i,La,Da,Ua,Fh);if(h){let u=new O;Vi.getBarycoord(Fh,La,Da,Ua,u),s&&(h.uv=Vi.getInterpolatedAttribute(s,o,l,c,u,new Ye)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,l,c,u,new Ye)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};Vi.getNormal(La,Da,Ua,f.normal),h.face=f,h.barycoord=u}return h}var ao=class extends Sn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=hn,h=hn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cs=new Wi,cd=new Ye(.5,.5),ka=new O,Lr=class{constructor(e=new Yn,t=new Yn,i=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],m=r[7],g=r[8],v=r[9],p=r[10],d=r[11],T=r[12],C=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,m-h,d-g,S-T).normalize(),s[1].setComponents(c+a,m+h,d+g,S+T).normalize(),s[2].setComponents(c+o,m+u,d+v,S+C).normalize(),s[3].setComponents(c-o,m-u,d-v,S-C).normalize(),i)s[4].setComponents(l,f,p,M).normalize(),s[5].setComponents(c-l,m-f,d-p,S-M).normalize();else if(s[4].setComponents(c-l,m-f,d-p,S-M).normalize(),t===Zn)s[5].setComponents(c+l,m+f,d+p,S+M).normalize();else if(t===Ar)s[5].setComponents(l,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);let t=cd.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oo=new O,lo=new O,Oh=new Ft,Sr=new Ws,za=new Wi,sc=new O,Bh=new O,Xs=class extends Rn{constructor(e=new Yt,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)oo.fromBufferAttribute(t,s-1),lo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=oo.distanceTo(lo);e.setAttribute("lineDistance",new fn(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Oh.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(Oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){let d=h.getX(v),T=h.getX(v+1),C=Va(this,e,Sr,l,d,T,v);C&&t.push(C)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(m),d=Va(this,e,Sr,l,v,p,g-1);d&&t.push(d)}}else{let m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){let d=Va(this,e,Sr,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=Va(this,e,Sr,l,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Va(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(oo.fromBufferAttribute(o,s),lo.fromBufferAttribute(o,r),t.distanceSqToSegment(oo,lo,sc,Bh)>i)return;sc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(sc);if(!(c<e.near||c>e.far))return{distance:c,point:Bh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var kh=new O,zh=new O,Dr=class extends Xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)kh.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kh.distanceTo(zh);e.setAttribute("lineDistance",new fn(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xi=class extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vh=new Ft,hc=new Ws,Ga=new Wi,Ha=new O,fs=class extends Rn{constructor(e=new Yt,t=new Xi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Vh.copy(s).invert(),hc.copy(e.ray).applyMatrix4(Vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,v=m;g<v;g++){let p=c.getX(g);Ha.fromBufferAttribute(u,p),Gh(Ha,p,l,s,e,t,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,v=m;g<v;g++)Ha.fromBufferAttribute(u,g),Gh(Ha,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gh(n,e,t,i,s,r,a){let o=hc.distanceSqToPoint(n);if(o<t){let l=new O;hc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ur=class extends Sn{constructor(e=[],t=Ki,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ds=class extends Sn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Sn{constructor(e,t,i=Kn,s,r,a,o=hn,l=hn,c,h=si,u=1){if(h!==si&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},co=class extends $i{constructor(e,t=Kn,i=Ki,s,r,a=hn,o=hn,l,c=si){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fr=class extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$s=class n extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(u,2));function g(v,p,d,T,C,M,S,E,R,x,w){let N=M/R,U=S/x,z=M/2,G=S/2,D=E/2,V=R+1,K=x+1,Z=0,Q=0,H=new O;for(let te=0;te<K;te++){let re=te*U-G;for(let Ve=0;Ve<V;Ve++){let ke=Ve*N-z;H[v]=ke*T,H[p]=re*C,H[d]=D,c.push(H.x,H.y,H.z),H[v]=0,H[p]=0,H[d]=E>0?1:-1,h.push(H.x,H.y,H.z),u.push(Ve/R),u.push(1-te/x),Z+=1}}for(let te=0;te<x;te++)for(let re=0;re<R;re++){let Ve=f+re+V*te,ke=f+re+V*(te+1),Tt=f+(re+1)+V*(te+1),at=f+(re+1)+V*te;l.push(Ve,ke,at),l.push(ke,Tt,at),Q+=6}o.addGroup(m,Q,w),m+=Q,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Jn=class n extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<h;d++){let T=d*f-a;for(let C=0;C<c;C++){let M=C*u-r;g.push(M,-T,0),v.push(0,0,1),p.push(C/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let C=T+c*d,M=T+c*(d+1),S=T+1+c*(d+1),E=T+1+c*d;m.push(C,M,E),m.push(M,S,E)}this.setIndex(m),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Hh(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Hh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=gs(n[t]);for(let s in i)e[s]=i[s]}return e}function Hh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function hd(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Ai={clone:gs,merge:yn},ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qs=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ho=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uo=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ls(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var qi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fo=class extends qi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lc:r=e,o=2*t-i;break;case cc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:a=e,l=2*i-t;break;case cc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),v=g*g,p=v*g,d=-f*p+2*f*v-f*g,T=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,C=(-1-m)*p+(1.5+m)*v+.5*g,M=m*p-m*v;for(let S=0;S!==o;++S)r[S]=d*a[h+S]+T*a[c+S]+C*a[l+S]+M*a[u+S];return r}},po=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},mo=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},go=class extends qi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let f=o*2,m=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],d=m*f+g*2,T=u[d],C=u[d+1],M=e*f+g*2,S=h[M],E=h[M+1],R=pd(i,t,T,S,s);r[g]=Nu(R,v,C,E,p)}return r}};function Nu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function dd(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function pd(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Nu(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=dd(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Nn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),rc(e.settings)&&(i.settings={inTangents:Ls(e.settings.inTangents,Array),outTangents:Ls(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break;case ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;rc(this.settings)&&(Wh(this.settings.inTangents,e),Wh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Wf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$a,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,rc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=to;var Yi=class extends Nn{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Tr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};_o.prototype.ValueTypeName="color";var vo=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};vo.prototype.ValueTypeName="number";var xo=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ai.slerpFlat(r,0,a,c-o,a,c,l);return r}},Or=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Nn{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Tr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};yo.prototype.ValueTypeName="vector";var bo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lu=new bo,Mo=class{constructor(e){this.manager=e!==void 0?e:Lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wa=new O,Xa=new ai,ni=new O,Br=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wa,Xa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wa,Xa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new O,Xh=new Ye,$h=new Ye,Cn=class extends Br{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,$h),t.subVectors($h,Xh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var oi=class extends Br{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ds=-90,Us=1,So=class extends Rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Cn(Ds,Us,e,t);s.layers=this.layers,this.add(s);let r=new Cn(Ds,Us,e,t);r.layers=this.layers,this.add(r);let a=new Cn(Ds,Us,e,t);a.layers=this.layers,this.add(a);let o=new Cn(Ds,Us,e,t);o.layers=this.layers,this.add(o);let l=new Cn(Ds,Us,e,t);l.layers=this.layers,this.add(l);let c=new Cn(Ds,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},To=class extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},kr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=md.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function md(){this._document.hidden===!1&&this.reset()}var Ic="\\[\\]\\.:\\/",gd=new RegExp("["+Ic+"]","g"),Nc="[^"+Ic+"]",_d="[^"+Ic.replace("\\.","")+"]",vd=/((?:WC+[\/:])*)/.source.replace("WC",Nc),xd=/(WCOD+)?/.source.replace("WCOD",_d),yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Md=new RegExp("^"+vd+xd+yd+bd+"$"),Sd=["material","materials","bones","map"],uc=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gd,"")}static parseTrackName(e){let t=Md.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Sd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=uc;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a1=new Float32Array(1);var fc=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Lc(n,e,t,i){let s=Td(i);switch(t){case Tc:return n*e;case wc:return n*e/s.components*s.byteLength;case Io:return n*e/s.components*s.byteLength;case ji:return n*e*2/s.components*s.byteLength;case No:return n*e*2/s.components*s.byteLength;case Ec:return n*e*3/s.components*s.byteLength;case Vn:return n*e*4/s.components*s.byteLength;case Lo:return n*e*4/s.components*s.byteLength;case Jr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qr:case jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Oo:return Math.max(n,16)*Math.max(e,8)/4;case Do:case Fo:return Math.max(n,8)*Math.max(e,8)/2;case Bo:case ko:case Vo:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case ea:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sl:case rl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ta:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Td(n){switch(n){case Dn:case yc:return{byteLength:1,components:1};case Js:case bc:case en:return{byteLength:2,components:1};case Ro:case Po:return{byteLength:2,components:4};case Kn:case Co:case Qn:return{byteLength:4,components:1};case Mc:case Sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wd(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let v=u[m];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jd=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,Ep=`uniform sampler2D dfgLUT;
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
}`,wp=`
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Um=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,$m=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,e0=`#define TOON
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
}`,t0=`uniform float size;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,s0=`uniform vec3 color;
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
}`,r0=`uniform float rotation;
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
}`,a0=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Ad,alphahash_pars_fragment:Cd,alphamap_fragment:Rd,alphamap_pars_fragment:Pd,alphatest_fragment:Id,alphatest_pars_fragment:Nd,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Ud,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:Bd,bsdfs:kd,iridescence_fragment:zd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:$d,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Zd,common:Jd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:jd,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:ap,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:fp,fog_pars_fragment:dp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:vp,lights_toon_fragment:yp,lights_toon_pars_fragment:bp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ep,lights_fragment_begin:wp,lights_fragment_maps:Ap,lights_fragment_end:Cp,lightprobes_pars_fragment:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Lp,map_fragment:Dp,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:kp,morphinstance_vertex:zp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:$p,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:fm,skinbase_vertex:dm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:bm,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:Tm,uv_vertex:Em,worldpos_vertex:wm,background_vert:Am,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Nm,depth_vert:Lm,depth_frag:Dm,distance_vert:Um,distance_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:km,linedashed_frag:zm,meshbasic_vert:Vm,meshbasic_frag:Gm,meshlambert_vert:Hm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:$m,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:Qm,meshtoon_vert:jm,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:a0},Me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ui={basic:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:yn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:yn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:yn([Me.points,Me.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:yn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:yn([Me.common,Me.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:yn([Me.sprite,Me.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:yn([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:yn([Me.lights,Me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ui.physical={uniforms:yn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var fl={r:0,b:0,g:0},o0=new Ft,nf=new Je;nf.set(-1,0,0,0,1,0,0,0,1);function l0(n,e,t,i,s,r){let a=new Qe(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function m(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let M=T.backgroundBlurriness>0;C=e.get(C,M)}return C}function g(T){let C=!1,M=m(T);M===null?p(a,o):M&&M.isColor&&(p(M,1),C=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,C){let M=m(C);M&&(M.isCubeTexture||M.mapping===Yr)?(c===void 0&&(c=new Zt(new $s(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:gs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nf),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==vt,(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Zt(new Jn(2,2),new Wt({name:"BackgroundMaterial",uniforms:gs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,C){T.getRGB(fl,Pc(n)),t.buffers.color.setClear(fl.r,fl.g,fl.b,C,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:g,addToRenderList:v,dispose:d}}function c0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(U,z,G,D,V){let K=!1,Z=u(U,D,G,z);r!==Z&&(r=Z,c(r.object)),K=m(U,D,G,V),K&&g(U,D,G,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(U,z,G,D),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,z,G,D){let V=D.wireframe===!0,K=i[z.id];K===void 0&&(K={},i[z.id]=K);let Z=U.isInstancedMesh===!0?U.id:0,Q=K[Z];Q===void 0&&(Q={},K[Z]=Q);let H=Q[G.id];H===void 0&&(H={},Q[G.id]=H);let te=H[V];return te===void 0&&(te=f(l()),H[V]=te),te}function f(U){let z=[],G=[],D=[];for(let V=0;V<t;V++)z[V]=0,G[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:D,object:U,attributes:{},index:null}}function m(U,z,G,D){let V=r.attributes,K=z.attributes,Z=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let re=V[H],Ve=K[H];if(Ve===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(Ve=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(Ve=U.instanceColor)),re===void 0||re.attribute!==Ve||Ve&&re.data!==Ve.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function g(U,z,G,D){let V={},K=z.attributes,Z=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let re=K[H];re===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));let Ve={};Ve.attribute=re,re&&re.data&&(Ve.data=re.data),V[H]=Ve,Z++}r.attributes=V,r.attributesNum=Z,r.index=D}function v(){let U=r.newAttributes;for(let z=0,G=U.length;z<G;z++)U[z]=0}function p(U){d(U,0)}function d(U,z){let G=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;G[U]=1,D[U]===0&&(n.enableVertexAttribArray(U),D[U]=1),V[U]!==z&&(n.vertexAttribDivisor(U,z),V[U]=z)}function T(){let U=r.newAttributes,z=r.enabledAttributes;for(let G=0,D=z.length;G<D;G++)z[G]!==U[G]&&(n.disableVertexAttribArray(G),z[G]=0)}function C(U,z,G,D,V,K,Z){Z===!0?n.vertexAttribIPointer(U,z,G,V,K):n.vertexAttribPointer(U,z,G,D,V,K)}function M(U,z,G,D){v();let V=D.attributes,K=G.getAttributes(),Z=z.defaultAttributeValues;for(let Q in K){let H=K[Q];if(H.location>=0){let te=V[Q];if(te===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){let re=te.normalized,Ve=te.itemSize,ke=e.get(te);if(ke===void 0)continue;let Tt=ke.buffer,at=ke.type,dt=ke.bytesPerElement,J=at===n.INT||at===n.UNSIGNED_INT||te.gpuType===Co;if(te.isInterleavedBufferAttribute){let ne=te.data,Pe=ne.stride,qe=te.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<H.locationSize;xe++)d(H.location+xe,ne.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<H.locationSize;xe++)p(H.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let xe=0;xe<H.locationSize;xe++)C(H.location+xe,Ve/H.locationSize,at,re,Pe*dt,(qe+Ve/H.locationSize*xe)*dt,J)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)d(H.location+ne,te.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<H.locationSize;ne++)p(H.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let ne=0;ne<H.locationSize;ne++)C(H.location+ne,Ve/H.locationSize,at,re,Ve*dt,Ve/H.locationSize*ne*dt,J)}}else if(Z!==void 0){let re=Z[Q];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(H.location,re);break;case 3:n.vertexAttrib3fv(H.location,re);break;case 4:n.vertexAttrib4fv(H.location,re);break;default:n.vertexAttrib1fv(H.location,re)}}}}T()}function S(){w();for(let U in i){let z=i[U];for(let G in z){let D=z[G];for(let V in D){let K=D[V];for(let Z in K)h(K[Z].object),delete K[Z];delete D[V]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let G in z){let D=z[G];for(let V in D){let K=D[V];for(let Z in K)h(K[Z].object),delete K[Z];delete D[V]}}delete i[U.id]}function R(U){for(let z in i){let G=i[z];for(let D in G){let V=G[D];if(V[U.id]===void 0)continue;let K=V[U.id];for(let Z in K)h(K[Z].object),delete K[Z];delete V[U.id]}}}function x(U){for(let z in i){let G=i[z],D=U.isInstancedMesh===!0?U.id:0,V=G[D];if(V!==void 0){for(let K in V){let Z=V[K];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete V[K]}delete G[D],Object.keys(G).length===0&&delete i[z]}}}function w(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function h0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function u0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Vn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Dn&&R!==Qn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:M,maxSamples:S,samples:E}}function f0(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Yn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:i,C=T*4,M=d.clippingState||null;l.value=M,M=h(g,f,C,m);for(let S=0;S!==C;++S)M[S]=t[S];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let d=m+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let C=0,M=m;C!==v;++C,M+=4)a.copy(u[C]).applyMatrix4(T,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var js=4,d0=6,p0=20,m0=256,ia=new oi,Du=new Qe,Dc=null,Uc=0,Fc=0,Oc=!1,g0=new O,_s=new O,pl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=g0}=r;Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Uc,Fc),this._renderer.xr.enabled=Oc,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:en,format:Vn,colorSpace:Er,depthBuffer:!1},s=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_0(r)),this._blurMaterial=x0(r,e,t),this._ggxMaterial=v0(r,e,t)}return s}_compileMaterial(e){let t=new Zt(new Yt,e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,i,s,r){let l=new Cn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Du),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new $s,new Bt({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,d=!1,T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,d=!0):(p.color.copy(Du),d=!0);for(let C=0;C<6;C++){let M=C%3;M===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):M===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let S=this._cubeSize;Qs(s,M*S,C>2?S:0,S,S),u.setRenderTarget(s),d&&u.render(v,l),u.render(e,l)}u.toneMapping=m,u.autoClear=f,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ki||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ia)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,m=u*f,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-js?i-g+js:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,Qs(r,p,d,3*v,2*v),s.setRenderTarget(r),s.render(o,ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Qs(e,p,d,3*v,2*v),s.setRenderTarget(e),s.render(o,ia)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-js?s-this._lodMax+js:0),f=4*(this._cubeSize-h);Qs(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,ia)}};function _0(n){let e=[],t=[],i=n,s=n-js+1+d0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,m=3,g=new Float32Array(m*f*u),v=new Float32Array(m*f*u);for(let d=0;d<u;d++){let T=d%3*2/3-1,C=d>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(M,m*f*d);for(let S=0;S<f;S++){let E=h[S*2]*2-1,R=h[S*2+1]*2-1;d===0?_s.set(1,R,E):d===1?_s.set(-E,1,-R):d===2?_s.set(-E,R,1):d===3?_s.set(-1,R,-E):d===4?_s.set(-E,-1,R):_s.set(E,R,-1),_s.toArray(v,(d*f+S)*m)}}let p=new Yt;p.setAttribute("position",new cn(g,m)),p.setAttribute("outputDirection",new cn(v,m)),t.push(new Zt(p,null)),i>js&&i--}return{lodMeshes:t,sizeLods:e}}function Uu(n,e,t){let i=new Vt(n,e,t);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function v0(n,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function x0(n,e,t){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:p0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Fu(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ou(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ml=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $s(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:zn});r.uniforms.tEquirect.value=t;let a=new Zt(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=dn),new So(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function y0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===Eo||m===wo)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new ml(g.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let m=f.mapping,g=m===Eo||m===wo,v=m===Ki||m===ms;if(g||v){let p=t.get(f),d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new pl(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let T=f.image;return g&&T&&T.height>0||v&&T&&l(T)?(i===null&&(i=new pl(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,m){return m===Eo?f.mapping=Ki:m===wo&&(f.mapping=ms),f}function l(f){let m=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&m++;return m===g}function c(f){let m=f.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function b0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&hs("WebGLRenderer: "+i+" extension not supported."),s}}}function M0(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(u){let f=[],m=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(m!==null){let T=m.array;v=m.version;for(let C=0,M=T.length;C<M;C+=3){let S=T[C+0],E=T[C+1],R=T[C+2];f.push(S,E,E,R,R,S)}}else{let T=g.array;v=g.version;for(let C=0,M=T.length/3-1;C<M;C+=3){let S=C+0,E=C+1,R=C+2;f.push(S,E,E,R,R,S)}}let p=new(g.count>=65535?Nr:Ir)(f,1);p.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function S0(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,u*a,m),t.update(f,i,m))}function h(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,m);let v=0;for(let p=0;p<m;p++)v+=f[p];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function E0(n,e,t){let i=new WeakMap,s=new Ot;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],C=0;m===!0&&(C=1),g===!0&&(C=2),v===!0&&(C=3);let M=o.attributes.position.count*C,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*S*4*u),R=new Rr(E,M,S,u);R.type=Qn,R.needsUpdate=!0;let x=C*4;for(let N=0;N<u;N++){let U=p[N],z=d[N],G=T[N],D=M*S*4*N;for(let V=0;V<U.count;V++){let K=V*x;m===!0&&(s.fromBufferAttribute(U,V),E[D+K+0]=s.x,E[D+K+1]=s.y,E[D+K+2]=s.z,E[D+K+3]=0),g===!0&&(s.fromBufferAttribute(z,V),E[D+K+4]=s.x,E[D+K+5]=s.y,E[D+K+6]=s.z,E[D+K+7]=0),v===!0&&(s.fromBufferAttribute(G,V),E[D+K+8]=s.x,E[D+K+9]=s.y,E[D+K+10]=s.z,E[D+K+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Ye(M,S)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function w0(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var A0={[Vr]:"LINEAR_TONE_MAPPING",[Gr]:"REINHARD_TONE_MAPPING",[Hr]:"CINEON_TONE_MAPPING",[Wr]:"ACES_FILMIC_TONE_MAPPING",[$r]:"AGX_TONE_MAPPING",[qr]:"NEUTRAL_TONE_MAPPING",[Xr]:"CUSTOM_TONE_MAPPING"};function C0(n,e,t,i,s,r){let a=new Vt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Yt;c.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fn([0,2,0,0,2,0],2));let h=new qs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Zt(c,h),f=new oi(-1,1,1,-1,0,1),m=null,g=null,v=!1,p,d=null,T=[],C=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let E=0;E<T.length;E++){let R=T[E];R.setSize&&R.setSize(M,S)}},this.setEffects=function(M){T=M,C=T.length>0&&T[0].isRenderPass===!0;let S=a.width,E=a.height;T.length>0&&o===null&&(o=new Vt(S,E,{type:en,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(S,E,{type:en,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let x=T[R];x.setSize&&x.setSize(S,E)}},this.begin=function(M,S){if(v||M.toneMapping===Ln&&T.length===0)return!1;if(d=S,S!==null){let E=S.width,R=S.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return C===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=Ln,!0},this.hasRenderPass=function(){return C},this.end=function(M,S){M.toneMapping=p,v=!0;let E=a,R=o;for(let x=0;x<T.length;x++){let w=T[x];w.enabled!==!1&&(w.render(M,R,E,S),w.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(m!==M.outputColorSpace||g!==M.toneMapping){m=M.outputColorSpace,g=M.toneMapping,h.defines={},lt.getTransfer(m)===vt&&(h.defines.SRGB_TRANSFER="");let x=A0[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(d),M.render(u,f),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var sf=new Sn,zc=new $i(1,1),rf=new Rr,af=new ro,of=new Ur,Bu=[],ku=[],zu=new Float32Array(16),Vu=new Float32Array(9),Gu=new Float32Array(4);function tr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function I0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function N0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function L0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Gu.set(i),n.uniformMatrix2fv(this.addr,!1,Gu),nn(t,i)}}function D0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),nn(t,i)}}function U0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),nn(t,i)}}function F0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function O0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function B0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function k0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function z0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function V0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function G0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function H0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function W0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zc.compareFunction=t.isReversedDepthBuffer()?ul:hl,r=zc):r=sf,t.setTexture2D(e||r,s)}function X0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||af,s)}function $0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||of,s)}function q0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rf,s)}function Y0(n){switch(n){case 5126:return R0;case 35664:return P0;case 35665:return I0;case 35666:return N0;case 35674:return L0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return z0;case 36294:return V0;case 36295:return G0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return q0}}function Z0(n,e){n.uniform1fv(this.addr,e)}function J0(n,e){let t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function K0(n,e){let t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Q0(n,e){let t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function j0(n,e){let t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eg(n,e){let t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tg(n,e){let t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ng(n,e){n.uniform1iv(this.addr,e)}function ig(n,e){n.uniform2iv(this.addr,e)}function sg(n,e){n.uniform3iv(this.addr,e)}function rg(n,e){n.uniform4iv(this.addr,e)}function ag(n,e){n.uniform1uiv(this.addr,e)}function og(n,e){n.uniform2uiv(this.addr,e)}function lg(n,e){n.uniform3uiv(this.addr,e)}function cg(n,e){n.uniform4uiv(this.addr,e)}function hg(n,e,t){let i=this.cache,s=e.length,r=_l(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zc:a=sf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ug(n,e,t){let i=this.cache,s=e.length,r=_l(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||af,r[a])}function fg(n,e,t){let i=this.cache,s=e.length,r=_l(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||of,r[a])}function dg(n,e,t){let i=this.cache,s=e.length,r=_l(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rf,r[a])}function pg(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return Q0;case 35674:return j0;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}var Vc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}},Gc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}},Hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function Hu(n,e){n.seq.push(e),n.map[e.id]=e}function mg(n,e,t){let i=n.name,s=i.length;for(Bc.lastIndex=0;;){let r=Bc.exec(i),a=Bc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hu(t,c===void 0?new Vc(o,n,e):new Gc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Hc(o),Hu(t,u)),t=u}}}var er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Wu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var gg=37297,_g=0;function vg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Xu=new Je;function xg(n){lt._getMatrix(Xu,lt.workingColorSpace,n);let e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case wr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $u(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vg(n.getShaderSource(e),o)}else return r}function yg(n,e){let t=xg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var bg={[Vr]:"Linear",[Gr]:"Reinhard",[Hr]:"Cineon",[Wr]:"ACESFilmic",[$r]:"AgX",[qr]:"Neutral",[Xr]:"Custom"};function Mg(n,e){let t=bg[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dl=new O;function Sg(){lt.getLuminanceCoefficients(dl);let n=dl.x.toFixed(4),e=dl.y.toFixed(4),t=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Eg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ra(n){return n!==""}function qu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(n){return n.replace(Ag,Rg)}var Cg=new Map;function Rg(n,e){let t=rt[e];if(t===void 0){let i=Cg.get(e);if(i!==void 0)t=rt[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wc(t)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(Pg,Ig)}function Ig(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Ng={[zr]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function Lg(n){return Ng[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dg={[Ki]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};function Ug(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Dg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fg={[ms]:"ENVMAP_MODE_REFRACTION"};function Og(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bg={[vc]:"ENVMAP_BLENDING_MULTIPLY",[pu]:"ENVMAP_BLENDING_MIX",[mu]:"ENVMAP_BLENDING_ADD"};function kg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[n.combine]||"ENVMAP_BLENDING_NONE"}function zg(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vg(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Lg(t),c=Ug(t),h=Og(t),u=kg(t),f=zg(t),m=Tg(t),g=Eg(r),v=s.createProgram(),p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),d.length>0&&(d+=`
`)):(p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),d=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),Sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=Wc(a),a=qu(a,t),a=Yu(a,t),o=Wc(o),o=qu(o,t),o=Yu(o,t),a=Zu(a),o=Zu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=T+p+a,M=T+d+o,S=Wu(s,s.VERTEX_SHADER,C),E=Wu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,S),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(U){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(E)||"",V=z.trim(),K=G.trim(),Z=D.trim(),Q=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,E);else{let te=$u(s,S,"vertex"),re=$u(s,E,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+te+`
`+re)}else V!==""?We("WebGLProgram: Program Info Log:",V):(K===""||Z==="")&&(H=!1);H&&(U.diagnostics={runnable:Q,programLog:V,vertexShader:{log:K,prefix:p},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(S),s.deleteShader(E),x=new er(s,v),w=wg(s,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,gg)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}var Gg=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $c(e),t.set(e,i)),i}},$c=class{constructor(e){this.id=Gg++,this.code=e,this.usedTimes=0}};function Hg(n){return n===ji||n===ea||n===ta}function Wg(n,e,t,i,s,r){let a=new Pr,o=new Xc,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,w,N,U,z,G){let D=U.fog,V=z.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||K,Z),H=Q&&Q.mapping===Yr?Q.image.height:null,te=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ve=re!==void 0?re.length:0,ke=0;V.morphAttributes.position!==void 0&&(ke=1),V.morphAttributes.normal!==void 0&&(ke=2),V.morphAttributes.color!==void 0&&(ke=3);let Tt,at,dt,J;if(te){let At=ui[te];Tt=At.vertexShader,at=At.fragmentShader}else{Tt=x.vertexShader,at=x.fragmentShader;let At=o.getVertexShaderStage(x),bt=o.getFragmentShaderStage(x);o.update(x,At,bt),dt=At.id,J=bt.id}let ne=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),qe=z.isInstancedMesh===!0,xe=z.isBatchedMesh===!0,it=!!x.map,Ut=!!x.matcap,tt=!!Q,pt=!!x.aoMap,St=!!x.lightMap,je=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,It=!!x.displacementMap,j=!!x.emissiveMap,ge=!!x.metalnessMap,Ee=!!x.roughnessMap,A=x.anisotropy>0,Ke=x.clearcoat>0,pe=x.dispersion>0,b=x.retroreflectivity>0,_=x.iridescence>0,P=x.sheen>0,F=x.transmission>0,$=A&&!!x.anisotropyMap,oe=Ke&&!!x.clearcoatMap,fe=Ke&&!!x.clearcoatNormalMap,Y=Ke&&!!x.clearcoatRoughnessMap,q=_&&!!x.iridescenceMap,me=_&&!!x.iridescenceThicknessMap,Ne=P&&!!x.sheenColorMap,ve=P&&!!x.sheenRoughnessMap,_e=!!x.specularMap,Oe=!!x.specularColorMap,He=!!x.specularIntensityMap,et=F&&!!x.transmissionMap,L=F&&!!x.thicknessMap,ye=!!x.gradientMap,ee=!!x.alphaMap,be=x.alphaTest>0,Ae=!!x.alphaHash,ae=!!x.extensions,ze=Ln;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ze=n.toneMapping);let Fe={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Tt,fragmentShader:at,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:xe,batchingColor:xe&&z._colorsTexture!==null,instancing:qe,instancingColor:qe&&z.instanceColor!==null,instancingMorph:qe&&z.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:it,matcap:Ut,envMap:tt,envMapMode:tt&&Q.mapping,envMapCubeUVHeight:H,aoMap:pt,lightMap:St,bumpMap:je,normalMap:yt,displacementMap:It,emissiveMap:j,normalMapObjectSpace:yt&&x.normalMapType===vu,normalMapTangentSpace:yt&&x.normalMapType===Ac,packedNormalMap:yt&&x.normalMapType===Ac&&Hg(x.normalMap.format),metalnessMap:ge,roughnessMap:Ee,anisotropy:A,anisotropyMap:$,clearcoat:Ke,clearcoatMap:oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Y,dispersion:pe,retroreflection:b,iridescence:_,iridescenceMap:q,iridescenceThicknessMap:me,sheen:P,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:_e,specularColorMap:Oe,specularIntensityMap:He,transmission:F,transmissionMap:et,thicknessMap:L,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Zs&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:be,alphaHash:Ae,combine:x.combine,mapUv:it&&g(x.map.channel),aoMapUv:pt&&g(x.aoMap.channel),lightMapUv:St&&g(x.lightMap.channel),bumpMapUv:je&&g(x.bumpMap.channel),normalMapUv:yt&&g(x.normalMap.channel),displacementMapUv:It&&g(x.displacementMap.channel),emissiveMapUv:j&&g(x.emissiveMap.channel),metalnessMapUv:ge&&g(x.metalnessMap.channel),roughnessMapUv:Ee&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:oe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:_e&&g(x.specularMap.channel),specularColorMapUv:Oe&&g(x.specularColorMap.channel),specularIntensityMapUv:He&&g(x.specularIntensityMap.channel),transmissionMapUv:et&&g(x.transmissionMap.channel),thicknessMapUv:L&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(yt||A),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(it||ee),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:ke,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:it&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:j&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)w.push(N),w.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(d(w,x),T(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function T(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let w=m[x.type],N;if(w){let U=ui[w];N=Ai.clone(U.uniforms)}else N=x.uniforms;return N}function M(x,w){let N=h.get(w);return N!==void 0?++N.usedTimes:(N=new Vg(n,w,x,s),c.push(N),h.set(w,N)),N}function S(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:C,acquireProgram:M,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:R}}function Xg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function $g(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,g,v,p,d){let T=n[e];return T===void 0?(T={id:f.id,object:f,geometry:m,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:d},n[e]=T):(T.id=f.id,T.object=f,T.geometry=m,T.material=g,T.materialVariant=a(f),T.groupOrder=v,T.renderOrder=f.renderOrder,T.z=p,T.group=d),e++,T}function l(f,m,g,v,p,d,T){T.reversedDepth===!0&&(p=-p);let C=o(f,m,g,v,p,d);g.transmission>0?i.push(C):g.transparent===!0?s.push(C):t.push(C)}function c(f,m,g,v,p,d){let T=o(f,m,g,v,p,d);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):t.unshift(T)}function h(f,m){t.length>1&&t.sort(f||$g),i.length>1&&i.sort(m||Ku),s.length>1&&s.sort(m||Ku)}function u(){for(let f=e,m=n.length;f<m;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function qg(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Qu,n.set(i,[a])):s>=r.length?(a=new Qu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Qe};break;case"SpotLight":t={position:new O,direction:new O,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Zg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Jg=0;function Kg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Qg(n){let e=new Yg,t=Zg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new Ft,a=new Ft;function o(c){let h=0,u=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,T=0,C=0,M=0,S=0,E=0,R=0,x=0,w=0,N=0;c.sort(Kg);for(let z=0,G=c.length;z<G;z++){let D=c[z],V=D.color,K=D.intensity,Z=D.distance,Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ji?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=V.r*K,u+=V.g*K,f+=V.b*K;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],K);N++}else if(D.isSunLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,re=t.get(D);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[g]=re,i.sunShadowMap[g]=Q;let Ve=te.getViewportCount();for(let ke=0;ke<Ve;ke++)i.sunShadowMatrix[v+ke]=te.getMatrix(ke),i.sunShadowCascade[v+ke]=te._cascadeData[ke];v+=Ve,g++}i.sun[m]=H,m++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,re=t.get(D);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,i.directionalShadow[p]=re,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=D.shadow.matrix,S++}i.directional[p]=H,p++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(V).multiplyScalar(K),H.distance=Z,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[T]=H;let te=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,te.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[T]=te.matrix,D.castShadow){let re=t.get(D);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,i.spotShadow[T]=re,i.spotShadowMap[T]=Q,R++}T++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(V).multiplyScalar(K),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[C]=H,C++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let te=D.shadow,re=t.get(D);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,i.pointShadow[d]=re,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=D.shadow.matrix,E++}i.point[d]=H,d++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(K),H.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[M]=H,M++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let U=i.hash;(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==d||U.spotLength!==T||U.rectAreaLength!==C||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==R||U.numSpotMaps!==x||U.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=p,i.spot.length=T,i.rectArea.length=C,i.point.length=d,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=N,U.sunLength=m,U.directionalLength=p,U.pointLength=d,U.spotLength=T,U.rectAreaLength=C,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=R,U.numSpotMaps=x,U.numLightProbes=N,i.version=Jg++)}function l(c,h){let u=0,f=0,m=0,g=0,v=0,p=0,d=h.matrixWorldInverse;for(let T=0,C=c.length;T<C;T++){let M=c[T];if(M.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),u++}else if(M.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),f++}else if(M.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(M.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:i}}function ju(n){let e=new Qg(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jg(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ju(n),e.set(s,[o])):r>=a.length?(o=new ju(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`,n_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],i_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ef=new Ft,sa=new O,kc=new O;function s_(n,e,t){let i=new Lr,s=new Ye,r=new Ye,a=new Ot,o=new ho,l=new uo,c={},h=t.maxTextureSize,u={[Ji]:Tn,[Tn]:Ji,[kn]:kn},f=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let d=this.type;this.render=function(E,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Zh&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let w=n.getRenderTarget(),N=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(zn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=d!==this.type;G&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=E.length;D<V;D++){let K=E[D],Z=K.shadow;if(Z===void 0){We("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Q=Z.getFrameExtents();s.multiply(Q),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,Z.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=H,Z.map===null||G===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ys){if(K.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Vt(s.x,s.y,{format:ji,type:en,minFilter:dn,magFilter:dn,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new $i(s.x,s.y,Qn),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=si,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=hn,Z.map.depthTexture.magFilter=hn}else K.isPointLight?(Z.map=new ml(s.x),Z.map.depthTexture=new co(s.x,Kn)):(Z.map=new Vt(s.x,s.y),Z.map.depthTexture=new $i(s.x,s.y,Kn)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=si,this.type===zr?(Z.map.depthTexture.compareFunction=H?ul:hl,Z.map.depthTexture.minFilter=dn,Z.map.depthTexture.magFilter=dn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=hn,Z.map.depthTexture.magFilter=hn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let te=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,x);for(let re=0;re<te;re++){let Ve=Z.getCamera(re);if(K.isPointLight){let ke=Z.camera,Tt=Z.matrix,at=K.distance||ke.far;at!==ke.far&&(ke.far=at,ke.updateProjectionMatrix()),sa.setFromMatrixPosition(K.matrixWorld),ke.position.copy(sa),kc.copy(ke.position),kc.add(n_[re]),ke.up.copy(i_[re]),ke.lookAt(kc),ke.updateMatrixWorld(),Tt.makeTranslation(-sa.x,-sa.y,-sa.z),ef.multiplyMatrices(ke.projectionMatrix,ke.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(ef,ke.coordinateSystem,ke.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,re),n.clear();else{re===0&&(n.setRenderTarget(Z.map),n.clear());let ke=Z.getViewport(re);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),z.viewport(a)}i=Z.getFrustum(re),M(R,x,Ve,K,this.type)}Z.isPointLightShadow!==!0&&this.type===Ys&&T(Z,x),Z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,N,U)};function T(E,R){let x=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new Vt(s.x,s.y,{format:ji,type:en}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,x,f,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,x,m,v,null)}function C(E,R,x,w){let N=null,U=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)N=U;else if(N=x.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=N.uuid,G=R.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let V=D[G];V===void 0&&(V=N.clone(),D[G]=V,R.addEventListener("dispose",S)),N=V}if(N.visible=R.visible,N.wireframe=R.wireframe,w===Ys?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:u[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let z=n.properties.get(N);z.light=x}return N}function M(E,R,x,w,N){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Ys)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let G=e.update(E),D=E.material;if(Array.isArray(D)){let V=G.groups;for(let K=0,Z=V.length;K<Z;K++){let Q=V[K],H=D[Q.materialIndex];if(H&&H.visible){let te=C(E,H,w,N);E.onBeforeShadow(n,E,R,x,G,te,Q),n.renderBufferDirect(x,null,G,te,E,Q),E.onAfterShadow(n,E,R,x,G,te,Q)}}}else if(D.visible){let V=C(E,D,w,N);E.onBeforeShadow(n,E,R,x,G,V,null),n.renderBufferDirect(x,null,G,V,E,null),E.onAfterShadow(n,E,R,x,G,V,null)}}let z=E.children;for(let G=0,D=z.length;G<D;G++)M(z[G],R,x,w,N)}function S(E){E.target.removeEventListener("dispose",S);for(let x in c){let w=c[x],N=E.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function r_(n,e){function t(){let L=!1,ye=new Ot,ee=null,be=new Ot(0,0,0,0);return{setMask:function(Ae){ee!==Ae&&!L&&(n.colorMask(Ae,Ae,Ae,Ae),ee=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,ae,ze,Fe,At){At===!0&&(Ae*=Fe,ae*=Fe,ze*=Fe),ye.set(Ae,ae,ze,Fe),be.equals(ye)===!1&&(n.clearColor(Ae,ae,ze,Fe),be.copy(ye))},reset:function(){L=!1,ee=null,be.set(-1,0,0,0)}}}function i(){let L=!1,ye=!1,ee=null,be=null,Ae=null;return{setReversed:function(ae){if(ye!==ae){let ze=e.get("EXT_clip_control");ae?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ye=ae;let Fe=Ae;Ae=null,this.setClear(Fe)}},getReversed:function(){return ye},setTest:function(ae){ae?ne(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!L&&(n.depthMask(ae),ee=ae)},setFunc:function(ae){if(ye&&(ae=Pu[ae]),be!==ae){switch(ae){case Ya:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case Os:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=ae}},setLocked:function(ae){L=ae},setClear:function(ae){Ae!==ae&&(Ae=ae,ye&&(ae=1-ae),n.clearDepth(ae))},reset:function(){L=!1,ee=null,be=null,Ae=null,ye=!1}}}function s(){let L=!1,ye=null,ee=null,be=null,Ae=null,ae=null,ze=null,Fe=null,At=null;return{setTest:function(bt){L||(bt?ne(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(bt){ye!==bt&&!L&&(n.stencilMask(bt),ye=bt)},setFunc:function(bt,Wn,ei){(ee!==bt||be!==Wn||Ae!==ei)&&(n.stencilFunc(bt,Wn,ei),ee=bt,be=Wn,Ae=ei)},setOp:function(bt,Wn,ei){(ae!==bt||ze!==Wn||Fe!==ei)&&(n.stencilOp(bt,Wn,ei),ae=bt,ze=Wn,Fe=ei)},setLocked:function(bt){L=bt},setClear:function(bt){At!==bt&&(n.clearStencil(bt),At=bt)},reset:function(){L=!1,ye=null,ee=null,be=null,Ae=null,ae=null,ze=null,Fe=null,At=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},m=new WeakMap,g=[],v=null,p=!1,d=null,T=null,C=null,M=null,S=null,E=null,R=null,x=new Qe(0,0,0),w=0,N=!1,U=null,z=null,G=null,D=null,V=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,Q=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=Q>=2);let te=null,re={},Ve=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),Tt=new Ot().fromArray(Ve),at=new Ot().fromArray(ke);function dt(L,ye,ee,be){let Ae=new Uint8Array(4),ae=n.createTexture();n.bindTexture(L,ae),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<ee;ze++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ye+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return ae}let J={};J[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Bs),je(!1),yt(dc),ne(n.CULL_FACE),pt(zn);function ne(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Pe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function qe(L,ye){return f[L]!==ye?(n.bindFramebuffer(L,ye),f[L]=ye,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function xe(L,ye){let ee=g,be=!1;if(L){ee=m.get(ye),ee===void 0&&(ee=[],m.set(ye,ee));let Ae=L.textures;if(ee.length!==Ae.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,ze=Ae.length;ae<ze;ae++)ee[ae]=n.COLOR_ATTACHMENT0+ae;ee.length=Ae.length,be=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,be=!0);be&&n.drawBuffers(ee)}function it(L){return v!==L?(n.useProgram(L),v=L,!0):!1}let Ut={[ps]:n.FUNC_ADD,[Kh]:n.FUNC_SUBTRACT,[Qh]:n.FUNC_REVERSE_SUBTRACT};Ut[jh]=n.MIN,Ut[eu]=n.MAX;let tt={[tu]:n.ZERO,[nu]:n.ONE,[iu]:n.SRC_COLOR,[gc]:n.SRC_ALPHA,[cu]:n.SRC_ALPHA_SATURATE,[ou]:n.DST_COLOR,[ru]:n.DST_ALPHA,[su]:n.ONE_MINUS_SRC_COLOR,[_c]:n.ONE_MINUS_SRC_ALPHA,[lu]:n.ONE_MINUS_DST_COLOR,[au]:n.ONE_MINUS_DST_ALPHA,[hu]:n.CONSTANT_COLOR,[uu]:n.ONE_MINUS_CONSTANT_COLOR,[fu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(L,ye,ee,be,Ae,ae,ze,Fe,At,bt){if(L===zn){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(ne(n.BLEND),p=!0),L!==Jh){if(L!==d||bt!==N){if((T!==ps||S!==ps)&&(n.blendEquation(n.FUNC_ADD),T=ps,S=ps),bt)switch(L){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case li:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pc:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}C=null,M=null,E=null,R=null,x.set(0,0,0),w=0,d=L,N=bt}return}Ae=Ae||ye,ae=ae||ee,ze=ze||be,(ye!==T||Ae!==S)&&(n.blendEquationSeparate(Ut[ye],Ut[Ae]),T=ye,S=Ae),(ee!==C||be!==M||ae!==E||ze!==R)&&(n.blendFuncSeparate(tt[ee],tt[be],tt[ae],tt[ze]),C=ee,M=be,E=ae,R=ze),(Fe.equals(x)===!1||At!==w)&&(n.blendColor(Fe.r,Fe.g,Fe.b,At),x.copy(Fe),w=At),d=L,N=!1}function St(L,ye){L.side===kn?Pe(n.CULL_FACE):ne(n.CULL_FACE);let ee=L.side===Tn;ye&&(ee=!ee),je(ee),L.blending===Zs&&L.transparent===!1?pt(zn):pt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let be=L.stencilWrite;o.setTest(be),be&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),j(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){U!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),U=L)}function yt(L){L!==qh?(ne(n.CULL_FACE),L!==z&&(L===dc?n.cullFace(n.BACK):L===Yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),z=L}function It(L){L!==G&&(Z&&n.lineWidth(L),G=L)}function j(L,ye,ee){L?(ne(n.POLYGON_OFFSET_FILL),(D!==ye||V!==ee)&&(D=ye,V=ee,a.getReversed()&&(ye=-ye),n.polygonOffset(ye,ee))):Pe(n.POLYGON_OFFSET_FILL)}function ge(L){L?ne(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function Ee(L){L===void 0&&(L=n.TEXTURE0+K-1),te!==L&&(n.activeTexture(L),te=L)}function A(L,ye,ee){ee===void 0&&(te===null?ee=n.TEXTURE0+K-1:ee=te);let be=re[ee];be===void 0&&(be={type:void 0,texture:void 0},re[ee]=be),(be.type!==L||be.texture!==ye)&&(te!==ee&&(n.activeTexture(ee),te=ee),n.bindTexture(L,ye||J[L]),be.type=L,be.texture=ye)}function Ke(){let L=re[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{n.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function _(){try{n.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function P(){try{n.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function F(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function oe(){try{n.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function fe(){try{n.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Y(){try{n.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function q(){try{n.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function me(L){return u[L]!==void 0?u[L]:n.getParameter(L)}function Ne(L,ye){u[L]!==ye&&(n.pixelStorei(L,ye),u[L]=ye)}function ve(L){Tt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Tt.copy(L))}function _e(L){at.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function Oe(L,ye){let ee=c.get(ye);ee===void 0&&(ee=new WeakMap,c.set(ye,ee));let be=ee.get(L);be===void 0&&(be=n.getUniformBlockIndex(ye,L.name),ee.set(L,be))}function He(L,ye){let be=c.get(ye).get(L);l.get(ye)!==be&&(n.uniformBlockBinding(ye,be,L.__bindingPointIndex),l.set(ye,be))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,re={},f={},m=new WeakMap,g=[],v=null,p=!1,d=null,T=null,C=null,M=null,S=null,E=null,R=null,x=new Qe(0,0,0),w=0,N=!1,U=null,z=null,G=null,D=null,V=null,Tt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Pe,bindFramebuffer:qe,drawBuffers:xe,useProgram:it,setBlending:pt,setMaterial:St,setFlipSided:je,setCullFace:yt,setLineWidth:It,setPolygonOffset:j,setScissorTest:ge,activeTexture:Ee,bindTexture:A,unbindTexture:Ke,compressedTexImage2D:pe,compressedTexImage3D:b,texImage2D:Y,texImage3D:q,pixelStorei:Ne,getParameter:me,updateUBOMapping:Oe,uniformBlockBinding:He,texStorage2D:oe,texStorage3D:fe,texSubImage2D:_,texSubImage3D:P,compressedTexSubImage2D:F,compressedTexSubImage3D:$,scissor:ve,viewport:_e,reset:et}}function a_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,h=new WeakMap,u=new Set,f,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return g?new OffscreenCanvas(b,_):Cr("canvas")}function p(b,_,P){let F=1,$=pe(b);if(($.width>P||$.height>P)&&(F=P/Math.max($.width,$.height)),F<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let oe=Math.floor(F*$.width),fe=Math.floor(F*$.height);f===void 0&&(f=v(oe,fe));let Y=_?v(oe,fe):f;return Y.width=oe,Y.height=fe,Y.getContext("2d").drawImage(b,0,0,oe,fe),We("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+fe+")."),Y}else return"data"in b&&We("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function d(b){return b.generateMipmaps}function T(b){n.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,_,P,F,$,oe=!1){if(b!==null){if(n[b]!==void 0)return n[b];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe;F&&(fe=e.get("EXT_texture_norm16"),fe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(P===n.FLOAT&&(Y=n.R32F),P===n.HALF_FLOAT&&(Y=n.R16F),P===n.UNSIGNED_BYTE&&(Y=n.R8),P===n.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),P===n.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.R8UI),P===n.UNSIGNED_SHORT&&(Y=n.R16UI),P===n.UNSIGNED_INT&&(Y=n.R32UI),P===n.BYTE&&(Y=n.R8I),P===n.SHORT&&(Y=n.R16I),P===n.INT&&(Y=n.R32I)),_===n.RG&&(P===n.FLOAT&&(Y=n.RG32F),P===n.HALF_FLOAT&&(Y=n.RG16F),P===n.UNSIGNED_BYTE&&(Y=n.RG8),P===n.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),P===n.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.RG8UI),P===n.UNSIGNED_SHORT&&(Y=n.RG16UI),P===n.UNSIGNED_INT&&(Y=n.RG32UI),P===n.BYTE&&(Y=n.RG8I),P===n.SHORT&&(Y=n.RG16I),P===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),P===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),P===n.UNSIGNED_INT&&(Y=n.RGB32UI),P===n.BYTE&&(Y=n.RGB8I),P===n.SHORT&&(Y=n.RGB16I),P===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),P===n.UNSIGNED_INT&&(Y=n.RGBA32UI),P===n.BYTE&&(Y=n.RGBA8I),P===n.SHORT&&(Y=n.RGBA16I),P===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(P===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),P===n.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),P===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let q=oe?wr:lt.getTransfer($);P===n.FLOAT&&(Y=n.RGBA32F),P===n.HALF_FLOAT&&(Y=n.RGBA16F),P===n.UNSIGNED_BYTE&&(Y=q===vt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),P===n.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),P===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(b,_){let P;return b?_===null||_===Kn||_===Ks?P=n.DEPTH24_STENCIL8:_===Qn?P=n.DEPTH32F_STENCIL8:_===Js&&(P=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kn||_===Ks?P=n.DEPTH_COMPONENT24:_===Qn?P=n.DEPTH_COMPONENT32F:_===Js&&(P=n.DEPTH_COMPONENT16),P}function E(b,_){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){let _=b.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function x(b){let _=b.target;_.removeEventListener("dispose",x),U(_)}function w(b){let _=i.get(b);if(_.__webglInit===void 0)return;let P=b.source,F=m.get(P);if(F){let $=F[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&N(b),Object.keys(F).length===0&&m.delete(P)}i.remove(b)}function N(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let P=b.source,F=m.get(P);delete F[_.__cacheKey],a.memory.textures--}function U(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let $=0;$<_.__webglFramebuffer[F].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[F][$]);else n.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)n.deleteFramebuffer(_.__webglFramebuffer[F]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let P=b.textures;for(let F=0,$=P.length;F<$;F++){let oe=i.get(P[F]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(P[F])}i.remove(b)}let z=0;function G(){z=0}function D(){return z}function V(b){z=b}function K(){let b=z;return b>=s.maxTextures&&We("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,b}function Z(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Q(b,_){let P=i.get(b);if(b.isVideoTexture&&A(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&P.__version!==b.version){let F=b.image;if(F===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(P,b,_);return}}else b.isExternalTexture&&(P.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function H(b,_){let P=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){Pe(P,b,_);return}else b.isExternalTexture&&(P.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function te(b,_){let P=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){Pe(P,b,_);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function re(b,_){let P=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&P.__version!==b.version){qe(P,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}let Ve={[ks]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},ke={[hn]:n.NEAREST,[gu]:n.NEAREST_MIPMAP_NEAREST,[Zr]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Ao]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},Tt={[yu]:n.NEVER,[Eu]:n.ALWAYS,[bu]:n.LESS,[hl]:n.LEQUAL,[Mu]:n.EQUAL,[ul]:n.GEQUAL,[Su]:n.GREATER,[Tu]:n.NOTEQUAL};function at(b,_){if(_.type===Qn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===Ao||_.magFilter===Zr||_.magFilter===ci||_.minFilter===dn||_.minFilter===Ao||_.minFilter===Zr||_.minFilter===ci)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Ve[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Ve[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Ve[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ke[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ke[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==Zr&&_.minFilter!==ci||_.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function dt(b,_){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));let F=_.source,$=m.get(F);$===void 0&&($={},m.set(F,$));let oe=Z(_);if(oe!==b.__cacheKey){$[oe]===void 0&&($[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),$[oe].usedTimes++;let fe=$[b.__cacheKey];fe!==void 0&&($[b.__cacheKey].usedTimes--,fe.usedTimes===0&&N(_)),b.__cacheKey=oe,b.__webglTexture=$[oe].texture}return P}function J(b,_,P){return Math.floor(Math.floor(b/P)/_)}function ne(b,_,P,F){let oe=b.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,P,F,_.data);else{oe.sort((Ne,ve)=>Ne.start-ve.start);let fe=0;for(let Ne=1;Ne<oe.length;Ne++){let ve=oe[fe],_e=oe[Ne],Oe=ve.start+ve.count,He=J(_e.start,_.width,4),et=J(ve.start,_.width,4);_e.start<=Oe+1&&He===et&&J(_e.start+_e.count-1,_.width,4)===He?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++fe,oe[fe]=_e)}oe.length=fe+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),q=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,ve=oe.length;Ne<ve;Ne++){let _e=oe[Ne],Oe=Math.floor(_e.start/4),He=Math.ceil(_e.count/4),et=Oe%_.width,L=Math.floor(Oe/_.width),ye=He,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,et,L,ye,ee,P,F,_.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,q),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Pe(b,_,P){let F=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=n.TEXTURE_3D);let $=dt(b,_),oe=_.source;t.bindTexture(F,b.__webglTexture,n.TEXTURE0+P);let fe=i.get(oe);if(oe.version!==fe.__version||$===!0){if(t.activeTexture(n.TEXTURE0+P),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ee=lt.getPrimaries(lt.workingColorSpace),be=_.colorSpace===wi?null:lt.getPrimaries(_.colorSpace),Ae=_.colorSpace===wi||ee===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let q=p(_.image,!1,s.maxTextureSize);q=Ke(_,q);let me=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type),ve=M(_.internalFormat,me,Ne,_.normalized,_.colorSpace,_.isVideoTexture);at(F,_);let _e,Oe=_.mipmaps,He=_.isVideoTexture!==!0,et=fe.__version===void 0||$===!0,L=oe.dataReady,ye=E(_,q);if(_.isDepthTexture)ve=S(_.format===Qi,_.type),et&&(He?t.texStorage2D(n.TEXTURE_2D,1,ve,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,ve,q.width,q.height,0,me,Ne,null));else if(_.isDataTexture)if(Oe.length>0){He&&et&&t.texStorage2D(n.TEXTURE_2D,ye,ve,Oe[0].width,Oe[0].height);for(let ee=0,be=Oe.length;ee<be;ee++)_e=Oe[ee],He?L&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,me,Ne,_e.data):t.texImage2D(n.TEXTURE_2D,ee,ve,_e.width,_e.height,0,me,Ne,_e.data);_.generateMipmaps=!1}else He?(et&&t.texStorage2D(n.TEXTURE_2D,ye,ve,q.width,q.height),L&&ne(_,q,me,Ne)):t.texImage2D(n.TEXTURE_2D,0,ve,q.width,q.height,0,me,Ne,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,ve,Oe[0].width,Oe[0].height,q.depth);for(let ee=0,be=Oe.length;ee<be;ee++)if(_e=Oe[ee],_.format!==Vn)if(me!==null)if(He){if(L)if(_.layerUpdates.size>0){let Ae=Lc(_e.width,_e.height,_.format,_.type);for(let ae of _.layerUpdates){let ze=_e.data.subarray(ae*Ae/_e.data.BYTES_PER_ELEMENT,(ae+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ae,_e.width,_e.height,1,me,ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,q.depth,me,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ve,_e.width,_e.height,q.depth,0,_e.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,q.depth,me,Ne,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ve,_e.width,_e.height,q.depth,0,me,Ne,_e.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{He&&et&&t.texStorage2D(n.TEXTURE_2D,ye,ve,Oe[0].width,Oe[0].height);for(let ee=0,be=Oe.length;ee<be;ee++)_e=Oe[ee],_.format!==Vn?me!==null?He?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ve,_e.width,_e.height,0,_e.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?L&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,me,Ne,_e.data):t.texImage2D(n.TEXTURE_2D,ee,ve,_e.width,_e.height,0,me,Ne,_e.data)}else if(_.isDataArrayTexture)if(He){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,ve,q.width,q.height,q.depth),L)if(_.layerUpdates.size>0){let ee=Lc(q.width,q.height,_.format,_.type);for(let be of _.layerUpdates){let Ae=q.data.subarray(be*ee/q.data.BYTES_PER_ELEMENT,(be+1)*ee/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,be,q.width,q.height,1,me,Ne,Ae)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,me,Ne,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,q.width,q.height,q.depth,0,me,Ne,q.data);else if(_.isData3DTexture)He?(et&&t.texStorage3D(n.TEXTURE_3D,ye,ve,q.width,q.height,q.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,me,Ne,q.data)):t.texImage3D(n.TEXTURE_3D,0,ve,q.width,q.height,q.depth,0,me,Ne,q.data);else if(_.isFramebufferTexture){if(et)if(He)t.texStorage2D(n.TEXTURE_2D,ye,ve,q.width,q.height);else{let ee=q.width,be=q.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,ve,ee,be,0,me,Ne,null),ee>>=1,be>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),q.parentNode!==ee){ee.appendChild(q),u.add(_),ee.onpaint=be=>{let Ae=be.changedElements;for(let ae of u)Ae.includes(ae.image)&&(ae.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,q);else{let Ae=n.RGBA,ae=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ae,ae,ze,q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(He&&et){let ee=pe(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ye,ve,ee.width,ee.height)}for(let ee=0,be=Oe.length;ee<be;ee++)_e=Oe[ee],He?L&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,me,Ne,_e):t.texImage2D(n.TEXTURE_2D,ee,ve,me,Ne,_e);_.generateMipmaps=!1}else if(He){if(et){let ee=pe(q);t.texStorage2D(n.TEXTURE_2D,ye,ve,ee.width,ee.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ne,q)}else t.texImage2D(n.TEXTURE_2D,0,ve,me,Ne,q);d(_)&&T(F),fe.__version=oe.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function qe(b,_,P){if(_.image.length!==6)return;let F=dt(b,_),$=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+P);let oe=i.get($);if($.version!==oe.__version||F===!0){t.activeTexture(n.TEXTURE0+P);let fe=lt.getPrimaries(lt.workingColorSpace),Y=_.colorSpace===wi?null:lt.getPrimaries(_.colorSpace),q=_.colorSpace===wi||fe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let me=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!me&&!Ne?ve[ae]=p(_.image[ae],!0,s.maxCubemapSize):ve[ae]=Ne?_.image[ae].image:_.image[ae],ve[ae]=Ke(_,ve[ae]);let _e=ve[0],Oe=r.convert(_.format,_.colorSpace),He=r.convert(_.type),et=M(_.internalFormat,Oe,He,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ye=oe.__version===void 0||F===!0,ee=$.dataReady,be=E(_,_e);at(n.TEXTURE_CUBE_MAP,_);let Ae;if(me){L&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,et,_e.width,_e.height);for(let ae=0;ae<6;ae++){Ae=ve[ae].mipmaps;for(let ze=0;ze<Ae.length;ze++){let Fe=Ae[ze];_.format!==Vn?Oe!==null?L?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,0,0,Fe.width,Fe.height,Oe,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,et,Fe.width,Fe.height,0,Fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,0,0,Fe.width,Fe.height,Oe,He,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,et,Fe.width,Fe.height,0,Oe,He,Fe.data)}}}else{if(Ae=_.mipmaps,L&&ye){Ae.length>0&&be++;let ae=pe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,et,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ne){L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Oe,He,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,et,ve[ae].width,ve[ae].height,0,Oe,He,ve[ae].data);for(let ze=0;ze<Ae.length;ze++){let At=Ae[ze].image[ae].image;L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,0,0,At.width,At.height,Oe,He,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,et,At.width,At.height,0,Oe,He,At.data)}}else{L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,He,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,et,Oe,He,ve[ae]);for(let ze=0;ze<Ae.length;ze++){let Fe=Ae[ze];L?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,0,0,Oe,He,Fe.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,et,Oe,He,Fe.image[ae])}}}d(_)&&T(n.TEXTURE_CUBE_MAP),oe.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function xe(b,_,P,F,$,oe){let fe=r.convert(P.format,P.colorSpace),Y=r.convert(P.type),q=M(P.internalFormat,fe,Y,P.normalized,P.colorSpace),me=i.get(_),Ne=i.get(P);if(Ne.__renderTarget=_,!me.__hasExternalTextures){let ve=Math.max(1,_.width>>oe),_e=Math.max(1,_.height>>oe);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,oe,q,ve,_e,_.depth,0,fe,Y,null):t.texImage2D($,oe,q,ve,_e,0,fe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Ee(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,$,Ne.__webglTexture,0,ge(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,$,Ne.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(b,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let F=_.depthTexture,$=F&&F.isDepthTexture?F.type:null,oe=S(_.stencilBuffer,$),fe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(_),oe,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(_),oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,b)}else{let F=_.textures;for(let $=0;$<F.length;$++){let oe=F[$],fe=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),q=M(oe.internalFormat,fe,Y,oe.normalized,oe.colorSpace);Ee(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(_),q,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(b,_,P){let F=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),at(n.TEXTURE_CUBE_MAP,_.depthTexture);let me=r.convert(_.depthTexture.format),Ne=r.convert(_.depthTexture.type),ve;_.depthTexture.format===si?ve=n.DEPTH_COMPONENT24:_.depthTexture.format===Qi&&(ve=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,_.width,_.height,0,me,Ne,null)}}else Q(_.depthTexture,0);let oe=$.__webglTexture,fe=ge(_),Y=F?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,q=_.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===si)Ee(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Y,oe,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,q,Y,oe,0);else if(_.depthTexture.format===Qi)Ee(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Y,oe,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,q,Y,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(b){let _=i.get(b),P=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let F=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),F){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,F.removeEventListener("dispose",$)};F.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=F}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(P)for(let F=0;F<6;F++)Ut(_.__webglFramebuffer[F],b,F);else{let F=b.texture.mipmaps;F&&F.length>0?Ut(_.__webglFramebuffer[0],b,0):Ut(_.__webglFramebuffer,b,0)}else if(P){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]===void 0)_.__webglDepthbuffer[F]=n.createRenderbuffer(),it(_.__webglDepthbuffer[F],b,!1);else{let $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,oe)}}else{let F=b.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),it(_.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(b,_,P){let F=i.get(b);_!==void 0&&xe(F.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&tt(b)}function St(b){let _=b.texture,P=i.get(b),F=i.get(_);b.addEventListener("dispose",x);let $=b.textures,oe=b.isWebGLCubeRenderTarget===!0,fe=$.length>1;if(fe||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=_.version,a.memory.textures++),oe){P.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[Y]=[];for(let q=0;q<_.mipmaps.length;q++)P.__webglFramebuffer[Y][q]=n.createFramebuffer()}else P.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)P.__webglFramebuffer[Y]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Y=0,q=$.length;Y<q;Y++){let me=i.get($[Y]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&Ee(b)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let q=$[Y];P.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[Y]);let me=r.convert(q.format,q.colorSpace),Ne=r.convert(q.type),ve=M(q.internalFormat,me,Ne,q.normalized,q.colorSpace,b.isXRRenderTarget===!0),_e=ge(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,P.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),it(P.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),at(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)xe(P.__webglFramebuffer[Y][q],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,q);else xe(P.__webglFramebuffer[Y],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(_)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Y=0,q=$.length;Y<q;Y++){let me=$[Y],Ne=i.get(me),ve=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ne.__webglTexture),at(ve,me),xe(P.__webglFramebuffer,b,me,n.COLOR_ATTACHMENT0+Y,ve,0),d(me)&&T(ve)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,F.__webglTexture),at(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)xe(P.__webglFramebuffer[q],b,_,n.COLOR_ATTACHMENT0,Y,q);else xe(P.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,Y,0);d(_)&&T(Y),t.unbindTexture()}b.depthBuffer&&tt(b)}function je(b){let _=b.textures;for(let P=0,F=_.length;P<F;P++){let $=_[P];if(d($)){let oe=C(b),fe=i.get($).__webglTexture;t.bindTexture(oe,fe),T(oe),t.unbindTexture()}}}let yt=[],It=[];function j(b){if(b.samples>0){if(Ee(b)===!1){let _=b.textures,P=b.width,F=b.height,$=n.COLOR_BUFFER_BIT,oe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(b),Y=_.length>1;if(Y)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let q=b.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<_.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,P,F,0,0,P,F,$,n.NEAREST),l===!0&&(yt.length=0,It.length=0,yt.push(n.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(yt.push(oe),It.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ge(b){return Math.min(s.maxSamples,b.samples)}function Ee(b){let _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function A(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Ke(b,_){let P=b.colorSpace,F=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==Er&&P!==wi&&(lt.getTransfer(P)===vt?(F!==Vn||$!==Dn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",P)),_}function pe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=re,this.rebindTextures=pt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o_(n,e){function t(i,s=wi){let r,a=lt.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Ro)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Po)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yc)return n.BYTE;if(i===bc)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Co)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===en)return n.HALF_FLOAT;if(i===Tc)return n.ALPHA;if(i===Ec)return n.RGB;if(i===Vn)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===wc)return n.RED;if(i===Io)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===No)return n.RG_INTEGER;if(i===Lo)return n.RGBA_INTEGER;if(i===Jr||i===Kr||i===Qr||i===jr)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Do||i===Uo||i===Fo||i===Oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bo||i===ko||i===zo||i===Vo||i===Go||i===ea||i===Ho)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bo||i===ko)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vo)return r.COMPRESSED_R11_EAC;if(i===Go)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return r.COMPRESSED_RG11_EAC;if(i===Ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wo||i===Xo||i===$o||i===qo||i===Yo||i===Zo||i===Jo||i===Ko||i===Qo||i===jo||i===el||i===tl||i===nl||i===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$o)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===el)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sl||i===rl||i===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sl)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ol||i===ll||i===ta||i===cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
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

}`,qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Wt({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yc=class extends ri{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,v=typeof XRWebGLBinding<"u",p=new qc,d={},T=t.getContextAttributes(),C=null,M=null,S=[],E=[],R=new Ye,x=null,w=null,N=new Cn;N.viewport=new Ot;let U=new Cn;U.viewport=new Ot;let z=[N,U],G=new To,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=S[J];return ne===void 0&&(ne=new Gs,S[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=S[J];return ne===void 0&&(ne=new Gs,S[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=S[J];return ne===void 0&&(ne=new Gs,S[J]=ne),ne.getHandSpace()};function K(J){let ne=E.indexOf(J.inputSource);if(ne===-1)return;let Pe=S[ne];Pe!==void 0&&(Pe.update(J.inputSource,J.frame,c||a),Pe.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<S.length;J++){let ne=E[J];ne!==null&&(E[J]=null,S[J].disconnect(ne))}D=null,V=null,p.reset();for(let J in d)delete d[J];if(e.setRenderTarget(C),m=null,f=null,u=null,s=null,M=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,qe=null,xe=null;T.depth&&(xe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=T.stencil?Qi:si,qe=T.stencil?Ks:Kn);let it={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(it),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Vt(f.textureWidth,f.textureHeight,{format:Vn,type:Dn,depthTexture:new $i(f.textureWidth,f.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Pe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Vt(m.framebufferWidth,m.framebufferHeight,{format:Vn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(J){for(let ne=0;ne<J.removed.length;ne++){let Pe=J.removed[ne],qe=E.indexOf(Pe);qe>=0&&(E[qe]=null,S[qe].disconnect(Pe))}for(let ne=0;ne<J.added.length;ne++){let Pe=J.added[ne],qe=E.indexOf(Pe);if(qe===-1){for(let it=0;it<S.length;it++)if(it>=E.length){E.push(Pe),qe=it;break}else if(E[it]===null){E[it]=Pe,qe=it;break}if(qe===-1)break}let xe=S[qe];xe&&xe.connect(Pe)}}let H=new O,te=new O;function re(J,ne,Pe){H.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(Pe.matrixWorld);let qe=H.distanceTo(te),xe=ne.projectionMatrix.elements,it=Pe.projectionMatrix.elements,Ut=xe[14]/(xe[10]-1),tt=xe[14]/(xe[10]+1),pt=(xe[9]+1)/xe[5],St=(xe[9]-1)/xe[5],je=(xe[8]-1)/xe[0],yt=(it[8]+1)/it[0],It=Ut*je,j=Ut*yt,ge=qe/(-je+yt),Ee=ge*-je;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ee),J.translateZ(ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xe[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let A=Ut+ge,Ke=tt+ge,pe=It-Ee,b=j+(qe-Ee),_=pt*tt/Ke*A,P=St*tt/Ke*A;J.projectionMatrix.makePerspective(pe,b,_,P,A,Ke),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ve(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ne=J.near,Pe=J.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(Pe=p.depthFar)),G.near=U.near=N.near=ne,G.far=U.far=N.far=Pe,(D!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,V=G.far),G.layers.mask=J.layers.mask|6,N.layers.mask=G.layers.mask&-5,U.layers.mask=G.layers.mask&-3;let qe=J.parent,xe=G.cameras;Ve(G,qe);for(let it=0;it<xe.length;it++)Ve(xe[it],qe);xe.length===2?re(G,N,U):G.projectionMatrix.copy(N.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),ke(J,G,qe)};function ke(J,ne,Pe){Pe===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(Pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=no*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(J){return d[J]};let Tt=null;function at(J,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){let Pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let qe=!1;Pe.length!==G.cameras.length&&(G.cameras.length=0,qe=!0);for(let tt=0;tt<Pe.length;tt++){let pt=Pe[tt],St=null;if(m!==null)St=m.getViewport(pt);else{let yt=u.getViewSubImage(f,pt);St=yt.viewport,tt===0&&(e.setRenderTargetTextures(M,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(M))}let je=z[tt];je===void 0&&(je=new Cn,je.layers.enable(tt),je.viewport=new Ot,z[tt]=je),je.matrix.fromArray(pt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(pt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(St.x,St.y,St.width,St.height),tt===0&&(G.matrix.copy(je.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),qe===!0&&G.cameras.push(je)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let tt=u.getDepthInformation(Pe[0]);tt&&tt.isValid&&tt.texture&&p.init(tt,s.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let tt=0;tt<Pe.length;tt++){let pt=Pe[tt].camera;if(pt){let St=d[pt];St||(St=new Fr,d[pt]=St);let je=u.getCameraImage(pt);St.sourceTexture=je}}}}for(let Pe=0;Pe<S.length;Pe++){let qe=E[Pe],xe=S[Pe];qe!==null&&xe!==void 0&&xe.update(qe,ne,c||a)}Tt&&Tt(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let dt=new tf;dt.setAnimationLoop(at),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}},h_=new Ft,lf=new Je;lf.set(-1,0,0,0,1,0,0,0,1);function u_(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Pc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,T,C,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,T,C):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Tn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Tn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let T=e.get(d),C=T.envMap,M=T.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(lf),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,C){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=C*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){let T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function f_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let E=S.program;i.uniformBlockBinding(M,E)}function c(M,S){let E=s[M.id];E===void 0&&(p(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",T));let R=S.program;i.updateUBOMapping(M,R);let x=e.render.frame;r[M.id]!==x&&(f(M),r[M.id]=x)}function h(M){let S=u();M.__bindingPointIndex=S;let E=n.createBuffer(),R=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let S=s[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,w=E.length;x<w;x++){let N=E[x];if(Array.isArray(N))for(let U=0,z=N.length;U<z;U++)m(N[U],x,U,R);else m(N,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,S,E,R){if(v(M,S,E,R)===!0){let x=M.__offset,w=M.value;if(Array.isArray(w)){let N=0;for(let U=0;U<w.length;U++){let z=w[U],G=d(z);g(z,M.__data,N),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function g(M,S,E){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,E)}function v(M,S,E,R){let x=M.value,w=S+"_"+E;if(R[w]===void 0)return typeof x=="number"||typeof x=="boolean"?R[w]=x:ArrayBuffer.isView(x)?R[w]=x.slice():R[w]=x.clone(),!0;{let N=R[w];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return R[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function p(M){let S=M.uniforms,E=0,R=16;for(let w=0,N=S.length;w<N;w++){let U=Array.isArray(S[w])?S[w]:[S[w]];for(let z=0,G=U.length;z<G;z++){let D=U[z],V=Array.isArray(D.value)?D.value:[D.value];for(let K=0,Z=V.length;K<Z;K++){let Q=V[K],H=d(Q),te=E%R,re=te%H.boundary,Ve=te+re;E+=re,Ve!==0&&R-Ve<H.storage&&(E+=R-Ve),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=H.storage}}}let x=E%R;return x>0&&(E+=R-x),M.__size=E,M.__cache={},this}function d(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):We("WebGLRenderer: Unsupported uniform value type.",M),S}function T(M){let S=M.target;S.removeEventListener("dispose",T);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function C(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function p_(){return hi===null&&(hi=new ao(d_,16,16,ji,en),hi.name="DFG_LUT",hi.minFilter=dn,hi.magFilter=dn,hi.wrapS=ii,hi.wrapT=ii,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var aa=class{constructor(e={}){let{canvas:t=Au(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=m,p=new Set([Lo,No,Io]),d=new Set([Dn,Kn,Js,Ks,Ro,Po]),T=new Uint32Array(4),C=new Int32Array(4),M=new O,S=null,E=null,R=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,U=!1,z=null,G=null,D=null,V=null;this._outputColorSpace=jt;let K=0,Z=0,Q=null,H=-1,te=null,re=new Ot,Ve=new Ot,ke=null,Tt=new Qe(0),at=0,dt=t.width,J=t.height,ne=1,Pe=null,qe=null,xe=new Ot(0,0,dt,J),it=new Ot(0,0,dt,J),Ut=!1,tt=new Lr,pt=!1,St=!1,je=new Ft,yt=new O,It=new Ot,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Ee(){return Q===null?ne:1}let A=i;function Ke(y,I){return t.getContext(y,I)}let pe,b,_,P,F,$,oe,fe,Y,q,me,Ne,ve,_e,Oe,He,et,L,ye,ee,be,Ae,ae;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Wn,!1),A===null){let I="webgl2";if(A=Ke(I,y),A===null)throw Ke(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(y){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),Xe("WebGLRenderer: "+y.message),y}function ze(){pe=new b0(A),pe.init(),be=new o_(A,pe),b=new u0(A,pe,e,be),_=new r_(A,pe),b.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),G=A.createFramebuffer(),D=A.createFramebuffer(),V=A.createFramebuffer(),P=new T0(A),F=new Xg,$=new a_(A,pe,_,F,b,be,P),oe=new y0(N),fe=new wd(A),Ae=new c0(A,fe),Y=new M0(A,fe,P,Ae),q=new w0(A,Y,fe,Ae,P),L=new E0(A,b,$),Oe=new f0(F),me=new Wg(N,oe,pe,b,Ae,Oe),Ne=new u_(N,F),ve=new qg,_e=new jg(pe),et=new l0(N,oe,_,q,g,l),He=new s_(N,q,b),ae=new f_(A,P,b,_),ye=new h0(A,pe,P),ee=new S0(A,pe,P),P.programs=me.programs,N.capabilities=b,N.extensions=pe,N.properties=F,N.renderLists=ve,N.shadowMap=He,N.state=_,N.info=P}v!==Dn&&(w=new C0(v,t.width,t.height,o,s,r));let Fe=new Yc(N,A);this.xr=Fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let y=pe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=pe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(y){y!==void 0&&(ne=y,this.setSize(dt,J,!1))},this.getSize=function(y){return y.set(dt,J)},this.setSize=function(y,I,W=!0){if(Fe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=y,J=I,t.width=Math.floor(y*ne),t.height=Math.floor(I*ne),W===!0&&(t.style.width=y+"px",t.style.height=I+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(dt*ne,J*ne).floor()},this.setDrawingBufferSize=function(y,I,W){dt=y,J=I,ne=W,t.width=Math.floor(y*W),t.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(v===Dn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(re)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,I,W,B){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,I,W,B),_.viewport(re.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(y){return y.copy(it)},this.setScissor=function(y,I,W,B){y.isVector4?it.set(y.x,y.y,y.z,y.w):it.set(y,I,W,B),_.scissor(Ve.copy(it).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(y){_.setScissorTest(Ut=y)},this.setOpaqueSort=function(y){Pe=y},this.setTransparentSort=function(y){qe=y},this.getClearColor=function(y){return y.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let B=0;if(y){let k=!1;if(Q!==null){let we=Q.texture.format;k=p.has(we)}if(k){let we=Q.texture.type,Ie=d.has(we),Te=et.getClearColor(),De=et.getClearAlpha(),Be=Te.r,st=Te.g,ht=Te.b;Ie?(T[0]=Be,T[1]=st,T[2]=ht,T[3]=De,A.clearBufferuiv(A.COLOR,0,T)):(C[0]=Be,C[1]=st,C[2]=ht,C[3]=De,A.clearBufferiv(A.COLOR,0,C))}else B|=A.COLOR_BUFFER_BIT}I&&(B|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),et.dispose(),ve.dispose(),_e.dispose(),F.dispose(),oe.dispose(),q.dispose(),Ae.dispose(),ae.dispose(),me.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",dh),Fe.removeEventListener("sessionend",ph),rs.stop()};function At(y){y.preventDefault(),Rc("WebGLRenderer: Context Lost."),U=!0}function bt(){Rc("WebGLRenderer: Context Restored."),U=!1;let y=P.autoReset,I=He.enabled,W=He.autoUpdate,B=He.needsUpdate,k=He.type;ze(),P.autoReset=y,He.enabled=I,He.autoUpdate=W,He.needsUpdate=B,He.type=k}function Wn(y){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ei(y){let I=y.target;I.removeEventListener("dispose",ei),Ff(I)}function Ff(y){Of(y),F.remove(y)}function Of(y){let I=F.get(y).programs;I!==void 0&&(I.forEach(function(W){me.releaseProgram(W)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,B,k,we){I===null&&(I=j);let Ie=k.isMesh&&k.matrixWorld.determinantAffine()<0,Te=zf(y,I,W,B,k);_.setMaterial(B,Ie);let De=W.index,Be=1;if(B.wireframe===!0){if(De=Y.getWireframeAttribute(W),De===void 0)return;Be=2}let st=W.drawRange,ht=W.attributes.position,Ue=st.start*Be,Mt=(st.start+st.count)*Be;we!==null&&(Ue=Math.max(Ue,we.start*Be),Mt=Math.min(Mt,(we.start+we.count)*Be)),De!==null?(Ue=Math.max(Ue,0),Mt=Math.min(Mt,De.count)):ht!=null&&(Ue=Math.max(Ue,0),Mt=Math.min(Mt,ht.count));let Xt=Mt-Ue;if(Xt<0||Xt===1/0)return;Ae.setup(k,B,Te,W,De);let Rt,wt=ye;if(De!==null&&(Rt=fe.get(De),wt=ee,wt.setIndex(Rt)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Ee()),wt.setMode(A.LINES)):wt.setMode(A.TRIANGLES);else if(k.isLine){let _n=B.linewidth;_n===void 0&&(_n=1),_.setLineWidth(_n*Ee()),k.isLineSegments?wt.setMode(A.LINES):k.isLineLoop?wt.setMode(A.LINE_LOOP):wt.setMode(A.LINE_STRIP)}else k.isPoints?wt.setMode(A.POINTS):k.isSprite&&wt.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))wt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let _n=k._multiDrawStarts,Re=k._multiDrawCounts,Mn=k._multiDrawCount,_t=De?fe.get(De).bytesPerElement:1,On=F.get(B).currentProgram.getUniforms();for(let ti=0;ti<Mn;ti++)On.setValue(A,"_gl_DrawID",ti),wt.render(_n[ti]/_t,Re[ti])}else if(k.isInstancedMesh)wt.renderInstances(Ue,Xt,k.count);else if(W.isInstancedBufferGeometry){let _n=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Re=Math.min(W.instanceCount,_n);wt.renderInstances(Ue,Xt,Re)}else wt.render(Ue,Xt)};function fh(y,I,W,B){z!==null&&y.isNodeMaterial&&z.setObject(B,y),pt===!0&&Oe.setState(y,W,!1),y.transparent===!0&&y.side===kn&&y.forceSinglePass===!1?(y.side=Tn,y.needsUpdate=!0,Ma(y,I,B),y.side=Ji,y.needsUpdate=!0,Ma(y,I,B),y.side=kn):Ma(y,I,B)}this.compile=function(y,I,W=null){W===null&&(W=y),z!==null&&z.renderStart(y,I,W),E=_e.get(W),E.init(I),x.push(E),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),St=this.localClippingEnabled,pt=Oe.init(this.clippingPlanes,St),pt===!0&&Oe.setGlobalState(this.clippingPlanes,I),z!==null&&He.render(E.state.shadowsArray,W,I);let B=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let we=k.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){let Te=we[Ie];fh(Te,W,I,k),B.add(Te)}else fh(we,W,I,k),B.add(we)}),E=x.pop(),z!==null&&z.renderEnd(),B},this.compileAsync=function(y,I,W=null){let B=this.compile(y,I,W);return new Promise(k=>{function we(){if(B.forEach(function(Ie){let De=F.get(Ie).currentProgram;(De===void 0||De.isReady())&&B.delete(Ie)}),B.size===0){k(y);return}setTimeout(we,10)}pe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ul=null;function Bf(y){Ul&&Ul(y)}function dh(){rs.stop()}function ph(){rs.start()}let rs=new tf;rs.setAnimationLoop(Bf),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(y){Ul=y,Fe.setAnimationLoop(y),y===null?rs.stop():rs.start()},Fe.addEventListener("sessionstart",dh),Fe.addEventListener("sessionend",ph),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(y,I);let W=Fe.enabled===!0&&Fe.isPresenting===!0,B=w!==null&&(Q===null||W)&&w.begin(N,Q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(I),I=Fe.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,I,Q),E=_e.get(y,x.length),E.init(I),E.state.textureUnits=$.getTextureUnits(),x.push(E),je.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),tt.setFromProjectionMatrix(je,Zn,I.reversedDepth),St=this.localClippingEnabled,pt=Oe.init(this.clippingPlanes,St),S=ve.get(y,R.length),S.init(),R.push(S),Fe.enabled===!0&&Fe.isPresenting===!0){let Ie=N.xr.getDepthSensingMesh();Ie!==null&&Fl(Ie,I,-1/0,N.sortObjects)}Fl(y,I,0,N.sortObjects),S.finish(),z!==null&&z.updateLights(E.state.lightsArray),N.sortObjects===!0&&S.sort(Pe,qe),ge=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,ge&&et.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Oe.beginShadows();let k=E.state.shadowsArray;if(He.render(k,y,I),pt===!0&&Oe.endShadows(),(B&&w.hasRenderPass())===!1){let Ie=S.opaque,Te=S.transmissive;if(E.setupLights(),I.isArrayCamera){let De=I.cameras;if(Te.length>0)for(let Be=0,st=De.length;Be<st;Be++){let ht=De[Be];gh(Ie,Te,y,ht)}ge&&et.render(y);for(let Be=0,st=De.length;Be<st;Be++){let ht=De[Be];mh(S,y,ht,ht.viewport)}}else Te.length>0&&gh(Ie,Te,y,I),ge&&et.render(y),mh(S,y,I)}Q!==null&&Z===0&&($.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q)),B&&w.end(N),y.isScene===!0&&y.onAfterRender(N,y,I),Ae.resetDefaultState(),H=-1,te=null,x.pop(),x.length>0?(E=x[x.length-1],$.setTextureUnits(E.state.textureUnits),pt===!0&&Oe.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,z!==null&&z.renderEnd()};function Fl(y,I,W,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(tt)){B&&It.setFromMatrixPosition(y.matrixWorld).applyMatrix4(je);let Ie=q.update(y),Te=y.material;Te.visible&&S.push(y,Ie,Te,W,It.z,null,I)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(tt))){let Ie=q.update(y),Te=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),It.copy(y.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),It.copy(Ie.boundingSphere.center)),It.applyMatrix4(y.matrixWorld).applyMatrix4(je)),Array.isArray(Te)){let De=Ie.groups;for(let Be=0,st=De.length;Be<st;Be++){let ht=De[Be],Ue=Te[ht.materialIndex];Ue&&Ue.visible&&S.push(y,Ie,Ue,W,It.z,ht,I)}}else Te.visible&&S.push(y,Ie,Te,W,It.z,null,I)}}let we=y.children;for(let Ie=0,Te=we.length;Ie<Te;Ie++)Fl(we[Ie],I,W,B)}function mh(y,I,W,B){let{opaque:k,transmissive:we,transparent:Ie}=y;E.setupLightsView(W),pt===!0&&Oe.setGlobalState(N.clippingPlanes,W),B&&_.viewport(re.copy(B)),k.length>0&&ba(k,I,W),we.length>0&&ba(we,I,W),Ie.length>0&&ba(Ie,I,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function gh(y,I,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Ue=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new Vt(1,1,{generateMipmaps:!0,type:Ue?en:Dn,minFilter:ci,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let we=E.state.transmissionRenderTarget[B.id],Ie=B.viewport||re;we.setSize(Ie.z*N.transmissionResolutionScale,Ie.w*N.transmissionResolutionScale);let Te=N.getRenderTarget(),De=N.getActiveCubeFace(),Be=N.getActiveMipmapLevel();N.setRenderTarget(we),N.getClearColor(Tt),at=N.getClearAlpha(),at<1&&N.setClearColor(16777215,.5),N.clear(),ge&&et.render(W);let st=N.toneMapping;N.toneMapping=Ln;let ht=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),pt===!0&&Oe.setGlobalState(N.clippingPlanes,B),ba(y,W,B),$.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Mt=0,Xt=I.length;Mt<Xt;Mt++){let Rt=I[Mt],{object:wt,geometry:_n,material:Re,group:Mn}=Rt;if(Re.side===kn&&wt.layers.test(B.layers)){let _t=Re.side;Re.side=Tn,Re.needsUpdate=!0,_h(wt,W,B,_n,Re,Mn),Re.side=_t,Re.needsUpdate=!0,Ue=!0}}Ue===!0&&($.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we))}N.setRenderTarget(Te,De,Be),N.setClearColor(Tt,at),ht!==void 0&&(B.viewport=ht),N.toneMapping=st}function ba(y,I,W){let B=I.isScene===!0?I.overrideMaterial:null;for(let k=0,we=y.length;k<we;k++){let Ie=y[k],{object:Te,geometry:De,group:Be}=Ie,st=Ie.material;st.allowOverride===!0&&B!==null&&(st=B),Te.layers.test(W.layers)&&_h(Te,I,W,De,st,Be)}}function _h(y,I,W,B,k,we){z!==null&&k.isNodeMaterial&&z.setObject(y,k),y.onBeforeRender(N,I,W,B,k,we),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(N,I,W,B,y,we),k.transparent===!0&&k.side===kn&&k.forceSinglePass===!1?(k.side=Tn,k.needsUpdate=!0,N.renderBufferDirect(W,I,B,k,y,we),k.side=Ji,k.needsUpdate=!0,N.renderBufferDirect(W,I,B,k,y,we),k.side=kn):N.renderBufferDirect(W,I,B,k,y,we),y.onAfterRender(N,I,W,B,k,we)}function Ma(y,I,W){I.isScene!==!0&&(I=j);let B=F.get(y),k=E.state.lights,we=E.state.shadowsArray,Ie=k.state.version,Te=me.getParameters(y,k.state,we,I,W,E.state.lightProbeGridArray),De=me.getProgramCacheKey(Te),Be=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let st=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=oe.get(y.envMap||B.environment,st),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",ei),Be=new Map,B.programs=Be);let ht=Be.get(De);if(ht!==void 0){if(B.currentProgram===ht&&B.lightsStateVersion===Ie)return xh(y,Te),ht}else Te.uniforms=me.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,W,Te),y.onBeforeCompile(Te,N),ht=me.acquireProgram(Te,De),Be.set(De,ht),B.uniforms=Te.uniforms;let Ue=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=Oe.uniform),xh(y,Te),B.needsLights=Gf(y),B.lightsStateVersion=Ie,B.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.sunLights.value=k.state.sun,Ue.sunLightShadows.value=k.state.sunShadow,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.sunShadowMatrix.value=k.state.sunShadowMatrix,Ue.sunShadowCascade.value=k.state.sunShadowCascade,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=ht,B.uniformsList=null,ht}function vh(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=er.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function xh(y,I){let W=F.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function kf(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let W=0,B=y.length;W<B;W++){let k=y[W];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function zf(y,I,W,B,k){I.isScene!==!0&&(I=j),$.resetTextureUnits();let we=I.fog,Ie=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,Te=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:lt.workingColorSpace,De=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Be=oe.get(B.envMap||Ie,De),st=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ht=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ue=!!W.morphAttributes.position,Mt=!!W.morphAttributes.normal,Xt=!!W.morphAttributes.color,Rt=Ln;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Rt=N.toneMapping);let wt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_n=wt!==void 0?wt.length:0,Re=F.get(B),Mn=E.state.lights;if(pt===!0&&(St===!0||y!==te)){let Ct=y===te&&B.id===H;Oe.setState(B,y,Ct)}let _t=!1;B.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Mn.state.version||Re.outputColorSpace!==Te||k.isBatchedMesh&&Re.batching===!1||!k.isBatchedMesh&&Re.batching===!0||k.isBatchedMesh&&Re.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Re.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Re.instancing===!1||!k.isInstancedMesh&&Re.instancing===!0||k.isSkinnedMesh&&Re.skinning===!1||!k.isSkinnedMesh&&Re.skinning===!0||k.isInstancedMesh&&Re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Re.instancingMorph===!1&&k.morphTexture!==null||Re.envMap!==Be||B.fog===!0&&Re.fog!==we||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Oe.numPlanes||Re.numIntersection!==Oe.numIntersection)||Re.vertexAlphas!==st||Re.vertexTangents!==ht||Re.morphTargets!==Ue||Re.morphNormals!==Mt||Re.morphColors!==Xt||Re.toneMapping!==Rt||Re.morphTargetsCount!==_n||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Re.__version=B.version);let On=Re.currentProgram;_t===!0&&(On=Ma(B,I,k),z&&B.isNodeMaterial&&z.onUpdateProgram(B,On,Re));let ti=!1,Li=!1,bs=!1,Et=On.getUniforms(),Ht=Re.uniforms;if(_.useProgram(On.program)&&(ti=!0,Li=!0,bs=!0),B.id!==H&&(H=B.id,Li=!0),Re.needsLights){let Ct=kf(E.state.lightProbeGridArray,k);Re.lightProbeGrid!==Ct&&(Re.lightProbeGrid=Ct,Li=!0)}if(ti||te!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Et.setValue(A,"projectionMatrix",y.projectionMatrix),Et.setValue(A,"viewMatrix",y.matrixWorldInverse);let Ui=Et.map.cameraPosition;Ui!==void 0&&Ui.setValue(A,yt.setFromMatrixPosition(y.matrixWorld)),b.logarithmicDepthBuffer&&Et.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),te!==y&&(te=y,Li=!0,bs=!0)}if(Re.needsLights&&(Mn.state.sunShadowMap.length>0&&Et.setValue(A,"sunShadowMap",Mn.state.sunShadowMap,$),Mn.state.directionalShadowMap.length>0&&Et.setValue(A,"directionalShadowMap",Mn.state.directionalShadowMap,$),Mn.state.spotShadowMap.length>0&&Et.setValue(A,"spotShadowMap",Mn.state.spotShadowMap,$),Mn.state.pointShadowMap.length>0&&Et.setValue(A,"pointShadowMap",Mn.state.pointShadowMap,$)),k.isSkinnedMesh){Et.setOptional(A,k,"bindMatrix"),Et.setOptional(A,k,"bindMatrixInverse");let Ct=k.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(A,"boneTexture",Ct.boneTexture,$))}k.isBatchedMesh&&(Et.setOptional(A,k,"batchingTexture"),Et.setValue(A,"batchingTexture",k._matricesTexture,$),Et.setOptional(A,k,"batchingIdTexture"),Et.setValue(A,"batchingIdTexture",k._indirectTexture,$),Et.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&Et.setValue(A,"batchingColorTexture",k._colorsTexture,$));let Di=W.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&L.update(k,W,On),(Li||Re.receiveShadow!==k.receiveShadow)&&(Re.receiveShadow=k.receiveShadow,Et.setValue(A,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(Ht.envMapIntensity.value=I.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=p_()),Li){if(Et.setValue(A,"toneMappingExposure",N.toneMappingExposure),Re.needsLights&&Vf(Ht,bs),we&&B.fog===!0&&Ne.refreshFogUniforms(Ht,we),Ne.refreshMaterialUniforms(Ht,B,ne,J,E.state.transmissionRenderTarget[y.id]),Re.needsLights&&Re.lightProbeGrid){let Ct=Re.lightProbeGrid;Ht.probesSH.value=Ct.texture,Ht.probesMin.value.copy(Ct.boundingBox.min),Ht.probesMax.value.copy(Ct.boundingBox.max),Ht.probesResolution.value.copy(Ct.resolution)}er.upload(A,vh(Re),Ht,$)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(er.upload(A,vh(Re),Ht,$),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(A,"center",k.center),Et.setValue(A,"modelViewMatrix",k.modelViewMatrix),Et.setValue(A,"normalMatrix",k.normalMatrix),Et.setValue(A,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let Ct=B.uniformsGroups;for(let Ui=0,Ms=Ct.length;Ui<Ms;Ui++){let bh=Ct[Ui];ae.update(bh,On),ae.bind(bh,On)}}return On}function Vf(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Gf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(y,I,W){let B=F.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),F.get(y.texture).__webglTexture=I,F.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let W=F.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){Q=y,K=I,Z=W;let B=null,k=!1,we=!1;if(y){let Te=F.get(y);if(Te.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(A.FRAMEBUFFER,Te.__webglFramebuffer),re.copy(y.viewport),Ve.copy(y.scissor),ke=y.scissorTest,_.viewport(re),_.scissor(Ve),_.setScissorTest(ke),H=-1;return}else if(Te.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(Te.__hasExternalTextures)$.rebindTextures(y,F.get(y.texture).__webglTexture,F.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let st=y.depthTexture;if(Te.__boundDepthTexture!==st){if(st!==null&&F.has(st)&&(y.width!==st.image.width||y.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}let De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);let Be=F.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[I])?B=Be[I][W]:B=Be[I],k=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?B=F.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[W]:B=Be,re.copy(y.viewport),Ve.copy(y.scissor),ke=y.scissorTest}else re.copy(xe).multiplyScalar(ne).floor(),Ve.copy(it).multiplyScalar(ne).floor(),ke=Ut;if(W!==0&&(B=G),_.bindFramebuffer(A.FRAMEBUFFER,B)&&_.drawBuffers(y,B),_.viewport(re),_.scissor(Ve),_.setScissorTest(ke),k){let Te=F.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,W)}else if(we){let Te=I;for(let De=0;De<y.textures.length;De++){let Be=F.get(y.textures[De]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+De,Be.__webglTexture,W,Te)}}else if(y!==null&&W!==0){let Te=F.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Te.__webglTexture,W)}H=-1};function yh(y){let I=F.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=b.textureFormatReadable(y.format),I.__typeReadable=b.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,B,k,we,Ie,Te=0){if(!(y&&y.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=F.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){_.bindFramebuffer(A.FRAMEBUFFER,De);try{let Be=y.textures[Te],st=Be.format,ht=Be.type;y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Te);let Ue=yh(Be);if(Ue.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&W>=0&&W<=y.height-k&&A.readPixels(I,W,B,k,be.convert(st),be.convert(ht),we)}finally{let Be=Q!==null?F.get(Q).__webglFramebuffer:null;_.bindFramebuffer(A.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,B,k,we,Ie,Te=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=F.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De)if(I>=0&&I<=y.width-B&&W>=0&&W<=y.height-k){_.bindFramebuffer(A.FRAMEBUFFER,De);let Be=y.textures[Te],st=Be.format,ht=Be.type;y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Te);let Ue=yh(Be);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Mt),A.bufferData(A.PIXEL_PACK_BUFFER,we.byteLength,A.STREAM_READ),A.readPixels(I,W,B,k,be.convert(st),be.convert(ht),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let Xt=Q!==null?F.get(Q).__webglFramebuffer:null;_.bindFramebuffer(A.FRAMEBUFFER,Xt);let Rt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ru(A,Rt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Mt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,we),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(Mt),A.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){let B=Math.pow(2,-W),k=Math.floor(y.image.width*B),we=Math.floor(y.image.height*B),Ie=I!==null?I.x:0,Te=I!==null?I.y:0;$.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,W,0,0,Ie,Te,k,we),_.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,B=null,k=0,we=0){let Ie,Te,De,Be,st,ht,Ue,Mt,Xt,Rt=y.isCompressedTexture?y.mipmaps[we]:y.image;if(W!==null)Ie=W.max.x-W.min.x,Te=W.max.y-W.min.y,De=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,st=W.min.y,ht=W.isBox3?W.min.z:0;else{let Ht=Math.pow(2,-k);Ie=Math.floor(Rt.width*Ht),Te=Math.floor(Rt.height*Ht),y.isDataArrayTexture?De=Rt.depth:y.isData3DTexture?De=Math.floor(Rt.depth*Ht):De=1,Be=0,st=0,ht=0}B!==null?(Ue=B.x,Mt=B.y,Xt=B.z):(Ue=0,Mt=0,Xt=0);let wt=be.convert(I.format),_n=be.convert(I.type),Re;I.isData3DTexture?($.setTexture3D(I,0),Re=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?($.setTexture2DArray(I,0),Re=A.TEXTURE_2D_ARRAY):($.setTexture2D(I,0),Re=A.TEXTURE_2D),_.activeTexture(A.TEXTURE0),_.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);let Mn=_.getParameter(A.UNPACK_ROW_LENGTH),_t=_.getParameter(A.UNPACK_IMAGE_HEIGHT),On=_.getParameter(A.UNPACK_SKIP_PIXELS),ti=_.getParameter(A.UNPACK_SKIP_ROWS),Li=_.getParameter(A.UNPACK_SKIP_IMAGES);_.pixelStorei(A.UNPACK_ROW_LENGTH,Rt.width),_.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt.height),_.pixelStorei(A.UNPACK_SKIP_PIXELS,Be),_.pixelStorei(A.UNPACK_SKIP_ROWS,st),_.pixelStorei(A.UNPACK_SKIP_IMAGES,ht);let bs=y.isDataArrayTexture||y.isData3DTexture,Et=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let Ht=F.get(y),Di=F.get(I),Ct=F.get(Ht.__renderTarget),Ui=F.get(Di.__renderTarget);_.bindFramebuffer(A.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ms=0;Ms<De;Ms++)bs&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,F.get(y).__webglTexture,k,ht+Ms),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,F.get(I).__webglTexture,we,Xt+Ms)),A.blitFramebuffer(Be,st,Ie,Te,Ue,Mt,Ie,Te,A.DEPTH_BUFFER_BIT,A.NEAREST);_.bindFramebuffer(A.READ_FRAMEBUFFER,null),_.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||F.has(y)){let Ht=F.get(y),Di=F.get(I);_.bindFramebuffer(A.READ_FRAMEBUFFER,D),_.bindFramebuffer(A.DRAW_FRAMEBUFFER,V);for(let Ct=0;Ct<De;Ct++)bs?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ht.__webglTexture,k,ht+Ct):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ht.__webglTexture,k),Et?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Di.__webglTexture,we,Xt+Ct):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Di.__webglTexture,we),k!==0?A.blitFramebuffer(Be,st,Ie,Te,Ue,Mt,Ie,Te,A.COLOR_BUFFER_BIT,A.NEAREST):Et?A.copyTexSubImage3D(Re,we,Ue,Mt,Xt+Ct,Be,st,Ie,Te):A.copyTexSubImage2D(Re,we,Ue,Mt,Be,st,Ie,Te);_.bindFramebuffer(A.READ_FRAMEBUFFER,null),_.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Et?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(Re,we,Ue,Mt,Xt,Ie,Te,De,wt,_n,Rt.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(Re,we,Ue,Mt,Xt,Ie,Te,De,wt,Rt.data):A.texSubImage3D(Re,we,Ue,Mt,Xt,Ie,Te,De,wt,_n,Rt):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,we,Ue,Mt,Ie,Te,wt,_n,Rt.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,we,Ue,Mt,Rt.width,Rt.height,wt,Rt.data):A.texSubImage2D(A.TEXTURE_2D,we,Ue,Mt,Ie,Te,wt,_n,Rt);_.pixelStorei(A.UNPACK_ROW_LENGTH,Mn),_.pixelStorei(A.UNPACK_IMAGE_HEIGHT,_t),_.pixelStorei(A.UNPACK_SKIP_PIXELS,On),_.pixelStorei(A.UNPACK_SKIP_ROWS,ti),_.pixelStorei(A.UNPACK_SKIP_IMAGES,Li),we===0&&I.generateMipmaps&&A.generateMipmap(Re),_.unbindTexture()},this.initRenderTarget=function(y){F.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){K=0,Z=0,Q=null,_.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var vl=4,xl=3,xt="#141114",nr=Math.PI,Kc={ink:.5,hatch:!1,grit:.45},m_=n=>{let e=parseInt(n.slice(1),16);return[e>>16&255,e>>8&255,e&255]};var g_=n=>"#"+n.map(e=>Math.max(0,Math.min(255,e|0)).toString(16).padStart(2,"0")).join("");function $e(n,e,t=0){let i=m_(n);return g_([i[0]*e*(1-t*.14),i[1]*e*(1-t*.05),i[2]*e*(1+t*.2)])}var fi=1;function Gn(n){fi=n*2654435761>>>0||1}function X(){return fi^=fi<<13,fi>>>=0,fi^=fi>>>17,fi^=fi<<5,fi>>>=0,fi/4294967296}var Zc=null,Jc=null;function __(){let n=document.createElement("canvas");n.width=n.height=12;let e=n.getContext("2d");e.strokeStyle="#000",e.lineWidth=1.6,e.beginPath();for(let t=-12;t<24;t+=4)e.moveTo(t,12),e.lineTo(t+12,0);return e.stroke(),n}function v_(){let e=document.createElement("canvas");e.width=e.height=96;let t=e.getContext("2d"),i=t.createImageData(96,96);for(let s=0;s<9216;s++){let r=150+Math.random()*105,a=s*4;i.data[a]=i.data[a+1]=i.data[a+2]=r,i.data[a+3]=255}t.putImageData(i,0,0);for(let s=0;s<40;s++)t.fillStyle=`rgba(60,50,40,${Math.random()*.25})`,t.beginPath(),t.arc(Math.random()*96,Math.random()*96,1+Math.random()*6,0,7),t.fill();return e}function cf(n,e,t){let i=n.createPattern(e,"repeat");return i.setTransform(new DOMMatrix().scale(t)),i}var Jt=400;function de(n,e,t,i={}){let s=i.s==null?2.4:i.s,r=i.h==null?.9:i.h,a=i.dark||$e(t,i.dk||.52,1),o=i.lite||$e(t,i.lt||1.3),l=n.getTransform();n.save(),n.clip(e),n.fillStyle=a,n.fillRect(-Jt,-Jt,Jt*2,Jt*2),(i.hatch===!0||Kc.hatch&&i.hatch!==!1)&&(Zc=Zc||__(),n.globalAlpha=i.hatchA||.3,n.fillStyle=cf(n,Zc,.32),n.fillRect(-Jt,-Jt,Jt*2,Jt*2),n.globalAlpha=1),n.translate(s,-s*.8),n.clip(e),n.setTransform(l),n.fillStyle=o,n.fillRect(-Jt,-Jt,Jt*2,Jt*2),n.translate(-r,r),n.clip(e),n.setTransform(l),n.fillStyle=t,n.fillRect(-Jt,-Jt,Jt*2,Jt*2),n.restore()}function es(n,e,t,i,s){n.save(),n.clip(t),de(n,e,i,s),n.restore()}function Nt(n,e,t=.28){Jc=Jc||v_(),n.save(),n.clip(e),n.globalCompositeOperation="multiply",n.globalAlpha=t*Kc.grit,n.fillStyle=cf(n,Jc,.22),n.fillRect(-Jt,-Jt,Jt*2,Jt*2),n.restore()}function he(n,e,t=1.5,i=xt){n.save(),n.lineJoin="round",n.lineCap="round",n.strokeStyle=i,n.lineWidth=t*Kc.ink,n.globalAlpha=.9,n.stroke(e),n.restore()}function ue(n,e,t=.9,i=xt,s=1){if(n.save(),n.globalAlpha=s,n.strokeStyle=i,n.lineWidth=t,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(e[0],e[1]),e.length===6)n.quadraticCurveTo(e[2],e[3],e[4],e[5]);else if(e.length===8)n.bezierCurveTo(e[2],e[3],e[4],e[5],e[6],e[7]);else for(let r=2;r<e.length;r+=2)n.lineTo(e[r],e[r+1]);n.stroke(),n.restore()}function Le(n,e,t,i=1){n.save(),n.globalAlpha=i,n.fillStyle=t,n.fill(e),n.restore()}function Ce(n){return new Path2D(n)}function Ze(n,e,t,i,s=0){let r=new Path2D;return r.ellipse(n,e,t,i,s,0,nr*2),r}function ct(n,e,t,i){let s=new Path2D;return s.rect(n,e,t,i),s}function Lt(n,e,t,i,s,r=2,a=!1){n.save(),n.clip(e),n.fillStyle=a?"#6a0b08":"#3e0705",n.beginPath();for(let o=0;o<nr*2;o+=.45){let l=s*(.6+X()*.6);n.lineTo(t+Math.cos(o)*l,i+Math.sin(o)*l*.8)}n.fill();for(let o=0;o<5;o++)n.beginPath(),n.arc(t+(X()-.5)*s*3,i+(X()-.5)*s*2,.3+X()*s*.25,0,7),n.fill();for(let o=0;o<r;o++){let l=t+(X()-.5)*s*1.4,c=s*(1+X()*2.5);n.fillRect(l-.35,i,.7,c),n.beginPath(),n.arc(l,i+c,.6,0,7),n.fill()}n.fillStyle="rgba(255,120,100,.25)",n.beginPath(),n.arc(t+s*.2,i-s*.25,s*.25,0,7),n.fill(),n.restore()}function Hn(n,e,t,i=0,s=0,r=.32,a=.72){let o=new Path2D;return o.moveTo(-e,0),o.bezierCurveTo(-e-s,n*r,-t-s*.35,n*a,-t,n),o.arc(0,n,t,nr,0,!0),o.bezierCurveTo(t+i*.35,n*a,e+i,n*r,e,0),o.arc(0,0,e,0,nr,!0),o.closePath(),o}function hf(n,e,t=0){let[i,s,r,a]=n,o=r-i+xl*2,l=a-s+xl*2,c=document.createElement("canvas");c.width=Math.ceil(o*vl),c.height=Math.ceil(l*vl);let h=c.getContext("2d");h.scale(vl,vl),h.translate(xl-i,xl-s),e(h),t&&(h.setTransform(1,0,0,1,0,0),h.globalCompositeOperation="source-atop",h.fillStyle=`rgba(8,10,18,${t})`,h.fillRect(0,0,c.width,c.height));let u=new ds(c);return u.colorSpace=jt,u.anisotropy=4,u.minFilter=ci,u.generateMipmaps=!0,{tex:u,w:o,h:l,cx:(i+r)/2,cy:(s+a)/2}}var gn=16,ce=(n,e,t=0)=>$e(n,e,t),rn="rgba(14,11,12,.88)",ts={z0:{wood:"#6b5236",dark:"#3f3328",metal:"#5f686d",paint:"#4d6a4c",fabric:"#5c5a48",accent:"#c98a2a",paper:"#cfc6a8"},z1:{wood:"#7d5636",dark:"#4a3424",metal:"#8a9096",paint:"#6f8a7a",fabric:"#8a3d3a",accent:"#3e5f8a",paper:"#e2d8c0"},z2:{wood:"#94846c",dark:"#4e4a44",metal:"#7d868d",paint:"#55606c",fabric:"#3f4c62",accent:"#2f6aa8",paper:"#e8e6dc"},z3:{wood:"#a9b2b0",dark:"#59656a",metal:"#a9b1b5",paint:"#d9dedd",fabric:"#4f7f86",accent:"#2f9a8a",paper:"#eef0ea"},z4:{wood:"#4a2c24",dark:"#2a1814",metal:"#b9a06a",paint:"#2c2a36",fabric:"#6a2238",accent:"#c9a24a",paper:"#ece2c8"},base:{wood:"#7d5a3a",dark:"#4a3424",metal:"#6c7276",paint:"#556048",fabric:"#4f5c3a",accent:"#c98a2a",paper:"#d8ccaa"}};function bn(n,e,t,i,s,r){r=Math.min(r,i/2,s/2),n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Ci(n,e,t,i,s){let r=n.createLinearGradient(0,e,0,t);return r.addColorStop(0,i),r.addColorStop(1,s),r}function sr(n,e,t,i,s){let r=n.createLinearGradient(e,0,t,0);return r.addColorStop(0,i),r.addColorStop(1,s),r}function ie(n,e,t,i,s,r){n.fillStyle=r,n.fillRect(e,t,i,s)}function ut(n,e,t,i=1){n.strokeStyle=t,n.lineWidth=i,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(e[0],e[1]);for(let s=2;s<e.length;s+=2)n.lineTo(e[s],e[s+1]);n.stroke()}function sn(n,e,t,i,s,r){n.fillStyle=r,n.beginPath(),n.ellipse(e,t,Math.max(.1,i),Math.max(.1,s),0,0,7),n.fill()}function se(n,e,t,i,s,r,a={}){let o=a.r||0;bn(n,e,t,i,s,o),n.fillStyle=Ci(n,t,t+s,ce(r,1.1),ce(r,.8)),n.fill(),n.save(),bn(n,e,t,i,s,o),n.clip();let l=a.side==null?Math.min(7,Math.max(1.5,i*.09)):a.side;l&&(n.fillStyle=sr(n,e+i-l,e+i,ce(r,.74,1),ce(r,.6,1)),n.fillRect(e+i-l,t,l,s)),ie(n,e,t,i,1.3,ce(r,1.32)),ie(n,e,t,1,s,ce(r,1.16)),a.ao!==!1&&(n.fillStyle=Ci(n,t+s-Math.min(10,s*.3),t+s,"rgba(0,0,0,0)","rgba(0,0,0,.28)"),n.fillRect(e,t+s-Math.min(10,s*.3),i,Math.min(10,s*.3))),n.restore(),a.line!==!1&&(bn(n,e+.3,t+.3,i-.6,s-.6,o),n.strokeStyle=rn,n.lineWidth=a.lw||.9,n.stroke())}function pn(n,e,t,i,s,r,a=.9){ie(n,e,t,i,s,ce(r,a)),ie(n,e,t,i,1,ce(r,.62,1)),ie(n,e,t,1,s,ce(r,.7,1)),ie(n,e,t+s-1,i,1,ce(r,1.22)),ie(n,e+i-1,t,1,s,ce(r,1.12))}function ir(n,e,t,i=1.7,s="#d3b26c"){let r=n.createRadialGradient(e-i*.4,t-i*.4,0,e,t,i);r.addColorStop(0,ce(s,1.45)),r.addColorStop(1,ce(s,.7)),n.fillStyle=r,n.beginPath(),n.arc(e,t,i,0,7),n.fill(),n.strokeStyle=rn,n.lineWidth=.5,n.stroke()}function mn(n,e,t,i,s="#c7cbd0",r=!1){r?se(n,e-1,t,2.2,i,s,{side:.8,ao:!1,lw:.6}):se(n,e,t-1,i,2.2,s,{side:0,ao:!1,lw:.6})}function yl(n,e,t,i,s,r,a=6){n.save(),n.beginPath(),n.rect(e,t,i,s),n.clip(),n.strokeStyle=ce(r,.82),n.globalAlpha=.55,n.lineWidth=.45;for(let o=0;o<a;o++){let l=e+X()*i;n.beginPath(),n.moveTo(l,t),n.bezierCurveTo(l+(X()-.5)*6,t+s*.3,l+(X()-.5)*6,t+s*.7,l+(X()-.5)*4,t+s),n.stroke()}n.restore()}function ca(n,e,t,i,s,r=.18){n.save(),n.beginPath(),n.rect(e,t,i,s),n.clip();for(let a=0;a<5;a++)n.fillStyle=`rgba(40,28,18,${r*X()})`,n.beginPath(),n.ellipse(e+X()*i,t+X()*s,3+X()*i*.25,2+X()*s*.15,X()*3,0,7),n.fill();n.restore()}function uf(n,e,t,i,s){n.save(),n.strokeStyle="rgba(255,240,220,.18)",n.lineWidth=.4;for(let r=0;r<4;r++){let a=e+X()*i,o=t+X()*s;n.beginPath(),n.moveTo(a,o),n.lineTo(a+(X()-.3)*8,o+X()*5),n.stroke()}n.restore()}function Qc(n,e,t,i,s=.5){let r=(e+t)/2,a=(t-e)/2+6,o=n.createRadialGradient(r,i,0,r,i,a);o.addColorStop(0,`rgba(0,0,0,${s})`),o.addColorStop(.7,`rgba(0,0,0,${s*.5})`),o.addColorStop(1,"rgba(0,0,0,0)"),n.save(),n.translate(r,i),n.scale(1,.12),n.translate(-r,-i),n.fillStyle=o,n.fillRect(r-a,i-a,a*2,a*2),n.restore()}function En(n,e,t,i,s){ie(n,e,t,i,s,"#0f0d0c"),n.fillStyle=Ci(n,t,t+s,"rgba(0,0,0,.6)","rgba(40,30,22,.35)"),n.fillRect(e,t,i,s),ie(n,e,t,i,2,"rgba(0,0,0,.7)"),ie(n,e,t,2,s,"rgba(0,0,0,.5)")}function Ri(n,e,t,i,s,r,a){n.beginPath(),n.moveTo(e,t),n.lineTo(e+s*r,t-3),n.lineTo(e+s*r,t+i+3),n.lineTo(e,t+i),n.closePath(),n.fillStyle=sr(n,e,e+s*r,ce(a,.95),ce(a,.7)),n.fill(),n.strokeStyle=rn,n.lineWidth=.8,n.stroke(),ut(n,[e+s*r*.55,t+i*.45,e+s*r*.55,t+i*.55],ce(a,1.4),1)}function jc(n,e,t,i,s,r=.1,a=1){let o=["#7a3a2a","#3a4a6a","#6a6a3a","#5a2a3a","#8a7a5a","#2a4a3a","#6a4a2a","#a89060","#2e3a4e"],l=e;for(;l<e+i-3;){let c=2.2+X()*3,h=(11+X()*7)*a;if(X()<r){l+=c+1;continue}if(l+c>e+i)break;let u=o[X()*o.length|0];if(X()<.08&&l+h<e+i){se(n,l,s-c,h,c,u,{side:0,ao:!1,lw:.4}),l+=h+.5;continue}se(n,l,s-h,c,h,u,{side:.6,ao:!1,lw:.4}),ie(n,l+.5,s-h+3,c-1,.8,ce(u,1.5)),l+=c+.3}}function ha(n,e,t,i,s){let r=i*.32;bn(n,e,t-i*.7,r,i*.7,1.2),n.fillStyle=sr(n,e,e+r,ce(s,1.3),ce(s,.7)),n.fill(),ie(n,e+r*.3,t-i,r*.4,i*.32,ce(s,.9)),ie(n,e+r*.18,t-i*.62,r*.2,i*.4,"rgba(255,255,255,.25)"),n.strokeStyle=rn,n.lineWidth=.4,bn(n,e,t-i*.7,r,i*.7,1.2),n.stroke()}function eh(n,e,t,i,s){se(n,e,t-i*1.3,i,i*1.3,"#a8adb2",{side:.8,ao:!1,lw:.4}),ie(n,e,t-i*1.05,i,i*.7,s),ie(n,e,t-i*1.05,i*.25,i*.7,ce(s,1.3))}function la(n,e,t,i,s,r,a){se(n,e,t-s,i,s,r,{side:1.2,lw:.6}),ie(n,e+i*.42,t-s,i*.16,s,ce(r,1.18)),a&&(n.fillStyle=ce(r,.9),n.beginPath(),n.moveTo(e,t-s),n.lineTo(e-4,t-s-5),n.lineTo(e+i*.45,t-s-3),n.closePath(),n.fill(),n.strokeStyle=rn,n.lineWidth=.5,n.stroke(),ie(n,e+1,t-s,i-2,2,"#1a1410"))}function Pi(n,e,t,i,s="#e8e2d0"){n.save(),n.translate(e,t),n.rotate(i),ie(n,-4,-.6,8,1.2,s),ie(n,-4,.4,8,.3,"rgba(0,0,0,.25)"),n.restore()}function di(n,e,t,i,s,r){n.beginPath(),n.moveTo(e,t),n.bezierCurveTo(e+i*.3,t-2,e+i*.7,t+2,e+i,t),n.lineTo(e+i+1,t+s),n.bezierCurveTo(e+i*.6,t+s+2,e+i*.3,t+s-2,e-1,t+s),n.closePath(),n.fillStyle=Ci(n,t,t+s,ce(r,1.1),ce(r,.75)),n.fill(),n.strokeStyle=rn,n.lineWidth=.6,n.stroke()}var mt={};mt.wardrobe=(n,e,t,i,s)=>{let r=s.wood,a=8;if(se(n,-2,0,e+4,a,ce(r,.95),{side:2}),i){se(n,0,a,e,t-a-6,r,{side:4}),En(n,4,a+3,e-8,t-a-14),ut(n,[5,a+12,e-5,a+12],"#8a8a8a",1.2);let o=["#4a5a7a","#7a3a3a","#5a5a4a"];for(let l=0;l<3;l++){if(X()<.3)continue;let c=12+l*15;ut(n,[c,a+12,c,a+15],"#9a9a9a",.6),di(n,c-6,a+15,12,40+X()*20,o[l])}ie(n,4,t-30,e-8,2,ce(r,.7)),la(n,8,t-10,14,9,"#8a7050",!0),Ri(n,0,a+1,t-a-8,-1,12,r),Ri(n,e,a+1,t-a-8,1,12,r)}else se(n,0,a,e,t-a-6,r,{side:5}),yl(n,0,a,e,t-a-6,r,9),pn(n,5,a+6,e/2-8,t-a-24,r),pn(n,e/2+3,a+6,e/2-8,t-a-24,r),ut(n,[e/2,a+2,e/2,t-8],ce(r,.45),.9),ir(n,e/2-4,t*.52),ir(n,e/2+4,t*.52),ca(n,0,a,e,t-a,.12),uf(n,0,a,e,t);ie(n,2,t-6,5,6,ce(r,.55)),ie(n,e-7,t-6,5,6,ce(r,.55))};mt.dresser=(n,e,t,i,s)=>{let r=s.wood,a=18;se(n,8,a-14,11,14,"#b08a3a",{side:1,lw:.6}),ie(n,10,a-12,7,10,"#6a7a8a"),sn(n,13.5,a-8,2,2.5,"#d8c0a0"),bn(n,e-20,a-13,8,13,3),n.fillStyle=sr(n,e-20,e-12,"#7aa0b8","#3a5a6a"),n.fill(),n.strokeStyle=rn,n.lineWidth=.5,n.stroke(),se(n,-2,a,e+4,4,ce(r,1.05),{side:2}),se(n,0,a+4,e,t-a-10,r,{side:5}),yl(n,0,a+4,e,t-a-10,r,8);let o=(t-a-14)/3;for(let l=0;l<3;l++){let c=a+6+l*o;if(i&&l<2){En(n,3,c,e-6,o-2);let u=c+3+l;se(n,1,u,e-2,o-1,ce(r,1.05),{side:3}),mn(n,e/2-8,u+o/2,16,"#c7b07a"),l===0&&(di(n,10,u-3,18,4,"#d8d0c0"),ut(n,[e-16,u,e-14,u+9],"#7a3a3a",2.4))}else pn(n,3,c,e-6,o-2,r,.95),mn(n,e/2-8,c+o/2-1,16,"#c7b07a")}ie(n,2,t-6,6,6,ce(r,.5)),ie(n,e-8,t-6,6,6,ce(r,.5))};mt.nightstand=(n,e,t,i,s)=>{let r=s.wood,a=10;se(n,5,a-6,9,6,"#3a3a3a",{side:1,lw:.5}),ie(n,6.5,a-5,6,3,i?"#2a1a1a":"#ff6a3a"),se(n,-1,a,e+2,3,ce(r,1.05),{side:1}),se(n,0,a+3,e,t-a-7,r,{side:3}),i?(En(n,3,a+6,e-6,9),se(n,2,a+10,e-4,9,ce(r,1.05),{side:2}),mn(n,e/2-5,a+14,10),Pi(n,e/2,a+9,.2)):(pn(n,3,a+6,e-6,9,r,.95),mn(n,e/2-5,a+10,10)),En(n,3,a+18,e-6,t-a-25),ie(n,4,t-10,e-8,2,ce(r,.8)),i||jc(n,5,t-10,e-12,0,1,.6),ie(n,1,t-4,4,4,ce(r,.5)),ie(n,e-5,t-4,4,4,ce(r,.5))};mt.bookshelf=(n,e,t,i,s)=>{let r=ce(s.wood,.85);se(n,0,0,e,t-3,r,{side:4}),ie(n,4,4,e-8,t-14,ce(r,.45));let a=5,o=(t-16)/a;for(let l=0;l<a;l++){let c=4+(l+1)*o;jc(n,6,c-1,e-12,0,i?.55:.1),se(n,3,c-1,e-6,3,ce(r,1.15),{side:0,ao:!1,lw:.5})}if(ie(n,0,t-3,e,3,ce(r,.5)),i)for(let l=0;l<4;l++){let c=-8+X()*(e+10),h=["#7a3a2a","#3a4a6a","#6a6a3a","#8a7a5a"][l];n.save(),n.translate(c,t-1.6),n.rotate((X()-.5)*.5),se(n,-6,-2.6,12,3,h,{side:0,ao:!1,lw:.4}),n.restore()}};mt.fridge=(n,e,t,i,s)=>{let r="#d9dbd5";if(se(n,0,0,e,t-4,r,{r:6,side:6}),ut(n,[2,34,e-2,34],"#8e908a",1),mn(n,e-7,12,14,"#9a9c96",!0),i){bn(n,3,37,e-6,t-46,2),n.fillStyle=Ci(n,37,t-9,"#fff8d8","#d8cfa0"),n.fill();for(let a of[56,76])ie(n,4,a,e-8,1.5,"#b8b4a0");X()<.6&&ha(n,8,56,14,"#5a8a3a"),X()<.5&&eh(n,22,76,6,"#a83a2a"),sn(n,e/2,40,10,2,"rgba(255,250,210,.7)"),Ri(n,e,36,t-44,1,14,r)}else mn(n,e-7,42,22,"#9a9c96",!0),ie(n,8,50,9,9,"#e8c84a"),ie(n,10,64,7,8,"#7ab0d8"),ie(n,8,47,9,2,"#c03a2a"),ca(n,0,0,e,t,.1);ie(n,4,t-4,6,4,"#3a3a3a"),ie(n,e-10,t-4,6,4,"#3a3a3a")};mt.kitchen=(n,e,t,i,s)=>{let r=s.paint==="#6f8a7a"?"#8aa08a":ce(s.wood,1.1),a=t-46;se(n,10,a-16,16,16,"#b8bcc0",{r:5,side:3}),ut(n,[12,a-16,18,a-22,24,a-16],"#3a3a3a",1.4),ie(n,25,a-12,5,2,"#b8bcc0"),se(n,52,a-11,20,11,"#a83a2a",{r:2,side:3}),ie(n,48,a-9,4,2,"#2a2a2a"),ie(n,72,a-9,4,2,"#2a2a2a"),se(n,-2,a,e+4,4,"#3a3634",{side:2}),ie(n,-2,a,e+4,1,"#6a6460"),se(n,0,a+4,e,38,r,{side:4}),ie(n,0,a+4,e,8,ce(r,.92));for(let l=0;l<3;l++)mn(n,8+l*28,a+8,12,"#c7cbd0");let o=(e-9)/3;for(let l=0;l<3;l++){let c=3+l*(o+1.5);i&&l!==1?(En(n,c,a+14,o,24),se(n,c+4,a+26,12,12,"#7a7e82",{r:2,side:2}),Ri(n,l===0?c:c+o,a+14,24,l===0?-1:1,8,r)):(pn(n,c,a+14,o,24,r,.96),mn(n,c+o/2-1,a+19,8,"#c7cbd0",!0))}ie(n,0,t-4,e,4,"#1f1c1a")};mt.bed=(n,e,t,i,s)=>{let r=s.wood,a=s.fabric;se(n,0,0,10,t-2,r,{r:3,side:3}),pn(n,2.5,6,5,t-22,r),se(n,e-7,t-26,7,24,r,{r:2,side:2}),se(n,6,t-18,e-10,10,ce(r,.9),{side:0}),se(n,8,t-25,e-15,9,"#e6e0d0",{r:3,side:0}),i?(bn(n,12,t-31,22,9,4),n.fillStyle="#efe9dc",n.fill(),n.strokeStyle=rn,n.lineWidth=.6,n.stroke(),di(n,e-40,t-26,34,12,a),n.beginPath(),n.moveTo(e-40,t-26),n.quadraticCurveTo(e-34,t-36,e-22,t-30),n.lineTo(e-6,t-26),n.fillStyle=ce(a,1.1),n.fill(),sn(n,50,t-23,6,1.4,"rgba(120,90,50,.35)"),Pi(n,e-2,t-1,.1,"#d8d0c0")):(bn(n,12,t-33,24,10,4),n.fillStyle=Ci(n,t-33,t-23,"#f4efe4","#cfc8b8"),n.fill(),n.strokeStyle=rn,n.lineWidth=.6,n.stroke(),di(n,34,t-30,e-42,14,a),ut(n,[40,t-24,e-12,t-26],ce(a,1.25),.8),ut(n,[44,t-19,e-14,t-20],ce(a,.8),.6)),ie(n,8,t-8,4,8,ce(r,.5)),ie(n,e-8,t-8,4,8,ce(r,.5))};mt.sofa=(n,e,t,i,s)=>{let r=s.fabric;if(se(n,6,t-46,e-12,26,ce(r,.92),{r:6,side:3}),se(n,4,t-24,e-8,14,r,{r:3,side:3}),se(n,0,t-34,13,26,ce(r,.86),{r:5,side:2}),se(n,e-13,t-34,13,26,ce(r,.8),{r:5,side:2}),i)En(n,15,t-26,e-30,4),n.save(),n.translate(e*.3,t-4),n.rotate(-.15),se(n,-14,-7,28,7,ce(r,1.05),{r:3,side:2}),n.restore(),ut(n,[e*.62,t-20,e*.62+6,t-14,e*.62+2,t-12],"#e8dcc0",1.4),sn(n,e*.66,t-16,4,2,"#d8ccb0");else{for(let a=0;a<2;a++)se(n,15+a*(e-30)/2,t-30,(e-30)/2-1,8,ce(r,1.06),{r:3,side:2});bn(n,18,t-42,15,12,4),n.fillStyle="#d8ccb0",n.fill(),n.strokeStyle=rn,n.lineWidth=.5,n.stroke()}ie(n,6,t-10,4,10,"#1a1210"),ie(n,e-10,t-10,4,10,"#1a1210")};mt.tvstand=(n,e,t,i,s)=>{let r=ce(s.wood,.9),a=t-32;se(n,12,a-40,46,38,"#2a2826",{r:4,side:6}),bn(n,16,a-36,32,28,5),n.fillStyle=Ci(n,a-36,a-8,"#3a4a50","#1a2428"),n.fill(),ie(n,19,a-33,10,3,"rgba(255,255,255,.14)");for(let o=0;o<3;o++)ir(n,52,a-30+o*8,1.4,"#7a7a7a");if(ut(n,[35,a-40,26,a-54],"#6a6a6a",.8),ut(n,[35,a-40,46,a-52],"#6a6a6a",.8),se(n,22,a-2,26,2,"#1a1816",{side:0}),se(n,0,a,e,t-a-3,r,{side:4}),i){En(n,4,a+4,e-8,t-a-12);for(let o=0;o<4;o++)X()<.6&&se(n,8+o*9,t-22,7,13,"#1c1c1c",{side:1,lw:.4});Ri(n,4,a+4,t-a-12,-1,8,r)}else pn(n,4,a+4,e/2-6,t-a-12,r),pn(n,e/2+2,a+4,e/2-6,t-a-12,r),ir(n,e/2-4,a+14,1.4),ir(n,e/2+4,a+14,1.4);ie(n,0,t-3,e,3,ce(r,.45))};mt.desk=(n,e,t,i,s)=>{let r=s.wood,a=t-34;ut(n,[12,a,12,a-18,22,a-24],"#2e3a30",1.4),n.fillStyle="#2e5a3a",n.beginPath(),n.moveTo(18,a-28),n.lineTo(30,a-24),n.lineTo(26,a-18),n.closePath(),n.fill(),sn(n,12,a-1,5,1.4,"#2e3a30"),jc(n,40,a,18,0,0,.7),se(n,-2,a,e+4,4,ce(r,1.05),{side:2}),ie(n,3,a+4,3,t-a-4,ce(r,.7)),se(n,e-30,a+4,28,t-a-4,r,{side:3}),yl(n,e-30,a+4,28,t-a-4,r,4);for(let o=0;o<2;o++){let l=a+7+o*13;i&&o===0?(En(n,e-27,l,22,11),se(n,e-31,l+3,24,11,ce(r,1.05),{side:2}),mn(n,e-23,l+8,8,"#c7b07a"),Pi(n,e-20,l+2,-.3),Pi(n,e-40,t-1,.05)):(pn(n,e-27,l,22,11,r),mn(n,e-20,l+5,8,"#c7b07a"))}};mt.officedesk=(n,e,t,i,s)=>{let r=s.wood,a=t-32;se(n,22,a-26,32,22,"#1d2024",{r:2,side:3}),ie(n,25,a-23,26,16,i?"#0a1014":"#24404a"),i||ie(n,27,a-21,9,2,"rgba(160,220,255,.3)"),ie(n,35,a-4,6,4,"#2a2a2a"),se(n,56,a-3,18,3,"#d8d4c8",{side:0,lw:.4}),i||(se(n,6,a-8,12,8,"#e8e2d0",{side:0,lw:.4}),se(n,7,a-11,12,3,"#e8e2d0",{side:0,lw:.4})),se(n,-2,a,e+4,3,r,{side:1}),ie(n,2,a+3,3,t-a-3,"#4a4a4a"),se(n,e-26,a+3,24,t-a-3,ce(s.metal,.95),{side:3});for(let o=0;o<3;o++){let l=a+6+o*8.5;i&&o===1?(En(n,e-24,l,20,7),se(n,e-28,l+2,22,7,ce(s.metal,1.05),{side:2}),mn(n,e-20,l+5,7)):(pn(n,e-24,l,20,7,s.metal),mn(n,e-17,l+3.5,7))}if(i)for(let o=0;o<4;o++)Pi(n,10+X()*40,t-.8,(X()-.5)*.3)};mt.filing=(n,e,t,i,s)=>{let r=s.metal;se(n,0,0,e,t,r,{side:3});let a=(t-6)/4;for(let o=0;o<4;o++){let l=3+o*a;if(i&&o===1){En(n,2,l,e-4,a-1.5);for(let c=0;c<4;c++)ie(n,5+c*6,l-4-X()*3,5,8,["#e0c070","#c8d0d8","#e0c070","#d8b0a0"][c]);se(n,0,l+4,e,a-1.5,ce(r,1.05),{side:2}),mn(n,e/2-4,l+a/2+3,8,"#d0d4d8")}else pn(n,2,l,e-4,a-1.5,r),ie(n,e/2-5,l+3,10,3.5,"#e8e4d8"),mn(n,e/2-4,l+a/2+1,8,"#d0d4d8")}ca(n,0,0,e,t,.12)};mt.locker=(n,e,t,i,s)=>{let r=s.paint==="#d9dedd"?"#8aa8a8":ce(s.paint,1.05);if(se(n,0,0,e,t-3,r,{side:3}),i)En(n,3,4,e-6,t-12),ie(n,4,22,e-8,1.5,"#5a5a5a"),ut(n,[8,10,e-8,10],"#8a8a8a",1),X()<.6&&di(n,8,12,20,34,"#3a4a3a"),se(n,7,t-20,22,10,"#3a3028",{r:3,side:2}),Ri(n,e,4,t-12,1,12,r);else{pn(n,3,4,e-6,t-12,r,.97);for(let a=0;a<5;a++)ie(n,9,10+a*3.4,e-18,1.6,ce(r,.55));for(let a=0;a<5;a++)ie(n,9,t-30+a*3.4,e-18,1.6,ce(r,.55));se(n,e-11,t*.48,4,10,"#c7cbd0",{side:1,lw:.5}),sn(n,e-9,t*.48+14,2.2,2.2,"#b08a3a"),ca(n,0,0,e,t,.14),uf(n,0,0,e,t)}};mt.medcab=(n,e,t,i,s)=>{let r="#e2e6e4";se(n,0,0,e,t-3,r,{side:3}),ie(n,e/2-6,5,12,4,"#c0302a"),ie(n,e/2-2,1,4,12,"#c0302a");let a=16,o=t*.48;En(n,4,a,e-8,o),ie(n,4,a,e-8,o,"rgba(120,150,150,.25)");for(let l=0;l<2;l++){let c=a+(l+1)*o/2;ie(n,4,c-1,e-8,1.5,"#e8eeee");for(let h=0;h<4;h++)(!i||X()<.3)&&ha(n,7+h*9,c-1,12,["#8a5a2a","#e8e8e0","#3a6aaa","#5aa05a"][(l+h)%4])}i?Ri(n,4,a,o,-1,11,"#cfe0e0"):(ie(n,4,a,e-8,o,"rgba(200,230,230,.18)"),ut(n,[8,a+4,20,a+26],"rgba(255,255,255,.4)",.8),ut(n,[e/2,a,e/2,a+o],"#b0b8b8",1)),pn(n,4,a+o+4,e-8,t-a-o-12,r),mn(n,e/2-5,a+o+10,10)};mt.labbench=(n,e,t,i,s)=>{let r=t-36,a="#c8d0d0";se(n,8,r-4,14,4,"#2a2e30",{side:1}),ut(n,[14,r-4,14,r-16,20,r-22],"#2a2e30",3),se(n,17,r-28,6,8,"#3a3e40",{side:1,lw:.5});let o=["#58c08a","#c0a03a","#6a8ac0","#c05a5a"];for(let h=0;h<4;h++){if(i&&h%2)continue;let u=36+h*13,f=o[h];n.fillStyle="rgba(220,240,240,.75)",n.beginPath(),n.moveTo(u,r-18),n.lineTo(u+4,r-18),n.lineTo(u+4,r-11),n.lineTo(u+9,r),n.lineTo(u-5,r),n.lineTo(u,r-11),n.closePath(),n.fill(),n.strokeStyle=rn,n.lineWidth=.4,n.stroke(),n.fillStyle=f,n.beginPath(),n.moveTo(u-3.4,r-2),n.lineTo(u+7.4,r-2),n.lineTo(u+6,r-6),n.lineTo(u-2,r-6),n.closePath(),n.fill()}se(n,-2,r,e+4,4,"#1f2a2c",{side:1}),se(n,0,r+4,e,t-r-4,a,{side:4});let l=3,c=(e-8)/l;for(let h=0;h<l;h++){let u=3+h*(c+1);if(i&&h===1){En(n,u,r+8,c-1,t-r-12);for(let f=0;f<3;f++)X()<.5&&ha(n,u+4+f*8,t-5,11,o[f]);Ri(n,u+c-1,r+8,t-r-12,1,8,a)}else pn(n,u,r+8,c-1,t-r-12,a),mn(n,u+c/2-5,r+13,10,"#8a9496")}};mt.trash=(n,e,t,i,s)=>{let r="#5a6a5c";n.beginPath(),n.moveTo(2,8),n.lineTo(e-2,8),n.lineTo(e-4,t),n.lineTo(4,t),n.closePath(),n.fillStyle=sr(n,2,e-2,ce(r,1.2),ce(r,.7)),n.fill(),n.strokeStyle=rn,n.lineWidth=.8,n.stroke();for(let a=0;a<4;a++)ut(n,[6+a*6,12,7+a*6,t-3],ce(r,.7),.7);i?(sn(n,e/2,8,e/2-2,2,"#1a1a14"),di(n,5,3,10,6,"#3a3a3a"),Pi(n,e/2+3,5,.6),n.save(),n.translate(e+6,t-2),n.rotate(.3),se(n,-10,-3,20,3,ce(r,1.1),{r:1,side:0}),n.restore(),Pi(n,-4,t-1,.1),eh(n,-10,t,5,"#3a7a3a")):(se(n,0,4,e,4,ce(r,1.1),{r:1.5,side:0}),se(n,e/2-4,1,8,3,ce(r,.9),{r:1,side:0}))};mt.crates=(n,e,t,i,s)=>{let r="#8a6a40",a=(o,l,c,h)=>{se(n,o,l-c,c,c,r,{side:2});for(let u=1;u<4;u++)ie(n,o+1,l-c+u*c/4,c-2,.7,ce(r,.7));if(ut(n,[o+2,l-2,o+c-2,l-c+2],ce(r,.6),2),ie(n,o,l-c,3,c,ce(r,.8)),ie(n,o+c-3,l-c,3,c,ce(r,.75)),h){ie(n,o+2,l-c,c-4,3,"#2a1e12"),n.fillStyle="#c9b06a";for(let u=0;u<6;u++)n.beginPath(),n.ellipse(o+4+X()*(c-8),l-c,3,1.5,X(),0,7),n.fill();n.save(),n.translate(o+c+4,l-2),n.rotate(-1.2),se(n,-c/2,-2,c,3,r,{side:0}),n.restore()}};a(0,t,34,!1),a(36,t,30,!1),a(8,t-34,26,i)};mt.shelves=(n,e,t,i,s)=>{let r="#4a5054";ie(n,0,0,3,t,r),ie(n,e-3,0,3,t,r),ie(n,1,0,1,t,"#6a7074");let a=4,o=(t-4)/a;for(let l=0;l<a;l++){let c=6+l*o+o-6,h=5;for(;h<e-12;){let u=X();if(i&&X()<.5){h+=10;continue}if(u<.4){let f=12+X()*8,m=9+X()*9;la(n,h,c,f,m,X()<.5?"#a07a4a":"#8a7a5a",i&&X()<.5),h+=f+2}else u<.7?(eh(n,h,c,5,["#a83a2a","#3a6a2a","#c8a03a"][X()*3|0]),h+=7):(ha(n,h,c,13,["#4a6a3a","#8a5a2a","#c8c8c0"][X()*3|0]),h+=7)}se(n,0,c,e,3,"#6a7074",{side:0,ao:!1,lw:.5})}i&&(la(n,e-18,t,14,8,"#a07a4a",!0),Pi(n,8,t-.6,.1))};mt.toolbox=(n,e,t,i,s)=>{let r="#b3261e",a=t-18;i?(En(n,3,a,e-6,4),n.fillStyle=ce(r,.85),n.beginPath(),n.moveTo(1,a),n.lineTo(-4,a-12),n.lineTo(e-10,a-14),n.lineTo(e-3,a),n.closePath(),n.fill(),n.strokeStyle=rn,n.lineWidth=.8,n.stroke(),ut(n,[12,a+2,18,a-10],"#9aa0a6",2.2),ut(n,[24,a+2,26,a-8],"#7a4a2a",2.6),ut(n,[30,a+2,34,a-6],"#c9a24a",1.6),se(n,0,a+1,e,t-a-1,r,{r:2,side:3})):(se(n,0,a,e,t-a,r,{r:2,side:3}),se(n,2,a-4,e-4,5,ce(r,1.05),{r:2,side:2}),ut(n,[e/2-9,a-4,e/2-7,a-12,e/2+7,a-12,e/2+9,a-4],"#2a2a2a",2),ie(n,e/2-3,a+2,6,3,"#c7cbd0")),ie(n,2,a+6,e-4,1,ce(r,.7))};mt.safe=(n,e,t,i,s)=>{let r="#3e4448",a=t-10;if(se(n,4,a,e-8,10,ce(s.wood,.9),{side:2}),se(n,0,0,e,a,r,{r:2,side:4}),i)En(n,4,4,e-8,a-8),ie(n,5,a/2,e-10,1.4,"#5a5a5a"),X()<.5&&Pi(n,e/2,a-6,.1,"#c8b88a"),Ri(n,e,3,a-6,1,14,r);else{pn(n,4,4,e-8,a-8,r,1.04);let o=e/2-3,l=a/2;sn(n,o,l,8,8,"#2a2e30"),sn(n,o,l,6.5,6.5,"#9aa0a6"),sn(n,o,l,4.5,4.5,"#5a6064");for(let c=0;c<12;c++){let h=c/12*6.28;ie(n,o+Math.cos(h)*5.6-.3,l+Math.sin(h)*5.6-.3,.6,.6,"#2a2a2a")}se(n,e-11,l-7,3,14,"#c7cbd0",{side:1,lw:.5})}};mt.bar=(n,e,t,i,s)=>{let r=s.wood,a=t-44,o=["#5a8a3a","#8a3a2a","#c9a24a","#3a5a8a","#e0e0d8"];for(let l=0;l<7;l++)i&&X()<.5||ha(n,8+l*11,a,13+X()*6,o[l%5]);if(i){n.fillStyle="rgba(200,230,230,.7)";for(let l=0;l<6;l++)n.beginPath(),n.moveTo(e*.6+l*3,t),n.lineTo(e*.6+l*3+2,t-2),n.lineTo(e*.6+l*3+3,t),n.fill()}se(n,-3,a,e+6,5,"#c9a24a",{r:2,side:2}),se(n,0,a+5,e,t-a-5,r,{side:5});for(let l=0;l<3;l++)pn(n,5+l*(e-10)/3,a+11,(e-10)/3-4,t-a-18,r);ie(n,0,t-8,e,2,"#c9a24a")};mt.mattress=(n,e,t,i,s)=>{let r="#9a9278";if(i)n.save(),n.translate(e/2,t),n.rotate(-.08),se(n,-e/2,-12,e,10,ce(r,.9),{r:3,side:0}),n.restore(),ut(n,[e*.3,t-8,e*.4,t-6,e*.5,t-9],"#3a2a1a",1),sn(n,e*.4,t-7,5,1.6,"#d8ccb0"),di(n,e-20,t-5,22,4,"#4a5a3a");else{se(n,0,t-11,e,11,r,{r:3,side:0});for(let a=1;a<6;a++)sn(n,a*e/6,t-6,1,1,ce(r,.7));sn(n,e*.35,t-7,9,2.5,"rgba(110,60,30,.4)"),di(n,e*.45,t-15,e*.5,7,"#4a5a3a")}};mt.armchair=(n,e,t,i,s)=>{let r=ce(s.fabric,.95);se(n,6,t-58,e-12,32,ce(r,.9),{r:7,side:3}),se(n,4,t-28,e-8,14,r,{r:3,side:3}),se(n,0,t-36,10,24,ce(r,.85),{r:4,side:2}),se(n,e-10,t-36,10,24,ce(r,.8),{r:4,side:2}),ie(n,6,t-14,3,14,"#1a1210"),ie(n,e-9,t-14,3,14,"#1a1210")};mt.plant=(n,e,t,i,s)=>{n.beginPath(),n.moveTo(5,t-22),n.lineTo(e-5,t-22),n.lineTo(e-8,t),n.lineTo(8,t),n.closePath(),n.fillStyle=sr(n,5,e-5,"#b8683a","#6a3a1e"),n.fill(),n.strokeStyle=rn,n.lineWidth=.7,n.stroke(),ie(n,4,t-24,e-8,3,"#8a4a2a");for(let r=0;r<9;r++){let a=-Math.PI/2+(r-4)*.3,o=26+X()*22,l=e/2+Math.cos(a)*o,c=t-24+Math.sin(a)*o;ut(n,[e/2,t-24,l,c],"#3a4a22",.9),n.save(),n.translate(l,c),n.rotate(a+Math.PI/2),n.fillStyle=r%3?"#6a7a3a":"#8a7a3a",n.beginPath(),n.ellipse(0,0,3.6,8,0,0,7),n.fill(),n.strokeStyle=rn,n.lineWidth=.4,n.stroke(),n.restore()}};mt.piano=(n,e,t,i,s)=>{se(n,0,0,e,t-6,"#17151a",{side:5}),ie(n,-2,-3,e+4,5,"#211d24"),se(n,4,t-36,e-8,7,"#efe9dc",{side:0});for(let r=0;r<13;r++)ie(n,6+r*5.2,t-36,2.2,4.4,"#111");ie(n,8,6,22,18,"rgba(255,255,255,.07)");for(let r=0;r<2;r++)se(n,14+r*26,-12,10,12,["#b08a3a","#e8e0c8"][r],{side:1,lw:.4});ie(n,4,t-6,4,6,"#111"),ie(n,e-8,t-6,4,6,"#111")};mt.cooler=(n,e,t,i,s)=>{se(n,2,t-50,e-4,50,"#dcdfe2",{side:3}),bn(n,3,t-76,e-6,26,7),n.fillStyle="rgba(110,170,220,.85)",n.fill(),n.strokeStyle=rn,n.lineWidth=.6,n.stroke(),ie(n,6,t-72,3,18,"rgba(255,255,255,.4)"),ie(n,6,t-40,3,3,"#3a6aaa"),ie(n,e-9,t-40,3,3,"#aa3a3a")};mt.barrels=(n,e,t,i,s)=>{for(let[r,a]of[[0,"#3a5a4a"],[30,"#7a3a2a"]])se(n,r,t-44,28,44,a,{r:4,side:4}),ie(n,r,t-34,28,2.4,ce(a,.6)),ie(n,r,t-12,28,2.4,ce(a,.6));n.fillStyle="#e0c040",n.beginPath(),n.moveTo(44,t-30),n.lineTo(50,t-20),n.lineTo(38,t-20),n.closePath(),n.fill()};mt.lamp=(n,e,t,i,s)=>{sn(n,e/2,t-2,8,2,"#2a2a2a"),ut(n,[e/2,t-2,e/2,26],"#2a2a2a",1.6),n.beginPath(),n.moveTo(e/2-12,26),n.lineTo(e/2-7,4),n.lineTo(e/2+7,4),n.lineTo(e/2+12,26),n.closePath(),n.fillStyle=Ci(n,4,26,"#e8d8a8","#c8a868"),n.fill(),n.strokeStyle=rn,n.lineWidth=.6,n.stroke()};mt.table=(n,e,t,i,s)=>{let r=s.wood;se(n,-2,0,e+4,5,r,{side:2}),ie(n,4,5,3,t-5,ce(r,.7)),ie(n,e-7,5,3,t-5,ce(r,.6)),ie(n,6,9,e-12,2,ce(r,.7)),se(n,e/2-6,-7,12,7,"#e8e2d0",{r:2,side:1,lw:.5})};mt.sbed=(n,e,t,i,s,r=1)=>{if(r<=1){for(let o=0;o<2;o++){se(n,4+o*56,t-14,52,14,"#9a7a4a",{side:2});for(let l=0;l<3;l++)ie(n,6+o*56,t-12+l*4.4,48,1,"#6a5232")}se(n,2,t-24,e-4,10,"#7a7660",{r:3,side:0}),di(n,30,t-28,e-40,10,"#4f5c3a"),bn(n,8,t-30,20,8,3),n.fillStyle="#cfc8b0",n.fill();return}let a=r>=3?"#6a4228":"#7a6a52";if(se(n,0,t-54,12,54,a,{r:3,side:3}),r>=3&&pn(n,3,t-48,6,30,a),se(n,e-8,t-30,8,30,a,{r:2,side:2}),se(n,8,t-20,e-14,11,ce(a,.9),{side:0}),se(n,10,t-28,e-18,9,"#e6e0d0",{r:3,side:0}),bn(n,14,t-36,24,10,4),n.fillStyle="#f2ede2",n.fill(),n.strokeStyle=rn,n.lineWidth=.6,n.stroke(),di(n,38,t-33,e-48,15,r>=3?"#7a2e3a":"#4f5c3a"),r>=3){n.fillStyle="#8a3a2a",bn(n,10,t-2,e-20,4,2),n.fill();for(let o=0;o<8;o++)ie(n,14+o*12,t-1,6,1.5,"#c9a24a")}};mt.sstove=(n,e,t,i,s,r=1)=>{if(r<=1){se(n,10,t-34,50,34,"#8a6a40",{side:2}),ut(n,[12,t-2,58,t-32],"#5a3e22",1.6),ut(n,[12,t-32,58,t-2],"#5a3e22",1.6),se(n,20,t-44,30,10,"#4a4e52",{r:2,side:2}),sn(n,35,t-46,9,2,"#2a2a2a"),sn(n,35,t-46,5,1.2,"#4aa0ff"),se(n,24,t-60,22,14,"#7a7e82",{r:3,side:3}),ie(n,20,t-56,4,2,"#2a2a2a"),ie(n,46,t-56,4,2,"#2a2a2a");for(let l=0;l<3;l++)ut(n,[30+l*5,t-62,28+l*5,t-70,32+l*5,t-78],"rgba(230,230,230,.35)",1.2);return}let a=r>=3?"#e4e0d8":"#c8c4bc",o=t-50;r>=3&&(n.beginPath(),n.moveTo(10,0),n.lineTo(e-10,0),n.lineTo(e-2,18),n.lineTo(2,18),n.closePath(),n.fillStyle=Ci(n,0,18,"#9aa0a6","#6a7076"),n.fill(),n.strokeStyle=rn,n.lineWidth=.8,n.stroke(),ie(n,8,18,e-16,2,"#2a2a2a")),se(n,0,o,e,50,a,{side:4}),ie(n,6,o+14,e-12,30,"#2a2a2a"),ie(n,9,o+17,e-18,24,"#3a3a3a"),ie(n,9,o+17,e-18,4,"rgba(255,140,60,.25)"),mn(n,14,o+10,e-28,"#d8dcdf");for(let l=0;l<4;l++)ir(n,12+l*((e-24)/3),o+5,2,"#2a2a2a");for(let l=0;l<2;l++)sn(n,18+l*(e-36),o-1,9,2,"#1a1a1a"),sn(n,18+l*(e-36),o-1.6,6,1.2,"#4aa0ff");se(n,8,o-16,22,14,"#a83a2a",{r:3,side:3}),se(n,e-30,o-12,22,10,"#5a5e62",{r:2,side:2}),ie(n,e-8,o-9,7,2,"#2a2a2a");for(let l=0;l<3;l++)ut(n,[14+l*5,o-18,12+l*5,o-26,16+l*5,o-34],"rgba(230,230,230,.35)",1.2)};mt.sbench=(n,e,t,i,s,r=1)=>{let a="#8a6a44",o=t-42;if(r>=2){se(n,6,0,e-12,o-20,"#5a4a36",{side:3});for(let c=0;c<30;c++)sn(n,12+c%10*((e-24)/9),6+(c/10|0)*12,.7,.7,"#2a2016");let l=["#9aa0a6","#7a4a2a","#c9a24a","#aa3a2a","#9aa0a6","#3a6a8a"];for(let c=0;c<6;c++){let h=14+c*((e-28)/5);ut(n,[h,8,h,24+c%3*5],l[c],2.4),c%2&&se(n,h-3,6,6,5,l[c],{side:1,lw:.4})}}se(n,-2,o,e+4,6,a,{side:2}),yl(n,-2,o,e+4,6,a,8),ie(n,4,o+6,5,t-o-6,ce(a,.7)),ie(n,e-9,o+6,5,t-o-6,ce(a,.6)),ie(n,6,t-14,e-12,3,ce(a,.7)),se(n,10,o-10,16,10,"#3a4252",{side:2}),ie(n,8,o-13,20,3,"#5a6272"),ut(n,[26,o-5,34,o-5],"#9aa0a6",1.6),se(n,e-40,o-6,26,6,"#7a7e82",{side:1,lw:.5}),ut(n,[e-34,o-6,e-22,o-14],"#c9a24a",1.6),r>=3?(se(n,e*.45,o-40,10,40,"#3a5a8a",{side:2}),se(n,e*.45-6,o-46,22,10,"#3a5a8a",{r:2,side:2}),ut(n,[e*.45+5,o-36,e*.45+5,o-22],"#c7cbd0",1.4),la(n,e-34,t,22,16,"#a07a4a",!1)):la(n,e-30,t,18,12,"#a07a4a",!0)};mt.vending=(n,e,t,i)=>{se(n,0,0,e,t-3,"#b8282a",{r:3,side:5}),ie(n,4,6,e-8,10,"#1a1414"),n.fillStyle="#ffd34a",n.font="700 7px sans-serif",n.textAlign="center",n.fillText("\u0421\u041D\u042D\u041A",e/2-4,14),bn(n,4,20,e-18,t-46,2),n.fillStyle="#121a20",n.fill();let s=["#c03a2a","#3a7ac0","#e0b03a","#4aa05a","#e8e0d0"];for(let r=0;r<4;r++)for(let a=0;a<3;a++)i&&(r+a)%2||(se(n,7+a*8.6,26+r*13,6,9,s[(r*3+a)%5],{side:1,ao:!1,lw:.4}),ie(n,6,36+r*13,e-20,1,"#5a6066"));n.fillStyle="rgba(200,230,255,.16)",n.beginPath(),n.moveTo(4,20),n.lineTo(16,20),n.lineTo(4,50),n.closePath(),n.fill(),i&&(ut(n,[10,30,18,42,14,50,24,62],"rgba(255,255,255,.7)",.6),ut(n,[18,42,28,40],"rgba(255,255,255,.6)",.5)),se(n,e-13,22,9,24,"#3a3e42",{side:1,lw:.5});for(let r=0;r<4;r++)ie(n,e-11,26+r*5,5,3,"#8a9096");ie(n,e-11,46,5,6,"#111"),ie(n,6,t-22,e-20,9,"#0c0c0c"),ie(n,6,t-22,e-20,2,"#2a2a2a"),ie(n,3,t-3,6,3,"#1a1a1a"),ie(n,e-9,t-3,6,3,"#1a1a1a"),ca(n,0,0,e,t,.2)};function vs(n,e,t,i,s,r,a=1,o=1){let l=mt[e];return l?(Gn(a*131+e.length*17),Qc(n,-2,t+2,i-.5,e==="mattress"||e==="toolbox"?.35:.55),l(n,t,i,s,r,o),!0):!1}var ua=2.8,Ge=(n,e,t)=>$e(n,e,t),Se=(n,e,t,i,s,r)=>{n.fillStyle=r,n.fillRect(e,t,i,s)},Kt=(n,e,t,i=1)=>{n.strokeStyle=t,n.lineWidth=i,n.lineCap="round",n.beginPath(),n.moveTo(e[0],e[1]);for(let s=2;s<e.length;s+=2)n.lineTo(e[s],e[s+1]);n.stroke()},an=(n,e,t,i,s,r)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,0,0,7),n.fill()},mi=(n,e,t,i,s)=>{let r=n.createLinearGradient(0,e,0,t);return r.addColorStop(0,i),r.addColorStop(1,s),r};function Dt(n,e,t,i,s,r){n.fillStyle=mi(n,t,t+s,Ge(r,1.1),Ge(r,.82)),n.fillRect(e,t,i,s),Se(n,e,t,i,1,Ge(r,1.3)),n.strokeStyle="rgba(12,10,12,.8)",n.lineWidth=.7,n.strokeRect(e+.35,t+.35,i-.7,s-.7)}function pi(n,e,t,i=ua){let s=document.createElement("canvas");s.width=Math.ceil(n*i),s.height=Math.ceil(e*i);let r=s.getContext("2d");r.scale(i,i),t(r,s);let a=new ds(s);return a.colorSpace=jt,a.anisotropy=4,a}var bl={z0:{wall:"#7d8476",low:"#4f6352",split:.48,floor:"#3a3c3a",board:"#2a2c2a",lamp:"cage",kind:"concrete"},z1:{wall:["#8a6a62","#6a7a8a","#8a845a","#6a8070","#86705a"],low:"#5a3e2a",split:.7,floor:"#5a3e28",board:"#2e2016",lamp:"shade",kind:"paper"},z2:{wall:["#a8a69a","#9aa2a6","#b0a890"],low:"#6a6e72",split:.78,floor:"#3e4656",board:"#2a2e36",lamp:"panel",kind:"office"},z3:{wall:["#c4d4d0","#c8d0d4"],low:"#e2e8e6",split:.55,floor:"#6a7a78",board:"#3a4644",lamp:"tube",kind:"tiles"},z4:{wall:["#3c2f44","#4a2a32","#2c3442"],low:"#3a221c",split:.62,floor:"#4a2e22",board:"#c9a24a",lamp:"chandelier",kind:"damask"},base:{wall:"#6a4c32",low:"#4e3622",split:.72,floor:"#4a3420",board:"#2a1d12",lamp:"bulb",kind:"planks"}},x_=n=>Array.isArray(n.wall)?n.wall[X()*n.wall.length|0]:n.wall;function y_(n,e,t,i,s){let r=t-8,a=r*i.split;if(Se(n,0,0,e,t,s),i.kind==="paper"){let o=Ge(s,.88);if(X()<.5)for(let l=0;l<e;l+=14)Se(n,l,0,6,a,o),Se(n,l+9,0,1,a,Ge(s,1.08));else for(let l=10;l<a;l+=24)for(let c=l/24%2*12+6;c<e;c+=24){n.fillStyle=o;for(let h=0;h<4;h++)n.beginPath(),n.ellipse(c+Math.cos(h*1.57)*3,l+Math.sin(h*1.57)*3,2.6,1.6,h*1.57,0,7),n.fill();an(n,c,l,1.2,1.2,Ge(s,1.15))}for(let l=0;l<2;l++){let c=X()*(e-40),h=20+X()*(a-60);n.fillStyle=Ge(s,.62),n.beginPath(),n.moveTo(c,h),n.lineTo(c+14+X()*16,h+4),n.lineTo(c+8,h+26+X()*20),n.closePath(),n.fill(),n.fillStyle=Ge(s,1.2),n.beginPath(),n.moveTo(c+14,h+4),n.lineTo(c+22,h+12),n.lineTo(c+10,h+20),n.fill()}}if(i.kind==="damask"){n.fillStyle=Ge(s,1.18);for(let o=12;o<a;o+=26)for(let l=o/26%2*13;l<e;l+=26)n.beginPath(),n.moveTo(l,o-8),n.quadraticCurveTo(l+7,o,l,o+8),n.quadraticCurveTo(l-7,o,l,o-8),n.fill(),an(n,l,o-11,1.2,1.2,Ge(s,1.3))}if(i.kind==="office")for(let o=0;o<e;o+=50)Se(n,o,0,1.2,a,Ge(s,.8)),Se(n,o+1.2,0,.8,a,Ge(s,1.1));if(i.kind==="tiles"){n.strokeStyle=Ge(s,.86),n.lineWidth=.5;for(let o=0;o<e;o+=20)n.beginPath(),n.moveTo(o,0),n.lineTo(o,a),n.stroke();for(let o=0;o<a;o+=20)n.beginPath(),n.moveTo(0,o),n.lineTo(e,o),n.stroke()}if(i.kind==="concrete"){for(let o=40;o<a;o+=46)Se(n,0,o,e,1,Ge(s,.82));for(let o=X()*60;o<e;o+=70+X()*40)Se(n,o,0,1,a,Ge(s,.86))}if(i.kind==="planks")for(let o=0;o<e;o+=16)Se(n,o,0,1.2,r,Ge(s,.62)),Se(n,o+1.2,0,.7,r,Ge(s,1.12)),X()<.5&&an(n,o+7,X()*r,2.4,1.4,Ge(s,.7));if(i.kind!=="planks"){let o=i.low,l=r-a;if(n.fillStyle=mi(n,a,r,Ge(o,1.06),Ge(o,.86)),n.fillRect(0,a,e,l),i.kind==="paper"||i.kind==="damask"){for(let c=6;c<e-30;c+=46)Se(n,c,a+8,38,l-18,Ge(o,.9)),Se(n,c,a+8,38,1,Ge(o,.62)),Se(n,c,a+l-11,38,1,Ge(o,1.25));Se(n,0,a-3,e,4,i.kind==="damask"?"#c9a24a":Ge(o,1.25)),Se(n,0,a+1,e,1,"rgba(0,0,0,.35)")}else if(i.kind==="tiles"){n.strokeStyle=Ge(o,.84),n.lineWidth=.5;for(let c=0;c<e;c+=12)n.beginPath(),n.moveTo(c,a),n.lineTo(c,r),n.stroke();for(let c=a;c<r;c+=12)n.beginPath(),n.moveTo(0,c),n.lineTo(e,c),n.stroke();Se(n,0,a-2,e,3,"#3a8a8a")}else Se(n,0,a-2,e,2,Ge(o,.7))}Se(n,0,0,e,5,Ge(s,.7)),Se(n,0,5,e,1.4,Ge(s,1.2));for(let o=0;o<5;o++){let l=X()*e,c=30+X()*90;n.fillStyle=mi(n,6,6+c,"rgba(30,20,10,.28)","rgba(30,20,10,0)"),n.fillRect(l,6,3+X()*9,c)}n.strokeStyle="rgba(20,14,10,.45)",n.lineWidth=.6;for(let o=0;o<2;o++){let l=X()*e,c=X()*a;n.beginPath(),n.moveTo(l,c);for(let h=0;h<6;h++)l+=(X()-.4)*12,c+=4+X()*8,n.lineTo(l,c);n.stroke()}for(let o=0;o<18;o++)n.fillStyle=`rgba(0,0,0,${X()*.07})`,n.beginPath(),n.ellipse(X()*e,X()*t,8+X()*30,5+X()*16,0,0,7),n.fill();if(Se(n,0,r-6,e,6,i.board),Se(n,0,r-6,e,1,Ge(i.board,1.5)),n.fillStyle=mi(n,r,t,Ge(i.floor,1.25),Ge(i.floor,.8)),n.fillRect(0,r,e,t-r),i.kind==="paper"||i.kind==="damask"||i.kind==="planks")for(let o=X()*20;o<e;o+=22+X()*10)Se(n,o,r,.8,t-r,Ge(i.floor,.7));Se(n,0,r,e,1,Ge(i.floor,1.5))}function b_(n,e,t,i,s,r){let a=r==="damask"?"#c9a24a":r==="planks"?"#5a3e24":r==="tiles"||r==="office"?"#d8dcdc":"#e4ddcc";if(Se(n,e-6,t-6,i+12,s+12,"rgba(0,0,0,.35)"),Dt(n,e-5,t-5,i+10,s+10,a),n.clearRect(e,t,i,s),n.fillStyle="rgba(70,100,130,.16)",n.fillRect(e,t,i,s),n.fillStyle="rgba(200,220,255,.08)",n.beginPath(),n.moveTo(e,t),n.lineTo(e+i*.4,t),n.lineTo(e,t+s*.5),n.closePath(),n.fill(),Se(n,e+i/2-1.5,t,3,s,a),Se(n,e,t+s*.42-1.5,i,3,a),Dt(n,e-9,t+s+4,i+18,4,Ge(a,.9)),r==="office")for(let o=0;o<9;o++)Se(n,e,t+o*4.2,i,2.8,o===8?"#5a6268":"#c8ccd0");else if(r==="planks")for(let[o,l]of[[-.25,.3],[.2,.65]])n.save(),n.translate(e+i/2,t+s*l),n.rotate(o),Dt(n,-i/2-8,-5,i+16,10,"#7a5a3a"),an(n,-i/2-3,0,1,1,"#2a2a2a"),an(n,i/2+3,0,1,1,"#2a2a2a"),n.restore();else if(r!=="concrete"&&r!=="tiles"){let o=r==="damask"?"#5a1f33":"#6a3a3a";for(let l of[e-16,e+i+4]){n.fillStyle=mi(n,t-10,t+s+12,Ge(o,1.1),Ge(o,.75)),n.fillRect(l,t-10,12,s+22);for(let c=0;c<3;c++)Se(n,l+2+c*4,t-8,1,s+18,Ge(o,.7))}Se(n,e-20,t-12,i+40,3,"#2a2a2a")}}function M_(n,e,t){if(t==="chandelier"){Kt(n,[e,0,e,18],"#2a2a2a",1),Se(n,e-22,18,44,2.4,"#c9a24a");for(let i=0;i<5;i++)Kt(n,[e-18+i*9,12,e-18+i*9,18],"#c9a24a",1.2),an(n,e-18+i*9,10,2.6,3,"#fff0c0");return 20}return t==="panel"?(Se(n,e-30,0,60,5,"#2a2e33"),Se(n,e-27,5,54,3,"#f4f8ff"),8):t==="tube"?(Se(n,e-34,6,68,4,"#3a3e42"),Se(n,e-32,10,64,2.4,"#e8fff8"),Kt(n,[e-26,0,e-26,6],"#3a3e42",.8),Kt(n,[e+26,0,e+26,6],"#3a3e42",.8),12):t==="cage"?(Kt(n,[e,0,e,12],"#222",1),an(n,e,17,5.5,6,"#ffe2a8"),Kt(n,[e-6,17,e+6,17],"#333",.8),Kt(n,[e,11,e,23],"#333",.8),22):t==="bulb"?(Kt(n,[e,0,e,22],"#222",1),an(n,e,27,4.4,5,"#fff0c0"),30):(Kt(n,[e,0,e,26],"#1d1d1d",1),n.fillStyle="#7a3a2a",n.beginPath(),n.moveTo(e-13,36),n.lineTo(e-5,25),n.lineTo(e+5,25),n.lineTo(e+13,36),n.closePath(),n.fill(),Se(n,e-13,35.4,26,1.6,"#4a2018"),36)}function mf(n,e,t,i,s,r){let a=r?"255,226,170":"220,236,255",o=n.createRadialGradient(e,t,4,e,t+40,i*.7);o.addColorStop(0,`rgba(${a},.30)`),o.addColorStop(.5,`rgba(${a},.10)`),o.addColorStop(1,`rgba(${a},0)`),n.fillStyle=o,n.fillRect(0,0,i,s),o=n.createRadialGradient(e,s*.45,s*.3,e,s*.5,i*.9),o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,.3)"),n.fillStyle=o,n.fillRect(0,0,i,s)}var th={clock(n,e,t){an(n,e,t,12,12,"#3a3226"),an(n,e,t,10,10,"#efe9dc"),Kt(n,[e,t,e,t-7],"#222",1.2),Kt(n,[e,t,e+5,t+2],"#222",1);for(let i=0;i<12;i++){let s=i/12*6.28;Se(n,e+Math.cos(s)*8-.4,t+Math.sin(s)*8-.4,.8,.8,"#333")}},frame(n,e,t,i){Dt(n,e-20,t-15,40,30,i?"#c9a24a":"#6a4a2a"),n.fillStyle=mi(n,t-11,t+11,"#5a6a7a","#2a3020"),n.fillRect(e-16,t-11,32,22),n.fillStyle="#1c2218",n.beginPath(),n.moveTo(e-16,t+11),n.lineTo(e-6,t),n.lineTo(e,t+5),n.lineTo(e+8,t-3),n.lineTo(e+16,t+11),n.fill()},frameGold(n,e,t){th.frame(n,e,t,!0)},photo(n,e,t){Dt(n,e-9,t-12,18,24,"#2a2a2a"),Se(n,e-7,t-10,14,20,"#d8d0c0"),an(n,e,t-3,3.4,4,"#6a5a4a"),Se(n,e-5,t+2,10,7,"#4a5a6a")},board(n,e,t){Dt(n,e-34,t-20,68,40,"#e4e8e8"),Kt(n,[e-24,t-8,e-6,t-12,e+10,t-2,e+22,t-10],"#2a4a8a",1),Kt(n,[e-22,t+6,e+20,t+8],"#aa2a2a",1)},poster(n,e,t){Se(n,e-14,t-20,28,40,"#d8c8a0"),Se(n,e-11,t-16,22,14,"#a83a2a");for(let i=0;i<4;i++)Se(n,e-10,t+2+i*4,20-i*3,1.4,"#3a3a3a")},map(n,e,t){Dt(n,e-30,t-20,60,40,"#d8ccaa"),n.strokeStyle="#7a6a4a",n.lineWidth=.5;for(let i=0;i<6;i++)n.beginPath(),n.moveTo(e-28+i*10,t-18),n.lineTo(e-24+i*9,t+18),n.stroke();Kt(n,[e-20,t+10,e-4,t-4,e+14,t+6],"#aa2a2a",1.4),an(n,e+14,t+6,2,2,"#aa2a2a")},biohaz(n,e,t){n.fillStyle="#e0b020",n.beginPath(),n.moveTo(e,t-14),n.lineTo(e+14,t+10),n.lineTo(e-14,t+10),n.closePath(),n.fill(),an(n,e,t+3,4,4,"#15171c"),an(n,e,t+3,2,2,"#e0b020")},monitor(n,e,t){Dt(n,e-24,t-16,48,32,"#15191c"),Se(n,e-21,t-13,42,26,"#04100c"),Kt(n,[e-20,t,e-9,t,e-6,t-9,e-1,t+8,e+3,t,e+20,t],"#58ffb0",1)},vent(n,e,t){Dt(n,e-18,t-9,36,18,"#5a6064");for(let i=0;i<5;i++)Se(n,e-15,t-7+i*3.4,30,1.4,"#2a2e30")},mirror(n,e,t){an(n,e,t,16,22,"#c9a24a"),an(n,e,t,13,19,"#5a6a7a"),n.fillStyle="rgba(255,255,255,.18)",n.beginPath(),n.ellipse(e-4,t-6,3,9,.4,0,7),n.fill()},sign(n,e,t){Dt(n,e-24,t-8,48,16,"#2a6a3a"),n.fillStyle="#d8f0d8",n.font="700 7px sans-serif",n.textAlign="center",n.fillText("\u042D\u0412\u0410\u041A\u0423\u0410\u0426\u0418\u042F",e,t+3)}};function S_(n,e,t){Se(n,0,t-3,e,7,"#6a4a30"),Se(n,0,t-3,e,1.4,"#8a6a4a"),Se(n,0,t+7,e,5,"#4a5a5c");for(let i=0;i<e;i+=60)Se(n,i+20,t-5,5,11,"#3a3a3a"),Se(n,i+50,t+5,4,9,"#2a3436");n.strokeStyle="#1a1a1a",n.lineWidth=1,n.beginPath(),n.moveTo(0,t+16),n.quadraticCurveTo(e*.3,t+30,e*.55,t+18),n.quadraticCurveTo(e*.8,t+28,e,t+20),n.stroke()}var ff={z0:["vent","poster","sign"],z1:["clock","frame","photo","frame"],z2:["board","clock","poster"],z3:["biohaz","monitor","vent"],z4:["frameGold","mirror","frameGold"],base:["map","poster"]};function df(n,e,t,i,s,r={}){let a=bl[t]||bl.z1;return pi(n,e,o=>{Gn(i),y_(o,n,e,a,x_(a));let l=e-8;t==="z0"&&S_(o,n,18);let c=s<0?26+X()*20:n-26-64-X()*20;b_(o,c,58,64,78,a.kind);let h=s<0?[c+110,n-40]:[40,c-50],u=ff[t]||ff.z1,f=h[0]+X()*Math.max(10,h[1]-h[0]);if(th[u[X()*u.length|0]](o,f,86),X()<.5){let v=f+(f<n/2?62:-62);v>30&&v<n-30&&Math.abs(v-c-32)>74&&th[u[X()*u.length|0]](o,v,98)}if(r.blood)for(let v=0;v<3;v++){let p=20+X()*(n-40),d=80+X()*80;o.fillStyle="rgba(80,6,4,.55)",o.beginPath(),o.ellipse(p,d,6+X()*8,4+X()*5,X(),0,7),o.fill(),Se(o,p-1,d,1.6,10+X()*24,"rgba(80,6,4,.5)")}r.furn&&r.furn.forEach(v=>{o.save(),o.translate(v.x,l+4-v.h),vs(o,v.k,v.w,v.h,!1,ts[t]||ts.z1,v.v),o.restore()});let m=n*.5+(X()-.5)*40,g=M_(o,m,a.lamp);mf(o,m,g,n,e,a.lamp!=="panel"&&a.lamp!=="tube")})}function pf(n,e,t,i,s,r){let a=bl[t]||bl.z1,o=t==="base"?"#6a5238":t==="z3"?"#9aaaa6":t==="z4"?"#5e4a52":t==="z2"?"#7a7e80":"#6a6e66";return pi(n,e,l=>{Gn(s);let c=e-8,h=Ge(o,.78);Se(l,0,0,n,e,o),l.fillStyle=mi(l,c*.55,c,Ge(h,1),Ge(h,.85)),l.fillRect(0,c*.55,n,c*.45),Se(l,0,c*.55-2,n,3,Ge(o,.6));for(let d=0;d<16;d++)l.fillStyle=`rgba(0,0,0,${X()*.1})`,l.beginPath(),l.ellipse(X()*n,X()*e,8+X()*30,5+X()*16,0,0,7),l.fill();l.save(),l.font='800 46px "Arial Narrow", Impact, sans-serif',l.textAlign="center",l.fillStyle="rgba(236,230,214,.30)",l.fillText(String(i),r.liftX,60),l.globalCompositeOperation="destination-out";for(let d=0;d<5;d++)Se(l,r.liftX-44+d*20+X()*4,18,1.8,46,"rgba(0,0,0,.9)");l.restore();let u=r.stairBot,f=r.stairTop,m=14;if(r.top){Dt(l,6,c-40,50,40,"#7a5a34"),Dt(l,58,c-28,34,28,"#8a6a40"),Dt(l,16,c-64,30,24,"#5a6a3a"),Se(l,4,40,100,4,"#3a2a1a");for(let d=0;d<6;d++)Dt(l,8+d*15,28,12,12,["#a83a2a","#3a6a3a","#c8a03a"][d%3])}else{let d=u-f;l.fillStyle=Ge(o,.6),l.beginPath(),l.moveTo(u+12,c);for(let C=0;C<=m;C++){let M=u-C*d/m,S=c-C*c/m;l.lineTo(M,S),l.lineTo(M-d/m,S)}l.lineTo(f-6,-2),l.lineTo(f+18,-2),l.lineTo(u+22,c-12),l.closePath(),l.fill(),l.fillStyle=mi(l,0,c,Ge(o,.42),Ge(o,.5)),l.beginPath(),l.moveTo(u+22,c-12),l.lineTo(f+18,-2),l.lineTo(f+38,-2),l.lineTo(u+40,c-26),l.closePath(),l.fill();for(let C=0;C<m;C++){let M=u-(C+1)*d/m,S=c-(C+1)*c/m;Se(l,M,S,d/m+1,2.6,Ge(o,1.45)),Se(l,M,S+2.6,d/m+1,c/m-2.6,Ge(o,.78)),Se(l,M,S+c/m-1,d/m+1,1,Ge(o,.5))}let T=34;Kt(l,[u+6,c-T,f,-T*.2],"#2a2826",2);for(let C=0;C<=8;C++){let M=C/8,S=u+6-M*(u+6-f),E=c-M*c;Kt(l,[S,E-T,S,E-2],"#2a2826",.9)}l.fillStyle="rgba(0,0,0,.25)",l.beginPath(),l.moveTo(u+40,c),l.lineTo(u+40,c-26),l.lineTo(f+38,-2),l.lineTo(f+60,-2),l.lineTo(u+70,c),l.closePath(),l.fill()}if(!r.exit){l.clearRect(0,c-1,r.holeW,e-c+1),Se(l,r.holeW-2,c-36,3,36,"#2a2826"),Kt(l,[0,c-36,r.holeW+1,c-36],"#2a2826",2.2),Kt(l,[0,c-18,r.holeW,c-18],"#2a2826",1),l.fillStyle="#d9ad1f";for(let d=0;d<4;d++)l.beginPath(),l.moveTo(r.holeW+2+d*8,c),l.lineTo(r.holeW+6+d*8,c),l.lineTo(r.holeW+4+d*8,c+4),l.lineTo(r.holeW+d*8,c+4),l.fill()}let g=r.liftX;if(Se(l,g-36,c-128,72,128,"#08090b"),l.fillStyle=mi(l,c-128,c,"rgba(60,70,80,.25)","rgba(0,0,0,0)"),l.fillRect(g-36,c-128,72,128),Dt(l,g-42,c-134,84,7,Ge(o,.62)),Dt(l,g-42,c-134,6,134,Ge(o,.62)),Dt(l,g+36,c-134,6,134,Ge(o,.56)),Dt(l,g-18,c-152,36,14,"#15171a"),Dt(l,g+44,c-74,6,12,"#2a2e33"),an(l,g+47,c-70,1.6,1.6,"#c9a24a"),an(l,g+47,c-66,1.6,1.6,"#c9a24a"),r.exit){let d=r.exitX,T=62;Se(l,d-4,c-132,T+8,132,"#141414");for(let M=0;M<2;M++){let S=d+M*T/2;Dt(l,S,c-126,T/2-1,126,"#5a6a6a"),Se(l,S+5,c-110,T/2-11,40,"#2a3a3e"),Se(l,S+6,c-109,5,38,"rgba(160,200,220,.25)"),Dt(l,S+3,c-64,T/2-7,5,"#c9cdd0")}Dt(l,d+T/2-24,c-152,48,14,"#1d7a3a"),l.fillStyle="#e8ffe8",l.font="800 9px sans-serif",l.textAlign="center",l.fillText("\u0412\u042B\u0425\u041E\u0414",d+T/2,c-142);let C=l.createRadialGradient(d+T/2,c-146,2,d+T/2,c-146,40);C.addColorStop(0,"rgba(90,255,140,.35)"),C.addColorStop(1,"rgba(90,255,140,0)"),l.fillStyle=C,l.fillRect(d-20,c-190,T+40,80)}else r.top||(Dt(l,n-46,60,36,13,"#2a6a3a"),l.fillStyle="#d8f0d8",l.font="700 6px sans-serif",l.textAlign="center",l.fillText("\u0412\u042B\u0425\u041E\u0414 \u0412\u041D\u0418\u0417\u0423",n-28,69));r.exit||(l.fillStyle="#a8281e",l.beginPath(),l.rect(n-22,c-34,10,26),l.fill(),Se(l,n-20,c-38,6,4,"#222"));let v=r.exit?0:r.holeW;Se(l,v,c-5,n-v,5,Ge(o,.5)),l.fillStyle=mi(l,c,e,Ge(a.floor,1.1),Ge(a.floor,.75)),l.fillRect(v,c,n-v,e-c);let p=(r.stairBot+r.liftX)/2;Kt(l,[p,0,p,10],"#222",1),an(l,p,14,5,5,"#ffe2a8"),mf(l,p,16,n,e,!0)})}var nh=null;function T_(){return nh||(nh=pi(256,26,n=>{Se(n,0,0,256,26,"#17181a");for(let e=0;e<70;e++)Se(n,Math.random()*256,Math.random()*26,1+Math.random()*2,1,"rgba(255,255,255,.05)");Se(n,0,0,256,1.6,"#2c2e30"),Se(n,0,24.6,256,1.4,"#0a0a0b")},2))}var ih=null;function E_(){return ih||(ih=pi(400,300,n=>{let e=n.createLinearGradient(0,0,0,300);e.addColorStop(0,"#06080c"),e.addColorStop(.55,"#111924"),e.addColorStop(1,"#22303e"),Se(n,0,0,400,300,e);for(let t=0;t<30;t++)n.fillStyle=`rgba(${60+Math.random()*30},${80+Math.random()*30},${100+Math.random()*30},${.12+Math.random()*.2})`,n.beginPath(),n.ellipse(Math.random()*400,120+Math.random()*180,40+Math.random()*70,14+Math.random()*24,0,0,7),n.fill();for(let t=0;t<400;t+=18+Math.random()*20){let i=14+Math.random()*22,s=30+Math.random()*80;Se(n,t,300-s,i,s,"#0b0f15");for(let r=0;r<4;r++)Math.random()<.35&&Se(n,t+3+Math.random()*(i-6),300-s+6+Math.random()*(s-12),2,2,"rgba(255,210,140,.5)")}},2))}function gf(n,e,t){let i=new qt,s=e.roomH,r=e.floorY,a=r-4,o=n.base?"base":n.zone,l=ts[o]||ts.z1,c=(j,ge={})=>new Bt(Object.assign({map:j,transparent:!0},ge)),h=(j,ge,Ee,A,Ke,pe)=>{let b=new Zt(new Jn(j,ge),Ee);return b.position.set(A,-Ke,pe),i.add(b),b},u=e.comps,f=u.find(j=>j.k==="hall"),m=f.x0,g=(j,ge)=>({liftX:e.liftX-m,stairBot:e.stairBot-m,stairTop:e.stairTop-m,holeW:e.holeX1-m,exitX:e.exitX-m,top:j,exit:ge}),v=(j,ge,Ee,A,Ke,pe)=>pi(ge+gn*2,Ee+gn+6,b=>{b.translate(gn,gn),vs(b,j,ge,Ee,A,l,Ke,pe)},3),p=[];u.forEach((j,ge)=>{let Ee=j.x1-j.x0,A=n.floor*31+ge*7+(n.base?999:0),Ke=j.k==="room"?n.rooms[j.i]:null,pe=j.k==="hall"?pf(Ee,s,o,n.floor,A,g(n.top,n.exit)):df(Ee,s,o,A,j.x1<=m?-1:1,{blood:Ke&&Ke.enemy&&!n.base}),b=c(pe);h(Ee,s,b,(j.x0+j.x1)/2,r-s/2,-10);let _=[];Ke&&Ke.furn.forEach((F,$)=>{let oe=t[F.k]||{w:50,h:60},fe=oe.base&&(n.levels||{})[oe.base]||1,Y=n.floor*13+ge*5+$,q=v(F.k,oe.w,oe.h,!1,Y,fe),me=c(q);me.depthWrite=!1;let Ne=h(oe.w+gn*2,oe.h+gn+6,me,j.x0+F.x+oe.w/2,a-oe.h-gn+(oe.h+gn+6)/2,-9+$*.01);_.push({k:F.k,fu:oe,mesh:Ne,mat:me,closed:q,open:null,s:!1,v:Y,lvl:fe,pulse:$*2.1})});let P=j.k==="room"&&!n.base?h(Ee,s,new Bt({color:131587,transparent:!0,opacity:.97,depthWrite:!1}),(j.x0+j.x1)/2,r-s/2,-6):null;P&&(P.renderOrder=5),p.push({cp:j,mat:b,tex:pe,dark:P,furn:_,glow:0,open:n.base||j.k==="hall"?1:0,flick:!n.base&&(n.floor*7+ge*13)%4===0})});for(let j=1;j<u.length;j++){let ge=u[j-1].x1,Ee=u[j].x0,A=Ee-ge+2,Ke=(ge+Ee)/2,pe=126;h(A,s-pe,new Bt({color:1184532}),Ke,r-s+(s-pe)/2,-8),h(A,pe,new Bt({color:460294}),Ke,r-pe/2,-9.6),h(A+10,5,new Bt({color:2761760}),Ke,r-pe-2,-8)}let d=new Bt({map:T_()});d.map.wrapS=ks,d.map.repeat.set(e.bw/120,1);let T=u[0].x0-22,C=u[u.length-1].x1+22,M=(j,ge)=>{if(!ge){h(C-T,e.slab,d,(T+C)/2,j,4);return}h(e.holeX0-T,e.slab,d,(T+e.holeX0)/2,j,4),h(C-e.holeX1,e.slab,d,(e.holeX1+C)/2,j,4),h(e.holeX1-e.holeX0,e.slab,new Bt({color:723724}),(e.holeX0+e.holeX1)/2,j,-11)};M(r+e.slab/2,!n.exit),M(r-s-e.slab/2,!n.top),M(r-2*s-e.slab*1.5,n.floor+1<100),M(r+s+e.slab*1.5,n.floor-1>1);let S=new Bt({color:855567}),E=3*s+4*e.slab;h(22,E,S,T+11,r-s/2,4),h(22,E,S,C-11,r-s/2,4);let R=[];for(let[j,ge]of[[-(s+e.slab),n.floor+1],[s+e.slab,n.floor-1]]){if(ge>100||ge<1)continue;let Ee=ge===100?"base":o==="base"?"z4":o;u.forEach((A,Ke)=>{let pe=A.x1-A.x0,b=ge*31+Ke*7+500,_;if(A.k==="hall")_=pf(pe,s,Ee,ge,b,g(ge===100,ge===1));else{Gn(b);let F=[],$=20+X()*30;for(let oe=0;oe<2;oe++){let fe=["wardrobe","dresser","shelves","sofa","bookshelf","crates","filing"][X()*7|0],Y=t[fe];if($+Y.w>pe-20)break;F.push({k:fe,x:$,w:Y.w,h:Y.h,v:b+oe}),$+=Y.w+30+X()*40}_=df(pe,s,Ee,b,A.x1<=m?-1:1,{furn:F})}let P=c(_,{color:new Qe(.12,.12,.14)});R.push(P),h(pe,s,P,(A.x0+A.x1)/2,r-s/2+j,-10)})}let x=h(4400,2600,new Bt({map:E_()}),(T+C)/2,r-260,-60),w=new Yt().setAttribute("position",new cn(new Float32Array(192),3)),N=new Xs(w,new us({color:15266047,transparent:!0,opacity:0}));N.frustumCulled=!1,i.add(N);let U=0,z=4+Math.random()*8,G=()=>{let j=Math.random()<.5?T+Math.random()*300:C-Math.random()*300,ge=w.attributes.position,Ee=j,A=r-700,Ke=22;for(let pe=0;pe<Ke;pe++)ge.setXYZ(pe,Ee,-A,-50),Ee+=(Math.random()-.5)*46,A+=38+Math.random()*20;w.setDrawRange(0,Ke),ge.needsUpdate=!0,U=1,window.dispatchEvent(new CustomEvent("tower-thunder",{detail:{near:Math.random()}}))},D=320,V=new Float32Array(D*6),K=[];for(let j=0;j<D;j++)K.push([T-700+Math.random()*(C-T+1400),Math.random()*1300,320+Math.random()*220]);let Z=new Dr(new Yt().setAttribute("position",new cn(V,3)),new us({color:10137800,transparent:!0,opacity:.42}));Z.frustumCulled=!1,i.add(Z);let Q=e.liftX,H=a,te=pi(34,122,j=>{Dt(j,0,0,34,122,"#8e959b"),Se(j,3,10,28,1,"#6a7076"),Se(j,3,110,28,1,"#6a7076"),Se(j,4,0,2,122,"rgba(255,255,255,.14)");for(let ge=0;ge<6;ge++)Se(j,6+Math.random()*20,20+Math.random()*80,6,1,"rgba(0,0,0,.18)")}),re=c(te),Ve=h(34,122,re,Q-17,H-61,-9.2),ke=h(34,122,re,Q+17,H-61,-9.2),Tt=pi(80,124,j=>{j.save(),j.translate(40,62),[[-.5,-20],[.42,24]].forEach(([ge,Ee])=>{j.save(),j.translate(0,Ee),j.rotate(ge),j.fillStyle="#d9ad1f",j.fillRect(-48,-6,96,12),j.fillStyle="#15171c";for(let A=-48;A<48;A+=10)j.beginPath(),j.moveTo(A,-6),j.lineTo(A+5,-6),j.lineTo(A+1,6),j.lineTo(A-4,6),j.fill();j.restore()}),j.restore(),j.fillStyle="#efe8d8",j.fillRect(20,50,40,20),j.fillStyle="#a8281e",j.font="700 7.5px sans-serif",j.textAlign="center",j.fillText("\u041D\u0415",40,58),j.fillText("\u0420\u0410\u0411\u041E\u0422\u0410\u0415\u0422",40,67)}),at=h(80,124,c(Tt,{opacity:0}),Q,H-62,-8.8),dt=new Bt({color:16724e3});h(5,5,dt,Q+26,H-145,-8.5);let J=pi(40,14,()=>{}),ne=c(J);h(34,11,ne,Q,H-145,-8.6);let Pe=(j,ge)=>{let Ee=J.image.getContext("2d");Ee.setTransform(ua,0,0,ua,0,0),Se(Ee,0,0,40,14,"#060708"),Ee.fillStyle=ge?"#7dff9a":"#ff5a3a",Ee.font="700 10px monospace",Ee.textAlign="center",Ee.fillText(j,20,11),J.needsUpdate=!0},qe="",xe=null;if(n.vend){let Ee=Ke=>pi(48+gn*2,100+gn+6,pe=>{pe.translate(gn,gn),Qc(pe,-2,50,99.5),vs(pe,"vending",48,100,Ke,l)},3),A=c(Ee(n.vend.used));A.depthWrite=!1,xe={mesh:h(48+gn*2,100+gn+6,A,e.vendX,a-100-gn+(100+gn+6)/2,-9),mat:A,used:n.vend.used,mk:Ee}}let it=pi(64,64,j=>{let ge=j.createRadialGradient(32,32,0,32,32,32);ge.addColorStop(0,"rgba(255,236,200,.55)"),ge.addColorStop(1,"rgba(255,236,200,0)"),j.fillStyle=ge,j.fillRect(0,0,64,64)},1),Ut=h(240,220,new Bt({map:it,transparent:!0,blending:li,depthWrite:!1,opacity:0}),0,0,-7);Ut.renderOrder=6;let tt=70,pt=new Float32Array(tt*3),St=[];for(let j=0;j<tt;j++)St.push([Math.random(),Math.random(),Math.random()*6.28,.3+Math.random()*.7]);let je=new fs(new Yt().setAttribute("position",new cn(pt,3)),new Xi({color:16771264,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.45,depthWrite:!1,blending:li}));je.frustumCulled=!1,je.renderOrder=7,i.add(je);let yt=0,It=0;return{root:i,update(j,ge){It+=j,p.forEach((b,_)=>{let P=b.cp.k==="room"?ge.rooms[b.cp.i]||{}:null,F=ge.heroComp===_,$=!P||P.seen||n.base;b.open+=(($?1:0)-b.open)*Math.min(1,j*2.6),b.dark&&(b.dark.material.opacity=.97*(1-b.open),b.dark.visible=b.dark.material.opacity>.01);let oe=F?1.06:.86;b.glow+=(oe-b.glow)*Math.min(1,j*3);let fe=1;if(b.flick){let q=Math.sin(It*2.3+_)*Math.sin(It*7.1+_*3);fe=q>.82?.35:q>.76?.7:1}let Y=b.glow*fe;b.mat.color.setScalar(Y),b.furn.forEach((q,me)=>{let Ne=P&&P.furn[me]?!!P.furn[me].s:!0,ve=t[q.k]&&t[q.k].loot;Ne!==q.s&&(q.s=Ne,Ne&&ve&&!n.base?(q.open=q.open||v(q.k,q.fu.w,q.fu.h,!0,q.v,q.lvl),q.mat.map=q.open):q.mat.map=q.closed,q.mat.needsUpdate=!0);let _e=!Ne&&b.open>.5&&!ge.fight?.08+.1*Math.sin(It*3.4+q.pulse):0,Oe=ge.focus&&ge.focus.ri===b.cp.i&&ge.focus.fi===me?.35:0;q.mat.color.setScalar(Y*(Ne&&ve&&!n.base?.9:1)*(1+_e+Oe))})});let Ee=p[ge.heroComp];if(Ee){Ut.position.set((Ee.cp.x0+Ee.cp.x1)/2,-(r-s+50),-7),Ut.material.opacity=.45*Ee.open;let b=(Ee.cp.x0+Ee.cp.x1)/2,_=je.geometry.attributes.position;for(let P=0;P<tt;P++){let F=St[P];F[1]=(F[1]+j*.02*F[3])%1,F[2]+=j*F[3];let $=r-s+24+F[1]*(s-34),oe=12+F[1]*90;_.setXYZ(P,b+(F[0]-.5)*2*oe+Math.sin(F[2])*3,-$,-6.5)}_.needsUpdate=!0,je.material.opacity=.4*Ee.open*Ee.mat.color.r}if(xe){if(!!ge.vendUsed!==xe.used){xe.used=!!ge.vendUsed;let _=xe.mat.map;xe.mat.map=xe.mk(xe.used),xe.mat.needsUpdate=!0,_.dispose()}let b=p.find(_=>_.cp.k==="hall");xe.mat.color.setScalar((b?b.mat.color.r:1)*(ge.focusVend?1.35:1))}let A=!!ge.liftOk;yt+=((ge.liftOpen?1:0)-yt)*Math.min(1,j*6),at.material.opacity+=((!A&&yt<.05?1:0)-at.material.opacity)*Math.min(1,j*4),at.visible=at.material.opacity>.01,Ve.position.x=Q-17-yt*30,ke.position.x=Q+17+yt*30,dt.color.set(A?6094714:Math.sin(It*7)>.2?16724e3:4198416);let Ke=(A?String(n.floor):"--")+A;if(Ke!==qe&&(qe=Ke,Pe(A?String(n.floor):"--",A)),z-=j,z<=0&&(G(),z=7+Math.random()*14),U>0){U=Math.max(0,U-j*2.6);let b=U>.7?1:U>.5?.25:U>.35?.8:U*.6;x.material.color.setScalar(1+b*3.2),N.material.opacity=U>.45?1:0,R.forEach(_=>_.color.setRGB(.12+b*.22,.12+b*.24,.14+b*.3))}else N.material.opacity&&(N.material.opacity=0,x.material.color.setScalar(1),R.forEach(b=>b.color.setRGB(.12,.12,.14)));let pe=Z.geometry.attributes.position;for(let b=0;b<D;b++){let _=K[b];_[1]+=_[2]*j,_[1]>1300&&(_[1]=0);let P=r-750+_[1];pe.setXYZ(b*2,_[0],-P,-40),pe.setXYZ(b*2+1,_[0]-3,-(P+18),-40)}pe.needsUpdate=!0},stamp(j,ge,Ee,A){let Ke=p.find(P=>j>=P.cp.x0&&j<=P.cp.x1);if(!Ke)return;let pe=Ke.tex.image.getContext("2d"),b=j-Ke.cp.x0,_=ge-(r-s);if(pe.setTransform(ua,0,0,ua,0,0),A==="pool")pe.fillStyle="rgba(70,4,3,.85)",pe.beginPath(),pe.ellipse(b,s-5,Ee*1.8,Ee*.26,0,0,7),pe.fill(),pe.fillStyle="rgba(120,20,16,.4)",pe.beginPath(),pe.ellipse(b-Ee*.4,s-5.4,Ee*.6,Ee*.08,0,0,7),pe.fill();else if(A==="floor")pe.fillStyle="rgba(80,6,4,.8)",pe.beginPath(),pe.ellipse(b,Math.min(s-4,_),Ee,Ee*.3,0,0,7),pe.fill();else{pe.fillStyle="rgba(96,8,6,.82)",pe.beginPath(),pe.arc(b,_,Ee,0,7),pe.fill();for(let P=0;P<4;P++)pe.beginPath(),pe.arc(b+(Math.random()-.5)*Ee*4,_+(Math.random()-.5)*Ee*3,Ee*(.2+Math.random()*.35),0,7),pe.fill();if(Math.random()<.6){let P=Ee*(2+Math.random()*6);pe.fillRect(b-.4,_,.9,P),pe.beginPath(),pe.arc(b,_+P,.7,0,7),pe.fill()}}pe.setTransform(1,0,0,1,0,0),Ke.tex.needsUpdate=!0},dispose(){i.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(j.material.map&&j.material.map!==nh&&j.material.map!==ih&&j.material.map.dispose(),j.material.dispose())}),p.forEach(j=>j.furn.forEach(ge=>{ge.open&&ge.open.dispose(),ge.closed.dispose()}))}}}var rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},w_=new oi(-1,1,1,-1,0,1),sh=class extends Yt{constructor(){super(),this.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fn([0,2,0,0,2,0],2))}},A_=new sh,ns=class{constructor(e){this._mesh=new Zt(A_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ar=class extends Un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ai.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ns(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fa=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ml=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ye);this._width=i.width,this._height=i.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ar(rr),this.copyPass.material.blending=zn,this.timer=new kr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fa!==void 0&&(a instanceof fa?i=!0:a instanceof Ml&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tl=class extends Un{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var _f={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var or=class n extends Un{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:en,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Vt(r,a,{type:en,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Vt(r,a,{type:en,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=_f;this.highPassUniforms=Ai.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ai.clone(rr.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader,premultipliedAlpha:!0,blending:li,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new Bt,this._fsQuad=new ns(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ye(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Wt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};or.BlurDirectionX=new Ye(1,0);or.BlurDirectionY=new Ye(0,1);var da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var El=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ai.clone(da.uniforms),this.material=new qs({name:da.name,uniforms:this.uniforms,vertexShader:da.vertexShader,fragmentShader:da.fragmentShader}),this._fsQuad=new ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var C_={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new Ye(1,1)},vign:{value:.5},grain:{value:.04},sat:{value:.92},hurt:{value:0},lift:{value:new O(.012,.016,.022)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function rh(n,e,t){let i=new Vt(4,4,{type:en,samples:4}),s=new Sl(n,i);s.addPass(new Tl(e,t));let r=new or(new Ye(256,256),.42,.45,1.05);s.addPass(r),s.addPass(new El);let a=new ar(C_);return s.addPass(a),{composer:s,bloom:r,grade:a,setSize(o,l,c){s.setPixelRatio(c),s.setSize(o,l),a.uniforms.res.value.set(o*c,l*c)},render(o,l){a.uniforms.time.value=o,a.uniforms.hurt.value=l,s.render()}}}var lr={hipY:68,shoulder:[.5,-41],neck:[1,-47],knee:30,ankle:31,elbow:26,wrist:23,headScale:.82};function R_(n,e,t){let i=a=>a*n,s=e*15,r=t*4;return Ce(`M ${i(-3.5)} -48 C ${i(-6)} -47.5 ${i(-9)-r*.3} -46 ${i(-10)-r*.5} -41 C ${i(-11.5)-r*.6} -34 ${i(-9.5)} -26 ${i(-8)-s*.2} -20 C ${i(-7.2)-s*.3} -15 ${i(-9)-s*.3} -8 ${i(-9.8)-s*.2} -2 C ${i(-10.5)} 3 ${i(-7)} 6.5 ${i(-2)} 7 L ${i(4)} 6.5 C ${i(8)} 5 ${i(10.5)+s*.4} 0 ${i(10)+s*.8} -6 C ${i(9.6)+s} -12 ${i(9.4)+s} -17 ${i(10)+s*.7} -23 C ${i(11.5)+r} -28 ${i(12.2)+r} -35 ${i(10.5)+r*.5} -40 C ${i(9)} -44.5 ${i(6)} -47 ${i(3.5)} -47.5 Z`)}function P_(n,e,t){let i=t.w,s=t.fat,r=t.mus,a=R_(i,s,r),o=g=>g*i,l=o(10.4)+s*8,c=e.skin,h=e.shirt,u=e.pants,f=new Set(e.x||[]);if(f.has("pack")||f.has("backpack")){let g=Ce(`M ${o(-8)} -44 C ${o(-14)} -45 ${o(-21)} -43 ${o(-21.5)} -36 L ${o(-22)} -16 C ${o(-22)} -12 ${o(-18)} -10 ${o(-13)} -10.5 L ${o(-8)} -12 Z`);de(n,g,e.packCol||"#3b3f30",{s:3}),Nt(n,g,.3),ue(n,[o(-21.6),-28,o(-14),-27.5,o(-9),-29],.8,xt,.8);let v=Ce(`M ${o(-21.5)} -24 L ${o(-25)} -23.5 C ${o(-26.5)} -20 ${o(-26)} -15 ${o(-24.5)} -13.5 L ${o(-21.5)} -13 Z`);de(n,v,$e(e.packCol||"#3b3f30",.85),{s:1.5}),he(n,v,1.1),he(n,g,1.4);let p=Ze(o(-15),-47.5,8.5,4.2);de(n,p,"#5a4e3c",{s:2}),ue(n,[o(-15)-8,-47.5,o(-15)+8,-47.5],.6,xt,.5),ue(n,[o(-19),-51.5,o(-19),-43.5],1.4,"#1c1c18"),ue(n,[o(-11),-51.5,o(-11),-43.5],1.4,"#1c1c18"),he(n,p,1.2)}de(n,a,h||c,{s:3.2,h:1.2}),h||(ue(n,[o(4),-40,o(7),-33,o(10),-30],.7,$e(c,.5,1),.7),ue(n,[o(2),-22,o(5),-18,o(9),-18],.6,$e(c,.55,1),.6));let m=-2.4;if(es(n,a,ct(-40,m,80,30),u,{s:2.6}),es(n,a,ct(-40,m-1.2,80,2.4),e.belt||"#2a2118",{s:.6,hatch:!1}),Le(n,ct(l-3.4,m-1.4,2.6,2.8),"#9a8a5a"),he(n,ct(l-3.4,m-1.4,2.6,2.8),.5),ue(n,[o(2),2,o(5),5.5],.6,xt,.5),e.jacket){let g=Ce(`M ${o(-3.8)} -49 C ${o(-7)} -48.5 ${o(-10.2)} -46.5 ${o(-11)} -41 C ${o(-12.4)} -34 ${o(-10.4)} -26 ${o(-9)} -20 C ${o(-8.4)} -15 ${o(-10)} -8 ${o(-10.6)} -2 L ${o(-11)} 4.5 L ${l+1.6} 4.5 C ${l+1.4} 0 ${l+.8} -6 ${l+.7} -12 C ${l+.8} -18 ${o(11.2)} -24 ${o(12.8)} -31 C ${o(13)} -37 ${o(11.4)} -42 ${o(9)} -45 C ${o(7)} -47.5 ${o(4)} -49 ${o(1)} -49.2 Z`);de(n,g,e.jacket,{s:3.4,h:1.2}),Nt(n,g,.3),ue(n,[l+.8,-40,l+.3,-20,l+1,4],.9,$e(e.jacket,.35),.9),ue(n,[o(-1),-18,o(6),-17.6],.8,xt,.7),ue(n,[o(-1),-18,o(-1.4),-9],.7,xt,.5),ue(n,[o(-11),3,l+1.4,3],.8,$e(e.jacket,.45),.9),ue(n,[o(-4),-36,o(-1),-28,o(-3),-20],.7,$e(e.jacket,.4,1),.7),ue(n,[o(6),-30,o(8),-24],.6,$e(e.jacket,.4,1),.6);let v=Ce(`M ${o(-4.5)} -48.6 C ${o(-3)} -52.5 ${o(4)} -53 ${o(6.5)} -49.5 L ${o(4)} -47.4 C ${o(2)} -49.4 ${o(-1.5)} -49.2 ${o(-3)} -46.5 Z`);if(de(n,v,$e(e.jacket,.9),{s:1.2,hatch:!1}),he(n,v,1.1),e.hoodDown){let p=Ce(`M ${o(-3)} -49 C ${o(-8)} -53 ${o(-15)} -51 ${o(-14)} -45 C ${o(-13)} -41 ${o(-9)} -40.5 ${o(-7.5)} -42.5 C ${o(-7)} -45 ${o(-5)} -47.5 ${o(-3)} -49 Z`);de(n,p,$e(e.jacket,.92),{s:2.4}),ue(n,[o(-12),-47,o(-9.5),-44.5],.6,xt,.6),he(n,p,1.2)}he(n,g,1.5)}else h&&(ue(n,[o(-3),-36,o(0),-28,o(-2),-18],.7,$e(h,.4,1),.7),ue(n,[o(7),-34,o(5),-26],.6,$e(h,.45,1),.6),ue(n,[o(2.5),-47.6,o(5),-44.5,o(7.4),-46],.8,xt,.8));if(e.suit){let g=Ce(`M ${o(6)} -47 L ${l+.6} -45 L ${l+.4} -30 L ${o(7)} -32 Z`);de(n,g,"#d8d4c8",{s:1,hatch:!1}),ue(n,[o(6),-47,o(5.5),-38,o(8.5),-27,l+.4,-16],1,xt,.9)}if(e.tie||f.has("tie")){let g=Ce(`M ${l-1} -45 L ${l+1.6} -44 L ${l+2.6} -26 L ${l+.4} -23.5 L ${l-.4} -27 Z`);de(n,g,e.tie||"#7a1f26",{s:.9,hatch:!1}),he(n,g,.9)}if(f.has("bowtie")){let g=Ce(`M ${l-.5} -45.5 L ${l+3} -47.5 L ${l+3} -43 Z`);Le(n,g,"#141414"),he(n,g,.8)}if(e.overalls&&(es(n,a,ct(-40,-30,80,40),u,{s:2.4}),ue(n,[o(-6),-46,o(-5),-30],2,$e(u,.8)),ue(n,[o(4),-47,o(7),-30],2,$e(u,.8)),Le(n,Ze(o(6.5),-30,1,1),"#c9b56a")),f.has("apron")){let g=Ce(`M ${l-2} -38 L ${l+1.6} -38 C ${l+2.6} -20 ${l+3.2} 0 ${l+4} 14 L ${l-4} 14 C ${l-2.4} 0 ${l-2.2} -20 ${l-2} -38 Z`);de(n,g,"#d9d4c8",{s:1.8}),Nt(n,g,.35),Lt(n,g,l,-12,3.6,3,!0),Lt(n,g,l+1,4,2.6,2),he(n,g,1.2),ue(n,[o(-9),-14,l-2,-14],.8,"#bdb6a6")}if(e.ribs){let g=Ce(`M ${o(3)} -36 C ${o(8)} -38 ${l+.5} -32 ${l} -22 C ${o(7)} -18 ${o(3)} -22 ${o(2)} -28 Z`);Le(n,g,"#2a0a08");for(let v=0;v<4;v++)ue(n,[o(3.5),-34+v*3.6,o(7),-35+v*3.6,l-.2,-32+v*3.6],1.1,"#d8cfb8");he(n,g,.9)}if(Gn(e.seed||7),h&&e.torn>.2){let g=Math.round(e.torn*3);for(let v=0;v<g;v++){let p=o(-6+X()*14),d=-38+X()*30,T=2+X()*2.6,C=new Path2D;for(let M=0;M<nr*2;M+=.5){let S=T*(.55+X()*.7);C.lineTo(p+Math.cos(M)*S*1.2,d+Math.sin(M)*S)}C.closePath(),n.save(),n.clip(a),de(n,C,c,{s:.8,hatch:!1}),e.zombie&&Le(n,Ze(p,d+.4,T*.5,T*.35),"#4a0c0a",.9),he(n,C,.7),n.restore()}}if(e.blood){let g=1+Math.round(e.blood*3);for(let v=0;v<g;v++)Lt(n,a,o(-2+X()*12),-44+X()*30,2+X()*3*e.blood,2+(X()*3|0),X()<.4)}if(f.has("vest")||f.has("spikes")){let g=e.vest||"#2b3138",v=Ce(`M ${o(-11.5)} -44 C ${o(-13)} -36 ${o(-12)} -24 ${o(-11)} -16 L ${l+2.4} -16 C ${l+3.2} -24 ${l+3.6} -34 ${o(11.4)} -43 C ${o(8)} -46.5 ${o(3)} -47 ${o(-1)} -46.4 C ${o(-5)} -46.5 ${o(-9)} -46 ${o(-11.5)} -44 Z`);if(de(n,v,g,{s:3}),Nt(n,v,.35),ue(n,[o(-11),-30,l+3,-30],.7,$e(g,.5),.8),ue(n,[o(-11),-22,l+2.8,-22],.7,$e(g,.5),.8),e.pouches)for(let p=0;p<2;p++){let d=Ce(`M ${l-1} ${-29+p*7} L ${l+5} ${-29+p*7} L ${l+5} ${-23.4+p*7} L ${l-1} ${-23.4+p*7} Z`);de(n,d,$e(g,1.1),{s:1.2,hatch:!1}),ue(n,[l-1,-27.5+p*7,l+5,-27.5+p*7],.6,xt,.8),he(n,d,1)}if(f.has("spikes"))for(let p=0;p<5;p++){let d=-42+p*6,T=Ce(`M ${o(-11.6)} ${d} L ${o(-17)} ${d+1.4} L ${o(-11.4)} ${d+2.8} Z`);de(n,T,"#b8bec6",{s:.6,hatch:!1}),he(n,T,.7)}he(n,v,1.4)}if(f.has("exo")){let g=ct(o(-12),-44,3.2,40);de(n,g,"#4f555c",{s:1,hatch:!1}),he(n,g,1);for(let v=0;v<4;v++)Le(n,Ze(o(-10.4),-40+v*10,.8,.8),"#9aa2aa")}if(f.has("nano")&&(ue(n,[o(-2),-44,o(-1),-20],.9,"#2fb8e6",.9),ue(n,[l-2,-42,l-1.5,-20],.9,"#2fb8e6",.9)),f.has("pustules"))for(let g=0;g<6;g++){let v=o(-8+X()*18)+s*6,p=-40+X()*34,d=Ze(v,p,1.2+X()*1.6,1.1+X()*1.4);n.save(),n.clip(a),de(n,d,"#8a8a3a",{s:.6,hatch:!1}),Le(n,Ze(v+.4,p-.5,.4,.3),"#e8e2a0"),he(n,d,.6),n.restore()}if(f.has("collarGold")){let g=Ce(`M ${o(-3)} -47.5 C ${o(1)} -45.5 ${o(5)} -45.6 ${o(8)} -47 L ${o(8)} -45 C ${o(4)} -43.5 ${o(0)} -43.4 ${o(-3)} -45.4 Z`);de(n,g,"#e6b422",{s:.5,hatch:!1}),he(n,g,.8)}if((f.has("pack")||f.has("backpack"))&&(ue(n,[o(-2),-48,o(6),-42,o(9.6),-30],2.6,"#1c1d18"),ue(n,[o(-2),-48,o(6),-42,o(9.6),-30],.5,"#4a4a40",.8),Le(n,ct(o(8.2),-36,3,2),"#6a6a60")),Nt(n,a,.26),he(n,a,1.6),e.coat){let g=Ce(`M ${o(-11)} -44 C ${o(-12.5)} -30 ${o(-11)} -14 ${o(-11.5)} 8 L ${l+2} 8 C ${l+1.6} -10 ${l+1.2} -24 ${o(11.2)} -40 C ${o(8)} -46 ${o(2)} -48.5 ${o(-4)} -48 Z`);de(n,g,e.coatCol||"#dfe3e6",{s:3}),Nt(n,g,.4),Lt(n,g,o(4),-20,3,3,!0),ue(n,[o(5),-46,o(3),-36,l,-24],.9,xt,.8),he(n,g,1.5)}}function I_(n){let e=n;return Ce(`M -4 1 L -4.5 -7 C -9 -9 -11.5 -15 -10.5 -21 C -9.5 -28 -4 -31.5 1.5 -31 C 6 -30.5 9 -27.5 9.6 -23 C 9.8 -21 9.7 -19.8 10.3 -19 L 9.6 -17.6 C 10.3 -16.2 11.8 -13.6 12.6 -12.3 C 12.4 -11.6 11.2 -11.2 10.4 -11.4 C 10.3 -10.6 10.6 -10 10.5 -9.4 L ${10.2-e*.3} ${-8.6+e} C ${10.2-e*.2} ${-7+e} ${9.2} ${-5.2+e} ${7.4} ${-4.6+e*.8} C 5.5 ${-4.2+e*.5} 4.6 -3.6 4 -2 L 3.8 1 Z`)}function N_(n,e){let t=e.zombie,i=t?2.4:0,s=I_(i),r=new Set(e.x||[]),a=e.skin;de(n,s,a,{s:2.6,h:.9,dk:t?.45:.55}),ue(n,[-1,-10.5,3,-7.5+i*.5,7,-6+i*.7],.7,$e(a,.45,1),.55),Le(n,Ce("M -4 1 L -4.5 -7 C -2 -6 1 -4.6 4 -2 L 3.8 1 Z"),$e(a,.5,1),.45),e.stubble&&(n.save(),n.clip(s),Le(n,Ce("M -1 -11 C 3 -8.5 7 -9 10.4 -10.4 L 10.4 -8 C 10 -5.5 8.6 -4.6 7 -4.4 C 5 -4 4 -3.4 3.8 -2 L 0 -6 Z"),$e(e.hair||"#2a2018",1),.4),Nt(n,s,.2),n.restore());let o=Ze(-1.6,-15.6,2.2,3.4,.15);if(de(n,o,$e(a,.95),{s:.9,hatch:!1}),ue(n,[-1,-17.5,-2.6,-16,-1.2,-13.6],.5,xt,.7),he(n,o,.9),t?(Le(n,Ze(6.6,-17.2,3.2,2.4),"#1e1210",.9),e.eyeGlow?(Le(n,Ze(7,-17.2,1.8,1.2),e.eye||"#d8ff5a"),Le(n,Ze(7.2,-17.4,.7,.5),"#ffffff")):(Le(n,Ze(7.2,-17.1,1.7,1.1),"#b8b49c"),Le(n,Ze(7.9,-17.1,.55,.55),"#8a866e",.7)),ue(n,[4,-19.8,7,-20.6,9.6,-19.4],.9,xt),ue(n,[2.4,-16,4.2,-14,3.6,-11.6],.5,"#3a2a3a",.6),ue(n,[-6,-22,-3.6,-19,-4.6,-16],.5,"#3a2a3a",.5)):(Le(n,Ze(7.1,-17.1,1.75,1.05),"#e8e2d6"),Le(n,Ze(7.9,-17.05,.75,.85),"#3b2a1e"),Le(n,Ze(8.05,-17.05,.32,.4),"#050505"),ue(n,[5.4,-17.9,7.3,-18.6,8.9,-17.6],.7,xt),ue(n,[6,-16.2,8.4,-16.1],.4,xt,.5),ue(n,[4.6,-19.8,7.2,-21,9.8,-19.8],1.1,$e(e.hair||"#2a2018",.8))),ue(n,[10.6,-13.2,11.2,-12,10.4,-11.6],.5,xt,.6),t){let h=Ce(`M 10.4 -9.6 L 6.6 -9 C 6.4 -7.6 7 -6.2 8.8 ${-6.4+i} L ${10.1} ${-7.4+i} Z`);Le(n,h,"#170404");for(let u=0;u<3;u++)Le(n,ct(7.6+u*.9,-9.2,.7,1.2),"#b5a77c"),Le(n,ct(7.9+u*.9,-6.6+i*.6,.65,1),"#a89c74");Lt(n,s,9.6,-5+i,1.6,3,!0)}else ue(n,[10.3,-9.2,8.6,-9.1],.6,xt,.8);let l=e.hair,c=["cap","hood","helmet","hardhat","chefhat"].some(h=>r.has(h));if(l&&!e.bald&&!c){let h=Ce("M 8.2 -26.8 C 6.4 -31.8 -2.4 -33.4 -7.4 -29.6 C -11.6 -26 -12 -18 -8.8 -11.6 C -7.8 -9.8 -6.2 -9.2 -5 -10 C -6.2 -14 -5.6 -18.8 -3.2 -21 C -.2 -23.6 4.2 -24.4 8.2 -26.8 Z");de(n,h,l,{s:1.6,h:.8,dk:.5,lt:1.6,hatch:!1}),Gn((e.seed||7)+9);for(let u=0;u<9;u++){let f=-2.6+u*.3,m=Math.cos(f)*9.5,g=-19+Math.sin(f)*11;ue(n,[m,g,m+Math.cos(f)*1.8+1,g+Math.sin(f)*2.2-.6],.7,$e(l,.55),.8)}for(let u=0;u<6;u++)ue(n,[-6+u*2.4,-30+Math.abs(u-2)*.8,-4+u*2.2,-26],.5,$e(l,1.6),.5);if(e.zombie)for(let u=0;u<3;u++)Le(n,Ze(-6+X()*10,-27+X()*6,1.4+X(),1+X()),a);he(n,h,1.1)}if(Nt(n,s,.24),he(n,s,1.5),r.has("cap")){let h=Ce("M -10.6 -22 C -10.4 -30 -3 -33.6 3 -32 C 7.6 -31 9.6 -27.6 9.6 -24.4 L 16 -23.6 C 16.4 -22.6 15.6 -22 14.4 -21.8 L 9.4 -22.2 C 3 -22.4 -4 -22.6 -10.6 -22 Z");de(n,h,e.hat||"#2c364b",{s:2}),ue(n,[9.4,-24.2,9.4,-22.2],.7,xt),he(n,h,1.3)}if(r.has("hardhat")){let h=Ce("M -11.6 -21.6 C -11 -31 -3 -34 2 -33.4 C 8 -33 11 -28.6 11.4 -22.4 L 14 -21.8 L 14 -20.4 L -13 -20.4 L -13 -21.6 Z");de(n,h,e.hat||"#e6b422",{s:2}),he(n,h,1.3)}if(r.has("helmet")){let h=Ce("M -11.8 -14 C -12.6 -26 -6 -33.4 1.6 -33.2 C 8.6 -33 12 -27 12 -20.6 L 12.6 -19.6 L 4 -19.6 C 2 -16 -2 -13 -6 -12.2 Z");de(n,h,"#1d222b",{s:2.4,lt:1.8});let u=Ce("M 4 -19.6 L 12.6 -19.6 L 12.2 -14.2 L 6.4 -14.6 Z");Le(n,u,"#0d1622",.85),ue(n,[6,-18.8,11.6,-18.6],.6,"#6a8aa8",.7),he(n,u,.9),he(n,h,1.4)}if(r.has("chefhat")){let h=Ce("M -8 -26 C -12 -32 -9 -40 -3 -40 C -1 -44 6 -44 8 -39 C 13 -38 13 -31 9 -27 Z");de(n,h,"#e8e6df",{s:2.4}),he(n,h,1.3)}if(r.has("hood")){let h=e.hoodCol||e.shirt||"#2d2a33",u=Ce("M 5 -27.4 C 1 -36.6 -12 -36 -14.4 -25 C -16 -16 -12 -6 -7 -1 L -4.6 1.6 L -2 -6 C -6 -10 -7.4 -16 -6.4 -21 C -4.6 -26.6 1 -28.6 5 -27.4 Z");de(n,u,h,{s:3}),Nt(n,u,.3),ue(n,[-12,-24,-9,-14,-6,-6],.7,$e(h,.4,1),.7),he(n,u,1.4),Le(n,Ce("M 5 -27.4 C 1 -28.6 -4.6 -26.6 -6.4 -21 C -5 -24 0 -26.6 5 -27.4 Z"),"#050405",.8)}if(r.has("gasmask")){let h=Ce("M 4.6 -19.2 C 9 -21 13 -18 13.4 -13.6 C 13.6 -9.6 11.6 -6.6 8 -5.6 C 5 -6 3.4 -9 3.6 -13 Z");de(n,h,"#2a2e33",{s:1.6});let u=Ce("M 9.6 -10.8 L 15.4 -9.6 L 15 -5.2 L 9.6 -5.8 Z");de(n,u,"#5a6068",{s:1,hatch:!1}),he(n,u,.9),Le(n,Ze(7.6,-17,1.9,1.6),"#9fffd8"),Le(n,Ze(7.9,-17.3,.6,.5),"#ffffff"),he(n,Ze(7.6,-17,1.9,1.6),.8),ue(n,[4,-14,-6,-18],1.2,"#1a1a1c"),he(n,h,1.2)}if(r.has("glasses")&&(he(n,Ze(7.6,-17.1,2.4,1.8),.8,"#111"),ue(n,[5.2,-17.4,-1,-17],.6,"#111"),Le(n,Ze(7.6,-17.1,2.2,1.6),"rgba(200,220,255,.2)")),e.mask==="surgical"){let h=Ce("M 5 -14.6 C 8 -15 12.6 -14.6 12.8 -11.4 C 13 -8 11 -5.4 7.6 -5 C 5 -5.4 4 -8 4.2 -11 Z");de(n,h,"#8fbcd0",{s:1,hatch:!1}),Lt(n,h,10,-8,1.6,2,!0),ue(n,[4.6,-13,-2,-15],.5,"#cfe6ee"),he(n,h,1)}}function L_(n,e,t){ue(n,[-t-.6,e,0,e+.8,t+.6,e-.2],1,xt,.9)}function D_(n,e,t){let i=Hn(t.L,t.a,t.b,t.fb,t.bb),s=e.jacket||e.shirt;de(n,i,e.skin,{s:t.a*.55});let r=e.sleeves==="none"||!s?-99:e.sleeves==="short"?12:99;if(r>0&&(es(n,i,ct(-20,-20,40,20+Math.min(r,t.L+10)),s,{s:t.a*.6}),r<90?L_(n,r,t.a):ue(n,[-t.a*.3,6,t.a*.2,14,-t.a*.2,t.L-3],.6,$e(s,.4,1),.6)),new Set(e.x||[]).has("pads")){let o=Ce(`M ${-t.a-1.4} 1 C ${-t.a-1.6} -6 ${t.a+1.6} -6 ${t.a+1.4} 1 C ${t.a+1} 6 ${-t.a-1} 6 ${-t.a-1.4} 1 Z`);de(n,o,e.padCol||"#55595c",{s:1.4,lt:1.6}),Le(n,Ze(0,-1,.6,.6),"#9aa0a6"),he(n,o,1.1)}e.torn>.4&&e.zombie&&Lt(n,i,1,t.L*.6,2.4,2),Nt(n,i,.22),he(n,i,1.4)}function U_(n,e,t){let i=Hn(t.L,t.a,t.b,t.fb,t.bb,.25,.7),s=e.jacket||e.shirt;if(de(n,i,e.skin,{s:t.a*.55}),e.sleeves!=="none"&&e.sleeves!=="short"&&s){es(n,i,ct(-20,-20,40,t.L+16),s,{s:t.a*.6});let a=ct(-t.a-1,t.L-3.2,t.a*2+2,3);es(n,i,a,$e(s,.8),{s:1,hatch:!1}),ue(n,[-t.b-.5,t.L-3.2,t.b+.5,t.L-3.4],.8,xt,.8)}else ue(n,[t.a*.4,4,t.b*.3,t.L*.6],.5,$e(e.skin,.5,1),.5),e.zombie&&ue(n,[-t.a*.2,6,t.b*.2,t.L*.7,-t.b*.3,t.L-2],.5,"#3a2a3a",.6);let r=new Set(e.x||[]);if(r.has("exo")){let a=ct(t.a-.2,2,1.8,t.L-4);de(n,a,"#4f555c",{s:.5,hatch:!1}),he(n,a,.7),Le(n,Ze(t.a+.7,0,2,2),"#2a2d31"),he(n,Ze(t.a+.7,0,2,2),.7)}if(r.has("nano")){let a=Ce(`M ${t.a-1} 3 L ${t.a+1.6} 4 L ${t.b+1.4} ${t.L-4} L ${t.b-1} ${t.L-3} Z`);de(n,a,"#1c2027",{s:.8,lt:2}),ue(n,[t.a,5,t.b,t.L-5],.5,"#2fb8e6"),he(n,a,.8)}e.zombie&&e.blood>.4&&Lt(n,i,0,t.L*.4,1.8,2,!0),Nt(n,i,.22),he(n,i,1.3)}function F_(n,e,t,i){let s=e.skin;if(t==="fist"){let o=Ce(`M ${-3.2*i} -1 C ${-4*i} 3 ${-3.6*i} 7.4 ${-1.6*i} 8.6 C ${1*i} 9.6 ${3.6*i} 8.6 ${4.4*i} 6 C ${5*i} 3.4 ${4.4*i} .4 ${3.2*i} -1 Z`);de(n,o,s,{s:1.4,hatch:!1}),ue(n,[-2.6*i,5.6*i,2.2*i,6*i],.5,xt,.7),ue(n,[-2.4*i,3.4*i,2.6*i,3.6*i],.4,xt,.5);let l=Ze(3.4*i,3.4*i,1.5*i,2.4*i,-.4);de(n,l,s,{s:.6,hatch:!1}),he(n,l,.7),he(n,o,1.1);return}let r=Ce(`M ${-2.8*i} -1 C ${-3.6*i} 2 ${-3.4*i} 5 ${-2.4*i} 6 L ${2.6*i} 6.4 C ${3.6*i} 4 ${3.6*i} 1.4 ${2.8*i} -1 Z`);de(n,r,s,{s:1.2,hatch:!1});for(let o=0;o<4;o++){let l=(-2+o*1.4)*i,c=Hn(5*i-Math.abs(o-1.5)*.6,.75*i,.6*i,0,0);n.save(),n.translate(l,5.4*i),n.rotate(t==="claw"?-.5+o*.05:-.15),de(n,c,s,{s:.4,hatch:!1}),he(n,c,.6),e.zombie&&Le(n,Ze(0,5*i-.4,.5,.7),"#2b2420"),n.restore()}let a=Hn(3.6*i,.8*i,.6*i);n.save(),n.translate(2.6*i,1.6*i),n.rotate(-.8),de(n,a,s,{s:.4,hatch:!1}),he(n,a,.6),n.restore(),he(n,r,1)}function O_(n,e,t){let i=Hn(t.L,t.a,t.b,t.fb,t.bb);if(e.legless){de(n,i,e.pants,{s:t.a*.5});let r=Ce(`M ${-t.b-1} ${t.L-3} L ${t.b+1} ${t.L-3.6} L ${t.b+.6} ${t.L+2} C 0 ${t.L+5} ${-t.b} ${t.L+4} ${-t.b-1} ${t.L-3} Z`);Le(n,r,"#5a0d0a"),Le(n,Ze(0,t.L,t.b*.4,1.2),"#d8cfb8"),Lt(n,i,0,t.L-4,3,3,!0),he(n,i,1.4);return}de(n,i,e.pants,{s:t.a*.55}),ue(n,[t.a*.2,t.L*.2,t.a*.5,t.L*.55,t.b*.1,t.L-2],.6,$e(e.pants,.4,1),.6);let s=new Set(e.x||[]);if(s.has("exo")){let r=ct(-t.a-.6,3,1.8,t.L-6);de(n,r,"#4f555c",{s:.5,hatch:!1}),he(n,r,.7)}if(s.has("nano")){let r=Ce(`M ${t.a-2} 4 L ${t.a+1.6} 6 L ${t.b+1.4} ${t.L-6} L ${t.b-2} ${t.L-4} Z`);de(n,r,"#1c2027",{s:1,lt:2}),ue(n,[t.a-.4,7,t.b,t.L-7],.5,"#2fb8e6"),he(n,r,.9)}e.coat&&es(n,i,ct(-20,-10,40,22),e.coatCol||"#dfe3e6",{s:2}),e.zombie&&e.blood>.5&&Lt(n,i,1,t.L*.5,2.4,3),Nt(n,i,.24),he(n,i,1.5)}function B_(n,e,t){let i=Hn(t.L,t.a,t.b,t.fb,t.bb,.28,.7);de(n,i,e.pants,{s:t.a*.55}),ue(n,[-t.a*.6,2,-t.a*.2,5,t.a*.4,3],.6,$e(e.pants,.4,1),.7);let s=new Set(e.x||[]);if(s.has("pads")){let r=Ce(`M ${t.a-3} -3 L ${t.a+2} -2.6 C ${t.a+2.8} 1 ${t.a+2.6} 5 ${t.a+1.6} 7 L ${t.a-3} 6.6 Z`);de(n,r,e.padCol||"#55595c",{s:1,lt:1.7}),Le(n,Ze(t.a,2,.5,.5),"#9aa0a6"),he(n,r,1)}if(s.has("exo")){Le(n,Ze(-t.a-.2,0,2.4,2.4),"#2a2d31"),he(n,Ze(-t.a-.2,0,2.4,2.4),.7);let r=ct(-t.a-.8,2,1.6,t.L-6);de(n,r,"#4f555c",{s:.5,hatch:!1}),he(n,r,.7)}if(s.has("nano")){let r=Ce(`M ${t.a-2} 2 L ${t.a+1.4} 3 L ${t.b+1.2} ${t.L-8} L ${t.b-2} ${t.L-7} Z`);de(n,r,"#1c2027",{s:1,lt:2}),ue(n,[t.a-.2,5,t.b,t.L-10],.5,"#2fb8e6"),he(n,r,.9)}if(e.zombie&&e.torn>.35){let r=t.a*.2,a=4,o=Ze(r,a,2.6,2);n.save(),n.clip(i),de(n,o,e.skin,{s:.6,hatch:!1}),Lt(n,o,r,a,1.4,2,!0),he(n,o,.6),n.restore()}Nt(n,i,.24),he(n,i,1.4)}function k_(n,e){let t=e.suit||e.coat,i=t?Ce("M -4.2 -2.6 L 4 -2.6 L 4.6 1 C 8.6 1.4 13 2 14.8 4 C 15.4 5 15.2 6.2 14.6 7 L -5 7 C -5.6 5 -5.2 1 -4.2 -2.6 Z"):Ce("M -4.8 -7.4 L 4.4 -7.4 L 5 .4 C 8.6 .9 13.2 1.6 15.2 3.8 C 16 4.8 16 6 15.4 7 L -5.4 7 C -6 5 -5.8 2 -4.8 -7.4 Z"),s=e.shoes||"#1d1e22";if(de(n,i,s,{s:2,h:.7,lt:1.6}),Le(n,ct(-5.6,5.4,21.4,1.8),$e(s,.45)),ue(n,[-5.4,5.4,15.6,5.4],.6,xt),!t){for(let r=0;r<3;r++)ue(n,[2.6,-5.6+r*2.2,5,-4.8+r*2.2],.5,"#8a8070",.8);ue(n,[6,1.2,9,4],.5,xt,.5)}Nt(n,i,.3),he(n,i,1.4)}function ah(n,e,t="all"){if(t==="glow"){e===4&&(Le(n,Ze(0,-48,4.2,4.2),"#ffe34d",.9),ue(n,[0,-48,-5,-54,-2,-56,-7,-60],.9,"#fff6a0"),ue(n,[0,-48,5,-53,3,-57],.9,"#fff6a0")),e===5&&Le(n,ct(-1.8,-53.5,3.6,42),"#7ff0ff"),e===6&&Le(n,Ce("M -2 -4 L 2 -4 L 1.2 -55 L 0 -61 L -1.2 -55 Z"),"#c9a6ff");return}if(e===1){let i=ct(-2.2,-52,4.4,58);de(n,i,"#7d8794",{s:1.4,lt:1.7,hatch:!1});let s=ct(-3.2,-52,6.4,6);return de(n,s,"#3a3e44",{s:1,hatch:!1}),he(n,s,.9),Lt(n,i,0,-42,2,1),Nt(n,i,.4),ue(n,[-2.2,2,2.2,2],.6,xt),he(n,i,1.2),[-6,-56,6,8]}if(e===2){let i=Ce("M -1.8 6 L 1.8 6 L 2.4 -14 C 3.4 -30 4.2 -44 3.6 -50 C 2.6 -54 -2.6 -54 -3.6 -50 C -4.2 -44 -3.4 -30 -2.4 -14 Z");de(n,i,"#9a6a3a",{s:1.6}),ue(n,[-.6,-8,-1,-46],.5,"#c89a62",.6);let s=ct(-2.2,-4,4.4,10);de(n,s,"#2b241e",{s:.8,hatch:!1}),he(n,s,.8);for(let r=0;r<7;r++){let a=-44+r*4.6,o=r%2?1:-1;ue(n,[o*3,a,o*7.6,a-1.2],.8,"#c8ced6"),Le(n,Ze(o*3.2,a,.7,.7),"#6a6e74")}return Lt(n,i,0,-40,2.6,2,!0),Nt(n,i,.4),he(n,i,1.2),[-9,-56,9,8]}if(e===3){let i=ct(-1.8,-2,3.6,11);de(n,i,"#2b241e",{s:.8,hatch:!1}),[1,5].forEach(a=>Le(n,Ze(0,a,.6,.6),"#9aa0a6")),he(n,i,.9);let s=ct(-3.6,-3.4,7.2,2);Le(n,s,"#3a3e44"),he(n,s,.7);let r=Ce("M -2.2 -3.4 L 2.6 -3.4 C 4 -20 5.6 -36 6.6 -44 C 6.8 -48 4 -50.4 1.6 -48.6 C -1 -40 -2 -24 -2.2 -3.4 Z");return de(n,r,"#c4ccd6",{s:1.2,lt:1.5,hatch:!1}),ue(n,[-1.4,-4,-.6,-30,2,-47],.6,"#4a5058",.8),ue(n,[2.4,-6,5.6,-40],.6,"#ffffff",.7),Lt(n,r,3,-38,2,2,!0),Nt(n,r,.3),he(n,r,1.1),[-6,-54,9,11]}if(e===4){let i=ct(-2.4,-46,4.8,54);de(n,i,"#1b1e24",{s:1.2,lt:2});let s=ct(-2.8,-2,5.6,9);de(n,s,"#c9a422",{s:.8,hatch:!1}),he(n,s,.8);for(let r=0;r<3;r++)ue(n,[-2.4,-40+r*3,2.4,-40+r*3],.6,"#8a8f94");return Le(n,Ze(0,-48,3.4,3.4),"#ffe34d"),Le(n,Ze(0,-48,1.6,1.6),"#ffffff"),ue(n,[0,-48,-5,-54,-2,-56,-7,-60],.7,"#fff6a0"),ue(n,[0,-48,5,-53,3,-57],.7,"#fff6a0"),he(n,i,1.1),[-9,-62,9,9]}if(e===5){let i=Ce("M -3.2 -2 L 3.6 -2 L 4.4 -12 L -4 -12 Z");de(n,i,"#4b5668",{s:1.2,lt:1.6}),he(n,i,1);let s=ct(-2,-2,4,10);return de(n,s,"#2b241e",{s:.8,hatch:!1}),he(n,s,.8),Le(n,ct(-2.6,-54,5.2,42),"rgba(89,225,255,.35)"),Le(n,ct(-1.4,-53,2.8,41),"#7ff0ff"),Le(n,ct(-.5,-52,1,39),"#ffffff"),[-6,-57,6,9]}if(e===6){let i=ct(-1.8,-2,3.6,11);de(n,i,"#2b241e",{s:.8,hatch:!1}),he(n,i,.8);let s=Ce("M -6 -4 L 6 -4 L 4 -1.6 L -4 -1.6 Z");de(n,s,"#6c4fa8",{s:.8,lt:1.8,hatch:!1}),he(n,s,.8),Le(n,Ce("M -3.4 -4 L 3.4 -4 L 2.2 -56 L 0 -64 L -2.2 -56 Z"),"rgba(166,107,255,.35)");let r=Ce("M -2 -4 L 2 -4 L 1.2 -55 L 0 -61 L -1.2 -55 Z");return Le(n,r,"#d6baff"),ue(n,[0,-6,0,-58],.8,"#ffffff"),[-7,-66,7,9]}if(e===7){let i=ct(-1.4,-64,2.8,72);de(n,i,"#b08a5a",{s:1,lt:1.5,hatch:!1}),he(n,i,1);let s=ct(-6,-68,12,6);de(n,s,"#4a7ab0",{s:1,hatch:!1}),he(n,s,.9);for(let r=0;r<9;r++){let a=-5+r*1.25;ue(n,[a,-68,a*1.5+Math.sin(r*2.3)*1.5,-84+r%3*2],1.3,r%2?"#cfc8b2":"#b5ae98")}return Lt(n,s,0,-66,2,1),[-10,-88,10,9]}if(e===8){let i=ct(-1.8,-2,3.6,10);de(n,i,"#2b241e",{s:.8,hatch:!1}),[1,5].forEach(r=>Le(n,Ze(0,r,.6,.6),"#9aa0a6")),he(n,i,.9);let s=Ce("M -1.8 -2.6 L 2.4 -2.6 L 2.6 -20 C 2.4 -24 1 -27 -.4 -29 C -1.4 -24 -1.8 -14 -1.8 -2.6 Z");return de(n,s,"#c8d0da",{s:1,lt:1.6,hatch:!1}),ue(n,[1.8,-4,1.6,-24],.5,"#ffffff",.8),Lt(n,s,0,-18,1.6,1,!0),he(n,s,1),[-5,-31,5,9]}if(e===9)return ue(n,[0,7,0,-46,-1.5,-52,-6,-54.5,-9,-52],4.4,xt),ue(n,[0,7,0,-46,-1.5,-52,-6,-54.5,-9,-52],2.8,"#b3261e"),ue(n,[.6,4,.6,-44],.7,"#ff8a7a",.7),ue(n,[0,7,1.6,9],3,xt),Lt(n,ct(-3,-50,6,10),-2,-48,2,2),[-12,-58,6,11];if(e===10){let i=ct(-1.6,-72,3.2,80);de(n,i,"#7d8794",{s:1.2,lt:1.7,hatch:!1}),he(n,i,1);for(let r of[-6,-2,2,-66,-62])Le(n,ct(-2.2,r,4.4,2.6),"#2a2a2c");let s=Ce("M -2.6 -70 L 2.6 -70 L 2 -84 L 0 -94 L -2 -84 Z");return de(n,s,"#c4ccd6",{s:1,lt:1.5,hatch:!1}),ue(n,[0,-72,0,-90],.5,"#4a5058",.8),Lt(n,s,0,-84,2,2,!0),he(n,s,1.1),[-6,-97,6,10]}if(e===11){let i=ct(-1.9,-60,3.8,68);de(n,i,"#8a5a2a",{s:1.2,lt:1.5}),ue(n,[-.6,-4,-.6,-56],.5,"#c89a62",.6),he(n,i,1.1);let s=Ce("M -2.6 -62 L 2.6 -62 L 2.6 -50 L -2.6 -50 Z");de(n,s,"#2a2a2c",{s:.8,hatch:!1}),he(n,s,.9);let r=Ce("M 2.4 -63 C 8 -64 12 -67 15.5 -70 C 17 -61 17 -50 15.5 -42 C 12 -45 8 -48 2.4 -50 Z");de(n,r,"#b3261e",{s:1.6,lt:1.5}),Le(n,Ce("M 13.2 -68 C 14.6 -60 14.6 -51 13.2 -44 L 15.5 -42 C 17 -50 17 -61 15.5 -70 Z"),"#d8dde2"),Lt(n,r,12,-52,2.4,3,!0),he(n,r,1.2);let a=Ce("M -2.4 -60 L -10 -56.5 L -2.4 -52 Z");return de(n,a,"#b3261e",{s:.8,hatch:!1}),he(n,a,1),[-12,-73,18,10]}return null}function vf(n){let e=n.style==="brute"?"brute":n.style==="bloater"?"fat":n.style==="thin"?"thin":"normal",t={thin:.84,normal:1,fat:1.1,brute:1.28}[e],i={thin:.82,normal:1,fat:1.35,brute:1.3}[e],s={w:t,fat:e==="fat"?1+(n.fat||1)*.2:0,mus:e==="brute"?1:0},r=m=>m?{U:{L:29,a:11,b:9.5,fb:4,bb:3},F:{L:27,a:10,b:12,fb:3,bb:2},hk:2.1}:{U:{L:26,a:5.2*i,b:4.2*i,fb:1.2*i,bb:.8*i},F:{L:23,a:4.4*i,b:3.2*i,fb:1.4*i,bb:.4*i},hk:i>1.1?1.15:1},a=r(n.bigArm==="R"||n.bigArm==="N"),o=r(n.bigArm==="L"),l={T:{L:30,a:7.2*i,b:5.4*i,fb:1.6*i,bb:1.2*i},S:{L:31,a:5.3*i,b:3.6*i,fb:.4,bb:1.8*i}};n.legless&&(l.T.L=14);let c=n.zombie?n.style==="thin"||n.style==="crawler"?"claw":"open":"fist",h={},u=(m,g,v,p=0)=>{h[m]={bounds:g,draw:v,far:p}},f=16*t+12+s.fat*9;u("torso",[-f-12,-56,f+6,18],m=>P_(m,n,s)),u("head",[-17,-38,17,4],m=>N_(m,n));for(let[m,g,v]of[["N",a,0],["F",o,.42]]){let p=g.U,d=g.F;u("uarm"+m,[-p.a-p.fb-3,-p.a-7,p.a+p.fb+3,p.L+p.b+2],T=>D_(T,n,p),v),u("farm"+m,[-d.a-d.fb-3,-d.a-4,d.a+d.fb+4,d.L+d.b+2],T=>U_(T,n,d),v),u("hand"+m,[-6*g.hk,-3,7*g.hk,13*g.hk],T=>F_(T,n,c,g.hk),v)}for(let[m,g]of[["N",0],["F",.42]])u("thigh"+m,[-l.T.a-4,-l.T.a-2,l.T.a+4,l.T.L+l.T.b+6],v=>O_(v,n,l.T),g),n.legless||(u("shin"+m,[-l.S.a-l.S.bb-4,-l.S.a-4,l.S.a+6,l.S.L+l.S.b+2],v=>B_(v,n,l.S),g),u("foot"+m,[-7,-9,17,9],v=>k_(v,n),g));return n.coat&&u("coatTail",[-18*t-2,0,14*t+4,30],m=>{let g=Ce(`M ${-11.5*t} 0 C ${-13*t} 8 ${-15*t} 16 ${-17*t} 25 L ${-13*t} 23.4 L ${-10*t} 26 L ${-6*t} 23.6 L ${-2*t} 25.4 C ${2*t} 16 ${6*t} 8 ${9*t} 0 Z`);de(m,g,n.coatCol||"#dfe3e6",{s:3}),Nt(m,g,.4),Lt(m,g,-6,12,2.4,3),ue(m,[-4,2,-8,22],.7,xt,.6),he(m,g,1.5)}),{parts:h,lw:i,arm:{N:a,F:o},leg:l,layout:{hipY:n.legless?30:lr.hipY,shoulder:[lr.shoulder[0],lr.shoulder[1]],neck:lr.neck,hand:c}}}function z_(n,e){let t=e;return Ce(`M ${-31*n} -4 C ${-30*n} ${-11*t} ${-22*n} ${-13*t} ${-12*n} ${-12*t} C 0 ${-11*t} ${10*n} ${-14*t} ${18*n} ${-13.5*t} C ${24*n} ${-12.5*t} ${27.5*n} ${-6*t} ${26.5*n} ${2*t} C ${25.5*n} ${8*t} ${20*n} ${10*t} ${14*n} ${9*t} C ${6*n} ${8*t} ${-2*n} ${5.4*t} ${-10*n} ${5.6*t} C ${-18*n} ${6*t} ${-26*n} ${7*t} ${-30*n} ${3*t} Z`)}function V_(n,e){let t=e.long||1,i=e.bulk||1,s=z_(t,i),r=e.fur;de(n,s,r,{s:4,h:1.2,dk:.45});for(let a=0;a<4;a++)ue(n,[(4+a*3.4)*t,-6*i,(6+a*3.4)*t,0,(5+a*3.4)*t,5*i],.7,$e(r,.45,1),.7);Gn(e.seed||3);for(let a=0;a<3;a++){let o=(-20+X()*34)*t,l=(-8+X()*10)*i,c=Ze(o,l,3+X()*3,2+X()*2,X());n.save(),n.clip(s),de(n,c,e.skin||"#8a6a64",{s:.8,hatch:!1}),he(n,c,.5,$e(e.skin||"#8a6a64",.5)),n.restore()}for(let a=0;a<16;a++){let o=(-28+a*3.2)*t,l=-11.5*i+Math.abs(a-9)*.25;ue(n,[o,l+1.6,o-1.2,l-.6],.6,$e(r,.4),.8)}if(Lt(n,s,(-6+X()*10)*t,-2,3,2,!0),e.plague)for(let a=0;a<5;a++){let o=(-22+X()*40)*t,l=(-10+X()*8)*i,c=Ze(o,l,1.8+X()*2,1.6+X()*1.6);n.save(),n.clip(s),de(n,c,"#8a8a3a",{s:.6,hatch:!1}),Le(n,Ze(o+.4,l-.6,.5,.4),"#e8e2a0"),he(n,c,.6),n.restore()}if(Nt(n,s,.3),he(n,s,1.6),e.spikes)for(let a=0;a<7;a++){let o=(-20+a*6)*t,l=-12.4*i-Math.sin(a*.6)*.6,c=Ce(`M ${o-2} ${l+1} L ${o-.6} ${l-6-a%2*2} L ${o+1.6} ${l+1} Z`);de(n,c,"#c8bfa8",{s:.6,hatch:!1}),he(n,c,.8)}if(e.collar){let a=Ce(`M ${18*t} ${-13*i} C ${22*t} ${-12*i} ${25*t} ${-8*i} ${26*t} ${-4*i} L ${23.6*t} ${-3.4*i} C ${22.6*t} ${-7*i} ${20.6*t} ${-10*i} ${17.4*t} ${-11*i} Z`);de(n,a,e.collar,{s:.6,hatch:!1}),he(n,a,.9)}}function G_(n,e){let t=e.snout||1,i=e.headW||1,s=Ce(`M -5 6 C -6.6 -1 -3 -8 3 -10.4 C 8 -12.6 12 -11.6 15 -9.6 L ${15+9*t} -7.4 C ${17+10.6*t} -6.8 ${17+11*t} -4 ${16+10*t} -2.6 L ${15+9*t} -1.4 L ${12+6*t} .6 C 12 2.6 8 3.6 4 7 Z`),r=e.fur,a=e.ears==="big",o=e.ears==="round",l=o?Ze(2.4,-11.4,3.6,3.6):Ce(`M 1 -9 L ${a?-.6:1.4} ${a?-21:-17.6} L ${a?8:7.4} -10.6 Z`);de(n,l,o?$e(e.skin||"#c99a96",.9):r,{s:1.2,hatch:!1}),o||Le(n,Ce(`M 2.4 -9.6 L ${a?1.2:2.2} ${a?-17.6:-15} L ${a?6.4:6} -10.6 Z`),"#5a3a3a",.7),he(n,l,1.1),de(n,s,r,{s:2.6,dk:.45});let c=Ce(`M ${12+6*t} .6 L ${15+9*t} -1.4 L ${15.4+9*t} .6 C ${13+7*t} 3.2 ${9+3*t} 3.6 7 2.4 Z`);Le(n,c,"#2a0606");for(let h=0;h<4;h++){let u=8+h*2.2*t+1;Le(n,Ce(`M ${u} 1 L ${u+.8} 1 L ${u+.4} ${-.8-(h===3?1:0)} Z`),"#e8e0c8"),Le(n,Ce(`M ${u+.6} 1.6 L ${u+1.4} 1.6 L ${u+1} 3`),"#d8d0b8")}if(Le(n,Ze(16+10*t,-4.8,1.6,1.4),"#0d0c0c"),Le(n,Ze(10,-6.6,2.2,1.6),"#1a0d0a"),Le(n,Ze(10.4,-6.6,1.3,.9),e.eye||"#ffcf3d"),Le(n,Ze(10.7,-6.8,.4,.35),"#ffffff"),ue(n,[7.4,-8.6,10,-9.2,12.6,-7.6],.9,xt),ue(n,[11,-9.6,14,-8.4,16+8*t,-7.2],.6,$e(r,.45),.8),Gn((e.seed||3)+4),Lt(n,s,12+4*t,2.6,1.8,3,!0),Nt(n,s,.3),he(n,s,1.4),e.collar&&e.spikes)for(let h=0;h<3;h++)Le(n,Ce(`M ${-3+h*2.6} 4 L ${-2+h*2.6} 7.6 L ${-1+h*2.6} 4 Z`),"#c8ced6")}function xf(n,e,t){let i=t?Hn(16,5.8,3.4,1.6,1.2):Hn(16,8.4,3.8,3.4,3.2,.3,.7);de(n,i,e.fur,{s:2,dk:.45}),Nt(n,i,.3),he(n,i,1.3)}function yf(n,e){let t=Hn(17,3.3,2.4,.2,.8);de(n,t,e.fur,{s:1.4,dk:.45});let i=Ce("M -3 15.4 C -3.6 18 -2.4 19.6 0 19.6 L 5.6 19.6 C 6.6 19.6 6.8 18 6 17 C 4.4 15.6 2 15 -3 15.4 Z");de(n,i,$e(e.fur,.85),{s:.8,hatch:!1});for(let s=0;s<3;s++)ue(n,[1.6+s*1.6,18.6,2.6+s*1.6,20.4],.7,"#141210");Nt(n,t,.3),he(n,t,1.2),he(n,i,1)}function H_(n,e){let t=20*(e.tailLen||1)/1.2,i=!!e.tailCol,s=Hn(t,i?1.8:3.4,i?.5:1.6,.4,.4);if(de(n,s,e.tailCol||e.fur,{s:1.2,dk:.5,hatch:!i}),i)for(let r=2;r<t;r+=2.2)ue(n,[-1.4,r,1.4,r+.4],.4,$e(e.tailCol,.55),.7);else for(let r=0;r<6;r++)ue(n,[-2,2+r*3,-3.4,4+r*3],.5,$e(e.fur,.4),.7);he(n,s,1.1)}function bf(n){let e=n.long||1,t=n.bulk||1,i={},s=(r,a,o,l=0)=>{i[r]={bounds:a,draw:o,far:l}};s("body",[-34*e,-22*t,30*e,12*t],r=>V_(r,n)),s("head",[-8,-24,30*(n.snout||1)+2,10],r=>G_(r,n)),s("tail",[-6,-3,6,26*(n.tailLen||1)],r=>H_(r,n));for(let[r,a]of[["N",0],["F",.42]])s("fu"+r,[-7,-7,7,21],o=>xf(o,n,!0),a),s("hu"+r,[-10,-9,10,22],o=>xf(o,n,!1),a),s("fl"+r,[-5,-4,9,22],o=>yf(o,n),a),s("hl"+r,[-5,-4,9,22],o=>yf(o,n),a);return{parts:i,k:e,b:t}}var gi=Math.PI,cr=new Map;function W_(n,e){let t=cr.get(n);if(!t&&(t=hf(e.bounds,e.draw,e.far),cr.set(n,t),cr.size>400)){let i=cr.keys().next().value;cr.get(i).tex.dispose(),cr.delete(i)}return t}function wl(n,e,t,i,s="main"){let r=W_(n,e),a=new Bt({map:r.tex,transparent:!0,alphaTest:s==="shadow"?.2:.3,depthWrite:s==="shadow",side:kn});s==="shadow"&&(a.color.setRGB(0,0,0),a.opacity=.5,a.depthFunc=Os),s==="glow"&&(a.color.setScalar(2.2),a.blending=li,a.userData.glow=!0);let o=new Zt(new Jn(r.w,r.h),a);return o.position.set(r.cx,-r.cy,0),o.renderOrder=s==="shadow"?3:t,i.push(a),o}var Gt=(n,e=0,t=0)=>{let i=new qt;return i.position.set(e,t,0),n.add(i),i},Tf=n=>n*n*(3-2*n);function Ef(n,e,t){let i={};for(let s in n)i[s]=n[s]+((e[s]==null?n[s]:e[s])-n[s])*t;return i}function X_(n,e,t,i){let s={},r=t.map(([m,g])=>(s=Object.assign({},s,g),[m,s])),a=[[0,{}],...r,[1,i?s:{}]],o=0;for(;o<a.length-2&&n>a[o+1][0];)o++;let[l,c]=a[o],[h,u]=a[o+1],f=Tf(Math.min(1,Math.max(0,(n-l)/(h-l||1))));return Ef(Object.assign({},e,c),Object.assign({},e,u),f)}var hr={torso:0,head:0,uarmN:0,farmN:0,handN:0,uarmF:0,farmF:0,handF:0,thighN:0,shinN:0,footN:0,thighF:0,shinF:0,footF:0,bx:0,by:0,rot:0,wpn:0};function pa(n,e,t,i,s){return n.thighN=e,n.shinN=t,n.footN=-(e+t)*.9,n.thighF=i,n.shinF=s,n.footF=-(i+s)*.9,n}var Fn={hero:{idle:n=>{let e=Math.sin(n*2.1);return pa(Object.assign({},hr,{torso:-.04+.015*e,head:.03-.02*e,uarmN:.3,farmN:1.45,handN:.15,uarmF:.25,farmF:1,handF:.1,by:.35*e}),.14,-.12,-.13,-.05)},walk:n=>{let e=n*gi*2/.8,t=Math.sin(e);return pa(Object.assign({},hr,{torso:-.09,head:.05,uarmN:.25-.3*t,farmN:1.35,handN:.15,uarmF:.1+.4*t,farmF:.5+.25*Math.max(0,t),by:-1.6+1.8*Math.abs(Math.cos(e))}),.5*t,-(.08+.95*Math.max(0,Math.sin(e+1.3))),-.5*t,-(.08+.95*Math.max(0,Math.sin(e+1.3+gi))))},attack:{dur:.55,k:[[.3,{uarmN:2.8,farmN:.7,handN:-.5,torso:.14,head:.1,thighN:.32,shinN:-.25,footN:-.07}],[.46,{uarmN:-.1,farmN:.2,handN:1.35,torso:-.38,head:-.12,thighN:.5,shinN:-.45,footN:-.05,thighF:-.4,shinF:-.1,footF:.45,uarmF:-.4}],[.7,{uarmN:.15,farmN:.7,handN:.9,torso:-.2}]]}},zombie:{idle:n=>{let e=Math.sin(n*1.7),t=Math.pow(Math.max(0,Math.sin(n*6.3)),12)*.14;return pa(Object.assign({},hr,{torso:-.3+.03*e,head:-.22+.1*Math.sin(n*1.1)-t,uarmN:.55+.08*e,farmN:.45+.06*e,handN:.35,uarmF:.1+.06*Math.sin(n*1.7+1),farmF:.18,handF:.25,bx:.8*Math.sin(n*.9),by:-1.2+.4*e}),.05,-.28,-.16,-.05)},walk:n=>{let e=n*gi*2/1.4,t=Math.sin(e);return pa(Object.assign({},hr,{torso:-.36+.05*Math.sin(e*2),head:-.24+.08*t,uarmN:.6+.12*t,farmN:.4,handN:.35,uarmF:.1-.2*t,farmF:.2,handF:.25,by:-2.2+1.8*Math.abs(t)}),.4*t,-(.15+.75*Math.max(0,Math.sin(e+1.2))),-.22*t+.04,-(.28+.2*Math.max(0,Math.sin(e+1.2+gi))))},attack:{dur:.7,k:[[.3,{torso:-.15,head:.05,uarmN:1.7,uarmF:1.4,farmN:.2,farmF:.2}],[.48,{torso:-.8,head:-.55,uarmN:1.35,uarmF:1.2,farmN:.5,farmF:.4,thighN:.45,shinN:-.5,footN:.05}],[.72,{torso:-.55,head:-.35}]]}}};Fn.thin={idle:n=>Object.assign(Fn.zombie.idle(n*1.4),{torso:-.5+.04*Math.sin(n*3),head:-.35+.14*Math.sin(n*2.3),uarmN:.7,uarmF:.45+.1*Math.sin(n*2.6),farmN:.6,farmF:.5}),walk:n=>Object.assign(Fn.zombie.walk(n*1.5),{torso:-.55,uarmF:.5}),attack:Fn.zombie.attack};Fn.bloater={idle:n=>{let e=Fn.zombie.idle(n*.7);return Object.assign(e,pa(e,.2,-.12,-.22,-.06),{torso:.06+.03*Math.sin(n*1.2),head:-.12,uarmN:.45,farmN:.5,uarmF:.35,farmF:.4})},walk:n=>Object.assign(Fn.zombie.walk(n*.75),{torso:.04,uarmN:.5,uarmF:.3}),attack:{dur:.8,k:[[.35,{torso:.25,uarmN:1.2,uarmF:1,head:.1}],[.55,{torso:-.45,uarmN:1.5,uarmF:1.3,head:-.3}]]}};Fn.brute={idle:n=>Object.assign(Fn.zombie.idle(n*.8),{torso:-.42+.03*Math.sin(n*1.4),head:-.12,uarmN:.22+.05*Math.sin(n*1.4),farmN:.2,uarmF:.35,farmF:.4}),walk:n=>Object.assign(Fn.zombie.walk(n*.85),{torso:-.45,uarmN:.25+.2*Math.sin(n*gi*2/1.65)}),attack:{dur:.8,k:[[.32,{uarmN:3.1,farmN:.4,torso:.12,head:.05}],[.48,{uarmN:.1,farmN:.05,torso:-.75,head:-.2,thighN:.5,shinN:-.5}],[.7,{torso:-.6}]]}};Fn.crawler={idle:n=>{let e=Math.sin(n*1.5);return Object.assign({},hr,{torso:-1.42,head:1.15+.12*e,uarmN:2.2+.1*e,farmN:-.2,handN:.6,uarmF:2.4-.1*e,farmF:-.3,handF:.6,thighN:-1.45,thighF:-1.55,by:0})},walk:n=>{let e=n*gi*2/1.3,t=Math.sin(e);return Object.assign({},hr,{torso:-1.42+.05*t,head:1.15+.08*t,uarmN:2.1+.45*t,farmN:-.3-.4*Math.max(0,Math.cos(e)),handN:.6,uarmF:2.3-.45*t,farmF:-.3-.4*Math.max(0,-Math.cos(e)),handF:.6,thighN:-1.45+.1*t,thighF:-1.55-.1*t,bx:1.5*t})},attack:{dur:.7,k:[[.3,{head:1.4,uarmN:1.6,uarmF:1.8}],[.45,{head:.8,uarmN:2.9,uarmF:2.8,torso:-1.3}]]}};var $_={dur:1,k:[[.22,{thighN:1.05,shinN:-1.9,footN:.85,thighF:.55,shinF:-1.75,footF:1.2,torso:-.42,head:-.35,uarmN:1.1,farmN:.5,uarmF:.7,farmF:.6,by:-18}],[.45,{uarmN:.8,farmN:.9}],[.65,{uarmN:1.15,farmN:.35}],[.82,{uarmN:.9,farmN:.8,head:-.2}]]},q_={dur:.38,k:[[.18,{torso:.32,head:.35,uarmF:.7,farmF:1.2,bx:-3}]]},Y_={dur:1.3,k:[[.35,{thighN:.9,shinN:-1.5,footN:.6,thighF:.7,shinF:-1.3,footF:.6,torso:-.35,head:-.3,by:-12,uarmN:.2,uarmF:.1}],[.8,{rot:1.48,by:8,bx:-8,thighN:.3,shinN:-.3,footN:0,thighF:.2,shinF:-.2,footF:0,torso:.1,head:.5,uarmN:2.2,farmN:.4,uarmF:-.6,farmF:.3}],[.92,{rot:1.52,by:9}]]},Z_={dur:1,k:[[.6,{head:.2,torso:-1.52,uarmN:1.7,uarmF:2.8,by:-2}]]},Mf={body:0,head:0,tail:0,fuN:0,flN:0,fuF:0,flF:0,huN:.35,hlN:-.7,huF:.35,hlF:-.7,bx:0,by:0},J_={idle:n=>{let e=Math.sin(n*2.4);return Object.assign({},Mf,{body:.02*e,head:.06*Math.sin(n*1.3)-.05,tail:.35*Math.sin(n*5),by:.5*e,fuN:.05,fuF:-.05})},walk:n=>{let e=n*gi*2/.7,t=Math.sin(e),i=Math.sin(e+gi);return Object.assign({},Mf,{body:.03*Math.sin(e*2),head:-.08+.05*Math.sin(e*2),tail:.25*t,by:1.2*Math.abs(Math.cos(e))-1,fuN:.45*t,flN:-.7*Math.max(0,Math.sin(e+1.2)),fuF:.45*i,flF:-.7*Math.max(0,Math.sin(e+1.2+gi)),huN:.35+.4*i,hlN:-.7-.3*Math.max(0,Math.sin(e+gi+1.2)),huF:.35+.4*t,hlF:-.7-.3*Math.max(0,Math.sin(e+1.2))})},attack:{dur:.6,k:[[.3,{body:.12,head:.35,fuN:-.4,fuF:-.3,huN:.7,huF:.6,by:-3}],[.48,{body:-.18,head:-.35,fuN:.9,fuF:.7,flN:-.2,huN:-.2,huF:-.1,hlN:-.3,by:3}]]},hit:{dur:.38,k:[[.18,{body:.18,head:.45,bx:-3,tail:-.6}]]},death:{dur:1.1,k:[[.5,{body:.1,head:-.5,fuN:-.9,flN:1.6,fuF:-.8,flF:1.5,huN:1.4,hlN:-2,huF:1.3,hlF:-1.9,by:-18,tail:-.8}],[.85,{body:.16,head:-.75,by:-21}]]}};function wf(n,e){let t="idle",i=0,s=null,r=0,a=null,o=1,l=null;return{loop(c){t!==c&&(t=c,s||(a=l,o=0))},once(c){s!=="death"&&(s=c,r=0,a=l,o=0)},reset(){s=null,t="idle",r=0,a=null,o=1},get dead(){return s==="death"},pose(c){i+=c;let h=n[t](i);if(s){let u=n[s];r+=c/u.dur,r>=1&&s!=="death"?(s=null,a=l,o=0):h=X_(Math.min(r,1),h,u.k,s==="death")}return a&&o<1&&(o=Math.min(1,o+c/.14),h=Ef(a,h,Tf(o))),l=h,h}}}function Al(n,e){let t=vf(n),i=JSON.stringify(n)+"|",s=[],r=[],a=p=>{let d=(Q,H)=>{let te=wl(i+Q,t.parts[Q],H,p?r:s,p?"shadow":"main");return te.userData.part=Q,te},T=new qt,C=Gt(T),M=Gt(C,0,t.layout.hipY),S=Gt(M),E={body:C,torso:S},R=Gt(M,-1.4,0);if(R.add(d("thighF",14)),E.thighF=R,!n.legless){let Q=Gt(R,0,-t.leg.T.L);Q.add(d("shinF",13)),E.shinF=Q;let H=Gt(Q,0,-t.leg.S.L);H.add(d("footF",15)),E.footF=H}let x=Gt(S,-1.6,-t.layout.shoulder[1]+.6);x.add(d("uarmF",11)),E.uarmF=x;let w=Gt(x,0,-t.arm.F.U.L);w.add(d("farmF",10)),E.farmF=w;let N=Gt(w,0,-t.arm.F.F.L);N.add(d("handF",12)),E.handF=N,S.add(d("torso",20));let U=Gt(M,1.4,0);if(U.add(d("thighN",17)),E.thighN=U,!n.legless){let Q=Gt(U,0,-t.leg.T.L);Q.add(d("shinN",16)),E.shinN=Q;let H=Gt(Q,0,-t.leg.S.L);H.add(d("footN",19)),E.footN=H}t.parts.coatTail&&M.add(d("coatTail",21));let z=Gt(S,t.layout.neck[0],-t.layout.neck[1]),G=d("head",28),D=lr.headScale*(n.headScale||1);G.scale.setScalar(D),G.position.multiplyScalar(D),z.add(G),E.head=z;let V=Gt(S,.6,-t.layout.shoulder[1]);V.add(d("uarmN",31)),E.uarmN=V;let K=Gt(V,0,-t.arm.N.U.L);K.add(d("farmN",30)),E.farmN=K;let Z=Gt(K,0,-t.arm.N.F.L);if(Z.add(d("handN",33)),E.handN=Z,e>0){let Q=Gt(Z,.6,-4.6);Q.rotation.z=-2.15,Q.add(wl("w"+e,{bounds:Sf[e],draw:H=>ah(H,e,"all"),far:0},32,p?r:s,p?"shadow":"main")),e>=4&&e<=6&&!p&&Q.add(wl("wg"+e,{bounds:Sf[e],draw:H=>ah(H,e,"glow"),far:0},34,[],"glow"))}return{root:T,J:E}},o=a(!1),l=a(!0),c=n.style&&Fn[n.style]?n.style:n.zombie?"zombie":"hero",h=Object.assign({},Fn[c],{hit:q_,search:$_,death:c==="crawler"?Z_:Y_}),u=wf(h),f=(p,d)=>{p.body.position.set(d.bx,d.by,0),p.body.rotation.z=d.rot,p.torso.rotation.z=d.torso,p.head.rotation.z=d.head,p.uarmN.rotation.z=d.uarmN,p.farmN.rotation.z=d.farmN,p.handN.rotation.z=d.handN,p.uarmF.rotation.z=d.uarmF,p.farmF.rotation.z=d.farmF,p.handF.rotation.z=d.handF,p.thighN.rotation.z=d.thighN,p.thighF.rotation.z=d.thighF,p.shinN&&(p.shinN.rotation.z=d.shinN,p.footN.rotation.z=d.footN,p.shinF.rotation.z=d.shinF,p.footF.rotation.z=d.footF)},m=c==="zombie"?(n.seed||0)%3:0,g=[null,{uarmF:.75,farmF:.45,uarmN:-.25,head:.12},{uarmF:-.05,uarmN:-.35,farmN:-.2,head:-.12,torso:-.08}][m],v=p=>{if(!g||p.rot>.3)return p;let d=Object.assign({},p);for(let T in g)d[T]+=g[T];return d};return{group:o.root,shadow:l.root,mats:s,smats:r,ctl:u,kind:"human",spec:t,apply(p){p=v(p),f(o.J,p),f(l.J,p)}}}var Sf={1:[-6,-56,6,8],2:[-9,-56,9,8],3:[-6,-54,9,11],4:[-9,-62,9,9],5:[-6,-57,6,9],6:[-7,-66,7,9],7:[-10,-88,10,9],8:[-5,-31,5,9],9:[-12,-58,6,11],10:[-6,-97,6,10],11:[-12,-73,18,10]};function Af(n){let e=bf(n),t=JSON.stringify(n)+"|",i=[],s=[],r=e.k,a=e.b,o=f=>{let m=(M,S)=>{let E=wl(t+M,e.parts[M],S,f?s:i,f?"shadow":"main");return E.userData.part=M,E},g=new qt,v=Gt(g,0,39),p={body:v},d=(M,S,E,R,x)=>{let w=Gt(v,S,E);w.add(m(M[0]+"u"+x,R+1));let N=Gt(w,0,-16);N.add(m(M[0]+"l"+x,R)),p[M[0]+"u"+x]=w,p[M[0]+"l"+x]=N};d("f",17*r-2,-4*a,10,"F"),d("h",-21*r-2,-5*a,12,"F");let T=Gt(v,-30*r,6*a);T.add(m("tail",16)),p.tail=T,v.add(m("body",20)),d("f",18*r,-4*a,17,"N"),d("h",-21*r,-5*a,17,"N");let C=Gt(v,22*r,10*a);return C.add(m("head",30)),p.head=C,{root:g,J:p}},l=o(!1),c=o(!0),h=wf(J_),u=(f,m)=>{f.body.position.set(m.bx,39*Math.min(1,a)+m.by,0),f.body.rotation.z=m.body,f.head.rotation.z=m.head,f.tail.rotation.z=-2.2+m.tail;for(let g of["N","F"])f["fu"+g].rotation.z=m["fu"+g],f["fl"+g].rotation.z=m["fl"+g],f["hu"+g].rotation.z=m["hu"+g],f["hl"+g].rotation.z=m["hl"+g]};return{group:l.root,shadow:c.root,mats:i,smats:s,ctl:h,kind:"quad",spec:e,apply(f){u(l.J,f),u(c.J,f)}}}var gt=(n,e,t=0)=>$e(n,e,t);function le(n,e,t,i,s,r){n.fillStyle=r,n.fillRect(e,t,i,s)}function nt(n,e,t,i,s,r,a={}){le(n,e,t,i,s,r);let o=a.side==null?Math.min(6,Math.max(1.5,i*.1)):a.side;o&&le(n,e+i-o,t,o,s,gt(r,.76,1)),le(n,e,t,i,Math.min(1.6,s),gt(r,1.22)),a.edge!==!1&&(n.strokeStyle=gt(r,.42,1),n.lineWidth=.7,n.strokeRect(e+.35,t+.35,i-.7,s-.7))}function oh(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function kt(n,e,t,i,s,r,a,o=!0){oh(n,e,t,i,s,r),n.fillStyle=a,n.fill(),o&&(n.save(),oh(n,e,t,i,s,r),n.clip(),le(n,e+i*.8,t,i*.2,s,gt(a,.8,1)),le(n,e,t,i,1.4,gt(a,1.2)),n.restore()),n.strokeStyle=gt(a,.45,1),n.lineWidth=.7,oh(n,e,t,i,s,r),n.stroke()}function wn(n,e,t,i,s,r){n.beginPath(),n.arc(e,t,i,0,7),s&&(n.fillStyle=s,n.fill()),r&&(n.strokeStyle=r,n.lineWidth=.8,n.stroke())}function zt(n,e,t,i=1){n.strokeStyle=t,n.lineWidth=i,n.lineCap="round",n.beginPath(),n.moveTo(e[0],e[1]);for(let s=2;s<e.length;s+=2)n.lineTo(e[s],e[s+1]);n.stroke()}var ur=(n,e,t,i,s,r)=>{le(n,e+2,i-s,2.4,s,r),le(n,e+t-4.4,i-s,2.4,s,r)},is={sofa(n,e,t,i="#7a2638"){return ur(n,e+2,84,t,4,"#1a1210"),kt(n,e+6,t-40,76,20,4,gt(i,.92)),nt(n,e+4,t-24,80,14,i),kt(n,e,t-30,12,24,3,gt(i,.85)),kt(n,e+88-12,t-30,12,24,3,gt(i,.8)),kt(n,e+16,t-36,16,13,3,"#d8d0c0"),kt(n,e+88-32,t-36,16,13,3,"#cfc6b4"),zt(n,[e+88/2,t-24,e+88/2,t-11],gt(i,.6),.8),88},armchair(n,e,t,i="#5a3a2a"){return ur(n,e,42,t,4,"#1a1210"),kt(n,e+5,t-44,32,26,5,gt(i,.9)),nt(n,e+4,t-22,34,12,i),kt(n,e,t-28,8,22,3,gt(i,.85)),kt(n,e+42-8,t-28,8,22,3,gt(i,.8)),42},wardrobe(n,e,t,i="#4a3426"){return nt(n,e,t-112,48,112,i),le(n,e-2,t-112-4,52,5,gt(i,.8)),zt(n,[e+48/2,t-112+4,e+48/2,t-6],gt(i,.5),.8),le(n,e+48/2-4,t-112/2,2,7,"#c9a65a"),le(n,e+48/2+2,t-112/2,2,7,"#c9a65a"),le(n,e+3,t-18,42,1,gt(i,.55)),48},cabinet(n,e,t,i="#4f3a2c"){nt(n,e,t-44,54,44,i);for(let o=0;o<3;o++)zt(n,[e+3,t-44+14*o+14,e+54-3,t-44+14*o+14],gt(i,.55),.7),le(n,e+54/2-4,t-44+14*o+6,8,1.6,"#b89a5a");return X()<.5?(nt(n,e+8,t-44-30,38,28,"#1c1d20"),le(n,e+11,t-44-27,30,21,"#2b3a40"),le(n,e+12,t-44-26,10,3,"rgba(255,255,255,.12)")):(wn(n,e+40,t-44-9,8,"#2f5a7a","#11202a"),zt(n,[e+40,t-44-1,e+40,t-44],"#333",2),le(n,e+34,t-44-1.5,12,1.5,"#3a3a3a")),54},bookshelf(n,e,t,i="#3e2c20"){nt(n,e,t-104,50,104,i,{side:3}),le(n,e+3,t-104+3,44,98,gt(i,.55));let a=["#7a3a2a","#3a4a6a","#6a6a3a","#5a2a3a","#8a7a5a","#2a4a3a","#6a4a2a"];for(let o=0;o<4;o++){let l=t-104+4+o*25;le(n,e+2,l+21,46,3,gt(i,1.1));let c=e+4;for(;c<e+50-6;){let h=2+X()*3,u=13+X()*7;if(X()<.12){c+=h+1;continue}le(n,c,l+21-u,h,u,a[X()*a.length|0]),c+=h+.4}}return 50},bunkbed(n,e,t,i="#8a6a44"){let r=gt(i,.9);for(let a of[t-26,t-74])nt(n,e+2,a,90,8,i),kt(n,e+4,a-9,86,10,4,"#2c3e6a"),wn(n,e+14,a-13,7,"#a53a2a",gt("#a53a2a",.5));le(n,e,t-100,5,100,r),le(n,e+94-5,t-100,5,100,r);for(let a=0;a<5;a++)le(n,e+94-22,t-18-a*16,14,2,gt(i,1.1));return le(n,e+94-23,t-96,2,96,gt(i,.8)),le(n,e+94-9,t-96,2,96,gt(i,.8)),94},bed(n,e,t,i="#6a4a30"){return nt(n,e,t-20,92,14,i),le(n,e,t-46,7,46,gt(i,.85)),ur(n,e,92,t,6,gt(i,.6)),kt(n,e+6,t-28,84,10,3,"#cfc6b4"),kt(n,e+30,t-31,60,12,4,"#4a5a7a"),kt(n,e+9,t-34,18,8,4,"#e2dccc"),92},table(n,e,t,i="#5a4030"){return le(n,e,t-32,62,4,i),le(n,e,t-28,62,2,gt(i,.6)),ur(n,e+3,56,t,28,gt(i,.7)),62},desk(n,e,t,i="#5a4030"){le(n,e,t-34,66,4,i),nt(n,e+66-26,t-30,24,30,gt(i,.9));for(let r=0;r<2;r++)le(n,e+66-18,t-22+r*13,8,1.6,"#b89a5a");return le(n,e+3,t-30,3,30,gt(i,.7)),X()<.5?(wn(n,e+14,t-46,8,"#3a6a8a","#1a2a33"),zt(n,[e+8,t-52,e+20,t-40],"#5a8a5a",2),le(n,e+12,t-38,4,4,"#6a5a3a")):(zt(n,[e+12,t-34,e+18,t-52,e+26,t-50],"#2a2a2a",1.4),n.fillStyle="#c9a65a",n.beginPath(),n.moveTo(e+22,t-54),n.lineTo(e+32,t-52),n.lineTo(e+28,t-46),n.fill()),66},floorlamp(n,e,t){return le(n,e+4,t-3,12,3,"#2a2a2a"),n.strokeStyle="#2a2a2a",n.lineWidth=1.6,n.beginPath(),n.moveTo(e+10,t-3),n.quadraticCurveTo(e+6,t-100,e+28,t-96),n.stroke(),n.fillStyle="#3a3a3a",n.beginPath(),n.moveTo(e+22,t-96),n.lineTo(e+34,t-96),n.lineTo(e+31,t-88),n.lineTo(e+25,t-88),n.fill(),30},officedesk(n,e,t,i="#7a7468"){return le(n,e,t-32,78,3,i),le(n,e+2,t-29,3,29,"#4a4a4a"),nt(n,e+78-24,t-29,22,29,gt(i,.85)),nt(n,e+18,t-56,30,20,"#1d2024"),le(n,e+21,t-53,24,14,"#24343c"),le(n,e+31,t-36,4,4,"#2a2a2a"),le(n,e+52,t-36,14,4,"#d8d4c8"),n.fillStyle="#26282c",n.fillRect(e-6,t-44,4,22),kt(n,e-12,t-24,18,5,2,"#2c2e33"),le(n,e-4,t-19,2,14,"#2a2a2a"),le(n,e-10,t-5,14,2,"#2a2a2a"),78},filing(n,e,t,i="#6a7076"){nt(n,e,t-64,28,64,i);for(let a=0;a<4;a++)zt(n,[e+2,t-64+a*16+16,e+28-2,t-64+a*16+16],gt(i,.55),.7),le(n,e+28/2-4,t-64+a*16+7,8,2,"#b0b4b8");return 28},cooler(n,e,t){return nt(n,e+2,t-48,18,48,"#d8dadc"),kt(n,e+3,t-72,16,24,6,"rgba(110,170,220,.85)"),le(n,e+6,t-40,3,3,"#3a6aaa"),le(n,e+12,t-40,3,3,"#aa3a3a"),22},copier(n,e,t){return nt(n,e,t-40,44,40,"#c8c4bc"),le(n,e+4,t-44,36,5,"#9a968e"),le(n,e+6,t-30,32,3,"#3a3a3a"),le(n,e+30,t-38,8,4,"#3a8a5a"),44},labbench(n,e,t,i="#d8dcdc"){nt(n,e,t-36,86,36,"#6a7a7c"),le(n,e-2,t-38,90,4,"#1f2a2c");for(let a=0;a<3;a++)zt(n,[e+28*a+28,t-34,e+28*a+28,t-2],"#4a5a5c",.8),le(n,e+28*a+10,t-24,8,2,"#b0b8b8");let r=["#58c08a","#c0a03a","#6a8ac0","#c05a5a"];for(let a=0;a<4;a++){let o=e+8+a*20,l=r[a];n.fillStyle="rgba(220,240,240,.7)",n.beginPath(),n.moveTo(o,t-52),n.lineTo(o+4,t-52),n.lineTo(o+4,t-46),n.lineTo(o+9,t-39),n.lineTo(o-5,t-39),n.lineTo(o,t-46),n.fill(),le(n,o-3,t-44,10,5,l)}return 86},gurney(n,e,t){return le(n,e,t-30,84,4,"#9aa2a4"),zt(n,[e+6,t-26,e+6,t-5],"#7a8284",1.6),zt(n,[e+84-6,t-26,e+84-6,t-5],"#7a8284",1.6),wn(n,e+6,t-3,3,"#2a2a2a"),wn(n,e+84-6,t-3,3,"#2a2a2a"),kt(n,e+2,t-40,80,11,5,"#d8d4c8"),kt(n,e+6,t-46,26,9,4,"#cfc8b8"),n.fillStyle="rgba(110,10,8,.75)",n.beginPath(),n.ellipse(e+50,t-36,12,4,0,0,7),n.fill(),84},chemcab(n,e,t){nt(n,e,t-86,42,86,"#b8c0c0"),le(n,e+4,t-86+4,34,56,"rgba(40,60,60,.55)");let r=["#58c08a","#c0a03a","#c05a5a","#6a8ac0"];for(let a=0;a<3;a++)for(let o=0;o<4;o++)le(n,e+7+o*8,t-86+8+a*18+4,5,10,r[(a+o)%4]);for(let a=0;a<3;a++)le(n,e+4,t-86+22+a*18,34,1.4,"#e8eeee");return 42},tubes(n,e,t){nt(n,e,t-8,26,8,"#3a4446"),le(n,e+3,t-110,20,102,"rgba(160,240,210,.18)"),le(n,e+5,t-80,16,72,"rgba(70,220,150,.55)"),nt(n,e-1,t-116,28,7,"#3a4446");for(let s=0;s<6;s++)wn(n,e+8+X()*10,t-20-X()*55,1+X()*1.4,"rgba(220,255,240,.7)");return 26},piano(n,e,t){nt(n,e,t-62,72,58,"#151417",{side:5}),le(n,e-2,t-66,76,5,"#1d1b20"),le(n,e+4,t-36,64,6,"#e8e4da");for(let s=0;s<12;s++)le(n,e+6+s*5.2,t-36,2,4,"#111");return ur(n,e+4,64,t,4,"#111"),le(n,e+10,t-58,20,14,"rgba(255,255,255,.06)"),72},bar(n,e,t){nt(n,e,t-40,78,40,"#3a2420"),le(n,e-3,t-43,84,4,"#c9a24a"),le(n,e+4,t-100,70,3,"#2a1a16");let s=["#5a8a3a","#8a3a2a","#c9a24a","#3a5a8a"];for(let r=0;r<8;r++){let a=e+8+r*8;le(n,a,t-116,5,16,s[r%4]),le(n,a+1.4,t-121,2.2,5,s[r%4])}return 78},sofaLux(n,e,t){return is.sofa(n,e,t,"#4a2a5a")},armchair2(n,e,t){return is.armchair(n,e,t,"#6a2a3a")},statue(n,e,t){return nt(n,e+4,t-50,22,50,"#b8b0a4"),wn(n,e+15,t-64,8,"#cfc8bc","#8a8478"),kt(n,e+6,t-58,18,10,4,"#c4bcb0"),30},shelves(n,e,t){le(n,e,t-96,3,96,"#4a5054"),le(n,e+52-3,t-96,3,96,"#4a5054");for(let r=0;r<4;r++){let a=t-96+6+r*30;le(n,e,a,52,3,"#5a6064");let o=e+4;for(;o<e+52-10;){let l=10+X()*10,c=8+X()*14;if(X()<.25){o+=l;continue}nt(n,o,a-c,l,c,X()<.5?"#8a6a44":"#6a6a5a"),o+=l+2}}return 52},crates(n,e,t){let s=(r,a,o)=>{nt(n,r,a-o,o,o,"#7a5a34"),zt(n,[r+2,a-2,r+o-2,a-o+2],"#5a3e22",1.4),zt(n,[r+2,a-o+2,r+o-2,a-2],"#5a3e22",1.4)};return s(e,t,30),s(e+32,t,26),s(e+8,t-30,22),64},boxes(n,e,t){return nt(n,e,t-24,30,24,"#a07a4a"),le(n,e+12,t-24,6,24,"#c8b088"),nt(n,e+32,t-18,22,18,"#8a6a40"),nt(n,e+6,t-42,22,18,"#b0885a"),zt(n,[e+6,t-42,e+2,t-48],"#b0885a",2),56},boiler(n,e,t){kt(n,e+4,t-104,46,100,14,"#5a6a5c");for(let s=0;s<3;s++)le(n,e+4,t-90+s*28,46,2,"#4a584c");return wn(n,e+20,t-60,6,"#d8d4c8","#2a2a2a"),zt(n,[e+20,t-60,e+23,t-64],"#aa2a2a",1),le(n,e+48,t-80,12,4,"#7a4a30"),le(n,e+56,t-210,4,134,"#7a4a30"),58},barrels(n,e,t){for(let[s,r]of[[e,"#3a5a4a"],[e+28,"#7a3a2a"]])kt(n,s,t-38,26,38,4,r),le(n,s,t-30,26,2,gt(r,.6)),le(n,s,t-12,26,2,gt(r,.6));return 56},mattress(n,e,t){return kt(n,e,t-10,80,10,3,"#8a8470"),kt(n,e+20,t-14,58,7,3,"#5a4a3a"),n.fillStyle="rgba(90,30,20,.5)",n.beginPath(),n.ellipse(e+40,t-6,10,3,0,0,7),n.fill(),80},stove(n,e,t){nt(n,e,t-44,44,44,"#c8c4bc"),le(n,e+4,t-30,36,22,"#2a2a2a"),le(n,e+6,t-28,32,18,"#3a3a3a");for(let s=0;s<2;s++)wn(n,e+12+s*20,t-46,5,"#2a2a2a"),wn(n,e+12+s*20,t-46,3,"#ff6a2a");return nt(n,e+8,t-58,16,10,"#8a9096"),44},fridge(n,e,t){return nt(n,e,t-96,38,96,"#d8dad6"),zt(n,[e+2,t-62,e+38-2,t-62],"#9a9c98",1),le(n,e+38-8,t-86,2.4,16,"#8a8c88"),le(n,e+38-8,t-54,2.4,22,"#8a8c88"),38},workbench(n,e,t){le(n,e,t-40,92,6,"#8a6a44"),ur(n,e+2,88,t,34,"#5a4328"),le(n,e+4,t-14,84,3,"#5a4328"),nt(n,e+56,t-54,18,14,"#3a4252"),le(n,e+60,t-62,8,8,"#6f7a8f"),nt(n,e+8,t-112,76,54,"#4a3d2c");for(let s=0;s<4;s++)zt(n,[e+18+s*16,t-104,e+18+s*16,t-76],["#9aa0a6","#7a4a2a","#c9a24a","#aa3a2a"][s],2.2);return 92},vending(n,e,t){nt(n,e,t-76,40,76,"#c8ccd0"),le(n,e+4,t-70,22,52,"#1a2228");let s=["#c03a2a","#3a7ac0","#e0b03a","#4aa05a"];for(let r=0;r<4;r++)for(let a=0;a<3;a++)le(n,e+6+a*7,t-66+r*12,5,8,s[(r+a)%4]);return zt(n,[e+5,t-68,e+20,t-40,e+12,t-22],"rgba(255,255,255,.5)",.5),le(n,e+29,t-66,7,14,"#3a3e42"),le(n,e+6,t-14,20,6,"#111"),40},door(n,e,t){return nt(n,e-4,t-108,58,108,"#2a2420"),nt(n,e,t-102,50,102,"#5a4636"),le(n,e+6,t-94,38,36,"#4e3c2e"),le(n,e+6,t-52,38,40,"#4e3c2e"),kt(n,e+18,t-58,14,11,2,"#c9a422"),n.strokeStyle="#c9a422",n.lineWidth=2.2,n.beginPath(),n.arc(e+25,t-58,4.5,Math.PI,0),n.stroke(),wn(n,e+25,t-53,1.4,"#3a2a06"),wn(n,e+42,t-52,2.4,"#b89a5a"),50},radiator(n,e,t){for(let s=0;s<8;s++)kt(n,e+s*5.6,t-40,4.6,30,2,"#8a8e90",!1);return le(n,e,t-12,46,3,"#6a6e70"),46},toolrack(n,e,t){nt(n,e,t-112,50,50,"#6a5a44");for(let s=0;s<4;s++)zt(n,[e+8+s*11,t-104,e+8+s*11,t-80],["#9aa0a6","#7a4a2a","#9aa0a6","#aa3a2a"][s],2.2);return 50}};var lh={clock(n,e,t){wn(n,e,t,11,"#d8d2c4","#3a3226"),wn(n,e,t,8.5,"#efe9dc"),zt(n,[e,t,e,t-6],"#222",1.2),zt(n,[e,t,e+4.4,t+2],"#222",1);for(let i=0;i<12;i++){let s=i/12*6.28;le(n,e+Math.cos(s)*7-.4,t+Math.sin(s)*7-.4,.8,.8,"#333")}},frame(n,e,t,i="#6a4a2a"){nt(n,e-18,t-13,36,26,i);let s=n.createLinearGradient(0,t-10,0,t+10);s.addColorStop(0,"#3a4a5a"),s.addColorStop(1,"#2a3020"),le(n,e-15,t-10,30,20,s),n.fillStyle="#1c2218",n.beginPath(),n.moveTo(e-15,t+10),n.lineTo(e-6,t),n.lineTo(e,t+5),n.lineTo(e+8,t-3),n.lineTo(e+15,t+10),n.fill()},frameGold(n,e,t){lh.frame(n,e,t,"#b08a3a")},window(n,e,t){nt(n,e-26,t-34,52,66,"#3a2c22");let i=n.createLinearGradient(0,t-30,0,t+28);i.addColorStop(0,"#141a26"),i.addColorStop(1,"#2a3446"),le(n,e-22,t-30,44,58,i),n.fillStyle="rgba(200,210,230,.25)";for(let s=0;s<4;s++)n.beginPath(),n.ellipse(e-14+s*9,t+20-s%2*4,9,4,0,0,7),n.fill();n.strokeStyle="rgba(180,200,230,.35)",n.lineWidth=.5;for(let s=0;s<14;s++){let r=e-21+X()*42,a=t-29+X()*50;n.beginPath(),n.moveTo(r,a),n.lineTo(r-1.4,a+6),n.stroke()}le(n,e-1,t-30,2,58,"#3a2c22"),le(n,e-22,t-2,44,2,"#3a2c22"),le(n,e-32,t-38,12,74,"#6a3a3a"),le(n,e+20,t-38,12,74,"#6a3a3a"),le(n,e-34,t-40,68,3,"#2a2a2a")},blinds(n,e,t){nt(n,e-28,t-30,56,56,"#5a6268");for(let i=0;i<12;i++)le(n,e-25,t-27+i*4.4,50,2.8,i%5===3?"#1a1e24":"#aeb4b8")},board(n,e,t){nt(n,e-30,t-18,60,36,"#d8dcdc"),zt(n,[e-22,t-8,e-4,t-10,e+10,t-2],"#2a4a8a",1),zt(n,[e-20,t+4,e+18,t+6],"#aa2a2a",1)},biohaz(n,e,t){n.fillStyle="#d9ad1f",n.beginPath(),n.moveTo(e,t-12),n.lineTo(e+12,t+9),n.lineTo(e-12,t+9),n.closePath(),n.fill(),wn(n,e,t+2,3.4,null,"#15171c")},monitor(n,e,t){nt(n,e-22,t-14,44,28,"#15191c"),le(n,e-19,t-11,38,22,"#04100c"),zt(n,[e-18,t,e-8,t,e-5,t-8,e-1,t+7,e+3,t,e+18,t],"#58ffb0",1)},vent(n,e,t){nt(n,e-16,t-8,32,16,"#5a6064");for(let i=0;i<5;i++)le(n,e-13,t-6+i*3,26,1.2,"#2a2e30")},mirror(n,e,t){n.fillStyle="#b08a3a",n.beginPath(),n.ellipse(e,t,15,20,0,0,7),n.fill(),n.fillStyle="#5a6a7a",n.beginPath(),n.ellipse(e,t,12,17,0,0,7),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.beginPath(),n.ellipse(e-4,t-6,3,8,.4,0,7),n.fill()},pipes(n,e,t){le(n,e-60,t-3,120,6,"#6a4a30"),le(n,e-60,t+6,120,4,"#4a5a5c");for(let i=0;i<3;i++)le(n,e-50+i*45,t-5,4,10,"#3a3a3a")}};var ot={ready:!1,enabled:!0,active:!1};try{ot.enabled=localStorage.getItem("tower-3d")!=="0"}catch{}window.GL3D=ot;ot.names=()=>Object.keys(Nl);ot.box=n=>{let e=Nl[n]||{},t=e.scale||1;return e.q?{h:84*t,w:120*t}:e.style==="crawler"?{h:64,w:118}:{h:134*Ll*t,w:(e.style==="brute"?100:e.style==="bloater"?86:72)*t}};var Ll=1.05,Cf=[{shirt:"#5a5142",torn:.35,x:[]},{shirt:"#3e4636",jacket:"#3e4636",hoodDown:!0,x:[]},{shirt:"#4a4336",jacket:"#4a4336",hoodDown:!0,x:["pads"],padCol:"#55595c"},{shirt:"#30373f",jacket:"#30373f",x:["pads","vest"],vest:"#3d4231",pouches:!0,padCol:"#2f3337"},{shirt:"#2c3036",jacket:"#2c3036",x:["pads","vest","exo"],vest:"#2b2f33",pouches:!0,padCol:"#3a3f44"},{shirt:"#1f232a",jacket:"#1f232a",x:["vest","nano"],vest:"#191c22",pouches:!0}],Nl={"\u041A\u0440\u044B\u0441\u0430-\u043F\u0435\u0440\u0435\u0440\u043E\u0441\u0442\u043E\u043A":{q:1,fur:"#5b4a3c",ears:"round",snout:1.15,tailCol:"#c99a96",tailLen:2.2,tailK:.6,scale:.55,long:1.15,legK:.8,eye:"#ff3d2e",speed:1.4},"\u0411\u0440\u043E\u0434\u044F\u0447\u0438\u0439 \u043F\u0451\u0441":{q:1,fur:"#4a3d30",scale:1,eye:"#ffcf3d"},\u0421\u0431\u043E\u0440\u0449\u0438\u043A:{skin:"#8f9a7a",shirt:"#6b6f5e",pants:"#3d4250",hair:"#2a221a",torn:.5,blood:.5,x:["backpack"]},\u0421\u043B\u0438\u0437\u0435\u043D\u044C:{style:"bloater",fat:1.3,skin:"#8fb06a",shirt:null,pants:"#4a5a3a",sleeves:"none",x:["pustules"],scale:1.08,torn:.8,blood:.3,bald:!0},"\u041F\u043E\u043B\u0437\u0443\u0449\u0438\u0439 \u043C\u043E\u043D\u0442\u0451\u0440":{style:"crawler",legless:!0,skin:"#87926f",shirt:"#3a5a7a",pants:"#2f3440",torn:.7,blood:.9,hair:"#1e1a14",bald:!0,x:["hardhat"],hat:"#d9a020"},\u0422\u043E\u0449\u0438\u0439:{style:"thin",thin:.8,skin:"#6a6a78",shirt:"#2a2630",pants:"#2a2630",eye:"#d8ff5a",eyeGlow:2.4,torn:.6,blood:.4,x:["hood"],bald:!0},"\u041A\u0430\u043B\u0435\u043A\u0430 \u0432 \u0431\u0440\u043E\u043D\u0435\u0436\u0438\u043B\u0435\u0442\u0435":{style:"crawler",skin:"#9a9a80",shirt:"#5a4a3a",pants:"#3a3030",torn:.6,blood:.8,hair:"#3a2a1c",legless:!0,x:["vest"],vest:"#3a4048"},"\u041E\u0434\u0438\u0447\u0430\u0432\u0448\u0438\u0439 \u0441\u043E\u0441\u0435\u0434":{skin:"#98a284",shirt:"#7a2e2e",pants:"#2e3340",hair:"#5a4632",torn:.45,blood:.6},"\u041A\u043E\u0448\u043A\u0430-\u043C\u0443\u0442\u0430\u043D\u0442":{q:1,fur:"#3a3440",ears:"big",snout:.7,headW:.9,scale:.62,tailLen:1.8,tailK:.7,long:1.05,legK:.8,eye:"#b8ff5a",speed:1.3,tailUp:-.6},\u041C\u0430\u0440\u043E\u0434\u0451\u0440:{skin:"#7f8a6a",shirt:"#2d2a33",pants:"#262830",x:["hood"],torn:.35,blood:.4},\u041F\u043E\u043B\u0437\u0443\u043D:{style:"crawler",legless:!0,skin:"#87926f",shirt:"#4f5a4a",pants:"#2f3440",torn:.7,blood:.9,hair:"#1e1a14",bald:!0},\u0421\u043A\u0438\u0442\u0430\u043B\u0435\u0446:{skin:"#8c977a",shirt:"#56604a",pants:"#3a3a30",x:["backpack"],hair:"#2f281f",torn:.4,blood:.5},"\u0411\u0440\u043E\u0434\u044F\u0447\u0438\u0439 \u043F\u043E\u0432\u0430\u0440":{skin:"#a0a690",shirt:"#e9e6df",pants:"#2a2a2a",x:["apron","chefhat","cleaver"],torn:.3,blood:1},"\u0421\u0442\u043E\u0440\u043E\u0436\u0435\u0432\u043E\u0439 \u043F\u0451\u0441":{q:1,fur:"#3b3631",scale:1.12,bulk:1.1,collar:"#9aa3ad",spikes:!0,eye:"#ff3d2e"},\u041E\u0445\u0440\u0430\u043D\u043D\u0438\u043A:{skin:"#8a947a",shirt:"#2b3445",pants:"#232833",x:["helmet","vest"],torn:.3,blood:.4},\u041A\u0443\u0440\u044C\u0435\u0440:{style:"thin",thin:.6,skin:"#a3a08a",shirt:"#d0622a",pants:"#2e3340",x:["cap"],hat:"#d0622a",torn:.4,blood:.5},\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A:{skin:"#9aa58a",shirt:"#dfe3ea",pants:"#2a2f3d",x:["tie"],tie:"#2a4a7a",hair:"#2a221a",torn:.35,blood:.6},\u0412\u0430\u0445\u0442\u0451\u0440:{skin:"#7f8c6a",shirt:"#2b3445",pants:"#232833",x:["vest","spikes"],vest:"#3a3f46",torn:.3,blood:.5},\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440:{suit:!0,skin:"#98a284",shirt:"#2e3548",pants:"#252a38",tie:"#7a1f26",hair:"#1a1612",torn:.3,blood:.5},\u0423\u0431\u043E\u0440\u0449\u0438\u043A:{skin:"#8f9a7a",shirt:"#2f6f6a",pants:"#2f6f6a",overalls:!0,torn:.4,blood:.4,x:["pustules"]},\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440:{skin:"#a3ad92",shirt:"#c9d6e8",pants:"#2a2f3d",x:["tie","glasses"],tie:"#3a3a3a",bald:!0,hair:"#555555",torn:.3,blood:.5},\u041F\u043E\u0434\u043E\u043F\u044B\u0442\u043D\u044B\u0439:{style:"brute",muscle:1,bigArm:"R",headScale:.85,skin:"#c0c4b6",shirt:"#a8c4d8",pants:"#a8c4d8",sleeves:"none",scale:1.28,torn:.5,blood:.6,bald:!0},\u041C\u0443\u0442\u0430\u043D\u0442:{style:"brute",muscle:1,bigArm:"R",headScale:.8,skin:"#7f9a5a",shirt:null,pants:"#3a3a30",scale:1.32,x:["pustules"],torn:.6,blood:.7,bald:!0},"\u041B\u0430\u0431\u043E\u0440\u0430\u043D\u0442-\u043A\u0443\u043B\u044C\u0442\u0438\u0441\u0442":{coat:!0,skin:"#a3a08a",shirt:"#e9ecef",pants:"#2a2f3d",x:["gasmask"],torn:.35,blood:.6},\u041B\u0438\u043A\u0432\u0438\u0434\u0430\u0442\u043E\u0440:{skin:"#8a947a",shirt:"#d9b42a",pants:"#d9b42a",x:["helmet","vest","spikes"],vest:"#9a8a2a",torn:.3,blood:.5},\u0425\u0438\u043C\u0435\u0440\u0430:{q:1,fur:"#5a6b4a",scale:1.18,bulk:1.15,spikes:!0,eye:"#b8ff5a",plague:!0},"\u041A\u043E\u043B\u0431\u0430-\u0441\u043B\u0438\u0437\u0435\u043D\u044C":{style:"bloater",fat:1.2,skin:"#7a9a5a",shirt:"#a8c4d8",pants:"#a8c4d8",sleeves:"none",x:["pustules"],scale:1.12,torn:.5,blood:.5,bald:!0},\u0421\u043A\u0430\u043B\u044C\u043F\u0435\u043B\u044C\u0449\u0438\u043A:{coat:!0,skin:"#a3a08a",shirt:"#5a8a7a",pants:"#5a8a7a",mask:"surgical",x:["scalpels"],torn:.3,blood:1},\u0421\u0442\u0440\u0430\u0436:{skin:"#7a846a",shirt:"#15181e",pants:"#15181e",x:["helmet","vest"],vest:"#22262c",torn:.2,blood:.4,scale:1.06},\u041D\u0430\u043C\u0435\u0441\u0442\u043D\u0438\u043A:{suit:!0,skin:"#a0a890",shirt:"#5a1a2a",pants:"#2a1a20",tie:"#e6b422",x:["collarGold"],hair:"#9a9a9a",torn:.2,blood:.6},\u0422\u0435\u043D\u044C:{style:"thin",thin:1,skin:"#3a3a44",shirt:"#14141a",pants:"#14141a",eye:"#c8ff5a",eyeGlow:3,torn:.6,blood:.2,x:["hood"]},\u0422\u0435\u043B\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u044C:{suit:!0,skin:"#8f9a7a",shirt:"#1c1f26",pants:"#1c1f26",tie:"#111111",x:["vest","glasses"],vest:"#2a2e34",scale:1.12,torn:.2,blood:.4},"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u043A\u0430\u044F \u0445\u0438\u043C\u0435\u0440\u0430":{q:1,fur:"#2e2a26",scale:1.1,plague:!0,eye:"#b8ff5a"},"\u0417\u043E\u043B\u043E\u0442\u0430\u044F \u0433\u043E\u043D\u0447\u0430\u044F":{q:1,fur:"#c9a23a",scale:1.08,long:1.1,collar:"#e6b422",eye:"#ff7a3d",speed:1.3},\u041C\u0435\u0442\u0440\u0434\u043E\u0442\u0435\u043B\u044C:{suit:!0,skin:"#a3ad92",shirt:"#e8e4da",pants:"#1c1c1c",tie:"#1c1c1c",x:["bowtie"],hair:"#1a1612",torn:.25,blood:.6}},K_=n=>{let e=7;for(let t of n)e=e*31+t.charCodeAt(0)>>>0;return e%997+1};function _r(n,e){let t=Cf[e]||Cf[0],i=Object.assign({style:"hero",zombie:!1,seed:11,skin:"#c99c7c",pants:"#34362f",shoes:"#2a221c",hair:"#2b2119",stubble:!0,sleeves:"long",torn:.06,blood:.12},t,{x:["pack",...t.x]}),s=Al(i,n);return s.group.scale.setScalar(Ll),s.cfg=i,s}function ch(n){let e={style:"hero",zombie:!1,seed:77,skin:"#b88a6a",shirt:"#5a4a6a",jacket:"#4a3a2a",pants:"#2c2c30",shoes:"#1d1a18",hair:"#8a8a8a",stubble:!0,sleeves:"long",torn:.1,blood:0,x:["pack"]},t=Al(e,0);return t.group.scale.setScalar(Ll),t.cfg=e,t}function Dl(n){let e=Object.assign({zombie:!0,seed:K_(n)},Nl[n]||Nl.\u0421\u0431\u043E\u0440\u0449\u0438\u043A);e.coat&&(e.coatCol=e.shirt);let t=e.q?Af(e):Al(e,0);return t.group.scale.setScalar((e.scale||1)*(e.q?1:Ll)),t.cfg=e,t}var vi,jn,_i,gr,Ni,xs=null,on=null,Rf="",Rl=0,ys=null,ss=null,pr=0,xa=0,Qt=null,un=null,Ii=null,dr=[],Pf="",If="",Nf="",hh="",Cl=0;ot.quality="high";try{ot.quality=localStorage.getItem("tower-q")||"high"}catch{}var Q_=-16,j_=3,e1=1.12;function Pl(n){let e=new qt,t=new qt,i=new qt;e.add(t),t.add(i),i.add(n.group);let s=new qt,r=new qt,a=new qt;return s.position.set(Q_,j_,-9.3),s.scale.setScalar(e1),e.add(s),s.add(r),r.add(a),a.add(n.shadow),{root:e,flip:t,yaw:i,sflip:r,syaw:a,model:n,ctl:n.ctl,st:{atk:-1,flash:0,dir:1,pop:0}}}function ya(n,e){n.st.dir=e,n.flip.scale.x=e,n.sflip.scale.x=e}function Lf(n,e,t){n.model.mats.forEach(i=>{i.userData.glow||i.color.setRGB(t*(1+e*1.5),t*(1-e*.45),t*(1-e*.5))})}function ma(n){n&&(jn.remove(n.root),n.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(t=>t.dispose())}))}var Il=(n,e)=>n.model.apply(n.ctl.pose(e));function t1(n=.016){let e=Ni.getBoundingClientRect(),t=Math.max(1,e.width),i=Math.max(1,e.height),s=t+"x"+i;if(s!==hh){hh=s;let c=ot.quality!=="low",h=Math.min(window.devicePixelRatio||1,c?1.75:1.2);vi.setPixelRatio(h),vi.setSize(t,i,!1),c&&xs&&xs.setSize(t,i,h)}let r=window.VIEW||{x:0,y:0,w:900,h:400};pr=Math.max(0,pr-n);let a=pr>0?pr*22:0,o=(Math.random()-.5)*a,l=(Math.random()-.5)*a;_i.left=r.x+o,_i.right=r.x+r.w+o,_i.top=-r.y+l,_i.bottom=-(r.y+r.h)+l,_i.updateProjectionMatrix()}function n1(){let n=document.getElementById("hero");if(!n||!Qt)return;let e=getComputedStyle(n),t=0,i=400;if(e.transform&&e.transform!=="none"){let s=new DOMMatrix(e.transform);t=s.m41,i=s.m42}Qt.root.position.set(t,-i,0),(!ys||!ys.fight)&&ya(Qt,n.classList.contains("face-l")?-1:1),Qt.ctl.loop(n.classList.contains("walk")?"walk":"idle"),Qt.root.visible=!n.classList.contains("boarding")}function Df(n){if(requestAnimationFrame(Df),!ot.active||!vi)return;let e=n/1e3;if(e-Cl<.024)return;let t=Math.min(.05,Cl?e-Cl:.016);Cl=e,xa=Math.max(0,xa-t);let i=xa>0?t*.08:t;if(t1(t),Qt){n1();let s=Qt.st;s.atk>=0&&(s.atk+=i/.55,s.atk>=1&&(s.atk=-1)),s.flash>0&&(s.flash=Math.max(0,s.flash-i*3)),Lf(Qt,s.flash,1),Qt.yaw.position.x=Qt.syaw.position.x=s.atk>=0?Math.sin(Math.PI*Math.min(1,s.atk*1.4))*30:0,Il(Qt,i)}for(let s of[un,Ii]){if(!s)continue;let r=s.st;r.pop=Math.min(1,r.pop+i/(s===un?1.1:.01)),r.atk>=0&&(r.atk+=i/.6,r.atk>=1&&(r.atk=-1)),r.flash>0&&(r.flash=Math.max(0,r.flash-i*3));let a=1-Math.pow(1-r.pop,3);Lf(s,r.flash,.08+.92*a),s===un&&(s.ctl.loop(r.pop<1?"walk":"idle"),s.root.position.x=(s.baseX||0)-s.st.dir*60*(1-a)),s.yaw.position.x=s.syaw.position.x=r.atk>=0?Math.sin(Math.PI*r.atk)*34:0,Il(s,i)}if(dr.forEach(s=>Il(s,i)),on&&ys&&on.update(i,ys),ss&&on){let s=Math.min(1,(performance.now()-ss.t0)/ss.dur),r=s<.5?4*s**3:1-Math.pow(-2*s+2,3)/2;on.root.position.y=ss.from*(1-r),s>=1&&(ss=null)}s1(i),Rl=Math.max(0,Rl-i*1.6),ot.quality!=="low"&&xs?xs.render(e,Rl):vi.render(jn,_i)}ot.update=n=>{if(!ot.ready||(ot.active=!!n.visible&&ot.enabled,gr.style.display=ot.active?"":"none",!ot.active))return;if(ys=n,n.floorKey!==Rf){Rf=n.floorKey,on&&(jn.remove(on.root),on.dispose(),on=null);try{on=gf({zone:n.zone,floor:n.floor,base:n.base,top:n.top,exit:n.exit,rooms:n.rooms,vend:n.vend,levels:n.levels},n.layout,n.catalog),jn.add(on.root)}catch(s){console.error(s),on=null}if(mr.length=0,dr.forEach(ma),dr=[],on&&n.slide){let s=n.layout.roomH+n.layout.slab;ss={t0:performance.now(),dur:1050,from:n.slide==="up"?s:-s},on.root.position.y=ss.from}else ss=null}Ni.classList.toggle("env",!!on);let e=n.wi+":"+n.ai;e!==Pf&&(Pf=e,ma(Qt),Qt=Pl(_r(n.wi,n.ai)),jn.add(Qt.root)),Qt&&(n.dead?Qt.ctl.once("death"):Qt.ctl.dead&&Qt.ctl.reset(),n.fight&&ya(Qt,n.heroDir||1));let t=n.enemy||"";if(t!==If){if(If=t,un)if(un.dyingStarted)for(un.left=2,dr.push(un);dr.length>3;)ma(dr.shift());else ma(un);un=null,t&&(un=Pl(Dl(t)),jn.add(un.root))}un&&(un.baseX=n.foeX,un.st.pop>=1&&(un.root.position.x=n.foeX),un.root.position.y=-n.foeY,ya(un,n.foeDir||-1));let i=n.npc||"";i!==Nf&&(Nf=i,ma(Ii),Ii=null,i&&(Ii=Pl(ch(i)),Ii.st.pop=1,jn.add(Ii.root))),Ii&&(Ii.root.position.set(n.npcX,-n.foeY,0),ya(Ii,n.npcDir||-1))};ot.setEnabled=n=>{ot.enabled=!!n;try{localStorage.setItem("tower-3d",n?"1":"0")}catch{}Ni&&Ni.classList.toggle("gl",ot.ready&&ot.enabled),gr&&(gr.style.display=ot.ready&&ot.enabled?"":"none")};ot.setQuality=n=>{ot.quality=n==="low"?"low":"high";try{localStorage.setItem("tower-q",ot.quality)}catch{}vi&&(ot.quality!=="low"&&!xs&&(xs=rh(vi,jn,_i)),hh="")};ot.trigger=(n,e)=>{if(!ot.ready||!ot.enabled)return;if(e==="shake"){pr=Math.max(pr,.32),xa=.12;return}let t=n==="hero"?Qt:un;if(t)if(e==="attack")t.st.atk=0,t.ctl.once("attack");else if(e==="hurt")xa=.07,t.st.flash=1,t.ctl.once("hit"),n==="hero"&&(Rl=1),i1(t.root.position.x,t.root.position.y+82*(t.model.kind==="quad"?.5:1),-t.st.dir,8+(Math.random()*7|0));else if(e==="death"){if(t.dyingStarted=!0,t.ctl.once("death"),on){let i=t.root.position.x;setTimeout(()=>on&&on.stamp(i+t.st.dir*20,0,16,"pool"),700)}}else e==="search"&&t.ctl.once("search")};function Uf(n){n.outputColorSpace=jt,n.toneMapping=Ln}ot.init=()=>{try{if(Ni=document.getElementById("scene"),gr=document.getElementById("gl"),!Ni||!gr)return;vi=new aa({canvas:gr,antialias:!0,alpha:!1,powerPreference:"high-performance"}),vi.setClearColor(329224,1),Uf(vi),jn=new Hs,_i=new oi(0,900,0,-400,-200,200),_i.position.z=100,ot.quality!=="low"&&(xs=rh(vi,jn,_i)),ot.ready=!0,ot.enabled&&Ni.classList.add("gl"),requestAnimationFrame(Df),typeof render=="function"&&render()}catch(n){console.error(n),ot.ready=!1,Ni&&Ni.classList.remove("gl")}};var mr=[],fr=null;function i1(n,e,t,i){for(let s=0;s<i;s++){let r=(Math.random()-.5)*1.4+(t>0?0:Math.PI)-t*.35,a=60+Math.random()*170;mr.push({x:n,y:e+(Math.random()-.5)*14,vx:Math.cos(r)*a,vy:Math.sin(r)*a*.8+40+Math.random()*80,life:1.4,wall:Math.random()<.3?.06+Math.random()*.3:9,r:.6+Math.random()*1.2})}}function s1(n){fr||(fr=new fs(new Yt().setAttribute("position",new cn(new Float32Array(600),3)),new Xi({color:7997958,size:3.2,sizeAttenuation:!1,transparent:!0,opacity:.95,depthWrite:!1})),fr.frustumCulled=!1,fr.renderOrder=40,jn.add(fr));let e=fr.geometry.attributes.position,t=ys?-ys.layout.floorY+4:-396;for(let i=mr.length-1;i>=0;i--){let s=mr[i];s.life-=n,s.wall-=n,s.vy-=520*n,s.x+=s.vx*n,s.y+=s.vy*n;let r=null;s.wall<=0?r="wall":s.y<=t&&(r="floor"),(r||s.life<=0)&&(r&&on&&on.stamp(s.x,-Math.max(s.y,t),s.r*(r==="wall"?1.4:2),r),mr.splice(i,1))}for(let i=0;i<200;i++){let s=mr[i];s?e.setXYZ(i,s.x,s.y,5):e.setXYZ(i,0,-99999,0)}e.needsUpdate=!0}var r1={head:["head"],body:["torso","coatTail","body"],arms:["uarmN","farmN","handN","uarmF","farmF","handF","fuN","flN","fuF","flF"],legs:["thighN","shinN","footN","thighF","shinF","footF","huN","hlN","huF","hlF","tail"]};function uh(n,e,t,i,s,r,a){e.group.updateMatrixWorld(!0);let o=[];e.group.traverse(h=>{h.isMesh&&h.material.map&&!h.material.userData.glow&&o.push(h)}),o.sort((h,u)=>h.renderOrder-u.renderOrder);let l=r?new Set(r1[r]||[]):null,c=n.getTransform();for(let h of o){let u=h.matrixWorld.elements,f=h.material.map.image,m=h.geometry.parameters.width,g=h.geometry.parameters.height;if(n.setTransform(c.multiply(new DOMMatrix([t*u[0],-t*u[1],-t*u[4],t*u[5],t*u[12]+i,-t*u[13]+s]))),l&&l.has(h.userData.part)){let v=document.createElement("canvas");v.width=f.width,v.height=f.height;let p=v.getContext("2d");p.drawImage(f,0,0),p.globalCompositeOperation="source-atop",p.fillStyle="rgba(214,28,20,.82)",p.fillRect(0,0,v.width,v.height),n.drawImage(v,-m/2,-g/2,m,g)}else n.globalAlpha=a&&l?.9:1,n.drawImage(f,-m/2,-g/2,m,g),n.globalAlpha=1}n.setTransform(c)}ot.drawChar=(n,e,t,i)=>{if(!ot.ready&&t!=="full"&&t!=="portrait")return!1;let s=e.hero?_r(e.wi,e.ai):Dl(e.name);s.apply(s.ctl.pose(.6));let r=n.getContext("2d"),a=n.width,o=n.height;if(r.clearRect(0,0,a,o),t==="portrait"){s.group.updateMatrixWorld(!0);let l=new O;s.group.traverse(h=>{h.userData.part===(s.kind==="quad","head")&&h.getWorldPosition(l)});let c=a/(s.kind==="quad"?40:30);e.hero||(r.translate(a,0),r.scale(-1,1)),uh(r,s,c,a/2-l.x*c+(s.kind==="quad"?-a*.1:0),o/2+l.y*c-o*.02)}else{let l=o/((s.kind==="quad"?80:150)*(s.cfg.scale||1));e.hero||(r.translate(a,0),r.scale(-1,1)),s.group.scale.setScalar(1),uh(r,s,l,a/2,o*.97,i,!0)}return s.group.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),s.shadow.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),!0};function ga(n,e,t){e&&e!=="idle"&&n.ctl.once(e);for(let i=0;i<t;i+=1/30)n.apply(n.ctl.pose(1/30));return n.group.scale.setScalar(1),n}function _a(n){[n.group,n.shadow].forEach(e=>e&&e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}function va(n,e,t,i,s,r,a=1,o){let l=document.createElement("canvas");l.width=n.canvas.width,l.height=n.canvas.height;let c=l.getContext("2d");r&&(c.translate(2*i,0),c.scale(-1,1)),uh(c,e,t,i,s),o&&(c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-atop",c.fillStyle=o,c.fillRect(0,0,l.width,l.height)),n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=a,n.drawImage(l,0,0),n.restore()}ot.drawScene=(n,e,t)=>{let i=n.getContext("2d"),s=n.width,r=n.height,a=r/300,o=s/a,l=272;i.setTransform(a,0,0,a,0,0);let c;if(e==="win"){c=i.createLinearGradient(0,0,0,300),c.addColorStop(0,"#1d2440"),c.addColorStop(.45,"#7a4a5a"),c.addColorStop(.75,"#e09a5a"),c.addColorStop(1,"#f2c27a"),i.fillStyle=c,i.fillRect(0,0,o,300),i.fillStyle="rgba(255,236,190,.9)",i.beginPath(),i.arc(o*.72,228,34,0,7),i.fill(),i.fillStyle="rgba(255,220,170,.25)",i.beginPath(),i.arc(o*.72,228,60,0,7),i.fill(),i.fillStyle="#2a2230";let h=0;for(i.beginPath(),i.moveTo(0,260);h<o;){let m=20+h*37%53;i.lineTo(h,260-m),h+=14+h*13%19,i.lineTo(h,260-m)}i.lineTo(o,300),i.lineTo(0,300),i.fill(),i.fillStyle="#121014",i.fillRect(0,l-6,o,40),i.fillRect(o*.05,l-46,30,40),i.fillRect(o*.05+6,l-70,4,24),i.strokeStyle="#121014",i.lineWidth=2;for(let m=0;m<12;m++)i.beginPath(),i.moveTo(m*o/11,l-6),i.lineTo(m*o/11,l-22),i.stroke();i.fillRect(0,l-23,o,2);let u=ga(_r(t&&t.wi||0,t&&t.ai||0),"idle",.5),f=t&&t.end;if(f==="light"){i.fillStyle="#3a2a1a",i.fillRect(o*.5-14,l-12,28,6);for(let g=0;g<4;g++)i.fillStyle=["#ffd36b","#ff9a3a","#ff5a2a","#fff2b0"][g],i.beginPath(),i.moveTo(o*.5-12+g*2,l-12),i.quadraticCurveTo(o*.5-6+g*3,l-40-g*8,o*.5+2-g,l-60+g*10),i.quadraticCurveTo(o*.5+8,l-30,o*.5+12-g*2,l-12),i.fill();let m=ga(ch("trader"),"idle",.9);va(i,m,a*1.45,s*.64,(l-6)*a,!0,1,"rgba(20,14,18,.55)"),_a(m)}if(f==="scribe"){i.fillStyle="#efe6d0";for(let m=0;m<9;m++)i.save(),i.translate(o*(.45+m*.06),60+m*47%120),i.rotate(m*.7),i.fillRect(-6,-8,12,16),i.restore()}va(i,u,a*1.45,s*.3,(l-6)*a,!1,1,"rgba(20,14,18,.55)"),_a(u),i.setTransform(1,0,0,1,0,0);return}c=i.createLinearGradient(0,0,0,300),c.addColorStop(0,"#24252b"),c.addColorStop(1,"#17181c"),i.fillStyle=c,i.fillRect(0,0,o,300),i.fillStyle="rgba(255,255,255,.025)";for(let h=0;h<o;h+=16)i.fillRect(h,0,8,l);if(e!=="lift"&&(i.save(),i.translate(o*.66,108),i.scale(2.1,2.1),lh.window(i,0,0),i.restore()),i.fillStyle="#121214",i.fillRect(0,l,o,300-l),i.fillStyle="rgba(255,255,255,.06)",i.fillRect(0,l,o,1.5),e==="npc"&&(is.radiator(i,o*.6,l),is.boxes(i,o*.78,l)),e==="lift"){let h=t&&t.ok,u=o*.5;i.fillStyle="#0a0b0d",i.fillRect(u-64,l-196,128,196),i.fillStyle="#4a4e52",i.fillRect(u-72,l-206,144,12),i.fillRect(u-72,l-206,10,206),i.fillRect(u+62,l-206,10,206);let f=i.createLinearGradient(u-62,0,u+62,0);f.addColorStop(0,"#7e858b"),f.addColorStop(.5,"#a8afb5"),f.addColorStop(1,"#6a7076"),i.fillStyle=f;let m=h?26:1;if(i.fillRect(u-62,l-192,62-m,192),i.fillRect(u+m,l-192,62-m,192),h){let g=i.createLinearGradient(0,l-192,0,l);g.addColorStop(0,"rgba(255,240,200,.85)"),g.addColorStop(1,"rgba(255,220,160,.25)"),i.fillStyle=g,i.fillRect(u-m,l-192,m*2,192)}if(i.fillStyle="#060708",i.fillRect(u-30,l-232,60,20),i.fillStyle=h?"#7dff9a":"#ff5a3a",i.font="700 15px monospace",i.textAlign="center",i.fillText(h?"\u25B2\u25BC":"--",u,l-216),!h){[[-.45,-120],[.38,-60]].forEach(([g,v])=>{i.save(),i.translate(u,l+v),i.rotate(g),i.fillStyle="#d9ad1f",i.fillRect(-90,-10,180,20),i.fillStyle="#15171c";for(let p=-90;p<90;p+=18)i.beginPath(),i.moveTo(p,-10),i.lineTo(p+9,-10),i.lineTo(p+2,10),i.lineTo(p-7,10),i.fill();i.restore()}),i.strokeStyle="#2a2a2a",i.lineWidth=2.4,i.beginPath(),i.moveTo(u+84,l-150),i.quadraticCurveTo(u+110,l-100,u+96,l-60),i.stroke(),i.strokeStyle="#c0302a",i.beginPath(),i.moveTo(u+88,l-150),i.quadraticCurveTo(u+120,l-110,u+112,l-74),i.stroke(),i.fillStyle="#ffe34d";for(let g=0;g<5;g++)i.beginPath(),i.arc(u+112+Math.cos(g*1.3)*8,l-74+Math.sin(g*1.3)*8,1.6,0,7),i.fill()}i.fillStyle="#2a2e33",i.fillRect(u+82,l-150,16,30),i.fillStyle=h?"#5cff7a":"#ff3020",i.beginPath(),i.arc(u+90,l-142,3.4,0,7),i.fill()}if(e==="bed"&&(i.save(),i.translate(o*.2,l-116),i.scale(2,2),vs(i,"sbed",116,58,!1,ts.base,3,t&&t.lvl||1),i.restore()),e==="vending"&&(i.save(),i.translate(o*.32-53,l-220),i.scale(2.2,2.2),vs(i,"vending",48,100,!1,ts.z1),i.restore()),e==="locked"&&(i.save(),i.translate(o*.32,l),i.scale(2.2,2.2),is.door(i,-25,0),i.restore()),e==="box"&&(i.save(),i.translate(o*.3,l),i.scale(1.8,1.8),is.crates(i,-32,0),i.restore(),is.radiator(i,o*.7,l)),e==="npc"){let h=ga(ch("trader"),"idle",.8);va(i,h,a*1.85,s*.3,l*a),_a(h)}if(e==="dead"){i.fillStyle="rgba(80,4,3,.9)",i.beginPath(),i.ellipse(o*.42,l+3,80,7,0,0,7),i.fill();let h=ga(_r(t&&t.wi||0,t&&t.ai||0),"death",2);if(va(i,h,a*1.35,s*.64,l*a,!1),_a(h),t&&t.killer){let u=ga(Dl(t.killer),"idle",1.1),f=u.kind==="quad";va(i,u,a*(f?2.3:1.55)*(u.cfg.scale||1),s*(f?.8:.84),l*a,!0,1,"rgba(8,6,8,.5)"),_a(u)}i.setTransform(1,0,0,1,0,0),c=i.createRadialGradient(s*.45,r*.5,r*.15,s*.5,r*.5,s*.7),c.addColorStop(0,"rgba(60,0,0,0)"),c.addColorStop(1,"rgba(60,0,0,.75)"),i.fillStyle=c,i.fillRect(0,0,s,r);return}i.setTransform(1,0,0,1,0,0),c=i.createRadialGradient(s*.45,r*.45,r*.2,s*.5,r*.5,s*.75),c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,.7)"),i.fillStyle=c,i.fillRect(0,0,s,r)};ot.drawWeapon=(n,e)=>{let t=n.getContext("2d"),i=n.width,s=n.height;t.clearRect(0,0,i,s);let r=_r(e,0);r.group.updateMatrixWorld(!0);let a=null;if(r.group.traverse(o=>{o.isMesh&&o.userData.part===(e>0?null:"handN")&&!a&&(a=o)}),e>0&&r.group.traverse(o=>{o.isMesh&&!o.userData.part&&!o.material.userData.glow&&!a&&(a=o)}),a){let o=a.material.map.image,l=a.geometry.parameters.width,c=a.geometry.parameters.height,h=e>0?Math.min(i/c,s/l)*.95:Math.min(i/c,s/l)*.9;t.translate(i/2,s/2),t.rotate(e>0?Math.PI/2:-Math.PI/2),t.drawImage(o,-l*h/2,-c*h/2,l*h,c*h),t.setTransform(1,0,0,1,0,0)}r.group.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()})};ot.gallery=(n,e,t,i,s)=>{let r=new aa({canvas:n,antialias:!0});r.setSize(t,i,!1),Uf(r),r.setClearColor(2763312,1);let a=new Hs,o=new oi(0,t,0,-i,-500,500);o.position.z=100;let l=new Zt(new Jn(t*3,i*3),new Bt({color:4866120}));l.position.set(t/2,-i/2,-60),a.add(l),s=s||Math.ceil(Math.sqrt(e.length*t/i));let c=Math.ceil(e.length/s),h=t/s,u=i/c;return e.forEach((f,m)=>{let g=f.hero?_r(f.wi,f.ai):Dl(f.name),v=Pl(g);ya(v,f.hero?1:-1);let p=m%s,d=Math.floor(m/s);v.root.position.set(p*h+h/2,-(d*u+u*.92),0),v.root.scale.setScalar((f.s||1)*u/165),a.add(v.root),f.anim&&f.anim!=="idle"&&f.anim!=="walk"?v.ctl.once(f.anim):v.ctl.loop(f.anim||"idle");for(let T=0;T<(f.t||.4);T+=1/60)Il(v,1/60)}),r.render(a,o),!0};document.addEventListener("DOMContentLoaded",ot.init);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
