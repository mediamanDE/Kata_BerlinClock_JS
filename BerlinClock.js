var berlinClock = function() {
   // var minutes =
    var getHours = function(/*int*/ hours) {return "OOOO\nOOOO"};
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
    var getSeconds = function(/*int*/ sec) {return "Y"};

    return {
        formatDate : function(/*string*/ date) {
            return getSeconds(date.substr(5, 2)) + "\n" + getHours(date.substr(0, 2)) + "\n" + getMinutes(date.substr(3, 2));
        }

    }

};