//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1140;
    }
if (index == 1) {
     return 1170;
    }
if (index == 2) {
     return 1144;
    }
if (index == 3) {
     return 1182;
    }
if (index == 4) {
     return 1133;
    }
if (index == 5) {
     return 1187;
    }
if (index == 6) {
     return 1147;
    }
if (index == 7) {
     return 1147;
    }
if (index == 8) {
     return 1698;
    }
if (index == 9) {
     return 1097;
    }
if (index == 10) {
     return 1698;
    }
if (index == 11) {
     return 1115;
    }
if (index == 12) {
     return 1122;
    }
if (index == 13) {
     return 1141;
    }
if (index == 14) {
     return 1698;
    }
if (index == 15) {
     return 1106;
    }
if (index == 16) {
     return 1101;
    }
if (index == 17) {
     return 1193;
    }
if (index == 18) {
     return 1138;
    }
if (index == 19) {
     return 1114;
    }
if (index == 20) {
     return 1125;
    }
if (index == 21) {
     return 1110;
    }
if (index == 22) {
     return 1184;
    }
if (index == 23) {
     return 1121;
    }
if (index == 24) {
     return 1698;
    }
if (index == 25) {
     return 1155;
    }
if (index == 26) {
     return 1145;
    }
if (index == 27) {
     return 1128;
    }
if (index == 28) {
     return 1696;
    }
if (index == 29) {
     return 1098;
    }
if (index == 30) {
     return 1128;
    }
if (index == 31) {
     return 1098;
    }
if (index > 31) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1678;
    }
if (index == 1) {
     return 1716;
    }
if (index == 2) {
     return 1698;
    }
if (index == 3) {
     return 1722;
    }
if (index == 4) {
     return 1698;
    }
if (index == 5) {
     return 1716;
    }
if (index == 6) {
     return 1698;
    }
if (index == 7) {
     return 1697;
    }
if (index == 8) {
     return 1139;
    }
if (index == 9) {
     return 1682;
    }
if (index == 10) {
     return 1139;
    }
if (index == 11) {
     return 1684;
    }
if (index == 12) {
     return 1698;
    }
if (index == 13) {
     return 1697;
    }
if (index == 14) {
     return 1133;
    }
if (index == 15) {
     return 1697;
    }
if (index == 16) {
     return 1663;
    }
if (index == 17) {
     return 1734;
    }
if (index == 18) {
     return 1672;
    }
if (index == 19) {
     return 1667;
    }
if (index == 20) {
     return 1698;
    }
if (index == 21) {
     return 1680;
    }
if (index == 22) {
     return 1738;
    }
if (index == 23) {
     return 1675;
    }
if (index == 24) {
     return 1155;
    }
if (index == 25) {
     return 1695;
    }
if (index == 26) {
     return 1679;
    }
if (index == 27) {
     return 1701;
    }
if (index == 28) {
     return 1153;
    }
if (index == 29) {
     return 1695;
    }
if (index == 30) {
     return 1698;
    }
if (index == 31) {
     return 1697;
    }
if (index > 31) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:A11_' + imgStr + '/digitalImage';
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
br.numLeafs = 32;

// Book title and the URL used for the book title link
br.bookTitle= "Huit jours d'ambassade a Hue (Royaume d'Annam)";
br.bookAuthor= "Brossard de Corbigny, Jules Michel";
br.bookPub= "Ithaca, NY: Cornell University Library, 1878";
br.bookKeyword= "Vietnam--Binh Tri Thien--Hue";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:A11';

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
