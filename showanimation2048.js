function showNumberWithAnimation (i,j,randNumber,junjun) {
	var numberCell = $('#number-cell-'+i+"-"+j);
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color',getNumberColor(randNumber));
    numberCell.css('font-size',20);

    if (randNumber == 2) {
        numberCell.text(junjun);
        numberCell.css('font-size',20);
    }
    else if (randNumber == 4) {
        numberCell.text(junjun);
        numberCell.css('font-size',20);
    }
    else if (randNumber == 8) {
        numberCell.text(junjun);
        numberCell.css('font-size',20);
    }
    else if (randNumber == 16) {}
    else if (randNumber == 32) {}
    else if (randNumber == 64) {}
    else if (randNumber == 128) {}
    else if (randNumber == 256) {}
    else if (randNumber == 512) {}
    else if (randNumber == 1024) {}
    else if (randNumber == 2048) {}

    

    numberCell.animate({
        width:cellSideLength,
        height:cellSideLength,
        top:getPosTop( i , j ),
        left:getPosLeft( i , j )
    },50);
}

function showMoveAnimation( fromx , fromy , tox, toy ){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({
        top:getPosTop( tox , toy ),
        left:getPosLeft( tox , toy )
    },200);
}

function updateScore( score ){
    $('#score').text( score );
}
