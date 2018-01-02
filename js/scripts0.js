
// import mids.js;
// import ends.js;
$(document).ready(function () {


    var wpjs = {

        size: null,




        init: function () {

          wpjs.size = "medium";

          wpjs.selectSize();
          wpjs.selectDrop();

        },

        getRandNum: function(min, max)
        {
          return Math.floor(Math.random() * (max-min)+ min);
        },

        selectSize: function() {
          // $("#nameBox").click(function(event){
          //     wpjs.size = $(this).attr("id");
          // });
          $("#small").click(function(event){
            event.preventDefault();
              wpjs.size = $(this).attr("id");
          });

          // $(".sizeSub").click(function(event) {
          //    //alert(jQuery(this).attr("id"));
          //   wpjs.size = $(this).attr("id");
          // });
        },

        selectDrop: function() {
        $(".dropbtn").click(function(event){
          $(".show.sub").removeClass('show');
          wpjs.currentDrop = this.id;
          document.getElementById(this.id + "Drop").classList.add("show");
        });
      },


    };


    $(function () {

        wpjs.init();


    });



});
