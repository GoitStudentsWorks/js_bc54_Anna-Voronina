function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"7bk21":"index.a64450fb.js","7QMdA":"amazon.3c3f1cde.webp","CgNCO":"amazon.b0a6f23c.png","3CFHC":"apple.78ef44cc.webp","hYuvF":"apple.34efda77.png","lKiFj":"bookshop.bf5b4137.webp","1dJFY":"bookshop.11f8a97b.png","iu8al":"amazon-white.a48dbe32.png","gt6ml":"amazon-white.1297bb22.webp","aK5fH":"books_322_@1.756abb35.webp","jzumu":"books_322_@2.061cea98.webp","9XvFm":"books_322_@1.9d82d098.png","2Qp9q":"books_322_@2.80ece8cf.png","9P9hu":"books_265_@1.88805d0a.webp","fKwqX":"books_265_@2.2708f99b.webp","5vwjB":"books_265_@1.6c062fbc.png","2gN6y":"books_265_@2.28750540.png","cjv10":"shopping-list.eec385b1.js"}'));var i=a("b2XdZ");var r;r=new URL(a("kyEFX").resolve("7QMdA"),import.meta.url).toString();var s;s=new URL(a("kyEFX").resolve("CgNCO"),import.meta.url).toString();var l;l=new URL(a("kyEFX").resolve("3CFHC"),import.meta.url).toString();var c;c=new URL(a("kyEFX").resolve("hYuvF"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("lKiFj"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("1dJFY"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("iu8al"),import.meta.url).toString();var p;p=new URL(a("kyEFX").resolve("gt6ml"),import.meta.url).toString();var g=a("b5rV1"),b=a("7Y9D8"),y=(i=a("b2XdZ"),a("lPDaB")),f=a("d6Hfx");const k=new(0,i.SwaggerAPI),v=document.querySelector(".backdrop"),h=document.querySelector(".modal-close-btn"),w=document.querySelector(".modal-btn"),_=document.querySelector(".modal-info"),S=document.querySelector(".modal-book"),E=document.querySelector("#progress");let L=e(s),H=e(r),$={};function F(){document.querySelectorAll(".book-link").forEach((e=>e.addEventListener("click",R)))}async function R(t){t.preventDefault();await g.default.load("theme")?(L=e(m),H=e(p)):(L=e(s),H=e(r)),document.body.style.overflow="hidden",E.classList.add("is-hidden"),v.classList.toggle("is-hidden"),v.addEventListener("click",B),window.addEventListener("keydown",X),h.addEventListener("click",C);try{k.bookId=t.currentTarget.dataset.id;const o=await k.fetchBookById();$=o.data,function(t){const o=`<img\nclass="modal-img"\nsrc=${t.book_image}\nalt="Book cover"\n/>\n<div class="modal-info-container">\n<p class="modal-book-name">${t.title}</p>\n<p class="modal-book-author">${t.author}</p>\n<p class="modal-list-name is-hidden">${t.list_name}</p>\n<p class="modal-book-desc">${t.description?t.description:"We are pleased to inform you that all information about this book you can found on partner resources (such as Amazon, etc.)"}\n</p>\n<div class="modal-icons-container">\n  <a href="${t.buy_links[0].url}" target="_blank" rel="noopener noreferrer" aria-label="Amazon"\n    ><picture class="modal-icon">\n      <source\n        srcset="${H}"\n        type="image/webp"\n      />\n      <source\n        srcset="${L}"\n        type="image/png"\n      />\n      <img\n        src="${L}"\n        alt="Amazon"\n      /> </picture\n  ></a>\n  <a href="${t.buy_links[1].url}" target="_blank" rel="noopener noreferrer" aria-label="Apple Books"\n    ><picture class="modal-icon">\n      <source\n        srcset="${e(l)}"\n        type="image/webp"\n      />\n      <source\n        srcset="${e(c)}"\n        type="image/png"\n      />\n      <img\n        src="${e(c)}"\n        alt="Apple Books"\n      /> </picture\n  ></a>\n  <a href="${t.buy_links[4].url}" target="_blank" rel="noopener noreferrer" aria-label="Bookshop"\n    ><picture class="modal-icon">\n      <source\n        srcset="${e(d)}"\n        type="image/webp"\n      />\n      <source\n        srcset="${e(u)}"\n        type="image/png"\n      />\n      <img\n        src="${e(u)}"\n        alt="Bookshop"\n      /></picture\n  ></a>\n</div>\n</div>`;S.innerHTML=o}($),setTimeout((()=>{!async function(e){const t=await g.default.load("bookList");if(!t||0===t.length)return void x();t.find((t=>t.title===e.title))?q():x()}($)}),0),w.addEventListener("click",A)}catch{b.Notify.failure("Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.")}}function A(){const e=g.default.load("bookList"),t=document.querySelector(".modal-book-name").textContent;"add to shopping list"===w.textContent?(g.default.addBookToStorage($),b.Notify.info("The book has been added to your shopping cart."),q(),(0,y.countBook)()):(e.forEach(((e,o,n)=>{if(e.title===t)return n.splice(o,1)})),g.default.save("bookList",e),0===e.length&&g.default.remove("bookList"),(0,y.countBook)(),x(),b.Notify.info("The book has been removed from your shopping cart.")),(0,f.updateDatabase)()}function x(){w.textContent="add to shopping list",_.style.display="none"}function q(){w.textContent="remove from the shopping list",_.style.display="block"}function X(e){"Escape"===e.key&&C()}function B(e){e.target===v&&C()}function C(){v.classList.toggle("is-hidden"),document.body.style.overflow="visible",E.classList.remove("is-hidden"),v.removeEventListener("click",B),window.removeEventListener("keydown",X),h.removeEventListener("click",C)}var T;T=new URL(a("kyEFX").resolve("aK5fH"),import.meta.url).toString();var U;U=new URL(a("kyEFX").resolve("jzumu"),import.meta.url).toString();var j;j=new URL(a("kyEFX").resolve("9XvFm"),import.meta.url).toString();var N;N=new URL(a("kyEFX").resolve("2Qp9q"),import.meta.url).toString();var M;M=new URL(a("kyEFX").resolve("9P9hu"),import.meta.url).toString();var z;z=new URL(a("kyEFX").resolve("fKwqX"),import.meta.url).toString();var P;P=new URL(a("kyEFX").resolve("5vwjB"),import.meta.url).toString();var Y;function D(){return`\n    <p class="shopping-list-text">Sorry. Could not find books of this category.</p>\n        <picture>\n            <source media="(min-width: 768px)" srcset="\n                            ${e(T)} 1x,\n                            ${e(U)} 2x\n                            " type="image/webp" />\n            <source media="(min-width: 768px)" srcset="\n                            ${e(j)} 1x,\n                            ${e(N)} 2x\n                            " type="image/png" />\n\n            <source media="(max-width: 767px)" srcset="\n                            ${e(M)} 1x,\n                            ${e(z)} 2x\n                            " type="image/webp" />\n            <source media="(max-width: 767px)" srcset="\n                            ${e(P)} 1x,\n                            ${e(Y)} 2x\n                            " type="image/png" />\n\n            <img class="shopping-list-image" src="${e(M)}" alt="Books" loading="lazy" />\n        </picture>\n    `}Y=new URL(a("kyEFX").resolve("2gN6y"),import.meta.url).toString();const I=document.querySelector(".aside-list"),O=document.querySelector(".aside-title"),K=document.querySelector(".main-content"),Q=document.querySelector(".click-loader"),Z=new(0,i.SwaggerAPI);(async()=>{try{const{data:e}=await Z.fetchBooksCategoryList(),t=e.map((e=>`<li class="aside-item"><a class="aside-link"  aria-label="${e.list_name}">${e.list_name}</a></li>`)).join("");I.innerHTML=t}catch(e){console.log(e)}})();let J=null;I.addEventListener("click",(e=>{if("A"!==e.target.nodeName)return;const t=e.target.textContent;Z.categoryName=t,J&&J.classList.remove("active"),J=e.target,J.classList.add("active"),O.classList.remove("active");(async()=>{Q.classList.remove("click-is-hidden");try{setTimeout((async()=>{const{data:e}=await Z.fetchBooksByCategory(t);if(0===e.length)return void(K.innerHTML=D());const o=e[0].list_name.split(" "),n=o[o.length-1],a=`${o.slice(0,o.length-1).join(" ")} <span class="categories-title-decor">${n}</span>`;var i;K.innerHTML=`<h1 class="categories-title">${a}</h1> <ul class="categories-item">${i=e,i.map((e=>{const{book_image:t,description:o,title:n,author:a,_id:i}=e;return`\n\n<li class="category-list-item">\n<a class="book-link" href="" data-id="${i}" aria-label="${n}">\n<div class="book-thumb">\n<img class="book-image" src="${t}" alt="${o}" />\n<div class="book-overlay">\n<p class="book-overlay-text">quick view</p>\n</div>\n</div>\n<div class="book-card-content">\n<h2 class="book-title">${n}</h2>\n<p class="book-author">${a}</p>\n</div>\n</a>\n</li>`})).join("")}</ul>`,F(),K.scrollIntoView({behavior:"smooth"}),Q.classList.add("click-is-hidden")}),250)}catch(e){console.log(e)}})()})),a("3gLCb"),a("8BGGW"),a("bUb57");i=a("b2XdZ"),b=a("7Y9D8");function V(e){return e.map((e=>{const{book_image:t,description:o,title:n,author:a,_id:i}=e;return`<li class="books-list-item">\n                 <a class="book-link" href="" data-id="${i}" aria-label="${n}">\n                    <div class="book-thumb">\n                      <img class="book-image" src="${t}" alt="${o}" />\n\n                        <div class="book-overlay">\n                       <p class="book-overlay-text">quick view</p>\n                       </div>\n                       </div>                     \n                     <div class="book-card-content">\n                     <h2 class="book-title">${n}</h2>\n                     <p class="book-author">${a}</p>\n                     </div>\n                 </a>                    \n              </li>`})).join("")}var W=a("1oMYZ");const G=document.querySelector(".category-list"),ee=document.querySelector(".home-title"),te=document.querySelector(".click-loader"),oe=document.querySelector(".main-content"),ne=(0,W.default)(),ae=new(0,i.SwaggerAPI);async function ie(e){te.classList.remove("click-is-hidden");try{setTimeout((async()=>{const t=e.target.previousElementSibling.previousElementSibling.textContent;ae.categoryName=t;const{data:o}=await ae.fetchBooksByCategory();0!==o.length?(ee.innerHTML=function(e){const t=e.split(" "),o=t[t.length-1];return`<span class="home-title-decor">${t.slice(0,t.length-1).join(" ")} </span>${o}`}(t),G.classList.add("category-list-click"),G.innerHTML=V(o),function(e){const t=document.querySelectorAll(".aside-item"),o=document.querySelector(".aside-title");t.forEach((t=>{e===t.textContent&&(o.classList.toggle("active"),t.classList.toggle("active"))}))}(t),F(),oe.scrollIntoView({behavior:"smooth"}),te.classList.add("click-is-hidden")):G.innerHTML=D()}),250)}catch(e){b.Notify.failure("Something went wrong. Please, try later.")}}!async function(){try{const{data:t}=await ae.fetchTopBooks();let o=[];function e(t){let n=(Math.random()*t).toFixed();return n=Number(n),o.includes(n)?o.length<t&&e(t):void o.push(n)}for(let n=0;n<4;n++)e(17);o.forEach((e=>{let o=t[e].books,n=0;if(ne<=767&&(n=1),ne>=768&&ne<1440&&(n=3),ne>=1440&&(n=5),0===o.length)return void b.Notify.failure("There are no best sellers books in this category");const a=`<li class="category-list-item top-list-item">\n        <p class="category-name" data-category-name="${o[0].list_name}">${o[0].list_name}</p>\n        <ul class="books-list">\n          ${V(o.slice(0,n))}\n        </ul>\n       <button class="category-list-button">see more</button>  \n      </li>`;G.insertAdjacentHTML("beforeend",a),document.querySelectorAll(".category-list-button").forEach((e=>{e.addEventListener("click",ie)}))}))}catch(a){b.Notify.failure("Something went wrong. Please, try later.")}F()}(),a("gyeM6"),a("jnjzE"),a("adAgQ"),a("3YL7m");
//# sourceMappingURL=index.a64450fb.js.map
