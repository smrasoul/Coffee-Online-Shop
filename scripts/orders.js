document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the main-profile-selection-div
    const mainProfileSelectionDiv = document.querySelector(".orders-selection-div");
  
    // Get references to both radio buttons
    const unsuccessfulPaymentBtn = document.querySelector(".unsuccessful-payment-btn");
    const processingOrders = document.querySelector(".processing-orders-btn");
    const shippedOrders = document.querySelector(".shipped-orders-btn");
    const canceledOrders = document.querySelector(".canceled-orders-btn");


    
  
    // Add a change event listener to the parent container of the radio buttons
    document.querySelector(".btn-group-mp").addEventListener("change", function (event) {
      if (event.target === unsuccessfulPaymentBtn && unsuccessfulPaymentBtn.checked) {
        // Handle the case where the "latest-orders-btn" is selected
        mainProfileSelectionDiv.innerHTML = `
        <div class="table-responsive-lg mt-3 mx-lg-4 px-lg-3 py-lg-2">
                        <table class="table latest-orders-text">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <div class="latest-orders-title">شماره سفارش</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">محصول</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">تاریخ</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">قیمت کل</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">وضعیت</div>
                                    </th>
                                    <th>
                
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="grass-green-btn text-light text-center rounded-3 py-1">پرداخت و ادامه سفارش 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="grass-green-btn text-light text-center rounded-3 py-1">پرداخت و ادامه سفارش 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="grass-green-btn text-light text-center rounded-3 py-1"> پرداخت و ادامه سفارش
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="grass-green-btn text-light text-center rounded-3 py-1">پرداخت و ادامه سفارش 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="grass-green-btn text-light text-center rounded-3 py-1">پرداخت و ادامه سفارش 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="grass-green-btn text-light text-center rounded-3 py-1">پرداخت و ادامه سفارش 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;
      } if (event.target === processingOrders && processingOrders.checked) {
        // Handle the case where the "latest-saved-btn" is selected
        mainProfileSelectionDiv.innerHTML = `
        <div class="table-responsive-lg mt-3 mx-lg-4 px-lg-3 py-lg-2">
                        <table class="table latest-orders-text">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <div class="latest-orders-title">شماره سفارش</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">محصول</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">تاریخ</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">قیمت کل</div>
                                    </th>
                                    <th scope="col">
                                        <div class="latest-orders-title">وضعیت</div>
                                    </th>
                                    <th>
                
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="bg-warning text-black text-center rounded-3 py-1">تحویل به پست 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="bg-warning text-black text-center rounded-3 py-1">تحویل به پست 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="bg-warning text-black text-center rounded-3 py-1"> تحویل به پست
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="bg-warning text-black text-center rounded-3 py-1">تحویل به پست 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="bg-warning text-black text-center rounded-3 py-1">تحویل به پست 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">۲۸۷۱۷۸</th>
                                    <td>
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                        <img src="./images/Rectangle-28.png" width="30px">
                                    </td>
                                    <td>۱۴۰۰/۰۶/۰۴ - ۰۱:۱۵:۴۸</td>
                                    <td>
                                        <span>۸۴۸٬۹۹۰ </span>
                                        <span>تومان</span>
                                    </td>
                                    <td>
                                        <div class="bg-warning text-black text-center rounded-3 py-1">تحویل به پست 
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;
      } if (event.target === shippedOrders && shippedOrders.checked) {
        // Handle the case where the "latest-saved-btn" is selected
        mainProfileSelectionDiv.innerHTML = `sevvomi`;
      } if (event.target === canceledOrders && canceledOrders.checked) {
        // Handle the case where the "latest-saved-btn" is selected
        mainProfileSelectionDiv.innerHTML = `charromi`;
      }
    });
  });
  