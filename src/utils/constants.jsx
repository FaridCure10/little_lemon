import Logo from '../assets/img/logo.png';
import LogoDesk from '../assets/img/logo_deskt.png';
import LogoFooter from '../assets/img/logo_footer.png';

export const LogoF = {
    mobile: Logo,
    desk: LogoDesk
}

export const FooterLogo = LogoFooter;

export const menuFilters = ['All', 'Starters', 'Salads', 'Specialty'];

export const listMenu = [
    {title:'Lobster Bisque', price: 5.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Starters'},
    {title:'Bread Barrel', price: 6.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Specialty'},
    {title:'Crab Cake', price: 7.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Starters'},
    {title:'Caesar Selections', price: 8.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Salads'},
    {title:'Tuscan Grilled', price: 9.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Specialty'},
    {title:'Mozzarella Stick', price: 10.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Starters'},
    {title:'Greek Salad', price: 11.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Salads'},
    {title:'Spinach Salad', price: 12.95, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing', tags:'Salads'},
];

export const listTestimonials = [
    {
        img:'https://mighty.tools/mockmind-api/content/human/49.jpg',
        feedback:'Maecenas lobortis et odio in sollicitudin. Morbi sed lectus et dolor venenatis pharetra ut in velit.', 
        name:'Sarah Connor',
        profession:'Entrepreneur'
    },
    {
        img:'https://mighty.tools/mockmind-api/content/human/42.jpg',
        feedback:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut porttitor velit. Praesent massa nisi.', 
        name:'Saul Goodman',
        profession:'Ceo & Founder'
    },
    {
        img:'https://mighty.tools/mockmind-api/content/human/68.jpg',
        feedback:'Pellentesque at convallis nunc. Aliquam sed odio ut enim mollis elementum et id augue. Nulla mollis mauris vel erat.', 
        name:'Nataly Larson',
        profession:'Designer'
    },
    {
        img:'https://mighty.tools/mockmind-api/content/human/7.jpg',
        feedback:'Commodo eu ornare a, bibendum id erat. Fusce porta arcu quis turpis varius venenatis volutpat tincidunt ac sit amet risus.', 
        name:'Matt Brandon',
        profession:'Freelancer'
    }
]