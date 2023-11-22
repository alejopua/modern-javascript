const day = 10;

if (day === 0) {
    console.log('day is sunday');
} else {
    console.log('day is not sunday');
}

const daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const daysObj = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
};

console.log(daysArray[day] || 'day is not valid')