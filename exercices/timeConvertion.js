function timeConversion(time) {
    const isAMorPM = time.split('').slice(-2).join('');
    let hour = time.split(':')[0];
    let mins = time.split(':')[1];
    let secs = time.split(':')[2].split('').slice(0,2).join('');

    if( isAMorPM === 'PM' ){
        if(hour === '12'){
            hour = '12';
        }else{
            hour = `${Number(hour) + 12}`
        }
        return `${hour}:${mins}:${secs}`;
    }else{
        if(hour === '12'){
            hour = '00';
        }
        return `${hour}:${mins}:${secs}`;
    }
}

const time = '12:01:00AM';

const timeConverted = timeConversion(time);
console.log(timeConverted);