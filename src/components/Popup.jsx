// import React from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

const Popup = ({ product, count }) => {
  MySwal.fire({
    title: "Item added to your cart",
    html: `
    <div class="cart-popup">
      <div style="display: flex; gap: 5px">
        <img src="${product.imgURL}" alt="${product.title}">
        <div class="item-info">
          <h4>${product.title}</h4>
          <p>Size: ${product.size}</p>
          <p>No of Items: ${count}</p>
        </div>
      </div>
      <a href="/cart" class="viewCartBtn">View cart </a>
      <a href="/checkout" class="popUpCheckoutBtn">Check out</a>
      <a href="/product/1" class="popUpContinueShopping">Continue Shopping</a>
    </div>
  `,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: null,
    // timerProgressBar: true,
    allowOutsideClick: true,
    customClass: {
      popup: "swal2-toast",
    },
    background: "#fff",
    // icon: "success",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

export default Popup;
