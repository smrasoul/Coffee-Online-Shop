const userAccountInformation = document.querySelector(".user-account-information");
const editUserAccountInformation = document.querySelector(".edit-user-account-information");
const btnSave = document.querySelector(".btn-save");
const btnCancel = document.querySelector(".btn-cancel");

editUserAccountInformation.addEventListener('click', function() {
    updateAccountInformation(true);
});

btnCancel.addEventListener('click', function(){
    updateAccountInformation(false);
});

btnSave.addEventListener('click', function(){
    updateAccountInformation(false);
});

function updateAccountInformation(isEditing) {
    const content = isEditing
        ? `
            <div class="d-flex justify-content-between border-bottom border-secondary-emphasis pb-2">
                <div>اطلاعات حساب کاربری</div>
                <div dir="ltr">
                    <div class="btn btn-warning btn-save text-light py-2">ذخیره اطلاعات</div>
                    <div class="btn btn-cancel text-danger py-2">لغو ویرایش</div>
                </div>
            </div>`
        : `
            <div class="d-flex justify-content-between border-bottom border-secondary-emphasis pb-2">
                <div>اطلاعات حساب کاربری</div>
                <div class="edit-user-account-information d-flex align-items-center">
                    <span><i class="bi bi-person-fill-gear profile-icon"></i></span>
                    <span>ویرایش اطلاعات حساب کاربری</span>
                </div>
            </div>`;

    userAccountInformation.innerHTML = content;
}
