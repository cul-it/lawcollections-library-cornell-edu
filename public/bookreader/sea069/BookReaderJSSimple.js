//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 912;
    }
if (index == 1) {
     return 813;
    }
if (index == 2) {
     return 747;
    }
if (index == 3) {
     return 799;
    }
if (index == 4) {
     return 720;
    }
if (index == 5) {
     return 738;
    }
if (index == 6) {
     return 749;
    }
if (index == 7) {
     return 763;
    }
if (index == 8) {
     return 717;
    }
if (index == 9) {
     return 735;
    }
if (index == 10) {
     return 800;
    }
if (index == 11) {
     return 771;
    }
if (index == 12) {
     return 784;
    }
if (index == 13) {
     return 765;
    }
if (index == 14) {
     return 784;
    }
if (index == 15) {
     return 785;
    }
if (index == 16) {
     return 828;
    }
if (index == 17) {
     return 765;
    }
if (index == 18) {
     return 785;
    }
if (index == 19) {
     return 765;
    }
if (index == 20) {
     return 770;
    }
if (index == 21) {
     return 765;
    }
if (index == 22) {
     return 757;
    }
if (index == 23) {
     return 763;
    }
if (index == 24) {
     return 757;
    }
if (index == 25) {
     return 776;
    }
if (index == 26) {
     return 750;
    }
if (index == 27) {
     return 787;
    }
if (index == 28) {
     return 768;
    }
if (index == 29) {
     return 796;
    }
if (index == 30) {
     return 795;
    }
if (index == 31) {
     return 758;
    }
if (index == 32) {
     return 709;
    }
if (index == 33) {
     return 738;
    }
if (index == 34) {
     return 711;
    }
if (index == 35) {
     return 738;
    }
if (index == 36) {
     return 766;
    }
if (index == 37) {
     return 717;
    }
if (index == 38) {
     return 720;
    }
if (index == 39) {
     return 757;
    }
if (index == 40) {
     return 720;
    }
if (index == 41) {
     return 715;
    }
if (index == 42) {
     return 721;
    }
if (index == 43) {
     return 712;
    }
if (index == 44) {
     return 721;
    }
if (index == 45) {
     return 715;
    }
if (index == 46) {
     return 757;
    }
if (index == 47) {
     return 730;
    }
if (index == 48) {
     return 745;
    }
if (index == 49) {
     return 740;
    }
if (index == 50) {
     return 721;
    }
if (index == 51) {
     return 761;
    }
if (index == 52) {
     return 784;
    }
if (index == 53) {
     return 715;
    }
if (index == 54) {
     return 739;
    }
if (index == 55) {
     return 747;
    }
if (index == 56) {
     return 805;
    }
if (index == 57) {
     return 760;
    }
if (index == 58) {
     return 790;
    }
if (index == 59) {
     return 748;
    }
if (index == 60) {
     return 807;
    }
if (index == 61) {
     return 783;
    }
if (index == 62) {
     return 791;
    }
if (index == 63) {
     return 748;
    }
if (index == 64) {
     return 739;
    }
if (index == 65) {
     return 748;
    }
if (index == 66) {
     return 787;
    }
if (index == 67) {
     return 816;
    }
if (index == 68) {
     return 739;
    }
if (index == 69) {
     return 786;
    }
if (index == 70) {
     return 811;
    }
if (index == 71) {
     return 774;
    }
if (index == 72) {
     return 739;
    }
if (index == 73) {
     return 725;
    }
if (index == 74) {
     return 759;
    }
if (index == 75) {
     return 774;
    }
if (index == 76) {
     return 721;
    }
if (index == 77) {
     return 774;
    }
if (index == 78) {
     return 807;
    }
if (index == 79) {
     return 774;
    }
if (index == 80) {
     return 1284;
    }
if (index == 81) {
     return 774;
    }
if (index == 82) {
     return 761;
    }
if (index == 83) {
     return 739;
    }
if (index == 84) {
     return 751;
    }
if (index == 85) {
     return 734;
    }
if (index == 86) {
     return 774;
    }
if (index == 87) {
     return 720;
    }
if (index == 88) {
     return 706;
    }
if (index == 89) {
     return 769;
    }
if (index == 90) {
     return 743;
    }
if (index == 91) {
     return 721;
    }
if (index == 92) {
     return 730;
    }
if (index == 93) {
     return 739;
    }
if (index == 94) {
     return 793;
    }
if (index == 95) {
     return 747;
    }
if (index == 96) {
     return 754;
    }
if (index == 97) {
     return 762;
    }
if (index == 98) {
     return 781;
    }
if (index == 99) {
     return 747;
    }
if (index == 100) {
     return 750;
    }
if (index == 101) {
     return 685;
    }
if (index == 102) {
     return 767;
    }
if (index == 103) {
     return 762;
    }
if (index == 104) {
     return 744;
    }
if (index == 105) {
     return 785;
    }
if (index == 106) {
     return 741;
    }
if (index == 107) {
     return 698;
    }
if (index == 108) {
     return 761;
    }
if (index == 109) {
     return 715;
    }
if (index == 110) {
     return 837;
    }
if (index == 111) {
     return 736;
    }
if (index == 112) {
     return 1292;
    }
if (index == 113) {
     return 668;
    }
if (index == 114) {
     return 779;
    }
if (index == 115) {
     return 742;
    }
if (index == 116) {
     return 777;
    }
if (index == 117) {
     return 772;
    }
if (index == 118) {
     return 771;
    }
if (index == 119) {
     return 730;
    }
if (index == 120) {
     return 780;
    }
if (index == 121) {
     return 741;
    }
if (index == 122) {
     return 780;
    }
if (index == 123) {
     return 745;
    }
if (index == 124) {
     return 770;
    }
if (index == 125) {
     return 759;
    }
if (index == 126) {
     return 754;
    }
if (index == 127) {
     return 750;
    }
if (index == 128) {
     return 753;
    }
if (index == 129) {
     return 759;
    }
if (index == 130) {
     return 768;
    }
if (index == 131) {
     return 756;
    }
if (index == 132) {
     return 766;
    }
if (index == 133) {
     return 745;
    }
if (index == 134) {
     return 779;
    }
if (index == 135) {
     return 753;
    }
if (index == 136) {
     return 786;
    }
if (index == 137) {
     return 715;
    }
if (index == 138) {
     return 776;
    }
if (index == 139) {
     return 758;
    }
if (index == 140) {
     return 772;
    }
if (index == 141) {
     return 744;
    }
if (index == 142) {
     return 754;
    }
if (index == 143) {
     return 770;
    }
if (index == 144) {
     return 770;
    }
if (index == 145) {
     return 766;
    }
if (index == 146) {
     return 766;
    }
if (index == 147) {
     return 765;
    }
if (index == 148) {
     return 767;
    }
if (index == 149) {
     return 758;
    }
if (index == 150) {
     return 771;
    }
if (index == 151) {
     return 775;
    }
if (index == 152) {
     return 781;
    }
if (index == 153) {
     return 780;
    }
if (index == 154) {
     return 775;
    }
if (index == 155) {
     return 766;
    }
if (index == 156) {
     return 782;
    }
if (index == 157) {
     return 769;
    }
if (index == 158) {
     return 747;
    }
if (index == 159) {
     return 1278;
    }
if (index == 160) {
     return 791;
    }
