import React from 'react';
import NavigationBar from '../Components/CommonComponents/Navbar';
import Footer from '../Components/CommonComponents/Footer';
import InsuranceBenefits from '../Components/HomeComponents/Card';
import HealthInsure from '../Components/HomeComponents/Benifit';
import Milestones from '../Components/HomeComponents/count';
import PlansSection from '../Components/HomeComponents/plans';
import TopSwiper from '../Components/HomeComponents/Slides';
import InsuranceVideos from '../Components/HomeComponents/Link';
import LatestArticles from '../Components/HomeComponents/Articles';

import About from '../Components/HomeComponents/Logo';
import FounderSection from '../Components/CommonComponents/Founder';

const Home = () => {
  return (
    <>
      
      <About/>
      <InsuranceBenefits/>
      <TopSwiper/>
       <LatestArticles/>
      <Milestones/>
       
      <PlansSection/>
      
      <InsuranceVideos/>
     
      <HealthInsure/>
      <FounderSection/>
      <Footer />
    </>
  );
};

export default Home;
