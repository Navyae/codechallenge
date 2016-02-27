

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
          var pol = $(this).find(".ui-slider-handle:first").position().left;
          var por=$(this).find(".ui-slider-handle:last").position().left;
          var po = (pol+por)/2;
         $( "#average" ).val( "$" + po +" "+"Average" );
         $('.s-pr-caret').css({"position": "absolute","left": po,'display':'block'});

       }
     });
    $('.s-pr-caret').css({'display':'none'});


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
