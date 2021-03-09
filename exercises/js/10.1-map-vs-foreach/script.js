const newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: 'Bad Boys',
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const getIdAndName_foreach = (array) => {
  const result = [];

  array.forEach((obj) => {
    result.push({ id: obj.id, title: obj.title });
  });
  return result;
};

console.log(getIdAndName_foreach(newReleases));

const getIdAndName_map = (array) => {
  let result = [];

  result = array.map((obj) => ({
    id: obj.id,
    title: obj.title + 10,
  }));
  return result;
};

console.log(getIdAndName_map(newReleases));
