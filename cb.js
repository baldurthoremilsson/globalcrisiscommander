var controlBoxObject = 
{
	level: 0,
	timer: 0,
	score: 0,
	is_expd: false,
	html: $(
				'<div id="controlbox" style="width: 190px; height:30px">'+
					'<img class="arrow-down" src="assets/pics/nav_arrow_down.png">'+
					'<img class="arrow-up" src="assets/pics/nav_arrow_up.png" style="display: none">'+

					'<div id="controlboxCompressed">'+
						'<div id="scoretext" class="cbc">Level</div><div id="level" class="cbc">1</div>'+
						'<div id="timertext" class="cbc">Time</div><div id="timer" class="cbc">0</div>'+
						'<div id="scoretext" class="cbc">Score</div><div id="score" class="cbc">0</div>'+
					'</div>'+
					
					'<div id="controlboxExpanded" style="display: none;">'+
						'<div class="cbc">Estatus</div>'+
						'<div class="cbc">Emusic - TODO</div>'+
						'<div class="cbc">'+
							'<tr><button id="pause">Pause Game</button></tr>'+
							'<tr><button id="exit">Exit Game</button></tr>'+
						'</div>'+
					'</div>'+
					
				 '</div>'
			),
			
	getLevel: function() { return this.level; },
	getTimer: function() { return this.time;  },
	getScore: function() { return this.score; },
	getControlBox: function() { return this.html; },
	
	setLevel: function(level) {
		this.level = level;
		$('#level').html(level);
		},
	
	setTimer: function(time) {
		this.time = time;
		$('#timer').html(time);
		},
		
	setScore: function(score) {
		this.score = score;
		$('#score').html(score);
		},
		
	click: function() {
		if(!this.is_expd)
		{
			this.width = $('#controlbox').css('width');
			$('img.arrrow-down').fadeOut();
			$('#controlbox #controlboxCompressed').fadeOut('fast');
			$('#controlbox').animate(
				{width: 500, height: 50},
				200,
				function() { $('#controlbox #controlboxExpanded').fadeIn('fast'); }
			);
			this.is_expd = true;
			return;
		}
				
		$('#controlbox img.arrrow-down').fadeOut();
		$('#controlbox #controlboxExpanded').fadeOut('fast');
		$('#controlbox').animate(
			{width: 190, height: 30},
			200,
			function() { $('#controlbox #controlboxCompressed').fadeIn('fast'); }
			);

		this.is_expd = false;
		}
};