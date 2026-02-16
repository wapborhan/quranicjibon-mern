// utils/swamStorage.js

export const getSwamData = () => {
  if (typeof window === "undefined") return {};
  const data = JSON.parse(localStorage.getItem("swamData")) || [];
  const mapped = {};
  data.forEach((item) => {
    mapped[item.date] = item.isSwam;
  });
  return mapped;
};

export const getSwamRawData = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("swamData")) || [];
};

export const upsertSwamByDate = (date, isSwam) => {
  const data = getSwamRawData();
  const index = data.findIndex((d) => d.date === date);

  if (index > -1) {
    data[index].isSwam = isSwam;
  } else {
    data.push({ date, isSwam });
  }

  localStorage.setItem("swamData", JSON.stringify(data));
};

export const updateSwamData = (date, isSwam) => {
  if (typeof window === "undefined") return;

  const data = JSON.parse(localStorage.getItem("swamData")) || [];
  const index = data.findIndex((d) => d.date === date);

  if (index > -1) {
    data[index].isSwam = isSwam;
  } else {
    data.push({ date, isSwam });
  }

  localStorage.setItem("swamData", JSON.stringify(data));
};
