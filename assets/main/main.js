//JavaScript using third-party libraries
  // Initialize Slick slider
  $(document).ready(function(){
      $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
      });
    });

    function addToCart(productName, productPrice) {
      alert(productName + " added to cart. Price: $" + productPrice);
  }
  