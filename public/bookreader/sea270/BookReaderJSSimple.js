//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 813;
    }
if (index == 1) {
     return 758;
    }
if (index == 2) {
     return 736;
    }
if (index == 3) {
     return 715;
    }
if (index == 4) {
     return 773;
    }
if (index == 5) {
     return 777;
    }
if (index == 6) {
     return 728;
    }
if (index == 7) {
     return 744;
    }
if (index == 8) {
     return 753;
    }
if (index == 9) {
     return 780;
    }
if (index == 10) {
     return 745;
    }
if (index == 11) {
     return 1220;
    }
if (index == 12) {
     return 721;
    }
if (index == 13) {
     return 764;
    }
if (index == 14) {
     return 734;
    }
if (index == 15) {
     return 747;
    }
if (index == 16) {
     return 736;
    }
if (index == 17) {
     return 767;
    }
if (index == 18) {
     return 757;
    }
if (index == 19) {
     return 760;
    }
if (index == 20) {
     return 744;
    }
if (index == 21) {
     return 752;
    }
if (index == 22) {
     return 747;
    }
if (index == 23) {
     return 763;
    }
if (index == 24) {
     return 742;
    }
if (index == 25) {
     return 773;
    }
if (index == 26) {
     return 748;
    }
if (index == 27) {
     return 740;
    }
if (index == 28) {
     return 751;
    }
if (index == 29) {
     return 758;
    }
if (index == 30) {
     return 746;
    }
if (index == 31) {
     return 759;
    }
if (index == 32) {
     return 1471;
    }
if (index == 33) {
     return 773;
    }
if (index == 34) {
     return 767;
    }
if (index == 35) {
     return 746;
    }
if (index == 36) {
     return 731;
    }
if (index == 37) {
     return 721;
    }
if (index == 38) {
     return 732;
    }
if (index == 39) {
     return 764;
    }
if (index == 40) {
     return 762;
    }
if (index == 41) {
     return 754;
    }
if (index == 42) {
     return 780;
    }
if (index == 43) {
     return 765;
    }
if (index == 44) {
     return 756;
    }
if (index == 45) {
     return 778;
    }
if (index == 46) {
     return 765;
    }
if (index == 47) {
     return 753;
    }
if (index == 48) {
     return 756;
    }
if (index == 49) {
     return 792;
    }
if (index == 50) {
     return 746;
    }
if (index == 51) {
     return 758;
    }
if (index == 52) {
     return 764;
    }
if (index == 53) {
     return 763;
    }
if (index == 54) {
     return 760;
    }
if (index == 55) {
     return 773;
    }
if (index == 56) {
     return 769;
    }
if (index == 57) {
     return 794;
    }
if (index == 58) {
     return 773;
    }
if (index == 59) {
     return 775;
    }
if (index == 60) {
     return 772;
    }
if (index == 61) {
     return 805;
    }
if (index == 62) {
     return 790;
    }
if (index == 63) {
     return 771;
    }
if (index == 64) {
     return 774;
    }
if (index == 65) {
     return 774;
    }
if (index == 66) {
     return 760;
    }
if (index == 67) {
     return 767;
    }
if (index == 68) {
     return 763;
    }
if (index == 69) {
     return 765;
    }
if (index == 70) {
     return 755;
    }
if (index == 71) {
     return 776;
    }
if (index == 72) {
     return 753;
    }
if (index == 73) {
     return 773;
    }
if (index == 74) {
     return 750;
    }
if (index == 75) {
     return 766;
    }
if (index == 76) {
     return 758;
    }
if (index == 77) {
     return 784;
    }
if (index == 78) {
     return 758;
    }
if (index == 79) {
     return 782;
    }
if (index == 80) {
     return 782;
    }
if (index == 81) {
     return 788;
    }
if (index == 82) {
     return 762;
    }
if (index == 83) {
     return 787;
    }
if (index == 84) {
     return 772;
    }
if (index == 85) {
     return 788;
    }
if (index == 86) {
     return 756;
    }
if (index == 87) {
     return 790;
    }
if (index == 88) {
     return 767;
    }
if (index == 89) {
     return 765;
    }
if (index == 90) {
     return 785;
    }
if (index == 91) {
     return 788;
    }
if (index == 92) {
     return 782;
    }
if (index == 93) {
     return 796;
    }
if (index == 94) {
     return 766;
    }
if (index == 95) {
     return 795;
    }
if (index == 96) {
     return 778;
    }
if (index == 97) {
     return 782;
    }
if (index == 98) {
     return 780;
    }
if (index == 99) {
     return 771;
    }
if (index == 100) {
     return 785;
    }
if (index == 101) {
     return 772;
    }
if (index == 102) {
     return 776;
    }
if (index == 103) {
     return 790;
    }
if (index == 104) {
     return 778;
    }
