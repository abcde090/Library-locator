
    var markers = [];

    function iterateRecords(data) {

      console.log(data);
      var coords = [];

      $.each(data.result.records, function(recordKey, recordValue) {

        var recordBranchName = recordValue['BranchName'];
        var recordNameofLibraryService = recordValue['NameofLibraryService'];
        var recordLibraryServiceType = recordValue['LibraryServiceType'];
        var recordWiFiAvailability = recordValue['WiFiAvailability'];
        var recordAddressLine1 = recordValue['AddressLine1'];
        var recordAddressLine2 = recordValue['AddressLine2'];
        var recordAddressLocality = recordValue['AddressLocality'];
        var recordAddressPostcode = recordValue['AddressPostcode'];
        var recordPostalAddressLine1 = recordValue['PostalAddressLine1'];
        var recordPostalAddressLine2 = recordValue['PostalAddressLine2'];
        var recordPostalAddressLocality = recordValue['PostalAddressLocality'];
        var recordPostalAddressPostCode = recordValue['PostalAddressPostcode'];
        var recordILLAddressLine1 = recordValue['ILLAddressLine1'];
        var recordPhone = recordValue['Phone'];
        var recordAfterHoursPhone = recordValue['AfterHoursPhone'];
        var recordFax = recordValue['Fax'];
        var recordEmail = recordValue['Email'];
        var recordOpeningHoursMonday = recordValue['OpeningHoursMonday'];
        var recordOpeningHoursTursday = recordValue['OpeningHoursTursday'];
        var recordOpeningHoursWednesday = recordValue['OpeningHoursWednesday'];
        var recordOpeningHoursThursday = recordValue['OpeningHoursThursday'];
        var recordOpeningHoursFriday = recordValue['OpeningHoursFriday'];
        var recordOpeningHoursSaturday = recordValue['OpeningHoursSaturday'];
        var recordOpeningHoursSunday = recordValue['OpeningHoursSunday'];
        var recordLatitude = recordValue['Latitude(Decimal)'];
        var recordLongitude = recordValue['Longitude(Decimal)'];
        var recordBranchManagerName = recordValue['BranchManagerName'];
        
        var recordData = {
          lat: parseFloat(recordLatitude),
          lng: parseFloat(recordLongitude),
          wifi: recordWiFiAvailability,
          name: recordBranchName,
          address: recordAddressLine1,
      sunday: recordOpeningHoursSunday,
      saturday: recordOpeningHoursSaturday,
      indigenous: recordLibraryServiceType
        };
        coords.push(recordData);

        if (recordBranchName) {
          $('#records').append(
            $('<section class="records">').append(
              $('<h2>').text(recordBranchName),
             
              
              $('<p>').text('Wifi Available: ' + recordWiFiAvailability),
        $('<p>').text('Open Saturday: ' + recordOpeningHoursSaturday),
        $('<p>').text('Open Sunday: ' + recordOpeningHoursSunday),
        $('<p>').text('Service Type: ' + recordLibraryServiceType)
            )
          );
        }

        $('#filter-text').keyup(function() {
          var value = $(this).val();
          console.log(value);
          $('.records').hide();
          $('.records:contains("' + value + '")').show();
          $('#filter-count strong').text($('.records:visible').length);
        });
    



    
         
        var clickSwitch = function() {

          if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == false &&
              $("#sundayonoffswitch").prop("checked") == false &&
              $("#indigenousonoffswitch").prop("checked") == false) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No")
                markers[x].setVisible(false);
            }
          }


          else if ($("#wifionoffswitch").prop("checked") == false &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == false &&
              $("#indigenousonoffswitch").prop("checked") == false) {
           
           for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
           $('.records').show();
           $('.records:contains("Open Saturday: Closed")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.saturday == "Closed")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == false &&
              $("#saturdayonoffswitch").prop("checked") == false &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == false) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("Open Sunday: Closed")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.sunday == "Closed")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == false &&
              $("#saturdayonoffswitch").prop("checked") == false &&
              $("#sundayonoffswitch").prop("checked") == false &&
              $("#indigenousonoffswitch").prop("checked") == true) {
           
           for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
           $('.records').show();
           $('.records:contains("IND")').hide();
           $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == false &&
              $("#indigenousonoffswitch").prop("checked") == false) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            $('.records:contains("Open Saturday: Closed")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No" || markers[x].data.saturday == "Closed")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == false &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == false) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            $('.records:contains("Open Sunday: Closed")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No" || markers[x].data.sunday == "Closed")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == false &&
              $("#sundayonoffswitch").prop("checked") == false &&
              $("#indigenousonoffswitch").prop("checked") == true) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            $('.records:contains("IND")').hide();
            $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No" || markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == false &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == false) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("Open Saturday: Closed")').hide();
            $('.records:contains("Open Sunday: Closed")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.saturday == "Closed" || markers[x].data.sunday == "Closed")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == false &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == false &&
              $("#indigenousonoffswitch").prop("checked") == true) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("Open Saturday: Closed")').hide();
            $('.records:contains("IND")').hide();
            $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.saturday == "Closed" || markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == false &&
              $("#saturdayonoffswitch").prop("checked") == false &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == true) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("Open Sunday: Closed")').hide();
            $('.records:contains("IND")').hide();
            $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.sunday == "Closed" || markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == true) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            $('.records:contains("Open Saturday: Closed")').hide();
            $('.records:contains("Open Sunday: Closed")').hide();
            $('.records:contains("IND")').hide();
            $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No" || markers[x].data.saturday == "Closed" || 
                markers[x].data.sunday == "Closed" || markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }


          else if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == false) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            $('.records:contains("Open Saturday: Closed")').hide();
            $('.records:contains("Open Sunday: Closed")').hide();
            
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No" || markers[x].data.saturday == "Closed" || 
                markers[x].data.sunday == "Closed")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == false &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == true) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("Open Saturday: Closed")').hide();
            $('.records:contains("Open Sunday: Closed")').hide();
            $('.records:contains("IND")').hide();
            $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.saturday == "Closed" || 
                markers[x].data.sunday == "Closed" || markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == false &&
              $("#sundayonoffswitch").prop("checked") == true &&
              $("#indigenousonoffswitch").prop("checked") == true) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            $('.records:contains("Open Sunday: Closed")').hide();
            $('.records:contains("IND")').hide();
            $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No" || markers[x].data.sunday == "Closed" || 
                markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }

          else if ($("#wifionoffswitch").prop("checked") == true &&
              $("#saturdayonoffswitch").prop("checked") == true &&
              $("#sundayonoffswitch").prop("checked") == false &&
              $("#indigenousonoffswitch").prop("checked") == true) {
            
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
            $('.records:contains("No")').hide();
            $('.records:contains("Open Saturday: Closed")').hide();
            $('.records:contains("IND")').hide();
            $('.records:contains("RLQ")').hide();
            for (var x = 0; x < markers.length; x++) {
              if(markers[x].data.wifi == "No" || markers[x].data.saturday == "Closed" || 
                markers[x].data.indigenous != "IKC")
                markers[x].setVisible(false);
            }
          }


          else {
            for (var x = 0; x < markers.length; x++) {
              markers[x].setVisible(true);
            }
            $('.records').show();
          }
        };

    
    $('.Onandoff').change(function() {
          clickSwitch();
          
          }
        );
            

        
      });
      return coords;
    }
    function getData() {
      var data = {
        resource_id: '9b58c2e0-e71f-494d-82eb-1b92e39120f4',
        limit: 40
      }
      $.ajax({
        url: 'http://data.gov.au/api/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        cache: true,
        success: function(data) {
          iterateRecords(data);
          data = JSON.stringify(data);
          localStorage.setItem('slqData', data);
          console.log('From API');
        }
      });
    }
  
  
  
    function initMap() {

      var data = [];
      if (localStorage.getItem('slqData')) {
        data = localStorage.getItem('slqData');
        data = JSON.parse(data);
        data = iterateRecords(data);
        console.log(data);
      } else {
        getData();
      }

      var brisbane = {
        lat: -27.470125,
        lng: 153.021072
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: brisbane
      });


      for (var i = 0; i < data.length; i++) {
        var markerData = {
          wifi: data[i].wifi,
      sunday: data[i].sunday,
      saturday: data[i].saturday,
      indigenous: data[i].indigenous
        };
        var marker = new google.maps.Marker({
          position: data[i],
          map: map,
          data: markerData
        });
        var contentString = '<div id="infowindow">'+
            '<h1> '+ data[i].name+ '</h1>' +
            '<h2>Address: '+ data[i].address+'</h2>'+
            '<h2>Has Wifi: '+ data[i].wifi+'</h2>'+
            '<h2>Open on Sunday: '+ data[i].sunday+'</h2>'+
            '<h2>Open on Saturday: '+ data[i].saturday+'</h2>'+
            '<h2>Service Type: '+ data[i].indigenous+'</h2>';
        
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
          return function() {
            infowindow.setContent(content);
            infowindow.open(map, marker);
          };
        })(marker, contentString, infowindow));
      }
    }
  