if (index == 161) {
     return 779;
    }
if (index == 162) {
     return 795;
    }
if (index == 163) {
     return 785;
    }
if (index == 164) {
     return 777;
    }
if (index == 165) {
     return 795;
    }
if (index == 166) {
     return 747;
    }
if (index == 167) {
     return 748;
    }
if (index == 168) {
     return 774;
    }
if (index == 169) {
     return 807;
    }
if (index == 170) {
     return 796;
    }
if (index == 171) {
     return 780;
    }
if (index == 172) {
     return 752;
    }
if (index == 173) {
     return 730;
    }
if (index == 174) {
     return 721;
    }
if (index == 175) {
     return 778;
    }
if (index == 176) {
     return 1273;
    }
if (index == 177) {
     return 730;
    }
if (index == 178) {
     return 772;
    }
if (index == 179) {
     return 777;
    }
if (index == 180) {
     return 704;
    }
if (index == 181) {
     return 773;
    }
if (index == 182) {
     return 721;
    }
if (index == 183) {
     return 762;
    }
if (index == 184) {
     return 721;
    }
if (index == 185) {
     return 789;
    }
if (index == 186) {
     return 767;
    }
if (index == 187) {
     return 802;
    }
if (index == 188) {
     return 721;
    }
if (index == 189) {
     return 810;
    }
if (index == 190) {
     return 764;
    }
if (index == 191) {
     return 794;
    }
if (index == 192) {
     return 760;
    }
if (index == 193) {
     return 797;
    }
if (index == 194) {
     return 759;
    }
if (index == 195) {
     return 786;
    }
if (index == 196) {
     return 763;
    }
if (index == 197) {
     return 771;
    }
if (index == 198) {
     return 773;
    }
if (index == 199) {
     return 790;
    }
if (index == 200) {
     return 774;
    }
if (index == 201) {
     return 772;
    }
if (index == 202) {
     return 777;
    }
if (index == 203) {
     return 789;
    }
if (index == 204) {
     return 1215;
    }
if (index == 205) {
     return 711;
    }
if (index == 206) {
     return 742;
    }
if (index == 207) {
     return 775;
    }
if (index == 208) {
     return 739;
    }
if (index == 209) {
     return 711;
    }
if (index == 210) {
     return 790;
    }
if (index == 211) {
     return 739;
    }
if (index == 212) {
     return 772;
    }
if (index == 213) {
     return 752;
    }
if (index == 214) {
     return 744;
    }
if (index == 215) {
     return 739;
    }
if (index == 216) {
     return 743;
    }
if (index == 217) {
     return 748;
    }
if (index == 218) {
     return 738;
    }
if (index == 219) {
     return 739;
    }
if (index == 220) {
     return 758;
    }
if (index == 221) {
     return 739;
    }
if (index == 222) {
     return 738;
    }
if (index == 223) {
     return 739;
    }
if (index == 224) {
     return 738;
    }
if (index == 225) {
     return 743;
    }
if (index == 226) {
     return 752;
    }
if (index == 227) {
     return 755;
    }
if (index == 228) {
     return 751;
    }
if (index == 229) {
     return 739;
    }
if (index == 230) {
     return 738;
    }
if (index == 231) {
     return 739;
    }
if (index == 232) {
     return 738;
    }
if (index == 233) {
     return 752;
    }
if (index == 234) {
     return 738;
    }
if (index == 235) {
     return 742;
    }
if (index == 236) {
     return 747;
    }
if (index == 237) {
     return 751;
    }
if (index == 238) {
     return 747;
    }
if (index == 239) {
     return 742;
    }
if (index == 240) {
     return 739;
    }
if (index == 241) {
     return 758;
    }
if (index == 242) {
     return 755;
    }
if (index == 243) {
     return 767;
    }
if (index == 244) {
     return 748;
    }
if (index == 245) {
     return 746;
    }
if (index == 246) {
     return 739;
    }
if (index == 247) {
     return 745;
    }
if (index == 248) {
     return 745;
    }
if (index == 249) {
     return 739;
    }
if (index == 250) {
     return 739;
    }
if (index == 251) {
     return 742;
    }
if (index == 252) {
     return 1261;
    }
if (index == 253) {
     return 739;
    }
if (index == 254) {
     return 715;
    }
if (index == 255) {
     return 749;
    }
if (index == 256) {
     return 712;
    }
if (index == 257) {
     return 739;
    }
if (index == 258) {
     return 715;
    }
if (index == 259) {
     return 764;
    }
if (index == 260) {
     return 742;
    }
if (index == 261) {
     return 777;
    }
if (index == 262) {
     return 744;
    }
if (index == 263) {
     return 775;
    }
if (index == 264) {
     return 739;
    }
if (index == 265) {
     return 778;
    }
if (index == 266) {
     return 758;
    }
if (index == 267) {
     return 764;
    }
if (index == 268) {
     return 757;
    }
if (index == 269) {
     return 775;
    }
if (index == 270) {
     return 745;
    }
if (index == 271) {
     return 771;
    }
if (index == 272) {
     return 1245;
    }
if (index == 273) {
     return 756;
    }
if (index == 274) {
     return 751;
    }
if (index == 275) {
     return 766;
    }
if (index == 276) {
     return 747;
    }
if (index == 277) {
     return 772;
    }
if (index == 278) {
     return 760;
    }
if (index == 279) {
     return 775;
    }
if (index == 280) {
     return 744;
    }
if (index == 281) {
     return 769;
    }
if (index == 282) {
     return 754;
    }
if (index == 283) {
     return 766;
    }
if (index == 284) {
     return 741;
    }
if (index == 285) {
     return 777;
    }
if (index == 286) {
     return 746;
    }
if (index == 287) {
     return 776;
    }
if (index == 288) {
     return 757;
    }
if (index == 289) {
     return 756;
    }
if (index == 290) {
     return 738;
    }
if (index == 291) {
     return 756;
    }
if (index == 292) {
     return 738;
    }
if (index == 293) {
     return 768;
    }
if (index == 294) {
     return 763;
    }
if (index == 295) {
     return 765;
    }
if (index == 296) {
     return 738;
    }
if (index == 297) {
     return 777;
    }
if (index == 298) {
     return 1255;
    }
if (index == 299) {
     return 756;
    }
if (index == 300) {
     return 738;
    }
if (index == 301) {
     return 771;
    }
if (index == 302) {
     return 1249;
    }
if (index == 303) {
     return 756;
    }
if (index == 304) {
     return 770;
    }
if (index == 305) {
     return 784;
    }
if (index == 306) {
     return 763;
    }
if (index == 307) {
     return 768;
    }
if (index == 308) {
     return 756;
    }
if (index == 309) {
     return 786;
    }
if (index == 310) {
     return 761;
    }
if (index == 311) {
     return 769;
    }
if (index == 312) {
     return 1268;
    }
if (index == 313) {
     return 747;
    }
if (index == 314) {
     return 753;
    }
if (index == 315) {
     return 747;
    }
if (index == 316) {
     return 753;
    }
if (index == 317) {
     return 799;
    }
if (index == 318) {
     return 753;
    }
if (index == 319) {
     return 779;
    }
if (index == 320) {
     return 1270;
    }
if (index == 321) {
     return 747;
    }
if (index == 322) {
     return 765;
    }
if (index == 323) {
     return 793;
    }
