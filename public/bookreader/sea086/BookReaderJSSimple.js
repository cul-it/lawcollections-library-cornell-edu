//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 373;
    }
if (index == 1) {
     return 359;
    }
if (index == 2) {
     return 339;
    }
if (index == 3) {
     return 318;
    }
if (index == 4) {
     return 333;
    }
if (index == 5) {
     return 311;
    }
if (index == 6) {
     return 332;
    }
if (index == 7) {
     return 324;
    }
if (index == 8) {
     return 318;
    }
if (index == 9) {
     return 324;
    }
if (index == 10) {
     return 321;
    }
if (index == 11) {
     return 321;
    }
if (index == 12) {
     return 320;
    }
if (index == 13) {
     return 338;
    }
if (index == 14) {
     return 319;
    }
if (index == 15) {
     return 326;
    }
if (index == 16) {
     return 320;
    }
if (index == 17) {
     return 312;
    }
if (index == 18) {
     return 317;
    }
if (index == 19) {
     return 316;
    }
if (index == 20) {
     return 316;
    }
if (index == 21) {
     return 327;
    }
if (index == 22) {
     return 315;
    }
if (index == 23) {
     return 336;
    }
if (index == 24) {
     return 304;
    }
if (index == 25) {
     return 492;
    }
if (index == 26) {
     return 340;
    }
if (index == 27) {
     return 626;
    }
if (index == 28) {
     return 633;
    }
if (index == 29) {
     return 639;
    }
if (index == 30) {
     return 644;
    }
if (index == 31) {
     return 658;
    }
if (index == 32) {
     return 615;
    }
if (index == 33) {
     return 626;
    }
if (index == 34) {
     return 630;
    }
if (index == 35) {
     return 621;
    }
if (index == 36) {
     return 614;
    }
if (index == 37) {
     return 1008;
    }
if (index == 38) {
     return 626;
    }
if (index == 39) {
     return 636;
    }
if (index == 40) {
     return 637;
    }
if (index == 41) {
     return 643;
    }
if (index == 42) {
     return 629;
    }
if (index == 43) {
     return 638;
    }
if (index == 44) {
     return 622;
    }
if (index == 45) {
     return 641;
    }
if (index == 46) {
     return 612;
    }
if (index == 47) {
     return 652;
    }
if (index == 48) {
     return 575;
    }
if (index == 49) {
     return 1016;
    }
if (index == 50) {
     return 617;
    }
if (index == 51) {
     return 631;
    }
if (index == 52) {
     return 616;
    }
if (index == 53) {
     return 632;
    }
if (index == 54) {
     return 617;
    }
if (index == 55) {
     return 636;
    }
if (index == 56) {
     return 619;
    }
if (index == 57) {
     return 631;
    }
if (index == 58) {
     return 1016;
    }
if (index == 59) {
     return 598;
    }
if (index == 60) {
     return 637;
    }
if (index == 61) {
     return 633;
    }
if (index == 62) {
     return 617;
    }
if (index == 63) {
     return 629;
    }
if (index == 64) {
     return 623;
    }
if (index == 65) {
     return 639;
    }
if (index == 66) {
     return 625;
    }
if (index == 67) {
     return 628;
    }
if (index == 68) {
     return 627;
    }
if (index == 69) {
     return 630;
    }
if (index == 70) {
     return 623;
    }
if (index == 71) {
     return 628;
    }
if (index == 72) {
     return 625;
    }
if (index == 73) {
     return 644;
    }
if (index == 74) {
     return 630;
    }
if (index == 75) {
     return 643;
    }
if (index == 76) {
     return 627;
    }
if (index == 77) {
     return 635;
    }
if (index == 78) {
     return 624;
    }
if (index == 79) {
     return 634;
    }
if (index == 80) {
     return 616;
    }
if (index == 81) {
     return 640;
    }
if (index == 82) {
     return 618;
    }
if (index == 83) {
     return 637;
    }
if (index == 84) {
     return 626;
    }
if (index == 85) {
     return 638;
    }
if (index == 86) {
     return 630;
    }
if (index == 87) {
     return 646;
    }
if (index == 88) {
     return 625;
    }
if (index == 89) {
     return 640;
    }
if (index == 90) {
     return 630;
    }
