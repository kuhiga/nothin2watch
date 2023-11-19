import Image from 'next/image';
import { Badge } from './Badge';

type CardProps = {
  title: string;
  image: string;
  episode?: number;
  tags?: string[];
};
export const Card = ({ title, image, episode, tags }: CardProps) => {
  return (
    <div className="card w-60 max-h-60 overflow-y-auto overflow-x-hidden bg-base-100 shadow-xl image-full">
      <figure>
        <Image src={image} alt={image} width="125" height="125" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {episode && <Badge type="primary" label={`Ep. ${episode}`} />}
        </h2>
        {tags && (
          <div className="card-actions justify-end flex-col">
            {tags.map((tag, idx) => (
              <Badge key={idx} label={tag} type="outline" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
