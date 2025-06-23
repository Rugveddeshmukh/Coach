
 import AlmostFullBanner from './componets/AlmostFullBanner';
 import CoachIntroSection from './componets/CoachIntroSection';
 import CourseSlider from './componets/CourseSlider';
 import FaqAccordion from './componets/FaqAccordion';
 //import FreeMasterclass from './componets/FreeMasterclass';
 import ProfitSection from './componets/ProfitSection';
 import ReviewSlider from './componets/ReviewSlider';
 import TestimonialSlider from './componets/TestimonialSlider';
 import TopStudents from './componets/TopStudents';
 import WorkshopLearnSection from './componets/WorkshopLearnSection';
 import WorkshopPoints from './componets/WorkshopPoints';
 import Demo from './componets/Demo';

function App() {
  return (
    <div className="App">
      {/* <FreeMasterclass/> */}
      <Demo/>
      <TopStudents/>
      <CourseSlider/>
      <WorkshopPoints/>
      <WorkshopLearnSection/>
      <ProfitSection/>
      <CoachIntroSection/>
      <TestimonialSlider/>
      <ReviewSlider/>
      <FaqAccordion/>
      <AlmostFullBanner/> 
      
    </div>
  );
}

export default App;