if (index == 91) {
     return 634;
    }
if (index == 92) {
     return 629;
    }
if (index == 93) {
     return 631;
    }
if (index == 94) {
     return 622;
    }
if (index == 95) {
     return 638;
    }
if (index == 96) {
     return 620;
    }
if (index == 97) {
     return 629;
    }
if (index == 98) {
     return 1008;
    }
if (index == 99) {
     return 629;
    }
if (index == 100) {
     return 617;
    }
if (index == 101) {
     return 633;
    }
if (index == 102) {
     return 614;
    }
if (index == 103) {
     return 638;
    }
if (index == 104) {
     return 640;
    }
if (index == 105) {
     return 647;
    }
if (index == 106) {
     return 638;
    }
if (index == 107) {
     return 639;
    }
if (index == 108) {
     return 628;
    }
if (index == 109) {
     return 645;
    }
if (index == 110) {
     return 643;
    }
if (index == 111) {
     return 644;
    }
if (index == 112) {
     return 622;
    }
if (index == 113) {
     return 634;
    }
if (index == 114) {
     return 627;
    }
if (index == 115) {
     return 640;
    }
if (index == 116) {
     return 645;
    }
if (index == 117) {
     return 634;
    }
if (index == 118) {
     return 639;
    }
if (index == 119) {
     return 646;
    }
if (index == 120) {
     return 644;
    }
if (index == 121) {
     return 645;
    }
if (index == 122) {
     return 639;
    }
if (index == 123) {
     return 645;
    }
if (index == 124) {
     return 638;
    }
if (index == 125) {
     return 643;
    }
if (index == 126) {
     return 641;
    }
if (index == 127) {
     return 623;
    }
if (index == 128) {
     return 573;
    }
if (index == 129) {
     return 684;
    }
if (index == 130) {
     return 642;
    }
if (index == 131) {
     return 637;
    }
if (index == 132) {
     return 628;
    }
if (index == 133) {
     return 649;
    }
if (index == 134) {
     return 587;
    }
if (index == 135) {
     return 642;
    }
if (index == 136) {
     return 636;
    }
if (index == 137) {
     return 642;
    }
if (index == 138) {
     return 646;
    }
if (index == 139) {
     return 642;
    }
if (index == 140) {
     return 641;
    }
if (index == 141) {
     return 637;
    }
if (index == 142) {
     return 635;
    }
if (index == 143) {
     return 647;
    }
if (index == 144) {
     return 638;
    }
if (index == 145) {
     return 642;
    }
if (index == 146) {
     return 639;
    }
if (index == 147) {
     return 630;
    }
if (index == 148) {
     return 1012;
    }
if (index == 149) {
     return 609;
    }
if (index == 150) {
     return 638;
    }
if (index == 151) {
     return 639;
    }
if (index == 152) {
     return 1014;
    }
if (index == 153) {
     return 604;
    }
if (index == 154) {
     return 626;
    }
if (index == 155) {
     return 646;
    }
if (index == 156) {
     return 632;
    }
if (index == 157) {
     return 647;
    }
if (index == 158) {
     return 589;
    }
if (index == 159) {
     return 1024;
    }
if (index == 160) {
     return 630;
    }
if (index == 161) {
     return 647;
    }
if (index == 162) {
     return 583;
    }
if (index == 163) {
     return 1024;
    }
if (index == 164) {
     return 630;
    }
if (index == 165) {
     return 640;
    }
if (index == 166) {
     return 1024;
    }
if (index == 167) {
     return 617;
    }
if (index == 168) {
     return 624;
    }
if (index == 169) {
     return 641;
    }
if (index == 170) {
     return 637;
    }
if (index == 171) {
     return 642;
    }
if (index == 172) {
     return 639;
    }
if (index == 173) {
     return 644;
    }
if (index == 174) {
     return 634;
    }
if (index == 175) {
     return 634;
    }
if (index == 176) {
     return 645;
    }
if (index == 177) {
     return 637;
    }
if (index == 178) {
     return 569;
    }
if (index == 179) {
     return 1024;
    }
if (index == 180) {
     return 633;
    }
if (index == 181) {
     return 639;
    }
if (index == 182) {
     return 638;
    }
if (index == 183) {
     return 644;
    }
