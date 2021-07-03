# ACAR Professional Moderation & Upstaff & Coin System Bot

Bu Alt Yapı Acarın Alt Yapısıdır ve ! Carryyyyyy ✩#0001 - (740964663239508020) Tarafından Bir Çok Hatası Düzeltilmiştir İyi Kullanımlar Dileriz.

Gelişmiş cezalandırma sistemi ve ceza bilgi sistemi ayrıca gelişmiş kayıt sistemi ve düzenli bir altyapı bütün hepsi içindedir.
Taglı üye, kayıt, ses ve mesaj aktifliğine göre otomatik yetki atlama ve coin kazanma sistemi içine dahildir dilediğiniz zaman kapatıp açabilirsiniz.
Kayıt olan kişi taglı alım modunda iken cezalıda da olsa yasaklı tagda da olsa üstünde tagı yoksa kayıt işlemi hiç bir şekilde alınamaz ve otomatik kayıt etmez.
Taglı alım modu kapalıysa üyenin cinsiyet verisi varsa otomatik kayıt işlemini alır ve kaydını tamamlar.
Ayrıca istediğiniz veritabanını hızlıca kodlayabileceksiniz sadece ./Reference/acarDatabase.js içindeki fonksiyonları değiştirmeden içindeki kodlamayı değiştirip sistemi kendi dilediğiniz gibi kodlayabileceksiniz.

### kanallar.json
Kanalların içinde bulunan kanal isimlerini tek tek log kanallarnıza açın

### Nereleri düzenlemeliyim?
./acar/Settings/ klasöründe bulunan bütün dosyaları ince detayına kadar düzenlemelisiniz aksi taktirde ufak tefek sorunlarla karşılaşabilirsiniz.

### Knaves ve Monarch sunucusundaki gibi altyetkileri de verdirmek istiyorum?
./acar/Reference/acarDatabase.js dosyasında 324. Satırda Monarch ve Knaves tipi yetkiye göre Hammer vermesini ayarlayabilirsiniz!
### Örneğin!
7 Yetkimiz olsun ve o yetkilerde hammerlarıda eklesin ilkte zaten ability ile başlatıyorsunuz onu geçelim

./acar/Settings/terfisystem.js klasöründe;
```javascript
    yetkipuan: [
        { rol: "ilk yetki id", seviye: "0"},
        { rol: "ikinci yetki id", seviye: "1"},
        { rol: "üçüncü yetki id", seviye: "2"},
        { rol: "dördüncü yetki id", seviye: "3"},
        { rol: "beşinci yetki id", seviye: "4"},
        { rol: "altıncı yetki id", seviye: "5"},
        { rol: "yedinci yetki id", seviye: "6"},
    ]
 ```
bu şekilde ayarımız mevcut ve 2 seviye de teleport gelmesini siteyeceğiz yani 3. rütbede
```javascript
if(getir.seviye == 2) { 
  if(!uye.roles.cache.has(roller.teleportHammer)) uye.roles.add(roller.teleportHammer) 
}; 
```
#### Kesinlikle 324 satır kısmına girilmelidir aksi taktirde sistemi bozabilirsiniz.
