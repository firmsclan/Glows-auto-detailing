'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('15:00'); // Default to 3:00 PM

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    // Save selectedDate and selectedTime to your array or send to backend
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  };

  return (
    <div>
      <h1>Book Appointment</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        minDate={new Date()} // Block past dates
        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6} // Block weekends
      />
      <TimePicker
        onChange={handleTimeChange}
        value={selectedTime}
        minTime="15:00"
        maxTime="19:00"
        disableClock={true} // Disable clock for simplicity
      />
      <button onClick={handleSubmit}>Book Appointment</button>
    </div>
  );
};

export default BookingPage;
