/* =====================================================
   山海記憶・水湳洞  —  script.js
   ===================================================== */

// ══════════════════════════════════════════════════════
//  SPOT DATA
// ══════════════════════════════════════════════════════
const spots = [

  // ── 景點 ─────────────────────────────────────────────
  { id:1,  category:"景點", name:"水湳洞停車場",           lat:25.121995985986548, lng:121.86378556038792, address:"新北市瑞芳區北部濱海公路旁",    phone:"",             hours:"全天開放",      description:"水湳洞地區最主要的停車場，緊鄰北部濱海公路，是大多數旅客進入水湳洞的第一站。停車後可步行至陰陽海觀景台、漁港、三D溜滑梯等各大景點，交通極為便利。假日建議早到。", highlights:["免費停車","鄰近陰陽海","交通便利","假日易滿"], image:"https://biki0315.github.io/images/view01.jpg",    mapQuery:"水湳洞停車場 新北市瑞芳區" },
  { id:2,  category:"景點", name:"陰陽海觀景台",           lat:25.12241489206304, lng:121.86422656576538, address:"新北市瑞芳區北部濱海公路旁",    phone:"",             hours:"全天開放",      description:"水湳洞最具代表性的奇景。金黃色海水與外海湛藍形成強烈對比，狀如太極陰陽，是台灣最著名的地質奇觀之一。觀景台視野開闊，是拍攝陰陽海全景的最佳位置。", highlights:["台灣奇景","礦業地質","攝影勝地","免費觀賞"], image:"https://biki0315.github.io/images/view02.jpg",   mapQuery:"陰陽海 新北市瑞芳區水湳洞" },
  { id:3,  category:"景點", name:"水湳洞小鎌倉",           lat:25.12274165674911, lng:121.86388034301999, address:"新北市瑞芳區水湳洞聚落",        phone:"",             hours:"依活動而定",    description:"利用昔日礦業倉庫改建而成的藝術展示空間，保留了老建築的斑駁磚牆與鐵皮屋頂，定期舉辦在地藝術家展覽與手作市集等文創活動。", highlights:["老倉庫改建","藝術展覽","文創市集","歷史建築"], image:"https://biki0315.github.io/images/view03.jpg", mapQuery:"水湳洞 新北市瑞芳區" },
  { id:4,  category:"景點", name:"茹川橋站牌",             lat:25.120380256827954, lng:121.86191928299388, address:"新北市瑞芳區長仁路茹川橋附近",  phone:"",             hours:"全天",          description:"位於茹川橋旁的公車站牌，是往來水湳洞山城聚落的重要交通節點。搭乘788、886等公車可於此站下車，步行即可抵達黃金瀑布、十三層遺址等景點。", highlights:["公車可達","交通節點","近黃金瀑布","近十三層"], image:"https://biki0315.github.io/images/view04.jpg",   mapQuery:"茹川橋 瑞芳 水湳洞" },
  { id:5,  category:"景點", name:"黃金瀑布",               lat:25.11736092157074, lng:121.86147876579994, address:"新北市瑞芳區長仁路明里路口附近", phone:"",             hours:"全天開放",      description:"因礦山廢水中大量的氧化鐵礦物沉積，岩壁與溪床都染上了耀眼的金黃色澤，流水傾瀉而下，遠看猶如黃金傾洩。每當陽光照耀，金光閃閃，令旅人嘆為觀止。", highlights:["礦物染色奇景","免費參觀","攝影熱點","步道可親近"], image:"https://biki0315.github.io/images/view05.jpg", mapQuery:"黃金瀑布 新北市瑞芳區" },
  { id:6,  category:"景點", name:"三D海景溜滑梯",          lat:25.122527569931897, lng:121.86001768114349, address:"新北市瑞芳區水湳洞停車場附近山坡", phone:"",           hours:"全天開放",      description:"利用山坡地形打造的超長3D彩繪溜滑梯，彩繪圖案與天空及大海融為一體，從特定角度拍照彷彿直接滑入大海，是水湳洞近年最熱門的打卡景點。", highlights:["打卡熱點","3D錯視彩繪","海景背景","老少皆宜"], image:"https://biki0315.github.io/images/view06.jpg",   mapQuery:"水湳洞3D溜滑梯" },
  { id:7,  category:"景點", name:"台電金水基地",           lat:25.12346734693853, lng:121.86064794930576, address:"新北市瑞芳區水湳洞洞頂路附近",  phone:"",             hours:"依開放時間",    description:"台灣電力公司在水湳洞的歷史性設施，見證了台灣礦業與電力發展的重要篇章。基地中保留了部分舊式電力設備與廠房建築，具有獨特的工業美學。", highlights:["工業遺產","台電歷史","文化導覽","建築攝影"], image:"https://biki0315.github.io/images/view07.jpg",  mapQuery:"台電金水基地 水湳洞" },
  { id:8,  category:"景點", name:"水湳洞最長階梯",         lat:25.12207113603689, lng:121.8605913220594, address:"新北市瑞芳區水湳洞山城聚落",    phone:"",             hours:"全天開放",      description:"貫穿水湳洞山城的超長石階梯，沿著陡峭山坡蜿蜒而上，兩旁是密集的老屋與綠意盎然的植物。登上頂端，可俯瞰整個水湳洞灣區，陰陽海、十三層遺址盡收眼底。", highlights:["俯瞰全景","山城體驗","健腳路線","生活感濃厚"], image:"https://biki0315.github.io/images/view08.jpg",    mapQuery:"水湳洞 階梯 山城" },
  { id:9,  category:"景點", name:"展演藝廊",               lat:25.122633975497997, lng:121.86122113281098, address:"新北市瑞芳區水湳洞聚落",        phone:"",             hours:"依展覽時間",    description:"隱身於水湳洞山城巷弄中的藝術展覽空間，不定期展出在地藝術家的繪畫、攝影、裝置藝術等作品，是水湳洞文藝能量的重要展示舞台。", highlights:["在地藝術","不定期展出","巷弄文青","山城藝文"], image:"https://biki0315.github.io/images/view09.jpg",   mapQuery:"水湳洞 藝廊 展演" },
  { id:10, category:"景點", name:"水湳洞漁港",             lat:25.12311314549873, lng:121.86794667772575, address:"新北市瑞芳區水湳洞漁港路",       phone:"",             hours:"全天開放",      description:"水湳洞的小型漁港，停泊著數艘漁船，保有漁村的悠閒與純樸。清晨漁船出海、午後返航，漁港旁的高處也是俯瞰陰陽海全景的絕佳角度之一。", highlights:["漁村風情","日落美景","俯瞰陰陽海","在地生活"], image:"https://biki0315.github.io/images/view10.jpg", mapQuery:"水湳洞漁港 新北市瑞芳區" },
  { id:11, category:"景點", name:"C形灣拍攝景點",          lat:25.122018825901282, lng:121.86873475808426, address:"新北市瑞芳區靠近福隆方向海灣",  phone:"",             hours:"全天開放",      description:"從高處俯瞰時，這個海灣呈現出完美的C字形弧線，搭配後方的山巒與十三層遺址，構成水湳洞最具辨識度的地景構圖，堪比明信片的絕美畫面。", highlights:["地景構圖","攝影勝地","弧形海灣","明信片場景"], image:"https://biki0315.github.io/images/view11.jpg",      mapQuery:"水湳洞 C形灣" },
  { id:12, category:"景點", name:"威遠廟",                 lat:25.120430692256715, lng:121.86812728164924, address:"新北市瑞芳區水湳洞漁港附近",    phone:"",             hours:"全天開放",      description:"水湳洞地區歷史悠久的傳統廟宇，主祀關聖帝君，是在地居民的精神信仰中心。廟宇建築融合傳統閩南風格與海洋色彩，每逢節慶舉辦各式宗教活動。", highlights:["傳統廟宇","雙龍雕塑","地方信仰","文化體驗"], image:"https://biki0315.github.io/images/view12.jpg",    mapQuery:"威遠廟 水湳洞 瑞芳" },
  { id:13, category:"景點", name:"水湳洞選煉廠遺址（十三層遺址）", lat:25.11861384874888, lng:121.86474067276414, address:"新北市瑞芳區長仁路山坡上", phone:"",        hours:"外觀全天可觀賞",description:"建於日治時期的金銅礦選煉廠，因廠房依山坡逐層興建，共有十三層樓高，俗稱「十三層遺址」。廢棄後廠房外牆呈現獨特的鏽紅色，被稱為「台灣的天空之城」，是全台最壯觀的工業遺址之一。", highlights:["台灣天空之城","日治工業遺址","夜間燈光","全台最知名廢墟"], image:"https://biki0315.github.io/images/view13.jpg",    mapQuery:"十三層遺址 水湳洞 新北市" },
  { id:14, category:"景點", name:"長仁亭",                 lat:25.120034847007304, lng:121.86596913962933, address:"新北市瑞芳區長仁路山頂",        phone:"",             hours:"全天開放",      description:"位於水湳洞山城制高點的傳統涼亭，登上長仁亭，整個水湳洞灣區盡收眼底——陰陽海的金藍交界、十三層遺址的宏偉輪廓、遠處的基隆山——是水湳洞最完整的全景觀賞點之一。", highlights:["制高點全景","俯瞰陰陽海","休憩涼亭","登高健行"], image:"https://biki0315.github.io/images/view14.jpg",  mapQuery:"長仁亭 水湳洞 瑞芳" },
  { id:15, category:"景點", name:"大野狼小綿羊岩",         lat:25.124127105089546, lng:121.86930816440007, address:"新北市瑞芳區水湳洞海岸礁岩區",  phone:"",             hours:"全天開放",      description:"海岸邊的天然奇岩，因長年海浪侵蝕與風化，形成酷似大野狼與小綿羊造型的巨石組合，栩栩如生。親子同遊時不妨讓孩子找找哪塊是大野狼、哪塊是小綿羊。", highlights:["天然奇石","親子趣味","海岸地質","造型岩石"], image:"https://biki0315.github.io/images/view15.jpg",  mapQuery:"大野狼小綿羊岩 水湳洞" },
  { id:16, category:"景點", name:"沈睡的沙皮狗岩",             lat:25.12477792672674, lng:121.8693403509078, address:"新北市瑞芳區水湳洞海岸礁岩區",  phone:"",             hours:"全天開放",      description:"外形酷似大象鼻子的巨型海岸岩石，是水湳洞海岸地質的奇特景觀之一。岩石本體在海浪長期沖刷下，雕塑出這個令人稱奇的自然造型。", highlights:["天然奇石","海蝕地形","近距離觀賞","潮間帶生態"], image:"https://biki0315.github.io/images/view16.jpg", mapQuery:"象鼻岩 水湳洞 瑞芳" },
  { id:17, category:"景點", name:"觀海棧道（廢煙道）",     lat:25.11278756942719, lng:121.86677731634089, address:"新北市瑞芳區十三層遺址上方",   phone:"",             hours:"全天開放",      description:"沿著昔日選煉廠廢棄輸送管道與煙道所改建的步道，步道一側是壯觀的十三層遺址，另一側則是廣闊的太平洋海景。走在其上，工業歷史的滄桑感與自然風景的壯美同時湧現。", highlights:["工業歷史步道","十三層視角","海景步行","歷史感強烈"], image:"https://biki0315.github.io/images/view17.jpg",   mapQuery:"水湳洞 廢煙道 觀海步道" },
  { id:18, category:"景點", name:"濂洞溪（黃金溪）",       lat:25.122778512497465, lng:121.86364538292187, address:"新北市瑞芳區黃金瀑布旁",       phone:"",             hours:"全天開放",      description:"流經水湳洞礦區的主要溪流，因上游礦山廢水中大量的鐵、銅、硫酸根離子，使得溪床與溪石染上橙黃金色，因此被稱為「黃金溪」。搭配旁邊的黃金瀑布，構成水湳洞最具代表性的礦業地質景觀。", highlights:["礦業地質奇景","金色溪流","自然奇觀","攝影勝地"], image:"https://biki0315.github.io/images/view18.jpg", mapQuery:"濂洞溪 黃金瀑布 水湳洞" },

  // ── 美食 ─────────────────────────────────────────────
  { id:1,  category:"美食", name:"月牙桐海景餐廳",         lat:25.122042556888253, lng:121.86140871697626, address:"新北市瑞芳區洞頂路155-9號",   phone:"0985-406-888", hours:"11:00–20:00",   description:"佇立於山城制高點的人氣海景餐廳，以大片落地窗和露台設計擁抱無邊海景。坐在這裡，陰陽海的金藍奇景近在眼前，十三層遺址就在視野之中。餐點以在地食材為主，融合海鮮料理與創意台式風味。", highlights:["無敵海景","落地窗座位","建議訂位","海鮮料理"], image:"https://biki0315.github.io/images/food01.jpg",  mapQuery:"月牙桐海景餐廳 新北市瑞芳區洞頂路155-9" },
  { id:2,  category:"美食", name:"迴回Hui Hui餐酒館",      lat:25.121757782148308, lng:121.86149146339946, address:"新北市瑞芳區洞頂路155-4號",   phone:"0975-590-712", hours:"週三至週日 17:00–22:00", description:"藏身於水湳洞山城老宅中的特色餐酒館，以精心挑選的自然酒搭配創意料理著稱。空間小而溫馨，老闆親自款待每位客人。傍晚時分，在此小酌一杯，讓人忘卻城市的喧囂。", highlights:["自然酒","創意料理","限量座位","夜間氛圍"], image:"https://biki0315.github.io/images/food02.jpg",    mapQuery:"迴回HuiHui餐酒館 瑞芳 水湳洞" },
  { id:3,  category:"美食", name:"甜蜜屋美式餐飲",         lat:25.121641556069903, lng:121.86158413493537, address:"新北市瑞芳區洞頂路155-3號",   phone:"0972-878-580", hours:"週六日 10:00–18:00", description:"隱身於山城中的美式風格輕食店，主打美式漢堡、薯條、奶昔等，份量紮實，口味道地。是登山健行後補充體力的好去處，也適合帶孩子一起前來享用。", highlights:["美式漢堡","親子友善","份量紮實","週末限定"], image:"https://biki0315.github.io/images/food03.jpg", mapQuery:"甜蜜屋 瑞芳 水湳洞 洞頂路" },
  { id:4,  category:"美食", name:"黑炫蔬食音樂咖啡館",             lat:25.121369552006417, lng:121.86141734089111, address:"新北市瑞芳區洞頂路149號",      phone:"0919-437-048", hours:"週四至週日 11:00–17:00", description:"原黑炭礦食堂轉型而來的蔬食音樂咖啡館，保留了礦業時代的工業黑色調與老礦具裝飾，空間充滿個性。以精緻蔬食料理為主軸，搭配現場音樂演出與手沖咖啡，讓每一次造訪都是感官的雙重享受。", highlights:["蔬食料理","現場音樂演出","工業礦業風空間","手沖咖啡"], image:"https://biki0315.github.io/images/food04.jpg", mapQuery:"黑炫蔬食音樂咖啡館 瑞芳 洞頂路149" },
  { id:5,  category:"美食", name:"金水361 META space",     lat:25.122793052280116, lng:121.86072686421016, address:"新北市瑞芳區洞頂路361號",      phone:"",             hours:"依活動時間",    description:"結合藝術展覽、咖啡輕食與數位互動體驗的複合式文創空間，是水湳洞近年最受矚目的新型態場所。空間設計前衛，不定期舉辦藝文展演與體驗工作坊，也提供精選咖啡與輕食。", highlights:["藝文複合空間","數位互動","精選咖啡","需提前預約"], image:"https://biki0315.github.io/images/food05.jpg",   mapQuery:"金水361 META space 瑞芳 洞頂路361" },
  { id:6,  category:"美食", name:"香香茶葉蛋/臭豆腐",         lat:25.12337725757293, lng:121.86101023093221, address:"新北市瑞芳區洞頂路104號",      phone:"",             hours:"週末假日 10:00–17:00", description:"水湳洞山城裡的人氣在地小攤，以香滷茶葉蛋與酥炸臭豆腐為招牌，香氣遠播。茶葉蛋滷汁入味，臭豆腐外酥內嫩，搭配泡菜與特調醬料，是造訪黃金瀑布前後補充體力的絕佳選擇。", highlights:["茶葉蛋","臭豆腐","在地小吃","份量實在"], image:"https://biki0315.github.io/images/food06.jpg",      mapQuery:"香香茶葉蛋/臭豆腐 水湳洞 洞頂路104" },
  { id:7,  category:"美食", name:"About Pizza",            lat:25.1195858738103, lng:121.86154062923683, address:"新北市瑞芳區明里路102號",      phone:"0983-138-555", hours:"週四至週日 11:30–17:00", description:"藏身水湳洞山城巷弄中的低調比薩店，以石窯烘烤的現做比薩著稱，餅皮酥脆、食材新鮮。每款比薩當日現做限量供應。坐在露天座位上，一邊吃著比薩一邊看著海景。", highlights:["石窯比薩","現做限量","食材講究","海景露天座"], image:"https://biki0315.github.io/images/food07.jpg",     mapQuery:"About Pizza 水湳洞 瑞芳 明里路102" },
  { id:8,  category:"美食", name:"非書店",                 lat:25.119289224279793, lng:121.86165839733926, address:"新北市瑞芳區明里路83號",       phone:"02-2496-1811", hours:"週五至週日 10:00–17:00", description:"名叫「非書店」，卻是一間充滿書香氣息的複合式咖啡館。店內以大量書籍、老木傢俱與植栽布置，空間自成一格。提供手沖咖啡、茶飲與手作甜點，適合靜靜坐下來發呆閱讀。", highlights:["書香氛圍","手沖咖啡","手作甜點","週末限定"], image:"https://biki0315.github.io/images/food08.jpg",   mapQuery:"非書店 瑞芳 明里路83" },
  { id:9,  category:"美食", name:"風流咖啡",               lat:25.119121580368002, lng:121.86155412282622, address:"新北市瑞芳區明里路85號",       phone:"0963-249-012", hours:"週六日 10:00–17:00",    description:"名字瀟灑的海景咖啡館，老闆個性豪爽，面海的窗邊位子極受歡迎。以精心調配的各式咖啡飲品為主，偶爾也有老闆自製的小點心。在山城遊走累了，來這裡吹吹海風、喝杯咖啡。", highlights:["海景位子","個性咖啡館","老闆風趣","週末限定"], image:"https://biki0315.github.io/images/food09.jpg",  mapQuery:"風流咖啡 瑞芳 明里路85" },
  { id:10, category:"美食", name:"瀑布隔壁BAR",            lat:25.11909068122184, lng:121.86157806175889, address:"新北市瑞芳區明里路85-1號",    phone:"0958-177-640", hours:"週五至週日 12:00–20:00", description:"顧名思義，這間特色酒吧就緊鄰著黃金瀑布！坐在戶外座位喝酒，瀑布的流水聲就是最天然的背景音樂。酒單以台灣精釀啤酒與調酒為主，不定期有現場音樂演出。", highlights:["瀑布旁飲酒","精釀啤酒","戶外座位","自然背景聲"], image:"https://biki0315.github.io/images/food10.jpg",  mapQuery:"瀑布隔壁BAR 水湳洞 明里路" },
  { id:11, category:"美食", name:"ABOUT CAFE",             lat:25.11901690257452, lng:121.86151232923615, address:"新北市瑞芳區明里路99號",       phone:"0983-138-555", hours:"週四至週日 10:00–17:00", description:"簡約清爽的北歐風格咖啡館，白牆、木桌、大窗，一切都恰到好處。提供精選單品咖啡、拿鐵與各式茶飲，搭配每日現做的糕點輕食。空間寬敞，很適合久坐悠閒敘舊。", highlights:["北歐簡約風","精選咖啡","空間寬敞","適合久坐"], image:"https://biki0315.github.io/images/food11.jpg", mapQuery:"ABOUT CAFE 瑞芳 明里路99" },
  { id:12, category:"美食", name:"正好 CAFE",              lat:25.118846302294276, lng:121.86107195255192, address:"新北市瑞芳區明里路106號",      phone:"0955-952-659", hours:"週六日 09:00–17:00",    description:"店名「正好」，正是這間咖啡館的最好寫照——不大不小的空間正好，咖啡不深不淺正好，食物不多不少正好。老闆親切溫柔，常常和客人話家常，是水湳洞最有人情味的角落。", highlights:["在地人情味","早午餐","老闆親切","山城日常"], image:"https://biki0315.github.io/images/food12.jpg",  mapQuery:"正好CAFE 瑞芳 明里路106" },
  { id:13, category:"美食", name:"萬事如意 Bistro",        lat:25.11887257408066, lng:121.86107994702269, address:"新北市瑞芳區明里路120號",      phone:"02-2496-1909", hours:"週四至週日 12:00–21:00", description:"以吉祥話命名的特色餐廳，菜單融合歐式Bistro與台灣在地食材，創作出令人眼睛一亮的料理。空間布置以台灣傳統吉祥圖案與現代設計交融，獨樹一格。建議提前預約。", highlights:["創意料理","台歐融合","建議預約","特色空間"], image:"https://biki0315.github.io/images/food13.jpg",    mapQuery:"萬事如意Bistro 瑞芳 明里路120" },
  { id:14, category:"美食", name:"山生宅咖啡",             lat:25.12148260999321, lng:121.8682261918182, address:"新北市瑞芳區明里路34號",       phone:"0963-053-454", hours:"週六日 10:00–17:00",    description:"藏身於水湳洞山城老宅中的低調咖啡館，保留了老建築的灰牆磚地與木窗框，充滿歲月沉澱的氣息。以自家烘焙的單品咖啡為主，搭配老闆精心製作的手工甜點。", highlights:["老宅改造","自家烘焙","手工甜點","巷弄隱藏版"], image:"https://biki0315.github.io/images/food14.jpg",  mapQuery:"山生宅咖啡 瑞芳 明里路34" },
  { id:15, category:"美食", name:"玫瑰山城柑仔店",         lat:25.121456901603306, lng:121.86154085807242, address:"新北市瑞芳區洞頂路155-2號",   phone:"",             hours:"不定時開放",    description:"充滿懷舊色彩的老式雜貨店，彷彿走進了台灣早期的柑仔店時光。店內販售各式在地零食、古早味糖果、手工醃製品與特色伴手禮，是水湳洞最有「古早味」的小店。", highlights:["懷舊柑仔店","古早味零食","在地伴手禮","老闆娘說故事"], image:"https://biki0315.github.io/images/food15.jpg", mapQuery:"玫瑰山城柑仔店 瑞芳 水湳洞" },
  { id:16, category:"美食", name:"山下小田",               lat:25.12199611627306, lng:121.86166481610589, address:"新北市瑞芳區洞頂路155-8號",   phone:"02-2496-1588", hours:"週五至週日 10:00–17:00", description:"以田園農家風格為主題的特色餐廳，主張使用在地當令食材，以最簡單的烹調方式呈現食材原味。餐點以現場音樂演出、輕食飯糰與鮮榨果汁為主，清爽健康。", highlights:["在地食材","健康輕食","田園風格","植栽空間"], image:"https://biki0315.github.io/images/food16.jpg", mapQuery:"山下小田 瑞芳 洞頂路155-8" },

  // ── 住宿 ─────────────────────────────────────────────
  { id:1, category:"住宿", name:"Ample Villa民宿",         lat:25.12328918513044, lng:121.86038587464897, address:"新北市瑞芳區洞頂路337號",      phone:"0987-758-888", hours:"入住15:00 / 退房11:00", description:"位於水湳洞山城中的精品民宿，以寬敞舒適的現代設計融入在地山海氛圍。每個房間皆有獨特的設計主題，部分房型可直接欣賞陰陽海景色。提供早餐服務，老闆亦樂於規劃在地行程。", highlights:["海景房型","現代設計","含早餐","老闆導覽建議"], image:"https://biki0315.github.io/images/BB01.jpg", mapQuery:"Ample Villa民宿 瑞芳 洞頂路337" },
  { id:2, category:"住宿", name:"玫瑰山城 Rose Villa",     lat:25.121335344161974, lng:121.86126717586386, address:"新北市瑞芳區洞頂路155-1號",   phone:"02-2496-1818", hours:"入住15:00 / 退房11:00", description:"以玫瑰花為主題的浪漫山城民宿，室內空間以玫瑰粉紅、米白與原木為主調，精緻而溫柔。從民宿可俯瞰陰陽海與山城全景，是浪漫旅行、蜜月旅遊的絕佳選擇。", highlights:["玫瑰主題設計","海景視野","浪漫蜜月首選","細心款待"], image:"https://biki0315.github.io/images/BB02.jpg",  mapQuery:"玫瑰山城Rose Villa 瑞芳 洞頂路155-1" },
  { id:3, category:"住宿", name:"月牙桐海景民宿",          lat:25.121667337940085, lng:121.86203525868346, address:"新北市瑞芳區洞頂路8-1號",     phone:"0929-153-717", hours:"入住15:00 / 退房11:00", description:"與月牙桐海景餐廳位於同一棟建築的海景民宿，清晨醒來拉開窗簾，陰陽海的晨光便映入眼簾。在此過夜，可享受其他日客無法體驗的水湳洞清晨與夜景。", highlights:["獨家海景晨光","夜景體驗","與餐廳同棟","清晨靜謐時光"], image:"https://biki0315.github.io/images/BB03.jpg",   mapQuery:"月牙桐海景民宿 瑞芳 洞頂路8-1" },
  { id:4, category:"住宿", name:"sea cafe民宿",            lat:25.11957098772542, lng:121.86109007771566, address:"新北市瑞芳區明里路209號",      phone:"0932-001-504", hours:"入住15:00 / 退房11:00", description:"結合咖啡館與民宿的複合式住宿，早晨入座民宿的咖啡吧檯，一邊享用咖啡一邊看海，是最愜意的旅行開始。民宿空間以海洋藍白為主色，清新舒適。", highlights:["含早晨咖啡時光","海洋主題設計","複合式空間","需提前預訂"], image:"https://biki0315.github.io/images/BB04.jpg",   mapQuery:"sea cafe民宿 瑞芳 明里路209" },
  { id:5, category:"住宿", name:"應許美地民宿",            lat:25.117685028767603, lng:121.86520913985343, address:"新北市瑞芳區長仁路36號",       phone:"02-2496-1488", hours:"入住15:00 / 退房11:00", description:"以台灣早期生活美學為主題的懷舊風民宿，每個角落都擺放著老物件——黑膠唱片、舊收音機、阿嬤的花布椅墊。民宿主人深愛老東西，樂於分享每件老物背後的故事。", highlights:["懷舊老物布置","台灣記憶主題","老闆說故事","獨特體驗"], image:"https://biki0315.github.io/images/BB05.jpg",  mapQuery:"應許美地民宿 瑞芳 長仁路36" },
  { id:6, category:"住宿", name:"神隱之月",                lat:25.122584901153406, lng:121.86036236051967, address:"新北市瑞芳區洞頂路253號",      phone:"0905-758-660", hours:"入住15:00 / 退房11:00", description:"宛如宮崎駿動畫場景中的神秘民宿，以月亮與山城為主題，空間設計充滿奇幻感。民宿隱身於山城深處，入住後推開窗便是漫天星斗與寧靜山海，適合想要真正「消失」一段時間的旅人。", highlights:["神秘隱居感","月亮主題設計","星空夜景","深度放鬆"], image:"https://biki0315.github.io/images/BB06.jpg", mapQuery:"神隱之月 瑞芳 洞頂路253" },
  { id:7, category:"住宿", name:"十三層民宿",              lat:25.11807343886075, lng:121.86551699014335, address:"新北市瑞芳區長仁路36-2號",    phone:"0980-021-101", hours:"入住15:00 / 退房11:00", description:"以十三層遺址為名，民宿就緊鄰這座台灣最著名的工業遺址。從客房或公共空間，皆可欣賞到十三層遺址的壯闊身影，入夜後打上燈光的遺址更是震撼人心。", highlights:["正對十三層遺址","夜間遺址燈光","絕佳視角","礦業文化氛圍"], image:"https://biki0315.github.io/images/BB07.jpg", mapQuery:"十三層民宿 瑞芳 長仁路36-2" },
  { id:8, category:"住宿", name:"山城背包客棧",              lat:25.12188255701497, lng:121.8611728525473, address:"新北市瑞芳區洞頂路187號",      phone:"0972-258-061", hours:"入住15:00 / 退房11:00", description:"保有老式客棧風格的山城住宿，建築外觀保留了水湳洞老宅的灰牆與紅磚，內部整修得舒適乾淨。老闆待客真誠，熟悉水湳洞的大小角落，可提供第一手的在地旅遊建議。", highlights:["老宅改建","老闆在地知識豐富","適合背包客","真誠款待"], image:"https://biki0315.github.io/images/BB08.jpg", mapQuery:"山城背包客棧 瑞芳 洞頂路187" },
  { id:9, category:"住宿", name:"Mi Casa 我家民宿",        lat:25.118168802913722, lng:121.86744020469212, address:"新北市瑞芳區長仁路22號",       phone:"0932-921-930", hours:"入住15:00 / 退房11:00", description:"「Mi Casa」在西班牙語中意指「我的家」，這間民宿正是將旅人的家帶到了水湳洞山城。空間以溫暖的奶油色與木質為主，像家一樣舒適自在，主人有時還會為旅人烹飪在地早餐。", highlights:["家的溫度","在地早餐","主人熱情","舒適家庭感"], image:"https://biki0315.github.io/images/BB09.jpg",    mapQuery:"Mi Casa我家民宿 瑞芳 長仁路22" },

  // ── 其他 ─────────────────────────────────────────────
  { id:1, category:"其他", name:"萊爾富便利商店",          lat:25.1244555, lng:121.8612283, address:"新北市瑞芳區洞頂路210-4號",   phone:"",             hours:"24小時",        description:"水湳洞山城中的便利商店，提供旅行必需的食物、飲料、雨具、藥品等各類商品。ATM服務也在此提供，是旅人的重要補給站。", highlights:["24小時","ATM服務","旅行補給","山城唯一超商"], image:"https://biki0315.github.io/images/other01.jpg",    mapQuery:"萊爾富 水湳洞 瑞芳 洞頂路" },
  { id:2, category:"其他", name:"水湳洞釣具",              lat:25.1245688, lng:121.86134, address:"新北市瑞芳區洞頂路210-5號",   phone:"02-2496-1075", hours:"09:00–18:00",   description:"服務水湳洞在地釣客的釣具專賣店，販售各式釣竿、魚線、魚鉤、誘餌等釣魚裝備，也提供租借服務。老闆是資深海釣愛好者，可為初次來此的釣客提供專業建議。", highlights:["裝備齊全","在地老闆指引","釣具租借","新手友善"], image:"https://biki0315.github.io/images/other02.jpg",   mapQuery:"水湳洞釣具 瑞芳 洞頂路" },
  { id:3, category:"其他", name:"青雲釣具＋炒麵",            lat:25.1245204, lng:121.8614982, address:"新北市瑞芳區洞頂路210-6號",   phone:"",             hours:"週末假日 10:00–17:00", description:"附設於青雲殿廟旁的老字號臭豆腐攤，現點現炸，外皮酥脆、內餡扎實，搭配爽口的醃漬泡菜與特製醬汁，香氣瀰漫整條街。價格實惠，是到水湳洞一定要試試的在地風味。", highlights:["廟口老攤","現炸臭豆腐","在地風味","銅板美食"], image:"https://biki0315.github.io/images/other03.jpg",   mapQuery:"青雲釣具 瑞芳 水湳洞" },
  { id:4, category:"其他", name:"Fun肆潛水",             lat:25.1239918, lng:121.8622874, address:"新北市瑞芳區洞頂路136-6號",   phone:"0952-431-617", hours:"依季節與天氣，請電話預約", description:"提供潛水體驗、潛水教學與水下攝影的在地潛水業者。水湳洞附近海域因礦物質影響，水色獨特，水下生態也因此形成特殊的環境，是全台少見的礦業海域潛水體驗。", highlights:["礦業海域特色潛水","初學者課程","水下攝影","專業安全帶領"], image:"https://biki0315.github.io/images/other04.jpg",    mapQuery:"Fun肆潛水 水湳洞 瑞芳" },
  { id:5, category:"其他", name:"海港百年柑仔店",            lat:25.1219653, lng:121.8678513, address:"新北市瑞芳區明里路90號",       phone:"",             hours:"週末假日 09:00–17:00", description:"兼賣新鮮海產與伴手禮的特色小店，水產品來自水湳洞在地漁港的當日漁獲，新鮮度有保障。伴手禮區販售各式海味製品——魚乾、海苔、海鮮醬等，包裝精美。", highlights:["在地漁獲","海味伴手禮","現煮小食","新鮮保證"], image:"https://biki0315.github.io/images/other05.jpg", mapQuery:"海港百年柑仔店 水湳洞 明里路" },
  { id:6, category:"其他", name:"姜太公道場",              lat:25.124987790037505, lng:121.86234467765881, address:"新北市瑞芳區黃金瀑布旁公車站", phone:"",            hours:"公車依班次運行", description:"緊鄰黃金瀑布旁的彩繪藝術公車站，整座站體以黃金礦業為主題，結合礦工意象與鮮豔色彩進行彩繪，本身即是一件大型戶外藝術裝置，是水湳洞又一個不可錯過的打卡地標。", highlights:["最美公車站","藝術彩繪","礦業主題","免費打卡"], image:"https://biki0315.github.io/images/other06.jpg",   mapQuery:"姜太公道場 瑞芳 水湳洞" },
];