if (index == 324) {
     return 758;
    }
if (index == 325) {
     return 789;
    }
if (index == 326) {
     return 758;
    }
if (index == 327) {
     return 766;
    }
if (index == 328) {
     return 762;
    }
if (index == 329) {
     return 789;
    }
if (index == 330) {
     return 764;
    }
if (index == 331) {
     return 791;
    }
if (index == 332) {
     return 755;
    }
if (index == 333) {
     return 804;
    }
if (index == 334) {
     return 1270;
    }
if (index == 335) {
     return 747;
    }
if (index == 336) {
     return 753;
    }
if (index == 337) {
     return 764;
    }
if (index == 338) {
     return 755;
    }
if (index == 339) {
     return 784;
    }
if (index == 340) {
     return 733;
    }
if (index == 341) {
     return 784;
    }
if (index == 342) {
     return 739;
    }
if (index == 343) {
     return 791;
    }
if (index == 344) {
     return 729;
    }
if (index == 345) {
     return 790;
    }
if (index == 346) {
     return 745;
    }
if (index == 347) {
     return 776;
    }
if (index == 348) {
     return 729;
    }
if (index == 349) {
     return 794;
    }
if (index == 350) {
     return 729;
    }
if (index == 351) {
     return 788;
    }
if (index == 352) {
     return 736;
    }
if (index == 353) {
     return 781;
    }
if (index == 354) {
     return 739;
    }
if (index == 355) {
     return 765;
    }
if (index == 356) {
     return 729;
    }
if (index == 357) {
     return 792;
    }
if (index == 358) {
     return 735;
    }
if (index == 359) {
     return 762;
    }
if (index == 360) {
     return 732;
    }
if (index == 361) {
     return 785;
    }
if (index == 362) {
     return 729;
    }
if (index == 363) {
     return 774;
    }
if (index == 364) {
     return 733;
    }
if (index == 365) {
     return 776;
    }
if (index == 366) {
     return 738;
    }
if (index == 367) {
     return 771;
    }
if (index == 368) {
     return 738;
    }
if (index == 369) {
     return 789;
    }
if (index == 370) {
     return 729;
    }
if (index == 371) {
     return 781;
    }
if (index == 372) {
     return 732;
    }
if (index == 373) {
     return 782;
    }
if (index == 374) {
     return 738;
    }
if (index == 375) {
     return 779;
    }
if (index == 376) {
     return 739;
    }
if (index == 377) {
     return 766;
    }
if (index == 378) {
     return 735;
    }
if (index == 379) {
     return 771;
    }
if (index == 380) {
     return 738;
    }
if (index == 381) {
     return 775;
    }
if (index == 382) {
     return 729;
    }
if (index == 383) {
     return 764;
    }
if (index == 384) {
     return 743;
    }
if (index == 385) {
     return 769;
    }
if (index == 386) {
     return 757;
    }
if (index == 387) {
     return 755;
    }
if (index == 388) {
     return 717;
    }
if (index == 389) {
     return 767;
    }
if (index == 390) {
     return 741;
    }
if (index == 391) {
     return 778;
    }
if (index == 392) {
     return 739;
    }
if (index == 393) {
     return 753;
    }
if (index == 394) {
     return 732;
    }
if (index == 395) {
     return 755;
    }
if (index == 396) {
     return 729;
    }
if (index == 397) {
     return 765;
    }
if (index == 398) {
     return 729;
    }
if (index == 399) {
     return 747;
    }
if (index == 400) {
     return 729;
    }
if (index == 401) {
     return 757;
    }
if (index == 402) {
     return 729;
    }
if (index == 403) {
     return 755;
    }
if (index == 404) {
     return 737;
    }
if (index == 405) {
     return 752;
    }
if (index == 406) {
     return 743;
    }
if (index == 407) {
     return 753;
    }
if (index == 408) {
     return 729;
    }
if (index == 409) {
     return 761;
    }
if (index == 410) {
     return 729;
    }
if (index == 411) {
     return 741;
    }
if (index == 412) {
     return 729;
    }
if (index == 413) {
     return 774;
    }
if (index == 414) {
     return 729;
    }
if (index == 415) {
     return 768;
    }
if (index == 416) {
     return 754;
    }
if (index == 417) {
     return 764;
    }
if (index == 418) {
     return 729;
    }
if (index == 419) {
     return 748;
    }
if (index == 420) {
     return 727;
    }
if (index == 421) {
     return 776;
    }
if (index == 422) {
     return 729;
    }
if (index == 423) {
     return 792;
    }
if (index == 424) {
     return 729;
    }
if (index == 425) {
     return 764;
    }
if (index == 426) {
     return 729;
    }
if (index == 427) {
     return 772;
    }
if (index == 428) {
     return 729;
    }
if (index == 429) {
     return 775;
    }
if (index == 430) {
     return 723;
    }
if (index == 431) {
     return 760;
    }
if (index == 432) {
     return 723;
    }
if (index == 433) {
     return 764;
    }
if (index == 434) {
     return 729;
    }
if (index == 435) {
     return 756;
    }
if (index == 436) {
     return 732;
    }
if (index == 437) {
     return 775;
    }
if (index == 438) {
     return 729;
    }
if (index == 439) {
     return 735;
    }
if (index == 440) {
     return 729;
    }
if (index == 441) {
     return 775;
    }
if (index == 442) {
     return 1261;
    }
if (index == 443) {
     return 747;
    }
if (index == 444) {
     return 729;
    }
if (index == 445) {
     return 756;
    }
if (index == 446) {
     return 729;
    }
if (index == 447) {
     return 758;
    }
if (index == 448) {
     return 729;
    }
if (index == 449) {
     return 766;
    }
if (index == 450) {
     return 757;
    }
if (index == 451) {
     return 748;
    }
if (index == 452) {
     return 741;
    }
if (index == 453) {
     return 765;
    }
if (index == 454) {
     return 729;
    }
if (index == 455) {
     return 748;
    }
if (index == 456) {
     return 744;
    }
if (index == 457) {
     return 748;
    }
if (index == 458) {
     return 736;
    }
if (index == 459) {
     return 751;
    }
if (index == 460) {
     return 729;
    }
if (index == 461) {
     return 748;
    }
if (index == 462) {
     return 734;
    }
if (index == 463) {
     return 758;
    }
if (index == 464) {
     return 737;
    }
if (index == 465) {
     return 762;
    }
if (index == 466) {
     return 719;
    }
if (index == 467) {
     return 748;
    }
if (index == 468) {
     return 745;
    }
if (index == 469) {
     return 748;
    }
if (index == 470) {
     return 751;
    }
if (index == 471) {
     return 748;
    }
if (index == 472) {
     return 750;
    }
if (index == 473) {
     return 751;
    }
if (index == 474) {
     return 734;
    }
if (index == 475) {
     return 757;
    }
if (index == 476) {
     return 756;
    }
if (index == 477) {
     return 755;
    }
if (index == 478) {
     return 745;
    }
if (index == 479) {
     return 752;
    }
if (index == 480) {
     return 727;
    }
if (index == 481) {
     return 748;
    }
if (index == 482) {
     return 743;
    }
if (index == 483) {
     return 765;
    }
if (index == 484) {
     return 729;
    }
if (index == 485) {
     return 748;
    }
if (index == 486) {
     return 760;
    }
