"use strict";
const id = document.querySelector(".advice__id");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".btn");

const givenAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const dataId = await data.slip.id;
  const dataAdvice = await data.slip.advice;
  id.textContent = dataId;
  advice.textContent = dataAdvice;
  console.log(dataId, dataAdvice);
};

btn.addEventListener("click", givenAdvice);
givenAdvice();
