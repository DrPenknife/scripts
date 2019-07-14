function lg(x){
  document.write(x)
  document.write("<br>");
}

function swap(a,i,j){
  var v=a[i]
  a[i]=a[j]
  a[j]=v
}

function qs(x, l, p, d){
  var i=l-1, j=p+1, v=x[l]
  while(true){
    while(v>x[++i]);
    while(v<x[--j]);
    if(i<=j) swap(x,i,j)
    else break
  }
  if(j>l)qs(x,l,j,d+1)
  if(i<p)qs(x,i,p,d+1)
}

var tin = [5,4,3,2,1]

lg("start")
lg(tin)
qs(tin,0,tin.length-1,0)
lg(tin)
lg("done")

