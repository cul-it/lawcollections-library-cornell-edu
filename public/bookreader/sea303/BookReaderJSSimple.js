//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1136;
    }
if (index == 1) {
     return 1156;
    }
if (index == 2) {
     return 1138;
    }
if (index == 3) {
     return 1049;
    }
if (index == 4) {
     return 943;
    }
if (index == 5) {
     return 930;
    }
if (index == 6) {
     return 1057;
    }
if (index == 7) {
     return 977;
    }
if (index == 8) {
     return 950;
    }
if (index == 9) {
     return 901;
    }
if (index == 10) {
     return 972;
    }
if (index == 11) {
     return 903;
    }
if (index == 12) {
     return 920;
    }
if (index == 13) {
     return 981;
    }
if (index == 14) {
     return 925;
    }
if (index == 15) {
     return 968;
    }
if (index == 16) {
     return 977;
    }
if (index == 17) {
     return 1091;
    }
if (index == 18) {
     return 1027;
    }
if (index == 19) {
     return 1022;
    }
if (index == 20) {
     return 1003;
    }
if (index == 21) {
     return 1075;
    }
if (index == 22) {
     return 992;
    }
if (index == 23) {
     return 1035;
    }
if (index == 24) {
     return 1049;
    }
if (index == 25) {
     return 1079;
    }
if (index == 26) {
     return 1038;
    }
if (index == 27) {
     return 1095;
    }
if (index == 28) {
     return 1066;
    }
if (index == 29) {
     return 955;
    }
if (index == 30) {
     return 950;
    }
if (index == 31) {
     return 1006;
    }
if (index == 32) {
     return 980;
    }
if (index == 33) {
     return 1066;
    }
if (index == 34) {
     return 1009;
    }
if (index == 35) {
     return 1025;
    }
if (index == 36) {
     return 1007;
    }
if (index == 37) {
     return 1132;
    }
if (index == 38) {
     return 1049;
    }
if (index == 39) {
     return 1014;
    }
if (index == 40) {
     return 1020;
    }
if (index == 41) {
     return 1051;
    }
if (index == 42) {
     return 984;
    }
if (index == 43) {
     return 1075;
    }
if (index == 44) {
     return 1035;
    }
if (index == 45) {
     return 995;
    }
if (index == 46) {
     return 878;
    }
if (index == 47) {
     return 1075;
    }
if (index == 48) {
     return 1101;
    }
if (index == 49) {
     return 1020;
    }
if (index == 50) {
     return 1173;
    }
if (index == 51) {
     return 1075;
    }
if (index == 52) {
     return 1042;
    }
if (index == 53) {
     return 985;
    }
if (index == 54) {
     return 1086;
    }
if (index == 55) {
     return 1010;
    }
if (index == 56) {
     return 1074;
    }
if (index == 57) {
     return 1037;
    }
if (index == 58) {
     return 1044;
    }
if (index == 59) {
     return 941;
    }
if (index == 60) {
     return 1049;
    }
if (index == 61) {
     return 1048;
    }
if (index == 62) {
     return 1063;
    }
if (index == 63) {
     return 916;
    }
if (index == 64) {
     return 930;
    }
if (index == 65) {
     return 1075;
    }
if (index == 66) {
     return 1071;
    }
if (index == 67) {
     return 958;
    }
if (index == 68) {
     return 1145;
    }
if (index == 69) {
     return 1075;
    }
if (index == 70) {
     return 984;
    }
if (index == 71) {
     return 990;
    }
if (index == 72) {
     return 963;
    }
if (index == 73) {
     return 833;
    }
if (index == 74) {
     return 1645;
    }
if (index == 75) {
     return 1013;
    }
if (index == 76) {
     return 937;
    }
if (index == 77) {
     return 955;
    }
if (index == 78) {
     return 947;
    }
if (index == 79) {
     return 883;
    }
if (index == 80) {
     return 912;
    }
if (index == 81) {
     return 849;
    }
if (index == 82) {
     return 1004;
    }
if (index == 83) {
     return 943;
    }
if (index == 84) {
     return 909;
    }
if (index == 85) {
     return 989;
    }
if (index == 86) {
     return 1004;
    }
if (index == 87) {
     return 1123;
    }
if (index == 88) {
     return 921;
    }
if (index == 89) {
     return 953;
    }
if (index == 90) {
     return 1120;
    }
if (index == 91) {
     return 966;
    }
if (index == 92) {
     return 948;
    }
if (index == 93) {
     return 842;
    }
if (index == 94) {
     return 909;
    }
if (index == 95) {
     return 954;
    }
if (index == 96) {
     return 976;
    }
if (index == 97) {
     return 993;
    }
if (index == 98) {
     return 988;
    }
if (index == 99) {
     return 1001;
    }
if (index == 100) {
     return 978;
    }
if (index == 101) {
     return 1013;
    }
