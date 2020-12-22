function run2() {
var radius = 200;
var fields = $('.item'), container = $('#kep-container'), width = container.width(), height = container.height();
var angle = 0, step = (2*Math.PI) / fields.length;
//console.log(width);
//console.log(height);
fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    if(window.console) {
        console.log($(this).find("img"), x, y);
    }
	$(this).parent().css({position: 'relative'});
    $(this).css({
        left: x + 'px',
        top: y + 'px', 
		position:'absolute'
    });
    angle += step;
});
}