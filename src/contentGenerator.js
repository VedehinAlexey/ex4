import contentData from './db.js';

export default function generateContant() {
   contentData.map(contentBlock => document.getElementById('content-container').appendChild(
      createBlockContent(contentBlock)
   ))

   function createBlockContent(content) {
      const block = document.createElement('a');
      block.classList.add('block')

      const title = document.createElement('h5');
      const text = document.createElement('p');
      const author = document.createElement('span');

      title.classList.add('block__title');
      author.classList.add('block__author');

      block.href = content.link
      title.textContent = content.title
      text.textContent = content.text
      author.textContent = content.author

      block.appendChild(title);
      block.appendChild(text);
      block.appendChild(author);

      return block;
   }
}