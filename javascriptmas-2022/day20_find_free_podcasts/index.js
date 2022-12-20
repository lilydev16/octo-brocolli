import podcasts from './data.js';

//Solution A:

// function getFreePodcasts(data) {
//   return data
//     .filter((podcast) => podcast.paid === false)
//     .map((p) => {
//       return { title: p.title, rating: p.rating, paid: p.paid };
//     });
// }

// Refactored Solution A:

function getFreePodcasts(data) {
  return data
    .filter((podcast) => podcast.paid === false)
    .map(({ title, rating, paid }) => {
      return { title, rating, paid };
    });
}

console.log(getFreePodcasts(podcasts));
