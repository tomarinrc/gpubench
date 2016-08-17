//Start Document Ready (Jquery)
$(function() {
	//Headroom (Animated Header Library)
	$(".navbar-default").headroom();

	//Chartist Initiation
	new Chartist.Bar('.gpu-chart-1', {
		labels: ['Q1', 'Q2', 'Q3', 'Q4'],
		series: [
			[14000, 12000, 10000, 10000]
		]
	}, {
		horizontalBars: true,
		stackBars: true,
		axisY: {
			onlyInteger: true
		},
		plugins: [
			Chartist.plugins.ctBarLabels({
				//position: {
				//	x: function(data) {
				//		return "50%"
				//	}
				//},
				labelOffset: {
					y: 5
				}
			})
		]
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 38px'
			});
		}
	});

	//End of Document Ready
});
