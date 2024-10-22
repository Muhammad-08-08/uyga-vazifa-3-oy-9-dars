// 1-misol

// function vaqtHisobi(ism, tugilganSana) {
//     const hozirgiSana = new Date();
//     const sana = new Date(tugilganSana);

//     let yilFarqi = hozirgiSana.getFullYear() - sana.getFullYear();
//     let oyFarqi = hozirgiSana.getMonth() - sana.getMonth();
//     let kunFarqi = hozirgiSana.getDate() - sana.getDate();

//     if (kunFarqi < 0) {
//         oyFarqi--;
//         kunFarqi += new Date(hozirgiSana.getFullYear(), hozirgiSana.getMonth(), 0).getDate();
//     }

//     if (oyFarqi < 0) {
//         yilFarqi--;
//         oyFarqi += 12;
//     }

//     const soat = hozirgiSana.getHours();
//     const minut = hozirgiSana.getMinutes();
//     const sekund = hozirgiSana.getSeconds();

//     return `${ism}, siz ${yilFarqi} yil, ${oyFarqi} oy, ${kunFarqi} kun, ` +
//            `${soat} soat, ${minut} minut va ${sekund} sekund yashadingiz.`;
// }

// const ism = prompt("Ismingizni kiriting:");
// const sana = prompt("Tug'ilgan sanangizni 'YYYY-MM-DD' formatida kiriting:");

// const natija = vaqtHisobi(ism, sana);
// console.log(natija);
// alert(natija);

// 1-misol tugadi

// 2-misol

// (function() {
//     const son1 = parseInt(prompt("1-sonni kiriting:"), 10);
//     const son2 = parseInt(prompt("2-sonni kiriting:"), 10);

//     const past = Math.min(son1, son2);
//     const top = Math.max(son1, son2);

//     function tasodifiySon(top, past) {
//         return Math.floor(Math.random() * (top - past + 1)) + past;
//     }

//     const natija = tasodifiySon(top, past);
//     alert(`Tasodifiy son: ${natija}`);
// })();

// 2-misol tugadi

// 3-misol

// function boshHarflarniKatta(jumla) {
//     return jumla
//         .split(' ')
//         .map(soz => soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase())
//         .join(' ');
// }

// let jumla = prompt("Biror jumla kiriting:");

// let natija = boshHarflarniKatta(jumla);
// console.log(natija);
// alert(natija);

// 3-misol tugadi

// 4-misol

// function kattaHarfSoni(jumla) {
//     let sanash = 0;

//     for (let i = 0; i < jumla.length; i++) {
//         let belgi = jumla.charAt(i);
//         if (belgi >= 'A' && belgi <= 'Z') {
//             sanash++;
//         }
//     }

//     return sanash;
// }

// let jumla = prompt("Biror jumla kiriting:");

// let natija = kattaHarfSoni(jumla);
// console.log(`Jumlada ${natija} ta katta harf bor.`);
// alert(`Jumlada ${natija} ta katta harf bor.`);
