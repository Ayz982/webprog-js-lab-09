import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as p}from"./assets/vendor-CgTBfC_f.js";const e=[{preview:"https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_640.jpg",original:"https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg",description:"Zhangjiajie National Forest Park, China"},{preview:"https://cdn.pixabay.com/photo/2019/12/21/19/03/wehraschlucht-4711122_640.jpg",original:"https://cdn.pixabay.com/photo/2019/12/21/19/03/wehraschlucht-4711122_1280.jpg",description:"Black Forest, Germany"},{preview:"https://cdn.pixabay.com/photo/2016/11/21/16/59/yosemite-national-park-1846463_640.jpg",original:"https://cdn.pixabay.com/photo/2016/11/21/16/59/yosemite-national-park-1846463_1280.jpg",description:"Yosemite National Park"},{preview:"https://cdn.pixabay.com/photo/2016/11/26/12/00/kyoto-1860521_640.jpg",original:"https://cdn.pixabay.com/photo/2016/11/26/12/00/kyoto-1860521_1280.jpg",description:"Arashiyama Bamboo Grove"},{preview:"https://cdn.pixabay.com/photo/2017/08/14/11/40/jiuzhaigou-2640192_640.jpg",original:"https://cdn.pixabay.com/photo/2017/08/14/11/40/jiuzhaigou-2640192_1280.jpg",description:"Jiuzhaigou National Park"},{preview:"https://cdn.pixabay.com/photo/2016/04/15/13/30/fassa-valley-1331004_640.jpg",original:"https://cdn.pixabay.com/photo/2016/04/15/13/30/fassa-valley-1331004_1280.jpg",description:"Fassa Valley, Trentino"},{preview:"https://cdn.pixabay.com/photo/2015/12/06/20/21/walking-1079940_640.jpg",original:"https://cdn.pixabay.com/photo/2015/12/06/20/21/walking-1079940_1280.jpg",description:"Muir Forest, California"},{preview:"https://cdn.pixabay.com/photo/2018/10/13/15/10/mountain-3744352_640.jpg",original:"https://cdn.pixabay.com/photo/2018/10/13/15/10/mountain-3744352_1280.jpg",description:"Mount Rainier National Park, Washington"},{preview:"https://cdn.pixabay.com/photo/2016/09/14/15/56/usa-1669714_640.jpg",original:"https://cdn.pixabay.com/photo/2016/09/14/15/56/usa-1669714_1280.jpg",description:"Humboldt Redwoods State Park"}],n={gallery:document.querySelector(".gallery")};function r(a){return a.map(({preview:o,original:i,description:t})=>`<li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img class="gallery-image" src="${o}" alt="${t}" />
            </a>
          </li>`).join("")}n.gallery.innerHTML=r(e);new p(".gallery-item a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
