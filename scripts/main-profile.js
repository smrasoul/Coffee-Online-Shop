document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the main-profile-selection-div
    const mainProfileSelectionDiv = document.querySelector(".main-profile-selection-div");
  
    // Get references to both radio buttons
    const latestOrdersBtn = document.querySelector(".latest-orders-btn");
    const latestSavedBtn = document.querySelector(".latest-saved-btn");
  
    // Add a change event listener to the parent container of the radio buttons
    document.querySelector(".btn-group-mp").addEventListener("change", function (event) {
      if (event.target === latestOrdersBtn && latestOrdersBtn.checked) {
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
                                        <div class="bg-success-subtle text-success text-center rounded-3 py-1">ارسال شده
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
                                        <div class="bg-warning text-danger-emphasis text-center rounded-3 py-1">پرداخت ناموفق
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
                                        <div class="bg-warning-subtle text-primary-emphasis text-center rounded-3 py-1">در حال
                                            آماده‌سازی
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
                                        <div class="bg-success-subtle text-success text-center rounded-3 py-1">ارسال شده
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
                                        <div class="bg-success-subtle text-success text-center rounded-3 py-1">ارسال شده
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
                                        <div class="bg-success-subtle text-success text-center rounded-3 py-1">ارسال شده
                                        </div>
                                    </td>
                                    <td>
                                        <i class="bi bi-eye-fill table-eye"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;
      } else if (event.target === latestSavedBtn && latestSavedBtn.checked) {
        // Handle the case where the "latest-saved-btn" is selected
        mainProfileSelectionDiv.innerHTML = `
        <div class="card latest-saved-card m-lg-3 p-lg-3">
                        <div class="row g-0">
                            <div class="col-lg-3">
                                <img src="./images/Rectangle-28.png" class="img-fluid rounded-start">
                            </div>
                            <div class="col-lg-9">
                                <div class="card-body">
                                    <div class="card-title latest-saved-card-title d-flex justify-content-between">
                                        <span>کتاب فیزیک دوازدهم تجربی فارآزمون انتشارات فار چاپ ۱۴۰۲</span>
                                    </div>
                                    <div dir="ltr" class="card-text d-flex justify-content-start align-items-center pt-5 mt-5">
                                        <div class="latest-saved-delete px-1">
                                            <i class="bi bi-trash3 profile-icon"></i>
                                        </div>
                                        <div class="ms-lg-3">
                                            <button type="button" class="btn latest-saved-btn d-flex align-items-center">
                                                <span class="pe-2">مشاهده محصول</span>
                                                <i class="bi bi-eye-fill profile-icon"></i>
                                            </button>
                                        </div>
                                        <div class="px-3 d-flex cart-card-price">
                                            <div class="p pe-1">تومان</div>
                                            <div class="p">۱۶۹٬۵۰۰</div>
                                        </div>
                                        <div dir="rtl" class="d-flex cart-card-profit ps-3">
                                            <div class="p pe-1">سود شما از خرید:</div>
                                            <div class="p pe-1">۶۹٬۵۰۰ </div>
                                            <div class="p pe-1">تومان</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
      }
    });
  });
  