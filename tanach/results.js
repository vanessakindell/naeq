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

    var checkBox = document.getElementById("showgenesis");
    if (checkBox.checked == true){
	    /* Genesis */
	      textset = genesis.split(" ");
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
	        genesiscount.innerHTML = matchescount;
	        genesismatch.innerHTML = outputmatch;

	    } else {
	      genesiscount.innerHTML = 0;
		    genesismatch.innerHTML = "N/A";
	    }
    }

    var checkBox = document.getElementById("showexodus");
    if (checkBox.checked == true){
	    /* Exodus */
	      textset = exodus.split(" ");
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
	        exoduscount.innerHTML = matchescount;
	        exodusmatch.innerHTML = outputmatch;

	    } else {
	      exoduscount.innerHTML = 0;
		    exodusmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showleviticus");
    if (checkBox.checked == true){
	    /* Leviticus */
	      textset = leviticus.split(" ");
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
	        leviticuscount.innerHTML = matchescount;
	        leviticusmatch.innerHTML = outputmatch;

	    } else {
	      leviticuscount.innerHTML = 0;
		    leviticusmatch.innerHTML = "N/A";
	    }
    }

    var checkBox = document.getElementById("shownumbers");
    if (checkBox.checked == true){
	    /* Numbers */
	      textset = numbers.split(" ");
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
	        numberscount.innerHTML = matchescount;
	        numbersmatch.innerHTML = outputmatch;

	    } else {
	      numberscount.innerHTML = 0;
		    numbersmatch.innerHTML = "N/A";
	    }
    }

    var checkBox = document.getElementById("showduteronomy");
    if (checkBox.checked == true){
	    /* Duteronomy */
	    textset = duteronomy.split(" ");
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
	        duteronomycount.innerHTML = matchescount;
	        duteronomymatch.innerHTML = outputmatch;

	    } else {
          duteronomycount.innerHTML = 0;
	        duteronomymatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjoshua");
    if (checkBox.checked == true){
	    /* Joshua */
	    textset = joshua.split(" ");
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
	        joshuacount.innerHTML = matchescount;
	        joshuamatch.innerHTML = outputmatch;

	    } else {
          joshuacount.innerHTML = 0;
	        joshuamatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjudges");
    if (checkBox.checked == true){
	    /* Judges */
	    textset = judges.split(" ");
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
	        judgescount.innerHTML = matchescount;
	        judgesmatch.innerHTML = outputmatch;

	    } else {
          judgescount.innerHTML = 0;
	        judgesmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showsamuel1");
    if (checkBox.checked == true){
	    /* 1 Samuel */
	    textset = samuel1.split(" ");
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
	        samuel1count.innerHTML = matchescount;
	        samuel1match.innerHTML = outputmatch;

	    } else {
          samuel1count.innerHTML = 0;
	        samuel1match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showsamuel2");
    if (checkBox.checked == true){
	    /* 2 Samuel */
	    textset = samuel2.split(" ");
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
	        samuel2count.innerHTML = matchescount;
	        samuel2match.innerHTML = outputmatch;

	    } else {
          samuel2count.innerHTML = 0;
	        samuel2match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showkings1");
    if (checkBox.checked == true){
	    /* 1 Kings */
	    textset = kings1.split(" ");
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
	        kings1count.innerHTML = matchescount;
	        kings1match.innerHTML = outputmatch;

	    } else {
          kings1count.innerHTML = 0;
	        kings1match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showkings2");
    if (checkBox.checked == true){
	    /* 2 Kings */
	    textset = kings1.split(" ");
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
	        kings2count.innerHTML = matchescount;
	        kings2match.innerHTML = outputmatch;

	    } else {
          kings2count.innerHTML = 0;
	        kings2match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showisaiah");
    if (checkBox.checked == true){
	    /* Isaiah */
	    textset = isaiah.split(" ");
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
	        isaiahcount.innerHTML = matchescount;
	        isaiahmatch.innerHTML = outputmatch;

	    } else {
          isaiahcount.innerHTML = 0;
	        isaiahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjeremiah");
    if (checkBox.checked == true){
	    /* Jeremiah */
	    textset = jeremiah.split(" ");
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
	        jeremiahcount.innerHTML = matchescount;
	        jeremiahmatch.innerHTML = outputmatch;

	    } else {
          jeremiahcount.innerHTML = 0;
	        jeremiahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showezekiel");
    if (checkBox.checked == true){
	    /* Ezekiel */
	    textset = ezekiel.split(" ");
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
	        ezekielcount.innerHTML = matchescount;
	        ezekielmatch.innerHTML = outputmatch;

	    } else {
          ezekielcount.innerHTML = 0;
	        ezekielmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showhosea");
    if (checkBox.checked == true){
	    /* Hosea */
	    textset = hosea.split(" ");
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
	        hoseacount.innerHTML = matchescount;
	        hoseamatch.innerHTML = outputmatch;

	    } else {
          hoseacount.innerHTML = 0;
	        hoseamatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjoel");
    if (checkBox.checked == true){
	    /* Joel */
	    textset = joel.split(" ");
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
	        joelcount.innerHTML = matchescount;
	        joelmatch.innerHTML = outputmatch;

	    } else {
          joelcount.innerHTML = 0;
	        joelmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showamos");
    if (checkBox.checked == true){
	    /* Amos */
	    textset = amos.split(" ");
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
	        amoscount.innerHTML = matchescount;
	        amosmatch.innerHTML = outputmatch;

	    } else {
          amoscount.innerHTML = 0;
	        amosmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showobadiah");
    if (checkBox.checked == true){
	    /* Obadiah */
	    textset = obadiah.split(" ");
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
	        obadiahcount.innerHTML = matchescount;
	        obadiahmatch.innerHTML = outputmatch;

	    } else {
          obadiahcount.innerHTML = 0;
	        obadiahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjonah");
    if (checkBox.checked == true){
	    /* Jonah */
	    textset = jonah.split(" ");
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
	        jonahcount.innerHTML = matchescount;
	        jonahmatch.innerHTML = outputmatch;

	    } else {
          jonahcount.innerHTML = 0;
	        jonahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showmicah");
    if (checkBox.checked == true){
	    /* Micah */
	    textset = micah.split(" ");
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
	        micahcount.innerHTML = matchescount;
	        micahmatch.innerHTML = outputmatch;

	    } else {
          micahcount.innerHTML = 0;
	        micahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("shownahum");
    if (checkBox.checked == true){
	    /* Nahum */
	    textset = nahum.split(" ");
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
	        nahumcount.innerHTML = matchescount;
	        nahummatch.innerHTML = outputmatch;

	    } else {
          nahumcount.innerHTML = 0;
	        nahummatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showhabakkuk");
    if (checkBox.checked == true){
	    /* Habakkuk */
	    textset = habakkuk.split(" ");
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
	        habakkukcount.innerHTML = matchescount;
	        habakkukmatch.innerHTML = outputmatch;

	    } else {
          habakkukcount.innerHTML = 0;
	        habakkukmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showzephaniah");
    if (checkBox.checked == true){
	    /* Zephaniah */
	    textset = zephaniah.split(" ");
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
	        zephaniahcount.innerHTML = matchescount;
	        zephaniahmatch.innerHTML = outputmatch;

	    } else {
          zephaniahcount.innerHTML = 0;
	        zephaniahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showhaggai");
    if (checkBox.checked == true){
	    /* Haggai */
	    textset = haggai.split(" ");
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
	        haggaicount.innerHTML = matchescount;
	        haggaimatch.innerHTML = outputmatch;

	    } else {
          haggaicount.innerHTML = 0;
	        haggaimatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showzechariah");
    if (checkBox.checked == true){
	    /* Zechariah */
	    textset = zechariah.split(" ");
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
	        zechariahcount.innerHTML = matchescount;
	        zechariahmatch.innerHTML = outputmatch;

	    } else {
          zechariahcount.innerHTML = 0;
	        zechariahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showmalachi");
    if (checkBox.checked == true){
	    /* Malachi */
	    textset = malachi.split(" ");
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
	        malachicount.innerHTML = matchescount;
	        malachimatch.innerHTML = outputmatch;

	    } else {
          malachicount.innerHTML = 0;
	        malachimatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showpsalms");
    if (checkBox.checked == true){
	    /* Psalms */
	    textset = psalms.split(" ");
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
	        psalmscount.innerHTML = matchescount;
	        psalmsmatch.innerHTML = outputmatch;

	    } else {
          psalmscount.innerHTML = 0;
	        psalmsmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showproverbs");
    if (checkBox.checked == true){
	    /* Proverbs */
	    textset = proverbs.split(" ");
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
	        proverbscount.innerHTML = matchescount;
	        proverbsmatch.innerHTML = outputmatch;

	    } else {
          proverbscount.innerHTML = 0;
	        proverbsmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjob");
    if (checkBox.checked == true){
	    /* Job */
	    textset = proverbs.split(" ");
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
	        jobcount.innerHTML = matchescount;
	        jobmatch.innerHTML = outputmatch;

	    } else {
          jobcount.innerHTML = 0;
	        jobmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showsongofsongs");
    if (checkBox.checked == true){
	    /* Song of Songs */
	    textset = songofsongs.split(" ");
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
	        songofsongscount.innerHTML = matchescount;
	        songofsongsmatch.innerHTML = outputmatch;

	    } else {
          songofsongscount.innerHTML = 0;
	        songofsongsmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showruth");
    if (checkBox.checked == true){
	    /* Ruth */
	    textset = ruth.split(" ");
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
	        ruthcount.innerHTML = matchescount;
	        ruthmatch.innerHTML = outputmatch;

	    } else {
          ruthcount.innerHTML = 0;
	        ruthmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showlamentations");
    if (checkBox.checked == true){
	    /* Lamentations */
	    textset = lamentations.split(" ");
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
	        lamentationscount.innerHTML = matchescount;
	        lamentationsmatch.innerHTML = outputmatch;

	    } else {
          lamentationscount.innerHTML = 0;
	        lamentationsmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showecclesiastes");
    if (checkBox.checked == true){
	    /* Ecclesiastes */
	    textset = ecclesiastes.split(" ");
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
	        ecclesiastescount.innerHTML = matchescount;
	        ecclesiastesmatch.innerHTML = outputmatch;

	    } else {
          ecclesiastescount.innerHTML = 0;
	        ecclesiastesmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showesther");
    if (checkBox.checked == true){
	    /* Esther */
	    textset = esther.split(" ");
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
	        esthercount.innerHTML = matchescount;
	        esthermatch.innerHTML = outputmatch;

	    } else {
          esthercount.innerHTML = 0;
	        esthermatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showdaniel");
    if (checkBox.checked == true){
	    /* Daniel */
	    textset = daniel.split(" ");
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
	        danielcount.innerHTML = matchescount;
	        danielmatch.innerHTML = outputmatch;

	    } else {
          danielcount.innerHTML = 0;
	        danielmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showezra");
    if (checkBox.checked == true){
	    /* Ezraezra */
	    textset = ezra.split(" ");
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
	        ezracount.innerHTML = matchescount;
	        ezramatch.innerHTML = outputmatch;

	    } else {
          ezracount.innerHTML = 0;
	        ezramatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("shownehemiah");
    if (checkBox.checked == true){
	    /* Nehemiah */
	    textset = nehemiah.split(" ");
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
	        nehemiahcount.innerHTML = matchescount;
	        nehemiahmatch.innerHTML = outputmatch;

	    } else {
          nehemiahcount.innerHTML = 0;
	        nehemiahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showchronicles1");
    if (checkBox.checked == true){
	    /* 1 Chronicles */
	    textset = chronicles1.split(" ");
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
	        chronicles1count.innerHTML = matchescount;
	        chronicles1match.innerHTML = outputmatch;

	    } else {
          chronicles1count.innerHTML = 0;
	        chronicles1match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showchronicles2");
    if (checkBox.checked == true){
	    /* 2 Chronicles */
	    textset = chronicles1.split(" ");
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
	        chronicles2count.innerHTML = matchescount;
	        chronicles2match.innerHTML = outputmatch;

	    } else {
          chronicles2count.innerHTML = 0;
	        chronicles2match.innerHTML = "N/A";
	    }
    }
  }, 666);
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
