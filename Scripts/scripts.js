// import mids.js;
// import ends.js;
//test
$(document).ready(function() {


  var wpjs = {
      model: null,
      currentDrop: null,
      gender: null,
      race: null,
      size: null,
      currentName: null,
      namePointer: null,
      generated: null,


      init: function() {
        $('#info').hide();
        wpjs.gender = "any";
        wpjs.race = "basic";
        wpjs.size = "medium";
        wpjs.names = [];
        wpjs.namePointer = 0;
        wpjs.generated = false;

        wpjs.selectMenu();
        wpjs.closeDropdowns();
        wpjs.selectDrop();
        wpjs.selectSize();
        wpjs.selectRace();
        wpjs.selectGender();
        // wpjs.selectFeedback();

        wpjs.showInfo();
        wpjs.generateName();
        wpjs.nextName();
        wpjs.prevName();
        wpjs.like();
        wpjs.dislike();
        wpjs.coinFlip();
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
      like : function() {
        $("#like").click(function() {
          event.preventDefault();
          con.likeName();
        })
      },

      dislike : function() {
        $("#like").click(function() {
          event.preventDefault();
          con.dislikeName();
        })
      },

      showInfo: function() {
        $('#infoBtn').click(function() {
          event.preventDefault(); //this is here otherwise the href would take over
          document.getElementById("info").classList.toggle("show");
        })
      },

      generateName: function() {
        $('#delta').click(function() {
          var name = "";
          if(wpjs.race === "experimental")
          {
            name = wpjs.constructExperimentalName(wpjs.size);
          }
          else
          name = wpjs.pieceNameTogether(wpjs.size, wpjs.race, wpjs.gender);

          if(wpjs.names.length >= 100)
          {
            wpjs.names.shift();
          }
          wpjs.names.push(name);//stuff this into array
          wpjs.namePointer = wpjs.names.length - 1;//reassign array element displayed to this.
          $("#nameBox").val(name);//put name into input box
        })
      },



      pieceNameTogether: function(s, r, g) { //s for size and r for race
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
            {//TODO: if(coinflip())
              if(wpjs.coinFlip())
              c = eval("mids." + r + "[wpjs.getRandNum(0, mids." + r + ".length)]");//50% chance it pulls from mids
              else {
                c = eval("ends." + r + "[wpjs.getRandNum(0, ends." + r + ".length)]");//50% chance it pulls from ends (dependent)
                }
                if(wpjs.coinFlip())
                {
                  c += eval("shortEnds." + r + "[wpjs.getRandNum(0, shortEnds." + r + ".length)]")//50% chance it pulls from ends (independent)
                }
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

            if(wpjs.gender === "male")
            {
              if(wpjs.coinFlip())
              {
                if(name[name.length - 2] != 'o')//last letter is not o
                {
                  name += 'o';
                }
              }
            }
            else if(wpjs.gender === "female")
            {
              if(wpjs.coinFlip())
              {
                if(name[name.length - 2] != 'a')//last letter is not o
                {
                  name += 'a';
                }
              }

        }
        return name;
      },

      constructExperimentalName: function(s) {
        return "w";
      },

      nextName: function() {
        $('#next').click(function() {

          if(wpjs.namePointer >= wpjs.names.length)
          {
            return;
          }
          else{
            wpjs.namePointer++;
            $("#nameBox").val(wpjs.names[wpjs.namePointer]);//put name into input box

          }
        })
      },

      prevName: function() {
        $('#prev').click(function(){

          if(wpjs.namePointer > 0)
          {
            wpjs.namePointer--;
            $("#nameBox").val(wpjs.names[wpjs.namePointer]);//put name into input box
          }
          else{
            return;
          }
        })
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
