$(document).ready(function(){

	var palette = new Rickshaw.Color.Palette( { scheme: 'spectrum2000'} );

	function makeGraph(){
		$('#chart, #legend').html('');
		var windowWidth = $(window).width() - 250 ;
		var graph = new Rickshaw.Graph( {
			element: document.getElementById("chart"),
			width: windowWidth,
			height: 500,
			renderer: 'area',
			stroke: true,
			preserve: true,
			series: [
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 200},
									{x: 1384131600, y: 60},
									{x: 1384135200, y: 95},
									{x: 1384138800, y: 3},
									{x: 1384142400, y: 0},
									{x: 1384146000, y: 0},
									{x: 1384149600, y: 0},
									{x: 1384153200, y: 0},
									{x: 1384156800, y: 4},
									{x: 1384160400, y: 16},
									{x: 1384164000, y: 19},
									{x: 1384167600, y: 10},
									{x: 1384171200, y: 2},
									{x: 1384174800, y: 4},
									{x: 1384178400, y: 21},
									{x: 1384182000, y: 38},
									{x: 1384185600, y: 6},
									{x: 1384189200, y: 3},
									{x: 1384192800, y: 2},
									{x: 1384196400, y: 4},
									{x: 1384200000, y: 13},
									{x: 1384203600, y: 2},
									{x: 1384207200, y: 35},
									{x: 1384210800, y: 99}],
					name: 'Joe'
				},
				{
					color: palette.color(),
					data: [ {x: 1384128000, y: 93},
									{x: 1384131600, y: 18},
									{x: 1384135200, y: 0},
									{x: 1384138800, y: 0},
									{x: 1384142400, y: 0},
									{x: 1384146000, y: 4},
									{x: 1384149600, y: 0},
									{x: 1384153200, y: 0},
									{x: 1384156800, y: 0},
									{x: 1384160400, y: 7},
									{x: 1384164000, y: 11},
									{x: 1384167600, y: 5},
									{x: 1384171200, y: 2},
									{x: 1384174800, y: 7},
									{x: 1384178400, y: 18},
									{x: 1384182000, y: 37},
									{x: 1384185600, y: 12},
									{x: 1384189200, y: 9},
									{x: 1384192800, y: 2},
									{x: 1384196400, y: 4},
									{x: 1384200000, y: 20},
									{x: 1384203600, y: 15},
									{x: 1384207200, y: 36},
									{x: 1384210800, y: 52}],
					  name: 'Neel'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 57},
								{x: 1384131600, y: 16},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 4},
								{x: 1384164000, y: 5},
								{x: 1384167600, y: 4},
								{x: 1384171200, y: 7},
								{x: 1384174800, y: 11},
								{x: 1384178400, y: 24},
								{x: 1384182000, y: 15},
								{x: 1384185600, y: 6},
								{x: 1384189200, y: 11},
								{x: 1384192800, y: 5},
								{x: 1384196400, y: 35},
								{x: 1384200000, y: 23},
								{x: 1384203600, y: 63},
								{x: 1384207200, y: 66},
								{x: 1384210800, y: 61}],
					name: 'Chandler'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 3},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 12},
								{x: 1384164000, y: 13},
								{x: 1384167600, y: 15},
								{x: 1384171200, y: 2},
								{x: 1384174800, y: 6},
								{x: 1384178400, y: 10},
								{x: 1384182000, y: 13},
								{x: 1384185600, y: 18},
								{x: 1384189200, y: 10},
								{x: 1384192800, y: 1},
								{x: 1384196400, y: 15},
								{x: 1384200000, y: 3},
								{x: 1384203600, y: 14},
								{x: 1384207200, y: 21},
								{x: 1384210800, y: 14}],
					name: 'Scott'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 29},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 5},
								{x: 1384164000, y: 18},
								{x: 1384167600, y: 6},
								{x: 1384171200, y: 8},
								{x: 1384174800, y: 3},
								{x: 1384178400, y: 11},
								{x: 1384182000, y: 16},
								{x: 1384185600, y: 10},
								{x: 1384189200, y: 3},
								{x: 1384192800, y: 18},
								{x: 1384196400, y: 3},
								{x: 1384200000, y: 3},
								{x: 1384203600, y: 2},
								{x: 1384207200, y: 10},
								{x: 1384210800, y: 6}],
					name: 'Francesca'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 17},
								{x: 1384131600, y: 7},
								{x: 1384135200, y: 2},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 6},
								{x: 1384164000, y: 6},
								{x: 1384167600, y: 2},
								{x: 1384171200, y: 12},
								{x: 1384174800, y: 5},
								{x: 1384178400, y: 6},
								{x: 1384182000, y: 2},
								{x: 1384185600, y: 3},
								{x: 1384189200, y: 4},
								{x: 1384192800, y: 6},
								{x: 1384196400, y: 1},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 4},
								{x: 1384207200, y: 5},
								{x: 1384210800, y: 24}],
					name: 'Javier'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 55},
								{x: 1384131600, y: 33},
								{x: 1384135200, y: 1},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 2},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 6},
								{x: 1384164000, y: 9},
								{x: 1384167600, y: 10},
								{x: 1384171200, y: 10},
								{x: 1384174800, y: 4},
								{x: 1384178400, y: 8},
								{x: 1384182000, y: 4},
								{x: 1384185600, y: 6},
								{x: 1384189200, y: 5},
								{x: 1384192800, y: 11},
								{x: 1384196400, y: 2},
								{x: 1384200000, y: 5},
								{x: 1384203600, y: 4},
								{x: 1384207200, y: 10},
								{x: 1384210800, y: 49}],
					name: 'Anthony'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 38},
						{x: 1384131600, y: 26},
						{x: 1384135200, y: 41},
						{x: 1384138800, y: 0},
						{x: 1384142400, y: 0},
						{x: 1384146000, y: 3},
						{x: 1384149600, y: 0},
						{x: 1384153200, y: 0},
						{x: 1384156800, y: 0},
						{x: 1384160400, y: 2},
						{x: 1384164000, y: 7},
						{x: 1384167600, y: 3},
						{x: 1384171200, y: 7},
						{x: 1384174800, y: 8},
						{x: 1384178400, y: 23},
						{x: 1384182000, y: 5},
						{x: 1384185600, y: 9},
						{x: 1384189200, y: 2},
						{x: 1384192800, y: 12},
						{x: 1384196400, y: 4},
						{x: 1384200000, y: 13},
						{x: 1384203600, y: 1},
						{x: 1384207200, y: 59},
						{x: 1384210800, y: 36}],
					name: 'Wesley'
				},
				{
					color: palette.color(),
					data: [
						{x: 1384128000, y: 5},
						{x: 1384131600, y: 0},
						{x: 1384135200, y: 0},
						{x: 1384138800, y: 0},
						{x: 1384142400, y: 0},
						{x: 1384146000, y: 0},
						{x: 1384149600, y: 0},
						{x: 1384153200, y: 0},
						{x: 1384156800, y: 0},
						{x: 1384160400, y: 5},
						{x: 1384164000, y: 4},
						{x: 1384167600, y: 4},
						{x: 1384171200, y: 33},
						{x: 1384174800, y: 8},
						{x: 1384178400, y: 10},
						{x: 1384182000, y: 12},
						{x: 1384185600, y: 26},
						{x: 1384189200, y: 6},
						{x: 1384192800, y: 6},
						{x: 1384196400, y: 0},
						{x: 1384200000, y: 5},
						{x: 1384203600, y: 3},
						{x: 1384207200, y: 15},
						{x: 1384210800, y: 19}
					],
					name: 'Winson'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 12},
							{x: 1384131600, y: 0},
							{x: 1384135200, y: 0},
							{x: 1384138800, y: 0},
							{x: 1384142400, y: 0},
							{x: 1384146000, y: 0},
							{x: 1384149600, y: 0},
							{x: 1384153200, y: 0},
							{x: 1384156800, y: 0},
							{x: 1384160400, y: 9},
							{x: 1384164000, y: 20},
							{x: 1384167600, y: 17},
							{x: 1384171200, y: 10},
							{x: 1384174800, y: 7},
							{x: 1384178400, y: 32},
							{x: 1384182000, y: 12},
							{x: 1384185600, y: 8},
							{x: 1384189200, y: 24},
							{x: 1384192800, y: 8},
							{x: 1384196400, y: 5},
							{x: 1384200000, y: 25},
							{x: 1384203600, y: 28},
							{x: 1384207200, y: 33},
							{x: 1384210800, y: 27}],
					name: 'Camila'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 1},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 0},
								{x: 1384164000, y: 14},
								{x: 1384167600, y: 4},
								{x: 1384171200, y: 0},
								{x: 1384174800, y: 13},
								{x: 1384178400, y: 6},
								{x: 1384182000, y: 10},
								{x: 1384185600, y: 6},
								{x: 1384189200, y: 0},
								{x: 1384192800, y: 0},
								{x: 1384196400, y: 0},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 0},
								{x: 1384207200, y: 0},
								{x: 1384210800, y: 1}],
					name: 'Alex'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 2},
							{x: 1384131600, y: 2},
							{x: 1384135200, y: 2},
							{x: 1384138800, y: 0},
							{x: 1384142400, y: 0},
							{x: 1384146000, y: 0},
							{x: 1384149600, y: 0},
							{x: 1384153200, y: 0},
							{x: 1384156800, y: 0},
							{x: 1384160400, y: 0},
							{x: 1384164000, y: 0},
							{x: 1384167600, y: 2},
							{x: 1384171200, y: 2},
							{x: 1384174800, y: 0},
							{x: 1384178400, y: 1},
							{x: 1384182000, y: 0},
							{x: 1384185600, y: 0},
							{x: 1384189200, y: 0},
							{x: 1384192800, y: 0},
							{x: 1384196400, y: 5},
							{x: 1384200000, y: 0},
							{x: 1384203600, y: 0},
							{x: 1384207200, y: 11},
							{x: 1384210800, y: 5}],
					name: 'Lane'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 1},
							{x: 1384131600, y: 1},
							{x: 1384135200, y: 3},
							{x: 1384138800, y: 0},
							{x: 1384142400, y: 0},
							{x: 1384146000, y: 1},
							{x: 1384149600, y: 0},
							{x: 1384153200, y: 3},
							{x: 1384156800, y: 4},
							{x: 1384160400, y: 21},
							{x: 1384164000, y: 28},
							{x: 1384167600, y: 25},
							{x: 1384171200, y: 26},
							{x: 1384174800, y: 14},
							{x: 1384178400, y: 41},
							{x: 1384182000, y: 32},
							{x: 1384185600, y: 27},
							{x: 1384189200, y: 8},
							{x: 1384192800, y: 1},
							{x: 1384196400, y: 0},
							{x: 1384200000, y: 2},
							{x: 1384203600, y: 0},
							{x: 1384207200, y: 0},
							{x: 1384210800, y: 1}],
					name: 'Sam'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 27},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 4},
								{x: 1384164000, y: 20},
								{x: 1384167600, y: 9},
								{x: 1384171200, y: 7},
								{x: 1384174800, y: 0},
								{x: 1384178400, y: 29},
								{x: 1384182000, y: 14},
								{x: 1384185600, y: 2},
								{x: 1384189200, y: 9},
								{x: 1384192800, y: 3},
								{x: 1384196400, y: 3},
								{x: 1384200000, y: 3},
								{x: 1384203600, y: 2},
								{x: 1384207200, y: 0},
								{x: 1384210800, y: 0}
					],
					name: 'Heather'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 18},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 4},
								{x: 1384164000, y: 11},
								{x: 1384167600, y: 13},
								{x: 1384171200, y: 6},
								{x: 1384174800, y: 2},
								{x: 1384178400, y: 14},
								{x: 1384182000, y: 15},
								{x: 1384185600, y: 9},
								{x: 1384189200, y: 6},
								{x: 1384192800, y: 3},
								{x: 1384196400, y: 18},
								{x: 1384200000, y: 5},
								{x: 1384203600, y: 15},
								{x: 1384207200, y: 13},
								{x: 1384210800, y: 24}],
					name: 'Mitul'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 1},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 0},
								{x: 1384164000, y: 2},
								{x: 1384167600, y: 0},
								{x: 1384171200, y: 4},
								{x: 1384174800, y: 1},
								{x: 1384178400, y: 1},
								{x: 1384182000, y: 3},
								{x: 1384185600, y: 22},
								{x: 1384189200, y: 0},
								{x: 1384192800, y: 0},
								{x: 1384196400, y: 0},
								{x: 1384200000, y: 5},
								{x: 1384203600, y: 11},
								{x: 1384207200, y: 10},
								{x: 1384210800, y: 5}],
					name: 'Adam'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 1},
								{x: 1384131600, y: 4},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 9},
								{x: 1384164000, y: 24},
								{x: 1384167600, y: 4},
								{x: 1384171200, y: 5},
								{x: 1384174800, y: 9},
								{x: 1384178400, y: 34},
								{x: 1384182000, y: 20},
								{x: 1384185600, y: 14},
								{x: 1384189200, y: 4},
								{x: 1384192800, y: 0},
								{x: 1384196400, y: 1},
								{x: 1384200000, y: 1},
								{x: 1384203600, y: 0},
								{x: 1384207200, y: 7},
								{x: 1384210800, y: 5}],
					name: 'Cassie'
				},{
					color: palette.color(),
					data: [{x: 1384128000, y: 9},
								{x: 1384131600, y: 1},
								{x: 1384135200, y: 1},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 3},
								{x: 1384160400, y: 6},
								{x: 1384164000, y: 9},
								{x: 1384167600, y: 15},
								{x: 1384171200, y: 18},
								{x: 1384174800, y: 16},
								{x: 1384178400, y: 37},
								{x: 1384182000, y: 27},
								{x: 1384185600, y: 19},
								{x: 1384189200, y: 11},
								{x: 1384192800, y: 16},
								{x: 1384196400, y: 1},
								{x: 1384200000, y: 8},
								{x: 1384203600, y: 12},
								{x: 1384207200, y: 35},
								{x: 1384210800, y: 12}],
					name: 'Stas'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 3},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 2},
								{x: 1384138800, y: 1},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 2},
								{x: 1384160400, y: 10},
								{x: 1384164000, y: 8},
								{x: 1384167600, y: 8},
								{x: 1384171200, y: 10},
								{x: 1384174800, y: 2},
								{x: 1384178400, y: 9},
								{x: 1384182000, y: 12},
								{x: 1384185600, y: 12},
								{x: 1384189200, y: 2},
								{x: 1384192800, y: 5},
								{x: 1384196400, y: 5},
								{x: 1384200000, y: 19},
								{x: 1384203600, y: 5},
								{x: 1384207200, y: 13},
								{x: 1384210800, y: 4}],
					name: 'Michael'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 2},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 5},
								{x: 1384164000, y: 7},
								{x: 1384167600, y: 19},
								{x: 1384171200, y: 11},
								{x: 1384174800, y: 3},
								{x: 1384178400, y: 14},
								{x: 1384182000, y: 18},
								{x: 1384185600, y: 19},
								{x: 1384189200, y: 10},
								{x: 1384192800, y: 3},
								{x: 1384196400, y: 1},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 1},
								{x: 1384207200, y: 0},
								{x: 1384210800, y: 0}],
					name: 'Clayton'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
							{x: 1384131600, y: 0},
							{x: 1384135200, y: 0},
							{x: 1384138800, y: 0},
							{x: 1384142400, y: 0},
							{x: 1384146000, y: 0},
							{x: 1384149600, y: 0},
							{x: 1384153200, y: 0},
							{x: 1384156800, y: 2},
							{x: 1384160400, y: 19},
							{x: 1384164000, y: 14},
							{x: 1384167600, y: 28},
							{x: 1384171200, y: 14},
							{x: 1384174800, y: 7},
							{x: 1384178400, y: 10},
							{x: 1384182000, y: 14},
							{x: 1384185600, y: 37},
							{x: 1384189200, y: 15},
							{x: 1384192800, y: 1},
							{x: 1384196400, y: 3},
							{x: 1384200000, y: 0},
							{x: 1384203600, y: 2},
							{x: 1384207200, y: 1},
							{x: 1384210800, y: 0}
					],
					name: 'Andrew'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
							{x: 1384131600, y: 0},
							{x: 1384135200, y: 0},
							{x: 1384138800, y: 0},
							{x: 1384142400, y: 0},
							{x: 1384146000, y: 0},
							{x: 1384149600, y: 0},
							{x: 1384153200, y: 0},
							{x: 1384156800, y: 0},
							{x: 1384160400, y: 2},
							{x: 1384164000, y: 2},
							{x: 1384167600, y: 1},
							{x: 1384171200, y: 1},
							{x: 1384174800, y: 0},
							{x: 1384178400, y: 9},
							{x: 1384182000, y: 6},
							{x: 1384185600, y: 2},
							{x: 1384189200, y: 5},
							{x: 1384192800, y: 2},
							{x: 1384196400, y: 2},
							{x: 1384200000, y: 3},
							{x: 1384203600, y: 5},
							{x: 1384207200, y: 6},
							{x: 1384210800, y: 0}],
					name: 'David'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 2},
								{x: 1384164000, y: 2},
								{x: 1384167600, y: 0},
								{x: 1384171200, y: 2},
								{x: 1384174800, y: 2},
								{x: 1384178400, y: 0},
								{x: 1384182000, y: 0},
								{x: 1384185600, y: 0},
								{x: 1384189200, y: 0},
								{x: 1384192800, y: 0},
								{x: 1384196400, y: 0},
								{x: 1384200000, y: 2},
								{x: 1384203600, y: 2},
								{x: 1384207200, y: 0},
								{x: 1384210800, y: 0}],
					name: 'Chip'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 1},
								{x: 1384164000, y: 3},
								{x: 1384167600, y: 1},
								{x: 1384171200, y: 1},
								{x: 1384174800, y: 1},
								{x: 1384178400, y: 2},
								{x: 1384182000, y: 1},
								{x: 1384185600, y: 0},
								{x: 1384189200, y: 0},
								{x: 1384192800, y: 0},
								{x: 1384196400, y: 7},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 0},
								{x: 1384207200, y: 4},
								{x: 1384210800, y: 0}],
					name: 'Sunmi'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 3},
								{x: 1384164000, y: 7},
								{x: 1384167600, y: 6},
								{x: 1384171200, y: 4},
								{x: 1384174800, y: 22},
								{x: 1384178400, y: 23},
								{x: 1384182000, y: 13},
								{x: 1384185600, y: 6},
								{x: 1384189200, y: 5},
								{x: 1384192800, y: 3},
								{x: 1384196400, y: 0},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 4},
								{x: 1384207200, y: 0},
								{x: 1384210800, y: 0}],
					name: 'Matt'
				},
				{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 14},
								{x: 1384164000, y: 24},
								{x: 1384167600, y: 37},
								{x: 1384171200, y: 23},
								{x: 1384174800, y: 30},
								{x: 1384178400, y: 66},
								{x: 1384182000, y: 36},
								{x: 1384185600, y: 48},
								{x: 1384189200, y: 5},
								{x: 1384192800, y: 10},
								{x: 1384196400, y: 2},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 1},
								{x: 1384207200, y: 4},
								{x: 1384210800, y: 1}],
					name: 'Omar'
				},	{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 0},
								{x: 1384164000, y: 1},
								{x: 1384167600, y: 3},
								{x: 1384171200, y: 0},
								{x: 1384174800, y: 0},
								{x: 1384178400, y: 0},
								{x: 1384182000, y: 0},
								{x: 1384185600, y: 0},
								{x: 1384189200, y: 2},
								{x: 1384192800, y: 0},
								{x: 1384196400, y: 0},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 0},
								{x: 1384207200, y: 0},
								{x: 1384210800, y: 0}],
					name: 'Kristen'
				},	{
					color: palette.color(),
					data: [{x: 1384128000, y: 0},
								{x: 1384131600, y: 0},
								{x: 1384135200, y: 0},
								{x: 1384138800, y: 0},
								{x: 1384142400, y: 0},
								{x: 1384146000, y: 0},
								{x: 1384149600, y: 0},
								{x: 1384153200, y: 0},
								{x: 1384156800, y: 0},
								{x: 1384160400, y: 0},
								{x: 1384164000, y: 2},
								{x: 1384167600, y: 0},
								{x: 1384171200, y: 0},
								{x: 1384174800, y: 0},
								{x: 1384178400, y: 0},
								{x: 1384182000, y: 0},
								{x: 1384185600, y: 0},
								{x: 1384189200, y: 0},
								{x: 1384192800, y: 0},
								{x: 1384196400, y: 0},
								{x: 1384200000, y: 0},
								{x: 1384203600, y: 9},
								{x: 1384207200, y: 0},
								{x: 1384210800, y: 0}],
					name: 'Rudy'
				}
			]
		} );

		var slider = new Rickshaw.Graph.RangeSlider( {
			graph: graph,
			element: $('#slider')
		} );

		var hoverDetail = new Rickshaw.Graph.HoverDetail( {
			graph: graph,
			xFormatter: function(x) {
				return new Date(x * 1000).toString();
			}
		} );

		var annotator = new Rickshaw.Graph.Annotate( {
			graph: graph,
			element: document.getElementById('timeline')
		} );

		var legend = new Rickshaw.Graph.Legend( {
			graph: graph,
			element: document.getElementById('legend')
		} );

		var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
			graph: graph,
			legend: legend
		} );

		var order = new Rickshaw.Graph.Behavior.Series.Order( {
			graph: graph,
			legend: legend
		} );

		var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight( {
			graph: graph,
			legend: legend
		} );

		var smoother = new Rickshaw.Graph.Smoother( {
			graph: graph,
			element: $('#smoother')
		} );

		var ticksTreatment = 'glow';

		var axes = new Rickshaw.Graph.Axis.Time( {
			graph: graph,
		} );

		axes.render();

		var yAxis = new Rickshaw.Graph.Axis.Y( {
			graph: graph,
			tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
			ticksTreatment: ticksTreatment
		} );

		yAxis.render();

		var controls = new RenderControls( {
			element: document.querySelector('form'),
			graph: graph
		} );

		graph.render();

	}

	makeGraph();

	$(window).resize(function(){
		makeGraph();
	});

});