if (index == 102) {
     return 945;
    }
if (index == 103) {
     return 971;
    }
if (index == 104) {
     return 960;
    }
if (index == 105) {
     return 1013;
    }
if (index == 106) {
     return 949;
    }
if (index == 107) {
     return 995;
    }
if (index == 108) {
     return 933;
    }
if (index == 109) {
     return 984;
    }
if (index == 110) {
     return 911;
    }
if (index == 111) {
     return 966;
    }
if (index == 112) {
     return 899;
    }
if (index == 113) {
     return 1007;
    }
if (index == 114) {
     return 912;
    }
if (index == 115) {
     return 944;
    }
if (index == 116) {
     return 1004;
    }
if (index == 117) {
     return 949;
    }
if (index == 118) {
     return 1013;
    }
if (index == 119) {
     return 958;
    }
if (index == 120) {
     return 1004;
    }
if (index == 121) {
     return 1101;
    }
if (index == 122) {
     return 1063;
    }
if (index == 123) {
     return 963;
    }
if (index == 124) {
     return 1417;
    }
if (index == 125) {
     return 19;
    }
if (index == 126) {
     return 998;
    }
if (index == 127) {
     return 1014;
    }
if (index == 128) {
     return 1024;
    }
if (index == 129) {
     return 954;
    }
if (index == 130) {
     return 1344;
    }
if (index == 131) {
     return 963;
    }
if (index == 132) {
     return 979;
    }
if (index == 133) {
     return 1185;
    }
if (index == 134) {
     return 1033;
    }
if (index == 135) {
     return 1013;
    }
if (index == 136) {
     return 1074;
    }
if (index == 137) {
     return 935;
    }
if (index == 138) {
     return 1039;
    }
if (index == 139) {
     return 1020;
    }
if (index == 140) {
     return 868;
    }
if (index == 141) {
     return 903;
    }
if (index == 142) {
     return 1072;
    }
if (index == 143) {
     return 979;
    }
if (index == 144) {
     return 1030;
    }
if (index == 145) {
     return 963;
    }
if (index == 146) {
     return 926;
    }
if (index == 147) {
     return 958;
    }
if (index == 148) {
     return 977;
    }
if (index == 149) {
     return 896;
    }
if (index == 150) {
     return 1026;
    }
if (index == 151) {
     return 1424;
    }
if (index == 152) {
     return 916;
    }
if (index == 153) {
     return 919;
    }
if (index == 154) {
     return 1026;
    }
if (index == 155) {
     return 961;
    }
if (index == 156) {
     return 1012;
    }
if (index == 157) {
     return 1005;
    }
if (index == 158) {
     return 986;
    }
if (index == 159) {
     return 835;
    }
if (index == 160) {
     return 905;
    }
if (index == 161) {
     return 1005;
    }
if (index == 162) {
     return 980;
    }
if (index == 163) {
     return 1008;
    }
if (index == 164) {
     return 1010;
    }
if (index == 165) {
     return 926;
    }
if (index == 166) {
     return 946;
    }
if (index == 167) {
     return 977;
    }
if (index == 168) {
     return 981;
    }
if (index == 169) {
     return 1018;
    }
if (index == 170) {
     return 998;
    }
if (index == 171) {
     return 932;
    }
if (index == 172) {
     return 1018;
    }
if (index == 173) {
     return 1032;
    }
if (index == 174) {
     return 1010;
    }
if (index == 175) {
     return 983;
    }
if (index == 176) {
     return 1006;
    }
if (index == 177) {
     return 982;
    }
if (index == 178) {
     return 954;
    }
if (index == 179) {
     return 953;
    }
if (index == 180) {
     return 977;
    }
if (index == 181) {
     return 931;
    }
if (index == 182) {
     return 1001;
    }
if (index == 183) {
     return 1240;
    }
if (index == 184) {
     return 1052;
    }
if (index == 185) {
     return 926;
    }
if (index == 186) {
     return 998;
    }
if (index == 187) {
     return 1004;
    }
if (index == 188) {
     return 1012;
    }
if (index == 189) {
     return 949;
    }
if (index == 190) {
     return 1304;
    }
if (index == 191) {
     return 962;
    }
if (index == 192) {
     return 1093;
    }
if (index == 193) {
     return 997;
    }
if (index == 194) {
     return 985;
    }
if (index == 195) {
     return 896;
    }
if (index == 196) {
     return 1016;
    }
if (index == 197) {
     return 972;
    }
if (index == 198) {
     return 989;
    }
if (index == 199) {
     return 890;
    }
if (index == 200) {
     return 911;
    }
if (index == 201) {
     return 942;
    }
if (index == 202) {
     return 1014;
    }
if (index == 203) {
     return 942;
    }
if (index == 204) {
     return 918;
    }
if (index == 205) {
     return 1242;
    }
if (index == 206) {
     return 913;
    }
