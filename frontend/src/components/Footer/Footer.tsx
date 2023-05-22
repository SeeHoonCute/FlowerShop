import { memo } from "react";
import classes from "./styles.module.scss";
import facebookIcon from "../../assets/img/fb-icon.svg";
import lnIcon from '../../assets/img/ln-icon.svg';
import twitterIcon from '../../assets/img/twitter-icon.svg';
import youtubeIcon from '../../assets/img/youtube-icon.svg';
import { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
// import { routesOutside } from "../../routers/Routes";


interface FooterProps {

}

const Footer = memo((props: FooterProps) => {
  const { t, i18n } = useTranslation()

  const [aboutWidgetMobile, setAboutWidgetMobile] = useState<boolean>(false)
  const [contactWidgetMobile, setContactWidgetMobile] = useState<boolean>(false)

  return (
    <>
      <footer className={classes.root}>
        <div className={classes.footerWidget2}>
          <div className={classes.containerWidget2}>
            <div className={classes.leftContainer}>
              <div className={classes.aboutWidget}>
                <div className={classes.header}>
                  <p className={classes.textDescription} translation-key="footer_about_title">
                    {t('Về chúng tôi')}
                  </p>
                </div>
                <div className={classes.body}>
                  <a href="" className={classes.textLink} translation-key="footer_about_home_page">
                    {t('Giới thiệu')}
                  </a>
                  <a href="" className={classes.textLink} translation-key="footer_about_opportunities">
                    {t('Chính sách bảo mật thanh toán')}
                  </a>
                  <a href="" className={classes.textLink} translation-key="footer_about_trends">
                    {t('Điều khoản sử dụng')}
                  </a>
                  <a href="" className={classes.textLink} translation-key="footer_about_reports">
                    {t('Chính sách bảo mật thông tin cá nhân')}
                  </a>
                </div>
              </div>
              <div className={classes.contactWidget}>
                <div className={classes.header}>
                  <p className={classes.textDescription} translation-key="footer_contact_us_title">
                    {t('Hỗ trợ khách hàng')}
                  </p>
                </div>
                <div className={classes.body}>
                  <a href={`tel:+(84)2838227727`} className={classes.textLink} translation-key="footer_contact_us_phone">
                    {t('Phương thức vận chuyển ')}
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className={classes.textLink} translation-key="footer_contact_us_address">
                    {t('Các câu hỏi thường gặp')}
                  </a>
                  <a href={`mailto:ask@cimigo.com`} className={classes.textLink} translation-key="footer_contact_us_email">
                    {t('Chính sách đổi trả')}
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.rightContainer}>
              <div className={classes.contactWidget}>
              <div className={classes.header}>
                  <p className={classes.textDescription} translation-key="footer_about_title">
                  {t('SeeHoon Flower có tất cả')}
                  </p>
                </div>
                <div className={classes.body}>
                  <p className={classes.text} translation-key="footer_description">
                    {t('Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng nghìn loại mặt hàng từ Điện thoại smartphone tới Rau củ quả tươi, kèm theo dịch vụ giao hàng siêu tốc SeeHoon FlowerNOW, SeeHoon Flower mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở SeeHoon Flower bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.')}
                  </p>
                </div>
              </div>
              <div>
              <div className={classes.footerWidget1}>
                <div className={classes.containerWidget1}>
                  <div className={classes.linkSocial}>
                    <div className={classes.socialContact}>
                      <a href="https://www.facebook.com/shophoatuoihanoifamilyflower" className={classes.socialContactIcon}>
                        <img src={facebookIcon} alt="facebook logo" />
                      </a>
                      <a href="https://www.facebook.com/shophoatuoihanoifamilyflower" className={classes.socialContactIcon}>
                        <img src={lnIcon} alt="linkedin logo" />
                      </a>
                      <a href="https://www.facebook.com/shophoatuoihanoifamilyflower" className={classes.socialContactIcon}>
                        <img src={twitterIcon} alt="twitter logo" />
                      </a>
                      <a href="https://www.facebook.com/shophoatuoihanoifamilyflower" className={classes.socialContactIcon}>
                        <img src={youtubeIcon} alt="youtube logo" />
                      </a>
                    </div>
                  </div>
                </div>
        </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
})

export default Footer
