//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 755;
    }
if (index == 1) {
     return 749;
    }
if (index == 2) {
     return 737;
    }
if (index == 3) {
     return 658;
    }
if (index == 4) {
     return 635;
    }
if (index == 5) {
     return 658;
    }
if (index == 6) {
     return 667;
    }
if (index == 7) {
     return 1793;
    }
if (index == 8) {
     return 635;
    }
if (index == 9) {
     return 675;
    }
if (index == 10) {
     return 658;
    }
if (index == 11) {
     return 710;
    }
if (index == 12) {
     return 628;
    }
if (index == 13) {
     return 697;
    }
if (index == 14) {
     return 609;
    }
if (index == 15) {
     return 648;
    }
if (index == 16) {
     return 635;
    }
if (index == 17) {
     return 659;
    }
if (index == 18) {
     return 657;
    }
if (index == 19) {
     return 625;
    }
if (index == 20) {
     return 647;
    }
if (index == 21) {
     return 671;
    }
if (index == 22) {
     return 623;
    }
if (index == 23) {
     return 686;
    }
if (index == 24) {
     return 611;
    }
if (index == 25) {
     return 711;
    }
if (index == 26) {
     return 575;
    }
if (index == 27) {
     return 670;
    }
if (index == 28) {
     return 666;
    }
if (index == 29) {
     return 585;
    }
if (index == 30) {
     return 564;
    }
if (index == 31) {
     return 639;
    }
if (index == 32) {
     return 606;
    }
if (index == 33) {
     return 656;
    }
if (index == 34) {
     return 626;
    }
if (index == 35) {
     return 622;
    }
if (index == 36) {
     return 648;
    }
if (index == 37) {
     return 675;
    }
if (index == 38) {
     return 667;
    }
if (index == 39) {
     return 683;
    }
if (index == 40) {
     return 659;
    }
if (index == 41) {
     return 601;
    }
if (index == 42) {
     return 669;
    }
if (index == 43) {
     return 647;
    }
if (index == 44) {
     return 647;
    }
if (index == 45) {
     return 626;
    }
if (index == 46) {
     return 645;
    }
if (index == 47) {
     return 615;
    }
if (index == 48) {
     return 654;
    }
if (index == 49) {
     return 631;
    }
if (index == 50) {
     return 654;
    }
if (index == 51) {
     return 622;
    }
if (index == 52) {
     return 693;
    }
if (index == 53) {
     return 648;
    }
if (index == 54) {
     return 658;
    }
if (index == 55) {
     return 633;
    }
if (index == 56) {
     return 658;
    }
if (index == 57) {
     return 637;
    }
if (index == 58) {
     return 651;
    }
if (index == 59) {
     return 633;
    }
if (index == 60) {
     return 644;
    }
if (index == 61) {
     return 609;
    }
if (index == 62) {
     return 643;
    }
if (index == 63) {
     return 604;
    }
if (index == 64) {
     return 658;
    }
if (index == 65) {
     return 630;
    }
if (index == 66) {
     return 637;
    }
if (index == 67) {
     return 637;
    }
if (index == 68) {
     return 650;
    }
if (index == 69) {
     return 624;
    }
if (index == 70) {
     return 652;
    }
if (index == 71) {
     return 644;
    }
if (index == 72) {
     return 637;
    }
if (index == 73) {
     return 619;
    }
if (index == 74) {
     return 646;
    }
if (index == 75) {
     return 637;
    }
if (index == 76) {
     return 639;
    }
if (index == 77) {
     return 614;
    }
if (index == 78) {
     return 629;
    }
if (index == 79) {
     return 571;
    }
if (index == 80) {
     return 654;
    }
if (index == 81) {
     return 623;
    }
if (index == 82) {
     return 641;
    }
if (index == 83) {
     return 629;
    }
if (index == 84) {
     return 641;
    }
if (index == 85) {
     return 634;
    }
if (index == 86) {
     return 668;
    }
if (index == 87) {
     return 679;
    }
if (index == 88) {
     return 624;
    }
if (index == 89) {
     return 593;
    }
if (index == 90) {
     return 666;
    }
if (index == 91) {
     return 643;
    }
if (index == 92) {
     return 664;
    }
if (index == 93) {
     return 649;
    }
if (index == 94) {
     return 627;
    }
if (index == 95) {
     return 605;
    }
if (index == 96) {
     return 634;
    }
if (index == 97) {
     return 627;
    }
if (index == 98) {
     return 656;
    }
if (index == 99) {
     return 645;
    }
if (index == 100) {
     return 658;
    }
if (index == 101) {
     return 639;
    }
if (index == 102) {
     return 658;
    }
if (index == 103) {
     return 647;
    }
if (index == 104) {
     return 675;
    }
if (index == 105) {
     return 659;
    }
if (index == 106) {
     return 680;
    }
if (index == 107) {
     return 652;
    }
if (index == 108) {
     return 671;
    }
if (index == 109) {
     return 615;
    }
if (index == 110) {
     return 667;
    }
if (index == 111) {
     return 621;
    }
if (index == 112) {
     return 634;
    }
if (index == 113) {
     return 621;
    }
if (index == 114) {
     return 637;
    }
if (index == 115) {
     return 634;
    }
if (index == 116) {
     return 627;
    }
if (index == 117) {
     return 649;
    }
if (index == 118) {
     return 647;
    }