if (index == 207) {
     return 1001;
    }
if (index == 208) {
     return 943;
    }
if (index == 209) {
     return 925;
    }
if (index == 210) {
     return 962;
    }
if (index == 211) {
     return 987;
    }
if (index == 212) {
     return 897;
    }
if (index == 213) {
     return 968;
    }
if (index == 214) {
     return 988;
    }
if (index == 215) {
     return 954;
    }
if (index == 216) {
     return 911;
    }
if (index == 217) {
     return 920;
    }
if (index == 218) {
     return 964;
    }
if (index == 219) {
     return 944;
    }
if (index == 220) {
     return 981;
    }
if (index == 221) {
     return 1066;
    }
if (index == 222) {
     return 1048;
    }
if (index == 223) {
     return 927;
    }
if (index == 224) {
     return 932;
    }
if (index == 225) {
     return 1052;
    }
if (index == 226) {
     return 939;
    }
if (index == 227) {
     return 1142;
    }
if (index == 228) {
     return 956;
    }
if (index == 229) {
     return 944;
    }
if (index == 230) {
     return 907;
    }
if (index == 231) {
     return 1102;
    }
if (index == 232) {
     return 1004;
    }
if (index == 233) {
     return 1084;
    }
if (index == 234) {
     return 885;
    }
if (index == 235) {
     return 942;
    }
if (index == 236) {
     return 1010;
    }
if (index == 237) {
     return 992;
    }
if (index == 238) {
     return 942;
    }
if (index == 239) {
     return 968;
    }
if (index == 240) {
     return 996;
    }
if (index == 241) {
     return 1057;
    }
if (index == 242) {
     return 1008;
    }
if (index == 243) {
     return 946;
    }
if (index == 244) {
     return 1022;
    }
if (index == 245) {
     return 1146;
    }
if (index == 246) {
     return 1029;
    }
if (index == 247) {
     return 974;
    }
if (index == 248) {
     return 1017;
    }
if (index == 249) {
     return 923;
    }
if (index == 250) {
     return 973;
    }
if (index == 251) {
     return 995;
    }
if (index == 252) {
     return 1038;
    }
if (index == 253) {
     return 995;
    }
if (index == 254) {
     return 1010;
    }
if (index == 255) {
     return 1025;
    }
if (index == 256) {
     return 1031;
    }
if (index == 257) {
     return 882;
    }
if (index == 258) {
     return 944;
    }
if (index == 259) {
     return 960;
    }
if (index == 260) {
     return 1013;
    }
if (index == 261) {
     return 941;
    }
if (index == 262) {
     return 1018;
    }
if (index == 263) {
     return 978;
    }
if (index == 264) {
     return 980;
    }
if (index == 265) {
     return 915;
    }
if (index == 266) {
     return 998;
    }
if (index == 267) {
     return 920;
    }
if (index == 268) {
     return 982;
    }
if (index == 269) {
     return 1054;
    }
if (index == 270) {
     return 1022;
    }
if (index == 271) {
     return 1077;
    }
if (index == 272) {
     return 987;
    }
if (index == 273) {
     return 1005;
    }
if (index == 274) {
     return 1001;
    }
if (index == 275) {
     return 994;
    }
if (index == 276) {
     return 1042;
    }
if (index == 277) {
     return 992;
    }
if (index == 278) {
     return 1018;
    }
if (index == 279) {
     return 988;
    }
if (index == 280) {
     return 947;
    }
if (index == 281) {
     return 960;
    }
if (index == 282) {
     return 1020;
    }
if (index == 283) {
     return 1006;
    }
if (index == 284) {
     return 983;
    }
if (index == 285) {
     return 943;
    }
if (index == 286) {
     return 1027;
    }
if (index == 287) {
     return 829;
    }
if (index == 288) {
     return 992;
    }
if (index == 289) {
     return 988;
    }
if (index == 290) {
     return 1018;
    }
if (index == 291) {
     return 972;
    }
if (index == 292) {
     return 985;
    }
if (index == 293) {
     return 909;
    }
if (index == 294) {
     return 1053;
    }
if (index == 295) {
     return 997;
    }
if (index == 296) {
     return 999;
    }
if (index == 297) {
     return 986;
    }
if (index == 298) {
     return 892;
    }
if (index == 299) {
     return 957;
    }
if (index == 300) {
     return 1194;
    }
if (index == 301) {
     return 1084;
    }
if (index == 302) {
     return 951;
    }
if (index == 303) {
     return 837;
    }
if (index == 304) {
     return 1037;
    }
if (index == 305) {
     return 860;
    }
if (index == 306) {
     return 1034;
    }
if (index == 307) {
     return 997;
    }
if (index == 308) {
     return 952;
    }
if (index == 309) {
     return 961;
    }
if (index == 310) {
     return 1037;
    }
if (index == 311) {
     return 1030;
    }
if (index == 312) {
     return 1004;
    }
