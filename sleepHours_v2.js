const getSleepHours = (day) => {
    switch (day) {
        case 'monday':
            return 4.89
        case 'tuesday':
            return 9.3
        case 'wednesday':
            return 4.54
        case 'thursday':
            return 5.3
        case 'friday':
            return 6.42
        default:
            return 0
    }
}

console.log(getSleepHours('thursday'))

const getActualSleepHours = () => {
    return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday')
}

console.log(getActualSleepHours())


