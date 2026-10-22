(()=>{var Cu=0,zc=1,Iu=2;var ma=1,Jo=2,hr=3,Xi=0,cn=1,Sn=2,ci=0,ur=1,Jn=2,kc=3,Hc=4,Pu=5;var ys=100,Lu=101,Du=102,Nu=103,Uu=104,Fu=200,Ou=201,Bu=202,zu=203,Gc=204,Vc=205,ku=206,Hu=207,Gu=208,Vu=209,Wu=210,Xu=211,qu=212,Yu=213,Zu=214,mo=0,go=1,_o=2,Zs=3,xo=4,vo=5,yo=6,Mo=7,$o=0,Ju=1,$u=2,$n=0,Wc=1,Xc=2,qc=3,ga=4,Yc=5,Zc=6,Jc=7,Rc="attached",Ku="detached",$c=300,qi=301,Ms=302,Ko=303,Qo=304,_a=306,ai=1e3,ri=1001,So=1002,je=1003,Qu=1004;var xa=1005;var an=1006,jo=1007;var Yi=1008;var Tn=1009,Kc=1010,Qc=1011,dr=1012,tl=1013,Kn=1014,Pn=1015,Qn=1016,el=1017,nl=1018,fr=1020,jc=35902,th=35899,eh=1021,nh=1022,Ln=1023,oi=1026,Zi=1027,il=1028,sl=1029,Ji=1030,rl=1031;var al=1033,va=33776,ya=33777,Ma=33778,Sa=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,ba=37490,gl=37491,_l=37808,xl=37809,vl=37810,yl=37811,Ml=37812,Sl=37813,bl=37814,El=37815,Tl=37816,wl=37817,Al=37818,Rl=37819,Cl=37820,Il=37821,Pl=36492,Ll=36494,Dl=36495,Nl=36283,Ul=36284,Ea=36285,Fl=36286,Ol=2200,ju=2201,td=2202,zr=2300,bo=2301,uo=2302,Cc=2303,os=2400,ls=2401,kr=2402,Bl=2500,ed=2501;var nd=3200;var Ta=0,id=1,wi="",Qe="srgb",Hr="srgb-linear",Gr="linear",xe="srgb";var fo=7680;var sd=519,rd=512,ad=513,od=514,zl=515,ld=516,cd=517,kl=518,hd=519,ih=35044;var sh="300 es",Gn=2e3,Js=2001;function Ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){let i=Vr("canvas");return i.style.display="block",i}var Wh={},$s=null;function Wr(...i){let t="THREE."+i.shift();$s?$s("log",t,...i):console.log(t,...i)}function dd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=dd(i);let t="THREE."+i.shift();if($s)$s("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=dd(i);let t="THREE."+i.shift();if($s)$s("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hs(...i){let t=i.join(" ");t in Wh||(Wh[t]=!0,Gt(...i))}function fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pd={[mo]:go,[_o]:yo,[xo]:Mo,[Zs]:vo,[go]:mo,[yo]:_o,[Mo]:xo,[vo]:Zs},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var tc=Math.PI/180,Eo=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function wf(i,t){return(i%t+t)%t}function ec(i,t,e){return(1-e)*i+e*t}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(u!==M||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*M;m<0&&(d=-d,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);f=Math.sin(f*b)/A,o=Math.sin(o*b)/A,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+M*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+M*o;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new D,Xh=new fn,$t=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],b=s[1],A=s[4],_=s[7],S=s[2],y=s[5],T=s[8];return r[0]=a*M+o*b+l*S,r[3]=a*m+o*A+l*y,r[6]=a*f+o*_+l*T,r[1]=c*M+h*b+u*S,r[4]=c*m+h*A+u*y,r[7]=c*f+h*_+u*T,r[2]=d*M+p*b+g*S,r[5]=d*m+p*A+g*y,r[8]=d*f+p*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(t,e)),this}rotate(t){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ic=new $t,qh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){let i={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hr]:{primaries:t,whitePoint:n,transfer:Gr,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}var le=Af();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,To=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=Vr("canvas")),Is.width=t.width,Is.height=t.height;let s=Is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rf=0,Ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sc(s[a].image)):r.push(sc(s[a]))}else r=sc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?To.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Cf=0,rc=new D,yn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=an,a=Yi,o=Ln,l=Tn,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Vn(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=$c;yn.DEFAULT_ANISOTROPY=1;var Me=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,_=(p+1)/2,S=(f+1)/2,y=(h+d)/4,T=(u+M)/4,x=(g+m)/4;return A>_&&A>S?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=y/n,r=T/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=y/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-M)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new yn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ne=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),a=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,M=c*u;e[0]=d+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,M=c*u;e[0]=d-M*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-M*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Pf)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Di.crossVectors(n,An),Di.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Di.crossVectors(n,An)),Di.normalize(),Oa.crossVectors(An,Di),s[0]=Di.x,s[4]=Oa.x,s[8]=An.x,s[1]=Di.y,s[5]=Oa.y,s[9]=An.y,s[2]=Di.z,s[6]=Oa.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],b=n[3],A=n[7],_=n[11],S=n[15],y=s[0],T=s[4],x=s[8],w=s[12],C=s[1],I=s[5],F=s[9],z=s[13],L=s[2],O=s[6],G=s[10],V=s[14],Q=s[3],q=s[7],j=s[11],nt=s[15];return r[0]=a*y+o*C+l*L+c*Q,r[4]=a*T+o*I+l*O+c*q,r[8]=a*x+o*F+l*G+c*j,r[12]=a*w+o*z+l*V+c*nt,r[1]=h*y+u*C+d*L+p*Q,r[5]=h*T+u*I+d*O+p*q,r[9]=h*x+u*F+d*G+p*j,r[13]=h*w+u*z+d*V+p*nt,r[2]=g*y+M*C+m*L+f*Q,r[6]=g*T+M*I+m*O+f*q,r[10]=g*x+M*F+m*G+f*j,r[14]=g*w+M*z+m*V+f*nt,r[3]=b*y+A*C+_*L+S*Q,r[7]=b*T+A*I+_*O+S*q,r[11]=b*x+A*F+_*G+S*j,r[15]=b*w+A*z+_*V+S*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15],b=l*p-c*d,A=o*p-c*u,_=o*d-l*u,S=a*p-c*h,y=a*d-l*h,T=a*u-o*h;return e*(M*b-m*A+f*_)-n*(g*b-m*S+f*y)+s*(g*A-M*S+f*T)-r*(g*_-M*y+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],b=e*o-n*a,A=e*l-s*a,_=e*c-r*a,S=n*l-s*o,y=n*c-r*o,T=s*c-r*l,x=h*M-u*g,w=h*m-d*g,C=h*f-p*g,I=u*m-d*M,F=u*f-p*M,z=d*f-p*m,L=b*z-A*F+_*I+S*C-y*w+T*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(o*z-l*F+c*I)*O,t[1]=(s*F-n*z-r*I)*O,t[2]=(M*T-m*y+f*S)*O,t[3]=(d*y-u*T-p*S)*O,t[4]=(l*C-a*z-c*w)*O,t[5]=(e*z-s*C+r*w)*O,t[6]=(m*_-g*T-f*A)*O,t[7]=(h*T-d*_+p*A)*O,t[8]=(a*F-o*C+c*x)*O,t[9]=(n*C-e*F-r*x)*O,t[10]=(g*y-M*_+f*b)*O,t[11]=(u*_-h*y-p*b)*O,t[12]=(o*w-a*I-l*x)*O,t[13]=(e*I-n*w+s*x)*O,t[14]=(M*A-g*S-m*b)*O,t[15]=(h*S-u*A+d*b)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,M=a*h,m=a*u,f=o*u,b=l*c,A=l*h,_=l*u,S=n.x,y=n.y,T=n.z;return s[0]=(1-(M+f))*S,s[1]=(p+_)*S,s[2]=(g-A)*S,s[3]=0,s[4]=(p-_)*y,s[5]=(1-(d+f))*y,s[6]=(m+b)*y,s[7]=0,s[8]=(g+A)*T,s[9]=(m-b)*T,s[10]=(1-(d+M))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);let c=1/a,h=1/o,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Gn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Js)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Gn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Js)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ps=new D,Bn=new ne,If=new D(0,0,0),Pf=new D(1,1,1),Di=new D,Oa=new D,An=new D,Zh=new ne,Jh=new fn,Un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lf=0,$h=new D,Ls=new fn,gi=new ne,Ba=new D,wr=new D,Df=new D,Nf=new fn,Kh=new D(1,0,0),Qh=new D(0,1,0),jh=new D(0,0,1),tu={type:"added"},Uf={type:"removed"},Ds={type:"childadded",child:null},ac={type:"childremoved",child:null},Oe=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Un,n=new fn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new $t}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(jh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ba.copy(t):Ba.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(wr,Ba,this.up):gi.lookAt(Ba,wr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(gi),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new D(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oe=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ff={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},za={h:0,s:0,l:0};function oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=wf(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oc(a,r,t+1/3),this.g=oc(a,r,t),this.b=oc(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return le.workingToColorSpace(dn.copy(this),t),Math.round(ee(dn.r*255,0,255))*65536+Math.round(ee(dn.g*255,0,255))*256+Math.round(ee(dn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(dn.copy(this),e);let n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Qe){le.workingToColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,s=dn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(za);let n=ec(Ni.h,za.h,e),s=ec(Ni.s,za.s,e),r=ec(Ni.l,za.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Vt;Vt.NAMES=md;var zi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zn=new D,_i=new D,lc=new D,xi=new D,Ns=new D,Us=new D,eu=new D,cc=new D,hc=new D,uc=new D,dc=new Me,fc=new Me,pc=new Me,Mi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),_i.subVectors(n,e),lc.subVectors(t,e);let a=zn.dot(zn),o=zn.dot(_i),l=zn.dot(lc),c=_i.dot(_i),h=_i.dot(lc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(t,e),fc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dc,r.x),a.addScaledVector(fc,r.y),a.addScaledVector(pc,r.z),a}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),_i.subVectors(t,e),zn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),zn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ns.subVectors(s,n),Us.subVectors(r,n),cc.subVectors(t,n);let l=Ns.dot(cc),c=Us.dot(cc);if(l<=0&&c<=0)return e.copy(n);hc.subVectors(t,s);let h=Ns.dot(hc),u=Us.dot(hc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ns,a);uc.subVectors(t,r);let p=Ns.dot(uc),g=Us.dot(uc);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Us,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return eu.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(eu,o);let f=1/(m+M+d);return a=M*f,o=d*f,e.copy(n).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ka.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(t.matrixWorld),this.union(ka)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),Ha.subVectors(this.max,Ar),Fs.subVectors(t.a,Ar),Os.subVectors(t.b,Ar),Bs.subVectors(t.c,Ar),Ui.subVectors(Os,Fs),Fi.subVectors(Bs,Os),is.subVectors(Fs,Bs);let e=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-is.z,is.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,is.z,0,-is.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-is.y,is.x,0];return!mc(e,Fs,Os,Bs,Ha)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,Fs,Os,Bs,Ha))?!1:(Ga.crossVectors(Ui,Fi),e=[Ga.x,Ga.y,Ga.z],mc(e,Fs,Os,Bs,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new D,new D,new D,new D,new D,new D,new D,new D],kn=new D,ka=new Xn,Fs=new D,Os=new D,Bs=new D,Ui=new D,Fi=new D,is=new D,Ar=new D,Ha=new D,Ga=new D,ss=new D;function mc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new D,Va=new rt,Of=0,qe=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var us=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bf=new Xn,Rr=new D,gc=new D,qn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(gc)),this.expandByPoint(Rr.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zf=0,Nn=new ne,_c=new Oe,zs=new D,Rn=new Xn,Cr=new Xn,Ke=new D,De=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ef(t)?Yr:us)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Rn.min,Cr.min),Rn.expandByPoint(Ke),Ke.addVectors(Rn.max,Cr.max),Rn.expandByPoint(Ke)):(Rn.expandByPoint(Cr.min),Rn.expandByPoint(Cr.max))}Rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(t,c),Ke.add(zs)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,h=new D,u=new D,d=new rt,p=new rt,g=new rt,M=new D,m=new D;function f(x,w,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,x),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[x].add(M),o[w].add(M),o[C].add(M),l[x].add(m),l[w].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,w=b.length;x<w;++x){let C=b[x],I=C.start,F=C.count;for(let z=I,L=I+F;z<L;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let A=new D,_=new D,S=new D,y=new D;function T(x){S.fromBufferAttribute(s,x),y.copy(S);let w=o[x];A.copy(w),A.sub(S.multiplyScalar(S.dot(w))).normalize(),_.crossVectors(y,w);let I=_.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,w=b.length;x<w;++x){let C=b[x],I=C.start,F=C.count;for(let z=I,L=I+F;z<L;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new qe(d,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ro=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},vn=new D,Zr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xc=new D,kf=new D,Hf=new $t,Hn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xc.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hf.getNormalMatrix(t),s=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gf=0,Yn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=ur,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ds=class extends Yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ks,Ir=new D,Hs=new D,Gs=new D,Vs=new rt,Pr=new rt,gd=new ne,Wa=new D,Lr=new D,Xa=new D,nu=new rt,vc=new rt,iu=new rt,js=class extends Oe{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ro(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Zr(n,3,0,!1)),ks.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;qa(Wa.set(-.5,-.5,0),Gs,a,Hs,s,r),qa(Lr.set(.5,-.5,0),Gs,a,Hs,s,r),qa(Xa.set(.5,.5,0),Gs,a,Hs,s,r),nu.set(0,0),vc.set(1,0),iu.set(1,1);let o=t.ray.intersectTriangle(Wa,Lr,Xa,!1,Ir);if(o===null&&(qa(Lr.set(-.5,.5,0),Gs,a,Hs,s,r),vc.set(0,1),o=t.ray.intersectTriangle(Wa,Xa,Lr,!1,Ir),o===null))return;let l=t.ray.origin.distanceTo(Ir);l<t.near||l>t.far||e.push({distance:l,point:Ir.clone(),uv:Mi.getInterpolation(Ir,Wa,Lr,Xa,nu,vc,iu,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function qa(i,t,e,n,s,r){Vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Pr.x=r*Vs.x-s*Vs.y,Pr.y=s*Vs.x+r*Vs.y):Pr.copy(Vs),i.copy(t),i.x+=Pr.x,i.y+=Pr.y,i.applyMatrix4(gd)}var yi=new D,yc=new D,Ya=new D,Za=new D,tr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yc.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),Za.copy(this.origin).sub(yc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ya),o=Za.dot(this.direction),l=-Za.dot(Ya),c=Za.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let M=1/h;u*=M,d*=M,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yc).addScaledVector(Ya,d),p}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,p=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,f=n.x-a.x,b=n.y-a.y,A=n.z-a.z,_=Math.abs(l),S=Math.abs(c),y=Math.abs(h),T,x,w,C,I,F,z,L,O,G,V,Q;if(_>=S&&_>=y?(w=l,F=u,O=g,Q=f,l>=0?(T=c,x=h,C=d,I=p,z=M,L=m,G=b,V=A):(T=h,x=c,C=p,I=d,z=m,L=M,G=A,V=b)):S>=y?(w=c,F=d,O=M,Q=b,c>=0?(T=h,x=l,C=p,I=u,z=m,L=g,G=A,V=f):(T=l,x=h,C=u,I=p,z=g,L=m,G=f,V=A)):(w=h,F=p,O=m,Q=A,h>=0?(T=l,x=c,C=u,I=d,z=g,L=M,G=f,V=b):(T=c,x=l,C=d,I=u,z=M,L=g,G=b,V=f)),w===0)return null;let q=T/w,j=x/w,nt=1/w,Lt=C-q*F,At=I-j*F,pe=z-q*O,se=L-j*O,ue=G-q*Q,J=V-j*Q,tt=ue*se-J*pe,_t=Lt*J-At*ue,Yt=pe*At-se*Lt;if(s){if(tt<0||_t<0||Yt<0)return null}else if((tt<0||_t<0||Yt<0)&&(tt>0||_t>0||Yt>0))return null;let bt=tt+_t+Yt;if(bt===0)return null;let Zt=nt*(tt*F+_t*O+Yt*Q);return(bt>0?Zt<0:Zt>0)?null:this.at(Zt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},su=new ne,rs=new tr,Ja=new qn,ru=new D,$a=new D,Ka=new D,Qa=new D,Mc=new D,ja=new D,au=new D,to=new D,kt=class extends Oe{constructor(t=new De,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Mc.fromBufferAttribute(u,t),a?ja.addScaledVector(Mc,h):ja.addScaledVector(Mc.sub(e),h))}e.add(ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(Ja.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Ja,ru)===null||rs.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),rs.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,S=A;_<S;_+=3){let y=o.getX(_),T=o.getX(_+1),x=o.getX(_+2);s=eo(this,f,t,n,c,h,u,y,T,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=o.getX(m),A=o.getX(m+1),_=o.getX(m+2);s=eo(this,a,t,n,c,h,u,b,A,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,S=A;_<S;_+=3){let y=_,T=_+1,x=_+2;s=eo(this,f,t,n,c,h,u,y,T,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=m,A=m+1,_=m+2;s=eo(this,a,t,n,c,h,u,b,A,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vf(i,t,e,n,s,r,a,o){let l;if(t.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xi,o),l===null)return null;to.copy(o),to.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$a),i.getVertexPosition(l,Ka),i.getVertexPosition(c,Qa);let h=Vf(i,t,e,n,$a,Ka,Qa,au);if(h){let u=new D;Mi.getBarycoord(au,$a,Ka,Qa,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Mi.getNormal($a,Ka,Qa,d.normal),h.face=d,h.barycoord=u}return h}var Dr=new Me,ou=new Me,lu=new Me,Wf=new Me,cu=new ne,no=new D,Sc=new qn,hu=new ne,bc=new tr,fs=class extends kt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rc,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(s),t.ray.intersectsSphere(Sc)!==!1&&(hu.copy(s).invert(),bc.copy(t.ray).applyMatrix4(hu),!(this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,bc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():Gt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;ou.fromBufferAttribute(s.attributes.skinIndex,t),lu.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Dr.copy(e),e.set(0,0,0,0)):(Dr.set(...e,1),e.set(0,0,0)),Dr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=lu.getComponent(r);if(a!==0){let o=ou.getComponent(r);cu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Wf.copy(Dr).applyMatrix4(cu),a)}}return e.isVector4&&(e.w=Dr.w),e.applyMatrix4(this.bindMatrixInverse)}},er=class extends Oe{constructor(){super(),this.isBone=!0,this.type="Bone"}},nr=class extends yn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=je,h=je,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uu=new ne,Xf=new ne,ps=class i{constructor(t=[],e=[]){this.uuid=Vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Gt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:Xf;uu.multiplyMatrices(o,e[r]),uu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new nr(e,t,t,Ln,Pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(Gt("Skeleton: No bone found with UUID:",r),a=new er),this.bones.push(a),this.boneInverses.push(new ne().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}},Jr=class extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new ne,du=new ne,io=[],fu=new Xn,qf=new ne,Nr=new kt,Ur=new qn,$r=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),fu.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Ur.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),t.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),du.multiplyMatrices(n,Ws),Nr.matrixWorld=du,Nr.raycast(t,io);for(let a=0,o=io.length;a<o;a++){let l=io[a];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(s*this.count),s,this.count,il,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new qn,Yf=new rt(.5,.5),so=new D,ir=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],b=r[12],A=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,p-h,f-g,S-b).normalize(),s[1].setComponents(c+a,p+h,f+g,S+b).normalize(),s[2].setComponents(c+o,p+u,f+M,S+A).normalize(),s[3].setComponents(c-o,p-u,f-M,S-A).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,p-d,f-m,S-_).normalize();else if(s[4].setComponents(c-l,p-d,f-m,S-_).normalize(),e===Gn)s[5].setComponents(c+l,p+d,f+m,S+_).normalize();else if(e===Js)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=Yf.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bi=class extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pu=new ne,Ic=new tr,ro=new qn,ao=new D,ki=class extends Oe{constructor(t=new De,e=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;pu.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(pu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,M=p;g<M;g++){let m=c.getX(g);ao.fromBufferAttribute(u,m),mu(ao,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,M=p;g<M;g++)ao.fromBufferAttribute(u,g),mu(ao,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mu(i,t,e,n,s,r,a){let o=Ic.distanceSqToPoint(i);if(o<e){let l=new D;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Kr=class extends yn{constructor(t=[],e=qi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends yn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends yn{constructor(t,e,n=Kn,s,r,a,o=je,l=je,c,h=oi,u=1){if(h!==oi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Co=class extends Hi{constructor(t,e=Kn,n=qi,s,r,a=je,o=je,l,c=oi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qr=class extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ve=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(M,m,f,b,A,_,S,y,T,x,w){let C=_/T,I=S/x,F=_/2,z=S/2,L=y/2,O=T+1,G=x+1,V=0,Q=0,q=new D;for(let j=0;j<G;j++){let nt=j*I-z;for(let Lt=0;Lt<O;Lt++){let At=Lt*C-F;q[M]=At*b,q[m]=nt*A,q[f]=L,c.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[f]=y>0?1:-1,h.push(q.x,q.y,q.z),u.push(Lt/T),u.push(1-j/x),V+=1}}for(let j=0;j<x;j++)for(let nt=0;nt<T;nt++){let Lt=d+nt+O*j,At=d+nt+O*(j+1),pe=d+(nt+1)+O*(j+1),se=d+(nt+1)+O*j;l.push(Lt,At,se),l.push(At,pe,se),Q+=6}o.addGroup(p,Q,w),p+=Q,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sr=class i extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ne=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,M=[],m=n/2,f=0;b(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(p,2));function b(){let _=new D,S=new D,y=0,T=(e-t)/n;for(let x=0;x<=r;x++){let w=[],C=x/r,I=C*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,L=z*l+o,O=Math.sin(L),G=Math.cos(L);S.x=I*O,S.y=-C*n+m,S.z=I*G,u.push(S.x,S.y,S.z),_.set(O,T,G).normalize(),d.push(_.x,_.y,_.z),p.push(z,1-C),w.push(g++)}M.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let C=M[w][x],I=M[w+1][x],F=M[w+1][x+1],z=M[w][x+1];(t>0||w!==0)&&(h.push(C,I,z),y+=3),(e>0||w!==r-1)&&(h.push(I,F,z),y+=3)}c.addGroup(f,y,0),f+=y}function A(_){let S=g,y=new rt,T=new D,x=0,w=_===!0?t:e,C=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),g++;let I=g;for(let F=0;F<=s;F++){let L=F/s*l+o,O=Math.cos(L),G=Math.sin(L);T.x=w*G,T.y=m*C,T.z=w*O,u.push(T.x,T.y,T.z),d.push(0,C,0),y.x=O*.5+.5,y.y=G*.5*C+.5,p.push(y.x,y.y),g++}for(let F=0;F<s;F++){let z=S+F,L=I+F;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),x+=3}c.addGroup(f,x,_===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},on=class i extends Ne{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new ne;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ee(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ee(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Io=class extends rr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var gu=new D,_u=new D,Ec=new rh,Tc=new rh,wc=new rh,Po=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(_u.subVectors(s[0],s[1]).add(s[0]),c=_u);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(gu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),M=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Ec.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,m),Tc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,m),wc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Tc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ec.calc(l),Tc.calc(l),wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zf(i,t){let e=1-i;return e*e*t}function Jf(i,t){return 2*(1-i)*i*t}function $f(i,t){return i*i*t}function Or(i,t,e,n){return Zf(i,t)+Jf(i,e)+$f(i,n)}function Kf(i,t){let e=1-i;return e*e*e*t}function Qf(i,t){let e=1-i;return 3*e*e*i*t}function jf(i,t){return 3*(1-i)*i*i*t}function tp(i,t){return i*i*i*t}function Br(i,t,e,n,s){return Kf(i,t)+Qf(i,e)+jf(i,n)+tp(i,s)}var jr=class extends Cn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Br(t,s.x,r.x,a.x,o.x),Br(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends Cn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Br(t,s.x,r.x,a.x,o.x),Br(t,s.y,r.y,a.y,o.y),Br(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends Cn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Cn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends Cn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Or(t,s.x,r.x,a.x),Or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Cn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Or(t,s.x,r.x,a.x),Or(t,s.y,r.y,a.y),Or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(xu(o,l.x,c.x,h.x,u.x),xu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Pc=Object.freeze({__proto__:null,ArcCurve:Io,CatmullRomCurve3:Po,CubicBezierCurve:jr,CubicBezierCurve3:Lo,EllipseCurve:rr,LineCurve:ta,LineCurve3:Do,QuadraticBezierCurve:ea,QuadraticBezierCurve3:No,SplineCurve:na}),Uo=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Pc[s.type]().fromJSON(s))}return this}},ia=class extends Uo{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ta(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ea(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new jr(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new na(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new rr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ms=class extends ia{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ia().fromJSON(s))}return this}};function ep(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_d(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ap(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){let p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return sa(r,a,e,o,l,c,0),a}function _d(i,t,e,n,s){let r;if(s===_p(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vu(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(aa(r),r=r.next),r}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ar(e,e.next)||Ue(e.prev,e,e.next)===0)){if(aa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&up(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ip(i,n,s,r):np(i)){t.push(l.i,i.i,c.i),aa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=sp(gs(i),t),sa(i,t,e,n,s,r,2)):a===2&&rp(i,t,e,n,s,r):sa(gs(i),t,e,n,s,r,1);break}}}function np(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Fr(s,o,r,l,a,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ip(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),M=Math.max(o,l,c),m=Math.max(h,u,d),f=Lc(p,g,t,e,n),b=Lc(M,m,t,e,n),A=i.prevZ,_=i.nextZ;for(;A&&A.z>=f&&_&&_.z<=b;){if(A.x>=p&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Fr(o,h,l,u,c,d,A.x,A.y)&&Ue(A.prev,A,A.next)>=0||(A=A.prevZ,_.x>=p&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Fr(o,h,l,u,c,d,_.x,_.y)&&Ue(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;A&&A.z>=f;){if(A.x>=p&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Fr(o,h,l,u,c,d,A.x,A.y)&&Ue(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;_&&_.z<=b;){if(_.x>=p&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Fr(o,h,l,u,c,d,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function sp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ar(n,s)&&vd(n,e,e.next,s)&&ra(n,s)&&ra(s,n)&&(t.push(n.i,e.i,s.i),aa(e),aa(e.next),e=i=s),e=e.next}while(e!==i);return gs(e)}function rp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pp(a,o)){let l=yd(a,o);a=gs(a,a.next),l=gs(l,l.next),sa(a,t,e,n,s,r,0),sa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ap(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_d(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(fp(c))}s.sort(op);for(let r=0;r<s.length;r++)e=lp(s[r],e);return e}function op(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lp(i,t){let e=cp(i,t);if(!e)return t;let n=yd(e,i);return gs(n,n.next),gs(e,e.next)}function cp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ar(i,e))return e;do{if(ar(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&xd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);ra(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&hp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function hp(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function up(i,t,e,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dp(s)}function dp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Fr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&xd(i,t,e,n,s,r,a,o)}function pp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mp(i,t)&&(ra(i,t)&&ra(t,i)&&gp(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||ar(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ar(i,t){return i.x===t.x&&i.y===t.y}function vd(i,t,e,n){let s=lo(Ue(i,t,e)),r=lo(Ue(i,t,n)),a=lo(Ue(e,n,i)),o=lo(Ue(e,n,t));return!!(s!==r&&a!==o||s===0&&oo(i,e,t)||r===0&&oo(i,n,t)||a===0&&oo(e,i,n)||o===0&&oo(e,t,n))}function oo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lo(i){return i>0?1:i<0?-1:0}function mp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ra(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function gp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yd(i,t){let e=Dc(i.i,i.x,i.y),n=Dc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vu(i,t,e,n){let s=Dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Nc=class{static triangulate(t,e,n=2){return ep(t,e,n)}},cs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yu(t),Mu(n,t);let a=t.length;e.forEach(yu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Mu(n,e[l]);let o=Nc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function yu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var or=class i extends De{constructor(t=new ms([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:xp,A,_=!1,S,y,T,x;if(f){A=f.getSpacedPoints(h),_=!0,d=!1;let et=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(h,et),y=new D,T=new D,x=new D}d||(m=0,p=0,g=0,M=0);let w=o.extractPoints(c),C=w.shape,I=w.holes;if(!cs.isClockWise(C)){C=C.reverse();for(let et=0,st=I.length;et<st;et++){let at=I[et];cs.isClockWise(at)&&(I[et]=at.reverse())}}function z(et){let at=10000000000000001e-36,ot=et[0];for(let ht=1;ht<=et.length;ht++){let Wt=ht%et.length,zt=et[Wt],Jt=zt.x-ot.x,Kt=zt.y-ot.y,P=Jt*Jt+Kt*Kt,me=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(ot.x),Math.abs(ot.y)),re=at*me*me;if(P<=re){et.splice(Wt,1),ht--;continue}ot=zt}}z(C),I.forEach(z);let L=I.length,O=C;for(let et=0;et<L;et++){let st=I[et];C=C.concat(st)}function G(et,st,at){return st||qt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(st,at)}let V=C.length;function Q(et,st,at){let ot,ht,Wt,zt=et.x-st.x,Jt=et.y-st.y,Kt=at.x-et.x,P=at.y-et.y,me=zt*zt+Jt*Jt,re=zt*P-Jt*Kt;if(Math.abs(re)>Number.EPSILON){let R=Math.sqrt(me),v=Math.sqrt(Kt*Kt+P*P),B=st.x-Jt/R,W=st.y+zt/R,Y=at.x-P/v,lt=at.y+Kt/v,ct=((Y-B)*P-(lt-W)*Kt)/(zt*P-Jt*Kt);ot=B+zt*ct-et.x,ht=W+Jt*ct-et.y;let Z=ot*ot+ht*ht;if(Z<=2)return new rt(ot,ht);Wt=Math.sqrt(Z/2)}else{let R=!1;zt>Number.EPSILON?Kt>Number.EPSILON&&(R=!0):zt<-Number.EPSILON?Kt<-Number.EPSILON&&(R=!0):Math.sign(Jt)===Math.sign(P)&&(R=!0),R?(ot=-Jt,ht=zt,Wt=Math.sqrt(me)):(ot=zt,ht=Jt,Wt=Math.sqrt(me/2))}return new rt(ot/Wt,ht/Wt)}let q=[];for(let et=0,st=O.length,at=st-1,ot=et+1;et<st;et++,at++,ot++)at===st&&(at=0),ot===st&&(ot=0),q[et]=Q(O[et],O[at],O[ot]);let j=[],nt,Lt=q.concat();for(let et=0,st=L;et<st;et++){let at=I[et];nt=[];for(let ot=0,ht=at.length,Wt=ht-1,zt=ot+1;ot<ht;ot++,Wt++,zt++)Wt===ht&&(Wt=0),zt===ht&&(zt=0),nt[ot]=Q(at[ot],at[Wt],at[zt]);j.push(nt),Lt=Lt.concat(nt)}let At;if(m===0)At=cs.triangulateShape(O,I);else{let et=[],st=[];for(let at=0;at<m;at++){let ot=at/m,ht=p*Math.cos(ot*Math.PI/2),Wt=g*Math.sin(ot*Math.PI/2)+M;for(let zt=0,Jt=O.length;zt<Jt;zt++){let Kt=G(O[zt],q[zt],Wt);_t(Kt.x,Kt.y,-ht),ot===0&&et.push(Kt)}for(let zt=0,Jt=L;zt<Jt;zt++){let Kt=I[zt];nt=j[zt];let P=[];for(let me=0,re=Kt.length;me<re;me++){let R=G(Kt[me],nt[me],Wt);_t(R.x,R.y,-ht),ot===0&&P.push(R)}ot===0&&st.push(P)}}At=cs.triangulateShape(et,st)}let pe=At.length,se=g+M;for(let et=0;et<V;et++){let st=d?G(C[et],Lt[et],se):C[et];_?(T.copy(S.normals[0]).multiplyScalar(st.x),y.copy(S.binormals[0]).multiplyScalar(st.y),x.copy(A[0]).add(T).add(y),_t(x.x,x.y,x.z)):_t(st.x,st.y,0)}for(let et=1;et<=h;et++)for(let st=0;st<V;st++){let at=d?G(C[st],Lt[st],se):C[st];_?(T.copy(S.normals[et]).multiplyScalar(at.x),y.copy(S.binormals[et]).multiplyScalar(at.y),x.copy(A[et]).add(T).add(y),_t(x.x,x.y,x.z)):_t(at.x,at.y,u/h*et)}for(let et=m-1;et>=0;et--){let st=et/m,at=p*Math.cos(st*Math.PI/2),ot=g*Math.sin(st*Math.PI/2)+M;for(let ht=0,Wt=O.length;ht<Wt;ht++){let zt=G(O[ht],q[ht],ot);_t(zt.x,zt.y,u+at)}for(let ht=0,Wt=I.length;ht<Wt;ht++){let zt=I[ht];nt=j[ht];for(let Jt=0,Kt=zt.length;Jt<Kt;Jt++){let P=G(zt[Jt],nt[Jt],ot);_?_t(P.x,P.y+A[h-1].y,A[h-1].x+at):_t(P.x,P.y,u+at)}}}ue(),J();function ue(){let et=s.length/3;if(d){let st=0,at=V*st;for(let ot=0;ot<pe;ot++){let ht=At[ot];Yt(ht[2]+at,ht[1]+at,ht[0]+at)}st=h+m*2,at=V*st;for(let ot=0;ot<pe;ot++){let ht=At[ot];Yt(ht[0]+at,ht[1]+at,ht[2]+at)}}else{for(let st=0;st<pe;st++){let at=At[st];Yt(at[2],at[1],at[0])}for(let st=0;st<pe;st++){let at=At[st];Yt(at[0]+V*h,at[1]+V*h,at[2]+V*h)}}n.addGroup(et,s.length/3-et,0)}function J(){let et=s.length/3,st=0;tt(O,st),st+=O.length;for(let at=0,ot=I.length;at<ot;at++){let ht=I[at];tt(ht,st),st+=ht.length}n.addGroup(et,s.length/3-et,1)}function tt(et,st){let at=et.length;for(;--at>=0;){let ot=at,ht=at-1;ht<0&&(ht=et.length-1);for(let Wt=0,zt=h+m*2;Wt<zt;Wt++){let Jt=V*Wt,Kt=V*(Wt+1),P=st+ot+Jt,me=st+ht+Jt,re=st+ht+Kt,R=st+ot+Kt;bt(P,me,re,R)}}}function _t(et,st,at){l.push(et),l.push(st),l.push(at)}function Yt(et,st,at){Zt(et),Zt(st),Zt(at);let ot=s.length/3,ht=b.generateTopUV(n,s,ot-3,ot-2,ot-1);ye(ht[0]),ye(ht[1]),ye(ht[2])}function bt(et,st,at,ot){Zt(et),Zt(st),Zt(ot),Zt(st),Zt(at),Zt(ot);let ht=s.length/3,Wt=b.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);ye(Wt[0]),ye(Wt[1]),ye(Wt[3]),ye(Wt[1]),ye(Wt[2]),ye(Wt[3])}function Zt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function ye(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pc[s.type]().fromJSON(s)),new i(n,t.options)}},xp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-u),new rt(d,1-g),new rt(M,1-f)]:[new rt(o,1-l),new rt(h,1-u),new rt(p,1-g),new rt(m,1-f)]}};function vp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var oa=class i extends De{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ee(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new rt,p=new D,g=new D,M=new D,m=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(g)}for(let b=0;b<=e;b++){let A=n+b*h*s,_=Math.sin(A),S=Math.cos(A);for(let y=0;y<=t.length-1;y++){u.x=t[y].x*_,u.y=t[y].y,u.z=t[y].x*S,a.push(u.x,u.y,u.z),d.x=b/e,d.y=y/(t.length-1),o.push(d.x,d.y);let T=l[3*y+0]*_,x=l[3*y+1],w=l[3*y+0]*S;c.push(T,x,w)}}for(let b=0;b<e;b++)for(let A=0;A<t.length-1;A++){let _=A+b*t.length,S=_,y=_+t.length,T=_+t.length+1,x=_+1;r.push(S,y,x),r.push(T,x,y)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mn=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let b=f*d-a;for(let A=0;A<c;A++){let _=A*u-r;g.push(_,-b,0),M.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let A=b+c*f,_=b+c*(f+1),S=b+1+c*(f+1),y=b+1+c*f;p.push(A,_,y),p.push(_,S,y)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Se=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){let b=[],A=f/n,_=a+A*o,S=t*Math.cos(_),y=Math.sqrt(t*t-S*S),T=0;f===0&&a===0?T=.5/e:f===n&&l===Math.PI&&(T=-.5/e);for(let x=0;x<=e;x++){let w=x/e,C=s+w*r;u.x=-y*Math.cos(C),u.y=S,u.z=y*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(w+T,1-A),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let A=h[f][b+1],_=h[f][b],S=h[f+1][b],y=h[f+1][b+1];(f!==0||a>0)&&p.push(A,_,y),(f!==n-1||l<Math.PI)&&p.push(_,S,y)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(M,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ln=class i extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new D,p=new D,g=new D;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let b=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(b),p.y=(t+e*Math.cos(m))*Math.sin(b),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),u.push(f/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,b=(s+1)*(M-1)+m-1,A=(s+1)*(M-1)+m,_=(s+1)*M+m;l.push(f,b,_),l.push(b,A,_)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Su(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Su(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Md={clone:Ss,merge:pn},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fo=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ie=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var la=class extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=$o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oo=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function po(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function bp(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function bu(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function Ep(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}var Gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ls:r=t,o=2*e-n;break;case kr:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ls:a=t,l=2*n-e;break;case kr:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,f=-d*m+2*d*M-d*g,b=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,A=(-1-p)*m+(1.5+p)*M+.5*g,_=p*m-p*M;for(let S=0;S!==o;++S)r[S]=f*a[h+S]+b*a[c+S]+A*a[l+S]+_*a[u+S];return r}},ca=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ko=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ho=class extends Gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let d=o*2,p=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],f=p*d+g*2,b=u[f],A=u[f+1],_=t*d+g*2,S=h[_],y=h[_+1],T=wp(n,e,b,S,s);r[g]=Sd(T,M,A,y,m)}return r}};function Sd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Tp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function wp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Sd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Tp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bi(e,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bi(t.times,Array),values:Bi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),po(t.settings)&&(n.settings={inTangents:Bi(t.settings.inTangents,Array),outTangents:Bi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ho(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case bo:e=this.InterpolantFactoryMethodLinear;break;case uo:e=this.InterpolantFactoryMethodSmooth;break;case Cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return uo;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;po(this.settings)&&(Eu(this.settings.inTangents,t),Eu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Tf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let M=e[u+g];if(M!==e[d+g]||M!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,po(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=bo;var Ei=class extends En{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=zr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};ha.prototype.ValueTypeName="color";var lr=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};lr.prototype.ValueTypeName="number";var Go=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vi=class extends En{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends En{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=zr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends En{constructor(t,e,n,s){super(t,e,n,s)}};_s.prototype.ValueTypeName="vector";var xs=class{constructor(t="",e=-1,n=[],s=Bl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Rp(n[a]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=bp(l);l=bu(l,1,h),c=bu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new lr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function Ap(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lr;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return ha;case"quaternion":return Vi;case"bool":case"boolean":return Ei;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Rp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Ap(i.type);if(i.times===void 0){let n=[],s=[];Ep(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),po(i.settings)&&(e.settings={inTangents:Bi(i.settings.inTangents,Float32Array),outTangents:Bi(i.settings.outTangents,Float32Array)}),e}var Vo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new Vo,Wo=class{constructor(t){this.manager=t!==void 0?t:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ua=class extends cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ac=new ne,Tu=new D,wu=new D,da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ac,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},co=new D,ho=new fn,ii=new D,fa=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(co,ho,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(co,ho,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new D,Au=new rt,Ru=new rt,rn=class extends fa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Au,Ru),e.subVectors(Ru,Au)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Uc=class extends da{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Zn=class extends cr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Wi=class extends fa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fc=class extends da{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Fc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xs=-90,qs=1,Xo=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Xs,qs,t,e);s.layers=this.layers,this.add(s);let r=new rn(Xs,qs,t,e);r.layers=this.layers,this.add(r);let a=new rn(Xs,qs,t,e);a.layers=this.layers,this.add(a);let o=new rn(Xs,qs,t,e);o.layers=this.layers,this.add(o);let l=new rn(Xs,qs,t,e);l.layers=this.layers,this.add(l);let c=new rn(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qo=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Yo=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,s=this.valueSize,r=t*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,s,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,s);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){fn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){let a=this._workIndex*r;fn.multiplyQuaternionsFlat(t,a,t,e,t,n),fn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*s}}},oh="\\[\\]\\.:\\/",Cp=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",Ip="[^"+oh.replace("\\.","")+"]",Pp=/((?:WC+[\/:])*)/.source.replace("WC",lh),Lp=/(WCOD+)?/.source.replace("WCOD",Ip),Dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Up=new RegExp("^"+Pp+Lp+Dp+Np+"$"),Fp=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Up.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Oc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zo=class{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:os,endingEnd:os};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ju,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ed:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Bl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,s=this.time+t,r=this._loopCount,a=n===td;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===Ol){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){let o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){let s=this._interpolantSettings;n?(s.endingStart=ls,s.endingEnd=ls):(t?s.endingStart=this.zeroSlopeAtStart?ls:os:s.endingStart=kr,e?s.endingEnd=this.zeroSlopeAtEnd?ls:os:s.endingEnd=kr)}_scheduleFading(t,e,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},Op=new Float32Array(1),pa=class extends Wn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],p=d.name,g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}let M=e&&e._propertyBindings[u].binding.parsedPath;g=new Yo(Ce.create(n,p,M),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let s=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new ca(new Float32Array(2),new Float32Array(2),1,Op),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let s=e||this._root,r=s.uuid,a=typeof t=="string"?xs.findByName(s,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Bl),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Zo(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){let n=e||this._root,s=n.uuid,r=typeof t=="string"?xs.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(s,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Bc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function ch(i,t,e,n){let s=Bp(n);switch(e){case eh:return i*t;case il:return i*t/s.components*s.byteLength;case sl:return i*t/s.components*s.byteLength;case Ji:return i*t*2/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case nh:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case al:return i*t*4/s.components*s.byteLength;case va:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(t,8)/4;case ol:case cl:return Math.max(i,8)*Math.max(t,8)/2;case ul:case dl:case pl:case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fl:case ba:case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pl:case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ea:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bp(i){switch(i){case Tn:case Kc:return{byteLength:1,components:1};case dr:case Qc:case Qn:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case Kn:case tl:case Pn:return{byteLength:4,components:1};case jc:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],M=u[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let M=u[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,em=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hm=`#define PI 3.141592653589793
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
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
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
#endif`,zm=`uniform sampler2D dfgLUT;
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
}`,km=`
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Km=`#if defined( USE_POINTS_UV )
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
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Hp,alphahash_pars_fragment:Gp,alphamap_fragment:Vp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:$p,begin_vertex:Kp,beginnormal_vertex:Qp,bsdfs:jp,iridescence_fragment:tm,bumpmap_pars_fragment:em,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:dm,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:_m,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Mm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Dm,envmap_vertex:bm,fog_vertex:Em,fog_pars_vertex:Tm,fog_fragment:wm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Pm,lights_pars_begin:Lm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Um,lights_phong_fragment:Fm,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:zm,lights_fragment_begin:km,lights_fragment_maps:Hm,lights_fragment_end:Gm,lightprobes_pars_fragment:Vm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:Zm,map_pars_fragment:Jm,map_particle_fragment:$m,map_particle_pars_fragment:Km,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:jm,morphinstance_vertex:t0,morphcolor_vertex:e0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:a0,normal_pars_fragment:o0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:v0,dithering_pars_fragment:y0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:E0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:I0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:N0,transmission_fragment:U0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:k0,background_vert:H0,background_frag:G0,backgroundCube_vert:V0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:Z0,distance_vert:J0,distance_frag:$0,equirect_vert:K0,equirect_frag:Q0,linedashed_vert:j0,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:xg,sprite_vert:vg,sprite_frag:yg},gt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ui={basic:{uniforms:pn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:pn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:pn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:pn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:pn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:pn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:pn([gt.points,gt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:pn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:pn([gt.common,gt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:pn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:pn([gt.sprite,gt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:pn([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:pn([gt.lights,gt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ui.physical={uniforms:pn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Hl={r:0,b:0,g:0},Mg=new ne,qd=new $t;qd.set(-1,0,0,0,1,0,0,0,1);function Sg(i,t,e,n,s,r){let a=new Vt(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function p(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let _=b.backgroundBlurriness>0;A=t.get(A,_)}return A}function g(b){let A=!1,_=p(b);_===null?m(a,o):_&&_.isColor&&(m(_,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,A){let _=p(A);_&&(_.isCubeTexture||_.mapping===_a)?(c===void 0&&(c=new kt(new ve(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ss(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qd),c.material.toneMapped=le.getTransfer(_.colorSpace)!==xe,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new kt(new Mn(2,2),new In({name:"BackgroundMaterial",uniforms:Ss(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=le.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(Hl,ah(i)),e.buffers.color.setClear(Hl.r,Hl.g,Hl.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:M,dispose:f}}function bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,F,z,L,O){let G=!1,V=u(I,L,z,F);r!==V&&(r=V,c(r.object)),G=p(I,L,z,O),G&&g(I,L,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(I,F,z,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,F,z,L){let O=L.wireframe===!0,G=n[F.id];G===void 0&&(G={},n[F.id]=G);let V=I.isInstancedMesh===!0?I.id:0,Q=G[V];Q===void 0&&(Q={},G[V]=Q);let q=Q[z.id];q===void 0&&(q={},Q[z.id]=q);let j=q[O];return j===void 0&&(j=d(l()),q[O]=j),j}function d(I){let F=[],z=[],L=[];for(let O=0;O<e;O++)F[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,F,z,L){let O=r.attributes,G=F.attributes,V=0,Q=z.getAttributes();for(let q in Q)if(Q[q].location>=0){let nt=O[q],Lt=G[q];if(Lt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Lt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Lt=I.instanceColor)),nt===void 0||nt.attribute!==Lt||Lt&&nt.data!==Lt.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function g(I,F,z,L){let O={},G=F.attributes,V=0,Q=z.getAttributes();for(let q in Q)if(Q[q].location>=0){let nt=G[q];nt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));let Lt={};Lt.attribute=nt,nt&&nt.data&&(Lt.data=nt.data),O[q]=Lt,V++}r.attributes=O,r.attributesNum=V,r.index=L}function M(){let I=r.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function m(I){f(I,0)}function f(I,F){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),O[I]!==F&&(i.vertexAttribDivisor(I,F),O[I]=F)}function b(){let I=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==I[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function A(I,F,z,L,O,G,V){V===!0?i.vertexAttribIPointer(I,F,z,O,G):i.vertexAttribPointer(I,F,z,L,O,G)}function _(I,F,z,L){M();let O=L.attributes,G=z.getAttributes(),V=F.defaultAttributeValues;for(let Q in G){let q=G[Q];if(q.location>=0){let j=O[Q];if(j===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let nt=j.normalized,Lt=j.itemSize,At=t.get(j);if(At===void 0)continue;let pe=At.buffer,se=At.type,ue=At.bytesPerElement,J=se===i.INT||se===i.UNSIGNED_INT||j.gpuType===tl;if(j.isInterleavedBufferAttribute){let tt=j.data,_t=tt.stride,Yt=j.offset;if(tt.isInstancedInterleavedBuffer){for(let bt=0;bt<q.locationSize;bt++)f(q.location+bt,tt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let bt=0;bt<q.locationSize;bt++)m(q.location+bt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let bt=0;bt<q.locationSize;bt++)A(q.location+bt,Lt/q.locationSize,se,nt,_t*ue,(Yt+Lt/q.locationSize*bt)*ue,J)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)f(q.location+tt,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let tt=0;tt<q.locationSize;tt++)A(q.location+tt,Lt/q.locationSize,se,nt,Lt*ue,Lt/q.locationSize*tt*ue,J)}}else if(V!==void 0){let nt=V[Q];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(q.location,nt);break;case 3:i.vertexAttrib3fv(q.location,nt);break;case 4:i.vertexAttrib4fv(q.location,nt);break;default:i.vertexAttrib1fv(q.location,nt)}}}}b()}function S(){w();for(let I in n){let F=n[I];for(let z in F){let L=F[z];for(let O in L){let G=L[O];for(let V in G)h(G[V].object),delete G[V];delete L[O]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let z in F){let L=F[z];for(let O in L){let G=L[O];for(let V in G)h(G[V].object),delete G[V];delete L[O]}}delete n[I.id]}function T(I){for(let F in n){let z=n[F];for(let L in z){let O=z[L];if(O[I.id]===void 0)continue;let G=O[I.id];for(let V in G)h(G[V].object),delete G[V];delete O[I.id]}}}function x(I){for(let F in n){let z=n[F],L=I.isInstancedMesh===!0?I.id:0,O=z[L];if(O!==void 0){for(let G in O){let V=O[G];for(let Q in V)h(V[Q].object),delete V[Q];delete O[G]}delete z[L],Object.keys(z).length===0&&delete n[F]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Tn&&T!==Pn&&!x&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:_,maxSamples:S,samples:y}}function wg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,A=b*4,_=f.clippingState||null;l.value=_,_=h(g,d,A,p);for(let S=0;S!==A;++S)_[S]=e[S];f.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let f=p+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,_=p;A!==M;++A,_+=4)a.copy(u[A]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var mr=4,Ag=6,Rg=20,Cg=256,wa=new Wi,Ed=new Vt,hh=null,uh=0,dh=0,fh=!1,Ig=new D,bs=new D,Es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ig}=r;hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,uh,dh),this._renderer.xr.enabled=fh,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Qn,format:Ln,colorSpace:Hr,depthBuffer:!1},s=Td(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Dg(r,t,e),this._ggxMaterial=Lg(r,t,e)}return s}_compileMaterial(t){let e=new kt(new De,t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,s,r){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ed),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new ve,new Ve({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(Ed),f=!0);for(let A=0;A<6;A++){let _=A%3;_===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):_===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let S=this._cubeSize;pr(s,_*S,A>2?S:0,S,S),u.setRenderTarget(s),f&&u.render(M,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,wa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,p=u*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-mr?n-g+mr:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,pr(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,pr(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,wa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-mr?s-this._lodMax+mr:0),d=4*(this._cubeSize-h);pr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,wa)}};function Pg(i){let t=[],e=[],n=i,s=i-mr+1+Ag;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,g=new Float32Array(p*d*u),M=new Float32Array(p*d*u);for(let f=0;f<u;f++){let b=f%3*2/3-1,A=f>2?0:-1,_=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];g.set(_,p*d*f);for(let S=0;S<d;S++){let y=h[S*2]*2-1,T=h[S*2+1]*2-1;f===0?bs.set(1,T,y):f===1?bs.set(-y,1,-T):f===2?bs.set(-y,T,1):f===3?bs.set(-1,T,-y):f===4?bs.set(-y,-1,T):bs.set(y,T,-1),bs.toArray(M,(f*d+S)*p)}}let m=new De;m.setAttribute("position",new qe(g,p)),m.setAttribute("outputDirection",new qe(M,p)),e.push(new kt(m,null)),n>mr&&n--}return{lodMeshes:e,sizeLods:t}}function Td(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lg(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Dg(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wd(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ad(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vl=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ve(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:ci});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===Yi&&(e.minFilter=an),new Xo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Ng(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Ko||p===Qo)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new Vl(g.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,g=p===Ko||p===Qo,M=p===qi||p===Ms;if(g||M){let m=e.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Es(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return g&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Es(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===Ko?d.mapping=qi:p===Qo&&(d.mapping=Ms),d}function l(d){let p=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ug(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function Fg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,M=0;if(g===void 0)return;if(p!==null){let b=p.array;M=p.version;for(let A=0,_=b.length;A<_;A+=3){let S=b[A+0],y=b[A+1],T=b[A+2];d.push(S,y,y,T,T,S)}}else{let b=g.array;M=g.version;for(let A=0,_=b.length/3-1;A<_;A+=3){let S=A+0,y=A+1,T=A+2;d.push(S,y,y,T,T,S)}}let m=new(g.count>=65535?Yr:us)(d,1);m.version=M;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Og(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let M=0;for(let m=0;m<p;m++)M+=d[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zg(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let _=o.attributes.position.count*A,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let y=new Float32Array(_*S*4*u),T=new Xr(y,_,S,u);T.type=Pn,T.needsUpdate=!0;let x=A*4;for(let C=0;C<u;C++){let I=m[C],F=f[C],z=b[C],L=_*S*4*C;for(let O=0;O<I.count;O++){let G=O*x;p===!0&&(s.fromBufferAttribute(I,O),y[L+G+0]=s.x,y[L+G+1]=s.y,y[L+G+2]=s.z,y[L+G+3]=0),g===!0&&(s.fromBufferAttribute(F,O),y[L+G+4]=s.x,y[L+G+5]=s.y,y[L+G+6]=s.z,y[L+G+7]=0),M===!0&&(s.fromBufferAttribute(z,O),y[L+G+8]=s.x,y[L+G+9]=s.y,y[L+G+10]=s.z,y[L+G+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new rt(_,S)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function kg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Hg={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function Gg(i,t,e,n,s,r){let a=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new De;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new kt(c,h),d=new Wi(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,b=[],A=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let y=0;y<b.length;y++){let T=b[y];T.setSize&&T.setSize(_,S)}},this.setEffects=function(_){b=_,A=b.length>0&&b[0].isRenderPass===!0;let S=a.width,y=a.height;b.length>0&&o===null&&(o=new bn(S,y,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,y,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let x=b[T];x.setSize&&x.setSize(S,y)}},this.begin=function(_,S){if(M||_.toneMapping===$n&&b.length===0)return!1;if(f=S,S!==null){let y=S.width,T=S.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return A===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=$n,!0},this.hasRenderPass=function(){return A},this.end=function(_,S){_.toneMapping=m,M=!0;let y=a,T=o;for(let x=0;x<b.length;x++){let w=b[x];w.enabled!==!1&&(w.render(_,T,y,S),w.needsSwap!==!1&&(y=T,T=T===o?l:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,h.defines={},le.getTransfer(p)===xe&&(h.defines.SRGB_TRANSFER="");let x=Hg[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(f),_.render(u,d),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yd=new yn,gh=new Hi(1,1),Zd=new Xr,Jd=new Ao,$d=new Kr,Rd=[],Cd=[],Id=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xl(i,t){let e=Cd[t];e===void 0&&(e=new Int32Array(t),Cd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function Yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),Ze(e,n)}}function Zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Pd.set(n),i.uniformMatrix3fv(this.addr,!1,Pd),Ze(e,n)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),Ze(e,n)}}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function t_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function s_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gh.compareFunction=e.isReversedDepthBuffer()?kl:zl,r=gh):r=Yd,e.setTexture2D(t||r,s)}function r_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jd,s)}function a_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$d,s)}function o_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zd,s)}function l_(i){switch(i){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return Qg;case 35669:case 35673:return jg;case 5125:return t_;case 36294:return e_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(i,t){i.uniform1fv(this.addr,t)}function h_(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function u_(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function d_(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function f_(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p_(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m_(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g_(i,t){i.uniform1iv(this.addr,t)}function __(i,t){i.uniform2iv(this.addr,t)}function x_(i,t){i.uniform3iv(this.addr,t)}function v_(i,t){i.uniform4iv(this.addr,t)}function y_(i,t){i.uniform1uiv(this.addr,t)}function M_(i,t){i.uniform2uiv(this.addr,t)}function S_(i,t){i.uniform3uiv(this.addr,t)}function b_(i,t){i.uniform4uiv(this.addr,t)}function E_(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=gh:a=Yd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function T_(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jd,r[a])}function w_(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$d,r[a])}function A_(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zd,r[a])}function R_(i){switch(i){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return M_;case 36295:return S_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}var _h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l_(e.type)}},xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R_(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Dd(i,t){i.seq.push(t),i.map[t.id]=t}function C_(i,t,e){let n=i.name,s=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),a=ph.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dd(e,c===void 0?new _h(o,i,t):new xh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new vh(o),Dd(e,u)),e=u}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);C_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var I_=37297,P_=0;function L_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ud=new $t;function D_(i){le._getMatrix(Ud,le.workingColorSpace,i);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Gr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+L_(i.getShaderSource(t),o)}else return r}function N_(i,t){let e=D_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var U_={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[ga]:"ACESFilmic",[Zc]:"AgX",[Jc]:"Neutral",[Yc]:"Custom"};function F_(i,t){let e=U_[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gl=new D;function O_(){le.getLuminanceCoefficients(Gl);let i=Gl.x.toFixed(4),t=Gl.y.toFixed(4),e=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function z_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function k_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ra(i){return i!==""}function Od(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(i){return i.replace(H_,V_)}var G_=new Map;function V_(i,t){let e=te[t];if(e===void 0){let n=G_.get(t);if(n!==void 0)e=te[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yh(e)}var W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(i){return i.replace(W_,X_)}function X_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var q_={[ma]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function Y_(i){return q_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Z_={[qi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[_a]:"ENVMAP_TYPE_CUBE_UV"};function J_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Z_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $_={[Ms]:"ENVMAP_MODE_REFRACTION"};function K_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Q_={[$o]:"ENVMAP_BLENDING_MULTIPLY",[Ju]:"ENVMAP_BLENDING_MIX",[$u]:"ENVMAP_BLENDING_ADD"};function j_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Q_[i.combine]||"ENVMAP_BLENDING_NONE"}function tx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ex(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Y_(e),c=J_(e),h=K_(e),u=j_(e),d=tx(e),p=B_(e),g=z_(r),M=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ra).join(`
`),f.length>0&&(f+=`
`)):(m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),f=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?te.tonemapping_pars_fragment:"",e.toneMapping!==$n?F_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,N_("linearToOutputTexel",e.outputColorSpace),O_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ra).join(`
`)),a=yh(a),a=Od(a,e),a=Bd(a,e),o=yh(o),o=Od(o,e),o=Bd(o,e),a=zd(a),o=zd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=b+m+a,_=b+f+o,S=Nd(s,s.VERTEX_SHADER,A),y=Nd(s,s.FRAGMENT_SHADER,_);s.attachShader(M,S),s.attachShader(M,y),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(y)||"",O=F.trim(),G=z.trim(),V=L.trim(),Q=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,y);else{let j=Fd(s,S,"vertex"),nt=Fd(s,y,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+j+`
`+nt)}else O!==""?Gt("WebGLProgram: Program Info Log:",O):(G===""||V==="")&&(q=!1);q&&(I.diagnostics={runnable:Q,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(S),s.deleteShader(y),x=new gr(s,M),w=k_(s,M)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,I_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=y,this}var nx=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sh(t),e.set(t,n)),n}},Sh=class{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}};function ix(i){return i===Ji||i===ba||i===Ea}function sx(i,t,e,n,s,r){let a=new qr,o=new Mh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,C,I,F,z){let L=I.fog,O=F.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=t.get(x.envMap||G,V),q=Q&&Q.mapping===_a?Q.image.height:null,j=p[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Lt=nt!==void 0?nt.length:0,At=0;O.morphAttributes.position!==void 0&&(At=1),O.morphAttributes.normal!==void 0&&(At=2),O.morphAttributes.color!==void 0&&(At=3);let pe,se,ue,J;if(j){let Ae=ui[j];pe=Ae.vertexShader,se=Ae.fragmentShader}else{pe=x.vertexShader,se=x.fragmentShader;let Ae=o.getVertexShaderStage(x),ge=o.getFragmentShaderStage(x);o.update(x,Ae,ge),ue=Ae.id,J=ge.id}let tt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Yt=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,Zt=!!x.map,ye=!!x.matcap,et=!!Q,st=!!x.aoMap,at=!!x.lightMap,ot=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,Wt=!!x.displacementMap,zt=!!x.emissiveMap,Jt=!!x.metalnessMap,Kt=!!x.roughnessMap,P=x.anisotropy>0,me=x.clearcoat>0,re=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,B=x.sheen>0,W=x.transmission>0,Y=P&&!!x.anisotropyMap,lt=me&&!!x.clearcoatMap,ct=me&&!!x.clearcoatNormalMap,Z=me&&!!x.clearcoatRoughnessMap,K=v&&!!x.iridescenceMap,ut=v&&!!x.iridescenceThicknessMap,Ut=B&&!!x.sheenColorMap,mt=B&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Ft=!!x.specularColorMap,Xt=!!x.specularIntensityMap,Qt=W&&!!x.transmissionMap,U=W&&!!x.thicknessMap,ft=!!x.gradientMap,$=!!x.alphaMap,pt=x.alphaTest>0,Mt=!!x.alphaHash,it=!!x.extensions,Bt=$n;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let It={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:se,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&F.instanceColor!==null,instancingMorph:Yt&&F.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Zt,matcap:ye,envMap:et,envMapMode:et&&Q.mapping,envMapCubeUVHeight:q,aoMap:st,lightMap:at,bumpMap:ot,normalMap:ht,displacementMap:Wt,emissiveMap:zt,normalMapObjectSpace:ht&&x.normalMapType===id,normalMapTangentSpace:ht&&x.normalMapType===Ta,packedNormalMap:ht&&x.normalMapType===Ta&&ix(x.normalMap.format),metalnessMap:Jt,roughnessMap:Kt,anisotropy:P,anisotropyMap:Y,clearcoat:me,clearcoatMap:lt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Z,dispersion:re,retroreflection:R,iridescence:v,iridescenceMap:K,iridescenceThicknessMap:ut,sheen:B,sheenColorMap:Ut,sheenRoughnessMap:mt,specularMap:dt,specularColorMap:Ft,specularIntensityMap:Xt,transmission:W,transmissionMap:Qt,thicknessMap:U,gradientMap:ft,opaque:x.transparent===!1&&x.blending===ur&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:pt,alphaHash:Mt,combine:x.combine,mapUv:Zt&&g(x.map.channel),aoMapUv:st&&g(x.aoMap.channel),lightMapUv:at&&g(x.lightMap.channel),bumpMapUv:ot&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:Wt&&g(x.displacementMap.channel),emissiveMapUv:zt&&g(x.emissiveMap.channel),metalnessMapUv:Jt&&g(x.metalnessMap.channel),roughnessMapUv:Kt&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:lt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(x.sheenRoughnessMap.channel),specularMapUv:dt&&g(x.specularMap.channel),specularColorMapUv:Ft&&g(x.specularColorMap.channel),specularIntensityMapUv:Xt&&g(x.specularIntensityMap.channel),transmissionMapUv:Qt&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:$&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ht||P),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Zt||$),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:At,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Zt&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(f(w,x),b(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let w=p[x.type],C;if(w){let I=ui[w];C=Md.clone(I.uniforms)}else C=x.uniforms;return C}function _(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new ex(i,w,x,s),c.push(C),h.set(w,C)),C}function S(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function T(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:_,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:T}}function rx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ax(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,M,m,f){let b=i[t];return b===void 0?(b={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:f},i[t]=b):(b.id=d.id,b.object=d,b.geometry=p,b.material=g,b.materialVariant=a(d),b.groupOrder=M,b.renderOrder=d.renderOrder,b.z=m,b.group=f),t++,b}function l(d,p,g,M,m,f,b){b.reversedDepth===!0&&(m=-m);let A=o(d,p,g,M,m,f);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(d,p,g,M,m,f){let b=o(d,p,g,M,m,f);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,p){e.length>1&&e.sort(d||ax),n.length>1&&n.sort(p||Hd),s.length>1&&s.sort(p||Hd)}function u(){for(let d=t,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function ox(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Gd,i.set(n,[a])):s>=r.length?(a=new Gd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Vt};break;case"SpotLight":e={position:new D,direction:new D,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function cx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hx=0;function ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dx(i){let t=new lx,e=cx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,b=0,A=0,_=0,S=0,y=0,T=0,x=0,w=0,C=0;c.sort(ux);for(let F=0,z=c.length;F<z;F++){let L=c[F],O=L.color,G=L.intensity,V=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ji?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*G,u+=O.g*G,d+=O.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],G);C++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=Q;let Lt=j.getViewportCount();for(let At=0;At<Lt;At++)n.sunShadowMatrix[M+At]=j.getMatrix(At),n.sunShadowCascade[M+At]=j._cascadeData[At];M+=Lt,g++}n.sun[p]=q,p++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(G),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[b]=q;let j=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,j.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[b]=j.matrix,L.castShadow){let nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[b]=nt,n.spotShadowMap[b]=Q,T++}b++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(O).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=q,A++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let j=L.shadow,nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[f]=nt,n.pointShadowMap[f]=Q,n.pointShadowMatrix[f]=L.shadow.matrix,y++}n.point[f]=q,f++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[_]=q,_++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==b||I.rectAreaLength!==A||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==T||I.numSpotMaps!==x||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=A,n.point.length=f,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=b,I.rectAreaLength=A,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=T,I.numSpotMaps=x,I.numLightProbes=C,n.version=hx++)}function l(c,h){let u=0,d=0,p=0,g=0,M=0,m=0,f=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let _=c[b];if(_.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(f),u++}else if(_.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),d++}else if(_.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(_.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(_.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Vd(i){let t=new dx(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vd(i),t.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`,gx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],_x=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Wd=new ne,Aa=new D,mh=new D;function xx(i,t,e){let n=new ir,s=new rt,r=new rt,a=new Me,o=new Oo,l=new Bo,c={},h=e.maxTextureSize,u={[Xi]:cn,[cn]:Xi,[Sn]:Sn},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:px,fragmentShader:mx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let f=this.type;this.render=function(y,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Jo&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ma);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ci),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=f!==this.type;z&&T.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=y.length;L<O;L++){let G=y[L],V=G.shadow;if(V===void 0){Gt("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===hr){if(G.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new bn(s.x,s.y,{format:Ji,type:Qn,minFilter:an,magFilter:an,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new Hi(s.x,s.y,Pn),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=oi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=je,V.map.depthTexture.magFilter=je}else G.isPointLight?(V.map=new Vl(s.x),V.map.depthTexture=new Co(s.x,Kn)):(V.map=new bn(s.x,s.y),V.map.depthTexture=new Hi(s.x,s.y,Kn)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=oi,this.type===ma?(V.map.depthTexture.compareFunction=q?kl:zl,V.map.depthTexture.minFilter=an,V.map.depthTexture.magFilter=an):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=je,V.map.depthTexture.magFilter=je);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,x);for(let nt=0;nt<j;nt++){let Lt=V.getCamera(nt);if(G.isPointLight){let At=V.camera,pe=V.matrix,se=G.distance||At.far;se!==At.far&&(At.far=se,At.updateProjectionMatrix()),Aa.setFromMatrixPosition(G.matrixWorld),At.position.copy(Aa),mh.copy(At.position),mh.add(gx[nt]),At.up.copy(_x[nt]),At.lookAt(mh),At.updateMatrixWorld(),pe.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Wd.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Wd,At.coordinateSystem,At.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(V.map),i.clear());let At=V.getViewport(nt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(a)}n=V.getFrustum(nt),_(T,x,Lt,G,this.type)}V.isPointLightShadow!==!0&&this.type===hr&&b(V,x),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,I)};function b(y,T){let x=t.update(M);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new bn(s.x,s.y,{format:Ji,type:Qn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,x,d,M,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,x,p,M,null)}function A(y,T,x,w){let C=null,I=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=C.uuid,z=T.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let O=L[z];O===void 0&&(O=C.clone(),L[z]=O,T.addEventListener("dispose",S)),C=O}if(C.visible=T.visible,C.wireframe=T.wireframe,w===hr?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=x}return C}function _(y,T,x,w,C){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===hr)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);let z=t.update(y),L=y.material;if(Array.isArray(L)){let O=z.groups;for(let G=0,V=O.length;G<V;G++){let Q=O[G],q=L[Q.materialIndex];if(q&&q.visible){let j=A(y,q,w,C);y.onBeforeShadow(i,y,T,x,z,j,Q),i.renderBufferDirect(x,null,z,j,y,Q),y.onAfterShadow(i,y,T,x,z,j,Q)}}}else if(L.visible){let O=A(y,L,w,C);y.onBeforeShadow(i,y,T,x,z,O,null),i.renderBufferDirect(x,null,z,O,y,null),y.onAfterShadow(i,y,T,x,z,O,null)}}let F=y.children;for(let z=0,L=F.length;z<L;z++)_(F[z],T,x,w,C)}function S(y){y.target.removeEventListener("dispose",S);for(let x in c){let w=c[x],C=y.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function vx(i,t){function e(){let U=!1,ft=new Me,$=null,pt=new Me(0,0,0,0);return{setMask:function(Mt){$!==Mt&&!U&&(i.colorMask(Mt,Mt,Mt,Mt),$=Mt)},setLocked:function(Mt){U=Mt},setClear:function(Mt,it,Bt,It,Ae){Ae===!0&&(Mt*=It,it*=It,Bt*=It),ft.set(Mt,it,Bt,It),pt.equals(ft)===!1&&(i.clearColor(Mt,it,Bt,It),pt.copy(ft))},reset:function(){U=!1,$=null,pt.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,$=null,pt=null,Mt=null;return{setReversed:function(it){if(ft!==it){let Bt=t.get("EXT_clip_control");it?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),ft=it;let It=Mt;Mt=null,this.setClear(It)}},getReversed:function(){return ft},setTest:function(it){it?tt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(it){$!==it&&!U&&(i.depthMask(it),$=it)},setFunc:function(it){if(ft&&(it=pd[it]),pt!==it){switch(it){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=it}},setLocked:function(it){U=it},setClear:function(it){Mt!==it&&(Mt=it,ft&&(it=1-it),i.clearDepth(it))},reset:function(){U=!1,$=null,pt=null,Mt=null,ft=!1}}}function s(){let U=!1,ft=null,$=null,pt=null,Mt=null,it=null,Bt=null,It=null,Ae=null;return{setTest:function(ge){U||(ge?tt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ge){ft!==ge&&!U&&(i.stencilMask(ge),ft=ge)},setFunc:function(ge,On,ei){($!==ge||pt!==On||Mt!==ei)&&(i.stencilFunc(ge,On,ei),$=ge,pt=On,Mt=ei)},setOp:function(ge,On,ei){(it!==ge||Bt!==On||It!==ei)&&(i.stencilOp(ge,On,ei),it=ge,Bt=On,It=ei)},setLocked:function(ge){U=ge},setClear:function(ge){Ae!==ge&&(i.clearStencil(ge),Ae=ge)},reset:function(){U=!1,ft=null,$=null,pt=null,Mt=null,it=null,Bt=null,It=null,Ae=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,A=null,_=null,S=null,y=null,T=null,x=new Vt(0,0,0),w=0,C=!1,I=null,F=null,z=null,L=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=Q>=2);let j=null,nt={},Lt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),pe=new Me().fromArray(Lt),se=new Me().fromArray(At);function ue(U,ft,$,pt){let Mt=new Uint8Array(4),it=i.createTexture();i.bindTexture(U,it),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<$;Bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(ft+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return it}let J={};J[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Zs),ot(!1),ht(zc),tt(i.CULL_FACE),st(ci);function tt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function _t(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Yt(U,ft){return d[U]!==ft?(i.bindFramebuffer(U,ft),d[U]=ft,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function bt(U,ft){let $=g,pt=!1;if(U){$=p.get(ft),$===void 0&&($=[],p.set(ft,$));let Mt=U.textures;if($.length!==Mt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Bt=Mt.length;it<Bt;it++)$[it]=i.COLOR_ATTACHMENT0+it;$.length=Mt.length,pt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pt=!0);pt&&i.drawBuffers($)}function Zt(U){return M!==U?(i.useProgram(U),M=U,!0):!1}let ye={[ys]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};ye[Nu]=i.MIN,ye[Uu]=i.MAX;let et={[Fu]:i.ZERO,[Ou]:i.ONE,[Bu]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function st(U,ft,$,pt,Mt,it,Bt,It,Ae,ge){if(U===ci){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),U!==Pu){if(U!==f||ge!==C){if((b!==ys||S!==ys)&&(i.blendEquation(i.FUNC_ADD),b=ys,S=ys),ge)switch(U){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",U);break}else switch(U){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",U);break}A=null,_=null,y=null,T=null,x.set(0,0,0),w=0,f=U,C=ge}return}Mt=Mt||ft,it=it||$,Bt=Bt||pt,(ft!==b||Mt!==S)&&(i.blendEquationSeparate(ye[ft],ye[Mt]),b=ft,S=Mt),($!==A||pt!==_||it!==y||Bt!==T)&&(i.blendFuncSeparate(et[$],et[pt],et[it],et[Bt]),A=$,_=pt,y=it,T=Bt),(It.equals(x)===!1||Ae!==w)&&(i.blendColor(It.r,It.g,It.b,Ae),x.copy(It),w=Ae),f=U,C=!1}function at(U,ft){U.side===Sn?_t(i.CULL_FACE):tt(i.CULL_FACE);let $=U.side===cn;ft&&($=!$),ot($),U.blending===ur&&U.transparent===!1?st(ci):st(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let pt=U.stencilWrite;o.setTest(pt),pt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),zt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function ht(U){U!==Cu?(tt(i.CULL_FACE),U!==F&&(U===zc?i.cullFace(i.BACK):U===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),F=U}function Wt(U){U!==z&&(V&&i.lineWidth(U),z=U)}function zt(U,ft,$){U?(tt(i.POLYGON_OFFSET_FILL),(L!==ft||O!==$)&&(L=ft,O=$,a.getReversed()&&(ft=-ft),i.polygonOffset(ft,$))):_t(i.POLYGON_OFFSET_FILL)}function Jt(U){U?tt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Kt(U){U===void 0&&(U=i.TEXTURE0+G-1),j!==U&&(i.activeTexture(U),j=U)}function P(U,ft,$){$===void 0&&(j===null?$=i.TEXTURE0+G-1:$=j);let pt=nt[$];pt===void 0&&(pt={type:void 0,texture:void 0},nt[$]=pt),(pt.type!==U||pt.texture!==ft)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(U,ft||J[U]),pt.type=U,pt.texture=ft)}function me(){let U=nt[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function v(){try{i.texSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function lt(){try{i.texStorage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function ct(){try{i.texStorage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Z(){try{i.texImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function K(){try{i.texImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function ut(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function Ut(U,ft){u[U]!==ft&&(i.pixelStorei(U,ft),u[U]=ft)}function mt(U){pe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function dt(U){se.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function Ft(U,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let pt=$.get(U);pt===void 0&&(pt=i.getUniformBlockIndex(ft,U.name),$.set(U,pt))}function Xt(U,ft){let pt=c.get(ft).get(U);l.get(ft)!==pt&&(i.uniformBlockBinding(ft,pt,U.__bindingPointIndex),l.set(ft,pt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,nt={},d={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,A=null,_=null,S=null,y=null,T=null,x=new Vt(0,0,0),w=0,C=!1,I=null,F=null,z=null,L=null,O=null,pe.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:Yt,drawBuffers:bt,useProgram:Zt,setBlending:st,setMaterial:at,setFlipSided:ot,setCullFace:ht,setLineWidth:Wt,setPolygonOffset:zt,setScissorTest:Jt,activeTexture:Kt,bindTexture:P,unbindTexture:me,compressedTexImage2D:re,compressedTexImage3D:R,texImage2D:Z,texImage3D:K,pixelStorei:Ut,getParameter:ut,updateUBOMapping:Ft,uniformBlockBinding:Xt,texStorage2D:lt,texStorage3D:ct,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:mt,viewport:dt,reset:Qt}}function yx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,v){return g?new OffscreenCanvas(R,v):Vr("canvas")}function m(R,v,B){let W=1,Y=re(R);if((Y.width>B||Y.height>B)&&(W=B/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let lt=Math.floor(W*Y.width),ct=Math.floor(W*Y.height);d===void 0&&(d=M(lt,ct));let Z=v?M(lt,ct):d;return Z.width=lt,Z.height=ct,Z.getContext("2d").drawImage(R,0,0,lt,ct),Gt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+lt+"x"+ct+")."),Z}else return"data"in R&&Gt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function f(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,v,B,W,Y,lt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct;W&&(ct=t.get("EXT_texture_norm16"),ct||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&ct&&(Z=ct.R16_EXT),B===i.SHORT&&ct&&(Z=ct.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),v===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&ct&&(Z=ct.RG16_EXT),B===i.SHORT&&ct&&(Z=ct.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ct&&(Z=ct.RGB16_EXT),B===i.SHORT&&ct&&(Z=ct.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let K=lt?Gr:le.getTransfer(Y);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=K===xe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ct&&(Z=ct.RGBA16_EXT),B===i.SHORT&&ct&&(Z=ct.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(R,v){let B;return R?v===null||v===Kn||v===fr?B=i.DEPTH24_STENCIL8:v===Pn?B=i.DEPTH32F_STENCIL8:v===dr&&(B=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===fr?B=i.DEPTH_COMPONENT24:v===Pn?B=i.DEPTH_COMPONENT32F:v===dr&&(B=i.DEPTH_COMPONENT16),B}function y(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==je&&R.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){let v=R.target;v.removeEventListener("dispose",T),w(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function x(R){let v=R.target;v.removeEventListener("dispose",x),I(v)}function w(R){let v=n.get(R);if(v.__webglInit===void 0)return;let B=R.source,W=p.get(B);if(W){let Y=W[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(R),Object.keys(W).length===0&&p.delete(B)}n.remove(R)}function C(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let B=R.source,W=p.get(B);delete W[v.__cacheKey],a.memory.textures--}function I(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Y=0;Y<v.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=R.textures;for(let W=0,Y=B.length;W<Y;W++){let lt=n.get(B[W]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(R)}let F=0;function z(){F=0}function L(){return F}function O(R){F=R}function G(){let R=F;return R>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function V(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Q(R,v){let B=n.get(R);if(R.isVideoTexture&&P(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let W=R.image;if(W===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(B,R,v);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function q(R,v){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){_t(B,R,v);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function j(R,v){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){_t(B,R,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function nt(R,v){let B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Yt(B,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Lt={[ai]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},At={[je]:i.NEAREST,[Qu]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},pe={[rd]:i.NEVER,[hd]:i.ALWAYS,[ad]:i.LESS,[zl]:i.LEQUAL,[od]:i.EQUAL,[kl]:i.GEQUAL,[ld]:i.GREATER,[cd]:i.NOTEQUAL};function se(R,v){if(v.type===Pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===jo||v.magFilter===xa||v.magFilter===Yi||v.minFilter===an||v.minFilter===jo||v.minFilter===xa||v.minFilter===Yi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Lt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Lt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Lt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,At[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==xa&&v.minFilter!==Yi||v.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ue(R,v){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));let W=v.source,Y=p.get(W);Y===void 0&&(Y={},p.set(W,Y));let lt=V(v);if(lt!==R.__cacheKey){Y[lt]===void 0&&(Y[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[lt].usedTimes++;let ct=Y[R.__cacheKey];ct!==void 0&&(Y[R.__cacheKey].usedTimes--,ct.usedTimes===0&&C(v)),R.__cacheKey=lt,R.__webglTexture=Y[lt].texture}return B}function J(R,v,B){return Math.floor(Math.floor(R/B)/v)}function tt(R,v,B,W){let lt=R.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,W,v.data);else{lt.sort((Ut,mt)=>Ut.start-mt.start);let ct=0;for(let Ut=1;Ut<lt.length;Ut++){let mt=lt[ct],dt=lt[Ut],Ft=mt.start+mt.count,Xt=J(dt.start,v.width,4),Qt=J(mt.start,v.width,4);dt.start<=Ft+1&&Xt===Qt&&J(dt.start+dt.count-1,v.width,4)===Xt?mt.count=Math.max(mt.count,dt.start+dt.count-mt.start):(++ct,lt[ct]=dt)}lt.length=ct+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ut=0,mt=lt.length;Ut<mt;Ut++){let dt=lt[Ut],Ft=Math.floor(dt.start/4),Xt=Math.ceil(dt.count/4),Qt=Ft%v.width,U=Math.floor(Ft/v.width),ft=Xt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Qt,U,ft,$,B,W,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function _t(R,v,B){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let Y=ue(R,v),lt=v.source;e.bindTexture(W,R.__webglTexture,i.TEXTURE0+B);let ct=n.get(lt);if(lt.version!==ct.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let $=le.getPrimaries(le.workingColorSpace),pt=v.colorSpace===wi?null:le.getPrimaries(v.colorSpace),Mt=v.colorSpace===wi||$===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=m(v.image,!1,s.maxTextureSize);K=me(v,K);let ut=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type),mt=_(v.internalFormat,ut,Ut,v.normalized,v.colorSpace,v.isVideoTexture);se(W,v);let dt,Ft=v.mipmaps,Xt=v.isVideoTexture!==!0,Qt=ct.__version===void 0||Y===!0,U=lt.dataReady,ft=y(v,K);if(v.isDepthTexture)mt=S(v.format===Zi,v.type),Qt&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,mt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,mt,K.width,K.height,0,ut,Ut,null));else if(v.isDataTexture)if(Ft.length>0){Xt&&Qt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,Ft[0].width,Ft[0].height);for(let $=0,pt=Ft.length;$<pt;$++)dt=Ft[$],Xt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,Ut,dt.data):e.texImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,ut,Ut,dt.data);v.generateMipmaps=!1}else Xt?(Qt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,K.width,K.height),U&&tt(v,K,ut,Ut)):e.texImage2D(i.TEXTURE_2D,0,mt,K.width,K.height,0,ut,Ut,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,mt,Ft[0].width,Ft[0].height,K.depth);for(let $=0,pt=Ft.length;$<pt;$++)if(dt=Ft[$],v.format!==Ln)if(ut!==null)if(Xt){if(U)if(v.layerUpdates.size>0){let Mt=ch(dt.width,dt.height,v.format,v.type);for(let it of v.layerUpdates){let Bt=dt.data.subarray(it*Mt/dt.data.BYTES_PER_ELEMENT,(it+1)*Mt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,it,dt.width,dt.height,1,ut,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,K.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,mt,dt.width,dt.height,K.depth,0,dt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,K.depth,ut,Ut,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,mt,dt.width,dt.height,K.depth,0,ut,Ut,dt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Xt&&Qt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,Ft[0].width,Ft[0].height);for(let $=0,pt=Ft.length;$<pt;$++)dt=Ft[$],v.format!==Ln?ut!==null?Xt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,dt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,Ut,dt.data):e.texImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,ut,Ut,dt.data)}else if(v.isDataArrayTexture)if(Xt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,mt,K.width,K.height,K.depth),U)if(v.layerUpdates.size>0){let $=ch(K.width,K.height,v.format,v.type);for(let pt of v.layerUpdates){let Mt=K.data.subarray(pt*$/K.data.BYTES_PER_ELEMENT,(pt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,K.width,K.height,1,ut,Ut,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,Ut,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,K.width,K.height,K.depth,0,ut,Ut,K.data);else if(v.isData3DTexture)Xt?(Qt&&e.texStorage3D(i.TEXTURE_3D,ft,mt,K.width,K.height,K.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,Ut,K.data)):e.texImage3D(i.TEXTURE_3D,0,mt,K.width,K.height,K.depth,0,ut,Ut,K.data);else if(v.isFramebufferTexture){if(Qt)if(Xt)e.texStorage2D(i.TEXTURE_2D,ft,mt,K.width,K.height);else{let $=K.width,pt=K.height;for(let Mt=0;Mt<ft;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,mt,$,pt,0,ut,Ut,null),$>>=1,pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),u.add(v),$.onpaint=pt=>{let Mt=pt.changedElements;for(let it of u)Mt.includes(it.image)&&(it.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Mt=i.RGBA,it=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,it,Bt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Xt&&Qt){let $=re(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ft,mt,$.width,$.height)}for(let $=0,pt=Ft.length;$<pt;$++)dt=Ft[$],Xt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ut,Ut,dt):e.texImage2D(i.TEXTURE_2D,$,mt,ut,Ut,dt);v.generateMipmaps=!1}else if(Xt){if(Qt){let $=re(K);e.texStorage2D(i.TEXTURE_2D,ft,mt,$.width,$.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Ut,K)}else e.texImage2D(i.TEXTURE_2D,0,mt,ut,Ut,K);f(v)&&b(W),ct.__version=lt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Yt(R,v,B){if(v.image.length!==6)return;let W=ue(R,v),Y=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let lt=n.get(Y);if(Y.version!==lt.__version||W===!0){e.activeTexture(i.TEXTURE0+B);let ct=le.getPrimaries(le.workingColorSpace),Z=v.colorSpace===wi?null:le.getPrimaries(v.colorSpace),K=v.colorSpace===wi||ct===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=v.isCompressedTexture||v.image[0].isCompressedTexture,Ut=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!ut&&!Ut?mt[it]=m(v.image[it],!0,s.maxCubemapSize):mt[it]=Ut?v.image[it].image:v.image[it],mt[it]=me(v,mt[it]);let dt=mt[0],Ft=r.convert(v.format,v.colorSpace),Xt=r.convert(v.type),Qt=_(v.internalFormat,Ft,Xt,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,ft=lt.__version===void 0||W===!0,$=Y.dataReady,pt=y(v,dt);se(i.TEXTURE_CUBE_MAP,v);let Mt;if(ut){U&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Qt,dt.width,dt.height);for(let it=0;it<6;it++){Mt=mt[it].mipmaps;for(let Bt=0;Bt<Mt.length;Bt++){let It=Mt[Bt];v.format!==Ln?Ft!==null?U?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,0,0,It.width,It.height,Ft,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,Qt,It.width,It.height,0,It.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,0,0,It.width,It.height,Ft,Xt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,Qt,It.width,It.height,0,Ft,Xt,It.data)}}}else{if(Mt=v.mipmaps,U&&ft){Mt.length>0&&pt++;let it=re(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Qt,it.width,it.height)}for(let it=0;it<6;it++)if(Ut){U?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,Ft,Xt,mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,mt[it].width,mt[it].height,0,Ft,Xt,mt[it].data);for(let Bt=0;Bt<Mt.length;Bt++){let Ae=Mt[Bt].image[it].image;U?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,0,0,Ae.width,Ae.height,Ft,Xt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,Qt,Ae.width,Ae.height,0,Ft,Xt,Ae.data)}}else{U?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Xt,mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Ft,Xt,mt[it]);for(let Bt=0;Bt<Mt.length;Bt++){let It=Mt[Bt];U?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,0,0,Ft,Xt,It.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,Qt,Ft,Xt,It.image[it])}}}f(v)&&b(i.TEXTURE_CUBE_MAP),lt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function bt(R,v,B,W,Y,lt){let ct=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),K=_(B.internalFormat,ct,Z,B.normalized,B.colorSpace),ut=n.get(v),Ut=n.get(B);if(Ut.__renderTarget=v,!ut.__hasExternalTextures){let mt=Math.max(1,v.width>>lt),dt=Math.max(1,v.height>>lt);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,lt,K,mt,dt,v.depth,0,ct,Z,null):e.texImage2D(Y,lt,K,mt,dt,0,ct,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Ut.__webglTexture,0,Jt(v)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Ut.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(R,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let W=v.depthTexture,Y=W&&W.isDepthTexture?W.type:null,lt=S(v.stencilBuffer,Y),ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(v),lt,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(v),lt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,lt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,R)}else{let W=v.textures;for(let Y=0;Y<W.length;Y++){let lt=W[Y],ct=r.convert(lt.format,lt.colorSpace),Z=r.convert(lt.type),K=_(lt.internalFormat,ct,Z,lt.normalized,lt.colorSpace);Kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(v),K,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(R,v,B){let W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),se(i.TEXTURE_CUBE_MAP,v.depthTexture);let ut=r.convert(v.depthTexture.format),Ut=r.convert(v.depthTexture.type),mt;v.depthTexture.format===oi?mt=i.DEPTH_COMPONENT24:v.depthTexture.format===Zi&&(mt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,mt,v.width,v.height,0,ut,Ut,null)}}else Q(v.depthTexture,0);let lt=Y.__webglTexture,ct=Jt(v),Z=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,K=v.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===oi)Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,lt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,lt,0);else if(v.depthTexture.format===Zi)Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,lt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(R){let v=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=W}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)ye(v.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?ye(v.__webglFramebuffer[0],R,0):ye(v.__webglFramebuffer,R,0)}else if(B){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Zt(v.__webglDepthbuffer[W],R,!1);else{let Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,lt)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Zt(v.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,v,B){let W=n.get(R);v!==void 0&&bt(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&et(R)}function at(R){let v=R.texture,B=n.get(R),W=n.get(v);R.addEventListener("dispose",x);let Y=R.textures,lt=R.isWebGLCubeRenderTarget===!0,ct=Y.length>1;if(ct||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),lt){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[Z][K]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ct)for(let Z=0,K=Y.length;Z<K;Z++){let ut=n.get(Y[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Kt(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let K=Y[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ut=r.convert(K.format,K.colorSpace),Ut=r.convert(K.type),mt=_(K.internalFormat,ut,Ut,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),dt=Jt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),se(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)bt(B.__webglFramebuffer[Z][K],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else bt(B.__webglFramebuffer[Z],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(v)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Z=0,K=Y.length;Z<K;Z++){let ut=Y[Z],Ut=n.get(ut),mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Ut.__webglTexture),se(mt,ut),bt(B.__webglFramebuffer,R,ut,i.COLOR_ATTACHMENT0+Z,mt,0),f(ut)&&b(mt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,W.__webglTexture),se(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)bt(B.__webglFramebuffer[K],R,v,i.COLOR_ATTACHMENT0,Z,K);else bt(B.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,Z,0);f(v)&&b(Z),e.unbindTexture()}R.depthBuffer&&et(R)}function ot(R){let v=R.textures;for(let B=0,W=v.length;B<W;B++){let Y=v[B];if(f(Y)){let lt=A(R),ct=n.get(Y).__webglTexture;e.bindTexture(lt,ct),b(lt),e.unbindTexture()}}}let ht=[],Wt=[];function zt(R){if(R.samples>0){if(Kt(R)===!1){let v=R.textures,B=R.width,W=R.height,Y=i.COLOR_BUFFER_BIT,lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(R),Z=v.length>1;if(Z)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let K=R.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Ut=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Y,i.NEAREST),l===!0&&(ht.length=0,Wt.length=0,ht.push(i.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ht.push(lt),Wt.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Ut=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Jt(R){return Math.min(s.maxSamples,R.samples)}function Kt(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function P(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function me(R,v){let B=R.colorSpace,W=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Hr&&B!==wi&&(le.getTransfer(B)===xe?(W!==Ln||Y!==Tn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",B)),v}function re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=st,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Mx(i,t){function e(n,s=wi){let r,a=le.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===nh)return i.RGB;if(n===Ln)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===va||n===ya||n===Ma||n===Sa)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===ba||n===gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pl)return r.COMPRESSED_R11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Ll||n===Dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Ul||n===Ea||n===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:Sx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new bh,f={},b=e.getContextAttributes(),A=null,_=null,S=[],y=[],T=new rt,x=null,w=null,C=new rn;C.viewport=new Me;let I=new rn;I.viewport=new Me;let F=[C,I],z=new qo,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=S[J];return tt===void 0&&(tt=new Qs,S[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=S[J];return tt===void 0&&(tt=new Qs,S[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=S[J];return tt===void 0&&(tt=new Qs,S[J]=tt),tt.getHandSpace()};function G(J){let tt=y.indexOf(J.inputSource);if(tt===-1)return;let _t=S[tt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<S.length;J++){let tt=y[J];tt!==null&&(y[J]=null,S[J].disconnect(tt))}L=null,O=null,m.reset();for(let J in f)delete f[J];if(t.setRenderTarget(A),p=null,d=null,u=null,s=null,_=null,ue.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Yt=null,bt=null;b.depth&&(bt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=b.stencil?Zi:oi,Yt=b.stencil?fr:Kn);let Zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new bn(d.textureWidth,d.textureHeight,{format:Ln,type:Tn,depthTexture:new Hi(d.textureWidth,d.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new bn(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(J){for(let tt=0;tt<J.removed.length;tt++){let _t=J.removed[tt],Yt=y.indexOf(_t);Yt>=0&&(y[Yt]=null,S[Yt].disconnect(_t))}for(let tt=0;tt<J.added.length;tt++){let _t=J.added[tt],Yt=y.indexOf(_t);if(Yt===-1){for(let Zt=0;Zt<S.length;Zt++)if(Zt>=y.length){y.push(_t),Yt=Zt;break}else if(y[Zt]===null){y[Zt]=_t,Yt=Zt;break}if(Yt===-1)break}let bt=S[Yt];bt&&bt.connect(_t)}}let q=new D,j=new D;function nt(J,tt,_t){q.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let Yt=q.distanceTo(j),bt=tt.projectionMatrix.elements,Zt=_t.projectionMatrix.elements,ye=bt[14]/(bt[10]-1),et=bt[14]/(bt[10]+1),st=(bt[9]+1)/bt[5],at=(bt[9]-1)/bt[5],ot=(bt[8]-1)/bt[0],ht=(Zt[8]+1)/Zt[0],Wt=ye*ot,zt=ye*ht,Jt=Yt/(-ot+ht),Kt=Jt*-ot;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Kt),J.translateZ(Jt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),bt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let P=ye+Jt,me=et+Jt,re=Wt-Kt,R=zt+(Yt-Kt),v=st*et/me*P,B=at*et/me*P;J.projectionMatrix.makePerspective(re,R,v,B,P,me),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Lt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,_t=J.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),z.near=I.near=C.near=tt,z.far=I.far=C.far=_t,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let Yt=J.parent,bt=z.cameras;Lt(z,Yt);for(let Zt=0;Zt<bt.length;Zt++)Lt(bt[Zt],Yt);bt.length===2?nt(z,C,I):z.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),At(J,z,Yt)};function At(J,tt,_t){_t===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Eo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return f[J]};let pe=null;function se(J,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Yt=!1;_t.length!==z.cameras.length&&(z.cameras.length=0,Yt=!0);for(let et=0;et<_t.length;et++){let st=_t[et],at=null;if(p!==null)at=p.getViewport(st);else{let ht=u.getViewSubImage(d,st);at=ht.viewport,et===0&&(t.setRenderTargetTextures(_,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(_))}let ot=F[et];ot===void 0&&(ot=new rn,ot.layers.enable(et),ot.viewport=new Me,F[et]=ot),ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(st.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),et===0&&(z.matrix.copy(ot.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Yt===!0&&z.cameras.push(ot)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let et=u.getDepthInformation(_t[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let et=0;et<_t.length;et++){let st=_t[et].camera;if(st){let at=f[st];at||(at=new Qr,f[st]=at);let ot=u.getCameraImage(st);at.sourceTexture=ot}}}}for(let _t=0;_t<S.length;_t++){let Yt=y[_t],bt=S[_t];Yt!==null&&bt!==void 0&&bt.update(Yt,tt,c||a)}pe&&pe(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ue=new Xd;ue.setAnimationLoop(se),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}},Ex=new ne,Kd=new $t;Kd.set(-1,0,0,0,1,0,0,0,1);function Tx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ah(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,A,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),A=b.envMap,_=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=A*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let y=S.program;n.uniformBlockBinding(_,y)}function c(_,S){let y=s[_.id];y===void 0&&(m(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",b));let T=S.program;n.updateUBOMapping(_,T);let x=t.render.frame;r[_.id]!==x&&(d(_),r[_.id]=x)}function h(_){let S=u();_.__bindingPointIndex=S;let y=i.createBuffer(),T=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=s[_.id],y=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,w=y.length;x<w;x++){let C=y[x];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)p(C[I],x,I,T);else p(C,x,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,S,y,T){if(M(_,S,y,T)===!0){let x=_.__offset,w=_.value;if(Array.isArray(w)){let C=0;for(let I=0;I<w.length;I++){let F=w[I],z=f(F);g(F,_.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,S,y){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,y)}function M(_,S,y,T){let x=_.value,w=S+"_"+y;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:ArrayBuffer.isView(x)?T[w]=x.slice():T[w]=x.clone(),!0;{let C=T[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return T[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(_){let S=_.uniforms,y=0,T=16;for(let w=0,C=S.length;w<C;w++){let I=Array.isArray(S[w])?S[w]:[S[w]];for(let F=0,z=I.length;F<z;F++){let L=I[F],O=Array.isArray(L.value)?L.value:[L.value];for(let G=0,V=O.length;G<V;G++){let Q=O[G],q=f(Q),j=y%T,nt=j%q.boundary,Lt=j+nt;y+=nt,Lt!==0&&T-Lt<q.storage&&(y+=T-Lt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=q.storage}}}let x=y%T;return x>0&&(y+=T-x),_.__size=y,_.__cache={},this}function f(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",_),S}function b(_){let S=_.target;S.removeEventListener("dispose",b);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function Rx(){return hi===null&&(hi=new nr(Ax,16,16,Ji,Qn),hi.name="DFG_LUT",hi.minFilter=an,hi.magFilter=an,hi.wrapS=ri,hi.wrapT=ri,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Ca=class{constructor(t={}){let{canvas:e=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([al,rl,sl]),f=new Set([Tn,Kn,dr,fr,el,nl]),b=new Uint32Array(4),A=new Int32Array(4),_=new D,S=null,y=null,T=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,F=null,z=null,L=null,O=null;this._outputColorSpace=Qe;let G=0,V=0,Q=null,q=-1,j=null,nt=new Me,Lt=new Me,At=null,pe=new Vt(0),se=0,ue=e.width,J=e.height,tt=1,_t=null,Yt=null,bt=new Me(0,0,ue,J),Zt=new Me(0,0,ue,J),ye=!1,et=new ir,st=!1,at=!1,ot=new ne,ht=new D,Wt=new Me,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function Kt(){return Q===null?tt:1}let P=n;function me(E,N){return e.getContext(E,N)}let re,R,v,B,W,Y,lt,ct,Z,K,ut,Ut,mt,dt,Ft,Xt,Qt,U,ft,$,pt,Mt,it;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",On,!1),P===null){let N="webgl2";if(P=me(N,E),P===null)throw me(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(E){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",On,!1),qt("WebGLRenderer: "+E.message),E}function Bt(){re=new Ug(P),re.init(),pt=new Mx(P,re),R=new Tg(P,re,t,pt),v=new vx(P,re),R.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),z=P.createFramebuffer(),L=P.createFramebuffer(),O=P.createFramebuffer(),B=new Bg(P),W=new rx,Y=new yx(P,re,v,W,R,pt,B),lt=new Ng(C),ct=new kp(P),Mt=new bg(P,ct),Z=new Fg(P,ct,B,Mt),K=new kg(P,Z,ct,Mt,B),U=new zg(P,R,Y),Ft=new wg(W),ut=new sx(C,lt,re,R,Mt,Ft),Ut=new Tx(C,W),mt=new ox,dt=new fx(re),Qt=new Sg(C,lt,v,K,g,l),Xt=new xx(C,K,R),it=new wx(P,B,R,v),ft=new Eg(P,re,B),$=new Og(P,re,B),B.programs=ut.programs,C.capabilities=R,C.extensions=re,C.properties=W,C.renderLists=mt,C.shadowMap=Xt,C.state=v,C.info=B}M!==Tn&&(w=new Gg(M,e.width,e.height,o,s,r));let It=new Eh(C,P);this.xr=It,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(ue,J,!1))},this.getSize=function(E){return E.set(ue,J)},this.setSize=function(E,N,X=!0){if(It.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=E,J=N,e.width=Math.floor(E*tt),e.height=Math.floor(N*tt),X===!0&&(e.style.width=E+"px",e.style.height=N+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(ue*tt,J*tt).floor()},this.setDrawingBufferSize=function(E,N,X){ue=E,J=N,tt=X,e.width=Math.floor(E*X),e.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(M===Tn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(bt)},this.setViewport=function(E,N,X,k){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,N,X,k),v.viewport(nt.copy(bt).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(Zt)},this.setScissor=function(E,N,X,k){E.isVector4?Zt.set(E.x,E.y,E.z,E.w):Zt.set(E,N,X,k),v.scissor(Lt.copy(Zt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){v.setScissorTest(ye=E)},this.setOpaqueSort=function(E){_t=E},this.setTransparentSort=function(E){Yt=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,X=!0){let k=0;if(E){let H=!1;if(Q!==null){let yt=Q.texture.format;H=m.has(yt)}if(H){let yt=Q.texture.type,wt=f.has(yt),xt=Qt.getClearColor(),Rt=Qt.getClearAlpha(),Pt=xt.r,jt=xt.g,ae=xt.b;wt?(b[0]=Pt,b[1]=jt,b[2]=ae,b[3]=Rt,P.clearBufferuiv(P.COLOR,0,b)):(A[0]=Pt,A[1]=jt,A[2]=ae,A[3]=Rt,P.clearBufferiv(P.COLOR,0,A))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Qt.dispose(),mt.dispose(),dt.dispose(),W.dispose(),lt.dispose(),K.dispose(),Mt.dispose(),it.dispose(),ut.dispose(),It.dispose(),It.removeEventListener("sessionstart",Uh),It.removeEventListener("sessionend",Fh),ns.stop()};function Ae(E){E.preventDefault(),Wr("WebGLRenderer: Context Lost."),I=!0}function ge(){Wr("WebGLRenderer: Context Restored."),I=!1;let E=B.autoReset,N=Xt.enabled,X=Xt.autoUpdate,k=Xt.needsUpdate,H=Xt.type;Bt(),B.autoReset=E,Xt.enabled=N,Xt.autoUpdate=X,Xt.needsUpdate=k,Xt.type=H}function On(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){let N=E.target;N.removeEventListener("dispose",ei),_f(N)}function _f(E){xf(E),W.remove(E)}function xf(E){let N=W.get(E).programs;N!==void 0&&(N.forEach(function(X){ut.releaseProgram(X)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,k,H,yt){N===null&&(N=zt);let wt=H.isMesh&&H.matrixWorld.determinantAffine()<0,xt=Mf(E,N,X,k,H);v.setMaterial(k,wt);let Rt=X.index,Pt=1;if(k.wireframe===!0){if(Rt=Z.getWireframeAttribute(X),Rt===void 0)return;Pt=2}let jt=X.drawRange,ae=X.attributes.position,Ct=jt.start*Pt,_e=(jt.start+jt.count)*Pt;yt!==null&&(Ct=Math.max(Ct,yt.start*Pt),_e=Math.min(_e,(yt.start+yt.count)*Pt)),Rt!==null?(Ct=Math.max(Ct,0),_e=Math.min(_e,Rt.count)):ae!=null&&(Ct=Math.max(Ct,0),_e=Math.min(_e,ae.count));let He=_e-Ct;if(He<0||He===1/0)return;Mt.setup(H,k,xt,X,Rt);let Le,we=ft;if(Rt!==null&&(Le=ct.get(Rt),we=$,we.setIndex(Le)),H.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Kt()),we.setMode(P.LINES)):we.setMode(P.TRIANGLES);else if(H.isLine){let hn=k.linewidth;hn===void 0&&(hn=1),v.setLineWidth(hn*Kt()),H.isLineSegments?we.setMode(P.LINES):H.isLineLoop?we.setMode(P.LINE_LOOP):we.setMode(P.LINE_STRIP)}else H.isPoints?we.setMode(P.POINTS):H.isSprite&&we.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(re.get("WEBGL_multi_draw"))we.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let hn=H._multiDrawStarts,Et=H._multiDrawCounts,xn=H._multiDrawCount,de=Rt?ct.get(Rt).bytesPerElement:1,Dn=W.get(k).currentProgram.getUniforms();for(let ni=0;ni<xn;ni++)Dn.setValue(P,"_gl_DrawID",ni),we.render(hn[ni]/de,Et[ni])}else if(H.isInstancedMesh)we.renderInstances(Ct,He,H.count);else if(X.isInstancedBufferGeometry){let hn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,hn);we.renderInstances(Ct,He,Et)}else we.render(Ct,He)};function Nh(E,N,X,k){F!==null&&E.isNodeMaterial&&F.setObject(k,E),st===!0&&Ft.setState(E,X,!1),E.transparent===!0&&E.side===Sn&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,Fa(E,N,k),E.side=Xi,E.needsUpdate=!0,Fa(E,N,k),E.side=Sn):Fa(E,N,k)}this.compile=function(E,N,X=null){X===null&&(X=E),F!==null&&F.renderStart(E,N,X),y=dt.get(X),y.init(N),x.push(y),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),at=this.localClippingEnabled,st=Ft.init(this.clippingPlanes,at),st===!0&&Ft.setGlobalState(this.clippingPlanes,N),F!==null&&Xt.render(y.state.shadowsArray,X,N);let k=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let yt=H.material;if(yt)if(Array.isArray(yt))for(let wt=0;wt<yt.length;wt++){let xt=yt[wt];Nh(xt,X,N,H),k.add(xt)}else Nh(yt,X,N,H),k.add(yt)}),y=x.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(E,N,X=null){let k=this.compile(E,N,X);return new Promise(H=>{function yt(){if(k.forEach(function(wt){let Rt=W.get(wt).currentProgram;(Rt===void 0||Rt.isReady())&&k.delete(wt)}),k.size===0){H(E);return}setTimeout(yt,10)}re.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ql=null;function vf(E){Ql&&Ql(E)}function Uh(){ns.stop()}function Fh(){ns.start()}let ns=new Xd;ns.setAnimationLoop(vf),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(E){Ql=E,It.setAnimationLoop(E),E===null?ns.stop():ns.start()},It.addEventListener("sessionstart",Uh),It.addEventListener("sessionend",Fh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(E,N);let X=It.enabled===!0&&It.isPresenting===!0,k=w!==null&&(Q===null||X)&&w.begin(C,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(N),N=It.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,N,Q),y=dt.get(E,x.length),y.init(N),y.state.textureUnits=Y.getTextureUnits(),x.push(y),ot.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(ot,Gn,N.reversedDepth),at=this.localClippingEnabled,st=Ft.init(this.clippingPlanes,at),S=mt.get(E,T.length),S.init(),T.push(S),It.enabled===!0&&It.isPresenting===!0){let wt=C.xr.getDepthSensingMesh();wt!==null&&jl(wt,N,-1/0,C.sortObjects)}jl(E,N,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(y.state.lightsArray),C.sortObjects===!0&&S.sort(_t,Yt),Jt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Jt&&Qt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ft.beginShadows();let H=y.state.shadowsArray;if(Xt.render(H,E,N),st===!0&&Ft.endShadows(),(k&&w.hasRenderPass())===!1){let wt=S.opaque,xt=S.transmissive;if(y.setupLights(),N.isArrayCamera){let Rt=N.cameras;if(xt.length>0)for(let Pt=0,jt=Rt.length;Pt<jt;Pt++){let ae=Rt[Pt];Bh(wt,xt,E,ae)}Jt&&Qt.render(E);for(let Pt=0,jt=Rt.length;Pt<jt;Pt++){let ae=Rt[Pt];Oh(S,E,ae,ae.viewport)}}else xt.length>0&&Bh(wt,xt,E,N),Jt&&Qt.render(E),Oh(S,E,N)}Q!==null&&V===0&&(Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q)),k&&w.end(C),E.isScene===!0&&E.onAfterRender(C,E,N),Mt.resetDefaultState(),q=-1,j=null,x.pop(),x.length>0?(y=x[x.length-1],Y.setTextureUnits(y.state.textureUnits),st===!0&&Ft.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,F!==null&&F.renderEnd()};function jl(E,N,X,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)y.pushLightProbeGrid(E);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(et)){k&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);let wt=K.update(E),xt=E.material;xt.visible&&S.push(E,wt,xt,X,Wt.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(et))){let wt=K.update(E),xt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Wt.copy(wt.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(xt)){let Rt=wt.groups;for(let Pt=0,jt=Rt.length;Pt<jt;Pt++){let ae=Rt[Pt],Ct=xt[ae.materialIndex];Ct&&Ct.visible&&S.push(E,wt,Ct,X,Wt.z,ae,N)}}else xt.visible&&S.push(E,wt,xt,X,Wt.z,null,N)}}let yt=E.children;for(let wt=0,xt=yt.length;wt<xt;wt++)jl(yt[wt],N,X,k)}function Oh(E,N,X,k){let{opaque:H,transmissive:yt,transparent:wt}=E;y.setupLightsView(X),st===!0&&Ft.setGlobalState(C.clippingPlanes,X),k&&v.viewport(nt.copy(k)),H.length>0&&Ua(H,N,X),yt.length>0&&Ua(yt,N,X),wt.length>0&&Ua(wt,N,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Bh(E,N,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){let Ct=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new bn(1,1,{generateMipmaps:!0,type:Ct?Qn:Tn,minFilter:Yi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let yt=y.state.transmissionRenderTarget[k.id],wt=k.viewport||nt;yt.setSize(wt.z*C.transmissionResolutionScale,wt.w*C.transmissionResolutionScale);let xt=C.getRenderTarget(),Rt=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(yt),C.getClearColor(pe),se=C.getClearAlpha(),se<1&&C.setClearColor(16777215,.5),C.clear(),Jt&&Qt.render(X);let jt=C.toneMapping;C.toneMapping=$n;let ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),st===!0&&Ft.setGlobalState(C.clippingPlanes,k),Ua(E,X,k),Y.updateMultisampleRenderTarget(yt),Y.updateRenderTargetMipmap(yt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let _e=0,He=N.length;_e<He;_e++){let Le=N[_e],{object:we,geometry:hn,material:Et,group:xn}=Le;if(Et.side===Sn&&we.layers.test(k.layers)){let de=Et.side;Et.side=cn,Et.needsUpdate=!0,zh(we,X,k,hn,Et,xn),Et.side=de,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(Y.updateMultisampleRenderTarget(yt),Y.updateRenderTargetMipmap(yt))}C.setRenderTarget(xt,Rt,Pt),C.setClearColor(pe,se),ae!==void 0&&(k.viewport=ae),C.toneMapping=jt}function Ua(E,N,X){let k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,yt=E.length;H<yt;H++){let wt=E[H],{object:xt,geometry:Rt,group:Pt}=wt,jt=wt.material;jt.allowOverride===!0&&k!==null&&(jt=k),xt.layers.test(X.layers)&&zh(xt,N,X,Rt,jt,Pt)}}function zh(E,N,X,k,H,yt){F!==null&&H.isNodeMaterial&&F.setObject(E,H),E.onBeforeRender(C,N,X,k,H,yt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(C,N,X,k,E,yt),H.transparent===!0&&H.side===Sn&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,C.renderBufferDirect(X,N,k,H,E,yt),H.side=Xi,H.needsUpdate=!0,C.renderBufferDirect(X,N,k,H,E,yt),H.side=Sn):C.renderBufferDirect(X,N,k,H,E,yt),E.onAfterRender(C,N,X,k,H,yt)}function Fa(E,N,X){N.isScene!==!0&&(N=zt);let k=W.get(E),H=y.state.lights,yt=y.state.shadowsArray,wt=H.state.version,xt=ut.getParameters(E,H.state,yt,N,X,y.state.lightProbeGridArray),Rt=ut.getProgramCacheKey(xt),Pt=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=lt.get(E.envMap||k.environment,jt),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",ei),Pt=new Map,k.programs=Pt);let ae=Pt.get(Rt);if(ae!==void 0){if(k.currentProgram===ae&&k.lightsStateVersion===wt)return Hh(E,xt),ae}else xt.uniforms=ut.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,X,xt),E.onBeforeCompile(xt,C),ae=ut.acquireProgram(xt,Rt),Pt.set(Rt,ae),k.uniforms=xt.uniforms;let Ct=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=Ft.uniform),Hh(E,xt),k.needsLights=bf(E),k.lightsStateVersion=wt,k.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.sunLights.value=H.state.sun,Ct.sunLightShadows.value=H.state.sunShadow,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.sunShadowMatrix.value=H.state.sunShadowMatrix,Ct.sunShadowCascade.value=H.state.sunShadowCascade,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=y.state.lightProbeGridArray.length>0,k.currentProgram=ae,k.uniformsList=null,ae}function kh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Hh(E,N){let X=W.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function yf(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let X=0,k=E.length;X<k;X++){let H=E[X];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Mf(E,N,X,k,H){N.isScene!==!0&&(N=zt),Y.resetTextureUnits();let yt=N.fog,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,xt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:le.workingColorSpace,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pt=lt.get(k.envMap||wt,Rt),jt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ae=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!X.morphAttributes.position,_e=!!X.morphAttributes.normal,He=!!X.morphAttributes.color,Le=$n;k.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=C.toneMapping);let we=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,hn=we!==void 0?we.length:0,Et=W.get(k),xn=y.state.lights;if(st===!0&&(at===!0||E!==j)){let Re=E===j&&k.id===q;Ft.setState(k,E,Re)}let de=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==xn.state.version||Et.outputColorSpace!==xt||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Pt||k.fog===!0&&Et.fog!==yt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ft.numPlanes||Et.numIntersection!==Ft.numIntersection)||Et.vertexAlphas!==jt||Et.vertexTangents!==ae||Et.morphTargets!==Ct||Et.morphNormals!==_e||Et.morphColors!==He||Et.toneMapping!==Le||Et.morphTargetsCount!==hn||!!Et.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Et.__version=k.version);let Dn=Et.currentProgram;de===!0&&(Dn=Fa(k,N,H),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Dn,Et));let ni=!1,Ii=!1,Rs=!1,Ee=Dn.getUniforms(),Fe=Et.uniforms;if(v.useProgram(Dn.program)&&(ni=!0,Ii=!0,Rs=!0),k.id!==q&&(q=k.id,Ii=!0),Et.needsLights){let Re=yf(y.state.lightProbeGridArray,H);Et.lightProbeGrid!==Re&&(Et.lightProbeGrid=Re,Ii=!0)}if(ni||j!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ee.setValue(P,"projectionMatrix",E.projectionMatrix),Ee.setValue(P,"viewMatrix",E.matrixWorldInverse);let Li=Ee.map.cameraPosition;Li!==void 0&&Li.setValue(P,ht.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,Ii=!0,Rs=!0)}if(Et.needsLights&&(xn.state.sunShadowMap.length>0&&Ee.setValue(P,"sunShadowMap",xn.state.sunShadowMap,Y),xn.state.directionalShadowMap.length>0&&Ee.setValue(P,"directionalShadowMap",xn.state.directionalShadowMap,Y),xn.state.spotShadowMap.length>0&&Ee.setValue(P,"spotShadowMap",xn.state.spotShadowMap,Y),xn.state.pointShadowMap.length>0&&Ee.setValue(P,"pointShadowMap",xn.state.pointShadowMap,Y)),H.isSkinnedMesh){Ee.setOptional(P,H,"bindMatrix"),Ee.setOptional(P,H,"bindMatrixInverse");let Re=H.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ee.setValue(P,"boneTexture",Re.boneTexture,Y))}H.isBatchedMesh&&(Ee.setOptional(P,H,"batchingTexture"),Ee.setValue(P,"batchingTexture",H._matricesTexture,Y),Ee.setOptional(P,H,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",H._indirectTexture,Y),Ee.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",H._colorsTexture,Y));let Pi=X.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&U.update(H,X,Dn),(Ii||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,Ee.setValue(P,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Fe.envMapIntensity.value=N.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Rx()),Ii){if(Ee.setValue(P,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&Sf(Fe,Rs),yt&&k.fog===!0&&Ut.refreshFogUniforms(Fe,yt),Ut.refreshMaterialUniforms(Fe,k,tt,J,y.state.transmissionRenderTarget[E.id]),Et.needsLights&&Et.lightProbeGrid){let Re=Et.lightProbeGrid;Fe.probesSH.value=Re.texture,Fe.probesMin.value.copy(Re.boundingBox.min),Fe.probesMax.value.copy(Re.boundingBox.max),Fe.probesResolution.value.copy(Re.resolution)}gr.upload(P,kh(Et),Fe,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(gr.upload(P,kh(Et),Fe,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ee.setValue(P,"center",H.center),Ee.setValue(P,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(P,"normalMatrix",H.normalMatrix),Ee.setValue(P,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let Re=k.uniformsGroups;for(let Li=0,Cs=Re.length;Li<Cs;Li++){let Vh=Re[Li];it.update(Vh,Dn),it.bind(Vh,Dn)}}return Dn}function Sf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function bf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,N,X){let k=W.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=N,W.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let X=W.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){Q=E,G=N,V=X;let k=null,H=!1,yt=!1;if(E){let xt=W.get(E);if(xt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(P.FRAMEBUFFER,xt.__webglFramebuffer),nt.copy(E.viewport),Lt.copy(E.scissor),At=E.scissorTest,v.viewport(nt),v.scissor(Lt),v.setScissorTest(At),q=-1;return}else if(xt.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(xt.__hasExternalTextures)Y.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let jt=E.depthTexture;if(xt.__boundDepthTexture!==jt){if(jt!==null&&W.has(jt)&&(E.width!==jt.image.width||E.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}let Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(yt=!0);let Pt=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[N])?k=Pt[N][X]:k=Pt[N],H=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?k=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[X]:k=Pt,nt.copy(E.viewport),Lt.copy(E.scissor),At=E.scissorTest}else nt.copy(bt).multiplyScalar(tt).floor(),Lt.copy(Zt).multiplyScalar(tt).floor(),At=ye;if(X!==0&&(k=z),v.bindFramebuffer(P.FRAMEBUFFER,k)&&v.drawBuffers(E,k),v.viewport(nt),v.scissor(Lt),v.setScissorTest(At),H){let xt=W.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,X)}else if(yt){let xt=N;for(let Rt=0;Rt<E.textures.length;Rt++){let Pt=W.get(E.textures[Rt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Rt,Pt.__webglTexture,X,xt)}}else if(E!==null&&X!==0){let xt=W.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,X)}q=-1};function Gh(E){let N=W.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=R.textureFormatReadable(E.format),N.__typeReadable=R.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,X,k,H,yt,wt,xt=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){v.bindFramebuffer(P.FRAMEBUFFER,Rt);try{let Pt=E.textures[xt],jt=Pt.format,ae=Pt.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Gh(Pt);if(Ct.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&X>=0&&X<=E.height-H&&P.readPixels(N,X,k,H,pt.convert(jt),pt.convert(ae),yt)}finally{let Pt=Q!==null?W.get(Q).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,k,H,yt,wt,xt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt)if(N>=0&&N<=E.width-k&&X>=0&&X<=E.height-H){v.bindFramebuffer(P.FRAMEBUFFER,Rt);let Pt=E.textures[xt],jt=Pt.format,ae=Pt.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Gh(Pt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,_e),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(N,X,k,H,pt.convert(jt),pt.convert(ae),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let He=Q!==null?W.get(Q).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,He);let Le=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await fd(P,Le,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,_e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(_e),P.deleteSync(Le),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,X=0){let k=Math.pow(2,-X),H=Math.floor(E.image.width*k),yt=Math.floor(E.image.height*k),wt=N!==null?N.x:0,xt=N!==null?N.y:0;Y.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,wt,xt,H,yt),v.unbindTexture()},this.copyTextureToTexture=function(E,N,X=null,k=null,H=0,yt=0){let wt,xt,Rt,Pt,jt,ae,Ct,_e,He,Le=E.isCompressedTexture?E.mipmaps[yt]:E.image;if(X!==null)wt=X.max.x-X.min.x,xt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,Pt=X.min.x,jt=X.min.y,ae=X.isBox3?X.min.z:0;else{let Fe=Math.pow(2,-H);wt=Math.floor(Le.width*Fe),xt=Math.floor(Le.height*Fe),E.isDataArrayTexture?Rt=Le.depth:E.isData3DTexture?Rt=Math.floor(Le.depth*Fe):Rt=1,Pt=0,jt=0,ae=0}k!==null?(Ct=k.x,_e=k.y,He=k.z):(Ct=0,_e=0,He=0);let we=pt.convert(N.format),hn=pt.convert(N.type),Et;N.isData3DTexture?(Y.setTexture3D(N,0),Et=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),Et=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),Et=P.TEXTURE_2D),v.activeTexture(P.TEXTURE0),v.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let xn=v.getParameter(P.UNPACK_ROW_LENGTH),de=v.getParameter(P.UNPACK_IMAGE_HEIGHT),Dn=v.getParameter(P.UNPACK_SKIP_PIXELS),ni=v.getParameter(P.UNPACK_SKIP_ROWS),Ii=v.getParameter(P.UNPACK_SKIP_IMAGES);v.pixelStorei(P.UNPACK_ROW_LENGTH,Le.width),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Le.height),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),v.pixelStorei(P.UNPACK_SKIP_ROWS,jt),v.pixelStorei(P.UNPACK_SKIP_IMAGES,ae);let Rs=E.isDataArrayTexture||E.isData3DTexture,Ee=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let Fe=W.get(E),Pi=W.get(N),Re=W.get(Fe.__renderTarget),Li=W.get(Pi.__renderTarget);v.bindFramebuffer(P.READ_FRAMEBUFFER,Re.__webglFramebuffer),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Cs=0;Cs<Rt;Cs++)Rs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(E).__webglTexture,H,ae+Cs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(N).__webglTexture,yt,He+Cs)),P.blitFramebuffer(Pt,jt,wt,xt,Ct,_e,wt,xt,P.DEPTH_BUFFER_BIT,P.NEAREST);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||W.has(E)){let Fe=W.get(E),Pi=W.get(N);v.bindFramebuffer(P.READ_FRAMEBUFFER,L),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,O);for(let Re=0;Re<Rt;Re++)Rs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,H,ae+Re):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fe.__webglTexture,H),Ee?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pi.__webglTexture,yt,He+Re):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pi.__webglTexture,yt),H!==0?P.blitFramebuffer(Pt,jt,wt,xt,Ct,_e,wt,xt,P.COLOR_BUFFER_BIT,P.NEAREST):Ee?P.copyTexSubImage3D(Et,yt,Ct,_e,He+Re,Pt,jt,wt,xt):P.copyTexSubImage2D(Et,yt,Ct,_e,Pt,jt,wt,xt);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ee?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Et,yt,Ct,_e,He,wt,xt,Rt,we,hn,Le.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Et,yt,Ct,_e,He,wt,xt,Rt,we,Le.data):P.texSubImage3D(Et,yt,Ct,_e,He,wt,xt,Rt,we,hn,Le):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,yt,Ct,_e,wt,xt,we,hn,Le.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,yt,Ct,_e,Le.width,Le.height,we,Le.data):P.texSubImage2D(P.TEXTURE_2D,yt,Ct,_e,wt,xt,we,hn,Le);v.pixelStorei(P.UNPACK_ROW_LENGTH,xn),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Dn),v.pixelStorei(P.UNPACK_SKIP_ROWS,ni),v.pixelStorei(P.UNPACK_SKIP_IMAGES,Ii),yt===0&&N.generateMipmaps&&P.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){G=0,V=0,Q=null,v.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var St=Math.PI,Cx=(i,t)=>new rt(i,t),Nt=(i,t,e)=>new D(i,t,e),Ia=(i,t,e)=>Math.max(t,Math.min(e,i)),We=(i,t,e)=>{let n=Ia((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ts=(i,t,e)=>i+(t-i)*e,jn=1;function Ai(i){jn=i*2654435761>>>0||1}function Ot(){return jn^=jn<<13,jn>>>=0,jn^=jn>>>17,jn^=jn<<5,jn>>>=0,jn/4294967296}function $i(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1274126177)+Math.imul(jn,97);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n&65535)/65535}function Je(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=i-n,o=t-s,l=e-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l),d=Ts(Ts($i(n,s,r),$i(n+1,s,r),c),Ts($i(n,s+1,r),$i(n+1,s+1,r),c),h),p=Ts(Ts($i(n,s,r+1),$i(n+1,s,r+1),c),Ts($i(n,s+1,r+1),$i(n+1,s+1,r+1),c),h);return Ts(d,p,u)}var tn=(i,t,e)=>Je(i,t,e)*.55+Je(i*2.1,t*2.1,e*2.1)*.3+Je(i*4.3,t*4.3,e*4.3)*.15,Dt=i=>new Vt(i),Fn=(i,t,e)=>i.clone().lerp(t,Ia(e,0,1)),Be=(i,t)=>i.clone().multiplyScalar(t);function As(i,t=20){let e=i.map(([n,s])=>Cx(Math.max(s,1e-4),n));return new oa(e,t)}function ze(i,t,e,n=18,s=10){let r=[];for(let o=0;o<=6;o++){let l=-St/2+o/6*(St/2);r.push([-e+Math.sin(l)*t,Math.cos(l)*t])}for(let o=1;o<s;o++){let l=o/s;r.push([-e+e*l,t+(i-t)*l])}for(let o=0;o<=6;o++){let l=o/6*(St/2);r.push([Math.sin(l)*i,Math.cos(l)*i])}return As(r,n)}function en(i,t,e){let n=e.clone().sub(t).normalize(),s=new fn().setFromUnitVectors(Nt(0,-1,0),n);return i.applyQuaternion(s),i.translate(t.x,t.y,t.z),i}function mn(i,t,e,n=20,s=14){let r=new Se(1,n,s);return r.scale(i,t,e),r}var vr=class{constructor(){this.p=[],this.n=[],this.c=[],this.si=[],this.sw=[],this.ix=[],this.uv=[]}add(t,e,n){let s=(t.index,t),r=s.attributes.position,a=s.attributes.normal,o=this.p.length/3;for(let l=0;l<r.count;l++){let c=r.getX(l),h=r.getY(l),u=r.getZ(l),d=a.getX(l),p=a.getY(l),g=a.getZ(l);this.p.push(c,h,u),this.n.push(d,p,g),this.uv.push(c*.06+u*.045,h*.06-u*.03);let M=n(c,h,u,d,p,g);this.c.push(M.r,M.g,M.b);let[m,f,b]=e(c,h,u);this.si.push(m,f,0,0),this.sw.push(1-b,b,0,0)}if(s.index)for(let l=0;l<s.index.count;l++)this.ix.push(o+s.index.getX(l));else for(let l=0;l<r.count;l++)this.ix.push(o+l)}build(){let t=new De;return t.setAttribute("position",new ce(this.p,3)),t.setAttribute("normal",new ce(this.n,3)),t.setAttribute("color",new ce(this.c,3)),t.setAttribute("uv",new ce(this.uv,2)),t.setAttribute("skinIndex",new us(this.si,4)),t.setAttribute("skinWeight",new ce(this.sw,4)),t.setIndex(this.ix),t}};function ql(i){let t=[],e={},n={};i.forEach(([r,a,o])=>{let l=new er;if(l.name=r,n[r]=Nt(o[0],o[1],o[2]),a){let c=n[a];l.position.set(o[0]-c.x,o[1]-c.y,o[2]-c.z),e[a].add(l)}else l.position.set(o[0],o[1],o[2]);t.push(l),e[r]=l});let s={};return t.forEach((r,a)=>{s[r.name]=a}),{bones:t,byName:e,idx:s,world:n}}function nn(i,t,e,n){let s=[];for(let[r,a]of Object.entries(e)){if(r.endsWith(".pos")){let c=r.slice(0,-4),h=n[c];s.push(new _s(c+".position",a.map(u=>u[0]),a.flatMap(u=>[h.x+u[1][0],h.y+u[1][1],h.z+u[1][2]])));continue}let o=[],l=[];a.forEach(([c,h])=>{let u=new fn().setFromEuler(new Un(h[0],h[1],h[2],"XYZ"));o.push(c),l.push(u.x,u.y,u.z,u.w)}),s.push(new Vi(r+".quaternion",o,l))}return new xs(i,t,s)}function Tt(i,t,e){let n=[];for(let s=0;s<=t;s++){let r=s/t;n.push([r*i,e(r*St*2)])}return n}var ws=null;function Ix(){if(ws)return ws;let i=256,t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i);Ai(5);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=r/i*8,o=s/i*8,l=tn(a,o,1.3)*.7+Je(a*5,o*5,4)*.3,c=Math.floor(l*255),h=(s*i+r)*4;n.data[h]=n.data[h+1]=n.data[h+2]=c,n.data[h+3]=255}return e.putImageData(n,0,0),ws=new li(t),ws.wrapS=ws.wrapT=ai,ws.anisotropy=4,ws}function Yl(i={}){return new Ie(Object.assign({vertexColors:!0,roughness:.78,metalness:0,envMapIntensity:.8,bumpMap:Ix(),bumpScale:.5},i))}function fe(i,t={}){return new Ie(Object.assign({color:Dt(i),roughness:.6,metalness:0,envMapIntensity:1},t))}function di(i,t=2){return new Ie({color:Dt(i),emissive:Dt(i),emissiveIntensity:t,roughness:.4})}var Th=new Map,sn=(i,t)=>{let e=document.createElement("canvas");return e.width=i,e.height=t,e};function Qd(i,t,e,n=4){let s=new li(i);return s.wrapS=s.wrapT=ai,s.repeat.set(e[0],e[1]),s.anisotropy=n,t&&(s.colorSpace=Qe),s}function Px(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=sn(e,n),a=r.getContext("2d"),o=a.createImageData(e,n),l=(c,h)=>s[((h+n)%n*e+(c+e)%e)*4]/255;for(let c=0;c<n;c++)for(let h=0;h<e;h++){let u=l(h+1,c-1)+2*l(h+1,c)+l(h+1,c+1)-(l(h-1,c-1)+2*l(h-1,c)+l(h-1,c+1)),d=l(h-1,c+1)+2*l(h,c+1)+l(h+1,c+1)-(l(h-1,c-1)+2*l(h,c-1)+l(h+1,c-1)),p=-u*t,g=d*t,M=1,m=Math.hypot(p,g,M);p/=m,g/=m,M/=m;let f=(c*e+h)*4;o.data[f]=(p*.5+.5)*255,o.data[f+1]=(g*.5+.5)*255,o.data[f+2]=(M*.5+.5)*255,o.data[f+3]=255}return a.putImageData(o,0,0),r}function yr(i,t,e,n,s,r=2,a=.35){for(let o=0;o<n;o++)i.fillStyle=s[Ot()*s.length|0],i.globalAlpha=a*Ot(),i.fillRect(Ot()*t,Ot()*e,1+Ot()*r,1+Ot()*r);i.globalAlpha=1}function Ki(i,t,e,n,s){let r=i.getImageData(0,0,t,e),a=r.data,o=new Vt(n);for(let l=0;l<e;l++)for(let c=0;c<t;c++){let h=tn(c/t*6,l/e*6,2.2),u=Math.max(0,h-(.62-s*.25))*2.6*s,d=(l*t+c)*4;a[d]+=(o.r*255-a[d])*u,a[d+1]+=(o.g*255-a[d+1])*u,a[d+2]+=(o.b*255-a[d+2])*u}i.putImageData(r,0,0)}var jd={bricks(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d"),o=e.bw||64,l=e.bh||28,c=3;r.fillStyle=e.mortar||"#1a1d20",r.fillRect(0,0,i,t),a.fillStyle="#000",a.fillRect(0,0,i,t);for(let h=0;h*l<t;h++)for(let u=-1;u*o<i;u++){let d=u*o+(h%2?o/2:0),p=.78+Ot()*.4,g=new Vt(e.colors[Ot()*e.colors.length|0]).multiplyScalar(p);r.fillStyle="#"+g.getHexString(),r.fillRect(d+c/2,h*l+c/2,o-c,l-c);let M=150+Ot()*90;a.fillStyle=`rgb(${M},${M},${M})`,a.fillRect(d+c/2,h*l+c/2,o-c,l-c)}return yr(r,i,t,900,["#000","#fff","#6b7a70"],3,.25),yr(a,i,t,700,["#000"],3,.5),Ki(r,i,t,e.grime||"#0b0f10",.8),[n,s]},plaster(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d");r.fillStyle=e.color,r.fillRect(0,0,i,t),yr(r,i,t,1400,["#000","#fff"],2,.08),Ki(r,i,t,e.grime||"#161412",e.dirt==null?.6:e.dirt);let o=a.createImageData(i,t);for(let l=0;l<t;l++)for(let c=0;c<i;c++){let h=tn(c/i*14,l/t*14,3)*255,u=(l*i+c)*4;o.data[u]=o.data[u+1]=o.data[u+2]=h,o.data[u+3]=255}if(a.putImageData(o,0,0),e.cracks){r.strokeStyle="rgba(0,0,0,.55)",a.strokeStyle="#000";for(let l=0;l<e.cracks;l++){let c=Ot()*i,h=Ot()*t;r.lineWidth=a.lineWidth=1+Ot()*1.5,r.beginPath(),a.beginPath(),r.moveTo(c,h),a.moveTo(c,h);for(let u=0;u<14;u++)c+=(Ot()-.5)*26,h+=6+Ot()*16,r.lineTo(c,h),a.lineTo(c,h);r.stroke(),a.stroke()}}return[n,s]},wallpaper(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d");r.fillStyle=e.color,r.fillRect(0,0,i,t),a.fillStyle="#777",a.fillRect(0,0,i,t);let o=i/8;for(let l=0;l<8;l++)l%2&&(r.fillStyle="rgba(255,225,170,.09)",r.fillRect(l*o,0,o,t));for(let l=0;l<6;l++)for(let c=0;c<4;c++){let h=(c+(l%2?.5:0))*(i/4)+i/8,u=l*(t/6)+t/12;r.fillStyle="rgba(255,215,150,.22)",a.fillStyle="#bbb";for(let d of[r,a])d.beginPath(),d.moveTo(h,u-22),d.quadraticCurveTo(h+18,u-4,h,u+22),d.quadraticCurveTo(h-18,u-4,h,u-22),d.fill()}return yr(r,i,t,900,["#000","#fff"],2,.08),Ki(r,i,t,"#1a120a",.75),Ki(a,i,t,"#000",.5),[n,s]},planks(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d"),o=e.vertical?i/(e.count||6):t/(e.count||8);for(let l=0;l*o<(e.vertical?i:t);l++){let c=.75+Ot()*.45,h=new Vt(e.color).multiplyScalar(c);for(let u=0;u<(e.vertical?t:i);u+=4){let d=.88+.24*Je(u*.02,l*3.1,1.7),p=h.clone().multiplyScalar(d);r.fillStyle="#"+p.getHexString();let g=120+d*80;a.fillStyle=`rgb(${g},${g},${g})`,e.vertical?(r.fillRect(l*o,u,o,4),a.fillRect(l*o,u,o,4)):(r.fillRect(u,l*o,4,o),a.fillRect(u,l*o,4,o))}r.fillStyle="rgba(0,0,0,.65)",a.fillStyle="#000",e.vertical?(r.fillRect(l*o,0,2,t),a.fillRect(l*o,0,2,t)):(r.fillRect(0,l*o,i,2),a.fillRect(0,l*o,i,2))}return yr(r,i,t,500,["#000","#fff"],2,.12),Ki(r,i,t,"#120a05",.5),[n,s]},tiles(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d"),o=e.n||8,l=i/o;r.fillStyle=e.grout||"#8a9490",r.fillRect(0,0,i,t),a.fillStyle="#000",a.fillRect(0,0,i,t);for(let c=0;c<o;c++)for(let h=0;h<o;h++){let u=.93+Ot()*.12,d=new Vt(e.color).multiplyScalar(u);r.fillStyle="#"+d.getHexString(),r.fillRect(h*l+1.5,c*l+1.5,l-3,l-3),a.fillStyle="#eee",a.fillRect(h*l+1.5,c*l+1.5,l-3,l-3)}return Ki(r,i,t,e.grime||"#101a18",.55),yr(r,i,t,300,["#000"],2,.1),[n,s]},marble(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d"),o=r.createImageData(i,t),l=new Vt(e.color),c=new Vt(e.vein);for(let u=0;u<t;u++)for(let d=0;d<i;d++){let p=d/i*4,g=u/t*4,M=tn(p*1.3,g*1.3,5)*4,m=Math.pow(Math.abs(Math.sin((p+M)*3.2)),14),f=m*.7+(tn(p*3,g*3,8)-.5)*.25,b=(u*i+d)*4,A=Math.min(1,Math.max(0,f));o.data[b]=(l.r+(c.r-l.r)*A)*255,o.data[b+1]=(l.g+(c.g-l.g)*A)*255,o.data[b+2]=(l.b+(c.b-l.b)*A)*255,o.data[b+3]=255}r.putImageData(o,0,0),a.fillStyle="#999",a.fillRect(0,0,i,t);let h=i/(e.n||4);r.strokeStyle="rgba(0,0,0,.35)",a.strokeStyle="#000",r.lineWidth=a.lineWidth=2;for(let u=0;u<=(e.n||4);u++)for(let d of[r,a])d.beginPath(),d.moveTo(u*h,0),d.lineTo(u*h,t),d.moveTo(0,u*h),d.lineTo(i,u*h),d.stroke();return[n,s]},carpet(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d"),o=r.createImageData(i,t),l=new Vt(e.color),c=a.createImageData(i,t);for(let h=0;h<t;h++)for(let u=0;u<i;u++){let d=Je(u*.55,h*.55,1)*.6+Je(u*.13,h*.13,3)*.4,p=.72+d*.5,g=(h*i+u)*4;o.data[g]=l.r*255*p,o.data[g+1]=l.g*255*p,o.data[g+2]=l.b*255*p,o.data[g+3]=255;let M=d*255;c.data[g]=c.data[g+1]=c.data[g+2]=M,c.data[g+3]=255}if(r.putImageData(o,0,0),a.putImageData(c,0,0),e.pattern==="tiles"){r.strokeStyle="rgba(0,0,0,.4)",r.lineWidth=2;for(let h=0;h<=4;h++)r.beginPath(),r.moveTo(h*i/4,0),r.lineTo(h*i/4,t),r.moveTo(0,h*t/4),r.lineTo(i,h*t/4),r.stroke()}return e.pattern==="runner"&&(r.fillStyle="rgba(230,180,34,.9)",r.fillRect(0,0,i,6),r.fillRect(0,t-6,i,6),r.fillStyle="rgba(0,0,0,.25)",r.fillRect(0,8,i,3),r.fillRect(0,t-11,i,3)),Ki(r,i,t,"#0c0806",.45),[n,s]},metal(i,t,e){let n=sn(i,t),s=sn(i,t),r=n.getContext("2d"),a=s.getContext("2d");r.fillStyle=e.color,r.fillRect(0,0,i,t),a.fillStyle="#888",a.fillRect(0,0,i,t);for(let o=0;o<t;o++){let l=(Ot()-.5)*40;r.fillStyle=l>0?`rgba(255,255,255,${l/260})`:`rgba(0,0,0,${-l/200})`,r.fillRect(0,o,i,1),a.fillStyle=`rgb(${128+l*2},${128+l*2},${128+l*2})`,a.fillRect(0,o,i,1)}return Ki(r,i,t,"#2a1a10",e.rust||.2),[n,s]},concrete(i,t,e){let[n,s]=jd.plaster(i,t,{color:e.color,grime:e.grime||"#0c0e0f",dirt:.9,cracks:e.cracks||6}),r=n.getContext("2d");r.strokeStyle="rgba(0,0,0,.3)",r.lineWidth=2;for(let a=0;a<=(e.n||4);a++)r.beginPath(),r.moveTo(a*i/(e.n||4),0),r.lineTo(a*i/(e.n||4),t),r.moveTo(0,a*t/(e.n||4)),r.lineTo(i,a*t/(e.n||4)),r.stroke();return[n,s]}};function $e(i){let t=JSON.stringify(i);if(Th.has(t))return Th.get(t);Ai(i.seed||9);let e=i.size||256,[n,s]=jd[i.type](e,e,i),r=i.rep||[1,1],a=new Ie({map:Qd(n,!0,r),normalMap:Qd(Px(s,i.normal||2.2),!1,r),normalScale:new rt(1,1),roughness:i.rough==null?.8:i.rough,metalness:i.metal||0,envMapIntensity:i.env==null?1:i.env});return i.color2&&(a.color=new Vt(i.color2)),Th.set(t,a),a}function wn(i,t,e,n=!0){let s=sn(i,t);e(s.getContext("2d"),i,t);let r=new li(s);return r.anisotropy=4,n&&(r.colorSpace=Qe),r}function Mr(i,t=4,e=128){return wn(t,e,n=>{let s=n.createLinearGradient(0,0,0,e);i.forEach(([r,a])=>s.addColorStop(r,a)),n.fillStyle=s,n.fillRect(0,0,t,e)})}function Zl(i,t,e=64){return wn(e,e,n=>{let s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,e,e)})}var ie=-8,wh=-340,Ah=[50,140,230],Lx=318,Qi=300,Ht=(i,t={})=>new Ie(Object.assign({color:Dt(i),roughness:.7,metalness:0},t)),he=(i,t={})=>Ht(i,Object.assign({metalness:.85,roughness:.38},t)),fi=(i,t=2)=>new Ie({color:Dt(i),emissive:Dt(i),emissiveIntensity:t,roughness:.5});function gn(i,t,e=0,n=0,s=0,r={}){let a=new kt(i,t);return a.position.set(e,n,s),a.castShadow=r.cast!==!1,a.receiveShadow=r.recv!==!1,r.rot&&a.rotation.set(r.rot[0],r.rot[1],r.rot[2]),a}var vt=(i,t,e,n,s,r,a,o)=>gn(new ve(i,t,e),n,s,r,a,o),be=(i,t,e,n,s,r,a,o,l=18)=>gn(new Ne(i,t,e,l),n,s,r,a,o);var _n=(i,t,e,n,s,r,a)=>{let o=new kt(new Mn(i,t),e);return o.position.set(n,s,r),a&&o.rotation.set(a[0],a[1],a[2]),o.receiveShadow=!0,o},Dx=(()=>{let i=null;return()=>i||(i=Zl("rgba(255,235,190,.95)","rgba(255,200,120,0)"))})();function Ri(i,t,e,n,s,r=.85){let a=new js(new ds({map:Dx(),color:Dt(i),transparent:!0,opacity:r,depthWrite:!1,blending:Jn}));return a.position.set(e,n,s),a.scale.set(t,t,1),a}var Nx=(()=>{let i=null;return()=>i||(i=Mr([[0,"rgba(0,0,0,1)"],[.08,"rgba(255,255,255,1)"],[1,"rgba(0,0,0,1)"]]))})();function Ux(i,t,e,n,s="#ffe2a8",r=.13){let a=new Ne(4,n,t-e,28,1,!0),o=new kt(a,new Ve({map:Nx(),color:Dt(s),transparent:!0,opacity:r,depthWrite:!1,blending:Jn,side:Sn}));return o.position.set(i,(t+e)/2,ie+26),o.renderOrder=2,o}var tf={wood:{leaf:"#6e4a2c",frame:"#2a1a0e",panel:.22,metalK:0,hand:"#e6b422"},metal:{leaf:"#3a5a50",frame:"#1c2a26",panel:.16,metalK:.7,hand:"#9aa6a2",rust:!0},office:{leaf:"#cfd6dc",frame:"#4a5565",panel:.06,metalK:.2,hand:"#8a929c",glass:!0},lab:{leaf:"#e6edf0",frame:"#6a7c84",panel:.05,metalK:.3,hand:"#aab4ba",port:!0},royal:{leaf:"#2c2230",frame:"#e6b422",panel:.3,metalK:.1,hand:"#f2cd5a",gold:!0}};function Fx(i,t){let e=tf[t]||tf.wood,n=new oe;n.position.set(Ah[i],0,ie);let s=he(e.frame,{metalness:e.metalK*.6,roughness:.55});n.add(vt(6,164,12,s,-35,82,5),vt(6,164,12,s,35,82,5),vt(76,7,12,s,0,160,5));let r=new oe;n.add(r),r.add(vt(64,156,70,Ht("#07080b",{roughness:1}),0,78,-36,{cast:!1}));let a=new Zn(16762478,0,220,2);a.position.set(0,120,-20),r.add(a);let o=new kt(new Mn(60,150),new Ve({map:Mr([[0,"rgba(255,190,110,0)"],[.5,"rgba(255,196,120,.55)"],[1,"rgba(255,170,90,.1)"]]),transparent:!0,opacity:0,depthWrite:!1,blending:Jn}));o.position.set(0,78,-30),r.add(o);let l=new oe;l.position.set(-32,0,2),n.add(l);let c=Ht(e.leaf,{metalness:e.metalK,roughness:e.metalK>.5?.5:.62,map:e.rust?$e({type:"metal",color:e.leaf,rust:.6,rep:[1,1],seed:3}).map:null}),h=vt(64,156,4.4,c,32,78,0);l.add(h);let u=Ht(e.leaf,{metalness:e.metalK,roughness:.6});u.color.multiplyScalar(.82),e.glass?l.add(vt(30,90,1,Ht("#8fb4d8",{roughness:.08,metalness:.1,transparent:!0,opacity:.45}),32,100,2.6),vt(50,56,1.2,u,32,36,2.6)):e.port?l.add(be(14,14,3,Ht("#9ab4be",{roughness:.1,metalness:.1,transparent:!0,opacity:.7}),32,106,2.8,{rot:[St/2,0,0]}),be(16.5,16.5,2,he("#7a8c92"),32,106,2.4,{rot:[St/2,0,0]})):l.add(vt(46,56,1.6,u,32,120,2.8),vt(46,62,1.6,u,32,52,2.8)),e.gold&&[[46,120,56],[46,52,62]].forEach(([_,S,y])=>l.add(vt(_+4,1.4,1,he("#e6b422"),32,S+y/2,3.2),vt(_+4,1.4,1,he("#e6b422"),32,S-y/2,3.2)));let d=be(1.8,1.8,12,he(e.hand,{roughness:.25}),54,80,5,{rot:[0,0,St/2]});l.add(d,be(3.4,3.4,2,he(e.hand,{roughness:.25}),54,80,2.8,{rot:[St/2,0,0]}));let p=wn(64,32,(_,S,y)=>{_.fillStyle="#1a1208",_.fillRect(0,0,S,y),_.fillStyle="#ffd36b",_.font="700 24px system-ui,sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText(String(i+1),S/2,y/2+1)});l.add(_n(20,10,new Ie({map:p,roughness:.4,metalness:.3}),32,142,2.7));let g=new oe;g.position.set(32,82,4.6);let M=he("#e6b422",{roughness:.22});g.add(vt(14,11,4,M,0,-3,0),gn(new ln(4.6,1.4,8,18,St),M,0,2,0)),l.add(g),g.visible=!1;let m=new kt(new Mn(88,100),new Ve({map:Mr([[0,"rgba(255,200,120,.65)"],[1,"rgba(255,200,120,0)"]]),transparent:!0,opacity:0,depthWrite:!1,blending:Jn}));m.rotation.x=-St/2,m.position.set(0,.4,44),n.add(m);let f=new js(new ds({transparent:!0,depthWrite:!1}));f.position.set(0,186,8),f.scale.set(22,22,1),f.visible=!1,n.add(f);let b=0,A="";return{group:n,update(_,S,y){let T=S?S.classList:null,x=T&&(T.contains("done")||T.contains("open")),w=T&&T.contains("locked")&&!T.contains("done");b+=((x?1:0)-b)*Math.min(1,_*6),l.rotation.y=b*1.55,a.intensity=b*3500*y,o.material.opacity=b*.9,m.material.opacity=b*.75,g.visible=!!w&&b<.1,n.visible=!!S&&S.style.display!=="none";let C=S&&(S.querySelector(".ric")||{}).textContent||"";if(C!==A&&(A=C,f.visible=!!C,C)){let I=wn(64,64,F=>{F.font='46px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',F.textAlign="center",F.textBaseline="middle",F.fillText(C,32,36)});f.material.map=I,f.material.needsUpdate=!0}}}}function Ox(i){let t=new oe;t.position.set(Lx,0,ie);let e=he(i,{roughness:.45}),n=Ht("#6a7480",{metalness:.55,roughness:.5});t.add(vt(7,184,14,e,-39,92,6),vt(7,184,14,e,39,92,6),vt(85,16,14,e,0,178,6));let s=vt(70,156,50,Ht("#15171c",{roughness:.9}),0,78,-26,{cast:!1});t.add(s);let r=new Zn(16769704,0,160,2);r.position.set(0,130,-6),t.add(r);let a=new kt(new Mn(62,150),new Ve({map:Mr([[0,"rgba(255,225,170,.0)"],[.45,"rgba(255,225,170,.7)"],[1,"rgba(255,200,140,.15)"]]),transparent:!0,opacity:0,depthWrite:!1,blending:Jn}));a.position.set(0,78,-2),t.add(a);let o=vt(33,158,3.2,n,-16.5,78,2),l=vt(33,158,3.2,n,16.5,78,2);t.add(o,l),t.add(vt(1.6,150,3.6,Ht("#0a0b0e"),0,78,2.2,{cast:!1})),[o,l].forEach((T,x)=>T.add(vt(30,1.2,1,Ht("#fff",{transparent:!0,opacity:.08}),0,30,1.7,{cast:!1})));let c=wn(128,56,()=>{}),h=new Ve({map:c}),u=new kt(new Mn(52,22),h);u.position.set(0,166,13.2),t.add(u),t.add(vt(58,28,3,Ht("#0b0d11",{roughness:.4}),0,166,12.4));let d=new kt(new Se(3.4,14,10),fi("#d9534f",3));d.position.set(0,190,12),t.add(d);let p=Ri("#d9534f",30,0,190,14,.6);t.add(p);let g=be(3,3,2,he("#8a929c"),46,90,8,{rot:[St/2,0,0]});t.add(g,be(1.8,1.8,2.2,fi("#7dff9a",2),46,90,9.2,{rot:[St/2,0,0]}));let M=new kt(new Mn(64,150),new Ve({map:wn(128,256,(T,x,w)=>{T.strokeStyle="#06070a",T.lineWidth=3,T.lineCap="round",T.beginPath(),T.moveTo(26,40),T.lineTo(60,110),T.lineTo(36,150),T.lineTo(78,230),T.moveTo(100,90),T.lineTo(76,130),T.lineTo(96,170),T.stroke()}),transparent:!0}));M.position.set(0,78,3.9),t.add(M);let m=new Float32Array(180),f=[];for(let T=0;T<60;T++)f.push([0,0,0,0]);let b=new ki(new De().setAttribute("position",new qe(m,3)),new bi({color:16765803,size:2.2,transparent:!0,depthWrite:!1,blending:Jn}));b.frustumCulled=!1,t.add(b);let A=0,_="",S=0,y=(T,x)=>{let w=c.image.getContext("2d");w.fillStyle="#05060a",w.fillRect(0,0,128,56),w.fillStyle=x?"#7dff9a":"#ff6a4a",w.font="700 40px monospace",w.textAlign="center",w.textBaseline="middle",w.fillText(T,64,30),x&&(w.beginPath(),w.moveTo(14,38),w.lineTo(22,22),w.lineTo(30,38),w.fill()),c.needsUpdate=!0};return{group:t,update(T,x,w){let C=w?w.classList:null,I=!!C&&C.contains("ok"),F=!!C&&C.contains("open");t.visible=!!w&&w.style.display!=="none",A+=((F?1:0)-A)*Math.min(1,T*5),o.position.x=-16.5-A*30,l.position.x=16.5+A*30,r.intensity=A*4e3,a.material.opacity=A;let z=w&&(w.querySelector(".lnum")||{}).textContent||"--";if(z+I!==_&&(_=z+I,y(z,I)),d.material.emissive.set(I?"#5cb85c":"#d9534f"),d.material.color.set(I?"#5cb85c":"#d9534f"),p.material.color.set(I?"#5cb85c":"#d9534f"),M.visible=!I,S+=T,d.material.emissiveIntensity=I||Math.sin(S*9)>.3?3:.4,!I){let L=b.geometry.attributes.position;for(let O=0;O<60;O++){let G=f[O];if(G[3]<=0)if(Ot()<T*3)G[0]=(Ot()-.5)*14+4,G[1]=98+Ot()*20,G[2]=(Ot()-.3)*40,G[3]=.5+Ot()*.5;else{L.setXYZ(O,0,-999,0);continue}else G[3]-=T,G[1]-=T*55,G[0]+=G[2]*T;L.setXYZ(O,G[0],G[1],5)}L.needsUpdate=!0}b.visible=!I}}}function ti(i,t=16769704,e=1,n="tube"){let s=new oe;s.position.set(i,Qi,ie+26);let r=new Zn(t,15e3*e,420,2);return r.position.set(0,-20,20),s.add(r),n==="tube"?(s.add(vt(46,5,12,he("#30343c",{roughness:.5}),0,-2,0),vt(40,3,8,fi("#fff1c8",3),0,-5.5,0)),s.add(Ri("#ffe9b0",70,0,-8,10))):n==="bulb"?s.add(be(.8,.8,20,he("#222"),0,10,0),gn(new Se(6,16,12),fi("#ffe9b0",3),0,-6,0,{cast:!1}),Ri("#ffe9b0",60,0,-6,4)):n==="panel"&&s.add(vt(60,3,30,fi("#e8f2ff",2.2),0,-2,0,{cast:!1}),Ri("#dcecff",80,0,-6,12,.5)),{g:s,pl:r,base:15e3*e}}function Bx(i,t,e,n,s,r,a){let o=new Float32Array(i*3),l=[];for(let h=0;h<i;h++)o[h*3]=t+Ot()*(e-t),o[h*3+1]=n+Ot()*(s-n),o[h*3+2]=r+Ot()*(a-r),l.push(Ot()*6.28);let c=new ki(new De().setAttribute("position",new qe(o,3)),new bi({map:Zl("rgba(255,240,210,.9)","rgba(255,240,210,0)",32),color:16773328,size:2.2,transparent:!0,opacity:.55,depthWrite:!1,blending:Jn}));return c.frustumCulled=!1,c.userData={ph:l,y0:n,y1:s},c}function Sr(i){let t=new oe,e=i.rep||64,n=_n(1300,i.wallH||Qi,i.wallMat(1300/e,(i.wallH||Qi)/e),180,(i.wallH||Qi)/2+(i.wallY||0),ie);t.add(n);let s=_n(1300,700,i.ceilMat,180,Qi,340,[St/2,0,0]);t.add(s);let r=_n(1300,700,i.floorMat,180,0,340,[-St/2,0,0]);return t.add(r),t.add(vt(1300,15,3.2,i.baseMat,180,7.5,ie+1.6),vt(1300,6,4,i.trimMat||i.baseMat,180,Qi-3,ie+2)),t}var br=i=>(t,e)=>$e(Object.assign({},i,{rep:[t,e]})),zx={z0(){let i=Sr({rep:128,wallMat:br({type:"bricks",colors:["#53656c","#48595f","#5d7078","#3d4c52"],mortar:"#14181b",size:256,rough:.92,normal:3}),ceilMat:$e({type:"concrete",color:"#2a3236",rep:[10,5],size:256,rough:.95}),floorMat:$e({type:"concrete",color:"#3b454a",rep:[10,6],size:256,rough:.42,normal:1.6,n:4}),baseMat:Ht("#1a2024",{roughness:.8})}),t=he("#7a4a30",{roughness:.62,metalness:.75}),e=be(7,7,1300,t,180,278,ie+14,{},20);e.rotation.z=St/2,i.add(e);let n=be(5,5,1300,he("#566a70"),180,262,ie+10);n.rotation.z=St/2,i.add(n);for(let a=0;a<9;a++){let o=be(9.4,9.4,4,he("#3a4448"),-40+a*150,278,ie+14);o.rotation.z=St/2,i.add(o)}i.add(be(5,5,160,t,190,200,ie+8),be(8,8,6,he("#3a4448"),190,140,ie+8));let s=new oe;s.position.set(190,150,ie+18),s.add(gn(new ln(11,1.8,8,24),he("#b8532e",{roughness:.5}),0,0,0));for(let a=0;a<3;a++){let o=be(.9,.9,22,he("#b8532e"),0,0,0);o.rotation.z=a*St/3,s.add(o)}i.add(s),[[120,70,34,11],[270,100,46,14],[30,60,24,8]].forEach(([a,o,l,c])=>{let h=new kt(new sr(1,28),new Ie({color:727584,roughness:.03,metalness:.1,envMapIntensity:1.6,transparent:!0,opacity:.9}));h.rotation.x=-St/2,h.scale.set(l,c,1),h.position.set(a,.35,o),h.receiveShadow=!0,i.add(h)}),[60,150,300].forEach(a=>{let o=new kt(new Mn(14,110),new Ve({map:Mr([[0,"rgba(120,60,20,.55)"],[1,"rgba(120,60,20,0)"]]),transparent:!0,depthWrite:!1}));o.position.set(a,215,ie+.3),i.add(o)}),i.add(be(11,11,30,he("#5a6a3a",{roughness:.7}),-4,15,30,{},20),vt(24,22,24,Ht("#6b5236",{roughness:.85}),352,11,40));let r=[ti(95,16769704,1,"tube"),ti(275,16769704,1,"tube")];return{g:i,lamps:r,doorStyle:"metal",liftTint:"#2c3a3e",dust:.6,fog:[791575,.0016],ambient:.7}},z1(){let i=Sr({rep:64,wallH:Qi-92,wallY:92,wallMat:br({type:"wallpaper",color:"#6e4a34",size:256,rough:.9,normal:1.4}),ceilMat:$e({type:"plaster",color:"#8a7058",rep:[8,4],size:128,rough:.95}),floorMat:$e({type:"planks",color:"#4a2f1e",rep:[8,6],size:256,rough:.5,normal:2,count:8}),baseMat:Ht("#2b1a10",{roughness:.6}),trimMat:Ht("#9a7a4e",{roughness:.5})}),t=$e({type:"planks",color:"#5a3a22",vertical:!0,count:10,rep:[1300/90,1],size:256,rough:.55,normal:2.4});i.add(_n(1300,92,t,180,46,ie+.2),vt(1300,6,5,Ht("#a07a48",{roughness:.45}),180,92,ie+2.4)),i.add(_n(1300,74,$e({type:"carpet",color:"#7a1e2a",pattern:"runner",rep:[30,1],size:128,rough:1,normal:2.5}),180,.5,56,[-St/2,0,0])),Ah.forEach(n=>i.add(vt(52,1.6,24,Ht("#3a2a1c",{roughness:1}),n,.8,14))),[[140,220],[230,214],[50,218]].forEach(([n,s],r)=>{let a=new oe;a.position.set(n,s,ie+2);let o=he("#c9a24a",{roughness:.35});a.add(vt(46,4,3,o,0,19,0),vt(46,4,3,o,0,-19,0),vt(4,42,3,o,-21,0,0),vt(4,42,3,o,21,0,0));let l=wn(128,96,(c,h,u)=>{let d=c.createLinearGradient(0,0,0,u);d.addColorStop(0,r%2?"#e9c88a":"#7fa9c9"),d.addColorStop(1,r%2?"#b46a5a":"#c6d8c0"),c.fillStyle=d,c.fillRect(0,0,h,u),c.fillStyle=r%2?"#6a3a3a":"#4a6b3a",c.beginPath(),c.moveTo(0,u),c.lineTo(h*.3,u*.45),c.lineTo(h*.55,u*.72),c.lineTo(h*.8,u*.36),c.lineTo(h,u),c.fill(),c.fillStyle="#ffe9a8",c.beginPath(),c.arc(h*.7,u*.25,11,0,7),c.fill()});a.add(_n(38,34,new Ie({map:l,roughness:.5}),0,0,1)),i.add(a)}),[95,185,275].forEach(n=>{let s=new oe;s.position.set(n,168,ie+3),s.add(vt(8,14,4,he("#c9a24a"),0,0,0),gn(new on(7,12,14,1,!0),fi("#ffd99a",1.4),0,12,4,{cast:!1}),Ri("#ffd99a",40,0,12,10,.6)),i.add(s)}),i.add(be(8,6,14,Ht("#7a4a2a"),-2,7,24),gn(new Se(13,14,10),Ht("#2f6a34",{roughness:.8}),-2,26,24),gn(new Se(9,12,8),Ht("#3b8040",{roughness:.8}),6,34,26));let e=[ti(95,16767386,.9,"bulb"),ti(275,16767386,.9,"bulb")];return{g:i,lamps:e,doorStyle:"wood",liftTint:"#3a2a1c",dust:.8,fog:[1708042,.0012],ambient:.8}},z2(){let i=Sr({rep:64,wallMat:br({type:"plaster",color:"#59667f",size:256,rough:.85,normal:1.2,dirt:.4}),ceilMat:$e({type:"tiles",color:"#b8c0cc",n:8,rep:[12,6],size:256,rough:.9,grout:"#6a7280",normal:1.4}),floorMat:$e({type:"carpet",color:"#2e3a52",pattern:"tiles",rep:[16,10],size:128,rough:.98,normal:2.2}),baseMat:Ht("#1a2130",{roughness:.6}),trimMat:Ht("#7080a0",{roughness:.4})}),t=new Ie({color:10274047,roughness:.04,metalness:.1,transparent:!0,opacity:.12,envMapIntensity:1.6,side:Sn});for(let r=-3;r<9;r++)i.add(_n(86,230,t,r*90+45,160,ie+6)),i.add(vt(4,240,5,he("#6a7a98",{roughness:.4}),r*90,150,ie+6));i.add(vt(1300,4,5,he("#6a7a98"),180,270,ie+6),vt(1300,4,5,he("#6a7a98"),180,40,ie+6)),i.add(gn(new Ne(15,15,4,28),Ht("#e8ecf5",{roughness:.4}),185,215,ie+4,{rot:[St/2,0,0]}));let e=wn(128,128,(r,a,o)=>{r.fillStyle="#10141c",r.fillRect(0,0,a,o),r.strokeStyle="#e8ecf5",r.lineWidth=5,r.beginPath(),r.moveTo(64,64),r.lineTo(64,24),r.moveTo(64,64),r.lineTo(92,78),r.stroke()}),n=new kt(new sr(13,28),new Ie({map:e,roughness:.5}));n.position.set(185,215,ie+6.2),i.add(n),i.add(be(8,6,14,Ht("#8a6a42"),96,7,20),gn(new Se(13,14,10),Ht("#3f8a4a",{roughness:.8}),96,28,20),gn(new Se(9,12,8),Ht("#4aa05a",{roughness:.8}),103,36,22)),i.add(be(10,10,46,Ht("#cfd8e4",{roughness:.4}),358,23,36),be(9,9,18,Ht("#8fb4d8",{roughness:.1,transparent:!0,opacity:.7}),358,55,36));let s=[ti(95,15266559,1,"panel"),ti(275,15266559,1,"panel")];return{g:i,lamps:s,doorStyle:"office",liftTint:"#4a5565",dust:.5,fog:[1053983,.001],ambient:1}},z3(){let i=Sr({rep:64,wallMat:br({type:"tiles",color:"#cfe6e0",grout:"#6b8a84",n:4,size:256,rough:.3,normal:1.8,grime:"#0e1c1a"}),ceilMat:$e({type:"concrete",color:"#2a3836",rep:[10,5],size:128,rough:.9}),floorMat:$e({type:"concrete",color:"#2c3a38",rep:[10,6],size:256,rough:.16,normal:1.2,n:4,cracks:2}),baseMat:Ht("#d9ad1f",{roughness:.5}),trimMat:Ht("#1c2a28",{roughness:.6})}),t=wn(64,64,(a,o,l)=>{for(let c=-8;c<12;c++)a.fillStyle=c%2?"#15171c":"#d9ad1f",a.beginPath(),a.moveTo(c*16,0),a.lineTo(c*16+16,0),a.lineTo(c*16+16+64,l),a.lineTo(c*16+64,l),a.fill()});t.wrapS=t.wrapT=ai,t.repeat.set(1300/20,1),i.add(_n(1300,15,new Ie({map:t,roughness:.6}),180,7.5,ie+3.3));let e=[95,185].map(a=>{let o=new oe;o.position.set(a,0,ie+8),o.add(be(8,8,190,new Ie({color:12451824,roughness:.04,metalness:.1,transparent:!0,opacity:.16,envMapIntensity:1.8}),0,110,0,{cast:!1}),be(6.4,6.4,120,fi("#58ffb0",1.8),0,78,0,{cast:!1}),be(9.4,9.4,8,he("#34413f"),0,14,0),be(9.4,9.4,8,he("#34413f"),0,206,0),Ri("#58ffb0",70,0,120,12,.55));let l=new Float32Array(30),c=[];for(let u=0;u<10;u++)c.push([Ot()*6.28,Ot()*90]);let h=new ki(new De().setAttribute("position",new qe(l,3)),new bi({color:13631470,size:3,transparent:!0,opacity:.8,depthWrite:!1}));return h.frustumCulled=!1,h.userData.bs=c,o.add(h),i.add(o),h}),n=wn(128,128,(a,o,l)=>{a.fillStyle="#d9ad1f",a.beginPath(),a.moveTo(64,10),a.lineTo(120,112),a.lineTo(8,112),a.closePath(),a.fill(),a.fillStyle="#15171c",a.beginPath(),a.moveTo(64,28),a.lineTo(104,102),a.lineTo(24,102),a.closePath(),a.fill(),a.strokeStyle="#d9ad1f",a.lineWidth=7,a.beginPath(),a.arc(64,78,14,0,7),a.moveTo(64,78),a.lineTo(64,48),a.stroke()});i.add(_n(28,28,new Ie({map:n,roughness:.4,transparent:!0}),140,218,ie+.5));let s=wn(128,64,(a,o,l)=>{a.fillStyle="#04100c",a.fillRect(0,0,o,l),a.strokeStyle="#58ffb0",a.lineWidth=2.5,a.beginPath(),a.moveTo(4,36);for(let c=4;c<124;c+=6)a.lineTo(c,36+(c%24===4?-22:c%24===10?16:Math.sin(c)*2));a.stroke()});[[230,214],[50,214]].forEach(([a,o])=>i.add(vt(50,30,3,Ht("#10151a",{roughness:.4}),a,o,ie+2),_n(46,24,new Ve({map:s}),a,o,ie+3.6))),i.add(vt(1300,3,8,fi("#58ffb0",1.2),180,.6,ie+40,{cast:!1}));let r=[ti(95,13631470,1,"panel"),ti(275,13631470,1,"panel")];return{g:i,lamps:r,tubes:e,doorStyle:"lab",liftTint:"#4a5a5e",dust:.35,fog:[661012,.0012],ambient:1.05}},z4(){let i=Sr({rep:64,wallMat:br({type:"wallpaper",color:"#40314c",size:256,rough:.55,normal:1.6}),ceilMat:$e({type:"plaster",color:"#241a2c",rep:[8,4],size:128,rough:.8}),floorMat:$e({type:"marble",color:"#2c2630",vein:"#a89ab8",rep:[8,5],size:256,rough:.12,normal:.8,n:4}),baseMat:Ht("#e6b422",{metalness:.9,roughness:.3}),trimMat:Ht("#e6b422",{metalness:.9,roughness:.3})}),t=he("#e6b422",{roughness:.28});i.add(vt(1300,4,3,t,180,175,ie+1.5),_n(1300,10,Ht("#1c1422",{roughness:.8}),180,245,ie+.2)),[95,185,273].forEach(r=>{let a=new oe;a.position.set(r,0,ie+8),a.add(be(7,8,280,Ht("#d8cfe0",{roughness:.22,metalness:.1}),0,140,0,{},22),vt(22,8,22,t,0,4,0),vt(22,8,22,t,0,276,0),be(10,7,10,t,0,266,0)),i.add(a)}),i.add(_n(1300,74,$e({type:"carpet",color:"#6b1d27",pattern:"runner",rep:[30,1],size:128,rough:1,normal:2.5}),180,.6,56,[-St/2,0,0])),[[140,222,"#8a4ab0"],[230,222,"#2a6a8a"],[50,222,"#b04a4a"]].forEach(([r,a,o])=>{let l=new oe;l.position.set(r,a,ie+2),l.add(vt(50,5,3,t,0,23,0),vt(50,5,3,t,0,-23,0),vt(5,46,3,t,-23,0,0),vt(5,46,3,t,23,0,0));let c=wn(96,80,(h,u,d)=>{let p=h.createRadialGradient(u*.5,d*.45,4,u*.5,d*.5,u*.6);p.addColorStop(0,o),p.addColorStop(.6,"#2a2030"),p.addColorStop(1,"#0e0a12"),h.fillStyle=p,h.fillRect(0,0,u,d)});l.add(_n(42,36,new Ie({map:c,roughness:.5}),0,0,1)),i.add(l)});let e=new oe;e.position.set(185,232,ie+40),e.add(be(.8,.8,36,t,0,22,0),gn(new ln(26,1.6,8,32),t,0,0,0,{rot:[St/2,0,0]}),gn(new ln(15,1.2,8,28),t,0,8,0,{rot:[St/2,0,0]}));for(let r=0;r<10;r++){let a=r/10*St*2;e.add(be(1.4,1.4,6,Ht("#f2efe6"),Math.cos(a)*26,4,Math.sin(a)*26),gn(new Se(2.4,10,8),fi("#ffd88a",3.5),Math.cos(a)*26,9,Math.sin(a)*26,{cast:!1}),Ri("#ffd88a",22,Math.cos(a)*26,9,Math.sin(a)*26,.7))}e.add(Ri("#ffd88a",150,0,4,0,.35)),i.add(e);let n=[ti(95,16767114,1,"bulb"),ti(275,16767114,1,"bulb")],s=new Zn(16767114,22e3,500,2);return s.position.set(185,230,ie+50),i.add(s),{g:i,lamps:n,doorStyle:"royal",liftTint:"#3a2e18",dust:.7,fog:[1182744,.0012],ambient:.85}}};function kx(){let i=Sr({rep:64,wallMat:br({type:"planks",color:"#6e5238",vertical:!0,count:10,size:256,rough:.6,normal:2.2}),ceilMat:$e({type:"planks",color:"#3a2a1a",rep:[8,4],size:256,rough:.7,count:8}),floorMat:$e({type:"planks",color:"#5a3d26",rep:[8,6],size:256,rough:.45,normal:2.2,count:8}),baseMat:Ht("#2a1c10",{roughness:.6}),trimMat:Ht("#8a6a45",{roughness:.5})}),t=wn(128,160,(d,p,g)=>{let M=d.createLinearGradient(0,0,0,g);M.addColorStop(0,"#0a1230"),M.addColorStop(.75,"#2b3a66"),M.addColorStop(1,"#4a3a5a"),d.fillStyle=M,d.fillRect(0,0,p,g),d.fillStyle="#fff";for(let m=0;m<40;m++)d.globalAlpha=.4+Ot()*.6,d.fillRect(Ot()*p,Ot()*g*.6,1.4,1.4);d.globalAlpha=1,d.fillStyle="#fff4d0",d.beginPath(),d.arc(p*.72,g*.2,11,0,7),d.fill(),d.fillStyle="#2b3a66",d.beginPath(),d.arc(p*.72+5,g*.2-3,9,0,7),d.fill(),d.fillStyle="#080c18",d.beginPath(),d.moveTo(0,g);for(let m=0;m<=p;m+=12)d.lineTo(m,g-20-Ot()*46);d.lineTo(p,g),d.fill(),d.fillStyle="#ffd36b";for(let m=0;m<26;m++)d.fillRect(Ot()*p,g-8-Ot()*40,2.4,3)}),e=new oe;e.position.set(172,190,ie+2);let n=Ht("#2a1d12",{roughness:.6});e.add(vt(74,6,6,n,0,48,0),vt(74,6,6,n,0,-48,0),vt(6,96,6,n,-34,0,0),vt(6,96,6,n,34,0,0),vt(3,90,4,n,0,0,1),vt(68,3,4,n,0,4,1),_n(66,90,new Ve({map:t}),0,0,.5)),i.add(e);let s=new Zn(10467583,3500,260,2);s.position.set(172,190,ie+40),i.add(s),i.add(_n(240,70,$e({type:"carpet",color:"#6b3a2a",rep:[6,2],size:128,rough:1,normal:2.5}),170,.5,66,[-St/2,0,0]));let r=new oe;r.position.set(62,0,6);let a=Ht("#4a3320",{roughness:.6});r.add(vt(104,20,54,a,0,14,0),vt(10,66,54,a,-48,33,0),vt(98,14,50,Ht("#ddd6c8",{roughness:.95}),2,28,0),vt(76,8,52,Ht("#3f6aa5",{roughness:.9}),12,36,0),vt(26,10,36,Ht("#f2efe6",{roughness:.95}),-34,38,0),vt(10,14,54,a,48,18,0)),i.add(r);let o=new oe;o.position.set(169,0,8);let l=he("#aab4c0",{roughness:.35});o.add(vt(92,66,46,Ht("#6d7686",{roughness:.5,metalness:.3}),0,33,0),vt(96,5,50,l,0,68,0),vt(34,40,1.5,Ht("#3a4252"),-22,30,23.5),vt(34,40,1.5,Ht("#3a4252"),22,30,23.5)),[-22,22].forEach(d=>o.add(be(7,7,1.6,Ht("#15171c",{roughness:.4}),d,71,4,{},20),gn(new ln(5,.8,6,18),fi("#ff6a2a",2),d,72,4,{rot:[St/2,0,0],cast:!1}))),o.add(be(8,7,12,l,-22,77,4),vt(46,4,40,Ht("#2a2f3a"),-10,118,-2),vt(30,26,24,Ht("#2a2f3a"),-10,106,-2),Ri("#ff8a3d",40,-22,74,10,.5));let c=new ki(new De().setAttribute("position",new qe(new Float32Array(48),3)),new bi({map:Zl("rgba(255,255,255,.8)","rgba(255,255,255,0)",32),size:9,transparent:!0,opacity:.45,depthWrite:!1}));c.frustumCulled=!1,o.add(c),i.add(o);let h=new oe;h.position.set(261,0,8),h.add(vt(90,10,40,Ht("#8a6a45",{roughness:.6}),0,52,0),vt(8,52,36,Ht("#5a4328"),-40,26,0),vt(8,52,36,Ht("#5a4328"),40,26,0),vt(80,4,34,Ht("#5a4328"),0,22,0),vt(94,60,3,Ht("#3a2d1f",{roughness:.8}),0,100,-18)),h.add(vt(16,18,12,he("#3a4252"),26,66,2),vt(8,10,8,he("#6f7a8f"),26,78,2),gn(new ln(6,1.3,8,18),he("#e6b422"),-24,106,-15),vt(5,30,2,he("#cdd5df"),-4,100,-15),vt(5,22,2,he("#d9534f"),12,104,-15),be(7,7,3,he("#8a929c"),-2,60,6,{rot:[St/2,0,0]}),vt(26,5,6,he("#cdd5df"),-26,59,6)),i.add(h);let u=[ti(236,16767386,1.1,"bulb")];return{g:i,lamps:u,doorStyle:"wood",liftTint:"#3a2a1c",dust:.5,fog:[1314056,.0012],ambient:.9,steam:c,isBase:!0}}function ef(i){let t=i==="base"?kx():zx[i](),e=new oe;e.position.y=wh,e.add(t.g);let n=Ah.map((o,l)=>{let c=Fx(l,t.doorStyle);return e.add(c.group),c}),s=Ox(t.liftTint);e.add(s.group),t.lamps.forEach(o=>e.add(o.g)),t.lamps.forEach(o=>e.add(Ux(o.g.position.x,Qi-6,4,62,i==="z3"||i==="z2"?"#cfe6ff":"#ffe2a8",.12)));let r=Bx(Math.round(90*(t.dust||.6)),-20,380,20,280,0,60);e.add(r);let a=0;return{root:e,spec:t,update(o,l,c){a+=o,t.lamps.forEach((d,p)=>{let g=p===1&&i!=="z4"&&Math.sin(a*37)*Math.sin(a*11+2)>.78?.45:1;d.pl.intensity=d.base*g}),n.forEach((d,p)=>d.update(o,l[p],t.isBase?0:1)),n.forEach((d,p)=>{t.isBase&&(d.group.visible=!1)}),s.update(o,a,c);let h=r.geometry.attributes.position,u=r.userData.ph;for(let d=0;d<u.length;d++)h.setY(d,h.getY(d)+o*(2.5+Math.sin(u[d])*1.2)),h.setX(d,h.getX(d)+Math.sin(a*.4+u[d])*o*3),h.getY(d)>290&&h.setY(d,22);if(h.needsUpdate=!0,t.tubes&&t.tubes.forEach(d=>{let p=d.geometry.attributes.position,g=d.userData.bs;for(let M=0;M<g.length;M++)g[M][1]=(g[M][1]+o*24)%120,p.setXYZ(M,Math.sin(g[M][0]+a)*3,28+g[M][1],2);p.needsUpdate=!0}),t.steam){let d=t.steam.geometry.attributes.position;for(let p=0;p<16;p++){let g=(a*.6+p/16)%1;d.setXYZ(p,-22+Math.sin(g*9+p)*3,82+g*36,8)}d.needsUpdate=!0}},dispose(){e.traverse(o=>{o.geometry&&o.geometry.dispose()})}}}var Pa=class extends zi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ve;t.deleteAttribute("uv");let e=new Ie({side:cn}),n=new Ie,s=new Zn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new $r(t,n,6),o=new Oe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new kt(t,Er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new kt(t,Er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new kt(t,Er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new kt(t,Er(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new kt(t,Er(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new kt(t,Er(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Er(i){return new la({color:0,emissive:16777215,emissiveIntensity:i})}var Hx=[["root",null,[0,0,0]],["hips","root",[0,60,0]],["spine","hips",[0,70,0]],["chest","spine",[0,86,0]],["neck","chest",[0,103,0]],["head","neck",[0,112,1]],["uarmL","chest",[17,99.5,0]],["farmL","uarmL",[18,77,1]],["handL","farmL",[18.6,56.5,2]],["uarmR","chest",[-17,99.5,0]],["farmR","uarmR",[-18,77,1]],["handR","farmR",[-18.6,56.5,2]],["thighL","hips",[7.6,59,0]],["shinL","thighL",[7.7,32,1.5]],["footL","shinL",[7.7,6.5,.5]],["thighR","hips",[-7.6,59,0]],["shinR","thighR",[-7.7,32,1.5]],["footR","shinR",[-7.7,6.5,.5]]];function Gx(i,t){let e=Dt(i.skin),n=i.shirt?Dt(i.shirt):null,s=Dt(i.pants),r=Dt(i.shoes||"#1d1e22"),a=Dt("#4a0a0a"),o=Dt("#7a1010"),l=Dt("#6e2a26"),c=Dt(i.zombie?"#3d2b4a":"#b08870"),h=(m,f,b)=>{let A=0;for(let _ of t){let S=Math.hypot(m-_.x,f-_.y,b-_.z);S<_.r&&(A=Math.max(A,(1-S/_.r)*(.65+.7*Je(m*.4,f*.4,b*.4))))}return A},u=(m,f,b)=>{let A=Be(e,.8+.34*tn(m*.09,f*.09,b*.09));if(i.zombie&&A.lerp(Dt("#7d8a84"),.25),i.zombie){Math.abs(Je(m*.23,f*.23,b*.23)*2-1)<.07&&(A=Fn(A,c,.55));let S=tn(m*.05+9,f*.05,b*.05);S>.62&&(A=Fn(A,Dt("#3f4a2c"),(S-.62)*2.2))}return A},d=(m,f,b,A)=>{let _=Be(m,.7+.38*tn(f*.11,b*.11,A*.11));return i.torn&&tn(f*.08+3,b*.08,A*.08)>1-i.torn*.32?Fn(u(f,b,A),l,i.zombie?.45:.1):_},p=(m,f,b)=>{let A=1;return Math.abs(m)<3.4&&f>52&&f<62&&(A*=.58),Math.abs(m)>12&&Math.abs(m)<18&&f>88&&f<99&&Math.abs(b)<7&&(A*=.72),f>99&&f<107&&b>2&&(A*=.75),f>55&&f<60&&Math.abs(Math.abs(m)-8)<2.5&&(A*=.85),A},g=Dt("#7a7a74"),M=(m,f,b,A)=>{m=m.clone().multiplyScalar(p(f,b,A));let _=tn(f*.07+5,b*.07,A*.07),S=We(34,0,b);if(m.lerp(g,.22+(i.zombie?.12:0)),m.multiplyScalar(i.zombie?.8:.95),m.multiplyScalar(1-.42*We(.45,.8,_)-.35*S*(.5+_)),i.zombie){let T=tn(f*.12+20,b*.12,A*.12);T>.6&&m.lerp(Dt("#4a3350"),Ia((T-.6)*3,0,.5))}let y=h(f,b,A);return y>.3&&(m=Fn(m,y>.7?a:o,Ia((y-.3)*2.2,0,.95))),m};return{torso:(m,f,b)=>{let A;return f<63.5?A=d(s,m,f,b):n?A=d(n,m,f,b):A=u(m,f,b),f>62&&f<65.5&&(A=Dt(i.belt||"#26201a")),i.suit&&b>6&&f>78&&f<101&&(Math.abs(m)<(f-76)*.32&&(A=Dt("#e8ebf0")),Math.abs(m)<1.5&&f<99&&(A=Dt(i.tie||"#7a1f26"))),i.overalls&&f>63&&Math.abs(Math.abs(m)-6)<2&&f<100&&(A=Be(s,.9)),i.ribs&&b>4&&f>74&&f<96&&Math.sin(f*.9)>.35&&Math.abs(m)>3&&Math.abs(m)<12&&(A=Dt("#d8cfb8")),M(A,m,f,b)},arm:(m,f,b)=>{let A=i.sleeves==="none"||!n?200:i.sleeves==="short"?84:59,_=f>A?d(n,m,f,b):u(m,f,b);return M(_,m,f,b)},hand:(m,f,b)=>M(u(m,f,b),m,f,b),leg:(m,f,b)=>M(f>9?d(s,m,f,b):r.clone(),m,f,b),foot:(m,f,b)=>Be(r,f<1.6?.5:.9+.2*Je(m*.3,f*.3,b*.3)),neck:(m,f,b)=>M(u(m,f,b),m,f,b),stump:(m,f,b)=>M(f<46?l.clone():d(s,m,f,b),m,f,b),head:(m,f,b)=>{let A=u(m,f,b);for(let _ of[-1,1]){let S=Math.hypot(m-_*4.2,(f-124.6)*1.3,b-9.6);S<4.2&&(A=Fn(A,i.zombie?Dt("#1c1012"):Be(e,.78),(1-S/4.2)*(i.zombie?1:.6)))}if(b>7&&Math.abs(m)<4.6){let _=i.zombie?116:116.6,S=i.zombie?2.4:.7;Math.abs(f-_)<S&&(A=i.zombie?Dt("#2a0808"):Dt("#8a4a40"))}if(i.hair&&f>125-(b<0?9:0)&&b<7){let _=Je(m*.6,f*.6,b*.6);(!i.bald||_>.55)&&(A=Be(Dt(i.hair),.75+.4*_))}if(i.zombie)for(let _ of[-1,1])Math.abs(m-_*3.2)<1.1&&f<116&&f>104&&b>6&&(A=Fn(A,Dt("#4a0a0a"),.8));return i.mask==="surgical"&&b>3&&f>108&&f<121&&(A=Dt("#8fbcd0")),M(A,m,f,b)}}}function La(i,t=.55,e=.5){let n=i.attributes.position,s=i.attributes.normal;for(let r=0;r<n.count;r++){let a=n.getX(r),o=n.getY(r),l=n.getZ(r),c=t*((tn(a*e*.5,o*e,l*e*.5)-.5)*2+.5*Math.sin(o*1.1+a*.4+Je(a*.2,o*.2,l*.2)*5));n.setXYZ(r,a+s.getX(r)*c,o,l+s.getZ(r)*c)}return i.computeVertexNormals(),i}function Vx(i,t){let e=new vr,n=t.idx;Ai(i.seed||7);let s=[],r=Math.round((i.blood||0)*7);i.zombie&&s.push({x:0,y:108,z:9,r:9+4*(i.blood||0)});for(let _=0;_<r;_++)s.push({x:(Ot()-.5)*26,y:50+Ot()*50,z:6+Ot()*6,r:4+Ot()*7});for(let _=0;_<r;_++){let S=Ot()<.5?1:-1;s.push({x:S*(18+Ot()*2),y:46+Ot()*30,z:Ot()*4,r:3+Ot()*5})}let a=Gx(i,s),o=i.fat||0,l=i.thin||0,c=i.muscle||0,h=1-l*.22+c*.1,u=(_,S,y)=>[n[_],n[S],y],d=[[50,0],[51.5,7],[54,12.6],[58,14.4],[62,14.8],[66,13.8],[70,13],[75,12.8],[80,13.4],[86,14.6],[92,15.4],[97,15.6],[100,14.4],[102.5,10.6],[104,6],[104.6,0]].map(([_,S])=>[_,S*h]),p=As(d,26),g=p.attributes.position;for(let _=0;_<g.count;_++){let S=g.getX(_),y=g.getY(_),T=g.getZ(_);if(S*=1+.2*We(88,100,y)+c*.25*We(80,100,y),T*=.7+c*.06,o){let x=Math.exp(-Math.pow((y-72)/11,2));T>0&&(T*=1+o*1.5*x),S*=1+o*.45*x}g.setXYZ(_,S,y,T)}if(p.computeVertexNormals(),La(p,.5),e.add(p,(_,S)=>S<64?[n.hips,n.hips,0]:S<71?u("hips","spine",We(64,71,S)):S<81?[n.spine,n.spine,0]:S<88?u("spine","chest",We(81,88,S)):[n.chest,n.chest,0],a.torso),i.coat){let _=[[42,15.5],[50,15.6],[58,15.6],[64,15.2],[64.4,0]].map(([T,x])=>[T,x*h]),S=As(_,26);S.scale(1.06,1,.78),S.computeVertexNormals();let y=Dt(i.shirt);e.add(S,()=>[n.hips,n.hips,0],(T,x,w)=>{let C=Be(y,.75+.3*tn(T*.1,x*.1,w*.1));return w>9&&Math.abs(T)<1.2&&(C=Be(y,.6)),C})}[-1,1].forEach(_=>{let S=mn(9.5,4.6,6.4,16,10);S.rotateZ(-_*.35),S.translate(_*8.4,101.6,-.4),e.add(S,()=>[n.chest,n.chest,0],a.torso);let y=mn(6.4,6.6,6.6,16,12);y.translate(_*17,98.6,0),e.add(y,()=>[_>0?n.uarmL:n.uarmR,n.chest,.35],a.arm)});let M=en(ze(5.4*h,4.8*h,13),Nt(0,101,0),Nt(0,114,1.2));e.add(M,(_,S)=>S<104?u("neck","chest",1-We(101,104.5,S)):[n.neck,n.neck,0],a.neck);let m=i.headScale||1,f=mn(10.2*m,12.2*m,11.2*m,32,24),b=f.attributes.position;for(let _=0;_<b.count;_++){let S=b.getX(_),y=b.getY(_),T=b.getZ(_);y<-1&&(T+=(-1-y)*.14*(T>0?1:.2),S*=1-(-1-y)*.013),y>2&&y<6&&T>5&&(T+=.7),i.zombie&&y<-4&&y>-9&&T>6&&(T-=1.2),b.setXYZ(_,S,y+123-0+0,T+2)}f.translate(0,0,0),f.computeVertexNormals(),e.add(f,()=>[n.head,n.head,0],a.head);let A=new on(1.8*m,5*m,10);if(A.rotateX(St/2.3),A.translate(0,122.2,13.4*m),e.add(A,()=>[n.head,n.head,0],(_,S,y)=>Be(Dt(i.skin),i.zombie?.7:.92)),[-1,1].forEach(_=>{let S=mn(1.3,3.2,2.2,10,8);S.translate(_*10.2*m,123,1.6),e.add(S,()=>[n.head,n.head,0],()=>Be(Dt(i.skin),.85))}),i.hair&&!i.bald&&!(i.x||[]).some(_=>["cap","hood","helmet","hardhat","chefhat"].includes(_))){let _=new Se(1,28,16,0,St*2,0,St*.56);_.scale(10.9*m,12.8*m,11.9*m),_.rotateX(-.22),_.translate(0,123.4,0),e.add(_,()=>[n.head,n.head,0],(S,y,T)=>Be(Dt(i.hair),.7+.5*Je(S*.5,y*.5,T*.5)))}if([-1,1].forEach(_=>{let S=new ve(4.2,.9,1.1);S.rotateZ(_*.12),S.translate(_*4.2,128,12.2),e.add(S,()=>[n.head,n.head,0],()=>i.hair?Be(Dt(i.hair),.8):Be(Dt(i.skin),.55))}),i.zombie)for(let _=-2;_<=2;_++){let S=new ve(1.1,1.6,1);S.translate(_*1.5,117.4,12.4),e.add(S,()=>[n.head,n.head,0],()=>Dt("#cbbf9a"));let y=new ve(1,1.4,1);y.translate(_*1.5+.4,114.6,12.2),e.add(y,()=>[n.head,n.head,0],()=>Dt("#b8aa82"))}return[["L",1],["R",-1]].forEach(([_,S])=>{let y=(i.bigArm===_?1.7:1)*(1+c*.4+o*.2)*(1-l*.2),T=Nt(S*17,100,0),x=Nt(S*18,77,1),w=Nt(S*18.6,57,2),C=i.bigArm===_;e.add(en(La(C?ze(7.6,6.4,23.1):ze(5.8*y,4.6*y,23.1),.45),T,x),(G,V)=>V>95?u("uarm"+_,"chest",We(95,101,V)*.55):[n["uarm"+_],n["uarm"+_],0],a.arm),e.add(en(La(C?ze(6.6,9.8,20.2):ze(4.6*y,3.5*y,20.2),.4),x,w),(G,V)=>V>73?u("farm"+_,"uarm"+_,We(73,78.5,V)*.5):[n["farm"+_],n["farm"+_],0],a.arm);let I=n["hand"+_],F=C?1.9:y>1.3?1.5:1,z=mn(3*F,5.8*F,4.3*F,14,10);z.translate(S*18.7,51,2.6),e.add(z,()=>[I,I,0],a.hand);let L=i.zombie?9.6:7.6;[-1.9,-.65,.65,1.9].forEach((G,V)=>{let Q=en(ze(1.35*F,.95*F,L-Math.abs(V-1.5)*1.1,8,4),Nt(S*18.7,47.5,2.6+G*F),Nt(S*(18.7+(i.zombie?.8:0)),47.5-L+Math.abs(V-1.5),2.6+G*F+(i.zombie?1.5:.6)));e.add(Q,()=>[I,I,0],a.hand)});let O=en(ze(1.3*F,1*F,4.6,8,4),Nt(S*17.4,50.5,5.2),Nt(S*16.6,46.5,8));e.add(O,()=>[I,I,0],a.hand),i.zombie&&[-1.9,-.65,.65,1.9].forEach(G=>{let V=new on(.55,2,6);V.rotateX(St),V.translate(S*19.5,39.6,4.1+G),e.add(V,()=>[I,I,0],()=>Dt("#2b2420"))})}),[["L",1],["R",-1]].forEach(([_,S])=>{let y=(1+o*.18+c*.25)*(1-l*.22),T=Nt(S*7.6,60,0),x=Nt(S*7.7,32,1.5),w=Nt(S*7.7,7.5,.5);if(i.legless){let L=en(ze(7.4*y,6.6*y,16),T,Nt(S*7.7,44,1));e.add(L,(O,G)=>G>55?u("thigh"+_,"hips",We(55,61,G)*.6):[n["thigh"+_],n["thigh"+_],0],a.stump);return}e.add(en(La(ze(7.4*y,5.6*y,28),.55),T,x),(L,O)=>O>55?u("thigh"+_,"hips",We(55,61,O)*.6):[n["thigh"+_],n["thigh"+_],0],a.leg),e.add(en(La(ze(5.6*y,3.9*y,24.5),.5),x,w),(L,O)=>O>28.5?u("shin"+_,"thigh"+_,We(28.5,34,O)*.5):[n["shin"+_],n["shin"+_],0],a.leg);let C=n["foot"+_],I=mn(5.1,4.2,9.6,18,12);I.translate(S*7.7,4.4,4.6);let F=ze(5.3*y,5.1*y,13,16,4);F.translate(S*7.7,15,.8),e.add(F,()=>[n["shin"+_],n["foot"+_],.5],a.foot),e.add(I,()=>[C,C,0],a.foot);let z=new ve(9,1.6,17.4);z.translate(S*7.7,.8,4.4),e.add(z,()=>[C,C,0],a.foot)}),e.build()}function ji(i,t,e,n){let s=i.world[t];return e.position.sub(s),n&&e.position.add(n),i.byName[t].add(e),e.castShadow=!0,e}function nf(i){let t=new oe,e=fe("#cdd5df",{metalness:.9,roughness:.28}),n=fe("#22262e",{metalness:.6,roughness:.4}),s=fe("#8a5a32",{roughness:.7}),r=fe("#2b241e",{roughness:.9}),a=(o,l,c,h,u,d=0,p=0)=>{let g=new kt(o,l);return g.position.set(c,h,u),g.rotation.set(d,0,p),g.castShadow=!0,t.add(g),g};if(i===1&&(a(new Ne(2.2,2.2,52,14),fe("#7d8794",{metalness:.85,roughness:.45}),0,22,0),a(new Ne(3.2,3.2,6,14),n,0,48,0),a(new Ne(2.6,2.6,10,12),r,0,0,0)),i===2){a(new Ne(3.8,2,52,14),s,0,24,0),a(new Ne(2.3,2.3,10,12),r,0,-2,0);for(let o=0;o<8;o++){let l=o*2.1;a(new on(.6,6,6),e,Math.cos(l)*4.2,30+o*3,Math.sin(l)*4.2,Math.sin(l)*St/2,-Math.cos(l)*St/2)}}if(i===3){a(new Ne(1.8,1.8,14,12),r,0,2,0),a(new ve(10,2,4),n,0,9.5,0);let o=new ms;o.moveTo(-3,0),o.lineTo(3,0),o.lineTo(5.4,40),o.quadraticCurveTo(4,48,-2.4,46),o.lineTo(-3,0);let l=new or(o,{depth:1,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelSegments:1});l.translate(0,10,-.5),a(l,e,0,0,0)}if(i===4){a(new Ne(2.6,2.6,46,14),fe("#1b1e24",{roughness:.5}),0,22,0),a(new Ne(3.2,3.2,12,14),r,0,0,0),a(new Se(3.6,14,10),di("#ffd84a",3),0,46,0);for(let o=0;o<3;o++)a(new ln(2.9,.45,6,14),di("#ffe34d",2),0,30+o*5,0,St/2)}if(i===5&&(a(new Ne(2.2,2.2,12,12),r,0,0,0),a(new ve(8,10,6),fe("#4b5668",{metalness:.7,roughness:.35}),0,10,0),a(new ve(2.4,44,3.6),di("#7ff0ff",4),0,37,0),a(new ve(5,46,6),new Ve({color:Dt("#59e1ff"),transparent:!0,opacity:.22,depthWrite:!1}),0,37,0)),i===6){a(new Ne(1.9,1.9,13,12),r,0,0,0),a(new ve(14,3,5),fe("#6c4fa8",{metalness:.8,roughness:.3}),0,8,0);let o=new ms;o.moveTo(-2.4,0),o.lineTo(2.4,0),o.lineTo(1.2,54),o.lineTo(0,62),o.lineTo(-1.2,54),o.lineTo(-2.4,0);let l=new or(o,{depth:1.2,bevelEnabled:!1});l.translate(0,9.5,-.6),a(l,di("#d6baff",3.5),0,0,0),a(new ve(6,58,5),new Ve({color:Dt("#a66bff"),transparent:!0,opacity:.22,depthWrite:!1}),0,38,0)}return t}function Wx(i,t,e){let n=(o,l,c,h)=>{let u=new kt(l,c);return u.position.copy(h),e.push(c),ji(t,o,u)},s=i.headScale||1;[-1,1].forEach(o=>{if(i.zombie){let l=new kt(new Se(1.45*s,14,10),di(i.eye||"#c9bf7a",i.eyeGlow?i.eyeGlow*.6:.55));l.position.set(o*4.2*s,124.6,11*s+1),ji(t,"head",l)}else{let l=new kt(new Se(1.9,14,10),fe("#f2efe8",{roughness:.25}));l.position.set(o*4.2,124.6,12),ji(t,"head",l);let c=new kt(new Se(1.05,10,8),fe("#3a2a1c",{roughness:.2}));c.position.set(o*4.2,124.6,13.7),ji(t,"head",c)}});let r=new Set(i.x||[]),a=o=>fe(o,{roughness:.85});if(r.has("cap")&&(n("head",new Se(12.2,24,12,0,St*2,0,St/2),a(i.hat||"#2c364b"),Nt(0,126,1.6)),n("head",new Ne(7.6,7.6,1.1,20,1,!1,-St/2,St),a(i.hat||"#2c364b"),Nt(0,126.4,8)).scale.set(1,1,1.25)),r.has("hardhat")){let o=fe(i.hat||"#e6b422",{roughness:.35});n("head",new Se(12.8,24,12,0,St*2,0,St/2),o,Nt(0,126.5,1.6)),n("head",new Ne(15,15,1.2,24),o,Nt(0,126.6,2.6))}if(r.has("helmet")){let o=fe("#1d222b",{roughness:.4,metalness:.3});n("head",new Se(13.6,24,14,0,St*2,0,St*.6),o,Nt(0,124.5,1.2));let l=n("head",new Se(14.2,24,10,-St*.35,St*.7,St*.32,St*.26),new Ie({color:Dt("#0d1622"),transparent:!0,opacity:.62,roughness:.08,metalness:.5}),Nt(0,123.5,1.6));l.rotation.y=0}if(r.has("chefhat")){let o=fe("#f2f2ee",{roughness:.9});n("head",new Ne(10.5,10.2,8,20),o,Nt(0,132,1)),n("head",new Se(11.5,20,12),o,Nt(0,139,1)).scale.set(1,.6,1)}if(r.has("hood")){let o=n("head",new Se(14.4,24,16,0,St*2,0,St*.68),a(i.shirt||"#2d2a33"),Nt(0,123.6,-.8));o.rotation.x=-.38,o.material.side=Sn}if(r.has("gasmask")){let o=fe("#2a2e33",{roughness:.55});n("head",mn(7.6,7,4.8,20,14),o,Nt(0,118.6,10.6)),[-1,1].forEach(l=>{n("head",new Ne(2.6,2.6,4.2,14),fe("#5a6068",{metalness:.6,roughness:.4}),Nt(l*5.2,115.4,13.4)).rotation.set(St/2.4,0,l*.5),n("head",new Ne(2.4,2.4,1,16),di("#9fffd8",1.4),Nt(l*4.2,124.6,12.7)).rotation.x=St/2})}if(r.has("glasses")){let o=fe("#1a1a1a",{metalness:.7,roughness:.3});[-1,1].forEach(l=>n("head",new ln(2.6,.35,6,16),o,Nt(l*4.2,124.6,13.6))),n("head",new ve(2.6,.5,.5),o,Nt(0,124.6,13.8))}if(r.has("tie")){let o=n("chest",new ve(2.6,16,.8),a(i.tie||"#7a1f26"),Nt(0,88,11.8));o.rotation.x=-.12}if(r.has("bowtie")){let o=a("#141414");[-1,1].forEach(l=>{let c=n("chest",new on(1.8,3.6,8),o,Nt(l*1.9,100.4,10.2));c.rotation.z=-l*St/2})}if(r.has("apron")){let o=n("spine",new ve(22,40,.9),a("#e9e6df"),Nt(0,66,12.2));o.rotation.x=.06}if(r.has("vest")||r.has("spikes")){let o=fe(i.vest||"#2b3138",{roughness:.55,metalness:.25}),l=As([[74,0],[74.2,15.6],[82,15.8],[92,16.8],[99,16.6],[99.4,0]],24);l.scale(1.18,1,.8),l.computeVertexNormals();let c=new kt(l,o);if(e.push(o),ji(t,"chest",c),r.has("spikes"))for(let h=0;h<10;h++){let u=-St*.6+h*St*.13,d=new kt(new on(1.4,6,8),fe("#c8ced6",{metalness:.9,roughness:.3}));d.position.set(Math.sin(u)*19.6,92-h%2*8,Math.cos(u)*13.6),d.lookAt(d.position.clone().add(Nt(Math.sin(u),0,Math.cos(u)))),d.rotateX(St/2),ji(t,"chest",d)}}if(r.has("backpack")){let o=fe("#3a3a30",{roughness:.85});n("chest",new ve(22,30,11),o,Nt(0,84,-15.5)),n("chest",new ve(22.6,7,11.6),fe("#4a4838",{roughness:.8}),Nt(0,96,-15.5)),n("chest",new ve(16,10,3),fe("#55402a",{roughness:.9}),Nt(0,78,-9.4))}if(r.has("scarf")&&(n("chest",new ln(7.6,2.8,10,24),a("#5a2a26"),Nt(0,102.5,0)).rotation.x=St/2),r.has("pads")&&[["L",1],["R",-1]].forEach(([o,l])=>n("uarm"+o,mn(7,5,7.4,16,10),fe(i.padCol||"#4a5260",{roughness:.45,metalness:.4}),Nt(l*18,100.5,0))),r.has("stripes")&&[-1,1].forEach(o=>n("chest",new ve(1.4,22,.6),di(i.stripe||"#59e1ff",2.2),Nt(o*6.5,88,11.6))),r.has("pustules")){let o=fe("#9fbf5a",{roughness:.18,emissive:Dt("#3a5a10"),emissiveIntensity:.4});Ai(i.seed+5);for(let l=0;l<9;l++){let c=["chest","spine","uarmL","uarmR"][l%4],h=t.world[c];n(c,new Se(1.6+Ot()*2.2,12,8),o,Nt(h.x+(Ot()-.5)*18,h.y-Ot()*14,9+Ot()*4))}}if(r.has("cleaver")){let o=new oe,l=new kt(new ve(1,11,14),fe("#c9d0d8",{metalness:.9,roughness:.3}));l.position.set(0,-6,6),o.add(l);let c=new kt(new Ne(1.4,1.4,9,10),fe("#2b241e",{roughness:.9}));c.rotation.x=St/2,c.position.set(0,0,-3),o.add(c),o.position.set(-18.7,47,5),ji(t,"handR",o)}r.has("scalpels")&&[["L",1],["R",-1]].forEach(([o,l])=>{let c=new kt(new ve(.6,1.6,9),fe("#dfe6ee",{metalness:.95,roughness:.2}));c.position.set(l*19,44,8),ji(t,"hand"+o,c)}),r.has("collarGold")&&(n("chest",new ln(7,1,8,24),fe("#e6b422",{metalness:1,roughness:.25}),Nt(0,102,0)).rotation.x=St/2)}function Xx(i,t){let e={},n=(c,h,u)=>{e[c]=nn(c,h,u,t)};if(i==="hero")return n("idle",3,{chest:Tt(3,12,c=>[.025*Math.sin(c),0,0]),head:Tt(3,12,c=>[.03*Math.sin(c+1),.08*Math.sin(c*.5),0]),uarmL:Tt(3,6,c=>[.06+.03*Math.sin(c),0,.1]),farmL:[[0,[-.25,0,0]],[3,[-.25,0,0]]],uarmR:Tt(3,6,c=>[-.42+.03*Math.sin(c+2),0,-.12]),farmR:[[0,[-.75,0,0]],[3,[-.75,0,0]]],handR:[[0,[.15,0,0]],[3,[.15,0,0]]],"hips.pos":Tt(3,12,c=>[0,.35*Math.sin(c),0])}),n("walk",.8,{thighL:Tt(.8,16,c=>[-.55*Math.sin(c),0,0]),thighR:Tt(.8,16,c=>[.55*Math.sin(c),0,0]),shinL:Tt(.8,16,c=>[.12+.85*Math.max(0,Math.sin(c+1.1)),0,0]),shinR:Tt(.8,16,c=>[.12+.85*Math.max(0,Math.sin(c+1.1+St)),0,0]),footL:Tt(.8,16,c=>[-.2*Math.sin(c),0,0]),footR:Tt(.8,16,c=>[.2*Math.sin(c),0,0]),uarmL:Tt(.8,16,c=>[.45*Math.sin(c),0,.08]),farmL:Tt(.8,16,c=>[-.3-.2*Math.max(0,Math.sin(c)),0,0]),uarmR:Tt(.8,16,c=>[-.45-.25*Math.sin(c),0,-.1]),farmR:[[0,[-.8,0,0]],[.8,[-.8,0,0]]],chest:Tt(.8,16,c=>[.05,.08*Math.sin(c),0]),head:Tt(.8,16,c=>[-.02,-.06*Math.sin(c),0]),"hips.pos":Tt(.8,16,c=>[0,-1.6+1.6*Math.abs(Math.cos(c)),0])}),e.attack=nn("attack",.55,{uarmR:[[0,[-.42,0,-.12]],[.16,[-2.9,.2,-.35]],[.3,[-.3,-.2,.15]],[.55,[-.42,0,-.12]]],farmR:[[0,[-.75,0,0]],[.16,[-1.3,0,0]],[.3,[-.15,0,0]],[.55,[-.75,0,0]]],chest:[[0,[0,0,0]],[.16,[-.1,.45,0]],[.3,[.28,-.4,0]],[.55,[0,0,0]]],spine:[[0,[0,0,0]],[.3,[.15,-.15,0]],[.55,[0,0,0]]],thighL:[[0,[0,0,0]],[.3,[-.5,0,0]],[.55,[0,0,0]]],shinL:[[0,[.1,0,0]],[.3,[.4,0,0]],[.55,[.1,0,0]]],uarmL:[[0,[.06,0,.1]],[.3,[.4,0,.4]],[.55,[.06,0,.1]]]},t),e.hit=nn("hit",.38,{chest:[[0,[0,0,0]],[.1,[-.35,0,.1]],[.38,[0,0,0]]],head:[[0,[0,0,0]],[.1,[-.35,0,0]],[.38,[0,0,0]]],uarmL:[[0,[.06,0,.1]],[.1,[-.4,0,.5]],[.38,[.06,0,.1]]],"hips.pos":[[0,[0,0,0]],[.1,[0,-1.5,-3]],[.38,[0,0,0]]]},t),e.death=nn("death",1.2,{hips:[[0,[0,0,0]],[.5,[-.3,0,.1]],[1.05,[-1.5,0,.1]],[1.2,[-1.45,0,.1]]],"hips.pos":[[0,[0,0,0]],[.5,[0,-14,-6]],[1.05,[0,-50,-36]],[1.2,[0,-51,-36]]],shinL:[[0,[0,0,0]],[.5,[1.3,0,0]],[1.2,[.5,0,0]]],shinR:[[0,[0,0,0]],[.5,[1.1,0,0]],[1.2,[.3,0,0]]],uarmL:[[0,[0,0,0]],[1.2,[-.4,0,1.2]]],uarmR:[[0,[0,0,0]],[1.2,[-.6,0,-1.3]]],head:[[0,[0,0,0]],[1.2,[.35,.4,0]]]},t),e;if(i==="crawler"){let c={hips:[1.35,0,0],thighL:[-.5,0,.15],thighR:[-.3,0,-.15],head:[-1.05,0,0],neck:[-.25,0,0]},h=(u,d=[0,0,0])=>[c[u][0]+d[0],c[u][1]+d[1],c[u][2]+d[2]];return n("idle",2.4,{hips:[[0,h("hips")],[2.4,h("hips")]],"hips.pos":Tt(2.4,8,u=>[0,-45+.5*Math.sin(u),8]),thighL:[[0,h("thighL")],[2.4,h("thighL")]],thighR:[[0,h("thighR")],[2.4,h("thighR")]],head:Tt(2.4,8,u=>h("head",[.08*Math.sin(u),.2*Math.sin(u*.5),0])),neck:[[0,h("neck")],[2.4,h("neck")]],uarmL:Tt(2.4,8,u=>[-2.55+.08*Math.sin(u),0,.35]),uarmR:Tt(2.4,8,u=>[-2.55+.08*Math.sin(u+1),0,-.35]),farmL:[[0,[-.5,0,0]],[2.4,[-.5,0,0]]],farmR:[[0,[-.5,0,0]],[2.4,[-.5,0,0]]]}),n("walk",1.3,{hips:Tt(1.3,12,u=>h("hips",[0,0,.08*Math.sin(u)])),"hips.pos":Tt(1.3,12,u=>[0,-45+.8*Math.abs(Math.sin(u)),8]),thighL:[[0,h("thighL")],[1.3,h("thighL")]],thighR:[[0,h("thighR")],[1.3,h("thighR")]],head:Tt(1.3,12,u=>h("head",[0,.1*Math.sin(u),0])),neck:[[0,h("neck")],[1.3,h("neck")]],chest:Tt(1.3,12,u=>[0,.18*Math.sin(u),0]),uarmL:Tt(1.3,12,u=>[-2.55+.45*Math.sin(u),0,.35]),uarmR:Tt(1.3,12,u=>[-2.55-.45*Math.sin(u),0,-.35]),farmL:Tt(1.3,12,u=>[-.4-.5*Math.max(0,Math.cos(u)),0,0]),farmR:Tt(1.3,12,u=>[-.4-.5*Math.max(0,-Math.cos(u)),0,0])}),e.attack=nn("attack",.7,{hips:[[0,h("hips")],[.3,h("hips",[-.25,0,0])],[.7,h("hips")]],"hips.pos":[[0,[0,-45,8]],[.3,[0,-40,22]],[.7,[0,-45,8]]],head:[[0,h("head")],[.3,h("head",[-.3,0,0])],[.7,h("head")]],uarmL:[[0,[-2.55,0,.35]],[.3,[-3,0,.2]],[.45,[-2,0,.3]],[.7,[-2.55,0,.35]]],uarmR:[[0,[-2.55,0,-.35]],[.3,[-3,0,-.2]],[.45,[-2,0,-.3]],[.7,[-2.55,0,-.35]]],thighL:[[0,h("thighL")],[.7,h("thighL")]],thighR:[[0,h("thighR")],[.7,h("thighR")]],neck:[[0,h("neck")],[.7,h("neck")]]},t),e.hit=nn("hit",.35,{hips:[[0,h("hips")],[.1,h("hips",[-.15,0,.15])],[.35,h("hips")]],"hips.pos":[[0,[0,-45,8]],[.1,[0,-43,3]],[.35,[0,-45,8]]],head:[[0,h("head")],[.1,h("head",[-.3,0,0])],[.35,h("head")]],thighL:[[0,h("thighL")],[.35,h("thighL")]],thighR:[[0,h("thighR")],[.35,h("thighR")]],uarmL:[[0,[-2.55,0,.35]],[.35,[-2.55,0,.35]]],uarmR:[[0,[-2.55,0,-.35]],[.35,[-2.55,0,-.35]]],neck:[[0,h("neck")],[.35,h("neck")]]},t),e.death=nn("death",1,{hips:[[0,h("hips")],[1,h("hips",[.15,0,.5])]],"hips.pos":[[0,[0,-45,8]],[1,[0,-48,8]]],head:[[0,h("head")],[1,[-.2,.6,0]]],uarmL:[[0,[-2.55,0,.35]],[1,[-1.6,0,.9]]],uarmR:[[0,[-2.55,0,-.35]],[1,[-1.9,0,-1]]],thighL:[[0,h("thighL")],[1,h("thighL")]],thighR:[[0,h("thighR")],[1,h("thighR")]],neck:[[0,h("neck")],[1,h("neck")]]},t),e}let s={zombie:1,thin:1.5,bloater:.7,brute:.8}[i]||1,r={zombie:.22,thin:.38,bloater:.1,brute:.42}[i]||.2,a=3.2/s,o={zombie:1.4,thin:.95,bloater:1.8,brute:1.6}[i]||1.4,l=i==="brute"?-.55:i==="bloater"?-.9:-1.2;return n("idle",a,{spine:Tt(a,12,c=>[r,0,.04*Math.sin(c)]),chest:Tt(a,12,c=>[.04*Math.sin(c*2)+(i==="brute"?.15:0),0,.07*Math.sin(c)]),head:Tt(a,12,c=>[.18+.06*Math.sin(c*2),.12*Math.sin(c),.25+.1*Math.sin(c+1)]),neck:[[0,[.2,0,0]],[a,[.2,0,0]]],uarmL:Tt(a,12,c=>[l+.09*Math.sin(c*2+(i==="thin"?3*Math.sin(c*5):0)),0,.18]),uarmR:Tt(a,12,c=>[l+.1+.1*Math.sin(c*2+1),0,-.14]),farmL:Tt(a,12,c=>[-.3-.1*Math.sin(c),0,0]),farmR:Tt(a,12,c=>[-.2-.1*Math.sin(c+2),0,0]),handL:[[0,[.45,0,0]],[a,[.45,0,0]]],handR:[[0,[.5,0,0]],[a,[.5,0,0]]],thighL:[[0,[-.05,0,.03]],[a,[-.05,0,.03]]],thighR:[[0,[.08,0,-.05]],[a,[.08,0,-.05]]],shinL:[[0,[.12,0,0]],[a,[.12,0,0]]],shinR:[[0,[.2,0,0]],[a,[.2,0,0]]],"hips.pos":Tt(a,12,c=>[.6*Math.sin(c),-1.5+.5*Math.sin(c*2),0])}),n("walk",o,{thighL:Tt(o,16,c=>[-.5*Math.sin(c),0,.03]),thighR:Tt(o,16,c=>[.25*Math.sin(c)+.05,0,-.06]),shinL:Tt(o,16,c=>[.15+.8*Math.max(0,Math.sin(c+1.1)),0,0]),shinR:Tt(o,16,c=>[.25+.25*Math.max(0,Math.sin(c+1.1+St)),0,0]),footR:Tt(o,16,c=>[.35,0,.15]),spine:Tt(o,16,c=>[r+.05,0,.1*Math.sin(c)]),chest:Tt(o,16,c=>[.03,.1*Math.sin(c),.12*Math.sin(c)]),head:Tt(o,16,c=>[.15,.1*Math.sin(c),.3+.12*Math.sin(c)]),neck:[[0,[.2,0,0]],[o,[.2,0,0]]],uarmL:Tt(o,16,c=>[l+.15*Math.sin(c),0,.2]),uarmR:Tt(o,16,c=>[l+.15-.15*Math.sin(c),0,-.15]),farmL:[[0,[-.3,0,0]],[o,[-.3,0,0]]],farmR:[[0,[-.2,0,0]],[o,[-.2,0,0]]],handL:[[0,[.45,0,0]],[o,[.45,0,0]]],handR:[[0,[.5,0,0]],[o,[.5,0,0]]],"hips.pos":Tt(o,16,c=>[1.4*Math.sin(c),-2.6+2.2*Math.abs(Math.sin(c)),0])}),i==="brute"?e.attack=nn("attack",.8,{uarmR:[[0,[l,0,-.14]],[.28,[-2.9,0,-.3]],[.42,[-.1,0,.1]],[.8,[l,0,-.14]]],farmR:[[0,[-.2,0,0]],[.28,[-.6,0,0]],[.42,[0,0,0]],[.8,[-.2,0,0]]],spine:[[0,[r,0,0]],[.28,[r-.25,.3,0]],[.42,[r+.35,-.25,0]],[.8,[r,0,0]]],"hips.pos":[[0,[0,-1.5,0]],[.42,[0,-6,10]],[.8,[0,-1.5,0]]],uarmL:[[0,[l,0,.18]],[.42,[-.2,0,.5]],[.8,[l,0,.18]]]},t):e.attack=nn("attack",.7,{spine:[[0,[r,0,0]],[.3,[r+.45,0,0]],[.7,[r,0,0]]],chest:[[0,[0,0,0]],[.15,[-.2,0,0]],[.32,[.35,0,0]],[.7,[0,0,0]]],head:[[0,[.18,0,.25]],[.32,[.5,0,0]],[.7,[.18,0,.25]]],uarmL:[[0,[l,0,.18]],[.18,[-2.3,0,.3]],[.36,[-.55,0,.05]],[.7,[l,0,.18]]],uarmR:[[0,[l+.1,0,-.14]],[.22,[-2.2,0,-.3]],[.4,[-.5,0,-.05]],[.7,[l+.1,0,-.14]]],farmL:[[0,[-.3,0,0]],[.18,[-.6,0,0]],[.36,[-.1,0,0]],[.7,[-.3,0,0]]],farmR:[[0,[-.2,0,0]],[.22,[-.6,0,0]],[.4,[-.1,0,0]],[.7,[-.2,0,0]]],thighL:[[0,[0,0,0]],[.32,[-.45,0,0]],[.7,[0,0,0]]],"hips.pos":[[0,[0,-1.5,0]],[.32,[0,-4,9]],[.7,[0,-1.5,0]]]},t),e.hit=nn("hit",.38,{spine:[[0,[r,0,0]],[.1,[r-.4,0,.15]],[.38,[r,0,0]]],head:[[0,[.18,0,.25]],[.1,[-.35,0,-.2]],[.38,[.18,0,.25]]],uarmL:[[0,[l,0,.18]],[.1,[l+.5,0,.5]],[.38,[l,0,.18]]],uarmR:[[0,[l,0,-.14]],[.1,[l+.5,0,-.5]],[.38,[l,0,-.14]]],"hips.pos":[[0,[0,-1.5,0]],[.1,[0,-2,-4]],[.38,[0,-1.5,0]]]},t),e.death=nn("death",1.3,{hips:[[0,[0,0,0]],[.45,[.25,0,.1]],[1.1,[1.48,0,.05]],[1.3,[1.42,0,.05]]],"hips.pos":[[0,[0,-1.5,0]],[.45,[0,-16,4]],[1.1,[0,-52,30]],[1.3,[0,-53,30]]],shinL:[[0,[0,0,0]],[.45,[1.4,0,0]],[1.3,[.4,0,0]]],shinR:[[0,[0,0,0]],[.45,[1.2,0,0]],[1.3,[.2,0,0]]],thighL:[[0,[0,0,0]],[.45,[-.8,0,0]],[1.3,[-.1,0,0]]],uarmL:[[0,[l,0,.18]],[1.3,[-.3,0,1.1]]],uarmR:[[0,[l,0,-.14]],[1.3,[-2.6,0,-.4]]],head:[[0,[.18,0,.25]],[1.3,[-.2,.7,0]]]},t),e}function Rh(i){let t=ql(Hx),e=Vx(i,t),n=Yl({roughness:i.zombie?.74:.8}),s=new fs(e,n);s.castShadow=!0,s.frustumCulled=!1;let r=t.byName.root;s.add(r);let a=new ps(t.bones);s.bind(a);let o=[n];Wx(i,t,o);let l=new oe;l.add(s);let c={};t.bones.forEach(u=>{c[u.name]=u.position.clone()});let h=Xx(i.style||(i.zombie?"zombie":"hero"),c);return{group:l,mesh:s,sk:t,mats:o,clips:h,hand:t.byName.handR,height:140}}function qx(){let i=[["root",null,[0,0,0]],["pelvis","root",[0,48,-28]],["spine","pelvis",[0,50,-5]],["chest","spine",[0,50,18]],["neck","chest",[0,56,30]],["head","neck",[0,68,40]],["jaw","head",[0,64,47]],["tail1","pelvis",[0,53,-40]],["tail2","tail1",[0,57,-54]],["tail3","tail2",[0,63,-66]]];return[["L",1],["R",-1]].forEach(([t,e])=>{i.push(["f1"+t,"chest",[e*8,44,22]],["f2"+t,"f1"+t,[e*8.4,25,24]],["f3"+t,"f2"+t,[e*8.4,5,25]]),i.push(["b1"+t,"pelvis",[e*8,44,-30]],["b2"+t,"b1"+t,[e*8.4,24,-37]],["b3"+t,"b2"+t,[e*8.4,5,-32]])}),i}function Yx(i,t){let e=new vr,n=t.idx;Ai(i.seed||3);let s=Dt(i.fur),r=Be(s,.55),a=Dt("#6a2420"),o=Dt("#d9cfb6"),l=Dt("#4a0a0a"),c=i.zombie!==!1,h=(y,T,x)=>{let w=Be(s,.75+.4*tn(y*.14,T*.14,x*.14));if(T<44&&Math.abs(y)<8&&(w=Fn(w,Be(s,1.25),.35)),c){let C=tn(y*.07+5,T*.07,x*.07);C>.64&&(w=Fn(r,a,(C-.64)*3)),i.ribs!==!1&&x>2&&x<24&&Math.abs(y)>7&&T>40&&T<58&&Math.sin(x*1.1)>.25&&C>.45&&(w=o.clone()),Je(y*.2,T*.2,x*.2)>.82&&(w=Fn(w,l,.8))}return i.plague&&Je(y*.3+7,T*.3,x*.3)>.8&&(w=Dt("#7aa040")),w},u=i.long||1,d=[[-46,0],[-42,7],[-34,10.5],[-24,12],[-12,10.8],[0,11.4],[10,13.2],[20,14],[28,12.4],[33,8.5],[35,0]].map(([y,T])=>[y*u,T*(i.bulk||1)]),p=As(d,24);p.rotateX(St/2);let g=p.attributes.position;for(let y=0;y<g.count;y++){let T=g.getX(y),x=-g.getY(y),w=g.getZ(y);T*=.8,x<0&&(x*=.85),g.setXYZ(y,T,x+50,w)}p.computeVertexNormals(),e.add(p,(y,T,x)=>x<-20*u?[n.pelvis,n.pelvis,0]:x<-5*u?[n.pelvis,n.spine,We(-20*u,-5*u,x)]:x<10*u?[n.spine,n.spine,0]:x<20*u?[n.spine,n.chest,We(10*u,20*u,x)]:[n.chest,n.chest,0],h),e.add(en(ze(7.8,6.2,16),Nt(0,54,26*u),Nt(0,67,40)),(y,T,x)=>x<31?[n.neck,n.chest,1-We(26,31,x)]:[n.neck,n.neck,0],h);let M=mn(8.2*(i.headW||1),7.8,9.8,22,16);M.translate(0,70,43),e.add(M,()=>[n.head,n.head,0],h);let m=i.snout||1;e.add(en(ze(5.6,3.8,14*m),Nt(0,67.5,48),Nt(0,66,48+14*m)),()=>[n.head,n.head,0],h),e.add(en(ze(3.8,2.6,13*m),Nt(0,62.6,47),Nt(0,61.6,47+13*m)),()=>[n.jaw,n.jaw,0],(y,T,x)=>Fn(h(y,T,x),a,c?.35:0));let f=mn(2.4,1.8,1.6,12,8);f.translate(0,67,48.6+14*m),e.add(f,()=>[n.head,n.head,0],()=>Dt("#151515"));for(let y=0;y<5;y++){let T=52+y*2.2*m;[-1,1].forEach(x=>{let w=new on(.55,2.6,6);w.rotateX(St),w.translate(x*3,64.4,T),e.add(w,()=>[n.head,n.head,0],()=>Dt("#e8e0c8"));let C=new on(.5,2.2,6);C.translate(x*2.4,63.4,T-.6),e.add(C,()=>[n.jaw,n.jaw,0],()=>Dt("#d8cfb4"))})}[-1,1].forEach(y=>{let T;i.ears==="round"?(T=mn(3.6,3.8,1,12,8),T.translate(y*6,77,41)):(T=new on(i.ears==="big"?3.6:2.8,i.ears==="big"?9:7,8),T.rotateZ(-y*.3),T.translate(y*5.4,79,40)),e.add(T,()=>[n.head,n.head,0],(x,w,C)=>i.ears==="round"?Dt("#c99a96"):Be(s,.7))}),[-1,1].forEach(y=>{let T=mn(4.6,9,9,16,12);T.translate(y*7.2,47,20),e.add(T,()=>[n.chest,n.chest,0],h);let x=mn(5.4,10.5,9.5,16,12);x.translate(y*7.4,47,-31),e.add(x,()=>[n.pelvis,n.pelvis,0],h)});let b=(i.legK||1)*1.15;[["L",1],["R",-1]].forEach(([y,T])=>{[["f",22,24,25],["b",-30,-37,-32]].forEach(([x,w,C,I])=>{let F=Nt(T*8,44,w),z=Nt(T*8.4,25,C),L=Nt(T*8.4,5,I),O=x==="f"?"chest":"pelvis";e.add(en(ze(4.8*b,3.3*b,19.5),F,z),(V,Q)=>Q>39?[n[x+"1"+y],n[O],We(39,46,Q)*.6]:[n[x+"1"+y],n[x+"1"+y],0],h),e.add(en(ze(3.3*b,2.4*b,20),z,L),(V,Q)=>Q>22?[n[x+"2"+y],n[x+"1"+y],We(22,27,Q)*.5]:[n[x+"2"+y],n[x+"2"+y],0],h);let G=mn(3.2*b,2.2,4.4,12,8);if(G.translate(T*8.4,2.4,I+1.6),e.add(G,()=>[n[x+"3"+y],n[x+"3"+y],0],(V,Q,q)=>Be(h(V,Q,q),.7)),c)for(let V=-1;V<=1;V++){let Q=new on(.45,2.4,5);Q.rotateX(St/2),Q.translate(T*8.4+V*1.2,1.4,I+6.4),e.add(Q,()=>[n[x+"3"+y],n[x+"3"+y],0],()=>Dt("#2a2420"))}})});let A=i.tailK||1,_=i.tailCol?Dt(i.tailCol):null,S=(y,T,x)=>_?Be(_,.85+.25*Je(y*.4,T*.4,x*.4)):h(y,T,x);return e.add(en(ze(3.8*A,3*A,15),Nt(0,53,-40),Nt(0,57,-54)),(y,T,x)=>x>-43?[n.tail1,n.pelvis,We(-43,-38,x)*.5]:[n.tail1,n.tail1,0],S),e.add(en(ze(3*A,2.2*A,13.5),Nt(0,57,-54),Nt(0,63,-66)),()=>[n.tail2,n.tail2,0],S),e.add(en(ze(2.2*A,.8*A,12*(i.tailLen||1)),Nt(0,63,-66),Nt(0,67,-66-12*(i.tailLen||1))),()=>[n.tail3,n.tail3,0],S),e.build()}function Zx(i,t){let e={},n=t.speed||1,s=(o,l)=>{let c={};return[["f1L",0],["b1R",0],["f1R",St],["b1L",St]].forEach(([h,u])=>{c[h]=Tt(o,16,d=>[-l*Math.sin(d+u),0,0])}),[["f2L",0],["b2R",0],["f2R",St],["b2L",St]].forEach(([h,u])=>{let d=h[0]==="f"?-1:1;c[h]=Tt(o,16,p=>[d*(.15+.7*Math.max(0,Math.sin(p+u+1.2))),0,0])}),c},r=2.4;e.idle=nn("idle",r,Object.assign({spine:Tt(r,12,o=>[.03*Math.sin(o*2),0,0]),chest:Tt(r,12,o=>[-.03*Math.sin(o*2),0,0]),neck:Tt(r,12,o=>[.18+.05*Math.sin(o),.1*Math.sin(o*.5),0]),head:Tt(r,12,o=>[-.2+.06*Math.sin(o*2),.15*Math.sin(o*.5),.05*Math.sin(o)]),jaw:Tt(r,12,o=>[.12+.1*Math.max(0,Math.sin(o*3)),0,0]),tail1:Tt(r,12,o=>[t.tailUp||-.25,.25*Math.sin(o*2),0]),tail2:Tt(r,12,o=>[.15,.2*Math.sin(o*2+.6),0]),tail3:Tt(r,12,o=>[.15,.2*Math.sin(o*2+1.2),0]),"pelvis.pos":Tt(r,12,o=>[0,.5*Math.sin(o*2),0]),f2L:[[0,[-.1,0,0]],[r,[-.1,0,0]]],f2R:[[0,[-.1,0,0]],[r,[-.1,0,0]]],b2L:[[0,[.15,0,0]],[r,[.15,0,0]]],b2R:[[0,[.15,0,0]],[r,[.15,0,0]]]}),i);let a=.62/n;return e.walk=nn("walk",a,Object.assign(s(a,.55),{"pelvis.pos":Tt(a,16,o=>[0,1.6*Math.abs(Math.sin(o)),0]),spine:Tt(a,16,o=>[.05*Math.sin(o*2),.04*Math.sin(o),0]),neck:Tt(a,16,o=>[.12+.06*Math.sin(o*2),0,0]),head:Tt(a,16,o=>[-.1+.05*Math.sin(o*2+1),0,0]),jaw:[[0,[.2,0,0]],[a,[.2,0,0]]],tail1:Tt(a,16,o=>[t.tailUp||-.25,.3*Math.sin(o),0]),tail2:Tt(a,16,o=>[.1,.25*Math.sin(o+.7),0])}),i),e.attack=nn("attack",.6,{"pelvis.pos":[[0,[0,0,0]],[.15,[0,-4,-4]],[.32,[0,4,16]],[.6,[0,0,0]]],spine:[[0,[0,0,0]],[.15,[.12,0,0]],[.32,[-.15,0,0]],[.6,[0,0,0]]],neck:[[0,[.18,0,0]],[.15,[.35,0,0]],[.32,[-.15,0,0]],[.6,[.18,0,0]]],head:[[0,[-.2,0,0]],[.32,[-.35,0,0]],[.6,[-.2,0,0]]],jaw:[[0,[.1,0,0]],[.2,[.75,0,0]],[.34,[.05,0,0]],[.6,[.1,0,0]]],f1L:[[0,[0,0,0]],[.32,[-.9,0,0]],[.6,[0,0,0]]],f1R:[[0,[0,0,0]],[.32,[-.8,0,0]],[.6,[0,0,0]]],b1L:[[0,[0,0,0]],[.15,[-.3,0,0]],[.32,[.6,0,0]],[.6,[0,0,0]]],b1R:[[0,[0,0,0]],[.15,[-.3,0,0]],[.32,[.6,0,0]],[.6,[0,0,0]]]},i),e.hit=nn("hit",.35,{"pelvis.pos":[[0,[0,0,0]],[.1,[0,-2,-5]],[.35,[0,0,0]]],neck:[[0,[.18,0,0]],[.1,[-.3,.3,0]],[.35,[.18,0,0]]],jaw:[[0,[.1,0,0]],[.1,[.5,0,0]],[.35,[.1,0,0]]]},i),e.death=nn("death",1.1,{pelvis:[[0,[0,0,0]],[.6,[0,0,1.2]],[1.1,[0,0,1.52]]],"pelvis.pos":[[0,[0,0,0]],[.6,[-6,-18,0]],[1.1,[-8,-34,0]]],neck:[[0,[.18,0,0]],[1.1,[-.4,0,0]]],jaw:[[0,[.1,0,0]],[1.1,[.45,0,0]]],f1L:[[0,[0,0,0]],[1.1,[-.6,0,0]]],b1L:[[0,[0,0,0]],[1.1,[.5,0,0]]]},i),e}function sf(i){let t=ql(qx()),e=Yx(i,t),n=Yl({roughness:.86}),s=new fs(e,n);s.castShadow=!0,s.frustumCulled=!1,s.add(t.byName.root),s.bind(new ps(t.bones));let r=[n];if([-1,1].forEach(l=>{let c=new kt(new Se(1.9,12,8),di(i.eye||"#ff5a3d",2.2));c.position.set(l*4.4,71.6,50.2).sub(t.world.head),t.byName.head.add(c)}),i.spikes)for(let l=0;l<6;l++){let c=new kt(new on(1.6,7,8),fe("#cfd6de",{metalness:.9,roughness:.3})),h=-20+l*8;c.position.set(0,63,h).sub(l<3?t.world.spine:t.world.chest),(l<3?t.byName.spine:t.byName.chest).add(c)}if(i.collar){let l=new kt(new ln(7.4,1.2,8,20),fe(i.collar,{metalness:.85,roughness:.3}));l.position.set(0,58,31).sub(t.world.neck),l.rotation.x=-.9,t.byName.neck.add(l)}if(i.plague){let l=fe("#9fbf5a",{roughness:.2,emissive:Dt("#4a7a10"),emissiveIntensity:.7});r.push(l),Ai(i.seed+2);for(let c=0;c<8;c++){let h=Ot()<.5?"spine":"chest",u=new kt(new Se(1.4+Ot()*1.8,10,8),l);u.position.set((Ot()<.5?-1:1)*(8+Ot()*2),46+Ot()*10,(h==="spine"?-10:12)+Ot()*12).sub(t.world[h]),t.byName[h].add(u)}}let a=new oe;a.add(s);let o={};return t.bones.forEach(l=>{o[l.name]=l.position.clone()}),{group:a,mesh:s,sk:t,mats:r,clips:Zx(o,i),height:80}}var Pe={ready:!1,enabled:!0,active:!1};try{Pe.enabled=localStorage.getItem("tower-3d")!=="0"}catch{}window.GL3D=Pe;Pe.names=()=>Object.keys(Kl);Pe.box=i=>{let t=Kl[i]||{},e=t.scale||1;return t.q?{h:84*e,w:120*e}:t.style==="crawler"?{h:64,w:118}:{h:134*Dh*e,w:(t.style==="brute"?100:t.style==="bloater"?86:72)*e}};var Tr={x:0,y:24,w:360,h:400},Jx=.78,Dh=1.05,rf=["#5e5240","#3d4f66","#565e66","#3a4f3c","#262e3a","#33364f"],Kl={"\u041A\u0440\u044B\u0441\u0430-\u043F\u0435\u0440\u0435\u0440\u043E\u0441\u0442\u043E\u043A":{q:1,fur:"#5b4a3c",ears:"round",snout:1.15,tailCol:"#c99a96",tailLen:2.2,tailK:.6,scale:.55,long:1.15,legK:.8,eye:"#ff3d2e",speed:1.4},"\u0411\u0440\u043E\u0434\u044F\u0447\u0438\u0439 \u043F\u0451\u0441":{q:1,fur:"#4a3d30",scale:1,eye:"#ffcf3d"},\u0421\u0431\u043E\u0440\u0449\u0438\u043A:{skin:"#8f9a7a",shirt:"#6b6f5e",pants:"#3d4250",hair:"#2a221a",torn:.5,blood:.5,x:["backpack"]},\u0421\u043B\u0438\u0437\u0435\u043D\u044C:{style:"bloater",fat:1.3,skin:"#8fb06a",shirt:null,pants:"#4a5a3a",sleeves:"none",x:["pustules"],scale:1.08,torn:.8,blood:.3,bald:!0},"\u0420\u0436\u0430\u0432\u044B\u0439 \u0434\u0440\u043E\u043D":{style:"crawler",legless:!0,skin:"#87926f",shirt:"#4f5a4a",pants:"#2f3440",torn:.7,blood:.9,hair:"#1e1a14",bald:!0},"\u041B\u0435\u0442\u0443\u0447\u0430\u044F \u043C\u044B\u0448\u044C":{style:"thin",thin:.8,skin:"#6a6a78",shirt:"#2a2630",pants:"#2a2630",eye:"#d8ff5a",eyeGlow:2.4,torn:.6,blood:.4,x:["hood"],bald:!0},"\u0413\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u0430\u044F \u043C\u043E\u043A\u0440\u0438\u0446\u0430":{style:"crawler",skin:"#9a9a80",shirt:"#5a4a3a",pants:"#3a3030",torn:.6,blood:.8,hair:"#3a2a1c",legless:!0},"\u041E\u0434\u0438\u0447\u0430\u0432\u0448\u0438\u0439 \u0441\u043E\u0441\u0435\u0434":{skin:"#98a284",shirt:"#7a2e2e",pants:"#2e3340",hair:"#5a4632",torn:.45,blood:.6},"\u041A\u043E\u0448\u043A\u0430-\u043C\u0443\u0442\u0430\u043D\u0442":{q:1,fur:"#3a3440",ears:"big",snout:.7,headW:.9,scale:.62,tailLen:1.8,tailK:.7,long:1.05,legK:.8,eye:"#b8ff5a",speed:1.3,tailUp:-.6},\u041C\u0430\u0440\u043E\u0434\u0451\u0440:{skin:"#7f8a6a",shirt:"#2d2a33",pants:"#262830",x:["hood"],torn:.35,blood:.4},\u041F\u043E\u043B\u0437\u0443\u043D:{style:"crawler",legless:!0,skin:"#87926f",shirt:"#4f5a4a",pants:"#2f3440",torn:.7,blood:.9,hair:"#1e1a14",bald:!0},\u0421\u043A\u0438\u0442\u0430\u043B\u0435\u0446:{skin:"#8c977a",shirt:"#56604a",pants:"#3a3a30",x:["backpack"],hair:"#2f281f",torn:.4,blood:.5},"\u0411\u0440\u043E\u0434\u044F\u0447\u0438\u0439 \u043F\u043E\u0432\u0430\u0440":{skin:"#a0a690",shirt:"#e9e6df",pants:"#2a2a2a",x:["apron","chefhat","cleaver"],torn:.3,blood:1},"\u0421\u0442\u043E\u0440\u043E\u0436\u0435\u0432\u043E\u0439 \u043F\u0451\u0441":{q:1,fur:"#3b3631",scale:1.12,bulk:1.1,collar:"#9aa3ad",spikes:!0,eye:"#ff3d2e"},"\u041E\u0445\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u043E\u0431\u043E\u0442":{skin:"#8a947a",shirt:"#2b3445",pants:"#232833",x:["helmet","vest"],torn:.3,blood:.4},"\u0414\u0440\u043E\u043D-\u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u0435\u043B\u044C":{style:"thin",thin:.6,skin:"#a3a08a",shirt:"#d0622a",pants:"#2e3340",x:["cap"],hat:"#d0622a",torn:.4,blood:.5},\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A:{skin:"#9aa58a",shirt:"#dfe3ea",pants:"#2a2f3d",x:["tie"],tie:"#2a4a7a",hair:"#2a221a",torn:.35,blood:.6},"\u0422\u0443\u0440\u043D\u0438\u043A\u0435\u0442-\u0441\u0442\u0440\u0430\u0436":{skin:"#7f8c6a",shirt:"#2b3445",pants:"#232833",x:["vest","spikes"],vest:"#3a3f46",torn:.3,blood:.5},\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440:{suit:!0,skin:"#98a284",shirt:"#2e3548",pants:"#252a38",tie:"#7a1f26",hair:"#1a1612",torn:.3,blood:.5},"\u0423\u0431\u043E\u0440\u0449\u0438\u043A-\u0430\u0432\u0442\u043E\u043C\u0430\u0442":{skin:"#8f9a7a",shirt:"#2f6f6a",pants:"#2f6f6a",overalls:!0,torn:.4,blood:.4,x:["pustules"]},"\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440-\u043F\u0440\u0438\u0437\u0440\u0430\u043A":{skin:"#a3ad92",shirt:"#c9d6e8",pants:"#2a2f3d",x:["tie","glasses"],tie:"#3a3a3a",bald:!0,hair:"#555555",torn:.3,blood:.5},\u041F\u043E\u0434\u043E\u043F\u044B\u0442\u043D\u044B\u0439:{style:"brute",muscle:1,bigArm:"R",headScale:.85,skin:"#c0c4b6",shirt:"#a8c4d8",pants:"#a8c4d8",sleeves:"none",scale:1.28,torn:.5,blood:.6,bald:!0},\u041C\u0443\u0442\u0430\u043D\u0442:{style:"brute",muscle:1,bigArm:"R",headScale:.8,skin:"#7f9a5a",shirt:null,pants:"#3a3a30",scale:1.32,x:["pustules"],torn:.6,blood:.7,bald:!0},"\u041B\u0430\u0431\u043E\u0440\u0430\u043D\u0442-\u043A\u0443\u043B\u044C\u0442\u0438\u0441\u0442":{coat:!0,skin:"#a3a08a",shirt:"#e9ecef",pants:"#2a2f3d",x:["gasmask"],torn:.35,blood:.6},"\u0414\u0440\u043E\u043D-\u043F\u0430\u043B\u0430\u0447":{skin:"#8a947a",shirt:"#d9b42a",pants:"#d9b42a",x:["helmet","vest","spikes"],vest:"#9a8a2a",torn:.3,blood:.5},\u0425\u0438\u043C\u0435\u0440\u0430:{q:1,fur:"#5a6b4a",scale:1.18,bulk:1.15,spikes:!0,eye:"#b8ff5a",plague:!0},"\u041A\u043E\u043B\u0431\u0430-\u0441\u043B\u0438\u0437\u0435\u043D\u044C":{style:"bloater",fat:1.2,skin:"#7a9a5a",shirt:"#a8c4d8",pants:"#a8c4d8",sleeves:"none",x:["pustules"],scale:1.12,torn:.5,blood:.5,bald:!0},\u0421\u043A\u0430\u043B\u044C\u043F\u0435\u043B\u044C\u0449\u0438\u043A:{coat:!0,skin:"#a3a08a",shirt:"#5a8a7a",pants:"#5a8a7a",mask:"surgical",x:["scalpels"],torn:.3,blood:1},\u0421\u0442\u0440\u0430\u0436:{skin:"#7a846a",shirt:"#15181e",pants:"#15181e",x:["helmet","vest"],vest:"#22262c",torn:.2,blood:.4,scale:1.06},\u041D\u0430\u043C\u0435\u0441\u0442\u043D\u0438\u043A:{suit:!0,skin:"#a0a890",shirt:"#5a1a2a",pants:"#2a1a20",tie:"#e6b422",x:["collarGold"],hair:"#9a9a9a",torn:.2,blood:.6},\u0422\u0435\u043D\u044C:{style:"thin",thin:1,skin:"#3a3a44",shirt:"#14141a",pants:"#14141a",eye:"#c8ff5a",eyeGlow:3,torn:.6,blood:.2,x:["hood"]},"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0434\u0440\u043E\u043D":{suit:!0,skin:"#8f9a7a",shirt:"#1c1f26",pants:"#1c1f26",tie:"#111111",x:["vest","glasses"],vest:"#2a2e34",scale:1.12,torn:.2,blood:.4},"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u043A\u0430\u044F \u0445\u0438\u043C\u0435\u0440\u0430":{q:1,fur:"#2e2a26",scale:1.1,plague:!0,eye:"#b8ff5a"},"\u0417\u043E\u043B\u043E\u0442\u0430\u044F \u0433\u043E\u043D\u0447\u0430\u044F":{q:1,fur:"#c9a23a",scale:1.08,long:1.1,collar:"#e6b422",eye:"#ff7a3d",speed:1.3},\u041C\u0435\u0442\u0440\u0434\u043E\u0442\u0435\u043B\u044C:{suit:!0,skin:"#a3ad92",shirt:"#e8e4da",pants:"#1c1c1c",tie:"#1c1c1c",x:["bowtie"],hair:"#1a1612",torn:.25,blood:.6}},$x=i=>{let t=7;for(let e of i)t=t*31+e.charCodeAt(0)>>>0;return t%997+1};function df(i,t){let e=["cap","scarf","backpack"];t>=2&&e.push("pads"),t>=4&&e.push("stripes");let n=Rh({style:"hero",zombie:!1,seed:11,skin:"#e0b896",shirt:rf[t]||rf[0],pants:"#2f343f",shoes:"#2a2420",hair:"#3a2a1c",sleeves:"long",torn:t===0?.25:.05,blood:.08,x:e,hat:"#2c364b",padCol:t>=4?"#2a3140":"#5a6372",stripe:t>=5?"#a66bff":"#59e1ff"}),s=nf(i);return s.position.set(-.2,-7.6,3.2),s.rotation.set(Math.PI/2-.35,0,0),n.hand.add(s),n.group.scale.setScalar(Dh),n}function ff(i){let t=Object.assign({zombie:!0,seed:$x(i)},Kl[i]||Kl.\u0421\u0431\u043E\u0440\u0449\u0438\u043A),e=t.q?sf(t):Rh(t);return e.group.scale.setScalar((t.scale||1)*(t.q?1:Dh)),e.cfg=t,e}function Kx(i){let t=new pa(i.group),e={};for(let[o,l]of Object.entries(i.clips))e[o]=t.clipAction(l);["attack","hit","death"].forEach(o=>{e[o]&&(e[o].setLoop(Ol,1),e[o].clampWhenFinished=!0)});let n="idle",s=e.idle,r=null;s.play();let a=(o,l=.18)=>{o!==s&&(o.reset().setEffectiveWeight(1).fadeIn(l).play(),s&&s.fadeOut(l),s=o)};return t.addEventListener("finished",o=>{o.action===e[r]&&r!=="death"&&(r=null,a(e[n],.22))}),{mixer:t,loop(o){!e[o]||n===o||(n=o,r||a(e[o]))},once(o){!e[o]||r==="death"||(r=o,a(e[o],o==="death"?.15:.08))},reset(){r=null,n="idle",t.stopAllAction(),s=e.idle,s.reset().play()},get dead(){return r==="death"}}}var ts,mi,Ci,Na,es,af,pi=null,Jl="",Da=null,ke=null,Xe=null,Ih=[],of="",lf="",cf="",$l=0;function Qx(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(0,0,0,.6)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new li(i)}var Ch=null;function Ph(i,t){let e=new oe,n=new oe,s=new oe;e.add(n),n.add(s),s.rotation.y=Jx,s.add(i.group),i.group.traverse(a=>{(a.isMesh||a.isSkinnedMesh)&&(a.castShadow=!0)}),Ch=Ch||Qx();let r=new kt(new Mn(t*2.4,t*.7),new Ve({map:Ch,transparent:!0,depthWrite:!1}));return r.position.set(0,1,-30),e.add(r),{root:e,flip:n,yaw:s,model:i,ctl:Kx(i),st:{atk:-1,flash:0,dir:1,pop:0}}}function hf(i,t){i.model.mats.forEach(e=>{e.emissive&&!e.userData.glow&&(e.emissive.setRGB(t*.55,t*.06,t*.05),e.emissiveIntensity=1)})}function Lh(i){i&&(mi.remove(i.root),i.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&[].concat(t.material).forEach(e=>e.dispose())}))}function uf(i){i.group.traverse(t=>{t.material&&t.material.emissiveIntensity>1&&(t.material.userData.glow=!0)}),i.mats.forEach(t=>{t.emissiveIntensity>1&&(t.userData.glow=!0)})}function jx(){let i=es.getBoundingClientRect(),t=Math.max(1,i.width),e=Math.max(1,i.height),n=t+"x"+e;if(n===cf)return;cf=n,ts.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),ts.setSize(t,e,!1);let s=Math.min(t/Tr.w,e/Tr.h),r=(t-Tr.w*s)/2,a=e-Tr.h*s,o=Tr.x-r/s,l=Tr.y-a/s,c=t/s,h=e/s,u=1100;Ci.fov=2*Math.atan(h/2/u)*180/Math.PI,Ci.aspect=t/e,Ci.near=50,Ci.far=3e3,Ci.position.set(o+c/2,-(l+h/2),u),Ci.lookAt(o+c/2,-(l+h/2),0),Ci.updateProjectionMatrix()}function tv(){let i=document.getElementById("hero");if(!i||!ke)return;let t=getComputedStyle(i),e=0,n=352;if(t.transform&&t.transform!=="none"){let r=new DOMMatrix(t.transform);e=r.m41,n=r.m42}ke.root.position.set(e,-n,0);let s=i.classList.contains("face-l");ke.flip.scale.x=s?-1:1,ke.st.dir=s?-1:1,ke.ctl.loop(i.classList.contains("walk")?"walk":"idle"),ke.root.visible=!i.classList.contains("boarding")}function pf(i){if(requestAnimationFrame(pf),!Pe.active||!ts)return;let t=i/1e3;if(t-$l<.024)return;let e=Math.min(.05,$l?t-$l:.016);if($l=t,jx(),ke){tv();let n=ke.st;n.atk>=0&&(n.atk+=e/.55,n.atk>=1&&(n.atk=-1)),n.flash>0&&(n.flash=Math.max(0,n.flash-e*3)),hf(ke,n.flash),ke.yaw.position.x=n.atk>=0?Math.sin(Math.PI*Math.min(1,n.atk*1.4))*38:0,ke.ctl.mixer.update(e)}if(Xe){let n=Xe.st;n.pop=Math.min(1,n.pop+e*4),n.atk>=0&&(n.atk+=e/.6,n.atk>=1&&(n.atk=-1)),n.flash>0&&(n.flash=Math.max(0,n.flash-e*3)),hf(Xe,n.flash),Xe.yaw.position.x=n.atk>=0?Math.sin(Math.PI*n.atk)*40:0;let s=1-Math.pow(1-n.pop,3);Xe.root.scale.set(s,s,s),Xe.ctl.mixer.update(e)}if(Ih=Ih.filter(n=>(n.ctl.mixer.update(e),n.left-=e,n.left<.4&&n.root.traverse(s=>{s.material&&[].concat(s.material).forEach(r=>{r.transparent=!0,r.opacity=Math.max(0,n.left/.4)})}),n.left<=0?(Lh(n),!1):!0)),pi&&(pi.update(e,[0,1,2].map(n=>document.getElementById("door"+n)),document.getElementById("lift")),Da)){let n=ke?ke.root.position.x:180;Da.position.set(n-90,300,380),Da.target.position.set(n,wh,0),Da.target.updateMatrixWorld()}ts.render(mi,Ci)}Pe.update=i=>{if(!Pe.ready||(Pe.active=!!i.visible&&Pe.enabled,Na.style.display=Pe.active?"":"none",!Pe.active))return;if(i.env!==Jl){if(Jl=i.env||"",pi&&(mi.remove(pi.root),pi.dispose(),pi=null),Jl)try{pi=ef(Jl),mi.add(pi.root)}catch(n){console.error(n),pi=null}es.classList.toggle("env",!!pi)}let t=i.wi+":"+i.ai;if(t!==of){of=t,Lh(ke);let n=df(i.wi,i.ai);uf(n),ke=Ph(n,22),mi.add(ke.root)}ke&&(i.dead?ke.ctl.once("death"):ke.ctl.dead&&ke.ctl.reset());let e=i.enemy||"";if(e!==lf&&(lf=e,Xe&&(Xe.dyingStarted?(Xe.left=1.5,Ih.push(Xe)):Lh(Xe)),Xe=null,e)){let n=ff(e);uf(n),Xe=Ph(n,n.cfg.q?36*(n.cfg.scale||1):28),Xe.flip.scale.x=-1,Xe.st.dir=-1,Xe.root.scale.set(0,0,0),mi.add(Xe.root)}Xe&&Xe.root.position.set(i.foeX,-i.foeY,0)};Pe.setEnabled=i=>{Pe.enabled=!!i;try{localStorage.setItem("tower-3d",i?"1":"0")}catch{}es&&es.classList.toggle("gl",Pe.ready&&Pe.enabled),Na&&(Na.style.display=Pe.ready&&Pe.enabled?"":"none")};Pe.trigger=(i,t)=>{if(!Pe.ready||!Pe.enabled)return;let e=i==="hero"?ke:Xe;e&&(t==="attack"?(e.st.atk=0,e.ctl.once("attack")):t==="hurt"?(e.st.flash=1,e.ctl.once("hit")):t==="death"&&(e.dyingStarted=!0,e.ctl.once("death")))};function mf(i){i.add(new ua(11188432,2760728,.95));let t=new vs(16768174,3.1);t.position.set(-140,260,320),i.add(t,t.target),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.bias=-4e-4,t.shadow.normalBias=.6,Object.assign(t.shadow.camera,{left:-230,right:230,top:260,bottom:-120,near:50,far:1200}),Da=t;let e=new vs(8368383,2.2);e.position.set(220,140,-260),i.add(e);let n=new vs(16756848,.5);n.position.set(200,40,200),i.add(n)}function gf(i){i.shadowMap.enabled=!0,i.shadowMap.type=Jo,i.outputColorSpace=Qe,i.toneMapping=ga,i.toneMappingExposure=1.02}Pe.init=()=>{try{es=document.getElementById("scene"),Na=document.getElementById("gl"),ts=new Ca({canvas:Na,antialias:!0,alpha:!0,powerPreference:"high-performance"}),ts.setClearColor(0,0),gf(ts),mi=new zi,af=new Es(ts),mi.environment=af.fromScene(new Pa,.04).texture,mi.environmentIntensity=.55,Ci=new rn(30,.9,50,3e3),mf(mi),Pe.ready=!0,Pe.enabled&&es.classList.add("gl"),requestAnimationFrame(pf),typeof render=="function"&&render()}catch{Pe.ready=!1,es&&es.classList.remove("gl")}};Pe.gallery=(i,t,e,n,s)=>{let r=new Ca({canvas:i,antialias:!0});r.setSize(e,n,!1),gf(r),r.setClearColor(1909808,1);let a=new zi,o=new Es(r);a.environment=o.fromScene(new Pa,.04).texture,a.environmentIntensity=.55,mf(a);let l=new Wi(0,e,0,-n,1,3e3);l.position.z=900,s=s||Math.ceil(Math.sqrt(t.length*e/n));let c=Math.ceil(t.length/s),h=e/s,u=n/c;return t.forEach((d,p)=>{let g=d.hero?df(d.wi,d.ai):ff(d.name),M=Ph(g,g.cfg&&g.cfg.q?36:28);M.flip.scale.x=d.hero?1:-1;let m=p%s,f=Math.floor(p/s);M.root.position.set(m*h+h/2,-(f*u+u*.9),0),M.root.scale.setScalar((d.s||1)*u/175),a.add(M.root);let b=M.ctl.mixer.clipAction(g.clips[d.anim||"idle"]);M.ctl.mixer.stopAllAction(),b.play(),M.ctl.mixer.setTime(d.t||.4)}),r.render(a,l),!0};document.addEventListener("DOMContentLoaded",Pe.init);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
