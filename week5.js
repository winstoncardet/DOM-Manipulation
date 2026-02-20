function showFilter() {
  const filterForm = document.getElementById('filterContent');
  const newForm = document.getElementById('newContent');
  newForm.style.display = 'none';
  const isHidden = getComputedStyle(filterForm).display === 'none';
  filterForm.style.display = isHidden ? 'block' : 'none';
}

function showAddNew() {
  const filterForm = document.getElementById('filterContent');
  const newForm = document.getElementById('newContent');
  filterForm.style.display = 'none';
  const isHidden = getComputedStyle(newForm).display === 'none';
  newForm.style.display = isHidden ? 'flex' : 'none';
}

function filterArticles() {
  const showOpinion = document.getElementById('opinionCheckbox').checked;
  const showRecipe = document.getElementById('recipeCheckbox').checked;
  const showUpdate = document.getElementById('updateCheckbox').checked;

  document.querySelectorAll('#articleList article').forEach(a => {
    let show = true;
    if (a.classList.contains('opinion')) show = showOpinion;
    else if (a.classList.contains('recipe')) show = showRecipe;
    else if (a.classList.contains('update')) show = showUpdate;
    a.style.display = show ? '' : 'none';
  });
}

function addNewArticle() {
  const title = document.getElementById('inputHeader').value.trim();
  const text = document.getElementById('inputArticle').value.trim();
  const opinion = document.getElementById('opinionRadio').checked;
  const recipe = document.getElementById('recipeRadio').checked;
  const life = document.getElementById('lifeRadio').checked;

  let type = '';
  let markerText = '';
  if (opinion) { type = 'opinion'; markerText = 'Opinion'; }
  else if (recipe) { type = 'recipe'; markerText = 'Recipe'; }
  else if (life) { type = 'update'; markerText = 'Update'; }

  if (!title || !text || !type) {
    alert('Please enter a title, select a type, and enter text.');
    return;
  }

  const list = document.getElementById('articleList');
  const article = document.createElement('article');
  article.className = type;

  const nextNum = list.querySelectorAll('article').length + 1;
  article.id = 'a' + nextNum;

  const marker = document.createElement('span');
  marker.className = 'marker';
  marker.textContent = markerText;

  const h2 = document.createElement('h2');
  h2.textContent = title.toUpperCase();

  const pText = document.createElement('p');
  pText.textContent = text;

  const pLink = document.createElement('p');
  const a = document.createElement('a');
  a.href = 'moreDetails.html';
  a.textContent = 'Read more...';
  pLink.appendChild(a);

  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(pText);
  article.appendChild(pLink);

  list.appendChild(article);

  document.getElementById('inputHeader').value = '';
  document.getElementById('inputArticle').value = '';
  document.getElementById('opinionRadio').checked = false;
  document.getElementById('recipeRadio').checked = false;
  document.getElementById('lifeRadio').checked = false;

  filterArticles();
}

document.addEventListener('DOMContentLoaded', () => {
  const filterForm = document.getElementById('filterContent');
  if (filterForm) filterForm.style.display = 'none';
  filterArticles();
});