if (index == 105) {
     return 785;
    }
if (index == 106) {
     return 763;
    }
if (index == 107) {
     return 782;
    }
if (index == 108) {
     return 765;
    }
if (index == 109) {
     return 782;
    }
if (index == 110) {
     return 793;
    }
if (index == 111) {
     return 790;
    }
if (index == 112) {
     return 748;
    }
if (index == 113) {
     return 782;
    }
if (index == 114) {
     return 752;
    }
if (index == 115) {
     return 782;
    }
if (index == 116) {
     return 761;
    }
if (index == 117) {
     return 806;
    }
if (index == 118) {
     return 763;
    }
if (index == 119) {
     return 788;
    }
if (index == 120) {
     return 738;
    }
if (index == 121) {
     return 765;
    }
if (index == 122) {
     return 756;
    }
if (index == 123) {
     return 763;
    }
if (index == 124) {
     return 746;
    }
if (index == 125) {
     return 782;
    }
if (index == 126) {
     return 738;
    }
if (index == 127) {
     return 754;
    }
if (index == 128) {
     return 730;
    }
if (index == 129) {
     return 761;
    }
if (index == 130) {
     return 772;
    }
if (index == 131) {
     return 782;
    }
if (index == 132) {
     return 774;
    }
if (index == 133) {
     return 791;
    }
if (index == 134) {
     return 780;
    }
if (index == 135) {
     return 761;
    }
if (index == 136) {
     return 768;
    }
if (index == 137) {
     return 761;
    }
if (index == 138) {
     return 755;
    }
if (index == 139) {
     return 748;
    }
if (index == 140) {
     return 767;
    }
if (index == 141) {
     return 746;
    }
if (index == 142) {
     return 757;
    }
if (index == 143) {
     return 750;
    }
if (index == 144) {
     return 776;
    }
if (index == 145) {
     return 753;
    }
if (index == 146) {
     return 769;
    }
if (index == 147) {
     return 746;
    }
if (index == 148) {
     return 766;
    }
if (index == 149) {
     return 769;
    }
if (index == 150) {
     return 766;
    }
if (index == 151) {
     return 768;
    }
if (index == 152) {
     return 764;
    }
if (index == 153) {
     return 777;
    }
if (index == 154) {
     return 788;
    }
if (index == 155) {
     return 759;
    }
if (index == 156) {
     return 765;
    }
if (index == 157) {
     return 744;
    }
if (index == 158) {
     return 774;
    }
if (index == 159) {
     return 746;
    }
if (index == 160) {
     return 764;
    }
if (index == 161) {
     return 767;
    }
if (index == 162) {
     return 763;
    }
if (index == 163) {
     return 777;
    }
if (index == 164) {
     return 765;
    }
if (index == 165) {
     return 767;
    }
if (index == 166) {
     return 770;
    }
if (index == 167) {
     return 783;
    }
if (index == 168) {
     return 760;
    }
if (index == 169) {
     return 785;
    }
if (index == 170) {
     return 791;
    }
if (index == 171) {
     return 784;
    }
if (index == 172) {
     return 778;
    }
if (index == 173) {
     return 810;
    }
if (index == 174) {
     return 1205;
    }
if (index == 175) {
     return 1194;
    }
if (index == 176) {
     return 1197;
    }
if (index == 177) {
     return 1179;
    }
if (index == 178) {
     return 1186;
    }
if (index == 179) {
     return 1181;
    }
if (index == 180) {
     return 765;
    }
if (index == 181) {
     return 778;
    }
if (index == 182) {
     return 783;
    }
if (index == 183) {
     return 781;
    }
if (index == 184) {
     return 749;
    }
if (index == 185) {
     return 781;
    }
if (index == 186) {
     return 747;
    }
if (index == 187) {
     return 770;
    }
if (index == 188) {
     return 764;
    }
if (index == 189) {
     return 776;
    }
if (index == 190) {
     return 765;
    }
if (index == 191) {
     return 771;
    }
if (index == 192) {
     return 776;
    }
if (index == 193) {
     return 1190;
    }
if (index == 194) {
     return 1198;
    }
if (index == 195) {
     return 1185;
    }
if (index == 196) {
     return 1216;
    }
if (index == 197) {
     return 774;
    }
if (index == 198) {
     return 757;
    }
if (index == 199) {
     return 768;
    }
if (index == 200) {
     return 1886;
    }
if (index == 201) {
     return 849;
    }
if (index > 201) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1257;
    }
if (index == 1) {
     return 1203;
    }
if (index == 2) {
     return 1201;
    }
if (index == 3) {
     return 1151;
    }
if (index == 4) {
     return 1173;
    }
if (index == 5) {
     return 1224;
    }
if (index == 6) {
     return 1228;
    }
if (index == 7) {
     return 1208;
    }