if (index == 119) {
     return 658;
    }
if (index == 120) {
     return 643;
    }
if (index == 121) {
     return 640;
    }
if (index == 122) {
     return 602;
    }
if (index == 123) {
     return 601;
    }
if (index == 124) {
     return 609;
    }
if (index == 125) {
     return 600;
    }
if (index == 126) {
     return 628;
    }
if (index == 127) {
     return 609;
    }
if (index == 128) {
     return 634;
    }
if (index == 129) {
     return 630;
    }
if (index == 130) {
     return 638;
    }
if (index == 131) {
     return 628;
    }
if (index == 132) {
     return 655;
    }
if (index == 133) {
     return 630;
    }
if (index == 134) {
     return 649;
    }
if (index == 135) {
     return 630;
    }
if (index == 136) {
     return 649;
    }
if (index == 137) {
     return 636;
    }
if (index == 138) {
     return 644;
    }
if (index == 139) {
     return 619;
    }
if (index == 140) {
     return 642;
    }
if (index == 141) {
     return 619;
    }
if (index == 142) {
     return 649;
    }
if (index == 143) {
     return 626;
    }
if (index == 144) {
     return 652;
    }
if (index == 145) {
     return 643;
    }
if (index == 146) {
     return 627;
    }
if (index == 147) {
     return 619;
    }
if (index == 148) {
     return 638;
    }
if (index == 149) {
     return 620;
    }
if (index == 150) {
     return 645;
    }
if (index == 151) {
     return 609;
    }
if (index == 152) {
     return 637;
    }
if (index == 153) {
     return 605;
    }
if (index == 154) {
     return 644;
    }
if (index == 155) {
     return 607;
    }
if (index == 156) {
     return 657;
    }
if (index == 157) {
     return 613;
    }
if (index == 158) {
     return 640;
    }
if (index == 159) {
     return 586;
    }
if (index == 160) {
     return 639;
    }
if (index == 161) {
     return 601;
    }
if (index == 162) {
     return 644;
    }
if (index == 163) {
     return 657;
    }
if (index == 164) {
     return 627;
    }
if (index == 165) {
     return 608;
    }
if (index == 166) {
     return 628;
    }
if (index == 167) {
     return 641;
    }
if (index == 168) {
     return 638;
    }
if (index == 169) {
     return 667;
    }
if (index == 170) {
     return 644;
    }
if (index == 171) {
     return 674;
    }
if (index == 172) {
     return 635;
    }
if (index == 173) {
     return 678;
    }
if (index == 174) {
     return 638;
    }
if (index == 175) {
     return 642;
    }
if (index == 176) {
     return 648;
    }
if (index == 177) {
     return 636;
    }
if (index == 178) {
     return 661;
    }
if (index == 179) {
     return 660;
    }
if (index == 180) {
     return 645;
    }
if (index == 181) {
     return 655;
    }
if (index == 182) {
     return 644;
    }
if (index == 183) {
     return 667;
    }
if (index == 184) {
     return 627;
    }
if (index == 185) {
     return 637;
    }
if (index == 186) {
     return 617;
    }
if (index == 187) {
     return 625;
    }
if (index == 188) {
     return 625;
    }
if (index == 189) {
     return 587;
    }
if (index == 190) {
     return 633;
    }
if (index == 191) {
     return 629;
    }
if (index == 192) {
     return 632;
    }
if (index == 193) {
     return 648;
    }
if (index == 194) {
     return 654;
    }
if (index == 195) {
     return 637;
    }
if (index == 196) {
     return 634;
    }
if (index == 197) {
     return 632;
    }
if (index == 198) {
     return 627;
    }
if (index == 199) {
     return 617;
    }
if (index == 200) {
     return 656;
    }
if (index == 201) {
     return 626;
    }
if (index == 202) {
     return 623;
    }
if (index == 203) {
     return 612;
    }
if (index == 204) {
     return 625;
    }
if (index == 205) {
     return 612;
    }
if (index == 206) {
     return 614;
    }
if (index == 207) {
     return 579;
    }
if (index == 208) {
     return 648;
    }
if (index == 209) {
     return 616;
    }
if (index == 210) {
     return 642;
    }
if (index == 211) {
     return 642;
    }
if (index == 212) {
     return 640;
    }
if (index == 213) {
     return 616;
    }
if (index == 214) {
     return 621;
    }
if (index == 215) {
     return 630;
    }
if (index == 216) {
     return 640;
    }
if (index == 217) {
     return 619;
    }
if (index == 218) {
     return 643;
    }
if (index == 219) {
     return 607;
    }
if (index == 220) {
     return 679;
    }
if (index == 221) {
     return 604;
    }
if (index == 222) {
     return 660;
    }
if (index == 223) {
     return 600;
    }
if (index == 224) {
     return 629;
    }
if (index == 225) {
     return 602;
    }
if (index == 226) {
     return 656;
    }
if (index == 227) {
     return 587;
    }
if (index == 228) {
     return 623;
    }
if (index == 229) {
     return 613;
    }
if (index == 230) {
     return 620;
    }
if (index == 231) {
     return 579;
    }
if (index == 232) {
     return 604;
    }
if (index == 233) {
     return 633;
    }
if (index == 234) {
     return 646;
    }
if (index == 235) {
     return 577;
    }
if (index == 236) {
     return 606;
    }
