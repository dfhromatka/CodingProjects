const getSleepHours = (day) => {
  if (day === 'monday') {
    return 7.5
  } else {
    if (day === 'tuesday') {
      return 7.32
    } else {
      if (day === 'wednesday') {
        return 3.5
      } else {
        if (day = 'thursday') {
          return 4.12
        } else {
          if (day === 'friday') {
            return 5.3
          }
        }
      }
    }
  }
}

console.log(getSleepHours('thursday'))
