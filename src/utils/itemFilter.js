const itemfilter = (item, genre) => item.filter((item) => (genre) ? item.genres.filter(name => name === genre).length > 0 : item);

export default itemfilter;