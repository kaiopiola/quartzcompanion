'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0ccbf1ba6cec8247d94b7eebd17ff3e4",
".git/config": "9ebe6b824e8420e42ff08b876222dd49",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f2ee5110f264e6457976021cf656074e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2b3d85798152d4cbc77db01fddcdee2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18344c9c9703009a29c503934521ab62",
".git/logs/refs/heads/master": "2af54b923e3f603278b9bf7d2daee61e",
".git/logs/refs/remotes/origin/HEAD": "620185b3bdde82886080240726f5fb8f",
".git/logs/refs/remotes/origin/main": "51dd1446182cb8411c1e33404061df9f",
".git/logs/refs/remotes/origin/master": "4feb0509ec5007731d78eb73e7045278",
".git/objects/02/68f58247cd61d5e8f581707d4a61e5825fd953": "3990f82518c4a3899786a877bb138cb9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/82451a58a81934c8512cdf628590057d46ff85": "6045f24399c9a4ae952d0d21d413af75",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/68a8399dccb6831c57cb0d4b6c4af3bac5dd2d": "e5fd0bfce3dc622624705f7027a5693c",
".git/objects/0d/a9c88f67ab5f779072743971141ff9f16654c6": "1e90079fe14466431edf5f74f3970f62",
".git/objects/0e/370743d2896e58a06deb5c67fc2cb3172c68a5": "dc6b7daa33d7fd32a202013f92cb78be",
".git/objects/0e/dfb21060e70b83a66672781b0c5aad0ec5e902": "b9994a027dcd08dd46e52373466ef540",
".git/objects/0f/60ed2759c4d13984163ee710a8db9486106c89": "c10830f00437f1b25934576a23a29fed",
".git/objects/10/587a661779235dd52870f2bef6298f2141508e": "4f6f82cd7b4f0676d7dd1977ff5dfd0e",
".git/objects/10/a6a3b16d40800340e66abc66827813a00d131b": "c378d247428249e20c77c868ea465bbd",
".git/objects/12/9cc11828f96ed05fe951523e38610a6cb4973a": "d012dc836fae2c6ef7b1948463fe5b35",
".git/objects/13/a97ff8090a595cc482a0dd5f4a0adb85594a3c": "d967b8afbc0dbacee3bcbf13c49984fc",
".git/objects/15/0842471fe22f33de5cb08021543b52b2119866": "8702e51e0c03782d24ef3b1879a929c7",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/4dcdcff3abb9838ad883d2bcac3be5dd60777d": "f5ff972fd3c07dd478936390845276d1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/678b5ae5b22270c8ba1901e0258aa6979edd4d": "f631987b92cf82a52a6f1df2ec8df71a",
".git/objects/1f/cc00a13638f4d94bdf1d386a84aa4b37a3d119": "faf65959d5f85006873bb1aa34ff8cd4",
".git/objects/23/817c219798ee2d7a3410f6dccf5abceb2cb431": "79e596429edbad23ef4a8715fbe03cc9",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/741be2966f30bc4bb8808abc44f18c396cec1b": "ff45d5cc2073f68cee47256ecc20cdcf",
".git/objects/29/4e6b5ce261f7a66436a87be3828729bc8f32b5": "a8967e2e251e8fea5d72c82f3817d605",
".git/objects/2b/0e5ee9e99cb365716332b0919f15dca3bcbc2d": "8283d17156706395ad4a7a38463a8618",
".git/objects/2e/0178d065ee1fe335de2cf6301da23882644e0b": "5642b550bc4488f3491a18ff1ab7a99e",
".git/objects/31/3b00409613a7ccf3e1bcd484064e15024df1eb": "10b04a061e90e013c5160d2a26b15f26",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/42a139c7b8643a7a420699718cc1fc67e85906": "40e32142b885dfb2b667f3a13d1f3e02",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/fe8e58b28ef87bee2b75b023b8e2de2c23091f": "18846a576b9245b3a41717a71e1a7447",
".git/objects/36/70e8d46e397eb81daeed529f81cdb8bc0ba0c3": "a7ab84207f8f8d9057c2809b1e69b528",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/dcbd7f9bfcd07eb96c7079b744de1fd011a515": "57ef3e7bc106fdd0de4ca82c5e7ecfab",
".git/objects/3e/df9dfebb5678c5a43f507bf275e98e41b38d19": "4e3408131078ad79f1a12c936587304a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/91ea6fdb9a440a4c5aa8c35460a7f99350342a": "f34af6032a964cdb8779c167a7b6ee83",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/42/1741da0a8e81b2c1a06d7a898a5dcaf4b43cfc": "b2f23c0193001f6f636281e8a132e1ad",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/e4e3fd424b5a13c57f04f87c8ca1d004f5d26d": "40ff8891dede715290c3799b52417d7a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f4e6d5c4af952acd0f25b49df8bd572facfb5b": "eee00042d5f5f6c7b8fde8785313e754",
".git/objects/48/41991b5f9194d306f0df241d60fb7f29cb2497": "15e5efff957a0e4ebf5b285ae5102e12",
".git/objects/49/403b415ffb9be3c7e0d1d4ba4275c5e02ec55a": "aa8a6375ac05ad1f74bb9a5bdffeb88c",
".git/objects/49/68c705260e01bf2264b9711f2231b1df6116a5": "dd245167e45dea8ffb4f4863c6adb3d3",
".git/objects/4a/2fb406f50e1068a6947d69e9155b081249daad": "ef2fab32dae8320607ad2480f020cfd7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/b2a13e97ed1ca9d9c1c26812afdf2fe17c070d": "e8017bf1c185105818c2a2d688d99712",
".git/objects/50/64c2ba5fbf33eeaad66827d2c6694b019c6908": "ae2f5b6d618ebd60ebe75d4668df7eff",
".git/objects/52/d60955719d92b6b2f08f6177b9675bf3fe1835": "b757ce47e4aadb40e0b9ce32be7b3053",
".git/objects/55/8fe1a1d3e435bccaf407a2ba173059c3220110": "4f9f1ab3ccefc220b60f31c94a872ea7",
".git/objects/55/a5f1b8abe02eac9593d4cba14c4239fc230626": "87e9adbe176896d24f4699b7f4629458",
".git/objects/56/cd20592d74975f03d08acc36c27de14c7ded7b": "54a511cdee21f2ac7e80643f981cd3de",
".git/objects/57/1c22931c65d895fae2bc32c416c14c026a9505": "aa8eadcdcbaf27a376b629ccd63cefb9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/f097fce64c2705f17c865d600a510484bad172": "bbc890e44a0599b10156cbaf79171921",
".git/objects/5d/7fc5df1f9e627d6dd381980a178ed4420f03a2": "39c8f67d40ac3f830e9ebf8bc068f17f",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/aa3296ae187f85cf451bc17cf60229d8fe5131": "2e796eb6c2e41aceaa84d49b4b099a23",
".git/objects/63/2a7dfa560ffd752cc67a26b09ab47f13cfcea9": "f9078fa151e78720f59970260c2c5507",
".git/objects/69/21e8b7b01a9d6e3f437004ab6bf002758d97f9": "ff09f2ebcdbf1612bba4571c0f924d3c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/5d3d38906c752f5300971dc56a725a62d3838d": "2c38f9bf8062ea43a4f2b8139db14ef0",
".git/objects/70/d927391c26cf4c621bc36d14d4bc0c7d6363c7": "39193702f0e6fc5783bdbd62b74d44f7",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/77/cbf9a08af0f75138eaced5483c55008cb2e1da": "74d5d64b0ba1d85d95a810e9ada645fb",
".git/objects/7d/65cfe5ebed3829da401070e030cd679146558e": "23f057fe58a00829ddd5e96c3abdfc03",
".git/objects/80/ef09c1ef78b430ca377f6687e588d003aa11bf": "8ceb74fc7222fb54c13b54d109e8cf66",
".git/objects/82/79ab882d33fcc034184be4bb071282d96d0040": "32b3eec6ed2a6c2e5bc58c24835b1eea",
".git/objects/83/085e0576e2f8d54df3a3b02e754fe04875d988": "d3492cbfff3c89911cd6f1f421b47252",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/3cddaea0092100fcccbaf046204e9e25dbc198": "7d229772916883918836ff5b85393f9e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fc76e3d71ff7bf8f921fc578e9303eeda24b78": "3e88ab272d50ff00d3448e6683d28d8d",
".git/objects/8b/28170f276ccff9db3bd11400942aec20da0556": "8f1ffe36404dad7735365308f6c9ce6c",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/07ef9856d8e93304630d6c746535cc4c32df4f": "1dbcbf50d2a8bcf0f0f377bc9869903e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/5c2c5b33315ba2ee5e0d8446dfc796241b0a22": "9df72b140a38d88c15069c214ab216ed",
".git/objects/94/027628ac5dd7993bc6f2695a943f2c53e4915b": "20e865d26684ea91fe22ec460fbf9b5a",
".git/objects/98/06516d529cff48d3fb276071953f168cf93108": "976d9c9bd340db7bc2812fe3d1668ed0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/18b6f2f8e14e6137e59af3ce7f15298441d95c": "e2cf2bb984be3f1287cf58e56e3bd898",
".git/objects/99/b39eb14bd07e68c00cd457a9436bc88f1391d7": "e22b0d3c5b5a800978f00a5b9186997e",
".git/objects/9a/4ae62808f92d0f3cd2b2d7b3f271a8338f6dd2": "b6cfb8dc6cedd8c0dc9810903e455c5f",
".git/objects/9b/1fa9a74e823b1df8383aa5a4a0f016dd3abaa4": "0f15637b29989b426ffd0d2232b82d97",
".git/objects/9e/656932a91707ac5b4554dbf733536c437b5767": "da51fdc858d64a6762ec05c3a9dd726c",
".git/objects/9e/a64560d3e0999dc515f950a84fe2ef006e7cb7": "3a434f14b11e4c1d1cc74e0de2b5a0e4",
".git/objects/9f/dfcf2fd0e38dee251f18f370ebb7d019c0ab60": "e45b4841cc2ccd0dbb378487a8219c5a",
".git/objects/a0/2b69dd4f23ffed1127eb0c3f495f11da7dc026": "dcb7c55eeff18712df3f57d60f3adcbc",
".git/objects/a4/f1afe3b0d7ca56744257d674046633749e4a2c": "36bb4b156d04939d09f8db55ebcea1d3",
".git/objects/a5/4888de704946f4ef4fa7749d175da540d5712a": "e87ee4ab9dc60d42a4f0d7680b3d1999",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/297256de574d42faa2f2b71eab4cc5c411af29": "771b0c2ccbd41868d7ea013937c997e6",
".git/objects/af/c5d8252d965f75826a445f343a059839270739": "c9e6f33208d223312b33ff86b2fd79e2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/766ccad253f68ca227aa740d35312a7779acba": "baf2eb8b70323fb4f9e1844f6d00ef47",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/810827446c5668f84c27febdeeb3b001705b30": "58a2413ab8dda79a11c2831cc66a63a3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/4c21a69cda8d5747436b93d0b9f70f24ecb5ec": "68bb97d59fdc59f1e615723568036a37",
".git/objects/be/dbdc2b26249509ed53205c3e97c54d3e1eaa03": "b808ca6dbc5a91585e55fe4b739a0b3a",
".git/objects/bf/4e4b20c83d8d90a9fc9711604cf5cb25ca826e": "18d1bd1dcacd9a814208e1553094f370",
".git/objects/c0/876a933d30134e3664d1a005b0fce67a194717": "077133d3d51a36224fdb182c6ce1240c",
".git/objects/c5/8ae82f54d7e5a537c3c47c268950eb275c9a44": "cb54b4d38e8917555577ad8bac0e7174",
".git/objects/c7/fda1ba2778c53b9a16e9fcc18ab4998267ba29": "8d819ebdcb93cbb4c814866f53ccc1bf",
".git/objects/c8/252154bb6fd981b84797c2ad3845777b0cde0a": "5467f025d2ef92bc74d3718a163242c5",
".git/objects/c9/7cc269ec890e4a0275a3c77ab7a355a8787bb0": "501580b6182e68bcb0e8dee35c55c517",
".git/objects/ce/0a7cbf8ae07a77bae51497d1f96408d3ceddab": "57f716cd416309e83251db613d7a84c9",
".git/objects/cf/1b0c0bd050a4e51b7c8c906aef79bf8b4057df": "1fba3bfe285eac25c4eee0629fa66e68",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/55f04e2e146b67b096d369137dc4c73ce69726": "90670de5ceab15371b773fb88b49d82f",
".git/objects/d0/585e07be2062a8001669b668bb69ad2e740d6a": "d8b02dce1676149bb401610fa577a688",
".git/objects/d1/25363a386b7b90ecbdc5f491650bd529b2d095": "9e734969d4ba191cab49afa40461bd62",
".git/objects/d3/b5d24056bf74b8f6f1a9c46c0a33f623076216": "8a12aef97579534527f743774e5553f7",
".git/objects/d3/ccf064ad6a5e853a9fd5b9c2e9b8d8b05648ba": "66630b5db8608ad62dbd3720f098c0a8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/b807e08022c4f4bb5fe059b5b4df69e024291c": "c4084185a8e68f92dc04b91880153f7c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/565565690d7404e5b84b0215819456e91578cd": "a5770d77b73da052a5b06fa9e7f92797",
".git/objects/dd/f22d2f9c833d1ce2676bcf6fb2ef1cdb8d12fc": "8fe351d0d1eb50b161c6f82c1c403583",
".git/objects/dd/f73fac5e2d09fbb506e63ef2ef7632a1ad50c3": "f401b431e1b734da6bbf6cb1d425bdc7",
".git/objects/e4/675f380e798c0d70d149621d5b598ae89d4d7e": "835b28b243845a85b4360e19744d45fb",
".git/objects/e5/e136cb2ab035d44c44dd0833a8a7a0dabe2c20": "7debb6a017307fe4476b9c4ab9e83d0d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/ec81a55add1b7922372c653f49db8a5370d978": "18b68f19b4d97c319f00e7e228d23282",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/69cc67aa3b777a6ce98a972eb47f868d05c916": "4e08665c002082b4a8977cd86b5c1411",
".git/objects/f6/e15576b9634cef68bf4f14bdddc7c3011cb726": "c51d5e38a638a218f0424d3718e6ece0",
".git/objects/f7/f5e627abf9a7907a10878640106dc82eb31ca1": "9191e77ede48a3f693ce5cd9dab93d24",
".git/ORIG_HEAD": "f3541279ebfe57de19b2e1a05b3e1ca9",
".git/refs/heads/master": "f3541279ebfe57de19b2e1a05b3e1ca9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5dd9f3624974c69cb60ec6c3f0580775",
".git/refs/remotes/origin/master": "a2fd6296bb469e17d0d504b54d4fcb72",
".git/refs/tags/1.2.0": "5dd9f3624974c69cb60ec6c3f0580775",
"assets/AssetManifest.bin": "6f326c46490f214e53f66731f9189bf7",
"assets/AssetManifest.bin.json": "59da154f231822b721e793c81b4271f7",
"assets/AssetManifest.json": "2a7abc976c867f727b885099eb78225d",
"assets/assets/files/quartzcompanion.apk": "80ce70fe7e6c7514f7cd5822119fe276",
"assets/assets/images/background.png": "2915c11850cb87316ee6813c7d1877a3",
"assets/assets/images/background_landscape.png": "fb130f97ed215fee44f48138291e7fb0",
"assets/assets/images/icon.png": "63032a73304c9e84f201e9ee3344cd52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3fec4c4fc446cdd3d4089a5472d05d07",
"assets/NOTICES": "e76594a6a0e7deb74f15d121c40a841a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "f698bc6a3fb62d743fd28e8eca944faa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c29a196ea0a0821ccefa952e0e76993c",
"icons/Icon-192.png": "ac9f6d8891e256b7e5bcd335fb2a4361",
"icons/Icon-512.png": "99d9dff7c4d9c2b229a7e192c9cb7294",
"icons/Icon-maskable-192.png": "ac9f6d8891e256b7e5bcd335fb2a4361",
"icons/Icon-maskable-512.png": "99d9dff7c4d9c2b229a7e192c9cb7294",
"index.html": "ddf18c1c280ad68c9582bb4560c7520a",
"/": "ddf18c1c280ad68c9582bb4560c7520a",
"main.dart.js": "f496aac22018be86807a5b9fa04a5aac",
"manifest.json": "e7a98a03979d757af8c8335f1a9ab122",
"version.json": "28ed2768385ca65ca649306d2857d754"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