if (index == 184) {
     return 637;
    }
if (index == 185) {
     return 658;
    }
if (index == 186) {
     return 647;
    }
if (index == 187) {
     return 642;
    }
if (index == 188) {
     return 594;
    }
if (index == 189) {
     return 1016;
    }
if (index == 190) {
     return 620;
    }
if (index == 191) {
     return 642;
    }
if (index == 192) {
     return 636;
    }
if (index == 193) {
     return 641;
    }
if (index == 194) {
     return 638;
    }
if (index == 195) {
     return 636;
    }
if (index == 196) {
     return 626;
    }
if (index == 197) {
     return 636;
    }
if (index == 198) {
     return 624;
    }
if (index == 199) {
     return 641;
    }
if (index == 200) {
     return 630;
    }
if (index == 201) {
     return 649;
    }
if (index == 202) {
     return 629;
    }
if (index == 203) {
     return 640;
    }
if (index == 204) {
     return 637;
    }
if (index == 205) {
     return 652;
    }
if (index == 206) {
     return 635;
    }
if (index == 207) {
     return 653;
    }
if (index == 208) {
     return 637;
    }
if (index == 209) {
     return 638;
    }
if (index == 210) {
     return 642;
    }
if (index == 211) {
     return 645;
    }
if (index == 212) {
     return 633;
    }
if (index == 213) {
     return 634;
    }
if (index == 214) {
     return 621;
    }
if (index == 215) {
     return 640;
    }
if (index == 216) {
     return 638;
    }
if (index == 217) {
     return 640;
    }
if (index == 218) {
     return 626;
    }
if (index == 219) {
     return 638;
    }
if (index == 220) {
     return 629;
    }
if (index == 221) {
     return 645;
    }
if (index == 222) {
     return 646;
    }
if (index == 223) {
     return 602;
    }
if (index == 224) {
     return 637;
    }
if (index == 225) {
     return 633;
    }
if (index == 226) {
     return 638;
    }
if (index == 227) {
     return 641;
    }
if (index == 228) {
     return 627;
    }
if (index == 229) {
     return 641;
    }
if (index == 230) {
     return 641;
    }
if (index == 231) {
     return 647;
    }
if (index == 232) {
     return 637;
    }
if (index == 233) {
     return 641;
    }
if (index == 234) {
     return 654;
    }
if (index == 235) {
     return 632;
    }
if (index == 236) {
     return 635;
    }
if (index == 237) {
     return 643;
    }
if (index == 238) {
     return 1009;
    }
if (index == 239) {
     return 622;
    }
if (index == 240) {
     return 621;
    }
if (index == 241) {
     return 642;
    }
if (index == 242) {
     return 641;
    }
if (index == 243) {
     return 642;
    }
if (index == 244) {
     return 645;
    }
if (index == 245) {
     return 623;
    }
if (index == 246) {
     return 1017;
    }
if (index == 247) {
     return 633;
    }
if (index == 248) {
     return 620;
    }
if (index == 249) {
     return 639;
    }
if (index == 250) {
     return 625;
    }
if (index == 251) {
     return 641;
    }
if (index == 252) {
     return 627;
    }
if (index == 253) {
     return 637;
    }
if (index == 254) {
     return 631;
    }
if (index == 255) {
     return 645;
    }
if (index == 256) {
     return 628;
    }
if (index == 257) {
     return 636;
    }
if (index == 258) {
     return 628;
    }
if (index == 259) {
     return 642;
    }
if (index == 260) {
     return 629;
    }
if (index == 261) {
     return 645;
    }
if (index == 262) {
     return 625;
    }
if (index == 263) {
     return 642;
    }
if (index == 264) {
     return 630;
    }
if (index == 265) {
     return 635;
    }
if (index == 266) {
     return 635;
    }
if (index == 267) {
     return 639;
    }
if (index == 268) {
     return 634;
    }
if (index == 269) {
     return 644;
    }
if (index == 270) {
     return 641;
    }
if (index == 271) {
     return 641;
    }
if (index == 272) {
     return 630;
    }
if (index == 273) {
     return 639;
    }
if (index == 274) {
     return 631;
    }
if (index == 275) {
     return 648;
    }
if (index == 276) {
     return 631;
    }
