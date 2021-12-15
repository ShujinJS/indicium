import "./footer.component.style.scss";

export default function FooterComponent(){

    let logos = ["https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png", "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147555239/settings_images/dW5iJNvT8SMYsXR6gmtg_BzWWXgLMTeyaPZSxpHAL_Redux_for_dummies.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png", "https://cdn-icons-png.flaticon.com/512/25/25231.png"]

    return (
           <footer>
               <div className="footer-logo-container">
                   <ul>
                       {logos.map(function(item){
                           return <img src={item} className="tech-logo"/>
                       })}
                   </ul>
               </div>
               <div className="copyright">
                   © Uğur Yıldırım 2021, ReactJS
               </div>
           </footer>
    )
}