(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{240:function(t,s,n){"use strict";n.r(s);var a=n(3),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Ранее мы уже писали различные скрипты для примера использования возможностей языка "),n("code",[t._v("python")]),t._v(", но не сказать, чтобы они были нужны в повседневности и могли претендовать на какое-то практическое применение. Сегодня же будет рассмотрен один очень небольшой и очень нужный (автору) скрипт. На его написание натолкнуло использование gentoo linux поэтому считаю, что он может быть небезынтересен пользователям этой операционной системы и прикрепляю соответствующий тег к посту.")]),t._v(" "),n("p",[t._v("В чём суть работы скрипта: он сортирует в алфавитном порядке записи в "),n("code",[t._v("/etc/portage/*")]),t._v(". При пополнении парка программ такие файлы как "),n("code",[t._v("package.use")]),t._v(", "),n("code",[t._v("package.keywords")]),t._v(" и им подобные наполняются беспорядочными строками, в коих некоторое время спустя сложно найти что-то самому хозяину. Так расставим всё по местам!")]),t._v(" "),n("p",[t._v("Сначала приводится полный пример кода, содержащий менее двадцати строк, затем построчный разбор с комментариями.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sort.py")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#! /usr/bin/env python")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: utf-8 -*-")]),t._v("\npackage "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Choose file for sort: '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r+'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    line "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readlines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seek"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sort_text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sorted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" new_line "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" sort_text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tell"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" IOError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No such file or directory. Repeat, please!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Первая строка указывает на расположение интерпретатора "),n("code",[t._v("python")]),t._v(", вторая — на кодировку по-умолчанию.")]),t._v(" "),n("p",[t._v("Далее вводится переменная package, которой будет присвоено значение указанное пользователем. Иными словами при запуске команды "),n("code",[t._v("sudo python sort.py")]),t._v(" будет запрошен путь к текстовому файлу, который в дальнейшем и подвергнется правке.")]),t._v(" "),n("p",[t._v("Весь следующий блок кода обёрнут инструкцией "),n("code",[t._v("try-except")]),t._v(", перехватывающей исключение "),n("code",[t._v("IOError")]),t._v(". Это нужно для проверки ввода пользовательских данных. Например, вы могли ошибиться при наборе пути к файлу или ввели число. В таком случае вам укажут на вашу ошибку.")]),t._v(" "),n("ul",[n("li",[t._v("file = open(package, 'r+') — открыть выбранный пользователем файл для обновления.")]),t._v(" "),n("li",[t._v("pos = 0 — установить позицию в начало")]),t._v(" "),n("li",[t._v("line = file.readlines() — построчное чтение из файла и присваивание переменной line получившегося списка")]),t._v(" "),n("li",[t._v("file.seek(pos) — перемещать позицию")]),t._v(" "),n("li",[t._v("sort_text = sorted(line) — получение нового отсортированного по алфавиту списка")])]),t._v(" "),n("p",[t._v("В следующем блоке проводится обход списка, перезапись выбранного файла, возвращение текущей позиции, закрытие файла:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" new_line "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" sort_text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tell"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Кроме того, можно проводить сортировку по ключу. Для этого достаточно создать дополнительную функцию. Например:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortByLenght")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputSrt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputSrt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Теперь можно вызывать функцию sorted с ключом:")]),t._v(" "),n("div",{staticClass:"language-pycon extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(">>> new_list = sorted(old_list, key=sortByLenght)\n")])])]),n("h2",{attrs:{id:"ещё-немного-теории-иnи-справка"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ещё-немного-теории-иnи-справка","aria-hidden":"true"}},[t._v("#")]),t._v(" Ещё немного теории или справка:")]),t._v(" "),n("p",[t._v("Файл может быть открыт в режимах только для чтения, для записи, для обновления.")]),t._v(" "),n("ul",[n("li",[t._v("f = open('file') — откроет файл только для чтения")]),t._v(" "),n("li",[t._v("f = open('file', 'r') — то же самое")]),t._v(" "),n("li",[t._v("'w' — открытие файла для записи")]),t._v(" "),n("li",[t._v("'a' — для добавления в конец")]),t._v(" "),n("li",[t._v("'b' — указание на двоичные данные: "),n("code",[t._v("'wb'")]),t._v(", "),n("code",[t._v("'rb'")]),t._v(".")]),t._v(" "),n("li",[t._v("'t' — явное указание на то, что файл текстовый. Обычно не пишется")]),t._v(" "),n("li",[t._v("'w+' — открытие файла в режиме для обновления, в момент открытия файла его длина усекается до нуля, возможны чтение и запись")]),t._v(" "),n("li",[t._v("'r+' —  открытие файла в режиме для обновления, длина не усекается, возможны чтение и запись")]),t._v(" "),n("li",[t._v("метод readline() — читает одну строку, возвращает строку")]),t._v(" "),n("li",[t._v("метод readlines() — читает все строки из файла, возвращает список")]),t._v(" "),n("li",[t._v("метод tell() — возвращает текущую позицию в файле")]),t._v(" "),n("li",[t._v("метод seek() — перемещает текущую позицию в новое место")]),t._v(" "),n("li",[t._v("метод write() — запишет в файл одну строку")]),t._v(" "),n("li",[t._v("метод writelines() — запишет список строк")])])])},[],!1,null,null,null);s.default=e.exports}}]);