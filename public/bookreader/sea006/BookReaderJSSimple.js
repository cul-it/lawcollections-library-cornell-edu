//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 412;
    }
if (index == 1) {
     return 393;
    }
if (index == 2) {
     return 401;
    }
if (index == 3) {
     return 358;
    }
if (index == 4) {
     return 368;
    }
if (index == 5) {
     return 375;
    }
if (index == 6) {
     return 378;
    }
if (index == 7) {
     return 369;
    }
if (index == 8) {
     return 370;
    }
if (index == 9) {
     return 373;
    }
if (index == 10) {
     return 390;
    }
if (index == 11) {
     return 384;
    }
if (index == 12) {
     return 396;
    }
if (index == 13) {
     return 379;
    }
if (index == 14) {
     return 384;
    }
if (index == 15) {
     return 369;
    }
if (index == 16) {
     return 378;
    }
if (index == 17) {
     return 365;
    }
if (index == 18) {
     return 370;
    }
if (index == 19) {
     return 372;
    }
if (index == 20) {
     return 365;
    }
if (index == 21) {
     return 393;
    }
if (index == 22) {
     return 363;
    }
if (index == 23) {
     return 376;
    }
if (index == 24) {
     return 645;
    }
if (index == 25) {
     return 358;
    }
if (index == 26) {
     return 354;
    }
if (index == 27) {
     return 754;
    }
if (index == 28) {
     return 359;
    }
if (index == 29) {
     return 720;
    }
if (index == 30) {
     return 362;
    }
if (index == 31) {
     return 752;
    }
if (index == 32) {
     return 364;
    }
if (index == 33) {
     return 364;
    }
if (index == 34) {
     return 365;
    }
if (index == 35) {
     return 741;
    }
if (index == 36) {
     return 367;
    }
if (index == 37) {
     return 717;
    }
if (index == 38) {
     return 354;
    }
if (index == 39) {
     return 726;
    }
if (index == 40) {
     return 368;
    }
if (index == 41) {
     return 706;
    }
if (index == 42) {
     return 359;
    }
if (index == 43) {
     return 722;
    }
if (index == 44) {
     return 360;
    }
if (index == 45) {
     return 356;
    }
if (index == 46) {
     return 368;
    }
if (index == 47) {
     return 362;
    }
if (index == 48) {
     return 364;
    }
if (index == 49) {
     return 359;
    }
if (index == 50) {
     return 354;
    }
if (index == 51) {
     return 343;
    }
if (index == 52) {
     return 624;
    }
if (index == 53) {
     return 387;
    }
if (index == 54) {
     return 364;
    }
if (index == 55) {
     return 710;
    }
if (index == 56) {
     return 364;
    }
if (index == 57) {
     return 737;
    }
if (index == 58) {
     return 369;
    }
if (index == 59) {
     return 362;
    }
if (index == 60) {
     return 363;
    }
if (index == 61) {
     return 356;
    }
if (index == 62) {
     return 377;
    }
if (index == 63) {
     return 362;
    }
if (index == 64) {
     return 374;
    }
if (index == 65) {
     return 350;
    }
if (index == 66) {
     return 357;
    }
if (index == 67) {
     return 341;
    }
if (index == 68) {
     return 611;
    }
if (index == 69) {
     return 380;
    }
if (index == 70) {
     return 389;
    }
if (index == 71) {
     return 379;
    }
if (index == 72) {
     return 387;
    }
if (index == 73) {
     return 631;
    }
if (index == 74) {
     return 386;
    }
if (index == 75) {
     return 377;
    }
if (index == 76) {
     return 377;
    }
if (index == 77) {
     return 378;
    }
if (index == 78) {
     return 648;
    }
if (index == 79) {
     return 387;
    }
if (index == 80) {
     return 754;
    }
if (index == 81) {
     return 376;
    }
if (index == 82) {
     return 381;
    }
if (index == 83) {
     return 372;
    }
if (index == 84) {
     return 377;
    }
if (index == 85) {
     return 375;
    }
if (index == 86) {
     return 378;
    }
if (index == 87) {
     return 373;
    }
if (index == 88) {
     return 380;
    }
if (index == 89) {
     return 365;
    }
if (index == 90) {
     return 376;
    }
if (index == 91) {
     return 359;
    }
if (index == 92) {
     return 370;
    }
if (index == 93) {
     return 368;
    }
if (index == 94) {
     return 373;
    }
if (index == 95) {
     return 366;
    }
if (index == 96) {
     return 370;
    }
if (index == 97) {
     return 363;
    }
if (index == 98) {
     return 375;
    }
if (index == 99) {
     return 364;
    }
if (index == 100) {
     return 372;
    }
if (index == 101) {
     return 362;
    }
