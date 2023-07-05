function navigate(page) {
    history.pushState(null, null, page);
    fetchPage(page);
  }
  
  function fetchPage(page) {
    fetch(page + '.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading page:', error);
      });
  }
  
  window.onpopstate = function() {
    var page = location.pathname.substring(1);
    fetchPage(page);
  };
  
  var initialPage = location.pathname.substring(1);
  fetchPage(initialPage);
  