if (index == 277) {
     return 655;
    }
if (index == 278) {
     return 640;
    }
if (index == 279) {
     return 647;
    }
if (index == 280) {
     return 627;
    }
if (index == 281) {
     return 628;
    }
if (index == 282) {
     return 638;
    }
if (index == 283) {
     return 602;
    }
if (index == 284) {
     return 647;
    }
if (index == 285) {
     return 639;
    }
if (index == 286) {
     return 593;
    }
if (index == 287) {
     return 664;
    }
if (index == 288) {
     return 636;
    }
if (index == 289) {
     return 631;
    }
if (index == 290) {
     return 628;
    }
if (index == 291) {
     return 648;
    }
if (index == 292) {
     return 634;
    }
if (index == 293) {
     return 646;
    }
if (index == 294) {
     return 625;
    }
if (index == 295) {
     return 638;
    }
if (index == 296) {
     return 1019;
    }
if (index == 297) {
     return 605;
    }
if (index == 298) {
     return 631;
    }
if (index == 299) {
     return 637;
    }
if (index == 300) {
     return 632;
    }
if (index == 301) {
     return 637;
    }
if (index == 302) {
     return 643;
    }
if (index == 303) {
     return 636;
    }
if (index == 304) {
     return 629;
    }
if (index == 305) {
     return 672;
    }
if (index == 306) {
     return 648;
    }
if (index == 307) {
     return 643;
    }
if (index == 308) {
     return 631;
    }
if (index == 309) {
     return 660;
    }
if (index == 310) {
     return 639;
    }
if (index == 311) {
     return 655;
    }
if (index == 312) {
     return 648;
    }
if (index == 313) {
     return 649;
    }
if (index == 314) {
     return 633;
    }
if (index == 315) {
     return 696;
    }
if (index == 316) {
     return 658;
    }
if (index == 317) {
     return 697;
    }
if (index == 318) {
     return 680;
    }
if (index == 319) {
     return 693;
    }
if (index == 320) {
     return 658;
    }
if (index == 321) {
     return 703;
    }
if (index == 322) {
     return 678;
    }
if (index == 323) {
     return 686;
    }
if (index == 324) {
     return 671;
    }
if (index == 325) {
     return 700;
    }
if (index == 326) {
     return 658;
    }
if (index == 327) {
     return 694;
    }
if (index == 328) {
     return 665;
    }
if (index == 329) {
     return 708;
    }
if (index == 330) {
     return 658;
    }
if (index == 331) {
     return 1025;
    }
if (index == 332) {
     return 681;
    }
if (index == 333) {
     return 687;
    }
if (index == 334) {
     return 669;
    }
if (index == 335) {
     return 684;
    }
if (index == 336) {
     return 1025;
    }
if (index == 337) {
     return 676;
    }
if (index == 338) {
     return 706;
    }
if (index == 339) {
     return 696;
    }
if (index == 340) {
     return 714;
    }
if (index == 341) {
     return 709;
    }
if (index == 342) {
     return 712;
    }
if (index == 343) {
     return 685;
    }
if (index == 344) {
     return 712;
    }
if (index == 345) {
     return 704;
    }
if (index == 346) {
     return 676;
    }
if (index == 347) {
     return 694;
    }
if (index == 348) {
     return 676;
    }
if (index == 349) {
     return 703;
    }
if (index == 350) {
     return 676;
    }
if (index == 351) {
     return 676;
    }
if (index == 352) {
     return 676;
    }
if (index == 353) {
     return 706;
    }
if (index == 354) {
     return 695;
    }
if (index == 355) {
     return 722;
    }
if (index == 356) {
     return 676;
    }
if (index == 357) {
     return 775;
    }
if (index > 357) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 553;
    }
if (index == 1) {
     return 521;
    }
if (index == 2) {
     return 516;
    }
if (index == 3) {
     return 516;
    }
if (index == 4) {
     return 518;
    }
if (index == 5) {
     return 517;
    }
if (index == 6) {
     return 525;
    }
if (index == 7) {
     return 517;
    }
if (index == 8) {
     return 524;
    }
if (index == 9) {
     return 518;
    }
if (index == 10) {
     return 527;
    }
if (index == 11) {
     return 519;
    }
if (index == 12) {
     return 525;
    }