if (index == 8) {
     return 1212;
    }
if (index == 9) {
     return 1210;
    }
if (index == 10) {
     return 1218;
    }
if (index == 11) {
     return 763;
    }
if (index == 12) {
     return 1224;
    }
if (index == 13) {
     return 1221;
    }
if (index == 14) {
     return 1227;
    }
if (index == 15) {
     return 1229;
    }
if (index == 16) {
     return 1227;
    }
if (index == 17) {
     return 1223;
    }
if (index == 18) {
     return 1227;
    }
if (index == 19) {
     return 1231;
    }
if (index == 20) {
     return 1231;
    }
if (index == 21) {
     return 1230;
    }
if (index == 22) {
     return 1227;
    }
if (index == 23) {
     return 1228;
    }
if (index == 24) {
     return 1233;
    }
if (index == 25) {
     return 1239;
    }
if (index == 26) {
     return 1236;
    }
if (index == 27) {
     return 1245;
    }
if (index == 28) {
     return 1230;
    }
if (index == 29) {
     return 1225;
    }
if (index == 30) {
     return 1232;
    }
if (index == 31) {
     return 1230;
    }
if (index == 32) {
     return 1026;
    }
if (index == 33) {
     return 1199;
    }
if (index == 34) {
     return 1192;
    }
if (index == 35) {
     return 1200;
    }
if (index == 36) {
     return 1192;
    }
if (index == 37) {
     return 1198;
    }
if (index == 38) {
     return 1190;
    }
if (index == 39) {
     return 1177;
    }
if (index == 40) {
     return 1186;
    }
if (index == 41) {
     return 1181;
    }
if (index == 42) {
     return 1211;
    }
if (index == 43) {
     return 1186;
    }
if (index == 44) {
     return 1184;
    }
if (index == 45) {
     return 1198;
    }
if (index == 46) {
     return 1199;
    }
if (index == 47) {
     return 1196;
    }
if (index == 48) {
     return 1199;
    }
if (index == 49) {
     return 1196;
    }
if (index == 50) {
     return 1198;
    }
if (index == 51) {
     return 1190;
    }
if (index == 52) {
     return 1213;
    }
if (index == 53) {
     return 1189;
    }
if (index == 54) {
     return 1192;
    }
if (index == 55) {
     return 1179;
    }
if (index == 56) {
     return 1188;
    }
if (index == 57) {
     return 1181;
    }
if (index == 58) {
     return 1188;
    }
if (index == 59) {
     return 1190;
    }
if (index == 60) {
     return 1201;
    }
if (index == 61) {
     return 1198;
    }
if (index == 62) {
     return 1194;
    }
if (index == 63) {
     return 1204;
    }
if (index == 64) {
     return 1213;
    }
if (index == 65) {
     return 1201;
    }
if (index == 66) {
     return 1198;
    }
if (index == 67) {
     return 1189;
    }
if (index == 68) {
     return 1198;
    }
if (index == 69) {
     return 1185;
    }
if (index == 70) {
     return 1199;
    }
if (index == 71) {
     return 1185;
    }
if (index == 72) {
     return 1190;
    }
if (index == 73) {
     return 1183;
    }
if (index == 74) {
     return 1192;
    }
if (index == 75) {
     return 1173;
    }
if (index == 76) {
     return 1186;
    }
if (index == 77) {
     return 1186;
    }
if (index == 78) {
     return 1190;
    }
if (index == 79) {
     return 1190;
    }
if (index == 80) {
     return 1205;
    }
if (index == 81) {
     return 1194;
    }
if (index == 82) {
     return 1209;
    }
if (index == 83) {
     return 1194;
    }
if (index == 84) {
     return 1200;
    }
if (index == 85) {
     return 1194;
    }
if (index == 86) {
     return 1184;
    }
if (index == 87) {
     return 1195;
    }
if (index == 88) {
     return 1190;
    }
if (index == 89) {
     return 1190;
    }
if (index == 90) {
     return 1198;
    }
if (index == 91) {
     return 1189;
    }
if (index == 92) {
     return 1209;
    }
if (index == 93) {
     return 1199;
    }
if (index == 94) {
     return 1208;
    }
if (index == 95) {
     return 1198;
    }
if (index == 96) {
     return 1202;
    }
if (index == 97) {
     return 1190;
    }
if (index == 98) {
     return 1199;
    }
if (index == 99) {
     return 1183;
    }
if (index == 100) {
     return 1206;
    }
if (index == 101) {
     return 1198;
    }
if (index == 102) {
     return 1205;
    }
if (index == 103) {
     return 1195;
    }
if (index == 104) {
     return 1201;
    }
if (index == 105) {
     return 1192;
    }
if (index == 106) {
     return 1199;
    }
if (index == 107) {
     return 1190;
    }
if (index == 108) {
     return 1199;
    }
