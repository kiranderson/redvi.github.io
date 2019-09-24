(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{241:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Вы пользуетесь git. У вас сгенерированы приватный и публичный ключи, связанные\nс вашим email-адресом. Один ключ и один адрес. Но что если нужно больше одного?\nКак привязать несколько аккаунтов со своими данными и автоматизировать вход?")]),s._v(" "),t("h2",{attrs:{id:"генерация-ssh-кnючей"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#генерация-ssh-кnючей","aria-hidden":"true"}},[s._v("#")]),s._v(" Генерация ssh-ключей")]),s._v(" "),t("p",[s._v("При генерации ключа следует указать ему отличное от дефолтного имя. По-умолчанию\nиспользуются имена "),t("code",[s._v("id_rsa")]),s._v(" (приватный ключ) и "),t("code",[s._v("id_rsa_pub")]),s._v(" (ключ публичный).\nЧтобы создать файлы с другими именами или просто не затереть уже существующие\nсгенерируем ключи с флагом "),t("code",[s._v("-f")]),s._v(". Например, сделаем автономными данные для github.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ssh-keygen -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_name@yourmail.domain"')]),s._v(" -f ~/.ssh/github\n")])])]),t("p",[s._v("В качестве пользователя используйте данные вашей почтовой учётной записи. В\nскрытом домашнем каталоге "),t("code",[s._v("~/.ssh")]),s._v(" теперь лежат два файла с нестандартными именами:\n"),t("code",[s._v("github")]),s._v(" и "),t("code",[s._v("github.pub")]),s._v(". Содержимое последнего копируется на git-сервер.")]),s._v(" "),t("p",[s._v("Если ключи генерируются на сервере, перенести их на локальную машину можно так:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# на сервере, 7021 - нестандартный порт")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" company_user@server.domain -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7021")]),s._v("\n$ ssh-keygen -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user@server.domain"')]),s._v(" -f ~/.ssh/mycompany_key\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# локально")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r -P "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7021")]),s._v(" company_user@server.domain:/home/company_user/.ssh/ /home/local_user/\n")])])]),t("p",[s._v("Заходим на сервер по ssh под именем нужного пользователя, генерируем ключ.\nЗатем на локальной машине через scp копируем рекурсивно каталог с ssh-ключами.\nРекурсивно: "),t("code",[s._v("-r")]),s._v(", если используется нестандартный порт: "),t("code",[s._v("-P")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"как-автоматизировать-вход"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#как-автоматизировать-вход","aria-hidden":"true"}},[s._v("#")]),s._v(" Как автоматизировать вход")]),s._v(" "),t("p",[s._v("Допустим, у нас десятки ключей от git-серверов разных компаний. Как сказать git'у,\nпод какой учётной записью работать в каждом конкретном случае? Для этого\nпонадобится изменить конфигурацию. Создаём в "),t("code",[s._v("~/.ssh")]),s._v(" файл "),t("code",[s._v("config")]),s._v(" с подходящими настройками:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Host github.com\n  Hostname github.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/github\n\nHost mycompany.com\n  Hostname mycompany.com\n  Port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7021")]),s._v("\n  IdentityFile ~/.ssh/mycompany_key\n")])])]),t("p",[s._v("Теперь при работе в репозитории github или mycompany будут использованы ключи,\nсоответствующие адресу домена. Что и требовалось.")]),s._v(" "),t("p",[s._v("Однако, коммиты закрепляются за одним только пользователем. Как вариант решения:\nуказать одного пользователя глобально, а других для каждого репозитория (без флага global):")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.email myuser@mymail.doman\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.name myusername\n")])])]),t("p",[s._v("Либо изменять автора на лету, при создании коммита:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --author"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myuser "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit"')]),s._v("\n")])])]),t("h2",{attrs:{id:"игнорируй-всё"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#игнорируй-всё","aria-hidden":"true"}},[s._v("#")]),s._v(" Игнорируй всё")]),s._v(" "),t("p",[s._v("В работе каждый подбирает для себя наиболее удобный инструмент. Кто-то пользуется\nпростым текстовым редактором, кто-то предпочитает навороченные среды разработки.\nЧасто инструменты оставляют после себя «мусор», который не хотелось бы\nтащить в "),t("code",[s._v(".gitignore")]),s._v(" публичного проекта.")]),s._v(" "),t("p",[s._v("Для того нам дан ещё один файл с настройками гита — .gitconfig. Открываем,\nвносим информацию.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# базовые настройки")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  autocrlf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" input\n  quotepath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  whitespace "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cr-at-eol,indent-with-non-tab,blank-at-eol,space-before-tab\n  excludesfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/local_user/.gitignore_global\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# псевдонимы для команд")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("alias"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  ch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" checkout\n  cm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" commit -m\n")])])]),t("p",[s._v("Всё внимание на строку "),t("code",[s._v("excludesfile = /home/user/.gitignore_global")]),s._v(". Именно эта\nволшебная настройка позволяет внести в "),t("code",[s._v(".gitignore_global")]),s._v(" (или любой другой файл)\nто, что будет игнорироваться (не будет отправлено на сервер) всегда.")])])},[],!1,null,null,null);a.default=n.exports}}]);