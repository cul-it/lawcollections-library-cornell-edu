//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 932;
    }
if (index == 1) {
     return 859;
    }
if (index == 2) {
     return 812;
    }
if (index == 3) {
     return 785;
    }
if (index == 4) {
     return 785;
    }
if (index == 5) {
     return 785;
    }
if (index == 6) {
     return 902;
    }
if (index == 7) {
     return 781;
    }
if (index == 8) {
     return 800;
    }
if (index == 9) {
     return 745;
    }
if (index == 10) {
     return 778;
    }
if (index == 11) {
     return 793;
    }
if (index == 12) {
     return 784;
    }
if (index == 13) {
     return 783;
    }
if (index == 14) {
     return 776;
    }
if (index == 15) {
     return 789;
    }
if (index == 16) {
     return 787;
    }
if (index == 17) {
     return 795;
    }
if (index == 18) {
     return 789;
    }
if (index == 19) {
     return 765;
    }
if (index == 20) {
     return 762;
    }
if (index == 21) {
     return 769;
    }
if (index == 22) {
     return 748;
    }
if (index == 23) {
     return 784;
    }
if (index == 24) {
     return 756;
    }
if (index == 25) {
     return 775;
    }
if (index == 26) {
     return 756;
    }
if (index == 27) {
     return 766;
    }
if (index == 28) {
     return 773;
    }
if (index == 29) {
     return 749;
    }
if (index == 30) {
     return 799;
    }
if (index == 31) {
     return 765;
    }
if (index == 32) {
     return 758;
    }
if (index == 33) {
     return 775;
    }
if (index == 34) {
     return 762;
    }
if (index == 35) {
     return 777;
    }
if (index == 36) {
     return 766;
    }
if (index == 37) {
     return 789;
    }
if (index == 38) {
     return 770;
    }
if (index == 39) {
     return 777;
    }
if (index == 40) {
     return 777;
    }
if (index == 41) {
     return 775;
    }
if (index == 42) {
     return 762;
    }
if (index == 43) {
     return 770;
    }
if (index == 44) {
     return 782;
    }
if (index == 45) {
     return 759;
    }
if (index == 46) {
     return 748;
    }
if (index == 47) {
     return 747;
    }
if (index == 48) {
     return 797;
    }
if (index == 49) {
     return 741;
    }
if (index == 50) {
     return 764;
    }
if (index == 51) {
     return 745;
    }
if (index == 52) {
     return 766;
    }
if (index == 53) {
     return 755;
    }
if (index == 54) {
     return 756;
    }
if (index == 55) {
     return 733;
    }
if (index == 56) {
     return 788;
    }
if (index == 57) {
     return 745;
    }
if (index == 58) {
     return 776;
    }
if (index == 59) {
     return 780;
    }
if (index == 60) {
     return 760;
    }
if (index == 61) {
     return 777;
    }
if (index == 62) {
     return 766;
    }
if (index == 63) {
     return 768;
    }
if (index == 64) {
     return 772;
    }
if (index == 65) {
     return 792;
    }
if (index == 66) {
     return 774;
    }
if (index == 67) {
     return 788;
    }
if (index == 68) {
     return 778;
    }
if (index == 69) {
     return 789;
    }
if (index == 70) {
     return 783;
    }
if (index == 71) {
     return 792;
    }
if (index == 72) {
     return 795;
    }
if (index == 73) {
     return 785;
    }
if (index == 74) {
     return 774;
    }
if (index == 75) {
     return 746;
    }
if (index == 76) {
     return 760;
    }
if (index == 77) {
     return 770;
    }
if (index == 78) {
     return 788;
    }
if (index == 79) {
     return 1242;
    }
if (index == 80) {
     return 758;
    }
if (index == 81) {
     return 754;
    }
if (index == 82) {
     return 759;
    }
if (index == 83) {
     return 742;
    }
if (index == 84) {
     return 750;
    }
if (index == 85) {
     return 762;
    }
if (index == 86) {
     return 736;
    }
if (index == 87) {
     return 820;
    }
if (index == 88) {
     return 770;
    }