if (index == 313) {
     return 1032;
    }
if (index == 314) {
     return 911;
    }
if (index == 315) {
     return 910;
    }
if (index == 316) {
     return 1190;
    }
if (index == 317) {
     return 1030;
    }
if (index == 318) {
     return 1027;
    }
if (index == 319) {
     return 1009;
    }
if (index == 320) {
     return 898;
    }
if (index == 321) {
     return 960;
    }
if (index == 322) {
     return 1052;
    }
if (index == 323) {
     return 1002;
    }
if (index == 324) {
     return 1039;
    }
if (index == 325) {
     return 1209;
    }
if (index == 326) {
     return 878;
    }
if (index == 327) {
     return 994;
    }
if (index == 328) {
     return 946;
    }
if (index == 329) {
     return 1019;
    }
if (index == 330) {
     return 931;
    }
if (index == 331) {
     return 964;
    }
if (index == 332) {
     return 925;
    }
if (index == 333) {
     return 970;
    }
if (index == 334) {
     return 912;
    }
if (index == 335) {
     return 1000;
    }
if (index == 336) {
     return 954;
    }
if (index == 337) {
     return 988;
    }
if (index == 338) {
     return 972;
    }
if (index == 339) {
     return 998;
    }
if (index == 340) {
     return 1027;
    }
if (index == 341) {
     return 940;
    }
if (index == 342) {
     return 1000;
    }
if (index == 343) {
     return 1005;
    }
if (index == 344) {
     return 959;
    }
if (index == 345) {
     return 1002;
    }
if (index == 346) {
     return 1044;
    }
if (index == 347) {
     return 967;
    }
if (index == 348) {
     return 955;
    }
if (index == 349) {
     return 968;
    }
if (index == 350) {
     return 953;
    }
if (index == 351) {
     return 966;
    }
if (index == 352) {
     return 900;
    }
if (index == 353) {
     return 1034;
    }
if (index == 354) {
     return 937;
    }
if (index == 355) {
     return 1071;
    }
if (index == 356) {
     return 937;
    }
if (index == 357) {
     return 994;
    }
if (index == 358) {
     return 973;
    }
if (index == 359) {
     return 961;
    }
if (index == 360) {
     return 949;
    }
if (index == 361) {
     return 1017;
    }
if (index == 362) {
     return 945;
    }
if (index == 363) {
     return 1033;
    }
if (index == 364) {
     return 947;
    }
if (index == 365) {
     return 936;
    }
if (index == 366) {
     return 949;
    }
if (index == 367) {
     return 1012;
    }
if (index == 368) {
     return 1032;
    }
if (index == 369) {
     return 1005;
    }
if (index == 370) {
     return 980;
    }
if (index == 371) {
     return 978;
    }
if (index == 372) {
     return 985;
    }
if (index == 373) {
     return 990;
    }
if (index == 374) {
     return 964;
    }
if (index == 375) {
     return 943;
    }
if (index == 376) {
     return 962;
    }
if (index == 377) {
     return 913;
    }
if (index == 378) {
     return 981;
    }
if (index == 379) {
     return 1004;
    }
if (index == 380) {
     return 1009;
    }
if (index == 381) {
     return 1035;
    }
if (index == 382) {
     return 971;
    }
if (index == 383) {
     return 963;
    }
if (index == 384) {
     return 970;
    }
if (index == 385) {
     return 975;
    }
if (index == 386) {
     return 987;
    }
if (index == 387) {
     return 1107;
    }
if (index > 387) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1519;
    }
if (index == 1) {
     return 1479;
    }
if (index == 2) {
     return 1470;
    }
if (index == 3) {
     return 1435;
    }
if (index == 4) {
     return 1435;
    }
if (index == 5) {
     return 1433;
    }
if (index == 6) {
     return 1435;
    }
if (index == 7) {
     return 1419;
    }
if (index == 8) {
     return 1435;
    }
if (index == 9) {
     return 1459;
    }
if (index == 10) {
     return 1443;
    }
if (index == 11) {
     return 1394;
    }
if (index == 12) {
     return 1401;
    }
if (index == 13) {
     return 1396;
    }
if (index == 14) {
     return 1399;
    }
if (index == 15) {
     return 1382;
    }
if (index == 16) {
     return 1409;
    }
if (index == 17) {
     return 1454;
    }
if (index == 18) {
     return 1421;
    }
if (index == 19) {
     return 1424;
    }
if (index == 20) {
     return 1416;
    }
if (index == 21) {
     return 1426;
    }
if (index == 22) {
     return 1416;
    }
if (index == 23) {
     return 1455;
    }
if (index == 24) {
     return 1426;
    }
if (index == 25) {
     return 1470;
    }
if (index == 26) {
     return 1443;
    }
if (index == 27) {
     return 1448;
    }
if (index == 28) {
     return 1453;
    }