if (index == 237) {
     return 592;
    }
if (index == 238) {
     return 637;
    }
if (index == 239) {
     return 579;
    }
if (index == 240) {
     return 622;
    }
if (index == 241) {
     return 602;
    }
if (index == 242) {
     return 645;
    }
if (index == 243) {
     return 641;
    }
if (index == 244) {
     return 614;
    }
if (index == 245) {
     return 630;
    }
if (index == 246) {
     return 629;
    }
if (index == 247) {
     return 642;
    }
if (index == 248) {
     return 641;
    }
if (index == 249) {
     return 636;
    }
if (index == 250) {
     return 649;
    }
if (index == 251) {
     return 661;
    }
if (index == 252) {
     return 657;
    }
if (index == 253) {
     return 657;
    }
if (index == 254) {
     return 647;
    }
if (index == 255) {
     return 632;
    }
if (index == 256) {
     return 630;
    }
if (index == 257) {
     return 621;
    }
if (index == 258) {
     return 629;
    }
if (index == 259) {
     return 633;
    }
if (index == 260) {
     return 644;
    }
if (index == 261) {
     return 619;
    }
if (index == 262) {
     return 654;
    }
if (index == 263) {
     return 610;
    }
if (index == 264) {
     return 655;
    }
if (index == 265) {
     return 666;
    }
if (index == 266) {
     return 649;
    }
if (index == 267) {
     return 644;
    }
if (index == 268) {
     return 649;
    }
if (index == 269) {
     return 644;
    }
if (index == 270) {
     return 624;
    }
if (index == 271) {
     return 641;
    }
if (index == 272) {
     return 649;
    }
if (index == 273) {
     return 642;
    }
if (index == 274) {
     return 661;
    }
if (index == 275) {
     return 648;
    }
if (index == 276) {
     return 651;
    }
if (index == 277) {
     return 667;
    }
if (index == 278) {
     return 661;
    }
if (index == 279) {
     return 676;
    }
if (index == 280) {
     return 658;
    }
if (index == 281) {
     return 691;
    }
if (index == 282) {
     return 642;
    }
if (index == 283) {
     return 647;
    }
if (index == 284) {
     return 650;
    }
if (index == 285) {
     return 619;
    }
if (index == 286) {
     return 637;
    }
if (index == 287) {
     return 619;
    }
if (index == 288) {
     return 661;
    }
if (index == 289) {
     return 636;
    }
if (index == 290) {
     return 661;
    }
if (index == 291) {
     return 661;
    }
if (index == 292) {
     return 676;
    }
if (index == 293) {
     return 632;
    }
if (index == 294) {
     return 657;
    }
if (index == 295) {
     return 612;
    }
if (index == 296) {
     return 662;
    }
if (index == 297) {
     return 685;
    }
if (index == 298) {
     return 634;
    }
if (index == 299) {
     return 680;
    }
if (index == 300) {
     return 617;
    }
if (index == 301) {
     return 695;
    }
if (index == 302) {
     return 632;
    }
if (index == 303) {
     return 694;
    }
if (index == 304) {
     return 633;
    }
if (index == 305) {
     return 612;
    }
if (index == 306) {
     return 564;
    }
if (index == 307) {
     return 641;
    }
if (index == 308) {
     return 641;
    }
if (index == 309) {
     return 659;
    }
if (index == 310) {
     return 622;
    }
if (index == 311) {
     return 635;
    }
if (index == 312) {
     return 631;
    }
if (index == 313) {
     return 619;
    }
if (index == 314) {
     return 634;
    }
if (index == 315) {
     return 611;
    }
if (index == 316) {
     return 630;
    }
if (index == 317) {
     return 638;
    }
if (index == 318) {
     return 639;
    }
if (index == 319) {
     return 597;
    }
if (index == 320) {
     return 655;
    }
if (index == 321) {
     return 643;
    }
if (index == 322) {
     return 649;
    }
if (index == 323) {
     return 652;
    }
if (index == 324) {
     return 604;
    }
if (index == 325) {
     return 582;
    }
if (index == 326) {
     return 633;
    }
if (index == 327) {
     return 600;
    }
if (index == 328) {
     return 649;
    }
if (index == 329) {
     return 680;
    }
if (index == 330) {
     return 617;
    }
if (index == 331) {
     return 641;
    }
if (index == 332) {
     return 626;
    }
if (index == 333) {
     return 645;
    }
if (index == 334) {
     return 655;
    }
if (index == 335) {
     return 652;
    }
if (index == 336) {
     return 657;
    }
if (index == 337) {
     return 666;
    }
if (index == 338) {
     return 648;
    }
if (index == 339) {
     return 635;
    }
if (index == 340) {
     return 664;
    }
if (index == 341) {
     return 637;
    }
if (index == 342) {
     return 662;
    }
if (index == 343) {
     return 650;
    }
if (index == 344) {
     return 667;
    }
if (index == 345) {
     return 626;
    }
if (index == 346) {
     return 675;
    }
if (index == 347) {
     return 621;
    }
if (index == 348) {
     return 667;
    }
if (index == 349) {
     return 604;
    }
if (index == 350) {
     return 669;
    }
if (index == 351) {
     return 626;
    }
if (index == 352) {
     return 672;
    }
if (index == 353) {
     return 639;
    }
if (index == 354) {
     return 620;
    }
if (index == 355) {
     return 636;
    }
