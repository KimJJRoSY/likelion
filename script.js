const timeDiv = document.getElementById("time");
const dateDiv = document.getElementById("date");

function getTime() {
  let now = new Date();
  let hour = padZero(now.getHours());
  let minute = padZero(now.getMinutes());
  let second = padZero(now.getSeconds());
  timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
  setInterval(getTime, 1000);
}

function padZero(data) {
  return data < 10 ? `0${data}` : data;
}

function getDate() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  dateDiv.textContent = `${year}년 ${month}월 ${date}일`;
}

getTime();
getDate();
