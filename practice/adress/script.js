//Bussuiess logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Addresses(street, city, counry){
  this.street = street;
  this.city = city;
  this.county = county;
}
//USER INTERFACE LOGIC
$(document).ready(function () {
  $("form#new-contact").submit(function () {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    // $("input#new-first-name").val();
    // $("input#new-last-name").val();
    $(".contact").last().click(function(){
      $("#show-contact").fadeIn(1000);
      $("show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

    });
  });
});

