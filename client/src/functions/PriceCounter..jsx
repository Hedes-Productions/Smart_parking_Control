import DateCounter from './DateCounter';

function PriceCounter(
  bookedYear,
  bookedMonth,
  bookedDay,
  bookedHour,
  bookedMinute,
  priceForHour,
  priceForMinute,
  priceForSecond
) {
  const dateArray = DateCounter(
    bookedYear,
    bookedMonth,
    bookedDay,
    bookedHour,
    bookedMinute
  );
  const remainingHours = dateArray[0];
  const remainingMinutes = dateArray[1];
  const remainingSeconds = dateArray[2];

  return (
    remainingHours * priceForHour +
    remainingMinutes * priceForMinute +
    remainingSeconds * priceForSecond
  );
}

export default PriceCounter;
