import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import TextPressure from '../style/TextPressure';
import FlowingMenu from '../style/FlowingMenu';
import GlitchText from '../style/GlitchText';
import ScrollReveal from '../style/ScrollReveal';
import GlassMenu from '../style/GlassMenu';

const demoItems = [
  { link: '#', text: 'Maze hunt', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Ludo', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Bubble shoot', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

const techItems = [
  { link: '#', text: 'Hackathon', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Blind code', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Ideathon', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'CTF', image: 'https://picsum.photos/600/400?random=4' }
];

const menuItems = [
  {
    number: 1,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  {
    number: 2,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  {
    number: 3,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  // ... more items
];

const Features = ({ id, header, items, columns = 3, hasBackground = false }: FeaturesProps) => (

  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="scroll-mt-16 max-w-6xl">
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl text-red-300" />}
    <TextPressure
    text="Fun!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

  <GlassMenu 
      items={menuItems}
    />

  <TextPressure
    text="Tech!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

<GlassMenu 
      items={menuItems}
    />

  <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={50}
  textClassName='text-red-300 text-center'
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>

  </WidgetWrapper>
);

export default Features;