if (index == 29) {
     return 1426;
    }
if (index == 30) {
     return 1418;
    }
if (index == 31) {
     return 1426;
    }
if (index == 32) {
     return 1432;
    }
if (index == 33) {
     return 1465;
    }
if (index == 34) {
     return 1438;
    }
if (index == 35) {
     return 1439;
    }
if (index == 36) {
     return 1431;
    }
if (index == 37) {
     return 1469;
    }
if (index == 38) {
     return 1418;
    }
if (index == 39) {
     return 1446;
    }
if (index == 40) {
     return 1441;
    }
if (index == 41) {
     return 1468;
    }
if (index == 42) {
     return 1365;
    }
if (index == 43) {
     return 1461;
    }
if (index == 44) {
     return 1434;
    }
if (index == 45) {
     return 1461;
    }
if (index == 46) {
     return 1386;
    }
if (index == 47) {
     return 1461;
    }
if (index == 48) {
     return 1456;
    }
if (index == 49) {
     return 1483;
    }
if (index == 50) {
     return 966;
    }
if (index == 51) {
     return 1461;
    }
if (index == 52) {
     return 1441;
    }
if (index == 53) {
     return 1461;
    }
if (index == 54) {
     return 1445;
    }
if (index == 55) {
     return 1479;
    }
if (index == 56) {
     return 1436;
    }
if (index == 57) {
     return 1479;
    }
if (index == 58) {
     return 1436;
    }
if (index == 59) {
     return 1467;
    }
if (index == 60) {
     return 1418;
    }
if (index == 61) {
     return 1415;
    }
if (index == 62) {
     return 1423;
    }
if (index == 63) {
     return 1438;
    }
if (index == 64) {
     return 1384;
    }
if (index == 65) {
     return 1417;
    }
if (index == 66) {
     return 1423;
    }
if (index == 67) {
     return 1413;
    }
if (index == 68) {
     return 950;
    }
if (index == 69) {
     return 1417;
    }
if (index == 70) {
     return 1420;
    }
if (index == 71) {
     return 1439;
    }
if (index == 72) {
     return 1418;
    }
if (index == 73) {
     return 1443;
    }
if (index == 74) {
     return 1286;
    }
if (index == 75) {
     return 1382;
    }
if (index == 76) {
     return 1368;
    }
if (index == 77) {
     return 1378;
    }
if (index == 78) {
     return 1375;
    }
if (index == 79) {
     return 1404;
    }
if (index == 80) {
     return 1370;
    }
if (index == 81) {
     return 1383;
    }
if (index == 82) {
     return 1365;
    }
if (index == 83) {
     return 1348;
    }
if (index == 84) {
     return 1381;
    }
if (index == 85) {
     return 1380;
    }
if (index == 86) {
     return 1365;
    }
if (index == 87) {
     return 959;
    }
if (index == 88) {
     return 1371;
    }
if (index == 89) {
     return 1393;
    }
if (index == 90) {
     return 980;
    }
if (index == 91) {
     return 1362;
    }
if (index == 92) {
     return 1390;
    }
if (index == 93) {
     return 1406;
    }
if (index == 94) {
     return 1384;
    }
if (index == 95) {
     return 1386;
    }
if (index == 96) {
     return 1328;
    }
if (index == 97) {
     return 1382;
    }
if (index == 98) {
     return 1389;
    }
if (index == 99) {
     return 1385;
    }
if (index == 100) {
     return 1322;
    }
if (index == 101) {
     return 1382;
    }
if (index == 102) {
     return 1379;
    }
if (index == 103) {
     return 1380;
    }
if (index == 104) {
     return 1348;
    }
if (index == 105) {
     return 1382;
    }
if (index == 106) {
     return 1361;
    }
if (index == 107) {
     return 1380;
    }
if (index == 108) {
     return 1365;
    }
if (index == 109) {
     return 1392;
    }
if (index == 110) {
     return 1324;
    }
if (index == 111) {
     return 1331;
    }
if (index == 112) {
     return 1368;
    }
if (index == 113) {
     return 1386;
    }
if (index == 114) {
     return 1368;
    }
if (index == 115) {
     return 1389;
    }
if (index == 116) {
     return 1365;
    }
if (index == 117) {
     return 1355;
    }
if (index == 118) {
     return 1386;
    }
if (index == 119) {
     return 1390;
    }
if (index == 120) {
     return 1365;
    }
if (index == 121) {
     return 984;
    }
if (index == 122) {
     return 1408;
    }
if (index == 123) {
     return 1395;
    }
if (index == 124) {
     return 1026;
    }
if (index == 125) {
     return 19;
    }
if (index == 126) {
     return 1383;
    }
if (index == 127) {
     return 1426;
    }
if (index == 128) {
     return 1478;
    }
if (index == 129) {
     return 1432;
    }
if (index == 130) {
     return 1023;
    }
