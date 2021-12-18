const mileStoneData = JSON.parse(data1).data;
function loadMilestones() {
    const milestones = document.querySelector(".milestones");
    milestones.innerHTML = mileStoneData.map(function (milestone) {
        return `<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div>
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
        ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
        }).join("")}
          
        </div>
      </div>`;
    }).join("");
}

loadMilestones();