if (index == 102) {
     return 373;
    }
if (index == 103) {
     return 368;
    }
if (index == 104) {
     return 370;
    }
if (index == 105) {
     return 364;
    }
if (index == 106) {
     return 371;
    }
if (index == 107) {
     return 362;
    }
if (index == 108) {
     return 368;
    }
if (index == 109) {
     return 366;
    }
if (index == 110) {
     return 370;
    }
if (index == 111) {
     return 366;
    }
if (index == 112) {
     return 371;
    }
if (index == 113) {
     return 359;
    }
if (index == 114) {
     return 370;
    }
if (index == 115) {
     return 365;
    }
if (index == 116) {
     return 380;
    }
if (index == 117) {
     return 361;
    }
if (index == 118) {
     return 378;
    }
if (index == 119) {
     return 365;
    }
if (index == 120) {
     return 380;
    }
if (index == 121) {
     return 369;
    }
if (index == 122) {
     return 383;
    }
if (index == 123) {
     return 369;
    }
if (index == 124) {
     return 374;
    }
if (index == 125) {
     return 370;
    }
if (index == 126) {
     return 373;
    }
if (index == 127) {
     return 373;
    }
if (index == 128) {
     return 376;
    }
if (index == 129) {
     return 375;
    }
if (index == 130) {
     return 371;
    }
if (index == 131) {
     return 372;
    }
if (index == 132) {
     return 369;
    }
if (index == 133) {
     return 371;
    }
if (index == 134) {
     return 375;
    }
if (index == 135) {
     return 376;
    }
if (index == 136) {
     return 375;
    }
if (index == 137) {
     return 374;
    }
if (index == 138) {
     return 369;
    }
if (index == 139) {
     return 373;
    }
if (index == 140) {
     return 370;
    }
if (index == 141) {
     return 362;
    }
if (index == 142) {
     return 367;
    }
if (index == 143) {
     return 366;
    }
if (index == 144) {
     return 376;
    }
if (index == 145) {
     return 622;
    }
if (index == 146) {
     return 368;
    }
if (index == 147) {
     return 373;
    }
if (index == 148) {
     return 368;
    }
if (index == 149) {
     return 365;
    }
if (index == 150) {
     return 371;
    }
if (index == 151) {
     return 370;
    }
if (index == 152) {
     return 388;
    }
if (index == 153) {
     return 621;
    }
if (index == 154) {
     return 384;
    }
if (index == 155) {
     return 378;
    }
if (index == 156) {
     return 384;
    }
if (index == 157) {
     return 380;
    }
if (index == 158) {
     return 387;
    }
if (index == 159) {
     return 374;
    }
if (index == 160) {
     return 381;
    }
if (index == 161) {
     return 380;
    }
if (index == 162) {
     return 371;
    }
if (index == 163) {
     return 369;
    }
if (index == 164) {
     return 375;
    }
if (index == 165) {
     return 379;
    }
if (index == 166) {
     return 381;
    }
if (index == 167) {
     return 628;
    }
if (index == 168) {
     return 379;
    }
if (index == 169) {
     return 374;
    }
if (index == 170) {
     return 379;
    }
if (index == 171) {
     return 374;
    }
if (index == 172) {
     return 376;
    }
if (index == 173) {
     return 373;
    }
if (index == 174) {
     return 381;
    }
if (index == 175) {
     return 371;
    }
if (index == 176) {
     return 379;
    }
if (index == 177) {
     return 375;
    }
if (index == 178) {
     return 379;
    }
if (index == 179) {
     return 375;
    }
if (index == 180) {
     return 378;
    }
if (index == 181) {
     return 379;
    }
if (index == 182) {
     return 380;
    }
if (index == 183) {
     return 368;
    }
if (index == 184) {
     return 377;
    }
if (index == 185) {
     return 368;
    }
if (index == 186) {
     return 375;
    }
if (index == 187) {
     return 370;
    }
if (index == 188) {
     return 376;
    }
if (index == 189) {
     return 370;
    }
if (index == 190) {
     return 379;
    }
if (index == 191) {
     return 365;
    }
if (index == 192) {
     return 368;
    }
if (index == 193) {
     return 367;
    }
if (index == 194) {
     return 380;
    }
if (index == 195) {
     return 371;
    }
if (index == 196) {
     return 382;
    }
if (index == 197) {
     return 366;
    }
if (index == 198) {
     return 370;
    }
if (index == 199) {
     return 368;
    }
if (index == 200) {
     return 381;
    }
if (index == 201) {
     return 360;
    }
if (index == 202) {
     return 377;
    }
if (index == 203) {
     return 365;
    }
if (index == 204) {
     return 377;
    }
if (index == 205) {
     return 366;
    }
if (index == 206) {
     return 373;
    }
