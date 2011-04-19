var controlBoxObject = 
{
	level: 0,
	timer: 0,
	score: 0,
	is_expd: false,
	html: $(
				'<div id="controlbox">'+
					'<img class="arrow-down" src="assets/pics/nav_arrow_down.png">'+
					'<img class="arrow-up" src="assets/pics/nav_arrow_up.png" style="display: none">'+

					'<div id="controlboxCompressed">'+
						'<div class="scoretext cbc">Level</div><div class="score cbc">1</div>'+
						'<div class="timertext cbc">Time</div><div class="timer cbc">0</div>'+
						'<div class="leveltext cbc">Score</div><div class="level cbc">0</div>'+

					'</div>'+
					'<div id="controlboxExpanded" style="display: none;">'+
					'<div id="jquery_jplayer_1" class="jp-jplayer"></div>'+
					'<div class="jp-audio">'+
						'<div class="jp-type-single">'+
							'<div class="jp-interface" id="jp_interface_1">'+
								'<ul class="jp-controls">'+
									'<li><a tabindex="1" class="jp-play" href="#" style="display: block;">play</a></li>'+
									'<li><a tabindex="1" class="jp-pause" href="#" style="display: none;">pause</a></li>'+
									'<li><a tabindex="1" class="jp-stop" href="#">stop</a></li>'+
									'<li><a tabindex="1" class="jp-mute" href="#">mute</a></li>'+
									'<li><a tabindex="1" class="jp-unmute" href="#" style="display: none;">unmute</a></li>'+
								'</ul>'+
								'<div class="jp-progress">'+
									'<div class="jp-seek-bar" style="width: 100%;">'+
										'<div class="jp-play-bar" style="width: 2.07816%;"></div>'+
									'</div>'+
								'</div>'+
								'<div class="jp-volume-bar">'+
									'<div class="jp-volume-bar-value" style="width: 80%;"></div>'+
								'</div>'+
								'<div class="jp-current-time"></div>'+
								'<div class="jp-duration"></div>'+
							'</div>'+ 
							'<!--'+
							'<div class="jp-playlist" id="jp_playlist_1">'+
								'<ul>'+
									'<li></li>'+
								'</ul>'+
							'</div>'+
							'-->'+
						'</div>'+
					'</div>'+
					
					'</div>'+
		
				 '</div>'+
				'<div id="overlay"></div>'
			),
			
	getLevel: function() { return this.level; },
	getTimer: function() { return this.time;  },
	getScore: function() { return this.score; },
	getControlBox: function() { return this.html; },
	
	setLevel: function(level) {
		this.level = level;
		$('.level').html(level);
		},
	
	setTimer: function(time) {
		this.time = time;
		$('.timer').html(time);
		},
		
	setScore: function(score) {
		this.score = score;
		$('#score').html(score);
		},
		
	click: function() {
		if(!this.is_expd)
		{
			$('#controlbox .arrow-down').fadeOut();
			$('#controlbox #controlboxCompressed').fadeOut('fast');
			$('#overlay').animate(
				{width: 400, height: 80},
				200,
				function() { $('#controlbox #controlboxExpanded').fadeIn('fast');
							 $('#controlbox').css({width: 400, height: 80});
							 $('#controlbox .arrow-up').fadeIn();
						   } 
			);
			this.is_expd = true;
			return;
		}
				
		$('#controlbox .arrow-up').fadeOut();
		$('#controlbox #controlboxExpanded').fadeOut('fast');
		$('#overlay').animate(
			{width: 200, height: 30},
			200,
			function() { $('#controlbox #controlboxCompressed').fadeIn('fast');
						 $('#controlbox').css({width: 200, height: 30});
						 $('#controlbox .arrow-down').fadeIn(); 
					   } 
			);

		this.is_expd = false;
		}
};