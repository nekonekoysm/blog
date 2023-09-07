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
    "revision": "90d4f19e57a1cf615bf88ac0452ccd47"
  },
  {
    "url": "assets/css/0.styles.4a99f285.css",
    "revision": "9174d3a5811efd133a62875ab20c739b"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.53e7dcc8.js",
    "revision": "1b1277ebc2920213fd79fcaefbd49375"
  },
  {
    "url": "assets/js/10.336e9dc9.js",
    "revision": "0374ebc1430f9f6d718baf90b61acb38"
  },
  {
    "url": "assets/js/11.1ed58379.js",
    "revision": "3ac0fbf771a9bd68aa19518714bbbf51"
  },
  {
    "url": "assets/js/14.de81726e.js",
    "revision": "700b93c7a0a220fae47724545c525d46"
  },
  {
    "url": "assets/js/15.11406084.js",
    "revision": "08f55131a35a214d59c58e42824e57c2"
  },
  {
    "url": "assets/js/16.ca8b6a42.js",
    "revision": "3c3ac184c858d7b1bd49b31fc39ad60d"
  },
  {
    "url": "assets/js/17.f593b703.js",
    "revision": "a2b55fdf79da7236597e49041d24d652"
  },
  {
    "url": "assets/js/18.edc28db6.js",
    "revision": "a5de785392bbce2b2e991e35bd57d751"
  },
  {
    "url": "assets/js/19.afdddb03.js",
    "revision": "177aa9f4be5fa65368d1126de41aa3bc"
  },
  {
    "url": "assets/js/2.396eb838.js",
    "revision": "ec5f99bd057b4999ad1879440264f303"
  },
  {
    "url": "assets/js/20.b95bf2f4.js",
    "revision": "113e496f57b5127ab6bc70fb3a82c25d"
  },
  {
    "url": "assets/js/21.e7208c71.js",
    "revision": "f81d8d9efe7a78ba5ed21f9fa54e0432"
  },
  {
    "url": "assets/js/22.c4a1ed4b.js",
    "revision": "6ace7c97d650282bf9b81a845aa1a71e"
  },
  {
    "url": "assets/js/23.2eceb138.js",
    "revision": "9a606eb3051fd94c7b89ed17608bd2c2"
  },
  {
    "url": "assets/js/24.ddede5bd.js",
    "revision": "98c55af76d32c6878ea911a33fcec9bc"
  },
  {
    "url": "assets/js/25.7e3736a6.js",
    "revision": "b538fbeeca4852997f61f35f117c2bd5"
  },
  {
    "url": "assets/js/26.c5815dcf.js",
    "revision": "8a94e48c689b8986a1101eda05ec4e19"
  },
  {
    "url": "assets/js/27.1f4d516b.js",
    "revision": "978931bff495cb079511985f392c1831"
  },
  {
    "url": "assets/js/28.09ac9c22.js",
    "revision": "48304cb785e576b7a50b833e187192ad"
  },
  {
    "url": "assets/js/29.d6d7fa64.js",
    "revision": "55716ce11450143f80d6e47654164e96"
  },
  {
    "url": "assets/js/3.689145ee.js",
    "revision": "51611026ed34974c827ec0d744a8f4b5"
  },
  {
    "url": "assets/js/30.ef03b396.js",
    "revision": "22ed98f3bd379bf9dadffba2039bcdcc"
  },
  {
    "url": "assets/js/31.fdc3559a.js",
    "revision": "ff126739a644876c93f643f5ce07ebc0"
  },
  {
    "url": "assets/js/32.15fd5e84.js",
    "revision": "33a69cfd91edd6b979d4670bde7f0b49"
  },
  {
    "url": "assets/js/33.394c0622.js",
    "revision": "d648e9918a3dda6f1362b2dba1ae40b4"
  },
  {
    "url": "assets/js/34.894a8bb3.js",
    "revision": "e863a452e35ed153ab0042dfcdb5dd93"
  },
  {
    "url": "assets/js/35.0b680af8.js",
    "revision": "0ca8cf11292fcdbf75b46722fa825bf6"
  },
  {
    "url": "assets/js/36.7aa4f904.js",
    "revision": "88a5c640820b05347951d6a5c38065d8"
  },
  {
    "url": "assets/js/37.ba6d7c53.js",
    "revision": "c49c165dc8fcb841564dc36759e50f41"
  },
  {
    "url": "assets/js/38.13d59eb4.js",
    "revision": "cf52662af56fa39253f8405a6890c85a"
  },
  {
    "url": "assets/js/39.24fff324.js",
    "revision": "71360cad4143790803f7ba5b72c645a2"
  },
  {
    "url": "assets/js/4.81392c42.js",
    "revision": "e17ddfd7b61f66762742cdd24940f50d"
  },
  {
    "url": "assets/js/40.a908de71.js",
    "revision": "a17103e3f15f910cd1964e27e7ae2739"
  },
  {
    "url": "assets/js/41.5baff32f.js",
    "revision": "09588e09e9211234e90422c41c13ec47"
  },
  {
    "url": "assets/js/42.88249390.js",
    "revision": "ea5bc157ba99d2dbdbc24503644dc458"
  },
  {
    "url": "assets/js/5.ff664afe.js",
    "revision": "e81e8ffcc4986a2a22925642cf4b93cf"
  },
  {
    "url": "assets/js/6.2f4b9b80.js",
    "revision": "0b5a34439a4353face261e5514bac2b5"
  },
  {
    "url": "assets/js/7.7ddf8945.js",
    "revision": "80b1e0c471b87e59c3f0da9fa9546d3a"
  },
  {
    "url": "assets/js/8.596d0012.js",
    "revision": "1379b1badacc517181b6e731cc28e913"
  },
  {
    "url": "assets/js/9.d16adbe0.js",
    "revision": "7f511fb56e0e041dbe61e60f84db0b7a"
  },
  {
    "url": "assets/js/app.c0b70574.js",
    "revision": "e386056d7e68749b8d55bb40a7710063"
  },
  {
    "url": "assets/js/vendors~docsearch.93cc9fbd.js",
    "revision": "d1e38926917e1d8cdeccc4874e0b70f0"
  },
  {
    "url": "avator.jpg",
    "revision": "adc8c9c15e3433b95329f5210f55e186"
  },
  {
    "url": "bgcimg.jpeg",
    "revision": "1f993ec0f63d8a9a76a57a55f02f4d12"
  },
  {
    "url": "categories/index.html",
    "revision": "78d4f459d4f2b95cd3ebfcf9f1d3cc9f"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "dbcccabb8d284e8825648b84bf00c811"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a205d7ccd75360b1b5901be98733471a"
  },
  {
    "url": "index.html",
    "revision": "e89bef48f3cbc98bf61330459f8324be"
  },
  {
    "url": "logoimg.jpg",
    "revision": "e47ff72dd365ab2b42954dd34dac799a"
  },
  {
    "url": "notes/note1.html",
    "revision": "4f663b52fc35518d30e2f63326006a46"
  },
  {
    "url": "notes/note2.html",
    "revision": "ccd5e16a67a495b5d219ac1acaf2df3c"
  },
  {
    "url": "tag/index.html",
    "revision": "4822754f027ab7c1244db0e06a4bd0a2"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "93725db4ed9af1e718eb2f2bd483d0b2"
  },
  {
    "url": "tag/vuecli/index.html",
    "revision": "07365d605b70941073a73e82ec5a8734"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5b2c9587e1ac9f57c28224ce244a504"
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