if (index == 207) {
     return 360;
    }
if (index == 208) {
     return 376;
    }
if (index == 209) {
     return 365;
    }
if (index == 210) {
     return 368;
    }
if (index == 211) {
     return 363;
    }
if (index == 212) {
     return 379;
    }
if (index == 213) {
     return 362;
    }
if (index == 214) {
     return 374;
    }
if (index == 215) {
     return 367;
    }
if (index == 216) {
     return 375;
    }
if (index == 217) {
     return 371;
    }
if (index == 218) {
     return 376;
    }
if (index == 219) {
     return 364;
    }
if (index == 220) {
     return 374;
    }
if (index == 221) {
     return 359;
    }
if (index == 222) {
     return 377;
    }
if (index == 223) {
     return 363;
    }
if (index == 224) {
     return 375;
    }
if (index == 225) {
     return 365;
    }
if (index == 226) {
     return 375;
    }
if (index == 227) {
     return 365;
    }
if (index == 228) {
     return 367;
    }
if (index == 229) {
     return 360;
    }
if (index == 230) {
     return 376;
    }
if (index == 231) {
     return 360;
    }
if (index == 232) {
     return 370;
    }
if (index == 233) {
     return 369;
    }
if (index == 234) {
     return 375;
    }
if (index == 235) {
     return 365;
    }
if (index == 236) {
     return 380;
    }
if (index == 237) {
     return 357;
    }
if (index == 238) {
     return 374;
    }
if (index == 239) {
     return 369;
    }
if (index == 240) {
     return 366;
    }
if (index == 241) {
     return 353;
    }
if (index == 242) {
     return 377;
    }
if (index == 243) {
     return 368;
    }
if (index == 244) {
     return 371;
    }
if (index == 245) {
     return 361;
    }
if (index == 246) {
     return 376;
    }
if (index == 247) {
     return 361;
    }
if (index == 248) {
     return 370;
    }
if (index == 249) {
     return 362;
    }
if (index == 250) {
     return 368;
    }
if (index == 251) {
     return 369;
    }
if (index == 252) {
     return 367;
    }
if (index == 253) {
     return 370;
    }
if (index == 254) {
     return 374;
    }
if (index == 255) {
     return 371;
    }
if (index == 256) {
     return 358;
    }
if (index == 257) {
     return 370;
    }
if (index == 258) {
     return 358;
    }
if (index == 259) {
     return 365;
    }
if (index == 260) {
     return 365;
    }
if (index == 261) {
     return 365;
    }
if (index == 262) {
     return 364;
    }
if (index == 263) {
     return 369;
    }
if (index == 264) {
     return 367;
    }
if (index == 265) {
     return 623;
    }
if (index == 266) {
     return 841;
    }
if (index == 267) {
     return 841;
    }
if (index == 268) {
     return 377;
    }
if (index == 269) {
     return 364;
    }
if (index == 270) {
     return 616;
    }
if (index == 271) {
     return 363;
    }
if (index == 272) {
     return 376;
    }
if (index == 273) {
     return 366;
    }
if (index == 274) {
     return 620;
    }
if (index == 275) {
     return 372;
    }
if (index == 276) {
     return 373;
    }
if (index == 277) {
     return 418;
    }
if (index == 278) {
     return 648;
    }
if (index == 279) {
     return 362;
    }
if (index == 280) {
     return 376;
    }
if (index == 281) {
     return 365;
    }
if (index == 282) {
     return 396;
    }
if (index == 283) {
     return 375;
    }
if (index == 284) {
     return 393;
    }
if (index == 285) {
     return 360;
    }
if (index == 286) {
     return 648;
    }
if (index == 287) {
     return 359;
    }
if (index == 288) {
     return 373;
    }
if (index == 289) {
     return 370;
    }
if (index == 290) {
     return 423;
    }
if (index == 291) {
     return 360;
    }
if (index == 292) {
     return 374;
    }
if (index == 293) {
     return 648;
    }
if (index == 294) {
     return 378;
    }
if (index == 295) {
     return 356;
    }
if (index == 296) {
     return 377;
    }
if (index == 297) {
     return 358;
    }
if (index == 298) {
     return 648;
    }
if (index == 299) {
     return 355;
    }
if (index == 300) {
     return 373;
    }
if (index == 301) {
     return 367;
    }
if (index == 302) {
     return 380;
    }
if (index == 303) {
     return 648;
    }
if (index == 304) {
     return 377;
    }
if (index == 305) {
     return 366;
    }
if (index == 306) {
     return 648;
    }
if (index == 307) {
     return 363;
    }
if (index == 308) {
     return 375;
    }
if (index == 309) {
     return 371;
    }
if (index == 310) {
     return 373;
    }
if (index == 311) {
     return 364;
    }
