function loadaddedblogs ()
{

       while(iden>0)
       {
           var list = document.getElementById("presentblogs");

          // alert ("list" + list);
          var listItems = list.getElementsByTagName("li");
         // alert("listitems = " + listItems);
         //alert ("iden while = " + iden);

          var imag = document.createElement("IMG");
          imag.alt="image";
          imag.style.width = "310px";
          imag.style.height = "180px";
          imag.src = JSON.parse(localStorage.getItem("imagesource" + iden));
          list.insertBefore(imag,listItems[0]);

      
          var headng = document.createElement("H4");
          headng.innerHTML = localStorage.getItem("titletext" + iden);                                       headng.className = "tm-gold-text";
          list.insertBefore(headng,listItems[0]);

          var para = document.createElement("P");
          contenttext = localStorage.getItem("contenttext" + iden);
          //alert("contenttext = " + contenttext);

          para.innerHTML = contenttext.slice(0,150)+"...";
          para.id = "paragraph" + iden;
          list.insertBefore(para,listItems[0]);

          //contenttextfull = localStorage.getItem("contentfulltext" + i);
          
          hyperlnk = document.createElement("input");
          hyperlnk.type = "submit";
          hyperlnk.value = "READ MORE";
          hyperlnk.id = "readmore" + iden;
         // alert ("i hyperlnk = " + i);
          //hyperlnk.style.visibility = "visible";;

          identity  = "" + iden;
          contentxt  = "" + contenttext;

          //alert("i hyperlnk = " + identity);
          //alert("contenttext hyperlnk = " + contentxt);

          hyperlnkreaadmorecall(identity,contentxt);

         
          hyperlnk.className = "tm-btn";
          list.insertBefore(hyperlnk,listItems[0]);

          // var hyperlink = document.createElement("A");
          // hyperlink.innerHTML = "READ LESS";
          // hyperlink.id = "readless" + i;
          // hyperlink.style.visibility = "hidden";;
          // hyperlink.onchange = readless();
          // hyperlnk.className = "tm-btn";
          // list.insertBefore(hyperlink,listItems[0]);

          var brak1 = document.createElement("br");
          list.insertBefore(brak1,listItems[0]);
          
          var horizntl = document.createElement("hr");
          horizntl.className = "tm-margin-t-small";
          list.insertBefore(horizntl,listItems[0]);

          var brak2 = document.createElement("br");
          list.insertBefore(brak2,listItems[0]);

            iden = iden-1;


    }
  

  }


  