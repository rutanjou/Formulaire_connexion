(function(){
	'use strict';
	var app = {
		use: null,
		pass: null,
		url:'http://localhost:4000',
		init:function(){
			$('form').on('submit',this.getInfos);
		},
		getInfos:function(e){
			var use = $('#username').val();
			var pass = $('#password').val();
			event.preventDefault();
			console.log(use,pass);
			this.rappelerPorte();
		},
		rappelerPorte:function(){
			$.ajax({
				url:'http://localhost:4000',
				type:'POST',
				data:info,
				success:function(data){
						$(use).html();
						$(pass).html();
						console.log(data);
				},

			});
			

		},
		
		
	}
	app.init();
})();