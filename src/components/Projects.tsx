import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Terminal, X, Calendar, Tag } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  date: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  link?: string;
  paper?: string;
}

const projects: Project[] = [
  {
    title: 'ISAAC Sim (Pick and Place)',
    category: 'Simulation',
    date: 'Nov 2024',
    description: 'Developed a digital twin of the National Robotarium environment for precise pick-and-place operations.',
    longDescription: 'Developed a simple pick-and-place application in Isaac Sim, creating a digital twin of the National Robotarium environment using ROS2, MoveIt2, and xArm5. This project involved simulating precise object manipulation within a realistic virtual replica, showcasing the potential of digital twins for robotics research and real-world scenario testing. This experience highlighted the effectiveness of Isaac Sim and ROS2 in developing advanced robotic workflows.',
    image: 'project_Images/1_isaac_sim_pick_and_place.png',
    tags: ['ISAAC Sim', 'ROS2', 'MoveIt2', 'Digital Twin'],
    link: 'https://www.linkedin.com/posts/adip-das1998_isaacsim-ros2-moveit2-activity-7262481724666732544-jXcA',
  },
  {
    title: 'Upper Body Exoskeleton',
    category: 'Hardware / Research',
    date: 'Oct 2024',
    description: 'MSc Dissertation project focusing on an occupational upper-limb exoskeleton for workplace safety.',
    longDescription: "For my Master's dissertation at the University of Bristol, I researched and developed an occupational upper-limb exoskeleton aimed at improving human-robot interaction and enhancing workplace safety. The project focused on designing a wearable robotic device that assists workers in performing physically demanding tasks, such as lifting or holding heavy objects, to reduce muscle strain and prevent injuries.",
    image: 'project_Images/2_upper_body_exoskeleton.png',
    tags: ['Robotics', 'Hardware', 'HRI', 'Exoskeleton'],
    github: 'https://github.com/adipdas11/UOB_UWE_DIssertation',
    paper: 'https://ieeexplore.ieee.org/document/10719697',
  },
  {
    title: 'Autonomous Cooking System',
    category: 'Robotics',
    date: 'Jan 2023',
    description: 'A hands-free cooking solution prototype integrating robotics and automation.',
    longDescription: 'At GI Healthcare, I developed an Autonomous Cooking Machine prototype, combining robotics and automation to create a hands-free cooking solution. This project involved designing and programming the machine for precise ingredient handling, cooking processes, and user control through a custom-built web interface.',
    image: 'project_Images/3_autonomous_cooking_system.png',
    tags: ['ROS', 'Python', 'Automation', 'Web Interface'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7026715403502374913',
  },
  {
    title: 'ROS2 & Nav2 - Custom SLAM',
    category: 'Robotics',
    date: 'Dec 2022',
    description: 'Implemented ROS2 and Nav2 on a custom-designed robot for autonomous navigation.',
    longDescription: 'Implemented ROS2 and Nav2 on a custom-designed robot modeled in Fusion360, enabling autonomous navigation and mapping capabilities. This project involved integrating ROS2 for robust communication and control, along with Nav2 for navigation planning and obstacle avoidance, bringing the robot’s virtual design into functional, autonomous operation.',
    image: 'project_Images/4_ros2_nav2_custom_slam.png',
    tags: ['ROS2', 'Nav2', 'SLAM', 'Fusion360'],
    link: 'https://youtu.be/gnflMtxcEiA',
  },
  {
    title: 'ROS & Moveit - Hand Gesture',
    category: 'Computer Vision',
    date: 'Aug 2022',
    description: 'Real-time gesture-based control of a simulated robot hand using MediaPipe.',
    longDescription: 'Developed a hand gesture recognition system using MediaPipe to capture hand landmarks and control a simulated robot hand via ROS and MoveIt. This project enabled real-time gesture-based control, translating human hand movements into robotic actions, showcasing intuitive human-robot interaction through vision-based control systems.',
    image: 'project_Images/5_ros_moveit_hand_gesture.png',
    tags: ['MediaPipe', 'ROS', 'MoveIt', 'Computer Vision'],
    link: 'https://www.linkedin.com/posts/adip-das1998_rviz-ros-moveit-activity-6960919492231094272-6bV-',
  },
  {
    title: 'ROS & Champ - Quadruped',
    category: 'Robotics',
    date: 'Jul 2022',
    description: 'Custom quadruped robot design and locomotion control using CHAMP.',
    longDescription: 'Designed a custom quadruped robot in Fusion 360 and implemented control using the CHAMP package. This project involved creating a 3D model tailored for stability and movement efficiency, then integrating CHAMP for locomotion control, allowing the quadruped to walk, trot, and navigate autonomously.',
    image: 'project_Images/6_ros_champ_quadruped.png',
    tags: ['ROS', 'CHAMP', 'Fusion360', 'Locomotion'],
    link: 'https://www.linkedin.com/posts/adip-das1998_champassistant-fusion360-cad-activity-6959161713204056064-lXqP',
  },
  {
    title: 'ROS - Spot Control',
    category: 'Simulation',
    date: 'Jul 2022',
    description: 'Explored Boston Dynamics Spot capabilities in simulation.',
    longDescription: 'Utilized the Boston Dynamics Spot package in simulation to explore advanced robotic capabilities, including autonomous navigation, terrain adaptability, and payload management. This project involved configuring and controlling Spot’s simulated model, enabling realistic testing of its mobility and interaction capabilities.',
    image: 'project_Images/7_ros_spot_control.png',
    tags: ['ROS', 'Spot', 'Simulation', 'Navigation'],
    link: 'https://www.linkedin.com/posts/adip-das1998_ros-robot-robotics-activity-6959160926402961408--XU4',
  },
  {
    title: 'YOLO V3 - Object Detection',
    category: 'Computer Vision',
    date: 'Jul 2022',
    description: 'Real-time object detection using deep learning.',
    longDescription: 'Implemented object detection using YOLOv3, a real-time deep-learning model known for its speed and accuracy. The project involved training the model on custom datasets to detect specific objects, achieving precise localization and classification in complex environments.',
    image: 'project_Images/8_yolo_v3_object_detection.png',
    tags: ['YOLOv3', 'Python', 'Deep Learning', 'OpenCV'],
    link: 'https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-imagerecognition-activity-6955208296177782784-rIY_',
  },
  {
    title: 'Human Pose Detection',
    category: 'Computer Vision',
    date: 'Jul 2022',
    description: 'Real-time body landmark tracking for movement analysis.',
    longDescription: 'Created a human pose detection system to identify and track body landmarks in real-time, utilizing advanced machine learning models to capture key points such as joints and limbs. This project enabled precise analysis of human movement.',
    image: 'project_Images/9_human_pose_detection.png',
    tags: ['MediaPipe', 'Python', 'OpenCV', 'Pose Estimation'],
    link: 'https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-pythob-activity-6954395029217894400-8MO_',
  },
  {
    title: 'Facial Landmark Detection',
    category: 'Computer Vision',
    date: 'Jul 2022',
    description: 'Real-time facial feature analysis using MediaPipe.',
    longDescription: 'Developed a facial landmark detection system using MediaPipe, leveraging its real-time capability to identify key facial points with high accuracy. The project captured and analyzed facial features such as eyes, nose, and mouth.',
    image: 'project_Images/10_facial_landmark_detection.png',
    tags: ['MediaPipe', 'Python', 'OpenCV', 'Face Mesh'],
    link: 'https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-python-activity-6954662460171632640-o7Vt',
  },
  {
    title: 'PCB Design in Fusion360',
    category: 'Hardware',
    date: 'Jul 2022',
    description: 'Custom PCB layout and 3D visualization in Fusion 360.',
    longDescription: 'Learned PCB design and developed custom component libraries in Fusion 360, creating detailed 3D CAD models for PCB layouts. This project enhanced my skills in electronic design and 3D modelling.',
    image: 'project_Images/11_pcb_design_in_fusion360.png',
    tags: ['Fusion360', 'PCB Design', 'Electronics', 'CAD'],
    link: 'https://www.linkedin.com/posts/adip-das1998_3d-pcbdesign-fusion360-activity-6953326273737752577-aDDq',
  },
  {
    title: 'Hand Landmark Detection',
    category: 'Computer Vision',
    date: 'Jul 2022',
    description: 'Real-time tracking of fingertip and joint positions.',
    longDescription: 'Developed a hand landmark detection system using MediaPipe, capturing and tracking key hand points in real-time. This project accurately identified fingertip and joint positions.',
    image: 'project_Images/12_hand_landmark_detection.png',
    tags: ['MediaPipe', 'Python', 'OpenCV', 'Hand Tracking'],
    link: 'https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-python-activity-6953686952009175040-FYRE',
  },
  {
    title: 'ROS & SLAM - Custom AMR',
    category: 'Robotics',
    date: 'May 2022',
    description: 'Autonomous path planning and mapping for a custom mobile robot.',
    longDescription: 'Developed a custom Autonomous Mobile Robot (AMR) and implemented the ROS Navigation stack to enable autonomous path planning, obstacle avoidance, and mapping capabilities. This project involved configuring localization, path planning, and sensor integration.',
    image: 'project_Images/13_ros_slam_custom_amr.png',
    tags: ['ROS', 'SLAM', 'Navigation', 'AMR'],
    link: 'https://www.linkedin.com/posts/adip-das1998_ros-robotics-robots-activity-6929059536905334784-0RQk',
  },
  {
    title: 'ROS & Moveit - 3DOF Custom Arm',
    category: 'Robotics',
    date: 'May 2022',
    description: 'Motion planning and control for a custom 3DOF robotic arm.',
    longDescription: 'During my internship at Fortrax Robotics, I developed and controlled a custom 3DOF robotic arm using MoveIt. This project involved configuring motion planning, kinematics, and precise control, enabling the arm to perform accurate pick-and-place tasks.',
    image: 'project_Images/14_ros_moveit_3dof_custom_arm.png',
    tags: ['ROS', 'MoveIt', 'Kinematics', 'Robotic Arm'],
    link: 'https://www.linkedin.com/posts/adip-das1998_moveit-ros-robotics-activity-6929060141933699072-cxQ4',
  },
  {
    title: 'ROS & SLAM - Waiter Robot',
    category: 'Robotics',
    date: 'Apr 2022',
    description: 'Simulated autonomous waiter robot for serving tasks.',
    longDescription: 'During my internship at RigBetel Labs, I developed a simulated Autonomous Waiter Robot designed for serving tasks in a virtual environment. The project involved end-to-end development, including robot design, navigation stack implementation, and environment simulation using Gazebo.',
    image: 'project_Images/15_ros_slam_waiter_robot.png',
    tags: ['ROS', 'SLAM', 'Gazebo', 'Simulation'],
    link: 'https://youtu.be/TvBqObRVKyw',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">03. Portfolio</h2>
          <h3 className="text-4xl font-bold tracking-tight">Technical Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group relative glass rounded-2xl overflow-hidden border-white/5 hover:border-brand-primary/30 transition-all duration-500 cursor-pointer bg-gradient-to-br from-white/[0.03] to-transparent"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent opacity-60" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-brand-primary text-[10px] font-bold font-mono uppercase tracking-widest border border-brand-primary/50 shadow-xl">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{project.title}</h4>
                  <span className="text-[10px] font-mono text-neutral-500 mt-1">{project.date}</span>
                </div>
                <p className="text-neutral-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-neutral-500 uppercase tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-brand-primary uppercase tracking-tighter">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expansion Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-bg-dark/90 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl glass rounded-3xl overflow-hidden border-white/10 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 text-brand-primary mb-2">
                      <Tag className="w-4 h-4" />
                      <span className="text-xs font-mono uppercase tracking-widest">{selectedProject.category}</span>
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h4>

                    <div className="flex items-center gap-2 text-neutral-500 text-sm font-mono mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.date}</span>
                    </div>

                    <p className="text-neutral-300 leading-relaxed mb-8 flex-grow">
                      {selectedProject.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-neutral-400 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10"
                        >
                          <Github className="w-5 h-5" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Project</span>
                        </a>
                      )}
                      {selectedProject.paper && (
                        <a
                          href={selectedProject.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-secondary text-white rounded-xl font-bold hover:opacity-90 transition-all"
                        >
                          <Terminal className="w-5 h-5" />
                          <span>Read Paper</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