if (index == 487) {
     return 748;
    }
if (index == 488) {
     return 746;
    }
if (index == 489) {
     return 766;
    }
if (index == 490) {
     return 749;
    }
if (index == 491) {
     return 755;
    }
if (index == 492) {
     return 759;
    }
if (index == 493) {
     return 752;
    }
if (index == 494) {
     return 742;
    }
if (index == 495) {
     return 748;
    }
if (index == 496) {
     return 748;
    }
if (index == 497) {
     return 775;
    }
if (index == 498) {
     return 766;
    }
if (index == 499) {
     return 763;
    }
if (index == 500) {
     return 766;
    }
if (index == 501) {
     return 757;
    }
if (index == 502) {
     return 761;
    }
if (index == 503) {
     return 748;
    }
if (index == 504) {
     return 774;
    }
if (index == 505) {
     return 755;
    }
if (index == 506) {
     return 745;
    }
if (index == 507) {
     return 774;
    }
if (index == 508) {
     return 754;
    }
if (index == 509) {
     return 748;
    }
if (index == 510) {
     return 758;
    }
if (index == 511) {
     return 755;
    }
if (index == 512) {
     return 771;
    }
if (index == 513) {
     return 748;
    }
if (index == 514) {
     return 744;
    }
if (index == 515) {
     return 766;
    }
if (index == 516) {
     return 1255;
    }
if (index == 517) {
     return 748;
    }
if (index == 518) {
     return 770;
    }
if (index == 519) {
     return 758;
    }
if (index == 520) {
     return 1253;
    }
if (index == 521) {
     return 748;
    }
if (index == 522) {
     return 707;
    }
if (index == 523) {
     return 748;
    }
if (index == 524) {
     return 778;
    }
if (index == 525) {
     return 761;
    }
if (index == 526) {
     return 759;
    }
if (index == 527) {
     return 777;
    }
if (index == 528) {
     return 756;
    }
if (index == 529) {
     return 755;
    }
if (index == 530) {
     return 758;
    }
if (index == 531) {
     return 763;
    }
if (index == 532) {
     return 777;
    }
if (index == 533) {
     return 748;
    }
if (index == 534) {
     return 764;
    }
if (index == 535) {
     return 748;
    }
if (index == 536) {
     return 756;
    }
if (index == 537) {
     return 769;
    }
if (index == 538) {
     return 756;
    }
if (index == 539) {
     return 781;
    }
if (index == 540) {
     return 759;
    }
if (index == 541) {
     return 742;
    }
if (index == 542) {
     return 758;
    }
if (index == 543) {
     return 781;
    }
if (index == 544) {
     return 765;
    }
if (index == 545) {
     return 785;
    }
if (index == 546) {
     return 761;
    }
if (index == 547) {
     return 783;
    }
if (index == 548) {
     return 779;
    }
if (index == 549) {
     return 754;
    }
if (index == 550) {
     return 761;
    }
if (index == 551) {
     return 772;
    }
if (index == 552) {
     return 753;
    }
if (index == 553) {
     return 786;
    }
if (index == 554) {
     return 743;
    }
if (index == 555) {
     return 778;
    }
if (index == 556) {
     return 746;
    }
if (index == 557) {
     return 773;
    }
if (index == 558) {
     return 764;
    }
if (index == 559) {
     return 770;
    }
if (index == 560) {
     return 746;
    }
if (index == 561) {
     return 786;
    }
if (index == 562) {
     return 1244;
    }
if (index == 563) {
     return 748;
    }
if (index == 564) {
     return 754;
    }
if (index == 565) {
     return 774;
    }
if (index == 566) {
     return 755;
    }
if (index == 567) {
     return 783;
    }
if (index == 568) {
     return 756;
    }
if (index == 569) {
     return 779;
    }
if (index == 570) {
     return 747;
    }
if (index == 571) {
     return 744;
    }
if (index == 572) {
     return 703;
    }
if (index == 573) {
     return 783;
    }
if (index == 574) {
     return 747;
    }
if (index == 575) {
     return 790;
    }
if (index == 576) {
     return 744;
    }
if (index == 577) {
     return 789;
    }
if (index == 578) {
     return 744;
    }
if (index == 579) {
     return 761;
    }
if (index == 580) {
     return 749;
    }
if (index == 581) {
     return 768;
    }
if (index == 582) {
     return 761;
    }
if (index == 583) {
     return 736;
    }
if (index == 584) {
     return 1248;
    }
if (index == 585) {
     return 748;
    }
if (index == 586) {
     return 747;
    }
if (index == 587) {
     return 738;
    }
if (index == 588) {
     return 746;
    }
if (index == 589) {
     return 797;
    }
if (index == 590) {
     return 1250;
    }
if (index == 591) {
     return 748;
    }
if (index == 592) {
     return 730;
    }
if (index == 593) {
     return 757;
    }
if (index == 594) {
     return 711;
    }
if (index == 595) {
     return 748;
    }
if (index == 596) {
     return 707;
    }
if (index == 597) {
     return 762;
    }
if (index == 598) {
     return 1244;
    }
if (index == 599) {
     return 748;
    }
if (index == 600) {
     return 795;
    }
if (index == 601) {
     return 717;
    }
if (index == 602) {
     return 1252;
    }
if (index == 603) {
     return 747;
    }
if (index == 604) {
     return 759;
    }
if (index == 605) {
     return 779;
    }
if (index == 606) {
     return 738;
    }
if (index == 607) {
     return 776;
    }
if (index == 608) {
     return 742;
    }
if (index == 609) {
     return 799;
    }
if (index == 610) {
     return 747;
    }
if (index == 611) {
     return 804;
    }
if (index == 612) {
     return 762;
    }
if (index == 613) {
     return 790;
    }
if (index == 614) {
     return 768;
    }
if (index == 615) {
     return 765;
    }
if (index == 616) {
     return 756;
    }
if (index == 617) {
     return 779;
    }
if (index == 618) {
     return 759;
    }
if (index == 619) {
     return 817;
    }
if (index == 620) {
     return 832;
    }
if (index == 621) {
     return 1278;
    }
if (index == 622) {
     return 750;
    }
if (index == 623) {
     return 781;
    }
if (index == 624) {
     return 738;
    }
if (index == 625) {
     return 755;
    }
if (index == 626) {
     return 791;
    }
if (index == 627) {
     return 894;
    }
if (index > 627) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1373;
    }
if (index == 1) {
     return 1300;
    }
if (index == 2) {
     return 1343;
    }
if (index == 3) {
     return 1327;
    }
if (index == 4) {
     return 1346;
    }
if (index == 5) {
     return 1341;
    }
if (index == 6) {
     return 1348;
    }
if (index == 7) {
     return 1341;
    }
if (index == 8) {
     return 1333;
    }
if (index == 9) {
     return 1355;
    }
if (index == 10) {
     return 1391;
    }
if (index == 11) {
     return 1326;
    }
if (index == 12) {
     return 1338;
    }
if (index == 13) {
     return 1323;
    }
if (index == 14) {
     return 1338;
    }
if (index == 15) {
     return 1334;
    }
if (index == 16) {
     return 1362;
    }
if (index == 17) {
     return 1323;
    }
if (index == 18) {
     return 1339;
    }
if (index == 19) {
     return 1323;
    }
if (index == 20) {
     return 1330;
    }
