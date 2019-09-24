(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{233:function(s,a,e){"use strict";e.r(a);var t=e(3),r=Object(t.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v('Как правило, то, чем мы собираемся сегодня заняться, не приносит никакой пользы,\nкроме разве что эстетической. Но иногда хочется красоты. В том числе и при\nстартовой загрузке системы. Все user-friendly дистрибутивы балуют своих\nпользователей симпатичными графическими заставками и последним это,\nвроде бы, нравится. Что касается пользователей дистрибутивов типа\n"сделай сам", изначально заставка при загрузке считается лишней и не ставится\nпо-умолчанию. Но мы можем это легко исправить. В течение десяти-пятнадцати минут.\nТем, кто хотел бы настроить fbsplash, посвящается. Начнём.')]),s._v(" "),t("h2",{attrs:{id:"настройки-ядра"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#настройки-ядра","aria-hidden":"true"}},[s._v("#")]),s._v(" Настройки ядра")]),s._v(" "),t("p",[s._v("Входим в директорию с исходниками ядра, запускаем "),t("code",[s._v("menuconfig")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# cd /usr/src/linux-3.8.2-gentoo/\n# make menuconfig\n")])])]),t("p",[s._v("Надо отметить, что рекомендуемое в большинстве источников включение initramfs\nсовершенно необязательно для наших целей (не будет splash-картинки с начала\nзагрузки), у автора этих строк работает и без него. Если читатель собирается\nпоступить также, первые два блока — "),t("code",[s._v("General Setup")]),s._v(" и "),t("code",[s._v("Device Drivers")]),s._v(" — можно\nсмело игнорировать:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("General setup  ---\x3e\n    [*] Initial RAM filesystem and RAM disk (initramfs/initrd) support\nDevice Drivers  ---\x3e\n    [*] Block devices  ---\x3e\n        <*>   RAM block device support\n\nDevice Drivers  ---\x3e\n    Graphics support  ---\x3e\n        {*} Support for frame buffer devices  ---\x3e\n            *** Frame buffer hardware drivers ***\n")])])]),t("p",[s._v("Готово. Собираем ядро:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# make bzImage modules modules_install install\n")])])]),t("p",[s._v("Пока на этом всё. Займёмся поиском и установкой нужного софта.")]),s._v(" "),t("h2",{attrs:{id:"настройки-fbsplash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#настройки-fbsplash","aria-hidden":"true"}},[s._v("#")]),s._v(" Настройки fbsplash")]),s._v(" "),t("p",[s._v("Скачиваем нужные заставки. Можно найти стандартные из репозитария gentoo,\nможно поставить другие. Пойдём по второму пути.")]),s._v(" "),t("p",[s._v("Скачайте "),t("a",{attrs:{href:"http://www.mediafire.com/?0ga699ppbi41a2w",target:"_blank",rel:"noopener noreferrer"}},[s._v("этот файл"),t("OutboundLink")],1),s._v(". Имеющиеся\nтам разрешения экрана:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1280×800\n1024×768\n1280×1024\n1600×1200\n1680×1050\n1440×900\n")])])]),t("p",[s._v("Не будет большой беды, если вашего разрешения нет. Это исправляется путём правки файла "),t("code",[s._v(".cfg")]),s._v(" и переименованием его. Пример для экрана с разрешением 1366x768:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1440x900.cfg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bgcolor")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tx")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ty")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tw")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1305")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("th")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("684")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("text_x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("text_y")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("741")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("text_size")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("text_color")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0xdedede\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pic")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/splash/powered_by_gentoo/images/verbose_1366x768.jpg\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("silentpic")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/splash/powered_by_gentoo/images/silent_1366x768.jpg\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# progress bar")]),s._v("\nbox silent noover "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("761")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1305")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("768")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#221f29")]),s._v("\nbox silent inter "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("762")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("767")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#221f29")]),s._v("\nbox silent "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("761")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1305")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("767")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ececec")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# border of the progress bar")]),s._v("\nbox silent "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("761")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1305")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("761")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#221f29")]),s._v("\nbox silent "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("664")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1305")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("664")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#221f29")]),s._v("\nbox silent "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("664")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("664")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#221f29")]),s._v("\nbox silent "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1305")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("664")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1305")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("664")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#221f29")]),s._v("\n")])])]),t("p",[s._v("Переименовываем:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" 1440x900.cfg 1366x768.cfg\n")])])]),t("p",[s._v("Теперь следует изменить в графическом редакторе размер изображений "),t("code",[s._v("silent_1440x900.jpg")]),s._v(" и "),t("code",[s._v("verbose_1440x900.jpg")]),s._v(" на свои, и также переименовать их.")]),s._v(" "),t("p",[s._v("Обеспечить красоту призван патч "),t("code",[s._v("bootsplash")]),s._v(". Для старых версий ядра его придётся качать отдельно, в новые ядра (3.x ?) он уже включен. Также устанавливаем "),t("code",[s._v("splashutils")]),s._v(", поправив флаги в случае, если того требует emerge:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ emerge -va splashutils\n# emerge splashutils\n")])])]),t("p",[s._v("Распаковываем наши изображения в директорию "),t("code",[s._v("/etc/splash/")]),s._v(" (или копируем туда свои):")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# tar xvzf powered_by_gentoo_v0.7.tar.gz -C /etc/splash\n")])])]),t("p",[s._v("Наиболее удобным способом для создания initial ram filesystem автор считает использование "),t("code",[s._v("genkernel")]),s._v(", поэтому решившим собрать ядро с поддержкой initramfs рекомендуется ставить его и делать всё в соответствии со своими настройками. Пример:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# emerge genkernel\n# cd /usr/src/linux-3.8.2-gentoo/\n# genkernel initramfs --splash=powered_by_gentoo --splash-res=1366x768\n")])])]),t("p",[s._v("Дописываем к строке загрузчика в "),t("code",[s._v("/boot/grub/menu.lst")]),s._v(" (справедливо для grub-legasy):")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# menu.lst")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\ndefault "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("splashimage")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hd0,1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/boot/grub/splash.xpm.gz\ntitle Gentoo Linux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".2-gentoo-iniram root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hd0,1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nkernel /boot/vmlinuz-3.8.2-gentoo "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/ram0 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("real_root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda3 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("splash")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("silent,theme:powered_by_gentoo "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tty1\ninitrd /boot/initramfs-genkernel-x86_64-3.8.2-gentoo\n")])])]),t("p",[s._v("Если intramfs не используется, прописывать всё то же самое, но без "),t("code",[s._v("root=/dev/ram0 real_root=/dev/sda3")]),s._v(" и без указания последней строки.")]),s._v(" "),t("p",[s._v("В случае с Grub2:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/default/grub")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DISTRIBUTOR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gentoo"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DEFAULT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_HIDDEN_TIMEOUT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_HIDDEN_TIMEOUT_QUIET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_TIMEOUT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_CMDLINE_LINUX_DEFAULT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v('"vga'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0x0362 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("splash")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("silent,theme:powered_by_gentoo "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tty1 quiet\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_GFXPAYLOAD_LINUX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1024x768x24\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_GFXMODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1024x768x24\n")])])]),t("p",[s._v("Перезагружаемся. Наслаждаемся стартовыми красотами.")]),s._v(" "),t("p",[s._v("silent mode")]),s._v(" "),t("p",[t("img",{attrs:{src:e(73),alt:"silent mode"}})]),s._v(" "),t("p",[s._v("verbose mode")]),s._v(" "),t("p",[t("img",{attrs:{src:e(74),alt:"fbspash verbose mode"}})]),s._v(" "),t("p",[s._v("Готово! При нажатии клавиши "),t("code",[s._v("F2")]),s._v(" вы сможете перейти в режим verbose.")]),s._v(" "),t("p",[s._v("Кстати, вопреки утверждениям сторонников systemd, которые как мантру повторяют, что systemd загружает ОС намного быстрее, OpenRC не дал автору сего поста вдоволь налюбоваться содеянным. Gentoo загрузилась очень быстро.")]),s._v(" "),t("h2",{attrs:{id:"мы-пойдём-даnьше-заставка-в-tty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#мы-пойдём-даnьше-заставка-в-tty","aria-hidden":"true"}},[s._v("#")]),s._v(" Мы пойдём дальше. Заставка в tty")]),s._v(" "),t("p",[s._v("Да, все дистрибутивы, ориентированные на новичков, имеют splash-картинку. Но многие ли из них могут похвастаться красивым терминалом? Не эмулятором терминала, а самим терминалом. Мы же пойдём дальше и настроим эту фичу.")]),s._v(" "),t("p",[s._v("Это уже не укладывается в указанные в начале поста 10-15 минут. Это дополнительное действо, вы можете от него отказаться.")]),s._v(" "),t("p",[s._v("В ядре должно быть отключено!:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Device Drivers  ---\x3e\n    Graphics support  ---\x3e\n        Support for frame buffer devices\n            [ ] Enable Tile Blitting Support\n\n")])])]),t("p",[s._v("И, наоборот, включена опция:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Graphics support  ---\x3e\n    Console display driver support\n        [*] Support for the Framebuffer Console decorations\n")])])]),t("p",[s._v("Вот так:")]),s._v(" "),t("p",[t("img",{attrs:{src:e(75),alt:"vesa vga",title:"vesa vga"}})]),s._v(" "),t("p",[t("img",{attrs:{src:e(76),alt:"framebuffer",title:"framebuffer"}})]),s._v(" "),t("p",[s._v("Теперь пересоберите "),t("code",[s._v("splashutils")]),s._v(" с флагом "),t("code",[s._v('"fbcondecor"')]),s._v(" или добавьте этот флаг в "),t("code",[s._v("make.conf")]),s._v(" и скомандуйте:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# emerge --update --newuse --deep @world\n")])])]),t("p",[s._v("Следующие шаги достаточно просты:")]),s._v(" "),t("p",[s._v("Прописать в "),t("code",[s._v("/etc/conf.d/fbcondecor")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#fbcondecor")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FBCONDECOR_TTYS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 2 3 4 5 6"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FBCONDECOR_TTY_MAP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1:powered_by_gentoo 2:powered_by_gentoo 3:powered_by_gentoo 4:powered_by_gentoo 5:powered_by_gentoo 6:powered_by_gentoo"')]),s._v("\n")])])]),t("p",[s._v("где TTYS — терминалы, на которых будет запускаться изображение")]),s._v(" "),t("p",[s._v('TTY_MAP — отображение в формате "<номер tty>:<тема>"')]),s._v(" "),t("p",[s._v("Как вы уже, вероятно, поняли на разных терминалах могут быть разные темы.")]),s._v(" "),t("p",[s._v("Стартовать fbcondecor при запуске системы:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# rc-update add fbcondecor default\n")])])]),t("p",[s._v("Менять тему можно так:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ splash_manager -c "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -t powered_by_gentoo --tty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("p",[s._v("где powered_by_gentoo — название темы, а --tty=2 — номер терминала, где будет запущена тема.")]),s._v(" "),t("p",[s._v("И последний штрих: поправить загрузчик. На этот раз пример для ядра без initramfs:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# menu.lst")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\ntitle Gentoo Linux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".2-gentoo\nroot "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hd0,1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nkernel /boot/vmlinuz-3.8.2-gentoo "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda3 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("splash")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("silent,theme:powered_by_gentoo "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tty1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("video")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("vesafb:ywrap,mtrr:3 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vga")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0x0362\n")])])]),t("p",[s._v("Параметр "),t("code",[s._v("vga")]),s._v(" должен быть указан для вашего разрешения экрана. В примере это 1366x678.")]),s._v(" "),t("p",[s._v("Итог:")]),s._v(" "),t("p",[t("img",{attrs:{src:e(77),alt:"powered_by_gentoo"}})]),s._v(" "),t("p",[s._v("Теперь можно отказаться от мыши и иксов 😉")])])},[],!1,null,null,null);a.default=r.exports},73:function(s,a,e){s.exports=e.p+"assets/img/fb_silent.jpg"},74:function(s,a,e){s.exports=e.p+"assets/img/fb_verbose.jpg"},75:function(s,a,e){s.exports=e.p+"assets/img/vesa_vga.png"},76:function(s,a,e){s.exports=e.p+"assets/img/framebuffer.png"},77:function(s,a,e){s.exports=e.p+"assets/img/powered_by_gentoo.jpg"}}]);