if (index == 13) {
     return 523;
    }
if (index == 14) {
     return 515;
    }
if (index == 15) {
     return 530;
    }
if (index == 16) {
     return 525;
    }
if (index == 17) {
     return 520;
    }
if (index == 18) {
     return 522;
    }
if (index == 19) {
     return 525;
    }
if (index == 20) {
     return 521;
    }
if (index == 21) {
     return 523;
    }
if (index == 22) {
     return 523;
    }
if (index == 23) {
     return 527;
    }
if (index == 24) {
     return 516;
    }
if (index == 25) {
     return 335;
    }
if (index == 26) {
     return 526;
    }
if (index == 27) {
     return 1035;
    }
if (index == 28) {
     return 1031;
    }
if (index == 29) {
     return 1031;
    }
if (index == 30) {
     return 1034;
    }
if (index == 31) {
     return 1017;
    }
if (index == 32) {
     return 998;
    }
if (index == 33) {
     return 1022;
    }
if (index == 34) {
     return 1007;
    }
if (index == 35) {
     return 1019;
    }
if (index == 36) {
     return 1016;
    }
if (index == 37) {
     return 660;
    }
if (index == 38) {
     return 1023;
    }
if (index == 39) {
     return 1024;
    }
if (index == 40) {
     return 1040;
    }
if (index == 41) {
     return 1026;
    }
if (index == 42) {
     return 1033;
    }
if (index == 43) {
     return 1024;
    }
if (index == 44) {
     return 1035;
    }
if (index == 45) {
     return 1020;
    }
if (index == 46) {
     return 1017;
    }
if (index == 47) {
     return 1022;
    }
if (index == 48) {
     return 1016;
    }
if (index == 49) {
     return 670;
    }
if (index == 50) {
     return 1030;
    }
if (index == 51) {
     return 1020;
    }
if (index == 52) {
     return 1027;
    }
if (index == 53) {
     return 1020;
    }
if (index == 54) {
     return 1022;
    }
if (index == 55) {
     return 1019;
    }
if (index == 56) {
     return 1023;
    }
if (index == 57) {
     return 1028;
    }
if (index == 58) {
     return 645;
    }
if (index == 59) {
     return 1016;
    }
if (index == 60) {
     return 1031;
    }
if (index == 61) {
     return 1017;
    }
if (index == 62) {
     return 1019;
    }
if (index == 63) {
     return 1014;
    }
if (index == 64) {
     return 1027;
    }
if (index == 65) {
     return 1019;
    }
if (index == 66) {
     return 1017;
    }
if (index == 67) {
     return 1019;
    }
if (index == 68) {
     return 1016;
    }
if (index == 69) {
     return 1023;
    }
if (index == 70) {
     return 1016;
    }
if (index == 71) {
     return 1018;
    }
if (index == 72) {
     return 1019;
    }
if (index == 73) {
     return 1016;
    }
if (index == 74) {
     return 1018;
    }
if (index == 75) {
     return 1029;
    }
if (index == 76) {
     return 1016;
    }
if (index == 77) {
     return 1017;
    }
if (index == 78) {
     return 1018;
    }
if (index == 79) {
     return 1020;
    }
if (index == 80) {
     return 1017;
    }
if (index == 81) {
     return 1020;
    }
if (index == 82) {
     return 1020;
    }
if (index == 83) {
     return 1023;
    }
if (index == 84) {
     return 1026;
    }
if (index == 85) {
     return 1016;
    }
if (index == 86) {
     return 1022;
    }
if (index == 87) {
     return 1016;
    }
if (index == 88) {
     return 1024;
    }
if (index == 89) {
     return 1023;
    }
if (index == 90) {
     return 1030;
    }
if (index == 91) {
     return 1024;
    }
if (index == 92) {
     return 1021;
    }
if (index == 93) {
     return 1011;
    }
if (index == 94) {
     return 1017;
    }
if (index == 95) {
     return 1014;
    }
if (index == 96) {
     return 1009;
    }
if (index == 97) {
     return 1012;
    }
if (index == 98) {
     return 612;
    }
if (index == 99) {
     return 1014;
    }
if (index == 100) {
     return 1016;
    }
if (index == 101) {
     return 1027;
    }
