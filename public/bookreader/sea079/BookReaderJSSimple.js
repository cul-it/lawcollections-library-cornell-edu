//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 800;
    }
if (index == 1) {
     return 740;
    }
if (index == 2) {
     return 744;
    }
if (index == 3) {
     return 742;
    }
if (index == 4) {
     return 739;
    }
if (index == 5) {
     return 1195;
    }
if (index == 6) {
     return 747;
    }
if (index == 7) {
     return 716;
    }
if (index == 8) {
     return 731;
    }
if (index == 9) {
     return 786;
    }
if (index == 10) {
     return 746;
    }
if (index == 11) {
     return 738;
    }
if (index == 12) {
     return 736;
    }
if (index == 13) {
     return 753;
    }
if (index == 14) {
     return 747;
    }
if (index == 15) {
     return 723;
    }
if (index == 16) {
     return 742;
    }
if (index == 17) {
     return 725;
    }
if (index == 18) {
     return 719;
    }
if (index == 19) {
     return 736;
    }
if (index == 20) {
     return 722;
    }
if (index == 21) {
     return 720;
    }
if (index == 22) {
     return 731;
    }
if (index == 23) {
     return 748;
    }
if (index == 24) {
     return 711;
    }
if (index == 25) {
     return 666;
    }
if (index == 26) {
     return 728;
    }
if (index == 27) {
     return 741;
    }
if (index == 28) {
     return 722;
    }
if (index == 29) {
     return 707;
    }
if (index == 30) {
     return 689;
    }
if (index == 31) {
     return 704;
    }
if (index == 32) {
     return 679;
    }
if (index == 33) {
     return 787;
    }
if (index == 34) {
     return 707;
    }
if (index == 35) {
     return 721;
    }
if (index == 36) {
     return 699;
    }
if (index == 37) {
     return 714;
    }
if (index == 38) {
     return 665;
    }
if (index == 39) {
     return 722;
    }
if (index == 40) {
     return 676;
    }
if (index == 41) {
     return 706;
    }
if (index == 42) {
     return 688;
    }
if (index == 43) {
     return 671;
    }
if (index == 44) {
     return 686;
    }
if (index == 45) {
     return 709;
    }
if (index == 46) {
     return 681;
    }
if (index == 47) {
     return 695;
    }
if (index == 48) {
     return 708;
    }
if (index == 49) {
     return 665;
    }
if (index == 50) {
     return 684;
    }
if (index == 51) {
     return 723;
    }
if (index == 52) {
     return 704;
    }
if (index == 53) {
     return 702;
    }
if (index == 54) {
     return 731;
    }
if (index == 55) {
     return 696;
    }
if (index == 56) {
     return 704;
    }
if (index == 57) {
     return 708;
    }
if (index == 58) {
     return 710;
    }
if (index == 59) {
     return 728;
    }
if (index == 60) {
     return 720;
    }
if (index == 61) {
     return 701;
    }
if (index == 62) {
     return 719;
    }
if (index == 63) {
     return 708;
    }
if (index == 64) {
     return 741;
    }
if (index == 65) {
     return 719;
    }
if (index == 66) {
     return 701;
    }
if (index == 67) {
     return 691;
    }
if (index == 68) {
     return 711;
    }
if (index == 69) {
     return 704;
    }
if (index == 70) {
     return 706;
    }
if (index == 71) {
     return 673;
    }
if (index == 72) {
     return 722;
    }
if (index == 73) {
     return 721;
    }
if (index == 74) {
     return 697;
    }
if (index == 75) {
     return 733;
    }
if (index == 76) {
     return 704;
    }
if (index == 77) {
     return 750;
    }
if (index == 78) {
     return 695;
    }
if (index == 79) {
     return 702;
    }
if (index == 80) {
     return 697;
    }
if (index == 81) {
     return 680;
    }
if (index == 82) {
     return 711;
    }
if (index == 83) {
     return 702;
    }
if (index == 84) {
     return 710;
    }
if (index == 85) {
     return 705;
    }
if (index == 86) {
     return 690;
    }
if (index == 87) {
     return 739;
    }
if (index == 88) {
     return 692;
    }
if (index == 89) {
     return 727;
    }
if (index == 90) {
     return 702;
    }
if (index == 91) {
     return 750;
    }
if (index == 92) {
     return 704;
    }
if (index == 93) {
     return 723;
    }
if (index == 94) {
     return 697;
    }
if (index == 95) {
     return 745;
    }
if (index == 96) {
     return 713;
    }
if (index == 97) {
     return 724;
    }
if (index == 98) {
     return 706;
    }
if (index == 99) {
     return 710;
    }
if (index == 100) {
     return 698;
    }
if (index == 101) {
     return 712;
    }
if (index == 102) {
     return 719;
    }
if (index == 103) {
     return 712;
    }
if (index == 104) {
     return 706;
    }
if (index == 105) {
     return 714;
    }
if (index == 106) {
     return 703;
    }
if (index == 107) {
     return 718;
    }
if (index == 108) {
     return 713;
    }
if (index == 109) {
     return 733;
    }
if (index == 110) {
     return 723;
    }
if (index == 111) {
     return 744;
    }
if (index == 112) {
     return 721;
    }
if (index == 113) {
     return 724;
    }
if (index == 114) {
     return 725;
    }
if (index == 115) {
     return 720;
    }
if (index == 116) {
     return 705;
    }
if (index == 117) {
     return 714;
    }
if (index == 118) {
     return 705;
    }
