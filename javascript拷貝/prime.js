function prime(num){
    for( j=2;j<=num-1;j++)
    if (num % j == 0) return 0;

    return 1;
}
for( i=2;i<=100;i++)
    if(prime(i))
    console.log(i);


    