if (index == 102) {
     return 1010;
    }
if (index == 103) {
     return 1028;
    }
if (index == 104) {
     return 1016;
    }
if (index == 105) {
     return 1036;
    }
if (index == 106) {
     return 1025;
    }
if (index == 107) {
     return 1034;
    }
if (index == 108) {
     return 1016;
    }
if (index == 109) {
     return 1031;
    }
if (index == 110) {
     return 1032;
    }
if (index == 111) {
     return 1019;
    }
if (index == 112) {
     return 1024;
    }
if (index == 113) {
     return 1014;
    }
if (index == 114) {
     return 1018;
    }
if (index == 115) {
     return 1014;
    }
if (index == 116) {
     return 1041;
    }
if (index == 117) {
     return 1017;
    }
if (index == 118) {
     return 1044;
    }
if (index == 119) {
     return 1042;
    }
if (index == 120) {
     return 1044;
    }
if (index == 121) {
     return 1040;
    }
if (index == 122) {
     return 1026;
    }
if (index == 123) {
     return 1022;
    }
if (index == 124) {
     return 1022;
    }
if (index == 125) {
     return 1013;
    }
if (index == 126) {
     return 1026;
    }
if (index == 127) {
     return 1022;
    }
if (index == 128) {
     return 1016;
    }
if (index == 129) {
     return 1044;
    }
if (index == 130) {
     return 1020;
    }
if (index == 131) {
     return 1042;
    }
if (index == 132) {
     return 1019;
    }
if (index == 133) {
     return 1028;
    }
if (index == 134) {
     return 1024;
    }
if (index == 135) {
     return 1024;
    }
if (index == 136) {
     return 1031;
    }
if (index == 137) {
     return 1024;
    }
if (index == 138) {
     return 1025;
    }
if (index == 139) {
     return 1027;
    }
if (index == 140) {
     return 1028;
    }
if (index == 141) {
     return 1024;
    }
if (index == 142) {
     return 1020;
    }
if (index == 143) {
     return 1026;
    }
if (index == 144) {
     return 1026;
    }
if (index == 145) {
     return 1024;
    }
if (index == 146) {
     return 1025;
    }
if (index == 147) {
     return 1028;
    }
if (index == 148) {
     return 659;
    }
if (index == 149) {
     return 1022;
    }
if (index == 150) {
     return 1027;
    }
if (index == 151) {
     return 1037;
    }
if (index == 152) {
     return 675;
    }
if (index == 153) {
     return 1024;
    }
if (index == 154) {
     return 1031;
    }
if (index == 155) {
     return 1027;
    }
if (index == 156) {
     return 1024;
    }
if (index == 157) {
     return 1044;
    }
if (index == 158) {
     return 1024;
    }
if (index == 159) {
     return 693;
    }
if (index == 160) {
     return 1024;
    }
if (index == 161) {
     return 1039;
    }
if (index == 162) {
     return 1024;
    }
if (index == 163) {
     return 636;
    }
if (index == 164) {
     return 1024;
    }
if (index == 165) {
     return 1029;
    }
if (index == 166) {
     return 665;
    }
if (index == 167) {
     return 1019;
    }
if (index == 168) {
     return 1027;
    }
if (index == 169) {
     return 1029;
    }
if (index == 170) {
     return 1030;
    }
if (index == 171) {
     return 1045;
    }
if (index == 172) {
     return 1028;
    }
if (index == 173) {
     return 1038;
    }
if (index == 174) {
     return 1028;
    }
if (index == 175) {
     return 1024;
    }
if (index == 176) {
     return 1033;
    }
if (index == 177) {
     return 1024;
    }
if (index == 178) {
     return 1024;
    }
if (index == 179) {
     return 678;
    }
if (index == 180) {
     return 1030;
    }
if (index == 181) {
     return 1030;
    }
if (index == 182) {
     return 1031;
    }
if (index == 183) {
     return 1040;
    }
if (index == 184) {
     return 1024;
    }
if (index == 185) {
     return 1028;
    }
if (index == 186) {
     return 1030;
    }
if (index == 187) {
     return 1027;
    }
if (index == 188) {
     return 1024;
    }
if (index == 189) {
     return 675;
    }
if (index == 190) {
     return 1031;
    }
