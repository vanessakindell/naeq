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

    var checkBox = document.getElementById("showmatthew");
    if (checkBox.checked == true){
    	    /* Matthew */
	      textset = matthew.split(" ");
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
                        }
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
	        matthewcount.innerHTML = matchescount;
	        matthewmatch.innerHTML = outputmatch;

	    } else {
	      matthewcount.innerHTML = 0;
		    matthewmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showmark");
    if (checkBox.checked == true){
	    /* Mark */
	      textset = mark.split(" ");
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
                        }
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
	        markcount.innerHTML = matchescount;
	        markmatch.innerHTML = outputmatch;

	    } else {
	      markcount.innerHTML = 0;
		    markmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showluke");
    if (checkBox.checked == true){
    	    /* Luke */
	      textset = luke.split(" ");
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
                        }
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
	        lukecount.innerHTML = matchescount;
	        lukematch.innerHTML = outputmatch;

	    } else {
	      lukecount.innerHTML = 0;
		    lukematch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjohn");
    if (checkBox.checked == true){
    	    /* John */
	      textset = john.split(" ");
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
                        }
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
	        johncount.innerHTML = matchescount;
	        johnmatch.innerHTML = outputmatch;

	    } else {
	      johncount.innerHTML = 0;
		    johnmatch.innerHTML = "N/A";
	    }
    }
  }, 666);
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
