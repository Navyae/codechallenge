

  if (Meteor.isClient) {
  Template.hello.rendered = function() {

     $( "#sprice" ).slider({
      range: true,
       min: 0,
       max: 25000,
       values: [0, 25000],

       slide: function( event, ui ) {
         var ad= ui.values[ 0 ] + ui.values[ 1 ];
          var ave= ad/2;
          var pol = $(this).find(".ui-slider-handle").offset().left;
         $( "#average" ).val( "$" + ave +" "+"Average" );
         $('.s-pr-av').css({"position": "absolute","left": pol});

       }
     });
     var add= $( "#sprice" ).slider( "values", 0 ) + $( "#slider-range" ).slider( "values", 1 )
     var av1= add/2;
     $( "#average" ).val( "$" + av1 +" "+ "Average");


   };
  var unc="null";
  Template.hello.events({

    'click .s-pick-check-button': function(e) {
      if(unc == (e.currentTarget)){
         $(e.target).children('.s-pick-check-button-chec').find('i').css({'color':'#fff'});
         unc ='';
       }
       else{
         unc = (e.currentTarget);
         $(e.target).children('.s-pick-check-button-chec').find('i').css({'color':'#44b244'});

       }
      },

  });


  }

  if (Meteor.isServer) {
    Meteor.startup(function () {

      // code to run on server at startup
    });
  }