if (index == 89) {
     return 785;
    }
if (index == 90) {
     return 765;
    }
if (index == 91) {
     return 762;
    }
if (index == 92) {
     return 794;
    }
if (index == 93) {
     return 824;
    }
if (index == 94) {
     return 787;
    }
if (index == 95) {
     return 806;
    }
if (index == 96) {
     return 774;
    }
if (index == 97) {
     return 781;
    }
if (index == 98) {
     return 762;
    }
if (index == 99) {
     return 794;
    }
if (index == 100) {
     return 769;
    }
if (index == 101) {
     return 1242;
    }
if (index == 102) {
     return 796;
    }
if (index == 103) {
     return 768;
    }
if (index == 104) {
     return 794;
    }
if (index == 105) {
     return 802;
    }
if (index == 106) {
     return 773;
    }
if (index == 107) {
     return 830;
    }
if (index == 108) {
     return 802;
    }
if (index == 109) {
     return 824;
    }
if (index == 110) {
     return 798;
    }
if (index == 111) {
     return 782;
    }
if (index == 112) {
     return 828;
    }
if (index == 113) {
     return 822;
    }
if (index == 114) {
     return 792;
    }
if (index == 115) {
     return 788;
    }
if (index == 116) {
     return 780;
    }
if (index == 117) {
     return 824;
    }
if (index == 118) {
     return 810;
    }
if (index == 119) {
     return 820;
    }
if (index == 120) {
     return 798;
    }
if (index == 121) {
     return 800;
    }
if (index == 122) {
     return 771;
    }
if (index == 123) {
     return 822;
    }
if (index == 124) {
     return 763;
    }
if (index == 125) {
     return 784;
    }
if (index == 126) {
     return 787;
    }
if (index == 127) {
     return 794;
    }
if (index == 128) {
     return 804;
    }
if (index == 129) {
     return 816;
    }
if (index == 130) {
     return 759;
    }
if (index == 131) {
     return 790;
    }
if (index == 132) {
     return 759;
    }
if (index == 133) {
     return 810;
    }
if (index == 134) {
     return 802;
    }
if (index == 135) {
     return 824;
    }
if (index == 136) {
     return 1252;
    }
if (index == 137) {
     return 782;
    }
if (index == 138) {
     return 773;
    }
if (index == 139) {
     return 774;
    }
if (index == 140) {
     return 773;
    }
if (index == 141) {
     return 1701;
    }
if (index == 142) {
     return 782;
    }
if (index == 143) {
     return 783;
    }
if (index == 144) {
     return 804;
    }
if (index == 145) {
     return 785;
    }
if (index == 146) {
     return 778;
    }
if (index == 147) {
     return 819;
    }
if (index == 148) {
     return 762;
    }
if (index == 149) {
     return 799;
    }
if (index == 150) {
     return 808;
    }
if (index == 151) {
     return 817;
    }
if (index == 152) {
     return 804;
    }
if (index == 153) {
     return 779;
    }
if (index == 154) {
     return 790;
    }
if (index == 155) {
     return 807;
    }
if (index == 156) {
     return 824;
    }
if (index == 157) {
     return 807;
    }
if (index == 158) {
     return 776;
    }
if (index == 159) {
     return 799;
    }
if (index == 160) {
     return 804;
    }
if (index == 161) {
     return 791;
    }
if (index == 162) {
     return 780;
    }
if (index == 163) {
     return 779;
    }
if (index == 164) {
     return 786;
    }
if (index == 165) {
     return 795;
    }
if (index == 166) {
     return 787;
    }
if (index == 167) {
     return 795;
    }
if (index == 168) {
     return 804;
    }
if (index == 169) {
     return 775;
    }
if (index == 170) {
     return 796;
    }
if (index == 171) {
     return 797;
    }
if (index == 172) {
     return 822;
    }
if (index == 173) {
     return 793;
    }
if (index == 174) {
     return 804;
    }
if (index == 175) {
     return 787;
    }
if (index == 176) {
     return 806;
    }
if (index == 177) {
     return 789;
    }
if (index == 178) {
     return 778;
    }
