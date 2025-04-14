import {
    SiPython,
    //SiJava,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiAngular,
    SiDjango,
    SiSpringboot,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiKubernetes,
    SiPostman,
  } from 'react-icons/si';

  const techIcons = [
    <SiPython key={1} color="#3776AB" size={36} />,
    <SiHtml5 key={2} color="#E34F26" size={36} />,
    <SiCss3 key={3} color="#1572B6" size={36} />,
    <SiJavascript key={4} color="#F7DF1E" size={36} />,
    <SiReact key={5} color="#61DAFB" size={36} />,
    <SiAngular key={6} color="#DD0031" size={36} />,
    <SiDjango key={7} color="#092E20" size={36} />,
    <SiSpringboot key={8} color="#6DB33F" size={36} />,
    <SiMysql key={9} color="#4479A1" size={36} />,
    <SiMongodb key={10} color="#47A248" size={36} />,
    <SiDocker key={11} color="#2496ED" size={36} />,
    <SiKubernetes key={12} color="#326CE5" size={36} />,
    <SiPostman key={13} color="#FF6C37" size={36} />,
  ];
  
  
  const TechLoop = () => {
    return (
      <div className="w-full overflow-hidden py-4">
        <div className="animate-scroll flex gap-10">
          {techIcons.map((icon, idx) => (
            <div
              key={idx}
              className="text-3xl text-white inline-block hover:scale-110 transition-transform"
            >
              {icon}
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {techIcons.map((icon, idx) => (
            <div
              key={`dupe-${idx}`}
              className="text-3xl text-white inline-block hover:scale-110 transition-transform"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TechLoop;
  