if (index == 356) {
     return 625;
    }
if (index == 357) {
     return 602;
    }
if (index == 358) {
     return 618;
    }
if (index == 359) {
     return 608;
    }
if (index == 360) {
     return 604;
    }
if (index == 361) {
     return 626;
    }
if (index == 362) {
     return 625;
    }
if (index == 363) {
     return 623;
    }
if (index == 364) {
     return 639;
    }
if (index == 365) {
     return 652;
    }
if (index == 366) {
     return 634;
    }
if (index == 367) {
     return 657;
    }
if (index == 368) {
     return 620;
    }
if (index == 369) {
     return 634;
    }
if (index == 370) {
     return 648;
    }
if (index == 371) {
     return 636;
    }
if (index == 372) {
     return 628;
    }
if (index == 373) {
     return 620;
    }
if (index == 374) {
     return 618;
    }
if (index == 375) {
     return 643;
    }
if (index == 376) {
     return 652;
    }
if (index == 377) {
     return 659;
    }
if (index == 378) {
     return 672;
    }
if (index == 379) {
     return 669;
    }
if (index == 380) {
     return 648;
    }
if (index == 381) {
     return 643;
    }
if (index == 382) {
     return 659;
    }
if (index == 383) {
     return 629;
    }
if (index == 384) {
     return 641;
    }
if (index == 385) {
     return 615;
    }
if (index == 386) {
     return 649;
    }
if (index == 387) {
     return 618;
    }
if (index == 388) {
     return 672;
    }
if (index == 389) {
     return 675;
    }
if (index == 390) {
     return 635;
    }
if (index == 391) {
     return 650;
    }
if (index == 392) {
     return 612;
    }
if (index == 393) {
     return 613;
    }
if (index == 394) {
     return 631;
    }
if (index == 395) {
     return 640;
    }
if (index == 396) {
     return 627;
    }
if (index == 397) {
     return 649;
    }
if (index == 398) {
     return 575;
    }
if (index == 399) {
     return 584;
    }
if (index == 400) {
     return 580;
    }
if (index == 401) {
     return 615;
    }
if (index == 402) {
     return 612;
    }
if (index == 403) {
     return 601;
    }
if (index == 404) {
     return 595;
    }
if (index == 405) {
     return 578;
    }
if (index == 406) {
     return 623;
    }
if (index == 407) {
     return 591;
    }
if (index == 408) {
     return 673;
    }
if (index == 409) {
     return 624;
    }
if (index == 410) {
     return 624;
    }
if (index == 411) {
     return 582;
    }
if (index == 412) {
     return 650;
    }
if (index == 413) {
     return 617;
    }
if (index == 414) {
     return 648;
    }
if (index == 415) {
     return 626;
    }
if (index == 416) {
     return 649;
    }
if (index == 417) {
     return 614;
    }
if (index == 418) {
     return 648;
    }
if (index == 419) {
     return 617;
    }
if (index == 420) {
     return 643;
    }
if (index == 421) {
     return 664;
    }
if (index == 422) {
     return 611;
    }
if (index == 423) {
     return 647;
    }
if (index == 424) {
     return 587;
    }
if (index == 425) {
     return 659;
    }
if (index == 426) {
     return 606;
    }
if (index == 427) {
     return 657;
    }
if (index == 428) {
     return 622;
    }
if (index == 429) {
     return 628;
    }
if (index == 430) {
     return 608;
    }
if (index == 431) {
     return 658;
    }
if (index == 432) {
     return 613;
    }
if (index == 433) {
     return 630;
    }
if (index == 434) {
     return 657;
    }
if (index == 435) {
     return 649;
    }
if (index == 436) {
     return 611;
    }
if (index == 437) {
     return 629;
    }
if (index == 438) {
     return 603;
    }
if (index == 439) {
     return 687;
    }
if (index == 440) {
     return 599;
    }
if (index == 441) {
     return 645;
    }
if (index == 442) {
     return 605;
    }
if (index == 443) {
     return 650;
    }
if (index == 444) {
     return 622;
    }
if (index == 445) {
     return 664;
    }
if (index == 446) {
     return 653;
    }
if (index == 447) {
     return 640;
    }
if (index == 448) {
     return 655;
    }
if (index == 449) {
     return 613;
    }
if (index == 450) {
     return 660;
    }
if (index == 451) {
     return 602;
    }
if (index == 452) {
     return 650;
    }
if (index == 453) {
     return 530;
    }
if (index == 454) {
     return 657;
    }
if (index == 455) {
     return 657;
    }
if (index > 455) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1225;
    }
if (index == 1) {
     return 1243;
    }
if (index == 2) {
     return 1207;
    }
if (index == 3) {
     return 1199;
    }
if (index == 4) {
     return 1212;
    }
if (index == 5) {
     return 1199;
    }
if (index == 6) {
     return 1199;
    }
if (index == 7) {
     return 1150;
    }
if (index == 8) {
     return 1198;
    }
if (index == 9) {
     return 1172;
    }
if (index == 10) {
     return 1181;
    }
if (index == 11) {
     return 1192;
    }
if (index == 12) {
     return 1180;
    }
if (index == 13) {
     return 1190;
    }
if (index == 14) {
     return 1178;
    }
if (index == 15) {
     return 1178;
    }
if (index == 16) {
     return 1188;
    }
if (index == 17) {
     return 1203;
    }