if (index == 21) {
     return 1323;
    }
if (index == 22) {
     return 1323;
    }
if (index == 23) {
     return 1318;
    }
if (index == 24) {
     return 1323;
    }
if (index == 25) {
     return 1311;
    }
if (index == 26) {
     return 1333;
    }
if (index == 27) {
     return 1318;
    }
if (index == 28) {
     return 1334;
    }
if (index == 29) {
     return 1323;
    }
if (index == 30) {
     return 1340;
    }
if (index == 31) {
     return 1316;
    }
if (index == 32) {
     return 1303;
    }
if (index == 33) {
     return 1305;
    }
if (index == 34) {
     return 1305;
    }
if (index == 35) {
     return 1305;
    }
if (index == 36) {
     return 1330;
    }
if (index == 37) {
     return 1301;
    }
if (index == 38) {
     return 1305;
    }
if (index == 39) {
     return 1315;
    }
if (index == 40) {
     return 1305;
    }
if (index == 41) {
     return 1303;
    }
if (index == 42) {
     return 1305;
    }
if (index == 43) {
     return 1305;
    }
if (index == 44) {
     return 1305;
    }
if (index == 45) {
     return 1306;
    }
if (index == 46) {
     return 1324;
    }
if (index == 47) {
     return 1305;
    }
if (index == 48) {
     return 1318;
    }
if (index == 49) {
     return 1310;
    }
if (index == 50) {
     return 1305;
    }
if (index == 51) {
     return 1307;
    }
if (index == 52) {
     return 1330;
    }
if (index == 53) {
     return 1306;
    }
if (index == 54) {
     return 1305;
    }
if (index == 55) {
     return 1305;
    }
if (index == 56) {
     return 1341;
    }
if (index == 57) {
     return 1312;
    }
if (index == 58) {
     return 1333;
    }
if (index == 59) {
     return 1305;
    }
if (index == 60) {
     return 1342;
    }
if (index == 61) {
     return 1324;
    }
if (index == 62) {
     return 1334;
    }
if (index == 63) {
     return 1305;
    }
if (index == 64) {
     return 1305;
    }
if (index == 65) {
     return 1305;
    }
if (index == 66) {
     return 1331;
    }
if (index == 67) {
     return 1329;
    }
if (index == 68) {
     return 1305;
    }
if (index == 69) {
     return 1312;
    }
if (index == 70) {
     return 1344;
    }
if (index == 71) {
     return 1305;
    }
if (index == 72) {
     return 1305;
    }
if (index == 73) {
     return 1316;
    }
if (index == 74) {
     return 1340;
    }
if (index == 75) {
     return 1305;
    }
if (index == 76) {
     return 1305;
    }
if (index == 77) {
     return 1305;
    }
if (index == 78) {
     return 1350;
    }
if (index == 79) {
     return 1305;
    }
if (index == 80) {
     return 699;
    }
if (index == 81) {
     return 1305;
    }
if (index == 82) {
     return 1347;
    }
if (index == 83) {
     return 1318;
    }
if (index == 84) {
     return 1339;
    }
if (index == 85) {
     return 1342;
    }
if (index == 86) {
     return 1357;
    }
if (index == 87) {
     return 1331;
    }
if (index == 88) {
     return 1303;
    }
if (index == 89) {
     return 1356;
    }
if (index == 90) {
     return 1356;
    }
if (index == 91) {
     return 1331;
    }
if (index == 92) {
     return 1322;
    }
if (index == 93) {
     return 1340;
    }
if (index == 94) {
     return 1356;
    }
if (index == 95) {
     return 1331;
    }
if (index == 96) {
     return 1350;
    }
if (index == 97) {
     return 1287;
    }
if (index == 98) {
     return 1315;
    }
if (index == 99) {
     return 1278;
    }
if (index == 100) {
     return 1316;
    }
if (index == 101) {
     return 1278;
    }
if (index == 102) {
     return 1325;
    }
if (index == 103) {
     return 1287;
    }
if (index == 104) {
     return 1314;
    }
if (index == 105) {
     return 1285;
    }
if (index == 106) {
     return 1313;
    }
if (index == 107) {
     return 1277;
    }
if (index == 108) {
     return 1323;
    }
if (index == 109) {
     return 1344;
    }
if (index == 110) {
     return 1371;
    }
if (index == 111) {
     return 1339;
    }
if (index == 112) {
     return 709;
    }
if (index == 113) {
     return 1348;
    }
if (index == 114) {
     return 1346;
    }
if (index == 115) {
     return 1344;
    }
if (index == 116) {
     return 1397;
    }
if (index == 117) {
     return 1347;
    }
if (index == 118) {
     return 1329;
    }
if (index == 119) {
     return 1305;
    }
if (index == 120) {
     return 1314;
    }
if (index == 121) {
     return 1311;
    }
if (index == 122) {
     return 1314;
    }
if (index == 123) {
     return 1313;
    }
if (index == 124) {
     return 1308;
    }
if (index == 125) {
     return 1321;
    }
if (index == 126) {
     return 1299;
    }
if (index == 127) {
     return 1307;
    }
if (index == 128) {
     return 1299;
    }
if (index == 129) {
     return 1312;
    }
if (index == 130) {
     return 1308;
    }
if (index == 131) {
     return 1310;
    }
if (index == 132) {
     return 1306;
    }
if (index == 133) {
     return 1304;
    }
if (index == 134) {
     return 1314;
    }
if (index == 135) {
     return 1309;
    }
if (index == 136) {
     return 1318;
    }
if (index == 137) {
     return 1287;
    }
if (index == 138) {
     return 1312;
    }
if (index == 139) {
     return 1311;
    }
if (index == 140) {
     return 1310;
    }
if (index == 141) {
     return 1304;
    }
if (index == 142) {
     return 1300;
    }
if (index == 143) {
     return 1318;
    }
if (index == 144) {
     return 1309;
    }
if (index == 145) {
     return 1316;
    }
if (index == 146) {
     return 1306;
    }
if (index == 147) {
     return 1315;
    }
if (index == 148) {
     return 1307;
    }
if (index == 149) {
     return 1311;
    }
if (index == 150) {
     return 1310;
    }
if (index == 151) {
     return 1321;
    }
if (index == 152) {
     return 1315;
    }
if (index == 153) {
     return 1323;
    }
if (index == 154) {
     return 1311;
    }
if (index == 155) {
     return 1298;
    }
if (index == 156) {
     return 1308;
    }
if (index == 157) {
     return 1300;
    }
if (index == 158) {
     return 1288;
    }
if (index == 159) {
     return 845;
    }
if (index == 160) {
     return 1313;
    }
if (index == 161) {
     return 1303;
    }
if (index == 162) {
     return 1315;
    }
if (index == 163) {
     return 1301;
    }
if (index == 164) {
     return 1305;
    }
if (index == 165) {
     return 1306;
    }
if (index == 166) {
     return 1288;
    }
if (index == 167) {
     return 1278;
    }
if (index == 168) {
     return 1303;
    }
if (index == 169) {
     return 1311;
    }
if (index == 170) {
     return 1316;
    }
if (index == 171) {
     return 1306;
    }
if (index == 172) {
     return 1305;
    }
if (index == 173) {
     return 1278;
    }
if (index == 174) {
     return 1288;
    }
