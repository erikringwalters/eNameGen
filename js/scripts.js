// import begs.js;
// import mids.js;
// import ends.js;
$(document).ready(function () {

    var wpjs = {

        model: null,
        currentDrop: null,


        init: function () {
          $('#info').hide();
        },

        selectDrop: function() {
        $(".dropbtn").click(function(event){
          $(".show.sub").removeClass('show');
          wpjs.currentDrop = this.id;
          document.getElementById(this.id + "Drop").classList.add("show");
        });
      },

        sampleFunc: function () {
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

      // closeSubDropdowns: function(){
      //     if(event.target.matches('.dropbtn'))
      //     {
      //       $(".show.sub").removeClass('show');
      //     }
      //   },


      setParentDropDown: function()
      {

      },
      // closeSubDropdowns: function(){
      //   $(window).click(function(
      //   {if(!event.target.matches(".sub")
      //   })
      //   }
      // },
      selectMenu: function() {
        $('#nabla').click(function() {
          document.getElementById("nablaDrop").classList.toggle("show");
        })
      },

    //
    //   selectSize: function() {
    //     $("#size").click(function() {
    //       document.getElementById("sizeDrop").classList.toggle("show");
    //     })
    //   },
    //
    //   selectRace: function(){
    //     $('#race').click(function() {
    //     document.getElementById("raceDrop").classList.toggle("show");
    //   })
    // },
    //
    // selectGender: function(){
    //   $('#gender').click(function() {
    //     document.getElementById("genderDrop").classList.toggle("show");
    //   })
    // },
    //
    // selectFeedback: function(){
    //   $('#feedback')
    //.click(function(){
    //     document.getElementById("feedbackDrop").classList.toggle("show");
    //   })
    // },
    //
    showInfo: function(){
      $('#infoBtn').click(function(){
        document.getElementById("info").classList.toggle("show");
      })
    }

      };

      // generateName: function() {
      //   $('#delta').click(function() {
      //     var name = "";
      //     name += basics[Math.floor(0, basics.size()/100) * 100];
      //     document.getElementById("nameBox").html(name);
      //
      //   })

      //}

    $(function () {

        wpjs.init();
        wpjs.selectMenu();
        wpjs.closeDropdowns();
        //wpjs.closeSubDropdowns();
        wpjs.selectDrop();
        // wpjs.selectSize();
        // wpjs.selectRace();
        // wpjs.selectGender();
        // wpjs.selectFeedback();
        wpjs.showInfo();
        // wpjs.generateName();
    });



});