if (index == 179) {
     return 782;
    }
if (index == 180) {
     return 792;
    }
if (index == 181) {
     return 801;
    }
if (index == 182) {
     return 806;
    }
if (index == 183) {
     return 825;
    }
if (index == 184) {
     return 774;
    }
if (index == 185) {
     return 801;
    }
if (index == 186) {
     return 814;
    }
if (index == 187) {
     return 781;
    }
if (index == 188) {
     return 797;
    }
if (index == 189) {
     return 821;
    }
if (index == 190) {
     return 776;
    }
if (index == 191) {
     return 787;
    }
if (index == 192) {
     return 788;
    }
if (index == 193) {
     return 765;
    }
if (index == 194) {
     return 794;
    }
if (index == 195) {
     return 788;
    }
if (index == 196) {
     return 796;
    }
if (index == 197) {
     return 777;
    }
if (index == 198) {
     return 794;
    }
if (index == 199) {
     return 789;
    }
if (index == 200) {
     return 788;
    }
if (index == 201) {
     return 827;
    }
if (index == 202) {
     return 780;
    }
if (index == 203) {
     return 771;
    }
if (index == 204) {
     return 776;
    }
if (index == 205) {
     return 800;
    }
if (index == 206) {
     return 790;
    }
if (index == 207) {
     return 774;
    }
if (index == 208) {
     return 766;
    }
if (index == 209) {
     return 784;
    }
if (index == 210) {
     return 778;
    }
if (index == 211) {
     return 786;
    }
if (index == 212) {
     return 760;
    }
if (index == 213) {
     return 785;
    }
if (index == 214) {
     return 927;
    }
if (index > 214) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1320;
    }
if (index == 1) {
     return 1262;
    }
if (index == 2) {
     return 1254;
    }
if (index == 3) {
     return 1242;
    }
if (index == 4) {
     return 1242;
    }
if (index == 5) {
     return 1242;
    }
if (index == 6) {
     return 1273;
    }
if (index == 7) {
     return 1243;
    }
if (index == 8) {
     return 1252;
    }
if (index == 9) {
     return 1239;
    }
if (index == 10) {
     return 1264;
    }
if (index == 11) {
     return 1221;
    }
if (index == 12) {
     return 1252;
    }
if (index == 13) {
     return 1243;
    }
if (index == 14) {
     return 1265;
    }
if (index == 15) {
     return 1243;
    }
if (index == 16) {
     return 1244;
    }
if (index == 17) {
     return 1243;
    }
if (index == 18) {
     return 1252;
    }
if (index == 19) {
     return 1243;
    }
if (index == 20) {
     return 1252;
    }
if (index == 21) {
     return 1241;
    }
if (index == 22) {
     return 1252;
    }
if (index == 23) {
     return 1239;
    }
if (index == 24) {
     return 1262;
    }
if (index == 25) {
     return 1241;
    }
if (index == 26) {
     return 1252;
    }
if (index == 27) {
     return 1255;
    }
if (index == 28) {
     return 1252;
    }
if (index == 29) {
     return 1241;
    }
if (index == 30) {
     return 1252;
    }
if (index == 31) {
     return 1243;
    }
if (index == 32) {
     return 1252;
    }
if (index == 33) {
     return 1243;
    }
if (index == 34) {
     return 1252;
    }
if (index == 35) {
     return 1241;
    }
if (index == 36) {
     return 1250;
    }
if (index == 37) {
     return 1243;
    }
if (index == 38) {
     return 1252;
    }
if (index == 39) {
     return 1241;
    }
if (index == 40) {
     return 1263;
    }
if (index == 41) {
     return 1241;
    }
if (index == 42) {
     return 1252;
    }
if (index == 43) {
     return 1269;
    }
if (index == 44) {
     return 1250;
    }
if (index == 45) {
     return 1243;
    }
if (index == 46) {
     return 1244;
    }
if (index == 47) {
     return 1243;
    }
if (index == 48) {
     return 1252;
    }
if (index == 49) {
     return 1243;
    }
if (index == 50) {
     return 1252;
    }
if (index == 51) {
     return 1237;
    }