// ══════════════════════════════════════════════════════
//  CONFIG
// ══════════════════════════════════════════════════════
const catConfig = {
  "景點": { color:"#2C7BB6", cls:"blue",   markerCls:"marker-blue"   },
  "美食": { color:"#3A9E6A", cls:"green",  markerCls:"marker-green"  },
  "住宿": { color:"#E07A2F", cls:"orange", markerCls:"marker-orange" },
  "其他": { color:"#C9A227", cls:"yellow", markerCls:"marker-yellow" },
};

// ══════════════════════════════════════════════════════
//  VIEW SWITCHING
// ══════════════════════════════════════════════════════
const navTabs  = document.querySelectorAll(".nav-tab");
const views    = { history:"view-history", map:"view-map", food:"view-food", stay:"view-stay", others:"view-others", events:"view-events", video:"view-video", links:"view-links" };
let   mapReady = false;

navTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    navTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const view = tab.dataset.view;

    Object.values(views).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle("hidden", id !== views[view]);
    });

    if (view === "map"    && !mapReady) { initMap(); mapReady = true; }
    if (view === "food")   buildGrid("美食");
    if (view === "stay")   buildGrid("住宿");
    if (view === "others") buildGrid("其他");
    if (view === "events") initEventsPage();
    if (view === "video")  setTimeout(initVideoPage, 50);

    // Close mobile sidebar
    document.getElementById("sidebar")?.classList.remove("open");
  });
});