if (index == 131) {
     return 1379;
    }
if (index == 132) {
     return 1373;
    }
if (index == 133) {
     return 976;
    }
if (index == 134) {
     return 1433;
    }
if (index == 135) {
     return 1450;
    }
if (index == 136) {
     return 1420;
    }
if (index == 137) {
     return 1400;
    }
if (index == 138) {
     return 1393;
    }
if (index == 139) {
     return 1416;
    }
if (index == 140) {
     return 1391;
    }
if (index == 141) {
     return 1440;
    }
if (index == 142) {
     return 1434;
    }
if (index == 143) {
     return 1365;
    }
if (index == 144) {
     return 1383;
    }
if (index == 145) {
     return 1390;
    }
if (index == 146) {
     return 1460;
    }
if (index == 147) {
     return 1428;
    }
if (index == 148) {
     return 1403;
    }
if (index == 149) {
     return 1361;
    }
if (index == 150) {
     return 1396;
    }
if (index == 151) {
     return 968;
    }
if (index == 152) {
     return 1415;
    }
if (index == 153) {
     return 1450;
    }
if (index == 154) {
     return 1380;
    }
if (index == 155) {
     return 1334;
    }
if (index == 156) {
     return 1372;
    }
if (index == 157) {
     return 1426;
    }
if (index == 158) {
     return 1408;
    }
if (index == 159) {
     return 1431;
    }
if (index == 160) {
     return 1375;
    }
if (index == 161) {
     return 1350;
    }
if (index == 162) {
     return 1340;
    }
if (index == 163) {
     return 1414;
    }
if (index == 164) {
     return 1433;
    }
if (index == 165) {
     return 1435;
    }
if (index == 166) {
     return 1388;
    }
if (index == 167) {
     return 1403;
    }
if (index == 168) {
     return 1386;
    }
if (index == 169) {
     return 1403;
    }
if (index == 170) {
     return 1435;
    }
if (index == 171) {
     return 1458;
    }
if (index == 172) {
     return 1410;
    }
if (index == 173) {
     return 1403;
    }
if (index == 174) {
     return 1398;
    }
if (index == 175) {
     return 1399;
    }
if (index == 176) {
     return 1476;
    }
if (index == 177) {
     return 1462;
    }
if (index == 178) {
     return 1346;
    }
if (index == 179) {
     return 1402;
    }
if (index == 180) {
     return 1408;
    }
if (index == 181) {
     return 1454;
    }
if (index == 182) {
     return 1371;
    }
if (index == 183) {
     return 985;
    }
if (index == 184) {
     return 1437;
    }
if (index == 185) {
     return 1461;
    }
if (index == 186) {
     return 1355;
    }
if (index == 187) {
     return 1398;
    }
if (index == 188) {
     return 1428;
    }
if (index == 189) {
     return 1449;
    }
if (index == 190) {
     return 1051;
    }
if (index == 191) {
     return 1375;
    }
if (index == 192) {
     return 1426;
    }
if (index == 193) {
     return 1366;
    }
if (index == 194) {
     return 1442;
    }
if (index == 195) {
     return 1462;
    }
if (index == 196) {
     return 1413;
    }
if (index == 197) {
     return 1375;
    }
if (index == 198) {
     return 1392;
    }
if (index == 199) {
     return 1392;
    }
if (index == 200) {
     return 1454;
    }
if (index == 201) {
     return 1506;
    }
if (index == 202) {
     return 1411;
    }
if (index == 203) {
     return 1360;
    }
if (index == 204) {
     return 1321;
    }
if (index == 205) {
     return 1017;
    }
if (index == 206) {
     return 1467;
    }
if (index == 207) {
     return 1498;
    }
if (index == 208) {
     return 1403;
    }
if (index == 209) {
     return 1396;
    }
if (index == 210) {
     return 1384;
    }
if (index == 211) {
     return 1408;
    }
if (index == 212) {
     return 1425;
    }
if (index == 213) {
     return 1460;
    }
if (index == 214) {
     return 1396;
    }
if (index == 215) {
     return 1411;
    }
if (index == 216) {
     return 1445;
    }
if (index == 217) {
     return 1458;
    }
if (index == 218) {
     return 1379;
    }
if (index == 219) {
     return 1427;
    }
if (index == 220) {
     return 1460;
    }
if (index == 221) {
     return 1475;
    }
if (index == 222) {
     return 1435;
    }
if (index == 223) {
     return 1432;
    }
if (index == 224) {
     return 1438;
    }
if (index == 225) {
     return 1486;
    }
if (index == 226) {
     return 1448;
    }
if (index == 227) {
     return 1505;
    }
if (index == 228) {
     return 1417;
    }
if (index == 229) {
     return 1365;
    }
if (index == 230) {
     return 1440;
    }
if (index == 231) {
     return 1495;
    }
if (index == 232) {
     return 1392;
    }
