(function () {
  'use strict';
  const menu=document.getElementById('menu-toggle');
  if(menu)menu.addEventListener('click',()=>{const m=document.getElementById('site-menu');const open=m.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  const query=new URLSearchParams(location.search);
  const b=(window.BOOKS||[]).find(item=>item.id===query.get('book'));
  const head=document.getElementById('read-heading'), view=document.getElementById('read-view');
  if (!head || !view) return;
  if(!b){head.innerHTML='<div><span class="section-kicker">Reading room</span><h1>Book not found</h1><p>Please choose a volume from the bookshelf.</p></div>';view.innerHTML='<p>Return to <a href="./#library" class="back-link">all books →</a>.</p>';return;}
  const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
  document.title=b.title+' — Reading Room';
  head.innerHTML=`<div><span class="section-kicker">${esc(b.category)} · ${b.pages} pages</span><h1>${esc(b.title)}</h1><p>${esc(b.subtitle)}</p><div class="read-authors">${esc(b.authors)} · ${esc(b.edition)}</div></div><div class="read-toolbar"><a href="${esc(b.pdf)}" class="button primary" download>Download PDF ↓</a><a href="${esc(b.pdf)}" target="_blank" rel="noopener" class="button secondary">Open full PDF ↗</a>${b.repo?`<a href="${esc(b.repo)}" target="_blank" rel="noopener noreferrer" class="button tertiary">Lab / code ↗</a>`:''}</div>`;
  view.innerHTML=`<div class="reader-frame"><iframe title="PDF: ${esc(b.title)}" src="${esc(b.pdf)}#toolbar=1&navpanes=0&view=FitH" loading="eager"></iframe></div><div class="read-footer"><span>Use the PDF toolbar to search text or navigate pages. On some mobile devices, open the full PDF instead.</span><a href="contribute.html">Found a typo or have an improvement? ↗</a></div>`;
})();
