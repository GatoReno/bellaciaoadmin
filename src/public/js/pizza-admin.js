function updatePizza(key,name,description,suggestion,price){
     $('#modal-title').empty();
    $('#modal-title').append('Update Pizza');
        $('#modal-body').empty();
        var str = `
        <form action="/update/pizza" method="POST">
                   <div class="form-group">
                   <input type="hidden" class="form-control" name="key" value="${key}"  required>

                    <label class="col-form-label" for="inputDefault">Name</label>
                    <input type="text" class="form-control" name="name" placeholder="${name}" id="inputDefault" required>
                    </div>

                    <div class="form-group">
                    <label class="col-form-label col-form-label-lg" for="inputLarge">Description</label>
                    <input class="form-control form-control-lg" name="description" type="text" placeholder="${description}" id="inputLarge" required>
                    </div>

                 

                    <div class="form-group">
                    <label class="col-form-label col-form-label-sm" for="inputSmall">Suggestions</label>
                    <input class="form-control form-control-sm" name="suggestion" type="text" placeholder="${suggestion}" id="inputSmall" required>
                    </div>

                    <div class="form-group">
                    <label class="control-label">Price</label>
                    <div class="form-group">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="number" name="price" placeholder="${price}" class="form-control" aria-label="Amount (to the nearest mx)" required>
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr>
                    <input type="submit" class="btn btn-success float-right" value="Update">

                </form>
        `;
        $('#modal-body').append(str);  
 }

function deletePizza(key,name){
     $('#modal-title').empty();
    $('#modal-title').append('Delete Pizza');
        $('#modal-body').empty();
        var str = `
        <form action="/delete/pizza/${key}" method="GET">
                   <div class="form-group">
 
                    <label class="col-form-label" for="inputDefault">Are you sure that you want delete this pizza?</label>
                    <input type="text" class="form-control" name="name" value="${name}"  disabled required>
                    </div>

                    <hr>
                    <small>Yes I'm sure i want to delete it</small>
                    <input type="submit" class="btn btn-danger float-right" value="Delete">

                </form>
        `;
        $('#modal-body').append(str);  
 }

 function updateDrink(key,name,description,suggestion,price){
    $('#modal-title').empty();
   $('#modal-title').append('Update Drink');
       $('#modal-body').empty();
       var str = `
       <form action="/update/drinks" method="POST">
                  <div class="form-group">
                  <input type="hidden" class="form-control" name="key" value="${key}"  required>

                   <label class="col-form-label" for="inputDefault">Name</label>
                   <input type="text" class="form-control" name="name" placeholder="${name}" id="inputDefault" required>
                   </div>

                   <div class="form-group">
                   <label class="col-form-label col-form-label-lg" for="inputLarge">Description</label>
                   <input class="form-control form-control-lg" name="description" type="text" placeholder="${description}" id="inputLarge" required>
                   </div>

                

                   <div class="form-group">
                   <label class="col-form-label col-form-label-sm" for="inputSmall">Suggestions</label>
                   <input class="form-control form-control-sm" name="suggestion" type="text" placeholder="${suggestion}" id="inputSmall" required>
                   </div>

                   <div class="form-group">
                   <label class="control-label">Price</label>
                   <div class="form-group">
                       <div class="input-group mb-3">
                       <div class="input-group-prepend">
                           <span class="input-group-text">$</span>
                       </div>
                       <input type="number" name="price" placeholder="${price}" class="form-control" aria-label="Amount (to the nearest mx)" required>
                       <div class="input-group-append">
                           <span class="input-group-text">.00</span>
                       </div>
                       </div>
                   </div>
                   </div>
                   <hr>
                   <input type="submit" class="btn btn-success float-right" value="Update">

               </form>
       `;
       $('#modal-body').append(str);  
}

function deleteDrink(key,name){
    $('#modal-title').empty();
   $('#modal-title').append('Delete Drink');
       $('#modal-body').empty();
       var str = `
       <form action="/delete/drinks/${key}" method="GET">
                  <div class="form-group">

                   <label class="col-form-label" for="inputDefault">Are you sure that you want delete this pizza?</label>
                   <input type="text" class="form-control" name="name" value="${name}"  disabled required>
                   </div>

                   <hr>
                   <small>Yes I'm sure i want to delete it</small>
                   <input type="submit" class="btn btn-danger float-right" value="Delete">

               </form>
       `;
       $('#modal-body').append(str);  
}

