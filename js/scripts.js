// import mids.js;
// import ends.js;
$(document).ready(function() {


  var wpjs = {
      model: null,
      currentDrop: null,
      gender: null,
      race: null,
      size: null,



      init: function() {
        $('#info').hide();
        wpjs.gender = "any";
        wpjs.race = "basic";
        wpjs.size = "medium";
        //  wpjs.getRandNum();
        wpjs.selectMenu();
        wpjs.closeDropdowns();
        wpjs.selectDrop();
        wpjs.selectSize();
        wpjs.selectRace();
        wpjs.selectGender();
        // wpjs.selectFeedback();
        wpjs.showInfo();
        wpjs.generateName();
        //wpjs.pieceNameTogether();
      },



      getRandNum: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },



      selectDrop: function() {
        $(".dropbtn").click(function(event) {
          $(".show.sub").removeClass('show');
          wpjs.currentDrop = this.id;
          document.getElementById(this.id + "Drop").classList.add("show");
        });
      },

      sampleFunc: function() {},



      closeDropdowns: function() {
        $(window).click(function() {
          if (!event.target.matches('.dropbtn')) //if clicked something other than dropdown button
          {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        })
      },

      selectMenu: function() {
        $('#nabla').click(function() {
          document.getElementById("nablaDrop").classList.toggle("show");
        })
      },


      selectSize: function() {
        $(".sizeSub").click(function() {
          event.preventDefault(); //this is here otherwise the href would take over
          //alert(jQuery(this).attr("id"));
          wpjs.size = jQuery(this).attr("id");
        })
      },

      selectRace: function() {
        $(".raceSub").click(function() {
          event.preventDefault(); //this is here otherwise the href would take over
          //alert(jQuery(this).attr("id"));
          wpjs.race = jQuery(this).attr("id");
        })
      },

      selectGender: function(){
        $(".genderSub").click(function() {
          event.preventDefault(); //this is here otherwise the href would take over
          //alert(jQuery(this).attr("id"));
          wpjs.gender = jQuery(this).attr("id");
        })
      },

      // selectFeedback: function(){
      //   $(".feedbackSub").click(function() {
      //     event.preventDefault(); //this is here otherwise the href would take over
      //     //alert(jQuery(this).attr("id"));
      //     wpjs.feedback = jQuery(this).attr("id");
      //   })
      // },

      showInfo: function() {
        $('#infoBtn').click(function() {
          event.preventDefault(); //this is here otherwise the href would take over
          document.getElementById("info").classList.toggle("show");
        })
      },

      generateName: function() {
        $('#delta').click(function() {
          var name = "";

          name = wpjs.pieceNameTogether(wpjs.size, wpjs.race);

          $("#nameBox").val(name);
        })
      },



      pieceNameTogether: function(s, r) { //s for size and r for race
        var name = "";
        var a, b, c, d;
        a = eval("begs." + r + "[wpjs.getRandNum(0, begs." + r + ".length)]"); //using eval statements to clearly define 'r'
        name += a;
        switch (s) {

          case "small":
            {
              b = eval("shortEnds." + r + "[wpjs.getRandNum(0, shortEnds." + r + ".length)]");
              name += b;
              break;
            }
          case "medium":
            {
              c = eval("mids." + r + "[wpjs.getRandNum(0, mids." + r + ".length)]");
              name += c;
              break;
            }
          case "large":
            {
              c = eval("mids." + r + "[wpjs.getRandNum(0, mids." + r + ".length)]");
              name += c;
              d = eval("ends." + r + "[wpjs.getRandNum(0, ends." + r + ".length)]");
              name += d;

              break;
            }

        }
        return name;
      },

      coinFlip: function() {
        if (Math.floor(Math.random() * (100 - 0)) < 50) {
          return true
        } else return false;
      }

    };//end of wpjs



  $(function() {

    wpjs.init();


  });



});
