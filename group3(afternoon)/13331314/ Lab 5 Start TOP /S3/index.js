// Generated by LiveScript 1.3.1
(function(){
  var robot3, clickOnAButton, displayTheRedBadge, disableAllOtherButtons, getNumberFromTheServer, enableOtherButtons, clickOnTheBubble, initialAtplus;
  $(function(){
    var buttons, bubble, icon;
    buttons = $('#control-ring li');
    bubble = $('#info-bar');
    icon = $('.apb');
    buttons.click(function(){
      clickOnAButton(this);
    });
    bubble.click(function(){
      clickOnTheBubble(bubble);
    });
    icon.mouseover(function(){
      initialAtplus();
    });
    return icon.click(function(){
      robot3();
    });
  });
  robot3 = function(){
    var buttons, i$, len$, theButton;
    buttons = $('#control-ring li');
    for (i$ = 0, len$ = buttons.length; i$ < len$; ++i$) {
      theButton = buttons[i$];
      theButton.click();
    }
  };
  clickOnAButton = function(theButton){
    displayTheRedBadge(theButton);
    getNumberFromTheServer(theButton);
    $(theButton).attr("state", "clicked");
  };
  displayTheRedBadge = function(theButton){
    var badge;
    badge = $(theButton).children('.unread');
    badge.css('display', 'block').html('...');
  };
  disableAllOtherButtons = function(theButton){
    var buttons, i$, len$, button, clicked;
    buttons = $('#control-ring li');
    for (i$ = 0, len$ = buttons.length; i$ < len$; ++i$) {
      button = buttons[i$];
      if (button !== theButton) {
        clicked = $(button).attr("state");
        if (clicked !== "clicked") {
          $(button).attr("state", "disable");
          $(button).css("background-color", "#7E7E7E");
        }
      }
    }
  };
  getNumberFromTheServer = function(theButton){
    return $.get('/', function(data){
      var bubble;
      $(theButton).children('.unread').html(data);
      enableOtherButtons(theButton);
      $(theButton).css("background-color", "#7E7E7E");
      bubble = $('#info-bar');
      bubble.click();
    });
  };
  enableOtherButtons = function(theButton){
    var buttons, i$, len$, button, clicked;
    buttons = $('#control-ring li');
    for (i$ = 0, len$ = buttons.length; i$ < len$; ++i$) {
      button = buttons[i$];
      if (button !== theButton) {
        clicked = $(button).attr("state");
        if (clicked !== "clicked") {
          $(button).attr("state", "");
          $(button).css("background-color", "#192E89");
        }
      }
    }
  };
  clickOnTheBubble = function(bubble){
    var sumArea, sum, numbers, i$, len$, number;
    sumArea = $('.sum');
    sum = 0;
    numbers = $(".unread");
    for (i$ = 0, len$ = numbers.length; i$ < len$; ++i$) {
      number = numbers[i$];
      if ($(number).html() !== "" || $(number).html() !== "...") {
        sum += parseInt($(number).html());
      }
    }
    sumArea.html(sum);
  };
  initialAtplus = function(){
    var bubble, badge, buttons;
    bubble = $('.sum');
    badge = $('.unread');
    buttons = $('#control-ring li');
    $(buttons).attr("state", "");
    $(buttons).css("background-color", "#192E89");
    badge.css('display', 'none').html('');
    bubble.html('');
  };
}).call(this);
