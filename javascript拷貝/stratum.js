function str(n){		
	if (n==0) return(1);
	return(n*str(n-1));	
}
console.log( "str(10)=" +str(10) );
    