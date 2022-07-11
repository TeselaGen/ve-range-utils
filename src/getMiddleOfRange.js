const getRangeLength = require("./getRangeLength");
const normalizePositionByRangeLength = require("./normalizePositionByRangeLength");

module.exports = function getMiddleOfRange(range, rangeMax) {
  const len = getRangeLength({ start: range.start, end: range.end }, rangeMax);
  return normalizePositionByRangeLength(
    range.start + Math.floor(len / 2),
    rangeMax
  );
};