// "開始探索地圖" button in history page
document.getElementById("goToMap")?.addEventListener("click", () => {
  document.querySelector('[data-view="map"]').click();
});

// ══════════════════════════════════════════════════════
//  MAP INIT (lazy)
// ══════════════════════════════════════════════════════
const markerMap = {};

function initMap() {
  const map = L.map("map", { center:[25.1120, 121.8680], zoom:15 });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom:19,
  }).addTo(map);

  // Markers + sidebar
  spots.forEach(spot => {
    const key = `${spot.category}-${spot.id}`;
    const cfg = catConfig[spot.category];

    const icon = L.divIcon({
      html: `<div class="custom-marker ${cfg.markerCls}"><div class="marker-pin"><span class="marker-pin-inner">${spot.id}</span></div><div class="marker-shadow"></div></div>`,
      className:"", iconSize:[30,36], iconAnchor:[15,36], popupAnchor:[0,-38],
    });

    const marker = L.marker([spot.lat, spot.lng], { icon })
      .addTo(map)
      .bindPopup(`<div class="mini-popup"><span class="mini-popup-badge ${cfg.cls}">${spot.id}</span><div><div class="mini-popup-name">${spot.name}</div><div class="mini-popup-hint">點擊查看詳情 →</div></div></div>`,
        { maxWidth:210, closeButton:false });

    marker.on("click", () => {
      marker.openPopup();
      map.flyTo([spot.lat, spot.lng], 17, { duration:.8 });
      setTimeout(() => openPanel(spot), 300);
      syncActive(key);
    });

    markerMap[key] = marker;

    // Sidebar list
    const list = document.getElementById(`list-${spot.category}`);
    if (!list) return;
    const li = document.createElement("li");
    li.className = "spot-item"; li.dataset.cat = spot.category; li.dataset.key = key;
    li.innerHTML = `
      <div class="spot-thumb-wrap">
        <img class="spot-thumb" src="${spot.image}" alt="${spot.name}" loading="lazy" onerror="this.style.background='#EDE8DC';this.style.display='block'"/>
        <span class="spot-num">${spot.id}</span>
      </div>
      <div class="spot-text">
        <div class="spot-name">${spot.name}</div>
        <div class="spot-cat-label">${spot.category}</div>
      </div>`;
    li.addEventListener("click", () => {
      map.flyTo([spot.lat, spot.lng], 17, { duration:1 });
      setTimeout(() => { marker.openPopup(); openPanel(spot); }, 800);
      syncActive(key);
      if (window.innerWidth <= 768) document.getElementById("sidebar").classList.remove("open");
    });
    list.appendChild(li);
  });

  // Section counts
  ["景點","美食","住宿","其他"].forEach(cat => {
    const sec = document.getElementById(`section-${cat}`);
    const cnt = sec?.querySelectorAll(".spot-item").length;
    if (sec && cnt) sec.querySelector(".section-count").textContent = cnt;
  });

  // Sidebar filter
  document.querySelectorAll(".sf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sf-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      document.querySelectorAll(".spot-item").forEach(item =>
        item.classList.toggle("hidden-by-filter", cat !== "all" && item.dataset.cat !== cat));
      ["景點","美食","住宿","其他"].forEach(c =>
        document.getElementById(`section-${c}`)?.classList.toggle("hidden-by-filter", cat !== "all" && c !== cat));
      spots.forEach(spot => {
        const m = markerMap[`${spot.category}-${spot.id}`]; if (!m) return;
        (cat === "all" || spot.category === cat)
          ? (map.hasLayer(m) || map.addLayer(m))
          : (map.hasLayer(m) && map.removeLayer(m));
      });
    });
  });

  // Detail panel close
  document.getElementById("dpClose").addEventListener("click", closePanel);
  document.getElementById("dpOverlay").addEventListener("click", closePanel);
  map.on("click", closePanel);

  // Locate
  document.getElementById("locateBtn").addEventListener("click", () => {
    if (!navigator.geolocation) { alert("您的裝置不支援定位功能"); return; }
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude:lat, longitude:lng } = pos.coords;
      const icon = L.divIcon({
        html:`<div style="width:14px;height:14px;border-radius:50%;background:#2E4A7A;border:3px solid #fff;box-shadow:0 0 0 5px rgba(46,74,122,.2)"></div>`,
        className:"", iconSize:[14,14], iconAnchor:[7,7],
      });
      L.marker([lat,lng],{icon}).addTo(map).bindPopup("<b>📍 您在這裡</b>").openPopup();
      map.flyTo([lat,lng],16,{duration:1.2});
    }, () => alert("無法取得位置，請確認已允許定位權限。"));
  });

  // Mobile sidebar
  document.getElementById("menuToggle").addEventListener("click", () =>
    document.getElementById("sidebar").classList.toggle("open"));
}

