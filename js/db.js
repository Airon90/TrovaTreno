function initDB() {
	if(isNaN(parseInt(localforage.getItem("counter"))))
		localforage.setItem( "counter", "0", function() { console.log('data initializied'); });
}

function addTreno( t ) {
    counter = parseInt(localforage.getItem(0));
    localforage.setItem(0,++counter,function(){ console.log('incrementato'); } );
    localforage.setItem( ""+counter, t, function(){ console.log('added'); } );
}