if (index == 191) {
     return 1043;
    }
if (index == 192) {
     return 1028;
    }
if (index == 193) {
     return 1040;
    }
if (index == 194) {
     return 1030;
    }
if (index == 195) {
     return 1026;
    }
if (index == 196) {
     return 1028;
    }
if (index == 197) {
     return 1024;
    }
if (index == 198) {
     return 1024;
    }
if (index == 199) {
     return 1027;
    }
if (index == 200) {
     return 1025;
    }
if (index == 201) {
     return 1037;
    }
if (index == 202) {
     return 1026;
    }
if (index == 203) {
     return 1025;
    }
if (index == 204) {
     return 1032;
    }
if (index == 205) {
     return 1034;
    }
if (index == 206) {
     return 1034;
    }
if (index == 207) {
     return 1027;
    }
if (index == 208) {
     return 1027;
    }
if (index == 209) {
     return 1024;
    }
if (index == 210) {
     return 1022;
    }
if (index == 211) {
     return 1019;
    }
if (index == 212) {
     return 1020;
    }
if (index == 213) {
     return 1017;
    }
if (index == 214) {
     return 1025;
    }
if (index == 215) {
     return 1018;
    }
if (index == 216) {
     return 1016;
    }
if (index == 217) {
     return 1023;
    }
if (index == 218) {
     return 1022;
    }
if (index == 219) {
     return 1016;
    }
if (index == 220) {
     return 1019;
    }
if (index == 221) {
     return 1016;
    }
if (index == 222) {
     return 1031;
    }
if (index == 223) {
     return 1014;
    }
if (index == 224) {
     return 1033;
    }
if (index == 225) {
     return 1016;
    }
if (index == 226) {
     return 1024;
    }
if (index == 227) {
     return 1017;
    }
if (index == 228) {
     return 1029;
    }
if (index == 229) {
     return 1018;
    }
if (index == 230) {
     return 1041;
    }
if (index == 231) {
     return 1004;
    }
if (index == 232) {
     return 1034;
    }
if (index == 233) {
     return 1016;
    }
if (index == 234) {
     return 1038;
    }
if (index == 235) {
     return 1012;
    }
if (index == 236) {
     return 1033;
    }
if (index == 237) {
     return 1018;
    }
if (index == 238) {
     return 669;
    }
if (index == 239) {
     return 1001;
    }
if (index == 240) {
     return 1029;
    }
if (index == 241) {
     return 1020;
    }
if (index == 242) {
     return 1016;
    }
if (index == 243) {
     return 1021;
    }
if (index == 244) {
     return 1044;
    }
if (index == 245) {
     return 1009;
    }
if (index == 246) {
     return 644;
    }
if (index == 247) {
     return 1012;
    }
if (index == 248) {
     return 1023;
    }
if (index == 249) {
     return 1019;
    }
if (index == 250) {
     return 1018;
    }
if (index == 251) {
     return 1020;
    }
if (index == 252) {
     return 1026;
    }
if (index == 253) {
     return 1019;
    }
if (index == 254) {
     return 1028;
    }
if (index == 255) {
     return 1026;
    }
if (index == 256) {
     return 1021;
    }
if (index == 257) {
     return 1019;
    }
if (index == 258) {
     return 1020;
    }
if (index == 259) {
     return 1017;
    }
if (index == 260) {
     return 1025;
    }
if (index == 261) {
     return 1019;
    }
if (index == 262) {
     return 1021;
    }
if (index == 263) {
     return 1016;
    }
if (index == 264) {
     return 1022;
    }
if (index == 265) {
     return 1016;
    }
if (index == 266) {
     return 1017;
    }
if (index == 267) {
     return 1025;
    }
if (index == 268) {
     return 1024;
    }
if (index == 269) {
     return 1025;
    }
if (index == 270) {
     return 1024;
    }
if (index == 271) {
     return 1022;
    }
if (index == 272) {
     return 1017;
    }
if (index == 273) {
     return 1014;
    }
if (index == 274) {
     return 1026;
    }
if (index == 275) {
     return 1009;
    }
if (index == 276) {
     return 1019;
    }
if (index == 277) {
     return 1011;
    }
if (index == 278) {
     return 1020;
    }
if (index == 279) {
     return 1013;
    }
