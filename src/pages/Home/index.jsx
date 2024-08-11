import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from '../Footer';


class Home extends React.PureComponent {
  state = {
    showShadow: false,
  };

  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner key="banner" navToShadow={this.navToShadow} />,
        <Page1 key="page1" />,
        <Page2 key="page2" />,
        <Page3 key="page3" />,
        <Page4 key="page4" />,
        <Footer key="footer" />,
        <DocumentTitle title="统一报表报送系统" key="title" />,
      ]
    );
  }
}
export default Home;