if (index == 119) {
     return 718;
    }
if (index == 120) {
     return 712;
    }
if (index == 121) {
     return 732;
    }
if (index == 122) {
     return 723;
    }
if (index == 123) {
     return 742;
    }
if (index == 124) {
     return 706;
    }
if (index == 125) {
     return 721;
    }
if (index == 126) {
     return 719;
    }
if (index == 127) {
     return 736;
    }
if (index == 128) {
     return 703;
    }
if (index == 129) {
     return 713;
    }
if (index == 130) {
     return 714;
    }
if (index == 131) {
     return 728;
    }
if (index == 132) {
     return 718;
    }
if (index == 133) {
     return 712;
    }
if (index == 134) {
     return 705;
    }
if (index == 135) {
     return 719;
    }
if (index == 136) {
     return 706;
    }
if (index == 137) {
     return 707;
    }
if (index == 138) {
     return 722;
    }
if (index == 139) {
     return 722;
    }
if (index == 140) {
     return 714;
    }
if (index == 141) {
     return 708;
    }
if (index == 142) {
     return 707;
    }
if (index == 143) {
     return 716;
    }
if (index == 144) {
     return 718;
    }
if (index == 145) {
     return 738;
    }
if (index == 146) {
     return 701;
    }
if (index == 147) {
     return 720;
    }
if (index == 148) {
     return 704;
    }
if (index == 149) {
     return 722;
    }
if (index == 150) {
     return 712;
    }
if (index == 151) {
     return 714;
    }
if (index == 152) {
     return 701;
    }
if (index == 153) {
     return 727;
    }
if (index == 154) {
     return 713;
    }
if (index == 155) {
     return 722;
    }
if (index == 156) {
     return 709;
    }
if (index == 157) {
     return 707;
    }
if (index == 158) {
     return 722;
    }
if (index == 159) {
     return 714;
    }
if (index == 160) {
     return 719;
    }
if (index == 161) {
     return 716;
    }
if (index == 162) {
     return 711;
    }
if (index == 163) {
     return 719;
    }
if (index == 164) {
     return 710;
    }
if (index == 165) {
     return 707;
    }
if (index == 166) {
     return 701;
    }
if (index == 167) {
     return 707;
    }
if (index == 168) {
     return 697;
    }
if (index == 169) {
     return 714;
    }
if (index == 170) {
     return 680;
    }
if (index == 171) {
     return 721;
    }
if (index == 172) {
     return 711;
    }
if (index == 173) {
     return 702;
    }
if (index == 174) {
     return 705;
    }
if (index == 175) {
     return 729;
    }
if (index == 176) {
     return 699;
    }
if (index == 177) {
     return 705;
    }
if (index == 178) {
     return 703;
    }
if (index == 179) {
     return 711;
    }
if (index == 180) {
     return 687;
    }
if (index == 181) {
     return 714;
    }
if (index == 182) {
     return 700;
    }
if (index == 183) {
     return 733;
    }
if (index == 184) {
     return 701;
    }
if (index == 185) {
     return 731;
    }
if (index == 186) {
     return 691;
    }
if (index == 187) {
     return 733;
    }
if (index == 188) {
     return 698;
    }
if (index == 189) {
     return 730;
    }
if (index == 190) {
     return 700;
    }
if (index == 191) {
     return 717;
    }
if (index == 192) {
     return 701;
    }
if (index == 193) {
     return 741;
    }
if (index == 194) {
     return 702;
    }
if (index == 195) {
     return 741;
    }
if (index == 196) {
     return 682;
    }
if (index == 197) {
     return 727;
    }
if (index == 198) {
     return 703;
    }
if (index == 199) {
     return 711;
    }
if (index == 200) {
     return 698;
    }
if (index == 201) {
     return 728;
    }
if (index == 202) {
     return 702;
    }
if (index == 203) {
     return 702;
    }
if (index == 204) {
     return 702;
    }
if (index == 205) {
     return 715;
    }
if (index == 206) {
     return 705;
    }
if (index == 207) {
     return 724;
    }
if (index == 208) {
     return 696;
    }
if (index == 209) {
     return 733;
    }
if (index == 210) {
     return 688;
    }
if (index == 211) {
     return 723;
    }
if (index == 212) {
     return 697;
    }
if (index == 213) {
     return 731;
    }
if (index == 214) {
     return 700;
    }
if (index == 215) {
     return 718;
    }
if (index == 216) {
     return 699;
    }
if (index == 217) {
     return 751;
    }
if (index == 218) {
     return 724;
    }
if (index == 219) {
     return 726;
    }
if (index == 220) {
     return 707;
    }
if (index == 221) {
     return 711;
    }
if (index == 222) {
     return 703;
    }
if (index == 223) {
     return 716;
    }
if (index == 224) {
     return 707;
    }
if (index == 225) {
     return 744;
    }
if (index == 226) {
     return 701;
    }
if (index == 227) {
     return 732;
    }
if (index == 228) {
     return 716;
    }
if (index == 229) {
     return 733;
    }
if (index == 230) {
     return 715;
    }
if (index == 231) {
     return 719;
    }
if (index == 232) {
     return 703;
    }
if (index == 233) {
     return 715;
    }
if (index == 234) {
     return 695;
    }
if (index == 235) {
     return 724;
    }
if (index == 236) {
     return 705;
    }
if (index == 237) {
     return 721;
    }
if (index == 238) {
     return 696;
    }
if (index == 239) {
     return 728;
    }
if (index == 240) {
     return 709;
    }
