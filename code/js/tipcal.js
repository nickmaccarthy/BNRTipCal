function calculateTip(bill_amount, tip_amount) {
    return ((bill_amount * tip_amount) / 100).toFixed(2); 
}

function updateTotal(tip_percentage) {
    var bill_amount = $("#amount").val();
    var tip_amount = calculateTip(bill_amount, tip_percentage);
    var total_amount = (+bill_amount + +tip_amount).toFixed(2);
    $( "#tip_amount" ).text(tip_amount); 
    $( "#tip_percentage" ).text(tip_percentage);
    $( "#total_amount" ).text(total_amount);
    $( "#totals_div" ).removeClass('hidden'); 
    updateSplitBy();
}


function updateSplitBy() {
    var split_by = $("#split_by").val();
    var total_amount = $( "#total_amount" ).text();
    var tip_amount = $( "#tip_amount" ).text();

    $( "#per_person_tip_amt" ).text( (+tip_amount / +split_by).toFixed(2) );
    $( "#per_person_total" ).text( (+total_amount / +split_by).toFixed(2) );
    $( "#split_div" ).removeClass('hidden');
}

$(document).ready(function() {

    $( ".tip_amt" ).click(function() {
        var tip_percentage = $(this).text().replace("%", "");
        $( ".tip_amt" ).removeClass('active');
        $(this).addClass('active');
        updateTotal(tip_percentage);
    });

    $( "#amount" ).keyup(function(e) {
        var tip_percentage = $( ".active" ).text().replace("%", "");
        updateTotal(tip_percentage);
    });

    $( ".custom_amt" ).click(function() {
        $( ".set_amounts" ).toggle();
        $( "#custom_tip_amt_div" ).toggle().removeClass('hidden');
    });

    $( ".custom_tip_amt" ).keyup(function() {
        var tip_percentage = $(this).val();
        updateTotal(tip_percentage);
    });

    $( "#split_by" ).keyup(function(e){
        var tip_percentage = $( ".active" ).text().replace("%", "");
        updateTotal(tip_percentage);
        updateSplitBy();
    });

});