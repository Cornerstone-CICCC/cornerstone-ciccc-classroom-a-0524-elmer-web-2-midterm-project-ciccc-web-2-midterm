const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQ5ZGQ3ZTViMmY4MDllZGRiNmYzNjhhZjRlNGE4MSIsIm5iZiI6MTcyMzA2MTY5Ny43MzA4MDgsInN1YiI6IjY1NDUyNTk2NDFhNTYxMzM2Yjc2ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djLIhuJihUYFpJ_LjwN74QtldGC2wvRT0AARscHtvnY'
  }
};

//movies image

const movieImages = document.querySelectorAll('.movie-img');

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => {
    movieImages.forEach((img,index) => {
      if (index < response.results.length) {
        const movie = response.results[index];
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = `${movie.title} poster`;
      }
  });
})
.catch(err => console.error(err));

//TV image

fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
  .then(response => response.json())
  .then(response => {
    const tvshowImages = document.querySelectorAll('.tv-img');
    tvshowImages.forEach((img,index) => {
      if (index < response.results.length) {
        const movie = response.results[index];
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = `${movie.title} poster`;
      }
  });
  })
  .catch(err => console.error(err));

  //modal-movie

  // document.addEventListener('DOMContentLoaded',() => {
  //   const closeButtons = document.querySelectorAll('.close');
  //   const movieImages = document.querySelectorAll('.movie-img');
  //   const searchImages = document.querySelectorAll('.search-img');
  //   let movieData = {};

  //   fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
  //   headers: {
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQ5ZGQ3ZTViMmY4MDllZGRiNmYzNjhhZjRlNGE4MSIsIm5iZiI6MTcyMzA2MTY5Ny43MzA4MDgsInN1YiI6IjY1NDUyNTk2NDFhNTYxMzM2Yjc2ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djLIhuJihUYFpJ_LjwN74QtldGC2wvRT0AARscHtvnY'
  //   }
  // })
  // .then(response => response.json())
  // .then(data => {
    
  //   movieData = data.results.reduce((acc, movie) => {
  //     acc[movie.poster_path] = {
  //       title: movie.title,
  //       overview: movie.overview
  //     };
  //     return acc;
  //   }, {});
   
  //   movieImages.forEach(img => {
  //     img.addEventListener('click',() => {
  //       const imgSrc = img.src;
  //       const modal = document.querySelector('.modal');
  //        modal.style.display = 'block';

  //        const modalImg = modal.querySelector('.modal-img');
  //        modalImg.src = imgSrc;

  //        const posterPath = imgSrc.split('/').pop().split('?')[0];

  //        const movieDetails = movieData[`/${posterPath}`];


  //     if (movieDetails) {
  //       modal.querySelector('h2').textContent = movieDetails.title;
  //       modal.querySelector('p').textContent = movieDetails.overview;
  //     }
  //     });
  //   });

  //   searchImages.forEach(img => {
  //     img.addEventListener('click',() => {
  //       const imgSrc = img.src;
  //       const modal = document.querySelector('.modal');
  //        modal.style.display = 'block';

  //        const modalImg = modal.querySelector('.modal-img');
  //        modalImg.src = imgSrc;

  //        const posterPath = imgSrc.split('/').pop().split('?')[0];

  //        const movieDetails = movieData[`/${posterPath}`];


  //     if (movieDetails) {
  //       modal.querySelector('h2').textContent = movieDetails.title;
  //       modal.querySelector('p').textContent = movieDetails.overview;
  //     }
  //     });
  //   });
  // });

  //   closeButtons.forEach(btn => {
  //       btn.onclick = function() {
  //           const modal = btn.closest('.modal');
  //           modal.style.display = 'none';
  //       }
  //   });
  // })

  //modal-TV
  // const modal = document.querySelector('.modal');

  //  document.addEventListener('DOMContentLoaded',() => {
  //   const closeButtons = document.querySelectorAll('.close');
  //   const tvImages = document.querySelectorAll('.tv-img');
  //   let tvData = {};

  //   fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', {
  //   headers: {
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQ5ZGQ3ZTViMmY4MDllZGRiNmYzNjhhZjRlNGE4MSIsIm5iZiI6MTcyMzA2MTY5Ny43MzA4MDgsInN1YiI6IjY1NDUyNTk2NDFhNTYxMzM2Yjc2ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djLIhuJihUYFpJ_LjwN74QtldGC2wvRT0AARscHtvnY'
  //   }
  // })
  // .then(response => response.json())
  // .then(data => {
    
  //   tvData = data.results.reduce((acc, tv) => {
  //     acc[tv.poster_path] = {
  //       title: tv.name,
  //       overview: tv.overview
  //     };
  //     return acc;
  //   }, {});
   
  //   tvImages.forEach(img => {
  //     img.addEventListener('click',() => {
  //       const imgSrc = img.src;
  //       const modal = document.querySelector('.modal');
  //        modal.style.display = 'block';

  //        const modalImg = modal.querySelector('.modal-img');
  //        modalImg.src = imgSrc;

  //        const posterPath = imgSrc.split('/').pop().split('?')[0];

  //        console.log(posterPath)
  //        console.log('posterPath:', posterPath);

  //        const tvDetails = tvData[`/${posterPath}`];


  //     if (tvDetails) {
  //       modal.querySelector('h2').textContent = tvDetails.title;
  //       modal.querySelector('p').textContent = tvDetails.overview;
  //     }else {
  //       // 詳細が見つからない場合の処理
  //       modal.querySelector('h2').textContent = 'タイトルが見つかりません';
  //       modal.querySelector('p').textContent = '概要が見つかりません';
  //     }
  //     });
  //   });
  // });

  //   closeButtons.forEach(btn => {
  //       btn.onclick = function() {
  //           const modal = btn.closest('.modal');
  //           modal.style.display = 'none';
  //       }
  //   });
  // })


  //get search keyword navbar

  const searchBtns = document.querySelector('#search');
  const form = document.querySelector(".d-flex")
  const searchResult = document.querySelector(".search-result")
  const main = document.querySelector('.main');
  const searchImages = document.querySelectorAll('.search-img')

