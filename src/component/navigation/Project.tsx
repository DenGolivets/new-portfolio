import Image from "next/image";
import Tag from "../../static/Tag";

const Project = ({ headline, image, text, tags, link }: 
{ headline: string, image: string, text: string, tags: string[], link: string }) => {
  return (
    <a href={link} aria-label={text} target="_blank">
      <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg aspect-square max-w-96 max-h-96 m-3 text-white">
          <div className="rounded-t-lg w-fit h-fit overflow-hidden">
            <Image 
              src={image}
              alt={text}
              width={100}
              height={100}
              className="object-contain max-h-full w-full"
            />
          </div>
          <div className="p-4">
          <div className="text-xl font-medium mb-4">
            {headline}
          </div>
          <div className="h-16">
            <p>
              {text}
            </p>
          </div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
              {tags.map((item, index) =>
                  <li key={index} className="mr-1.5 mt-2">
                    <Tag title={item} />
                  </li>
              )}
          </ul>
          </div>
      </div>
    </a>
  );
}

export default Project;