export const config = {
    sections: ["home", "skills", "projects", "contact"],

    home: {
        title: "Hi",
        description: " Developer",
    },
    skills: [
        {
            name: "React",
            icon: "icons/react-native.png",
            level: 80,
        },
        {
            name: "JavaScript",
            icon: "icons/javascript.png",
            level: 85,
        },
        {
            name: "Three.js",
            icon: "icons/threejs.png",
            level: 70,
        },
        {
            name: "Blender",
            icon: "icons/blender-3d.png",
            level: 60,
        },
    ],

    projects: [
        {
            name: "Dissolve tutorial",
            description: "Create a dissolve effect with React Three Fiber",
            image: "projects/project1.jpg",
        },
        {
            name: "Bui ld a Portfolio",
            description: "Learn how to build a 3D portfolio with React Three Fiber",
            image: "projects/project2.jpg",
        },
        {
            name: "3D Room",
            description: "Creating a stunning 3D room with Blender and R3F",
            image: "projects/project3.jpg",
        },
        {
            name: "Interactive Scene",
            description: "Making your 3D scenes interactive and engaging",
            image: "projects/project4.jpg",
        },
    ],
    contact: {
        name: "Shafiul",
        address: "Dhaka, Bangladesh",
        socials: {
            linkedin: "https://www.linkedin.com/in/shafiul05/",
            twitter: "https://twitter.com/wawasenseimm",
        },
        mail: "contact@me.com"
    }

}