if (index == 241) {
     return 711;
    }
if (index == 242) {
     return 697;
    }
if (index == 243) {
     return 715;
    }
if (index == 244) {
     return 718;
    }
if (index == 245) {
     return 723;
    }
if (index == 246) {
     return 702;
    }
if (index == 247) {
     return 731;
    }
if (index == 248) {
     return 740;
    }
if (index == 249) {
     return 719;
    }
if (index == 250) {
     return 700;
    }
if (index == 251) {
     return 729;
    }
if (index == 252) {
     return 706;
    }
if (index == 253) {
     return 715;
    }
if (index == 254) {
     return 699;
    }
if (index == 255) {
     return 705;
    }
if (index == 256) {
     return 705;
    }
if (index == 257) {
     return 733;
    }
if (index == 258) {
     return 697;
    }
if (index == 259) {
     return 738;
    }
if (index == 260) {
     return 709;
    }
if (index == 261) {
     return 713;
    }
if (index == 262) {
     return 719;
    }
if (index == 263) {
     return 725;
    }
if (index == 264) {
     return 716;
    }
if (index == 265) {
     return 721;
    }
if (index == 266) {
     return 707;
    }
if (index == 267) {
     return 717;
    }
if (index == 268) {
     return 698;
    }
if (index == 269) {
     return 712;
    }
if (index == 270) {
     return 715;
    }
if (index == 271) {
     return 747;
    }
if (index == 272) {
     return 700;
    }
if (index == 273) {
     return 725;
    }
if (index == 274) {
     return 704;
    }
if (index == 275) {
     return 688;
    }
if (index == 276) {
     return 703;
    }
if (index == 277) {
     return 695;
    }
if (index == 278) {
     return 721;
    }
if (index == 279) {
     return 693;
    }
if (index == 280) {
     return 693;
    }
if (index == 281) {
     return 691;
    }
if (index == 282) {
     return 681;
    }
if (index == 283) {
     return 729;
    }
if (index == 284) {
     return 739;
    }
if (index == 285) {
     return 726;
    }
if (index == 286) {
     return 726;
    }
if (index == 287) {
     return 729;
    }
if (index == 288) {
     return 720;
    }
if (index == 289) {
     return 717;
    }
if (index == 290) {
     return 738;
    }
if (index == 291) {
     return 703;
    }
if (index == 292) {
     return 704;
    }
if (index == 293) {
     return 719;
    }
if (index == 294) {
     return 708;
    }
if (index == 295) {
     return 689;
    }
if (index == 296) {
     return 699;
    }
if (index == 297) {
     return 693;
    }
if (index == 298) {
     return 712;
    }
if (index == 299) {
     return 706;
    }
if (index == 300) {
     return 701;
    }
if (index == 301) {
     return 739;
    }
if (index == 302) {
     return 714;
    }
if (index == 303) {
     return 722;
    }
if (index == 304) {
     return 723;
    }
if (index == 305) {
     return 729;
    }
if (index == 306) {
     return 705;
    }
if (index == 307) {
     return 721;
    }
if (index == 308) {
     return 721;
    }
if (index == 309) {
     return 703;
    }
if (index == 310) {
     return 709;
    }
if (index == 311) {
     return 740;
    }
if (index == 312) {
     return 700;
    }
if (index == 313) {
     return 711;
    }
if (index == 314) {
     return 723;
    }
if (index == 315) {
     return 722;
    }
if (index == 316) {
     return 719;
    }
if (index == 317) {
     return 712;
    }
if (index == 318) {
     return 707;
    }
if (index == 319) {
     return 721;
    }
if (index == 320) {
     return 702;
    }
if (index == 321) {
     return 709;
    }
if (index == 322) {
     return 717;
    }
if (index == 323) {
     return 717;
    }
if (index == 324) {
     return 719;
    }
if (index == 325) {
     return 717;
    }
if (index == 326) {
     return 719;
    }
if (index == 327) {
     return 722;
    }
if (index == 328) {
     return 708;
    }
if (index == 329) {
     return 701;
    }
if (index == 330) {
     return 702;
    }
if (index == 331) {
     return 714;
    }
if (index == 332) {
     return 703;
    }
if (index == 333) {
     return 726;
    }
if (index == 334) {
     return 706;
    }
if (index == 335) {
     return 728;
    }
if (index == 336) {
     return 708;
    }
if (index == 337) {
     return 709;
    }
if (index == 338) {
     return 705;
    }
if (index == 339) {
     return 702;
    }
if (index == 340) {
     return 698;
    }
if (index == 341) {
     return 732;
    }
if (index == 342) {
     return 709;
    }
if (index == 343) {
     return 713;
    }
if (index == 344) {
     return 693;
    }
if (index == 345) {
     return 710;
    }
if (index == 346) {
     return 690;
    }
if (index == 347) {
     return 694;
    }
if (index == 348) {
     return 705;
    }
if (index == 349) {
     return 712;
    }
if (index == 350) {
     return 700;
    }
if (index == 351) {
     return 714;
    }
if (index == 352) {
     return 707;
    }
if (index == 353) {
     return 712;
    }
if (index == 354) {
     return 708;
    }
if (index == 355) {
     return 701;
    }
if (index == 356) {
     return 684;
    }
if (index == 357) {
     return 709;
    }
if (index == 358) {
     return 704;
    }
if (index == 359) {
     return 705;
    }
if (index == 360) {
     return 724;
    }
if (index == 361) {
     return 706;
    }
