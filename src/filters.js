let id2Painter = v => {
  switch (v) {
    case 1:
      painter = "";
      break;
    case 2:
      painter = "";
      break;
    case 3:
      painter = "";
      break;
    case 4:
      painter = "";
      break;
    case 5:
      painter = "";
      break;
    case 6:
      painter = "";
      break;
    default:
      painter = "Unknown";
      break;
  }
  return painter;
};

let id2Era = v => {
  let era = "Unknown";
  switch (v) {
    case 1:
      era = "文艺复兴";
    case 2:
      era = "";
  }
  return era;
};

export default {
  id2Era,
  id2Painter
};
