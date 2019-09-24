(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{213:function(e,t,a){"use strict";a.r(t);var v=a(3),_=Object(v.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("TeX и LaTeX отлично подходят для создания разного рода электронных книг. Книги\nформата "),v("code",[e._v(".pdf")]),e._v(" создаются легко и, более того, у LaTeX имеется нативная поддержка\nданного формата. Как уже не раз "),v("router-link",{attrs:{to:"/posts/texreview/"}},[e._v("было показано ранее")]),e._v(", следует\nлишь ввести команду для сборки pdf-файла из tex-файла, например:")],1),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("$ pdflatex my_book.tex\n")])])]),v("p",[e._v("Но как обстоят дела с другими форматами? Многие имеют в своём распоряжении\nсмартфоны или планшеты и, разумеется, читают с экранов этих устройств книги. В\nметро, по пути на работу, в парке, выгуливая собаку, да мало ли где ещё. Но\nпорази меня гром, читать "),v("code",[e._v("pdf")]),e._v(" с подобных девайсов совершенно неудобно.")]),e._v(" "),v("p",[v("img",{attrs:{src:a(43),alt:"Gadgets",title:"Devices"}})]),e._v(" "),v("p",[e._v("Итак, что такое ePub и как конвертировать вашу собственную книгу из "),v("code",[e._v("tex")]),e._v(" в\n"),v("code",[e._v("epub")]),e._v("?")]),e._v(" "),v("h2",{attrs:{id:"что-такое-epub"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#что-такое-epub","aria-hidden":"true"}},[e._v("#")]),e._v(" Что такое ePub?")]),e._v(" "),v("p",[e._v("EPUB (electronic publication) — один из форматов электронных книг. Вообще,\nкнига формата ePub является по сути своей документом XHTML, в котором содержится\nсам текст + XML с описанием книги. Последний может выводить оглавление с\nнавигационными ссылками.")]),e._v(" "),v("p",[e._v("Конвертаци "),v("code",[e._v("tex")]),e._v(" в "),v("code",[e._v("epub")]),e._v(" состоит из двух действий:")]),e._v(" "),v("ol",[v("li",[e._v("конвертировать книгу в XHTML")]),e._v(" "),v("li",[e._v("запаковать XHTML в epub-файл")])]),e._v(" "),v("h2",{attrs:{id:"переводим-tex-в-xhtml"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#переводим-tex-в-xhtml","aria-hidden":"true"}},[e._v("#")]),e._v(" Переводим tex в XHTML")]),e._v(" "),v("p",[e._v("В Linux доступны две отличные программы для преобразования чего угодно во что\nугодно: это pandoc и calibre. Но мы пойдём другим путём и вместо того, чтобы\nтащить многочисленные библиотеки Qt (calibre) или же over 90 пакетов haskell\n(pandoc) установим небольшую консольную программу с наименованием "),v("code",[e._v("tth")]),e._v(":")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("# emerge -apv tth\n")])])]),v("p",[e._v("С TtH перегнать книгу в XHTML не составит труда:")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("$ tth -w2 -e2 -u my_book.tex\n")])])]),v("p",[e._v("Эта команда создаст файл с расширением "),v("code",[e._v(".html")]),e._v(" в текущей директории.")]),e._v(" "),v("ul",[v("li",[e._v("флаг "),v("code",[e._v("-w2")]),e._v(" гарантирует получение XHTML в выводе")]),e._v(" "),v("li",[e._v("флаг "),v("code",[e._v("-e2")]),e._v(" встраивает графику из tex-файла")]),e._v(" "),v("li",[e._v("флаг "),v("code",[e._v("-u")]),e._v(" обеспечивает поддержку юникода, по-умолчанию используется iso-8859-1")]),e._v(" "),v("li",[e._v("справку можно вызвать командой "),v("code",[e._v("tth -?")])])]),e._v(" "),v("p",[e._v("Это всё, первый шаг сделан.")]),e._v(" "),v("h2",{attrs:{id:"вкnючаем-метаданные"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#вкnючаем-метаданные","aria-hidden":"true"}},[e._v("#")]),e._v(" Включаем метаданные")]),e._v(" "),v("p",[e._v("Для этого установим ещё одну небольшую программу, требующую минимального количества\nзависимостей (хотя и оно тянет "),v("code",[e._v("qtgui, qtwebkit")]),e._v(", намекая на пристрастия разработчиков),\nа именно "),v("code",[e._v("sigil")]),e._v(":")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("# emerge -apv sigil\n")])])]),v("p",[e._v("Теперь откройте sigil и выбирайте вашу книгу, внести необходимые изменения и\nсохраните их. Какие изменения? Дело в том, что нам нужно удостовериться в\nправильности генерируемого XML-файла. В частности оглавления и валидации.")]),e._v(" "),v("h3",{attrs:{id:"огnавnение"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#огnавnение","aria-hidden":"true"}},[e._v("#")]),e._v(" Оглавление")]),e._v(" "),v("p",[e._v("Должно быть, ваш tex-докмент уже содержит созданное автоматически содержание\nкниги, не так ли? Если оно сгенерировано самим LaTeX, TtH переведёт его в XHTML\nбез указаний сверху. А вот TOC (Table of Content) файл "),v("em",[e._v("для ePub")]),e._v(" должен быть сгенерирован\nотдельно. Для этого воспользуйтесь командой меню "),v("code",[e._v("Generate TOC from headings")]),e._v(",\nздесь всё просто.")]),e._v(" "),v("p",[v("img",{attrs:{src:a(44),alt:"ePub",title:"ePub Book"}})]),e._v(" "),v("h3",{attrs:{id:"ваnидация-документа"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ваnидация-документа","aria-hidden":"true"}},[e._v("#")]),e._v(" Валидация документа")]),e._v(" "),v("p",[e._v("Следующим шагом будет проверка валидации: "),v("code",[e._v("Tools->Validate ePub")]),e._v(". К несчастью,\nполучаем две ошибки:")]),e._v(" "),v("ul",[v("li",[e._v('"The < language > element is missing"')]),e._v(" "),v("li",[e._v('"The < title > element is missing"')])]),e._v(" "),v("p",[e._v("То есть не указан язык документа и его название. Дабы исправить это досадное\nнедоразумение отправляемся к настройкам "),v("code",[e._v("Tools->Meta data")]),e._v(" и вносим\nсоответствующие правки.")]),e._v(" "),v("p",[e._v('Когда закончите с этим, проверьте валиден ли документ ещё раз. Если всё в\nпорядке, вы должны получить сообщение "No problems found".')]),e._v(" "),v("p",[e._v("В принципе для второго этапа может подойти и какой-нибудь онлайн-конвертер, хотя\nавтору не попадался ни один, который генерировал бы корректное содержание для книги epub.")])])},[],!1,null,null,null);t.default=_.exports},43:function(e,t,a){e.exports=a.p+"assets/img/epub.png"},44:function(e,t,a){e.exports=a.p+"assets/img/epub2.png"}}]);