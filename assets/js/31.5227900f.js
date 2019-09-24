(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{221:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Заметка навеяна "),e("a",{attrs:{href:"http://eax.me/english/",target:"_blank",rel:"noopener noreferrer"}},[a._v("постом на eax.me"),e("OutboundLink")],1),a._v(", в котором ведущий\nблога затрагивает тему изучения английского языка. Надо признаться, что\nвопрошателем, которым был задан вопрос, ответом на который является указанный\nпо ссылке пост (да-да, русский язык велик и могуч, его сложноподчинённые\nпредложения могут быть сколь угодно длинными), является автор сего блога.")]),a._v(" "),e("p",[a._v("В школе/ВУЗ'е достался мне немецкий язык, английский осваивался и\nосваивается по мере необходимости и я не могу похвастать отличным\nзнанием оного. Собственно, помимо чтения книг/документации и постепенного\nпополнения словарного запаса, никаких потугов к углублению знаний не\nпредпринималось. Момент с видеофильмами был благополучно проигнорирован\nсознанием, а зря...")]),a._v(" "),e("p",[a._v("Поэтому сегодня предлагается углубиться в дебри английского разговорного\nпосредством просмотра фильмов с оригинальной озвучкой. Курс взят. Осталось\nлишь найти фильмы и подобрать видеоплеер для их просмотра.")]),a._v(" "),e("h2",{attrs:{id:"как-искать"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#как-искать","aria-hidden":"true"}},[a._v("#")]),a._v(" Как искать")]),a._v(" "),e("p",[a._v("Зачастую большинство из киноманов-любителей не задаётся вопросом проверки\nкачества, подходящего формата фильма и уж тем более наличия/отсутствия в нём субтитров или дополнительных звуковых дорожек. Если же вопросом о дорожках задаться, параметры поиска вырисовываются следующие:")]),a._v(" "),e("ul",[e("li",[a._v("DUB обозначает дубляж, то есть перевод")]),a._v(" "),e("li",[a._v("Original указывает на наличие оригинальной звуковой дорожки")]),a._v(" "),e("li",[a._v("SUB знаменует собой субтитры, на каком языке и в какой кодировке должно быть указано в описании")])]),a._v(" "),e("p",[a._v("То есть в названии или описании файла должно быть примерно следующее: Dub + Original + Subs(eng,rus).")]),a._v(" "),e("h2",{attrs:{id:"выбор-видеопроигрыватеnя"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#выбор-видеопроигрыватеnя","aria-hidden":"true"}},[a._v("#")]),a._v(" Выбор видеопроигрывателя")]),a._v(" "),e("p",[a._v("Я отношусь к той категории граждан, которые искренне недоумевают зачем использовать GUI, если он является лишь надстройкой над консольной программой. Этот выбор приемлем только с учётом повышения удобства, но программа, к которой мы обратимся с нашими нуждами, сложности в повседневном использовании не представляет.")]),a._v(" "),e("p",[a._v("Конечно же, это mplayer.")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("На заметку")]),a._v(" "),e("p",[a._v("В случае с Gentoo Linux убедитесь, что включены флаги "),e("code",[a._v("sse")]),a._v(", "),e("code",[a._v("mmx")]),a._v(" и "),e("code",[a._v("mmxext")]),a._v(",\nчто должно значительно ускорить работу со звуком и видео.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /etc/portage/package.use")]),a._v("\n\nmedia-video/mplayer sse mmx mmxext\n")])])]),e("p",[a._v("После чего пересобрать mplayer.")]),a._v(" "),e("p",[a._v("Настройки изменять не обязательно, но на случай, если вас не устраивает стандартное поведение программы, файл конфигурации находится по пути "),e("code",[a._v("/etc/mplayer/mplayer.conf")]),a._v(". Его можно скопировать в домашний каталог ("),e("code",[a._v("~/.mplayer/config")]),a._v(") и изменить, например, дорожку, используемую по-умолчанию. Вот некоторые опции, которые могут быть полезны нам в данный момент:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ~/.mplayer/config")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# DVD: отображать русские субтитры")]),a._v("\nslang "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ru\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# DVD: Проигрывать английскую аудиодорожку")]),a._v("\nalang "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" en\n")])])]),e("p",[a._v("Настройка горячих клавиш может быть сделана таким же образом, но с указанием опций в "),e("code",[a._v("input.conf")]),a._v(".")]),a._v(" "),e("p",[a._v("Привязка клавиш должна соответствовать формату")]),a._v(" "),e("p",[e("code",[a._v("<название_клавиши><назначенное_действие>")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ~/.mplayer/input.conf")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# switch_audio  # переключить звуковую дорожку")]),a._v("\n\nq quit          "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# закрыть mplayer")]),a._v("\nESC quit        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# то же")]),a._v("\nSPACE pause     "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# остановить воспроизведение")]),a._v("\no osd "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# смотрим сколько времени идёт фильм, сколько осталось до конца")]),a._v("\np osd "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# скрыть информацию о времени просмотра")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" volume -1     "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# уменьшить громкость")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" volume "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# увеличить громкость")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" contrast -1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# управление контрастом")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" contrast "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" brightness -1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# управление яркостью")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" brightness "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nr sub_pos -1    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# переместить субтитры выше")]),a._v("\nt sub_pos +1    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# или ниже")]),a._v("\nj sub_select    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# переключить/выключить субтитры")]),a._v("\nf vo_fullscreen "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# полноэкранный/обычный режим")]),a._v("\ns screenshot    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# сделать скриншот")]),a._v("\nm mute          "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# выключить звук")]),a._v("\n")])])]),e("h2",{attrs:{id:"выбор-звуковой-дорожки-и-субтитров"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#выбор-звуковой-дорожки-и-субтитров","aria-hidden":"true"}},[a._v("#")]),a._v(" Выбор звуковой дорожки и субтитров")]),a._v(" "),e("p",[a._v("Для начала узнаем, какие дорожки поддерживает видео. В примере наш фильм\nименуется The_Interpreter.2005.mkv:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ mplayer -vo null -ao null -frames "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" -v The_Interpreter.2005.mkv "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" aid\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("lavf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" stream "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(": audio "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ac3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", -aid "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(", -alang rus, DUB\n\n$ mplayer -vo null -ao null -frames "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" -v The_Interpreter.2005.mkv "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" sid\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("lavf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" stream "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(": subtitle "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("subrip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", -sid "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(", -slang rus\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("lavf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" stream "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(": subtitle "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("subrip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", -sid "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(", -slang eng\n")])])]),e("p",[a._v("Как видно из вывода, в фильме не оказалось оригинальной звуковой дорожки, но есть субтитры.")]),a._v(" "),e("p",[a._v("Если дорожек несколько, выбираем необходимую и запускаем mplayer с указанием\nеё номера (aid для аудио, sid для субтитров).")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ mplayer -aid "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" -sid "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" The_Interpreter.2005.mkv         "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# дорожка, субтитры, файл")]),a._v("\n$ mplayer -alang rus -slang eng The_Interpreter.2005.mkv "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# то же")]),a._v("\n")])])]),e("p",[a._v("Если вы скачали дорожку отдельно, подключить её можно "),e("a",{attrs:{href:"http://rutracker.org/forum/viewtopic.php?t=2403326",target:"_blank",rel:"noopener noreferrer"}},[a._v("так"),e("OutboundLink")],1),a._v(":")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ mplayer -audiofile "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("путь к дорожке"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("видео файл"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ mplayer -audiofile The_Interpreter.2005.ac3 The_Interpreter.2005.mkv "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# для нашего примера")]),a._v("\n")])])]),e("p",[a._v("При необходимости можно переключиться на русские субтитры:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(82),alt:"The Interpreter",title:"The Interpreter"}})]),a._v(" "),e("p",[a._v("Просмотр можно организовать наиболее удобным для вас способом. Либо "),e("em",[a._v("смотреть\nфильм частями")]),a._v(" по 5-20 минут, сначала оригинал без субтитров, затем с\nпереводом. Важно действительно понять о чём идёт речь вплоть до мельчайших\nподробностей. Либо (что гораздо лучше) взять английские субтитры, перевести\nи запомнить незнакомые слова, а затем смотреть фильм, не "),e("em",[a._v("отвлекаясь на перевод")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"допоnнитеnьные-настройки-mplayer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#допоnнитеnьные-настройки-mplayer","aria-hidden":"true"}},[a._v("#")]),a._v(" Дополнительные настройки mplayer")]),a._v(" "),e("p",[a._v("Дополнительно можно отметить возможность установки таких параметров как\nмасштаб субтитров, вывод видео в X11 или же во фреймбуффере, выбор alsa\nили pusleaudio для вывода звука, управление кэшированием и прочее.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ~/.mplayer/config")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# установить масштаб субтитров равным 3% от размера экрана")]),a._v("\nsubfont-text-scale"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# использовать alsa для вывода звука")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# возможны значения oss, pulse")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ao")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("alsa\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# использовать X11 для вывода видео")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("vo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xv\n")])])]),e("p",[a._v("В случаях, когда звук в фильме воспроизводится слишком тихо и виной тому\nотнюдь не аудио-дорожка, рекомендуется включить принудительную настройку\nуровня громкости прямо в mplayer:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ~/.mplayer/config")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("softvol")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nsoftvol-max"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v("\n")])])]),e("p",[a._v("Параметр "),e("code",[a._v("softvol-max")]),a._v(" принимает значения от 10 до 10000. На уровень\nгромкости эти установки влияют существенно, поэтому не выставляйте\nсразу слишком большое значение: подбирайте с умом. Также можно «подкрутить»\nпараметры при помощи alsamixer.")]),a._v(" "),e("blockquote",[e("p",[a._v("Чтобы mplayer запоминал позицию при просмотре фильма можно воспользоваться скриптом "),e("a",{attrs:{href:"http://sourceforge.net/projects/mplayerext/",target:"_blank",rel:"noopener noreferrer"}},[a._v("mplayer.ext"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("p",[a._v("Если при просмотре DVD-дисков для вас важно видеть меню навигации, открывайте их так:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ mplayer -nocache -mouse-movements dvdnav://\n")])])]),e("p",[a._v("Опция "),e("code",[a._v("mouse-movements")]),a._v(" позволит выбирать пункты меню при помощи мыши.")]),a._v(" "),e("p",[e("img",{attrs:{src:t(83),alt:"mplayer DVD",title:"Mplayer DVD"}})]),a._v(" "),e("p",[a._v("В целом, это всё. По мелочам пост может быть со временем дополнен и расширен, ибо mplayer имеет ещё много, много возможностей. Хотя вряд ли эта заметка сможет заменить "),e("code",[a._v("man mplayer")]),a._v(", да и незачем.")]),a._v(" "),e("h2",{attrs:{id:"по-поводу-ангnийского"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#по-поводу-ангnийского","aria-hidden":"true"}},[a._v("#")]),a._v(" По поводу английского")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Грамматика")]),a._v(" "),e("ul",[e("li",[a._v("Джина Каро «Английский для наших»")]),a._v(" "),e("li",[a._v("Очень рекомендуют «Cambridge Grammar In Use» (Raymond Murphy)")])])]),a._v(" "),e("li",[e("p",[a._v("Чтение")]),a._v(" "),e("ul",[e("li",[a._v("Хорошим подспорьем при чтении книг будет связка для Android: AlReader + ColorDict. Первый представляет собой программу для чтения электронных книг, второй — словарь. Работают они сообща: при клике на незнакомое слово, оно тут же ищется в словаре.")]),a._v(" "),e("li",[a._v("Читайте блоги зарубежных коллег. По началу понятно не будет ровным счётом ничего. Это не страшно. Для Firefox есть плагин Google Translator for Firefox. В настройках плагина можно задать сочетание горячих клавиш и при встрече с незнакомым словом выделить его и перевести.")]),a._v(" "),e("li",[a._v("Наконец, есть так называемые адаптированные тексты. Например, введите в поисковой системе «метод Ильи Франка».")])])]),a._v(" "),e("li",[e("p",[a._v("Произношение")]),a._v(" "),e("ul",[e("li",[a._v("Весьма желательно говорить с носителями изучаемого языка. В моём учебном заведении была преподавательница французского, смысл слов которой не могли понять приехавшие на выставку французы. Выводы предлагаю сделать самостоятельно.")])])])]),a._v(" "),e("p",[a._v("И да осилит дорогу идущий. Удачи!")])])},[],!1,null,null,null);s.default=n.exports},82:function(a,s,t){a.exports=t.p+"assets/img/mplayer1.jpg"},83:function(a,s,t){a.exports=t.p+"assets/img/mplayer2.jpg"}}]);