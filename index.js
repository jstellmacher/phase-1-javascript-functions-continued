// jai stellmachers code!
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function wrapAdjective(style = "*") {
  return function wrapSpecail(adjective = "special") {
    return `You are ${style}${adjective}${style}!`;
  };
}
