function hideNav() {
     //document.getElementById("").style.visibility = "hidden";
     var myobj = document.getElementById("mainNav");
         myobj.remove();
}

function getPizzas(){
    $.ajax({
        url: '/get/pizza-list/',
        type: 'GET',
        dataType: 'json',
        success: function(resp) {
            //console.log(resp);
            $('#pizzaCard').empty();   
            
            Object.keys(resp).forEach(key => {
                $('#pizzaCard').append(`<option value="${key},${resp[key].name},${resp[key].price}">${resp[key].name} - $ ${resp[key].price}.00 mx</option>`);
              });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                //location.reload();
            }
            console.log(errorThrown)

        }
    });
}

function getMeals(){
    $.ajax({
        url: '/get/meals-list/',
        type: 'GET',
        dataType: 'json',
        success: function(resp) {
            //console.log(resp);
            $('#mealsCard').empty();   
           

            Object.keys(resp).forEach(key => {
                $('#mealsCard').append(`<option value="${key},${resp[key].name},${resp[key].price}">${resp[key].name} - $ ${resp[key].price}.00 mx</option>`);
              });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                //location.reload();
            }
            console.log(errorThrown)

        }
    });
}

function getDrinks(){
    $.ajax({
        url: '/get/drinks-list/',
        type: 'GET',
        dataType: 'json',
        success: function(resp) {
            //console.log(resp);
            $('#drinksCard').empty();   
            Object.keys(resp).forEach(key => {
              $('#drinksCard').append(`<option value="${key},${resp[key].name},${resp[key].price}">${resp[key].name} - $ ${resp[key].price}.00 mx</option>`);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                //location.reload();
            }
            console.log(errorThrown)

        }
    });
}


hideNav(),getDrinks(),getPizzas(),getMeals();