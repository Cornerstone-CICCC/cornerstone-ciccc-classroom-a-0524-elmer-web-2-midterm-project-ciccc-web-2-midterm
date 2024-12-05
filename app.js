const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQ5ZGQ3ZTViMmY4MDllZGRiNmYzNjhhZjRlNGE4MSIsIm5iZiI6MTcyMzA2MTY5Ny43MzA4MDgsInN1YiI6IjY1NDUyNTk2NDFhNTYxMzM2Yjc2ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djLIhuJihUYFpJ_LjwN74QtldGC2wvRT0AARscHtvnY'
  }
};

const movieUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
const videoUrl = "https://api.themoviedb.org/3/trending/tv/day?language=en-US"

//movies image

const movieImages = document.querySelectorAll('.movie-img');

fetch(movieUrl, options)
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

fetch(videoUrl, options)
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

  //get search keyword navbar

  const searchBtns = document.querySelectorAll('.btn');
  const forms = document.querySelectorAll(".d-flex")
  const searchResult = document.querySelector(".search-result")
  const main = document.querySelector('.main');
  const searchImages = document.querySelectorAll('.search-img')
  const home = document.querySelector('#home');
  let movieData = {};

  forms.forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); 
      const keywordInput = form.querySelector('.form-control');
      const keyword = keywordInput.value;
      const keywordDisplay = document.querySelector('.keyword');
    
      if (keywordDisplay) {
        keywordDisplay.textContent = `Results for: ${keyword}`
      }
      
      main.style.display = 'none';
      home.style.display = 'none';
      searchResult.style.display ='none'

      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}`,options);
        const data = await response.json();
    
        movieData = data.results.reduce((acc, movie) => {
          acc[movie.poster_path] = {
            title: movie.title,
            overview: movie.overview
          };
          return acc;
        }, {});
    
        const searchResults = document.querySelector('.search_results')
        searchResults.innerHTML = '';
        data.results.forEach(movie => {
          searchResults.innerHTML += `
            <div class ="search_images">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="keyword_images">
            </div>
          `
        });
    
        const keywordImages = document.querySelectorAll('.keyword_images');
        keywordImages.forEach(img => {
          img.addEventListener('click', () => {
            showModal(img.src, movieData);
            console.log('click')
          });
        });
    
      }  
        catch(error) {
          console.error('Error:', error);
        }
    });
  })

//click movie
const keyword = document.querySelector('.keyword')
const movieResult = document.querySelector("#movie-result")

movieResult.addEventListener('click',() => {

  if (keyword) {
    keyword.textContent = "Movie";
  }
  searchResult.classList.add('appearResult')
  main.style.display = 'none';
  home.style.display = 'none';

fetch(movieUrl, options)
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

const tvshowResult = document.querySelector("#tvshow-result")

tvshowResult.addEventListener('click',() => {

  if (keyword) {
    keyword.textContent = "TVshow";
  }
  searchResult.classList.add('appearResult')
  main.style.display = 'none';
  home.style.display = 'none';

fetch(videoUrl, options)
  .then(response => response.json())
  .then(response => {
    searchImages.forEach((img,index) => {
      if (index < response.results.length) {
        const TVshow = response.results[index];
        img.src = `https://image.tmdb.org/t/p/w500${TVshow.poster_path}`;
        img.alt = `${TVshow.title} poster`;
      }
  });
})
.catch(err => console.error(err));
})

document.addEventListener('DOMContentLoaded', () => {
  const movieImages = document.querySelectorAll('.movie-img');
  const tvImages = document.querySelectorAll('.tv-img');
  const searchImages = document.querySelectorAll('.search-img');
  let tvData = {};

  // 映画データの取得
  fetch(movieUrl, options)
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
  fetch(videoUrl, options)
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

      searchImages.forEach(img => {
        img.addEventListener('click', () => {
          showModal(img.src, tvData);
        });
      });
    })
    .catch(err => console.error(err));
});

  // モーダルを表示する関数
function showModal(imgSrc, data) {
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';

  const modalImg = modal.querySelector('.modal-img');
  modalImg.src = imgSrc;

  const posterPath = imgSrc.split('https://image.tmdb.org/t/p/w500')[1];
  const details = data[posterPath];

  if (details) {
    modal.querySelector('h2').textContent = details.title;
    modal.querySelector('p').textContent = details.overview;
  } else {
    modal.querySelector('h2').textContent = 'タイトルが見つかりません';
    modal.querySelector('p').textContent = '概要が見つかりません';
  }
}

// モーダルを閉じる
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(btn => {
  btn.onclick = function() {
    const modal = btn.closest('.modal');
    modal.style.display = 'none';
  };
});


//home btn
const keywordResults= document.querySelector('.search_results')
const homeBtn = document.querySelector('#home-btn')

  homeBtn.addEventListener('click',() => {
    main.style.display = 'block'; 
    searchResult.classList.remove('appearResult')
    home.style.display = 'block';
    keywordResults.style.display='none';
  })

  //genres

  const genresContainer = document.querySelector('.dropdown-menu'); 

  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', options)
    .then(response => response.json())
    .then(data => {
      console.log('Genres data:', data);
      data.genres.forEach(genre => {
        const movielist = document.createElement('li');
        movielist.textContent = genre.name;
        movielist.addEventListener('click', () => getMoviesByGenre(genre.id));
        genresContainer.appendChild(movielist);
        
      });
    })
    .catch(err => console.error(err));

  function getMoviesByGenre(genreId) {
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        displayMovies(data.results);
      })
      .catch(err => console.error(err));
  }

  function getMoviesByGenre(genreId) {
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        displayMovies(data.results);
      })
      .catch(err => console.error(err));
  }
  
  // 映画を表示する関数
  function displayMovies(movies) {
    const searchResults = document.querySelector('.search_results');
    searchResults.innerHTML = '';
  
    movies.forEach(movie => {
      searchResults.innerHTML += `
        <div class="search_images">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="keyword_images" alt="${movie.title}">
        </div>
      `;
    });
  
    // 映画画像をクリックしたときにモーダルを表示
    const keywordImages = document.querySelectorAll('.keyword_images');
    keywordImages.forEach(img => {
      img.addEventListener('click', () => {
        showModal(img.src, movieData); 
      });
    });

  }
  

  
  
  

  







