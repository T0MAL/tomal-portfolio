import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import ExternalLink from "@components/ExternalLink";
import { profile } from "@data/portfolio";

export default function ImageSection() {
  return (
    <aside className="profile-panel" aria-label="Profile">
      <div className="portrait-frame">
        <Image
          src="/DP.png"
          alt="Portrait of Md. Tahmid Islam Tomal"
          width={400}
          height={430}
          sizes="(max-width: 600px) 190px, (max-width: 900px) 240px, 290px"
          priority
          className="portrait"
        />
      </div>
      <div className="profile-caption">
        <span>
          <FiMapPin aria-hidden="true" />
          Dhaka, Bangladesh
        </span>
        <span className="profile-links">
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        </span>
      </div>
      <div className="phd-note">
        <span className="eyebrow">Looking ahead</span>
        <p>
          Seeking PhD opportunities in computer vision and machine learning.
        </p>
      </div>
    </aside>
  );
}
