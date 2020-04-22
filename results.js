input.oninput = function() {
	a = 0;

	if (input.value !== "")
		window.history.pushState('','','?' + "v=" + input.value);
	else
		window.history.pushState('','', window.location.protocol + "//" + window.location.host + window.location.pathname);

	Object.keys(cipher).forEach(function(key) { a += ((input.value).split(key).length - 1)*cipher[key]; });

	if (/\d/.test(input.value))
		a += ((input.value)).match(/\d+/g).map(Number).reduce(function(b, c) { return b + c; }, 0);

	result.innerHTML = a;

	/* I */
	  textset = liberi.split(" ");
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
	    icount.innerHTML = matchescount;
	    imatch.innerHTML = outputmatch;

	} else {
	  icount.innerHTML = 0;
		imatch.innerHTML = "N/A";
	}

	/* VII */
	  textset = libervii.split(" ");
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
	    viicount.innerHTML = matchescount;
	    viimatch.innerHTML = outputmatch;

	} else {
	  viicount.innerHTML = 0;
		viimatch.innerHTML = "N/A";
	}

	/* X */
	  textset = liberx.split(" ");
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
	    xcount.innerHTML = matchescount;
	    xmatch.innerHTML = outputmatch;

	} else {
	  xcount.innerHTML = 0;
		xmatch.innerHTML = "N/A";
	}

	/* XXVII */
	  textset = liberxxvii.split(" ");
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
	    xxviicount.innerHTML = matchescount;
	    xxviimatch.innerHTML = outputmatch;

	} else {
	  xxviicount.innerHTML = 0;
		xxviimatch.innerHTML = "N/A";
	}

	/* XLIX */
	textset = liberxlix.split(" ");
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
	    xlixcount.innerHTML = matchescount;
	    xlixmatch.innerHTML = outputmatch;

	} else {
        xlixcount.innerHTML = 0;
	    xlixmatch.innerHTML = "N/A";
	}

	/* LXV */
	  textset = liberlxv.split(" ");
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
	    lxvcount.innerHTML = matchescount;
	    lxvmatch.innerHTML = outputmatch;

	} else {
	  lxvcount.innerHTML = 0;
		lxvmatch.innerHTML = "N/A";
	}

	/* LXVI */
	  textset = liberlxvi.split(" ");
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
	    lxvicount.innerHTML = matchescount;
	    lxvimatch.innerHTML = outputmatch;

	} else {
	  lxvicount.innerHTML = 0;
		lxvimatch.innerHTML = "N/A";
	}

	/* XC */
	  textset = liberxc.split(" ");
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
	    xccount.innerHTML = matchescount;
	    xcmatch.innerHTML = outputmatch;

	} else {
	  xccount.innerHTML = 0;
		xcmatch.innerHTML = "N/A";
	}

	/* CLVI */
	  textset = liberclvi.split(" ");
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
	    clvicount.innerHTML = matchescount;
	    clvimatch.innerHTML = outputmatch;

	} else {
	  clvicount.innerHTML = 0;
		clvimatch.innerHTML = "N/A";
	}

	/* CCXX */
	  textset = liberccxx.split(" ");
    matchescount = 0;
    outputmatch = "";
    teststr = "";
    testword = "";
    testchar = "";
    teststrval = 0;
    testweight = 0;
    prevmatch = "";
    prevoutput = "";
    outskip = "";
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
                var testwordasint = parseInt(testword);
                if(testwordasint.toString()+"."==testword && testword.substring(testword.length-1,testword.length)==".")
                {
                  testweight = 0;
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
                if(teststrval==a)
                {
                  if(prevmatch.length>0)
                  {
                    if(teststr.substring(0,prevmatch.length)!=prevmatch)
                    {
                      outskip=false;
                      if(prevoutput.length>prevmatch.length)
                      {
                        if(prevoutput.substring(prevoutput.length-prevmatch.length)==prevmatch)
                        {
                            outskip=true;
                        }
                      }
                     if(!outskip)
                      {
                        matchescount++;
                        outputmatch += "<li>"+prevmatch+"</li>";
                        prevoutput = prevmatch;
                        prevmatch="";
                      }
                    }
                  }
                  prevmatch = teststr;
                }
            }
        }
    }
    if(prevmatch.length>0)
    {
      if(teststr.substring(0,prevmatch.length)!=prevmatch)
      {
        if(prevoutput.length>teststr.length)
        {
          if(prevoutput.substring(prevoutput.length-prevmatch.length)==prevmatch)
          {
            outskip=true;
          }
        }
      if(!outskip)
      {
        matchescount++;
        outputmatch += "<li>"+prevmatch+"</li>";
      }
    }
  }
	if (matchescount !== 0) {
	    ccxxcount.innerHTML = matchescount;
	    ccxxmatch.innerHTML = outputmatch;

	} else {
	  ccxxcount.innerHTML = 0;
		ccxxmatch.innerHTML = "N/A";
	}

	/* CCXX + Extra */
	  textset = enumeration.split(" ");
    matchescount = 0;
    outputmatch = "";
    teststr = "";
    testword = "";
    testchar = "";
    teststrval = 0;
    testweight = 0;
    prevmatch = "";
    prevoutput = "";
    outskip = "";
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
                var testwordasint = parseInt(testword);
                if(testwordasint.toString()+"."==testword && testword.substring(testword.length-1,testword.length)==".")
                {
                  testweight = 0;
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
                if(teststrval==a)
                {
                  if(prevmatch.length>0)
                  {
                    if(teststr.substring(0,prevmatch.length)!=prevmatch)
                    {
                      outskip=false;
                      if(prevoutput.length>prevmatch.length)
                      {
                        if(prevoutput.substring(prevoutput.length-prevmatch.length)==prevmatch)
                        {
                            outskip=true;
                        }
                      }
                     if(!outskip)
                      {
                        matchescount++;
                        outputmatch += "<li>"+prevmatch+"</li>";
                        prevoutput = prevmatch;
                        prevmatch="";
                      }
                    }
                  }
                  prevmatch = teststr;
                }
            }
        }
    }
    if(prevmatch.length>0)
    {
      if(teststr.substring(0,prevmatch.length)!=prevmatch)
      {
        if(prevoutput.length>teststr.length)
        {
          if(prevoutput.substring(prevoutput.length-prevmatch.length)==prevmatch)
          {
            outskip=true;
          }
        }
      if(!outskip)
      {
        matchescount++;
        outputmatch += "<li>"+prevmatch+"</li>";
      }
    }
  }
	if (matchescount !== 0) {
	    enumerationcount.innerHTML = matchescount;
	    enumerationmatch.innerHTML = outputmatch;

	} else {
	  enumerationcount.innerHTML = 0;
		enumerationmatch.innerHTML = "N/A";
	}

	/* CCCLXX */
	  textset = liberccclxx.split(" ");
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
	    ccclxxcount.innerHTML = matchescount;
	    ccclxxmatch.innerHTML = outputmatch;

	} else {
	  ccclxxcount.innerHTML = 0;
		ccclxxmatch.innerHTML = "N/A";
	}

	/* DLXX */
	  textset = liberdlxx.split(" ");
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
	    dlxxcount.innerHTML = matchescount;
	    dlxxmatch.innerHTML = outputmatch;

	} else {
	  dlxxcount.innerHTML = 0;
		dlxxmatch.innerHTML = "N/A";
	}

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
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
