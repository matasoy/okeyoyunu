renkkod=["k","m","sa","si"];
renkler=[1,2,3,4]; r=0; s=1;
var taslar = new Array();
var dagittas = new Array();
var d1 = new Array();
var d2 = new Array();
var d3 = new Array();
var d4 = new Array();
for(var j = 0; j < 52; j++){
	if(j%13==0){
		r++;
		s=1;
	}
	taslar[j] = r+"#"+s;
	s++
}
s=1;r=0;
for(var j = 52; j < 104; j++){
	if(j%13==0){
		r++;
		s=1;
	}
	taslar[j] = r+"#"+s;
	s++
}
taslar[taslar.length] = "j";
taslar[taslar.length] = "j";
for (i = 0; i < taslar.length; i++) {
  dagittas[i] = taslar[i];
}
function dagit(user){
	switch(user){
		case 1:
		dagit_say=0;
		while(dagit_say<14){
			r = Math.round(Math.random()*105);			
			if(dagittas[r]!=""){	
				renk = renkkod[dagittas[r].split("#")[0]*1-1];
				no = dagittas[r].split("#")[1];
				if(renk===undefined){ renk = "joker"; no="J";}
				if(dagit_say>9){ satir = "ustsatir"; }else{satir="altsatir";}
				d1.push(dagittas[r]);
				$(".d1>."+satir).append("<div class='"+renk+" tas' data-id='"+dagittas[r]+"'><div class='tas_txt'>"+no+"</div><div class='dot renk_"+renk+"'></div></div>");
				dagittas[r]="";				
				dagit_say++;
			}
		}break;
		
		case 2:
		dagit_say=0;
		while(dagit_say<14){
			r = Math.round(Math.random()*105);
			if(dagittas[r]!=""){
				renk = renkkod[dagittas[r].split("#")[0]*1-1];
				no = dagittas[r].split("#")[1];
				if(renk===undefined){ renk = "joker"; no="J";}
				if(dagit_say>9){ satir = "ustsatir"; }else{satir="altsatir";}
				d2.push(dagittas[r]);
				$(".d2>."+satir).append("<div class='"+renk+" tas' data-id='"+dagittas[r]+"'><div class='tas_txt'>"+no+"</div><div class='dot renk_"+renk+"'></div></div>");
				dagittas[r]="";
				dagit_say++;
			}
		}break;
		
		case 3:
		dagit_say=0;
		while(dagit_say<14){
			r = Math.round(Math.random()*105);
			if(dagittas[r]!=""){
				renk = renkkod[dagittas[r].split("#")[0]*1-1];
				no = dagittas[r].split("#")[1];
				if(renk===undefined){ renk = "joker"; no="J";}
				if(dagit_say>9){ satir = "ustsatir"; }else{satir="altsatir";}
				d3.push(dagittas[r]);
				$(".d3>."+satir).append("<div class='"+renk+" tas' data-id='"+dagittas[r]+"'><div class='tas_txt'>"+no+"</div><div class='dot renk_"+renk+"'></div></div>");
				dagittas[r]="";
				dagit_say++;
			}
		}break;
		
		case 4:
		dagit_say=0;
		while(dagit_say<14){
			r = Math.round(Math.random()*105);
			if(dagittas[r]!=""){
				renk = renkkod[dagittas[r].split("#")[0]*1-1];
				no = dagittas[r].split("#")[1];
				if(renk===undefined){ renk = "joker"; no="J";}
				if(dagit_say>9){ satir = "ustsatir"; }else{satir="altsatir";}
				d4.push(dagittas[r]);
				$(".d4>."+satir).append("<div class='"+renk+" tas' data-id='"+dagittas[r]+"'><div class='tas_txt'>"+no+"</div><div class='dot renk_"+renk+"'></div></div>");
				dagittas[r]="";
				dagit_say++;
			}
		}break;
	}
}