const input = document.getElementById('search');
const btn = document.getElementById('submit');
const container = document.querySelector('.container');

btn.addEventListener('click', async () => {
  console.log(input.value);
  //   e.preventDefault();
  const myfetch = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}&key=AIzaSyBC3QmY2SFNkAPrQlKJbh6sHAMhRuFt-e4`);
  const result = await myfetch.json();
  const { items } = result;
  console.log(items);
  // cartDiv.innerHTML = '';
  for (let i = 0; i < items.length; i++) {
    const { thumbnail } = items[i].volumeInfo.imageLinks;
    const { title } = items[i].volumeInfo;
    const { publishedDate } = items[i].volumeInfo;
    const { id } = items[i];
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('card');
    cartDiv.innerHTML = `
    <a href = "/onebook/${id}">
    <img src="${thumbnail ?? 'https://www.assessor.ru/images/malenkie-zhenschiny-film.jpg'}" alt="" />
    <div class="bottom">
      <h3 class="title">${title}</h3>
      <p class="amount">${publishedDate}г.</p>
    </div>
    </a>
  `;
    container.appendChild(cartDiv);
  }
});
