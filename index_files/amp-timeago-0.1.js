;
(self.AMP=self.AMP||[]).push({m:0,v:"2305252018001",n:"amp-timeago",ev:"0.1",l:!0,f:function(s,n){!function(){var n=Object.create,e=Object.defineProperty,a=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyNames,u=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty;function r(s){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}var o,m,d,c,l,f=(o={"node_modules/@babel/runtime/helpers/esm/typeof.js":function(){}},function(){return o&&(m=(0,o[Object.keys(o)[0]])(o=0)),m}),h=(d={"node_modules/timeago.js/dist/timeago.full.min.js":function(s,n){var e,a;f(),e=void 0,a=function(s){"use strict";var n=["second","minute","hour","day","week","month","year"];function e(s,e){if(0===e)return["just now","right now"];var a=n[Math.floor(e/2)];return 1<s&&(a+="s"),[s+" "+a+" ago","in "+s+" "+a]}var a=["秒","分钟","小时","天","周","个月","年"];function t(s,n){if(0===n)return["刚刚","片刻后"];var e=a[~~(n/2)];return[s+" "+e+"前",s+" "+e+"后"]}function u(s,n){r[s]=n}function i(s){return r[s]||r.en_US}var r={},o=[60,60,24,7,365/7/12,12];function m(s){return s instanceof Date?s:!isNaN(s)||/^\d+$/.test(s)?new Date(parseInt(s)):(s=(s||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(s))}function d(s,n){for(var e=s<0?1:0,a=s=Math.abs(s),t=0;s>=o[t]&&t<o.length;t++)s/=o[t];return(0==(t*=2)?9:1)<(s=Math.floor(s))&&(t+=1),n(s,t,a)[e].replace("%s",s.toString())}function c(s,n){return((n?m(n):new Date)-m(s))/1e3}var l="timeago-id";function f(s){return parseInt(s.getAttribute(l))}var h={},g=function(s){clearTimeout(s),delete h[s]};function p(s,n,e,a){g(f(s));var t=a.relativeDate,u=a.minInterval,i=c(n,t);s.innerText=d(i,e);var r,m=setTimeout((function(){p(s,n,e,a)}),Math.min(1e3*Math.max(function(s){for(var n=1,e=0,a=Math.abs(s);s>=o[e]&&e<o.length;e++)s/=o[e],n*=o[e];return a=(a%=n)?n-a:n,Math.ceil(a)}(i),u||1),2147483647));h[m]=0,r=m,s.setAttribute(l,r)}u("en_US",e),u("zh_CN",t);var v=[["ثانية","ثانيتين","%s ثوان","%s ثانية"],["دقيقة","دقيقتين","%s دقائق","%s دقيقة"],["ساعة","ساعتين","%s ساعات","%s ساعة"],["يوم","يومين","%s أيام","%s يوماً"],["أسبوع","أسبوعين","%s أسابيع","%s أسبوعاً"],["شهر","شهرين","%s أشهر","%s شهراً"],["عام","عامين","%s أعوام","%s عاماً"]];function y(s,n,e,a,t){var u=t%10,i=a;return 1===t?i=s:1==u&&20<t?i=n:1<u&&u<5&&(20<t||t<10)&&(i=e),i}var b=y.bind(null,"секунду","%s секунду","%s секунды","%s секунд"),j=y.bind(null,"хвіліну","%s хвіліну","%s хвіліны","%s хвілін"),k=y.bind(null,"гадзіну","%s гадзіну","%s гадзіны","%s гадзін"),z=y.bind(null,"дзень","%s дзень","%s дні","%s дзён"),w=y.bind(null,"тыдзень","%s тыдзень","%s тыдні","%s тыдняў"),q=y.bind(null,"месяц","%s месяц","%s месяцы","%s месяцаў"),_=y.bind(null,"год","%s год","%s гады","%s гадоў");function M(s){var n=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return s.toString().replace(/\d/g,(function(s){return n[s]}))}var O=[["w tej chwili","za chwilę"],["%s sekund temu","za %s sekund"],["1 minutę temu","za 1 minutę"],["%s minut temu","za %s minut"],["1 godzinę temu","za 1 godzinę"],["%s godzin temu","za %s godzin"],["1 dzień temu","za 1 dzień"],["%s dni temu","za %s dni"],["1 tydzień temu","za 1 tydzień"],["%s tygodni temu","za %s tygodni"],["1 miesiąc temu","za 1 miesiąc"],["%s miesięcy temu","za %s miesięcy"],["1 rok temu","za 1 rok"],["%s lat temu","za %s lat"],["%s sekundy temu","za %s sekundy"],["%s minuty temu","za %s minuty"],["%s godziny temu","za %s godziny"],["%s dni temu","za %s dni"],["%s tygodnie temu","za %s tygodnie"],["%s miesiące temu","za %s miesiące"],["%s lata temu","za %s lata"]];function S(s,n,e,a,t){var u=t%10,i=a;return 1===t?i=s:1==u&&20<t?i=n:1<u&&u<5&&(20<t||t<10)&&(i=e),i}var T=S.bind(null,"секунду","%s секунду","%s секунды","%s секунд"),x=S.bind(null,"минуту","%s минуту","%s минуты","%s минут"),N=S.bind(null,"час","%s час","%s часа","%s часов"),D=S.bind(null,"день","%s день","%s дня","%s дней"),I=S.bind(null,"неделю","%s неделю","%s недели","%s недель"),W=S.bind(null,"месяц","%s месяц","%s месяца","%s месяцев"),R=S.bind(null,"год","%s год","%s года","%s лет");function C(s,n,e,a,t){var u=t%10,i=t%100;return 1==t?s:1==u&&11!=i?n:2<=u&&u<=4&&!(12<=i&&i<=14)?e:a}var E=C.bind(null,"1 секунд","%s секунд","%s секунде","%s секунди"),$=C.bind(null,"1 минут","%s минут","%s минуте","%s минута"),J=C.bind(null,"сат времена","%s сат","%s сата","%s сати"),U=C.bind(null,"1 дан","%s дан","%s дана","%s дана"),B=C.bind(null,"недељу дана","%s недељу","%s недеље","%s недеља"),F=C.bind(null,"месец дана","%s месец","%s месеца","%s месеци"),P=C.bind(null,"годину дана","%s годину","%s године","%s година");function A(s,n,e,a,t){var u=t%10,i=a;return 1===t?i=s:1==u&&20<t?i=n:1<u&&u<5&&(20<t||t<10)&&(i=e),i}var L=A.bind(null,"секунду","%s секунду","%s секунди","%s секунд"),Z=A.bind(null,"хвилину","%s хвилину","%s хвилини","%s хвилин"),G=A.bind(null,"годину","%s годину","%s години","%s годин"),H=A.bind(null,"день","%s день","%s дні","%s днів"),K=A.bind(null,"тиждень","%s тиждень","%s тиждні","%s тижднів"),Q=A.bind(null,"місяць","%s місяць","%s місяці","%s місяців"),V=A.bind(null,"рік","%s рік","%s роки","%s років"),X=Object.freeze({__proto__:null,ar:function(s,n){if(0===n)return["منذ لحظات","بعد لحظات"];var e,a,t=(e=Math.floor(n/2),(a=s)<3?v[e][a-1]:3<=a&&a<=10?v[e][2]:v[e][3]);return["منذ "+t,"بعد "+t]},be:function(s,n){switch(n){case 0:return["толькі што","праз некалькі секунд"];case 1:return[b(s)+" таму","праз "+b(s)];case 2:case 3:return[j(s)+" таму","праз "+j(s)];case 4:case 5:return[k(s)+" таму","праз "+k(s)];case 6:case 7:return[z(s)+" таму","праз "+z(s)];case 8:case 9:return[w(s)+" таму","праз "+w(s)];case 10:case 11:return[q(s)+" таму","праз "+q(s)];case 12:case 13:return[_(s)+" таму","праз "+_(s)];default:return["",""]}},bg:function(s,n){return[["току що","съвсем скоро"],["преди %s секунди","след %s секунди"],["преди 1 минута","след 1 минута"],["преди %s минути","след %s минути"],["преди 1 час","след 1 час"],["преди %s часа","след %s часа"],["преди 1 ден","след 1 ден"],["преди %s дни","след %s дни"],["преди 1 седмица","след 1 седмица"],["преди %s седмици","след %s седмици"],["преди 1 месец","след 1 месец"],["преди %s месеца","след %s месеца"],["преди 1 година","след 1 година"],["преди %s години","след %s години"]][n]},bn_IN:function(s,n){return[["এইমাত্র","একটা সময়"],["%s সেকেন্ড আগে","%s এর সেকেন্ডের মধ্যে"],["1 মিনিট আগে","1 মিনিটে"],["%s এর মিনিট আগে","%s এর মিনিটের মধ্যে"],["1 ঘন্টা আগে","1 ঘন্টা"],["%s ঘণ্টা আগে","%s এর ঘন্টার মধ্যে"],["1 দিন আগে","1 দিনের মধ্যে"],["%s এর দিন আগে","%s এর দিন"],["1 সপ্তাহ আগে","1 সপ্তাহের মধ্যে"],["%s এর সপ্তাহ আগে","%s সপ্তাহের মধ্যে"],["1 মাস আগে","1 মাসে"],["%s মাস আগে","%s মাসে"],["1 বছর আগে","1 বছরের মধ্যে"],["%s বছর আগে","%s বছরে"]][n]},ca:function(s,n){return[["fa un moment","d'aquí un moment"],["fa %s segons","d'aquí %s segons"],["fa 1 minut","d'aquí 1 minut"],["fa %s minuts","d'aquí %s minuts"],["fa 1 hora","d'aquí 1 hora"],["fa %s hores","d'aquí %s hores"],["fa 1 dia","d'aquí 1 dia"],["fa %s dies","d'aquí %s dies"],["fa 1 setmana","d'aquí 1 setmana"],["fa %s setmanes","d'aquí %s setmanes"],["fa 1 mes","d'aquí 1 mes"],["fa %s mesos","d'aquí %s mesos"],["fa 1 any","d'aquí 1 any"],["fa %s anys","d'aquí %s anys"]][n]},de:function(s,n){return[["gerade eben","vor einer Weile"],["vor %s Sekunden","in %s Sekunden"],["vor 1 Minute","in 1 Minute"],["vor %s Minuten","in %s Minuten"],["vor 1 Stunde","in 1 Stunde"],["vor %s Stunden","in %s Stunden"],["vor 1 Tag","in 1 Tag"],["vor %s Tagen","in %s Tagen"],["vor 1 Woche","in 1 Woche"],["vor %s Wochen","in %s Wochen"],["vor 1 Monat","in 1 Monat"],["vor %s Monaten","in %s Monaten"],["vor 1 Jahr","in 1 Jahr"],["vor %s Jahren","in %s Jahren"]][n]},el:function(s,n){return[["μόλις τώρα","σε λίγο"],["%s δευτερόλεπτα πριν","σε %s δευτερόλεπτα"],["1 λεπτό πριν","σε 1 λεπτό"],["%s λεπτά πριν","σε %s λεπτά"],["1 ώρα πριν","σε 1 ώρα"],["%s ώρες πριν","σε %s ώρες"],["1 μέρα πριν","σε 1 μέρα"],["%s μέρες πριν","σε %s μέρες"],["1 εβδομάδα πριν","σε 1 εβδομάδα"],["%s εβδομάδες πριν","σε %s εβδομάδες"],["1 μήνα πριν","σε 1 μήνα"],["%s μήνες πριν","σε %s μήνες"],["1 χρόνο πριν","σε 1 χρόνο"],["%s χρόνια πριν","σε %s χρόνια"]][n]},en_short:function(s,n){return[["just now","right now"],["%ss ago","in %ss"],["1m ago","in 1m"],["%sm ago","in %sm"],["1h ago","in 1h"],["%sh ago","in %sh"],["1d ago","in 1d"],["%sd ago","in %sd"],["1w ago","in 1w"],["%sw ago","in %sw"],["1mo ago","in 1mo"],["%smo ago","in %smo"],["1yr ago","in 1yr"],["%syr ago","in %syr"]][n]},en_US:e,es:function(s,n){return[["justo ahora","en un rato"],["hace %s segundos","en %s segundos"],["hace 1 minuto","en 1 minuto"],["hace %s minutos","en %s minutos"],["hace 1 hora","en 1 hora"],["hace %s horas","en %s horas"],["hace 1 día","en 1 día"],["hace %s días","en %s días"],["hace 1 semana","en 1 semana"],["hace %s semanas","en %s semanas"],["hace 1 mes","en 1 mes"],["hace %s meses","en %s meses"],["hace 1 año","en 1 año"],["hace %s años","en %s años"]][n]},eu:function(s,n){return[["orain","denbora bat barru"],["duela %s segundu","%s segundu barru"],["duela minutu 1","minutu 1 barru"],["duela %s minutu","%s minutu barru"],["duela ordu 1","ordu 1 barru"],["duela %s ordu","%s ordu barru"],["duela egun 1","egun 1 barru"],["duela %s egun","%s egun barru"],["duela aste 1","aste 1 barru"],["duela %s aste","%s aste barru"],["duela hillabete 1","hillabete 1 barru"],["duela %s hillabete","%s hillabete barru"],["duela urte 1","urte 1 barru"],["duela %s urte","%s urte barru"]][n]},fa:function(s,n){var e=[["لحظاتی پیش","همین حالا"],["%s ثانیه پیش","%s ثانیه دیگر"],["۱ دقیقه پیش","۱ دقیقه دیگر"],["%s دقیقه پیش","%s دقیقه دیگر"],["۱ ساعت پیش","۱ ساعت دیگر"],["%s ساعت پیش","%s ساعت دیگر"],["۱ روز پیش","۱ روز دیگر"],["%s روز پیش","%s روز دیگر"],["۱ هفته پیش","۱ هفته دیگر"],["%s هفته پیش","%s هفته دیگر"],["۱ ماه پیش","۱ ماه دیگر"],["%s ماه پیش","%s ماه دیگر"],["۱ سال پیش","۱ سال دیگر"],["%s سال پیش","%s سال دیگر"]][n];return[e[0].replace("%s",M(s)),e[1].replace("%s",M(s))]},fi:function(s,n){return[["juuri äsken","juuri nyt"],["%s sekuntia sitten","%s sekunnin päästä"],["minuutti sitten","minuutin päästä"],["%s minuuttia sitten","%s minuutin päästä"],["tunti sitten","tunnin päästä"],["%s tuntia sitten","%s tunnin päästä"],["päivä sitten","päivän päästä"],["%s päivää sitten","%s päivän päästä"],["viikko sitten","viikon päästä"],["%s viikkoa sitten","%s viikon päästä"],["kuukausi sitten","kuukauden päästä"],["%s kuukautta sitten","%s kuukauden päästä"],["vuosi sitten","vuoden päästä"],["%s vuotta sitten","%s vuoden päästä"]][n]},fr:function(s,n){return[["à l'instant","dans un instant"],["il y a %s secondes","dans %s secondes"],["il y a 1 minute","dans 1 minute"],["il y a %s minutes","dans %s minutes"],["il y a 1 heure","dans 1 heure"],["il y a %s heures","dans %s heures"],["il y a 1 jour","dans 1 jour"],["il y a %s jours","dans %s jours"],["il y a 1 semaine","dans 1 semaine"],["il y a %s semaines","dans %s semaines"],["il y a 1 mois","dans 1 mois"],["il y a %s mois","dans %s mois"],["il y a 1 an","dans 1 an"],["il y a %s ans","dans %s ans"]][n]},gl:function(s,n){return[["xusto agora","daquí a un pouco"],["hai %s segundos","en %s segundos"],["hai 1 minuto","nun minuto"],["hai %s minutos","en %s minutos"],["hai 1 hora","nunha hora"],["hai %s horas","en %s horas"],["hai 1 día","nun día"],["hai %s días","en %s días"],["hai 1 semana","nunha semana"],["hai %s semanas","en %s semanas"],["hai 1 mes","nun mes"],["hai %s meses","en %s meses"],["hai 1 ano","nun ano"],["hai %s anos","en %s anos"]][n]},he:function(s,n){return[["זה עתה","עכשיו"],["לפני %s שניות","בעוד %s שניות"],["לפני דקה","בעוד דקה"],["לפני %s דקות","בעוד %s דקות"],["לפני שעה","בעוד שעה"],2===s?["לפני שעתיים","בעוד שעתיים"]:["לפני %s שעות","בעוד %s שעות"],["אתמול","מחר"],2===s?["לפני יומיים","בעוד יומיים"]:["לפני %s ימים","בעוד %s ימים"],["לפני שבוע","בעוד שבוע"],2===s?["לפני שבועיים","בעוד שבועיים"]:["לפני %s שבועות","בעוד %s שבועות"],["לפני חודש","בעוד חודש"],2===s?["לפני חודשיים","בעוד חודשיים"]:["לפני %s חודשים","בעוד %s חודשים"],["לפני שנה","בעוד שנה"],2===s?["לפני שנתיים","בעוד שנתיים"]:["לפני %s שנים","בעוד %s שנים"]][n]},hi_IN:function(s,n){return[["अभी","कुछ समय"],["%s सेकंड पहले","%s सेकंड में"],["1 मिनट पहले","1 मिनट में"],["%s मिनट पहले","%s मिनट में"],["1 घंटे पहले","1 घंटे में"],["%s घंटे पहले","%s घंटे में"],["1 दिन पहले","1 दिन में"],["%s दिन पहले","%s दिनों में"],["1 सप्ताह पहले","1 सप्ताह में"],["%s हफ्ते पहले","%s हफ्तों में"],["1 महीने पहले","1 महीने में"],["%s महीने पहले","%s महीनों में"],["1 साल पहले","1 साल में"],["%s साल पहले","%s साल में"]][n]},hu:function(s,n){return[["éppen most","éppen most"],["%s másodperce","%s másodpercen belül"],["1 perce","1 percen belül"],["%s perce","%s percen belül"],["1 órája","1 órán belül"],["%s órája","%s órán belül"],["1 napja","1 napon belül"],["%s napja","%s napon belül"],["1 hete","1 héten belül"],["%s hete","%s héten belül"],["1 hónapja","1 hónapon belül"],["%s hónapja","%s hónapon belül"],["1 éve","1 éven belül"],["%s éve","%s éven belül"]][n]},id_ID:function(s,n){return[["baru saja","sebentar"],["%s detik yang lalu","dalam %s detik"],["1 menit yang lalu","dalam 1 menit"],["%s menit yang lalu","dalam %s menit"],["1 jam yang lalu","dalam 1 jam"],["%s jam yang lalu","dalam %s jam"],["1 hari yang lalu","dalam 1 hari"],["%s hari yang lalu","dalam %s hari"],["1 minggu yang lalu","dalam 1 minggu"],["%s minggu yang lalu","dalam %s minggu"],["1 bulan yang lalu","dalam 1 bulan"],["%s bulan yang lalu","dalam %s bulan"],["1 tahun yang lalu","dalam 1 tahun"],["%s tahun yang lalu","dalam %s tahun"]][n]},it:function(s,n){return[["poco fa","fra poco"],["%s secondi fa","fra %s secondi"],["un minuto fa","fra un minuto"],["%s minuti fa","fra %s minuti"],["un'ora fa","fra un'ora"],["%s ore fa","fra %s ore"],["un giorno fa","fra un giorno"],["%s giorni fa","fra %s giorni"],["una settimana fa","fra una settimana"],["%s settimane fa","fra %s settimane"],["un mese fa","fra un mese"],["%s mesi fa","fra %s mesi"],["un anno fa","fra un anno"],["%s anni fa","fra %s anni"]][n]},ja:function(s,n){return[["すこし前","すぐに"],["%s秒前","%s秒以内"],["1分前","1分以内"],["%s分前","%s分以内"],["1時間前","1時間以内"],["%s時間前","%s時間以内"],["1日前","1日以内"],["%s日前","%s日以内"],["1週間前","1週間以内"],["%s週間前","%s週間以内"],["1ヶ月前","1ヶ月以内"],["%sヶ月前","%sヶ月以内"],["1年前","1年以内"],["%s年前","%s年以内"]][n]},ko:function(s,n){return[["방금","곧"],["%s초 전","%s초 후"],["1분 전","1분 후"],["%s분 전","%s분 후"],["1시간 전","1시간 후"],["%s시간 전","%s시간 후"],["1일 전","1일 후"],["%s일 전","%s일 후"],["1주일 전","1주일 후"],["%s주일 전","%s주일 후"],["1개월 전","1개월 후"],["%s개월 전","%s개월 후"],["1년 전","1년 후"],["%s년 전","%s년 후"]][n]},ml:function(s,n){return[["ഇപ്പോള്‍","കുറച്ചു മുന്‍പ്"],["%s സെക്കന്റ്‌കള്‍ക്ക് മുന്‍പ്","%s സെക്കന്റില്‍"],["1 മിനിറ്റിനു മുന്‍പ്","1 മിനിറ്റില്‍"],["%s മിനിറ്റുകള്‍ക്ക് മുന്‍പ","%s മിനിറ്റില്‍"],["1 മണിക്കൂറിനു മുന്‍പ്","1 മണിക്കൂറില്‍"],["%s മണിക്കൂറുകള്‍ക്കു മുന്‍പ്","%s മണിക്കൂറില്‍"],["1 ഒരു ദിവസം മുന്‍പ്","1 ദിവസത്തില്‍"],["%s ദിവസങ്ങള്‍ക് മുന്‍പ്","%s ദിവസങ്ങള്‍ക്കുള്ളില്‍"],["1 ആഴ്ച മുന്‍പ്","1 ആഴ്ചയില്‍"],["%s ആഴ്ചകള്‍ക്ക് മുന്‍പ്","%s ആഴ്ചകള്‍ക്കുള്ളില്‍"],["1 മാസത്തിനു മുന്‍പ്","1 മാസത്തിനുള്ളില്‍"],["%s മാസങ്ങള്‍ക്ക് മുന്‍പ്","%s മാസങ്ങള്‍ക്കുള്ളില്‍"],["1 വര്‍ഷത്തിനു  മുന്‍പ്","1 വര്‍ഷത്തിനുള്ളില്‍"],["%s വര്‍ഷങ്ങള്‍ക്കു മുന്‍പ്","%s വര്‍ഷങ്ങള്‍ക്കുല്ല്ളില്‍"]][n]},my:function(s,n){return[["ယခုအတွင်း","ယခု"],["%s စက္ကန့် အကြာက","%s စက္ကန့်အတွင်း"],["1 မိနစ် အကြာက","1 မိနစ်အတွင်း"],["%s မိနစ် အကြာက","%s မိနစ်အတွင်း"],["1 နာရီ အကြာက","1 နာရီအတွင်း"],["%s နာရီ အကြာက","%s နာရီအတွင်း"],["1 ရက် အကြာက","1 ရက်အတွင်း"],["%s ရက် အကြာက","%s ရက်အတွင်း"],["1 ပတ် အကြာက","1 ပတ်အတွင်း"],["%s ပတ် အကြာက","%s ပတ်အတွင်း"],["1 လ အကြာက","1 လအတွင်း"],["%s လ အကြာက","%s လအတွင်း"],["1 နှစ် အကြာက","1 နှစ်အတွင်း"],["%s နှစ် အကြာက","%s နှစ်အတွင်း"]][n]},nb_NO:function(s,n){return[["akkurat nå","om litt"],["%s sekunder siden","om %s sekunder"],["1 minutt siden","om 1 minutt"],["%s minutter siden","om %s minutter"],["1 time siden","om 1 time"],["%s timer siden","om %s timer"],["1 dag siden","om 1 dag"],["%s dager siden","om %s dager"],["1 uke siden","om 1 uke"],["%s uker siden","om %s uker"],["1 måned siden","om 1 måned"],["%s måneder siden","om %s måneder"],["1 år siden","om 1 år"],["%s år siden","om %s år"]][n]},nl:function(s,n){return[["recent","binnenkort"],["%s seconden geleden","binnen %s seconden"],["1 minuut geleden","binnen 1 minuut"],["%s minuten geleden","binnen %s minuten"],["1 uur geleden","binnen 1 uur"],["%s uur geleden","binnen %s uur"],["1 dag geleden","binnen 1 dag"],["%s dagen geleden","binnen %s dagen"],["1 week geleden","binnen 1 week"],["%s weken geleden","binnen %s weken"],["1 maand geleden","binnen 1 maand"],["%s maanden geleden","binnen %s maanden"],["1 jaar geleden","binnen 1 jaar"],["%s jaar geleden","binnen %s jaar"]][n]},nn_NO:function(s,n){return[["nett no","om litt"],["%s sekund sidan","om %s sekund"],["1 minutt sidan","om 1 minutt"],["%s minutt sidan","om %s minutt"],["1 time sidan","om 1 time"],["%s timar sidan","om %s timar"],["1 dag sidan","om 1 dag"],["%s dagar sidan","om %s dagar"],["1 veke sidan","om 1 veke"],["%s veker sidan","om %s veker"],["1 månad sidan","om 1 månad"],["%s månadar sidan","om %s månadar"],["1 år sidan","om 1 år"],["%s år sidan","om %s år"]][n]},pl:function(s,n){return O[1&n?4<s%10||s%10<2||~~(s/10)%10==1?n:++n/2+13:n]},pt_BR:function(s,n){return[["agora mesmo","agora"],["há %s segundos","em %s segundos"],["há um minuto","em um minuto"],["há %s minutos","em %s minutos"],["há uma hora","em uma hora"],["há %s horas","em %s horas"],["há um dia","em um dia"],["há %s dias","em %s dias"],["há uma semana","em uma semana"],["há %s semanas","em %s semanas"],["há um mês","em um mês"],["há %s meses","em %s meses"],["há um ano","em um ano"],["há %s anos","em %s anos"]][n]},ro:function(s,n){var e=[["chiar acum","chiar acum"],["acum %s secunde","peste %s secunde"],["acum un minut","peste un minut"],["acum %s minute","peste %s minute"],["acum o oră","peste o oră"],["acum %s ore","peste %s ore"],["acum o zi","peste o zi"],["acum %s zile","peste %s zile"],["acum o săptămână","peste o săptămână"],["acum %s săptămâni","peste %s săptămâni"],["acum o lună","peste o lună"],["acum %s luni","peste %s luni"],["acum un an","peste un an"],["acum %s ani","peste %s ani"]];return s<20?e[n]:[e[n][0].replace("%s","%s de"),e[n][1].replace("%s","%s de")]},ru:function(s,n){switch(n){case 0:return["только что","через несколько секунд"];case 1:return[T(s)+" назад","через "+T(s)];case 2:case 3:return[x(s)+" назад","через "+x(s)];case 4:case 5:return[N(s)+" назад","через "+N(s)];case 6:return["вчера","завтра"];case 7:return[D(s)+" назад","через "+D(s)];case 8:case 9:return[I(s)+" назад","через "+I(s)];case 10:case 11:return[W(s)+" назад","через "+W(s)];case 12:case 13:return[R(s)+" назад","через "+R(s)];default:return["",""]}},sq:function(s,n){return[["pak më parë","pas pak"],["para %s sekondash","pas %s sekondash"],["para një minute","pas një minute"],["para %s minutash","pas %s minutash"],["para një ore","pas një ore"],["para %s orësh","pas %s orësh"],["dje","nesër"],["para %s ditësh","pas %s ditësh"],["para një jave","pas një jave"],["para %s javësh","pas %s javësh"],["para një muaji","pas një muaji"],["para %s muajsh","pas %s muajsh"],["para një viti","pas një viti"],["para %s vjetësh","pas %s vjetësh"]][n]},sr:function(s,n){switch(n){case 0:return["малопре","управо сад"];case 1:return["пре "+E(s),"за "+E(s)];case 2:case 3:return["пре "+$(s),"за "+$(s)];case 4:case 5:return["пре "+J(s),"за "+J(s)];case 6:case 7:return["пре "+U(s),"за "+U(s)];case 8:case 9:return["пре "+B(s),"за "+B(s)];case 10:case 11:return["пре "+F(s),"за "+F(s)];case 12:case 13:return["пре "+P(s),"за "+P(s)];default:return["",""]}},sv:function(s,n){return[["just nu","om en stund"],["%s sekunder sedan","om %s sekunder"],["1 minut sedan","om 1 minut"],["%s minuter sedan","om %s minuter"],["1 timme sedan","om 1 timme"],["%s timmar sedan","om %s timmar"],["1 dag sedan","om 1 dag"],["%s dagar sedan","om %s dagar"],["1 vecka sedan","om 1 vecka"],["%s veckor sedan","om %s veckor"],["1 månad sedan","om 1 månad"],["%s månader sedan","om %s månader"],["1 år sedan","om 1 år"],["%s år sedan","om %s år"]][n]},ta:function(s,n){return[["இப்போது","சற்று நேரம் முன்பு"],["%s நொடிக்கு முன்","%s நொடிகளில்"],["1 நிமிடத்திற்க்கு முன்","1 நிமிடத்தில்"],["%s நிமிடத்திற்க்கு முன்","%s நிமிடங்களில்"],["1 மணி நேரத்திற்கு முன்","1 மணி நேரத்திற்குள்"],["%s மணி நேரத்திற்கு முன்","%s மணி நேரத்திற்குள்"],["1 நாளுக்கு முன்","1 நாளில்"],["%s நாட்களுக்கு முன்","%s நாட்களில்"],["1 வாரத்திற்கு முன்","1 வாரத்தில்"],["%s வாரங்களுக்கு முன்","%s வாரங்களில்"],["1 மாதத்திற்கு முன்","1 மாதத்தில்"],["%s மாதங்களுக்கு முன்","%s மாதங்களில்"],["1 வருடத்திற்கு முன்","1 வருடத்தில்"],["%s வருடங்களுக்கு முன்","%s வருடங்களில்"]][n]},th:function(s,n){return[["เมื่อสักครู่นี้","อีกสักครู่"],["%s วินาทีที่แล้ว","ใน %s วินาที"],["1 นาทีที่แล้ว","ใน 1 นาที"],["%s นาทีที่แล้ว","ใน %s นาที"],["1 ชั่วโมงที่แล้ว","ใน 1 ชั่วโมง"],["%s ชั่วโมงที่แล้ว","ใน %s ชั่วโมง"],["1 วันที่แล้ว","ใน 1 วัน"],["%s วันที่แล้ว","ใน %s วัน"],["1 อาทิตย์ที่แล้ว","ใน 1 อาทิตย์"],["%s อาทิตย์ที่แล้ว","ใน %s อาทิตย์"],["1 เดือนที่แล้ว","ใน 1 เดือน"],["%s เดือนที่แล้ว","ใน %s เดือน"],["1 ปีที่แล้ว","ใน 1 ปี"],["%s ปีที่แล้ว","ใน %s ปี"]][n]},tr:function(s,n){return[["az önce","şimdi"],["%s saniye önce","%s saniye içinde"],["1 dakika önce","1 dakika içinde"],["%s dakika önce","%s dakika içinde"],["1 saat önce","1 saat içinde"],["%s saat önce","%s saat içinde"],["1 gün önce","1 gün içinde"],["%s gün önce","%s gün içinde"],["1 hafta önce","1 hafta içinde"],["%s hafta önce","%s hafta içinde"],["1 ay önce","1 ay içinde"],["%s ay önce","%s ay içinde"],["1 yıl önce","1 yıl içinde"],["%s yıl önce","%s yıl içinde"]][n]},uk:function(s,n){switch(n){case 0:return["щойно","через декілька секунд"];case 1:return[L(s)+" тому","через "+L(s)];case 2:case 3:return[Z(s)+" тому","через "+Z(s)];case 4:case 5:return[G(s)+" тому","через "+G(s)];case 6:case 7:return[H(s)+" тому","через "+H(s)];case 8:case 9:return[K(s)+" тому","через "+K(s)];case 10:case 11:return[Q(s)+" тому","через "+Q(s)];case 12:case 13:return[V(s)+" тому","через "+V(s)];default:return["",""]}},vi:function(s,n){return[["vừa xong","một lúc"],["%s giây trước","trong %s giây"],["1 phút trước","trong 1 phút"],["%s phút trước","trong %s phút"],["1 giờ trước","trong 1 giờ"],["%s giờ trước","trong %s giờ"],["1 ngày trước","trong 1 ngày"],["%s ngày trước","trong %s ngày"],["1 tuần trước","trong 1 tuần"],["%s tuần trước","trong %s tuần"],["1 tháng trước","trong 1 tháng"],["%s tháng trước","trong %s tháng"],["1 năm trước","trong 1 năm"],["%s năm trước","trong %s năm"]][n]},zh_CN:t,zh_TW:function(s,n){return[["剛剛","片刻後"],["%s 秒前","%s 秒後"],["1 分鐘前","1 分鐘後"],["%s 分鐘前","%s 分鐘後"],["1 小時前","1 小時後"],["%s 小時前","%s 小時後"],["1 天前","1 天後"],["%s 天前","%s 天後"],["1 週前","1 週後"],["%s 週前","%s 週後"],["1 個月前","1 個月後"],["%s 個月前","%s 個月後"],["1 年前","1 年後"],["%s 年前","%s 年後"]][n]}});Object.keys(X).forEach((function(s){u(s,X[s])})),s.cancel=function(s){s?g(f(s)):Object.keys(h).forEach(g)},s.format=function(s,n,e){return d(c(s,e&&e.relativeDate),i(n))},s.register=u,s.render=function(s,n,e){var a=s.length?s:[s];return a.forEach((function(s){p(s,s.getAttribute("datetime"),i(n),e||{})})),a},Object.defineProperty(s,"__esModule",{value:!0})},"object"==(void 0===s?"undefined":r(s))&&void 0!==n?a(s):"function"==typeof define&&define.amd?define(["exports"],a):a((e=e||self).timeago={})}},function(){return c||(0,d[Object.keys(d)[0]])((c={exports:{}}).exports,c),c.exports});function g(s,n){return(g=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(s,n)}function p(s){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function v(s,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}(s)}f(),Array.isArray,f();var y=Object.prototype,b=(y.hasOwnProperty,y.toString,"fixed");function j(s){return(s.ownerDocument||s).defaultView}function k(s){return s.parent&&s.parent!=s}function z(s,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.needsRootBounds,t=e.rootMargin,u=e.threshold,i=k(n)&&(a||t)?n.document:void 0;return new n.IntersectionObserver(s,{threshold:u,root:i,rootMargin:t})}f();var w=new WeakMap,q=new WeakMap;function _(s){for(var n=new Set,e=s.length-1;e>=0;e--){var a=s[e],t=a.target;if(!n.has(t)){n.add(t);var u=q.get(t);if(u)for(var i=0;i<u.length;i++)(0,u[i])(a)}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var M=self.__AMP_LOG;function O(s){return function(s,n){throw new Error("failed to call initLogConstructor")}()}var S,T,x=(S=h(),function(s,n,u){if(n&&"object"==typeof n||"function"==typeof n)for(var r,o=t(n),m=0,d=o.length;m<d;m++)r=o[m],i.call(s,r)||"default"===r||e(s,r,{get:function(s){return n[s]}.bind(null,r),enumerable:!(u=a(n,r))||u.enumerable});return s}((T=e(null!=S?n(u(S)):{},"default",S&&S.__esModule&&"default"in S?{get:function(){return S.default},enumerable:!0}:{value:S,enumerable:!0}),e(T,"__esModule",{value:!0})),S)),N=x.default||x,D=N.format,I=N.register;I("cs",(function(s,n){var e=0;return(1==n||3==n||5==n||7==n||9==n||11==n||13==n)&&s>=5&&(e=1),[[["právě teď","právě teď"]],[["před %s vteřinami","za %s vteřiny"],["před %s vteřinami","za %s vteřin"]],[["před minutou","za minutu"]],[["před %s minutami","za %s minuty"],["před %s minutami","za %s minut"]],[["před hodinou","za hodinu"]],[["před %s hodinami","za %s hodiny"],["před %s hodinami","za %s hodin"]],[["včera","zítra"]],[["před %s dny","za %s dny"],["před %s dny","za %s dnů"]],[["minulý týden","příští týden"]],[["před %s týdny","za %s týdny"],["před %s týdny","za %s týdnů"]],[["minulý měsíc","přístí měsíc"]],[["před %s měsíci","za %s měsíce"],["před %s měsíci","za %s měsíců"]],[["před rokem","přístí rok"]],[["před %s lety","za %s roky"],["před %s lety","za %s let"]]][n][e]})),I("da",(function(s,n){return[["for et øjeblik siden","om et øjeblik"],["for %s sekunder siden","om %s sekunder"],["for 1 minut siden","om 1 minut"],["for %s minutter siden","om %s minutter"],["for 1 time siden","om 1 time"],["for %s timer siden","om %s timer"],["for 1 dag siden","om 1 dag"],["for %s dage siden","om %s dage"],["for 1 uge siden","om 1 uge"],["for %s uger siden","om %s uger"],["for 1 måned siden","om 1 måned"],["for %s måneder siden","om %s måneder"],["for 1 år siden","om 1 år"],["for %s år siden","om %s år"]][n]})),I("ka",(function(s,n){return[["ამ წამს","ახლა"],["%s წამის წინ","%s წამში"],["1 წუთის წინ","1 წუთში"],["%s წუთის წინ","%s წუთში"],["1 საათის წინ","1 საათში"],["%s საათის წინ","%s საათში"],["1 დღის წინ","1 დღეში"],["%s დღის წინ","%s დღეში"],["1 კვირის წინ","1 კვირაში"],["%s კვირის წინ","%s კვირაში"],["1 თვის წინ","1 თვეში"],["%s თვის წინ","%s თვეში"],["1 წლის წინ","1 წელიწადში"],["%s წლის წინ","%s წელიწადში"]][n]})),I("oc",(function(s,n){return[["fa un moment","d'aquí un moment"],["fa %s segondas","d'aquí %s segondas"],["fa 1 minuta","d'aquí 1 minuta"],["fa %s minutas","d'aquí %s minutas"],["fa 1 ora","d'aquí 1 ora"],["fa %s oras","d'aquí %s oras"],["fa 1 jorn","d'aquí 1 jorn"],["fa %s jorns","d'aquí %s jorns"],["fa 1 setmana","d'aquí 1 setmana"],["fa %s setmanas","d'aquí %s setmanas"],["fa 1 mes","d'aquí 1 mes"],["fa %s meses","d'aquí %s meses"],["fa 1 an","d'aquí 1 an"],["fa %s ans","d'aquí %s ans"]][n]}));var W={"en":"en_US","enshort":"en_short","en-short":"en_short","inbg":"bn_IN","inid":"id_ID","inhi":"hi_IN"},R=function(s){!function(s,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&g(s,n)}(t,s);var n,e,a=(n=t,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(s){return!1}}(),function(){var s,a=p(n);if(e){var t=p(this).constructor;s=Reflect.construct(a,arguments,t)}else s=a.apply(this,arguments);return v(this,s)});function t(s){var n;return(n=a.call(this,s)).Xw="",n.ly="",n.zq="",n.Mq=null,n.Nq=!1,n.Tb=null,n}var u=t.prototype;return u.buildCallback=function(){var s,n,e;n=this.element.textContent.length>0,e=this.element,(M.user||(M.user=O()),void M.user.win?M.userForEmbed||(M.userForEmbed=O()):M.user).assert(n,"Content cannot be empty. Found in: %s",e,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),this.Xw=this.element.getAttribute("datetime"),this.ly=(s=(s=this.element.getAttribute("locale")||this.win.document.documentElement.lang).toLowerCase(),W[s]?W[s]:4===s.length||5===s.length?"".concat(s.slice(0,2),"_").concat(s.slice(-2).toUpperCase()):s),this.zq=this.element.textContent.trim(),this.element.textContent="",this.element.hasAttribute("role")||this.element.setAttribute("role","text"),this.Mq=document.createElement("time"),this.Mq.setAttribute("datetime",this.Xw),this.Dq(),this.element.appendChild(this.Mq)},u.Fb=function(s){s&&!this.Nq&&this.Dq()},u.layoutCallback=function(){var s=this;return this.Tb=function(s,n,e){var a=j(s),t=w.get(a);t||w.set(a,t=z(_,a));var u=q.get(s);return u||(u=[],q.set(s,u)),u.push(n),t.observe(s),function(){!function(s,n){var e,a,t,u=q.get(s);if(u&&(a=n,-1!=(t=(e=u).indexOf(a))&&(e.splice(t,1),1)&&!u.length)){var i=j(s),r=w.get(i);null==r||r.unobserve(s),q.delete(s)}}(s,n)}}(this.element,(function(n){var e=n.isIntersecting;return s.Fb(e)})),l||(l=Promise.resolve(void 0))},u.unlayoutCallback=function(){var s;return null===(s=this.Tb)||void 0===s||s.call(this),this.Tb=null,!1},u.mutatedAttributesCallback=function(s){var n=s.datetime;void 0!==n&&(this.Xw=n,this.Dq())},u.isLayoutSupported=function(s){return function(s){return s==b||"fixed-height"==s||"responsive"==s||"fill"==s||"flex-item"==s||"fluid"==s||"intrinsic"==s}(s)},u.Dq=function(){if(this.element.hasAttribute("cutoff")){var s=parseInt(this.element.getAttribute("cutoff"),10),n=new Date(this.Xw);Math.floor((Date.now()-n.getTime())/1e3)>s?(this.Mq.textContent=this.zq,this.Nq=!0):this.Mq.textContent=D(this.Xw,this.ly)}else this.Mq.textContent=D(this.Xw,this.ly)},t}(s.BaseElement);s.registerElement("amp-timeago",R)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-timeago-0.1.js.map