import React from 'react'
import "../style.css";
export default function taxcode() {
  return (
    <div>
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss330 css-qixh7c"><div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2"><a class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeStart MuiIconButton-sizeMedium css-7vbamj" tabindex="0" href="/add-contact"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg><span class="MuiTouchRipple-root css-w0pj6f"></span></a><h6 class="MuiTypography-root MuiTypography-h6 jss331 css-1anx036">Thêm mã số thuế</h6></div></header>
      <div class="MuiContainer-root MuiContainer-maxWidthSm css-1m6pqln"><div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-direction-xs-column css-su6uu9"><div class="MuiGrid-root MuiGrid-item css-1wxaqej"><div><p class="MuiTypography-root MuiTypography-body1 css-9l3uo3" style="font-size: 19px; margin-bottom: 5px;">Mã số thuế của tôi là</p><p class="MuiTypography-root MuiTypography-body1 css-9l3uo3" style="font-size: 15px; color: rgb(120, 120, 120);">Mã số thuế sẽ được hiển thị trên trang cá nhân</p></div></div><div class="MuiGrid-root MuiGrid-item css-1wxaqej"><form autocomplete="off"><div class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye" style="margin-bottom: 20px;"><div class="MuiGrid-root MuiGrid-container jss332 css-1b1jvye"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-kxu0dz"><div class="jss333">Chọn loại mã số thuế</div><input class="jss334" name="name" readonly="" value=""/></div><div class="MuiGrid-root MuiGrid-item css-1wxaqej" style="margin-right: 10px;"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></div></div></div><div class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye" style="margin-bottom: 20px;"><div class="jss335" style="opacity: 1;"><div class="jss336">Mã số thuế</div><input name="content" class="jss337"/></div></div><button class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root jss338 css-1qelgoy" tabindex="0" type="submit">Lưu<span class="MuiTouchRipple-root css-w0pj6f"></span></button></form></div></div></div>
    </div>
  )
}
