const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-15-1.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const allCategories = (['All', ...new Set(menu.reduce((acc,category)=> [...acc, category.category], []))]);
const btnContainer = document.querySelector('.btn-container');


allCategories.forEach(category => {
  const categoryButton = document.createElement('button');
  categoryButton.classList.add('btn', 'btn-outline-dark', 'btn-item');
  categoryButton.setAttribute('id', category);
  categoryButton.textContent = category;
  btnContainer.appendChild(categoryButton);
  const menuContainer = document.querySelector('.section-center');

  
  menuContainer.innerHTML = '';
  
  menu.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
    const imgElement = document.createElement('img');
    imgElement.classList.add('photo');
    imgElement.src = item.img;
    imgElement.alt = item.title;
    menuItem.appendChild(imgElement);
    menuContainer.appendChild(menuItem);
    const menuTitle = document.createElement('div');
    const menuInfo = document.createElement('div');
    const menuText = document.createElement('div');
    menuText.classList.add('menu-text');
    menuTitle.classList.add('menu-title');
    menuInfo.classList.add('menu-info');
    const titleH4Element = document.createElement('h4');
    const priceH4Element = document.createElement('h4');
    titleH4Element.textContent = item.title;
    priceH4Element.textContent = item.price;
    priceH4Element.classList.add('price');
    menuItem.appendChild(menuInfo);
    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuText);
    menuTitle.appendChild(titleH4Element);
    menuTitle.appendChild(priceH4Element);
    menuText.textContent=item.desc;
  });


  categoryButton.addEventListener('click', function() {
    const clickedCategory = this.textContent;
    
    if(clickedCategory!="All"){
      const selectedMenuItems = menu.filter(item => item.category === clickedCategory);

      menuContainer.innerHTML = '';
  
      selectedMenuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
        const imgElement = document.createElement('img');
        imgElement.classList.add('photo');
        imgElement.src = item.img;
        imgElement.alt = item.title;
        menuItem.appendChild(imgElement);
        menuContainer.appendChild(menuItem);
        const menuTitle = document.createElement('div');
        const menuInfo = document.createElement('div');
        const menuText = document.createElement('div');
        menuText.classList.add('menu-text');
        menuTitle.classList.add('menu-title');
        menuInfo.classList.add('menu-info');
        const titleH4Element = document.createElement('h4');
        const priceH4Element = document.createElement('h4');
        titleH4Element.textContent = item.title;
        priceH4Element.textContent = item.price;
        priceH4Element.classList.add('price');
        menuItem.appendChild(menuInfo);
        menuInfo.appendChild(menuTitle);
        menuInfo.appendChild(menuText);
        menuTitle.appendChild(titleH4Element);
        menuTitle.appendChild(priceH4Element);
        menuText.textContent=item.desc;
      });
    }
    else if(clickedCategory=="All"){
      menuContainer.innerHTML = '';
  
      menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
        const imgElement = document.createElement('img');
        imgElement.classList.add('photo');
        imgElement.src = item.img;
        imgElement.alt = item.title;
        menuItem.appendChild(imgElement);
        menuContainer.appendChild(menuItem);
        const menuTitle = document.createElement('div');
        const menuInfo = document.createElement('div');
        const menuText = document.createElement('div');
        menuText.classList.add('menu-text');
        menuTitle.classList.add('menu-title');
        menuInfo.classList.add('menu-info');
        const titleH4Element = document.createElement('h4');
        const priceH4Element = document.createElement('h4');
        titleH4Element.textContent = item.title;
        priceH4Element.textContent = item.price;
        priceH4Element.classList.add('price');
        menuItem.appendChild(menuInfo);
        menuInfo.appendChild(menuTitle);
        menuInfo.appendChild(menuText);
        menuTitle.appendChild(titleH4Element);
        menuTitle.appendChild(priceH4Element);
        menuText.textContent=item.desc;
      });
    }

  });
});








