import React, { useEffect, useState } from 'react'
import ProjectCard, { Project, ProjectTypes } from '../ProjectCard';

const Portfolio = () => {
  const filters = ['All','Web Development','Mobile dev', 'Cloud & infrastructure']
  const [selectedFilter, setSelectedFilter] = useState('All');  

  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  
  const projects = [
    {
      title: "Makassar management",
      imagePath:"images/projects/makassar_management/orders.png",
      description: "Management SAAS for a bags business. Allows to manage clients, products, orders and their invoices.",
      technologies: ["HTML","CSS","React.js","Ktor", "MongoDB","JWT"],
      githubLink: "https://github.com/Nathanb-ecam/makassar-management-frontend.git",
      categories:[ProjectTypes.WEB]
    },
    {
      title: "AI Gallery",
      imagePath:"images/projects/AI_gallery/clusters.png",
      description: "Gallery app that stores images and allows to perform detection (humans/animals) and face clustering.",
      technologies: ["HTML","CSS","React.js","Python", "Django","PostgreSQL","yolov3","DBSCAN"],
      githubLink: "https://github.com/Nathanb-ecam/AI_smart_gallery.git",
      categories:[ProjectTypes.WEB]
    },
    {
      title: "IoT device configurator",
      imagePath:"images/projects/IoT_thesis/android_app.png",
      description: "An android app handling the configuration of IoT devices, by passing credentials through Bluetooth Low Energy.",
      technologies: ["Android Studio","Jetpack compose","BLE"],
      githubLink: "https://github.com/Nathanb-ecam/netty-mqtt-loadtester.git",
      categories:[ProjectTypes.CLOUD_AND_INFRA]    
    },
    {
      title: "IoT loadtest/monitoring",
      imagePath:"images/projects/IoT_thesis/grafana.png",
      description: "GCP deployment of the IoT infrastructure, with monitoring of services and MQTT broker. Implementation of a loadtesting microservice to simulate a fleet of devices.",
      technologies: ["GCP","GKE","Kubernetes","Prometheus", "Grafana","Kotlin","Ktor","MQTT","EMQX","Netty"],
      githubLink: "https://github.com/Nathanb-ecam/netty-mqtt-loadtester.git",
      categories:[ProjectTypes.CLOUD_AND_INFRA]    
    },
    {
      title: "Fast food order app",
      imagePath:"images/projects/android_order_app/android_restaurant.png",
      description: "An android app that allows users to place orders, by selecting menus and extras.",
      technologies: ["Android Studio","Jetpack compose","BLE","Coil"],
      githubLink: "https://github.com/Nathanb-ecam/android_restaurant_order.git",
      categories:[ProjectTypes.MOBILE, ProjectTypes.WEB]
    },
    {
      title: "IoT telemetry",
      imagePath:"images/projects/IoT_telemetry/iot_telemetry_ui.png",
      description: "An IoT monitoring solution displaying real time humidity/temperature sensors data.",
      technologies: ["MQTT", "C/C++", "Arduino","LoraWan","HTML","CSS","Node.js","Express", "socket.io","JWT"],
      githubLink: "https://github.com/Nathanb-ecam/IoT_telemetry_app.git",
      categories:[ProjectTypes.IOT]
    },
  ]

  useEffect(()=>{    
    if(selectedFilter === 'All') {
      setFilteredProjects(projects)
      return
    }

    const filter = selectedFilter as ProjectTypes;        
    const updatedProjects = projects.filter(p => p.categories.includes(filter))
    setFilteredProjects(updatedProjects);
    
  }
  ,[selectedFilter])


  return (
    <div className='text-grey-text'>
      {filters.length > 0 && 
      <ul className='flex gap-5 whitespace-nowrap overflow-scroll mb-5'>
          {filters.map((filter, index)=>(
            <li 
            key={index} 
            className={`
              hover:cursor-pointer
              text-sm
              ${selectedFilter === filter && 'text-primary'}
              `}
            onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </li>
          ))}
      </ul>}

      <div className='flex justify-center flex-wrap gap-5'>
        {filteredProjects.map((project, index)=>(
          <ProjectCard key={index} project={project}/>
        ))}
      </div>


      
    </div>
  )
}

export default Portfolio