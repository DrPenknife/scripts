function pack(d,arr,i){
  if(!d)return;
  arr[i]=d.v;
  pack(d.k0,arr,2*i);
  pack(d.k1,arr,2*i+1);
}
function init(x,par,root){
  return {v:x,
          p:Math.random(),
          par:par,
          root:root
         }
}
function add(d, x){
  if(!d[0]){
    d[0]=init(x,null,d);
    return;
  }
  let t=d[0];
  let kid,n;
  while(t){
    kid=x<t.v?'k0':'k1';
    let tt=t[kid];
    t[kid]=t[kid]||init(x,t,d);
    n=t[kid]
    t=tt;
  }
 
  while(n.par&&n.p>n.par.p){
    if(n.par.k0==n)
      rotate(n.par,1);
    else
      rotate(n.par,0);
  }
}
function rotate(n,r){
  let rkid=n['k'+(r^1)]
  if(n.par){
    if(n==n.par.k0){
      n.par.k0=rkid
    }else{
      n.par.k1=rkid
    }
  }else{
    n.root[0]=rkid
  }
  rkid.par=n.par
  n['k'+(r^1)]=rkid['k'+r]
  if(n['k'+(r^1)]){
    n['k'+(r^1)].par=n
  }
  rkid['k'+r]=n
  n.par=rkid
}

let d=[null];
let pd={};

[8,7,6,5,4,3,2]
.map(x=>{
  add(d,x)
})


pack(d[0],pd,1)
console.log(pd)
