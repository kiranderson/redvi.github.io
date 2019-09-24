(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{226:function(n,a,r){"use strict";r.r(a);var s=r(3),e=Object(s.a)({},function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("p",[n._v("Всем известен простой текстовый редактор nano. Он поставляется как редактор по умолчанию в большинстве дистрибутивов linux и имеет огромное количество пользователей, пожалуй, больше, чем какой-либо другой редактор. Но зачастую в нём не хватает одной приятной мелочи — подсветки синтаксиса. Впрочем, это можно легко и быстро исправить.")]),n._v(" "),r("p",[n._v("Шаблоны с различной подсветкой находятся по пути "),r("code",[n._v("/usr/share/nano")]),n._v(". Что там удастся найти?")]),n._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[n._v("$ tree /usr/share/nano\n/usr/share/nano\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- asm.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- awk.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- cmake.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- c.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- css.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- debian.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- fortran.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- gentoo.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- groff.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- html.nanorc\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- java.nanorc\n")])])]),r("p",[n._v("Итак, в нашем распоряжении подсветка языков программирования c, python, php и java. Можно раскрасить html и css файлы и кое-что ещё. Не так уж много, но для дел насущных должно хватить.")]),n._v(" "),r("p",[n._v("Дело за малым: создать файл "),r("code",[n._v(".nanorc")]),n._v(" в домашней директории и включить в него необходимые стили. Это может выглядеть так:")]),n._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[n._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[n._v("cat")]),n._v(" .nanorc\ninclude /usr/share/nano/makefile.nanorc\ninclude /usr/share/nano/python.nanorc\ninclude /usr/share/nano/xml.nanorc\ninclude /usr/share/nano/sh.nanorc\ninclude /usr/share/nano/cmake.nanorc\ninclude /usr/share/nano/css.nanorc\ninclude /usr/share/nano/html.nanorc\ninclude /usr/share/nano/patch.nanorc\ninclude /usr/share/nano/php.nanorc\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);