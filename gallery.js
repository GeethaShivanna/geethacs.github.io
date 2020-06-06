let contentCollection = document.getElementsByClassName('column');
for (item of contentCollection) {
item.addEventListener('click', function(e) {
console.log("the source element is" + e.srcElement.id);

  getUserProfile(e.srcElement.id);
});
}

function getUserProfile(profileId) {
var containerId = document.getElementById('contain');
containerId.style.display = "none";
fetch('https://api.github.com/repos/angular/angular/contributors')
.then(response => response.json())
.then(data => {
var profileBlock = `
<div class="modal-content">
   <span class="close" id="closeBtn">&times;</span>
   <div class="intro">
      <div id="tab-container" class="tab-container">
         <ul class="w3-navbar w3-black">
            <li><a href="#" onclick="openTab('Home')">Home</a></li>
            <li><a href="#" onclick="openTab('AboutUs')">About Us</a></li>
            <li><a href="#" onclick="openTab('Products')">Products</a></li>
            <li><a href="#" onclick="openTab('ContactUs')">Contact Us</a></li>
         </ul>
         <div class="wrapper"> 
            <div id="img"> 
              <div class="imgSection" style="width:200px;height:200px;">
                <img src="Sebastian_Rottmair.jpg" alt="">
              </div>
            </div>
            <div id="content">
                <div id="Home" class="w3-container tab">
                    <div class="title-parent title-home" data-ix="fadeandmoveup" style="opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 1000ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s, transform 1000ms ease 0s;">
                        <h4>Hi, I'm Nad.</h4>
                    </div>
                    <div class="title-parent title-home" style="opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 1000ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s, transform 1000ms ease 0s;">
                        <h1>I build value through design.</h1>
                    </div>
                    <div class="title-parent title-home" style="opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 1000ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s, transform 1000ms ease 0s;">
                        <h2 class="title subtitle">I'm a British ðŸ‡¬ðŸ‡§ designer who loves building digital products.</h2>
                    </div>
                    <div class="title-parent title-home">
                        <h4><a id="load_home" href="/about" class="link" onclick="learnMore()"> Learn more </a>
                        </h4>
                    </div>
                </div>
                <div id="AboutUs" class="w3-container tab">
                    <h2>About Us</h2>
                    <p>About Content Here</p>
                </div>
                <div id="Products" class="w3-container tab">
                    <h2>Products</h2>
                    <p>Products Content Here</p>
                </div>
                <div id="ContactUs" class="w3-container tab">
                    <h2>Contact Us</h2>
                    <p>Contact Content Here</p>
                </div>
            </div>
          </div>
        </div>
      </div>
</div>
`;

document.getElementById("modal").innerHTML = profileBlock;
var tabsContainers = document.getElementsByClassName("w3-container tab");
for (tab = 0; tab < tabsContainers.length; tab++) {
  tabsContainers[tab].style.display = "none";
}
openTab("Home");
})
.catch(error => console.error(error))
}

function openTab(tabName) {
  var i;
  var tabs = document.getElementsByClassName("tab");
  for (tab = 0; tab < tabs.length; tab++) {
    tabs[tab].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function learnMore() {
  console.log("This hits jquery function");
  alert("The paragraph was clicked.");
}

/*$("a#load_home").click(function(e){ 
  console.log("ajax funtion is hitting");
  e.preventDefault();
  console.log("ajax funtion is hitting");
  alert("The paragraph was clicked.");
});*/

/*//$(document).ready(function(){
  $("#load_home").click(function(){
    console.log("This 
    hits jquery function");
   alert("The paragraph was clicked.");
  });
//});*/

/*$(function() {
  $("#load_home").click(function() {
    console.log("This hits jquery function");
    alert("The paragraph was clicked.");
  });
});*/