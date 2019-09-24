(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{220:function(t,a,n){"use strict";n.r(a);var s=n(3),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Довольно часто бывает необходимо указать в тексте ссылку на источник или\nкакой-либо полезный ресурс. А то и просто сделать оглавление «кликабельным»,\nдабы при его просмотре сразу можно было выбрать нужную главу и перейти к ней.")]),t._v(" "),n("p",[t._v("Для этих нужд вполне можно задействовать пакет "),n("code",[t._v("hyperref")]),t._v(", который входит в\nпоставку с LaTeX в большинстве дистрибутивов. "),n("code",[t._v("Hyperref")]),t._v(" имеет достаточно\nбольшое количество опций, которые перечисляются через запятую при\nподключении пакета. Но следует иметь ввиду, что он переопределяет\nнекоторые команды LaTeX'а, и подключать его последним. При\nподключении "),n("code",[t._v("hyperref")]),t._v(" все перекрёстные ссылки будут преобразованы в\nссылки гипертекстовые: оглавление, сноски, цитаты...")]),t._v(" "),n("p",[t._v("Во многих источниках обращают внимание на опцию выбора драйвера. Честно\nсказать, при создании PDF-документа с "),n("code",[t._v("pdflatex")]),t._v(" "),n("em",[t._v("без указания")]),t._v(" драйвера всё\nсобралось и сработало точно так же как и с включением нужной опции.")]),t._v(" "),n("ul",[n("li",[t._v("Возможные опции для hyperref\n"),n("ul",[n("li",[t._v("pdftex")]),t._v(" "),n("li",[t._v("dvips")]),t._v(" "),n("li",[t._v("latex2html")]),t._v(" "),n("li",[t._v("vtex")])])])]),t._v(" "),n("h2",{attrs:{id:"ссыnки-внутри-документа"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ссыnки-внутри-документа","aria-hidden":"true"}},[t._v("#")]),t._v(" Ссылки внутри документа")]),t._v(" "),n("p",[t._v("К примеру, появилась необходимость сослаться на какой-либо пункт в документе.\nВ этом случае воспользуемся мишенью и сошлёмся на неё. Если вы привыкли\nработать с HTML, можете сравнить это с созданием якоря на странице.\nКоманда для мишени задаётся так:")]),t._v(" "),n("div",{staticClass:"language-latex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-latex"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hypertarget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("где "),n("code",[t._v("name")]),t._v(" — мишень, "),n("code",[t._v("text")]),t._v(" — используемый текст\n(этот аргумент может быть пустым).")]),t._v(" "),n("p",[t._v("Теперь нужно просто сослаться на созданную мишень в тексте при помощи "),n("code",[t._v("hyperlink")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-latex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-latex"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a4paper,14pt,titlepage,final,oneside"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("report")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("english, russian"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("babel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("utf8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inputenc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("unicode, pdftex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hyperref")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% подключаем hyperref")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% начало документа")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hypertarget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Пункт 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% создаём мишень p1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% ссылаемся на мишень p1")]),t._v("\nДля просмотра подробных сведений обратитесь к пункту "),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\hyperlink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% конец документа")]),t._v("\n")])])]),n("p",[t._v("Если же нужно дать ссылку на внешний файл, в параметрах должнен\nналичествовать путь к нужному файлу. В примере документ, который будет\nоткрыт, лежит в том же каталоге, что и документ, ссылающийся на него:")]),t._v(" "),n("div",{staticClass:"language-latex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-latex"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% \\href{URL}{text}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% ссылаемся на document.pdf")]),t._v("\nИнструкция по эксплуатации "),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\href")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("document.pdf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("прилагается"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n")])])]),n("h2",{attrs:{id:"ссыnки-на-сторонние-ресурсы"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ссыnки-на-сторонние-ресурсы","aria-hidden":"true"}},[t._v("#")]),t._v(" Ссылки на сторонние ресурсы")]),t._v(" "),n("p",[t._v("Для того, чтобы при двойном клике на ссылку открывалась нужная страница\nв браузере, следует оформить её (предполагаемую ссылку) при помощи\nтого же "),n("code",[t._v("href")]),t._v(". Эта конструкция в принципе ничем не отличается от предыдущей,\nгде мы ссылались на внешний файл, только вместо указания пути к файлу\nиспользуется адрес интернет-страницы:")]),t._v(" "),n("div",{staticClass:"language-latex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-latex"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\chapter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token headline class-name"}},[t._v("Введение")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nЕсть много ресурсов, предназначенных для изучения Python и Django,\nтак что эта книга не стремится обучить основам.\nДля новичков в Python я настоятельно рекомендую\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\href")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("http://www.diveinto.org/python3/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Dive Into Python"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Марка Пилгрима.\n")])])]),n("h2",{attrs:{id:"как-выбрать-цвет"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#как-выбрать-цвет","aria-hidden":"true"}},[t._v("#")]),t._v(" Как выбрать цвет")]),t._v(" "),n("p",[t._v("Таблица цветов, представленная вот таким незамысловатым рисунком\n(зафикисровано дабы постоянно не обращаться к вики, откуда и было унесено):")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://farm3.staticflickr.com/2854/9718512214_047abf1432_o.jpg",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://farm3.staticflickr.com/2854/9718512214_5737105b40_n.jpg",alt:"latex colors"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Более тонкую настройку цвета поможет осуществить ресурс "),n("a",{attrs:{href:"http://www.palettebuilder.com/rgb.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Palette Builder"),n("OutboundLink")],1),t._v(". На вкладке "),n("code",[t._v("RGB")]),t._v(" указываем или выбираем нужный цветовой вариант и вписываем нечто подобное:")]),t._v(" "),n("div",{staticClass:"language-latex extra-class"},[n("pre",{pre:!0,attrs:{class:"language-latex"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% подключить пакет color")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% выбрать цвета")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\definecolor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("BlueGreen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("RGB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("49,152,255"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\definecolor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Violet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("RGB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("120,80,120"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% назначить цвета при подключении hyperref")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("unicode, colorlinks, urlcolor=BlueGreen, linkcolor=Violet, pagecolor=Violet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hyperref")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Теперь цвет на другие страницы внутри документа и цвет гиперссылок\nопять же внутри документа будет филетовым, а вот ссылки на сторонние\nресуры — голубыми.")]),t._v(" "),n("dt",[t._v("linkcolor\n"),n("dd",[t._v(" цвет гиперссылок внутри документа, по-умолчанию red")])]),t._v(" "),n("dt",[t._v("pagecolor\n"),n("dd",[t._v(" цвет гиперссылок на другие страницы внутри документа, по-умолчанию red")])]),t._v(" "),n("dt",[t._v("filecolor\n"),n("dd",[t._v(" цвет гиперссылок, открывающих локальные файлы, по-умолчанию cyan")])]),t._v(" "),n("dt",[t._v("anchorcolor\n"),n("dd",[t._v(" цвет текста мишени, по-умолчанию black")])]),t._v(" "),n("dt",[t._v("citecolor\n"),n("dd",[t._v(" цвет библиографических ссылок, по-умолчанию green")])]),t._v(" "),n("dt",[t._v("urlcolor\n"),n("dd",[t._v(" цвет гиперссылок на сетевые ресурсы, по-умолчанию magenta")])]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("На заметку")]),t._v(" "),n("p",[t._v("Для того, чтобы можно было переходить по ссылкам из pdf-документа,\nследует установить пакет x11-misc/xdg-utils (для gentoo).")])])])},[],!1,null,null,null);a.default=e.exports}}]);