if (index == 312) {
     return 366;
    }
if (index == 313) {
     return 362;
    }
if (index == 314) {
     return 374;
    }
if (index == 315) {
     return 370;
    }
if (index == 316) {
     return 370;
    }
if (index == 317) {
     return 369;
    }
if (index == 318) {
     return 375;
    }
if (index == 319) {
     return 367;
    }
if (index == 320) {
     return 423;
    }
if (index == 321) {
     return 363;
    }
if (index == 322) {
     return 396;
    }
if (index == 323) {
     return 367;
    }
if (index == 324) {
     return 370;
    }
if (index == 325) {
     return 363;
    }
if (index == 326) {
     return 371;
    }
if (index == 327) {
     return 367;
    }
if (index == 328) {
     return 364;
    }
if (index == 329) {
     return 371;
    }
if (index == 330) {
     return 366;
    }
if (index == 331) {
     return 365;
    }
if (index == 332) {
     return 364;
    }
if (index == 333) {
     return 368;
    }
if (index == 334) {
     return 361;
    }
if (index == 335) {
     return 371;
    }
if (index == 336) {
     return 369;
    }
if (index == 337) {
     return 368;
    }
if (index == 338) {
     return 378;
    }
if (index == 339) {
     return 369;
    }
if (index == 340) {
     return 377;
    }
if (index == 341) {
     return 362;
    }
if (index == 342) {
     return 371;
    }
if (index == 343) {
     return 364;
    }
if (index == 344) {
     return 371;
    }
if (index == 345) {
     return 405;
    }
if (index == 346) {
     return 370;
    }
if (index == 347) {
     return 369;
    }
if (index == 348) {
     return 379;
    }
if (index == 349) {
     return 372;
    }
if (index == 350) {
     return 373;
    }
if (index == 351) {
     return 365;
    }
if (index == 352) {
     return 371;
    }
if (index == 353) {
     return 367;
    }
if (index == 354) {
     return 372;
    }
if (index == 355) {
     return 371;
    }
if (index == 356) {
     return 374;
    }
if (index == 357) {
     return 405;
    }
if (index == 358) {
     return 376;
    }
if (index == 359) {
     return 371;
    }
if (index == 360) {
     return 371;
    }
if (index == 361) {
     return 369;
    }
if (index == 362) {
     return 376;
    }
if (index == 363) {
     return 360;
    }
if (index == 364) {
     return 372;
    }
if (index == 365) {
     return 405;
    }
if (index == 366) {
     return 375;
    }
if (index == 367) {
     return 372;
    }
if (index == 368) {
     return 377;
    }
if (index == 369) {
     return 375;
    }
if (index == 370) {
     return 405;
    }
if (index == 371) {
     return 368;
    }
if (index == 372) {
     return 375;
    }
if (index == 373) {
     return 648;
    }
if (index == 374) {
     return 369;
    }
if (index == 375) {
     return 366;
    }
if (index == 376) {
     return 365;
    }
if (index == 377) {
     return 371;
    }
if (index == 378) {
     return 371;
    }
if (index == 379) {
     return 380;
    }
if (index == 380) {
     return 414;
    }
if (index == 381) {
     return 376;
    }
if (index == 382) {
     return 377;
    }
if (index == 383) {
     return 375;
    }
if (index == 384) {
     return 385;
    }
if (index == 385) {
     return 405;
    }
if (index == 386) {
     return 384;
    }
if (index == 387) {
     return 377;
    }
if (index == 388) {
     return 381;
    }
if (index == 389) {
     return 374;
    }
if (index == 390) {
     return 382;
    }
if (index == 391) {
     return 405;
    }
if (index == 392) {
     return 379;
    }
if (index == 393) {
     return 373;
    }
if (index == 394) {
     return 619;
    }
if (index == 395) {
     return 382;
    }
if (index == 396) {
     return 378;
    }
if (index == 397) {
     return 389;
    }
if (index == 398) {
     return 385;
    }
if (index == 399) {
     return 382;
    }
if (index == 400) {
     return 414;
    }
if (index == 401) {
     return 385;
    }
if (index == 402) {
     return 414;
    }
if (index == 403) {
     return 384;
    }
if (index == 404) {
     return 372;
    }
if (index == 405) {
     return 382;
    }
if (index == 406) {
     return 363;
    }
if (index == 407) {
     return 375;
    }
if (index == 408) {
     return 369;
    }
if (index == 409) {
     return 430;
    }
if (index > 409) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 649;
    }
if (index == 1) {
     return 637;
    }
if (index == 2) {
     return 622;
    }
if (index == 3) {
     return 625;
    }
if (index == 4) {
     return 630;
    }
if (index == 5) {
     return 642;
    }
if (index == 6) {
     return 623;
    }