if (index == 18) {
     return 1178;
    }
if (index == 19) {
     return 1202;
    }
if (index == 20) {
     return 1181;
    }
if (index == 21) {
     return 1204;
    }
if (index == 22) {
     return 1180;
    }
if (index == 23) {
     return 1202;
    }
if (index == 24) {
     return 1186;
    }
if (index == 25) {
     return 1205;
    }
if (index == 26) {
     return 1176;
    }
if (index == 27) {
     return 1211;
    }
if (index == 28) {
     return 1181;
    }
if (index == 29) {
     return 1156;
    }
if (index == 30) {
     return 1181;
    }
if (index == 31) {
     return 1200;
    }
if (index == 32) {
     return 1186;
    }
if (index == 33) {
     return 1195;
    }
if (index == 34) {
     return 1177;
    }
if (index == 35) {
     return 1197;
    }
if (index == 36) {
     return 1188;
    }
if (index == 37) {
     return 1204;
    }
if (index == 38) {
     return 1186;
    }
if (index == 39) {
     return 1210;
    }
if (index == 40) {
     return 1189;
    }
if (index == 41) {
     return 1155;
    }
if (index == 42) {
     return 1176;
    }
if (index == 43) {
     return 1204;
    }
if (index == 44) {
     return 1179;
    }
if (index == 45) {
     return 1194;
    }
if (index == 46) {
     return 1190;
    }
if (index == 47) {
     return 1192;
    }
if (index == 48) {
     return 1182;
    }
if (index == 49) {
     return 1197;
    }
if (index == 50) {
     return 1179;
    }
if (index == 51) {
     return 1195;
    }
if (index == 52) {
     return 1195;
    }
if (index == 53) {
     return 1201;
    }
if (index == 54) {
     return 1179;
    }
if (index == 55) {
     return 1202;
    }
if (index == 56) {
     return 1181;
    }
if (index == 57) {
     return 1197;
    }
if (index == 58) {
     return 1189;
    }
if (index == 59) {
     return 1203;
    }
if (index == 60) {
     return 1182;
    }
if (index == 61) {
     return 1172;
    }
if (index == 62) {
     return 1183;
    }
if (index == 63) {
     return 1194;
    }
if (index == 64) {
     return 1188;
    }
if (index == 65) {
     return 1194;
    }
if (index == 66) {
     return 1181;
    }
if (index == 67) {
     return 1198;
    }
if (index == 68) {
     return 1183;
    }
if (index == 69) {
     return 1196;
    }
if (index == 70) {
     return 1179;
    }
if (index == 71) {
     return 1191;
    }
if (index == 72) {
     return 1181;
    }
if (index == 73) {
     return 1194;
    }
if (index == 74) {
     return 1182;
    }
if (index == 75) {
     return 1200;
    }
if (index == 76) {
     return 1177;
    }
if (index == 77) {
     return 1189;
    }
if (index == 78) {
     return 1185;
    }
if (index == 79) {
     return 1177;
    }
if (index == 80) {
     return 1182;
    }
if (index == 81) {
     return 1182;
    }
if (index == 82) {
     return 1185;
    }
if (index == 83) {
     return 1191;
    }
if (index == 84) {
     return 1179;
    }
if (index == 85) {
     return 1195;
    }
if (index == 86) {
     return 1189;
    }
if (index == 87) {
     return 1191;
    }
if (index == 88) {
     return 1186;
    }
if (index == 89) {
     return 1183;
    }
if (index == 90) {
     return 1184;
    }
if (index == 91) {
     return 1196;
    }
if (index == 92) {
     return 1188;
    }
if (index == 93) {
     return 1197;
    }
if (index == 94) {
     return 1188;
    }
if (index == 95) {
     return 1192;
    }
if (index == 96) {
     return 1183;
    }
if (index == 97) {
     return 1194;
    }
if (index == 98) {
     return 1189;
    }
if (index == 99) {
     return 1185;
    }
if (index == 100) {
     return 1186;
    }
if (index == 101) {
     return 1190;
    }
if (index == 102) {
     return 1182;
    }
if (index == 103) {
     return 1191;
    }
if (index == 104) {
     return 1191;
    }
if (index == 105) {
     return 1197;
    }
if (index == 106) {
     return 1189;
    }
if (index == 107) {
     return 1200;
    }
if (index == 108) {
     return 1192;
    }
if (index == 109) {
     return 1179;
    }
if (index == 110) {
     return 1179;
    }
if (index == 111) {
     return 1181;
    }
if (index == 112) {
     return 1179;
    }
if (index == 113) {
     return 1181;
    }
if (index == 114) {
     return 1181;
    }
if (index == 115) {
     return 1183;
    }
if (index == 116) {
     return 1185;
    }
if (index == 117) {
     return 1184;
    }
if (index == 118) {
     return 1190;
    }
if (index == 119) {
     return 1182;
    }
if (index == 120) {
     return 1200;
    }
if (index == 121) {
     return 1184;
    }
if (index == 122) {
     return 1189;
    }
if (index == 123) {
     return 1179;
    }
if (index == 124) {
     return 1189;
    }
if (index == 125) {
     return 1179;
    }
if (index == 126) {
     return 1192;
    }
if (index == 127) {
     return 1181;
    }
if (index == 128) {
     return 1189;
    }
if (index == 129) {
     return 1179;
    }