if (index == 362) {
     return 713;
    }
if (index == 363) {
     return 709;
    }
if (index == 364) {
     return 700;
    }
if (index == 365) {
     return 720;
    }
if (index == 366) {
     return 698;
    }
if (index == 367) {
     return 701;
    }
if (index == 368) {
     return 710;
    }
if (index == 369) {
     return 722;
    }
if (index == 370) {
     return 701;
    }
if (index == 371) {
     return 727;
    }
if (index == 372) {
     return 709;
    }
if (index == 373) {
     return 710;
    }
if (index == 374) {
     return 709;
    }
if (index == 375) {
     return 719;
    }
if (index == 376) {
     return 703;
    }
if (index == 377) {
     return 700;
    }
if (index == 378) {
     return 714;
    }
if (index == 379) {
     return 728;
    }
if (index == 380) {
     return 719;
    }
if (index == 381) {
     return 714;
    }
if (index == 382) {
     return 714;
    }
if (index == 383) {
     return 707;
    }
if (index == 384) {
     return 715;
    }
if (index == 385) {
     return 703;
    }
if (index == 386) {
     return 698;
    }
if (index == 387) {
     return 696;
    }
if (index == 388) {
     return 700;
    }
if (index == 389) {
     return 708;
    }
if (index == 390) {
     return 693;
    }
if (index == 391) {
     return 718;
    }
if (index == 392) {
     return 697;
    }
if (index == 393) {
     return 693;
    }
if (index == 394) {
     return 697;
    }
if (index == 395) {
     return 717;
    }
if (index == 396) {
     return 686;
    }
if (index == 397) {
     return 711;
    }
if (index == 398) {
     return 719;
    }
if (index == 399) {
     return 714;
    }
if (index == 400) {
     return 688;
    }
if (index == 401) {
     return 726;
    }
if (index == 402) {
     return 706;
    }
if (index == 403) {
     return 701;
    }
if (index == 404) {
     return 688;
    }
if (index == 405) {
     return 718;
    }
if (index == 406) {
     return 698;
    }
if (index == 407) {
     return 707;
    }
if (index == 408) {
     return 696;
    }
if (index == 409) {
     return 703;
    }
if (index == 410) {
     return 694;
    }
if (index == 411) {
     return 703;
    }
if (index == 412) {
     return 689;
    }
if (index == 413) {
     return 711;
    }
if (index == 414) {
     return 693;
    }
if (index == 415) {
     return 707;
    }
if (index == 416) {
     return 691;
    }
if (index == 417) {
     return 722;
    }
if (index == 418) {
     return 699;
    }
if (index == 419) {
     return 709;
    }
if (index == 420) {
     return 702;
    }
if (index == 421) {
     return 721;
    }
if (index == 422) {
     return 716;
    }
if (index == 423) {
     return 709;
    }
if (index == 424) {
     return 694;
    }
if (index == 425) {
     return 708;
    }
if (index == 426) {
     return 708;
    }
if (index == 427) {
     return 720;
    }
if (index == 428) {
     return 709;
    }
if (index == 429) {
     return 708;
    }
if (index == 430) {
     return 702;
    }
if (index == 431) {
     return 707;
    }
if (index == 432) {
     return 697;
    }
if (index == 433) {
     return 717;
    }
if (index == 434) {
     return 706;
    }
if (index == 435) {
     return 726;
    }
if (index == 436) {
     return 706;
    }
if (index == 437) {
     return 713;
    }
if (index == 438) {
     return 699;
    }
if (index == 439) {
     return 703;
    }
if (index == 440) {
     return 711;
    }
if (index == 441) {
     return 693;
    }
if (index == 442) {
     return 702;
    }
if (index == 443) {
     return 715;
    }
if (index == 444) {
     return 690;
    }
if (index == 445) {
     return 725;
    }
if (index == 446) {
     return 702;
    }
if (index == 447) {
     return 715;
    }
if (index == 448) {
     return 705;
    }
if (index == 449) {
     return 701;
    }
if (index == 450) {
     return 741;
    }
if (index == 451) {
     return 731;
    }
if (index == 452) {
     return 717;
    }
if (index == 453) {
     return 742;
    }
if (index == 454) {
     return 720;
    }
if (index == 455) {
     return 713;
    }
if (index == 456) {
     return 720;
    }
if (index == 457) {
     return 744;
    }
if (index == 458) {
     return 714;
    }
if (index == 459) {
     return 768;
    }
if (index == 460) {
     return 748;
    }
if (index == 461) {
     return 734;
    }
if (index == 462) {
     return 673;
    }
if (index == 463) {
     return 749;
    }
if (index == 464) {
     return 713;
    }
if (index == 465) {
     return 704;
    }
if (index > 465) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1280;
    }
if (index == 1) {
     return 1240;
    }
if (index == 2) {
     return 1228;
    }
if (index == 3) {
     return 1230;
    }
if (index == 4) {
     return 1193;
    }
if (index == 5) {
     return 667;
    }
if (index == 6) {
     return 1205;
    }
if (index == 7) {
     return 1254;
    }
if (index == 8) {
     return 1240;
    }
if (index == 9) {
     return 1227;
    }
if (index == 10) {
     return 1251;
    }
if (index == 11) {
     return 1259;
    }
if (index == 12) {
     return 1249;
    }
if (index == 13) {
     return 1258;
    }
if (index == 14) {
     return 1247;
    }
if (index == 15) {
     return 1225;
    }
if (index == 16) {
     return 1236;
    }