// ── Detail Panel ────────────────────────────────────
function openPanel(spot) {
  const cfg = catConfig[spot.category];
  document.getElementById("dpImg").src = spot.image;
  document.getElementById("dpImg").alt = spot.name;
  document.getElementById("dpName").textContent = spot.name;
  document.getElementById("dpBadge").textContent = `${spot.category} · No.${spot.id}`;

  document.getElementById("dpTagRow").innerHTML =
    `<span class="dp-tag dp-tag-cat-${spot.category}">${spot.category}</span><span class="dp-tag dp-tag-num">No. ${spot.id}</span>`;

  const rows = [];
  if (spot.address) rows.push({ icon: iconPin(),   label:"地址", value: spot.address });
  if (spot.hours)   rows.push({ icon: iconClock(),  label:"時間", value: spot.hours });
  document.getElementById("dpInfoTable").innerHTML = rows.map(r =>
    `<div class="dp-info-row"><div class="dp-info-icon">${r.icon}</div><div class="dp-info-label">${r.label}</div><div class="dp-info-value">${r.value}</div></div>`).join("");

  document.getElementById("dpDesc").textContent = spot.description;

  const hl = document.getElementById("dpHighlights");
  hl.innerHTML = (spot.highlights||[]).map(h=>`<span class="dp-highlight-chip">${h}</span>`).join("");

  const q = encodeURIComponent(spot.mapQuery || spot.name);
  document.getElementById("dpMapLink").href = `https://www.google.com/maps/search/${q}/@${spot.lat},${spot.lng},17z`;

  document.getElementById("detailPanel").classList.add("open");
  document.getElementById("dpOverlay").classList.add("show");
  if (window.innerWidth > 900) document.getElementById("map").classList.add("panel-open");
}

