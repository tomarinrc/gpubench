//Start Document Ready (Jquery)
$(function() {
	//Headroom (Animated Header Library)
	$(".navbar-default").headroom();

	//Chartist Initiation
	new Chartist.Bar('.gpu-chart-1', {
		labels: ['Q1', 'Q2', 'Q3', 'Q4'],
		series: [
			[1400000, 1400000, 1400000, 1400000],
			[200000, 400000, 500000, 300000],
			[1400000, 200000, 400000, 600000]
		]
	}, {
		horizontalBars: true,
		stackBars: true,
		axisX: {
			labelInterpolationFnc: function(value) {
				return(value / 1000) + 'k';
			}
		}
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 3.8rem'
			});
		}
	});
});