if (index == 7) {
     return 644;
    }
if (index == 8) {
     return 618;
    }
if (index == 9) {
     return 627;
    }
if (index == 10) {
     return 645;
    }
if (index == 11) {
     return 643;
    }
if (index == 12) {
     return 638;
    }
if (index == 13) {
     return 640;
    }
if (index == 14) {
     return 639;
    }
if (index == 15) {
     return 637;
    }
if (index == 16) {
     return 631;
    }
if (index == 17) {
     return 632;
    }
if (index == 18) {
     return 635;
    }
if (index == 19) {
     return 634;
    }
if (index == 20) {
     return 629;
    }
if (index == 21) {
     return 635;
    }
if (index == 22) {
     return 634;
    }
if (index == 23) {
     return 639;
    }
if (index == 24) {
     return 812;
    }
if (index == 25) {
     return 625;
    }
if (index == 26) {
     return 629;
    }
if (index == 27) {
     return 1265;
    }
if (index == 28) {
     return 627;
    }
if (index == 29) {
     return 1255;
    }
if (index == 30) {
     return 627;
    }
if (index == 31) {
     return 1269;
    }
if (index == 32) {
     return 629;
    }
if (index == 33) {
     return 654;
    }
if (index == 34) {
     return 630;
    }
if (index == 35) {
     return 1261;
    }
if (index == 36) {
     return 622;
    }
if (index == 37) {
     return 1254;
    }
if (index == 38) {
     return 624;
    }
if (index == 39) {
     return 1257;
    }
if (index == 40) {
     return 636;
    }
if (index == 41) {
     return 1255;
    }
if (index == 42) {
     return 617;
    }
if (index == 43) {
     return 1239;
    }
if (index == 44) {
     return 624;
    }
if (index == 45) {
     return 631;
    }
if (index == 46) {
     return 625;
    }
if (index == 47) {
     return 629;
    }
if (index == 48) {
     return 619;
    }
if (index == 49) {
     return 627;
    }
if (index == 50) {
     return 621;
    }
if (index == 51) {
     return 634;
    }
if (index == 52) {
     return 360;
    }
if (index == 53) {
     return 632;
    }
if (index == 54) {
     return 632;
    }
if (index == 55) {
     return 1256;
    }
if (index == 56) {
     return 626;
    }
if (index == 57) {
     return 1267;
    }
if (index == 58) {
     return 624;
    }
if (index == 59) {
     return 628;
    }
if (index == 60) {
     return 628;
    }
if (index == 61) {
     return 632;
    }
if (index == 62) {
     return 618;
    }
if (index == 63) {
     return 628;
    }
if (index == 64) {
     return 624;
    }
if (index == 65) {
     return 626;
    }
if (index == 66) {
     return 625;
    }
if (index == 67) {
     return 618;
    }
if (index == 68) {
     return 384;
    }
if (index == 69) {
     return 632;
    }
if (index == 70) {
     return 622;
    }
if (index == 71) {
     return 632;
    }
if (index == 72) {
     return 632;
    }
if (index == 73) {
     return 379;
    }
if (index == 74) {
     return 637;
    }
if (index == 75) {
     return 626;
    }
if (index == 76) {
     return 634;
    }
if (index == 77) {
     return 628;
    }
if (index == 78) {
     return 405;
    }
if (index == 79) {
     return 632;
    }
if (index == 80) {
     return 1237;
    }
if (index == 81) {
     return 630;
    }
if (index == 82) {
     return 624;
    }
if (index == 83) {
     return 630;
    }
if (index == 84) {
     return 620;
    }
if (index == 85) {
     return 627;
    }
if (index == 86) {
     return 623;
    }
if (index == 87) {
     return 628;
    }
if (index == 88) {
     return 619;
    }
if (index == 89) {
     return 630;
    }
if (index == 90) {
     return 616;
    }
if (index == 91) {
     return 627;
    }
if (index == 92) {
     return 619;
    }
if (index == 93) {
     return 629;
    }
if (index == 94) {
     return 621;
    }
if (index == 95) {
     return 628;
    }
if (index == 96) {
     return 616;
    }
if (index == 97) {
     return 630;
    }
if (index == 98) {
     return 617;
    }
if (index == 99) {
     return 629;
    }
if (index == 100) {
     return 614;
    }
if (index == 101) {
     return 628;
    }
if (index == 102) {
     return 608;
    }
if (index == 103) {
     return 622;
    }
if (index == 104) {
     return 609;
    }
if (index == 105) {
     return 630;
    }
if (index == 106) {
     return 613;
    }
if (index == 107) {
     return 628;
    }
if (index == 108) {
     return 610;
    }
if (index == 109) {
     return 631;
    }
if (index == 110) {
     return 622;
    }
