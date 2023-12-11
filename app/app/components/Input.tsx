'use client';

import { MouseEvent, useState } from 'react'

const Input = () => {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateAge = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    const dob = document.getElementById("dob") as HTMLInputElement;
    const birthDate = new Date(dob.value);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();

    setAge({
      years,
      months,
      days,
      minutes,
      seconds,
    });
  };


  return (
    <>
      <input type="date" className="border p-2 rounded mb-4" name="dob" id="dob" />
      <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => {
        calculateAge(e);
      }}>
        Submit
      </button>
      <p className="mt-4">
        Age is {age.years} years, {age.months} months, {age.days} days,{" "}
        {age.minutes} minutes, and {age.seconds} seconds.
      </p>
    </>
  )
}

export default Input