var berlinClock = function() {
   // var minutes =
    var getHours = function(/*int*/ hours) {
        var number = parseInt(hours);
        var fives = Math.floor(number / 5);
        var ones = number % 5;
        var onesText = '';
        for(x=0; x<4; x++){
            if(x < fives){
                onesText += 'R';
            }else{
                onesText += 'O';
            }
        }
        onesText += '\n';
        for(x=0; x<4; x++){
            if(x < ones){
                onesText += 'R';
            }else{
                onesText += 'O';
            }
        }
        return onesText;
    };
    var getMinutes = function(/*int*/ min) {
        var number = parseInt(min);
        var fives = Math.floor(number / 5);
        var ones = number % 5;
        var onesText = '';
        for(x=1; x<=11; x++){
            if(x <= fives){
                if ((x % 3) == 0) {
                    onesText += 'R';
                } else {
                    onesText += 'Y';
                }
            }else{
                onesText += 'O';
            }
        }
        onesText += '\n';
        for(x=0; x<4; x++){
            if(x < ones){
                onesText += 'Y';
            }else{
                onesText += 'O';
            }
        }
        return onesText;
    };
    var getSeconds = function(/*int*/ sec) {
        if (parseInt(sec) % 2 === 1) {
            return "O";
        }
        return "Y";
    };

    return {
        formatDate : function(/*string*/ date) {
            return getSeconds(date.substr(6, 2)) + "\n" + getHours(date.substr(0, 2)) + "\n" + getMinutes(date.substr(3, 2));
        }

    }

};