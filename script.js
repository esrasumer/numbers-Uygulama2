let val;

let num = 15.123456789;
// toplamda 3 basamaklı sayı kullan

val = num.toPrecision(3);

// ondalık kısmı 3 basmakta sınırla

val = num.toFixed(3);

// en yakın sayıya yuvarlama

val = Math.round(15.123456789);

// aşağı yuvarla

val = Math.floor(15.123456789);

// yukarı yuvarla

val = Math.ceil(15.123456789);

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğü bul

val = Math.min(1, 2, 10, 56, 20);
val = Math.max(1, 2, 10, 56, 20);

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin

val = Math.random();
val = Math.random() * 20;
val = Math.floor(Math.random() * 100);
console.log(val);

/**  bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayalım
** Brüt maaş : 3700 TL
** Brüt mesai : 10.3 saat TL
Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/

let wage = 3700;

let hours = 10.3;

let tbrut = (hours * 42) + wage;

let twage = tbrut - (tbrut * 0.25);

console.log(wage);
console.log('Toplam brüt maaş' + ' ' + tbrut + ' ' + 'TL');

console.log(tbrut);

console.log(twage.toFixed(2));