if (index == 175) {
     return 1305;
    }
if (index == 176) {
     return 738;
    }
if (index == 177) {
     return 1278;
    }
if (index == 178) {
     return 1315;
    }
if (index == 179) {
     return 1304;
    }
if (index == 180) {
     return 1286;
    }
if (index == 181) {
     return 1302;
    }
if (index == 182) {
     return 1287;
    }
if (index == 183) {
     return 1296;
    }
if (index == 184) {
     return 1287;
    }
if (index == 185) {
     return 1310;
    }
if (index == 186) {
     return 1312;
    }
if (index == 187) {
     return 1317;
    }
if (index == 188) {
     return 1287;
    }
if (index == 189) {
     return 1305;
    }
if (index == 190) {
     return 1293;
    }
if (index == 191) {
     return 1297;
    }
if (index == 192) {
     return 1290;
    }
if (index == 193) {
     return 1298;
    }
if (index == 194) {
     return 1290;
    }
if (index == 195) {
     return 1292;
    }
if (index == 196) {
     return 1292;
    }
if (index == 197) {
     return 1305;
    }
if (index == 198) {
     return 1298;
    }
if (index == 199) {
     return 1304;
    }
if (index == 200) {
     return 1298;
    }
if (index == 201) {
     return 1294;
    }
if (index == 202) {
     return 1300;
    }
if (index == 203) {
     return 1303;
    }
if (index == 204) {
     return 724;
    }
if (index == 205) {
     return 1261;
    }
if (index == 206) {
     return 1303;
    }
if (index == 207) {
     return 1296;
    }
if (index == 208) {
     return 1227;
    }
if (index == 209) {
     return 1261;
    }
if (index == 210) {
     return 1298;
    }
if (index == 211) {
     return 1261;
    }
if (index == 212) {
     return 1281;
    }
if (index == 213) {
     return 1268;
    }
if (index == 214) {
     return 1264;
    }
if (index == 215) {
     return 1261;
    }
if (index == 216) {
     return 1264;
    }
if (index == 217) {
     return 1266;
    }
if (index == 218) {
     return 1261;
    }
if (index == 219) {
     return 1261;
    }
if (index == 220) {
     return 1273;
    }
if (index == 221) {
     return 1261;
    }
if (index == 222) {
     return 1261;
    }
if (index == 223) {
     return 1261;
    }
if (index == 224) {
     return 1261;
    }
if (index == 225) {
     return 1263;
    }
if (index == 226) {
     return 1269;
    }
if (index == 227) {
     return 1270;
    }
if (index == 228) {
     return 1268;
    }
if (index == 229) {
     return 1261;
    }
if (index == 230) {
     return 1261;
    }
if (index == 231) {
     return 1261;
    }
if (index == 232) {
     return 1261;
    }
if (index == 233) {
     return 1268;
    }
if (index == 234) {
     return 1261;
    }
if (index == 235) {
     return 1262;
    }
if (index == 236) {
     return 1266;
    }
if (index == 237) {
     return 1268;
    }
if (index == 238) {
     return 1266;
    }
if (index == 239) {
     return 1262;
    }
if (index == 240) {
     return 1261;
    }
if (index == 241) {
     return 1272;
    }
if (index == 242) {
     return 1270;
    }
if (index == 243) {
     return 1277;
    }
if (index == 244) {
     return 1266;
    }
if (index == 245) {
     return 1265;
    }
if (index == 246) {
     return 1261;
    }
if (index == 247) {
     return 1264;
    }
if (index == 248) {
     return 1264;
    }
if (index == 249) {
     return 1261;
    }
if (index == 250) {
     return 1261;
    }
if (index == 251) {
     return 1262;
    }
if (index == 252) {
     return 719;
    }
if (index == 253) {
     return 1261;
    }
if (index == 254) {
     return 1262;
    }
if (index == 255) {
     return 1267;
    }
if (index == 256) {
     return 1261;
    }
if (index == 257) {
     return 1261;
    }
if (index == 258) {
     return 1262;
    }
if (index == 259) {
     return 1266;
    }
if (index == 260) {
     return 1262;
    }
if (index == 261) {
     return 1273;
    }
if (index == 262) {
     return 1264;
    }
if (index == 263) {
     return 1272;
    }
if (index == 264) {
     return 1261;
    }
if (index == 265) {
     return 1274;
    }
if (index == 266) {
     return 1272;
    }
if (index == 267) {
     return 1266;
    }
if (index == 268) {
     return 1271;
    }
if (index == 269) {
     return 1272;
    }
if (index == 270) {
     return 1264;
    }
if (index == 271) {
     return 1270;
    }
if (index == 272) {
     return 715;
    }
if (index == 273) {
     return 1261;
    }
if (index == 274) {
     return 1268;
    }
if (index == 275) {
     return 1267;
    }
if (index == 276) {
     return 1266;
    }
if (index == 277) {
     return 1270;
    }
if (index == 278) {
     return 1273;
    }
if (index == 279) {
     return 1272;
    }
if (index == 280) {
     return 1264;
    }
if (index == 281) {
     return 1268;
    }
if (index == 282) {
     return 1270;
    }
if (index == 283) {
     return 1267;
    }
if (index == 284) {
     return 1262;
    }
if (index == 285) {
     return 1273;
    }
if (index == 286) {
     return 1266;
    }
if (index == 287) {
     return 1273;
    }
if (index == 288) {
     return 1272;
    }
if (index == 289) {
     return 1261;
    }
if (index == 290) {
     return 1261;
    }
if (index == 291) {
     return 1261;
    }
if (index == 292) {
     return 1261;
    }
if (index == 293) {
     return 1268;
    }
if (index == 294) {
     return 1275;
    }
if (index == 295) {
     return 1266;
    }
if (index == 296) {
     return 1261;
    }
if (index == 297) {
     return 1273;
    }
if (index == 298) {
     return 728;
    }
if (index == 299) {
     return 1261;
    }
if (index == 300) {
     return 1261;
    }
if (index == 301) {
     return 1270;
    }
if (index == 302) {
     return 722;
    }
if (index == 303) {
     return 1261;
    }
if (index == 304) {
     return 1279;
    }
if (index == 305) {
     return 1277;
    }
if (index == 306) {
     return 1274;
    }
if (index == 307) {
     return 1296;
    }
if (index == 308) {
     return 1280;
    }
if (index == 309) {
     return 1292;
    }
if (index == 310) {
     return 1277;
    }
if (index == 311) {
     return 1282;
    }
if (index == 312) {
     return 704;
    }
if (index == 313) {
     return 1270;
    }
if (index == 314) {
     return 1273;
    }
if (index == 315) {
     return 1270;
    }
if (index == 316) {
     return 1273;
    }
if (index == 317) {
     return 1300;
    }
if (index == 318) {
     return 1273;
    }
if (index == 319) {
     return 1289;
    }
if (index == 320) {
     return 747;
    }
if (index == 321) {
     return 1270;
    }
if (index == 322) {
     return 1280;
    }
if (index == 323) {
     return 1296;
    }
if (index == 324) {
     return 1276;
    }
if (index == 325) {
     return 1294;
    }
if (index == 326) {
     return 1276;
    }
if (index == 327) {
     return 1281;
    }
if (index == 328) {
     return 1279;
    }
if (index == 329) {
     return 1294;
    }
