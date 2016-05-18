$(document).ready(function() {
        
    //SPAMBOT HONEYPOT
    if (report == 'on-site' || report == 'off-site'){
        $("#honey").hide();
    }

    
    if (report == 'on-site'){
        
        //HIDES DATE FIELD
        $("#date_field").css("display", "none");
        
        //HIDES START TIME PICKERS
        $("#start_time_select_field").css("display", "none");
        
        //HIDES END TIME PICKERS
        $("#end_time_select_field").css("display", "none");
        
        //SETS START TIME AS READ ONLY
        $("#start_time").attr("readonly", "true");
        $("#start_time_label").append("  (End Time collected on form submit)");
        
        //HIDES END TIME FIELD - AUTO-FILLED ON SUBMIT
        $("#end_time_field").css("display", "none");
        
        
        $(".content").prepend("<div id='mobile_instructions'>Do not close or refresh your browser</br>(But you can turn your phone off)</div>");
        
        $("#geo_div").append("<label>Click to provide exact location*</label><button type='button' id='location_button'>Get Location</button>");
        
        //CURRENT LOCATION BUTTON FUNCTION
        var location_button = $("#location_button")
        var getLoc;

        $(location_button).click(function(){

            getLoc = navigator.geolocation.watchPosition(showPosition, null, {maximumAge: 0, timeout: Infinity, enableHighAccuracy: true});

            $(this).empty();
	    $(this).append('Location Acquired');
            $(this).attr("disabled", true);

            function showPosition(position) {

                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                accuracy = position.coords.accuracy;

                //TO THE FORM FIELDS...
                document.getElementById("latitude").value = latitude;
                document.getElementById("longitude").value = longitude;
                document.getElementById("accuracy").value = accuracy + "m";

                /*FOR DEVELOPMENT, KEEP THIS VALUE AT 65 (MOST ACCURATE LAPTOP LOCATION) - FOR PRODUCTION, CHANGE IT TO 5 (MOST ACCURATE MOBILE DEVICE LOCATION*/
                if (accuracy <= 5){
                    window.navigator.geolocation.clearWatch(getLoc);
                };
            };
        });
        
        
        //AUTO-FILLS HIDDEN DATE FIELD WITH TODAY'S DATE
        d = new Date();
        n = d.toLocaleDateString();
        d.getDate(d.getDate() + 20);
        n = String(d.getFullYear()) + '-' + ('0' + (d.getMonth()+1)).slice(-2) + '-' + String('0' + d.getDate()).slice(-2);
        
        document.getElementById("date").value = n;
        
        //AUTO-FILLS START TIME ON PAGE LOAD
        //PREPENDS SINGLE DIGITS WITH 0
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        
        h = addZero(d.getHours());
        m = addZero(d.getMinutes());
        s = addZero(d.getSeconds());
        time = h + ":" + m + ":" + s;
        document.getElementById("start_time").value = time;
        
        $("#submit").click(function(){
            dd = new Date();
            hh = addZero(dd.getHours());
            mm = addZero(dd.getMinutes());
            ss = addZero(dd.getSeconds());
            endTime = hh + ":" + mm + ":" + ss;
            
            document.getElementById("end_time").value = endTime;  
        });
        
        //VALIDATIONS
        $("#submit").click(function(){
            var tributary = document.forms["livas_form"]["tributary"].value;
            var latitude = document.forms["livas_form"]["latitude"].value;
            var tidalStage = document.forms["livas_form"]["tidal_stage"].value;
            var temperature = document.forms["livas_form"]["water_temperature"].value;
            var weather = document.forms["livas_form"]["weather"].value;
            var number = document.forms["livas_form"]["number"].value.replace(/,/g,'');
            var name = document.forms["livas_form"]["name"].value;
            var email = document.forms["livas_form"]["email"].value;
            
            function ValidateEmail(x){  
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)){  
                    return true;  
                }
                else{
                    return false;
                };
            }; 
            
            if(tributary == "unchanged" || latitude == "" || tidalStage == "unchanged" /*|| isNaN(temperature) || temperature == "" */|| weather == "unchanged" || isNaN(number) || number == "" || name == "" || ValidateEmail(email) == false){
                
                if(tributary == "unchanged"){
                    alert("Please select a tributary");   
                }
                
                if(latitude == ""){
                    alert("Please provide your location - click 'Get Location' button");
                }
                
                if(tidalStage == "unchanged"){
                    alert("Please select a tidal stage");
                }
                
                /*if(isNaN(temperature) || temperature == ""){
                    alert("Please enter a valid temperature");
                }*/
                
                if(weather == "unchanged"){
                    alert("Please select weather");
                }
                
                if(isNaN(number) || number == ""){
                    alert("Please enter the number of fish");
                }
                
                if(name == ""){
                    alert("Please enter your name")
                }
            
                if(ValidateEmail(email) == false){
                    alert("Please enter a valid email address")
                }
                
                return false;
            }
            
            else{
                $("#submit").hide();
                $("#submit_div").append('<div id="submitting" class="animated flash">Submitting...</div>');
            };
  
        });
    };
    
    
    
    if (report == 'off-site'){
        
        $("#geo_div").append("<div id='help_text'>Click the map or search by address to provide the most exact location</div><div id='map'></div>");
        
        //HIDES START TIME FIELD - AUTOFILLED FROM PICKERS ON SUBMIT
        $("#start_time_field").css("display", "none");
        
        //HIDES END TIME FIELD - AUTOFILLED FROM PICKERS ON SUBMIT
        $("#end_time_field").css("display", "none");
        
        
        //ADDS 24 HOUR TIME PICKERS
        var hourList;
        var minuteList;
        
        //HOUR PICKER OPTIONS
        for(i = 0; i < 24; i++){
            if(i < 10){
                i = "0" + i;
            }
            hourList += "<option value="+i+">"+i+"</option>";
        };
        
        //MINUTE PICKER OPTIONS
        for(i = 0; i < 60; i++){
            if(i < 10){
                i = "0" + i;
            }
            minuteList += "<option value="+i+">"+i+"</option>";
        };
        
        //PASSES OPTIONS TO PICKERS
        $('#start_time_hour_select').append(hourList);
        $('#start_time_minute_select').append(minuteList);
        $('#end_time_hour_select').append(hourList);
        $('#end_time_minute_select').append(minuteList);
        
        //TRIBUTARY SELECT FUNCTIONS
        var tributary_select = $("#tributary_select")
        
        //PANS/ZOOMS MAP TO TRIBUTARY AND PICKS UP PRELIMINARY LAT/LONG
        $(tributary_select).change(function(){

            if (marker){
                map.removeLayer(marker);
            }

            if(($(this).val()) == 'other'){
                map.setView(new L.LatLng(40.818081, -73.078837), 10);

                $('#latitude').val("");
                $('#longitude').val("");
            }
            else{
                latitude = $(this.options[this.selectedIndex]).attr('data-lati');
                longitude = $(this.options[this.selectedIndex]).attr('data-longi');
                map.setView(new L.LatLng(latitude, longitude), 13);

                marker = L.marker([latitude, longitude]).addTo(map);
                $('#latitude').val(latitude)
                $('#longitude').val(longitude)
            };  
        });
        
        
        //MAP FUNCTIONS
        var marker;
        var geosearchControl;
                
        map = L.map('map', {scrollWheelZoom: false}).setView([40.818081, -73.078837], 10);
        
                L.tileLayer('http://{s}.tiles.mapbox.com/v3/skwidbreth.044joc73/{z}/{x}/{y}.png', {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 18
                }).addTo(map);
            
                geosearchControl = new L.Control.GeoSearch({
                    provider: new L.GeoSearch.Provider.Google({
                        componentRestrictions: {"administrativeArea":"NY"}
                    }),
                    position: 'topcenter'
                }).addTo(map);
                
                map.on('geosearch_showlocation', function(e) {
                    if (marker){
                        map.removeLayer(marker)
                        marker=undefined
                        }
                    $('#latitude').val(e.Location.Y); 
                    $('#longitude').val(e.Location.X);
                });
                
                function onMapClick(e) {
                    if(geosearchControl._positionMarker){
                        map.removeLayer(geosearchControl._positionMarker)
                        geosearchControl._positionMarker=undefined
                    }
                    if (marker){
                        map.removeLayer(marker);
                    }
                    marker=L.marker(e.latlng).addTo(map);
                        $('#latitude').val(e.latlng.lat)
                        $('#longitude').val(e.latlng.lng)
                        }   

                    map.on('click', onMapClick);
        
        
        $(document).on("click", "#submit", function(){
            //PASSES PICKER VALUES TO HIDDEN FIELDS ON SUBMIT
            startHour = document.getElementById("start_time_hour_select").value;
            startMinute = document.getElementById("start_time_minute_select").value;
            endHour = document.getElementById("end_time_hour_select").value;
            endMinute = document.getElementById("end_time_minute_select").value;
            
            document.getElementById("start_time").value = startHour + ":" + startMinute + ":00";
            document.getElementById("end_time").value = endHour + ":" + endMinute + ":00";
            
            //VALIDATIONS
            var tributary = document.forms["livas_form"]["tributary"].value;
            var latitude = document.forms["livas_form"]["latitude"].value;
            var date = document.forms["livas_form"]["date"].value;
            var startTimeHourSelect = document.forms["livas_form"]["start_time_hour_select"].value;
            var startTimeMinuteSelect = document.forms["livas_form"]["start_time_minute_select"].value;
            var endTimeHourSelect = document.forms["livas_form"]["end_time_hour_select"].value;
            var endTimeMinuteSelect = document.forms["livas_form"]["end_time_minute_select"].value;
            var startTime = document.forms["livas_form"]["start_time"].value;
            var endTime = document.forms["livas_form"]["end_time"].value;
            var tidalStage = document.forms["livas_form"]["tidal_stage"].value;
            var temperature = document.forms["livas_form"]["water_temperature"].value;
            var weather = document.forms["livas_form"]["weather"].value;
            var number = document.forms["livas_form"]["number"].value.replace(/,/g,'');
            var name = document.forms["livas_form"]["name"].value;
            var email = document.forms["livas_form"]["email"].value;
            
            //VALIDATES EMAIL ADDRESS
            function ValidateEmail(x){  
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)){  
                    return true;  
                }
                else{
                    return false;
                };
            }; 
            
            if(tributary == "unchanged" || latitude == "" || date == "" || startTimeHourSelect == "unchanged" || startTimeMinuteSelect == "unchanged" || endTimeHourSelect =="unchanged" || endTimeMinuteSelect == "unchanged" || startTime >= endTime || tidalStage == "unchanged" /*|| isNaN(temperature) || temperature == ""*/ || weather == "unchanged" || isNaN(number) || number == "" || name == "" || ValidateEmail(email) == false){
                
                if(tributary == "unchanged"){
                    alert("Please select a tributary");   
                }
                
                if(latitude == ""){
                    alert("Please select a tributary. If the tributary is 'Other', please find your report location on the map and click on the spot.");   
                }
                
                if(date == ""){
                    alert("Please select a date");   
                }
                
                if(startTimeHourSelect == "unchanged"){
                    alert("Please select the hour of starting time");   
                }
                
                if(startTimeMinuteSelect == "unchanged"){
                    alert("Please select the minute of starting time");   
                }
                
                if(endTimeHourSelect == "unchanged"){
                    alert("Please select the hour of ending time");   
                }
                
                if(endTimeMinuteSelect == "unchanged"){
                    alert("Please select the minute of ending time");   
                }
                
                if(startTime >= endTime){
                    alert("Start time must be earlier than end time")
                }
                
                if(tidalStage == "unchanged"){
                    alert("Please select a tidal stage");
                }
                
                /*if(isNaN(temperature) || temperature == ""){
                    alert("Please enter a valid temperature");
                }*/
                
                if(weather == "unchanged"){
                    alert("Please select weather");
                }
                
                if(isNaN(number) || number == ""){
                    alert("Please enter the number of fish");
                }
                
                if(name == ""){
                    alert("Please enter your name")
                }
            
                if(ValidateEmail(email) == false){
                    alert("Please enter a valid email address")
                }
                
                return false;
            }
            
            else{
                $("#submit").hide();
                $("#submit_div").append('<div id="submitting" class="animated flash">Submitting...</div>');
            };
        });    
    };
    
    
    
    
    //IF USER SELECTS NO FOR PRESENCE, AUTOFILLS NUMBER FIELD WITH 0 AND BECOMES READONLY.  CHANGING TO YES CLEARS FIELD AND RE-ENABLES
    var presenceRadio = $(".presence_radio");
    
    $(presenceRadio).on("click", function(){
        if (this.value == 0){
            $("#number").val("0");
            $('#number').prop('readonly', true);
        }
        else{
        	$("#number").val("");
        	$('#number').prop('readonly', false);
        };
    });
    
    
    
    
    
    
    //CLEARS ATTACHED FILE
    var file = $("#fileToUpload");

    $("#clear").on("click", function () {
        file.replaceWith(file = file.clone(true));
    });
     
});