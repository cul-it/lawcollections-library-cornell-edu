//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1087;
    }
if (index == 1) {
     return 1041;
    }
if (index == 2) {
     return 1052;
    }
if (index == 3) {
     return 1048;
    }
if (index == 4) {
     return 1644;
    }
if (index == 5) {
     return 1007;
    }
if (index == 6) {
     return 1024;
    }
if (index == 7) {
     return 1057;
    }
if (index == 8) {
     return 1622;
    }
if (index == 9) {
     return 1033;
    }
if (index == 10) {
     return 1020;
    }
if (index == 11) {
     return 1038;
    }
if (index == 12) {
     return 1579;
    }
if (index == 13) {
     return 1045;
    }
if (index == 14) {
     return 1019;
    }
if (index == 15) {
     return 1031;
    }
if (index == 16) {
     return 1092;
    }
if (index == 17) {
     return 1195;
    }
if (index == 18) {
     return 1089;
    }
if (index == 19) {
     return 1186;
    }
if (index == 20) {
     return 1640;
    }
if (index == 21) {
     return 1023;
    }
if (index == 22) {
     return 1088;
    }
if (index == 23) {
     return 1124;
    }
if (index == 24) {
     return 1629;
    }
if (index == 25) {
     return 1104;
    }
if (index == 26) {
     return 1075;
    }
if (index == 27) {
     return 1125;
    }
if (index == 28) {
     return 1607;
    }
if (index == 29) {
     return 1108;
    }
if (index == 30) {
     return 1061;
    }
if (index == 31) {
     return 1032;
    }
if (index == 32) {
     return 1111;
    }
if (index == 33) {
     return 1189;
    }
if (index == 34) {
     return 1069;
    }
if (index == 35) {
     return 1150;
    }
if (index == 36) {
     return 1600;
    }
if (index == 37) {
     return 1200;
    }
if (index == 38) {
     return 996;
    }
if (index == 39) {
     return 1046;
    }
if (index == 40) {
     return 1619;
    }
if (index == 41) {
     return 1057;
    }
if (index == 42) {
     return 1045;
    }
if (index == 43) {
     return 1054;
    }
if (index == 44) {
     return 1573;
    }
if (index == 45) {
     return 1051;
    }
if (index == 46) {
     return 996;
    }
if (index == 47) {
     return 1042;
    }
if (index == 48) {
     return 1072;
    }
if (index == 49) {
     return 1166;
    }
if (index == 50) {
     return 1106;
    }
if (index == 51) {
     return 1164;
    }
if (index == 52) {
     return 1185;
    }
if (index == 53) {
     return 1164;
    }
if (index == 54) {
     return 1547;
    }
if (index == 55) {
     return 1057;
    }
if (index == 56) {
     return 1156;
    }
if (index == 57) {
     return 1164;
    }
if (index == 58) {
     return 1071;
    }
if (index == 59) {
     return 1034;
    }
if (index == 60) {
     return 1603;
    }
if (index == 61) {
     return 1040;
    }
if (index == 62) {
     return 1066;
    }
if (index == 63) {
     return 1061;
    }
if (index == 64) {
     return 1050;
    }
if (index == 65) {
     return 1172;
    }
if (index == 66) {
     return 1060;
    }
if (index == 67) {
     return 1161;
    }
if (index == 68) {
     return 1623;
    }
if (index == 69) {
     return 1153;
    }
if (index == 70) {
     return 1038;
    }
if (index == 71) {
     return 1037;
    }
if (index == 72) {
     return 1580;
    }
if (index == 73) {
     return 1072;
    }
if (index == 74) {
     return 1045;
    }
if (index == 75) {
     return 1031;
    }
if (index == 76) {
     return 1613;
    }
if (index == 77) {
     return 1066;
    }
if (index == 78) {
     return 1077;
    }
if (index == 79) {
     return 1048;
    }
if (index > 79) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1653;
    }
if (index == 1) {
     return 1627;
    }
if (index == 2) {
     return 1645;
    }
if (index == 3) {
     return 1641;
    }
if (index == 4) {
     return 1109;
    }
