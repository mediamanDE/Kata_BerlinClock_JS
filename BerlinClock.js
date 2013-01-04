String.prototype.replaceCharAtPosition = function(position, newChar) {
    var stringArray = this.split('');
    stringArray[position] = newChar;
    return stringArray.join('');
}

var berlinClock = function() {

    var formatString = function(/*string*/ time, /*int*/ max, /*string*/ color1, /*string*/ color2) {
        time = parseInt(time);
        var fives = Math.floor(time / 5);
        var ones = time % 5;

        var fivesText = generateString(max, color1, color2);
        var onesText  = generateString(4, color1, color2);

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
        return formatString(hours, 24, "R", "R");
    };

    var getMinutes = function(/*string*/ date) {
        var mins = date.substr(3, 2);
        return formatString(mins, 60, "Y", "R");
    };

    var getSeconds = function(/*string*/ date) {
        var seconds = date.substr(6, 2);
        return parseInt(seconds) % 2 === 1 ? "O" : "Y";
    };

    var generateString = function(/*int*/ max, /*string*/ color1, /*string*/ color2) {
        var segmentCount = Math.floor(max / 5);
        if (max % 5 === 0) {
            segmentCount--;
        }

        if (segmentCount == 0) {
            segmentCount = max;
        }
        var string = '';
        for(var x=1; x<=segmentCount; x++) {
            if (segmentCount > 4 && x % 3 === 0) {
                string = string + color2;
            } else {
                string = string + color1;
            }
        }
        return string;
    };

    return {
        formatDate: function(/*string*/ date) {
            return getSeconds(date) + "\n" + getHours(date) + "\n" + getMinutes(date);
        },

        generateString : generateString
    }
};