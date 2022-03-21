// green
// yellow
// red
const TRAFFIC_LIGHT_COLORS = {
  GREEN: "Green",
  YELLOW: "Yellow",
  RED: "Red",
};

function getCarDecision(trafficLightColor) {
  switch (trafficLightColor) {
    case TRAFFIC_LIGHT_COLORS.GREEN: {
      const decision = true;
      return decision;
    }
    case TRAFFIC_LIGHT_COLORS.YELLOW: {
      const decision = false;
      return decision;
    }
    case TRAFFIC_LIGHT_COLORS.RED:
      return true;
    default:
      return false;
  }
}

const decision = getCarDecision(TRAFFIC_LIGHT_COLORS.GREEN);
decision;
