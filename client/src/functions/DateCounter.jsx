const DateCounter = (
  bookedYear,
  bookedMonth,
  bookedDay,
  bookedHour,
  bookedMinute
) => {
  const bookedConvertedTime = new Date(
    bookedYear,
    bookedMonth,
    bookedDay,
    bookedHour,
    bookedMinute
  );
  const nowTime = new Date();
  const timeDuration = nowTime.getTime() - bookedConvertedTime.getTime();
  console.log(nowTime.getTime() + ',' + bookedConvertedTime.getTime());
  // const days = Math.floor(timeDuration / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDuration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDuration % (1000 * 60)) / 1000);
  return [hours, minutes, seconds];
};

export default DateCounter;