if (index == 233) {
     return 1462;
    }
if (index == 234) {
     return 1433;
    }
if (index == 235) {
     return 1484;
    }
if (index == 236) {
     return 1444;
    }
if (index == 237) {
     return 1372;
    }
if (index == 238) {
     return 1458;
    }
if (index == 239) {
     return 1429;
    }
if (index == 240) {
     return 1432;
    }
if (index == 241) {
     return 1427;
    }
if (index == 242) {
     return 1450;
    }
if (index == 243) {
     return 1427;
    }
if (index == 244) {
     return 1374;
    }
if (index == 245) {
     return 1032;
    }
if (index == 246) {
     return 1442;
    }
if (index == 247) {
     return 1431;
    }
if (index == 248) {
     return 1451;
    }
if (index == 249) {
     return 1427;
    }
if (index == 250) {
     return 1405;
    }
if (index == 251) {
     return 1427;
    }
if (index == 252) {
     return 1444;
    }
if (index == 253) {
     return 1427;
    }
if (index == 254) {
     return 1376;
    }
if (index == 255) {
     return 1427;
    }
if (index == 256) {
     return 1428;
    }
if (index == 257) {
     return 1433;
    }
if (index == 258) {
     return 1402;
    }
if (index == 259) {
     return 1374;
    }
if (index == 260) {
     return 1450;
    }
if (index == 261) {
     return 1451;
    }
if (index == 262) {
     return 1427;
    }
if (index == 263) {
     return 1376;
    }
if (index == 264) {
     return 1442;
    }
if (index == 265) {
     return 1427;
    }
if (index == 266) {
     return 1442;
    }
if (index == 267) {
     return 1428;
    }
if (index == 268) {
     return 1381;
    }
if (index == 269) {
     return 1450;
    }
if (index == 270) {
     return 1438;
    }
if (index == 271) {
     return 1452;
    }
if (index == 272) {
     return 1369;
    }
if (index == 273) {
     return 1435;
    }
if (index == 274) {
     return 1444;
    }
if (index == 275) {
     return 1471;
    }
if (index == 276) {
     return 1425;
    }
if (index == 277) {
     return 1379;
    }
if (index == 278) {
     return 1382;
    }
if (index == 279) {
     return 1434;
    }
if (index == 280) {
     return 1420;
    }
if (index == 281) {
     return 1458;
    }
if (index == 282) {
     return 1431;
    }
if (index == 283) {
     return 1419;
    }
if (index == 284) {
     return 1415;
    }
if (index == 285) {
     return 1448;
    }
if (index == 286) {
     return 1443;
    }
if (index == 287) {
     return 1450;
    }
if (index == 288) {
     return 1441;
    }
if (index == 289) {
     return 1374;
    }
if (index == 290) {
     return 1366;
    }
if (index == 291) {
     return 1395;
    }
if (index == 292) {
     return 1453;
    }
if (index == 293) {
     return 1460;
    }
if (index == 294) {
     return 1432;
    }
if (index == 295) {
     return 1372;
    }
if (index == 296) {
     return 1378;
    }
if (index == 297) {
     return 1439;
    }
if (index == 298) {
     return 1446;
    }
if (index == 299) {
     return 1450;
    }
if (index == 300) {
     return 1065;
    }
if (index == 301) {
     return 1452;
    }
if (index == 302) {
     return 1451;
    }
if (index == 303) {
     return 1456;
    }
if (index == 304) {
     return 1441;
    }
if (index == 305) {
     return 1462;
    }
if (index == 306) {
     return 1401;
    }
if (index == 307) {
     return 1429;
    }
if (index == 308) {
     return 1442;
    }
if (index == 309) {
     return 1448;
    }
if (index == 310) {
     return 1442;
    }
if (index == 311) {
     return 1424;
    }
if (index == 312) {
     return 1405;
    }
if (index == 313) {
     return 1437;
    }
if (index == 314) {
     return 1445;
    }
if (index == 315) {
     return 1452;
    }
if (index == 316) {
     return 1073;
    }
if (index == 317) {
     return 1386;
    }
if (index == 318) {
     return 1416;
    }
if (index == 319) {
     return 1439;
    }
if (index == 320) {
     return 1444;
    }
if (index == 321) {
     return 1468;
    }
if (index == 322) {
     return 1429;
    }
if (index == 323) {
     return 1382;
    }
if (index == 324) {
     return 1395;
    }
if (index == 325) {
     return 1049;
    }
if (index == 326) {
     return 1443;
    }
if (index == 327) {
     return 1472;
    }
if (index == 328) {
     return 1454;
    }
if (index == 329) {
     return 1472;
    }
if (index == 330) {
     return 1439;
    }
if (index == 331) {
     return 1468;
    }
if (index == 332) {
     return 1449;
    }
if (index == 333) {
     return 1467;
    }
if (index == 334) {
     return 1444;
    }