function AddToTable(key,atwhom){
    $('#modal-title').empty();
    $('#modal-title').append(`${atwhom} Table's` );
    $('#modal-body').empty();

    var str = `
            <div>
            <small>Add order</small>
            <table id="orderTable" class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="addToTableDiv">
                   
                </tbody>
                </table> 
                </div>
                <a  class="" onclick="clearAddToBill()">Clear order</a>
                <a class="btn btn-sm btn-primary float-right" onclick="addToBill('${key}')">Add order</a>
                <br>
            <hr>
            <button class="btn btn-primary" type="button" 
            data-toggle="collapse" data-target="#collapsePizza" aria-expanded="false" aria-controls="collapseExample">
            Add Pizza
            </button>
                <br>
                <div class="collapse" id="collapsePizza">
                    <div class="form-group">
                                <hr>
                            <select class="custom-select" id="selectPizzas">
                            </select>
                            <hr>
                            <button class="btn btn-primary float-right" onclick="return addPizzaToBill('${key}')">Add</button>
                        </div>
                        <br>
                </div>
                <br>
                    <button class="btn btn-primary" type="button" 
                    data-toggle="collapse" data-target="#collapseMeals" aria-expanded="false" aria-controls="collapseExample">
                        Add Meals
                    </button>
                    <br>
                    <div class="collapse" id="collapseMeals">
                        <div class="form-group">
                            
                            <hr>
                            <select class="custom-select" id="selectMeals">
                            </select><hr>
                                <button class="btn btn-primary float-right" onclick="return addMealToBill('${key}')">Add</button>

                        </div>
                    </div>
                    <br>
                    <button class="btn btn-primary" type="button" 
                    data-toggle="collapse" data-target="#collapseDrinks" aria-expanded="false" aria-controls="collapseExample">
                        Add Drinks
                    </button>
                    <br>
                <div class="collapse" id="collapseDrinks"> 
                    <div class="form-group">
                            <hr>
                        <select class="custom-select" id="selectDrinks">            
                        </select><hr>
                            <button class="btn btn-primary float-right" onclick="return addDrinkToBill('${key}')">Add</button>

                    </div>  
            </div>
            <br>  

    `;

    $('#modal-body').append(str);
    getPizzas(),getDrinks(),getMeals(),getCurrentBill(key);

}
function getPizzas(){
    $.ajax({
        url: '/get/pizza-list/',
        type: 'GET',
        dataType: 'json',
        success: function(resp) {
            //console.log(resp);
            $('#selectPizzas').empty();   
            
            Object.keys(resp).forEach(key => {
                $('#selectPizzas').append(`<option value="${key},${resp[key].name},${resp[key].price}">${resp[key].name} - $ ${resp[key].price}.00 mx</option>`);
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
            $('#selectMeals').empty();   
           

            Object.keys(resp).forEach(key => {
                $('#selectMeals').append(`<option value="${key},${resp[key].name},${resp[key].price}">${resp[key].name} - $ ${resp[key].price}.00 mx</option>`);
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
            $('#selectDrinks').empty();   
            Object.keys(resp).forEach(key => {
              $('#selectDrinks').append(`<option value="${key},${resp[key].name},${resp[key].price}">${resp[key].name} - $ ${resp[key].price}.00 mx</option>`);
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
function addPizzaToBill(key){

    var tableKey = key;
    
    var sel = document.getElementById('selectPizzas');
    console.log(tableKey)
    console.log( sel.value );
    var arrayN = sel.value.split(',');
    var str = `
    <tr class="table-light">
    
        <td class="d-none">${arrayN[0]}</td>
        <td>${arrayN[1]}</td>
        <td>$ ${arrayN[2]} .00 </td>
        <td>
        <input type="button" class="btn btn-sm btn-danger float-right" value="x" onclick="deleteRow(this)"/>
        </td>
    </tr>
    `;
    $('#addToTableDiv').append(str);
}

function addDrinkToBill(key){

    var tableKey = key;
    
    var sel = document.getElementById('selectDrinks');
    console.log(tableKey)
    console.log( sel.value );
    var arrayN = sel.value.split(',');
    var str = `
    <tr class="table-light">
    
        <td class="d-none">${arrayN[0]}</td>
        <td>${arrayN[1]}</td>
        <td>$ ${arrayN[2]} .00 </td>
        <td>
        <input type="button" class="btn btn-sm btn-danger float-right" value="x" onclick="deleteRow(this)"/>
        </td>
    </tr>
    `;
    $('#addToTableDiv').append(str);
}

function addMealToBill(key){

    var tableKey = key;
    
    var sel = document.getElementById('selectMeals');
    console.log(tableKey)
    console.log( sel.value );
    var arrayN = sel.value.split(',');
    var str = `
    <tr class="table-light">
    
        <td class="d-none">${arrayN[0]}</td>
        <td>${arrayN[1]}</td>
        <td>$ ${arrayN[2]} .00 </td>
        <td>
        <input type="button" class="btn btn-sm btn-danger float-right" value="x" onclick="deleteRow(this)"/>
        </td>
    </tr>
    `;
    $('#addToTableDiv').append(str);
}

function clearAddToBill(){
    $('#addToTableDiv').empty();
}

function addToBill(key){
    
    var rowCount = $('#addToTableDiv tr').length;
     if(rowCount == 0){
        alert("Not orders to add")
    }else{

            var bill = [];
            $("#addToTableDiv tr").each(function() {
                bill.push(this.innerText);
            });
        
            var data = {key,bill}
            console.log(bill);
            console.log(data)
            $.ajax({
            url: '/tableAddOrder',
            type: 'POST',
            data: data,            
            success: function(resp) {
                console.log(resp);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var data = jqXHR.responseJSON;
                if (jqXHR.status == 401) {
                    //location.reload();
                }
                console.log(errorThrown)
            } 
            });  

            $('#myModal').modal('toggle');
    }
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }


 
function prepraCancelBill(key){

    $('#modal-title').empty();
    $('#modal-title').append(`Why do you cancel bill ?` );
    $('#modal-body').empty();

    var str = `
    <form action="/tableCanceled" method="POST" >
            <p>Please add why are canceling this bill</p>
            <hr>
            <div class="form-group">
                <input type="hidden" name="key" value="${key}"/>
                <label for="exampleTextarea">Example textarea</label>
                <textarea class="form-control" name="reason" id="exampleTextarea" rows="3" required ></textarea>
            </div>

            <input class="btn btn-sm btn-danger float-right" type="submit" value="Cancel"/>
            </form>
            `;
    $('#modal-body').append(str);
}

function cancelBill(key,reason){

}
function prepareBillModal(key,name){
    $('#modal-title').empty();
    $('#modal-title').append(`${name} Bill ` );
    $('#modal-body').empty();

    var str = `
            <div>
            <small>Table's bill</small>
            <table id="orderTable" class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="addToTableDiv">
                   
                </tbody>
                </table> 
                </div>
            <hr>
            <label class="control-label">Total</label>
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input type="number" disabled id="totalBill"class="form-control" aria-label="Amount (to the nearest dollar)">
                <div class="input-group-append">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
                <br>
            <hr>
        
            <a class="btn btn-sm btn-primary float-right" onclick="payBill('${key}')">Pay Bill</a>
            <a class="btn btn-sm btn-danger float-right" onclick="prepraCancelBill('${key}')">Cancel</a>

            <br>  

    `;

    $('#modal-body').append(str);

    getCurrentBill(key);
}
function getCurrentBill(key){
    $.ajax({
        url: '/getTable/'+key,
        type: 'GET',
        dataType: 'json',
        success: function(resp) {
            console.log(resp);
            $('#addToTableDiv').empty();  
            var fullBill = resp.bill;
            console.log(fullBill);
            for(index in fullBill){
                var obj= fullBill[index];
                var arrayN = obj.split('$');
                var str = `
                <tr class="table-light">
                
                    <td class="d-none"></td>
                    <td>${arrayN[0]}</td>
                    <td class="amountClass"> $ ${arrayN[1]} </td>
                    <td>
                    <input type="button" class="btn btn-sm btn-danger float-right" value="x" onclick="deleteRow(this)"/>
                    </td>
                </tr>
                `;
                $('#addToTableDiv').append(str);
               
               }
               amountTotal();
            //
            //$('#addToTableDiv').append();
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


function amountTotal(){
    var sum = 0;
    $('.amountClass').each(function(){
        var textNoDollarSign = $(this).text();
        textNoDollarSign = textNoDollarSign.replace('$', '');
        //alert(textNoDollarSign);
     sum += parseFloat(textNoDollarSign);
    });
    $('#totalBill').val(sum);
}

function payBill(){
    
}