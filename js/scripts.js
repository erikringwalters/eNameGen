$(document).ready(function () {

    var wpjs = {

        model: null,



        init: function () {
          $('#info').hide();

        },



        sampleFunc: function () {
        },

        selectMenu: function() {
          $('#nabla').click(function() {
            document.getElementById("drop").classList.toggle("show");
          })
        },

        closeDropdowns: function() {
        $(window).click(function(){
          if(!event.target.matches('.dropbtn'))//if clicked something other than dropdown button
          {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for(i = 0; i < dropdowns.length;i++){
              var openDropdown = dropdowns[i];
              if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        })
      },

      selectSize: function(){
        $('#sizeBtn').click(function() {
          document.getElementById("size").classList.toggle("show");
        })
      },

      selectRace: function(){
        $('#raceBtn').click(function() {
        document.getElementById("race").classList.toggle("show");
      })
    },

    selectGender: function(){
      $('#genderBtn').click(function() {
        document.getElementById("gender").classList.toggle("show");
      })
    },

    selectFeedback: function(){
      $('#feedbackBtn').click(function(){
        document.getElementById("feedback").classList.toggle("show");
      })
    },

    showInfo: function(){
      $('#infoBtn').click(function(){
        document.getElementById("info").classList.toggle("show");
      })
    }

      };
    //
    //     function selectSize(){
    //       document.getElementById("size").classList.toggle("show");
    //     },
    //     function selectRace(){
    //       document.getElementById("race").classList.toggle("show");
    //     },
    //     function selectGender(){
    //       document.getElementById("gender").classList.toggle("show");
    //     },
    //     function selectFeedback(){
    //       document.getElementById("feedback").classList.toggle("show");
    //     },
    //
    //     window.onclick = function(event) {
    //       if(!event.target.matches('.dropbtn'))//if clicked something other than dropdown button
    //       {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         var i;
    //         for(i = 0; i < dropdowns.length;i++){
    //           var openDropdown = dropdowns[i];
    //           if(openDropdown.classList.contains('show')) {
    //             openDropdown.classList.remove('show');
    //           }
    //         }
    //       }
    //     },
    //
    //     window.onclick = function(event) {
    //       if(!event.target.matches('.dropbtn'))//if clicked something other than dropdown button
    //       {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         var i;
    //         for(i = 0; i < dropdowns.length;i++){
    //           var openDropdown = dropdowns[i];
    //           if(openDropdown.classList.contains('show')) {
    //             openDropdown.classList.remove('show');
    //           }
    //         }
    //       }
    //     }
    //
    // };



    $(function () {

        wpjs.init();
        wpjs.selectMenu();
        wpjs.closeDropdowns();
        wpjs.selectSize();
        wpjs.selectRace();
        wpjs.selectGender();
        wpjs.selectFeedback();
        wpjs.showInfo();
    });



});