if (index == 17) {
     return 1234;
    }
if (index == 18) {
     return 1226;
    }
if (index == 19) {
     return 1236;
    }
if (index == 20) {
     return 1226;
    }
if (index == 21) {
     return 1234;
    }
if (index == 22) {
     return 1245;
    }
if (index == 23) {
     return 1280;
    }
if (index == 24) {
     return 1237;
    }
if (index == 25) {
     return 1261;
    }
if (index == 26) {
     return 1262;
    }
if (index == 27) {
     return 1256;
    }
if (index == 28) {
     return 1251;
    }
if (index == 29) {
     return 1177;
    }
if (index == 30) {
     return 1174;
    }
if (index == 31) {
     return 1264;
    }
if (index == 32) {
     return 1232;
    }
if (index == 33) {
     return 1254;
    }
if (index == 34) {
     return 1234;
    }
if (index == 35) {
     return 1214;
    }
if (index == 36) {
     return 1242;
    }
if (index == 37) {
     return 1228;
    }
if (index == 38) {
     return 1237;
    }
if (index == 39) {
     return 1186;
    }
if (index == 40) {
     return 1190;
    }
if (index == 41) {
     return 1226;
    }
if (index == 42) {
     return 1238;
    }
if (index == 43) {
     return 1219;
    }
if (index == 44) {
     return 1228;
    }
if (index == 45) {
     return 1222;
    }
if (index == 46) {
     return 1230;
    }
if (index == 47) {
     return 1220;
    }
if (index == 48) {
     return 1228;
    }
if (index == 49) {
     return 1228;
    }
if (index == 50) {
     return 1223;
    }
if (index == 51) {
     return 1225;
    }
if (index == 52) {
     return 1237;
    }
if (index == 53) {
     return 1238;
    }
if (index == 54) {
     return 1244;
    }
if (index == 55) {
     return 1226;
    }
if (index == 56) {
     return 1226;
    }
if (index == 57) {
     return 1237;
    }
if (index == 58) {
     return 1230;
    }
if (index == 59) {
     return 1237;
    }
if (index == 60) {
     return 1226;
    }
if (index == 61) {
     return 1239;
    }
if (index == 62) {
     return 1224;
    }
if (index == 63) {
     return 1226;
    }
if (index == 64) {
     return 1230;
    }
if (index == 65) {
     return 1252;
    }
if (index == 66) {
     return 1219;
    }
if (index == 67) {
     return 1214;
    }
if (index == 68) {
     return 1240;
    }
if (index == 69) {
     return 1230;
    }
if (index == 70) {
     return 1215;
    }
if (index == 71) {
     return 1233;
    }
if (index == 72) {
     return 1212;
    }
if (index == 73) {
     return 1214;
    }
if (index == 74) {
     return 1208;
    }
if (index == 75) {
     return 1250;
    }
if (index == 76) {
     return 1196;
    }
if (index == 77) {
     return 1241;
    }
if (index == 78) {
     return 1215;
    }
if (index == 79) {
     return 1221;
    }
if (index == 80) {
     return 1212;
    }
if (index == 81) {
     return 1189;
    }
if (index == 82) {
     return 1210;
    }
if (index == 83) {
     return 1217;
    }
if (index == 84) {
     return 1244;
    }
if (index == 85) {
     return 1230;
    }
if (index == 86) {
     return 1224;
    }
if (index == 87) {
     return 1234;
    }
if (index == 88) {
     return 1219;
    }
if (index == 89) {
     return 1202;
    }
if (index == 90) {
     return 1209;
    }
if (index == 91) {
     return 1239;
    }
if (index == 92) {
     return 1221;
    }
if (index == 93) {
     return 1236;
    }
if (index == 94) {
     return 1228;
    }
if (index == 95) {
     return 1242;
    }
if (index == 96) {
     return 1226;
    }
if (index == 97) {
     return 1235;
    }
if (index == 98) {
     return 1222;
    }
if (index == 99) {
     return 1237;
    }
if (index == 100) {
     return 1220;
    }
if (index == 101) {
     return 1225;
    }
if (index == 102) {
     return 1225;
    }
if (index == 103) {
     return 1222;
    }
if (index == 104) {
     return 1225;
    }
if (index == 105) {
     return 1229;
    }
if (index == 106) {
     return 1220;
    }
if (index == 107) {
     return 1239;
    }
if (index == 108) {
     return 1218;
    }
if (index == 109) {
     return 1232;
    }
if (index == 110) {
     return 1230;
    }
if (index == 111) {
     return 1241;
    }
if (index == 112) {
     return 1223;
    }
if (index == 113) {
     return 1221;
    }
if (index == 114) {
     return 1232;
    }
if (index == 115) {
     return 1225;
    }
if (index == 116) {
     return 1225;
    }
if (index == 117) {
     return 1225;
    }
if (index == 118) {
     return 1225;
    }
if (index == 119) {
     return 1230;
    }
if (index == 120) {
     return 1226;
    }
if (index == 121) {
     return 1234;
    }
if (index == 122) {
     return 1225;
    }
if (index == 123) {
     return 1241;
    }
if (index == 124) {
     return 1227;
    }
if (index == 125) {
     return 1230;
    }
if (index == 126) {
     return 1234;
    }
if (index == 127) {
     return 1238;
    }
if (index == 128) {
     return 1225;
    }
if (index == 129) {
     return 1227;
    }
if (index == 130) {
     return 1235;
    }
if (index == 131) {
     return 1226;
    }
