document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search');
    const giphyList = document.querySelector('.list');
  
    const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=';
    const API_KEY = 'znRvNXwGBKyz8T52IXdfmbZ1WFETXA3e';
  
    initialize();
  
    function initialize() {
      searchInput.value = 'Batman';
      searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
          fetchAndDisplayGiphys();
        }
      });
      fetchAndDisplayGiphys();
    }
  
    async function fetchAndDisplayGiphys() {
      try {
        const response = await fetch(
          `${API_URL}${API_KEY}&q=${searchInput.value.trim()}&limit=25`
        );
        const data = await response.json();
  
        clearGiphyList();
        createGiphyList(data.data);
        searchInput.value = '';
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
  
    function clearGiphyList() {
      giphyList.innerHTML = '';
    }
  
    function createGiphyList(giphyData) {
      giphyData.forEach((giphs) => {
        const giphyImg = document.createElement('img');
        giphyImg.className = 'giphs';
        giphyImg.src = giphs.images.original.url;
  
        const listItem = document.createElement('li');
        listItem.appendChild(giphyImg);
        giphyList.appendChild(listItem);
      });
    }
  });
  