if (index == 130) {
     return 1195;
    }
if (index == 131) {
     return 1185;
    }
if (index == 132) {
     return 1190;
    }
if (index == 133) {
     return 1175;
    }
if (index == 134) {
     return 1190;
    }
if (index == 135) {
     return 1179;
    }
if (index == 136) {
     return 1191;
    }
if (index == 137) {
     return 1181;
    }
if (index == 138) {
     return 1192;
    }
if (index == 139) {
     return 1189;
    }
if (index == 140) {
     return 1189;
    }
if (index == 141) {
     return 1181;
    }
if (index == 142) {
     return 1199;
    }
if (index == 143) {
     return 1184;
    }
if (index == 144) {
     return 1192;
    }
if (index == 145) {
     return 1184;
    }
if (index == 146) {
     return 1195;
    }
if (index == 147) {
     return 1179;
    }
if (index == 148) {
     return 1196;
    }
if (index == 149) {
     return 1181;
    }
if (index == 150) {
     return 1189;
    }
if (index == 151) {
     return 1181;
    }
if (index == 152) {
     return 1189;
    }
if (index == 153) {
     return 1181;
    }
if (index == 154) {
     return 1189;
    }
if (index == 155) {
     return 1182;
    }
if (index == 156) {
     return 1194;
    }
if (index == 157) {
     return 1189;
    }
if (index == 158) {
     return 1194;
    }
if (index == 159) {
     return 1182;
    }
if (index == 160) {
     return 1194;
    }
if (index == 161) {
     return 1179;
    }
if (index == 162) {
     return 1189;
    }
if (index == 163) {
     return 1186;
    }
if (index == 164) {
     return 1181;
    }
if (index == 165) {
     return 1173;
    }
if (index == 166) {
     return 1180;
    }
if (index == 167) {
     return 1173;
    }
if (index == 168) {
     return 1179;
    }
if (index == 169) {
     return 1180;
    }
if (index == 170) {
     return 1183;
    }
if (index == 171) {
     return 1190;
    }
if (index == 172) {
     return 1182;
    }
if (index == 173) {
     return 1184;
    }
if (index == 174) {
     return 1186;
    }
if (index == 175) {
     return 1168;
    }
if (index == 176) {
     return 1188;
    }
if (index == 177) {
     return 1172;
    }
if (index == 178) {
     return 1188;
    }
if (index == 179) {
     return 1176;
    }
if (index == 180) {
     return 1192;
    }
if (index == 181) {
     return 1179;
    }
if (index == 182) {
     return 1181;
    }
if (index == 183) {
     return 1178;
    }
if (index == 184) {
     return 1182;
    }
if (index == 185) {
     return 1189;
    }
if (index == 186) {
     return 1179;
    }
if (index == 187) {
     return 1182;
    }
if (index == 188) {
     return 1181;
    }
if (index == 189) {
     return 1170;
    }
if (index == 190) {
     return 1182;
    }
if (index == 191) {
     return 1180;
    }
if (index == 192) {
     return 1181;
    }
if (index == 193) {
     return 1169;
    }
if (index == 194) {
     return 1187;
    }
if (index == 195) {
     return 1171;
    }
if (index == 196) {
     return 1179;
    }
if (index == 197) {
     return 1173;
    }
if (index == 198) {
     return 1181;
    }
if (index == 199) {
     return 1172;
    }
if (index == 200) {
     return 1188;
    }
if (index == 201) {
     return 1179;
    }
if (index == 202) {
     return 1179;
    }
if (index == 203) {
     return 1177;
    }
if (index == 204) {
     return 1188;
    }
if (index == 205) {
     return 1175;
    }
if (index == 206) {
     return 1187;
    }
if (index == 207) {
     return 1168;
    }
if (index == 208) {
     return 1189;
    }
if (index == 209) {
     return 1172;
    }
if (index == 210) {
     return 1189;
    }
if (index == 211) {
     return 1178;
    }
if (index == 212) {
     return 1189;
    }
if (index == 213) {
     return 1172;
    }
if (index == 214) {
     return 1181;
    }
if (index == 215) {
     return 1172;
    }
if (index == 216) {
     return 1185;
    }
if (index == 217) {
     return 1175;
    }
if (index == 218) {
     return 1190;
    }
if (index == 219) {
     return 1182;
    }
if (index == 220) {
     return 1197;
    }
if (index == 221) {
     return 1178;
    }
if (index == 222) {
     return 1198;
    }
if (index == 223) {
     return 1172;
    }
if (index == 224) {
     return 1181;
    }
if (index == 225) {
     return 1173;
    }
if (index == 226) {
     return 1191;
    }
if (index == 227) {
     return 1170;
    }
if (index == 228) {
     return 1182;
    }
if (index == 229) {
     return 1175;
    }
if (index == 230) {
     return 1185;
    }
if (index == 231) {
     return 1170;
    }
if (index == 232) {
     return 1173;
    }
if (index == 233) {
     return 1183;
    }
if (index == 234) {
     return 1189;
    }
if (index == 235) {
     return 1174;
    }
if (index == 236) {
     return 1183;
    }
if (index == 237) {
     return 1172;
    }
if (index == 238) {
     return 1189;
    }
if (index == 239) {
     return 1173;
    }
if (index == 240) {
     return 1182;
    }
if (index == 241) {
     return 1187;
    }
