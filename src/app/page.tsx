import PersonalCard from "./components/PersonalCard";
import MainComponent from "./components/MainComponent";


export default function App() {  

  return (
    <div className="font-[poppins]  mx-auto flex flex-col md:flex-row gap-5 w-[90%] max-w-[1200px] pt-[10px] pb-[60px] md:py-[40px]">
      <PersonalCard />                  
      <MainComponent />      
  </div>      
  
  );
}
