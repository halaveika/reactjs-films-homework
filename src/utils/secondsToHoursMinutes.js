const secondsToHoursMinutes = (minutes) => ((minutes > 60) ? `${Math.floor(minutes / 60)}h ${(minutes % 60)}m`
  : `${minutes}m`);

export default secondsToHoursMinutes;
