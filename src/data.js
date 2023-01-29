import { GiHairStrands, GiCurledLeaf } from 'react-icons/gi';
import {
  AiOutlineBgColors,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaPaintBrush, FaTiktok } from 'react-icons/fa';
import hairImg from './images/hair.jpg';
import colorImg from './images/color.jpg';
import curlyImg from './images/curly.jpg';
import nailImg from './images/nail.jpg';

export const serviceList = [
  {
    id: 1,
    name: 'hair services',
    icon: <GiHairStrands />,
    duration: '15-60',
    price: '40-75',
    img: hairImg,
    lists: [
      'blow dry',
      'blow dry with curling or flat iron',
      'hari cut with blow dry',
      'mans hair cut',
      'formal hair design',
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta necessitatibus repellat incidunt velit cumque recusandae ea quam. Velit, nostrum laudantium in sed sunt maxime voluptate obcaecati neque assumenda magnam aspernatur fuga ut ea nobis laboriosam, consequuntur autem optio pariatur?',
  },
  {
    id: 2,
    name: 'hair colour',
    icon: <AiOutlineBgColors />,
    duration: '60-120',
    price: '65-100',
    img: colorImg,
    lists: [
      'basic tint',
      'organic color',
      'full highlights',
      'partial highlights',
      'gloss',
      'conditioning treatment',
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta necessitatibus repellat incidunt velit cumque recusandae ea quam. Velit, nostrum laudantium in sed sunt maxime voluptate obcaecati neque assumenda magnam aspernatur fuga ut ea nobis laboriosam, consequuntur autem optio pariatur?',
  },
  {
    id: 3,
    name: 'texurizing',
    icon: <GiCurledLeaf />,
    duration: '120-180',
    price: '75-100',
    img: curlyImg,
    lists: ['perms', 'relaxers'],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta necessitatibus repellat incidunt velit cumque recusandae ea quam. Velit, nostrum laudantium in sed sunt maxime voluptate obcaecati neque assumenda magnam aspernatur fuga ut ea nobis laboriosam, consequuntur autem optio pariatur?',
  },
  {
    id: 4,
    name: 'nail services',
    icon: <FaPaintBrush />,
    duration: '45-75',
    price: '20-50',
    img: nailImg,
    lists: [
      'manicures',
      'acrylic full set',
      'acrylic fill',
      'pink and white full set',
      'pink and white fill',
      'pedicures',
      'polish change',
      'gel polish',
    ],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta necessitatibus repellat incidunt velit cumque recusandae ea quam. Velit, nostrum laudantium in sed sunt maxime voluptate obcaecati neque assumenda magnam aspernatur fuga ut ea nobis laboriosam, consequuntur autem optio pariatur?',
  },
];

export const socialList = [
  { id: 1, icon: <AiOutlineTwitter />, href: 'https://twitter.com/home' },
  { id: 2, icon: <AiOutlineInstagram />, href: 'https://twitter.com/home' },
  { id: 3, icon: <FaTiktok />, href: 'https://twitter.com/home' },
];
