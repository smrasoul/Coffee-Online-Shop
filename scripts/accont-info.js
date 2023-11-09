    const userAccountInformation = document.querySelector(".user-account-information");

    const editUserAccountInformation = document.querySelector(".edit-user-account-information");

    const btnSave = document.querySelector(".btn-save");
    const btnCancel = document.querySelector(".btn-cancel");

    const userAccountInfoDefault = `
        <div class="d-flex justify-content-between border-bottom border-secondary-emphasis pb-2">
            <div>اطلاعات حساب کاربری</div>
                <div class="edit-user-account-information d-flex align-items-center">
            <span><i class="bi bi-person-fill-gear profile-icon"></i></span>
            <span>ویرایش اطلاعات حساب کاربری</span>
        </div>
    </div>
    <div class="row my-5">
        <div class="col-lg-6 pe-lg-5">
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">نام:</div>
                <div class="p account-info-input">عدنان </div>
            </div>
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">تاریخ تولد:</div>
                <div class="p account-info-input">-</div>
            </div>
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">جنسیت:</div>
                <div class="p account-info-input">مرد</div>
            </div>
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">ایمیل:</div>
                <div class="p account-info-input">-</div>
            </div>
            <div class="v-stacked">
                <div class="p account-info-title">استان:</div>
                <div class="p account-info-input">گیلان</div>
            </div>
        </div>
        <div class="col-lg-6 pe-lg-5">
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">نام خانوداگی:</div>
                <div class="p account-info-input">باباخانی</div>
            </div>
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">کد ملی:</div>
                <div class="p account-info-input">۱۶۱۸۲۸۷۴۰۲</div>
            </div>
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">نام کاربری:</div>
                <div class="p account-info-input">۰۹۳۳۹۲۳۵۶۴۱</div>
            </div>
            <div class="v-stacked mb-lg-5">
                <div class="p account-info-title">شماره همراه:</div>
                <div class="p account-info-input">۰۹۳۳۹۲۳۵۶۴۱</div>
            </div>
            <div class="v-stacked">
                <div class="p account-info-title">شهر:</div>
                <div class="p account-info-input">رشت</div>
            </div>
        </div>
    </div>`

    const userAccountInfoEdit = `
    <div class="d-flex justify-content-between border-bottom border-secondary-emphasis pb-2">
                    <div>اطلاعات حساب کاربری</div>
                </div>
                <div class="row my-5">
                    <div class="col-lg-6 pe-lg-5">
                        <div class="mb-lg-5 user-info-field">
                            <label for="first-name" class="user-info-label form-label">نام:</label>
                            <input type="text" id="first-name" class="user-info-input form-control" value="عدنان">
                        </div>
                        <div class="d-flex mb-lg-5">
                            <label for="user-birth-day" class="form-label"></label>
                            <select class="form-select user-info-input" id="user-birth-day">
                                <option value="" disabled selected hidden>روز</option>
                                <option value="1">۱</option>
                                <option value="2">۲</option>
                                <option value="3">۳</option>
                            </select>
                            <label for="user-birth-month" class="form-label"></label>
                            <select class="form-select user-info-input mx-1" id="user-birth-month">
                                <option value="" disabled selected hidden>ماه</option>
                                <option value="1">فروردین</option>
                                <option value="2">اردیبهشت</option>
                                <option value="3">خرداد</option>
                            </select>
                            <label for="user-birth-year" class="form-label"></label>
                            <select class="form-select user-info-input" id="user-birth-year">
                                <option value="" disabled selected hidden>سال</option>
                                <option value="1">۱۳۰۰</option>
                                <option value="2">۱۳۰۱</option>
                                <option value="3">۱۳۰۲</option>
                            </select>
                        </div>
                        <div class="mb-lg-4 pt-lg-4 pb-lg-4">
                            <span class="user-info-radio-title">جنسیت:</span>
                            <div class="form-check form-check-reverse form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                <label class="form-check-label user-info-radio-label" for="flexRadioDefault1">
                                  مرد
                                </label>
                            </div>
                            <div class="form-check form-check-reverse form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                <label class="form-check-label user-info-radio-label" for="flexRadioDefault2">
                                  زن
                                </label>
                            </div>
                        </div>
                        <div class="mb-lg-5 user-info-field">
                            <label for="user-email" class="user-info-label form-label">ایمیل:</label>
                            <input type="text" id="user-email" class="user-info-input form-control" value="">
                        </div>
                        <div class="user-info-field">
                            <label for="user-province" class="user-info-label form-label">استان:</label>
                            <select class="form-select user-info-input" id="user-province" aria-label="Default select example">
                                <option selected>گیلان</option>
                                <option value="1">تهران</option>
                                <option value="2">مازندران</option>
                                <option value="3">گلستان</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 pe-lg-5">
                        <div class="mb-lg-5 user-info-field">
                            <label for="last-name" class="user-info-label form-label">نام خانوادگی:</label>
                            <input type="text" id="last-name" class="user-info-input form-control" value="باباخانی ">
                        </div>
                        <div class="mb-lg-5 user-info-field">
                            <label for="national-id" class="user-info-label form-label">کد ملی:</label>
                            <input dir="ltr" type="text" id="national-id" class="user-info-input form-control" value="۱۶۱۸۲۸۷۴۰۲">
                        </div>
                        <div class="mb-lg-5 user-info-field">
                            <label for="user-name" class="user-info-label form-label">نام کاربری:</label>
                            <input dir="ltr" type="text" id="user-name" class="user-info-input form-control" value="۰۹۳۳۹۲۳۵۶۴۱">
                        </div>
                        <div class="mb-lg-5 user-info-field">
                            <label for="phone-number" class="user-info-label form-label">شماره همراه:</label>
                            <input dir="ltr" type="text" id="phone-number" class="user-info-input form-control" value="۰۹۳۳۹۲۳۵۶۴۱">
                        </div>
                        <div class="mb-lg-5 user-info-field">
                            <label for="user-city" class="user-info-label form-label">شهر:</label>
                            <select class="form-select user-info-input" id="user-city" aria-label="Default select example">
                                <option selected>رشت</option>
                                <option value="1">تهران</option>
                                <option value="2">ساری</option>
                                <option value="3">گرگان</option>
                            </select>
                        </div>
                        <div dir="ltr">
                            <button type="button" class="btn btn-warning btn-save text-light py-2">ذخیره اطلاعات</button>
                            <button type="button" class="btn btn-cancel text-danger py-2">لغو ویرایش</button>
                        </div>
                    </div>
                </div>`

    editUserAccountInformation.addEventListener('click', function() {
        userAccountInformation.innerHTML = userAccountInfoEdit;
    })

    btnCancel.addEventListener('click', function(){
        userAccountInformation.innerHTML = userAccountInfoDefault;
    })

    btnSave.addEventListener('click', function(){
        userAccountInformation.innerHTML = userAccountInfoDefault;
    })
