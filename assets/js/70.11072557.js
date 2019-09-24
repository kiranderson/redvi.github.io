(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{201:function(t,s,n){"use strict";n.r(s);var a=n(3),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("WHOIS представляет собой сетевой протокол прикладного уровня, базирующийся на\nпротоколе TCP (и использующий порт "),n("em",[t._v("43")]),t._v("). По бо́льшей части применяется для получения\nрегистрационных данных о доменных именах: дате регистрации домена, информации о\nвладельце, регистраторе и прочем.")]),t._v(" "),n("p",[t._v("В unix-like системах есть одноимённая утилита, позволяющая быстро получить\nискомые сведения. В частности для пользователей gentoo linux процесс её\nустановки будет выглядеть следующим образом:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ eix whois\n* net-misc/whois\n     Available versions:  5.0.11^t {iconv idn nls}\n     Homepage:            http://www.linux.it/~md/software/\n     Description:         improved Whois Client\n# emerge -pav net-misc/whois\n")])])]),n("p",[t._v("Тем, кому любопытно сделать свой вариант клиента whois, посвящается этот пост. Для\nнаписания подобной вещи предлагается использовать python3.")]),t._v(" "),n("p",[t._v("Для начала нужно импортировать необходимые модули и сделать проверку установленной\nверсии python, поскольку во второй и третьей версии различаются некоторые типы данных:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: utf-8 -*-")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sys\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# если версия python ниже 3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# вывести сообщение и закрыть программу")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You need install python3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Дальше следует функция, которая будет отправлять запрос на сервер и принимать\nответ. Здесь используется модуль "),n("em",[t._v("socket")]),t._v(". Он предоставляет доступ к\nстандартному интерфейсу сокетов BSD (изначально разрабатывался для UNIX).")]),t._v(" "),n("blockquote",[n("p",[t._v("Модуль "),n("em",[t._v("socket")]),t._v(" является низкоуровневым и в ряде случаев проще использовать\nфункции из пакета "),n("em",[t._v("urllib")]),t._v(".")])]),t._v(" "),n("p",[t._v("При работе с "),n("em",[t._v("socket")]),t._v(" часто требуется указать семейство адресов и тип\nсокета. Для нашей небольшой программы важен протокол IPv4 (AF_INET). Типы\nсокетов представлены в таблице:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("константа")]),t._v(" "),n("th",[t._v("описание")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("SOCK_STREAM")]),t._v(" "),n("td",[t._v("поток байтов, обеспечивающий надёжность передачи данных (TCP)")])]),t._v(" "),n("tr",[n("td",[t._v("SOCK_DGRAM")]),t._v(" "),n("td",[t._v("дейтаграммы (UDP)")])]),t._v(" "),n("tr",[n("td",[t._v("SOCK_RAW")]),t._v(" "),n("td",[t._v("простой сокет")])]),t._v(" "),n("tr",[n("td",[t._v("SOCK_RDM")]),t._v(" "),n("td",[t._v("дейтаграммы с надёжной доставкой")])])])]),t._v(" "),n("p",[t._v("Для интернет-приложений, использующих IPv4, адреса определяются в виде кортежа\n"),n("em",[t._v("(host, port)")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.yandex.ru'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("В блоке кода, представленном ниже, мы воспользуемся этим, чтобы соединиться с\nсервером. Для создания нового сокета понадобится употребить одну из функций\nмодуля "),n("em",[t._v("socket")]),t._v(" с таким же названием: "),n("em",[t._v("socket")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("family"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("где")]),t._v(" "),n("ul",[n("li",[n("em",[t._v("family")]),t._v(" — определяет семейство адресов;")]),t._v(" "),n("li",[n("em",[t._v("type")]),t._v(" — тип сокета;")]),t._v(" "),n("li",[n("em",[t._v("proto")]),t._v(" — аргумент с именем протокола (обычно не передаётся).")])]),t._v(" "),n("p",[t._v("Сокеты представлены экземплярами класса "),n("em",[t._v("SocketType")]),t._v(" и обладают следующими\nметодами:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("метод")]),t._v(" "),n("th",[t._v("описание")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("connect")]),t._v(" "),n("td",[t._v("устанавливает соединение с удалённым узлом")])]),t._v(" "),n("tr",[n("td",[t._v("recv")]),t._v(" "),n("td",[t._v("принимает данные из сокета (макс. объём данных определяется аргументом bufsize)")])]),t._v(" "),n("tr",[n("td",[t._v("send")]),t._v(" "),n("td",[t._v("посылает данные через сетевое соединение, возвращает кол-во отправленных данных")])]),t._v(" "),n("tr",[n("td",[t._v("close")]),t._v(" "),n("td",[t._v("закрывает соединение")])])])]),t._v(" "),n("p",[t._v("Исходя из сказанного выше, читателю должен быть понятен следующий блок кода:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_whois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# создать TCP-socket (IPv4)")]),t._v("\n    s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_STREAM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# соединиться с сервером ('host', port)")]),t._v("\n    s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# отправить запрос на сервер")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# s.send(query + '\\r\\n') # для python2")]),t._v("\n    s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'\\r\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    msg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# получить данные от сервера")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# receive_data = s.recv(100) # для python2")]),t._v("\n        receive_data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("receive_data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        msg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" receive_data\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" msg\n")])])]),n("p",[t._v("Следующая функция позволит получить данные от сервера whois-регистратора и\nобработать их.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("domain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# получить объект(имя домена)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# если введено http или www")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# перед именем домена, убрать их")]),t._v("\n    domain "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" domain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    domain "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" domain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# получить доменную зону")]),t._v("\n    ext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" domain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# обращаться к соответствующему whois-серверу зоны")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        whois "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'whois.pir.org'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ru'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" ext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'su'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        whois "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'whois.tcinet.ru'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        whois "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'whois.iana.org'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# сообщение для иных доменных зон")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# получить ответ от регистратора")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (whois-server, имя домена)")]),t._v("\n    msg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" run_whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" domain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    lines "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("splitlines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# разбиваем текст на сроки")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" lines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# итерация по строкам")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# если есть знак :")]),t._v("\n            words "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# разделить по нему строку")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" msg\n")])])]),n("p",[t._v("И последнее: имя домена будет получено из агрумента командной строки при запуске\nпрограммы. Оно передаётся функции "),n("em",[t._v("get_data")]),t._v(", и данные выводятся на экран.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    domain_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# получить доменное имя из аргумента командной строки")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("domain_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# передать доменное имя функции get_data")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" IndexError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# если программа запущена без аргумента")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enter domain name as a value!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Данная программка не претендует на многое, но цели своей достигает; заодно\nзнакомит потенциального читателя с частью такой огромной темы как\nработа с сетью и сокетами, а автору служит главным образом примером и\nнапоминанием о различиях в обработке данных в разных версиях python'а.")])])},[],!1,null,null,null);s.default=e.exports}}]);