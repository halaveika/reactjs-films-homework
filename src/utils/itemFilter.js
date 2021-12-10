const itemfilter = (item, genre) => item
  .filter((e) => ((genre) ? e.genres.filter((name) => name === genre).length > 0 : e));

export default itemfilter;
