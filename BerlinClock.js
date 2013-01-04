String.prototype.replaceCharAtPosition = function(position, newChar) {
    var stringArray = this.split('');
    stringArray[position] = newChar;
    return stringArray.join('');
}

var berlinClock = function() {

    var formatString = function(/*int*/ time, /*string*/ fivesText, /*string*/ onesText) {
        var fives = Math.floor(time / 5);
        var ones = time % 5;

        for(x=fives; x<fivesText.length; x++){
            fivesText = fivesText.replaceCharAtPosition(x, 'O');
        }

        for(x=ones; x<onesText.length; x++){
            onesText = onesText.replaceCharAtPosition(x, 'O');
        }

        return fivesText + '\n' + onesText;
    };

    var getHours = function(/*string*/ date) {
        var hours = date.substr(0, 2);
        hours = parseInt(hours);

        return formatString(hours, "RRRR", "RRRR");
    };

    var getMinutes = function(/*string*/ date) {
        var hours = date.substr(3, 2);
        hours = parseInt(hours);

        return formatString(hours, "YYRYYRYYRYY", "YYYY");
    };

    var getSeconds = function(/*string*/ date) {
        var seconds = date.substr(6, 2);
        return parseInt(seconds) % 2 === 1 ? "O" : "Y";
    };

    return {
        formatDate: function(/*string*/ date) {
            return getSeconds(date) + "\n" + getHours(date) + "\n" + getMinutes(date);
        }
    }
};