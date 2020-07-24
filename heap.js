/*

d = [null, 1,2,3,4,5]
N=d.length-1

for(i = 2; i <= N; i++)
  {
    j = i; k = Math.floor(j / 2);
    x = d[i];
    while((k > 0) && (d[k] < x))
    {
      d[j] = d[k];
      j = k; k = Math.floor(j / 2);
    }
    d[j] = x;
  }
  
d
*/

function swap(tab,i,j){
  let t=tab[i];
  tab[i]=tab[j];
  tab[j]=t;
}

function TopK(n){
  this.n = n;
  this.d = [null]
  this.tail = function(v){
    let d=this.d
    d.push(v)
    let i = this.d.length-1
    let j=i,k=Math.floor(j/2);
    let x = d[j];
    while((k>0)&&(d[k]>x))
    {
      d[j]=d[k];
      j=k;k=Math.floor(j/2);
    }
    d[j]=x;
  }
  this.head = function(v){
    let d=this.d
    let old=d[1]
    let N=d.length
    d[1]=v;
    let j = 1, k = 2;
    while(k<N)
    {
      if((k+1<N) && (d[k+1]<d[k]))
        m=k+1;
      else
        m=k;
      if(d[m]>=d[j]) break;
      swap(d,j,m);
      j=m;k=j+j;
    }
  }
  this.add = function(v){
    if(this.d.length<=this.n){
      this.tail(v)
    }else{
      this.head(v)
    }
  }
}

x = new TopK(5)
x.add(1)
x.add(2)
x.add(3)
x.add(4)
x.add(5)
console.log(x.d)

