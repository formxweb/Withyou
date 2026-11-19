/* With You Coffee House — menü verisi (tek kaynak: ana site + QR menü).
   Kaynak: işletmenin Yemeksepeti menüsü, Kasım 2026. Fiyatlar Yemeksepeti liste fiyatı (TL);
   kafe içi fiyatlarla işletmeden doğrulanmalı.
   img: assets/menu/<img>-s.webp ve -l.webp dosyaları. ozel: With You'ya özel tarif. */
window.WY_FIYAT_GOSTER = true;
window.WY_MENU = [
  { k: "sicak-kahve", ad: "Sıcak kahveler", urunler: [
    { ad: "With You Latte", acik: "Espresso, süt, kurabiye şurubu, süt kreması", fiyat: 195, img: "with-you-latte", ozel: true },
    { ad: "Cafe Miel", acik: "Espresso, süt, tereyağı, bal", fiyat: 210, img: "cafe-miel", ozel: true },
    { ad: "Latte", acik: "Single espresso, süt, süt kreması", fiyat: 185, img: "latte" },
    { ad: "Cappuccino", acik: "Espresso, süt, süt köpüğü", fiyat: 200, img: "cappuccino" },
    { ad: "Flat White", acik: "Double espresso, süt", fiyat: 190, img: "flat-white" },
    { ad: "Cortado", acik: "Espresso, az sıcak süt", fiyat: 175, img: "cortado" },
    { ad: "Americano", acik: "Double espresso, sıcak su", fiyat: 175, img: "americano" },
    { ad: "Red Eye", acik: "Filtre kahve, espresso", fiyat: 205, img: "red-eye" },
    { ad: "Espresso", acik: "Motion espresso çekirdeği", fiyat: 115, img: "espresso" },
    { ad: "Double Espresso", acik: "Motion 18 gr espresso çekirdeği", fiyat: 130, img: "double-espresso" },
    { ad: "White Chocolate Mocha", acik: "Espresso, beyaz çikolata sos, süt", fiyat: 220, img: "white-mocha" },
    { ad: "Salepresso", acik: "Salep, espresso", fiyat: 205, img: "salepresso" },
    { ad: "Affogato", acik: "Vanilyalı dondurma üzerine sıcak espresso", fiyat: 210, img: "affogato" },
    { ad: "Salted Caramel Latte", acik: "Espresso, tuzlu karamel sos, süt, krema, karamel sos", fiyat: 195 }
  ]},
  { k: "soguk-kahve", ad: "Soğuk kahveler", urunler: [
    { ad: "Iced With You Latte", acik: "Latte, kurabiye şurubu", fiyat: 200, img: "iced-with-you-latte", ozel: true },
    { ad: "Espresso Chips Speculoos", acik: "Lotus bisküvisi, karamel, buz, kahve çekirdekleri", fiyat: 250, img: "speculoos" },
    { ad: "Iced Americano", acik: "18 gr double espresso, buz, su", fiyat: 180, img: "iced-americano" },
    { ad: "Iced Coffee Latte", acik: "Espresso, süt, buz, süt kreması", fiyat: 190, img: "iced-latte" },
    { ad: "Iced Salted Caramel Latte", acik: "Latte, salted karamel şurubu", fiyat: 200, img: "iced-salted-caramel" },
    { ad: "Iced White Chocolate Mocha", acik: "Espresso, buz, süt, beyaz çikolata sosu", fiyat: 225, img: "iced-white-mocha" }
  ]},
  { k: "demleme", ad: "Demleme", urunler: [
    { ad: "V60", acik: "Sıcak servis edilir", fiyat: 200, img: "v60" },
    { ad: "Kalita", acik: "Sıcak servis edilir", fiyat: 200, img: "kalita" },
    { ad: "Aeropress", acik: "Sıcak servis edilir", fiyat: 200, img: "aeropress" },
    { ad: "Delter Press", acik: "Sıcak servis edilir", fiyat: 200, img: "delter" }
  ]},
  { k: "kruvasan", ad: "Kruvasan ve tost", urunler: [
    { ad: "Withella Kruvasan", acik: "Nutella, muz, çilek, dilim fıstık", fiyat: 365, img: "withella", ozel: true },
    { ad: "Lotus With Kruvasan", acik: "Biscoff Lotus kreması, Lotus Biscoff, muz", fiyat: 365, img: "lotus-with" },
    { ad: "Magnum With Kruvasan", acik: "Bademli Magnum", fiyat: 400, img: "magnum-with" },
    { ad: "Füme With Kruvasan", acik: "Üç peynirli fesleğenli sos, marul, füme et", fiyat: 325, img: "fume-with" },
    { ad: "Flat With Kruvasan", acik: "Üç peynirli fesleğenli sos, yeşillik", fiyat: 320, img: "flat-with" },
    { ad: "Egg With Kruvasan", acik: "Scrambled yumurta, frenk soğanı", fiyat: 325, img: "egg-with" },
    { ad: "Sade Kruvasan", acik: "Tereyağlı sade kruvasan", fiyat: 210, img: "sade-kruvasan" },
    { ad: "Pestolum Tost", acik: "Ekşi mayalı ekmek; pesto, kaşar, sucuk, çırpılmış yumurta", fiyat: 300, img: "pestolum-tost" },
    { ad: "Kaşarlım Tost", acik: "Ekşi mayalı ekmek, kaşar peyniri", fiyat: 215, img: "kasarlim-tost" }
  ]},
  { k: "tatli", ad: "Tatlılar", urunler: [
    { ad: "Tiramisu", acik: "Espresso, mascarpone, Etiyopya kakao", fiyat: 265, img: "tiramisu" },
    { ad: "Üç Çikolatalı Brownie", acik: "Sütlü, bitter ve beyaz çikolata", fiyat: 280, img: "brownie" },
    { ad: "Sufle", acik: "Adet olarak servis edilir", fiyat: 235, img: "sufle" },
    { ad: "Ballı Cevizli Marlenka", acik: "Ballı, cevizli medovik", fiyat: 245, img: "marlenka-balli" },
    { ad: "Çikolatalı Marlenka", acik: "Çikolatalı medovik", fiyat: 245, img: "marlenka-cikolatali" }
  ]},
  { k: "sicak-icecek", ad: "Sıcak içecekler", urunler: [
    { ad: "Chai Tea Latte", acik: "Kakule, siyah çay, tarçın, süt", fiyat: 195, img: "chai" },
    { ad: "Hot Chocolate", acik: "Sıcak servis edilir", fiyat: 195, img: "hot-chocolate" },
    { ad: "Hot White Chocolate", acik: "Beyaz çikolata, süt", fiyat: 195, img: "hot-white-chocolate" },
    { ad: "Çay", acik: "Sıcak servis edilir", fiyat: 75, img: "cay" },
    { ad: "Golden Milk Tea", acik: "Zerdeçal, vanilya çubuğu, zencefil, karabiber, tarçın", fiyat: 205 },
    { ad: "Ballı Süt", acik: "Datça çiçek balı, süt", fiyat: 145 }
  ]},
  { k: "soguk-icecek", ad: "Soğuk içecekler", urunler: [
    { ad: "Cooler With", acik: "Portakal kabuğu, şeker şurubu, limonata, Sprite", fiyat: 215, img: "cooler-with", ozel: true },
    { ad: "Mojito", acik: "Alkolsüz; naneli, çilekli ve çarkıfelekli", fiyat: 205, img: "mojito" },
    { ad: "Çilekli Frozen", acik: "Soğuk servis edilir", fiyat: 215, img: "cilekli-frozen" },
    { ad: "Çikolatalı Milkshake", acik: "Çikolata sos, dondurma, süt", fiyat: 205, img: "milkshake" },
    { ad: "Limonata", acik: "Limon suyu, şeker", fiyat: 165, img: "limonata" },
    { ad: "Çilekli Limonata", acik: "Çilek dilimleri, limonata", fiyat: 185, img: "cilekli-limonata" },
    { ad: "Taze Sıkma Portakal Suyu", acik: "Soğuk servis edilir", fiyat: 175 },
    { ad: "Churchill", acik: "Sade soda, limon, tuz", fiyat: 125 },
    { ad: "Erikli Su", acik: "33 cl, pet şişe", fiyat: 60 },
    { ad: "Beypazarı Soda", acik: "20 cl, cam şişe", fiyat: 85 },
    { ad: "Beypazarı Limonlu Soda", acik: "20 cl, cam şişe", fiyat: 90 },
    { ad: "Beyoğlu Gazozu", acik: "25 cl, cam şişe", fiyat: 115 },
    { ad: "Fuse Tea", acik: "25 cl, cam şişe", fiyat: 125 },
    { ad: "Red Bull", acik: "25 cl. 18 yaşından küçüklere satılmaz.", fiyat: 155 }
  ]},
  { k: "cekirdek", ad: "Paket kahve", urunler: [
    { ad: "With You Motion, 100 gr", acik: "Kendi harmanımız. Karamel, çikolata, kakao", fiyat: 200 },
    { ad: "With You Motion, 250 gr", acik: "Kendi harmanımız. Karamel, çikolata, kakao", fiyat: 520 },
    { ad: "Kosta Rika Las Lajas, 100 gr", acik: "Tofi, kırmızı elma, mandalina", fiyat: 710 }
  ]}
];
