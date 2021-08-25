(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["assets/css/global.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "*{box-sizing:border-box}*:before,*:after{box-sizing:inherit}body,h1,h2,h3,h4,p,ul,ol,li,dd,figure,figcaption,dl,dd,dt{margin:0px;padding:0px}body{-ms-overflow-style:-ms-autohiding-scrollbar;scroll-behavior:smooth;font-size:1rem;min-height:100vh}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration:underline;text-decoration-skip-ink:auto;cursor:pointer}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder,select::-webkit-input-placeholder{line-height:normal}img{max-width:100%}@media(prefers-reduced-motion: reduce){*{-webkit-animation:none !important;animation:none !important;transition:none !important;scroll-behavior:auto !important}}.sf-flow{--flow-space: 1em}.sf-flow>*+*{margin-top:1em;margin-top:var(--flow-space)}.align-start{align-items:flex-start}.align-center{align-items:center}.align-end{align-items:flex-end}.bg-primary{background:#33a6c1}.bg-primary-shade{background:#00778e}.bg-primary-glare{background:#01b0d2}.bg-secondary{background:#c24756}.bg-secondary-shade{background:#7f353e}.bg-secondary-glare{background:#d0727c}.bg-highlight{background:#c65360}.bg-light{background:#fafffe}.bg-mid{background:#bbd0d5}.bg-dark{background:#002026}.bg-slate{background:#344a4f}.bg-link{background:#0a759f}.bg-white{background:#fff}.bg-superdark{background:#00151a}.color-primary{color:#33a6c1}.color-primary-shade{color:#00778e}.color-primary-glare{color:#01b0d2}.color-secondary{color:#c24756}.color-secondary-shade{color:#7f353e}.color-secondary-glare{color:#d0727c}.color-highlight{color:#c65360}.color-light{color:#fafffe}.color-mid{color:#bbd0d5}.color-dark{color:#002026}.color-slate{color:#344a4f}.color-link{color:#0a759f}.color-white{color:#fff}.color-superdark{color:#00151a}.box-block{display:block}.box-flex{display:flex}.box-inline-flex{display:inline-flex}.box-hide{display:none}.font-base{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'}.font-serif{font-family:'Kaisei Tokumin', serif}.font-cursive{font-family:'Chivo', cursive}.gap-top-300{margin-top:0.8rem}.gap-top-500{margin-top:1.25rem}.gap-top-600{margin-top:1.56rem}.gap-top-700{margin-top:1.95rem}.gap-top-800{margin-top:2.44rem}.gap-top-900{margin-top:3.05rem}.gap-top-base{margin-top:1rem}.gap-top-max{margin-top:4rem}.gap-bottom-300{margin-bottom:0.8rem}.gap-bottom-500{margin-bottom:1.25rem}.gap-bottom-600{margin-bottom:1.56rem}.gap-bottom-700{margin-bottom:1.95rem}.gap-bottom-800{margin-bottom:2.44rem}.gap-bottom-900{margin-bottom:3.05rem}.gap-bottom-base{margin-bottom:1rem}.gap-bottom-max{margin-bottom:4rem}.leading-tight{line-height:1.2}.leading-mid{line-height:1.5}.leading-loose{line-height:1.7}.measure-long{max-width:75ch}.measure-short{max-width:60ch}.measure-compact{max-width:40ch}.pad-top-300{padding-top:0.8rem}.pad-top-500{padding-top:1.25rem}.pad-top-600{padding-top:1.56rem}.pad-top-700{padding-top:1.95rem}.pad-top-800{padding-top:2.44rem}.pad-top-900{padding-top:3.05rem}.pad-top-base{padding-top:1rem}.pad-top-max{padding-top:4rem}.pad-bottom-300{padding-bottom:0.8rem}.pad-bottom-500{padding-bottom:1.25rem}.pad-bottom-600{padding-bottom:1.56rem}.pad-bottom-700{padding-bottom:1.95rem}.pad-bottom-800{padding-bottom:2.44rem}.pad-bottom-900{padding-bottom:3.05rem}.pad-bottom-base{padding-bottom:1rem}.pad-bottom-max{padding-bottom:4rem}.pad-left-300{padding-left:0.8rem}.pad-left-500{padding-left:1.25rem}.pad-left-600{padding-left:1.56rem}.pad-left-700{padding-left:1.95rem}.pad-left-800{padding-left:2.44rem}.pad-left-900{padding-left:3.05rem}.pad-left-base{padding-left:1rem}.pad-left-max{padding-left:4rem}.space-between{justify-content:space-between}.space-around{justify-content:space-around}.space-before{justify-content:flex-end}.stack-300{z-index:0}.stack-400{z-index:10}.stack-500{z-index:20}.stack-600{z-index:30}.stack-700{z-index:40}.ta-right{text-align:right}.ta-left{text-align:left}.ta-center{text-align:center}.text-300{font-size:0.8rem}.text-500{font-size:1.25rem}.text-600{font-size:1.56rem}.text-700{font-size:1.95rem}.text-800{font-size:2.44rem}.text-900{font-size:3.05rem}.text-base{font-size:1rem}.text-max{font-size:4rem}.weight-light{font-weight:300}.weight-regular{font-weight:400}.weight-mid{font-weight:600}.weight-bold{font-weight:700}.width-full{width:100%}.width-half{width:50%}.width-quarter{width:25%}.width-third{width:33.3333333333%}@media screen and (min-width: 48rem){.md\\:align-start{align-items:flex-start}.md\\:align-center{align-items:center}.md\\:align-end{align-items:flex-end}.md\\:box-block{display:block}.md\\:box-flex{display:flex}.md\\:box-inline-flex{display:inline-flex}.md\\:box-hide{display:none}.md\\:space-between{justify-content:space-between}.md\\:space-around{justify-content:space-around}.md\\:space-before{justify-content:flex-end}.md\\:ta-right{text-align:right}.md\\:ta-left{text-align:left}.md\\:ta-center{text-align:center}.md\\:text-300{font-size:0.8rem}.md\\:text-500{font-size:1.25rem}.md\\:text-600{font-size:1.56rem}.md\\:text-700{font-size:1.95rem}.md\\:text-800{font-size:2.44rem}.md\\:text-900{font-size:3.05rem}.md\\:text-base{font-size:1rem}.md\\:text-max{font-size:4rem}.md\\:width-full{width:100%}.md\\:width-half{width:50%}.md\\:width-quarter{width:25%}.md\\:width-third{width:33.3333333333%}}:root{--color-primary:#33a6c1;--color-primary-shade:#00778e;--color-primary-glare:#01b0d2;--color-secondary:#c24756;--color-secondary-shade:#7f353e;--color-secondary-glare:#d0727c;--color-highlight:#c65360;--color-light:#fafffe;--color-mid:#bbd0d5;--color-dark:#002026;--color-slate:#344a4f;--color-link:#0a759f;--color-white:#fff;--color-superdark:#00151a;--color-mode: \"light\";--color-bg: #fafffe;--color-bg-glare: #01b0d2;--color-bg-dark: #00778e;--color-text: #002026;--color-text-light: #fafffe;--color-text-glare: #002026;--color-selection-text: #fafffe;--color-selection-bg: #002026;--color-stroke: #bbd0d5;--color-action-bg: #33a6c1;--color-action-text: #002026;--color-theme-primary: #33a6c1;--color-theme-primary-glare: #01b0d2;--color-theme-highlight: #c65360;--color-theme-highlight-block: #c65360;--color-theme-header-bg: var(--color-bg);--color-theme-header-border: var(--color-stroke);--color-theme-header-text: var(--color-text);--color-theme-introHome-bg: #00778e;--color-theme-introHome-text: #fafffe;--color-theme-footer-bg: #7f353e;--color-theme-footer-border: #c24756;--color-theme-footer-text: var(--color-text-light);--color-theme-code-bg: var(--color-mid);--color-theme-code-text: var(--color-dark)}@media(prefers-color-scheme: dark){:root{--color-mode: \"dark\"}:root:not([data-user-color-scheme]){--color-bg: #00151a;--color-bg-glare: #344a4f;--color-bg-dark: #002026;--color-text: #fafffe;--color-link: #01b0d2;--color-selection-text: #002026;--color-selection-bg: #c24756;--color-stroke: var(--color-bg-glare);--color-action-bg: var(--color-theme-primary-glare);--color-action-text: #002026;--color-theme-primary: #f6fbfd;--color-theme-primary-glare: #d3f8ff;--color-theme-highlight: #33a6c1;--color-theme-highlight-block: #344a4f;--color-theme-feature-text: var(--color-secondary-glare);--color-theme-header-border: var(--color-bg-glare);--color-theme-introHome-bg: var(--color-bg-glare);--color-theme-footer-border: var(--color-bg-glare);--color-theme-footer-bg: var(--color-bg-dark);--color-theme-code-bg: var(--color-dark);--color-theme-code-text: var(--color-mid)}}[data-user-color-scheme=dark]{--color-bg: #00151a;--color-bg-glare: #344a4f;--color-bg-dark: #002026;--color-text: #fafffe;--color-link: #01b0d2;--color-selection-text: #002026;--color-selection-bg: #c24756;--color-stroke: var(--color-bg-glare);--color-action-bg: var(--color-theme-primary-glare);--color-action-text: #002026;--color-theme-primary: #f6fbfd;--color-theme-primary-glare: #d3f8ff;--color-theme-highlight: #33a6c1;--color-theme-highlight-block: #344a4f;--color-theme-feature-text: var(--color-secondary-glare);--color-theme-header-border: var(--color-bg-glare);--color-theme-introHome-bg: var(--color-bg-glare);--color-theme-footer-border: var(--color-bg-glare);--color-theme-footer-bg: var(--color-bg-dark);--color-theme-code-bg: var(--color-dark);--color-theme-code-text: var(--color-mid)}body{color:var(--color-text);background-color:var(--color-bg);transition:all .2s ease-in}main{overflow:hidden}::selection{color:var(--color-selection-text);background-color:var(--color-selection-bg)}body{line-height:1.56;font-family:'Kaisei Tokumin', serif}h1,h2{font-family:'Kaisei Tokumin', serif}h1{font-size:1.95rem}h2{font-size:1.56rem}h3{font-size:1.25rem}@media(min-width: 48rem){h1{font-size:3.05rem}h2{font-size:2.44rem}h3{font-size:1.95rem}}html,body{height:100%}body{scroll-behavior:smooth;display:flex;flex-direction:column}main{flex:1 0 auto}main:focus{outline:none}hr{display:block;height:1px;max-width:500px;background:var(--color-stroke);border:none;margin:3.05rem auto}.inner-wrapper{max-width:52rem;margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}.skip-link:not(:focus),.post__footer h3 a,.visually-hidden{border:0;clip:rect(0 0 0 0);height:auto;margin:0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.wrapper{max-width:58rem;margin-left:auto;margin-right:auto;padding-left:1.25rem;padding-right:1.25rem}.button{display:inline-block;border:none;background-color:var(--color-action-bg);color:var(--color-action-text);padding:.8rem 1rem;line-height:1;margin:0;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none}.button:hover,.button:focus{filter:brightness(1.2)}.button:focus:hover{outline:none}.button:focus:not(:hover){outline:1px solid var(--color-action-text);outline-offset:-4px}.button:active{transform:scale(0.9)}.heading-permalink{color:var(--color-theme-primary-glare);font-size:.8em;margin-left:.3em;margin-top:.2em}@media(min-width: 48rem){.heading-permalink{font-size:.6em;margin-top:.4em}}.intro{text-align:center}.intro__summary{--flow-space: 1.25rem;font-size:1.25rem;margin:0 auto}.intro__summary a{color:currentColor}.intro__summary a:hover{text-decoration:none}.intro__heading{font-size:4rem;max-width:40ex;margin-bottom:1.25rem;line-height:1.2;color:var(--color-theme-feature-text);font-family:'Chivo', cursive}.intro__heading--compact{max-width:20ex}.nav{flex:1}.nav__list{overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}.nav__list::-webkit-scrollbar{display:none}.nav__list>*+*{margin-left:1.25rem}.nav__list--footer{justify-content:center}.nav__list--footer .nav__item{padding:0}@media screen and (min-width: 632px){.nav__list--footer{justify-content:right}}.nav__item{padding:.8rem 0;flex-shrink:0}.nav__item a{color:currentColor;font-weight:600}.nav__item a:not(:hover){text-decoration:none}.theme-toggle{text-align:center}@media screen and (min-width: 632px){.theme-toggle{text-align:right}}.theme-toggle__button{font-family:'Kaisei Tokumin', serif;background-color:transparent;color:var(--color-theme-footer-text);font-size:1rem;margin-top:1.2rem;position:relative;border-radius:2px;box-shadow:-2px -2px 3px rgba(255,255,255,.1),2px 2px 3px rgba(0,0,0,.1);padding:.5rem}.theme-toggle__button::after{content:\"\";display:inline-block;border-radius:1.5rem;box-shadow:0px 0px 5px rgba(0,0,0,.5) inset;margin-left:.5rem;height:1rem;vertical-align:middle;width:2rem}.theme-toggle__button::before{background-color:var(--color-theme-footer-bg);border-radius:50%;content:\"\";display:inline-block;height:1rem;width:1rem;position:absolute;right:.5rem;top:.5rem;box-shadow:0px 0px 8px rgba(255,255,255,.2) inset;transition:all .1s ease-in}.theme-toggle__button:active{background-color:rgba(0,0,0,.1);box-shadow:none;transform:scale(1)}.theme-toggle__button:active::before{right:1rem}[data-user-color-scheme=dark] .theme-toggle__button::before{right:1.5rem}[data-user-color-scheme=dark] .theme-toggle__button:active::before{right:1rem}.section--pagination{background-color:var(--color-bg)}.pagination{flex-wrap:wrap;border-top:1px solid var(--color-stroke)}.pagination a{color:var(--color-link)}.pagination a:not(:hover){text-decoration:none}.pagination a[data-direction=backwards]{flex-direction:row-reverse}.pagination a[data-direction=backwards] svg{transform:rotate(-180deg)}.pagination a[data-direction=forwards]:only-child{margin-left:auto}.pagination svg{pointer-events:none}.post__body{--flow-space: 2.44rem;border-top:1px solid var(--color-stroke)}.post__body h2+*,.post__body h3+*{--flow-space: 1.25rem}.post__body h2,.post__body h3{position:relative;line-height:1.2}.post__body a:not([class]){color:var(--color-link);text-decoration:none;word-break:break-word;line-height:1.2}.post__body a:not([class]):hover{text-decoration:underline}.post__body code{color:var(--color-theme-code-text);background:var(--color-theme-code-bg);margin-left:.1ch;margin-right:.1ch;padding:.1em .2em;border-radius:2px}.post__body pre>code{margin-right:0;border:1px solid rgba(255,255,255,.1);overflow-x:auto;-webkit-overflow-scrolling:touch}.post__body blockquote{border-left:.4rem solid var(--color-theme-primary-glare);margin-left:0;padding-left:1.25rem;font-family:'Chivo', cursive;font-size:1.56rem;font-weight:200;line-height:1.25}.post__body blockquote p{opacity:.85;padding:1.25rem 0}.post__body ol:not([class]),.post__body ul:not([class]){margin-left:2.44rem}.post__body ol:not([class]) li+li,.post__body ul:not([class]) li+li{margin-top:.8rem}.post__body figure,.post__body figure+*,.post__body pre>code,.post__body .video-player,.post__body .video-player+*,.post__body video{--flow-space: 4rem}.post__body figure,.post__body pre>code,.post__body .video-player,.post__body video{width:100vw;max-width:58rem;margin-left:50%;transform:translateX(-50%);position:relative}.post__body figure img,.post__body pre>code,.post__body .video-player{box-shadow:0 10px 30px rgba(0,0,0,.15)}.post__body figure img{position:relative;z-index:1;width:100%}.post__body figcaption{font-size:.8em;font-style:italic;max-width:52rem;margin:.5rem auto 0 auto;padding:0 1.25rem}.post__body pre>code{display:block;background:var(--color-dark);padding:1.95rem;font-size:1.25rem}.post__body>p:first-of-type::first-letter{font-size:3em;float:left;padding:1rem 1.25rem;height:4rem;background-color:var(--color-bg-glare);box-shadow:3px 3px 0px var(--color-bg-dark);text-shadow:3px 3px 0px var(--color-theme-highlight);margin-right:.75rem;margin-top:.5rem;color:#fff;line-height:70px;font-family:'Chivo', cursive}.post__footer .inner-wrapper{border-top:1px solid var(--color-stroke)}.post__footer h3{flex-shrink:0;margin-right:1rem;color:var(--color-text)}.post__footer a{background:var(--color-mid);color:var(--color-action-text);border-radius:4px;box-shadow:0 4px 0 #737373;padding:.4rem .6rem}.post-list__item{--flow-space: 1.95rem}.post-list__link{font-family:'Chivo', cursive;font-weight:200;font-size:1.95rem}.post-list__link,.post-list__link:visited{color:var(--color-theme-feature-text);text-decoration:none}.post-list__link:hover{text-decoration:underline}.site-head{z-index:20;background:var(--color-theme-header-bg);box-shadow:0px -3px 10px var(--color-theme-header-border)}.site-head__site-name{font-weight:700;text-decoration:none}.site-head a{color:var(--color-theme-header-text)}.site-head--home{background:var(--color-theme-introHome-bg);box-shadow:none}.site-head--home a{color:var(--color-theme-introHome-text)}.site-head--home .site-head__site-logo svg{fill:var(--color-theme-introHome-text)}.site-head__site-logo svg{fill:var(--color-theme-header-text);width:2rem;display:block}.site-foot{background:var(--color-theme-footer-bg);border-top:15px solid var(--color-theme-footer-border);color:var(--color-theme-footer-text)}.site-foot a{color:currentColor}.site-foot a:hover{text-decoration:none}.site-foot__credit{text-align:center}.site-foot .social{margin-top:0;border:0;padding:0}@media screen and (max-width: 631px){.site-foot .social{text-align:center}}.site-foot .social svg{fill:currentColor}.skip-link:focus{display:inline-block;position:absolute;top:0;left:0;padding:.8rem 1.25rem 1rem 1.25rem;background-color:var(--color-action-bg);color:var(--color-action-text);line-height:1;text-decoration:none;font-weight:700}code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:none;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;text-align:left;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#d4d0ab}.token.punctuation{color:#fefefe}.token.property,.token.tag,.token.constant,.token.symbol,.token.deleted{color:#ffa07a}.token.boolean,.token.number{color:#00e0e0}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#abe338}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.variable{color:#00e0e0}.token.atrule,.token.attr-value,.token.function{color:gold}.token.keyword{color:#00e0e0}.token.regex,.token.important{color:gold}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}@media screen and (-ms-high-contrast: active){code[class*=language-],pre[class*=language-]{color:windowText;background:window}:not(pre)>code[class*=language-],pre[class*=language-]{background:window}.token.important{background:highlight;color:window;font-weight:normal}.token.atrule,.token.attr-value,.token.function,.token.keyword,.token.operator,.token.selector{font-weight:bold}.token.attr-value,.token.comment,.token.doctype,.token.function,.token.keyword,.token.operator,.token.property,.token.string{color:highlight}.token.attr-value,.token.url{font-weight:normal}}.video-player{position:relative;padding-top:56.25%}.video-player>iframe{position:absolute;top:0;left:0;width:100%;height:100%}.post .video-player{padding-top:63%}@media(min-width: 48rem){.post .video-player{padding-top:66%}}.mainContent--home .post-list{background-color:var(--color-bg)}.intro--home{background:linear-gradient(var(--color-theme-introHome-bg), var(--color-bg));color:var(--color-theme-introHome-text);font-family:sans-serif;height:100vh}.intro--home .layer{position:absolute;left:0;right:0;top:0;bottom:0;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:24em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.intro--home .grid{display:grid;grid-gap:0px;grid-template-columns:11.1vh 11.1vh 11.1vh;grid-template-rows:11.1vh 11.1vh 11.1vh;margin:0 auto;width:33.3vh;-webkit-animation:rotateLogo 5s infinite;animation:rotateLogo 5s infinite}.intro--home .intro__heading{color:#fff}.intro--home .intro__heading,.intro--home h2{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';letter-spacing:.1em;text-transform:uppercase}@keyframes rotateLogo{0%{transform:rotate3d(5, 5, 1, 0deg)}100%{transform:rotate3d(5, 5, 5, 360deg)}}.intro--home .grid__item{border:1px solid transparent}.intro--home .grid__item:nth-of-type(odd){background-color:var(--color-secondary);opacity:.75}.intro--home .grid__item:nth-of-type(1){opacity:.5}.intro--home .grid__item:nth-of-type(7){opacity:.25}.intro--home .grid__item:nth-of-type(3){opacity:1}.intro--home .grid__item:last-child{background-color:transparent}.layoutWrapper{display:grid;grid-template-columns:repeat(auto-fill, minmax(17.5rem, 1fr));grid-gap:2.5rem 2rem;margin-left:0}.layout__image figure{width:auto;max-width:none;margin-left:0;transform:none}.layout__image img{border-radius:50%}.social{font-size:1rem}.social svg{fill:var(--color-text)}.social__list li{display:inline-block;width:2rem;margin-right:1rem}.soundtrack{width:380px;margin:3rem auto;font-size:.8rem}.soundtrack__embed{border-radius:4px;overflow:hidden;font-size:0;box-shadow:0px 4px 4px var(--color-stroke)}.timeline{display:flex;flex-direction:column;position:relative}.timeline:after{display:block;position:absolute;content:\"\";background-color:var(--color-stroke);width:2px;top:0;bottom:0;right:50%}.timeline li{position:relative;z-index:100}.timeline li+li{margin-top:3rem}.event{background-color:var(--color-bg);box-shadow:0px 4px 4px var(--color-stroke);display:flex;align-items:flex-start;padding:1rem;border-radius:4px;border:1px solid var(--color-stroke);position:relative;z-index:100}.event .event__image{overflow:hidden;margin-right:1rem;border-radius:50%;box-shadow:0px 2px 2px var(--color-stroke);width:100px;height:100px;transform:none;margin-left:0;max-width:none}.event .event__image img{border-radius:50%;box-shadow:none}.event__content{flex:1}@media screen and (min-width: 801px){.timeline li+li{margin-top:6rem}.timeline li+li::after{z-index:10;display:block;position:absolute;content:\"\";background-color:var(--color-stroke);height:2px;left:0;right:0;top:50%}.timeline li:nth-of-type(n+2){width:50%}.timeline li:nth-child(odd){align-self:flex-end;margin-right:0}.timeline li:nth-child(odd) .event{margin-left:20%;margin-right:-20%}.timeline li:nth-child(even){align-self:flex-start;margin-left:0}.timeline li:nth-child(even) .event{margin-left:-20%;margin-right:20%}.timeline li:first-child,.timeline li:last-child{align-self:initial;width:100%}.timeline li:first-child .event,.timeline li:last-child .event{width:75%;margin:0 auto}.timeline li:first-child::after,.timeline li:last-child::after{display:none}.event{padding:2rem}}/*# sourceMappingURL=global.css.map */\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["icons/arrow.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"1em\"\n  height=\"1em\"\n  viewBox=\"0 0 24 24\"\n  focusable=\"false\"\n  aria-hidden=\"true\"\n  fill=\"currentColor\"\n>\n  <path\n    d=\"M9.707 18.707l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L13.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414z\"\n  />\n</svg>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/about.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/page.njk", true, "layouts/about.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "About";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/about.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        <section class=\"layoutWrapper sf-flow\">\n            <div class=\"layout__image sf-flow\">\n                <figure>\n                    <img src=\"/images/avatar_blue_sq.png\" alt=\"Miko's face\" loading=\"lazy\">\n                </figure>\n            </div>\n            <div class=\"sf-flow\">\n                <p>\n                    I'm a design-focused UI developer. I'm passionate about Design Systems, UX and Accessibility, and I specialise in redesigns and rebranding strategies.\n                </p>\n                <p>\n                    I've been lucky to work in this industry for over 10 years with many talented individuals, both as a manager and as an engineer.\n                </p>\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/social.njk", false, "layouts/about.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n            </div>\n        </section>\n        <hr/>\n        <section class=\"sf-flow\">\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/timeline.njk", false, "layouts/about.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
callback(null,t_18);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </section>\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js\">\n<head>\n  <!-- Global site tag (gtag.js) - Google Analytics -->\n  <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-39498898-1\"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'UA-39498898-1');\n  </script>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"alternate\" type=\"application/rss+xml\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"title"), env.opts.autoescape);
output += "\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url"), env.opts.autoescape);
output += "/feed.xml\" />\n  <link rel=\"icon\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"faviconPath"), env.opts.autoescape);
output += "\" type=\"image/png\" />\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/meta-info.njk", false, "layouts/base.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  <script>document.documentElement.classList.remove('no-js');</script>\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Chivo:ital,wght@1,900&family=Kaisei+Tokumin&display=swap\" rel=\"stylesheet\"> \n  <style>";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("assets/css/global.css", false, "layouts/base.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "</style>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n</head>\n<body>\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-head.njk", false, "layouts/base.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
output += t_15;
output += "\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-foot.njk", false, "layouts/base.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("foot"))(env, context, frame, runtime, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
output += t_21;
output += "\n  <script type=\"module\" src=\"/js/components/theme-toggle.js\" async defer></script>\n  <script>\n    if ('serviceWorker' in navigator) {\n      window.addEventListener('load', () => {\n        navigator.serviceWorker.register('/service-worker.js');\n      });\n    }\n  </script>\n  <script src=\"https://identity.netlify.com/v1/netlify-identity-widget.js\" async defer></script>\n</body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 23;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 28;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_foot(env, context, frame, runtime, cb) {
var lineno = 31;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_content: b_content,
b_foot: b_foot,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/blog.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/blog.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "All Posts";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
var t_6;
t_6 = (function() {
var output = "";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
;
return output;
})()
;
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n\n";
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_7, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_7);
}
if(frame.topLevel) {
context.addExport("postListItems", t_7);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
output += t_8;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/blog.njk", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "layouts/blog.njk", false, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/home.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Homepage";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
var t_6;
t_6 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n\n";
output += "\n";
var t_7;
t_7 = runtime.contextOrFrameLookup(context, frame, "postsHeading");
frame.set("postListHeading", t_7, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_7);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_7);
}
output += "\n";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"postFeed");
frame.set("postListItems", t_8, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_8);
}
if(frame.topLevel) {
context.addExport("postListItems", t_8);
}
output += "\n\n";
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length") < runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts")),"length")) {
output += " \n  ";
var t_9;
t_9 = runtime.contextOrFrameLookup(context, frame, "archiveButtonText");
frame.set("paginationNextText", t_9, true);
if(frame.topLevel) {
context.setVariable("paginationNextText", t_9);
}
if(frame.topLevel) {
context.addExport("paginationNextText", t_9);
}
output += "\n  ";
var t_10;
t_10 = "/blog";
frame.set("paginationNextUrl", t_10, true);
if(frame.topLevel) {
context.setVariable("paginationNextUrl", t_10);
}
if(frame.topLevel) {
context.addExport("paginationNextUrl", t_10);
}
output += "\n";
;
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += t_11;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" class=\"[ mainContent--home ]\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro-home.njk", false, "layouts/home.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "layouts/home.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/pagination.njk", false, "layouts/home.njk", false, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
callback(null,t_21);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
callback(null,t_23);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/page.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/page.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/post.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/post.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Post";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
var t_6;
t_6 = (function() {
var output = "";
output += "\n<p class=\"[ intro__meta ] [ text-500 leading-tight ]\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "date")) {
output += "\n    <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "\" class=\"dt-published\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "</time>\n  ";
;
}
output += "\n  <span>— ";
output += runtime.suppressValue((lineno = 10, colno = 35, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "helpers")),"getReadingTime"), "helpers[\"getReadingTime\"]", context, [runtime.contextOrFrameLookup(context, frame, "content")])), env.opts.autoescape);
output += " minute read</span>\n</p>\n";
;
return output;
})()
;
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/post.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += " text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/soundtrack.njk", false, "layouts/post.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")) {
output += "\n        <aside class=\"[ post__body ] [ inner-wrapper ] [ pad-bottom-900 text-500 ]\">\n          ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/third-party-comments.njk", false, "layouts/post.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </aside>\n      ";
});
}
output += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
output += "\n        <footer class=\"[ post__footer ] [ pad-top-500 pad-bottom-500 ]\">\n          <div class=\"[ inner-wrapper ] [ pad-top-500 ]\">\n            <div class=\"[ nav ] [ box-flex align-center ]\">\n              <h3 class=\"font-serif text-500 weight-mid\">Tags:</h3>\n              <ul class=\"[ nav__list ] [ box-flex align-center pad-left-400 ] [ p-category ]\">\n                ";
frame = frame.push();
var t_23 = runtime.contextOrFrameLookup(context, frame, "tags");
if(t_23) {t_23 = runtime.fromIterator(t_23);
var t_22 = t_23.length;
for(var t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21];
frame.set("item", t_24);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n                  <li class=\"nav__item\">\n                    <a href=\"/tags/";
output += runtime.suppressValue(t_24, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_24, env.opts.autoescape);
output += "</a>\n                  </li>\n                ";
;
}
}
frame = frame.pop();
output += "\n              </ul>\n            </div>\n          </div>\n        </footer>\n      ";
;
}
output += "\n    </article>\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/intro-home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"[ intro ] [ intro--home ][ pad-top-900 pad-bottom-max ]\">\n  <div class=\"layer\">\n    <div class=\"grid\">\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n        <div class=\"grid__item\">\n            &nbsp;\n        </div>\n    </div>\n  </div>\n  <div class=\"layer\">\n    <div class=\"content\">\n        <h1 class=\"[ intro__heading";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") === "/"?" intro__heading--compact":""), env.opts.autoescape);
output += " ] [ p-name ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "introHeading"), env.opts.autoescape);
output += "</h1>\n        ";
if(runtime.contextOrFrameLookup(context, frame, "introSummary")) {
output += "\n          <div class=\"[ intro__summary ] [ sf-flow ] [ leading-mid measure-short ]\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "introSummary")), env.opts.autoescape);
output += "</div>\n        ";
;
}
output += "\n        <p class=\"[ text-700 ]\">This too shall pass.</p>\n        <p class=\"[ text-700 ]\">👨‍💻 🇦🇺</p>\n    </div>\n  </div>\n  <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/intro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"[ intro ] [ pad-top-900 pad-bottom-max ]\">\n  <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n    <h1 class=\"[ intro__heading";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") === "/"?" intro__heading--compact":""), env.opts.autoescape);
output += " ] [ p-name ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "introHeading"), env.opts.autoescape);
output += "</h1>\n    ";
if(runtime.contextOrFrameLookup(context, frame, "introSummary")) {
output += "\n      <div class=\"[ intro__summary ] [ sf-flow ] [ leading-mid measure-short ]\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "introSummary")), env.opts.autoescape);
output += "</div>\n    ";
;
}
output += "\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav-foot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n  <nav class=\"nav\">\n    <ul class=\"[ nav__list ] [ nav__list--footer ][ box-flex ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/components/nav-foot.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </ul>\n  </nav>\n";
});
}
output += "\n<theme-toggle></theme-toggle>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav-head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n  <nav class=\"nav\">\n    <ul class=\"[ nav__list ] [ box-flex align-center space-before text-400 ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/components/nav-head.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </ul>\n  </nav>\n";
});
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n  ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n    ";
var t_5;
t_5 = "";
frame.set("relAttribute", t_5, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_5);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_5);
}
output += "\n    ";
var t_6;
t_6 = "";
frame.set("currentAttribute", t_6, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_6);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_6);
}
output += "\n\n    ";
if(runtime.memberLookup((t_4),"rel")) {
output += "\n      ";
var t_7;
t_7 = " rel=\"" + runtime.memberLookup((t_4),"rel") + "\"";
frame.set("relAttribute", t_7, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_7);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_7);
}
output += "\n    ";
;
}
output += "\n\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += "\n      ";
var t_8;
t_8 = " aria-current=\"page\"";
frame.set("currentAttribute", t_8, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_8);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_8);
}
output += "\n    ";
;
}
output += "\n\n    ";
if(runtime.memberLookup((t_4),"external")) {
output += "\n      ";
var t_9;
t_9 = " target=\"_blank\"";
frame.set("targetAttribute", t_9, true);
if(frame.topLevel) {
context.setVariable("targetAttribute", t_9);
}
if(frame.topLevel) {
context.addExport("targetAttribute", t_9);
}
output += "\n    ";
;
}
output += "\n\n    <li class=\"nav__item\">\n      <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "relAttribute")), env.opts.autoescape);
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "currentAttribute")), env.opts.autoescape);
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "targetAttribute")), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n    </li>\n  ";
;
}
}
frame = frame.pop();
output += "\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/pagination.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "leading-tight text-500 weight-mid box-inline-flex align-center pad-bottom-300";
frame.set("paginationLinkTokens", t_1, true);
if(frame.topLevel) {
context.setVariable("paginationLinkTokens", t_1);
}
if(frame.topLevel) {
context.addExport("paginationLinkTokens", t_1);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl") || runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n  <section class=\"[ section--pagination ]\">\n    <div class=\"inner-wrapper\">\n      <footer class=\"[ pagination ] [ pad-bottom-900 ][ pad-top-900 ]\">\n        <nav class=\"[ pagination__nav ] [ box-flex space-between align-center ]\">\n          ";
if(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n            <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"backwards\">\n              <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationPrevText")?runtime.contextOrFrameLookup(context, frame, "paginationPrevText"):"Previous"), env.opts.autoescape);
output += "</span>\n              ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n            </a>\n          ";
});
}
output += "\n          ";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl")) {
output += "\n            <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"forwards\">\n              <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationNextText")?runtime.contextOrFrameLookup(context, frame, "paginationNextText"):"Next"), env.opts.autoescape);
output += "</span>\n              ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n            </a>\n          ";
});
}
output += "\n        </nav>\n      </footer>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-900 ] [ pad-bottom-900 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item\">\n              <h3 class=\"leading-tight text-600\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n              </h3>\n              <p class=\"text-400 gap-top-300\">\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time>\n              </p>\n              ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"summary")) {
output += "\n                <p class=\"text-500 gap-top-300\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"summary"), env.opts.autoescape);
output += "\n                </p>\n              ";
;
}
output += "\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/social.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<article class=\"social\">\n    <ul class=\"social__list\">\n        ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "social")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("social", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n            <li>\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" ";
if(runtime.memberLookup((t_4),"external")) {
output += " target=\"_blank\" ";
;
}
output += "><svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"account_name"), env.opts.autoescape);
output += " on ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</title><path d=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"icon_path"), env.opts.autoescape);
output += "\"/></svg><span class=\"visually-hidden\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n            </li>\n        ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n</article>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/soundtrack.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "soundtrack")) {
output += "\n<div class=\"soundtrack\">\n    <p>Written under the influence of...</p>\n    <div class=\"soundtrack__embed\">\n        <iframe src=\"https://open.spotify.com/embed/";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "soundtrack")), env.opts.autoescape);
output += "\" width=\"380\" height=\"80\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\n    </div>\n</div>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/timeline.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "timeline")),"events")) {
output += "\n    <ul class=\"timeline\">\n    ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "timeline")),"events");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("event", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <li>\n            <article class=\"event\">\n                <figure class=\"event__image\">\n                    <img src=\"/images/timeline/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"image"), env.opts.autoescape);
output += "\" />\n                </figure>\n                <div class=\"event__content\">\n                    <span class=\"[ event__date ][ color-slate ][ text-300 ]\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"date"), env.opts.autoescape);
output += "</span>\n                    <div class=\"event__description\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</div>\n                    ";
if(runtime.memberLookup((t_4),"content")) {
output += "\n                        <p class=\"[ event__content ][ text-base ]\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_4),"content")), env.opts.autoescape);
output += "</p>\n                    ";
;
}
output += "\n                </div>\n            </article>\n        </li>\n    ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/meta-info.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "title") + " - " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("pageTitle", t_1, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_1);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_1);
}
output += "\n";
var t_2;
t_2 = "";
frame.set("pageDesc", t_2, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_2);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("siteTitle", t_3, true);
if(frame.topLevel) {
context.setVariable("siteTitle", t_3);
}
if(frame.topLevel) {
context.addExport("siteTitle", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url") + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url");
frame.set("currentUrl", t_4, true);
if(frame.topLevel) {
context.setVariable("currentUrl", t_4);
}
if(frame.topLevel) {
context.addExport("currentUrl", t_4);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaTitle")) {
output += "\n  ";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "metaTitle");
frame.set("pageTitle", t_5, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_5);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_5);
}
output += "\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "metaDesc");
frame.set("pageDesc", t_6, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_6);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_6);
}
output += "\n";
;
}
output += "\n\n<title>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</title>\n<link rel=\"canonical\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n<meta property=\"og:site_name\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "siteTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:title\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:type\" content=\"website\" />\n<meta property=\"og:url\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle")) {
output += "\n  <meta name=\"twitter:creator\" content=\"@";
output += runtime.suppressValue(env.getFilter("replace").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle"),"@",""), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  <meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "socialImage")) {
output += "  \n  <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer")) {
output += "\n  <meta name=\"monetization\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-foot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<footer role=\"contentinfo\" class=\"[ site-foot ] [ pad-top-700 pad-bottom-900 ]\">\n  <div class=\"wrapper\">\n    <div class=\"[ site-foot__inner ] [ layoutWrapper ]\">\n      <div>\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/social.njk", false, "partials/global/site-foot.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n      <div>\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav-foot.njk", false, "partials/global/site-foot.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n    </div>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"showThemeCredit")) {
output += "\n      <p class=\"[ site-foot__credit ] [ pad-top-900 ]\">\n        &copy; 2020 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += ". <a href=\"/credits\">Credits</a>.\n      </p>\n    ";
;
}
output += "\n  </div>\n</footer>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<a class=\"skip-link\" href=\"#main-content\">Skip to content</a>\n<header role=\"banner\" class=\"[ site-head ] ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == "/"?"site-head--home":""), env.opts.autoescape);
output += "\">\n  <div class=\"wrapper\">\n    <span class=\"visually-hidden\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += ": ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageType"), env.opts.autoescape);
output += "</span>\n    <div class=\"[ site-head__inner ] [ box-flex space-between align-center ]\">\n      <a href=\"/\" class=\"[ site-head__site-name ] [ leading-tight ]\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == env.getFilter("safe").call(context, "/")?"aria-current=page":""), env.opts.autoescape);
output += ">\n        <span class=\"visually-hidden\">";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") != "/"?"Back to homepage":"Homepage"), env.opts.autoescape);
output += "</span>\n        <span class=\"[ site-head__site-name ] visually-hidden [ text-400 ]\" aria-hidden=\"true\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "</span>\n        <span class=\"[ site-head__site-logo ]\">\n          <svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect width=\"16\" height=\"16\" fill-opacity=\"0.5\"/>\n            <rect x=\"32\" width=\"16\" height=\"16\"/>\n            <rect x=\"16\" y=\"16\" width=\"16\" height=\"16\" fill-opacity=\"0.75\"/>\n            <rect y=\"32\" width=\"16\" height=\"16\" fill-opacity=\"0.25\"/>\n          </svg>\n        </span>\n      </a>\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav-head.njk", false, "partials/global/site-head.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/third-party-comments.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<div id=\"disqus_thread\"></div>\n<script>\n    /**\n    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.\n    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */\n    /*\n    var disqus_config = function () {\n    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable\n    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n    };\n    */\n    (function() { // DON'T EDIT BELOW THIS LINE\n    var d = document, s = d.createElement('script');\n    s.src = 'https://ademagic.disqus.com/embed.js';\n    s.setAttribute('data-timestamp', +new Date());\n    (d.head || d.body).appendChild(s);\n    })();\n</script>\n<noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

