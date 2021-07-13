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

    var checkBox = document.getElementById("show1nephi");
    if (checkBox.checked == true){
    	    /* 1 Nephi */
	      textset = nephi1.split(" ");
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
	        nephi1count.innerHTML = matchescount;
	        nephi1match.innerHTML = outputmatch;

	    } else {
	      nephi1count.innerHTML = 0;
		    nephi1match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("show2nephi");
    if (checkBox.checked == true){
	    /* 2 Nephi */
	      textset = nephi2.split(" ");
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
	        nephi2count.innerHTML = matchescount;
	        nephi2match.innerHTML = outputmatch;

	    } else {
	      nephi2count.innerHTML = 0;
		    nephi2match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjacob");
    if (checkBox.checked == true){
	    /* Jacob */
	      textset = jacob.split(" ");
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
	        jacobcount.innerHTML = matchescount;
	        jacobmatch.innerHTML = outputmatch;

	    } else {
	      jacobcount.innerHTML = 0;
		    jacobmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showenos");
    if (checkBox.checked == true){
	    /* Enos */
	      textset = enos.split(" ");
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
	        enoscount.innerHTML = matchescount;
	        enosmatch.innerHTML = outputmatch;

	    } else {
	      enoscount.innerHTML = 0;
		    enosmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showjarom");
    if (checkBox.checked == true){
	    /* Jarom */
	      textset = jarom.split(" ");
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
	        jaromcount.innerHTML = matchescount;
	        jarommatch.innerHTML = outputmatch;

	    } else {
	      jaromcount.innerHTML = 0;
		    jarommatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showomni");
    if (checkBox.checked == true){
	    /* Omni */
	      textset = omni.split(" ");
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
	        omnicount.innerHTML = matchescount;
	        omnimatch.innerHTML = outputmatch;

	    } else {
	      omnicount.innerHTML = 0;
		    omnimatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showwordsmormon");
    if (checkBox.checked == true){
	    /* Words of Mormon */
	      textset = wordsmormon.split(" ");
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
	        wordsmormoncount.innerHTML = matchescount;
	        wordsmormonmatch.innerHTML = outputmatch;

	    } else {
	      wordsmormoncount.innerHTML = 0;
		    wordsmormonmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showmosiah");
    if (checkBox.checked == true){
	    /* Mosiah */
	      textset = mosiah.split(" ");
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
	        mosiahcount.innerHTML = matchescount;
	        mosiahmatch.innerHTML = outputmatch;

	    } else {
	      mosiahcount.innerHTML = 0;
		    mosiahmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showalma");
    if (checkBox.checked == true){
	    /* Alma */
	      textset = alma.split(" ");
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
	        almacount.innerHTML = matchescount;
	        almamatch.innerHTML = outputmatch;

	    } else {
	      almacount.innerHTML = 0;
		    almamatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showhelaman");
    if (checkBox.checked == true){
	    /* Helaman */
	      textset = helaman.split(" ");
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
	        helamancount.innerHTML = matchescount;
	        helamanmatch.innerHTML = outputmatch;

	    } else {
	      helamancount.innerHTML = 0;
		    helamanmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("show3nephi");
    if (checkBox.checked == true){
    	    /* 3 Nephi */
	      textset = nephi3.split(" ");
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
	        nephi3count.innerHTML = matchescount;
	        nephi3match.innerHTML = outputmatch;

	    } else {
	      nephi3count.innerHTML = 0;
		    nephi3match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("show4nephi");
    if (checkBox.checked == true){
    	    /* 4 Nephi */
	      textset = nephi4.split(" ");
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
	        nephi4count.innerHTML = matchescount;
	        nephi4match.innerHTML = outputmatch;

	    } else {
	      nephi4count.innerHTML = 0;
		    nephi4match.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showmormon");
    if (checkBox.checked == true){
    	    /* Mormon */
	      textset = mormon.split(" ");
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
	        mormoncount.innerHTML = matchescount;
	        mormonmatch.innerHTML = outputmatch;

	    } else {
	      mormoncount.innerHTML = 0;
		    mormonmatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showether");
    if (checkBox.checked == true){
    	    /* Ether */
	      textset = ether.split(" ");
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
	        ethercount.innerHTML = matchescount;
	        ethermatch.innerHTML = outputmatch;

	    } else {
	      ethercount.innerHTML = 0;
		    ethermatch.innerHTML = "N/A";
	    }
    }
    var checkBox = document.getElementById("showmoroni");
    if (checkBox.checked == true){
    	    /* Moroni */
	      textset = moroni.split(" ");
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
	        moronicount.innerHTML = matchescount;
	        moronimatch.innerHTML = outputmatch;

	    } else {
	      moronicount.innerHTML = 0;
		    moronimatch.innerHTML = "N/A";
	    }
    }
  }, 666);
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