if (index == 280) {
     return 1015;
    }
if (index == 281) {
     return 1016;
    }
if (index == 282) {
     return 1035;
    }
if (index == 283) {
     return 999;
    }
if (index == 284) {
     return 1029;
    }
if (index == 285) {
     return 1016;
    }
if (index == 286) {
     return 1015;
    }
if (index == 287) {
     return 1016;
    }
if (index == 288) {
     return 1027;
    }
if (index == 289) {
     return 1014;
    }
if (index == 290) {
     return 1014;
    }
if (index == 291) {
     return 1013;
    }
if (index == 292) {
     return 1029;
    }
if (index == 293) {
     return 1018;
    }
if (index == 294) {
     return 1038;
    }
if (index == 295) {
     return 1008;
    }
if (index == 296) {
     return 683;
    }
if (index == 297) {
     return 1017;
    }
if (index == 298) {
     return 1034;
    }
if (index == 299) {
     return 1027;
    }
if (index == 300) {
     return 1040;
    }
if (index == 301) {
     return 1030;
    }
if (index == 302) {
     return 1038;
    }
if (index == 303) {
     return 1032;
    }
if (index == 304) {
     return 1035;
    }
if (index == 305) {
     return 1032;
    }
if (index == 306) {
     return 1036;
    }
if (index == 307) {
     return 1030;
    }
if (index == 308) {
     return 1035;
    }
if (index == 309) {
     return 1042;
    }
if (index == 310) {
     return 1045;
    }
if (index == 311) {
     return 1033;
    }
if (index == 312) {
     return 1035;
    }
if (index == 313) {
     return 1042;
    }
if (index == 314) {
     return 1038;
    }
if (index == 315) {
     return 1041;
    }
if (index == 316) {
     return 1042;
    }
if (index == 317) {
     return 1041;
    }
if (index == 318) {
     return 1056;
    }
if (index == 319) {
     return 1038;
    }
if (index == 320) {
     return 1042;
    }
if (index == 321) {
     return 1045;
    }
if (index == 322) {
     return 1054;
    }
if (index == 323) {
     return 1034;
    }
if (index == 324) {
     return 1050;
    }
if (index == 325) {
     return 1043;
    }
if (index == 326) {
     return 1042;
    }
if (index == 327) {
     return 1039;
    }
if (index == 328) {
     return 1046;
    }
if (index == 329) {
     return 1048;
    }
if (index == 330) {
     return 1042;
    }
if (index == 331) {
     return 676;
    }
if (index == 332) {
     return 1040;
    }
if (index == 333) {
     return 1032;
    }
if (index == 334) {
     return 1032;
    }
if (index == 335) {
     return 1030;
    }
if (index == 336) {
     return 703;
    }
if (index == 337) {
     return 1025;
    }
if (index == 338) {
     return 1027;
    }
if (index == 339) {
     return 1038;
    }
if (index == 340) {
     return 1032;
    }
if (index == 341) {
     return 1046;
    }
if (index == 342) {
     return 1031;
    }
if (index == 343) {
     return 1031;
    }
if (index == 344) {
     return 1031;
    }
if (index == 345) {
     return 1043;
    }
if (index == 346) {
     return 1025;
    }
if (index == 347) {
     return 1037;
    }
if (index == 348) {
     return 1025;
    }
if (index == 349) {
     return 1042;
    }
if (index == 350) {
     return 1025;
    }
if (index == 351) {
     return 1025;
    }
if (index == 352) {
     return 1025;
    }
if (index == 353) {
     return 1044;
    }
if (index == 354) {
     return 1037;
    }
if (index == 355) {
     return 1055;
    }
if (index == 356) {
     return 1025;
    }
if (index == 357) {
     return 1105;
    }
if (index > 357) {
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
    var url = '/fedora/get/seapage:086_' + imgStr + '/digitalImage';
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
br.numLeafs = 358;

// Book title and the URL used for the book title link
br.bookTitle= "Siam, the land of the white elephant, as it was and is";
br.bookAuthor= "Bacon, George Blagden";
br.bookPub= "New York: C. Scribner's Sons, 1892";
br.bookKeyword= "Thailand--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand--History";
br.bookUrl  = '/catalog/sea:086';

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