if (index == 111) {
     return 621;
    }
if (index == 112) {
     return 618;
    }
if (index == 113) {
     return 627;
    }
if (index == 114) {
     return 622;
    }
if (index == 115) {
     return 620;
    }
if (index == 116) {
     return 605;
    }
if (index == 117) {
     return 620;
    }
if (index == 118) {
     return 609;
    }
if (index == 119) {
     return 624;
    }
if (index == 120) {
     return 612;
    }
if (index == 121) {
     return 620;
    }
if (index == 122) {
     return 608;
    }
if (index == 123) {
     return 621;
    }
if (index == 124) {
     return 619;
    }
if (index == 125) {
     return 627;
    }
if (index == 126) {
     return 618;
    }
if (index == 127) {
     return 629;
    }
if (index == 128) {
     return 623;
    }
if (index == 129) {
     return 625;
    }
if (index == 130) {
     return 613;
    }
if (index == 131) {
     return 627;
    }
if (index == 132) {
     return 624;
    }
if (index == 133) {
     return 628;
    }
if (index == 134) {
     return 614;
    }
if (index == 135) {
     return 629;
    }
if (index == 136) {
     return 612;
    }
if (index == 137) {
     return 625;
    }
if (index == 138) {
     return 610;
    }
if (index == 139) {
     return 629;
    }
if (index == 140) {
     return 620;
    }
if (index == 141) {
     return 622;
    }
if (index == 142) {
     return 620;
    }
if (index == 143) {
     return 616;
    }
if (index == 144) {
     return 618;
    }
if (index == 145) {
     return 382;
    }
if (index == 146) {
     return 622;
    }
if (index == 147) {
     return 622;
    }
if (index == 148) {
     return 616;
    }
if (index == 149) {
     return 618;
    }
if (index == 150) {
     return 615;
    }
if (index == 151) {
     return 623;
    }
if (index == 152) {
     return 614;
    }
if (index == 153) {
     return 388;
    }
if (index == 154) {
     return 618;
    }
if (index == 155) {
     return 622;
    }
if (index == 156) {
     return 610;
    }
if (index == 157) {
     return 627;
    }
if (index == 158) {
     return 610;
    }
if (index == 159) {
     return 625;
    }
if (index == 160) {
     return 610;
    }
if (index == 161) {
     return 625;
    }
if (index == 162) {
     return 616;
    }
if (index == 163) {
     return 616;
    }
if (index == 164) {
     return 612;
    }
if (index == 165) {
     return 627;
    }
if (index == 166) {
     return 613;
    }
if (index == 167) {
     return 384;
    }
if (index == 168) {
     return 622;
    }
if (index == 169) {
     return 630;
    }
if (index == 170) {
     return 622;
    }
if (index == 171) {
     return 625;
    }
if (index == 172) {
     return 627;
    }
if (index == 173) {
     return 626;
    }
if (index == 174) {
     return 624;
    }
if (index == 175) {
     return 628;
    }
if (index == 176) {
     return 622;
    }
if (index == 177) {
     return 633;
    }
if (index == 178) {
     return 626;
    }
if (index == 179) {
     return 632;
    }
if (index == 180) {
     return 624;
    }
if (index == 181) {
     return 633;
    }
if (index == 182) {
     return 620;
    }
if (index == 183) {
     return 629;
    }
if (index == 184) {
     return 620;
    }
if (index == 185) {
     return 628;
    }
if (index == 186) {
     return 622;
    }
if (index == 187) {
     return 630;
    }
if (index == 188) {
     return 625;
    }
if (index == 189) {
     return 633;
    }
if (index == 190) {
     return 621;
    }
if (index == 191) {
     return 629;
    }
if (index == 192) {
     return 618;
    }
if (index == 193) {
     return 626;
    }
if (index == 194) {
     return 615;
    }
if (index == 195) {
     return 627;
    }
if (index == 196) {
     return 620;
    }
if (index == 197) {
     return 612;
    }
if (index == 198) {
     return 616;
    }
if (index == 199) {
     return 627;
    }
if (index == 200) {
     return 614;
    }
if (index == 201) {
     return 635;
    }
if (index == 202) {
     return 621;
    }
if (index == 203) {
     return 628;
    }
if (index == 204) {
     return 610;
    }
if (index == 205) {
     return 632;
    }
if (index == 206) {
     return 621;
    }
if (index == 207) {
     return 628;
    }
if (index == 208) {
     return 619;
    }
if (index == 209) {
     return 628;
    }
if (index == 210) {
     return 607;
    }
if (index == 211) {
     return 632;
    }
if (index == 212) {
     return 607;
    }
if (index == 213) {
     return 634;
    }
if (index == 214) {
     return 606;
    }
