import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewCard from "./NewCard";
import projects from "./ProjectsArray";

const CardSlider = ()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
  };

  return(
    <>
    <div className="bg-white w-[80vw] m-auto ">
    <Slider {...settings}>
    {
      projects.map((project)=>(
        <NewCard project={project}/>
      ))
    }

    </Slider>
    </div>
    </>
  )
}
export default CardSlider;
