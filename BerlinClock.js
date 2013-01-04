String.prototype.replaceCharAtPosition = function(position, newChar) {
    var stringArray = this.split('');
    stringArray[position] = newChar;
    return stringArray.join('');
}

var berlinClock = function() {

    var formatString = function(/*string*/ time, /*string*/ fivesText, /*string*/ onesText) {
        time = parseInt(time);
        var fives = Math.floor(time / 5);
        var ones = time % 5;

        fivesText = switchLampsOff(fivesText, fives);
        onesText = switchLampsOff(onesText, ones);

        return fivesText + '\n' + onesText;
    };

    var switchLampsOff = function(/*string*/ lamps, /*string*/ ons) {
        for(x=ons; x<lamps.length; x++){
            lamps=lamps.replaceCharAtPosition(x, 'O');
        }
        return lamps;
    }

    var getHours = function(/*string*/ date) {
        var hours = date.substr(0, 2);
        return formatString(hours, "RRRR", "RRRR");
    };

    var getMinutes = function(/*string*/ date) {
        var hours = date.substr(3, 2);
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