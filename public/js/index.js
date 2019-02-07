// Get references to page elements

var $submitBtn = $("#submit");
var submitSearch = $("#submitSearch");
var newType = $("#typeV");
var newMake = $("#typeMake");
var newModel = $("#typeModel");
var newPrice = $("#typePrice");
var newDescrpt = $("#typeDes");
var newYear = $("#typeYear")
var newImage = $("");
var modSea = $("#btnmodel");
var makeSea = $("#btnmake");
var yearSea = $("#btnyear")
var priceSea = $("#btnprice");
var optionMake = $(".newoptions");


//objectVehicle

popularVehicle = ["Ford", "Toyoto", "Honda", "Nissan", "Chevrolet", "Hyundai", "Ram", "Volksvagen", "GMC", "KIA", "Jeep", "Subaru", "Mazada", "Mercedes_Benz", "BMW", "Dodge"];

////////////
var API = {
  saveOne: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/vehicle",
      data: JSON.stringify(example)
    });
  },
  getAll: function () {
    return $.ajax({
      url: "api/vehicle",
      type: "GET"
    });
  },
  getMake: function () {
    return $.ajax({
      url: "api/vehicle/" + make,
      type: "GET"
    });
  },
  getModel: function () {
    return $.ajax({
      url: "api/vehicle/" + make + model,
      type: "GET"
    });
  },

  deleteOne: function (id) {
    return $.ajax({
      url: "api/vehicle/" + id,
      type: "DELETE"
    });
  }
};




////////////






function popFirstItem() {

  var firstdrop = $("#makeSelect1");

  for (var i = 0; i < popularVehicle.length; i++) {

    var newSelect = $("<option></option").text(popularVehicle[i]);

    newSelect.val(popularVehicle[i]);

    newSelect.addClass("newoptions");

    newSelect.data(popularVehicle[i]);

    newSelect.onclick = popnewItems;

    firstdrop.append(newSelect);

  }

}

popFirstItem();


var popnewItems = function (event) {
  event.preventDefault();
  console.log("hi");
}


function callmake(make) {
  $.ajax({
    url: "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/" + make + "?format=json",
    success: function (result) {
      //manually set up a append option likes orginally do for each statment is needed
      console.log(result)
    }
  })
}




///////


// The API object contains methods for each kind of request we'll make


// refreshExamples gets new examples from the db and repopulates the list
var refreshData = function () {
  API.getAll().then(function (data) {
    var $newitem = data.map(function (example) {
      var $a = $("<a>")
        .text(data)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": data
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($newitem);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(newModel);
  var newVehicle = {
    vehicle: newType.val().trim(),
    make: newMake.val().trim(),
    model: newModel.val().trim(),
    price: newPrice.val(),
    description: newDescrpt.val().trim(),
    year: newYear.val()
  };
  console.log(newVehicle)

  if (!(newVehicle.vehicle && newVehicle.make && newVehicle.model)) {
    alert("Enter information");
    return;
  }

  API.saveOne(newVehicle).then(function () {
    refreshExamples();
  });
  newType.val("");
  newMake.val("");
  newModel.val("");
  newPrice.val("");
  newDescrpt.val("");
  newYear.val("");
  newDescrpt.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteOne(idToDelete).then(function () {
    refreshData();
  });
};
//ajax call to api with models, make , year

var searchDatabase = function () {
  var selectedText = $(this).find("option:selected").text();

  console.log(makeSea.text(selectedText))
  console.log(modSea.text(selectedText))
  console.log(yearSea.text(selectedText))


}
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$("body").on('click', ".newoptions", function (e) {
  console.log("hi");
});

submitSearch.on("click", searchDatabase);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
//get all content from database