if (index == 52) {
     return 1250;
    }
if (index == 53) {
     return 1239;
    }
if (index == 54) {
     return 1252;
    }
if (index == 55) {
     return 1243;
    }
if (index == 56) {
     return 1249;
    }
if (index == 57) {
     return 1251;
    }
if (index == 58) {
     return 1250;
    }
if (index == 59) {
     return 1242;
    }
if (index == 60) {
     return 1252;
    }
if (index == 61) {
     return 1253;
    }
if (index == 62) {
     return 1252;
    }
if (index == 63) {
     return 1244;
    }
if (index == 64) {
     return 1252;
    }
if (index == 65) {
     return 1244;
    }
if (index == 66) {
     return 1252;
    }
if (index == 67) {
     return 1238;
    }
if (index == 68) {
     return 1252;
    }
if (index == 69) {
     return 1252;
    }
if (index == 70) {
     return 1269;
    }
if (index == 71) {
     return 1244;
    }
if (index == 72) {
     return 1246;
    }
if (index == 73) {
     return 1271;
    }
if (index == 74) {
     return 1257;
    }
if (index == 75) {
     return 1242;
    }
if (index == 76) {
     return 1259;
    }
if (index == 77) {
     return 1244;
    }
if (index == 78) {
     return 1252;
    }
if (index == 79) {
     return 758;
    }
if (index == 80) {
     return 1252;
    }
if (index == 81) {
     return 1244;
    }
if (index == 82) {
     return 1270;
    }
if (index == 83) {
     return 1240;
    }
if (index == 84) {
     return 1252;
    }
if (index == 85) {
     return 1244;
    }
if (index == 86) {
     return 1252;
    }
if (index == 87) {
     return 1240;
    }
if (index == 88) {
     return 1252;
    }
if (index == 89) {
     return 1262;
    }
if (index == 90) {
     return 1248;
    }
if (index == 91) {
     return 1244;
    }
if (index == 92) {
     return 1250;
    }
if (index == 93) {
     return 1236;
    }
if (index == 94) {
     return 1252;
    }
if (index == 95) {
     return 1240;
    }
if (index == 96) {
     return 1261;
    }
if (index == 97) {
     return 1245;
    }
if (index == 98) {
     return 1253;
    }
if (index == 99) {
     return 1244;
    }
if (index == 100) {
     return 1255;
    }
if (index == 101) {
     return 792;
    }
if (index == 102) {
     return 1252;
    }
if (index == 103) {
     return 1244;
    }
if (index == 104) {
     return 1240;
    }
if (index == 105) {
     return 1244;
    }
if (index == 106) {
     return 1252;
    }
if (index == 107) {
     return 1232;
    }
if (index == 108) {
     return 1248;
    }
if (index == 109) {
     return 1240;
    }
if (index == 110) {
     return 1252;
    }
if (index == 111) {
     return 1245;
    }
if (index == 112) {
     return 1248;
    }
if (index == 113) {
     return 1232;
    }
if (index == 114) {
     return 1244;
    }
if (index == 115) {
     return 1244;
    }
if (index == 116) {
     return 1252;
    }
if (index == 117) {
     return 1242;
    }
if (index == 118) {
     return 1252;
    }
if (index == 119) {
     return 1234;
    }
if (index == 120) {
     return 1261;
    }
if (index == 121) {
     return 1240;
    }
if (index == 122) {
     return 1252;
    }
if (index == 123) {
     return 1242;
    }
if (index == 124) {
     return 1252;
    }
if (index == 125) {
     return 1240;
    }
if (index == 126) {
     return 1263;
    }
if (index == 127) {
     return 1236;
    }
if (index == 128) {
     return 1252;
    }
if (index == 129) {
     return 1244;
    }
if (index == 130) {
     return 1250;
    }
if (index == 131) {
     return 1236;
    }
if (index == 132) {
     return 1248;
    }
if (index == 133) {
     return 1242;
    }
if (index == 134) {
     return 1252;
    }
if (index == 135) {
     return 1242;
    }
if (index == 136) {
     return 772;
    }
if (index == 137) {
     return 1244;
    }
