$(document).ready(function () {
    //open the spell modal
    $('#addModel').modal();
    //add the dropdown for the weapon
    fillWeapon();
    //an array for the ability score
    var standardArray = ["-5","-4","-3","-2","-1","0","+1","+2","+3","+4","+5","+6","+7","+8","+9","+10"];
    //function for the classes
    fillClass();
    //function to fill the strength drop down
    $('#strengthDrop').on("click", function () {
        $("#strengthDropList").empty();
        for (var i = 0; i < standardArray.length; i++) {
            var li = "<li>" + standardArray[i] + "</li>";
            $("#strengthDropList").append(li);
        }
    });
    //function when the strength drop down is clicked
    $('#strengthDropList').on("click", function (event) {
        a = event.target.innerText;
        $('.strengthbtn').text(a);
    });
    //function to fill the Dexternity drop down
    $('#DEXTERNITYDrop').on("click", function () {
        //  alert("hello");
        $("#DEXTERITYDropList").empty();
        for (var i = 0; i < standardArray.length; i++) {
            var li = "<li>" + standardArray[i] + "</li>";
            $("#DEXTERITYDropList").append(li);
        }
    });
    //function when the dexternity drop down is clicked
    $('#DEXTERITYDropList').on("click", function (event) {
        a = event.target.innerText;
        $('.DEXTERITYbtn').text(a);
    });
    //function to fill the constitution drop down
    $('#CONSTITUTIONDrop').on("click", function () {
        $("#CONSTITUTIONDropList").empty();
        for (var i = 0; i < standardArray.length; i++) {
            var li = "<li>" + standardArray[i] + "</li>";
            $("#CONSTITUTIONDropList").append(li);
        }
    });
    //function when the constitution drop down is clicked
    $('#CONSTITUTIONDropList').on("click", function (event) {
        a = event.target.innerText;
        $('.CONSTITUTIONbtn').text(a);
    });
    //function to fill the intelligence drop down
    $('#INTELLIGENCEDrop').on("click", function () {
        $("#INTELLIGENCEDropList").empty();
        for (var i = 0; i < standardArray.length; i++) {
            var li = "<li>" + standardArray[i] + "</li>";
            $("#INTELLIGENCEDropList").append(li);
        }
    });
    //function when the intelligence drop down is clicked
    $('#INTELLIGENCEDropList').on("click", function (event) {
        a = event.target.innerText;
        $('.INTELLIGENCEbtn').text(a);
    });

    //function to fill the wisdom drop down
    $('#WISDOMDrop').on("click", function () {
        $("#WISDOMDropList").empty();
        for (var i = 0; i < standardArray.length; i++) {
            var li = "<li>" + standardArray[i] + "</li>";
            $("#WISDOMDropList").append(li);
        }
    });
    //function when the wisdom drop down is clicked
    $('#WISDOMDropList').on("click", function (event) {
        a = event.target.innerText;
        $('.WISDOMbtn').text(a);
    });
    //function to fill the chrisma drop down
    $('#CHARISMADrop').on("click", function () {
        $("#CHARISMADropList").empty();
        for (var i = 0; i < standardArray.length; i++) {
            var li = "<li>" + standardArray[i] + "</li>";
            $("#CHARISMADropList").append(li);
        }
    });
    //function when the chrisma drop down is clicked
    $('#CHARISMADropList').on("click", function (event) {
        a = event.target.innerText;
        $('.CHARISMAbtn').text(a);
    });
    //function when the race drop down is clicked    
    $('#raceDrop').on("click", function (event) {
        a = event.target.innerText;
        $('.racebtn').text(a)
    });
    //function when the class drop down is clicked    
    var classCheck = "";
    $('#classDrop').on("click", function (event) {
        classCheck = event.target.innerText;
        $('.classbtn').text(classCheck);
        $("#spellDrop").empty();
        fillSpell();

    });
    //function when the background drop down is clicked
    $('#backDrop').on("click", function (event) {
        a = event.target.innerText;
        $('.backbtn').text(a)
    });
    //function when the level drop down is clicked    
    $('#levelDrop').on("click", function (event) {
        a = event.target.innerText;
        $('.levelbtn').text(a)
    });
    //function to fill the class using api get method    
    function fillClass() {
        const pathUrl = "https://api.open5e.com/classes/";
        $.ajax({

            url: pathUrl,
            type: "GET",
            dataType: "json",
            success: function (result) {
                for (var i = 0; i < result.results.length; i++) {
                    var li = "<li>" + result.results[i].name + "</li>";
                    $("#classDrop").append(li);
                }
            },
            error: function (result) {

            }
        });
    }

    //Function to roll a D20 using diceapi
    function rollDice(){
        

        var diceURL = "http://roll.diceapi.com/html/d20/"
        $.ajax({
        url: diceURL,
        type: "GET",
        dataType: "json",
        success: function (result){
            var rollValue = result.dice[0].value;
            console.log(rollValue);
        },
        error: function(result){

        }
        });
    }
    

    //function to fill the race using api get method    
    var raceUrl = "https://api.open5e.com/races/";
    $.ajax({

        url: raceUrl,
        type: "GET",
        dataType: "json",
        success: function (result) {
            for (var i = 0; i < result.results.length; i++) {
                var li = "<li>" + result.results[i].name + "</li>";
                $("#raceDrop").append(li);
            }
        },
        error: function (result) {

        }
    });

    //function to fill the spell dropdown
    function fillSpell() {
        const spellUrl = "https://api.open5e.com/spells/";
        var check = true;
        
        $.ajax({

            url: spellUrl,
            type: "GET",
            dataType: "json",
            success: function (result) {
                var p = "";
                var checkIfSpell=true;
                console.log(checkIfSpell);
                for (var i = 0; i < result.results.length; i++) {
                    var arrayCheck = [];
                    arrayCheck = result.results[i].dnd_class.split(",");
                    for (var j = 0; j < arrayCheck.length; j++) {

                        if (arrayCheck[j] == classCheck) {
                            if (check == true) {
                                p = result.results[i].name;
                                check = false;
                               checkIfSpell=false;
                            }
                            var li = "<li><a style='color:white' class='waves-effect waves-light btn modal-trigger'  href='#addModel'>" + result.results[i].name + "</a></li>";
                            $("#spellDrop").append(li);
                        }


                    }
                    if(checkIfSpell==false)
                    {
                    $('.spellbtn').text(p);
                    }
                    else
                    {
                        $('.spellbtn').text("No spell");
                    }

                }

            },
            error: function (result) {
            }
        });
    }
    //function when the spell drop down is clicked
    var nameCheck = "";
    $('#spellDrop').on("click", function (event) {
        nameCheck = event.target.innerText;
        $('.spellbtn').text(nameCheck);
        const spellUrl = "https://api.open5e.com/spells/";
        if (event.target.innerHTML != "") {
            $.ajax({

                url: spellUrl,
                type: "GET",
                dataType: "json",
                success: function (result) {
                    for (var i = 0; i < result.results.length; i++) {
                        var value = event.target;
                        if (result.results[i].name == value.textContent) {
                            var name = event.target.innerText;
                            var description = result.results[i].desc;
                            var level = result.results[i].level_int;
                            var range = result.results[i].range;
                            var v = "<div class='modal-content'> <h4 style='background-color:#26a69a;color:white'>Spell Info</h4><span class='spellBold'>Name: </span><span>" + name + "</span><br><span class='spellBold'>Description: </span><span>" + description + "</span><br><span class='spellBold'>Range: </span><span>" + range + "</span><br><span class='spellBold'>Level: </span><span>" + level + "</span></div>";
                            $("#addModel").html('').append(v);
                            var footer = "<div class='modal-footer'><a href='#!' class='modal-close waves-effect waves-green btn-flat'>Agree</a></div>";
                            $("#addModel").prepend(footer);
                        }
                    }
                },
                error: function (result) {
                }
            });
        }
    });
 //function when the weapons drop down is clicked
 $('#weaponDrop').on("click", function (event) {
    var weaponCheck = event.target.innerText;
      //  console.log(event);
        $('.weaponbtn').text(weaponCheck);

    });   
 //function when weapons dropdown is clicked
 function fillWeapon()
{
    const weaponUrl = "https://api.open5e.com/weapons/";
            $.ajax({

                url: weaponUrl,
                type: "GET",
                dataType: "json",
                success: function (result) {
                    for (var i = 0; i < result.results.length; i++) {
                        var li = "<li>" + result.results[i].name + "</li>";
                        $("#weaponDrop").append(li);
                    }

                },
                error: function (result) {
                }
            });
}
//function for when uer click on the add weapon
$("#add-weapon").on("click",function(){
    var name='what &#39s my name?!';
    var addRow="<div class='col s4'><input id='weapon-name' value='"+name+"'></div><div class='col s4'><input id='attack-bonus' value='How hard do you hit?'></div><div class='col s4'><input id='damage-dice' value='What&#39s the damage?'></div>";
    $(".flexbox").append(addRow);
});   
});