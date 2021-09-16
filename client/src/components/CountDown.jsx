import React, { useState, useEffect } from 'react';
import './CountDown.css';
import CountUp from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';
import DateCounter from '../functions/DateCounter';
import PriceCounter from '../functions/PriceCounter.';

function CountDown({
  bookedYear,
  bookedMonth,
  bookedDate,
  bookedHour,
  bookedMinute,
  priceForHour,
  priceForMinute,
  priceForSecond,
}) {
  const [hourNow, setHourNow] = useState(
    DateCounter(
      bookedYear,
      bookedMonth,
      bookedDate,
      bookedHour,
      bookedMinute
    )[0]
  );
  const [minuteNow, setMinuteNow] = useState(
    DateCounter(
      bookedYear,
      bookedMonth,
      bookedDate,
      bookedHour,
      bookedMinute
    )[1]
  );
  const [secondNow, setSecondNow] = useState(
    DateCounter(
      bookedYear,
      bookedMonth,
      bookedDate,
      bookedHour,
      bookedMinute
    )[2]
  );
  const [price, setPrice] = useState(
    PriceCounter(
      bookedYear,
      bookedMonth,
      bookedDate,
      bookedHour,
      bookedMinute,
      priceForHour,
      priceForMinute,
      priceForSecond
    )
  );
  const [pageLoaded, setPageLoaded] = useState(false);
  function TimeCountDownController({ countDownTimeAfter }) {
    return (
      <CountUp
        start={0}
        end={countDownTimeAfter}
        useEasing={true}
        useGrouping={true}
        duration={2.75}
        delay={0}
        decimals={0}
      >
        {({ countUpRef }) => (
          <div>
            {pageLoaded ? (
              <div>
                <div className="customCounter">{countDownTimeAfter}</div>
                <div ref={countUpRef} className="notDisplay" />
              </div>
            ) : (
              <div ref={countUpRef} className="customCounter" />
            )}
          </div>
        )}
      </CountUp>
    );
  }

  function PriceCountDownController({ priceNow }) {
    return (
      <CountUp
        start={0}
        end={priceNow}
        useEasing={true}
        useGrouping={true}
        duration={2.75}
        delay={0}
        decimals={0}
      >
        {({ countUpRef }) => (
          <div>
            {pageLoaded ? (
              <div>
                <div className="customCounter">{priceNow}</div>
                <div ref={countUpRef} className="notDisplay" />
              </div>
            ) : (
              <div ref={countUpRef} className="customCounter" />
            )}
          </div>
        )}
      </CountUp>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
      setInterval(() => {
        setHourNow(
          DateCounter(
            bookedYear,
            bookedMonth,
            bookedDate,
            bookedHour,
            bookedMinute
          )[0]
        );
        setMinuteNow(
          DateCounter(
            bookedYear,
            bookedMonth,
            bookedDate,
            bookedHour,
            bookedMinute
          )[1]
        );
        setSecondNow(
          DateCounter(
            bookedYear,
            bookedMonth,
            bookedDate,
            bookedHour,
            bookedMinute
          )[2]
        );
        setPrice(
          PriceCounter(
            bookedYear,
            bookedMonth,
            bookedDate,
            bookedHour,
            bookedMinute,
            priceForHour,
            priceForMinute,
            priceForSecond
          )
        );
      }, 1000);
    }, 1000);
  }, [
    bookedYear,
    bookedMonth,
    bookedDate,
    bookedHour,
    bookedMinute,
    priceForHour,
    priceForMinute,
    priceForSecond,
  ]);

  return (
    <div className="countDownPageContainer">
      <h1>Bill according to time</h1>
      <div className="countDownLargeContainer">
        <div className="countDownContainer">
          <div className="hoursMinutesSeconds">
            <TimeCountDownController countDownTimeAfter={hourNow} />
            <div className="customCounter">:</div>
            <TimeCountDownController countDownTimeAfter={minuteNow} />
            <div className="customCounter">:</div>
            <TimeCountDownController countDownTimeAfter={secondNow} />
          </div>
          <h1>Time Spent</h1>
        </div>
        <div className="countDownContainer">
          <div className="hoursMinutesSeconds">
            <PriceCountDownController priceNow={price} />
          </div>
          <h1>Your bill</h1>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
