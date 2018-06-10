$(document).ready(function () {



    var data = [
        {
            "category": "fruit",
            "item": "apples",
            "type": "Honey Crisp",
            "brand": "Little cuties",
            "qty": 10
        },
        {
            "category": "beverage",
            "item": "milk",
            "type": "2%",
            "brand": "generic",
            "qty": "1 gallon"
        },
        {
            "category": "pasta",
            "item": "Pasta",
            "type": "Penne",
            "brand": "Barilla",
            "qty": 3
        },
        {
            "category": "dessert",
            "item": "Gelatin dessert",
            "type": "Green",
            "brand": "Jello",
            "qty": 3
        },
        {
            "category": "dairy",
            "item": "Yogurt",
            "type": "Assorted flavors",
            "brand": "Chobani",
            "qty": 12
        },
        {
            "category": "pasta",
            "item": "Pasta",
            "type": "Linguini",
            "brand": "Barilla",
            "qty": 3
        },
        {
            "category": "beverage",
            "item": "Apple juice",
            "type": "regular",
            "brand": "Happy Farms",
            "qty": 2
        },
        {
            "category": "beverage",
            "item": "Vodka",
            "type": "Tangerine",
            "brand": "Grey Goose",
            "qty": 1
        }
    ]


    var arr = data

    arr.forEach(function (x) {
        $('#list').append("<div class='col-sm-3'>" +
            "<div class='listContainer border-right border-dark border-bottom'>" +
            "<div>" + x.category + "</div>" +
            "<div class='type'>" + x.type + "</div>" +
            "<h4 class='item'>" + x.item + "</h4>" + "<hr/>" +
            "<div class='brand'>" + x.brand + "</div>" +
            "<div class='qty justify-content-end'> Qty/" + x.qty + "</div>" +
            "</div>" +
            "</div>"
        );

    });

});