function closePanel() {
  document.getElementById("detailPanel").classList.remove("open");
  document.getElementById("dpOverlay").classList.remove("show");
  document.getElementById("map").classList.remove("panel-open");
  document.querySelectorAll(".spot-item").forEach(el=>el.classList.remove("active"));
}

function syncActive(key) {
  document.querySelectorAll(".spot-item").forEach(el=>el.classList.remove("active"));
  const li = document.querySelector(`.spot-item[data-key="${key}"]`);
  if (li) { li.classList.add("active"); li.scrollIntoView({behavior:"smooth",block:"nearest"}); }
}

function iconPin()   { return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`; }
function iconPhone() { return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.38 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`; }
function iconClock() { return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`; }

// ══════════════════════════════════════════════════════
//  藝文活動（AI 自動搜尋）
// ══════════════════════════════════════════════════════
let eventsLoaded = false;

function initEventsPage() {
  if (eventsLoaded) return;
  eventsLoaded = true;

  const now      = new Date();
  const year     = now.getFullYear();
  const month    = now.getMonth() + 1;
  const monthStr = `${year}年${month}月`;
  const label    = document.getElementById("eventsMonthLabel");
  if (label) label.textContent = monthStr;

  // 更新 fallback 搜尋連結（嚴格限定水金九地區）
  const q = encodeURIComponent(`水湳洞 OR 金瓜石 OR 九份 ${year}年${month}月 藝文活動 展覽`);
  const gl = document.getElementById("eventsGoogleLink");
  const fl = document.getElementById("eventsFbLink");
  if (gl) gl.href = `https://www.google.com/search?q=${q}`;
  if (fl) fl.href = `https://www.facebook.com/search/events/?q=${encodeURIComponent(`水金九 九份 金瓜石 水湳洞 藝文 ${year}`)}`;


  // 重新搜尋按鈕
  document.getElementById("eventsRefreshBtn")?.addEventListener("click", () => {
    eventsLoaded = false;
    document.getElementById("eventsGrid").innerHTML = "";
    document.getElementById("eventsLoading").classList.remove("hidden");
    document.getElementById("eventsFallback").classList.add("hidden");
    setTimeout(initEventsPage, 100);
  });

  fetchEvents(year, month);
}

