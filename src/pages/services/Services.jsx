import "./services.css";
import CustomCardContainer from "./rendered/CustomCardContainer";
import CardContainer from './CardContainer'
import Parallex from '../../Components/parallex/Parallex'

const Services = () => {
  return (
    <>
     <Parallex page='Services' details='🚀 Elevate your digital presence with Brainstorm IT Solutions! Experience innovative Web3-powered software, web, and app development, ensuring unmatched security and global impact. Our future-ready solutions, crafted collaboratively, embrace the latest blockchain technology, propelling your success. Join us in shaping the future seamlessly and securely! 🌐✨' />
     <CardContainer />
     <CustomCardContainer />
    </>
  );
}

export default Services;
