$(document).ready(function () {
    //  $('.dropdown-button').dropdown('open');
    var standardArray=[15,14,13,12,10,8];
    var armorClass=[];
    fillClass();
    $('#strengthDrop').on("click", function () {
        // alert("hello");
         $("#strengthDropList").empty();
        for(var i=0;i<standardArray.length;i++)
        {
        var li="<li>"+standardArray[i]+"</li>";
        $("#strengthDropList").append(li);
        }
      //  $('.strengthbtn').text(a)
    });
    $('#strengthDropList').on("click", function (event) {
         alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.strengthbtn').text(a);
       deleteElementFromArray(a);
        console.log(standardArray);
    });
    $('#DEXTERNITYDrop').on("click", function () {
       //  alert("hello");
         $("#DEXTERITYDropList").empty();
        for(var i=0;i<standardArray.length;i++)
        {
        var li="<li>"+standardArray[i]+"</li>";
        $("#DEXTERITYDropList").append(li);
        }
      //  $('.strengthbtn').text(a)
    });
    $('#DEXTERITYDropList').on("click", function (event) {
         alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.DEXTERITYbtn').text(a);
       deleteElementFromArray(a);
        console.log(standardArray);
    });
    $('#CONSTITUTIONDrop').on("click", function () {
        // alert("hello");
         $("#CONSTITUTIONDropList").empty();
        for(var i=0;i<standardArray.length;i++)
        {
        var li="<li>"+standardArray[i]+"</li>";
        $("#CONSTITUTIONDropList").append(li);
        }
      //  $('.strengthbtn').text(a)
    });
    $('#CONSTITUTIONDropList').on("click", function (event) {
       //  alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.CONSTITUTIONbtn').text(a);
       deleteElementFromArray(a);
        console.log(standardArray);
    });
    $('#INTELLIGENCEDrop').on("click", function () {
        // alert("hello");
         $("#INTELLIGENCEDropList").empty();
        for(var i=0;i<standardArray.length;i++)
        {
        var li="<li>"+standardArray[i]+"</li>";
        $("#INTELLIGENCEDropList").append(li);
        }
      //  $('.strengthbtn').text(a)
    });
    $('#INTELLIGENCEDropList').on("click", function (event) {
         alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.INTELLIGENCEbtn').text(a);
       deleteElementFromArray(a);
        console.log(standardArray);
    });
    $('#WISDOMDrop').on("click", function () {
        // alert("hello");
         $("#WISDOMDropList").empty();
        for(var i=0;i<standardArray.length;i++)
        {
        var li="<li>"+standardArray[i]+"</li>";
        $("#WISDOMDropList").append(li);
        }
      //  $('.strengthbtn').text(a)
    });
    $('#WISDOMDropList').on("click", function (event) {
         alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.WISDOMbtn').text(a);
       deleteElementFromArray(a);
        console.log(standardArray);
    });
    $('#CHARISMADrop').on("click", function () {
        // alert("hello");
         $("#CHARISMADropList").empty();
        for(var i=0;i<standardArray.length;i++)
        {
        var li="<li>"+standardArray[i]+"</li>";
        $("#CHARISMADropList").append(li);
        }
      //  $('.strengthbtn').text(a)
    });
    $('#CHARISMADropList').on("click", function (event) {
         alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.CHARISMAbtn').text(a);
       deleteElementFromArray(a);
        console.log(standardArray);
    });
    function deleteElementFromArray(a)
    {
        for(var i=0;i<standardArray.length;i++)
        {
            if(standardArray[i]==a)
            {
                standardArray.splice($.inArray(standardArray[i], standardArray), 1);
            }
        }
    }
    $("#armor").on("click",function(){
        
    });
    var classCheck="";
    var isClassCheck=false;
    $('#classDrop').on("click", function (event) {
        // alert("hello");
        console.log(event);
        classCheck = event.target.innerText;
       // console.log(a);
       isClassCheck=true;
        $('.classbtn').text(classCheck);
        fillClass();
    });
    $('#raceDrop').on("click", function (event) {
        // alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.racebtn').text(a)
    });
    $('#backDrop').on("click", function (event) {
        // alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.backbtn').text(a)
    });
    $('#levelDrop').on("click", function (event) {
        // alert("hello");
        console.log(event);
        a = event.target.innerText;
        console.log(a);
        $('.levelbtn').text(a)
    });
    function fillClass()
    {
    const pathUrl = "https://api.open5e.com/classes/";
    $.ajax({

        url: pathUrl,
        type: "GET",
        dataType: "json",
        success: function (result) {
            // console.log(result);
            if(isClassCheck==false)
            {
            for (var i = 0; i < result.results.length; i++) {
                // console.log(i,result.results[i].name);
                // var li=$("<li>");
                var li = "<li>" + result.results[i].name + "</li>";
                   
                $("#classDrop").append(li);
            }
        }
        else
        {
            for (var i = 0; i < result.results.length; i++) {
            if(result.results[i].name==classCheck)
            {
                armorClass=result.results[i].prof_armor.split(',');
                console.log(armorClass);
                for(var i=0;i<armorClass.length;i++)
                {
                    console.log(armorClass[i]);
                    if(armorClass[i]=="Light armor")
                    {
                       // alert("hi");
                      var armor= " <div class='col s3'> <p>Light Armor</p><ul><button>Padded</button><button>Leather</button><button>Studded Leather</button></ul></div>";
                       console.log(armor);
                        $("#armor").append(armor); 
                    }
                    else if(armorClass[i]=="medium armor")
                    {

                    }
                    else if(armorClass[i]=="shields")
                    {
                        
                    }
                    else if(armorClass[i]=="All armor")
                    {

                    }
                    else if(armorClass[i]=="none")
                    {

                    }
                }
            }
            }
        }
        },
        error: function (result) {

        }
    });
}
    var raceUrl="https://api.open5e.com/races/";
    $.ajax({

        url: raceUrl,
        type: "GET",
        dataType: "json",
        success: function (result) {
            // console.log(result);
            for (var i = 0; i < result.results.length; i++) {
                // console.log(i,result.results[i].name);
                // var li=$("<li>");
                var li = "<li>" + result.results[i].name + "</li>";
                //  console.log(li);
                $("#raceDrop").append(li);
            }
        },
        error: function (result) {

        }
    });
    /* var backgroundUrl="https://api.open5e.com/backgrounds/";
    $.ajax({

        url: backgroundUrl,
        type: "GET",
        dataType: "json",
        success: function (result) {
            // console.log(result);
            for (var i = 0; i < result.results.length; i++) {
                // console.log(i,result.results[i].name);
                // var li=$("<li>");
                var li = "<li>" + result.results[i].name + "</li>";
                //  console.log(li);
                $("#backDrop").append(li);
            }
        },
        error: function (result) {

        }
    }); */
});