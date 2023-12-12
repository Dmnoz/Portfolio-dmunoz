
    var image1 = new Image();
    image1.src = '/assets/images/Searching.gif';

    var replyid = 0;
    var targetfunction = '';

    var httpobject = [];
    var requestcount = 0;

    function confirmcommentdelete(id)
    {
        result = confirm ('Are you sure you want to delete this comment?');

        if (result == true)
        {
            locationstring = pagename + "?deletecommentid=" + id;
            document.location = locationstring;
        }

    }


    function rightclick()
    {
        return false;
    }


    var counter = 0;

    function newHttpReq()
    {
        var newRequest = null;

        try
        {
            newRequest = new XMLHttpRequest();
        }
        catch(trymicrosoft)
        {
            try
            {
                newRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch(othermicrosoft)
            {
                try
                {
                    newRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(failed)
                {
                    newRequest = null;
                }
            }
        }

        return newRequest;

    }

    var request = newHttpReq();

    if(!request)
    {
        alert("Error Initializing XMLHttpRequest!");
    }

    function UpdatePage()
    {

        try
        {
            if(request.readyState == 4)
            {
            }

            if(request.status == 200)
            {
            }
        }
        catch (e)
        {
            return;
        }


        if (request.readyState == 4)
        {
            if(request.status == 200)
            {
                document.getElementById('promotediv').innerHTML = request.responseText;
            }
        }
    }

    function displayFullTopDescription()
    {
        document.getElementById('topDescription').innerHTML = document.getElementById('bottomDescription').innerHTML;
        document.getElementById('linkDisplayFullTopDescription').style.display = 'none';
    }

    function showPDF()
    {
        targetfunction = "window.location.reload();";
        showLoginPopUp(false);
        return;
    }

    function likeartworktop(artworkid,value)
    {

        if(memberidtype == 'none')
        {
            targetfunction = "likeartworktop("+artworkid+"," + value + ")";
            showLoginPopUp(false);
            return;
        }

        document.getElementById('messagedivtop').style.display = 'inline-block';
        document.getElementById('messagedivtop').innerHTML = "<div style='float: left; width: 100%; padding-top: 15px; padding-bottom: 15px; text-align: center;'><img src='/assets/images/Searching.gif'></div>\n";

        var url = '../recommendartwork.php?artworkid=' + artworkid + '&value=' + value + '&flagtop=true';

        if((request.readyState != 4) && (request.readyState != 0))
        {
            request.abort();
            request = newHttpReq();
        }

        request.open('GET',url,true);
        request.onreadystatechange = function (){

            try
            {
                if(request.readyState == 4)
                {
                }

                if(request.status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }


            if (request.readyState == 4)
            {
                if(request.status == 200)
                {

                    var response = request.responseText.split("<EXTRAINSTRUCTIONS>");

                    document.getElementById('messagedivtop').innerHTML = response[0];

                    if(response[1])
                    {
                        eval(response[1]);
                    }

                }
            }


        }

        request.send(null);
    }


function bringtotop(artworkid,status)
    {
        var tag = document.getElementById('targettag').value;
        var url = '/queries/updateartworktags.php?artworkid=' + artworkid + '&tag=' + tag + '&status='+status;

        if((request.readyState != 4) && (request.readyState != 0))
        {
            request.abort();
            request = newHttpReq();
        }

        request.open('GET',url,true);
        request.onreadystatechange = showmessage;
        request.send(null);

        return;

    }


    function promoteartwork(artworkid,status)
    {

        var url = '/queries/promoteartwork.php?artworkid=' + artworkid + '&status='+status;

        if((request.readyState != 4) && (request.readyState != 0))
        {
            request.abort();
            request = newHttpReq();
        }

        request.open('GET',url,true);
        request.onreadystatechange = showmessage;
        request.send(null);

        return;

    }



    function promotemember(artworkid,status)
    {

        var url = '/queries/promotemember.php?artworkid=' + artworkid + '&status='+status;

        if((request.readyState != 4) && (request.readyState != 0))
        {
            request.abort();
            request = newHttpReq();
        }

        request.open('GET',url,true);
        request.onreadystatechange = showmessage;
        request.send(null);

        return;

    }


    function abcdisneyrequest(artworkid)
    {

        var url = '/queries/queryabcdisneycontactinformation.php?artworkid=' + artworkid;

        if((request.readyState != 4) && (request.readyState != 0))
        {
            request.abort();
            request = newHttpReq();
        }

        request.open('GET',url,true);
        request.onreadystatechange = function(){

            try
            {
                if(request.readyState == 4)
                {
                }

                if(request.status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(request.readyState == 4 && request.status == 200)
            {
                document.getElementById('abcdisneydiv').innerHTML = request.responseText;
            }



        };

        request.send(null);

    }


    function showmessage()
    {

        try
        {
            if(request.readyState == 4)
            {
            }

            if(request.status == 200)
            {
            }
        }
        catch (e)
        {
            return;
        }


        if (request.readyState == 4)
        {
            if(request.status == 200)
            {

                alert(request.responseText);

            }
        }
    }


    function reportimage(showerrors)
    {
        createForegroundAndBackgroundDiv();

        var backgroundobject = document.getElementById('backgroundDiv');
        backgroundobject.style.width = '100%';
        backgroundobject.style.height = '100%';
        backgroundobject.style.visibility = 'visible';

        var widthclient = parseInt(window.innerWidth || document.documentElement.clientWidth);
        var heightclient = parseInt(window.innerHeight || document.documentElement.clientHeight);

        var widthtarget = Math.min(600, widthclient*0.80);
        var heighttarget = Math.min(600, heightclient*0.80);

        var offsetleft = 0;
        var offsettop = 0;

        var offsetx = 0;
        var offsety = 0;

        if(document.documentElement.scrollTop && !document.body.scrollTop)
        {
            //offsetleft = document.documentElement.scrollLeft;
            //offsettop = document.documentElement.scrollTop;
        }
        else
        {
            //offsetleft = document.body.scrollLeft;
            //offsettop = document.body.scrollTop;
        }

        var foregroundDiv = document.getElementById('foregroundDiv');
        foregroundDiv.style.width = widthtarget + 'px';
        foregroundDiv.style.height = heighttarget + 'px';
        foregroundDiv.style.visibility = 'visible';
        foregroundDiv.innerHTML = "<img src='/assets/images/Searching.gif' style='float: left;'>";

        foregroundDiv.style.left = (offsetx + offsetleft + parseInt((widthclient - widthtarget) / 2)) + 'px';
        foregroundDiv.style.top = (offsety + offsettop + parseInt((heightclient - heighttarget) / 2)) + 'px';


        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                document.getElementById('foregroundDiv').innerHTML = httpobject[localvalue].responseText;
            }


        };

        var url = "/queries/queryreportimage.php";
        var poststring = "action=showform&showerrors=" + showerrors;

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

        return;
    }


    function submitreportimage(showerrors)
    {

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                document.getElementById('foregroundDiv').innerHTML = httpobject[localvalue].responseText;
            }


        };

        var url = "/queries/queryreportimage.php";
        var message = encodeURIComponent(document.getElementById('reportmessage').value);

        if(message == '')
        {
            alert('You must enter a message.');
            return;
        }

        var poststring = "action=submit&message="+ message + "&artworkid=" + globalArtworkId;

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

        return;
    }


    function facebooklogin()
    {
        // Old Permissions: publish_stream,email
        // New Permissions: email

        FB.login(function(response) {
          if (response.authResponse) {
            if (true) {
              // user is logged in and granted some permissions.
              // perms is a comma separated list of granted permissions

              //alert(response.perms);

              if(true)
              {
                //alert('permission granted');

                document.getElementById('foregroundDiv').innerHTML = "<img src='/assets/images/Searching.gif'>";


                FB.getLoginStatus(function(response) {

                    var facebookuserid = response.authResponse.userID;
                    var facebookaccesstoken = response.authResponse.accessToken;

                    //alert(facebookaccesstoken);
                    var email = '';

                    FB.api('/me', 'get', {access_token: facebookaccesstoken, fields: 'first_name,last_name,email'}, function(response) {

                    var poststring = 'facebookuserid=' + facebookuserid + '&facebookaccesstoken=' + facebookaccesstoken + '&email=' + response.email + '&firstname=' + response.first_name + '&lastname=' + response.last_name + '&targetfunction=' + targetfunction;
                    //alert(poststring);
                    //return;

                    var localvalue = requestcount;

                    httpobject[localvalue] = newHttpReq();
                    httpobject[localvalue].onreadystatechange = function(){

                        try
                        {
                            if(httpobject[localvalue].readyState == 4)
                            {
                            }

                            if(httpobject[localvalue].status == 200)
                            {
                            }
                        }
                        catch (e)
                        {
                            return;
                        }

                        if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
                        {
                            var response = httpobject[localvalue].responseText.split("<EXTRAINSTRUCTIONS>");

                            document.getElementById('foregroundDiv').innerHTML = response[0];

                            if(response[1])
                            {
                                eval(response[1]);
                            }

                        }


                    };

                    var url = "/queries/queryloginfacebookcomplete.php";

                    httpobject[localvalue].open('post',url,true);
                    httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                    httpobject[localvalue].send(poststring);

                    requestcount += 1;


                    });

                });

              }
              else
              {
                alert('permission denied');
              }

            } else {
              // user is logged in, but did not grant any permissions

               //alert('logged in: permission denied');

            }
          } else {
            // user is not logged in
            //alert('not logged in: permission denied');
          }
        }, {scope:'email'});

    }


    function submitLogin()
    {

        document.getElementById('submitLoginDiv').innerHTML = "<img src='/assets/images/Searching.gif'>\n";

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                var response = httpobject[localvalue].responseText.split("<EXTRAINSTRUCTIONS>");

                document.getElementById('foregroundDiv').innerHTML = response[0];

                if(response[1])
                {
                    eval(response[1]);
                }

            }


        };

        var poststring = 'username=' + document.getElementById('username').value + '&password=' + document.getElementById('password').value + '&sourcepage=artworkpage&targetfunction=' + targetfunction;

        //alert(poststring);
        //return;

        var url = "/loginValidation2020.php";

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

    }


    function favoriteimage(artworkid)
    {
        if(memberidtype == 'none')
        {
            targetfunction = "favoriteimage(" + artworkid + ")";
            showLoginPopUp(false);
            return;
        }

        document.getElementById('favoritediv').innerHTML = "<img src='/assets/images/Searching.gif' style='padding-left: 5px;'>\n";

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                var response = httpobject[localvalue].responseText.split("<EXTRAINSTRUCTIONS>");

                document.getElementById('favoritediv').style.width = '80px';
                document.getElementById('favoritediv').style.height = '60px';
                document.getElementById('favoritediv').innerHTML = response[0];

                if(response[1])
                {
                    eval(response[1]);
                }

            }


        };

        var poststring = 'artworkid=' + artworkid;

        //alert(poststring);
        //return;

        var url = '/queries/new-queryaddtofavoritesnew.php';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;
    }


    function favoriteimagetop(artworkid)
    {
        if(memberidtype == 'none')
        {
            targetfunction = "favoriteimagetop(" + artworkid + ")";
            showLoginPopUp(false);
            return;
        }

        document.getElementById('messagedivtop').style.display = 'inline-block';
        document.getElementById('messagedivtop').innerHTML = "<div style='float: left; width: 100%; padding-top: 15px; padding-bottom: 15px; text-align: center;'><img src='/assets/images/Searching.gif'></div>\n";

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                var response = httpobject[localvalue].responseText.split("<EXTRAINSTRUCTIONS>");

                document.getElementById('messagedivtop').innerHTML = response[0];

                if(response[1])
                {
                    eval(response[1]);
                }

            }


        };

        var poststring = 'artworkid=' + artworkid + '&flagtop=true';

        //alert(poststring);
        //return;

        var url = '/queries/new-queryaddtofavoritesnew.php';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;
    }

    function showcomment1()
    {

        if(memberidtype == 'none')
        {
            targetfunction = "showcomment1()";
            showLoginPopUp(false);
            return;
        }

        if(document.getElementById('comment1div').style.display == 'none')
        {
            document.getElementById('comment1div').style.display = 'inline-block';
            //document.getElementById('comment1div').scrollIntoView(true);

            document.getElementById('comment1').select();
        }
        else
        {
            document.getElementById('comment1div').style.display = 'none';
        }

    }

    function submitcomment1()
    {
        var comment = document.getElementById('comment1').value;

        if(comment.length < 3)
        {
            alert('You must enter at least three characters.');
            return;
        }

        document.getElementById('comment1form').submit();

    }


    function showcomment2()
    {

        if(memberidtype == 'none')
        {
            targetfunction = "showcomment2()";
            showLoginPopUp(false);
            return;
        }

        if(document.getElementById('comment2div').style.display == 'none')
        {
            document.getElementById('comment2div').style.display = 'inline-block';
            document.getElementById('comment2div').scrollIntoView(true);

            document.getElementById('comment2').select();
        }
        else
        {
            document.getElementById('comment2div').style.display = 'none';
        }

    }

    function showComment3()
    {
        document.getElementById('messagedivtop').innerHTML = '';

        if(memberidtype == 'none')
        {
            targetfunction = "showComment3()";
            showLoginPopUp(false);
            return;
        }

        if(document.getElementById('comment3div').style.display == 'none')
        {
            document.getElementById('comment3div').style.display = 'inline-block';
            //document.getElementById('comment3div').scrollIntoView(true);

            document.getElementById('comment3').select();
        }
        else
        {
            document.getElementById('comment3div').style.display = 'none';
        }

    }

    function submitcomment2()
    {
        var comment = document.getElementById('comment2').value;

        if(comment.length < 3)
        {
            alert('You must enter at least three characters.');
            return;
        }

        document.getElementById('comment2form').submit();

    }

    function submitcomment3()
    {
        var comment = document.getElementById('comment3').value;

        if(comment.length < 3)
        {
            alert('You must enter at least three characters.');
            return;
        }

        document.getElementById('comment3form').submit();

    }

    function showreply(id)
    {

        if(document.getElementById('replydiv'))
        {
            var parentobject = document.getElementById('replydiv').parentNode;
            parentobject.removeChild(document.getElementById('replydiv'));

            if(id == replyid)
            {
                return;
            }
        }

        replyid = id;

        var parentobject = document.getElementById('individualcommentdiv['+id+']');

        var newelement = document.createElement('div');
        newelement.id = 'replydiv';
        newelement.style.styleFloat = 'left';
        newelement.style.width = '100%';
        newelement.innerHTML = "<div style='float: left; width: 100%; padding-top: 20px;'><form id='replyform' name='replyform' method='post' action='/validation/validatepostcommentreply.php'><input type='hidden' id='childof' name='childof' value='" + replyid + "'><input type='hidden' id='artworkid' name='artworkid' value='" + globalArtworkId + "'><p style='float: left; width: 100%; font: 8pt arial; font-weight: bold;'>Post Reply</p><div style='float: left; width: 100%; padding-top: 5px;'><textarea id='reply' name='reply' style='float: left; width: 290px; padding: 5px; font: 10pt arial;'></textarea></div><div style='float: left; width: 100%; padding-top: 10px;'><a class='button' href='javascript: submitreply();'><span>Reply</span></a></div></form></div>";

        parentobject.appendChild(newelement);

    }

    function submitreply()
    {
        var comment = document.getElementById('reply').value;

        if(comment.length < 3)
        {
            alert('You must enter at least three characters.');
            return;
        }

        document.getElementById('replyform').submit();

    }

    function confirmdeleteimage(id)
    {
        result = confirm ('Are you sure you want to delete this image?');

        if (result == true)
        {
            document.getElementById('deletebuttondiv').innerHTML = "<img src='/assets/images/Searching.gif' style='float: left; padding-left: 5px; padding-top: 2px;'>";

            locationstring = "/featured/" + pagename + "?delete=true";
            document.location = locationstring;
        }

    }

    function storescreenwidth()
    {
        var localvalue = requestcount;
        var poststring = "screenwidth=" + screen.width;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                //alert(httpobject[localvalue].responseText);
            }


        };

        var url = '/queries/querystorescreenwidth.php';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type','application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

    }


    function calculatemainimagedimensions()
    {

        var widthactual = 0;
        var heightactual = 0;

        var widthmax = 0;
        var heightmax = 0;

        if(document.defaultView && document.defaultView.getComputedStyle)
        {
            widthactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('width');
            heightactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('height');

            widthmedium = Math.round(widthactual.replace('px',''));
            heightmedium = Math.round(heightactual.replace('px',''));
        }
        else
        {
            if(false)
            {
                // Internet Explorer 8 and Earlier
                // They return currentStyle.width as "auto" because it's not actually set anywhere.  Therefore, I have to
                // calculate currentStyle.maxWidth and then do the math to arrive at the actual width.

                if(document.getElementById('mainimage').currentStyle)
                {
                    widthmax = document.getElementById('mainimage').currentStyle.getAttribute('maxWidth');
                    heightmax = document.getElementById('mainimage').currentStyle.getAttribute('maxHeight');

                    widthmax = Math.round(widthmax.replace('px',''));
                    heightmax = Math.round(heightmax.replace('px',''));

                    var ratio = Math.max(displaywidth/widthmax,displayheight/heightmax,1);

                    widthactual = Math.round(displaywidth/ratio);
                    heightactual = Math.round(displayheight/ratio);

                    widthmedium = widthactual;
                    heightmedium = heightactual;

                }
            }

        }

        loadflag = 1;
    }


    function sean()
    {
        var widthactual = 0;
        var heightactual = 0;

        var widthmax = 0;
        var heightmax = 0;

        if(document.defaultView && document.defaultView.getComputedStyle)
        {
            widthactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('width');
            heightactual = document.defaultView.getComputedStyle(document.getElementById('mainimage'),'').getPropertyValue('height');

            widthmedium = Math.round(widthactual.replace('px',''));
            heightmedium = Math.round(heightactual.replace('px',''));

        }
        else
        {
            // Internet Explorer 8 and Earlier
            // They return currentStyle.width as "auto" because it's not actually set anywhere.  Therefore, I have to
            // calculate currentStyle.maxWidth and then do the math to arrive at the actual width.

            if(document.getElementById('mainimage').currentStyle)
            {
                widthmax = document.getElementById('mainimage').currentStyle.getAttribute('maxWidth');
                heightmax = document.getElementById('mainimage').currentStyle.getAttribute('maxHeight');

                widthmax = Math.round(widthmax.replace('px',''));
                heightmax = Math.round(heightmax.replace('px',''));

                var ratio = Math.max(displaywidth/widthmax,displayheight/heightmax,1);

                widthactual = Math.round(displaywidth/ratio);
                heightactual = Math.round(displayheight/ratio);

                widthmedium = widthactual;
                heightmedium = heightactual;

            }
        }

        alert(widthactual + ' - ' + heightactual + ' - ' + widthmedium + ' - ' + heightmedium + ' - ' + ratio);

    }


    function showeditkeywords()
    {
        if(document.getElementById('newkeywordsdiv').style.display == 'none')
        {
            document.getElementById('newkeywordsdiv').style.display = 'inline-block';
        }
        else
        {
            document.getElementById('newkeywordsdiv').style.display = 'none';
        }
    }


    function submitnewkeywords()
    {
        document.getElementById('submitnewkeywordsdiv').innerHTML = "<img src='/assets/images/Searching.gif' style='float: left;'>";
        document.getElementById('newkeywordsform').submit();
    }


    function showeditfaakeywords()
    {
        if(document.getElementById('newfaakeywordsdiv').style.display == 'none')
        {
            document.getElementById('newfaakeywordsdiv').style.display = 'inline-block';
        }
        else
        {
            document.getElementById('newfaakeywordsdiv').style.display = 'none';
        }
    }


    function submitnewfaakeywords()
    {
        document.getElementById('submitnewfaakeywordsdiv').innerHTML = "<img src='/assets/images/Searching.gif' style='float: left;'>";
        document.getElementById('newfaakeywordsform').submit();
    }

    function updatevisitordata()
    {
        return;

        var localvalue = requestcount;
        var poststring = "action=updatetime&artworkid=" + globalArtworkId;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                //alert(httpobject[localvalue].responseText);
            }


        };

        var url = '/queries/queryupdatevisitordata.php';
        //alert(url);

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type','application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

    }


    function twitterpopup(url)
    {
        var width = 600;
        var height = 400;

        var leftposition = Number((screen.width/2)-(width/2));
        var topposition = Number((screen.height/2)-(height/2));

        window.open(url,'twitterwindow','width=' + width + ',height=' + height + ',resizable=1,toolbar=0,menubar=0,status=0,location=0,left=' + leftposition + ',top=' + topposition);
    }

    function facebookpopup(url)
    {
        var width = 680;
        var height = 400;

        var leftposition = Number((screen.width/2)-(width/2));
        var topposition = Number((screen.height/2)-(height/2));

        window.open(url,'facebookwindow','width=' + width + ',height=' + height + ',resizable=1,toolbar=0,menubar=0,status=0,location=0,left=' + leftposition + ',top=' + topposition);
    }

    function googlepluspopup(url)
    {
        var width = 720;
        var height = 500;

        var leftposition = Number((screen.width/2)-(width/2));
        var topposition = Number((screen.height/2)-(height/2));

        window.open(url,'googlepluswindow','width=' + width + ',height=' + height + ',resizable=1,toolbar=0,menubar=0,status=0,location=0,left=' + leftposition + ',top=' + topposition);
    }

    function pinterestpopup(url)
    {
        var width = 640;
        var height = 540;

        var leftposition = Number((screen.width/2)-(width/2));
        var topposition = Number((screen.height/2)-(height/2));

        window.open(url,'pinterestwindow','width=' + width + ',height=' + height + ',resizable=1,toolbar=0,menubar=0,status=0,location=0,left=' + leftposition + ',top=' + topposition);
    }

    function checktwittercount(sourceurl)
    {

        $.get('http://urls.api.twitter.com/1/urls/count.json?url=' + sourceurl, function(data) {

            if ((data.count != 0) && (data.count != undefined) && (data.count != null))
            {
                //document.getElementById('twittercountdiv').style.display = 'inline-block';
                //document.getElementById('twittercount').innerHTML = data.count;

                if(document.getElementById('TwitterIconCountDiv'))
                {
                    document.getElementById('TwitterIconCountDiv').innerHTML = data.count;
                }
            }
        },'jsonp');

    }

    function checkfacebookcount(sourceurl)
    {
        $.get('https://graph.facebook.com/' + sourceurl + '', function(data) {

            var fbshares = 0;
            var fblikes = 0;
            var fbtotal = 0;

            if ((data.shares != 0) && (data.shares != undefined) && (data.shares != null))
            {
                fbshares = data.shares;
            }

            if ((data.likes != 0) && (data.likes != undefined) && (data.likes != null))
            {
                fblikes = data.likes;
            }

            fbtotal = fbshares + fblikes;

            if(fbtotal > 0)
            {
                //document.getElementById('facebookcountdiv').style.display = 'inline-block';
                //document.getElementById('facebookcount').innerHTML = fbtotal;

                if(document.getElementById('FacebookIconCountDiv'))
                {
                    document.getElementById('FacebookIconCountDiv').innerHTML = fbtotal;
                }
            }

        },'jsonp');

    }

    function checkpinterestcount(sourceurl)
    {

        $.get('http://api.pinterest.com/v1/urls/count.json?url=' + sourceurl, function(data) {

            if ((data.count != 0) && (data.count != undefined) && (data.count != null))
            {
                //document.getElementById('pinterestcountdiv').style.display = 'inline-block';
                //document.getElementById('pinterestcount').innerHTML = data.count;

                if(document.getElementById('PinterestIconCountDiv'))
                {
                    document.getElementById('PinterestIconCountDiv').innerHTML = data.count;
                }

            }
        },'jsonp');

    }


    function checkstumbleuponcount(sourceurl)
    {

        $.get('../queries/querysocialapis.php?target=stumbleupon&url=' + sourceurl, function(data) {

            if ((data != 0) && (data != undefined) && (data != null))
            {
                //document.getElementById('stumbleuponcountdiv').style.display = 'inline-block';
                //document.getElementById('stumbleuponcount').innerHTML = data;

                if(document.getElementById('StumbleuponIconCountDiv'))
                {
                    document.getElementById('StumbleuponIconCountDiv').innerHTML = data;
                }

            }
        },'html');

    }


    function checkgooglepluscount(sourceurl)
    {

        $.get('../queries/querysocialapis.php?target=googleplus&url=' + sourceurl, function(data) {

            if ((data != 0) && (data != undefined) && (data != null))
            {
                //document.getElementById('googlepluscountdiv').style.display = 'inline-block';
                //document.getElementById('googlepluscount').innerHTML = data;

                if(document.getElementById('GooglePlusIconCountDiv'))
                {
                    document.getElementById('GooglePlusIconCountDiv').innerHTML = data;
                }
            }
        },'html');

    }

    var t;
    var tcounter = 0;

    function togglelinks()
    {
        if(tcounter%2 == 0)
        {
            document.getElementById('linkprevious').style.color = '#000000';
            document.getElementById('linknext').style.color = '#000000';
        }
        else
        {
            document.getElementById('linkprevious').style.color = '#666666';
            document.getElementById('linknext').style.color = '#666666';
        }

        if(tcounter > 10)
        {
            return;
        }

        tcounter += 1;

        t = setTimeout('togglelinks()',100);
    }

    function iconhighlight(icondivid)
    {
        document.getElementById(icondivid).className = 'iconclasshighlighted';
    }

    function iconnormal(icondivid)
    {
        document.getElementById(icondivid).className = 'iconclassnormal';
    }

    function scrollandshowcomment1()
    {
        showcomment1();
        //document.getElementById('comment1div').scrollIntoView();

        var sourceposy = 0;
        var sourceobject = document.getElementById('comment1div');

        if (sourceobject.offsetParent)
        {
            sourceposy = sourceobject.offsetTop;

            while (sourceobject = sourceobject.offsetParent)
            {
                sourceposy += sourceobject.offsetTop;
            }
        }

        window.scrollTo(0,sourceposy - 250);

        document.getElementById('comment1').select();

    }


    var touchx0;
    var touchy0;
    var timestamp0;

    var touchxcurrent;
    var touchycurrent;

    function touchcapturestart(evt)
    {
        if(evt.touches)
        {
            timestamp0 = new Date();
            timestamp0 = timestamp0.getTime();

            touchx0 = evt.touches[0].pageX;
            touchy0 = evt.touches[0].pageY;

            touchxcurrent = touchx0;
            touchycurrent = touchy0;
        }
    }

    function touchcapturemove(evt)
    {
        if(evt.touches)
        {
            touchxcurrent = evt.touches[0].pageX;
            touchycurrent = evt.touches[0].pageY;
        }
    }

    function touchcaptureend(evt)
    {
        return;
        
        if(isNaN(touchx0) || isNaN(touchy0) || isNaN(touchxcurrent) || isNaN(touchycurrent))
        {
            return;
        }

        var touchdeltax = touchxcurrent - touchx0;
        var touchdeltay = touchycurrent - touchy0;
        var currenttime = new Date();
        currenttime = currenttime.getTime();

        var touchtimestampdelta = currenttime - timestamp0;

        if(touchdeltax < -100 && Math.abs(touchdeltay) < 50 && touchtimestampdelta < 1000)
        {
            if(document.getElementById('linknext'))
            {
                showswipeinprogress();
                document.getElementById('linknext').click();
            }
        }

        if(touchdeltax > 100 && Math.abs(touchdeltay) < 50 && touchtimestampdelta < 1000)
        {
            if(document.getElementById('linkprevious'))
            {
                showswipeinprogress();
                document.getElementById('linkprevious').click();
            }
        }

    }

    function showswipeinprogress()
    {
        return;

        var widthclient = parseInt(window.innerWidth || document.documentElement.clientWidth);
        var heightclient = parseInt(window.innerHeight || document.documentElement.clientHeight);

        var widthtarget = 131;
        var heighttarget = 23;

        var offsetleft = 0;
        var offsettop = 0;

        var sourceobject = document.getElementById('topnavigationdiv');

        if (sourceobject.offsetParent)
        {
            offsettop = sourceobject.offsetTop;

            while (sourceobject = sourceobject.offsetParent)
            {
                offsettop += sourceobject.offsetTop;
            }
        }

        var logindiv = document.getElementById('logindiv');
        logindiv.style.width = widthtarget + 'px';
        logindiv.style.height = heighttarget + 'px';
        logindiv.style.backgroundColor = 'transparent';
        logindiv.style.border = 'none';
        logindiv.style.boxShadow = 'none';
        logindiv.innerHTML = "<img src='/assets/images/Searching.gif' style='float: left;'>";

        logindiv.style.left = (offsetleft + parseInt((widthclient - widthtarget) / 2)) + 'px';
        logindiv.style.top = offsettop + 'px';

        logindiv.style.visibility = 'visible';

    }


    function addfavoritetofolder(favoriteid)
    {
        var targetfavoritefolderid = document.getElementById('targetfavoritefolderid').value;
        var poststring = 'action=addfavoritetofolder&favoriteid=' + favoriteid + '&targetfavoritefolderid=' + targetfavoritefolderid;

        document.getElementById('messageaddfavoritetofolderdiv').style.display = 'inline-block';
        document.getElementById('messageaddfavoritetofolderdiv').innerHTML = "<div style='float: left; width: 100%; padding-top: 15px; padding-bottom: 15px; text-align: center;'><img src='/assets/images/Searching.gif'></div>\n";

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                var response = httpobject[localvalue].responseText.split("<EXTRAINSTRUCTIONS>");

                document.getElementById('messageaddfavoritetofolderdiv').innerHTML = response[0];

                if(response[1])
                {
                    eval(response[1]);
                }

            }


        };

        var url = '/queries/new-queryaddtofavoritesnew.php';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;


    }


    function showallkeywords()
    {
        document.getElementById('tagdiv').innerHTML = "<img src='/assets/images/Searching.gif' style='float: left;'>";

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                document.getElementById('tagdiv').innerHTML = httpobject[localvalue].responseText;
            }


        };

        var url = '/queries/queryartworkkeywords.php';
        var poststring = 'artworkid=' + globalArtworkId + '&showall=true';

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

        return;
    }



    function checknextprevious(theEvent)
    {
        var activeelementtagname = document.activeElement.tagName;
        activeelementtagname = activeelementtagname.toLowerCase();

        if(activeelementtagname == 'textarea' || document.getElementById('comment1div').style.display != 'none' || document.getElementById('comment2div').style.display != 'none' || document.getElementById('comment3div').style.display != 'none')
        {
            return;
        }

        if (theEvent == null)
        {
            theEvent = window.event;
        }

        if (theEvent.target)
        {
            theTarget = theEvent.target;
        }
        else
        {
            theTarget = theEvent.srcElement;
        }

        if(theEvent.keyCode == 37)
        {
            if(document.getElementById('linkprevioussidearrow'))
            {
                window.location = document.getElementById('linkprevioussidearrow').getAttribute('href');
            }
        }

        if(theEvent.keyCode == 39)
        {
            if(document.getElementById('linknextsidearrow'))
            {
                window.location = document.getElementById('linknextsidearrow').getAttribute('href');
            }
        }
    }


    function createForegroundAndBackgroundDiv()
    {
        if(!document.getElementById('foregrounddiv') || !document.getElementById('backgrounddiv'))
        {
            var newdiv;
            var cssstyle;

            // Background Div
            if(!document.getElementById('backgroundDiv'))
            {
                newdiv = document.createElement('div');
                cssstyle = 'position: fixed; z-index: 5000; left: 0px; top: 0px; width: 10px; height: 10px; background-color: #000000; visibility: hidden; opacity: 0.50; filter: alpha(opacity=50);';
                newdiv.id = 'backgroundDiv';
                newdiv.setAttribute('style',cssstyle);
                newdiv.style.cssText = cssstyle;
                document.body.appendChild(newdiv);
            }

            // Foreground Div
            if(!document.getElementById('foregroundDiv'))
            {
                newdiv = document.createElement('div');
                cssstyle = 'position: fixed; z-index: 5001; left: 0px; top: 0px; box-sizing: border-box; width: 780px; min-height: 50px; padding: 0px; overflow: auto; padding: 25px; border: 4px solid #666666; background-color: #FFFFFF; visibility: hidden; box-shadow: 0px 0px 50px #000000;';
                newdiv.id = 'foregroundDiv';
                newdiv.setAttribute('style',cssstyle);
                newdiv.style.cssText = cssstyle;
                document.body.appendChild(newdiv);
            }
        }

    }



    function showLoginPopUp(showerrors)
    {
        createForegroundAndBackgroundDiv();

        var backgroundobject = document.getElementById('backgroundDiv');
        backgroundobject.style.width = '100%';
        backgroundobject.style.height = '100%';
        backgroundobject.style.visibility = 'visible';

        var widthclient = parseInt(window.innerWidth || document.documentElement.clientWidth);
        var heightclient = parseInt(window.innerHeight || document.documentElement.clientHeight);

        var widthtarget = Math.min(600, widthclient*0.80);
        var heighttarget = Math.min(600, heightclient*0.80);

        var offsetleft = 0;
        var offsettop = 0;

        var offsetx = 0;
        var offsety = 0;

        if(document.documentElement.scrollTop && !document.body.scrollTop)
        {
            //offsetleft = document.documentElement.scrollLeft;
            //offsettop = document.documentElement.scrollTop;
        }
        else
        {
            //offsetleft = document.body.scrollLeft;
            //offsettop = document.body.scrollTop;
        }

        var foregroundDiv = document.getElementById('foregroundDiv');
        foregroundDiv.style.width = widthtarget + 'px';
        foregroundDiv.style.height = heighttarget + 'px';
        foregroundDiv.style.visibility = 'visible';
        foregroundDiv.innerHTML = "<img src='/assets/images/Searching.gif' style='float: left;'>";

        foregroundDiv.style.left = (offsetx + offsetleft + parseInt((widthclient - widthtarget) / 2)) + 'px';
        foregroundDiv.style.top = (offsety + offsettop + parseInt((heightclient - heighttarget) / 2)) + 'px';

        var localvalue = requestcount;

        httpobject[localvalue] = newHttpReq();
        httpobject[localvalue].onreadystatechange = function(){

            try
            {
                if(httpobject[localvalue].readyState == 4)
                {
                }

                if(httpobject[localvalue].status == 200)
                {
                }
            }
            catch (e)
            {
                return;
            }

            if(httpobject[localvalue].readyState == 4 && httpobject[localvalue].status == 200)
            {
                document.getElementById('foregroundDiv').innerHTML = httpobject[localvalue].responseText;
                globalFocusTrap = focusTrap(document.getElementById('foregroundDiv'),{'clickOutsideDeactivates': true, 'onDeactivate': function(){hideforegrounddiv('fromGlobalFocusTrap')}});
                globalFocusTrap.activate();

            }


        };


        var url = "/queries/queryLoginFacebookNew.php";
        var poststring = "showerrors=" + showerrors;

        httpobject[localvalue].open('post',url,true);
        httpobject[localvalue].setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        httpobject[localvalue].send(poststring);

        requestcount += 1;

        return;
    }

    function hideLoginPopUp(parameters)
    {
        document.getElementById('backgroundDiv').style.visibility = 'hidden';
        document.getElementById('foregroundDiv').style.visibility = 'hidden';
        document.getElementById('foregroundDiv').innerHTML = '&nbsp;';

        if(typeof globalFocusTrap === 'undefined' && typeof globalFocusTrap === 'object')
        {
            globalFocusTrap.deactivate();
        }
    }

    function viewMoreComments()
    {
        var comments = document.getElementsByClassName('commentDiv');

        for(var i = 0; i < comments.length; i ++)
        {
            comments[i].style.display = 'inline-block';
        }

        document.getElementById('viewMoreComments').style.display = 'none';
        document.getElementById('hideMoreComments').style.display = 'inline-block';
    }

    function hideMoreComments()
    {
        var comments = document.getElementsByClassName('commentDiv');

        for(var i = 0; i < comments.length; i ++)
        {
            if(i > 4)
            {
                comments[i].style.display = 'none';
            }
        }

        document.getElementById('viewMoreComments').style.display = 'inline-block';
        document.getElementById('hideMoreComments').style.display = 'none';

        document.getElementById('commentsReviewsContainerDiv').scrollIntoView(true);
    }

    function toggleAvailableProducts(id)
    {
        if	(document.getElementById('availableProductsParentDiv[' + id + ']').className != 'availableProductsParentDiv flexVisible')
        {
            document.getElementById('availableProductsParentDiv[' + id + ']').className = 'availableProductsParentDiv flexVisible';
            document.getElementById('topLevelProductPrice[' + id + ']').style.visibility = 'hidden';
            
            if(false)
            {
                // This lazy loads all of the product images in the dropdown product menus.
                var subProductImages = document.getElementById('availableProductsParentDiv[' + id + ']').getElementsByClassName('subProductImage');
                //console.log(subProductImages);
                
                for(var i = 0; i < subProductImages.length; i ++)
                {
                    if(subProductImages[i].getAttribute('data-pixels-src'))
                    {
                        subProductImages[i].src = subProductImages[i].getAttribute('data-pixels-src');
                        subProductImages[i].removeAttribute('data-pixels-src');
                    }
                }
            }
        }
        else
        {
            document.getElementById('availableProductsParentDiv[' + id + ']').className = 'availableProductsParentDiv flexHidden';
            document.getElementById('topLevelProductPrice[' + id + ']').style.visibility = 'visible';
        }
    }

    function checkForEnterIcon(e)
    {
        var eventTarget = e.target;

        if(e.keyCode === 13)
        {
            eventTarget.click();
        }
    }

