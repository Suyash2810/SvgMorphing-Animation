$(document).ready(function () {
    var elem = $('.btnclick');
    var counter = 0;
    var textload = 0;
    elem.on('mouseover', function () {

        if (counter == 0) {
            elem.animate({
                left: '-=150px'
            }, 100);
            counter++;
        } else if (counter > 0 && counter <= 6) {

            if (counter % 2 == 0) {
                elem.animate({
                    left: '-=300px'
                }, 100);
            }

            if (counter % 2 != 0) {
                elem.animate({
                    left: '+=300px'
                }, 100);
            }

            counter++;
        } else {
            elem.animate({
                left: '+=150px'
            }, 100);
            elem.off('mouseover');

            //new function
            elem.on('click', function () {
                var morphing = anime({
                    targets: '.polymorphing',
                    points: [
                        {
                            value: '215,110 0,110 0,0 47.7,0 67,76'
                        },
                        {
                            value: '215,110 0,110 0,0 0,0 67,76'
                        }
     ],
                    easing: 'easeOutQuad',
                    duration: 2500,
                    delay: 500,
                    elasticity: 500
                });

                var obj = anime({
                    targets: '.btnclick',
                    translateY: '-120px',
                    scale: 0.8,
                    easing: 'easeInOutSine',
                    borderRadius: '20px'

                });
                
                setTimeout(function(){
                    elem.off('click');
                },3200);
            });

        }

    });


});