function fetchEvents(year, month) {
  const loading  = document.getElementById("eventsLoading");
  const grid     = document.getElementById("eventsGrid");
  const fallback = document.getElementById("eventsFallback");

  // 台灣文化部開放資料 API（展演活動）
  const apiUrl = `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`;

  fetch(apiUrl)
    .then(r => { if (!r.ok) throw new Error("API error"); return r.json(); })
    .then(data => {
      const events = Array.isArray(data) ? data : (data.list || data.result || []);

      // ── 嚴格限定「水金九」地區：水湳洞、金瓜石、九份、水金九
      // 只要任一欄位明確出現這四個關鍵字之一才收錄，其他地區一律排除
      const REGION_STRICT = /水湳洞|金瓜石|九份|水金九/;

      const filtered = events.filter(ev => {
        const allText = [
          ev.title || "",
          ev.showInfo?.[0]?.location     || ev.location     || "",
          ev.showInfo?.[0]?.locationName || ev.locationName || "",
          ev.descriptionFilterHtml       || ev.description  || "",
        ].join(" ");
        return REGION_STRICT.test(allText);
      }).slice(0, 12);

      loading.classList.add("hidden");

      if (filtered.length === 0) {
        // 無精確結果 → 顯示新北近期展覽
        showFallbackWithSearch(fallback, year, month);
        return;
      }

      filtered.forEach(ev => {
        const title    = ev.title || "活動";
        const loc      = ev.showInfo?.[0]?.locationName || ev.locationName || "";
        const dateStr  = ev.showInfo?.[0]?.time || ev.startDate || "";
        const imgUrl   = ev.imageUrl || ev.img || "";
        const url      = ev.webSales || ev.sourceWebPromote || "#";
        const price    = ev.showInfo?.[0]?.price || ev.price || "免費 / 請洽主辦";

        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          ${imgUrl ? `<img class="event-card-img" src="${imgUrl}" alt="${title}" loading="lazy" onerror="this.style.display='none'"/>` : `<div class="event-card-img event-card-img-placeholder"></div>`}
          <div class="event-card-body">
            <div class="event-card-badge">藝文活動</div>
            <div class="event-card-title">${title}</div>
            ${loc  ? `<div class="event-card-meta">${iconPin()}${loc}</div>` : ""}
            ${dateStr ? `<div class="event-card-meta">${iconClock()}${dateStr}</div>` : ""}
            ${price ? `<div class="event-card-meta event-card-price">🎫 ${price}</div>` : ""}
          </div>
          <div class="event-card-footer">
            <a href="${url}" target="_blank" rel="noopener" class="event-card-btn">查看詳情 →</a>
          </div>`;
        grid.appendChild(card);
      });

      // 補充搜尋入口
      const more = document.createElement("div");
      more.className = "events-more-row";
      more.innerHTML = `<span class="events-more-label">找更多活動：</span>
        <a href="https://www.google.com/search?q=${encodeURIComponent(`水湳洞 OR 金瓜石 OR 九份 ${year}年${month}月 藝文活動 展覽`)}" target="_blank" class="events-search-link events-search-link-google">Google 搜尋</a>
        <a href="https://www.newtaipeitourism.net.tw/" target="_blank" class="events-search-link events-search-link-tourism">新北觀光</a>`;
      grid.appendChild(more);
    })
    .catch(() => {
      loading.classList.add("hidden");
      showFallbackWithSearch(fallback, year, month);
    });
}

function showFallbackWithSearch(fallback, year, month) {
  fallback.classList.remove("hidden");
  const q = encodeURIComponent(`水湳洞 ${year}年${month}月 藝文活動 展覽`);
  const gl = document.getElementById("eventsGoogleLink");
  if (gl) gl.href = `https://www.google.com/search?q=${q}`;
}

// ══════════════════════════════════════════════════════
//  CARD GRIDS (餐廳 / 住宿 / 其他)
// ══════════════════════════════════════════════════════
function buildGrid(cat) {
  const gridId = `grid-${cat}`;
  const grid = document.getElementById(gridId);
  if (!grid || grid.children.length > 0) return; // already built

  const cfg = catConfig[cat];
  spots.filter(s => s.category === cat).forEach(spot => {
    const q = encodeURIComponent(spot.mapQuery || spot.name);
    const mapUrl = `https://www.google.com/maps/search/${q}/@${spot.lat},${spot.lng},17z`;
    const hours = spot.hours ? `<div class="spot-card-hours">🕐 ${spot.hours}</div>` : "";

    const card = document.createElement("div");
    card.className = "spot-card";
    card.innerHTML = `
      <img class="spot-card-img" src="${spot.image}" alt="${spot.name}" loading="lazy" onerror="this.style.background='#EDE8DC'"/>
      <div class="spot-card-body">
        <div class="spot-card-meta">
          <div class="spot-card-num" style="background:${cfg.color}">${spot.id}</div>
          <span class="spot-card-cat">${spot.category}</span>
        </div>
        <div class="spot-card-name">${spot.name}</div>
        ${spot.address ? `<div class="spot-card-addr">${spot.address}${spot.phone ? `　${spot.phone}` : ""}</div>` : ""}
        ${hours}
        <div class="spot-card-desc-wrap">
          <div class="spot-card-desc">${spot.description}</div>
          <button class="spot-card-readmore" aria-label="展開說明">閱讀全文 ↓</button>
        </div>
        <div class="spot-card-chips">${(spot.highlights||[]).slice(0,3).map(h=>`<span class="spot-card-chip">${h}</span>`).join("")}</div>
      </div>
      <div class="spot-card-footer">
        <a href="${mapUrl}" target="_blank" rel="noopener" class="spot-card-btn spot-card-btn-map">Google Maps 導航</a>
      </div>`;

    // 判斷是否真的被截斷，若未截斷則隱藏按鈕
    grid.appendChild(card);
    const descEl = card.querySelector(".spot-card-desc");
    const btn    = card.querySelector(".spot-card-readmore");
    requestAnimationFrame(() => {
      if (descEl.scrollHeight <= descEl.clientHeight + 2) {
        btn.style.display = "none";
      } else {
        btn.addEventListener("click", () => {
          const expanded = descEl.classList.toggle("expanded");
          btn.textContent = expanded ? "收起 ↑" : "閱讀全文 ↓";
          btn.classList.toggle("expanded", expanded);
        });
      }
    });
  });
}

// ══════════════════════════════════════════════════════
//  影音遊記資料
//  要新增影片：複製一個物件，填入 YouTube 影片 ID（網址中 ?v= 後面的部分）
//  例：https://www.youtube.com/watch?v=XXXXXXXXXXX → id: "XXXXXXXXXXX"
// ══════════════════════════════════════════════════════
const videos = [
  {
    id: "Bu-0opney68",
    title: "瑞芳水湳洞漫遊濂洞里小山城，以不同的視角遠眺十三層遺址以及那山海美景",
    channel: "Aiky一點GO瘋旅行",
    channelInitial: "A",
    date: "",
    views: "",
    desc: "跟著 Aiky 用不同的視角漫遊水湳洞濂洞里山城，從隱密的小徑與高處眺望十三層遺址的壯闊輪廓，以及山海交融的絕美景色，帶你看見水湳洞鮮為人知的一面。",
    featured: true,
    tags: ["山城漫遊", "十三層遺址"],
  },
];

// ══════════════════════════════════════════════════════
//  影音頁面 JS
// ══════════════════════════════════════════════════════
function initVideoPage() {
  const carousel = document.getElementById('videoCarousel');
  const dots = document.getElementById('carouselDots');
  const grid = document.getElementById('videoGrid');
  if (!carousel || carousel.dataset.built) return;
  carousel.dataset.built = '1';

  const featured = videos.filter(v => v.featured);
  let current = 0;

  // Build carousel slides
  featured.forEach((v, i) => {
    const thumb = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
    const url = `https://www.youtube.com/watch?v=${v.id}`;
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `
      <div class="carousel-card" onclick="window.open('${url}','_blank')">
        <div class="carousel-thumb-wrap">
          <img class="carousel-thumb" src="${thumb}" alt="${v.title}"
            onerror="this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'"/>
          <div class="carousel-play">
            <svg viewBox="0 0 24 24" width="52" height="52" fill="rgba(255,255,255,.92)"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/><path d="M10 8l6 4-6 4V8z" fill="#fff"/></svg>
          </div>
          <div class="carousel-badge">精選推薦</div>
        </div>
        <div class="carousel-info">
          <div>
            <div class="carousel-channel">
              <div class="carousel-channel-icon">${v.channelInitial}</div>
              <span class="carousel-channel-name">${v.channel}</span>
            </div>
            <div class="carousel-title">${v.title}</div>
            <div class="carousel-desc">${v.desc}</div>
          </div>
          <div>
            <div class="carousel-meta">
              <span>▶ ${v.views} 次觀看</span>
              <span>${v.date}</span>
              ${v.tags.map(t=>`<span>#${t}</span>`).join('')}
            </div>
            <a class="carousel-watch-btn" href="${url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              觀看影片
            </a>
          </div>
        </div>
      </div>`;
    carousel.appendChild(slide);

    // dot
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i===0?' active':'');
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  function goTo(n) {
    current = (n + featured.length) % featured.length;
    carousel.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d,i) =>
      d.classList.toggle('active', i===current));
  }

  // Hide arrows & dots when only one slide
  if (featured.length <= 1) {
    const prev = document.getElementById('carouselPrev');
    const next = document.getElementById('carouselNext');
    if (prev) prev.style.display = 'none';
    if (next) next.style.display = 'none';
    dots.style.display = 'none';
  } else {
    document.getElementById('carouselPrev').addEventListener('click', () => goTo(current - 1));
    document.getElementById('carouselNext').addEventListener('click', () => goTo(current + 1));
    let timer = setInterval(() => goTo(current + 1), 6000);
    carousel.closest('.video-carousel-wrap').addEventListener('mouseenter', () => clearInterval(timer));
    carousel.closest('.video-carousel-wrap').addEventListener('mouseleave', () => {
      timer = setInterval(() => goTo(current + 1), 6000);
    });
  }

  // Build all-videos grid
  videos.forEach(v => {
    const thumb = `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;
    const url = `https://www.youtube.com/watch?v=${v.id}`;
    const card = document.createElement('a');
    card.className = 'video-card';
    card.href = url; card.target = '_blank'; card.rel = 'noopener';
    card.innerHTML = `
      <div class="video-card-thumb-wrap">
        <img class="video-card-thumb" src="${thumb}" alt="${v.title}"
          onerror="this.style.background='#2a2a2a'"/>
        <div class="video-card-play">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,.85)"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/><path d="M10 8l6 4-6 4V8z" fill="#fff"/></svg>
        </div>
      </div>
      <div class="video-card-body">
        <div class="video-card-channel">${v.channel} ${v.featured?'· 精選':''}
        </div>
        <div class="video-card-title">${v.title}</div>
        <div class="video-card-meta">
          <span>▶ ${v.views}</span>
          <span>${v.date}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════════════
//  山城故事頁面
// ══════════════════════════════════════════════════════
const STORY_KEY = "snd_stories_v1";

function loadStories() {
  try {
    return JSON.parse(localStorage.getItem(STORY_KEY) || "[]");
  } catch(e) { return []; }
}
function saveStories(arr) {
  localStorage.setItem(STORY_KEY, JSON.stringify(arr));
}

const STORY_TAGS = ["礦業歷史","山城日常","美食探訪","住宿體驗","自然奇景","文化藝術","旅行攻略","人物故事"];

let storyFilter = "全部";
let storyEditId = null; // null=new, id=edit

function initStoryPage() {
  const page = document.getElementById("storyPage");
  if (!page || page.dataset.built) return;
  page.dataset.built = "1";

  page.innerHTML = `
    <div class="story-header">
      <div class="story-header-left">
        <p class="story-header-kana">ものがたり</p>
        <h2 class="story-header-title">山城故事</h2>
        <p class="story-header-sub">用文字記錄水湳洞的每一個角落與人情</p>
      </div>
      <button class="story-write-btn" id="storyWriteBtn">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        寫一篇故事
      </button>
    </div>

    <div class="story-filter-bar" id="storyFilterBar"></div>

    <div class="story-grid" id="storyGrid"></div>

    <!-- Reader overlay -->
    <div class="story-reader-overlay" id="storyReaderOverlay">
      <div class="story-reader" id="storyReader">
        <button class="story-reader-close" id="storyReaderClose">✕</button>
        <div id="storyReaderContent"></div>
      </div>
    </div>

    <!-- Editor modal -->
    <div class="story-editor-overlay" id="storyEditorOverlay">
      <div class="story-editor-modal">
        <div class="story-editor-head">
          <h3 id="storyEditorTitle">寫一篇故事</h3>
          <button class="story-editor-close-btn" id="storyEditorCloseBtn">✕</button>
        </div>
        <div class="story-editor-form">
          <div class="story-form-group">
            <label class="story-form-label">標題 *</label>
            <input class="story-form-input" id="sfTitle" placeholder="例：礦工記憶裡的黃金歲月" maxlength="60"/>
          </div>
          <div class="story-form-group">
            <label class="story-form-label">分類標籤</label>
            <select class="story-form-select" id="sfTag">
              ${STORY_TAGS.map(t => `<option>${t}</option>`).join("")}
            </select>
          </div>
          <div class="story-form-group">
            <label class="story-form-label">封面圖片（貼上圖片網址，可留空）</label>
            <input class="story-form-input" id="sfCover" placeholder="https://i.imgur.com/xxx.jpg"/>
            <p class="story-form-hint">支援 Imgur、Google 相簿等直連圖片網址</p>
          </div>
          <div class="story-form-group">
            <label class="story-form-label">作者名稱（可留空）</label>
            <input class="story-form-input" id="sfAuthor" placeholder="例：洞頂路老居民"/>
          </div>
          <div class="story-form-group">
            <label class="story-form-label">故事內文 *</label>
            <textarea class="story-form-textarea" id="sfContent" placeholder="在這裡寫下你的故事…

可以直接換行，文字會自動排版。"></textarea>
          </div>
        </div>
        <div class="story-editor-footer">
          <button class="story-cancel-btn" id="storyCancelBtn">取消</button>
          <button class="story-save-btn" id="storySaveBtn">發布故事</button>
        </div>
      </div>
    </div>`;

  // Filter bar
  buildStoryFilterBar();
  renderStoryGrid();

  // Bindings
  document.getElementById("storyWriteBtn").addEventListener("click", () => openStoryEditor(null));
  document.getElementById("storyEditorCloseBtn").addEventListener("click", closeStoryEditor);
  document.getElementById("storyCancelBtn").addEventListener("click", closeStoryEditor);
  document.getElementById("storySaveBtn").addEventListener("click", saveStory);
  document.getElementById("storyReaderClose").addEventListener("click", closeStoryReader);
  document.getElementById("storyReaderOverlay").addEventListener("click", e => {
    if (e.target === document.getElementById("storyReaderOverlay")) closeStoryReader();
  });
}

function buildStoryFilterBar() {
  const bar = document.getElementById("storyFilterBar");
  if (!bar) return;
  const stories = loadStories();
  const usedTags = ["全部", ...new Set(stories.map(s => s.tag).filter(Boolean))];
  bar.innerHTML = usedTags.map(t =>
    `<button class="story-filter-btn${t===storyFilter?' active':''}" data-tag="${t}">${t}</button>`
  ).join("") + (stories.length > 0 ? `<span style="margin-left:auto;font-size:11.5px;color:var(--ink-faint)">${stories.length} 篇</span>` : "");
  bar.querySelectorAll(".story-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      storyFilter = btn.dataset.tag;
      buildStoryFilterBar();
      renderStoryGrid();
    });
  });
}

function renderStoryGrid() {
  const grid = document.getElementById("storyGrid");
  if (!grid) return;
  let stories = loadStories();
  if (storyFilter !== "全部") stories = stories.filter(s => s.tag === storyFilter);
  stories = stories.slice().reverse(); // newest first

  grid.innerHTML = "";

  if (stories.length === 0) {
    grid.innerHTML = `<div class="story-empty">
      <p style="font-size:32px;margin-bottom:12px;font-family:'Shippori Mincho',serif">山城等你說故事</p>
      <p>還沒有任何文章<br>點右上角「寫一篇故事」開始吧</p>
    </div>`;
    return;
  }

  stories.forEach(s => {
    const excerpt = s.content.replace(/\n+/g, " ").slice(0, 120) + (s.content.length > 120 ? "…" : "");
    const card = document.createElement("div");
    card.className = "story-card";
    card.dataset.id = s.id;
    const coverHtml = s.cover
      ? `<img class="story-card-cover" src="${s.cover}" alt="${s.title}" onerror="this.outerHTML='<div class=\\"story-card-cover-placeholder\\">山</div>'">`
      : `<div class="story-card-cover-placeholder">山</div>`;
    card.innerHTML = `
      <div class="story-card-inner">
        ${coverHtml}
        <div class="story-card-body">
          <div class="story-card-meta">
            ${s.tag ? `<span class="story-card-tag">${s.tag}</span>` : ""}
            <span class="story-card-date">${s.date}</span>
            ${s.author ? `<span class="story-card-author">· ${s.author}</span>` : ""}
          </div>
          <div class="story-card-title">${s.title}</div>
          <div class="story-card-excerpt">${excerpt}</div>
          <div class="story-card-actions">
            <button class="story-card-edit-btn" data-id="${s.id}">✏ 編輯</button>
            <button class="story-card-del-btn" data-id="${s.id}">刪除</button>
          </div>
        </div>
      </div>`;

    // Click to read
    card.querySelector(".story-card-inner").addEventListener("click", e => {
      if (e.target.classList.contains("story-card-edit-btn") ||
          e.target.classList.contains("story-card-del-btn")) return;
      openStoryReader(s);
    });
    card.querySelector(".story-card-edit-btn").addEventListener("click", () => openStoryEditor(s));
    card.querySelector(".story-card-del-btn").addEventListener("click", () => {
      if (confirm(`確定刪除「${s.title}」？`)) {
        let arr = loadStories().filter(x => x.id !== s.id);
        saveStories(arr);
        buildStoryFilterBar();
        renderStoryGrid();
      }
    });

    grid.appendChild(card);
  });
}

function openStoryEditor(story) {
  storyEditId = story ? story.id : null;
  document.getElementById("storyEditorTitle").textContent = story ? "編輯故事" : "寫一篇故事";
  document.getElementById("sfTitle").value   = story ? story.title   : "";
  document.getElementById("sfTag").value     = story ? (story.tag || STORY_TAGS[0]) : STORY_TAGS[0];
  document.getElementById("sfCover").value   = story ? (story.cover  || "") : "";
  document.getElementById("sfAuthor").value  = story ? (story.author || "") : "";
  document.getElementById("sfContent").value = story ? story.content : "";
  document.getElementById("storyEditorOverlay").classList.add("open");
}

function closeStoryEditor() {
  document.getElementById("storyEditorOverlay").classList.remove("open");
}

function saveStory() {
  const title   = document.getElementById("sfTitle").value.trim();
  const content = document.getElementById("sfContent").value.trim();
  if (!title)   { alert("請填寫標題");   return; }
  if (!content) { alert("請填寫故事內文"); return; }

  const arr = loadStories();
  const today = new Date().toISOString().slice(0,10);

  if (storyEditId) {
    const idx = arr.findIndex(s => s.id === storyEditId);
    if (idx !== -1) {
      arr[idx] = { ...arr[idx],
        title, content,
        tag:    document.getElementById("sfTag").value,
        cover:  document.getElementById("sfCover").value.trim(),
        author: document.getElementById("sfAuthor").value.trim(),
      };
    }
  } else {
    arr.push({
      id:      Date.now().toString(),
      title, content,
      tag:    document.getElementById("sfTag").value,
      cover:  document.getElementById("sfCover").value.trim(),
      author: document.getElementById("sfAuthor").value.trim(),
      date:   today,
    });
  }
  saveStories(arr);
  closeStoryEditor();
  buildStoryFilterBar();
  renderStoryGrid();
  storyEditId = null;
}

function openStoryReader(s) {
  const coverHtml = s.cover
    ? `<img class="story-reader-cover" src="${s.cover}" alt="${s.title}" onerror="this.outerHTML='<div class=\\"story-reader-cover-placeholder\\">山</div>'">`
    : `<div class="story-reader-cover-placeholder">山</div>`;

  const paragraphs = s.content.split(/\n\n+/).map(p => `<p>${p.replace(/\n/g,"<br>")}</p>`).join("");

  document.getElementById("storyReaderContent").innerHTML = `
    ${coverHtml}
    <div class="story-reader-body">
      <div class="story-reader-meta">
        ${s.tag ? `<span class="story-reader-tag">${s.tag}</span>` : ""}
        <span class="story-reader-date">${s.date}</span>
        ${s.author ? `<span class="story-reader-author">· ${s.author}</span>` : ""}
      </div>
      <h1 class="story-reader-title">${s.title}</h1>
      <div class="story-reader-content">${paragraphs}</div>
    </div>`;

  document.getElementById("storyReaderOverlay").classList.add("open");
  document.getElementById("storyReaderOverlay").scrollTop = 0;
}

function closeStoryReader() {
  document.getElementById("storyReaderOverlay").classList.remove("open");
}
