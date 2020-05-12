input.oninput = function() {
  setTimeout(function() {
	    a = 0;

	    if (input.value !== "")
		    window.history.pushState('','','?' + "v=" + input.value);
	    else
		    window.history.pushState('','', window.location.protocol + "//" + window.location.host + window.location.pathname);

	    Object.keys(cipher).forEach(function(key) { a += ((input.value).split(key).length - 1)*cipher[key]; });

	    if (/\d/.test(input.value))
		    a += ((input.value)).match(/\d+/g).map(Number).reduce(function(b, c) { return b + c; }, 0);

	    result.innerHTML = a;

	    /* Fortian Phrases */
	    textset = fortianphrases.split(" ");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+10>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+10;
                }
                for(offset=textpos;offset<offend;offset++) {
                    testweight = 0;
                    testword = textset[offset];
                    for(subpos=0;subpos<testword.length;subpos++) {
                        testchar = testword.substring(subpos,subpos+1);
                        if(typeof cipher[testchar] !== 'undefined') {
                            testweight = parseInt(testweight) + parseInt(cipher[testchar]);
                        } else if(testchar == parseInt(testchar)) {
                            testweight = parseInt(testweight) + parseInt(testchar);
                        } else {outputmatch += "<li>ERROR: "+testchar+" NOT FOUND</li>";}
                    }
                    if(parseInt(testword)==testword)
                    {
                      testweight = parseInt(testword);
                    }
                    teststrval = parseInt(teststrval) + parseInt(testweight);
                    if(teststr)
                    {
                      teststr = teststr + " " + testword;
                    }
                    else
                    {
                      teststr = testword;
                    }
                    if(teststrval==a) {
                        matchescount++;
                        outputmatch += "<li>"+teststr+"</li>";
                    }
                }
            }
        }
	    if (matchescount !== 0) {
	        forteanphrasescount.innerHTML = matchescount;
	        forteanphrasesmatch.innerHTML = outputmatch;

	    } else {
        forteanphrasescount.innerHTML = 0;
		    forteanphrasesmatch.innerHTML = "N/A";
	    }
  }, 666);
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
