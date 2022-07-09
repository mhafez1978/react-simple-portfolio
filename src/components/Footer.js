const Footer = () => {
  return (
    <footer className="footer py-5" data-aos="slide-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <p id="copy" className="copyright-text text-center">
              Copyright &copy; 2022 Defacto Code . All rights reserved
            </p>
            <p id="copyright" className="copyright-text text-center">
              Built by{' '}
              <a
                id="mohamed"
                style={{ color: 'purple' }}
                referrerpolicy="no-referrer-when-downgrade"
                href="https://linkedin.com/in/mohamedhafez1978"
              >
                Mohamed Hafez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