if (index == 132) {
     return 1234;
    }
if (index == 133) {
     return 1224;
    }
if (index == 134) {
     return 1225;
    }
if (index == 135) {
     return 1230;
    }
if (index == 136) {
     return 1229;
    }
if (index == 137) {
     return 1225;
    }
if (index == 138) {
     return 1232;
    }
if (index == 139) {
     return 1236;
    }
if (index == 140) {
     return 1230;
    }
if (index == 141) {
     return 1230;
    }
if (index == 142) {
     return 1222;
    }
if (index == 143) {
     return 1225;
    }
if (index == 144) {
     return 1230;
    }
if (index == 145) {
     return 1235;
    }
if (index == 146) {
     return 1229;
    }
if (index == 147) {
     return 1228;
    }
if (index == 148) {
     return 1227;
    }
if (index == 149) {
     return 1228;
    }
if (index == 150) {
     return 1228;
    }
if (index == 151) {
     return 1224;
    }
if (index == 152) {
     return 1228;
    }
if (index == 153) {
     return 1231;
    }
if (index == 154) {
     return 1225;
    }
if (index == 155) {
     return 1236;
    }
if (index == 156) {
     return 1231;
    }
if (index == 157) {
     return 1227;
    }
if (index == 158) {
     return 1220;
    }
if (index == 159) {
     return 1235;
    }
if (index == 160) {
     return 1225;
    }
if (index == 161) {
     return 1228;
    }
if (index == 162) {
     return 1228;
    }
if (index == 163) {
     return 1228;
    }
if (index == 164) {
     return 1224;
    }
if (index == 165) {
     return 1220;
    }
if (index == 166) {
     return 1218;
    }
if (index == 167) {
     return 1222;
    }
if (index == 168) {
     return 1221;
    }
if (index == 169) {
     return 1236;
    }
if (index == 170) {
     return 1218;
    }
if (index == 171) {
     return 1233;
    }
if (index == 172) {
     return 1229;
    }
if (index == 173) {
     return 1220;
    }
if (index == 174) {
     return 1225;
    }
if (index == 175) {
     return 1234;
    }
if (index == 176) {
     return 1215;
    }
if (index == 177) {
     return 1224;
    }
if (index == 178) {
     return 1221;
    }
if (index == 179) {
     return 1222;
    }
if (index == 180) {
     return 1222;
    }
if (index == 181) {
     return 1232;
    }
if (index == 182) {
     return 1224;
    }
if (index == 183) {
     return 1247;
    }
if (index == 184) {
     return 1225;
    }
if (index == 185) {
     return 1242;
    }
if (index == 186) {
     return 1225;
    }
if (index == 187) {
     return 1245;
    }
if (index == 188) {
     return 1220;
    }
if (index == 189) {
     return 1239;
    }
if (index == 190) {
     return 1214;
    }
if (index == 191) {
     return 1242;
    }
if (index == 192) {
     return 1231;
    }
if (index == 193) {
     return 1246;
    }
if (index == 194) {
     return 1225;
    }
if (index == 195) {
     return 1248;
    }
if (index == 196) {
     return 1210;
    }
if (index == 197) {
     return 1244;
    }
if (index == 198) {
     return 1222;
    }
if (index == 199) {
     return 1249;
    }
if (index == 200) {
     return 1210;
    }
if (index == 201) {
     return 1245;
    }
if (index == 202) {
     return 1248;
    }
if (index == 203) {
     return 1239;
    }
if (index == 204) {
     return 1225;
    }
if (index == 205) {
     return 1247;
    }
if (index == 206) {
     return 1235;
    }
if (index == 207) {
     return 1252;
    }
if (index == 208) {
     return 1230;
    }
if (index == 209) {
     return 1254;
    }
if (index == 210) {
     return 1238;
    }
if (index == 211) {
     return 1256;
    }
if (index == 212) {
     return 1218;
    }
if (index == 213) {
     return 1251;
    }
if (index == 214) {
     return 1217;
    }
if (index == 215) {
     return 1260;
    }
if (index == 216) {
     return 1229;
    }
if (index == 217) {
     return 1250;
    }
if (index == 218) {
     return 1237;
    }
if (index == 219) {
     return 1255;
    }
if (index == 220) {
     return 1230;
    }
if (index == 221) {
     return 1250;
    }
if (index == 222) {
     return 1231;
    }
if (index == 223) {
     return 1247;
    }
if (index == 224) {
     return 1217;
    }
if (index == 225) {
     return 1244;
    }
if (index == 226) {
     return 1224;
    }
if (index == 227) {
     return 1240;
    }
if (index == 228) {
     return 1224;
    }
if (index == 229) {
     return 1246;
    }
if (index == 230) {
     return 1220;
    }
if (index == 231) {
     return 1241;
    }
if (index == 232) {
     return 1230;
    }
if (index == 233) {
     return 1240;
    }
if (index == 234) {
     return 1236;
    }
if (index == 235) {
     return 1247;
    }
if (index == 236) {
     return 1226;
    }
if (index == 237) {
     return 1244;
    }
if (index == 238) {
     return 1241;
    }
if (index == 239) {
     return 1250;
    }
if (index == 240) {
     return 1226;
    }
if (index == 241) {
     return 1231;
    }
if (index == 242) {
     return 1224;
    }
if (index == 243) {
     return 1226;
    }
if (index == 244) {
     return 1227;
    }
if (index == 245) {
     return 1234;
    }
if (index == 246) {
     return 1232;
    }
