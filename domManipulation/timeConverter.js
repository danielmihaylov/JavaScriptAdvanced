function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click',convertDays);
    document.getElementById('hoursBtn').addEventListener('click',convertHours);
    document.getElementById('minutesBtn').addEventListener('click',convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click',convertSeconds);

    let rates = {
        'days': 1,
        'hours': 24,
        'minutes': 1440,
        'seconds': 86400
    };


    function convertDays() {
        let input = Number(document.getElementById('days').value);
        let units = 'days';
        convert(input,units);
    }

    function convertHours() {
        let input = Number(document.getElementById('hours').value);
        let units = 'hours';
        convert(input,units);
    }

    function convertMinutes() {
        let input = Number(document.getElementById('minutes').value);
        let units = 'minutes';
        convert(input,units);
    }

    function convertSeconds() {
        let input = Number(document.getElementById('seconds').value);
        let units = 'seconds';
        convert(input,units);
    }
    
    function convert(input,units) {
        document.getElementById('days').value = input/rates[units] * rates['days'];
        document.getElementById('hours').value = input/rates[units] * rates['hours'];
        document.getElementById('minutes').value = input/rates[units] * rates['minutes'];
        document.getElementById('seconds').value = input/rates[units] * rates['seconds'];
    }
}