if (index == 242) {
     return 1189;
    }
if (index == 243) {
     return 1151;
    }
if (index == 244) {
     return 1155;
    }
if (index == 245) {
     return 1145;
    }
if (index == 246) {
     return 1145;
    }
if (index == 247) {
     return 1153;
    }
if (index == 248) {
     return 1144;
    }
if (index == 249) {
     return 1144;
    }
if (index == 250) {
     return 1145;
    }
if (index == 251) {
     return 1163;
    }
if (index == 252) {
     return 1147;
    }
if (index == 253) {
     return 1150;
    }
if (index == 254) {
     return 1149;
    }
if (index == 255) {
     return 1143;
    }
if (index == 256) {
     return 1143;
    }
if (index == 257) {
     return 1143;
    }
if (index == 258) {
     return 1143;
    }
if (index == 259) {
     return 1145;
    }
if (index == 260) {
     return 1145;
    }
if (index == 261) {
     return 1145;
    }
if (index == 262) {
     return 1156;
    }
if (index == 263) {
     return 1145;
    }
if (index == 264) {
     return 1150;
    }
if (index == 265) {
     return 1146;
    }
if (index == 266) {
     return 1146;
    }
if (index == 267) {
     return 1158;
    }
if (index == 268) {
     return 1147;
    }
if (index == 269) {
     return 1154;
    }
if (index == 270) {
     return 1144;
    }
if (index == 271) {
     return 1152;
    }
if (index == 272) {
     return 1147;
    }
if (index == 273) {
     return 1124;
    }
if (index == 274) {
     return 1153;
    }
if (index == 275) {
     return 1155;
    }
if (index == 276) {
     return 1165;
    }
if (index == 277) {
     return 1156;
    }
if (index == 278) {
     return 1160;
    }
if (index == 279) {
     return 1153;
    }
if (index == 280) {
     return 1155;
    }
if (index == 281) {
     return 1162;
    }
if (index == 282) {
     return 1150;
    }
if (index == 283) {
     return 1152;
    }
if (index == 284) {
     return 1155;
    }
if (index == 285) {
     return 1147;
    }
if (index == 286) {
     return 1152;
    }
if (index == 287) {
     return 1147;
    }
if (index == 288) {
     return 1160;
    }
if (index == 289) {
     return 1158;
    }
if (index == 290) {
     return 1154;
    }
if (index == 291) {
     return 1165;
    }
if (index == 292) {
     return 1159;
    }
if (index == 293) {
     return 1159;
    }
if (index == 294) {
     return 1154;
    }
if (index == 295) {
     return 1149;
    }
if (index == 296) {
     return 1158;
    }
if (index == 297) {
     return 1156;
    }
if (index == 298) {
     return 1152;
    }
if (index == 299) {
     return 1173;
    }
if (index == 300) {
     return 1152;
    }
if (index == 301) {
     return 1166;
    }
if (index == 302) {
     return 1157;
    }
if (index == 303) {
     return 1164;
    }
if (index == 304) {
     return 1162;
    }
if (index == 305) {
     return 1145;
    }
if (index == 306) {
     return 1151;
    }
if (index == 307) {
     return 1147;
    }
if (index == 308) {
     return 1154;
    }
if (index == 309) {
     return 1149;
    }
if (index == 310) {
     return 1148;
    }
if (index == 311) {
     return 1146;
    }
if (index == 312) {
     return 1145;
    }
if (index == 313) {
     return 1143;
    }
if (index == 314) {
     return 1149;
    }
if (index == 315) {
     return 1145;
    }
if (index == 316) {
     return 1151;
    }
if (index == 317) {
     return 1154;
    }
if (index == 318) {
     return 1162;
    }
if (index == 319) {
     return 1145;
    }
if (index == 320) {
     return 1154;
    }
if (index == 321) {
     return 1149;
    }
if (index == 322) {
     return 1146;
    }
if (index == 323) {
     return 1132;
    }
if (index == 324) {
     return 1155;
    }
if (index == 325) {
     return 1145;
    }
if (index == 326) {
     return 1153;
    }
if (index == 327) {
     return 1149;
    }
if (index == 328) {
     return 1146;
    }
if (index == 329) {
     return 1136;
    }
if (index == 330) {
     return 1162;
    }
if (index == 331) {
     return 1181;
    }
if (index == 332) {
     return 1154;
    }
if (index == 333) {
     return 1148;
    }
if (index == 334) {
     return 1157;
    }
if (index == 335) {
     return 1145;
    }
if (index == 336) {
     return 1150;
    }
if (index == 337) {
     return 1157;
    }
if (index == 338) {
     return 1157;
    }
if (index == 339) {
     return 1148;
    }
if (index == 340) {
     return 1160;
    }
if (index == 341) {
     return 1147;
    }
if (index == 342) {
     return 1158;
    }
if (index == 343) {
     return 1150;
    }
if (index == 344) {
     return 1167;
    }
if (index == 345) {
     return 1153;
    }
if (index == 346) {
     return 1159;
    }
if (index == 347) {
     return 1153;
    }
if (index == 348) {
     return 1155;
    }
if (index == 349) {
     return 1150;
    }
if (index == 350) {
     return 1151;
    }
if (index == 351) {
     return 1153;
    }
if (index == 352) {
     return 1164;
    }
if (index == 353) {
     return 1143;
    }
