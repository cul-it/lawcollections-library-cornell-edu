//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 698;
    }
if (index == 1) {
     return 698;
    }
if (index == 2) {
     return 698;
    }
if (index == 3) {
     return 698;
    }
if (index == 4) {
     return 698;
    }
if (index == 5) {
     return 698;
    }
if (index == 6) {
     return 732;
    }
if (index == 7) {
     return 730;
    }
if (index == 8) {
     return 726;
    }
if (index == 9) {
     return 698;
    }
if (index == 10) {
     return 740;
    }
if (index == 11) {
     return 723;
    }
if (index == 12) {
     return 734;
    }
if (index == 13) {
     return 698;
    }
if (index == 14) {
     return 698;
    }
if (index == 15) {
     return 698;
    }
if (index == 16) {
     return 698;
    }
if (index == 17) {
     return 698;
    }
if (index == 18) {
     return 698;
    }
if (index == 19) {
     return 698;
    }
if (index == 20) {
     return 698;
    }
if (index == 21) {
     return 698;
    }
if (index == 22) {
     return 727;
    }
if (index == 23) {
     return 738;
    }
if (index == 24) {
     return 737;
    }
if (index == 25) {
     return 698;
    }
if (index == 26) {
     return 698;
    }
if (index == 27) {
     return 698;
    }
if (index == 28) {
     return 718;
    }
if (index == 29) {
     return 698;
    }
if (index == 30) {
     return 750;
    }
if (index == 31) {
     return 728;
    }
if (index == 32) {
     return 698;
    }
if (index == 33) {
     return 714;
    }
if (index == 34) {
     return 729;
    }
if (index == 35) {
     return 698;
    }
if (index == 36) {
     return 734;
    }
if (index == 37) {
     return 698;
    }
if (index == 38) {
     return 698;
    }
if (index == 39) {
     return 698;
    }
if (index == 40) {
     return 698;
    }
if (index == 41) {
     return 698;
    }
if (index == 42) {
     return 698;
    }
if (index == 43) {
     return 698;
    }
if (index == 44) {
     return 698;
    }
if (index == 45) {
     return 731;
    }
if (index == 46) {
     return 698;
    }
if (index == 47) {
     return 698;
    }
if (index == 48) {
     return 698;
    }
if (index == 49) {
     return 729;
    }
if (index == 50) {
     return 698;
    }
if (index == 51) {
     return 698;
    }
if (index == 52) {
     return 698;
    }
if (index == 53) {
     return 698;
    }
if (index == 54) {
     return 743;
    }
if (index == 55) {
     return 698;
    }
if (index == 56) {
     return 698;
    }
if (index == 57) {
     return 724;
    }
if (index == 58) {
     return 716;
    }
if (index == 59) {
     return 698;
    }
if (index == 60) {
     return 698;
    }
if (index == 61) {
     return 698;
    }
if (index == 62) {
     return 698;
    }
if (index == 63) {
     return 698;
    }
if (index > 63) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1050;
    }
if (index == 1) {
     return 1050;
    }
if (index == 2) {
     return 1050;
    }
if (index == 3) {
     return 1050;
    }
if (index == 4) {
     return 1050;
    }
if (index == 5) {
     return 1050;
    }
if (index == 6) {
     return 1073;
    }
if (index == 7) {
     return 1071;
    }
if (index == 8) {
     return 1069;
    }
if (index == 9) {
     return 1050;
    }
if (index == 10) {
     return 1078;
    }
if (index == 11) {
     return 1067;
    }
if (index == 12) {
     return 1074;
    }
if (index == 13) {
     return 1050;
    }
if (index == 14) {
     return 1050;
    }
if (index == 15) {
     return 1050;
    }
if (index == 16) {
     return 1050;
    }
if (index == 17) {
     return 1050;
    }
if (index == 18) {
     return 1050;
    }
if (index == 19) {
     return 1050;
    }
if (index == 20) {
     return 1050;
    }
if (index == 21) {
     return 1050;
    }
if (index == 22) {
     return 1070;
    }
if (index == 23) {
     return 1076;
    }
if (index == 24) {
     return 1076;
    }
if (index == 25) {
     return 1050;
    }
if (index == 26) {
     return 1050;
    }
if (index == 27) {
     return 1050;
    }
if (index == 28) {
     return 1064;
    }
if (index == 29) {
     return 1050;
    }
if (index == 30) {
     return 1084;
    }
if (index == 31) {
     return 1070;
    }
if (index == 32) {
     return 1050;
    }
if (index == 33) {
     return 1061;
    }
if (index == 34) {
     return 1071;
    }
if (index == 35) {
     return 1050;
    }
if (index == 36) {
     return 1074;
    }
if (index == 37) {
     return 1050;
    }
if (index == 38) {
     return 1050;
    }
if (index == 39) {
     return 1050;
    }
if (index == 40) {
     return 1050;
    }
if (index == 41) {
     return 1050;
    }
if (index == 42) {
     return 1050;
    }
if (index == 43) {
     return 1050;
    }
if (index == 44) {
     return 1050;
    }
if (index == 45) {
     return 1072;
    }
if (index == 46) {
     return 1050;
    }
if (index == 47) {
     return 1050;
    }
if (index == 48) {
     return 1050;
    }
if (index == 49) {
     return 1070;
    }
if (index == 50) {
     return 1050;
    }
if (index == 51) {
     return 1050;
    }
if (index == 52) {
     return 1050;
    }
if (index == 53) {
     return 1050;
    }
if (index == 54) {
     return 1080;
    }
if (index == 55) {
     return 1050;
    }
if (index == 56) {
     return 1050;
    }
if (index == 57) {
     return 1067;
    }
if (index == 58) {
     return 1062;
    }
if (index == 59) {
     return 1050;
    }
if (index == 60) {
     return 1050;
    }
if (index == 61) {
     return 1050;
    }
if (index == 62) {
     return 1050;
    }
if (index == 63) {
     return 1050;
    }
if (index > 63) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:01543_' + imgStr + '/digitalImage';
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
br.numLeafs = 64;

// Book title and the URL used for the book title link
br.bookTitle= "Staff Evidence Analysis  / Office of the U. S. Chief of Counsel for the Prosecution of Axis Criminality";
br.bookAuthor= "The names of the respective analysts are given as follows: Schonfeld; Siebenschein; Schafer; Hartman; Landmann; Buchsbaum";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-10-18";
br.bookKeyword= "None";
br.bookUrl  = '/nuremberg/catalog/nur:01543';

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
