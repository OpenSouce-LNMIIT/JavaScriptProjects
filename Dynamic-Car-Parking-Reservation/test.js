   
	var x = document.getElementById("userdetail1");
	var x1=document.getElementById("userdetail1");
	var y = document.getElementById("userdetail2");
	var y1=document.getElementById("userdetail2");
    var verifynam=document.getElementById("exitdetail1");
    var vn1=document.getElementById("exitdetail1");
	
	var verifyspot = document.getElementById("exitdetail2");
	var vs=document.getElementById("exitdetail2");
	var submit=document.getElementById("submitlis");
	var changa=document.querySelectorAll("td");
	var g = document.getElementById("update");
    var remove=document.getElementById("removelis");    
	var check = new Array();
	var c;
	var g;
	var c1;
	
	var c11;
	var e ;
	var e1;
   

	for( var i=0;i<changa.length;i++)
	{ 
		check[i]=changa[i].getAttribute("id");

	    
	    
	};
	
   
   var verifyname=new Array();




   var p1score=30;
   
   submit.addEventListener("click",function(){
  for(var i=0;i<changa.length;i++)
  {  
    c1=y.value/1000; 
    c11=parseInt(c1);
      
  	if(check[i]==c11)
  	{    console.log(i);
  		check[i]=y.value;
  		
  		changa[i].textContent="\xa0\xa0\xa0\xa0"+"RESERVED"+"\n"+"\xa0\xa0\xa0\xa0"+ x.value;
  		changa[i].style.textTransform="capitalize";
        changa[i].style.transition="0.6s";
  		changa[i].style.transitionTimingFunction = "ease-out";
  	
  		changa[i].style.color="white";
  		changa[i].style.font=" 40px Passion One";
  		changa[i].style.objectFit="cover";
  		
  	    
  	    changa[i].style.backgroundColor="#A12914";
        g.textContent=--p1score;
        verifyname[i]=x.value;
         $(x1).val("");
         $(y1).val("");
       
        
  	}
  }
   });
   remove.addEventListener("click",function(){
  for(var i=0;i<changa.length;i++)
  { 
  	
  	if((check[i]==verifyspot.value)&&(verifyname[i]==verifynam.value))

  	{ 

  	     console.log(i);
  	     e=verifyspot.value/1000;
        e1=parseInt(e);
        check[i]=e1;
  		changa[i].textContent="\xa0\xa0\xa0\xa0"+"AVAILABLE";
        
  	
  		changa[i].style.color="#282D27";
  		changa[i].style.font="bold 40px Passion One";
  		changa[i].style.objectFit="cover";
  		
  		changa[i].style.backgroundColor="#569022";
        g.textContent=++p1score;
        $(vn1).val("");
        $(vs).val("");
        
  	}
   
  }
   });
   
	
    



    


	
	
	