if (index == 215) {
     return 633;
    }
if (index == 216) {
     return 607;
    }
if (index == 217) {
     return 628;
    }
if (index == 218) {
     return 616;
    }
if (index == 219) {
     return 618;
    }
if (index == 220) {
     return 603;
    }
if (index == 221) {
     return 619;
    }
if (index == 222) {
     return 614;
    }
if (index == 223) {
     return 618;
    }
if (index == 224) {
     return 609;
    }
if (index == 225) {
     return 631;
    }
if (index == 226) {
     return 602;
    }
if (index == 227) {
     return 622;
    }
if (index == 228) {
     return 608;
    }
if (index == 229) {
     return 621;
    }
if (index == 230) {
     return 610;
    }
if (index == 231) {
     return 620;
    }
if (index == 232) {
     return 605;
    }
if (index == 233) {
     return 634;
    }
if (index == 234) {
     return 605;
    }
if (index == 235) {
     return 627;
    }
if (index == 236) {
     return 613;
    }
if (index == 237) {
     return 627;
    }
if (index == 238) {
     return 606;
    }
if (index == 239) {
     return 622;
    }
if (index == 240) {
     return 611;
    }
if (index == 241) {
     return 629;
    }
if (index == 242) {
     return 611;
    }
if (index == 243) {
     return 631;
    }
if (index == 244) {
     return 612;
    }
if (index == 245) {
     return 632;
    }
if (index == 246) {
     return 614;
    }
if (index == 247) {
     return 624;
    }
if (index == 248) {
     return 618;
    }
if (index == 249) {
     return 626;
    }
if (index == 250) {
     return 616;
    }
if (index == 251) {
     return 619;
    }
if (index == 252) {
     return 616;
    }
if (index == 253) {
     return 622;
    }
if (index == 254) {
     return 610;
    }
if (index == 255) {
     return 627;
    }
if (index == 256) {
     return 611;
    }
if (index == 257) {
     return 623;
    }
if (index == 258) {
     return 604;
    }
if (index == 259) {
     return 622;
    }
if (index == 260) {
     return 597;
    }
if (index == 261) {
     return 624;
    }
if (index == 262) {
     return 618;
    }
if (index == 263) {
     return 625;
    }
if (index == 264) {
     return 601;
    }
if (index == 265) {
     return 380;
    }
if (index == 266) {
     return 639;
    }
if (index == 267) {
     return 639;
    }
if (index == 268) {
     return 607;
    }
if (index == 269) {
     return 628;
    }
if (index == 270) {
     return 389;
    }
if (index == 271) {
     return 627;
    }
if (index == 272) {
     return 618;
    }
if (index == 273) {
     return 628;
    }
if (index == 274) {
     return 385;
    }
if (index == 275) {
     return 619;
    }
if (index == 276) {
     return 621;
    }
if (index == 277) {
     return 648;
    }
if (index == 278) {
     return 423;
    }
if (index == 279) {
     return 627;
    }
if (index == 280) {
     return 614;
    }
if (index == 281) {
     return 624;
    }
if (index == 282) {
     return 626;
    }
if (index == 283) {
     return 621;
    }
if (index == 284) {
     return 620;
    }
if (index == 285) {
     return 625;
    }
if (index == 286) {
     return 423;
    }
if (index == 287) {
     return 622;
    }
if (index == 288) {
     return 617;
    }
if (index == 289) {
     return 617;
    }
if (index == 290) {
     return 648;
    }
if (index == 291) {
     return 622;
    }
if (index == 292) {
     return 610;
    }
if (index == 293) {
     return 418;
    }
if (index == 294) {
     return 616;
    }
if (index == 295) {
     return 619;
    }
if (index == 296) {
     return 601;
    }
if (index == 297) {
     return 621;
    }
if (index == 298) {
     return 423;
    }
if (index == 299) {
     return 622;
    }
if (index == 300) {
     return 614;
    }
if (index == 301) {
     return 607;
    }
if (index == 302) {
     return 614;
    }
if (index == 303) {
     return 418;
    }
if (index == 304) {
     return 611;
    }
if (index == 305) {
     return 611;
    }
if (index == 306) {
     return 423;
    }
if (index == 307) {
     return 620;
    }
if (index == 308) {
     return 607;
    }
if (index == 309) {
     return 615;
    }
if (index == 310) {
     return 607;
    }
if (index == 311) {
     return 615;
    }
if (index == 312) {
     return 613;
    }
if (index == 313) {
     return 620;
    }
if (index == 314) {
     return 612;
    }
if (index == 315) {
     return 615;
    }
if (index == 316) {
     return 612;
    }
if (index == 317) {
     return 615;
    }
if (index == 318) {
     return 610;
    }
if (index == 319) {
     return 617;
    }
