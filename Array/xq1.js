var a=[1,2,4,7,8];

var i=0, sum=0, ans=0;
for(i=0;i<a.length;i++){
    sum=sum+a[i];
}

ans=sum/a.length;

console.log("%s的平均值 ==> %d", a, ans);