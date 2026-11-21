(function () {
  'use strict';
  const $ = s => document.querySelector(s);
  const menu = $('#menu-toggle');
  if (menu) menu.addEventListener('click', () => {const m = $('#site-menu');const open = m.classList.toggle('open');menu.setAttribute('aria-expanded', String(open));});
  const books = window.BOOKS || [];
  const count=$('#volume-count'); if(count)count.textContent=String(books.length);
  const pages=$('#page-count'); if(pages)pages.textContent=String(books.reduce((a,b)=>a+b.pages,0));
  const grid=$('#book-grid');
  if(!grid)return;
  const search=$('#book-search');
  const buttons=Array.from(document.querySelectorAll('.filter-btn'));
  let category='All';
  const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
  function card(b){
    const repo=b.repo?`<a href="${esc(b.repo)}" target="_blank" rel="noopener noreferrer" aria-label="Companion repository for ${esc(b.title)}">Code ↗</a>`:'';
    return `<article class="book-card"><a class="cover-wrap" href="reader.html?book=${encodeURIComponent(b.id)}" aria-label="Read ${esc(b.title)}"><img loading="lazy" src="${esc(b.cover)}" alt="Cover of ${esc(b.title)}">${b.featured?'<span class="cover-flag">New volume</span>':''}</a><div class="book-content"><div class="book-meta"><span>${esc(b.category)}</span><span>${b.pages} pages</span></div><h3 class="book-title"><a href="reader.html?book=${encodeURIComponent(b.id)}">${esc(b.title)}</a></h3><p class="book-subtitle">${esc(b.subtitle)}</p><p class="book-authors">${esc(b.authors)}</p><p class="book-summary">${esc(b.summary)}</p></div><div class="book-actions"><a href="reader.html?book=${encodeURIComponent(b.id)}">Read online ↗</a><a href="${esc(b.pdf)}" download>PDF ↓</a>${repo}</div></article>`;
  }
  function render(){const term=search.value.toLocaleLowerCase().trim();const visible=books.filter(b=>(category==='All'||b.category===category)&&(!term||[b.title,b.subtitle,b.summary,b.authors,b.category,...b.tags].join(' ').toLocaleLowerCase().includes(term)));grid.innerHTML=visible.length?visible.map(card).join(''):'<div class="empty">No books match those filters. Try another search.</div>';}
  search.addEventListener('input',render);
  buttons.forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render()}));
  render();
})();