if (index == 247) {
     return 1230;
    }
if (index == 248) {
     return 1235;
    }
if (index == 249) {
     return 1237;
    }
if (index == 250) {
     return 1225;
    }
if (index == 251) {
     return 1248;
    }
if (index == 252) {
     return 1240;
    }
if (index == 253) {
     return 1248;
    }
if (index == 254) {
     return 1255;
    }
if (index == 255) {
     return 1243;
    }
if (index == 256) {
     return 1245;
    }
if (index == 257) {
     return 1248;
    }
if (index == 258) {
     return 1247;
    }
if (index == 259) {
     return 1239;
    }
if (index == 260) {
     return 1247;
    }
if (index == 261) {
     return 1242;
    }
if (index == 262) {
     return 1243;
    }
if (index == 263) {
     return 1246;
    }
if (index == 264) {
     return 1245;
    }
if (index == 265) {
     return 1244;
    }
if (index == 266) {
     return 1251;
    }
if (index == 267) {
     return 1241;
    }
if (index == 268) {
     return 1230;
    }
if (index == 269) {
     return 1245;
    }
if (index == 270) {
     return 1234;
    }
if (index == 271) {
     return 1237;
    }
if (index == 272) {
     return 1234;
    }
if (index == 273) {
     return 1238;
    }
if (index == 274) {
     return 1231;
    }
if (index == 275) {
     return 1220;
    }
if (index == 276) {
     return 1239;
    }
if (index == 277) {
     return 1218;
    }
if (index == 278) {
     return 1239;
    }
if (index == 279) {
     return 1225;
    }
if (index == 280) {
     return 1231;
    }
if (index == 281) {
     return 1224;
    }
if (index == 282) {
     return 1242;
    }
if (index == 283) {
     return 1241;
    }
if (index == 284) {
     return 1236;
    }
if (index == 285) {
     return 1241;
    }
if (index == 286) {
     return 1250;
    }
if (index == 287) {
     return 1240;
    }
if (index == 288) {
     return 1239;
    }
if (index == 289) {
     return 1228;
    }
if (index == 290) {
     return 1235;
    }
if (index == 291) {
     return 1229;
    }
if (index == 292) {
     return 1242;
    }
if (index == 293) {
     return 1234;
    }
if (index == 294) {
     return 1267;
    }
if (index == 295) {
     return 1225;
    }
if (index == 296) {
     return 1248;
    }
if (index == 297) {
     return 1216;
    }
if (index == 298) {
     return 1248;
    }
if (index == 299) {
     return 1229;
    }
if (index == 300) {
     return 1234;
    }
if (index == 301) {
     return 1228;
    }
if (index == 302) {
     return 1233;
    }
if (index == 303) {
     return 1221;
    }
if (index == 304) {
     return 1230;
    }
if (index == 305) {
     return 1226;
    }
if (index == 306) {
     return 1214;
    }
if (index == 307) {
     return 1225;
    }
if (index == 308) {
     return 1223;
    }
if (index == 309) {
     return 1222;
    }
if (index == 310) {
     return 1218;
    }
if (index == 311) {
     return 1227;
    }
if (index == 312) {
     return 1212;
    }
if (index == 313) {
     return 1224;
    }
if (index == 314) {
     return 1228;
    }
if (index == 315) {
     return 1208;
    }
if (index == 316) {
     return 1225;
    }
if (index == 317) {
     return 1216;
    }
if (index == 318) {
     return 1226;
    }
if (index == 319) {
     return 1219;
    }
if (index == 320) {
     return 1213;
    }
if (index == 321) {
     return 1218;
    }
if (index == 322) {
     return 1221;
    }
if (index == 323) {
     return 1233;
    }
if (index == 324) {
     return 1229;
    }
if (index == 325) {
     return 1243;
    }
if (index == 326) {
     return 1228;
    }
if (index == 327) {
     return 1225;
    }
if (index == 328) {
     return 1228;
    }
if (index == 329) {
     return 1227;
    }
if (index == 330) {
     return 1245;
    }
if (index == 331) {
     return 1217;
    }
if (index == 332) {
     return 1225;
    }
if (index == 333) {
     return 1231;
    }
if (index == 334) {
     return 1236;
    }
if (index == 335) {
     return 1224;
    }
if (index == 336) {
     return 1231;
    }
if (index == 337) {
     return 1222;
    }
if (index == 338) {
     return 1237;
    }
if (index == 339) {
     return 1216;
    }
if (index == 340) {
     return 1214;
    }
if (index == 341) {
     return 1223;
    }
if (index == 342) {
     return 1226;
    }
if (index == 343) {
     return 1216;
    }
if (index == 344) {
     return 1216;
    }
if (index == 345) {
     return 1214;
    }
if (index == 346) {
     return 1232;
    }
if (index == 347) {
     return 1208;
    }
if (index == 348) {
     return 1214;
    }
if (index == 349) {
     return 1216;
    }
if (index == 350) {
     return 1234;
    }
if (index == 351) {
     return 1209;
    }
if (index == 352) {
     return 1213;
    }
if (index == 353) {
     return 1209;
    }
if (index == 354) {
     return 1213;
    }
if (index == 355) {
     return 1225;
    }
if (index == 356) {
     return 1212;
    }
if (index == 357) {
     return 1228;
    }
if (index == 358) {
     return 1227;
    }
if (index == 359) {
     return 1225;
    }
if (index == 360) {
     return 1234;
    }
if (index == 361) {
     return 1227;
    }
if (index == 362) {
     return 1237;
    }
