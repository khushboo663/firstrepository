
//----------------for dynamically generated readmore buttons

  var locallength = localStorage.length/3;
  var iden = locallength;
  // alert("locallength = " + locallength);
  //alert ("i locallenth = " + i);
  //var contenttextfull = "";
  var contenttext = "";
  var readmorebtn;
  var readlessbtn;
  var identity;
  var contentxt;
  var hyperlnk;



  function readmore(id,contenttxt)
  {
    //alert ("id readmore = " + id);
    var paragrph  = document.getElementById("paragraph" + id);
    paragrph.innerHTML = contenttxt;

    var identi  = "" + id;
    var conten  = "" + contenttxt;

           // alert("identi readmore = " + identi);
           // alert("conten readmore = " + conten);

    readmorebtn = document.getElementById("readmore" + id);
    readmorebtn.value = "READ LESS";
    readmorebtn.addEventListener("click", function(){
           // alert("identi readmore func = " + identi);
    //        alert("conten readmore func = " + conten);
      readless(identi,conten);
    });
   

  }

  function readless(id,contenttxt)
   {
   //alert ("id readless = " + id);
    var paragrph  = document.getElementById("paragraph" + id);
    paragrph.innerHTML = contenttxt.slice(0,150)+"...";

    readlessbtn = document.getElementById("readmore" + id);
    readlessbtn.value = "READ MORE";
   // alert ("readless btn value = " + readlessbtn.value);
    readlessbtn.addEventListener("click", function(){
      readmore(id,contenttxt);
    });
   

  }

  function hyperlnkreaadmorecall(identin,contentt)
  {
  hyperlnk.addEventListener("click", function (){
    //alert("i hyperlnk func = " + identin);
    //alert("contenttext hyperlnk func = " + contentt);
    readmore(identin,contentt);
   
  });
}

//----------------for previously(already) present readmore buttons

function readmoreprev(buttonnm,paragraphnm)
{
    //alert ("readmore button = " + buttonnm);
    var paragrph = document.getElementById(paragraphnm);
    if(buttonnm == "buttn1")
    {
        paragrph.innerHTML = "A forest is an area of land dominated by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function.[2][3][4] The Food and Agriculture Organization defines a forest as land spanning more than 0.5 hectares with trees higher than 5 meters and a canopy cover of more than 10 percent, or trees able to reach these thresholds in situ. It does not include land that is predominantly under agricultural or urban land use.[5] Using this definition FRA 2020 found that forests covered 4.06 billion hectares or approximately 31 percent of the global land area in 2020 but are not equally distributed around the globe.";
    } 
    else if(buttonnm == "buttn2")
    {
        paragrph.innerHTML = "A shore or a shoreline or sea shore is the fringe of land at the edge of a large body of water, such as an ocean, sea, or lake. In physical oceanography, a shore is the wider fringe that is geologically modified by the action of the body of water past and present, while the beach is at the edge of the shore, representing the intertidal zone where there is one. In contrast to a coast, a shore can border any body of water, while the coast must border an ocean. Therefore, in that sense, a coast is a type of shore. However, the word 'coast' often refers to an area far wider than the shore, often stretching miles into the interior. Shores are influenced by the topography of the surrounding landscape, as well as by water induced erosion, such as waves. The geological composition of rock and soil dictates the type of shore which is created.";
    } 
    else if(buttonnm == "buttn3")
    {
        paragrph.innerHTML = "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. /n A few mountains are isolated summits, but most occur in mountain ranges. Mountains are formed through tectonic forces, erosion, or volcanism,[1] which act on time scales of up to tens of millions of years.[2] Once mountain building ceases, mountains are slowly leveled through the action of weathering, through slumping and other forms of mass wasting, and through erosion by rivers and glaciers.";
    } 
    else if(buttonnm == "buttn4")
    {
        paragrph.innerHTML = "Major snow-prone areas include the polar regions, the northernmost half of the Northern Hemisphere and mountainous regions worldwide with sufficient moisture and cold temperatures. In the Southern Hemisphere, snow is confined primarily to mountainous areas, apart from Antarctica. Snow affects such human activities as transportation: creating the need for keeping roadways, wings, and windows clear; agriculture: providing water to crops and safeguarding livestock; sports such as skiing, snowboarding, and snowmachine travel; and warfare. Snow affects ecosystems, as well, by providing an insulating layer during winter under which plants and animals are able to survive the cold.";
    } 
    readmorebt = document.getElementById(buttonnm);
    readmorebt.value = "READ LESS";
    readmorebt.addEventListener("click", function(){
      //alert("readmore ");
        //alert("identi readmore func = " + identi);
    //        alert("conten readmore func = " + conten);
    readlessprev(buttonnm,paragraphnm);
    });


}

function readlessprev(buttonnm,paragraphnm)
{
 // alert ("readless button = " + buttonnm);
    var paragrph  = document.getElementById(paragraphnm);
        if(buttonnm == "buttn1")
        {
            paragrph.innerHTML = "A forest is an area of land dominated by trees.[1] Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use,...";
        } 
        else if(buttonnm == "buttn2")
        {
            paragrph.innerHTML = "A shore or a shoreline or sea shore is the fringe of land at the edge of a large body of water, such as an ocean, sea, or lake. In physical oceanography, a shore is the wider...";
        } 
        else if(buttonnm == "buttn3")
        {
            paragrph.innerHTML = "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area...";
        } 
        else if(buttonnm == "buttn4")
        {
            paragrph.innerHTML = "Major snow-prone areas include the polar regions, the northernmost half of the Northern Hemisphere and mountainous regions worldwide with sufficient moisture and cold temperatures...";
        } 
    readlessbt = document.getElementById(buttonnm);
    readlessbt.value = "READ MORE";
    readlessbt.addEventListener("click", function(){
        // alert("identi readmore func = " + identi);
    //        alert("conten readmore func = " + conten);
    readmoreprev(buttonnm,paragraphnm);
    });


}