if (index == 330) {
     return 1280;
    }
if (index == 331) {
     return 1295;
    }
if (index == 332) {
     return 1275;
    }
if (index == 333) {
     return 1303;
    }
if (index == 334) {
     return 747;
    }
if (index == 335) {
     return 1270;
    }
if (index == 336) {
     return 1273;
    }
if (index == 337) {
     return 1271;
    }
if (index == 338) {
     return 1266;
    }
if (index == 339) {
     return 1282;
    }
if (index == 340) {
     return 1263;
    }
if (index == 341) {
     return 1282;
    }
if (index == 342) {
     return 1267;
    }
if (index == 343) {
     return 1286;
    }
if (index == 344) {
     return 1261;
    }
if (index == 345) {
     return 1286;
    }
if (index == 346) {
     return 1270;
    }
if (index == 347) {
     return 1278;
    }
if (index == 348) {
     return 1261;
    }
if (index == 349) {
     return 1288;
    }
if (index == 350) {
     return 1261;
    }
if (index == 351) {
     return 1285;
    }
if (index == 352) {
     return 1265;
    }
if (index == 353) {
     return 1281;
    }
if (index == 354) {
     return 1267;
    }
if (index == 355) {
     return 1271;
    }
if (index == 356) {
     return 1261;
    }
if (index == 357) {
     return 1287;
    }
if (index == 358) {
     return 1264;
    }
if (index == 359) {
     return 1270;
    }
if (index == 360) {
     return 1262;
    }
if (index == 361) {
     return 1283;
    }
if (index == 362) {
     return 1261;
    }
if (index == 363) {
     return 1276;
    }
if (index == 364) {
     return 1263;
    }
if (index == 365) {
     return 1278;
    }
if (index == 366) {
     return 1266;
    }
if (index == 367) {
     return 1275;
    }
if (index == 368) {
     return 1266;
    }
if (index == 369) {
     return 1285;
    }
if (index == 370) {
     return 1261;
    }
if (index == 371) {
     return 1281;
    }
if (index == 372) {
     return 1262;
    }
if (index == 373) {
     return 1281;
    }
if (index == 374) {
     return 1266;
    }
if (index == 375) {
     return 1280;
    }
if (index == 376) {
     return 1267;
    }
if (index == 377) {
     return 1272;
    }
if (index == 378) {
     return 1264;
    }
if (index == 379) {
     return 1275;
    }
if (index == 380) {
     return 1266;
    }
if (index == 381) {
     return 1277;
    }
if (index == 382) {
     return 1261;
    }
if (index == 383) {
     return 1271;
    }
if (index == 384) {
     return 1269;
    }
if (index == 385) {
     return 1274;
    }
if (index == 386) {
     return 1277;
    }
if (index == 387) {
     return 1266;
    }
if (index == 388) {
     return 1259;
    }
if (index == 389) {
     return 1273;
    }
if (index == 390) {
     return 1267;
    }
if (index == 391) {
     return 1279;
    }
if (index == 392) {
     return 1267;
    }
if (index == 393) {
     return 1264;
    }
if (index == 394) {
     return 1262;
    }
if (index == 395) {
     return 1266;
    }
if (index == 396) {
     return 1261;
    }
if (index == 397) {
     return 1271;
    }
if (index == 398) {
     return 1261;
    }
if (index == 399) {
     return 1261;
    }
if (index == 400) {
     return 1261;
    }
if (index == 401) {
     return 1267;
    }
if (index == 402) {
     return 1261;
    }
if (index == 403) {
     return 1266;
    }
if (index == 404) {
     return 1266;
    }
if (index == 405) {
     return 1264;
    }
if (index == 406) {
     return 1269;
    }
if (index == 407) {
     return 1264;
    }
if (index == 408) {
     return 1261;
    }
if (index == 409) {
     return 1269;
    }
if (index == 410) {
     return 1261;
    }
if (index == 411) {
     return 1255;
    }
if (index == 412) {
     return 1261;
    }
if (index == 413) {
     return 1276;
    }
if (index == 414) {
     return 1261;
    }
if (index == 415) {
     return 1273;
    }
if (index == 416) {
     return 1275;
    }
if (index == 417) {
     return 1271;
    }
if (index == 418) {
     return 1261;
    }
if (index == 419) {
     return 1261;
    }
if (index == 420) {
     return 1261;
    }
if (index == 421) {
     return 1277;
    }
if (index == 422) {
     return 1261;
    }
if (index == 423) {
     return 1286;
    }
if (index == 424) {
     return 1261;
    }
if (index == 425) {
     return 1270;
    }
if (index == 426) {
     return 1261;
    }
if (index == 427) {
     return 1275;
    }
if (index == 428) {
     return 1261;
    }
if (index == 429) {
     return 1277;
    }
if (index == 430) {
     return 1261;
    }
if (index == 431) {
     return 1268;
    }
if (index == 432) {
     return 1253;
    }
if (index == 433) {
     return 1270;
    }
if (index == 434) {
     return 1261;
    }
if (index == 435) {
     return 1266;
    }
if (index == 436) {
     return 1262;
    }
if (index == 437) {
     return 1277;
    }
if (index == 438) {
     return 1261;
    }
if (index == 439) {
     return 1276;
    }
if (index == 440) {
     return 1261;
    }
if (index == 441) {
     return 1277;
    }
if (index == 442) {
     return 729;
    }
if (index == 443) {
     return 1261;
    }
if (index == 444) {
     return 1261;
    }
if (index == 445) {
     return 1281;
    }
if (index == 446) {
     return 1261;
    }
if (index == 447) {
     return 1267;
    }
if (index == 448) {
     return 1261;
    }
if (index == 449) {
     return 1271;
    }
if (index == 450) {
     return 1277;
    }
if (index == 451) {
     return 1261;
    }
if (index == 452) {
     return 1267;
    }
if (index == 453) {
     return 1271;
    }
if (index == 454) {
     return 1261;
    }
if (index == 455) {
     return 1261;
    }
if (index == 456) {
     return 1269;
    }
if (index == 457) {
     return 1261;
    }
if (index == 458) {
     return 1265;
    }
if (index == 459) {
     return 1262;
    }
if (index == 460) {
     return 1261;
    }
if (index == 461) {
     return 1261;
    }
if (index == 462) {
     return 1264;
    }
if (index == 463) {
     return 1267;
    }
if (index == 464) {
     return 1266;
    }
if (index == 465) {
     return 1269;
    }
if (index == 466) {
     return 1257;
    }
if (index == 467) {
     return 1261;
    }
if (index == 468) {
     return 1270;
    }
if (index == 469) {
     return 1261;
    }
if (index == 470) {
     return 1274;
    }
if (index == 471) {
     return 1261;
    }
if (index == 472) {
     return 1273;
    }
if (index == 473) {
     return 1262;
    }
if (index == 474) {
     return 1264;
    }
if (index == 475) {
     return 1266;
    }
if (index == 476) {
     return 1276;
    }
if (index == 477) {
     return 1265;
    }
if (index == 478) {
     return 1270;
    }
if (index == 479) {
     return 1263;
    }
if (index == 480) {
     return 1259;
    }
if (index == 481) {
     return 1261;
    }
if (index == 482) {
     return 1269;
    }
if (index == 483) {
     return 1271;
    }
if (index == 484) {
     return 1261;
    }
