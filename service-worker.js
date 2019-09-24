/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dad6dcaab8cd5a8e50edcc836c7043fd"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "04f6a3314563cfdbc081ab576a55b544"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "d4c84f7a4771a95eae8ee30e83ae0ce2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "f3b2e557a68955913db9be84abcc1226"
  },
  {
    "url": "assets/404.png",
    "revision": "e060d143b7ef6edf8ef0d92aa53589f0"
  },
  {
    "url": "assets/css/0.styles.4993531b.css",
    "revision": "f2af6513d24e5c95699e21f9197570ee"
  },
  {
    "url": "assets/fonts/Montserrat/Montserrat-Bold.ttf",
    "revision": "ade91f473255991f410f61857696434b"
  },
  {
    "url": "assets/fonts/Montserrat/Montserrat-BoldItalic.ttf",
    "revision": "1b38414956c666bd1df78fe5b9c84756"
  },
  {
    "url": "assets/fonts/Montserrat/Montserrat-Regular.ttf",
    "revision": "ee6539921d713482b8ccd4d0d23961bb"
  },
  {
    "url": "assets/fonts/Montserrat/Montserrat-RegularItalic.ttf",
    "revision": "a7063e0c0f0cb546ad45e9e24b27bd3b"
  },
  {
    "url": "assets/full-logo.svg",
    "revision": "f72423956e9f62ff1f7eb5435aed5181"
  },
  {
    "url": "assets/img/2016.makemepulse.com.jpg",
    "revision": "d4f22cac3b3fe676953356798f9fb658"
  },
  {
    "url": "assets/img/ahill1.jpg",
    "revision": "866c9389e08604b1705a88cdbc0da912"
  },
  {
    "url": "assets/img/ahill2.jpg",
    "revision": "9371e7a18d5bb2aaa9ff423c3ddc9458"
  },
  {
    "url": "assets/img/ahill3.jpg",
    "revision": "be6075bf0f009a1a9ef42ad380287ca0"
  },
  {
    "url": "assets/img/alsamixer.png",
    "revision": "aded862e21cedf7702d7509fbf713371"
  },
  {
    "url": "assets/img/aside-img-cover.png",
    "revision": "d02de1a65da9f852ecd1085b2b286dbb"
  },
  {
    "url": "assets/img/BCMA.png",
    "revision": "5cbb2ea205393d04d8024ebbe87dd5d1"
  },
  {
    "url": "assets/img/block.png",
    "revision": "9588a02fa919442a2d319024dc7407cf"
  },
  {
    "url": "assets/img/blur.jpeg",
    "revision": "fc6cf0047c21a6ca701c7c43299b352c"
  },
  {
    "url": "assets/img/blur.png",
    "revision": "081497ccdc05925421a1355163e56027"
  },
  {
    "url": "assets/img/broadcom_wireless.png",
    "revision": "a77ac3972daca8bbb6f00fab899f8f60"
  },
  {
    "url": "assets/img/bus.jpg",
    "revision": "ad78cf2b932b869dea05e72f11888d43"
  },
  {
    "url": "assets/img/capture.png",
    "revision": "3f2666ad549a2b04ddf7242a7884a9cd"
  },
  {
    "url": "assets/img/change-and-comment.jpg",
    "revision": "f34a7ad2f6b494dcc4830e2b14d1498a"
  },
  {
    "url": "assets/img/chkconfig-debian.png",
    "revision": "94fcd42d1b30e8da9125349af244850c"
  },
  {
    "url": "assets/img/crypto.jpg",
    "revision": "eb64679bfc803bff9a2f868ec0437697"
  },
  {
    "url": "assets/img/css-menu.gif",
    "revision": "d310fd8a55e8eddd217a0969ab0a7024"
  },
  {
    "url": "assets/img/cube.jpg",
    "revision": "b7a2b120bc377a688d0bc97137558cde"
  },
  {
    "url": "assets/img/curlftp.png",
    "revision": "64c031e36ce318a5894f300147e9f746"
  },
  {
    "url": "assets/img/debi_openbox.png",
    "revision": "f862bc25e18141d312f1981adc61bfb3"
  },
  {
    "url": "assets/img/device.jpg",
    "revision": "8d7824c58fdc0e19698e4742738c7b12"
  },
  {
    "url": "assets/img/django1.jpg",
    "revision": "e18ede3bf341d143856820f7139d4811"
  },
  {
    "url": "assets/img/django2.png",
    "revision": "0b2b40c0f7e9ba994705637abea65728"
  },
  {
    "url": "assets/img/dwm_gentoo.jpg",
    "revision": "4e9a8be968a1af4c956365d9a1b51df8"
  },
  {
    "url": "assets/img/emacs_dired1.png",
    "revision": "9f24a01a33838597ef501c7b5af2eed6"
  },
  {
    "url": "assets/img/emacs_dired2.png",
    "revision": "96c62c324ddd0e11a37c195ea08298fe"
  },
  {
    "url": "assets/img/emacs_dired3.jpg",
    "revision": "5ca340698060437d61e11e3c0f4cedfa"
  },
  {
    "url": "assets/img/emacs_editor.png",
    "revision": "b8c964cc4a8f83221b35fa95e3199442"
  },
  {
    "url": "assets/img/emacs_help__for_russian__by_redvi9-d720atd.png",
    "revision": "7700cb0c3f31dab795c3d631a7aa09a6"
  },
  {
    "url": "assets/img/emacs_orpho.png",
    "revision": "5236d6c23fe62616ab12326e2d763964"
  },
  {
    "url": "assets/img/emacs_split.jpg",
    "revision": "0e7c0dc51ebdd7b47936214f97092574"
  },
  {
    "url": "assets/img/emulations.jpg",
    "revision": "5b4aab21c693bc30cf8154e2ec32a3e9"
  },
  {
    "url": "assets/img/epok-design.jpg",
    "revision": "a3201dfb3a4c2e283b2dd1f88e8e88b4"
  },
  {
    "url": "assets/img/epub.png",
    "revision": "3c5a62f9f73e2264730f46bd86609e74"
  },
  {
    "url": "assets/img/epub2.png",
    "revision": "9bf3e3aaa1286b541cb5ed5a8d3221a7"
  },
  {
    "url": "assets/img/eselect_infinality.png",
    "revision": "6c0f3956a80072586e8cbbcd4b853b48"
  },
  {
    "url": "assets/img/europeandays.jpg",
    "revision": "035d6574c56a7477f19bcf623c87884d"
  },
  {
    "url": "assets/img/excerpt.jpg",
    "revision": "3388a628200e8d92dbc787ad84b69ff7"
  },
  {
    "url": "assets/img/fb_silent.jpg",
    "revision": "3d9af5949b0a3da27c24328277cfa165"
  },
  {
    "url": "assets/img/fb_verbose.jpg",
    "revision": "38244c87fd41a1c75c8d5ae25b3735ff"
  },
  {
    "url": "assets/img/file_systems.jpg",
    "revision": "254cb34cd2ab6db82d1155726e1f924c"
  },
  {
    "url": "assets/img/firmware.jpg",
    "revision": "e5c8109d900f763182928c5105b4d8c8"
  },
  {
    "url": "assets/img/fontconfig.png",
    "revision": "e777260710024f0282ba52653706f0b6"
  },
  {
    "url": "assets/img/fontconfig2.png",
    "revision": "5d788eeed23f314e3854196279feee17"
  },
  {
    "url": "assets/img/fontconfig3.png",
    "revision": "9a16a2e907df23865c866a98748f1389"
  },
  {
    "url": "assets/img/fontello.png",
    "revision": "e12e2e4dd159f615149a3e14aa854e19"
  },
  {
    "url": "assets/img/fork.png",
    "revision": "3216e68792c40cf439d76e3049df22d2"
  },
  {
    "url": "assets/img/framebuffer.png",
    "revision": "5bf0a129ffb6e8c530bf93b97276fff1"
  },
  {
    "url": "assets/img/general.jpg",
    "revision": "fdab85cfe92e0539ded4140e6b2bcc81"
  },
  {
    "url": "assets/img/gentoo_grub4.png",
    "revision": "28d379878fd5a514fdf62a231d954166"
  },
  {
    "url": "assets/img/Glenn.png",
    "revision": "aa2ea065d18aac0bb1642c5620f4b1dd"
  },
  {
    "url": "assets/img/graphicx.png",
    "revision": "18ef4fa4a294267d0696389b90738f85"
  },
  {
    "url": "assets/img/grub2.png",
    "revision": "a62a0c5cae55836d0bf6ee1ec236244f"
  },
  {
    "url": "assets/img/img-full-fill.png",
    "revision": "cf911a56f1a79435ae5d15ced6f2127b"
  },
  {
    "url": "assets/img/img-objf-none.png",
    "revision": "c2af4042bdb1e9ff55a95c502a60054a"
  },
  {
    "url": "assets/img/img-small-fill.png",
    "revision": "97d8d5323223a729de454aaeceb74be4"
  },
  {
    "url": "assets/img/intel-module.png",
    "revision": "1df2446d4c12fc3442794687d3b4c0e4"
  },
  {
    "url": "assets/img/jekyll-default.png",
    "revision": "09afd1209eefa4f46a196bc7477cf512"
  },
  {
    "url": "assets/img/journal.jpg",
    "revision": "6066cadf46843c7d83f4a9395027d2da"
  },
  {
    "url": "assets/img/kernel_hacking.jpg",
    "revision": "19dfdf6c3d47d6437dfbdc84f9ccf9ef"
  },
  {
    "url": "assets/img/latex_defis.jpg",
    "revision": "380a953ccd5654b988cb6b34fc364885"
  },
  {
    "url": "assets/img/latex_quotes.png",
    "revision": "8d9065b990957743f949b173a5123244"
  },
  {
    "url": "assets/img/layout.jpg",
    "revision": "f5d213f59052861b5d4dda97e82413f4"
  },
  {
    "url": "assets/img/library.jpg",
    "revision": "9e2fb3d8b4a8f06518ba58d4ccbe2214"
  },
  {
    "url": "assets/img/linksus.png",
    "revision": "3629cca80888872d1f44a37dea68404a"
  },
  {
    "url": "assets/img/lxappearance.png",
    "revision": "e176bfdb69052e81e6dcbb0e8654ab5d"
  },
  {
    "url": "assets/img/menu-icon.png",
    "revision": "c0874bcbf5b4e5288bc4e7fa4bb56569"
  },
  {
    "url": "assets/img/module-support.jpg",
    "revision": "27c08c5648ec98201a826caa73e01f6c"
  },
  {
    "url": "assets/img/mplayer1.jpg",
    "revision": "967cc77a874695d2da5cffe3a4736b48"
  },
  {
    "url": "assets/img/mplayer2.jpg",
    "revision": "ee81bc5c8a631a839bf9d6687b3d335f"
  },
  {
    "url": "assets/img/network.png",
    "revision": "84857fc44858abf3c53c2ef077c9b424"
  },
  {
    "url": "assets/img/nitrogen.png",
    "revision": "12e6c3e42a81cdf964ee6f46ff01dbb8"
  },
  {
    "url": "assets/img/no-blur.png",
    "revision": "e41e1391f83d877bf8883023d3a77cef"
  },
  {
    "url": "assets/img/openbox1.jpg",
    "revision": "3d3fa09aeba24f3837db0e7ca3e75729"
  },
  {
    "url": "assets/img/openbox2.jpg",
    "revision": "07159483c8ed1b447b41dfbbb59edc99"
  },
  {
    "url": "assets/img/openbox3.png",
    "revision": "9159dcd7f3bfc6de0de8c8c015b46c88"
  },
  {
    "url": "assets/img/phpinfo.png",
    "revision": "0f5257ce5759079eef130e96c3e7c8c7"
  },
  {
    "url": "assets/img/phpmyadmin.png",
    "revision": "344284deb7c8d5e3a9ba475ee82da685"
  },
  {
    "url": "assets/img/power.jpg",
    "revision": "62d60f37e76b890b3db72a26bb25111a"
  },
  {
    "url": "assets/img/powered_by_gentoo.jpg",
    "revision": "880750cb11540093280dba7c3dc8700a"
  },
  {
    "url": "assets/img/processor.jpg",
    "revision": "671cd3c0a642906bb6a53bdbe8279b32"
  },
  {
    "url": "assets/img/qemu1.jpg",
    "revision": "904acca3ac76397db12b6657c8f1fc50"
  },
  {
    "url": "assets/img/qemu2.jpg",
    "revision": "a3c4a96262f722ced4db4992c9578c5e"
  },
  {
    "url": "assets/img/qemu3.jpg",
    "revision": "e95193655013ad78297a710d8159d18a"
  },
  {
    "url": "assets/img/quotes.png",
    "revision": "789efc97abce42d898f2ea6139c12188"
  },
  {
    "url": "assets/img/rails_archive1.png",
    "revision": "b07bf82275e25a526792551981d429dc"
  },
  {
    "url": "assets/img/rails_archive2.jpg",
    "revision": "1cec0f6372a185420448676c535ca7fa"
  },
  {
    "url": "assets/img/Rejne.png",
    "revision": "58ac629ba5d22b04b823d78118b35e8a"
  },
  {
    "url": "assets/img/rinari.png",
    "revision": "7e2a45632acc7c466f87490a6e00a762"
  },
  {
    "url": "assets/img/sass.jpg",
    "revision": "fec95972036efb57cb6212e8fcc5017b"
  },
  {
    "url": "assets/img/security.jpg",
    "revision": "918e29042127789fef455c9578f7f7e9"
  },
  {
    "url": "assets/img/sqrt.png",
    "revision": "f52e55427f2c25683825c37da68b4f2b"
  },
  {
    "url": "assets/img/sublime_tex.png",
    "revision": "f695cf76761d1ab2238a72e6a7534050"
  },
  {
    "url": "assets/img/table.png",
    "revision": "9759607c63b61819e19091fbcb061955"
  },
  {
    "url": "assets/img/tern.png",
    "revision": "6824e77006ac9a388144c3e2d19644cf"
  },
  {
    "url": "assets/img/tikz1.jpg",
    "revision": "ee69e255fdfafc447392f677dc75e0c3"
  },
  {
    "url": "assets/img/tikz2.jpg",
    "revision": "42af16453ad9ba1fae36dda971447fb9"
  },
  {
    "url": "assets/img/tikz3.png",
    "revision": "f092bf1705294aa2ae268749cb3f4dd9"
  },
  {
    "url": "assets/img/tikz4.png",
    "revision": "4445e31e116c551e7b1a7c8f73034f86"
  },
  {
    "url": "assets/img/tikz5.png",
    "revision": "53ebf777c7f776b792e6ee0d9ea94dc8"
  },
  {
    "url": "assets/img/titlesec.png",
    "revision": "0fc04e3339df79305ff562a73a63bffe"
  },
  {
    "url": "assets/img/ubuntu_in_debian.png",
    "revision": "785c808adffb42b5dcb25a65b875b162"
  },
  {
    "url": "assets/img/verbatim.png",
    "revision": "b51c770812acfda3be1fef479185efb6"
  },
  {
    "url": "assets/img/vesa_vga.png",
    "revision": "ba30d99e1901108aaea4cd48b8e5f36f"
  },
  {
    "url": "assets/img/vim_tex.png",
    "revision": "ff2234f2bc41a7fe7bc129f4d849b266"
  },
  {
    "url": "assets/img/virtualization.jpg",
    "revision": "086c50986eaed31d14cf43f240d05da9"
  },
  {
    "url": "assets/img/wbar.png",
    "revision": "847616c8a3c9354a7784eb01db77f1da"
  },
  {
    "url": "assets/img/weareangstrom.com.jpg",
    "revision": "98bfa8f696db559ef5425db1fe352fc6"
  },
  {
    "url": "assets/img/wp-news.png",
    "revision": "372d74a576aea3f92086b6d085933327"
  },
  {
    "url": "assets/img/wp-part.png",
    "revision": "e47ce9f56ea8cd843f90d2cf5f320f38"
  },
  {
    "url": "assets/img/wp-post-type.png",
    "revision": "d99be605cf3ee439039470eae3a3af02"
  },
  {
    "url": "assets/img/wp-routing.png",
    "revision": "6a4ca57b82768bc01c85fff978715f0d"
  },
  {
    "url": "assets/img/www.bighorrorathens.com.jpg",
    "revision": "d165ad073159774b64cffde9cbd302c4"
  },
  {
    "url": "assets/img/www.elevenyellow.com.jpg",
    "revision": "59aa33fa7bff5b8aae0deb539218eb23"
  },
  {
    "url": "assets/img/xampp.png",
    "revision": "132b4ea48026d19919b05ee7322337c0"
  },
  {
    "url": "assets/img/yasnippet.png",
    "revision": "0cebbb37e6bc99f75cdab6c501843a1b"
  },
  {
    "url": "assets/js/10.23d584b0.js",
    "revision": "1ce580a03b53169c5e4d452033a2ea45"
  },
  {
    "url": "assets/js/11.7e9fc27e.js",
    "revision": "3b508a1029a187de2751423866923f07"
  },
  {
    "url": "assets/js/12.778cebda.js",
    "revision": "adae93ec011d18751c1af7df0d1e67c1"
  },
  {
    "url": "assets/js/13.f9a0865b.js",
    "revision": "3756d0f45868a4df41c2f5ef677d7ee8"
  },
  {
    "url": "assets/js/14.7e9142f5.js",
    "revision": "a9cf1c6badcc176e5b8a8cf138646780"
  },
  {
    "url": "assets/js/15.81a256d2.js",
    "revision": "b5393f4c4d94a777b5fba55eea66b27b"
  },
  {
    "url": "assets/js/16.49af5ffe.js",
    "revision": "2918991bbb8c06edf376f006a253c8a6"
  },
  {
    "url": "assets/js/17.b44ee3ae.js",
    "revision": "9ba9a388c745b7bc1c157c67e8fe8bde"
  },
  {
    "url": "assets/js/18.5aee35b6.js",
    "revision": "4626052c70cd25f4f52f4130508a8131"
  },
  {
    "url": "assets/js/19.0db9aae5.js",
    "revision": "078475ed502ba1df2947b2074a288d98"
  },
  {
    "url": "assets/js/2.35b2c6bb.js",
    "revision": "8843e11afc0d33b0064464d5167a93bb"
  },
  {
    "url": "assets/js/20.dd2ea1cb.js",
    "revision": "bad0a1e62873e050c854aee26f361296"
  },
  {
    "url": "assets/js/21.393c5d86.js",
    "revision": "8c867f10876340a10d689cce54da7b64"
  },
  {
    "url": "assets/js/22.56cf0890.js",
    "revision": "02d50fcceb0e056f45816540654311e7"
  },
  {
    "url": "assets/js/23.155f85b8.js",
    "revision": "dd73de22c2b648ed317b66c6d98feebc"
  },
  {
    "url": "assets/js/24.b74b7cb5.js",
    "revision": "1b7f8c571dbc00850415fd42a87d12ac"
  },
  {
    "url": "assets/js/25.eae2d23b.js",
    "revision": "0ca483ec9286c79039aa1caaced69df4"
  },
  {
    "url": "assets/js/26.036b3a68.js",
    "revision": "10231d17d1f86ab65d538eacd2d2978c"
  },
  {
    "url": "assets/js/27.375f2bdb.js",
    "revision": "23e141a7983a9b848fba09b6b6d52064"
  },
  {
    "url": "assets/js/28.785693ad.js",
    "revision": "89c9a491d83db65bc241949af202a45f"
  },
  {
    "url": "assets/js/29.11833701.js",
    "revision": "405c0fa1a165f21cc520d187b6d9493c"
  },
  {
    "url": "assets/js/3.a76664f0.js",
    "revision": "3e8473dc548e4dbf7f11e6ba9d9d1015"
  },
  {
    "url": "assets/js/30.6ecf91ca.js",
    "revision": "fa218d6c82dc6240f31190f2e150f54d"
  },
  {
    "url": "assets/js/31.5227900f.js",
    "revision": "b5a38629622c2d81e4fb9f4937d7bd27"
  },
  {
    "url": "assets/js/32.c60ace8f.js",
    "revision": "d6f7d7b853c40b12c669ab658397b4f9"
  },
  {
    "url": "assets/js/33.b41a62d6.js",
    "revision": "a44db358f0e3fabac4c7231942fb73bf"
  },
  {
    "url": "assets/js/34.de1eca42.js",
    "revision": "e5c4fcfe9d8a6b39cb2e7a073e77a83b"
  },
  {
    "url": "assets/js/35.6640f8d9.js",
    "revision": "d5a7639a458a2ecee1981a8ea076c521"
  },
  {
    "url": "assets/js/36.5ae9284d.js",
    "revision": "523d9dec9b64e89decb4bb35a70b11fc"
  },
  {
    "url": "assets/js/37.3bd95024.js",
    "revision": "e9223bc3f2abcce4b976e0f3b36154f2"
  },
  {
    "url": "assets/js/38.b492b55b.js",
    "revision": "33a8b4cde600a6198ed2d22a4494a30f"
  },
  {
    "url": "assets/js/39.217589d9.js",
    "revision": "56e1e0cfa988b2a53f228a41943227c2"
  },
  {
    "url": "assets/js/4.11d3a3db.js",
    "revision": "554e18386a2ca14a88f96bb665e70749"
  },
  {
    "url": "assets/js/40.f390632a.js",
    "revision": "e99d599d86c64fc70155007f06936337"
  },
  {
    "url": "assets/js/41.2a87ce19.js",
    "revision": "10acce43b11710a58bade10ca37d0160"
  },
  {
    "url": "assets/js/42.0078f9a2.js",
    "revision": "d5ef00fd181856328f750c2871290a32"
  },
  {
    "url": "assets/js/43.305a1d21.js",
    "revision": "13f480da5c72686f1c43fa414457122e"
  },
  {
    "url": "assets/js/44.d68d09d3.js",
    "revision": "1b99898206023d72fe022955a4b240d3"
  },
  {
    "url": "assets/js/45.725969ad.js",
    "revision": "02517d434f2d3faba469db4d3abeede8"
  },
  {
    "url": "assets/js/46.5006191f.js",
    "revision": "f937d2a513edba59a3679317b093d510"
  },
  {
    "url": "assets/js/47.02f0ac47.js",
    "revision": "e9641b172356676b58e57b09f3432242"
  },
  {
    "url": "assets/js/48.a1479944.js",
    "revision": "31882246a70d560dd6a93e994a949d69"
  },
  {
    "url": "assets/js/49.f202290e.js",
    "revision": "fb6a635a54597017a80c2eae121ed388"
  },
  {
    "url": "assets/js/5.260a7e1b.js",
    "revision": "c041892b40ef996db32b196b613a637b"
  },
  {
    "url": "assets/js/50.d4cc05c9.js",
    "revision": "d0a882c788d646d33c9023d2506c9465"
  },
  {
    "url": "assets/js/51.351e60fc.js",
    "revision": "c46ad4f934fac06349fba3aa0b863af6"
  },
  {
    "url": "assets/js/52.2d05f9b0.js",
    "revision": "57f0cbd9cb2a09eba957267cf2390f38"
  },
  {
    "url": "assets/js/53.bff13ad2.js",
    "revision": "3a80036bdd6a5518ca4c0d53f5e852ec"
  },
  {
    "url": "assets/js/54.25ee54c4.js",
    "revision": "476eb1f30333e6914ca76edb545fff35"
  },
  {
    "url": "assets/js/55.9fe9e953.js",
    "revision": "226063292608b30861bbdafc76218e98"
  },
  {
    "url": "assets/js/56.96ba4927.js",
    "revision": "740ee10a8b3b7e3aa8d7d298a0de9581"
  },
  {
    "url": "assets/js/57.4e35a560.js",
    "revision": "e162b94dabe1b4f9cb3406ef911ac9a0"
  },
  {
    "url": "assets/js/58.ae2210a1.js",
    "revision": "2c23ccd7360f9a0daf9701be6524d5bf"
  },
  {
    "url": "assets/js/59.8a325a55.js",
    "revision": "855dbb62e34d14c883c3c3eb864927bc"
  },
  {
    "url": "assets/js/6.58fecefc.js",
    "revision": "d32c517eacf4d6ff58ed7f05fa738b5e"
  },
  {
    "url": "assets/js/60.16b2173a.js",
    "revision": "62922582c9deedc05c122abfc26c1b08"
  },
  {
    "url": "assets/js/61.9d2a0001.js",
    "revision": "e47ee55a78a62ccbc3de2cd3c9555db5"
  },
  {
    "url": "assets/js/62.f563cd8e.js",
    "revision": "3be1925e7b7899d21ed2ad1e897bc97c"
  },
  {
    "url": "assets/js/63.1a72cc0f.js",
    "revision": "8437a702d04633a7e289f60afd197485"
  },
  {
    "url": "assets/js/64.e88ea223.js",
    "revision": "532b3a1d2aaab074cb4feb7f886a6714"
  },
  {
    "url": "assets/js/65.13f19506.js",
    "revision": "27e9554ef4c339fecc5f0f048b4f61a2"
  },
  {
    "url": "assets/js/66.8c2e411f.js",
    "revision": "6f9fe77672ee5e46783d997f2a08f497"
  },
  {
    "url": "assets/js/67.f44e0d12.js",
    "revision": "2bc720a2cfb045b0498dc68ec6f6e792"
  },
  {
    "url": "assets/js/68.ea7ddfd9.js",
    "revision": "5ca6f37fdef61b324d033fb583fa61d0"
  },
  {
    "url": "assets/js/69.b35d4c71.js",
    "revision": "8a07e7d343a651bf87826232411e6b90"
  },
  {
    "url": "assets/js/7.28b8ec71.js",
    "revision": "aea55ab87badf70d14886b7a7769a209"
  },
  {
    "url": "assets/js/70.11072557.js",
    "revision": "222e5832054166e9a706defb10b35762"
  },
  {
    "url": "assets/js/71.17ae261d.js",
    "revision": "e2958c668a92bae1a94bc43bd4389fe5"
  },
  {
    "url": "assets/js/8.42c742f4.js",
    "revision": "1492a197759a997e4e78dda32660f7f3"
  },
  {
    "url": "assets/js/9.3db5d928.js",
    "revision": "bc7c65a36fff2e10f943642ff532523c"
  },
  {
    "url": "assets/js/app.6e4996bc.js",
    "revision": "d41dda91e2a3e76303630484f23a1cc9"
  },
  {
    "url": "assets/logo.svg",
    "revision": "8b15d99d4007ae33beb9ad1d061c0a2c"
  },
  {
    "url": "en/index.html",
    "revision": "313b05e997807646a020a1c2160313b8"
  },
  {
    "url": "index.html",
    "revision": "7e2bea20618acdab3f2ad88ebf6b45b3"
  },
  {
    "url": "posts/achilles/index.html",
    "revision": "c05f4e39d671400cfc365b62db644430"
  },
  {
    "url": "posts/acpi/index.html",
    "revision": "a35eaa0d39b9bce92b22faec64ab96fc"
  },
  {
    "url": "posts/arch-users/index.html",
    "revision": "714fb3c58cd4fe7cc71d38dafd11e96e"
  },
  {
    "url": "posts/archives-in-jekyll/index.html",
    "revision": "3edeee8a6b5d1ab4706c8e7dd459a7fe"
  },
  {
    "url": "posts/backup/index.html",
    "revision": "778fd9a32194830688ba1923ef75b4af"
  },
  {
    "url": "posts/chroot/index.html",
    "revision": "d7b682e421de0b03773231f2a23144da"
  },
  {
    "url": "posts/cp1251-to-utf8/index.html",
    "revision": "b6a6c62fe53a4e353fb3cf2ef93dc02b"
  },
  {
    "url": "posts/css-blur/index.html",
    "revision": "aa3405f09b2edc1700fc55325c44fbec"
  },
  {
    "url": "posts/debian-kernel/index.html",
    "revision": "8ae109f52fff3f9379f6d86c2da83122"
  },
  {
    "url": "posts/debian-wheezy/index.html",
    "revision": "484d9051976d4e28358012abb9f125bf"
  },
  {
    "url": "posts/django-first-steps/index.html",
    "revision": "51881281f90c06af59dc602dbf07f9a6"
  },
  {
    "url": "posts/django-pagination/index.html",
    "revision": "630070f404112f66b6d599861bf29829"
  },
  {
    "url": "posts/dwm/index.html",
    "revision": "07f008d4cff42d8feed81d11e3625923"
  },
  {
    "url": "posts/dynamic-component-tagname/index.html",
    "revision": "7e80db666c398222efa5f76228f4bfe0"
  },
  {
    "url": "posts/ebup-latex/index.html",
    "revision": "0103a7fe19261f13f9f738895acd9714"
  },
  {
    "url": "posts/elegant-design/index.html",
    "revision": "77369c5684163081da77be84adb516ab"
  },
  {
    "url": "posts/emacs-dired/index.html",
    "revision": "e6a1104919dd539d01a5c1bacaef281c"
  },
  {
    "url": "posts/emacs-ide/index.html",
    "revision": "60331600c5f61c6052382e5df77f0eb3"
  },
  {
    "url": "posts/emacs-snippets/index.html",
    "revision": "d6bf66df78b0b2bd48fd87814cab63a0"
  },
  {
    "url": "posts/emacs/index.html",
    "revision": "af3cdfe8d52a6aa55f21480ae5b3680a"
  },
  {
    "url": "posts/fbsplash/index.html",
    "revision": "6931c3063d1804dae099ef4bf0dd1a0c"
  },
  {
    "url": "posts/gentoo-update/index.html",
    "revision": "2b0b7a188c741e2c6fc8b70cf16baaa9"
  },
  {
    "url": "posts/gentoo2/index.html",
    "revision": "88502a0e2e974ab0e0796a332fd748f9"
  },
  {
    "url": "posts/get-absolute-url/index.html",
    "revision": "991d32c20f7e1eb06220282a47254fc8"
  },
  {
    "url": "posts/grub2/index.html",
    "revision": "1cd2a6fcc5ea5ad7bb6c1fcb14b44199"
  },
  {
    "url": "posts/hyperref/index.html",
    "revision": "555bcdaae0f703407a6f81dca187b1cb"
  },
  {
    "url": "posts/index.html",
    "revision": "c7c890efb3ec1daf2a0a15e848bd8719"
  },
  {
    "url": "posts/install-gentoo/index.html",
    "revision": "0b5ddba544a51757f3eb91bdd69ab0ea"
  },
  {
    "url": "posts/jekyll/index.html",
    "revision": "78522db8ec189f8db205c74138cb7ab0"
  },
  {
    "url": "posts/js-this/index.html",
    "revision": "acc2a06ea497db886d9bd20f9c453763"
  },
  {
    "url": "posts/kernel-v3/index.html",
    "revision": "5acbcf54faa765ff71741be5fa303e41"
  },
  {
    "url": "posts/lamp/index.html",
    "revision": "48ec441705f000ca397278942ae2a184"
  },
  {
    "url": "posts/linux-command/index.html",
    "revision": "2b34efe2d4be876e847c0d1b604a30dc"
  },
  {
    "url": "posts/linux-sound/index.html",
    "revision": "91b36de5b49fe43f1e1231befeb0ef40"
  },
  {
    "url": "posts/mplayer/index.html",
    "revision": "6bff0711a33c4b37254421fd654ad9c0"
  },
  {
    "url": "posts/nano/index.html",
    "revision": "469151ecf139472c79ba2d0251458ecf"
  },
  {
    "url": "posts/npm-build/index.html",
    "revision": "2e2401ab6a02f60873b50cd9aeb6470c"
  },
  {
    "url": "posts/ntpd/index.html",
    "revision": "2408aadeacd6b3efb52c185f5053fc9c"
  },
  {
    "url": "posts/object-fit/index.html",
    "revision": "e21305d91a073a737815ef9b33237fd8"
  },
  {
    "url": "posts/openbox/index.html",
    "revision": "f160f0465a865a8864cf384233dd8813"
  },
  {
    "url": "posts/pull-request/index.html",
    "revision": "8fd2970b3842eec661c21a74378b35d4"
  },
  {
    "url": "posts/pydict/index.html",
    "revision": "840f94aac5011851ca348a3b32932bed"
  },
  {
    "url": "posts/python-gui/index.html",
    "revision": "adcd8655d9b68e47e14b928e378bc7e2"
  },
  {
    "url": "posts/qemu/index.html",
    "revision": "df22d7895c03ba6c6d5514b9adee7733"
  },
  {
    "url": "posts/rails-archive/index.html",
    "revision": "28fb98dd4d12565c244ce5062f29705e"
  },
  {
    "url": "posts/rails-markdown/index.html",
    "revision": "c835d0844061184eb2ba1108f7dc3f7d"
  },
  {
    "url": "posts/rails-slug-url/index.html",
    "revision": "6ce93a1b85f0f99e1d354ff54ce24c08"
  },
  {
    "url": "posts/react-jsx-render/index.html",
    "revision": "40cb750101981eb3fb37e4cd03878c8a"
  },
  {
    "url": "posts/responsive-menu/index.html",
    "revision": "801508c0d56dd5eb425b83fc1ad9bfb2"
  },
  {
    "url": "posts/ruby-rvm/index.html",
    "revision": "3f5db0ae740862415144980b4423cc00"
  },
  {
    "url": "posts/sass-controls/index.html",
    "revision": "174940b7a17f504e4ec274a2b6c72467"
  },
  {
    "url": "posts/screencast/index.html",
    "revision": "b2c6e7c52d119ea38bad80092b2b721b"
  },
  {
    "url": "posts/sinatra/index.html",
    "revision": "e361ed12cf978dc0cae3e005ca2ef338"
  },
  {
    "url": "posts/sort/index.html",
    "revision": "9802515d5257bd49712d3a8b90310553"
  },
  {
    "url": "posts/ssh-keys/index.html",
    "revision": "3a80bcf627b63208e9298c919ae482e5"
  },
  {
    "url": "posts/texreview/index.html",
    "revision": "06a87e4e0262007452235ef9ca9fb47f"
  },
  {
    "url": "posts/tikz/index.html",
    "revision": "c613226955625f407557a1f9c22f39c3"
  },
  {
    "url": "posts/title-latex/index.html",
    "revision": "aa8dc1d07c207f13846535d49a852626"
  },
  {
    "url": "posts/udev/index.html",
    "revision": "e298ae02ee440a0478e8e920a681adbe"
  },
  {
    "url": "posts/whois/index.html",
    "revision": "56139a29a4eaa217bb77f6f613232486"
  },
  {
    "url": "posts/wp-post-types/index.html",
    "revision": "d31f8ed512f0ece4b753538a80f296d7"
  },
  {
    "url": "posts/wp-theme/index.html",
    "revision": "46dedf08d3142504c38eaa1f23934125"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
