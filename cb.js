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
						'<div class="expanded">'+
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
			$('#controlbox .arrow-down').fadeOut();
			$('#controlbox #controlboxCompressed').fadeOut('fast');
			$('#overlay').animate(
				{width: 500, height: 100},
				200,
				function() { $('#controlbox #controlboxExpanded').fadeIn('fast');
							 $('#controlbox').css({width: 500, height: 100});
							 $('#controlbox .arrow-up').fadeIn();
						   } 
			);
			this.is_expd = true;
			return;
		}
				
		$('#controlbox .arrow-up').fadeOut();
		$('#controlbox #controlboxExpanded').fadeOut('fast');
		$('#overlay').animate(
			{width: 190, height: 30},
			200,
			function() { $('#controlbox #controlboxCompressed').fadeIn('fast');
						 $('#controlbox').css({width: 190, height: 30});
						 $('#controlbox .arrow-down').fadeIn(); 
					   } 
			);

		this.is_expd = false;
		}
};