form.addEventListener('submit', async (event) => {
  event.preventDefault(); 
  const keywordInput = document.querySelector('.form-control');
  const keyword = keywordInput.value;
  const keywordDisplay = document.querySelector('.keyword');

  if (keywordDisplay) {
    keywordDisplay.textContent = keyword;
  }

  searchResult.classList.add('appearResult')
  // await getPostById(keyword);
  main.style.display = 'none';

});


// get search keyword home 

//click movie
const keyword = document.querySelector('.keyword')
const movieResult = document.querySelector("#movie-result")

movieResult.addEventListener('click',() => {

  if (keyword) {
    keyword.textContent = "Movie";
  }
  searchResult.classList.add('appearResult')
  main.style.display = 'none';

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => {
    searchImages.forEach((img,index) => {
      if (index < response.results.length) {
        const movie = response.results[index];
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = `${movie.title} poster`;
      }
  });
})
.catch(err => console.error(err));
})

document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.close');
  const movieImages = document.querySelectorAll('.movie-img');
  const tvImages = document.querySelectorAll('.tv-img');
  const searchImages = document.querySelectorAll('.search-img');
  let movieData = {};
  let tvData = {};

  // 映画データの取得
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(data => {
      movieData = data.results.reduce((acc, movie) => {
        acc[movie.poster_path] = {
          title: movie.title,
          overview: movie.overview
        };
        return acc;
      }, {});

      movieImages.forEach(img => {
        img.addEventListener('click', () => {
          showModal(img.src, movieData);
        });
      });

      searchImages.forEach(img => {
        img.addEventListener('click', () => {
          showModal(img.src, movieData);
          console.log('click')
        });
      });
    })
    .catch(err => console.error(err));

  // テレビデータの取得
  fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(response => response.json())
    .then(data => {
      tvData = data.results.reduce((acc, tv) => {
        acc[tv.poster_path] = {
          title: tv.name,
          overview: tv.overview
        };
        return acc;
      }, {});

      tvImages.forEach(img => {
        img.addEventListener('click', () => {
          showModal(img.src, tvData);
        });
      });
    })
    .catch(err => console.error(err));

  // モーダルを表示する関数
  function showModal(imgSrc, data) {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';

    const modalImg = modal.querySelector('.modal-img');
    modalImg.src = imgSrc;

    const posterPath = imgSrc.split('/').pop().split('?')[0];
    const details = data[`/${posterPath}`];

    if (details) {
      modal.querySelector('h2').textContent = details.title;
      modal.querySelector('p').textContent = details.overview;
    } else {
      modal.querySelector('h2').textContent = 'タイトルが見つかりません';
      modal.querySelector('p').textContent = '概要が見つかりません';
    }
  }

  // モーダルを閉じる
  closeButtons.forEach(btn => {
    btn.onclick = function() {
      const modal = btn.closest('.modal');
      modal.style.display = 'none';
    };
  });
});

  







