import akshatThen from "@/assets/akshat-then.jpg";
import akshatNow from "@/assets/akshat-transformation-after.webp";
import "./TransformationPhotos.css";

interface TransformationPhotosProps {
  beforeCaption?: string;
  afterCaption?: string;
}

const TransformationPhotos = ({
  beforeCaption = "Me, on my 27th birthday.",
  afterCaption = "Me, a little further along.",
}: TransformationPhotosProps) => (
  <div className="founder-photo-pair" data-reveal="">
    <figure className="founder-photo">
      <img
        src={akshatThen}
        alt="Akshat on his 27th birthday, before his transformation"
        width="900"
        height="1200"
      />
      <figcaption>{beforeCaption}</figcaption>
    </figure>
    <aside className="founder-milestone" aria-label="My weight-loss transformation">
      <strong>~40 kg</strong>
      <span>lost</span>
      <svg className="founder-milestone-arrow" viewBox="0 0 40 14" aria-hidden="true">
        <path
          d="M2 7h34m-6-5 6 5-6 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </aside>
    <figure className="founder-photo">
      <img
        src={akshatNow}
        alt="Akshat in a black vest after his transformation"
        width="1086"
        height="1448"
      />
      <figcaption>{afterCaption}</figcaption>
    </figure>
  </div>
);

export default TransformationPhotos;
