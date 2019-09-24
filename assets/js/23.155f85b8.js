(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{229:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Согласно премудрой википедии, QEMU — свободная программа с открытым исходным кодом для эмуляции аппаратного обеспечения различных платформ. Что это значит? Прежде всего это говорит нам о том, что с помощью QEMU мы запросто сможем проводить эксперименты с различными операционными системами, не выходя из своей основной системы. Допустим, вы решили перейти на другой дистрибутив linux, но по каким-то причинам боитесь ставить его на реальное железо. Что ж, в таком случае QEMU будет вам отличным подспорьем.")]),s._v(" "),e("h2",{attrs:{id:"установка-qemu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка-qemu","aria-hidden":"true"}},[s._v("#")]),s._v(" Установка qemu")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S qemu-kvm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" или qemu "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[s._v("Добавим своего пользователя в группу kvm:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G kvm your_user\n")])])]),e("p",[s._v("Создание диска для qemu:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" qemu\n$ qemu-img create -f qcow2 qemu/gentoo.img 10G`\n")])])]),e("p",[s._v("Возможные форматы:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("- cow")]),s._v(" (User Mode Linux)")]),s._v(" "),e("li",[e("code",[s._v("- vmdk")]),s._v(" (VMware)")]),s._v(" "),e("li",[e("code",[s._v("- qcow")]),s._v(" (родной формат QEMU)")]),s._v(" "),e("li",[e("code",[s._v("- raw")]),s._v(" (в linux можно работать с подобным форматом как с обычным разделом)")]),s._v(" "),e("li",[e("code",[s._v("- 6G")]),s._v(" - указание размера диска, в примере 6 GB")])]),s._v(" "),e("p",[s._v("Просмотрим директорию, чтобы убедиться. что диск успешно создан:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" qemu/\n    gentoo.img\n")])])]),e("p",[s._v("Перейдём в директорию с диском, скачаем туда же образ системы, которую хотим установить:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" qemu/\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://distfiles.gentoo.org/releases/amd64/autobuilds/current-iso/install-amd64-minimal-*.iso`\n\n--2012-11-25 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":35:01--\nhttp://distfiles.gentoo.org/releases/amd64/autobuilds/current-iso/install-amd64-minimal-20121107.iso\nРаспознаётся distfiles.gentoo.org "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("distfiles.gentoo.org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("64.50")]),s._v(".236.52, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("216.165")]),s._v(".129.135, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("64.50")]),s._v(".233.100,\nПодключение к distfiles.gentoo.org "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("distfiles.gentoo.org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("64.50")]),s._v(".236.52"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(":80"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". соединение установлено.\nHTTP-запрос отправлен. Ожидание ответа"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK\nДлина: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("156352512")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("149M"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("application/octet-stream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nСохранение в: «install-amd64-minimal-20121107.iso» "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("156")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("352")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\n")])])]),e("p",[s._v("На некоторых машинах при использовании технологии виртуализации нужно включить в BIOS соответствующую опцию:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("* System Configuration\n    * Virtualization Technology\n        * Enabled\n")])])]),e("p",[s._v("Также не следует забывать подгрузить модуль KVM, соответствующий вашему процессору:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# modprobe kvm_intel\n")])])]),e("p",[s._v("или")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# modprobe kvm_amd\n")])])]),e("h2",{attrs:{id:"запуск-гостевой-операционной-системы"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#запуск-гостевой-операционной-системы","aria-hidden":"true"}},[s._v("#")]),s._v(" Запуск гостевой операционной системы")]),s._v(" "),e("p",[s._v("Установка из iso-образа:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ qemu-system-x86_64  -hda gentoo.img -cdrom install-amd64-minimal-20121107.iso -boot d\n")])])]),e("p",[e("img",{attrs:{src:t(60),alt:"qemu gentoo"}})]),s._v(" "),e("p",[s._v("Или запуск live-cd системы. В случае запуска с cdrom, следует указать его - "),e("code",[s._v("/dev/cdrom/")]),s._v(" - вместо образа диска")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ qemu-system-i386 -cdrom xubuntu-12.04.1.iso\n")])])]),e("p",[e("img",{attrs:{src:t(61),alt:"qemu boot"}})]),s._v(" "),e("ul",[e("li",[e("code",[s._v("-boot")]),s._v(" - позволяет изменить устройство, с которого производится загрузка")]),s._v(" "),e("li",[e("code",[s._v("- c")]),s._v(" - указание на жёсткий диск")]),s._v(" "),e("li",[e("code",[s._v("- d")]),s._v(" - указание на загрузку с cdrom")]),s._v(" "),e("li",[e("code",[s._v("- a, b")]),s._v(" - floppy 1 и 2")]),s._v(" "),e("li",[e("code",[s._v("- cdrom")]),s._v(" - указание на устройство/место, где находится устанавливаемая операционная система")]),s._v(" "),e("li",[e("code",[s._v("-m")]),s._v(" - выделить количество оперативной памяти для гостевой ОС. Например "),e("code",[s._v("-m 512")])])]),s._v(" "),e("p",[e("img",{attrs:{src:t(62),alt:"qemu"}})]),s._v(" "),e("p",[s._v("После первичной установки, мы всегда делаем одну важную вещь — перезагружаем систему. Естественно, теперь нужно будет запускать установленную ОС не с привода или из iso-файла, а с созданного на первоначальном этапе жёсткого диска.\nВыглядит это так:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ qemu /home/user/qemu/gentoo.img\n")])])]),e("p",[s._v("где "),e("code",[s._v("/home/user/qemu/gentoo.img")]),s._v(" - путь к диску qemu с установленной гостевой ОС")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("На заметку")]),s._v(" "),e("p",[e("code",[s._v("q")]),s._v(" - выйти из qemu")]),s._v(" "),e("p",[e("code",[s._v("Ctrl+Alt+Return")]),s._v(" - освобождает курсор")])])])},[],!1,null,null,null);a.default=n.exports},60:function(s,a,t){s.exports=t.p+"assets/img/qemu1.jpg"},61:function(s,a,t){s.exports=t.p+"assets/img/qemu2.jpg"},62:function(s,a,t){s.exports=t.p+"assets/img/qemu3.jpg"}}]);