const getLatestProject = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products?limit=1");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let cleanResponseProjects = await response.json();
      let projectContainer = document.querySelector(".main-project");
  
      projectContainer.innerHTML = '';
  
      if (cleanResponseProjects.length > 0) {
        let project = cleanResponseProjects[0];
        projectContainer.innerHTML = `
          <div class="project">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title}" />
          </div>
        `;
      }
    } catch (error) {
      console.error("Error fetching the latest project:", error);
    }
  };
  
  getLatestProject();
  

const getRecentProject = async () => {
    try {
        let response = await fetch("https://fakestoreapi.com/products?limit=3");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let cleanResponseProjects = await response.json();
        let projectContainer = document.querySelector(".projects-container");

        projectContainer.innerHTML = '';

        for (const project of cleanResponseProjects) {
            let projectInfo = `
                <div class="project">
                    <img src="${project.image}" alt="${project.title}" />
                    <h3>${project.title}</h3>
                    <p>${project.category}</p>
                    <a href="#">Learn More</a>
                </div>
            `;
            projectContainer.innerHTML += projectInfo;
        }
    } catch (errorFromCatchBlock) {
        console.error(errorFromCatchBlock);
    }
};

getRecentProject();