if (index == 138) {
     return 1252;
    }
if (index == 139) {
     return 1244;
    }
if (index == 140) {
     return 1250;
    }
if (index == 141) {
     return 1233;
    }
if (index == 142) {
     return 1206;
    }
if (index == 143) {
     return 1271;
    }
if (index == 144) {
     return 1244;
    }
if (index == 145) {
     return 1252;
    }
if (index == 146) {
     return 1256;
    }
if (index == 147) {
     return 1252;
    }
if (index == 148) {
     return 1244;
    }
if (index == 149) {
     return 1248;
    }
if (index == 150) {
     return 1242;
    }
if (index == 151) {
     return 1252;
    }
if (index == 152) {
     return 1240;
    }
if (index == 153) {
     return 1252;
    }
if (index == 154) {
     return 1234;
    }
if (index == 155) {
     return 1250;
    }
if (index == 156) {
     return 1240;
    }
if (index == 157) {
     return 1246;
    }
if (index == 158) {
     return 1244;
    }
if (index == 159) {
     return 1242;
    }
if (index == 160) {
     return 1244;
    }
if (index == 161) {
     return 1250;
    }
if (index == 162) {
     return 1242;
    }
if (index == 163) {
     return 1250;
    }
if (index == 164) {
     return 1242;
    }
if (index == 165) {
     return 1250;
    }
if (index == 166) {
     return 1261;
    }
if (index == 167) {
     return 1252;
    }
if (index == 168) {
     return 1244;
    }
if (index == 169) {
     return 1252;
    }
if (index == 170) {
     return 1236;
    }
if (index == 171) {
     return 1261;
    }
if (index == 172) {
     return 1236;
    }
if (index == 173) {
     return 1246;
    }
if (index == 174) {
     return 1242;
    }
if (index == 175) {
     return 1252;
    }
if (index == 176) {
     return 1244;
    }
if (index == 177) {
     return 1252;
    }
if (index == 178) {
     return 1244;
    }
if (index == 179) {
     return 1273;
    }
if (index == 180) {
     return 1244;
    }
if (index == 181) {
     return 1266;
    }
if (index == 182) {
     return 1244;
    }
if (index == 183) {
     return 1252;
    }
if (index == 184) {
     return 1259;
    }
if (index == 185) {
     return 1250;
    }
if (index == 186) {
     return 1234;
    }
if (index == 187) {
     return 1252;
    }
if (index == 188) {
     return 1246;
    }
if (index == 189) {
     return 1248;
    }
if (index == 190) {
     return 1242;
    }
if (index == 191) {
     return 1252;
    }
if (index == 192) {
     return 1242;
    }
if (index == 193) {
     return 1266;
    }
if (index == 194) {
     return 1244;
    }
if (index == 195) {
     return 1277;
    }
if (index == 196) {
     return 1240;
    }
if (index == 197) {
     return 1250;
    }
if (index == 198) {
     return 1240;
    }
if (index == 199) {
     return 1250;
    }
if (index == 200) {
     return 1244;
    }
if (index == 201) {
     return 1252;
    }
if (index == 202) {
     return 1242;
    }
if (index == 203) {
     return 1250;
    }
if (index == 204) {
     return 1247;
    }
if (index == 205) {
     return 1271;
    }
if (index == 206) {
     return 1242;
    }
if (index == 207) {
     return 1252;
    }
if (index == 208) {
     return 1226;
    }
if (index == 209) {
     return 1250;
    }
if (index == 210) {
     return 1243;
    }
if (index == 211) {
     return 1254;
    }
if (index == 212) {
     return 1236;
    }
if (index == 213) {
     return 1242;
    }
if (index == 214) {
     return 1320;
    }
if (index > 214) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:187_' + imgStr + '/digitalImage';
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
br.numLeafs = 215;

// Book title and the URL used for the book title link
br.bookTitle= "The Philippine Islands";
br.bookAuthor= "Boyce, William Dickson, 1848-";
br.bookPub= "Chicago, New York: Rand, McNally, 1914";
br.bookKeyword= "Philippines--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:187';

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
