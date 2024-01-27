import oneHourBeforeTampstamp from "./oneHourBeforeTampstamp";

export default function clearStorageAfterOneHour() {
  if (localStorage.getItem("dateOfRequest") < oneHourBeforeTampstamp()) {
    localStorage.clear();
  }
}