if (index == 5) {
     return 1647;
    }
if (index == 6) {
     return 1637;
    }
if (index == 7) {
     return 1647;
    }
if (index == 8) {
     return 1101;
    }
if (index == 9) {
     return 1632;
    }
if (index == 10) {
     return 1658;
    }
if (index == 11) {
     return 1645;
    }
if (index == 12) {
     return 1084;
    }
if (index == 13) {
     return 1645;
    }
if (index == 14) {
     return 1659;
    }
if (index == 15) {
     return 1640;
    }
if (index == 16) {
     return 1645;
    }
if (index == 17) {
     return 1693;
    }
if (index == 18) {
     return 1641;
    }
if (index == 19) {
     return 1660;
    }
if (index == 20) {
     return 1148;
    }
if (index == 21) {
     return 1613;
    }
if (index == 22) {
     return 1649;
    }
if (index == 23) {
     return 1625;
    }
if (index == 24) {
     return 1130;
    }
if (index == 25) {
     return 1614;
    }
if (index == 26) {
     return 1621;
    }
if (index == 27) {
     return 1619;
    }
if (index == 28) {
     return 1120;
    }
if (index == 29) {
     return 1619;
    }
if (index == 30) {
     return 1628;
    }
if (index == 31) {
     return 1611;
    }
if (index == 32) {
     return 1646;
    }
if (index == 33) {
     return 1662;
    }
if (index == 34) {
     return 1621;
    }
if (index == 35) {
     return 1654;
    }
if (index == 36) {
     return 1158;
    }
if (index == 37) {
     return 1670;
    }
if (index == 38) {
     return 1614;
    }
if (index == 39) {
     return 1610;
    }
if (index == 40) {
     return 1153;
    }
if (index == 41) {
     return 1640;
    }
if (index == 42) {
     return 1639;
    }
if (index == 43) {
     return 1627;
    }
if (index == 44) {
     return 1143;
    }
if (index == 45) {
     return 1638;
    }
if (index == 46) {
     return 1625;
    }
if (index == 47) {
     return 1641;
    }
if (index == 48) {
     return 1644;
    }
if (index == 49) {
     return 1677;
    }
if (index == 50) {
     return 1644;
    }
if (index == 51) {
     return 1675;
    }
if (index == 52) {
     return 1736;
    }
if (index == 53) {
     return 1675;
    }
if (index == 54) {
     return 1127;
    }
if (index == 55) {
     return 1651;
    }
if (index == 56) {
     return 1654;
    }
if (index == 57) {
     return 1675;
    }
if (index == 58) {
     return 1633;
    }
if (index == 59) {
     return 1658;
    }
if (index == 60) {
     return 1132;
    }
if (index == 61) {
     return 1632;
    }
if (index == 62) {
     return 1635;
    }
if (index == 63) {
     return 1642;
    }
if (index == 64) {
     return 1629;
    }
if (index == 65) {
     return 1681;
    }
if (index == 66) {
     return 1620;
    }
if (index == 67) {
     return 1673;
    }
if (index == 68) {
     return 1132;
    }
if (index == 69) {
     return 1668;
    }
if (index == 70) {
     return 1640;
    }
if (index == 71) {
     return 1656;
    }
if (index == 72) {
     return 1144;
    }
if (index == 73) {
     return 1661;
    }
if (index == 74) {
     return 1629;
    }
if (index == 75) {
     return 1636;
    }
if (index == 76) {
     return 1147;
    }
if (index == 77) {
     return 1648;
    }
if (index == 78) {
     return 1639;
    }
if (index == 79) {
     return 1626;
    }
if (index > 79) {
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
    var url = '/fedora/get/seapage:A24_' + imgStr + '/digitalImage';
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
br.numLeafs = 80;

// Book title and the URL used for the book title link
br.bookTitle= "Chez les populations sauvages du sud de l'Annam";
br.bookAuthor= "Cupet, P.";
br.bookPub= "Ithaca, NY: Cornell University Library, 1893";
br.bookKeyword= "ethnology<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vietnam";
br.bookUrl  = '/catalog/sea:A24';

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