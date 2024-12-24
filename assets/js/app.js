


$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#cro-buttons').fadeIn();
        } else {
            $('#cro-buttons').fadeOut();
        }
    });
    $('#cro-buttons').click(function(){
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});




// function searchSp(){
//     let valuesearch = document.getElementById('search').value;
//      // Lấy tất cả các sản phẩm trong class 'product'
//     let products = document.querySelectorAll('.list-product .product-title');
//     let productsArray = Array.from(products);
//     let userSearch = productsArray.filter(value => {
//         return value.products.toLowerCase().includes(valuesearch.toLowerCase());
//     })
//     console.log(userSearch);

// }







const btn = document.querySelectorAll('.love-button');

btn.forEach(function (button,index) {
    // console.log(button,index); 
    button.addEventListener('click',function(event){
        // console.log(button);
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement.parentElement.parentElement;
        var productImage = product.querySelector('img').src;
        var productTitle = product.querySelector('.product-title').textContent;
        var productPrice = product.querySelector('.product-price').textContent;
        addcart(productImage,productTitle,productPrice);
    });

});

function addcart(productImage,productTitle,productPrice){
    var addtr = document.createElement('tr');
    var cartItem = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".title")
    // console.log(productT[i].innerHTML);
    if (productT[i].textContent.trim() === productTitle.trim()) {
        alert('Sản phẩm của bạn đã có trong yêu thích');
        return;
    }
}
    var trcontent = '<tr><td><a href="#"><img src="'+productImage+'" alt="Image"></a></td><td><a href="#"><span class="title"> '+productTitle+'</span></a></td><td><span class="price">'+productPrice+'</span></td><td><div class="qty"><input type="number" value="1" min="1"></div></td><td><span class ="cart-delete"><i class="fa fa-trash"></i></span></td></tr>';
    
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector('tbody');
    cartTable.append(addtr);
    carttotal();
    deleteItem();
}

// totalprice


function carttotal(){
    var cartItem = document.querySelectorAll('tbody tr');
    var totalc = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('input').value;
        // console.log(inputValue);
        var productPrice = cartItem[i].querySelector('.price').innerHTML;
        productPrice = parseFloat(productPrice.replace(/[^0-9.]/g, ''));
        // console.log(productPrice);
        totalA = inputValue*productPrice*1000000;
        // totalB = totalA
        // .toLocaleString('de-DE');
        
        totalc =totalc + totalA;
        
        // totalD = totalc.toLocaleString('de-DE');
        }
        var carttotalA = document.querySelector('.price-total span');
        carttotalA.innerHTML = totalc.toLocaleString('de-DE');
        inputChange();
    }       


// ------------------------delete-----------------------------
// function deleteItem(){
//     var cartItem = document.querySelectorAll('tbody tr');

//     for (var i = 0; i < cartItem.length; i++) {
//         var productT = document.querySelectorAll(".cart-delete");
//         productT[i].addEventListener('click',function(event){
//             var cartdelete = event.target
//             var cartItemr = cartdelete.parentElement.parentElement.parentElement
//             console.log(cartItemr);
//             cartItemr.remove();
//             carttotal();
//         });
        
    
//     }
    
//     }

function deleteItem() {
    // Lấy tất cả các hàng có chứa sản phẩm trong giỏ hàng
    var cartItems = document.querySelectorAll('tbody tr');

    cartItems.forEach(function (row) {
        // Tìm nút xóa trong hàng hiện tại
        var deleteButton = row.querySelector('.cart-delete');

        // Thêm sự kiện click cho nút xóa
        deleteButton.addEventListener('click', function (event) {
            var cartRow = event.target.closest('tr'); // Lấy hàng tương ứng
            if (cartRow) {
                cartRow.remove(); // Xóa hàng khỏi bảng
                carttotal(); // Cập nhật tổng
            }
        });
    });
}


        
        function inputChange(){
            var cartItem = document.querySelectorAll('tbody tr');
            for (var i = 0; i < cartItem.length; i++) {
                var inputValue = cartItem[i].querySelector('input');
                inputValue.addEventListener('change',function(event){
                    carttotal();
                });
            }
        }
    const cartbtn = document.querySelector('.ti-close');
    const cartshow = document.querySelector('.fa-heart');
    cartshow.addEventListener('click',function(){
        document.querySelector('.cart-page').style.right = '0'; })
    cartbtn.addEventListener('click',function(){
            document.querySelector('.cart-page').style.right = '-100%'; })



            var wrapper = document.querySelector("#about")

            console.log(wrapper)
            
            wrapper.style.height = "200px"
            
            var button = document.querySelector("#more-button")
            
            var overlay = document.querySelector("#overlay-2")
            
            var is_open = false



            button.addEventListener('click', function(){
                console.log('hihihi')
                if(is_open)
                {
                    is_open = false
                    wrapper.style.height = "200px"
                    overlay.style.display = 'block'
                } else {
                    is_open = true
                    wrapper.style.height = "300px"
                    overlay.style.display = 'none'
                }
            })
            