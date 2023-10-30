
$("#orderForm").submit(function (event) {
    const order = {
        name: $("#customerName").val(),
        product: $("#product option:selected").val()
    };
    console.log("Customer name = " + order.name);

    event.preventDefault();
    const post_url = "/messaging"; //get form action url
    const request_method = "POST"; //get form GET/POST method

    console.log(order);

    $.ajax({
        url: post_url,
        type: request_method,
        data: JSON.stringify(order),
        contentType: 'application/json',
        cache: false
    }).fail(function (err) {
        $("#order-result-message").append("<div class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span class='pficon pficon-close'></span></button><span class='pficon pficon-error-circle-o'></span><strong>Error</strong>" + err.responseText + "</div>");
        $('tbody tr:last').remove();
        $("#order-button").removeClass("disabled").removeAttr("disabled");
        console.error(err);
    });
});

$(function () {
    const source = new EventSource("/queue");
    source.onmessage = function (e) {
        if (e.data === "{}") {
            return;
        }
        const beverage = JSON.parse(e.data);
        if (beverage.preparationState === "IN_QUEUE")
            $("tbody").prepend(line(beverage));
        if (beverage.preparationState === "READY")
            $("#" + beverage.orderId).replaceWith(line(beverage));

    };
});

function line(order) {
    const id = order.orderId;
    const product = order.beverage;
    const customer = order.customer;
    let barista = "";
    if (order.preparedBy) {
        barista = order.preparedBy;
    }

    let state = order.preparationState;
    if (order.preparationState === "IN_QUEUE") {
        state = "Coffee Splash: busy barista!"
    } else if (order.preparationState === "READY") {
        state = "Ready!"
    }
    return "<tr id='" + id + "'>" +
        "<td>" + customer + "</td>" +
        "<td>" + product + "</td>" +
        "<td><image src=\"images/barista-" + barista.toLocaleLowerCase() + ".png\" />" + "</td>" +
        "<td>" + state + "</td></tr>";
}