if (index == 485) {
     return 1261;
    }
if (index == 486) {
     return 1279;
    }
if (index == 487) {
     return 1261;
    }
if (index == 488) {
     return 1271;
    }
if (index == 489) {
     return 1271;
    }
if (index == 490) {
     return 1272;
    }
if (index == 491) {
     return 1265;
    }
if (index == 492) {
     return 1278;
    }
if (index == 493) {
     return 1263;
    }
if (index == 494) {
     return 1268;
    }
if (index == 495) {
     return 1261;
    }
if (index == 496) {
     return 1272;
    }
if (index == 497) {
     return 1277;
    }
if (index == 498) {
     return 1282;
    }
if (index == 499) {
     return 1270;
    }
if (index == 500) {
     return 1282;
    }
if (index == 501) {
     return 1266;
    }
if (index == 502) {
     return 1279;
    }
if (index == 503) {
     return 1261;
    }
if (index == 504) {
     return 1286;
    }
if (index == 505) {
     return 1265;
    }
if (index == 506) {
     return 1270;
    }
if (index == 507) {
     return 1276;
    }
if (index == 508) {
     return 1275;
    }
if (index == 509) {
     return 1261;
    }
if (index == 510) {
     return 1277;
    }
if (index == 511) {
     return 1265;
    }
if (index == 512) {
     return 1285;
    }
if (index == 513) {
     return 1261;
    }
if (index == 514) {
     return 1269;
    }
if (index == 515) {
     return 1271;
    }
if (index == 516) {
     return 709;
    }
if (index == 517) {
     return 1261;
    }
if (index == 518) {
     return 1284;
    }
if (index == 519) {
     return 1267;
    }
if (index == 520) {
     return 707;
    }
if (index == 521) {
     return 1261;
    }
if (index == 522) {
     return 1255;
    }
if (index == 523) {
     return 1261;
    }
if (index == 524) {
     return 1289;
    }
if (index == 525) {
     return 1268;
    }
if (index == 526) {
     return 1269;
    }
if (index == 527) {
     return 1278;
    }
if (index == 528) {
     return 1267;
    }
if (index == 529) {
     return 1265;
    }
if (index == 530) {
     return 1268;
    }
if (index == 531) {
     return 1270;
    }
if (index == 532) {
     return 1279;
    }
if (index == 533) {
     return 1261;
    }
if (index == 534) {
     return 1272;
    }
if (index == 535) {
     return 1261;
    }
if (index == 536) {
     return 1267;
    }
if (index == 537) {
     return 1273;
    }
if (index == 538) {
     return 1267;
    }
if (index == 539) {
     return 1280;
    }
if (index == 540) {
     return 1269;
    }
if (index == 541) {
     return 1259;
    }
if (index == 542) {
     return 1268;
    }
if (index == 543) {
     return 1280;
    }
if (index == 544) {
     return 1273;
    }
if (index == 545) {
     return 1282;
    }
if (index == 546) {
     return 1270;
    }
if (index == 547) {
     return 1281;
    }
if (index == 548) {
     return 1280;
    }
if (index == 549) {
     return 1264;
    }
if (index == 550) {
     return 1270;
    }
if (index == 551) {
     return 1275;
    }
if (index == 552) {
     return 1275;
    }
if (index == 553) {
     return 1283;
    }
if (index == 554) {
     return 1270;
    }
if (index == 555) {
     return 1278;
    }
if (index == 556) {
     return 1271;
    }
if (index == 557) {
     return 1275;
    }
if (index == 558) {
     return 1281;
    }
if (index == 559) {
     return 1274;
    }
if (index == 560) {
     return 1271;
    }
if (index == 561) {
     return 1283;
    }
if (index == 562) {
     return 701;
    }
if (index == 563) {
     return 1261;
    }
if (index == 564) {
     return 1276;
    }
if (index == 565) {
     return 1276;
    }
if (index == 566) {
     return 1276;
    }
if (index == 567) {
     return 1281;
    }
if (index == 568) {
     return 1277;
    }
if (index == 569) {
     return 1279;
    }
if (index == 570) {
     return 1272;
    }
if (index == 571) {
     return 1259;
    }
if (index == 572) {
     return 1246;
    }
if (index == 573) {
     return 1281;
    }
if (index == 574) {
     return 1272;
    }
if (index == 575) {
     return 1285;
    }
if (index == 576) {
     return 1270;
    }
if (index == 577) {
     return 1285;
    }
if (index == 578) {
     return 1270;
    }
if (index == 579) {
     return 1268;
    }
if (index == 580) {
     return 1273;
    }
if (index == 581) {
     return 1273;
    }
if (index == 582) {
     return 1280;
    }
if (index == 583) {
     return 1259;
    }
if (index == 584) {
     return 709;
    }
if (index == 585) {
     return 1261;
    }
if (index == 586) {
     return 1272;
    }
if (index == 587) {
     return 1259;
    }
if (index == 588) {
     return 1271;
    }
if (index == 589) {
     return 1289;
    }
if (index == 590) {
     return 711;
    }
if (index == 591) {
     return 1261;
    }
if (index == 592) {
     return 1263;
    }
if (index == 593) {
     return 1288;
    }
if (index == 594) {
     return 1252;
    }
if (index == 595) {
     return 1261;
    }
if (index == 596) {
     return 1250;
    }
if (index == 597) {
     return 1269;
    }
if (index == 598) {
     return 708;
    }
if (index == 599) {
     return 1261;
    }
if (index == 600) {
     return 1284;
    }
if (index == 601) {
     return 1274;
    }
if (index == 602) {
     return 738;
    }
if (index == 603) {
     return 1261;
    }
if (index == 604) {
     return 1264;
    }
if (index == 605) {
     return 1286;
    }
if (index == 606) {
     return 1296;
    }
if (index == 607) {
     return 1284;
    }
if (index == 608) {
     return 1298;
    }
if (index == 609) {
     return 1298;
    }
if (index == 610) {
     return 1301;
    }
if (index == 611) {
     return 1301;
    }
if (index == 612) {
     return 1309;
    }
if (index == 613) {
     return 1293;
    }
if (index == 614) {
     return 1313;
    }
if (index == 615) {
     return 1278;
    }
if (index == 616) {
     return 1306;
    }
if (index == 617) {
     return 1286;
    }
if (index == 618) {
     return 1308;
    }
if (index == 619) {
     return 1280;
    }
if (index == 620) {
     return 1320;
    }
if (index == 621) {
     return 765;
    }
if (index == 622) {
     return 1303;
    }
if (index == 623) {
     return 1287;
    }
if (index == 624) {
     return 1296;
    }
if (index == 625) {
     return 1337;
    }
if (index == 626) {
     return 1284;
    }
if (index == 627) {
     return 1385;
    }
if (index > 627) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:069_' + imgStr + '/digitalImage';
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
br.numLeafs = 628;

// Book title and the URL used for the book title link
br.bookTitle= "The Straits of Malacca, Indo-China, and China, or, Ten years' travels, adventures, and residence abroad / by J. Thomson ... illustrated with upward of sixty wood engravings by J.D. Cooper, from the author's own sketches and photographs";
br.bookAuthor= "Thomson, John";
br.bookPub= "New York: Harper and Bros, 1875";
br.bookKeyword= "China--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indochina--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malacca, Strait of";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:069';

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
