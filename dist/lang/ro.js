(function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)})(function(e,t){"use strict";function n(e,t,n){var i={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},r=" ";return(e%100>=20||e>=100&&0===e%100)&&(r=" de "),e+r+i[n]}var i=t.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:n,h:"o oră",hh:n,d:"o zi",dd:n,M:"o lună",MM:n,y:"un an",yy:n},week:{dow:1,doy:7}});return i});