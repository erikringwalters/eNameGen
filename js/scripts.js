
// import mids.js;
// import ends.js;
$(document).ready(function () {
  function getRandNum(min, max)
  {
    return Math.floor(Math.random() * (max-min)+ min);
  }
    var wpjs = {
        model: null,
        currentDrop: null,
        gender: null,
        race: null,
        size: "medium",



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


      selectSize: function() {
        $("#sizeDrop").children.click(function() {

        })
      },
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
    },

      generateName: function(){
        $('#delta').click(function(){
          var name = "";
          name += begs.basics[getRandNum(0,begs.basics.length)];
          switch(size)
          {
            case "small":


          }
          $("#nameBox").val(name);
        })
      }
    }


    $(function () {

        wpjs.init();
        wpjs.selectMenu();
        wpjs.closeDropdowns();
        wpjs.selectDrop();
        // wpjs.selectSize();
        // wpjs.selectRace();
        // wpjs.selectGender();
        // wpjs.selectFeedback();
        wpjs.showInfo();
        wpjs.generateName();

    });



});
