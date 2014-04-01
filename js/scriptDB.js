function initDB(){
	if(localStorage.getItem('counter')===null){
		localStorage.setItem('counter','0');
	}
}

function addTrain(JSONTrain){
	count=parseInt(localStorage.getItem('counter'));
	add=true;
	for(i=1; i<=count;i++){
		array=[];
		array[i]=JSON.parse(localStorage.getItem(i+""));
		numEstratto = (array[i])['id'];
		numTreno = JSONTrain['id'];
		if(numEstratto !== numTreno){
			add=true;
		}else{
			add=false;
			break;
		}
	}
	if(add){
		JString=JSON.stringify(JSONTrain);
		count=parseInt(localStorage.getItem('counter'));
		localStorage.setItem('counter',(++count)+"");
		localStorage.setItem(count+"", JString);
	}
}

function getTrains(){
	count=parseInt(localStorage.getItem('counter'));
	for(i=1; i<=count;i++) {
	    oggetto = JSON.parse(localStorage.getItem(i+""));
		$( '#cronologia' ).prepend("<li ><a href='#' id='"+oggetto.id+"' class='history'><p>" + oggetto.stazionePartenza + oggetto.partenza + "</p><p>Direzione: " + oggetto.stazione + "</p></a></li>");
	}	
}