input.oninput = function() {
  setTimeout(function() {
      match.innerHTML = "Calculating...";
  	    a = 0;

	    if (input.value !== "")
		    window.history.pushState('','','?' + "v=" + input.value);
	    else
		    window.history.pushState('','', window.location.protocol + "//" + window.location.host + window.location.pathname);

	    Object.keys(cipher).forEach(function(key) { a += ((input.value).split(key).length - 1)*cipher[key]; });

	    if (/\d/.test(input.value))
		    a += ((input.value)).match(/\d+/g).map(Number).reduce(function(b, c) { return b + c; }, 0);

	    result.innerHTML = a;

	    /* Dictionary */
	      textset = dictionary.split("\n");
        matchescount = 0;
        outputmatch = "";
        teststr = "";
        testword = "";
        testchar = "";
        teststrval = 0;
        testweight = 0;
        lastmatch = "";
        if(a!==0) {
            for(textpos=0;textpos<textset.length;textpos++) {
                teststr = "";
                teststrval = 0;
                testword = "";
                if(textpos+10>textset.length) {
                    offend = textset.length;
                } else {
                    offend = textpos+1;
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
                    if(parseInt(testweight)==a)
                    {
                      if(testword != lastmatch)
                      {
                        lastmatch = testword;
                        matchescount++;
                        outputmatch += "<li>"+testword+"</li>";
                      }
                    }
                }
            }
        }
	    if (matchescount !== 0)
	    {
	        count.innerHTML = matchescount;
	        match.innerHTML = outputmatch;

	    }
	    else
	    {
        count.innerHTML = 0;
        match.innerHTML = "N/A";
	    }
  }, 666);
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
