$(document).ready(function(){
    
    //MAKES SURE THE FORM CLEARS IF NAVIGATING BACK/FORWARD TO THE FORM - AN ISSUE IN SOME BROWSERS
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("ampm").selectedIndex = 0;
    document.getElementById("weather").selectedIndex = 0;
    document.getElementById("route").selectedIndex = 0;
    
    $("#date").datepicker({maxDate: "+0D", dateFormat: "yy-mm-dd"});
    
    //TIMEPICKER HOURS
    var hourList = '<option disabled selected>Hour</option>';
    for (h = 1; h <= 12; h++){
        if (h < 10){
            h = "0" + h
        };
        hourList += '<option value='+h+'>'+h+'</option>';
    };
    $('#hour').append(hourList);
    
    //TIMEPICKER MINUTES
    var minuteList = '<option disabled selected>Minute</option>';
    for (m = 0; m <= 59; m++){
        if (m < 10){
            m = "0" + m
        };
        minuteList += '<option value='+m+'>'+m+'</option>';
    };
    $('#minute').append(minuteList);
    
    
    //FILLS DURATION SELECT
    var durationList = '<option disabled selected>Select duration</option>';
    for (d = 5; d <= 120; d+=5){
        durationList += '<option value='+d+'>'+d+'</option>';
    };
    $('#duration').append(durationList);
    
    
    //FILLS THE COUNTERS FOR EACH SITE
    var birdCounter = '<option value="0">None</option>';
    for (x = 1; x <= 20; x++){
        birdCounter += '<option value='+x+'>'+x+'</option>';
    };
    
    
    //SPECIES LIST
    var speciesList = "<option disabled selected>Select species</option><option value='unknown'>unknown</option><option value='other'>other (describe in 'Notes')</option><option value='bat sp.'>bat sp.</option><option value='flycatcher sp.'>flycatcher sp.</option><option value='gull sp.'>gull sp.</option><option value='kinglet sp.'>kinglet sp.</option><option value='owl sp.'>owl sp.</option><option value='sparrow sp.'>sparrow sp.</option><option value='thrush sp.'>thrush sp.</option><option value='warbler sp.'>warbler sp.</option><option value='woodpecker sp.'>woodpecker sp.</option><option value='wren sp.'>wren sp.</option><option value='Alder Flycatcher'>Alder Flycatcher</option><option value='American Black Duck'>American Black Duck</option><option value='American Coot'>American Coot</option><option value='American Goldfinch'>American Goldfinch</option><option value='American Kestrel'>American Kestrel</option><option value='American Redstart'>American Redstart</option><option value='American Robin'>American Robin</option><option value='American Woodcock'>American Woodcock</option><option value='Baltimore Oriole'>Baltimore Oriole</option><option value='Barn Swallow'>Barn Swallow</option><option value='Bay-Breasted Warbler'>Bay-Breasted Warbler</option><option value='Belted Kingfisher'>Belted Kingfisher</option><option value='Black-and-white Warbler'>Black-and-white Warbler</option><option value='Black-billed Cuckoo'>Black-billed Cuckoo</option><option value='Black-capped Chickadee'>Black-capped Chickadee</option><option value='Blackpoll Warbler'>Blackpoll Warbler</option><option value='Black-throated Blue Warbler'>Black-throated Blue Warbler</option><option value='Black-throated Green Warbler'>Black-throated Green Warbler</option><option value='Blue Jay'>Blue Jay</option><option value='Blue-headed Vireo'>Blue-headed Vireo</option><option value='Blue-winged Warbler'>Blue-winged Warbler</option><option value='Brown Creeper'>Brown Creeper</option><option value='Brown Thrasher'>Brown Thrasher</option><option value='Brown-headed Cowbird'>Brown-headed Cowbird</option><option value='Canada Warbler'>Canada Warbler</option><option value='Cape May Warbler'>Cape May Warbler</option><option value='Cedar Waxwing'>Cedar Waxwing</option><option value='Chestnut-sided Warbler'>Chestnut-sided Warbler</option><option value='Chipping Sparrow'>Chipping Sparrow</option><option value='Chuck-wills-widow'>Chuck-will's-widow</option><option value='Clapper Rail'>Clapper Rail</option><option value='Common Grackle'>Common Grackle</option><option value='Common Yellowthroat'>Common Yellowthroat</option><option value='Connecticut Warbler'>Connecticut Warbler</option><option value='Dark-eyed Junco'>Dark-eyed Junco</option><option value='Downy Woodpecker'>Downy Woodpecker</option><option value='Eastern Bluebird'>Eastern Bluebird</option><option value='Eastern Kingbird'>Eastern Kingbird</option><option value='Eastern Phoebe'>Eastern Phoebe</option><option value='Eastern Towhee'>Eastern Towhee</option><option value='Eastern Wood-pewee'>Eastern Wood-pewee</option><option value='European Starling'>European Starling</option><option value='Field Sparrow'>Field Sparrow</option><option value='Fox Sparrow'>Fox Sparrow</option><option value='Golden-crowned Kinglet'>Golden-crowned Kinglet</option><option value='Gray Catbird'>Gray Catbird</option><option value='Gray-cheeked Thrush'>Gray-cheeked Thrush</option><option value='Great Crested Flycatcher'>Great Crested Flycatcher</option><option value='Hermit Thrush'>Hermit Thrush</option><option value='Hooded Warbler'>Hooded Warbler</option><option value='House Finch'>House Finch</option><option value='House Sparrow'>House Sparrow</option><option value='House Wren'>House Wren</option><option value='Indigo Bunting'>Indigo Bunting</option><option value='Kentucky Warbler'>Kentucky Warbler</option><option value='Lazuli Bunting'>Lazuli Bunting</option><option value='Least Flycatcher'>Least Flycatcher</option><option value='Lincolns Sparrow'>Lincoln's Sparrow</option><option value='Louisiana Waterthrush'>Louisiana Waterthrush</option><option value='Magnolia Warbler'>Magnolia Warbler</option><option value='Marsh Wren'>Marsh Wren</option><option value='Mourning Dove'>Mourning Dove</option><option value='Mourning Warbler'>Mourning Warbler</option><option value='Northern Cardinal'>Northern Cardinal</option><option value='Northern Flicker'>Northern Flicker</option><option value='Northern Mockingbird'>Northern Mockingbird</option><option value='Northern Parula'>Northern Parula</option><option value='Northern Waterthrush'>Northern Waterthrush</option><option value='Olive-sided Flycatcher'>Olive-sided Flycatcher</option><option value='Orchard Oriole'>Orchard Oriole</option><option value='Osprey'>Osprey</option><option value='Ovenbird'>Ovenbird</option><option value='Palm Warbler'>Palm Warbler</option><option value='Peregrine Falcon'>Peregrine Falcon</option><option value='Pine Warbler'>Pine Warbler</option><option value='Prairie Warbler'>Prairie Warbler</option><option value='Prothonotary Warbler'>Prothonotary Warbler</option><option value='Purple Finch'>Purple Finch</option><option value='Red-headed Woodpecker'>Red-headed Woodpecker</option><option value='Red-bellied Woodpecker'>Red-bellied Woodpecker</option><option value='Red-breasted Nuthatch'>Red-breasted Nuthatch</option><option value='Red-eyed Vireo'>Red-eyed Vireo</option><option value='Red-tailed Hawk'>Red-tailed Hawk</option><option value='Rock Pigeon'>Rock Pigeon</option><option value='Rose-breasted Grosbeak'>Rose-breasted Grosbeak</option><option value='Ruby-crowned Kinglet'>Ruby-crowned Kinglet</option><option value='Ruby-throated Hummingbird'>Ruby-throated Hummingbird</option><option value='Savannah Sparrow'>Savannah Sparrow</option><option value='Scarlet Tanager'>Scarlet Tanager</option><option value='Seaside Sparrow'>Seaside Sparrow</option><option value='Song Sparrow'>Song Sparrow</option><option value='Sora'>Sora</option><option value='Swainsons Thrush'>Swainson's Thrush</option><option value='Swamp Sparrow'>Swamp Sparrow</option><option value='Tennessee Warbler'>Tennessee Warbler</option><option value='Tufted Titmouse'>Tufted Titmouse</option><option value='Veery'>Veery</option><option value='Virginia Rail'>Virginia Rail</option><option value='White-breasted Nuthatch'>White-breasted Nuthatch</option><option value='White-crowned Sparrow'>White-crowned Sparrow</option><option value='White-eyed Vireo'>White-eyed Vireo</option><option value='White-throated Sparrow'>White-throated Sparrow</option><option value='Willow Flycatcher'>Willow Flycatcher</option><option value='Wilsons Warbler'>Wilson's Warbler</option><option value='Winter Wren'>Winter Wren</option><option value='Wood Thrush'>Wood Thrush</option><option value='Worm-eating Warbler'>Worm-eating Warbler</option><option value='Yellow Warbler'>Yellow Warbler</option><option value='Yellow-bellied Flycatcher'>Yellow-bellied Flycatcher</option><option value='Yellow-bellied Sapsucker'>Yellow-bellied Sapsucker</option><option value='Yellow-billed Cuckoo'>Yellow-billed Cuckoo</option><option value='Yellow-breasted Chat'>Yellow-breasted Chat</option><option value='Yellow-rumped Warbler'>Yellow-rumped Warbler</option><option value='Yellow-throated Vireo'>Yellow-throated Vireo</option>";
    
    var actionList = "<option disabled selected>Select action</option><option value='collected'>Collected</option><option value='no_change'>No change</option><option value='captured_and_released'>Captured and released</option><option value='transported_to_rehabber'>Transported to rehabber</option><option value='other'>Other (Describe in 'Notes')</option>";
    
    

    

    
    //CREATES THE BASIC SITE FIELDS - NO BIRDS FOUND AT SITE
    function noneInput(siteNumber){
        
                noneContainer = $("<div/>", {
                        class: 'none_container',
                        id: 'nonecontainer'+siteNumber+''
                        });
        
                    noneNotesContainer = $("<div/>", {
                                    class: 'site_entry_field'
                                    });
                    siteImageContainer = $("<div/>", {
                                    class: 'site_entry_field'
                                    });
        
        
        
                        noneNotes = $("<input/>", {
                                    type: 'text',
                                    class: 'site_text_input',
                                    id: 'nonenotes'+siteNumber+'',
                                    name: 'nonenotes'+siteNumber+''
                                    });
        
                        noneNotesLabel = $("<label/>", {
                                        text: 'Notes:',
                                        for: 'nonenotes'+siteNumber+''
                                        }).append('&nbsp;&nbsp;').append(noneNotes);

                        siteImage = $("<input/>", {
                                    type: 'file',
                                    class: 'image_attachment',
                                    id: 'siteimage'+siteNumber+'',
                                    name: 'siteimage'+siteNumber+'',
                                    attr: ('data-file_name', ''),
                                    on: {
                                        change: function(){
                                            $(this).data('file_name', this.files[0].name);
                                            $(this).data('file_size', this.files[0].size);
                                            $(this).data('file_type', this.files[0].name.split(".")[1].toLowerCase());
                                        }
                                    }
                                });
        
                        siteImageLabel = $("<label/>", {
                                    text: 'Attach an image:',
                                    for: 'siteimage'+siteNumber+'',
                                    }).append("<br/>").append(siteImage);
        
                        clear = $("<div/>", {
                                html: 'Remove image',
                                class: 'clear',
                                id: 'clear'+siteNumber+'',
                                on: {
                                    click: function(){
                                        //CODE BELOW USED TO CLEAR IMAGE ATTACHMENTS COMMENTED OUT BECAUSE IT DOES NOT WORK IN FIREFOX... SOME PROBLEM WITH COMBINATION OF REPLACE AND CLONE METHODS. FUNCTIONAL CODE BELOW THIS WORKS FOR ALL BROWSERS, THOUGH IT IS LESS ELEGANT.
                                        /*
                                        $('#siteimage'+siteNumber+'').data('file_name', '');
                                        $('#siteimage'+siteNumber+'').data('file_size', 0);
                                        $('#siteimage'+siteNumber+'').data('file_type', '');
                                        
                                        fileInput = $('#siteimage'+siteNumber+'');
                                        fileInput.replaceWith(fileInput = fileInput.clone(true));
                                        */
                                        
                                        oldSiteImage = $('#siteimage'+siteNumber+'');
                                        
                                        newSiteImage = $("<input/>", {
                                            type: 'file',
                                            class: 'image_attachment',
                                            id: 'siteimage'+siteNumber+'',
                                            name: 'siteimage'+siteNumber+'',
                                            attr: ('data-file_name', ''),
                                            on: {
                                                change: function(){
                                                    $(this).data('file_name', this.files[0].name);
                                                    $(this).data('file_size', this.files[0].size);
                                                    $(this).data('file_type', this.files[0].name.split(".")[1].toLowerCase());
                                                }
                                            }
                                        });
                                        
                                        oldSiteImage.replaceWith(newSiteImage);
                                    }
                                }
                            });
        
        
                    
                noneNotesContainer.append(noneNotesLabel);
                siteImageContainer.append(siteImageLabel);
                siteImageContainer.append(clear);
        
            return noneContainer.append(noneNotesContainer).append(siteImageContainer);
        
        
    };
    
    
    
    
    //CREATE INPUT FIELDS FOR BIRDS FOUND
    function speciesInput(siteNumber, x){
        
        birdContainer = $("<fieldset/>", {
                        id: 'birdcontainer'+siteNumber+''+x+'',
                        class: 'bird_container',
                        html: $("<legend/>", {
                            text: "Bird "+x+""  
                            })
                        });
        

                speciesContainer = $("<div/>", {
                            class: 'site_entry_field'
                            });
                deadInjuredContainer = $("<div/>", {
                            class: 'site_entry_field'
                            }).prepend('Status:&nbsp;&nbsp;');
                sexContainer = $("<div/>", {
                            class: 'site_entry_field'
                            }).prepend('Sex:&nbsp;&nbsp;');
                ageContainer = $("<div/>", {
                            class: 'site_entry_field'
                            }).prepend('Age:&nbsp;&nbsp;');
                actionContainer = $("<div/>", {
                            class: 'site_entry_field'
                            });
                notesContainer = $("<div/>", {
                            class: 'site_entry_field'
                            });
                imageContainer = $("<div/>", {
                            class: 'site_entry_field'
                            });
        

                    species = $("<select/>", {
                                    class: 'species_select',
                                    id: 'species'+siteNumber+''+x+'',
                                    name: 'species'+siteNumber+'['+x+']',
                                    site: siteNumber,
                                    bird: x
                                    }).append(speciesList);
        
                    speciesLabel = $("<label/>", {
                                text: 'Species: ',
                                for: 'species'+siteNumber+''+x+''
                                }).append('&nbsp;&nbsp;').append(species);

                    dead = $("<input/>", {
                            type: 'radio',
                            id: 'dead'+siteNumber+''+x+'',
                            name: 'deadinjured'+siteNumber+'['+x+']',
                            value: 'dead',
                            checked: true
                            });
        
                    deadLabel = $("<label/>", {
                                text: 'Dead ',
                                class: 'site_radio',
                                for: 'dead'+siteNumber+''+x+''
                                }).append(dead);

                    injured = $("<input/>", {
                            type: 'radio',
                            id: 'injured'+siteNumber+''+x+'',
                            name: 'deadinjured'+siteNumber+'['+x+']',
                            value: 'injured'
                            });
        
                    injuredLabel = $("<label/>", {
                                text: 'Injured ',
                                class: 'site_radio',
                                for: 'injured'+siteNumber+''+x+''
                                }).append(injured);

                    male = $("<input/>", {
                            type: 'radio',
                            id: 'male'+siteNumber+''+x+'',
                            name: 'sex'+siteNumber+'['+x+']',
                            value: 'male'
                            });
        
                    maleLabel = $("<label/>", {
                                text: 'Male ',
                                class: 'site_radio',
                                for: 'male'+siteNumber+''+x+''
                                }).append(male);

                    female = $("<input/>", {
                            type: 'radio',
                            id: 'female'+siteNumber+''+x+'',
                            name: 'sex'+siteNumber+'['+x+']',
                            value: 'female'
                            });
        
                    femaleLabel = $("<label/>", {
                                text: 'Female ',
                                class: 'site_radio',
                                for: 'female'+siteNumber+''+x+''
                                }).append(female);

                    sexUnknown = $("<input/>", {
                            type: 'radio',
                            id: 'sexUnknown'+siteNumber+''+x+'',
                            name: 'sex'+siteNumber+'['+x+']',
                            value: 'unknown',
                            checked: true
                            });
        
                    sexUnknownLabel = $("<label/>", {
                                    text: 'Unknown ',
                                    class: 'site_radio',
                                    for: 'sexUnknown'+siteNumber+''+x+''
                                    }).append(sexUnknown);

                    adult = $("<input/>", {
                            type: 'radio',
                            id: 'adult'+siteNumber+''+x+'',
                            name: 'age'+siteNumber+'['+x+']',
                            value: 'adult'
                            });
        
                    adultLabel = $("<label/>", {
                                    text: 'Adult ',
                                    class: 'site_radio',
                                    for: 'adult'+siteNumber+''+x+''
                                }).append(adult);

                    juvenile = $("<input/>", {
                            type: 'radio',
                            id: 'juvenile'+siteNumber+''+x+'',
                            name: 'age'+siteNumber+'['+x+']',
                            value: 'juvenile'
                            });
        
                    juvenileLabel = $("<label/>", {
                                    text: 'Juvenile ',
                                    class: 'site_radio',
                                    for: 'juvenile'+siteNumber+''+x+''
                                    }).append(juvenile);

                    ageUnknown = $("<input/>", {
                            type: 'radio',
                            id: 'ageUnknown'+siteNumber+''+x+'',
                            name: 'age'+siteNumber+'['+x+']',
                            value: 'unknown',
                            checked: true
                            });
        
                    ageUnknownLabel = $("<label/>", {
                                text: 'Unknown ',
                                class: 'site_radio',
                                for: 'ageUnknown'+siteNumber+''+x+''
                                }).append(ageUnknown);

                    action = $("<select/>", {
                                    class: 'action_select',
                                    id: 'action'+siteNumber+''+x+'',
                                    name: 'action'+siteNumber+'['+x+']',
                                    site: siteNumber,
                                    bird: x
                                    }).append(actionList);
        
                    actionLabel = $("<label/>", {
                                text: 'Action: ',
                                for: 'action'+siteNumber+''+x+''
                                }).append('&nbsp;&nbsp;').append(action);

                    notes = $("<input/>", {
                            type: 'text',
                            class: 'site_text_input',
                            id: 'notes'+siteNumber+''+x+'',
                            name: 'notes'+siteNumber+'['+x+']'
                            });
        
                    notesLabel = $("<label/>", {
                                text: 'Notes: ',
                                for: 'notes'+siteNumber+''+x+''
                                }).append('&nbsp;&nbsp;').append(notes);

                    image = $("<input/>", {
                            type: 'file',
                            class: 'image_attachment',
                            id: 'image'+siteNumber+''+x+'',
                            name: 'image'+siteNumber+'['+x+']',
                            on: {
                                change: function(){
                                    $(this).data('file_name', this.files[0].name);
                                    $(this).data('file_size', this.files[0].size);
                                    $(this).data('file_type', this.files[0].name.split(".")[1].toLowerCase());
                                }
                            }
                        });
        
                    imageLabel = $("<label/>", {
                                text: 'Attach an image:',
                                for: 'image'+siteNumber+''+x+''
                                }).append(image);
        

                    clear = $("<div/>", {
                            html: 'Remove image',
                            class: 'clear',
                            id: 'clear'+siteNumber+''+x+'',
                            on: {
                                click: function(){
                                    //CODE BELOW USED TO CLEAR IMAGE ATTACHMENTS COMMENTED OUT BECAUSE IT DOES NOT WORK IN FIREFOX... SOME PROBLEM WITH COMBINATION OF REPLACE AND CLONE METHODS.  FUNCTIONAL CODE BELOW THIS WORKS FOR ALL BROWSERS, THOUGH IT IS LESS ELEGANT.
                                    /*
                                    $('#image'+siteNumber+''+x+'').data('file_name', '');
                                    $('#image'+siteNumber+''+x+'').data('file_size', 0);
                                    $('#image'+siteNumber+''+x+'').data('file_type', '');

                                    fileInput = $('#image'+siteNumber+''+x+'');
                                    fileInput.replaceWith(fileInput = fileInput.clone(true));
                                    */
                                    
                                    oldBirdImage = $('#image'+siteNumber+''+x+'');
                                        
                                    newBirdImage = $("<input/>", {
                                        type: 'file',
                                        class: 'image_attachment',
                                        id: 'image'+siteNumber+''+x+'',
                                        name: 'image'+siteNumber+'['+x+']',
                                        on: {
                                            change: function(){
                                                $(this).data('file_name', this.files[0].name);
                                                $(this).data('file_size', this.files[0].size);
                                                $(this).data('file_type', this.files[0].name.split(".")[1].toLowerCase());
                                            }
                                        }
                                    });
                                        
                                    oldBirdImage.replaceWith(newBirdImage);
                                } 
                            }
                        });
        
                    speciesContainer.append(speciesLabel);
                    deadInjuredContainer.append(deadLabel);
                    deadInjuredContainer.append(injuredLabel);
                    sexContainer.append(maleLabel);
                    sexContainer.append(femaleLabel);
                    sexContainer.append(sexUnknownLabel);
                    ageContainer.append(adultLabel);
                    ageContainer.append(juvenileLabel);
                    ageContainer.append(ageUnknownLabel);
                    actionContainer.append(actionLabel);
                    notesContainer.append(notesLabel);
                    imageContainer.append(imageLabel);
                    imageContainer.append(clear);
        
        return birdContainer.append(speciesContainer).append(deadInjuredContainer).append(sexContainer).append(ageContainer).append(actionContainer).append(notesContainer).append(imageContainer);
        
    };
    


    $(document).on("change", "#route", function(){

        $("#sites").empty();

        routeName = $(this).find('option:selected').text();
        $("#sites").prepend("<div id='route_display_name'>"+routeName+"</div>");

        siteCount = $(this.options[this.selectedIndex]).attr('data-sites');

        for(i = 1; i <= siteCount; i++){
            $("#sites").append("<fieldset class='individual_site_container' id='site"+i+"' data-site_number='"+i+"'><legend data-site_number='"+i+"'>Site "+i+" - Number of birds found: <select class='number_select' id='site"+i+"_number_found' name='site["+i+"]'>"+birdCounter+"</select></legend></fieldset>");
            $("#site"+i+"").append(noneInput(i));
        };

        var siteNumber;
        this['initiated' + siteNumber];
        this['inputArray' + siteNumber];
        this['arrayLength' + siteNumber];

        $(document).on("change", ".number_select", function(){

            numberFound = $(this).val();
            siteNumber = $(this).parent().attr('data-site_number');

            if(numberFound === "0"){
                $("#site"+siteNumber+"").append(noneInput(siteNumber));
            };

            if(this['initiated' + siteNumber]){
                if(this['arrayLength' + siteNumber] > numberFound){
                    for(z = this['arrayLength' + siteNumber]; z > numberFound; z--){
                        $("#birdcontainer"+siteNumber+""+z+"").remove();
                        this['inputArray' + siteNumber].pop();
                    };
                    this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                }
                else{
                    $("#nonecontainer"+siteNumber+"").remove();

                    elementsAdd = numberFound - this['arrayLength' + siteNumber];

                    for(y = 1; y <= elementsAdd; y++){
                        x = this['arrayLength' + siteNumber] + y;

                        newInput = speciesInput(siteNumber, x);

                        //$(this).parent().append(newInput);
                        $("#site"+siteNumber+"").append(newInput);
                        this['inputArray' + siteNumber].push(newInput);   
                    };

                    this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                };
            }
            else{

                $("#nonecontainer"+siteNumber+"").remove();

                this['initiated' + siteNumber] = true;
                this['inputArray' + siteNumber] = [];

                for(x = 1; x <= numberFound; x++){
                    this['inputArray' + siteNumber].push(speciesInput(siteNumber, x));
                };

                this['arrayLength' + siteNumber] = this['inputArray' + siteNumber].length;
                //$(this).parent().append(this['inputArray' + siteNumber]);
                $("#site"+siteNumber+"").append(this['inputArray' + siteNumber]);
            };
        });

        //SITE VALIDATIONS, BUILDING THE SUMMARY...
        $(document).on("click", "#next_to_summary", function(){

            //VALIDATION
            var proceed = true;
            var totalFileSize = 0;

            $(".species_select").each(function() {

                if ($(this).val() == null){
                    site = $(this).attr("site");
                    bird = $(this).attr("bird");
                    alert("Please select the species of bird "+bird+" at site "+site+"");
                    proceed = false;
                };
            });


            $(".action_select").each(function(){

                if ($(this).val() == null){
                    site = $(this).attr("site");
                    bird = $(this).attr("bird");  
                    alert("Please select the action taken for bird "+bird+" at site "+site+"");
                    proceed = false;
                };   
            });



            $(".image_attachment").each(function(){

                if($(this).data('file_type') != 'jpg' && $(this).data('file_type') != 'jpeg' && $(this).data('file_type') != 'png' && $(this).data('file_type') != 'gif' && $(this).data('file_type') != 'tif' && $(this).data('file_type') != 'tiff' && $(this).data('file_type') != '' && $(this).data('file_type') != undefined){
                    alert("One of your images is not in the correct format - only jpg, jpeg, png, gif, tif, & tiff files are allowed.");
                    proceed = false;
                };

                if($(this).data('file_size') == undefined){
                    fileSize = 0;
                }
                else{
                    fileSize = $(this).data('file_size');
                };

                totalFileSize += fileSize;
            });


            if(totalFileSize > 48000000){
                megaBytes = Math.ceil(totalFileSize/1000000);

                alert("Total size of attached images is too large - 48Mb max. Your current attachment total is "+megaBytes+"Mb.");
                proceed = false;
            };


            if(proceed){
                
                $('html, body').animate({scrollTop: $("#contents").offset().top}, 'fast');

                //CLEAR THEM OUT TO BE FILLED/REFILLED
                $(".summary_field").empty();
                $("#site_summaries").empty();

                //HIDE SITES, DISPLAY SUMMARY
                $("#site_info").css("display", "none");
                $("#summary").css("display", "block");

                name = document.getElementById("name").value;
                date = document.getElementById("date").value;
                time = document.getElementById("hour").value + ":" + document.getElementById("minute").value + document.getElementById("ampm").value
                duration = document.getElementById("duration").value;
                weather = $('#weather option:selected').text();

                //SURVEY FIELDS
                $("#summary_name").append(name);
                $("#summary_date").append(date);
                $("#summary_time").append(time);
                $("#summary_duration").append(duration + " minutes");
                $("#summary_weather").append(weather);
                $("#summary_route").append(routeName);


                for (i = 1; i <= siteCount; i++){

                    summaryNumberFound = $("#site"+i+"_number_found").val();

                    $("#site_summaries").append('<div class="site_summary" id="site'+i+'_summary"><div class="summary_header">Site '+i+'</div></div>');

                    if (summaryNumberFound === "0"){
                        summaryNoneNotes = $("#nonenotes"+i+"").val();
                        summarySiteImage = $("#siteimage"+i+"").data("file_name");

                        if(summaryNoneNotes == ""){
                            summaryNoneNotes = "No birds found at this site";
                        };

                        if(summarySiteImage == undefined || summarySiteImage == ""){
                            summarySiteImage = "No image attached for this site";  
                        }
                        else{
                            summarySiteImage = ""+summarySiteImage+"";
                        };

                        $("#site"+i+"_summary").append('<div class="individual_summary">Notes: '+summaryNoneNotes+'</br>Image: '+summarySiteImage+'</div>');
                    }

                    else{

                        for (z = 1; z <= summaryNumberFound; z++){

                            summarySpecies = $("#species"+i+""+z+"").find('option:selected').text();

                            if ($("#dead"+i+""+z+"").prop('checked')){
                                summaryDeadInjured = "Dead";
                            }
                            else {
                                summaryDeadInjured = "Injured";
                            };

                            if ($("#male"+i+""+z+"").prop('checked')){
                                summarySex = "Male";
                            }
                            else if ($("#female"+i+""+z+"").prop('checked')){
                                summarySex = "Female";
                            }
                            else{
                                summarySex = "Unknown";
                            };

                            if ($("#adult"+i+""+z+"").prop('checked')){
                                summaryAge = "Adult";
                            }
                            else if ($("#juvenile"+i+""+z+"").prop('checked')){
                                summaryAge = "Juvenile";
                            }
                            else{
                                summaryAge = "Unknown";
                            };

                            summaryAction = $("#action"+i+""+z+"").find('option:selected').text();
                            summaryNotes = $("#notes"+i+""+z+"").val();

                            summaryImage = $("#image"+i+""+z+"").data("file_name");

                            if(summaryImage == undefined || summaryImage == ""){
                                summaryImage = "No image attached for this bird";
                            }
                            else{
                                summaryImage = ""+summaryImage+"";  
                            };

                            $("#site"+i+"_summary").append('<div class="individual_summary"><strong>Bird '+z+'</strong><div class="individual_summary_fields">Species: '+summarySpecies+'</br>Status: '+summaryDeadInjured+'</br>Sex: '+summarySex+'</br>Age: '+summaryAge+'</br>Action: '+summaryAction+'</br>Notes: '+summaryNotes+'</br>Image: '+summaryImage+'</div></div>');

                        };

                    };

                };

            };

        });
    });
    
    
    
    $(document).on("click", "#next_to_sites", function(){
        
        $('html, body').animate({scrollTop: $("#contents").offset().top}, 'fast');
        
        //VALIDATION
        name = $("#name").val()
        date = $("#date").val();
        hour = $("#hour").val();
        minute = $("#minute").val();
        amPm = $("#ampm").val();
        duration = $("#duration").val();
        weather = $("#weather").val();
        route = $("#route").val;


        if (name === "" || date === "" || hour == null || minute == null || amPm == null || duration == null || weather == null || route == null){

            if (name === ""){
                alert("Please enter your name");
            }

            if (date === ""){
                alert("Please select a date");
            }

            if (hour == null){
                alert("Please select an hour");
            }

            if (minute == null){
                alert("Please select a minute");
            }

            if (amPm == null){
                alert("Please select AM or PM");
            }

            if (duration == null){
                alert("Please select duration");
            }

            if (weather == null){
                alert("Please select weather");
            }

            if (route == null){
                alert("Please select a route");
            }
        }   
        else{
            $("#survey_info").css("display", "none");
            $("#site_info").css("display", "block");
        };
        
    });
    
    
    
    $("#previous_to_survey").click(function(){
        $('html, body').animate({scrollTop: $("#contents").offset().top}, 'fast');
        $("#site_info").css("display", "none");
        $("#survey_info").css("display", "block");
    });
    
    
    $("#previous_to_sites").click(function(){
        $('html, body').animate({scrollTop: $("#contents").offset().top}, 'fast');
        $("#summary").css("display", "none");
        $("#site_info").css("display", "block");
    });
    
    $("#submit").click(function() {
        $("#submit").hide();
        $("#previous_to_sites").prop("disabled",true).css("cursor","initial");

        $("#previous_to_sites").on('mouseover', function () {
            $(this).css('background', '#F5753F');
        });

        $("#summary").append('<div id="submitting" class="navigation animated flash small-12 columns">Submitting...</div>');
    });
    
});