if (index == 109) {
     return 1190;
    }
if (index == 110) {
     return 1209;
    }
if (index == 111) {
     return 1195;
    }
if (index == 112) {
     return 1199;
    }
if (index == 113) {
     return 1190;
    }
if (index == 114) {
     return 1199;
    }
if (index == 115) {
     return 1190;
    }
if (index == 116) {
     return 1212;
    }
if (index == 117) {
     return 1206;
    }
if (index == 118) {
     return 1207;
    }
if (index == 119) {
     return 1194;
    }
if (index == 120) {
     return 1198;
    }
if (index == 121) {
     return 1191;
    }
if (index == 122) {
     return 1199;
    }
if (index == 123) {
     return 1189;
    }
if (index == 124) {
     return 1199;
    }
if (index == 125) {
     return 1190;
    }
if (index == 126) {
     return 1204;
    }
if (index == 127) {
     return 1187;
    }
if (index == 128) {
     return 1204;
    }
if (index == 129) {
     return 1189;
    }
if (index == 130) {
     return 1205;
    }
if (index == 131) {
     return 1190;
    }
if (index == 132) {
     return 1198;
    }
if (index == 133) {
     return 1196;
    }
if (index == 134) {
     return 1205;
    }
if (index == 135) {
     return 1192;
    }
if (index == 136) {
     return 1199;
    }
if (index == 137) {
     return 1194;
    }
if (index == 138) {
     return 1196;
    }
if (index == 139) {
     return 1187;
    }
if (index == 140) {
     return 1190;
    }
if (index == 141) {
     return 1182;
    }
if (index == 142) {
     return 1195;
    }
if (index == 143) {
     return 1187;
    }
if (index == 144) {
     return 1196;
    }
if (index == 145) {
     return 1189;
    }
if (index == 146) {
     return 1199;
    }
if (index == 147) {
     return 1190;
    }
if (index == 148) {
     return 1199;
    }
if (index == 149) {
     return 1187;
    }
if (index == 150) {
     return 1208;
    }
if (index == 151) {
     return 1193;
    }
if (index == 152) {
     return 1211;
    }
if (index == 153) {
     return 1199;
    }
if (index == 154) {
     return 1206;
    }
if (index == 155) {
     return 1190;
    }
if (index == 156) {
     return 1199;
    }
if (index == 157) {
     return 1171;
    }
if (index == 158) {
     return 1192;
    }
if (index == 159) {
     return 1183;
    }
if (index == 160) {
     return 1190;
    }
if (index == 161) {
     return 1190;
    }
if (index == 162) {
     return 1199;
    }
if (index == 163) {
     return 1200;
    }
if (index == 164) {
     return 1202;
    }
if (index == 165) {
     return 1192;
    }
if (index == 166) {
     return 1207;
    }
if (index == 167) {
     return 1204;
    }
if (index == 168) {
     return 1204;
    }
if (index == 169) {
     return 1198;
    }
if (index == 170) {
     return 1213;
    }
if (index == 171) {
     return 1208;
    }
if (index == 172) {
     return 1188;
    }
if (index == 173) {
     return 1197;
    }
if (index == 174) {
     return 820;
    }
if (index == 175) {
     return 811;
    }
if (index == 176) {
     return 809;
    }
if (index == 177) {
     return 810;
    }
if (index == 178) {
     return 811;
    }
if (index == 179) {
     return 790;
    }
if (index == 180) {
     return 1186;
    }
if (index == 181) {
     return 1186;
    }
if (index == 182) {
     return 1195;
    }
if (index == 183) {
     return 1195;
    }
if (index == 184) {
     return 1184;
    }
if (index == 185) {
     return 1189;
    }
if (index == 186) {
     return 1182;
    }
if (index == 187) {
     return 1182;
    }
if (index == 188) {
     return 1185;
    }
if (index == 189) {
     return 1187;
    }
if (index == 190) {
     return 1176;
    }
if (index == 191) {
     return 1183;
    }
if (index == 192) {
     return 1199;
    }
if (index == 193) {
     return 787;
    }
if (index == 194) {
     return 787;
    }
if (index == 195) {
     return 725;
    }
if (index == 196) {
     return 756;
    }
if (index == 197) {
     return 1200;
    }
if (index == 198) {
     return 1201;
    }
if (index == 199) {
     return 1190;
    }
if (index == 200) {
     return 1300;
    }
if (index == 201) {
     return 1219;
    }
if (index > 201) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:270_' + imgStr + '/digitalImage';
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
br.numLeafs = 204;

// Book title and the URL used for the book title link
br.bookTitle= "Handbook of British North Borneo";
br.bookAuthor= "British North Borneo Chartered Company";
br.bookPub= "London: W. Clowes, 1890";
br.bookKeyword= "Sabah";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:270';

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
