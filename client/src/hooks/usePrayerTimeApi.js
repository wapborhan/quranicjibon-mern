export default function usePrayerTimeApi() {
  async function getRawTimings(latitude, longitude) {
    const dateToday = new Date();
    const year = dateToday.getFullYear();
    const month = dateToday.getMonth() + 1;

    const url = `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&school=1&&latitudeAdjustmentMethod=3&iso8601=true`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }

  return { getRawTimings };
}
