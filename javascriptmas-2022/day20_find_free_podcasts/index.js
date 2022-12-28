import podcasts from './data.js';

// ----------- Query Selectors ------------
const buttons = document.getElementById('buttons');
const list = document.getElementById('list');

// ------------- Event Listeners ------------
buttons.addEventListener('click', (e) => {
  // console.log(e.target)
  // console.log(document.activeElement.id)
  showPodcasts(e);
});

// -------------- DOM Updates ----------------
function showPodcasts(e) {
  const podcastList =
    e.target.id === 'allPodcastBtn' ? podcasts : getFreePodcasts(podcasts);
  clearList();
  return podcastList.map(({ title, rating }) => {
    list.innerHTML += `<div class="podcast-card"><p class="podcast-title">${title}</p><p>${rating} ⭐️</p></div>`;
  });
}

function clearList() {
  list.replaceChildren();
}

// --------------------------------------------
//-------------- Solution A: --------------

// function getFreePodcasts(data){
//    return data
//         .filter(podcast => podcast.paid === false)
//         .map(p => {
//             return {title: p.title, rating: p.rating, paid: p.paid}
//         })
// }

//-------------- Refactored Solution A: --------------

function getFreePodcasts(data) {
  return data
    .filter((podcast) => podcast.paid === false)
    .map(({ title, rating, paid }) => {
      return { title, rating, paid };
    });
}

console.log(getFreePodcasts(podcasts));
