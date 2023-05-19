import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer flexc'>
      <div>Made by Colt, Connor, and James</div>
      <div className='flexc' style={{ marginTop: '5px', width: '100%', justifyContent: 'space-between' }}>
        <div>5/19/2023</div>
        <div>
          <Link to='/about' className='link'>
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
