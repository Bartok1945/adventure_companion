$(document).ready(function () {

    var checkIfSpell = true;
    var classCheck = "";
    //get all the inputs from the localstorage
    if (localStorage.length != 0) {
        //hit point local storage
        if (localStorage.getItem("hitPoint") != "undefined") {
            var hitPoint = localStorage.getItem("hitPoint", hitPoint);
            $("#hp").val(hitPoint);

        }
        //armorclass local storage
        if (localStorage.getItem("armorClass") != "undefined") {
            var armorClass = localStorage.getItem("armorClass", armorClass);
            $("#ac").val(armorClass);
        }
        //speed local storage
        if (localStorage.getItem("speed") != "undefined") {
            var speed = localStorage.getItem("speed", speed);
            $("#sp").val(speed);
        }
        //initiative local storage
        if (localStorage.getItem("initiative") != "undefined") {
            var initiative = localStorage.getItem("initiative", initiative);
            $("#int").val(initiative);
        }
        //profeciency local storage
        if (localStorage.getItem("prof") != "undefined") {
            var prof = localStorage.getItem("prof", prof);
            $("#pb").val(prof);
        }
        //character local storage
        if (localStorage.getItem("character") != "undefined") {
            var character = localStorage.getItem("character", character);
            $("#char-name").val(character);
        }
        //class local storage
        if (localStorage.getItem("classbtn") != "Classarrow_drop_down") {
            var classbtn = localStorage.getItem("classbtn", $('.classbtn').text());
            $('.classbtn').text(classbtn);
            classCheck = $('.classbtn').text();
            fillSpell();

        }
        //level local storage
        if (localStorage.getItem("levelbtn") != "Levelarrow_drop_down") {
            var levelbtn = localStorage.getItem("levelbtn", $('.levelbtn').text());
            $('.levelbtn').text(levelbtn);
        }
        //race local storage
        if (localStorage.getItem("racebtn") != "Racearrow_drop_down") {
            var racebtn = localStorage.getItem("racebtn", $('.racebtn').text());
            $('.racebtn').text(racebtn);
        }
        //background local storage
        if (localStorage.getItem("backbtn") != "Backgroundarrow_drop_down") {
            var backbtn = localStorage.getItem("backbtn", $('.backbtn').text());
            $('.backbtn').text(backbtn);
        }
        //strength local storage
        if (localStorage.getItem("strengthbtn") != "Scorearrow_drop_down") {
            var strengthbtn = localStorage.getItem("strengthbtn", $('.strengthbtn').text());
            $('.strengthbtn').text(strengthbtn);
        }
        //dexternity local storage
        if (localStorage.getItem("DEXTERITYbtn") != "Scorearrow_drop_down") {
            var DEXTERITYbtn = localStorage.getItem("DEXTERITYbtn", $('.DEXTERITYbtn').text());
            $('.DEXTERITYbtn').text(DEXTERITYbtn);
        }
        //wisdom local storage
        if (localStorage.getItem("WISDOMbtn") != "Scorearrow_drop_down") {
            var WISDOMbtn = localStorage.getItem("WISDOMbtn", $('.WISDOMbtn').text());
            $('.WISDOMbtn').text(WISDOMbtn);
        }
        //constitution local storage
        if (localStorage.getItem("CONSTITUTIONbtn") != "Scorearrow_drop_down") {
            var CONSTITUTIONbtn = localStorage.getItem("CONSTITUTIONbtn", $('.CONSTITUTIONbtn').text());
            $('.CONSTITUTIONbtn').text(CONSTITUTIONbtn);
        }
        //charisma local storage
        if (localStorage.getItem("CHARISMAbtn") != "Scorearrow_drop_down") {
            var CHARISMAbtn = localStorage.getItem("CHARISMAbtn", $('.CHARISMAbtn').text());
            $('.CHARISMAbtn').text(CHARISMAbtn);
        }
        //intlligence local storage
        if (localStorage.getItem("INTELLIGENCEbtn") != "Scorearrow_drop_down") {
            var INTELLIGENCEbtn = localStorage.getItem("INTELLIGENCEbtn", $('.INTELLIGENCEbtn').text());
            $('.INTELLIGENCEbtn').text(INTELLIGENCEbtn);
        }
        //weapon local storage
        if (localStorage.getItem("weaponbtn") != "weapon typearrow_drop_down") {
            var weaponDropDown = localStorage.getItem("weaponbtn", $('.weaponbtn').text());
            $('.weaponbtn').text(weaponDropDown);
        }
        //checkbox localstorage
        $('input[type=checkbox]').each(function () {
            for (x in localStorage) {
                if (x == $(this)[0].id) {
                    this.checked = true;
                }
            }
        });

        //inventory and weapon localstorage
        if (localStorage.getItem("subject") != null) {
            var subject = localStorage.getItem("subject", $('#subject').val());
            $('#subject').val((subject));
        }
        if (localStorage.getItem("weapon-name") != null) {
            var weapon = localStorage.getItem("weapon-name", $('#weapon-name').val());
            $('#weapon-name').val(weapon);
        }
        if (localStorage.getItem("attack-bonus") != null) {
            var attack = localStorage.getItem("attack-bonus", $('#attack-bonus').val());
            $('#attack-bonus').val(attack);
        }
        if (localStorage.getItem("damage-dice") != null) {
            var damage = localStorage.getItem("damage-dice", $('#damage-dice').val());
            $('#damage-dice').val(damage);
        }
    }
    //open the spell modal
    $('#addModel').modal();
    //fill weapon drop down
    fillWeapon();
    //an array for the ability score
    var standardArray = ["-5", "-4", "-3", "-2", "-1", "0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"];
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
    $('#click-to-roll').on("click", function (event) {
        var diceURL = "https://cors-anywhere.herokuapp.com/http://roll.diceapi.com/json/d20/"
        var rollValue = -1
        $.ajax({
            url: diceURL,
            type: "GET",
            dataType: "json",
            success: function (result) {
                rollValue = result.dice[0].value
                console.log(rollValue)
                var resultModal = document.getElementById('diceResult')
                resultModal.innerHTML = "You rolled a " + rollValue
            },
            error: function (result) {
            }
        });
        $('.modal').modal();
    });

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

    function fillSpell() {
        var p = "";
        var check = true;
        for (var page = 1; page <= 7; page++) {
            const spellUrl = "https://api.open5e.com/spells/?page=" + page;
            $.ajax({
                url: spellUrl,
                type: "GET",
                dataType: "json",
                success: function (result) {
                    for (var i = 0; i < result.results.length; i++) {
                        var arrayCheck = [];
                        arrayCheck = result.results[i].dnd_class.split(",");
                        for (var j = 0; j < arrayCheck.length; j++) {

                            if (arrayCheck[j] == classCheck) {
                                if (check == true) {
                                    p = result.results[i].name;

                                    check = false;
                                }
                                var li = "<li><a style='color:white' class='waves-effect waves-light btn modal-trigger'  href='#addModel'>" + result.results[i].name + "</a></li>";
                                $("#spellDrop").append(li);
                            }
                        }

                    }
                    if (p != "") {
                        $('.spellbtn').text("Spells");
                    }
                    else {
                        $('.spellbtn').text("No spell");
                    }


                },
                error: function (result) {
                }
            });
        }
    }

    //function when the spell drop down is clicked
    var nameCheck = "";
    $('#spellDrop').on("click", function (event) {
        nameCheck = event.target.innerText;
        $('.spellbtn').text(nameCheck);
        for (var page = 1; page <= 7; page++) {
            const spellUrl = "https://api.open5e.com/spells/?page=" + page;
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
        }
    });
    //function when the weapons drop down is clicked
    $('#weaponDrop').on("click", function (event) {
        var weaponCheck = event.target.innerText;
        $('.weaponbtn').text(weaponCheck);
    });
    //function when weapons dropdown is clicked
    function fillWeapon() {
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
    $("#add-weapon").on("click", function () {
        var name = 'what &#39s my name?!';
        var addRow = "<div class='col s4'><input id='weapon-name' value='" + name + "'></div><div class='col s4'><input id='attack-bonus' value='How hard do you hit?'></div><div class='col s4'><input id='damage-dice' value='What&#39s the damage?'></div>";
        $(".flexbox").append(addRow);
    });
    //when user click the save button all the character sheet information will be saved on local storage
    $("#save-button").on("click", function () {
        localStorage.clear();
        var hitPoint = $("#hp").val();
        var armorClass = $("#ac").val();
        var speed = $("#sp").val();
        var initiative = $("#int").val();
        var prof = $("#pb").val();
        var character = $("#char-name").val();
        localStorage.setItem("hitPoint", hitPoint);
        localStorage.setItem("armorClass", armorClass);
        localStorage.setItem("speed", speed);
        localStorage.setItem("initiative", initiative);
        localStorage.setItem("prof", prof);
        localStorage.setItem("character", character);
        localStorage.setItem("classbtn", $('.classbtn').text());
        localStorage.setItem("spellbtn", $('.spellbtn').text());
        var levelbtn = $("#char-name").val();
        localStorage.setItem("levelbtn", $('.levelbtn').text());
        localStorage.setItem("racebtn", $('.racebtn').text());
        localStorage.setItem("backbtn", $('.backbtn').text());
        localStorage.setItem("strengthbtn", $('.strengthbtn').text());
        localStorage.setItem("DEXTERITYbtn", $('.DEXTERITYbtn').text());
        localStorage.setItem("WISDOMbtn", $('.WISDOMbtn').text());
        localStorage.setItem("CONSTITUTIONbtn", $('.CONSTITUTIONbtn').text());
        localStorage.setItem("CHARISMAbtn", $('.CHARISMAbtn').text());
        localStorage.setItem("INTELLIGENCEbtn", $('.INTELLIGENCEbtn').text());
        $('input[type=checkbox]').each(function () {
            if (this.checked) {
                localStorage.setItem($(this)[0].id, $(this).val());
            }
        });

        localStorage.setItem("subject", $('#subject').val());
        localStorage.setItem("weapon-name", $('#weapon-name').val());
        localStorage.setItem("attack-bonus", $('#attack-bonus').val());
        localStorage.setItem("damage-dice", $('#damage-dice').val());
        localStorage.setItem("weaponbtn", $('.weaponbtn').text());

    });
});