if (index == 335) {
     return 1474;
    }
if (index == 336) {
     return 1452;
    }
if (index == 337) {
     return 1476;
    }
if (index == 338) {
     return 1447;
    }
if (index == 339) {
     return 1478;
    }
if (index == 340) {
     return 1421;
    }
if (index == 341) {
     return 1420;
    }
if (index == 342) {
     return 1457;
    }
if (index == 343) {
     return 1463;
    }
if (index == 344) {
     return 1442;
    }
if (index == 345) {
     return 1412;
    }
if (index == 346) {
     return 1379;
    }
if (index == 347) {
     return 1411;
    }
if (index == 348) {
     return 1446;
    }
if (index == 349) {
     return 1458;
    }
if (index == 350) {
     return 1418;
    }
if (index == 351) {
     return 1393;
    }
if (index == 352) {
     return 1438;
    }
if (index == 353) {
     return 1494;
    }
if (index == 354) {
     return 1457;
    }
if (index == 355) {
     return 1500;
    }
if (index == 356) {
     return 1452;
    }
if (index == 357) {
     return 1501;
    }
if (index == 358) {
     return 1341;
    }
if (index == 359) {
     return 1400;
    }
if (index == 360) {
     return 1444;
    }
if (index == 361) {
     return 1455;
    }
if (index == 362) {
     return 1391;
    }
if (index == 363) {
     return 1415;
    }
if (index == 364) {
     return 1446;
    }
if (index == 365) {
     return 1471;
    }
if (index == 366) {
     return 1425;
    }
if (index == 367) {
     return 1474;
    }
if (index == 368) {
     return 1444;
    }
if (index == 369) {
     return 1498;
    }
if (index == 370) {
     return 1452;
    }
if (index == 371) {
     return 1492;
    }
if (index == 372) {
     return 1442;
    }
if (index == 373) {
     return 1493;
    }
if (index == 374) {
     return 1442;
    }
if (index == 375) {
     return 1468;
    }
if (index == 376) {
     return 1453;
    }
if (index == 377) {
     return 1476;
    }
if (index == 378) {
     return 1451;
    }
if (index == 379) {
     return 1450;
    }
if (index == 380) {
     return 1442;
    }
if (index == 381) {
     return 1450;
    }
if (index == 382) {
     return 1444;
    }
if (index == 383) {
     return 1468;
    }
if (index == 384) {
     return 1465;
    }
if (index == 385) {
     return 1466;
    }
if (index == 386) {
     return 1398;
    }
if (index == 387) {
     return 1492;
    }
if (index > 387) {
    return 1200;
    }
}

// We load the images from archive.org -- you can modify this function to retrieve images
// using a different URL structure
br.getPageURI = function(index, reduce, rotate) {
    // reduce and rotate are ignored in this simple implementation, but we
    // could e.g. look at reduce and load images from a different directory
    // or pass the information to an image server
    var imgStr = (index+1).toString();
    var url = '/fedora/get/seapage:303_' + imgStr + '/digitalImage';
    return url;
}

// Return which side, left or right, that a given page should be displayed on
br.getPageSide = function(index) {
    if (0 == (index & 0x1)) {
        return 'R';
    } else {
        return 'L';
    }
}

// This function returns the left and right indices for the user-visible
// spread that contains the given index.  The return values may be
// null if there is no facing page or the index is invalid.
br.getSpreadIndices = function(pindex) {
    var spreadIndices = [null, null];
    if ('rl' == this.pageProgression) {
        // Right to Left
        if (this.getPageSide(pindex) == 'R') {
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex + 1;
        } else {
            // Given index was LHS
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex - 1;
        }
    } else {
        // Left to right
        if (this.getPageSide(pindex) == 'L') {
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex + 1;
        } else {
            // Given index was RHS
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex - 1;
        }
    }
    
    return spreadIndices;
}

// For a given "accessible page index" return the page number in the book.
//
// For example, index 5 might correspond to "Page 1" if there is front matter such
// as a title page and table of contents.
br.getPageNum = function(index) {
    return index+1;
}

// Total number of leafs
br.numLeafs = 388;

// Book title and the URL used for the book title link
br.bookTitle= "Sunny days in Burma";
br.bookAuthor= "Wills, Arthur Winkler";
br.bookPub= "Birmingham: Midland Counties Herald Press, 1905";
br.bookKeyword= "Burma--Description and travel";
br.bookUrl  = '/catalog/sea:303';

// Override the path used to find UI images
br.imagesBaseURL = '../BookReader/images/';

br.getEmbedCode = function(frameWidth, frameHeight, viewParams) {
    return "Embed code not supported in bookreader demo.";
}

// Let's go!
br.init();

// read-aloud and search need backend compenents and are not supported in the demo
$('#BRtoolbar').find('.read').hide();
$('#textSrch').hide();
$('#btnSrch').hide();