if (index == 320) {
     return 648;
    }
if (index == 321) {
     return 615;
    }
if (index == 322) {
     return 627;
    }
if (index == 323) {
     return 631;
    }
if (index == 324) {
     return 610;
    }
if (index == 325) {
     return 625;
    }
if (index == 326) {
     return 604;
    }
if (index == 327) {
     return 625;
    }
if (index == 328) {
     return 613;
    }
if (index == 329) {
     return 631;
    }
if (index == 330) {
     return 614;
    }
if (index == 331) {
     return 624;
    }
if (index == 332) {
     return 610;
    }
if (index == 333) {
     return 626;
    }
if (index == 334) {
     return 616;
    }
if (index == 335) {
     return 625;
    }
if (index == 336) {
     return 605;
    }
if (index == 337) {
     return 628;
    }
if (index == 338) {
     return 610;
    }
if (index == 339) {
     return 630;
    }
if (index == 340) {
     return 608;
    }
if (index == 341) {
     return 627;
    }
if (index == 342) {
     return 614;
    }
if (index == 343) {
     return 625;
    }
if (index == 344) {
     return 612;
    }
if (index == 345) {
     return 648;
    }
if (index == 346) {
     return 618;
    }
if (index == 347) {
     return 622;
    }
if (index == 348) {
     return 616;
    }
if (index == 349) {
     return 626;
    }
if (index == 350) {
     return 617;
    }
if (index == 351) {
     return 624;
    }
if (index == 352) {
     return 611;
    }
if (index == 353) {
     return 624;
    }
if (index == 354) {
     return 614;
    }
if (index == 355) {
     return 627;
    }
if (index == 356) {
     return 611;
    }
if (index == 357) {
     return 648;
    }
if (index == 358) {
     return 612;
    }
if (index == 359) {
     return 628;
    }
if (index == 360) {
     return 605;
    }
if (index == 361) {
     return 623;
    }
if (index == 362) {
     return 610;
    }
if (index == 363) {
     return 627;
    }
if (index == 364) {
     return 606;
    }
if (index == 365) {
     return 648;
    }
if (index == 366) {
     return 616;
    }
if (index == 367) {
     return 629;
    }
if (index == 368) {
     return 608;
    }
if (index == 369) {
     return 628;
    }
if (index == 370) {
     return 648;
    }
if (index == 371) {
     return 630;
    }
if (index == 372) {
     return 607;
    }
if (index == 373) {
     return 405;
    }
if (index == 374) {
     return 610;
    }
if (index == 375) {
     return 628;
    }
if (index == 376) {
     return 608;
    }
if (index == 377) {
     return 626;
    }
if (index == 378) {
     return 608;
    }
if (index == 379) {
     return 622;
    }
if (index == 380) {
     return 648;
    }
if (index == 381) {
     return 622;
    }
if (index == 382) {
     return 620;
    }
if (index == 383) {
     return 624;
    }
if (index == 384) {
     return 613;
    }
if (index == 385) {
     return 648;
    }
if (index == 386) {
     return 609;
    }
if (index == 387) {
     return 623;
    }
if (index == 388) {
     return 610;
    }
if (index == 389) {
     return 622;
    }
if (index == 390) {
     return 607;
    }
if (index == 391) {
     return 648;
    }
if (index == 392) {
     return 602;
    }
if (index == 393) {
     return 620;
    }
if (index == 394) {
     return 385;
    }
if (index == 395) {
     return 620;
    }
if (index == 396) {
     return 626;
    }
if (index == 397) {
     return 619;
    }
if (index == 398) {
     return 628;
    }
if (index == 399) {
     return 621;
    }
if (index == 400) {
     return 648;
    }
if (index == 401) {
     return 618;
    }
if (index == 402) {
     return 648;
    }
if (index == 403) {
     return 627;
    }
if (index == 404) {
     return 614;
    }
if (index == 405) {
     return 621;
    }
if (index == 406) {
     return 618;
    }
if (index == 407) {
     return 627;
    }
if (index == 408) {
     return 623;
    }
if (index == 409) {
     return 666;
    }
if (index > 409) {
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
    var url = '/fedora/get/seapage:006_' + imgStr + '/digitalImage';
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
br.numLeafs = 410;

// Book title and the URL used for the book title link
br.bookTitle= "The land of the white elephant: : sights and scenes in south-eastern Asia. : A personal narrative of travel and adventure in farther India, embracing the countries of Burma, Siam, Cambodia, and Cochin-China, 1871-2";
br.bookAuthor= "Vincent, Frank";
br.bookPub= "London: S.Low, Marston, Low and Searle, 1873";
br.bookKeyword= "Southeast Asia--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India--Description and travel";
br.bookUrl  = '/catalog/sea:006';

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