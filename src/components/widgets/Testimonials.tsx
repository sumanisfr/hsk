
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import { Timeline } from '../style/Timeline';

const data = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Horizon is live! 🚀
        </p>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </p>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="text-neutral-200 text-xs md:text-xl font-normal mb-4">
          Checked out the latest updates? 🚀
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
            ✅ New landing page
          </div>
          <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
            ✅ Completed one piece
          </div>
          <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
            ✅ Random texts lol 😂
          </div>
          <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
      </div>
    ),
  },
];

const Testimonials = ({
  header,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl text-red-500" />}
    <Timeline data={data}/>
  </WidgetWrapper>
);

export default Testimonials;
