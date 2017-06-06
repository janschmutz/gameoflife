/**
 * Created by janschmutz on 08.11.16.
 */
var box = $(".box");
function looper() {
    box.on( "click", function log() {
        $(this).css('background-color', 'black');
        $(this).data('this', true);
    });
}
looper();

function Step() {

    box.each(function () {
        var counter = 0;
        var topId;
        var bottomId;
        var leftId;
        var rightId;
        var topLeftId;
        var topRightId;
        var bottomRightId;
        var bottomLeftId;

        var ids = parseInt($(this).attr('id'));
        // if ($(this).data('row') != "1") {
            topId = ids - 10;
            var bitte = $('#'+ topId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        // if ($(this).data('row') != "10") {
            bottomId = ids + 10;
            var bitte = $('#'+ bottomId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        // if ($(this).data('item') != "1") {
            leftId = ids - 1;
            var bitte = $('#'+ leftId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        // if ($(this).data('item') != "10") {
            rightId = ids + 1;
            var bitte = $('#'+ rightId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        // if ($(this).data('item') != "1" && $(this).data('row') !="1") {
            topLeftId = ids + 11;
            var bitte = $('#'+ topLeftId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        // if ($(this).data('item') != "10" && $(this).data('row') !="1") {
            topRightId = ids + 9;
            var bitte = $('#'+ topRightId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        // if ($(this).data('item') != "10" && $(this).data('row') !="10") {
            bottomRightId = ids - 11;
            var bitte = $('#'+ bottomRightId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        // if ($(this).data('item') != "1" && $(this).data('row') !="10") {
            bottomLeftId = ids - 9;
            var bitte = $('#'+ bottomLeftId).data('this');
            if (bitte == true) {
                ++counter;
            }
        // }
        var nextRound = $(this).data('next');
        var thisRound = $(this).data('this');
        if (counter == 3 && nextRound == false) {
            $(this).data('next', true);
        }
        if (counter > 3 && thisRound == true) {
            $(this).data('next', false);
        }
        if (counter < 2 && thisRound == true) {
            $(this).data('next', false);
        }
        if (counter == 2 && thisRound == true) {
            $(this).data('next', true);
        }
        if (counter == 3 && thisRound == true) {
            $(this).data('next', true);
        }
        /*console.log($(this).data('this'));
        console.log(counter);
        console.log(ids);*/

    });

    box.each(function changeColor(){
        var nextRound = $(this).data('next');
        if (nextRound == true) {
            $(this).css('background-color', 'black');
        }
        if (nextRound == false) {
            $(this).css('background-color', 'lightgray');
        }
        console.log(nextRound);

        $(this).data('this', nextRound);
        
    })

};
$("#button").on( "click", function() {
    window.setInterval(Step, 500);
});