if (index == 354) {
     return 1150;
    }
if (index == 355) {
     return 1148;
    }
if (index == 356) {
     return 1155;
    }
if (index == 357) {
     return 1145;
    }
if (index == 358) {
     return 1143;
    }
if (index == 359) {
     return 1145;
    }
if (index == 360) {
     return 1150;
    }
if (index == 361) {
     return 1153;
    }
if (index == 362) {
     return 1147;
    }
if (index == 363) {
     return 1146;
    }
if (index == 364) {
     return 1164;
    }
if (index == 365) {
     return 1164;
    }
if (index == 366) {
     return 1148;
    }
if (index == 367) {
     return 1146;
    }
if (index == 368) {
     return 1145;
    }
if (index == 369) {
     return 1143;
    }
if (index == 370) {
     return 1143;
    }
if (index == 371) {
     return 1148;
    }
if (index == 372) {
     return 1149;
    }
if (index == 373) {
     return 1155;
    }
if (index == 374) {
     return 1145;
    }
if (index == 375) {
     return 1161;
    }
if (index == 376) {
     return 1145;
    }
if (index == 377) {
     return 1160;
    }
if (index == 378) {
     return 1158;
    }
if (index == 379) {
     return 1162;
    }
if (index == 380) {
     return 1143;
    }
if (index == 381) {
     return 1160;
    }
if (index == 382) {
     return 1153;
    }
if (index == 383) {
     return 1157;
    }
if (index == 384) {
     return 1154;
    }
if (index == 385) {
     return 1166;
    }
if (index == 386) {
     return 1162;
    }
if (index == 387) {
     return 1165;
    }
if (index == 388) {
     return 1160;
    }
if (index == 389) {
     return 1155;
    }
if (index == 390) {
     return 1162;
    }
if (index == 391) {
     return 1150;
    }
if (index == 392) {
     return 1146;
    }
if (index == 393) {
     return 1145;
    }
if (index == 394) {
     return 1144;
    }
if (index == 395) {
     return 1143;
    }
if (index == 396) {
     return 1144;
    }
if (index == 397) {
     return 1147;
    }
if (index == 398) {
     return 1145;
    }
if (index == 399) {
     return 1143;
    }
if (index == 400) {
     return 1141;
    }
if (index == 401) {
     return 1169;
    }
if (index == 402) {
     return 1171;
    }
if (index == 403) {
     return 1144;
    }
if (index == 404) {
     return 1149;
    }
if (index == 405) {
     return 1143;
    }
if (index == 406) {
     return 1154;
    }
if (index == 407) {
     return 1148;
    }
if (index == 408) {
     return 1154;
    }
if (index == 409) {
     return 1145;
    }
if (index == 410) {
     return 1151;
    }
if (index == 411) {
     return 1141;
    }
if (index == 412) {
     return 1151;
    }
if (index == 413) {
     return 1149;
    }
if (index == 414) {
     return 1150;
    }
if (index == 415) {
     return 1154;
    }
if (index == 416) {
     return 1150;
    }
if (index == 417) {
     return 1159;
    }
if (index == 418) {
     return 1154;
    }
if (index == 419) {
     return 1145;
    }
if (index == 420) {
     return 1147;
    }
if (index == 421) {
     return 1150;
    }
if (index == 422) {
     return 1146;
    }
if (index == 423) {
     return 1151;
    }
if (index == 424) {
     return 1145;
    }
if (index == 425) {
     return 1141;
    }
if (index == 426) {
     return 1145;
    }
if (index == 427) {
     return 1152;
    }
if (index == 428) {
     return 1145;
    }
if (index == 429) {
     return 1143;
    }
if (index == 430) {
     return 1150;
    }
if (index == 431) {
     return 1153;
    }
if (index == 432) {
     return 1151;
    }
if (index == 433) {
     return 1143;
    }
if (index == 434) {
     return 1146;
    }
if (index == 435) {
     return 1150;
    }
if (index == 436) {
     return 1153;
    }
if (index == 437) {
     return 1148;
    }
if (index == 438) {
     return 1160;
    }
if (index == 439) {
     return 1160;
    }
if (index == 440) {
     return 1148;
    }
if (index == 441) {
     return 1156;
    }
if (index == 442) {
     return 1149;
    }
if (index == 443) {
     return 1148;
    }
if (index == 444) {
     return 1152;
    }
if (index == 445) {
     return 1152;
    }
if (index == 446) {
     return 1157;
    }
if (index == 447) {
     return 1150;
    }
if (index == 448) {
     return 1152;
    }
if (index == 449) {
     return 1146;
    }
if (index == 450) {
     return 1158;
    }
if (index == 451) {
     return 1141;
    }
if (index == 452) {
     return 1157;
    }
if (index == 453) {
     return 1145;
    }
if (index == 454) {
     return 1146;
    }
if (index == 455) {
     return 1146;
    }
if (index > 455) {
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
    var url = '/fedora/get/seapage:316_' + imgStr + '/digitalImage';
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
br.numLeafs = 456;

// Book title and the URL used for the book title link
br.bookTitle= "Journal of a residence in the Burmham empire, and more particularly at the court of Amarapoorah";
br.bookAuthor= "Cox, Hiram";
br.bookPub= "London: J. Warren [etc.], 1821";
br.bookKeyword= "Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;British--Burma";
br.bookUrl  = '/catalog/sea:316';

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