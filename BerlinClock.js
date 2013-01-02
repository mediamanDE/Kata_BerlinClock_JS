var berlinClock = function() {
    var getHours = function(/*string*/ date) {
        var hours = date.substr(0, 2);
        hours = parseInt(hours);
        var fives = Math.floor(hours / 5);
        var ones = hours % 5;

        var fivesText = "RRRR";
        for(x=fives; x<fivesText.length; x++){
            fivesText[x] = 'O';
        }

        var onesText = "RRRR";
        for(x=ones; x<onesText.length; x++){
            onesText[x] = 'O';
        }

        return fivesText + '\n' + onesText;
    };
    var getMinutes = function(/*string*/ min) {
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
    var getSeconds = function(/*string*/ date) {
        var seconds = date.substr(6, 2);
        return parseInt(seconds) % 2 === 1 ? "O" : "Y";
    };

    return {
        formatDate: function(/*string*/ date) {
            return getSeconds(date) + "\n" + getHours(date) + "\n" + getMinutes(date.substr(3, 2));
        }
    }
};