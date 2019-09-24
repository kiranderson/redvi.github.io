(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{238:function(a,s,e){"use strict";e.r(s);var t=e(3),r=Object(t.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("В этом посте затронем тему записи скринкастов под linux.\nБудет рассмотрено несколько наиболее популярных утилит для захвата\nвидео с монитора компьютера, также обратим внимание на их функционал, для одних детально, для других — поверхностно.")]),a._v(" "),e("p",[a._v("Вообще, в linux не так много кандидатов, которые могут устроить нас по всем показателям. Как оказалось, найти адекватную программу для указанных целей достаточно проблематично. Выбраны несколько: старый добрый ffmpeg, небезызвестные XVidCap и recordMyDesktop, а также подающий надежды новичок — eidete.")]),a._v(" "),e("h2",{attrs:{id:"ffmpeg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg","aria-hidden":"true"}},[a._v("#")]),a._v(" ffmpeg")]),a._v(" "),e("p",[a._v("Что он умеет и как это использовать в посведневной жизни:")]),a._v(" "),e("p",[a._v('"Склеивание" музыки и видео:')]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -i son.wav -i video_origine.avi video_finale.avi\n")])])]),e("p",[a._v("Замена одной звуковой дорожки на другую (например, более качественную):")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -i new.wav -i video.avi out.avi\n")])])]),e("p",[a._v("Запись скринкаста (запись с монитора компьютера):")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -f x11grab -s 1366x768 -r "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),a._v(" -b "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1500")]),a._v(" -bt "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v(" -aspect "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1,3333")]),a._v(" -sameq -i :0.0+0,0 -f alsa -async "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -ac "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -i hw:0,0 -acodec libmp3lame ~/MyVideo.avi\n")])])]),e("p",[a._v("В этом примере будет записан также звук.")]),a._v(" "),e("p",[a._v("Перекодирование из одного формата в другой:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -i video.avi -f webm video.webm\n")])])]),e("p",[a._v("Извлечение аудиодорожки из видеозаписи:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -i video.avi -f mp3 audio.mp3\n")])])]),e("p",[a._v("Запись звука с микрофона:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -f alsa -async "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -ac "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -i hw:0,0 -acodec libmp3lame sound.mp3\n")])])]),e("p",[a._v("Создание gif-анимации из видео:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -i video.avi animation.gif\n")])])]),e("p",[a._v("Получить сведения о видео:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -i video.avi\n")])])]),e("ul",[e("li",[a._v("Основные ключи:\n"),e("ul",[e("li",[a._v("i - входной файл")]),a._v(" "),e("li",[a._v("s - разрешение экрана для нашей записи")]),a._v(" "),e("li",[a._v("r - количество кадров в секунду")]),a._v(" "),e("li",[a._v("ac - количество каналов (для аудио)")]),a._v(" "),e("li",[a._v("qscale - регулировка уровня сжатия")]),a._v(" "),e("li",[a._v("bt - битрейт")])])])]),a._v(" "),e("p",[a._v("Остальное можно найти в мануале - "),e("code",[a._v("man ffmpeg")]),a._v(". Там до вас даже постараются донести, как всё это работает.")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("На заметку")]),a._v(" "),e("p",[a._v("Проверить поддерживаемые форматы файлов можно командой "),e("code",[a._v("ffmpeg -formats")])])]),a._v(" "),e("h2",{attrs:{id:"сnедующий-кандидат-xvidcap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#сnедующий-кандидат-xvidcap","aria-hidden":"true"}},[a._v("#")]),a._v(" Следующий кандидат - XVidCap")]),a._v(" "),e("p",[a._v("Кодирует на лету и имеет множество разных форматов. Автору не подошёл. Это тот редкий случай, когда всё вроде нормально, но субъективно что-то не нравится.")]),a._v(" "),e("h2",{attrs:{id:"recordmydesktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recordmydesktop","aria-hidden":"true"}},[a._v("#")]),a._v(" recordMyDesktop")]),a._v(" "),e("p",[a._v("Используют многие. Автору он не подошёл по причине непонятных фризов при записи ролика. Возможно, так отвратно он работает на отнюдь не топовом ноутбуке - нужно больше мощности?")]),a._v(" "),e("p",[a._v("Кроме того, recodrMyDesktop записывает файл в непотребном формате, который всё равно придётся перекодировать.")]),a._v(" "),e("p",[a._v("Имеет и консольный вариант:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("$ recordmydesktop --height "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v(" --width "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" --channels "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --no-sound --overwrite -o video.ogv\n")])])]),e("p",[a._v("В приведённом примере несложно разобраться: мы запишем файл "),e("code",[a._v("video.ogv")]),a._v(" с\nразмерами 600x400 и без звука.")]),a._v(" "),e("h2",{attrs:{id:"как-создать-анимированный-gif"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#как-создать-анимированный-gif","aria-hidden":"true"}},[a._v("#")]),a._v(" Как создать анимированный gif")]),a._v(" "),e("p",[a._v("Для этого отлично подходит программка "),e("code",[a._v("byzanz")]),a._v(". В официальных репозиториях её может и не быть. Пользователи Archlinux могут найти обсуждаемую деву в AUR.")]),a._v(" "),e("p",[a._v("Сам процесс записи выглядит примерно так:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ byzanz-record --duration"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" --delay"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" --x"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v(" --y"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v(" --width"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("800")]),a._v(" --height"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" myGifFile.gif\n")])])]),e("p",[a._v("где")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("--x/--y - точки координат\n--width/ --height - ширина и высота экрана соответственно\n--duration - продолжительность\n--delay - задержка перед началом записи\n")])])]),e("p",[a._v("Помимо этого можно скомбинировать возможности ffmpeg и imagemagick:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ffmpeg -t "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" -ss 00:00:10 -i MyVideo.mp4 out%04d.gif\n$ convert -delay 1x20 -loop "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" out*gif my.gif\n")])])]),e("p",[a._v("Сначала разбиваем видео файл на множество гифок. Затем конвертируем все эти\nгифки в одну.")]),a._v(" "),e("p",[a._v("Здесь параметр "),e("code",[a._v("-t")]),a._v(" указывает продолжительность, "),e("code",[a._v("-ss")]),a._v(" начать с\nначала или после прошествия некоторого времени. При конвертации "),e("code",[a._v("delay")]),a._v("\nопределяет задержку (насколько быстрой будет анимация).")]),a._v(" "),e("p",[a._v("Пример с множеством png-изображений:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ convert -delay "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("120")]),a._v(" -loop "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" *.png animated.gif\n")])])]),e("p",[a._v("Изменить размер гифки:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ convert old.gif -resize 600x600"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" new.gif\n")])])]),e("p",[a._v("Или обойтись одним только ffmpeg:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# -s - размер\n# -r 10 - скорость анимации\n$ ffmpeg -i file.mov -s 900x495 -pix_fmt rgb24 -r 10 file.gif\n")])])]),e("h2",{attrs:{id:"итог"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#итог","aria-hidden":"true"}},[a._v("#")]),a._v(" Итог")]),a._v(" "),e("p",[a._v("Ну, что сказать, ffmpeg пока был и остаётся лучшим, хотя если вам\nнужно добавить звук в записанный ролик, лучше записать звуковую дорожку отдельно - в Audacity, а затем склеить с видео в другой программке - Avidemux. Не забывайте, Avidemux может многое.")]),a._v(" "),e("p",[a._v("Замечу, что один и тот же ролик в "),e("code",[a._v(".avi")]),a._v(" и "),e("code",[a._v(".webm")]),a._v(" имеет абсолютно разный вес. Рекорд автора: "),e("code",[a._v(".avi")]),a._v(" - 70 MB, "),e("code",[a._v(".webm")]),a._v(" - 12 MB. Впечатляет, не правда ли?")]),a._v(" "),e("p",[a._v("Увы, наш славный youtube тоже не любит больших файлов и кодирует их, но уже по-своему, их сжатие просто делает картинку размытой - никакой чёткости. Если вы знаете, как бороться с этой youtub'овской чертой - напишите мне.")])])},[],!1,null,null,null);s.default=r.exports}}]);