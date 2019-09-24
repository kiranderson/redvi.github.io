(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{223:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Не сказать, чтобы звук в Linux изначально был навысоте. Некоторые пользователи\nзачастую встречаются с теми или иными проблемами, часть которых рассмотрена в этой небольшой заметке.\nНадеюсь, представленные здесь рецепты помогут кому-то выйти из затруднительной ситуации.")]),a._v(" "),e("h3",{attrs:{id:"нет-звука"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#нет-звука","aria-hidden":"true"}},[a._v("#")]),a._v(" Нет звука")]),a._v(" "),e("p",[a._v("Вообще нет. Это может свидетельствовать в пользу того, что ваша звуковая карта не настроена должным образом.\nУбедитесь, что в системе установлены пакеты "),e("code",[a._v("alsa-lib")]),a._v(" и "),e("code",[a._v("alsa-utils")]),a._v(", а в ядре\nвключена поддержка необходимого вам драйвера.")]),a._v(" "),e("p",[a._v("Пример:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# lspci | grep -i audio\n00:1b.0 Audio device: Intel Corporation 6 Series/C200...\n")])])]),e("p",[e("img",{attrs:{src:t(57),alt:"include intel in kernel"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Device Drivers →\n  Sound card support →\n    Advanced Linux Sound Architecture →\n      PCI sound devices →\n        <*> Intel HD Audio  ---\x3e\n")])])]),e("p",[a._v("После этого необходимо настроить звук при помощи "),e("code",[a._v("alsamixer")]),a._v(": включение/выключение того или\nиного микшера осуществляется нажатием кнопки "),e("code",[a._v("m")]),a._v(". Альтернативным методом могут\nслужить консольные команды:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# amixer set Master 90% unmute\n# amixer set PCM 85% unmute\n")])])]),e("p",[e("img",{attrs:{src:t(58),alt:"alsamixer"}})]),a._v(" "),e("p",[a._v("Теперь воспроизведите какой-нибудь звуковой файл, дабы убедиться в\nработоспособности звука.")]),a._v(" "),e("h3",{attrs:{id:"микрофон"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#микрофон","aria-hidden":"true"}},[a._v("#")]),a._v(" Микрофон")]),a._v(" "),e("p",[a._v("Чтобы проверить работу микрофона, включите Capture, запишите и прослушайте тестовый файл. Пример:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ amixer "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" Capture cap\n$ arecord /tmp/test.wav   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# запись")]),a._v("\n$ aplay /tmp/test.wav     "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# воспроизведение")]),a._v("\n$ arecord -f dat -D hw:0,0 - "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" aplay -f dat -   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# или всё и сразу")]),a._v("\n")])])]),e("p",[a._v("Собственно, микрофон и доставляет большинство хлопот, так что приходится играть\nс ползунками в alsamixer. Передвигать левый и правый ползунки можно при помощи\nнажатия клавиш [Q | W | E ] — вверх, [Z | X | C ] — вниз.")]),a._v(" "),e("p",[e("img",{attrs:{src:t(59),alt:"capture"}})]),a._v(" "),e("p",[a._v("После такой настройки существенно снижается уровень шума микрофона. Но как\nпобедить данное явление полностью автору пока неизвестно.")]),a._v(" "),e("h3",{attrs:{id:"тихий-звук-при-просмотре-видео"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#тихий-звук-при-просмотре-видео","aria-hidden":"true"}},[a._v("#")]),a._v(" Тихий звук при просмотре видео")]),a._v(" "),e("p",[a._v("Если системные события и прогирывание музыкальных файлов звучат достаточно\nгромко, а просмотр видеофильмов оставляет желать лучшего, можно обратить\nвнимание на специальный микшер, служащий для усиления громкости. Это Pre-Amp.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /etc/asound.conf")]),a._v("\n\npcm."),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("default "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" plug\n      slave.pcm "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"softvol"')]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  pcm.softvol "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" softvol\n      slave "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          pcm "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dmix"')]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      control "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          name "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Pre-Amp"')]),a._v("\n\n          card "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      min_dB -5.0\n      max_dB "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20.0")]),a._v("\n      resolution "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("После чего перезапустить alsa:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" /etc/init.d/alsasound restart\n")])])]),e("p",[a._v("Не будем забывать, что в Linux для проигрывания видеофайлов используется mplayer, а все\nимеющиеся графические программы по сути являются лишь обёртками к нему.\nПоэтому, как уже "),e("router-link",{attrs:{to:"/posts/mplayer/"}},[a._v("упоминалось ранее")]),a._v(", надо лишь включить\nпринудительную настройку уровня громкости в файле "),e("code",[a._v("~/.mplayer/config")]),a._v(":")],1),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ~/.mplayer/config")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("softvol")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nsoftvol-max"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v("\n")])])]),e("p",[a._v("Параметр "),e("code",[a._v("softvol-max")]),a._v(" принимает значения от 10 до 10000 и при желании можно\nпоэкспериментировать со значениями.")])])},[],!1,null,null,null);s.default=n.exports},57:function(a,s,t){a.exports=t.p+"assets/img/intel-module.png"},58:function(a,s,t){a.exports=t.p+"assets/img/alsamixer.png"},59:function(a,s,t){a.exports=t.p+"assets/img/capture.png"}}]);