if (index == 363) {
     return 1218;
    }
if (index == 364) {
     return 1225;
    }
if (index == 365) {
     return 1220;
    }
if (index == 366) {
     return 1237;
    }
if (index == 367) {
     return 1220;
    }
if (index == 368) {
     return 1231;
    }
if (index == 369) {
     return 1228;
    }
if (index == 370) {
     return 1225;
    }
if (index == 371) {
     return 1227;
    }
if (index == 372) {
     return 1225;
    }
if (index == 373) {
     return 1219;
    }
if (index == 374) {
     return 1216;
    }
if (index == 375) {
     return 1230;
    }
if (index == 376) {
     return 1228;
    }
if (index == 377) {
     return 1230;
    }
if (index == 378) {
     return 1237;
    }
if (index == 379) {
     return 1236;
    }
if (index == 380) {
     return 1231;
    }
if (index == 381) {
     return 1230;
    }
if (index == 382) {
     return 1235;
    }
if (index == 383) {
     return 1227;
    }
if (index == 384) {
     return 1229;
    }
if (index == 385) {
     return 1228;
    }
if (index == 386) {
     return 1224;
    }
if (index == 387) {
     return 1229;
    }
if (index == 388) {
     return 1221;
    }
if (index == 389) {
     return 1239;
    }
if (index == 390) {
     return 1228;
    }
if (index == 391) {
     return 1229;
    }
if (index == 392) {
     return 1225;
    }
if (index == 393) {
     return 1235;
    }
if (index == 394) {
     return 1247;
    }
if (index == 395) {
     return 1230;
    }
if (index == 396) {
     return 1225;
    }
if (index == 397) {
     return 1228;
    }
if (index == 398) {
     return 1243;
    }
if (index == 399) {
     return 1231;
    }
if (index == 400) {
     return 1225;
    }
if (index == 401) {
     return 1235;
    }
if (index == 402) {
     return 1236;
    }
if (index == 403) {
     return 1225;
    }
if (index == 404) {
     return 1223;
    }
if (index == 405) {
     return 1228;
    }
if (index == 406) {
     return 1224;
    }
if (index == 407) {
     return 1225;
    }
if (index == 408) {
     return 1224;
    }
if (index == 409) {
     return 1230;
    }
if (index == 410) {
     return 1239;
    }
if (index == 411) {
     return 1227;
    }
if (index == 412) {
     return 1226;
    }
if (index == 413) {
     return 1230;
    }
if (index == 414) {
     return 1230;
    }
if (index == 415) {
     return 1220;
    }
if (index == 416) {
     return 1222;
    }
if (index == 417) {
     return 1227;
    }
if (index == 418) {
     return 1223;
    }
if (index == 419) {
     return 1224;
    }
if (index == 420) {
     return 1220;
    }
if (index == 421) {
     return 1224;
    }
if (index == 422) {
     return 1224;
    }
if (index == 423) {
     return 1228;
    }
if (index == 424) {
     return 1230;
    }
if (index == 425) {
     return 1231;
    }
if (index == 426) {
     return 1235;
    }
if (index == 427) {
     return 1231;
    }
if (index == 428) {
     return 1228;
    }
if (index == 429) {
     return 1228;
    }
if (index == 430) {
     return 1235;
    }
if (index == 431) {
     return 1222;
    }
if (index == 432) {
     return 1220;
    }
if (index == 433) {
     return 1234;
    }
if (index == 434) {
     return 1228;
    }
if (index == 435) {
     return 1236;
    }
if (index == 436) {
     return 1228;
    }
if (index == 437) {
     return 1252;
    }
if (index == 438) {
     return 1234;
    }
if (index == 439) {
     return 1228;
    }
if (index == 440) {
     return 1237;
    }
if (index == 441) {
     return 1239;
    }
if (index == 442) {
     return 1251;
    }
if (index == 443) {
     return 1228;
    }
if (index == 444) {
     return 1225;
    }
if (index == 445) {
     return 1237;
    }
if (index == 446) {
     return 1249;
    }
if (index == 447) {
     return 1225;
    }
if (index == 448) {
     return 1225;
    }
if (index == 449) {
     return 1225;
    }
if (index == 450) {
     return 1239;
    }
if (index == 451) {
     return 1229;
    }
if (index == 452) {
     return 1224;
    }
if (index == 453) {
     return 1229;
    }
if (index == 454) {
     return 1245;
    }
if (index == 455) {
     return 1219;
    }
if (index == 456) {
     return 1237;
    }
if (index == 457) {
     return 1222;
    }
if (index == 458) {
     return 1217;
    }
if (index == 459) {
     return 1234;
    }
if (index == 460) {
     return 1227;
    }
if (index == 461) {
     return 1175;
    }
if (index == 462) {
     return 1159;
    }
if (index == 463) {
     return 1212;
    }
if (index == 464) {
     return 1204;
    }
if (index == 465) {
     return 1225;
    }
if (index > 465) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:079_' + imgStr + '/digitalImage';
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
br.numLeafs = 466;

// Book title and the URL used for the book title link
br.bookTitle= "The mission to Siam, and Hue, the capital of Cochin China, in the years 1821-2. From the journal of the late George Finlayson ... With a memoir of the author, by Sir Thomas Stamford Raffles, F.R.S.";
br.bookAuthor= "Finlayson, George, 1790-1823";
br.bookPub= "London: J. Murray, 1826";
br.bookKeyword= "Thailand--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cochin China--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:079';

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
